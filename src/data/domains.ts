import type { Domain, Energy, MaterialsLevel, MilestoneCategory, Setting, Tag } from './types';
import { localize } from '../i18n';

export interface DomainInfo {
  key: Domain;
  label: string;
  short: string;
  emoji: string;
  /** CSS custom property holding this area's colour. */
  color: string;
  description: string;
}

export const DOMAIN_INFO: Record<Domain, DomainInfo> = {
  movement: {
    key: 'movement',
    label: 'Moving',
    short: 'Moving',
    emoji: '🤸',
    color: 'var(--d-movement)',
    description: 'Big-body skills: rolling, crawling, walking, balance, running, jumping and coordination.',
  },
  hands: {
    key: 'hands',
    label: 'Little hands',
    short: 'Hands',
    emoji: '✋',
    color: 'var(--d-hands)',
    description: 'Grasping, pinching, stacking, scribbling and hand–eye coordination.',
  },
  language: {
    key: 'language',
    label: 'Talking & listening',
    short: 'Talking',
    emoji: '💬',
    color: 'var(--d-language)',
    description: 'Understanding words, babbling, talking, conversation, stories and early reading.',
  },
  thinking: {
    key: 'thinking',
    label: 'Thinking',
    short: 'Thinking',
    emoji: '🧩',
    color: 'var(--d-thinking)',
    description: 'Curiosity, cause and effect, problem solving, memory, early math and science.',
  },
  feelings: {
    key: 'feelings',
    label: 'Feelings & friends',
    short: 'Feelings',
    emoji: '💛',
    color: 'var(--d-feelings)',
    description: 'Bonding, naming emotions, empathy, sharing, taking turns and making friends.',
  },
  senses: {
    key: 'senses',
    label: 'Senses',
    short: 'Senses',
    emoji: '🌈',
    color: 'var(--d-senses)',
    description: 'Exploring textures, sounds, sights, smells, tastes and movement through the senses.',
  },
  imagination: {
    key: 'imagination',
    label: 'Imagination',
    short: 'Imagine',
    emoji: '🦄',
    color: 'var(--d-imagination)',
    description: 'Pretend play, art, music-making, building and creative thinking.',
  },
  selfcontrol: {
    key: 'selfcontrol',
    label: 'Focus & self-control',
    short: 'Focus',
    emoji: '🎯',
    color: 'var(--d-selfcontrol)',
    description: 'Executive function: paying attention, remembering, waiting, stopping and switching gears.',
  },
};

export const SETTING_INFO: Record<Setting, { label: string; emoji: string }> = {
  indoor: { label: 'Indoors', emoji: '🏠' },
  outdoor: { label: 'Outdoors', emoji: '🌳' },
  bath: { label: 'Bath time', emoji: '🛁' },
  car: { label: 'In the car', emoji: '🚗' },
  mealtime: { label: 'Mealtime', emoji: '🍽️' },
  bedtime: { label: 'Bedtime', emoji: '🌙' },
  waiting: { label: 'Waiting', emoji: '⏳' },
  anywhere: { label: 'Anywhere', emoji: '✨' },
};

export const ENERGY_INFO: Record<Energy, { label: string; emoji: string }> = {
  calm: { label: 'Calm', emoji: '🌙' },
  moderate: { label: 'Playful', emoji: '🌤️' },
  active: { label: 'Active', emoji: '⚡' },
};

export const MATERIALS_INFO: Record<MaterialsLevel, { label: string }> = {
  none: { label: 'Nothing needed' },
  household: { label: 'Household items' },
  craft: { label: 'Art supplies' },
  toy: { label: 'A toy or game' },
};

