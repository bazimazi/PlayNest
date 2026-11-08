import MiniSearch from 'minisearch';
import { foldText, t } from '../i18n';

/** Anything search can find. */
export type HitType = 'help' | 'firstaid' | 'game' | 'guide' | 'story' | 'song' | 'stage';

export interface SearchDoc {
  id: string;
  type: HitType;
  title: string;
  subtitle: string;
  emoji: string;
  to: string;
  text: string;
  minMonths: number;
  maxMonths: number;
}

/** The app's own words are British; parents may not be. One canonical word per concept, at index and at query time. */
const SYNONYMS: Record<string, string> = {
  diaper: 'nappy',
  diapers: 'nappy',
  nappies: 'nappy',
  pacifier: 'dummy',
  binky: 'dummy',
  stroller: 'pram',
  pushchair: 'pram',
  buggy: 'pram',
  crib: 'cot',
  color: 'colour',
  colors: 'colour',
  meltdown: 'tantrum',
  tantrums: 'tantrum',
  mom: 'mum',
  mommy: 'mum',
  mummy: 'mum',
  flashlight: 'torch',
  soccer: 'football',
  apartment: 'flat',
  pediatrician: 'doctor',
  paediatrician: 'doctor',
  gp: 'doctor',
};

const fold = foldText;
const stem = (w: string) => {
  if (w.length > 4 && w.endsWith('ies')) return `${w.slice(0, -3)}y`;
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
  return w;
};

const synonym = (w: string) => (Object.hasOwn(SYNONYMS, w) ? SYNONYMS[w] : undefined);

export function canonicalTerm(term: string): string {
  const w = fold(term);
  return synonym(w) ?? stem(synonym(stem(w)) ?? w);
}

export function buildIndex(docs: SearchDoc[]): MiniSearch<SearchDoc> {
  const index = new MiniSearch<SearchDoc>({
    idField: 'id',
    fields: ['title', 'text'],
    storeFields: ['type', 'title', 'subtitle', 'emoji', 'to', 'minMonths', 'maxMonths'],
    processTerm: canonicalTerm,
    searchOptions: {
      boost: { title: 3 },
      combineWith: 'AND',
      prefix: (t) => t.length >= 4,
    },
  });
  index.addAll(docs);
  return index;
}

export type Hit = Omit<SearchDoc, 'text'>;
export type MatchMode = 'exact' | 'similar' | 'partial' | 'none';

/** Real words we know have no content of their own should say so, not jump to a lookalike. "Dummy" must not find "tummy". */
const NEVER_FUZZY = new Set(['dummy', 'teething', 'nappy', 'cot', 'pram', 'mum']);

/**
 * Exact words first; typo-tolerant only when that finds little, and labelled honestly. Fuzzy matching alone sends
 * "diaper" to a stargazing game, so it's a fallback, not the default.
 */
export function find(index: MiniSearch<SearchDoc>, query: string): { hits: Hit[]; mode: MatchMode } {
  const q = query.trim();
  if (!q) return { hits: [], mode: 'none' };
  const toHit = (r: Record<string, unknown>) => r as unknown as Hit & { id: string };
  const exact = index.search(q, { fuzzy: false }).map(toHit);
  if (exact.length >= 3) return { hits: exact, mode: 'exact' };
  const words = q.split(/\s+/).map(canonicalTerm);
  if (!words.some((w) => NEVER_FUZZY.has(w))) {
    const similar = index
      .search(q, { fuzzy: (t) => (t.length < 4 ? false : t.length < 8 ? 1 : 2), weights: { prefix: 0.7, fuzzy: 0.3 } })
      .map(toHit);
    if (similar.length) {
      const seen = new Set(exact.map((h) => h.id));
      return { hits: [...exact, ...similar.filter((h) => !seen.has(h.id))], mode: exact.length ? 'exact' : 'similar' };
    }
  }
  if (exact.length) return { hits: exact, mode: 'exact' };
  const any = index.search(q, { combineWith: 'OR', fuzzy: false }).map(toHit);
  return { hits: any, mode: any.length ? 'partial' : 'none' };
}

/**
 * Whole Persian words, whichever keyboard typed them. `\b` only knows Latin letters, and without edges "تب" (fever) would be
 * found inside "کتاب" (book). A `*` lets a word take endings; use it with care, since "تب*" would also find "تبلت" (tablet).
 */
const persianWords = (words: string[]) => {
  const letters = '[\\p{L}\\p{M}]';
  const each = words.map((w) => fold(w).trim().split(/\s+/).join('\\s+').replace(/\*$/, `${letters}*`));
  return new RegExp(`(?:^|[^\\p{L}\\p{M}])(?:${each.join('|')})(?=$|[^\\p{L}\\p{M}])`, 'u');
};

/**
 * Words that mean someone may need help now. These skip ranking, so the right card is always first, whatever else
 * matches. Each maps to a screen that works offline.
 */
