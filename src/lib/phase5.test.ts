import { describe, expect, it } from 'vitest';
import type { Activity } from '../data/types';
import { childAge, formatAgeRange, TOP_AGE_MONTHS } from './age';
import { noteToHz, parseMelody } from './audio';
import { comingUp, nextDate } from './celebrations';
import { dayPart, hiddenByWeather, matchesSituation, seasonFor, suitsWeather } from './context';
import { emergencyLine, helplinesFor, suggestedAidRegion, telHref } from './emergency';
import { activityInterests, sharedInterest } from './interests';
import { pickReason, recommend, scoreActivities } from './recommend';
import { buildIndex, canonicalTerm, find, looksLikeHealthQuestion, urgentMatches, type SearchDoc } from './search';
import { chunkForSpeech } from './speech';

const game = (over: Partial<Activity> & { id: string }): Activity => ({
  title: over.id,
  emoji: '🧸',
  summary: 'A game.',
  minMonths: 0,
  maxMonths: 144,
  domains: ['movement'],
  durationMin: 5,
  energy: 'moderate',
  settings: ['indoor'],
  materialsLevel: 'none',
  materials: [],
  groupFriendly: false,
  steps: ['a', 'b', 'c'],
  talk: ['x', 'y'],
  whyItHelps: 'Because.',
  ...over,
});

describe('weather and safety', () => {
  const bath = game({ id: 'bath', settings: ['bath'] });
  const puddles = game({ id: 'puddles', settings: ['outdoor'], tags: ['water'], energy: 'active' });
  const indoor = game({ id: 'indoor' });
  const candle = game({ id: 'candle', usesFlame: true, safety: ['Adult lights it.'] });
  const garden = game({ id: 'garden', settings: ['outdoor'], energy: 'active' });

  it('takes water and outdoor-only games out in a storm', () => {
    expect(hiddenByWeather(bath, 'stormy')).toBe(true);
    expect(hiddenByWeather(puddles, 'stormy')).toBe(true);
    expect(hiddenByWeather(indoor, 'stormy')).toBe(false);
  });

  it('takes outdoor-only games and real flames out on smoky days', () => {
    expect(hiddenByWeather(garden, 'smoky')).toBe(true);
    expect(hiddenByWeather(candle, 'smoky')).toBe(true);
    expect(hiddenByWeather(indoor, 'smoky')).toBe(false);
  });

  it('never suggests a real flame in a power cut', () => {
    expect(hiddenByWeather(candle, 'powercut')).toBe(true);
  });

  it('keeps active outdoor games away on very hot days, and leaves ordinary days alone', () => {
    expect(hiddenByWeather(garden, 'hot')).toBe(true);
    expect(hiddenByWeather(garden, 'rainy')).toBe(false);
    expect(hiddenByWeather(garden, null)).toBe(false);
  });

  it('recognises games written for the weather', () => {
    expect(suitsWeather(game({ id: 'r', weather: ['rainy'] }), 'rainy')).toBe(true);
    expect(suitsWeather(game({ id: 't', tags: ['rainy-day'] }), 'rainy')).toBe(true);
    expect(suitsWeather(indoor, 'rainy')).toBe(false);
  });

  it('filters on where you are, how long you have and whether you have toys', () => {
    const car = game({ id: 'car', settings: ['car'] });
    const anywhere = game({ id: 'anywhere', settings: ['anywhere'] });
    const blocks = game({ id: 'blocks', materialsLevel: 'toy', materials: ['blocks'], durationMin: 20 });
    expect(matchesSituation(car, { setting: 'car' })).toBe(true);
    expect(matchesSituation(anywhere, { setting: 'car' })).toBe(true);
    expect(matchesSituation(indoor, { setting: 'car' })).toBe(false);
    expect(matchesSituation(blocks, { noToys: true })).toBe(false);
    expect(matchesSituation(blocks, { maxMinutes: 5 })).toBe(false);
  });

  it('works out the season only for climates that have four, and flips it in the south', () => {
    const july = new Date(2026, 6, 15);
    expect(seasonFor('temperate-north', july)).toBe('summer');
    expect(seasonFor('temperate-south', july)).toBe('winter');
    expect(seasonFor('tropical', july)).toBeNull();
    expect(seasonFor(null, july)).toBeNull();
  });

  it('splits the day', () => {
    expect(dayPart(new Date(2026, 0, 1, 8))).toBe('morning');
    expect(dayPart(new Date(2026, 0, 1, 14))).toBe('day');
    expect(dayPart(new Date(2026, 0, 1, 19))).toBe('evening');
    expect(dayPart(new Date(2026, 0, 1, 3))).toBe('night');
  });
});

