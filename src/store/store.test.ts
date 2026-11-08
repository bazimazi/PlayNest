import { describe, expect, it } from 'vitest';
import { DAMAGED_PREFIX, STORAGE_KEY, emptyState, isBackup, migrate, readStored, recordCount } from './store';
import { STATE_VERSION } from './model';

/** A stand-in for localStorage. `full` makes every write fail, as a full or blocked store does. */
function fakeStorage(initial: Record<string, string> = {}, full = false) {
  const data = new Map(Object.entries(initial));
  return {
    data,
    getItem: (k: string) => data.get(k) ?? null,
    setItem: (k: string, v: string) => {
      if (full) throw new Error('QuotaExceededError');
      data.set(k, v);
    },
  };
}

describe('migrate', () => {
  it('returns a fresh state for garbage input', () => {
    expect(migrate(null)).toEqual(emptyState());
    expect(migrate('nope')).toEqual(emptyState());
    expect(migrate([1, 2])).toEqual(emptyState());
  });

  it('keeps valid data and repairs missing or invalid fields', () => {
    const state = migrate({
      children: [
        { id: 'a', name: 'Noor', birthDate: '2024-05-01', weeksEarly: 99 },
        { id: 'b', name: 'Bad' }, // no birth date → dropped
      ],
      activeChildId: 'missing',
      sessions: [{ id: 's', childId: 'a', activityId: 'x', date: '2025-01-01T10:00:00Z', minutes: 5 }, { nope: true }],
      favorites: ['x', 3],
      settings: { theme: 'neon' },
    });
    expect(state.children).toHaveLength(1);
    expect(state.children[0]).toMatchObject({ weeksEarly: 20, emoji: '🐣', color: 'peach', interests: [] });
    expect(state.activeChildId).toBe('a');
    expect(state.sessions).toHaveLength(1);
    expect(state.favorites).toEqual(['x']);
    expect(state.settings.theme).toBe('system');
    expect(state.settings.onboarded).toBe(true);
  });

  it('brings a version 1 save forward with nothing lost', () => {
    const v1 = {
      version: 1,
      children: [{ id: 'a', name: 'Noor', birthDate: '2024-05-01', weeksEarly: 2, emoji: '🦊', color: 'sky' }],
      activeChildId: 'a',
      sessions: [{ id: 's', childId: 'a', activityId: 'x', date: '2025-01-01T10:00:00Z', minutes: 5, reaction: 'loved', note: 'Giggles' }],
      moments: [{ id: 'm', childId: 'a', date: '2025-01-01T10:00:00Z', text: 'First laugh' }],
      favorites: ['x'],
      milestones: { a: { 'ms-1': 'yes' } },
      plans: {},
      settings: { theme: 'dark', onboarded: true },
    };
    const state = migrate(v1);
    expect(state.version).toBe(STATE_VERSION);
    expect(state.children[0]).toMatchObject({ name: 'Noor', weeksEarly: 2, emoji: '🦊', color: 'sky', interests: [] });
    expect(state.sessions[0]).toMatchObject({ reaction: 'loved', note: 'Giggles' });
    expect(state.moments[0].text).toBe('First laugh');
    expect(state.milestones).toEqual(v1.milestones);
    expect(state.settings).toMatchObject({ theme: 'dark', onboarded: true, celebrations: [], bedside: false, soundLevel: 0 });
    expect(state.routines).toEqual([]);
    expect(state.firsts).toEqual([]);
  });

  it('keeps version 2 fields through a round trip', () => {
    const v2 = migrate({
      children: [{ id: 'a', name: 'Noor', birthDate: '2024-05-01', interests: ['animals'] }],
      routines: [{ id: 'r', childId: 'a', name: 'Bedtime', emoji: '🌙', steps: [{ id: 's', emoji: '🦷', label: 'Teeth' }] }],
      firsts: [{ id: 'f', childId: 'a', title: 'First laugh', date: '2024-08-01' }],
      storyReads: [{ id: 'sr', childId: 'a', storyId: 'x', date: '2025-01-01T00:00:00Z' }],
      savedStories: ['x'],
      savedSongs: ['y'],
      settings: { country: 'IR', aidRegion: 'uk', climate: 'temperate-north', celebrations: ['nowruz'], bedside: true, bedsideTone: 'amber', soundLevel: 2 },
    });
    expect(migrate(JSON.parse(JSON.stringify(v2)))).toEqual(v2);
    expect(v2.settings).toMatchObject({ country: 'IR', aidRegion: 'uk', celebrations: ['nowruz'], bedsideTone: 'amber', soundLevel: 2 });
  });

  it('rejects settings it does not understand', () => {
    const s = migrate({ settings: { country: 'iran', aidRegion: 'mars', climate: 'hot', bedsideTone: 'blue', soundLevel: 9 } }).settings;
    expect(s).toMatchObject({ country: null, aidRegion: null, climate: null, bedsideTone: 'red', soundLevel: 0 });
  });
});