export const TAG_INFO: Record<Tag, { label: string; emoji: string; blurb: string }> = {
  song: { label: 'Songs & rhymes', emoji: '🎵', blurb: 'Singing, rhymes and fingerplays — language and bonding in one.' },
  world: { label: 'Traditional games', emoji: '🪁', blurb: 'Games passed down from grandparents to children for generations.' },
  everyday: { label: 'Everyday moments', emoji: '🧺', blurb: 'Turn nappy changes, meals and chores into play.' },
  'calm-down': { label: 'Calm-down', emoji: '😌', blurb: 'Soothing play for fussy, tired or overexcited moments.' },
  'tummy-time': { label: 'Tummy time', emoji: '🐢', blurb: 'Fun ways to build strong necks, backs and shoulders.' },
  'brain-game': { label: 'Stop-and-think games', emoji: '🧠', blurb: 'Fun ways to practise paying attention, remembering and stopping.' },
  reading: { label: 'Stories & books', emoji: '📚', blurb: 'Reading together, storytelling and early literacy.' },
  nature: { label: 'Outdoors & nature', emoji: '🌿', blurb: 'Fresh air, mud, leaves, bugs and big skies.' },
  pretend: { label: 'Pretend play', emoji: '🎭', blurb: 'Make-believe, role play and little worlds.' },
  art: { label: 'Art & making', emoji: '🎨', blurb: 'Drawing, painting, building and crafting.' },
  science: { label: 'Little scientists', emoji: '🔬', blurb: 'Cause and effect, experiments, numbers and shapes.' },
  classic: { label: 'Classics', emoji: '⭐', blurb: 'Timeless games every family should know.' },
  'rough-and-tumble': { label: 'Rough & tumble', emoji: '🤼', blurb: 'Safe, physical play that teaches self-control.' },
  kitchen: { label: 'Kitchen play', emoji: '🍳', blurb: 'Cooking together, food play and pots-and-pans fun.' },
  water: { label: 'Water play', emoji: '💦', blurb: 'Pouring, splashing and floating — in the bath, the sink or a puddle.' },
  building: { label: 'Build it', emoji: '🧱', blurb: 'Blocks, boxes, dens and towers: early engineering.' },
  party: { label: 'Party games', emoji: '🎉', blurb: 'Group games for playdates, birthdays and family get-togethers.' },
  strategy: { label: 'Cards & strategy', emoji: '🃏', blurb: 'Games with real rules: think ahead, bluff, win and lose well.' },
  'kid-leads': { label: 'They’re in charge', emoji: '🧭', blurb: 'The child is the teacher, planner, chef or map-reader. You follow.' },
  solo: { label: 'Play without me', emoji: '🧸', blurb: 'Happy on their own for a while, with you nearby.' },
  'rainy-day': { label: 'Rainy day', emoji: '🌧️', blurb: 'For wet days, inside and out.' },
  'hot-day': { label: 'Hot day', emoji: '🌞', blurb: 'Ways to play and stay cool when it’s hot.' },
  'snow-day': { label: 'Snow day', emoji: '❄️', blurb: 'For snow and frosty mornings.' },
};

export const MILESTONE_CATEGORY_INFO: Record<
  MilestoneCategory,
  { label: string; emoji: string; domains: Domain[] }
> = {
  social: { label: 'Social & emotional', emoji: '💛', domains: ['feelings', 'selfcontrol'] },
  language: { label: 'Language & communication', emoji: '💬', domains: ['language'] },
  cognitive: { label: 'Learning & thinking', emoji: '🧩', domains: ['thinking', 'imagination'] },
  movement: { label: 'Movement & physical', emoji: '🤸', domains: ['movement', 'hands'] },
};

/** Age bands used for browsing. `max` is inclusive. */
export const AGE_BANDS = [
  { key: '0-3m', label: '0–3 months', min: 0, max: 2 },
  { key: '3-6m', label: '3–6 months', min: 3, max: 5 },
  { key: '6-9m', label: '6–9 months', min: 6, max: 8 },
  { key: '9-12m', label: '9–12 months', min: 9, max: 11 },
  { key: '12-18m', label: '12–18 months', min: 12, max: 17 },
  { key: '18-24m', label: '18–24 months', min: 18, max: 23 },
  { key: '2-3y', label: '2–3 years', min: 24, max: 35 },
  { key: '3-4y', label: '3–4 years', min: 36, max: 47 },
  { key: '4-5y', label: '4–5 years', min: 48, max: 59 },
  { key: '5-6y', label: '5–6 years', min: 60, max: 71 },
  { key: '6-8y', label: '6–8 years', min: 72, max: 95 },
  { key: '8-10y', label: '8–10 years', min: 96, max: 119 },
  { key: '10-12y', label: '10–12 years', min: 120, max: 144 },
] as const;
export type AgeBandKey = (typeof AGE_BANDS)[number]['key'];

export function bandForMonths(months: number): (typeof AGE_BANDS)[number] {
  return AGE_BANDS.find((b) => months >= b.min && months <= b.max) ?? AGE_BANDS[AGE_BANDS.length - 1];
}

localize('labels-domains', { DOMAIN_INFO, SETTING_INFO, ENERGY_INFO, MATERIALS_INFO, TAG_INFO, MILESTONE_CATEGORY_INFO, AGE_BANDS });
