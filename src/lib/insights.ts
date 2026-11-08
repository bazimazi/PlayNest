import type { Activity, Domain } from '../data/types';
import { DOMAINS } from '../data/types';
import type { Session } from '../store/model';
import { addDays, daysBetween, startOfWeek, toISODate } from './dates';
import { isEligible } from './recommend';

export interface WeekSummary {
  sessions: number;
  minutes: number;
  daysPlayed: number;
  areas: Record<Domain, number>;
}

const zeroAreas = () => Object.fromEntries(DOMAINS.map((d) => [d, 0])) as Record<Domain, number>;

export function sessionsInRange(sessions: Session[], from: Date, toExclusive: Date): Session[] {
  return sessions.filter((s) => {
    const d = new Date(s.date);
    return d >= from && d < toExclusive;
  });
}

/** Summary of the week (Mon–Sun) containing `now`. Area counts use each activity's primary area. */
export function weekSummary(sessions: Session[], byId: ReadonlyMap<string, Activity>, now = new Date()): WeekSummary {
  const from = startOfWeek(now);
  const inWeek = sessionsInRange(sessions, from, addDays(from, 7));
  const areas = zeroAreas();
  for (const s of inWeek) {
    const a = byId.get(s.activityId);
    if (a) areas[a.domains[0]]++;
  }
  return {
    sessions: inWeek.length,
    minutes: inWeek.reduce((n, s) => n + s.minutes, 0),
    daysPlayed: new Set(inWeek.map((s) => toISODate(new Date(s.date)))).size,
    areas,
  };
}

/** All-time (or since `since`) weighted area balance: primary 1, secondary 0.5. */
export function areaBalance(sessions: Session[], byId: ReadonlyMap<string, Activity>, since?: Date): Record<Domain, number> {
  const areas = zeroAreas();
  for (const s of sessions) {
    if (since && new Date(s.date) < since) continue;
    const a = byId.get(s.activityId);
    a?.domains.forEach((d, i) => (areas[d] += i === 0 ? 1 : 0.5));
  }
  return areas;
}

/** How many times each activity has been played. */
export function playCounts(sessions: Session[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const s of sessions) counts.set(s.activityId, (counts.get(s.activityId) ?? 0) + 1);
  return counts;
}

export function favouriteActivities(sessions: Session[], limit = 5): { activityId: string; loved: number; played: number }[] {
  const map = new Map<string, { loved: number; played: number }>();
  for (const s of sessions) {
    const e = map.get(s.activityId) ?? { loved: 0, played: 0 };
    e.played++;
    if (s.reaction === 'loved') e.loved++;
    map.set(s.activityId, e);
  }
  return [...map.entries()]
    .map(([activityId, e]) => ({ activityId, ...e }))
    .filter((e) => e.loved > 0)
    .sort((a, b) => b.loved - a.loved || b.played - a.played)
    .slice(0, limit);
}

/** A loved, still age-appropriate activity that hasn't been played for a while — worth bringing back. */
export function favouriteToRevisit(
  sessions: Session[],
  byId: ReadonlyMap<string, Activity>,
  months: number,
  now = new Date(),
  minDaysAgo = 10,
): { activity: Activity; daysAgo: number; played: number } | null {
  const stats = new Map<string, { loved: number; played: number; last: string }>();
  for (const s of sessions) {
    const e = stats.get(s.activityId) ?? { loved: 0, played: 0, last: s.date };
    e.played++;
    if (s.reaction === 'loved') e.loved++;
    if (s.date > e.last) e.last = s.date;
    stats.set(s.activityId, e);
  }
  let best: { activity: Activity; daysAgo: number; played: number; loved: number } | null = null;
  for (const [id, e] of stats) {
    const a = byId.get(id);
    if (!a || e.loved === 0 || !isEligible(a, months)) continue;
    const daysAgo = daysBetween(new Date(e.last), now);
    if (daysAgo < minDaysAgo) continue;
    if (!best || e.loved > best.loved || (e.loved === best.loved && daysAgo > best.daysAgo)) best = { activity: a, daysAgo, played: e.played, loved: e.loved };
  }
  return best && { activity: best.activity, daysAgo: best.daysAgo, played: best.played };
}

/** The least-played area over the last two weeks — used for a gentle "try more of this" nudge. */
export function quietestArea(sessions: Session[], byId: ReadonlyMap<string, Activity>, now = new Date()): Domain | null {
  const recent = sessions.filter((s) => daysBetween(new Date(s.date), now) <= 14);
  if (recent.length < 3) return null;
  const areas = areaBalance(recent, byId);
  return DOMAINS.reduce((min, d) => (areas[d] < areas[min] ? d : min), DOMAINS[0]);
}
