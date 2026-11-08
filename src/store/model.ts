import type { AidRegion } from '../data/packs';
import { localize, type Language } from '../i18n';

/** Persisted app state. Bump `STATE_VERSION` and add a migration in `store.ts` when this changes. */
export const STATE_VERSION = 3;

export interface Child {
  id: string;
  name: string;
  /** Local calendar date, YYYY-MM-DD. */
  birthDate: string;
  /** Weeks born before the due date (0 if born at term). */
  weeksEarly: number;
  emoji: string;
  /** One of the avatar palette keys. */
  color: string;
  /** What this child loves right now (keys of INTERESTS). Nudges suggestions; never hides anything. */
  interests: string[];
}

export type Reaction = 'loved' | 'liked' | 'meh' | 'too-hard' | 'too-easy';

export interface Session {
  id: string;
  childId: string;
  activityId: string;
  /** ISO date-time. */
  date: string;
  minutes: number;
  reaction?: Reaction;
  note?: string;
}

export interface Moment {
  id: string;
  childId: string;
  /** ISO date-time. */
  date: string;
  text: string;
}

export type MilestoneAnswer = 'yes' | 'notyet' | 'unsure';

export type PlanSlot = 'go' | 'calm';

export interface PlanItem {
  /** 0 = Monday … 6 = Sunday */
  day: number;
  slot: PlanSlot;
  activityId: string;
  done: boolean;
}

export interface WeekPlan {
  /** Monday of the planned week, YYYY-MM-DD. */
  weekStart: string;
  seed: number;
  items: PlanItem[];
}

/** A picture routine (morning, bedtime, leaving the house) that a child can follow in kid mode. */
export interface RoutineStep {
  id: string;
  emoji: string;
  label: string;
  /** Optional minutes, shown to the child as a shrinking colour pie rather than digits. */
  minutes?: number;
}

export interface Routine {
  id: string;
  childId: string;
  /** The suggestion it started from. Its name can't say: that is the parent's to change, and differs by language. */
  templateId?: string;
  name: string;
  emoji: string;
  steps: RoutineStep[];
}

/** A first worth remembering: first smile, first lost tooth, or anything the parent writes. */
export interface FirstEntry {
  id: string;
  childId: string;
  /** Key from FIRSTS when it came from the suggestions; absent for one the parent wrote. */
  firstId?: string;
  title: string;
  /** Local calendar date, YYYY-MM-DD. */
  date: string;
  note?: string;
}

/** A story shared together. It only ever adds up: nothing is due and nothing is lost. */
export interface StoryRead {
  id: string;
  childId: string;
  storyId: string;
  /** ISO date-time. */
  date: string;
}

export type Mood = 'happy' | 'energetic' | 'fussy' | 'sleepy';

export type Theme = 'system' | 'light' | 'dark';

export type BedsideTone = 'red' | 'amber';

/** Seasons are assumed from the month and this choice, never from location. 'none' turns the seasonal nudge off. */
export type Climate = 'temperate-north' | 'temperate-south' | 'tropical' | 'none';

export interface Settings {
  /** Null follows the device. It belongs to this phone, not the family's data: a restore or an erase never changes it. */
  language: Language | null;
  theme: Theme;
  onboarded: boolean;
  /** ISO 3166-1 alpha-2. Chosen or confirmed by the parent; it picks the emergency numbers and guidance shown. */
  country: string | null;
  climate: Climate | null;
  /** Whose first-aid steps to show. Asked once and kept when travelling: steps differ between bodies. */
  aidRegion: AidRegion | null;
  /** The parent's own emergency number, for when the table is unsure or they're somewhere else. */
  emergencyNumber: string | null;
  /** Celebrations this family marks. Opt-in, one by one, and never guessed. */
  celebrations: string[];
  /** Very dim screen for the dark. Turned on by the parent, remembered until turned off. */
  bedside: boolean;
  bedsideTone: BedsideTone;
  /** Soothing-sound loudness step: 0 is the quietest and the default. */
  soundLevel: 0 | 1 | 2;
  /** "less" stills the app's floating and celebrating, whatever the device is set to. The device's own setting always counts too. */
  motion: 'auto' | 'less';
  /** When a copy of the data was last handed to the parent (ISO date-time). */
  lastBackupAt: string | null;
  /** How many saved records existed at that moment, so another copy is only suggested when there is something new. */
  lastBackupRecords: number;
  /** "Later" on the backup card rests the suggestion until this date (ISO date-time). */
  backupSnoozeUntil: string | null;
}

export interface AppState {
  version: number;
  children: Child[];
  activeChildId: string | null;
  sessions: Session[];
  moments: Moment[];
  favorites: string[];
  /** childId → milestoneId → answer */
  milestones: Record<string, Record<string, MilestoneAnswer>>;
  /** childId → plan for one week */
  plans: Record<string, WeekPlan>;
  routines: Routine[];
  firsts: FirstEntry[];
  storyReads: StoryRead[];
  /** Stories and songs saved for later. Activities use `favorites`. */
  savedStories: string[];
  savedSongs: string[];
  settings: Settings;
}

export const REACTIONS: Record<Reaction, { label: string; emoji: string }> = {
  loved: { label: 'Loved it', emoji: '😍' },
  liked: { label: 'Liked it', emoji: '🙂' },
  meh: { label: 'Not today', emoji: '😐' },
  'too-hard': { label: 'Too hard', emoji: '😣' },
  'too-easy': { label: 'Too easy', emoji: '🥱' },
};

export const MOODS: Record<Mood, { label: string; emoji: string; hint: string; heading: string }> = {
  happy: { label: 'Happy', emoji: '😊', hint: 'Alert and ready to explore', heading: 'For a curious moment' },
  energetic: { label: 'Energetic', emoji: '⚡', hint: 'Full of energy, needs to move', heading: 'To burn off energy' },
  fussy: { label: 'Fussy', emoji: '🥺', hint: 'Needs comfort and calm', heading: 'To soothe' },
  sleepy: { label: 'Sleepy', emoji: '😴', hint: 'Winding down, quiet and cosy', heading: 'To wind down' },
};

export const AVATAR_COLORS = ['peach', 'sky', 'mint', 'lilac', 'sun', 'rose'] as const;
export const AVATAR_EMOJIS = ['🐣', '🐻', '🦊', '🐰', '🐼', '🦁', '🐸', '🐨', '🦄', '🐯', '🐙', '🐳'];

localize('labels-store', { REACTIONS, MOODS });
