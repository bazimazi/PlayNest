import { describe, expect, it } from 'vitest';
import { ACTIVITIES, ACTIVITY_BY_ID } from '../data/activities';
import { MILESTONES, currentChecklistAge, nextChecklistAge } from '../data/milestones';
import { DOMAINS, type Activity } from '../data/types';
import type { Session } from '../store/model';
import { ageParts, childAge, formatAge, formatAgeRange, shortAge } from './age';
import { addDays, daysBetween, startOfWeek, toISODate } from './dates';
import { favouriteToRevisit, playCounts, weekSummary } from './insights';
import { generateWeekPlan, swapPlanItem } from './plan';
import { eligibleActivities, newlyEligible, nextTwist, pickReason, recommend } from './recommend';
import { leadScore, togetherActivities } from './together';

const d = (s: string) => new Date(`${s}T12:00:00`);

describe('age', () => {
  it('counts whole calendar months and leftover days', () => {
    expect(ageParts(d('2024-01-15'), d('2024-03-14'))).toMatchObject({ months: 1, days: 28 });
    expect(ageParts(d('2024-01-15'), d('2024-03-15'))).toMatchObject({ months: 2, days: 0 });
    expect(ageParts(d('2024-01-31'), d('2024-03-01'))).toMatchObject({ months: 1, days: 1 });
  });

  it('clamps future dates to zero', () => {
    expect(ageParts(d('2025-01-10'), d('2025-01-01'))).toMatchObject({ months: 0, days: 0, totalDays: 0 });
  });

  it('applies corrected age only while under 24 months', () => {
    const young = childAge('2024-01-01', 8, d('2024-07-01'));
    expect(young.chronological.months).toBe(6);
    expect(young.corrected?.months).toBe(4);
    expect(young.months).toBe(4);

    const older = childAge('2022-01-01', 8, d('2024-07-01'));
    expect(older.corrected).toBeNull();
    expect(older.months).toBe(30);
  });

  it('formats friendly labels', () => {
    expect(formatAge(ageParts(d('2024-01-01'), d('2024-01-06')))).toBe('5 days');
    expect(formatAge(ageParts(d('2024-01-01'), d('2024-01-22')))).toBe('3 weeks');
    expect(formatAge(ageParts(d('2024-01-01'), d('2024-06-15')))).toBe('5 months, 2 weeks');
    expect(formatAge(ageParts(d('2020-01-01'), d('2023-05-02')))).toBe('3 years, 4 months');
    expect(formatAgeRange(6, 18)).toBe('6–18 months');
    expect(formatAgeRange(36, 60)).toBe('3–5 years');
    expect(formatAgeRange(18, 48)).toBe('18 months – 4 years');
    expect(formatAgeRange(60, 144)).toBe("5–12+ years");
  });

  it('formats compact ages for chips', () => {
    expect(shortAge(ageParts(d('2024-01-01'), d('2024-01-06')))).toBe('5 d');
    expect(shortAge(ageParts(d('2024-01-01'), d('2024-01-22')))).toBe('3 wk');
    expect(shortAge(ageParts(d('2024-01-01'), d('2024-08-10')))).toBe('7 mo');
    expect(shortAge(ageParts(d('2020-01-01'), d('2023-05-02')))).toBe('3 y 4 mo');
    expect(shortAge(ageParts(d('2020-01-01'), d('2022-01-05')))).toBe('2 y');
  });
});

describe('dates', () => {
  it('finds Monday as the start of the week', () => {
    expect(toISODate(startOfWeek(d('2026-10-29')))).toBe('2026-10-26'); // Thursday → Monday
    expect(toISODate(startOfWeek(d('2026-11-01')))).toBe('2026-10-26'); // Sunday → Monday
  });
  it('counts days across DST changes', () => {
    expect(daysBetween(d('2026-03-28'), d('2026-04-04'))).toBe(7);
  });
});

describe('milestones', () => {
  it('has unique ids and every checklist age', () => {
    expect(new Set(MILESTONES.map((m) => m.id)).size).toBe(MILESTONES.length);
    expect([...new Set(MILESTONES.map((m) => m.ageMonths))]).toEqual([2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 48, 60]);
  });
  it('picks the current and next checklist', () => {
    expect(currentChecklistAge(0)).toBe(2);
    expect(currentChecklistAge(10)).toBe(9);
    expect(currentChecklistAge(80)).toBe(60);
    expect(nextChecklistAge(10)).toBe(12);
    expect(nextChecklistAge(60)).toBeNull();
  });
});

const NOW = d('2026-10-28'); // a Wednesday
const session = (activityId: string, daysAgo: number, extra: Partial<Session> = {}): Session => ({
  id: `${activityId}-${daysAgo}`,
  childId: 'c1',
  activityId,
  date: addDays(NOW, -daysAgo).toISOString(),
  minutes: 10,
  ...extra,
});

