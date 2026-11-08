import { describe, expect, it, vi } from 'vitest';
import type { Language } from './index';

/**
 * Each language uses only its own culture: Persian shows Persian stories, songs, festivals and Iranian games, English shows
 * English ones, and content that belongs to no one culture shows in both. These tests load the content fresh in each
 * language, the way the app does, and look at what a parent would actually see.
 */
async function contentIn(lang: Language) {
  vi.resetModules();
  const i18n = await import('./index');
  await i18n.loadLanguage(lang);
  const [activities, stories, songs, celebrations, talk, tips, guides] = await Promise.all([
    import('../data/activities'),
    import('../data/stories'),
    import('../data/songs'),
    import('../data/celebrations'),
    import('../data/talk'),
    import('../data/tips'),
    import('../data/guides'),
  ]);
  return {
    games: activities.ACTIVITIES,
    festivalGames: activities.CELEBRATION_ACTIVITIES,
    stories: stories.STORIES,
    songs: songs.SONGS,
    days: celebrations.CELEBRATIONS,
    talk: talk.TALK,
    tips: tips.TIPS,
    guides: guides.GUIDES,
  };
}

type Content = Awaited<ReturnType<typeof contentIn>>;
const at = <T extends { minMonths: number; maxMonths: number }>(list: readonly T[], m: number) => list.filter((x) => x.minMonths <= m && m <= x.maxMonths);

/** Strings in a piece of content, however deep. */
const words = (x: unknown): string[] =>
  typeof x === 'string' ? [x] : Array.isArray(x) ? x.flatMap(words) : x && typeof x === 'object' ? Object.values(x).flatMap(words) : [];

describe.each(['en', 'fa'] as const)('in %s', (lang) => {
  let c: Content;

  it('shows only its own culture, and what belongs to no one culture', async () => {
    c = await contentIn(lang);
    const foreign = [
      ...c.games.filter((a) => a.lang && a.lang !== lang).map((a) => `game ${a.id} (${a.lang})`),
      ...c.festivalGames.filter((a) => a.lang !== lang).map((a) => `festival game ${a.id} (${a.lang})`),
      ...c.stories.filter((s) => s.lang !== lang).map((s) => `story ${s.id} (${s.lang})`),
      ...c.songs.filter((s) => s.lang !== lang).map((s) => `song ${s.id} (${s.lang})`),
      ...c.days.filter((d) => d.lang !== lang).map((d) => `day ${d.id} (${d.lang})`),
      ...c.talk.filter((t) => t.lang && t.lang !== lang).map((t) => `talk card ${t.id} (${t.lang})`),
    ];
    expect(foreign).toEqual([]);
  });

  it('has stories, songs and festivals of its own', () => {
    expect(c.stories.length).toBeGreaterThanOrEqual(15);
    expect(c.songs.length).toBeGreaterThanOrEqual(15);
    expect(c.days.length).toBeGreaterThanOrEqual(lang === 'fa' ? 10 : 5);
  });

  it('has plenty to play at every age', () => {
    const thin: string[] = [];
    for (let m = 0; m <= 144; m++) {
      const n = at(c.games, m).length;
      if (n < 25) thin.push(`${m}m: ${n}`);
    }
    expect(thin).toEqual([]);
  });

  it('has stories for every age from 2, and songs from birth', () => {
    const thin: string[] = [];
    for (let m = 24; m <= 144; m += 6) if (at(c.stories, m).length < 3) thin.push(`stories at ${m}m: ${at(c.stories, m).length}`);
    for (let m = 0; m <= 48; m += 6) if (at(c.songs, m).length < 4) thin.push(`songs at ${m}m: ${at(c.songs, m).length}`);
    expect(thin).toEqual([]);
  });

  it('has a daily tip for every age', () => {
    const thin: string[] = [];
    for (let m = 0; m <= 144; m++) if (at(c.tips, m).length < 30) thin.push(`${m}m: ${at(c.tips, m).length}`);
    expect(thin).toEqual([]);
  });
});

describe('the Persian app', () => {
  it('never shows another culture’s festivals, rhymes or tales', async () => {
    const c = await contentIn('fa');
    const ids = new Set([...c.games, ...c.stories, ...c.songs, ...c.days].map((x) => x.id));
    for (const id of ['ramadan', 'eid-al-fitr', 'eid-al-adha', 'mawlid', 'earth-day', 'pat-a-cake', 'itsy-bitsy-spider', 'daloul', 'dandini-dastana', 'kakavik', 'biraye-kese', 'acchi-muite-hoi', 'lion-and-the-mouse', 'stone-soup']) {
      expect(ids.has(id), id).toBe(false);
    }
  });

  it('does not talk about other cultures in what it shows', async () => {
    const c = await contentIn('fa');
    // Whole words, and unambiguous ones only: «چینی» (porcelain) or «کردی» (you did) can't be told apart here, and «ترکی»
    // must not match inside «ترکیب».
    const MARKER_WORDS = ['کریسمس', 'هالووین', 'عید پاک', 'عید فطر', 'عید قربان', 'ماه رمضان', 'دیوالی', 'حنوکا', 'ژاپن', 'ژاپنی', 'اندونزی', 'ویتنام', 'بنگال', 'ترکیه', 'عراق', 'عربستان', 'عربی', 'ترکی', 'ازوپ', 'نصرالدین', 'سندباد', 'هزار و یک شب', 'ماما لیزا'];
    const MARKERS = new RegExp(`(?<!\\p{L})(?:${MARKER_WORDS.join('|')})(?!\\p{L})`, 'u');
    const shown = { ...c, guides: c.guides };
    const hits = Object.entries(shown).flatMap(([what, list]) =>
      (list as { id?: string; slug?: string }[]).flatMap((item) =>
        words(item)
          .filter((s) => MARKERS.test(s))
          .map((s) => `${what}/${item.id ?? item.slug}: ${s.match(MARKERS)![0]}`),
      ),
    );
    expect(hits).toEqual([]);
  });
});
