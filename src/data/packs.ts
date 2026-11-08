/**
 * Types for the content packs added in v1.5: hard moments, first aid, stories, songs, talk cards, stage cards, routines,
 * firsts, celebrations and adaptations. `src/data/validatePacks.ts` enforces the rules that types can't.
 *
 * Every pack cites where its guidance comes from with `Ref`s written inline, because several files are written at once
 * and each pack has its own sources. Write everything in your own words: most of these sources are copyrighted.
 *
 * House style for all of it:
 *  - British spelling and words (nappy, colour, pram), plain words, a reading age of about 12.
 *  - "They", never "he" or "she", for a child or a parent.
 *  - Never "missed", "failed", "only", "should", "just", "at least" or "below average". No guilt, no comparison.
 *  - Ranges, never an exact date for a developmental event.
 *  - Say what research supports in proportion to how strong it is. Never invent a fact, a number or a citation.
 *  - Emoji must be Emoji 12.0 or older (the unit tests check), one per record.
 */
import type { Domain, Energy, Setting, Tag } from './types';
import { localize } from '../i18n';

export interface Ref {
  title: string;
  publisher: string;
  /** https only. */
  url: string;
}

// ---------- Hard moments ----------

export const COACH_GROUPS = {
  'big-feelings': { label: 'Big feelings', emoji: '🌋' },
  hurting: { label: 'Hitting and hurting', emoji: '✋' },
  everyday: { label: 'Getting through the day', emoji: '🧦' },
  sleep: { label: 'Sleep and nights', emoji: '🌙' },
  food: { label: 'Food and the table', emoji: '🍽️' },
  siblings: { label: 'Brothers and sisters', emoji: '👫' },
  school: { label: 'School and friends', emoji: '🎒' },
  worries: { label: 'Worries and fears', emoji: '🌧️' },
  words: { label: 'Rude words and tall tales', emoji: '💬' },
  questions: { label: 'Big questions', emoji: '❓' },
  you: { label: 'When you lost it', emoji: '💛' },
} as const;
export type CoachGroup = keyof typeof COACH_GROUPS;

/** What to do at one age. Bands of a situation must not overlap. */
export interface CoachBand {
  minMonths: number;
  maxMonths: number;
  /** Exactly 3 short imperative steps a parent can follow right now, each at most 110 characters. */
  rightNow: string[];
  /** 2–4 things to say, at most 90 characters each, exactly as a parent would say them, without quotation marks. */
  say: string[];
  /** 0–2 things to avoid, each at most 110 characters. */
  avoid?: string[];
}

export interface CoachSituation {
  /** Kebab-case and stable. */
  id: string;
  /** What the parent would say is happening, at most 40 characters: "Tantrum in public". */
  title: string;
  emoji: string;
  group: CoachGroup;
  minMonths: number;
  maxMonths: number;
  /** Other words a parent might search for: "meltdown", "screaming in the shop". */
  keywords: string[];
  bands: CoachBand[];
  /** One line, at most 160 characters: why this works, in proportion to the evidence. */
  why: string;
  /** A play idea to practise the skill later, when things are calm. */
  later: {
    /** At most 120 characters: "Stop-and-go games practise stopping a big feeling." */
    text: string;
    /** Used to find a real game at the child's age. */
    tags: Tag[];
    domains: Domain[];
  };
  /** 1–4 signs that it is worth talking to a doctor or specialist, at most 120 characters each. */
  help: string[];
  /** How strong the support is. 'practice' means sensible professional advice with little direct research. */
  evidence: 'strong' | 'moderate' | 'practice';
  refs: Ref[];
}

// ---------- First aid ----------

