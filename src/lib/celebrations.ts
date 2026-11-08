import { CELEBRATIONS } from '../data/celebrations';
import type { Celebration } from '../data/packs';
import { toISODate } from './dates';

/** The next listed day for a celebration. Dates come from a reviewed table, because `Intl` calendars get some of them wrong. */
export function nextDate(c: Celebration, now: Date): string | null {
  const today = toISODate(now);
  const days = Object.values(c.dates).flat().sort();
  return days.find((d) => d >= today) ?? null;
}

const DAY_MS = 24 * 60 * 60 * 1000;

/** The family's own celebrations coming up within `withinDays`, soonest first. Nothing is shown for anything they didn't choose. */
export function comingUp(chosen: readonly string[], now: Date, withinDays = 14): { celebration: Celebration; date: string; days: number }[] {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return CELEBRATIONS.filter((c) => chosen.includes(c.id))
    .flatMap((celebration) => {
      const date = nextDate(celebration, now);
      if (!date) return [];
      const [y, m, d] = date.split('-').map(Number);
      const days = Math.round((new Date(y, m - 1, d).getTime() - today) / DAY_MS);
      return days <= withinDays ? [{ celebration, date, days }] : [];
    })
    .sort((a, b) => a.days - b.days);
}
