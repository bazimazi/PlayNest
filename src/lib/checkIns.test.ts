import { describe, expect, it } from 'vitest';
import { GOAL_BY_ID } from '../data/goals';
import type { GoalProgress } from '../store/model';
import { dueCheckIn } from './checkIns';

const DAY = 24 * 60 * 60 * 1000;
const goal = GOAL_BY_ID.get('calmer-bedtimes')!;
const last = goal.steps[goal.steps.length - 1].id;
const closed = '2026-11-01T10:00:00Z';
const at = (days: number) => Date.parse(closed) + days * DAY;

const progress = (over: Partial<GoalProgress> = {}): GoalProgress => ({
  goalId: goal.id,
  startedAt: '2026-10-01T10:00:00Z',
  current: last,
  tried: { [goal.steps[0].id]: '2026-10-02T10:00:00Z', [last]: '2026-10-30T10:00:00Z' },
  felt: {},
  note: '',
  closedAt: closed,
  checkIns: [],
  settled: false,
  ...over,
});

describe('check-ins after a finished goal', () => {
  it('waits about a week after finishing', () => {
    expect(dueCheckIn([progress()], at(6))).toBeUndefined();
    expect(dueCheckIn([progress()], at(7))?.goal.id).toBe(goal.id);
  });

  it('then about a month and three months after finishing, and no more', () => {
    const one = progress({ checkIns: [{ at: new Date(at(7)).toISOString(), how: 'most-days' }] });
    expect(dueCheckIn([one], at(29))).toBeUndefined();
    expect(dueCheckIn([one], at(30))).toBeDefined();
    const two = progress({ checkIns: [...one.checkIns, { at: new Date(at(30)).toISOString(), how: 'later' }] });
    expect(dueCheckIn([two], at(89))).toBeUndefined();
    expect(dueCheckIn([two], at(90))).toBeDefined();
    const three = progress({ checkIns: [...two.checkIns, { at: new Date(at(90)).toISOString(), how: 'sometimes' }] });
    expect(dueCheckIn([three], at(400))).toBeUndefined();
  });

  it('never asks about a goal set aside part-way, an open goal, or one the parent called done', () => {
    expect(dueCheckIn([progress({ tried: { [goal.steps[0].id]: closed } })], at(30))).toBeUndefined();
    expect(dueCheckIn([progress({ closedAt: null })], at(30))).toBeUndefined();
    expect(dueCheckIn([progress({ settled: true })], at(30))).toBeUndefined();
  });
});