describe('recommend', () => {
  const ctx = { months: 8, sessions: [] as Session[], favorites: new Set<string>(), now: NOW, seed: 42 };

  it('only suggests age-appropriate activities, with distinct primary areas', () => {
    const picks = recommend(ACTIVITIES, ctx, ACTIVITY_BY_ID, 3);
    expect(picks).toHaveLength(3);
    for (const a of picks) expect(a.minMonths <= 8 && 8 <= a.maxMonths).toBe(true);
    expect(new Set(picks.map((a) => a.domains[0])).size).toBe(3);
  });

  it('is deterministic for a seed', () => {
    const a = recommend(ACTIVITIES, ctx, ACTIVITY_BY_ID).map((x) => x.id);
    const b = recommend(ACTIVITIES, ctx, ACTIVITY_BY_ID).map((x) => x.id);
    expect(a).toEqual(b);
  });

  it('avoids repeating what was just played', () => {
    const first = recommend(ACTIVITIES, ctx, ACTIVITY_BY_ID, 1)[0];
    const after = recommend(ACTIVITIES, { ...ctx, sessions: [session(first.id, 0)] }, ACTIVITY_BY_ID, 3);
    expect(after.map((a) => a.id)).not.toContain(first.id);
  });

  it('steers towards calm activities for a sleepy child', () => {
    const picks = recommend(ACTIVITIES, { ...ctx, months: 30, mood: 'sleepy' }, ACTIVITY_BY_ID, 3);
    expect(picks.every((a) => a.energy !== 'active')).toBe(true);
  });
});

describe('weekly plan', () => {
  const months = 30;
  const items = generateWeekPlan(ACTIVITIES, months, [], new Set(), 7, ACTIVITY_BY_ID, NOW);

  it('has two slots a day, no repeats, all age-appropriate', () => {
    expect(items).toHaveLength(14);
    expect(new Set(items.map((i) => i.activityId)).size).toBe(14);
    for (const it of items) {
      const a = ACTIVITY_BY_ID.get(it.activityId)!;
      expect(a.minMonths <= months && months <= a.maxMonths).toBe(true);
    }
    for (let day = 0; day < 7; day++) expect(items.filter((i) => i.day === day).map((i) => i.slot)).toEqual(['go', 'calm']);
  });

  it('covers every development area that has a primary activity at this age', () => {
    const available = new Set(eligibleActivities(ACTIVITIES, months).map((a) => a.domains[0]));
    const covered = new Set(items.map((i) => ACTIVITY_BY_ID.get(i.activityId)!.domains[0]));
    for (const area of available) expect(covered.has(area)).toBe(true);
  });

  it('puts calm activities in the calm slot when possible', () => {
    const calm = items.filter((i) => i.slot === 'calm').map((i) => ACTIVITY_BY_ID.get(i.activityId)!);
    expect(calm.filter((a) => a.energy === 'calm').length).toBeGreaterThanOrEqual(5);
  });

  it("steers away from last week's plan", () => {
    const lastWeek = new Set(items.map((i) => i.activityId));
    const next = generateWeekPlan(ACTIVITIES, months, [], new Set(), 8, ACTIVITY_BY_ID, NOW, lastWeek);
    expect(next).toHaveLength(14);
    // A repeat is only allowed when it's the sole way to keep a development area covered.
    const pool = eligibleActivities(ACTIVITIES, months);
    for (const it of next.filter((i) => lastWeek.has(i.activityId))) {
      const area = ACTIVITY_BY_ID.get(it.activityId)!.domains[0];
      expect(pool.filter((a) => a.domains[0] === area && !lastWeek.has(a.id))).toEqual([]);
    }
  });

  it('swaps an item for a new one not already in the plan', () => {
    const next = swapPlanItem(items, 3, ACTIVITIES, months, [], new Set(), 99, ACTIVITY_BY_ID, NOW);
    expect(next[3].activityId).not.toBe(items[3].activityId);
    expect(new Set(next.map((i) => i.activityId)).size).toBe(14);
  });
});

describe('play together', () => {
  it('finds activities that fit a toddler and a preschooler', () => {
    const matches = togetherActivities(ACTIVITIES, [20, 50]);
    expect(matches.length).toBeGreaterThan(0);
    for (const m of matches.filter((x) => x.fit === 'perfect')) {
      expect(m.activity.minMonths <= 20 && m.activity.maxMonths >= 50).toBe(true);
    }
    for (const m of matches.filter((x) => x.fit === 'adapt')) expect(m.activity.groupFriendly).toBe(true);
  });
});

