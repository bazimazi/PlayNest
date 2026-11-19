import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { COACH } from './coach';
import { CRYING, PARENT_SUPPORT } from './crying';
import { AID_CARDS } from './firstaid';
import { GOALS } from './goals';
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

/** Every string inside a value, however deeply nested. */
const allText = (value: unknown): string[] =>
  typeof value === 'string' ? [value] : Array.isArray(value) ? value.flatMap(allText) : value && typeof value === 'object' ? Object.values(value).flatMap(allText) : [];

describe('house rules', () => {
  // The app never prints a medicine or supplement amount: amounts change (WHO lowered zinc in 2024) and depend on weight and
  // product. These are the only amounts a person has checked and allowed, each a first-aid step or a warning about units.
  const DOSE = /\b\d+(?:[.,]\d+)?\s?(?:mg|mcg|µg|micrograms?|ml|millilit(?:re|er)s?|IU)\b|mg\s?\/\s?kg|per kilo/i;
  const ALLOWED = [
    /honey|jam/i, // button-battery cards: ANZCOR and US Poison Control first-aid steps, never a medicine
    /0\.5 ml and 5 ml are very different/, // medicines-at-home: a warning about decimal points
  ];

  it('never gives a medicine or supplement amount', () => {
    const texts = [...allText(GUIDES), ...allText(TIPS), ...allText(GOALS), ...allText(COACH), ...allText(AID_CARDS), ...allText(CRYING), ...allText(PARENT_SUPPORT)];
    const doses = texts.filter((s) => DOSE.test(s) && !ALLOWED.some((ok) => ok.test(s)));
    expect(doses).toEqual([]);
  });

  it('never gives one in the Persian either', () => {
    const PERSIAN_DOSE = /[0-9۰-۹]+(?:[٫.][0-9۰-۹]+)?\s?(?:میلی‌گرم|میلی‌لیتر|میلی لیتر|میکروگرم|سی‌سی|سی سی|واحد بین‌المللی)/;
    const PERSIAN_ALLOWED = [/عسل|مربا/, /۰٫۵ میلی‌لیتر و ۵ میلی‌لیتر/];
    const dir = join(__dirname, '..', 'i18n', 'locales', 'fa');
    const doses = ['guides', 'tips', 'goals', 'coach', 'firstaid', 'crying', 'helplines']
      .flatMap((name) => Object.values(JSON.parse(readFileSync(join(dir, `${name}.json`), 'utf8')) as Record<string, string>))
      .filter((s) => PERSIAN_DOSE.test(s) && !PERSIAN_ALLOWED.some((ok) => ok.test(s)));
    expect(doses).toEqual([]);
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
