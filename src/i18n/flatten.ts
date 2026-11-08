/**
 * What in the content is words, and so needs translating. Used by the tooling and the tests, never by the app itself:
 * the app replaces whatever its language's file names and leaves the rest alone.
 */

/** Ids, enums, citations and words that are already in their own language. */
const NOT_WORDS = new Set([
  'id', 'slug', 'key', 'emoji', 'url', 'color', 'tone', 'type', 'kind', 'via', 'domains', 'tags', 'settings', 'energy',
  'materialsLevel', 'sources', 'source', 'weather', 'seasons', 'celebration', 'checkedOn', 'group', 'topic', 'evidence',
  'stance', 'refs', 'melody', 'original', 'roman', 'nativeTitle', 'nativeName', 'dates', 'whenEnergy', 'whenSetting',
  'whenTag', 'need', 'band', 'relatedTags', 'phone', 'category', 'themes', 'basedOn', 'textLine',
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

/** Every string worth translating in a collection, by the dotted path `localize` will look for. */
export function flatten(name: string, data: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  const names = NAMES_HERE[name];
  const visit = (value: unknown, path: string) => {
    if (typeof value === 'string') {
      if (/\p{L}/u.test(value)) out[path] = value;
    } else if (Array.isArray(value)) {
      value.forEach((item, i) => visit(item, path ? `${path}.${keyOf(item, i)}` : keyOf(item, i)));
    } else if (value && typeof value === 'object') {
      for (const [k, v] of Object.entries(value)) {
        if (!NOT_WORDS.has(k) && !names?.has(k)) visit(v, path ? `${path}.${k}` : k);
      }
    }
  };
  visit(data, '');
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
