/**
 * Languages. English is the source: every string in the code and the data is English, and that English is also the key
 * for its translation, so a missing translation shows English rather than a blank.
 *
 * The language is settled before any other module runs (see main.tsx), and changing it reloads the app. So `t()` is safe
 * in a module-level constant, and content modules can be translated in place as they load.
 *
 * This file must stay free of imports: every content chunk depends on it, so it has to be able to run first.
 */
export const LANGUAGES = {
  en: { name: 'English', dir: 'ltr', intl: undefined },
  fa: { name: 'فارسی', dir: 'rtl', intl: 'fa-IR' },
} as const satisfies Record<string, { name: string; dir: 'ltr' | 'rtl'; intl: string | undefined }>;

export type Language = keyof typeof LANGUAGES;

type PluralEntry = string | Partial<Record<Intl.LDMLPluralRule, string>>;
export type Params = Record<string, string | number>;

const STATE_KEY = 'playnest:state';
const FILES = import.meta.glob<{ default: Record<string, unknown> }>('./locales/*/*.json');

let current: Language = 'en';
let catalog: Record<string, PluralEntry> = {};
const overlays: Record<string, Record<string, string>> = {};

/** Every translatable collection seen so far, for the tooling. */
export const registry = new Map<string, unknown>();

export const language = (): Language => current;
export const isRtl = (): boolean => LANGUAGES[current].dir === 'rtl';

export const isLanguage = (v: unknown): v is Language => typeof v === 'string' && Object.hasOwn(LANGUAGES, v);

/** The parent's choice, or else the first language on the device we have. index.html repeats this before first paint. */
export function preferredLanguage(saved: unknown, device: readonly string[]): Language {
  if (isLanguage(saved)) return saved;
  for (const tag of device) {
    const base = tag.slice(0, 2).toLowerCase();
    if (isLanguage(base)) return base;
  }
  return 'en';
}

function savedLanguage(): unknown {
  try {
    return (JSON.parse(localStorage.getItem(STATE_KEY) ?? '{}') as { settings?: { language?: unknown } }).settings?.language;
  } catch {
    return null;
  }
}

function applyToDocument(lang: Language) {
  document.documentElement.lang = lang;
  document.documentElement.dir = LANGUAGES[lang].dir;
}

/** Loads a language's files. Only tests and `initLanguage` should call this: everything else assumes it ran first. */
export async function loadLanguage(lang: Language): Promise<void> {
  current = lang;
  catalog = {};
  if (lang === 'en') return;
  const prefix = `./locales/${lang}/`;
  await Promise.all(
    Object.entries(FILES)
      .filter(([path]) => path.startsWith(prefix))
      .map(async ([path, load]) => {
        const name = path.slice(prefix.length, -'.json'.length);
        const { default: data } = await load();
        if (name === 'ui') catalog = data as Record<string, PluralEntry>;
        else overlays[name] = data as Record<string, string>;
      }),
  );
}

/** Runs once, before the app is imported. A language that can't be loaded gives way to English, never to a blank app. */
export async function initLanguage(): Promise<void> {
  const lang = preferredLanguage(savedLanguage(), globalThis.navigator?.languages ?? []);
  applyToDocument(lang);
  try {
    await loadLanguage(lang);
  } catch {
    current = 'en';
    catalog = {};
    applyToDocument('en');
  }
}

// ---------- Strings ----------

/**
 * Keeps a name in another script from scrambling the sentence around it. Only for words: a bare number or symbol has to
 * follow the sentence's own direction.
 */
const isolate = (s: string) => (LANGUAGES[current].dir === 'rtl' && /\p{L}/u.test(s) ? `⁨${s}⁩` : s);

function fill(text: string, params?: Params): string {
  if (!params) return text;
  return text.replace(/\{(\w+)\}/g, (whole, key: string) => {
    if (!Object.hasOwn(params, key)) return whole;
    const value = params[key];
    return typeof value === 'number' ? num(value) : isolate(value);
  });
}

/** `t('Hello {name}', { name })`. The first argument must be a literal: the tests read them straight from the source. */
export function t(source: string, params?: Params): string {
  const entry = catalog[source];
  return fill(typeof entry === 'string' ? entry : source, params);
}

/** For one English word with two meanings: `tc('audio', 'Play')` has its own translation, under `audio|Play`. */
export function tc(context: string, source: string, params?: Params): string {
  const entry = catalog[`${context}|${source}`];
  return fill(typeof entry === 'string' ? entry : source, params);
}

/** `tn(n, '{n} play', '{n} plays')`. `{n}` is filled in for you, in the language's own digits. */
export function tn(count: number, one: string, other: string, params?: Params): string {
  const rule = new Intl.PluralRules(LANGUAGES[current].intl ?? 'en').select(count);
  const entry = catalog[`${one}|${other}`];
  const text = typeof entry === 'string' ? entry : (entry?.[rule] ?? entry?.other ?? (count === 1 ? one : other));
  return fill(text, { n: count, ...params });
}

// ---------- Numbers, dates and order ----------

const PERSIAN_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
const formats = new Map<string, Intl.NumberFormat>();

/** A number in the language's own digits. Use it for any number that is shown and not already inside `t()`. */
export function num(n: number, options?: Intl.NumberFormatOptions): string {
  if (current === 'en' && !options) return String(n);
  const id = `${current}|${JSON.stringify(options ?? {})}`;
  let format = formats.get(id);
  if (!format) {
    format = new Intl.NumberFormat(LANGUAGES[current].intl, { useGrouping: false, ...options });
    formats.set(id, format);
  }
  return format.format(n);
}

