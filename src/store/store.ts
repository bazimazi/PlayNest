import { useSyncExternalStore } from 'react';
import { AID_REGIONS, type AidRegion } from '../data/packs';
import { isLanguage } from '../i18n';
import {
  STATE_VERSION,
  type AppState,
  type BedsideTone,
  type Child,
  type Climate,
  type FirstEntry,
  type MilestoneAnswer,
  type Moment,
  type Routine,
  type Session,
  type Settings,
  type StoryRead,
  type Theme,
  type WeekPlan,
} from './model';

export const STORAGE_KEY = 'playnest:state';
/** A save we couldn't read is kept here, never overwritten, so it can still be rescued. */
export const DAMAGED_PREFIX = `${STORAGE_KEY}:damaged:`;
/** The data as it was just before a restore, so a restore can be undone. */
export const BEFORE_RESTORE_KEY = `${STORAGE_KEY}:before-restore`;

/** localStorage holds about 5 MiB per site. Warn well before that, while there is still room to act. */
export const NEAR_LIMIT_CHARS = 3 * 1024 * 1024;
/** Writing the whole state is too slow for every tap, so changes are gathered and written shortly after. */
const WRITE_DELAY_MS = 300;

export function defaultSettings(): Settings {
  return {
    language: null,
    theme: 'system',
    onboarded: false,
    country: null,
    climate: null,
    aidRegion: null,
    emergencyNumber: null,
    celebrations: [],
    bedside: false,
    bedsideTone: 'red',
    soundLevel: 0,
    motion: 'auto',
    lastBackupAt: null,
    lastBackupRecords: 0,
    backupSnoozeUntil: null,
  };
}

export function emptyState(): AppState {
  return {
    version: STATE_VERSION,
    children: [],
    activeChildId: null,
    sessions: [],
    moments: [],
    favorites: [],
    milestones: {},
    plans: {},
    routines: [],
    firsts: [],
    storyReads: [],
    savedStories: [],
    savedSongs: [],
    settings: defaultSettings(),
  };
}

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
const arr = <T>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);
const str = (v: unknown): string | null => (typeof v === 'string' && v ? v : null);
const strings = (v: unknown): string[] => arr<unknown>(v).filter((x): x is string => typeof x === 'string');

function migrateSettings(raw: unknown, hasChildren: boolean): Settings {
  const s = isObj(raw) ? raw : {};
  const climates: Climate[] = ['temperate-north', 'temperate-south', 'tropical', 'none'];
  const tones: BedsideTone[] = ['red', 'amber'];
  const records = Number(s.lastBackupRecords);
  return {
    language: isLanguage(s.language) ? s.language : null,
    theme: s.theme === 'light' || s.theme === 'dark' ? s.theme : 'system',
    onboarded: s.onboarded === true || hasChildren,
    country: typeof s.country === 'string' && /^[A-Z]{2}$/.test(s.country) ? s.country : null,
    climate: climates.includes(s.climate as Climate) ? (s.climate as Climate) : null,
    aidRegion: typeof s.aidRegion === 'string' && s.aidRegion in AID_REGIONS ? (s.aidRegion as AidRegion) : null,
    emergencyNumber: str(s.emergencyNumber),
    celebrations: strings(s.celebrations),
    bedside: s.bedside === true,
    bedsideTone: tones.includes(s.bedsideTone as BedsideTone) ? (s.bedsideTone as BedsideTone) : 'red',
    soundLevel: s.soundLevel === 1 || s.soundLevel === 2 ? s.soundLevel : 0,
    motion: s.motion === 'less' ? 'less' : 'auto',
    lastBackupAt: str(s.lastBackupAt),
    lastBackupRecords: Number.isFinite(records) && records > 0 ? records : 0,
    backupSnoozeUntil: str(s.backupSnoozeUntil),
  };
}

/**
 * Turns anything read from storage (or an imported backup) into a valid current-version state.
 * Unknown/missing fields fall back to defaults so a partial or older file never crashes the app.
 *
 * v1 → v2 → v3 need no special step: each only adds fields, and every one defaults here.
 */
