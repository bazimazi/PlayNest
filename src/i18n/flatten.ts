/**
 * What in the content is words, and so needs translating. Used by the tooling and the tests, never by the app itself:
 * the app replaces whatever its language's file names and leaves the rest alone.
 */

/** Ids, enums, citations and words that are already in their own language. */
const NOT_WORDS = new Set([
  'id', 'slug', 'key', 'emoji', 'url', 'color', 'tone', 'type', 'kind', 'via', 'domains', 'tags', 'settings', 'energy',
  'materialsLevel', 'sources', 'source', 'weather', 'seasons', 'celebration', 'checkedOn', 'group', 'topic', 'evidence',
  'stance', 'refs', 'melody', 'original', 'roman', 'nativeTitle', 'nativeName', 'dates', 'whenEnergy', 'whenSetting',
  'whenTag', 'need', 'band', 'relatedTags', 'phone', 'category', 'themes', 'basedOn', 'textLine', 'lang',
]);

/** Fields that are words elsewhere but proper names in this collection. */
const NAMES_HERE: Record<string, ReadonlySet<string>> = {
  helplines: new Set(['name']),
};

const keyOf = (item: unknown, index: number): string => {
  if (item && typeof item === 'object') {
    const { id, slug } = item as { id?: unknown; slug?: unknown };
    if (typeof id === 'string') return id;
    if (typeof slug === 'string') return slug;
  }
  return String(index);
};

/** An item from another language's culture: that language's app shows it, so it is never translated into this one. */
const elsewhere = (item: unknown, lang: string | undefined): boolean => {
  const own = item && typeof item === 'object' ? (item as { lang?: unknown }).lang : undefined;
  return !!lang && typeof own === 'string' && own !== lang;
};

/**
 * Every string worth translating in a collection, by the dotted path `localize` will look for. Given a language, it leaves
 * out items from another language's culture: the Persian app never shows an English nursery rhyme, so there is nothing to
 * translate.
 */
export function flatten(name: string, data: unknown, lang?: string): Record<string, string> {
  const out: Record<string, string> = {};
  const names = NAMES_HERE[name];
  // Inside a song in this very language, the words are already the reader's own: the English meaning under each line
  // isn't shown (see Songs.tsx), so it has nothing to be translated into.
  const visit = (value: unknown, path: string, own: boolean) => {
    if (typeof value === 'string') {
      if (/\p{L}/u.test(value)) out[path] = value;
    } else if (Array.isArray(value)) {
      value.forEach((item, i) => {
        if (elsewhere(item, lang)) return;
        const mine = own || (!!lang && !!item && typeof item === 'object' && (item as { lang?: unknown }).lang === lang);
        visit(item, path ? `${path}.${keyOf(item, i)}` : keyOf(item, i), mine);
      });
    } else if (value && typeof value === 'object') {
      for (const [k, v] of Object.entries(value)) {
        if (own && k === 'english') continue;
        if (!NOT_WORDS.has(k) && !names?.has(k)) visit(v, path ? `${path}.${k}` : k, own);
      }
    }
  };
  visit(data, '', false);
  return out;
}

/** Recorded next to each translation, so a later change to the English shows up as a translation that has gone stale. */
export function fingerprint(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}