describe('recommendations for right now', () => {
  const now = new Date(2026, 3, 10, 15);
  const byId = new Map<string, Activity>();
  const base = { months: 40, sessions: [], favorites: new Set<string>(), now, seed: 1 };

  it('puts a game written for the weather first, and hides the unsafe ones', () => {
    const rainy = game({ id: 'rainy', weather: ['rainy'], domains: ['senses'] });
    const plain = game({ id: 'plain' });
    const picks = recommend([plain, rainy], { ...base, situation: { weather: 'rainy' } }, byId, 2);
    expect(picks[0].id).toBe('rainy');
    const storm = recommend([game({ id: 'bath', settings: ['bath'] }), plain], { ...base, situation: { weather: 'stormy' } }, byId, 2);
    expect(storm.map((a) => a.id)).toEqual(['plain']);
  });

  it('nudges up what the child loves, and says so', () => {
    const train = game({ id: 'train', title: 'Train race' });
    const plain = game({ id: 'plain', title: 'Sit and hum' });
    const [a, b] = scoreActivities([train, plain], { ...base, interests: ['vehicles'] }, byId);
    const [c, d] = scoreActivities([train, plain], { ...base }, byId);
    expect(a.score - b.score).toBeGreaterThan(c.score - d.score);
    expect(pickReason(train, { ...base, interests: ['vehicles'], childName: 'Noor' }, byId)).toBe('Because Noor loves vehicles');
  });

  it('prefers something calm late in the day, only when suggesting for right now', () => {
    const night = new Date(2026, 3, 10, 21);
    const run = game({ id: 'run', energy: 'active' });
    const hush = game({ id: 'hush', energy: 'calm', settings: ['bedtime'] });
    const live = scoreActivities([run, hush], { ...base, months: 30, now: night, live: true }, byId);
    const plain = scoreActivities([run, hush], { ...base, months: 30, now: night }, byId);
    expect(live[1].score - live[0].score).toBeGreaterThan(plain[1].score - plain[0].score);
  });
});

describe('interests', () => {
  it('finds interests in the words of a game', () => {
    expect(activityInterests(game({ id: 'i1', title: 'Dinosaur footprints' }))).toContain('dinosaurs');
    expect(sharedInterest(game({ id: 'i2', title: 'Bus stop song' }), ['vehicles', 'music'])).toBeTruthy();
    expect(sharedInterest(game({ id: 'i3', title: 'Hum' }), ['vehicles'])).toBeNull();
    expect(sharedInterest(game({ id: 'i4', title: 'Bus' }), undefined)).toBeNull();
  });
});

describe('age', () => {
  it('never runs past the oldest content, so the app can never go empty for an older child', () => {
    const today = new Date(2026, 0, 1);
    const age = childAge('2010-01-01', 0, today);
    expect(age.months).toBe(TOP_AGE_MONTHS);
    expect(age.label).toBe('16 years');
  });

  it('labels the top of the range', () => {
    expect(formatAgeRange(96, 144)).toBe('8–12+ years');
    expect(formatAgeRange(60, 95)).not.toContain('+');
  });
});

describe('search', () => {
  const doc = (id: string, title: string, text = ''): SearchDoc => ({
    id,
    type: 'game',
    title,
    subtitle: '',
    emoji: '🧸',
    to: `/x/${id}`,
    text,
    minMonths: 0,
    maxMonths: 144,
  });
  const index = buildIndex([doc('a', 'Nappy change song'), doc('b', 'Stargazing on a blanket'), doc('c', 'Tummy time mirror'), doc('d', 'Colour sorting')]);

  it('understands words from other kinds of English', () => {
    expect(canonicalTerm('diaper')).toBe('nappy');
    expect(canonicalTerm('Stroller')).toBe('pram');
    expect(find(index, 'diaper').hits.map((h) => h.id)).toEqual(['a']);
    expect(find(index, 'color').hits.map((h) => h.id)).toEqual(['d']);
  });

  it('tolerates typos, and says when it has guessed', () => {
    const r = find(index, 'stargazng');
    expect(r.hits.map((h) => h.id)).toEqual(['b']);
    expect(r.mode).toBe('similar');
  });

  it('does not jump from a real word to a lookalike', () => {
    expect(find(index, 'dummy').hits.map((h) => h.id)).not.toContain('c');
  });

  it('copes with a word that is also a JavaScript property', () => {
    expect(() => find(index, 'constructor')).not.toThrow();
    expect(() => find(index, 'hasOwnProperty')).not.toThrow();
  });

  it('says so when nothing matches', () => {
    expect(find(index, 'xylophone').mode).toBe('none');
  });

  it('always pins help for words that may mean an emergency', () => {
    expect(urgentMatches('she is choking')[0]?.to).toBe('/help/first-aid');
    expect(urgentMatches('swallowed a battery')[0]?.to).toBe('/help/first-aid');
    expect(urgentMatches('I want to die')[0]?.to).toBe('/help/you?view=self');
    expect(urgentMatches('I might hurt my baby')[0]?.to).toBe('/help/you?view=baby');
    expect(urgentMatches('I can’t cope')[0]?.to).toBe('/help/you');
    expect(urgentMatches('baby won’t stop crying')[0]?.to).toBe('/help/crying');
    expect(urgentMatches('rainy day games')).toEqual([]);
  });

  it('recognises a health question it can not answer', () => {
    expect(looksLikeHealthQuestion('rash on tummy')).toBe(true);
    expect(looksLikeHealthQuestion('rainy day')).toBe(false);
  });
});