describe('reading a save', () => {
  it('reads a good save', () => {
    const storage = fakeStorage({ [STORAGE_KEY]: JSON.stringify({ children: [{ id: 'a', name: 'Noor', birthDate: '2024-05-01' }], sessions: [] }) });
    const { state, damagedKey } = readStored(storage);
    expect(state.children).toHaveLength(1);
    expect(damagedKey).toBeNull();
  });

  it('starts empty, with no alarm, when there is nothing saved', () => {
    expect(readStored(fakeStorage())).toEqual({ state: emptyState(), damagedKey: null, copyKept: true });
  });

  it('never loses a save it can not read: it keeps a copy aside', () => {
    const broken = '{"children":[{"id":"a","name":"No';
    const storage = fakeStorage({ [STORAGE_KEY]: broken });
    const { state, damagedKey, copyKept } = readStored(storage, 1234);
    expect(state.children).toEqual([]);
    expect(damagedKey).toBe(`${DAMAGED_PREFIX}copy`);
    expect(storage.data.get(damagedKey!)).toBe(broken);
    expect(copyKept).toBe(true);
    // Opening again before anything is saved doesn't pile up copies.
    expect(readStored(storage, 5678).damagedKey).toBe(damagedKey);
    expect([...storage.data.keys()].filter((k) => k.startsWith(DAMAGED_PREFIX))).toHaveLength(1);
  });

  it('treats valid JSON that is not a save as damaged too', () => {
    const storage = fakeStorage({ [STORAGE_KEY]: '"hello"' });
    const { damagedKey } = readStored(storage, 5);
    expect(storage.data.get(damagedKey!)).toBe('"hello"');
  });

  it('still opens when there is no room to keep the copy', () => {
    const storage = fakeStorage({ [STORAGE_KEY]: 'not json' }, true);
    expect(() => readStored(storage)).not.toThrow();
    const r = readStored(storage);
    expect(r.state).toEqual(emptyState());
    // It says no copy was kept, so the app knows not to write over the only one.
    expect(r.copyKept).toBe(false);
    expect(r.damagedKey).toBe(STORAGE_KEY);
  });

  it('still opens when storage is blocked', () => {
    const blocked = {
      getItem: () => {
        throw new Error('SecurityError');
      },
      setItem: () => {},
    };
    expect(readStored(blocked).state).toEqual(emptyState());
  });
});

describe('a backup that only looks right', () => {
  it('drops what the screens can not draw, rather than crashing on every launch', () => {
    const s = migrate({
      children: [
        { id: 'a', name: 'Noor', birthDate: '2024-05-01' },
        { id: 'a', name: 'Twin of a', birthDate: '2024-05-01' },
        { id: 'b', name: 'Bad date', birthDate: 'soon' },
        { id: 'c', name: '   ', birthDate: '2024-05-01' },
      ],
      plans: { a: { weekStart: '2026-11-02' }, z: { weekStart: '2026-11-02', items: [] } },
      routines: [{ id: 'r', childId: 'a', name: 'Bed', steps: [null, { id: 's', label: 'Teeth', emoji: '🦷' }] }],
    });
    expect(s.children.map((c) => c.id)).toEqual(['a']);
    expect(Object.keys(s.plans)).toEqual(['z']);
    expect(s.routines[0].steps).toHaveLength(1);
  });

  it('keeps fields from a newer version, so restoring a newer backup loses nothing', () => {
    const s = migrate({ children: [], sessions: [], photos: [{ id: 'p' }] }) as unknown as { photos: unknown[] };
    expect(s.photos).toHaveLength(1);
  });
});

describe('backups', () => {
  it('recognises a backup, with or without its envelope', () => {
    const state = emptyState();
    expect(isBackup(state)).toBe(true);
    expect(isBackup({ app: 'playnest', state })).toBe(true);
  });

  it('refuses anything else, so a stray file can never blank the app', () => {
    expect(isBackup({})).toBe(false);
    expect(isBackup(null)).toBe(false);
    expect(isBackup([1])).toBe(false);
    expect(isBackup({ children: 'no' })).toBe(false);
    expect(isBackup({ app: 'playnest' })).toBe(false);
  });

  it('counts what a parent has recorded', () => {
    const s = migrate({
      children: [{ id: 'a', name: 'Noor', birthDate: '2024-05-01' }],
      sessions: [{ id: 's', childId: 'a', activityId: 'x', date: 'd', minutes: 1 }],
      milestones: { a: { one: 'yes', two: 'notyet' } },
    });
    expect(recordCount(s)).toBe(4);
  });
});