/** Digits inside text that is already written, such as a phone number on screen. */
export function localDigits(s: string): string {
  return current === 'fa' ? s.replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)]) : s;
}

/** Keyboards in Persian and Arabic type their own digits. Everything that reads a number or dials one needs these. */
export function asciiDigits(s: string): string {
  return s.replace(/[۰-۹٠-٩]/g, (d) => {
    const code = d.charCodeAt(0);
    return String(code >= 0x06f0 ? code - 0x06f0 : code - 0x0660);
  });
}

/** For `toLocaleDateString` and friends. English keeps following the device (en-GB and en-US write dates differently). */
export const intlLocale = (): string | undefined => LANGUAGES[current].intl;

/** `fa-IR` is the Persian calendar, so this gives Persian dates without any other change. */
export const formatDate = (d: Date, options?: Intl.DateTimeFormatOptions): string => d.toLocaleDateString(intlLocale(), options);

/** The day of the month. English keeps a plain number on every device, where `day: 'numeric'` alone would show 6日 on a Japanese phone. */
export const dayOfMonth = (d: Date): string => (current === 'en' ? String(d.getDate()) : formatDate(d, { day: 'numeric' }));

export const compareText = (a: string, b: string): number => a.localeCompare(b, intlLocale());

/**
 * For comparing what someone typed with what is on screen. Keyboards differ: Arabic ي and ك are the same letters as Persian
 * ی and ک, and the half-space is often left out. Accents go too, so "perez" finds "Pérez".
 */
export function foldText(s: string): string {
  return s
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/[ةۀ]/g, 'ه')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ؤ/g, 'و')
    .replace(/[\u200c\u0640\u064b-\u065f]/g, '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

/** A name in its own script, shown under a title. Not in Persian when it's in the script the title is already in. */
export const showsOwnScript = (native: string | undefined): boolean => !!native && !(current === 'fa' && /[\u0600-\u06ff]/.test(native));

/** A run of items in a sentence. Persian has its own comma. */
export const commaList = (items: readonly string[]): string => items.join(current === 'fa' ? '، ' : ', ');

// ---------- Content ----------

const keyOf = (item: unknown, index: number): string => {
  if (item && typeof item === 'object') {
    const { id, slug } = item as { id?: unknown; slug?: unknown };
    if (typeof id === 'string') return id;
    if (typeof slug === 'string') return slug;
  }
  return String(index);
};

/** The English each translated string replaced, by the array or object that holds it. */
const originals = new WeakMap<object, Record<string, string>>();

function replace(holder: object, key: string | number, value: string, map: Record<string, string>, at: string) {
  if (!Object.hasOwn(map, at)) return;
  const replaced = originals.get(holder) ?? {};
  replaced[key] = value;
  originals.set(holder, replaced);
  (holder as Record<string | number, unknown>)[key] = map[at];
}

/** The dotted path of each string in a collection is its key in the language's file. */
function applyOverlay(node: unknown, path: string, map: Record<string, string>) {
  if (Array.isArray(node)) {
    node.forEach((item, i) => {
      const at = path ? `${path}.${keyOf(item, i)}` : keyOf(item, i);
      if (typeof item === 'string') replace(node, i, item, map, at);
      else applyOverlay(item, at, map);
    });
  } else if (node && typeof node === 'object') {
    for (const [key, value] of Object.entries(node)) {
      const at = path ? `${path}.${key}` : key;
      if (typeof value === 'string') replace(node, key, value, map, at);
      else applyOverlay(value, at, map);
    }
  }
}

/**
 * An array or object of content as it was in English. Code that decides something by reading the words, rather than
 * showing them, reads this, so its word lists keep working in every language. Only one level deep: pass the inner array
 * too (`english(a)` and `english(a.steps)`).
 */
export function english<T extends object>(holder: T): T {
  const replaced = originals.get(holder);
  if (!replaced) return holder;
  return (Array.isArray(holder) ? Object.assign([...holder], replaced) : { ...holder, ...replaced }) as T;
}

/** Whether this item has been translated. English always has. */
export function hasTranslation(name: string, item: { id?: string; slug?: string }): boolean {
  if (current === 'en') return true;
  const map = overlays[name];
  if (!map) return false;
  const key = item.id ?? item.slug;
  return Object.hasOwn(map, `${key}.title`) || Object.hasOwn(map, `${key}.name`) || Object.hasOwn(map, `${key}.text`);
}

/**
 * Translates a content collection in place as its module loads. Call it once, at the end of the module.
 *
 * `hideMissing` is for libraries of games, stories and the like: in another language, an item that hasn't been translated
 * leaves the list rather than showing a parent a page they may not be able to read. Anything that looks an item up by id
 * for a saved record already has to cope with it being gone.
 */
export function localize(name: string, data: unknown, options?: { hideMissing?: boolean }): void {
  registry.set(name, data);
  if (current === 'en') return;
  const map = overlays[name];
  if (map) applyOverlay(data, '', map);
  if (options?.hideMissing && Array.isArray(data)) {
    const kept = data.filter((item) => hasTranslation(name, item as { id?: string }));
    data.length = 0;
    data.push(...kept);
  }
}