const URGENT: { re: RegExp; fa: RegExp; title: string; subtitle: string; emoji: string; to: string }[] = [
  { re: /\b(chok\w*|can'?t breathe|not breathing|cpr|unconscious|unresponsive|collaps\w*|emergency|ambulance|poison\w*|swallow\w*|batter(y|ies)|burn\w*|scald\w*|seizure\w*|fit\b|bleed\w*|drown\w*|fever|high temperature|meningitis|sepsis)\b/i, fa: persianWords(['خفگی', 'خفه*', 'نفس نمی‌کشد', 'نفس نمی‌کشه', 'نمی‌تواند نفس بکشد', 'نمی‌تونه نفس بکشه', 'نفسش بند', 'احیا*', 'بیهوش*', 'از هوش رفت*', 'غش*', 'بی‌پاسخ', 'اورژانس*', 'آمبولانس', 'مسموم*', 'سم', 'زهر', 'قورت داد*', 'بلعید*', 'باتری*', 'سوخت*', 'سوزاند*', 'تاول', 'آب جوش', 'تشنج*', 'خونریزی*', 'غرق*', 'تب', 'تبش', 'تبدار', 'دمای بالا', 'مننژیت', 'سپسیس', 'عفونت خون', 'برق گرفت*', 'آنافیلاکسی']), title: t('In an emergency'), subtitle: t('First aid and your emergency number'), emoji: '🚑', to: '/help/first-aid' },
  { re: /\b(suicid\w*|kill myself|want to die|end my life|hurt myself|self.?harm)\b/i, fa: persianWords(['خودکشی', 'خودم را بکشم', 'خودمو بکشم', 'می‌خواهم بمیرم', 'میخوام بمیرم', 'کاش بمیرم', 'کاش مرده بودم', 'به زندگی‌ام پایان', 'به زندگیم پایان', 'به خودم آسیب', 'خودزنی']), title: t('Get help now'), subtitle: t('One tap to someone who can help'), emoji: '💛', to: '/help/you?view=self' },
  { re: /\b(hurt my (baby|child|kid)|shake|shaking the baby)\b/i, fa: persianWords(['به بچه‌ام آسیب', 'به بچم آسیب', 'به نوزادم آسیب', 'به کودکم آسیب', 'بچه‌ام را بزنم', 'بچمو بزنم', 'تکان دادن نوزاد', 'تکان دادن بچه', 'نوزاد را تکان', 'بچه را تکان', 'بچه رو تکون']), title: t('Get help now'), subtitle: t('What to do first, and who to call'), emoji: '💛', to: '/help/you?view=baby' },
  { re: /\b(can'?t cope|cannot cope|depress\w*|postnatal|postpartum|overwhelm\w*|burn.?out|exhausted|hopeless)\b/i, fa: persianWords(['نمی‌توانم ادامه', 'نمی‌تونم ادامه', 'دیگر نمی‌کشم', 'دیگه نمی‌کشم', 'از پسش برنمیام', 'طاقت ندارم', 'افسرده*', 'افسردگی', 'پس از زایمان', 'بعد از زایمان', 'فرسود*', 'خسته‌ام', 'خسته شدم', 'خیلی خسته', 'کلافه*', 'ناامید*', 'کم آوردم', 'بریدم']), title: t('When it’s too much'), subtitle: t('Support for you, and who to call'), emoji: '💛', to: '/help/you' },
  { re: /\b(crying|won'?t stop crying|colic|inconsolable|screaming baby)\b/i, fa: persianWords(['گریه*', 'کولیک', 'قولنج', 'آرام نمی‌شود', 'آروم نمی‌شه', 'جیغ می‌زند', 'جیغ میزنه']), title: t('When crying won’t stop'), subtitle: t('What helps, and when to step away'), emoji: '🍼', to: '/help/crying' },
];

export function urgentMatches(query: string): (typeof URGENT)[number][] {
  // Phone keyboards type a curly apostrophe, and "can’t cope" must still be heard.
  const typed = query.replace(/[’‘`]/g, "'");
  const persian = fold(query);
  return URGENT.filter((u) => u.re.test(typed) || u.fa.test(persian));
}

/** Shown when a search looks like a health question the app can't answer. */
const HEALTH_PERSIAN = persianWords(['بثورات', 'جوش', 'کهیر', 'استفراغ', 'بالا آورد*', 'مریض*', 'بیمار*', 'دارو*', 'دوز', 'علائم', 'علامت', 'سرفه*', 'عفونت گوش', 'اسهال', 'آلرژی', 'حساسیت', 'واکسن*', 'دندان درآوردن', 'لکه*']);

export const looksLikeHealthQuestion = (q: string) =>
  /\b(rash|vomit\w*|sick|ill|medicine|dose|symptom\w*|cough\w*|ear infection|diarrh\w*|allerg\w*|vaccin\w*|teething|spots?)\b/i.test(q) || HEALTH_PERSIAN.test(fold(q));
