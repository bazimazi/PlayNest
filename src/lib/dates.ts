import { formatDate, language, t } from '../i18n';

/** Local-calendar date helpers. Dates are stored as YYYY-MM-DD in the user's local time zone. */

const pad = (n: number) => String(n).padStart(2, '0');

export function toISODate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function parseISODate(s: string): Date {
  const [y, m, d] = s.slice(0, 10).split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function addDays(d: Date, days: number): Date {
  const r = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  r.setDate(r.getDate() + days);
  return r;
}

/** Whole calendar days from a to b (b − a), ignoring time of day and DST shifts. */
export function daysBetween(a: Date, b: Date): number {
  const ua = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const ub = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((ub - ua) / 86_400_000);
}

/** The week starts on Saturday in Persian, and on Monday otherwise. `Date.getDay()` counts from Sunday. */
const firstDayOfWeek = () => (language() === 'fa' ? 6 : 1);

/** 0 = the first day of the week … 6 = the last. */
export function weekdayIndex(d: Date): number {
  return (d.getDay() - firstDayOfWeek() + 7) % 7;
}

/** The first day of the week containing `d`. */
export function startOfWeek(d: Date): Date {
  return addDays(d, -weekdayIndex(d));
}

/** Names of the days in the order this language's week runs. Monday 1 Jan 2024 anchors the count. */
const weekNames = (style: 'narrow' | 'short' | 'long') =>
  Array.from({ length: 7 }, (_, i) => formatDate(new Date(2024, 0, 1 + ((i + firstDayOfWeek() - 1 + 7) % 7)), { weekday: style }));

/** Persian's short names are its full ones (چهارشنبه), which won't fit a day's column, so it uses one letter. */
export const WEEKDAYS_SHORT = weekNames(language() === 'fa' ? 'narrow' : 'short');
export const WEEKDAYS = weekNames('long');

export function formatDay(d: Date): string {
  return formatDate(d, { weekday: 'short', day: 'numeric', month: 'short' });
}

export function formatRelativeDay(iso: string, now = new Date()): string {
  const d = new Date(iso);
  const diff = daysBetween(d, now);
  if (diff === 0) return t('Today');
  if (diff === 1) return t('Yesterday');
  if (diff < 7) return formatDate(d, { weekday: 'long' });
  return formatDate(d, { day: 'numeric', month: 'short', year: diff > 300 ? 'numeric' : undefined });
}

export function greeting(now = new Date()): string {
  const h = now.getHours();
  if (h < 5) return t('Hello, night owl');
  if (h < 12) return t('Good morning');
  if (h < 17) return t('Good afternoon');
  return t('Good evening');
}
