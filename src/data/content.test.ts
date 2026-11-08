import { describe, expect, it } from 'vitest';
import { GUIDES } from './guides';
import { SOURCES } from './sources';
import { TIPS } from './tips';
import { SOURCE_IDS, TAGS } from './types';

describe('tips', () => {
  it('have unique ids, short text and valid sources and ages', () => {
    const ids = new Set<string>();
    const problems: string[] = [];
    for (const t of TIPS) {
      if (ids.has(t.id)) problems.push(`${t.id}: duplicate id`);
      ids.add(t.id);
      if (t.text.length > 200) problems.push(`${t.id}: text too long (${t.text.length})`);
      if (t.minMonths < 0 || t.maxMonths > 144 || t.minMonths > t.maxMonths) problems.push(`${t.id}: bad age range`);
      if (t.source && !SOURCE_IDS.includes(t.source)) problems.push(`${t.id}: unknown source`);
    }
    expect(problems).toEqual([]);
  });

  it('give every age at least two months of daily tips without repeats', () => {
    const thin: string[] = [];
    for (let m = 0; m <= 144; m++) {
      const n = TIPS.filter((t) => t.minMonths <= m && m <= t.maxMonths).length;
      if (n < 60) thin.push(`${m}m: ${n}`);
    }
    expect(thin).toEqual([]);
  });
});

describe('guides', () => {
  it('have unique slugs, valid sources and related tags, and some content', () => {
    const slugs = new Set<string>();
    const problems: string[] = [];
    for (const g of GUIDES) {
      if (slugs.has(g.slug)) problems.push(`${g.slug}: duplicate slug`);
      slugs.add(g.slug);
      if (g.blocks.length < 3) problems.push(`${g.slug}: too short`);
      for (const s of g.sources) if (!SOURCE_IDS.includes(s)) problems.push(`${g.slug}: unknown source ${s}`);
      for (const t of g.relatedTags ?? []) if (!TAGS.includes(t)) problems.push(`${g.slug}: unknown tag ${t}`);
    }
    expect(problems).toEqual([]);
  });
});

describe('sources', () => {
  it('has an https entry for every source id', () => {
    for (const id of SOURCE_IDS) {
      expect(SOURCES[id]?.id).toBe(id);
      expect(SOURCES[id].url).toMatch(/^https:\/\//);
    }
  });
});