export function migrate(raw: unknown): AppState {
  const base = emptyState();
  if (!isObj(raw)) return base;

  const seenChildren = new Set<string>();
  const children = arr<Child>(raw.children).filter((c) => {
    if (!isObj(c) || typeof c.id !== 'string' || typeof c.name !== 'string' || !c.name.trim()) return false;
    if (typeof c.birthDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(c.birthDate) || Number.isNaN(Date.parse(c.birthDate))) return false;
    if (seenChildren.has(c.id)) return false;
    seenChildren.add(c.id);
    return true;
  }).map((c) => ({
    id: c.id,
    name: c.name,
    birthDate: c.birthDate,
    weeksEarly: Number.isFinite(c.weeksEarly) ? Math.max(0, Math.min(20, Math.round(c.weeksEarly))) : 0,
    emoji: typeof c.emoji === 'string' && c.emoji ? c.emoji : '🐣',
    color: typeof c.color === 'string' && c.color ? c.color : 'peach',
    interests: strings(c.interests),
  }));
  const childIds = new Set(children.map((c) => c.id));

  const { version: _version, ...unknownFields } = raw;
  return {
    ...(unknownFields as object),
    version: STATE_VERSION,
    children,
    activeChildId:
      typeof raw.activeChildId === 'string' && childIds.has(raw.activeChildId) ? raw.activeChildId : children[0]?.id ?? null,
    sessions: arr<Session>(raw.sessions).filter(
      (s) => isObj(s) && typeof s.id === 'string' && typeof s.activityId === 'string' && typeof s.date === 'string',
    ),
    moments: arr<Moment>(raw.moments).filter((m) => isObj(m) && typeof m.id === 'string' && typeof m.text === 'string'),
    favorites: strings(raw.favorites),
    milestones: isObj(raw.milestones) ? (raw.milestones as AppState['milestones']) : {},
    plans: Object.fromEntries(
      Object.entries(isObj(raw.plans) ? (raw.plans as Record<string, unknown>) : {}).filter(
        ([, p]) => isObj(p) && Array.isArray(p.items) && typeof p.weekStart === 'string',
      ),
    ) as AppState['plans'],
    routines: arr<Routine>(raw.routines)
      .filter((r) => isObj(r) && typeof r.id === 'string' && typeof r.childId === 'string' && typeof r.name === 'string' && Array.isArray(r.steps))
      .map((r) => ({ ...r, emoji: typeof r.emoji === 'string' ? r.emoji : '🗓️', steps: r.steps.filter((s) => isObj(s) && typeof s.id === 'string' && typeof s.label === 'string') })),
    firsts: arr<FirstEntry>(raw.firsts).filter(
      (f) => isObj(f) && typeof f.id === 'string' && typeof f.childId === 'string' && typeof f.title === 'string' && typeof f.date === 'string',
    ),
    storyReads: arr<StoryRead>(raw.storyReads).filter(
      (r) => isObj(r) && typeof r.id === 'string' && typeof r.childId === 'string' && typeof r.storyId === 'string',
    ),
    savedStories: strings(raw.savedStories),
    savedSongs: strings(raw.savedSongs),
    settings: migrateSettings(raw.settings, children.length > 0),
  };
}

/** True when a parsed file really is a PlayNest backup (or a saved state), so restoring it can't blank the app. */
export function isBackup(raw: unknown): boolean {
  const data = isObj(raw) && isObj(raw.state) ? raw.state : raw;
  return isObj(data) && Array.isArray(data.children) && Array.isArray(data.sessions);
}

// ---------- storage health ----------

export interface StorageHealth {
  /** The last save didn't reach storage. Changes are safe only while the app stays open. */
  saveFailed: boolean;
  /** The saved data is getting close to what this browser allows. */
  nearLimit: boolean;
  /** A save couldn't be read when the app opened; this is the key a copy of it was kept under. */
  damagedKey: string | null;
}

let health: StorageHealth = { saveFailed: false, nearLimit: false, damagedKey: null };
const healthListeners = new Set<() => void>();

