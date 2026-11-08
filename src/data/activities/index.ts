import { fitsCulture, hasTranslation, localize } from '../../i18n';
import { CELEBRATIONS } from '../celebrations';
import type { Activity } from '../types';
import { infantActivities } from './infant';
import { celebrationActivities } from './celebrate';
import { persianCelebrationActivities } from './celebrate-persian';
import { iranOlderActivities } from './iran-older';
import { iranYoungActivities } from './iran-young';
import { EXTEND_MAX, olderActivities } from './older';
import { olderMakeActivities } from './older-make';
import { preschoolActivities } from './preschool';
import { schoolActivities } from './school';
import { seasonActivities } from './seasons';
import { toddlerActivities } from './toddler';
import { worldActivities } from './world';

/** Ids are stored in journals, so existing games are extended here rather than edited away. */
const extended = (a: Activity): Activity => (EXTEND_MAX[a.id] ? { ...a, maxMonths: EXTEND_MAX[a.id] } : a);

const BANDS: [name: string, activities: Activity[]][] = [
  ['activities-infant', infantActivities.map(extended)],
  ['activities-toddler', toddlerActivities.map(extended)],
  ['activities-preschool', preschoolActivities.map(extended)],
  ['activities-school', schoolActivities.map(extended)],
  ['activities-world', worldActivities.map(extended)],
  ['activities-seasons', seasonActivities.map(extended)],
  ['activities-older', olderActivities.map(extended)],
  ['activities-older-make', olderMakeActivities.map(extended)],
  ['activities-iran-young', iranYoungActivities],
  ['activities-iran-older', iranOlderActivities],
];
BANDS.forEach(([name, list]) => localize(name, list));

const FESTIVALS: [name: string, activities: Activity[]][] = [
  ['activities-celebrate', celebrationActivities],
  ['activities-celebrate-persian', persianCelebrationActivities],
];
FESTIVALS.forEach(([name, list]) => localize(name, list));

const everything = BANDS.flatMap(([, list]) => list);
const festivals = FESTIVALS.flatMap(([, list]) => list);

/** In another language, a game that hasn't been translated is not suggested or listed. A journal entry can still find it. */
const readable = new Set(BANDS.flatMap(([name, list]) => list.filter((a) => hasTranslation(name, a)).map((a) => a.id)));

/** Every game in every language, for checking the content. The app shows `ACTIVITIES`. */
export const EVERY_ACTIVITY: readonly Activity[] = everything;

/** Every festival game in every language, for checking the content. */
export const EVERY_CELEBRATION_ACTIVITY: readonly Activity[] = festivals;

/** Everything that can be suggested to this family: readable, and from this language's culture or from none. */
export const ACTIVITIES: Activity[] = everything.filter((a) => readable.has(a.id) && fitsCulture(a));

/** The days this language offers. A festival game carries its day's `lang`, and goes only where its day goes. */
const offered = new Set(CELEBRATIONS.map((c) => c.id));

/** Festival games: shown only to families who chose that celebration, never in general picks. */
export const CELEBRATION_ACTIVITIES: Activity[] = FESTIVALS.flatMap(([name, list]) =>
  list.filter((a) => hasTranslation(name, a) && fitsCulture(a) && !!a.celebration && offered.has(a.celebration)),
);

export const ACTIVITY_BY_ID: ReadonlyMap<string, Activity> = new Map([...everything, ...festivals].map((a) => [a.id, a]));
