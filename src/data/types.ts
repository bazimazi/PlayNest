/**
 * Content schema for PlayNest. Every activity, milestone, guide and tip in the app
 * conforms to these types. `src/data/validate.ts` enforces the rules that types can't.
 */
import { localize } from '../i18n';

/** The eight development areas used throughout the app. Order matters: it is the display order. */
export const DOMAINS = [
  'movement', // gross motor, balance, coordination
  'hands', // fine motor, hand-eye coordination
  'language', // listening, talking, early literacy
  'thinking', // cognition, problem solving, early math & science
  'feelings', // social-emotional, attachment, empathy, friendship
  'senses', // sensory exploration and processing
  'imagination', // pretend play, art, music-making, creativity
  'selfcontrol', // executive function: working memory, inhibition, flexible thinking
] as const;
export type Domain = (typeof DOMAINS)[number];

/** Where / when an activity works well. `anywhere` = needs nothing and fits any place. */
export const SETTINGS = [
  'indoor',
  'outdoor',
  'bath',
  'car',
  'mealtime',
  'bedtime',
  'waiting', // queues, waiting rooms, restaurants
  'anywhere',
] as const;
export type Setting = (typeof SETTINGS)[number];

export const ENERGIES = ['calm', 'moderate', 'active'] as const;
export type Energy = (typeof ENERGIES)[number];

/**
 * none      – nothing needed but you (and maybe your hands/voice/body)
 * household – everyday things found in most homes (cups, scarf, spoons, boxes, paper)
 * craft     – simple art supplies (crayons, paint, glue, tape, playdough)
 * toy       – a specific toy or game (ball, blocks, deck of cards, board game)
 */
export const MATERIAL_LEVELS = ['none', 'household', 'craft', 'toy'] as const;
export type MaterialsLevel = (typeof MATERIAL_LEVELS)[number];

/** Curated collections shown in Explore. */
export const TAGS = [
  'song', // songs, rhymes, fingerplays, lullabies, music
  'world', // traditional game from a specific culture (requires `origin`)
  'everyday', // turns a routine (nappy change, meals, dressing, shopping) into play
  'calm-down', // soothing / regulating — good for fussy or overexcited moments
  'tummy-time', // tummy-time activities for young babies
  'brain-game', // games specifically built around executive function
  'reading', // books, stories, storytelling
  'nature', // outdoors, plants, animals, weather
  'pretend', // role play and make-believe
  'art', // drawing, painting, making
  'science', // experiments, cause & effect, early STEM, numbers & shapes
  'classic', // well-known traditional games (peekaboo, hide and seek, tag…)
  'rough-and-tumble', // safe physical play: wrestling, swinging, chasing
  'kitchen', // cooking, food prep and kitchen-cupboard play
  'water', // water play: bath, pouring, splashing, puddles
  'building', // blocks, boxes, dens, construction and engineering
  'party', // group games for playdates, parties and family gatherings
  'strategy', // card, board and thinking games with real rules
  'kid-leads', // the child runs it: teacher, planner, chef, map-reader, quiz-master
  'solo', // a child can happily do this alone while a grown-up is nearby
  'rainy-day', // made for wet days, indoors or out
  'hot-day', // keeping cool in the heat
  'snow-day', // snow and hard frost
] as const;
export type Tag = (typeof TAGS)[number];

/** Citation ids — see `sources.ts`. */
export const SOURCE_IDS = [
  'aap-power-of-play',
  'harvard-serve-return',
  'harvard-ef-guide',
  'cdc-milestones',
  'who-under5',
  'who-unicef-ccd',
  'lego-learning-through-play',
  'mit-conversational-turns',
  'dialogic-reading',
  'siegler-ramani-board-games',
  'block-play-spatial',
  'risky-play',
  'rough-and-tumble',
  'lullabies-singing',
  'messy-play',
  'montessori',
  'cpsc-small-parts',
  'aap-screen-time',
  'pathways-tummy-time',
  'bilingual-ef',
  // Feelings & behaviour
  'aap-tantrums',
  'zero-to-three-tantrums',
  'tuning-in-to-kids',
  'aap-pretend-play',
  'process-praise',
  // Movement, outdoors & sleep
  'nhs-active-under5',
  'nhs-active-5-18',
  'outdoor-myopia',
  'nature-mental-health',
  'bedtime-routine',
  'aap-sleep-habits',
  'cdc-sleep-hours',
  // Safety
  'nhs-sun-safety',
  'aap-drowning',
  'aap-button-batteries',
  'aap-choking',
  'aap-family-travel',
  // Siblings, independence & free play
  'aap-siblings-play',
  'aap-sibling-bonds',
  'siblings-theory-of-mind',
  'cdc-child-led-play',
  'free-time-ef',
  'aap-independence',
  // Parent wellbeing
  'aap-parent-break',
  'aap-sleepy-parents',
  'nhs-postnatal-depression',
  // Language & music
  'asha-multilingual',
  'music-synchrony',
  'music-infant-rhythm',
] as const;
export type SourceId = (typeof SOURCE_IDS)[number];