/** Choking and CPR steps differ between bodies, so a card is never blended from several. */
export const AID_REGIONS = {
  us: { label: 'United States', body: 'American Heart Association and American Academy of Pediatrics' },
  ca: { label: 'Canada', body: 'Heart & Stroke Canada' },
  uk: { label: 'United Kingdom and Ireland', body: 'Resuscitation Council UK' },
  eu: { label: 'Europe', body: 'European Resuscitation Council' },
  anz: { label: 'Australia and New Zealand', body: 'Australian and New Zealand Committee on Resuscitation' },
} as const;
export type AidRegion = keyof typeof AID_REGIONS;

export interface AidSteps {
  /** 2–6 steps of at most 140 characters each. The call step, if any, is written into the steps in order. */
  steps: string[];
  /** 0–4 things not to do, at most 120 characters each. */
  dont?: string[];
  /** One line of region-specific context. */
  note?: string;
  /** The named version these steps follow, shown on the card: "AHA/AAP 2025". */
  basedOn: string;
  refs: Ref[];
}

export interface AidCard {
  id: string;
  /** Names the emergency, at most 36 characters: "Baby choking (under 1)". */
  title: string;
  emoji: string;
  /** 1 is shown on the emergency home screen; 2 is reachable under "More". */
  tier: 1 | 2;
  /**
   * How to recognise the emergency, so a parent can pick the right card. A static description, never a question that
   * returns a verdict: this is reference, not triage. At most 120 characters.
   */
  signs: string;
  /** Whether the card leads with the call button. */
  callFirst: boolean;
  /** When to call or go to hospital, for cards that don't lead with the call. 0–5 items of at most 110 characters. */
  callIf?: string[];
  /** One entry per region for region-locked cards; `all` when the bodies agree on the wording used. */
  regions: Partial<Record<AidRegion | 'all', AidSteps>>;
}

/** Numbers for one country. A number appears only when a source gave it. */
export interface EmergencyNumbers {
  /** A single number for every service, where the country has one. */
  general?: string;
  ambulance?: string;
  police?: string;
  fire?: string;
  /** False when sources disagreed or the row mixes services: the card asks the parent to check locally. */
  agreed: boolean;
}

export interface Helpline {
  name: string;
  /** Digits, spaces and + only, as dialled inside the country. */
  phone?: string;
  /** "Text HOME to 741741". */
  textLine?: string;
  url?: string;
  /** 'crisis' is for someone in danger now; 'parent' is parenting or perinatal support; 'talk' is someone to listen. */
  kind: 'crisis' | 'parent' | 'talk';
  hours?: string;
  /** One line on anything a caller should know first. */
  note?: string;
  /** 'operator' means seen on the service's own or a government page; 'directory' means a helpline directory only. */
  via: 'operator' | 'directory';
}

// ---------- Crying and parent support ----------

export interface CrySoothStep {
  id: string;
  emoji: string;
  /** At most 36 characters. */
  title: string;
  /** At most 170 characters. */
  text: string;
  /** Offers a timer on this step. */
  timerMinutes?: number;
}

export interface CryingHelp {
  /** 2–3 short lines shown first: this is normal and it passes, in proportion to the evidence. */
  reassure: string[];
  /** Signs to phone a doctor or get urgent help instead of soothing. At most 110 characters each. */
  redFlags: string[];
  /** Quick things to check. */
  checks: string[];
  soothe: CrySoothStep[];
  /** The step-away plan: where to put the baby, how long, who to call. */
  stepAway: { title: string; steps: string[]; minutes: number; closing: string };
  /** Never shake: one plain line. */
  neverShake: string;
  /** Baby's cues for "more play please" and "I need a break". */
  cues: { more: string[]; stop: string[] };
  /** Extra note for a toddler who can't be comforted. */
  toddler: string[];
  /** 2–4 lines about sound machines used as background noise, including placement. */
  soundSafety: string[];
  refs: Ref[];
}