function setHealth(patch: Partial<StorageHealth>) {
  const next = { ...health, ...patch };
  if (next.saveFailed === health.saveFailed && next.nearLimit === health.nearLimit && next.damagedKey === health.damagedKey) return;
  health = next;
  healthListeners.forEach((l) => l());
}

export function useStorageHealth(): StorageHealth {
  return useSyncExternalStore(
    (l) => {
      healthListeners.add(l);
      return () => healthListeners.delete(l);
    },
    () => health,
    () => health,
  );
}

/**
 * Reads the saved state. Anything unreadable is copied aside first: an empty state would otherwise overwrite the only
 * copy of a family's data on the next save.
 */
export function readStored(
  storage: Pick<Storage, 'getItem' | 'setItem'> | undefined,
  now = Date.now(),
): { state: AppState; damagedKey: string | null; copyKept: boolean } {
  let text: string | null = null;
  try {
    text = storage?.getItem(STORAGE_KEY) ?? null;
  } catch {
    return { state: emptyState(), damagedKey: null, copyKept: true };
  }
  if (!text) return { state: emptyState(), damagedKey: null, copyKept: true };
  try {
    const parsed: unknown = JSON.parse(text);
    if (isObj(parsed)) return { state: migrate(parsed), damagedKey: null, copyKept: true };
  } catch {
    /* handled below */
  }
  // The same damaged text keeps one copy, however many times the app opens before anything is saved.
  const single = `${DAMAGED_PREFIX}copy`;
  try {
    const existing = storage?.getItem(single) ?? null;
    if (existing === text) return { state: emptyState(), damagedKey: single, copyKept: true };
    const key = existing === null ? single : `${DAMAGED_PREFIX}${now}`;
    storage?.setItem(key, text);
    return { state: emptyState(), damagedKey: key, copyKept: true };
  } catch {
    // No room to copy it. The original stays where it is, and nothing may be written over it.
    return { state: emptyState(), damagedKey: STORAGE_KEY, copyKept: false };
  }
}

/** localStorage itself can throw when a browser blocks site data. */
function safeStorage(): Storage | undefined {
  try {
    return globalThis.localStorage;
  } catch {
    return undefined;
  }
}

/** Set when a damaged save could not be copied: writing would destroy the only copy. */
let holdWrites = false;

function load(): AppState {
  const storage = safeStorage();
  const { state: loaded, damagedKey, copyKept } = readStored(storage);
  if (damagedKey) health = { ...health, damagedKey };
  if (!copyKept) {
    holdWrites = true;
    health = { ...health, saveFailed: true };
  }
  // Undo after a restore only lasts as long as its toast, so an old safety copy has no use after a restart.
  try {
    storage?.removeItem(BEFORE_RESTORE_KEY);
  } catch {
    /* nothing to tidy */
  }
  return loaded;
}

/** The parent has their copy of an unreadable save, so normal saving can carry on. */
export function releaseDamagedSave() {
  holdWrites = false;
  setHealth({ damagedKey: null, saveFailed: false });
  persist();
}

/** Copies of unreadable saves kept on this phone, for rescuing later from Settings. */
export function damagedCopies(): string[] {
  const storage = safeStorage();
  if (!storage) return [];
  try {
    return Object.keys(storage).filter((k) => k.startsWith(DAMAGED_PREFIX));
  } catch {
    return [];
  }
}

export function removeDamagedCopy(key: string) {
  try {
    safeStorage()?.removeItem(key);
  } catch {
    /* nothing to remove */
  }
}

let state: AppState = load();
const listeners = new Set<() => void>();
let writeTimer: ReturnType<typeof setTimeout> | null = null;
let dirty = false;
/** Changes not yet written. If another tab saves first, they're applied on top of its version rather than lost. */
let pending: ((s: AppState) => AppState)[] = [];

