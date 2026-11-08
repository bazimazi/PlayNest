import { useCallback, useEffect } from 'react';
import { ACTIVITIES, ACTIVITY_BY_ID } from '../data/activities';
import { startOfWeek, toISODate } from '../lib/dates';
import { generateWeekPlan } from '../lib/plan';
import { hashString } from '../lib/random';
import { useActiveChild, useChildSessions, useFavoriteSet, useToday } from './hooks';
import type { WeekPlan } from './model';
import { actions, useStore } from './store';

/**
 * This week's plan for the active child, created automatically the first time it's needed each week.
 * A new plan steers away from the one it replaces (last week's, or this week's on "New plan").
 */
export function useWeekPlan(): { plan: WeekPlan | null; rebuild: (seed: number) => void } {
  const { child, age } = useActiveChild();
  const now = useToday();
  const sessions = useChildSessions(child?.id);
  const favorites = useFavoriteSet();
  const stored = useStore((s) => (child ? s.plans[child.id] : undefined));
  const weekStart = toISODate(startOfWeek(now));
  const plan = stored && stored.weekStart === weekStart && stored.items.length > 0 ? stored : null;
  const months = age?.months ?? 0;

  const rebuild = useCallback(
    (seed: number) => {
      if (!child) return;
      const avoid = new Set(stored?.items.map((i) => i.activityId));
      const items = generateWeekPlan(ACTIVITIES, months, sessions, favorites, seed, ACTIVITY_BY_ID, now, avoid);
      actions.setPlan(child.id, { weekStart, seed, items });
    },
    [child, stored, months, sessions, favorites, now, weekStart],
  );

  useEffect(() => {
    if (child && !plan) rebuild(hashString(`${child.id}|${weekStart}`));
    // Only when the child or week changes, or the plan goes missing.
  }, [child?.id, weekStart, plan === null]);

  return { plan, rebuild };
}
