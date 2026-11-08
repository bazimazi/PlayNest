import { describe, expect, it } from 'vitest';
import { DOMAINS } from '../types';
import { validateActivities } from '../validate';
import { ACTIVITIES } from './index';

describe('all activities', () => {
  it('are valid and ids are unique across files', () => {
    expect(validateActivities(ACTIVITIES)).toEqual([]);
  });

  it('have unique titles', () => {
    const norm = (t: string) => t.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
    const seen = new Map<string, string>();
    const clashes: string[] = [];
    for (const a of ACTIVITIES) {
      const other = seen.get(norm(a.title));
      if (other) clashes.push(`${other} / ${a.id}`);
      seen.set(norm(a.title), a.id);
    }
    expect(clashes).toEqual([]);
  });

  it('give every age plenty of choice', () => {
    const thin: string[] = [];
    for (let m = 0; m <= 144; m++) {
      const n = ACTIVITIES.filter((a) => a.minMonths <= m && m <= a.maxMonths).length;
      if (n < 35) thin.push(`${m}m: ${n}`);
    }
    expect(thin).toEqual([]);
  });

  it('cover every development area at every age band', () => {
    const bands = [1, 4, 7, 10, 15, 21, 30, 42, 54, 66, 84, 102, 114, 126, 138];
    const gaps: string[] = [];
    for (const m of bands) {
      const eligible = ACTIVITIES.filter((a) => a.minMonths <= m && m <= a.maxMonths);
      for (const d of DOMAINS) if (!eligible.some((a) => a.domains.includes(d))) gaps.push(`${m}m:${d}`);
    }
    expect(gaps).toEqual([]);
  });
});
