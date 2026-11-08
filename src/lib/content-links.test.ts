import { describe, expect, it } from 'vitest';
import { ACTIVITIES, ACTIVITY_BY_ID, CELEBRATION_ACTIVITIES } from '../data/activities';
import { CELEBRATIONS } from '../data/celebrations';
import { COACH } from '../data/coach';
import { CRYING, PARENT_SUPPORT } from '../data/crying';
import { AID_CARDS } from '../data/firstaid';
import { GUIDES } from '../data/guides';
import { HELPLINES } from '../data/helplines';
import { AID_REGIONS } from '../data/packs';
import { SONGS } from '../data/songs';
import { STAGES } from '../data/stages';
import { STORIES } from '../data/stories';
import { TALK } from '../data/talk';
import { validateActivities } from '../data/validate';
import { ADAPTATIONS } from '../data/adaptations';
import { playReminderCalendar } from './calendar';
import { parseMelody } from './audio';
import { buildIndex, find } from './search';
import { allSearchDocs } from './searchDocs';

describe('search finds the right things in the real content', () => {
  const index = buildIndex(allSearchDocs());
  const titles = (q: string) => find(index, q).hits.slice(0, 8).map((h) => h.title.toLowerCase());

  it('understands other kinds of English', () => {
    expect(titles('diaper').some((t) => t.includes('nappy'))).toBe(true);
  });

  it('finds help by the words a parent would use', () => {
    expect(find(index, 'tantrum').hits.some((h) => h.type === 'help')).toBe(true);
    expect(find(index, 'meltdown').hits.some((h) => h.type === 'help')).toBe(true);
    expect(find(index, 'biting').hits.some((h) => h.id === 'help:biting')).toBe(true);
  });

  it('finds first aid by name', () => {
    expect(find(index, 'choking').hits.filter((h) => h.type === 'firstaid').length).toBeGreaterThanOrEqual(2);
    expect(find(index, 'burn').hits.some((h) => h.type === 'firstaid')).toBe(true);
  });

  it('finds songs and stories by culture', () => {
    expect(find(index, 'lullaby').hits.some((h) => h.type === 'song')).toBe(true);
    expect(find(index, 'persian').hits.length).toBeGreaterThan(0);
  });

  it('survives a typo', () => {
    expect(find(index, 'bedtimee').hits.length).toBeGreaterThan(0);
  });
});

describe('content that points at other content', () => {
  it('festival games are valid and belong to a real celebration', () => {
    expect(validateActivities(CELEBRATION_ACTIVITIES)).toEqual([]);
    const ids = new Set(CELEBRATIONS.map((c) => c.id));
    expect(CELEBRATION_ACTIVITIES.filter((a) => !a.celebration || !ids.has(a.celebration)).map((a) => a.id)).toEqual([]);
  });

  it('festival games never mix into everyday suggestions, and vice versa', () => {
    expect(ACTIVITIES.filter((a) => a.celebration).map((a) => a.id)).toEqual([]);
    const general = new Set(ACTIVITIES.map((a) => a.id));
    expect(CELEBRATION_ACTIVITIES.filter((a) => general.has(a.id)).map((a) => a.id)).toEqual([]);
  });

  it('every celebration with activities can reach them', () => {
    for (const a of CELEBRATION_ACTIVITIES) expect(ACTIVITY_BY_ID.get(a.id)).toBeDefined();
  });

  it('a hard moment always leads to a real game at each age it covers', () => {
    const problems: string[] = [];
    for (const s of COACH) {
      for (const band of s.bands) {
        const m = band.minMonths;
        const found = ACTIVITIES.some(
          (a) => a.minMonths <= m && m <= a.maxMonths && (a.tags?.some((t) => s.later.tags.includes(t)) || a.domains.some((d) => s.later.domains.includes(d))),
        );
        if (!found) problems.push(`${s.id} at ${m} months`);
      }
    }
    expect(problems).toEqual([]);
  });

  it('every age from 12 months up has hard moments, and every age has a stage card', () => {
    for (let m = 12; m <= 144; m += 6) expect(COACH.some((s) => s.minMonths <= m && m <= s.maxMonths), `coach at ${m}`).toBe(true);
    for (let m = 0; m <= 144; m++) expect(STAGES.filter((s) => s.minMonths <= m && m <= s.maxMonths)).toHaveLength(1);
  });

  it('stories start at 2, and songs start at birth', () => {
    expect(SONGS.some((s) => s.minMonths === 0)).toBe(true);
    expect(STORIES.some((s) => s.minMonths <= 24)).toBe(true);
    for (let m = 24; m <= 144; m += 12) expect(STORIES.some((s) => s.minMonths <= m && m <= s.maxMonths), `stories at ${m}`).toBe(true);
    for (const band of ['3-5', '6-8', '9-12'] as const) expect(TALK.filter((c) => c.band === band).length).toBeGreaterThan(50);
  });

  it('a melody never has a note that can not be played', () => {
    for (const s of SONGS) {
      if (!s.melody) continue;
      for (const n of parseMelody(s.melody.notes)) {
        expect(n.beats, s.id).toBeGreaterThan(0);
        if (n.hz !== null) expect(n.hz, s.id).toBeGreaterThan(100);
      }
    }
  });
});

