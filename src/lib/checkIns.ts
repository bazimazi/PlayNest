import { GOAL_BY_ID } from '../data/goals';
import type { ParentingGoal } from '../data/packs';
import type { GoalProgress } from '../store/model';

const DAY_MS = 24 * 60 * 60 * 1000;
/**
 * Days after finishing a goal when a light check-in is offered: about a week, a month and three months. Programme gains
 * mostly last, and a light follow-up seems to help them last; these intervals are a reasoned choice, not tested values.
 */
export const CHECK_IN_DAYS = [7, 30, 90];

/** Finished means the parent reached the last practice and chose to finish, not set it aside part-way. */
function finished(goal: ParentingGoal, p: GoalProgress): boolean {
  return !!p.closedAt && !!p.tried[goal.steps[goal.steps.length - 1].id];
}

/** The finished goal whose next check-in is due, if any. One at a time, so the page never piles up questions. */
export function dueCheckIn(goals: GoalProgress[], now = Date.now()): { progress: GoalProgress; goal: ParentingGoal } | undefined {
  for (const progress of goals) {
    const goal = GOAL_BY_ID.get(progress.goalId);
    if (!goal || progress.settled || !finished(goal, progress)) continue;
    const n = progress.checkIns.length;
    if (n >= CHECK_IN_DAYS.length) continue;
    // Measured from the last check-in, or from finishing if there hasn't been one (or the goal was finished again since).
    const since = Math.max(Date.parse(progress.closedAt!) || 0, ...progress.checkIns.map((c) => Date.parse(c.at) || 0));
    const gap = n === 0 ? CHECK_IN_DAYS[0] : CHECK_IN_DAYS[n] - CHECK_IN_DAYS[n - 1];
    if (now - since >= gap * DAY_MS) return { progress, goal };
  }
  return undefined;
}
