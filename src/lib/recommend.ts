import type { Activity, Domain, Season } from '../data/types';
import { DOMAIN_INFO } from '../data/domains';
import { DOMAINS } from '../data/types';
import type { Mood, Reaction, Session } from '../store/model';
import { dayPart, matchesSituation, suitsWeather, WEATHER_INFO, type Situation } from './context';
import { daysBetween } from './dates';
import { INTERESTS, sharedInterest } from './interests';
import { hashString, seededRandom } from './random';
import { t } from '../i18n';

export interface RecommendContext {
  /** Effective (corrected) age in months. */
  months: number;
  /** This child's sessions (any order). */
  sessions: Session[];
  favorites: ReadonlySet<string>;
  mood?: Mood | null;
  now: Date;
  /** Varies the deterministic jitter (child id + day + shuffle count). */
  seed: number;
  /** What the child is into. Nudges ideas up; never hides any. */
  interests?: readonly string[];
  /** The parent's answer to "what's going on right now?". */
  situation?: Situation;
  /** The season the family's climate suggests. Null where the app makes no guess. */
  season?: Season | null;
  /** Suggesting for this very moment, so the time of day counts. Plans and lists leave it off. */
  live?: boolean;
}

export function isEligible(a: Activity, months: number): boolean {
  return a.minMonths <= months && months <= a.maxMonths;
}

export function eligibleActivities(all: readonly Activity[], months: number): Activity[] {
  return all.filter((a) => isEligible(a, months));
}

/** Activities that have just become age-appropriate: their range starts within the last `windowMonths`. */
export function newlyEligible(all: readonly Activity[], months: number, windowMonths = 2): Activity[] {
  if (months < 1) return [];
  return all.filter((a) => a.minMonths > 0 && isEligible(a, months) && months - a.minMonths < windowMonths);
}

/**
 * The twist to suggest for the next play, after `playsSoFar` completed plays. It rotates through
 * `variations`, so the finish screen ("next time, try…") and later reminders always agree.
 */
export function nextTwist(a: Activity, playsSoFar: number): string | null {
  const v = a.variations;
  if (!v?.length) return null;
  return v[(Math.max(1, playsSoFar) - 1) % v.length];
}

export function daySeed(childId: string, now: Date, extra = 0): number {
  return hashString(`${childId}|${now.getFullYear()}-${now.getMonth()}-${now.getDate()}|${extra}`);
}

/** Weighted count of recent play per development area (primary area 1, others 0.5). */
export function recentAreaCounts(
  sessions: Session[],
  byId: ReadonlyMap<string, Activity>,
  now: Date,
  windowDays = 14,
): Record<Domain, number> {
  const counts = Object.fromEntries(DOMAINS.map((d) => [d, 0])) as Record<Domain, number>;
  for (const s of sessions) {
    if (daysBetween(new Date(s.date), now) > windowDays) continue;
    const a = byId.get(s.activityId);
    if (!a) continue;
    a.domains.forEach((d, i) => (counts[d] += i === 0 ? 1 : 0.5));
  }
  return counts;
}

interface History {
  lastDaysAgo: number | null;
  lastReaction: Reaction | undefined;
  lastReactionDaysAgo: number | null;
  timesLoved: number;
}

function historyFor(sessions: Session[], now: Date): Map<string, History> {
  const map = new Map<string, History>();
  const sorted = [...sessions].sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
  for (const s of sorted) {
    const ago = daysBetween(new Date(s.date), now);
    const h = map.get(s.activityId);
    if (!h) {
      map.set(s.activityId, {
        lastDaysAgo: ago,
        lastReaction: s.reaction,
        lastReactionDaysAgo: s.reaction ? ago : null,
        timesLoved: s.reaction === 'loved' ? 1 : 0,
      });
    } else {
      if (!h.lastReaction && s.reaction) {
        h.lastReaction = s.reaction;
        h.lastReactionDaysAgo = ago;
      }
      if (s.reaction === 'loved') h.timesLoved++;
    }
  }
  return map;
}

const MOOD_ENERGY: Record<Mood, Record<Activity['energy'], number>> = {
  happy: { calm: 0, moderate: 0.6, active: 0.4 },
  energetic: { calm: -2, moderate: 0.6, active: 2.2 },
  fussy: { calm: 2.2, moderate: -0.5, active: -2.5 },
  sleepy: { calm: 2.4, moderate: -1, active: -3 },
};

/**
 * A quiet nudge from the clock, so the first idea of an evening isn't a chase round the house. Older children stay up
 * later, so it fades with age. A mood the parent picked outweighs it.
 */
function timeOfDayFit(a: Activity, now: Date, months: number, mood: Mood | null | undefined): number {
  if (mood) return 0;
  const part = dayPart(now);
  const lateForThisAge = part === 'night' || (part === 'evening' && months < 96);
  if (lateForThisAge) {
    if (a.energy === 'active') return -2;
    if (a.settings.includes('bedtime')) return 1.5;
    if (a.energy === 'calm') return 0.8;
    return 0;
  }
  if (part === 'morning' && a.settings.includes('bedtime') && !a.settings.includes('anywhere')) return -1;
  return 0;
}

export interface Scored {
  activity: Activity;
  score: number;
}