export interface ParentSupport {
  /** The unscored check-in question and the answers. Nothing is stored and nothing is scored. */
  checkIn: { question: string; intro: string; yes: string; notNow: string; scared: string };
  /** Short kind lines for a parent having a hard time. */
  kindWords: string[];
  /** A small set of things that may help, each honest about the evidence. */
  smallThings: { id: string; emoji: string; title: string; text: string }[];
  /** Crisis screens. Wording follows safe-messaging rules: no methods, no assessing, one tap to a person. */
  hurtBaby: { opening: string; steps: string[]; callIf: string; normal: string };
  hurtSelf: { opening: string; question: string; yes: string; no: string; afterYes: string; afterNo: string };
  /** When to see someone, including signs that need same-day care. */
  whenToSeek: string[];
  /** Shown on the support screen: this app can't see what you tap, and nobody is watching. */
  privacy: string;
  refs: Ref[];
}

// ---------- Stories ----------

export const STORY_THEMES = ['kindness', 'cleverness', 'bravery', 'sharing', 'patience', 'fear', 'nature', 'siblings', 'friendship', 'bedtime', 'honesty', 'family'] as const;
export type StoryTheme = (typeof STORY_THEMES)[number];

export type StoryPromptKind = 'completion' | 'recall' | 'open' | 'wh' | 'distancing';

export interface Story {
  id: string;
  /** At most 48 characters. */
  title: string;
  /** Name in its own language and script, when it has one. */
  nativeTitle?: string;
  /** "Traditional, Persian" style attribution; say "told in many places" when it isn't one culture's alone. */
  culture: string;
  emoji: string;
  minMonths: number;
  maxMonths: number;
  /** Reading-aloud time. */
  minutes: number;
  themes: StoryTheme[];
  /** Gentle enough to end a day on. */
  bedtime: boolean;
  /** The retelling, written from scratch: 3–14 short paragraphs, 120–600 words in all. */
  paragraphs: string[];
  /** 4–7 short beats, so a parent can tell it from memory with the phone put away. */
  beats: string[];
  /** 3–4 things to ask afterwards. */
  prompts: { kind: StoryPromptKind; text: string }[];
  /** Anything worth knowing before reading: a frightening moment, a change made for young children, cultural context. */
  note?: string;
  /**
   * May this be retold at all? An expired copyright doesn't end a community's standing in its own story, so only tales
   * judged open to outsiders ('open') or open with care ('care') may ship. Anything marked ask or no in the research stays out
   * until someone from that community has said yes.
   */
  stance: 'open' | 'care';
  refs: Ref[];
}

// ---------- Songs ----------

export const SONG_TYPES = {
  lullaby: { label: 'Lullabies', emoji: '🌙' },
  lap: { label: 'Lap and bounce', emoji: '🤗' },
  finger: { label: 'Fingers and toes', emoji: '✋' },
  action: { label: 'Action songs', emoji: '👏' },
  circle: { label: 'Circle songs', emoji: '⭕' },
  counting: { label: 'Counting', emoji: '🔢' },
} as const;
export type SongType = keyof typeof SONG_TYPES;

export interface SongLine {
  /** The words in the song's own script, when that isn't English. */
  original?: string;
  /** Latin letters, for parents who can't read the script. */
  roman?: string;
  /** Plain English meaning, in your own words. For English songs this is the words themselves. */
  english: string;
}

export interface Song {
  id: string;
  title: string;
  nativeTitle?: string;
  /** "Persian", "Swahili", "Mandarin". */
  language: string;
  culture: string;
  type: SongType;
  emoji: string;
  minMonths: number;
  maxMonths: number;
  /** A verse or two: traditional or public-domain words only. Omit the words altogether when their rights are unclear. */
  lines: SongLine[];
  /** 0–5 things to do while singing. */
  actions: string[];
  /**
   * The tune, when it could be verified, for the music-box guide. Space-separated "note:beats" pairs, e.g.
   * "C4:1 D4:0.5 E4:2 R:1", where R is a rest. Leave it out rather than guess.
   */
  melody?: { notes: string; bpm: number; source: string };
  /** Why the words are free to use: "Traditional", or an author's name and death year. */
  rights: string;
  note?: string;
  refs: Ref[];
}

