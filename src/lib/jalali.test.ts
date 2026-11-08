import { describe, expect, it } from 'vitest';
import { isJalaliLeap, isoToJalali, jalaliMonthLength, jalaliToIso } from './jalali';

const persian = new Intl.DateTimeFormat('en-u-ca-persian-nu-latn', { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'UTC' });

const viaIntl = (d: Date) => {
  const parts = Object.fromEntries(persian.formatToParts(d).map((p) => [p.type, p.value]));
  return { year: Number(parts.year), month: Number(parts.month), day: Number(parts.day) };
};

describe('the Persian calendar', () => {
  it('agrees with Intl on every day a child in the app could be born or a first could happen', () => {
    for (let t = Date.UTC(1990, 0, 1); t < Date.UTC(2060, 0, 1); t += 86_400_000) {
      const d = new Date(t);
      const iso = d.toISOString().slice(0, 10);
      const j = isoToJalali(iso);
      expect(j, iso).toEqual(viaIntl(d));
      expect(jalaliToIso(j), iso).toBe(iso);
    }
  });

  it('knows known dates', () => {
    expect(isoToJalali('2024-03-20')).toEqual({ year: 1403, month: 1, day: 1 });
    expect(jalaliToIso({ year: 1405, month: 8, day: 14 })).toBe('2026-11-05');
  });

  it('has the right month lengths, leap years included', () => {
    expect(isJalaliLeap(1403)).toBe(true);
    expect(isJalaliLeap(1404)).toBe(false);
    expect(jalaliMonthLength(1403, 12)).toBe(30);
    expect(jalaliMonthLength(1404, 12)).toBe(29);
    expect(jalaliMonthLength(1404, 6)).toBe(31);
    expect(jalaliMonthLength(1404, 7)).toBe(30);
  });
});
