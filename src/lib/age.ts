import { num, t, tn } from '../i18n';
import { addDays, daysBetween, parseISODate } from './dates';

/** Corrected age is used until this many months of chronological age (AAP/CDC guidance). */
export const CORRECT_UNTIL_MONTHS = 24;

/** The oldest age the content is written for. */
export const TOP_AGE_MONTHS = 144;

export interface AgeParts {
  months: number;
  /** Days past the last whole month. */
  days: number;
  totalDays: number;
}

export interface ChildAge {
  chronological: AgeParts;
  /** Present only while correction applies (born early and under 24 months). */
  corrected: AgeParts | null;
  /** The age used for activities and milestones (whole months, never negative). */
  months: number;
  label: string;
  correctedLabel: string | null;
}

/** Whole calendar months and leftover days from `from` to `to`. Negative spans clamp to zero. */
export function ageParts(from: Date, to: Date): AgeParts {
  const totalDays = daysBetween(from, to);
  if (totalDays <= 0) return { months: 0, days: 0, totalDays: Math.max(0, totalDays) };
  let months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
  if (to.getDate() < from.getDate()) months--;
  const anchor = new Date(from.getFullYear(), from.getMonth() + months, from.getDate());
  // If the anchor day overflowed (e.g. 31st → next month), step back to the last valid day.
  if (anchor.getDate() !== from.getDate()) anchor.setDate(0);
  return { months, days: Math.max(0, daysBetween(anchor, to)), totalDays };
}

const days = (n: number) => tn(n, '{n} day', '{n} days');
const weeks = (n: number) => tn(n, '{n} week', '{n} weeks');
const monthCount = (n: number) => tn(n, '{n} month', '{n} months');
const years = (n: number) => tn(n, '{n} year', '{n} years');

export function formatAge(p: AgeParts): string {
  if (p.totalDays < 14) return days(p.totalDays);
  if (p.months < 1) return weeks(Math.floor(p.totalDays / 7));
  if (p.months < 24) {
    const w = Math.floor(p.days / 7);
    return w > 0 ? t('{big}, {small}', { big: monthCount(p.months), small: weeks(w) }) : monthCount(p.months);
  }
  const y = Math.floor(p.months / 12);
  const rem = p.months % 12;
  return rem > 0 ? t('{big}, {small}', { big: years(y), small: monthCount(rem) }) : years(y);
}

/** "3 d", "5 wk", "7 mo", "2 y 3 mo": the compact age shown next to a name. */
export function shortAge(p: AgeParts): string {
  if (p.totalDays < 14) return t('{n} d', { n: p.totalDays });
  if (p.months < 1) return t('{n} wk', { n: Math.floor(p.totalDays / 7) });
  if (p.months < 24) return t('{n} mo', { n: p.months });
  const y = Math.floor(p.months / 12);
  const m = p.months % 12;
  return m ? t('{y} y {m} mo', { y, m }) : t('{y} y', { y });
}

export function childAge(birthDate: string, weeksEarly: number, today = new Date()): ChildAge {
  const birth = parseISODate(birthDate);
  const chronological = ageParts(birth, today);
  const corrects = weeksEarly > 0 && chronological.months < CORRECT_UNTIL_MONTHS;
  const corrected = corrects ? ageParts(addDays(birth, weeksEarly * 7), today) : null;
  // Past the top of the content range a child keeps the oldest ideas, so the app never suddenly goes empty.
  const months = Math.min((corrected ?? chronological).months, TOP_AGE_MONTHS);
  return {
    chronological,
    corrected,
    months,
    label: formatAge(chronological),
    correctedLabel: corrected ? formatAge(corrected) : null,
  };
}

/** Compact age-range label for activity cards, e.g. "6–18 months", "2–5 years", "18 months – 4 years". */
export function formatAgeRange(min: number, max: number): string {
  const unit = (m: number) => {
    if (m < 24) return { n: num(m), years: false };
    if (m % 12 === 0) return { n: num(m / 12), years: true };
    if (m % 6 === 0) return { n: `${num(Math.floor(m / 12))}½`, years: true };
    return { n: num(m), years: false };
  };
  const a = unit(min);
  const b = unit(max);
  const top = max >= 144 ? `${b.n}+` : b.n;
  if (a.years === b.years) return b.years ? t('{a}–{b} years', { a: a.n, b: top }) : t('{a}–{b} months', { a: a.n, b: top });
  return a.years ? t('{a} years – {b} months', { a: a.n, b: top }) : t('{a} months – {b} years', { a: a.n, b: top });
}
