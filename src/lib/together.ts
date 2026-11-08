import type { Activity } from '../data/types';
import { compareText, english } from '../i18n';

export type TogetherFit = 'perfect' | 'adapt' | 'helper';

export interface TogetherMatch {
  activity: Activity;
  fit: TogetherFit;
}

/** How far outside an activity's range a child may be for it to still work with a small adaptation. */
export function adaptTolerance(months: number): number {
  return Math.max(3, Math.round(months * 0.2));
}

/**
 * Activities that work for every child at once.
 * 'perfect' = every child is inside the activity's age range.
 * 'adapt'   = group-friendly, and every child is inside the range give or take a small tolerance
 *             (the older child can lead, or the younger one gets a simpler role).
 * 'helper'  = for wide age gaps: a group-friendly game for the youngest that the older children have outgrown,
 *             so they can run it as the leader — a big sibling playing *with* the baby rather than alongside.
 */
export function togetherActivities(all: readonly Activity[], ages: number[]): TogetherMatch[] {
  if (ages.length === 0) return [];
  const youngest = Math.min(...ages);
  const matches: TogetherMatch[] = [];
  for (const a of all) {
    const inside = ages.every((m) => a.minMonths <= m && m <= a.maxMonths);
    if (inside) {
      matches.push({ activity: a, fit: 'perfect' });
      continue;
    }
    const near = ages.every((m) => {
      const tol = adaptTolerance(m);
      return a.minMonths - tol <= m && m <= a.maxMonths + tol;
    });
    if (near && a.groupFriendly) {
      matches.push({ activity: a, fit: 'adapt' });
      continue;
    }
    const forYoungest = a.minMonths <= youngest && youngest <= a.maxMonths;
    const othersOutgrewIt = ages.every((m) => m === youngest || m > a.maxMonths);
    if (ages.length > 1 && a.groupFriendly && forYoungest && othersOutgrewIt) matches.push({ activity: a, fit: 'helper' });
  }
  const order: Record<TogetherFit, number> = { perfect: 0, adapt: 2, helper: 4 };
  const rank = (m: TogetherMatch) => order[m.fit] + (m.activity.groupFriendly ? 0 : 1);
  return matches.sort(
    (x, y) =>
      rank(x) - rank(y) ||
      (x.fit === 'helper' ? leadScore(y.activity) - leadScore(x.activity) : 0) ||
      compareText(x.activity.title, y.activity.title),
  );
}

/**
 * How well an older child can run this game for a baby: songs, rhymes and pretend play are easy to lead;
 * moments a grown-up has to run (meals, baths, car seats) are not.
 */
export function leadScore(a: Activity): number {
  let score = 0;
  const { title, summary } = english(a);
  if (/\b(sibling|big brother|big sister|older child)/i.test(`${title} ${summary} ${english(a.steps).join(' ')}`)) score += 3;
  if (a.tags?.some((t) => t === 'song' || t === 'classic' || t === 'pretend' || t === 'reading')) score += 2;
  if (a.materialsLevel === 'none' || a.materialsLevel === 'household') score += 1;
  if (a.settings.some((s) => s === 'bath' || s === 'mealtime' || s === 'car')) score -= 2;
  return score;
}