/** Scores activities for a child right now. Higher is better. Pure and deterministic for a given seed. */
export function scoreActivities(
  candidates: readonly Activity[],
  ctx: RecommendContext,
  byId: ReadonlyMap<string, Activity>,
): Scored[] {
  const rand = seededRandom(ctx.seed);
  const area = recentAreaCounts(ctx.sessions, byId, ctx.now);
  const history = historyFor(ctx.sessions, ctx.now);

  return candidates.map((a) => {
    let score = 0;

    // Balance: favour areas that have had less play lately.
    a.domains.forEach((d, i) => (score += (i === 0 ? 3 : 1) / (1 + area[d])));

    // Novelty and preference.
    const h = history.get(a.id);
    if (!h) score += 1;
    else {
      if (h.lastDaysAgo !== null && h.lastDaysAgo < 1) score -= 6;
      else if (h.lastDaysAgo !== null && h.lastDaysAgo < 3) score -= 3;
      else if (h.lastDaysAgo !== null && h.lastDaysAgo < 7) score -= 1;
      const recent = h.lastReactionDaysAgo !== null && h.lastReactionDaysAgo <= 30;
      if (recent && h.lastReaction === 'loved') score += 2;
      if (recent && h.lastReaction === 'liked') score += 0.5;
      if (recent && h.lastReaction === 'meh') score -= 1.5;
      if (recent && h.lastReaction === 'too-hard') score -= 2.5;
      if (recent && h.lastReaction === 'too-easy') score -= 1.5;
      score += Math.min(h.timesLoved, 3) * 0.3;
    }
    if (ctx.favorites.has(a.id)) score += 1.5;

    // Mood / energy fit.
    if (ctx.mood) {
      score += MOOD_ENERGY[ctx.mood][a.energy];
      if (ctx.mood === 'fussy' && a.tags?.includes('calm-down')) score += 1.5;
      if (ctx.mood === 'sleepy' && (a.settings.includes('bedtime') || a.tags?.includes('calm-down'))) score += 1.5;
    }

    // Right now: the clock, the weather the parent tapped, the season and what the child is into.
    if (ctx.live) score += timeOfDayFit(a, ctx.now, ctx.months, ctx.mood);
    const weather = ctx.situation?.weather;
    if (weather && suitsWeather(a, weather)) score += 4;
    if (ctx.season && a.seasons?.includes(ctx.season)) score += 0.8;
    if (sharedInterest(a, ctx.interests)) score += 1.2;

    // Age fit: prefer activities centred on the child's age over ones at the edge of their range.
    const center = (a.minMonths + a.maxMonths) / 2;
    const half = (a.maxMonths - a.minMonths) / 2 + 1;
    score += 1 - Math.min(1, Math.abs(ctx.months - center) / half);

    score += rand() * 1.5;
    return { activity: a, score };
  });
}

/** Pick the top `count` activities with distinct primary development areas. */
export function pickDistinct(scored: Scored[], count: number): Activity[] {
  const sorted = [...scored].sort((a, b) => b.score - a.score);
  const picks: Activity[] = [];
  const usedAreas = new Set<Domain>();
  for (const s of sorted) {
    if (picks.length >= count) break;
    if (usedAreas.has(s.activity.domains[0])) continue;
    picks.push(s.activity);
    usedAreas.add(s.activity.domains[0]);
  }
  // Not enough distinct areas: top up with the best remaining.
  for (const s of sorted) {
    if (picks.length >= count) break;
    if (!picks.includes(s.activity)) picks.push(s.activity);
  }
  return picks;
}

/**
 * One short, honest line saying why an activity was suggested, from the same signals the scorer uses
 * (mood, past reactions, favourites, age, area balance, novelty). Shown under the top pick on Today.
 */
export function pickReason(
  a: Activity,
  ctx: RecommendContext & { childName: string },
  byId: ReadonlyMap<string, Activity>,
): string {
  const { mood, childName: name } = ctx;
  const weather = ctx.situation?.weather;
  if (weather && suitsWeather(a, weather)) return WEATHER_INFO[weather].reason;
  if (mood === 'energetic' && a.energy === 'active') return t('Gets the wiggles out');
  if (mood === 'fussy' && (a.tags?.includes('calm-down') || a.energy === 'calm')) return t('Calming for a fussy moment');
  if (mood === 'sleepy' && a.energy === 'calm') return t('Quiet and cosy, good before sleep');

  const h = historyFor(ctx.sessions, ctx.now).get(a.id);
  if (h?.lastReaction === 'loved') return t('{name} loved this last time', { name });
  if (ctx.favorites.has(a.id)) return t('One of your favourites');
  const interest = sharedInterest(a, ctx.interests);
  if (interest) return t('Because {name} loves {interest}', { name, interest: INTERESTS[interest].label.toLowerCase() });
  if (a.minMonths > 0 && ctx.months - a.minMonths < 2) return t('New at {name}’s age', { name });

  const recent = ctx.sessions.filter((s) => daysBetween(new Date(s.date), ctx.now) <= 14);
  if (recent.length >= 3) {
    const area = recentAreaCounts(ctx.sessions, byId, ctx.now);
    const least = Math.min(...DOMAINS.map((d) => area[d]));
    if (area[a.domains[0]] === least) return t('{area} has had less play lately', { area: DOMAIN_INFO[a.domains[0]].label });
  }
  if (!h) return t('Something new to try');
  return t('A good fit for {name}’s age', { name });
}

export function recommend(
  all: readonly Activity[],
  ctx: RecommendContext,
  byId: ReadonlyMap<string, Activity>,
  count = 3,
  filter?: (a: Activity) => boolean,
): Activity[] {
  const pool = eligibleActivities(all, ctx.months).filter((a) => matchesSituation(a, ctx.situation) && (!filter || filter(a)));
  return pickDistinct(scoreActivities(pool, ctx, byId), count);
}