describe('insights', () => {
  const any: Activity = ACTIVITIES[0];
  it('summarises the current week and counts streaks', () => {
    const sessions = [session(any.id, 0), session(any.id, 1), session(any.id, 2), session(any.id, 10)];
    const week = weekSummary(sessions, ACTIVITY_BY_ID, NOW); // Mon 26 – Sun 1
    expect(week.sessions).toBe(3);
    expect(week.minutes).toBe(30);
    expect(week.areas[any.domains[0]]).toBe(3);
  });

  it('knows every domain', () => {
    expect(Object.keys(weekSummary([], ACTIVITY_BY_ID, NOW).areas).sort()).toEqual([...DOMAINS].sort());
  });

  it('counts plays per activity', () => {
    const other = ACTIVITIES[1];
    const counts = playCounts([session(any.id, 0), session(other.id, 1), session(any.id, 2)]);
    expect(counts.get(any.id)).toBe(2);
    expect(counts.get(other.id)).toBe(1);
    expect(counts.has('nope')).toBe(false);
  });
});

describe('newly eligible', () => {
  it('lists only activities whose range has just started', () => {
    const fresh = newlyEligible(ACTIVITIES, 7);
    expect(fresh.length).toBeGreaterThan(0);
    for (const a of fresh) expect(a.minMonths === 6 || a.minMonths === 7).toBe(true);
    expect(newlyEligible(ACTIVITIES, 0)).toEqual([]);
  });
});

describe('favourites to revisit', () => {
  const months = 30;
  const loved = eligibleActivities(ACTIVITIES, months)[0];
  const meh = eligibleActivities(ACTIVITIES, months)[1];
  const at = (id: string, daysAgo: number, reaction?: Session['reaction']) => ({ ...session(id, daysAgo), reaction });

  it('brings back a loved activity only after a break', () => {
    expect(favouriteToRevisit([at(loved.id, 3, 'loved')], ACTIVITY_BY_ID, months, NOW)).toBeNull();
    const pick = favouriteToRevisit([at(loved.id, 20, 'loved'), at(meh.id, 25, 'meh')], ACTIVITY_BY_ID, months, NOW);
    expect(pick?.activity.id).toBe(loved.id);
    expect(pick?.daysAgo).toBe(20);
  });

  it('rotates twists so the finish screen and reminders agree', () => {
    const a = { ...loved, variations: ['one', 'two', 'three'] };
    expect(nextTwist(a, 1)).toBe('one'); // after the first play
    expect(nextTwist(a, 2)).toBe('two');
    expect(nextTwist(a, 4)).toBe('one');
    expect(nextTwist({ ...a, variations: undefined }, 1)).toBeNull();
  });
});

describe('pick reasons', () => {
  const months = 30;
  const pool = eligibleActivities(ACTIVITIES, months);
  const base = { months, sessions: [] as Session[], favorites: new Set<string>(), now: NOW, seed: 1, childName: 'Noor' };

  it('explains mood fit first, then history and favourites', () => {
    const active = pool.find((a) => a.energy === 'active')!;
    expect(pickReason(active, { ...base, mood: 'energetic' }, ACTIVITY_BY_ID)).toBe('Gets the wiggles out');
    const a = pool[0];
    expect(pickReason(a, { ...base, sessions: [{ ...session(a.id, 3), reaction: 'loved' }] }, ACTIVITY_BY_ID)).toBe('Noor loved this last time');
    expect(pickReason(a, { ...base, favorites: new Set([a.id]) }, ACTIVITY_BY_ID)).toBe('One of your favourites');
  });

  it('falls back to novelty for untried, age-centred activities', () => {
    const settled = pool.find((a) => months - a.minMonths >= 2)!;
    expect(pickReason(settled, base, ACTIVITY_BY_ID)).toBe('Something new to try');
  });
});

describe('play together for wide age gaps', () => {
  it('offers games the older child can lead for the baby', () => {
    const matches = togetherActivities(ACTIVITIES, [5, 50]);
    const helper = matches.filter((m) => m.fit === 'helper');
    expect(helper.length).toBeGreaterThan(3);
    for (const m of helper) {
      expect(m.activity.groupFriendly).toBe(true);
      expect(m.activity.minMonths <= 5 && 5 <= m.activity.maxMonths).toBe(true);
      expect(m.activity.maxMonths < 50).toBe(true);
    }
  });
});

describe('big kid leads ranking', () => {
  it('puts games an older sibling can run ahead of grown-up-run moments', () => {
    const helper = togetherActivities(ACTIVITIES, [5, 50]).filter((m) => m.fit === 'helper');
    const scores = helper.map((m) => leadScore(m.activity));
    expect(scores).toEqual([...scores].sort((a, b) => b - a));
    expect(helper[0].activity.settings.some((s) => s === 'bath' || s === 'mealtime' || s === 'car')).toBe(false);
  });
});
