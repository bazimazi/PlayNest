/**
 * The Persian (Jalali) calendar, for entering dates. Showing them needs none of this: `Intl` with `fa-IR` already does.
 * Arithmetic after jalaali-js (MIT), following Borkowski. `jalali.test.ts` checks it day by day against `Intl`.
 */
const BREAKS = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];

const div = (a: number, b: number) => Math.trunc(a / b);
const mod = (a: number, b: number) => a - Math.trunc(a / b) * b;

export interface JalaliDate {
  year: number;
  /** 1 = Farvardin … 12 = Esfand */
  month: number;
  day: number;
}

function jalaliYearInfo(jy: number): { leap: number; gy: number; march: number } {
  const gy = jy + 621;
  let leapJ = -14;
  let jp = BREAKS[0];
  let jump = 0;
  for (let i = 1; i < BREAKS.length; i++) {
    const jm = BREAKS[i];
    jump = jm - jp;
    if (jy < jm) break;
    leapJ += div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  let n = jy - jp;
  leapJ += div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) leapJ += 1;
  const leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
  const march = 20 + leapJ - leapG;
  if (jump - n < 6) n = n - jump + div(jump + 4, 33) * 33;
  let leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) leap = 4;
  return { leap, gy, march };
}

function gregorianToDayNumber(gy: number, gm: number, gd: number): number {
  const d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
  return d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
}

function dayNumberToGregorian(n: number): { gy: number; gm: number; gd: number } {
  let j = 4 * n + 139361631;
  j += div(div(4 * n + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = div(mod(j, 1461), 4) * 5 + 308;
  const gd = div(mod(i, 153), 5) + 1;
  const gm = mod(div(i, 153), 12) + 1;
  const gy = div(j, 1461) - 100100 + div(8 - gm, 6);
  return { gy, gm, gd };
}

export function isJalaliLeap(jy: number): boolean {
  return jalaliYearInfo(jy).leap === 0;
}

export function jalaliMonthLength(jy: number, jm: number): number {
  if (jm <= 6) return 31;
  if (jm <= 11) return 30;
  return isJalaliLeap(jy) ? 30 : 29;
}

const pad = (n: number) => String(n).padStart(2, '0');

/** "2024-03-20" → 1403/1/1. */
export function isoToJalali(iso: string): JalaliDate {
  const [y, m, d] = iso.slice(0, 10).split('-').map(Number);
  const n = gregorianToDayNumber(y, m, d);
  const { gy } = dayNumberToGregorian(n);
  let year = gy - 621;
  const info = jalaliYearInfo(year);
  let k = n - gregorianToDayNumber(gy, 3, info.march);
  if (k >= 0) {
    if (k <= 185) return { year, month: 1 + div(k, 31), day: mod(k, 31) + 1 };
    k -= 186;
  } else {
    year -= 1;
    k += 179;
    if (info.leap === 1) k += 1;
  }
  return { year, month: 7 + div(k, 30), day: mod(k, 30) + 1 };
}

/** 1403/1/1 → "2024-03-20". */
export function jalaliToIso({ year, month, day }: JalaliDate): string {
  const { gy, march } = jalaliYearInfo(year);
  const n = gregorianToDayNumber(gy, 3, march) + (month - 1) * 31 - div(month, 7) * (month - 7) + day - 1;
  const g = dayNumberToGregorian(n);
  return `${g.gy}-${pad(g.gm)}-${pad(g.gd)}`;
}