function writeNow() {
  if (writeTimer !== null) {
    clearTimeout(writeTimer);
    writeTimer = null;
  }
  if (!dirty || holdWrites) return;
  const storage = safeStorage();
  if (!storage) {
    dirty = false;
    pending = [];
    // No storage at all (blocked by the browser), which is different from running in a test.
    if (typeof window !== 'undefined') setHealth({ saveFailed: true });
    return;
  }
  const text = JSON.stringify(state);
  try {
    storage.setItem(STORAGE_KEY, text);
    dirty = false;
    pending = [];
    setHealth({ saveFailed: false, nearLimit: text.length >= NEAR_LIMIT_CHARS });
  } catch {
    // Storage full or blocked (private mode). Keep working in memory, and say so: losing data quietly is the one thing
    // this app must never do.
    setHealth({ saveFailed: true });
  }
}

/** Writes any pending change straight away. Runs whenever the page might be about to go away. */
export function flushState() {
  writeNow();
}

function persist() {
  dirty = true;
  if (writeTimer === null) writeTimer = setTimeout(writeNow, WRITE_DELAY_MS);
}

function setState(update: (s: AppState) => AppState) {
  state = update(state);
  pending.push(update);
  persist();
  listeners.forEach((l) => l());
}

if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', flushState);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushState();
  });
  // Another tab saved: take its version, so this tab can't overwrite it with older data. Anything changed here but not
  // yet written goes back on top. A tab still running an older version writes less than this one knows about, so its
  // save is ignored and this tab's fuller data goes back.
  const takeOtherTab = (text: string) => {
    try {
      const incoming: unknown = JSON.parse(text);
      if (!isObj(incoming)) return;
      if (typeof incoming.version === 'number' && incoming.version < STATE_VERSION) {
        persist();
        return;
      }
      state = pending.reduce((s, update) => update(s), migrate(incoming));
      listeners.forEach((l) => l());
    } catch {
      /* the other tab's problem: keep what we have */
    }
  };
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY && e.newValue) takeOtherTab(e.newValue);
  });
  // A page restored from the back/forward cache missed any saves made while it was away.
  window.addEventListener('pageshow', (e) => {
    if (!e.persisted) return;
    const text = safeStorage()?.getItem(STORAGE_KEY);
    if (text) takeOtherTab(text);
  });
}

export function getState(): AppState {
  return state;
}