export interface Activity {
  /** Unique, kebab-case, stable forever (it is stored in users' journals). e.g. "peekaboo-scarf" */
  id: string;
  /** Short, friendly name. Title Case not required. Max ~40 chars. */
  title: string;
  /** One emoji used as the activity's illustration. */
  emoji: string;
  /** One sentence (max ~120 chars) saying what you do. */
  summary: string;
  /** Inclusive age range in months. 0 = newborn, 144 = 12 years (the app's upper bound). */
  minMonths: number;
  maxMonths: number;
  /** 1–3 development areas; the FIRST is the primary area. */
  domains: Domain[];
  /** Typical minutes of play (1–45). */
  durationMin: number;
  energy: Energy;
  /** At least one. Use 'anywhere' only if it truly needs nothing and fits any place. */
  settings: Setting[];
  materialsLevel: MaterialsLevel;
  /** Concrete items, e.g. ["a soft scarf", "a mirror"]. Empty array when materialsLevel is 'none'. */
  materials: string[];
  /** Works well with siblings / several children at once. */
  groupFriendly: boolean;
  /** 3–7 short imperative steps. Each step one or two sentences. */
  steps: string[];
  /** 2–4 example things a parent can say or ask (serve-and-return prompts), in quotes-free plain text. */
  talk: string[];
  /** 1–2 sentences: the developmental "why", in plain words, proportionate to the evidence. */
  whyItHelps: string;
  /** How to make it simpler for a younger/less ready child. */
  easier?: string;
  /** How to make it more challenging for an older/more ready child. */
  harder?: string;
  /**
   * 2–4 "more ways to play": fresh twists at the same level (new theme, props, place or rules) that keep a
   * favourite game interesting when it is played again and again. Not easier/harder versions.
   */
  variations?: string[];
  /** Safety notes. Required for under-3s when materials, water or outdoor settings are involved. */
  safety?: string[];
  /** Country / culture of origin for traditional games, e.g. "Ghana". Required when tagged 'world'. */
  origin?: string;
  tags?: Tag[];
  sources?: SourceId[];
  /** Sources written inline, for games whose evidence or rules aren't in the shared `sources.ts` list. */
  refs?: { title: string; publisher: string; url: string }[];
  /** Weather it is especially good for. Tapping that weather on Today favours it. */
  weather?: Weather[];
  /** Seasons it suits. A light nudge only, and only when the family's climate has that season. */
  seasons?: Season[];
  /** Uses a real flame: hidden on smoky days and in power cuts, and never suggested for a child without an adult. */
  usesFlame?: boolean;
  /** The celebration this belongs to (see celebrations.ts). Shown only to families who chose that celebration. */
  celebration?: string;
}

/** What the parent can say about today. Told to the app, never fetched. */
export const WEATHERS = ['rainy', 'stormy', 'hot', 'snowy', 'windy', 'smoky', 'powercut'] as const;
export type Weather = (typeof WEATHERS)[number];

export const SEASONS = ['spring', 'summer', 'autumn', 'winter'] as const;
export type Season = (typeof SEASONS)[number];

/** CDC milestone categories, mapped onto our development areas for linking to activities. */
export const MILESTONE_CATEGORIES = ['social', 'language', 'cognitive', 'movement'] as const;
export type MilestoneCategory = (typeof MILESTONE_CATEGORIES)[number];

export interface Milestone {
  id: string;
  /** Checklist age in months: 2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 48, 60 */
  ageMonths: number;
  category: MilestoneCategory;
  text: string;
}

export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'steps'; items: { title: string; text: string }[] }
  | { type: 'callout'; tone: 'tip' | 'safety' | 'science'; text: string }
  | { type: 'table'; head: string[]; rows: string[][] };

export const GUIDE_TOPICS = {
  play: { label: 'Play', emoji: '🧩' },
  feelings: { label: 'Feelings and behaviour', emoji: '💛' },
  talking: { label: 'Talking and reading', emoji: '📚' },
  sleep: { label: 'Sleep and crying', emoji: '🌙' },
  screens: { label: 'Screens', emoji: '📱' },
  school: { label: 'School and growing up', emoji: '🎒' },
  included: { label: 'Every child, every family', emoji: '🤝' },
  safety: { label: 'Safety', emoji: '🛡️' },
  you: { label: 'For you', emoji: '💛' },
} as const;
export type GuideTopic = keyof typeof GUIDE_TOPICS;

export interface Guide {
  slug: string;
  title: string;
  emoji: string;
  summary: string;
  minutes: number;
  /** Show this guide prominently for children within this age range (months). */
  minMonths: number;
  maxMonths: number;
  blocks: GuideBlock[];
  sources: SourceId[];
  /** Sources written inline, for guides whose evidence isn't in the shared `sources.ts` list. */
  refs?: { title: string; publisher: string; url: string }[];
  /** Which shelf it sits on in Learn. */
  topic?: GuideTopic;
  /** When this guide was last checked against its sources, YYYY-MM-DD. */
  checkedOn?: string;
  /** Activities with these tags (filtered to the child's age) are suggested under the guide. */
  relatedTags?: Tag[];
}

export interface Tip {
  id: string;
  text: string;
  minMonths: number;
  maxMonths: number;
  source?: SourceId;
}

export interface Source {
  id: SourceId;
  title: string;
  publisher: string;
  url: string;
}

localize('labels-types', { GUIDE_TOPICS });