describe('safety content', () => {
  const regions = Object.keys(AID_REGIONS);

  it('choking and CPR are never one-size-fits-all', () => {
    const locked = AID_CARDS.filter((c) => /choking|cpr/i.test(c.id));
    expect(locked.length).toBeGreaterThanOrEqual(4);
    for (const c of locked) {
      expect(c.regions.all, c.id).toBeUndefined();
      for (const r of regions) expect(c.regions[r as keyof typeof c.regions], `${c.id}/${r}`).toBeDefined();
    }
  });

  it('never tells anyone to give a baby abdominal thrusts', () => {
    const baby = AID_CARDS.filter((c) => /baby/i.test(c.id));
    for (const c of baby) {
      for (const [r, steps] of Object.entries(c.regions)) {
        const text = steps?.steps.join(' ').toLowerCase() ?? '';
        expect(text.includes('abdominal thrust') && !text.includes('no abdominal'), `${c.id}/${r}`).toBe(false);
      }
    }
  });

  it('follows each body on the thing they disagree about: Australia and NZ use chest thrusts for a child', () => {
    const child = AID_CARDS.find((c) => c.id === 'choking-child');
    expect(child?.regions.anz?.steps.join(' ').toLowerCase()).toContain('chest thrust');
    expect(child?.regions.anz?.steps.join(' ').toLowerCase()).not.toContain('abdominal thrust');
    // The US card says the same thing in plainer words: a fist on the tummy, thrusting upwards.
    const us = child?.regions.us?.steps.join(' ').toLowerCase() ?? '';
    expect(us).toContain('fist on the tummy');
    expect(us).toContain('upward thrusts');
    expect(us).toContain('5 back blows');
  });

  it('first-aid cards print no phone number: the screen shows the local one', () => {
    for (const c of AID_CARDS) {
      for (const steps of Object.values(c.regions)) {
        const text = steps?.steps.join(' ') ?? '';
        expect(/\b(911|999|112|000)\b/.test(text), c.id).toBe(false);
      }
    }
  });

  it('no remedy is recommended for crying, and never shaking is said plainly', () => {
    expect(CRYING.neverShake.toLowerCase()).toContain('shake');
    const soothing = CRYING.soothe.map((s) => s.text).join(' ').toLowerCase();
    for (const remedy of ['gripe water', 'simethicone', 'probiotic', 'reuteri']) expect(soothing.includes(remedy), remedy).toBe(false);
  });

  it('crisis wording follows safe-messaging rules', () => {
    const all = [
      PARENT_SUPPORT.hurtSelf.opening,
      PARENT_SUPPORT.hurtSelf.afterYes,
      PARENT_SUPPORT.hurtSelf.afterNo,
      PARENT_SUPPORT.hurtBaby.opening,
      ...PARENT_SUPPORT.hurtBaby.steps,
      PARENT_SUPPORT.privacy,
    ]
      .join(' ')
      .toLowerCase();
    expect(all).not.toMatch(/\b(commit(ted)? suicide|successful|method|overdose|hang|hanging)\b/);
    expect(PARENT_SUPPORT.privacy.toLowerCase()).toContain('can');
  });

  it('every country with lines has a way through, and the world directory is there for the rest', () => {
    expect(HELPLINES.WORLD?.length).toBeGreaterThan(0);
    // A line that says it isn't a crisis service must never be offered as one.
    for (const [code, lines] of Object.entries(HELPLINES)) {
      for (const l of lines) {
        if (/not a crisis/i.test(l.note ?? '')) expect(l.kind, `${code}/${l.name}`).not.toBe('crisis');
      }
    }
    // Numbers the research could not confirm must not creep in.
    const iran = HELPLINES.IR ?? [];
    expect(iran.some((l) => l.phone?.replace(/\s/g, '') === '1480' && l.kind !== 'talk')).toBe(false);
  });

  it('no game is suggested with a real flame and no safety note', () => {
    const all = [...ACTIVITIES, ...CELEBRATION_ACTIVITIES];
    expect(all.filter((a) => a.usesFlame && !a.safety?.length).map((a) => a.id)).toEqual([]);
  });

  it('every game has at least 3 adaptation lines per barrier, so the toolkit never comes up empty', () => {
    const fits = (l: (typeof ADAPTATIONS)[number], a: (typeof ACTIVITIES)[number]) =>
      (!l.whenEnergy?.length || l.whenEnergy.includes(a.energy)) &&
      (!l.whenSetting?.length || l.whenSetting.some((s) => a.settings.includes(s))) &&
      (!l.whenTag?.length || l.whenTag.some((t) => a.tags?.includes(t)));
    const thin: string[] = [];
    for (const a of ACTIVITIES) {
      for (const need of ['see', 'hear', 'reach', 'too-much', 'too-fast', 'words'] as const) {
        if (ADAPTATIONS.filter((l) => l.need === need && fits(l, a)).length < 3) thin.push(`${a.id}/${need}`);
      }
    }
    expect(thin).toEqual([]);
  });

  it('guides have a shelf', () => {
    expect(GUIDES.filter((g) => !g.topic).map((g) => g.slug)).toEqual([]);
  });
});

describe('the calendar reminder', () => {
  it('is a valid weekly event, three times a week, and starts in the future', () => {
    const ics = playReminderCalendar(new Date(2026, 10, 4, 18, 0));
    expect(ics).toContain('BEGIN:VCALENDAR');
    expect(ics).toContain('RRULE:FREQ=WEEKLY;BYDAY=MO,WE,SA');
    expect(ics).toContain('\r\n');
    const start = /DTSTART:(\d{8}T\d{6})/.exec(ics)?.[1];
    expect(start).toBe('20261107T173000'); // Wednesday evening has passed, so Saturday
  });
});
