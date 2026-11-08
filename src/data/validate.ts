import {
  DOMAINS,
  ENERGIES,
  MATERIAL_LEVELS,
  SEASONS,
  SETTINGS,
  SOURCE_IDS,
  TAGS,
  WEATHERS,
  type Activity,
} from './types';

const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
/** An ISO 639 language code: 'fa', 'en', 'haw'. */
export const LANG = /^[a-z]{2,3}$/;
const MAX_MONTHS = 144;

/**
 * Emoji added in Emoji 13.0 or later render as empty boxes on Windows 10 and older Android phones.
 * Covers the post-12.0 parts of the Symbols & Pictographs Extended-A block plus the scattered 13.0+ additions.
 */
export const NEWER_EMOJI =
  /[\u{1FA74}\u{1FA7B}-\u{1FA7F}\u{1FA83}-\u{1FA8F}\u{1FA96}-\u{1FAFF}\u{1F972}\u{1F977}\u{1F978}\u{1F90C}\u{1F6D6}\u{1F6D7}\u{1F6DC}\u{1F6FB}\u{1F6FC}\u{1F9CB}\u{1F9CC}\u{1F7F0}]/u;

/** Returns human-readable problems with a list of activities. Empty array = valid. */
export function validateActivities(list: Activity[]): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();

  for (const a of list) {
    const at = `[${a.id ?? '?'}]`;
    const err = (msg: string) => errors.push(`${at} ${msg}`);

    if (!a.id || !KEBAB.test(a.id)) err('id must be kebab-case');
    if (seen.has(a.id)) err('duplicate id');
    seen.add(a.id);

    if (!a.title?.trim()) err('title required');
    if (a.title && a.title.length > 48) err(`title too long (${a.title.length} > 48)`);
    if (!a.emoji?.trim()) err('emoji required');
    if (NEWER_EMOJI.test(a.emoji ?? '')) err(`emoji ${a.emoji} is too new for many devices (use Emoji 12.0 or older)`);
    if (!a.summary?.trim()) err('summary required');
    if (a.summary && a.summary.length > 140) err(`summary too long (${a.summary.length} > 140)`);

    if (!Number.isInteger(a.minMonths) || !Number.isInteger(a.maxMonths)) err('age range must be integers');
    if (a.minMonths < 0 || a.maxMonths > MAX_MONTHS) err(`age range must be within 0–${MAX_MONTHS}`);
    if (a.minMonths > a.maxMonths) err('minMonths > maxMonths');

    if (!Array.isArray(a.domains) || a.domains.length < 1 || a.domains.length > 3) err('domains: 1–3 required');
    for (const d of a.domains ?? []) if (!DOMAINS.includes(d)) err(`unknown domain "${d}"`);
    if (new Set(a.domains).size !== a.domains?.length) err('duplicate domains');

    if (!(a.durationMin >= 1 && a.durationMin <= 45)) err('durationMin must be 1–45');
    if (!ENERGIES.includes(a.energy)) err(`unknown energy "${a.energy}"`);

    if (!a.settings?.length) err('at least one setting required');
    for (const s of a.settings ?? []) if (!SETTINGS.includes(s)) err(`unknown setting "${s}"`);

    if (!MATERIAL_LEVELS.includes(a.materialsLevel)) err(`unknown materialsLevel "${a.materialsLevel}"`);
    if (!Array.isArray(a.materials)) err('materials must be an array');
    if (a.materialsLevel === 'none' && a.materials?.length) err('materialsLevel "none" must have empty materials');
    if (a.materialsLevel !== 'none' && !a.materials?.length) err('list the materials needed');

    if (typeof a.groupFriendly !== 'boolean') err('groupFriendly must be boolean');

    if (!a.steps || a.steps.length < 3 || a.steps.length > 7) err('steps: 3–7 required');
    if (!a.talk || a.talk.length < 2 || a.talk.length > 4) err('talk: 2–4 required');
    if (!a.whyItHelps?.trim()) err('whyItHelps required');
    if (!a.variations || a.variations.length < 2 || a.variations.length > 4) err('variations: 2–4 required');
    for (const v of a.variations ?? []) {
      if (!v.trim()) err('empty variation');
      if (v.length > 220) err(`variation too long (${v.length} > 220)`);
    }

    for (const t of a.tags ?? []) if (!TAGS.includes(t)) err(`unknown tag "${t}"`);
    if (a.tags?.includes('world') && !a.origin) err('tag "world" requires origin');
    if (a.origin && !a.tags?.includes('world')) err('origin set but tag "world" missing');
    // Each language shows only its own culture's games, so a game from one culture has to say which.
    if (a.origin && a.origin !== 'Worldwide' && !a.lang) err('a game with an origin needs lang, the language of its culture');
    if (a.celebration && !a.lang) err("a festival game needs lang, the language of its day's culture");
    if (a.lang !== undefined && !LANG.test(a.lang)) err(`lang "${a.lang}" is not an ISO 639 code`);
    for (const s of a.sources ?? []) if (!SOURCE_IDS.includes(s)) err(`unknown source "${s}"`);
    for (const r of a.refs ?? []) if (!/^https:\/\//.test(r.url ?? '')) err(`ref url must be https: ${r.url}`);
    for (const w of a.weather ?? []) if (!WEATHERS.includes(w)) err(`unknown weather "${w}"`);
    for (const s of a.seasons ?? []) if (!SEASONS.includes(s)) err(`unknown season "${s}"`);
    if (a.usesFlame && !a.safety?.length) err('a game with a real flame needs safety notes');

    const riskyForUnder3 =
      a.minMonths < 36 &&
      (a.materialsLevel !== 'none' || a.settings?.includes('bath') || a.settings?.includes('outdoor'));
    if (riskyForUnder3 && !a.safety?.length) err('safety notes required (under-3 with materials/water/outdoors)');

    const allText = [a.title, a.summary, ...(a.steps ?? []), ...(a.talk ?? []), ...(a.variations ?? []), a.whyItHelps].join(' ');
    if (/\b(tablet|ipad|youtube|screen time|app)\b/i.test(allText)) err('activities must not involve screens');
  }

  return errors;
}