describe('sound and speech', () => {
  it('turns notes into frequencies', () => {
    expect(noteToHz('A4')).toBeCloseTo(440, 5);
    expect(noteToHz('C4')).toBeCloseTo(261.63, 1);
    expect(noteToHz('F#4')).toBeCloseTo(369.99, 1);
    expect(noteToHz('Bb4')).toBeCloseTo(466.16, 1);
  });

  it('reads a melody, including rests', () => {
    const m = parseMelody('C4:1 R:0.5 E4:2');
    expect(m).toHaveLength(3);
    expect(m[1].hz).toBeNull();
    expect(m[1].beats).toBe(0.5);
    expect(m[2].beats).toBe(2);
  });

  it('splits long text so a voice does not stall', () => {
    const long = `${'One clause, '.repeat(40)}and the end.`;
    const chunks = chunkForSpeech(`Short. ${long}`);
    expect(chunks[0]).toBe('Short.');
    expect(chunks.every((c) => c.length <= 190)).toBe(true);
    expect(chunks.join(' ')).toContain('and the end.');
  });
});

describe('where you are', () => {
  it('suggests whose first-aid steps to show, never guessing where it can not know', () => {
    expect(suggestedAidRegion('US')).toBe('us');
    expect(suggestedAidRegion('GB')).toBe('uk');
    expect(suggestedAidRegion('NZ')).toBe('anz');
    expect(suggestedAidRegion('DE')).toBe('eu');
    expect(suggestedAidRegion('IR')).toBeNull();
    expect(suggestedAidRegion(null)).toBeNull();
  });

  it('prefers the number a parent entered, and is honest when it has none', () => {
    expect(emergencyLine('US', '123').number).toBe('123');
    expect(emergencyLine('US', '123').own).toBe(true);
    expect(emergencyLine(null, null).number).toBeNull();
  });

  it('puts the one-number-for-everything first, and always offers something where there is a table row', () => {
    // France lists 112 for everything and 15 for an ambulance: 112 mustn't be hidden.
    const fr = emergencyLine('FR', null);
    expect(fr.number).toBe('112');
    expect(fr.others.some((o) => o.number === '15')).toBe(true);
    // Guinea has no ambulance or general number: offer what there is, and ask the parent to check it.
    const gn = emergencyLine('GN', null);
    expect(gn.number).toBeTruthy();
    expect(gn.checkLocally).toBe(true);
  });

  it('knows the well-known numbers', () => {
    expect(emergencyLine('US', null).number).toBe('911');
    expect(emergencyLine('AU', null).number).toBe('000');
    expect(emergencyLine('NZ', null).number).toBe('111');
  });

  it('makes a dialable link', () => {
    expect(telHref('+44 800 123-456')).toBe('tel:+44800123456');
  });

  it('puts crisis lines first, and has a fallback for everywhere else', () => {
    const { lines, world } = helplinesFor('GB');
    if (lines.length > 1) {
      const kinds = lines.map((l) => l.kind);
      expect(kinds.indexOf('crisis')).toBeLessThanOrEqual(kinds.lastIndexOf('parent') === -1 ? kinds.length : kinds.lastIndexOf('parent'));
    }
    expect(world.length).toBeGreaterThan(0);
    expect(helplinesFor(null).lines).toEqual([]);
  });
});

describe('celebrations', () => {
  const c = {
    id: 'x',
    name: 'X',
    emoji: '🎉',
    kind: 'shared' as const,
    lang: 'en',
    whoCelebrates: 'Some families',
    about: 'About',
    dates: { '2026': ['2026-03-20'], '2027': ['2027-03-21'] },
    approximate: false,
    refs: [],
  };

  it('finds the next listed day', () => {
    expect(nextDate(c, new Date(2026, 0, 1))).toBe('2026-03-20');
    expect(nextDate(c, new Date(2026, 5, 1))).toBe('2027-03-21');
    expect(nextDate(c, new Date(2030, 5, 1))).toBeNull();
  });

  it('shows nothing the family did not choose', () => {
    expect(comingUp([], new Date(2026, 2, 19))).toEqual([]);
  });
});
