import type { Activity, Domain } from '../data/types';
import { DOMAINS } from '../data/types';
import type { PlanItem, PlanSlot, Session } from '../store/model';
import { eligibleActivities, scoreActivities } from './recommend';
import { seededRandom, shuffled } from './random';
import { t } from '../i18n';

export const PLAN_DAYS = 7;
export const SLOTS: PlanSlot[] = ['go', 'calm'];

export const SLOT_INFO: Record<PlanSlot, { label: string; emoji: string }> = {
  go: { label: t('Get moving'), emoji: '☀️' },
  calm: { label: t('Wind down'), emoji: '🌙' },
};

const slotFits = (a: Activity, slot: PlanSlot) => (slot === 'calm' ? a.energy === 'calm' : a.energy !== 'calm');

/**
 * Builds a balanced 7-day plan with one "go" and one "calm" activity per day.
 * Guarantees every development area appears as a primary area at least once when the age allows it,
 * avoids repeats while there are enough activities, and is deterministic for a given seed.
 * Activities in `avoid` (e.g. last week's plan) are only used when nothing else fits, so weeks stay fresh.
 */
export function generateWeekPlan(
  all: readonly Activity[],
  months: number,
  sessions: Session[],
  favorites: ReadonlySet<string>,
  seed: number,
  byId: ReadonlyMap<string, Activity>,
  now = new Date(),
  avoid: ReadonlySet<string> = new Set(),
): PlanItem[] {
  const pool = eligibleActivities(all, months);
  if (pool.length === 0) return [];
  const ranked = scoreActivities(pool, { months, sessions, favorites, now, seed }, byId)
    .map((s) => (avoid.has(s.activity.id) ? { ...s, score: s.score - 6 } : s))
    .sort((a, b) => b.score - a.score)
    .map((s) => s.activity);

  const grid: (Activity | null)[][] = Array.from({ length: PLAN_DAYS }, () => SLOTS.map(() => null));
  const used = new Set<string>();
  const rand = seededRandom(seed ^ 0x9e3779b9);

  const freeCells = () => {
    const cells: { day: number; s: number }[] = [];
    for (let day = 0; day < PLAN_DAYS; day++) for (let s = 0; s < SLOTS.length; s++) if (!grid[day][s]) cells.push({ day, s });
    return cells;
  };

  // 1. One activity per development area, spread across different days.
  const areas: Domain[] = shuffled(DOMAINS, rand);
  let dayCursor = 0;
  for (const area of areas) {
    const choice = ranked.find((a) => !used.has(a.id) && a.domains[0] === area);
    if (!choice) continue;
    const preferred = SLOTS.indexOf(choice.energy === 'calm' ? 'calm' : 'go');
    let placed = false;
    for (let k = 0; k < PLAN_DAYS && !placed; k++) {
      const day = (dayCursor + k) % PLAN_DAYS;
      if (!grid[day][preferred]) {
        grid[day][preferred] = choice;
        placed = true;
        dayCursor = day + 1;
      }
    }
    if (placed) used.add(choice.id);
  }

  // 2. Fill remaining cells with the best unused activity that fits the slot.
  for (const { day, s } of freeCells()) {
    const slot = SLOTS[s];
    const choice =
      ranked.find((a) => !used.has(a.id) && slotFits(a, slot)) ??
      ranked.find((a) => !used.has(a.id)) ??
      ranked.find((a) => slotFits(a, slot)) ??
      ranked[0];
    grid[day][s] = choice;
    used.add(choice.id);
  }

  return grid.flatMap((cells, day) =>
    cells.map((a, s) => ({ day, slot: SLOTS[s], activityId: (a as Activity).id, done: false })),
  );
}

/** Replace one plan item with the best alternative that fits the slot and isn't already in the plan. */
export function swapPlanItem(
  items: PlanItem[],
  index: number,
  all: readonly Activity[],
  months: number,
  sessions: Session[],
  favorites: ReadonlySet<string>,
  seed: number,
  byId: ReadonlyMap<string, Activity>,
  now = new Date(),
): PlanItem[] {
  const target = items[index];
  if (!target) return items;
  const inPlan = new Set(items.map((i) => i.activityId));
  const pool = eligibleActivities(all, months).filter((a) => !inPlan.has(a.id));
  if (pool.length === 0) return items;
  const ranked = scoreActivities(pool, { months, sessions, favorites, now, seed }, byId).sort(
    (a, b) => b.score - a.score,
  );
  const choice = (ranked.find((r) => slotFits(r.activity, target.slot)) ?? ranked[0]).activity;
  return items.map((it, i) => (i === index ? { ...it, activityId: choice.id, done: false } : it));
}