// ---------- Talk cards ----------

export type TalkBand = '3-5' | '6-8' | '9-12';

export interface TalkCard {
  id: string;
  /** A short theme label: "Feelings", "What if…", "Fairness". */
  theme: string;
  emoji: string;
  band: TalkBand;
  /** One open question, at most 110 characters, in your own words. */
  text: string;
}

// ---------- This stage ----------

export interface StageCard {
  id: string;
  minMonths: number;
  /** Inclusive. Bands run end to end from 0 to 144 with no gaps. */
  maxMonths: number;
  /** "Around 3 to 6 months". Never a promise about an exact date. */
  title: string;
  emoji: string;
  /** 3–5 lines on what's going on at this stage. At most 130 characters each. */
  happening: string[];
  /** 2–4 things parents often worry about that are usually fine. At most 130 characters each. */
  usuallyFine: string[];
  /** 2–4 things worth asking a doctor or health visitor about, in that body's sense. At most 130 characters each. */
  worthAsking: string[];
  /** 3–5 small things to try this week. At most 110 characters each. */
  tryThis: string[];
  /** Picks games to show with the card. */
  tags: Tag[];
  domains: Domain[];
  refs: Ref[];
}

// ---------- Routines ----------

export interface RoutineTemplate {
  id: string;
  /** "Morning", "Bedtime", "Leaving the house". */
  name: string;
  emoji: string;
  minMonths: number;
  maxMonths: number;
  /** 2–8 picture steps with labels of at most 24 characters. */
  steps: { emoji: string; label: string; minutes?: number }[];
  /** One line on why a steady routine helps, in proportion to the evidence. */
  why: string;
  refs: Ref[];
}

export interface FirstIdea {
  id: string;
  /** "First real laugh". */
  title: string;
  emoji: string;
  /** When it might be on the parent's mind. A wide, loose range, never a due date. */
  minMonths: number;
  maxMonths: number;
}

// ---------- Celebrations ----------

export interface Celebration {
  id: string;
  name: string;
  nativeName?: string;
  emoji: string;
  /** 'shared' days aren't tied to one faith or people (Earth Day, Children's Day). */
  kind: 'cultural' | 'religious' | 'shared';
  /** Phrased as "Some families", at most 160 characters. */
  whoCelebrates: string;
  /** Who doesn't, so nobody is assumed in or out. At most 160 characters. */
  notEveryone?: string;
  /** At most 240 characters of plain, respectful facts. */
  about: string;
  /** First day by year, "YYYY-MM-DD". Several per year when it moves by place or falls twice. Empty when the family sets it. */
  dates: Record<string, string[]>;
  /** True when dates depend on a sighting or differ by community: the screen says "around". */
  approximate: boolean;
  /** Shown first for days of remembrance, so a grieving family isn't surprised. */
  gentleNote?: string;
  /** Things that belong to the community: what not to run as an outsider. */
  respect?: string;
  refs: Ref[];
}

// ---------- Adaptations ----------

export const NEEDS = {
  see: { label: 'Hard to see', emoji: '👀' },
  hear: { label: 'Hard to hear', emoji: '👂' },
  reach: { label: 'Hard to reach or hold', emoji: '🤲' },
  'too-much': { label: 'Too much', emoji: '🌊' },
  'too-fast': { label: 'Too fast', emoji: '🐢' },
  words: { label: 'Words are hard', emoji: '💬' },
} as const;
export type Need = keyof typeof NEEDS;

export interface Adaptation {
  id: string;
  need: Need;
  /** One thing to try, at most 140 characters. Names the barrier, never the child. */
  text: string;
  /** Limit it to games where it makes sense. Empty means any game. */
  whenEnergy?: Energy[];
  whenSetting?: Setting[];
  whenTag?: Tag[];
}

localize('labels-packs', { COACH_GROUPS, AID_REGIONS, SONG_TYPES, NEEDS });
