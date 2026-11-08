import { hasTranslation, localize } from '../../i18n';
import type { Activity } from '../types';
import { infantActivities } from './infant';
import { celebrationActivities } from './celebrate';
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
];
BANDS.forEach(([name, list]) => localize(name, list));
localize('activities-celebrate', celebrationActivities);

const everything = BANDS.flatMap(([, list]) => list);

/** In another language, a game that hasn't been translated is not suggested or listed. A journal entry can still find it. */
const readable = new Set(BANDS.flatMap(([name, list]) => list.filter((a) => hasTranslation(name, a)).map((a) => a.id)));

/** Everything that can be suggested to any family. */
export const ACTIVITIES: Activity[] = everything.filter((a) => readable.has(a.id));

/** Festival games: shown only to families who chose that celebration, never in general picks. */
export const CELEBRATION_ACTIVITIES: Activity[] = celebrationActivities.filter((a) => hasTranslation('activities-celebrate', a));

export const ACTIVITY_BY_ID: ReadonlyMap<string, Activity> = new Map([...everything, ...celebrationActivities].map((a) => [a.id, a]));