/** Everything a parent has recorded. Used to decide whether a new backup would have anything new in it. */
export function recordCount(s: AppState): number {
  const answers = Object.values(s.milestones).reduce((n, m) => n + Object.keys(m ?? {}).length, 0);
  return s.children.length + s.sessions.length + s.moments.length + s.firsts.length + s.storyReads.length + s.routines.length + answers;
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useStore<T>(selector: (s: AppState) => T): T {
  return useSyncExternalStore(subscribe, () => selector(state), () => selector(state));
}

export function newId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

// ---------- actions ----------

export const actions = {
  addChild(child: Omit<Child, 'id'>): string {
    const id = newId();
    setState((s) => ({
      ...s,
      children: [...s.children, { ...child, id }],
      activeChildId: id,
      settings: { ...s.settings, onboarded: true },
    }));
    return id;
  },

  updateChild(id: string, patch: Partial<Omit<Child, 'id'>>) {
    setState((s) => ({ ...s, children: s.children.map((c) => (c.id === id ? { ...c, ...patch } : c)) }));
  },

  removeChild(id: string) {
    setState((s) => {
      const children = s.children.filter((c) => c.id !== id);
      const { [id]: _m, ...milestones } = s.milestones;
      const { [id]: _p, ...plans } = s.plans;
      return {
        ...s,
        children,
        activeChildId: s.activeChildId === id ? children[0]?.id ?? null : s.activeChildId,
        sessions: s.sessions.filter((x) => x.childId !== id),
        moments: s.moments.filter((x) => x.childId !== id),
        routines: s.routines.filter((x) => x.childId !== id),
        firsts: s.firsts.filter((x) => x.childId !== id),
        storyReads: s.storyReads.filter((x) => x.childId !== id),
        milestones,
        plans,
      };
    });
  },

  setActiveChild(id: string) {
    setState((s) => ({ ...s, activeChildId: id }));
  },

  finishOnboarding() {
    setState((s) => ({ ...s, settings: { ...s.settings, onboarded: true } }));
  },

  logSession(session: Omit<Session, 'id'>): string {
    const id = newId();
    setState((s) => ({ ...s, sessions: [...s.sessions, { ...session, id }] }));
    return id;
  },

  updateSession(id: string, patch: Partial<Omit<Session, 'id'>>) {
    setState((s) => ({ ...s, sessions: s.sessions.map((x) => (x.id === id ? { ...x, ...patch } : x)) }));
  },

  deleteSession(id: string) {
    setState((s) => ({ ...s, sessions: s.sessions.filter((x) => x.id !== id) }));
  },

  /** Puts back a deleted session exactly as it was (for Undo). */
  restoreSession(session: Session) {
    setState((s) => (s.sessions.some((x) => x.id === session.id) ? s : { ...s, sessions: [...s.sessions, session] }));
  },

  /** Puts back a deleted moment exactly as it was (for Undo). */
  restoreMoment(moment: Moment) {
    setState((s) => (s.moments.some((x) => x.id === moment.id) ? s : { ...s, moments: [...s.moments, moment] }));
  },

  addMoment(childId: string, text: string) {
    setState((s) => ({ ...s, moments: [...s.moments, { id: newId(), childId, text, date: new Date().toISOString() }] }));
  },

  deleteMoment(id: string) {
    setState((s) => ({ ...s, moments: s.moments.filter((m) => m.id !== id) }));
  },

  toggleFavorite(activityId: string) {
    setState((s) => ({
      ...s,
      favorites: s.favorites.includes(activityId)
        ? s.favorites.filter((f) => f !== activityId)
        : [...s.favorites, activityId],
    }));
  },

  setMilestone(childId: string, milestoneId: string, answer: MilestoneAnswer | null) {
    setState((s) => {
      const current = { ...(s.milestones[childId] ?? {}) };
      if (answer) current[milestoneId] = answer;
      else delete current[milestoneId];
      return { ...s, milestones: { ...s.milestones, [childId]: current } };
    });
  },

  setPlan(childId: string, plan: WeekPlan) {
    setState((s) => ({ ...s, plans: { ...s.plans, [childId]: plan } }));
  },

  togglePlanItem(childId: string, index: number) {
    setState((s) => {
      const plan = s.plans[childId];
      if (!plan) return s;
      const items = plan.items.map((it, i) => (i === index ? { ...it, done: !it.done } : it));
      return { ...s, plans: { ...s.plans, [childId]: { ...plan, items } } };
    });
  },

  setTheme(theme: Theme) {
    setState((s) => ({ ...s, settings: { ...s.settings, theme } }));
  },

  setSettings(patch: Partial<Settings>) {
    setState((s) => ({ ...s, settings: { ...s.settings, ...patch } }));
  },

  /** A copy of the data has reached the parent. Remembers how much was in it, so the next nudge has a reason. */
  markBackedUp() {
    setState((s) => ({
      ...s,
      settings: {
        ...s.settings,
        lastBackupAt: new Date().toISOString(),
        lastBackupRecords: recordCount(s),
        backupSnoozeUntil: null,
      },
    }));
  },

  snoozeBackup(days = 14) {
    const until = new Date();
    until.setDate(until.getDate() + days);
    setState((s) => ({ ...s, settings: { ...s.settings, backupSnoozeUntil: until.toISOString() } }));
  },

  addRoutine(routine: Omit<Routine, 'id'>): string {
    const id = newId();
    setState((s) => ({ ...s, routines: [...s.routines, { ...routine, id }] }));
    return id;
  },

  updateRoutine(id: string, patch: Partial<Omit<Routine, 'id'>>) {
    setState((s) => ({ ...s, routines: s.routines.map((r) => (r.id === id ? { ...r, ...patch } : r)) }));
  },

  deleteRoutine(id: string) {
    setState((s) => ({ ...s, routines: s.routines.filter((r) => r.id !== id) }));
  },

  restoreRoutine(routine: Routine) {
    setState((s) => (s.routines.some((r) => r.id === routine.id) ? s : { ...s, routines: [...s.routines, routine] }));
  },

  addFirst(first: Omit<FirstEntry, 'id'>): string {
    const id = newId();
    setState((s) => ({ ...s, firsts: [...s.firsts, { ...first, id }] }));
    return id;
  },

  deleteFirst(id: string) {
    setState((s) => ({ ...s, firsts: s.firsts.filter((f) => f.id !== id) }));
  },

  restoreFirst(first: FirstEntry) {
    setState((s) => (s.firsts.some((f) => f.id === first.id) ? s : { ...s, firsts: [...s.firsts, first] }));
  },

  logStoryRead(childId: string, storyId: string) {
    setState((s) => ({
      ...s,
      storyReads: [...s.storyReads, { id: newId(), childId, storyId, date: new Date().toISOString() }],
    }));
  },

  toggleSavedStory(id: string) {
    setState((s) => ({
      ...s,
      savedStories: s.savedStories.includes(id) ? s.savedStories.filter((x) => x !== id) : [...s.savedStories, id],
    }));
  },

  toggleSavedSong(id: string) {
    setState((s) => ({
      ...s,
      savedSongs: s.savedSongs.includes(id) ? s.savedSongs.filter((x) => x !== id) : [...s.savedSongs, id],
    }));
  },

  /**
   * Replaces everything with a backup, keeping what was there so the restore itself can be undone.
   * Returns false, changing nothing, when the file isn't a PlayNest backup.
   */
  importState(raw: unknown): boolean {
    if (!isBackup(raw)) return false;
    const storage = safeStorage();
    try {
      // An older copy must never be the one Undo brings back.
      storage?.removeItem(BEFORE_RESTORE_KEY);
      storage?.setItem(BEFORE_RESTORE_KEY, JSON.stringify(state));
    } catch {
      /* no room for the safety copy: Undo simply won't be offered */
    }
    const data = isObj(raw) && isObj(raw.state) ? raw.state : raw;
    // The language belongs to this phone, not the backup: it needs a reload to change, and nobody asked for one.
    setState((s) => {
      const restored = migrate(data);
      return { ...restored, settings: { ...restored.settings, language: s.settings.language } };
    });
    flushState();
    return true;
  },

  /** Puts back what was there before the last restore. */
  undoImport(): boolean {
    try {
      const storage = safeStorage();
      const text = storage?.getItem(BEFORE_RESTORE_KEY);
      if (!text) return false;
      setState(() => migrate(JSON.parse(text)));
      flushState();
      storage?.removeItem(BEFORE_RESTORE_KEY);
      return true;
    } catch {
      return false;
    }
  },

  /** Erase means erase, including the safety copies. */
  resetAll() {
    // Erasing the family's data shouldn't also change the language they read the app in.
    setState((s) => {
      const empty = emptyState();
      return { ...empty, settings: { ...empty.settings, language: s.settings.language } };
    });
    flushState();
    const storage = safeStorage();
    try {
      if (storage) for (const k of Object.keys(storage)) if (k === BEFORE_RESTORE_KEY || k.startsWith(DAMAGED_PREFIX)) storage.removeItem(k);
    } catch {
      /* nothing more can be done */
    }
    setHealth({ damagedKey: null });
  },
};

export function exportState(): string {
  flushState();
  return JSON.stringify({ app: 'playnest', exportedAt: new Date().toISOString(), state }, null, 2);
}

/** The raw text of a save we couldn't read, so the parent can keep it. Null when there is nothing to rescue. */
export function damagedCopy(key: string): string | null {
  try {
    return safeStorage()?.getItem(key) ?? null;
  } catch {
    return null;
  }
}

/** Whether a restore can still be undone. */
export function canUndoImport(): boolean {
  try {
    return !!safeStorage()?.getItem(BEFORE_RESTORE_KEY);
  } catch {
    return false;
  }
}

// ---------- selectors ----------

export const selectActiveChild = (s: AppState): Child | null =>
  s.children.find((c) => c.id === s.activeChildId) ?? s.children[0] ?? null;
