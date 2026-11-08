import {
  AID_REGIONS,
  COACH_GROUPS,
  NEEDS,
  SONG_TYPES,
  STORY_THEMES,
  type Adaptation,
  type AidCard,
  type Celebration,
  type CoachSituation,
  type CryingHelp,
  type EmergencyNumbers,
  type FirstIdea,
  type Helpline,
  type ParentSupport,
  type Ref,
  type RoutineTemplate,
  type Song,
  type StageCard,
  type Story,
  type TalkCard,
} from './packs';
import { DOMAINS, TAGS } from './types';
import { LANG, NEWER_EMOJI } from './validate';

/** Every story, song and festival belongs to one culture, and only its language shows it. */
const checkLang = (lang: string | undefined, err: (m: string) => void) => {
  if (!lang || !LANG.test(lang)) err('lang required: the ISO 639 code of the culture it comes from');
};

const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_MONTHS = 144;
/** Words the house style rules out in anything a parent reads. */
const GUILT = /\b(missed|failed|failure|below average|bad parent)\b/i;

type Err = (msg: string) => void;

function checkRefs(refs: Ref[] | undefined, err: Err) {
  if (!refs?.length) return err('at least one ref required');
  for (const r of refs) {
    if (!r.title?.trim() || !r.publisher?.trim()) err('ref needs title and publisher');
    if (!/^https:\/\//.test(r.url ?? '')) err(`ref url must be https: ${r.url}`);
  }
}

function checkAge(min: number, max: number, err: Err) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) err('ages must be whole months');
  if (min < 0 || max > MAX_MONTHS || min > max) err(`bad age range ${min}–${max}`);
}

function checkEmoji(e: string | undefined, err: Err) {
  if (!e?.trim()) err('emoji required');
  else if (NEWER_EMOJI.test(e)) err(`emoji ${e} is too new (use Emoji 12.0 or older)`);
}

function checkLen(items: string[] | undefined, max: number, label: string, err: Err) {
  for (const t of items ?? []) {
    if (!t?.trim()) err(`${label}: empty line`);
    else if (t.length > max) err(`${label}: too long (${t.length} > ${max}): "${t.slice(0, 40)}…"`);
    if (t && GUILT.test(t)) err(`${label}: guilt word in "${t.slice(0, 40)}…"`);
  }
}

function runner<T extends { id: string }>(list: T[], check: (item: T, err: Err) => void): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  for (const item of list) {
    const err: Err = (msg) => errors.push(`[${item.id}] ${msg}`);
    if (!KEBAB.test(item.id ?? '')) err('id must be kebab-case');
    if (seen.has(item.id)) err('duplicate id');
    seen.add(item.id);
    check(item, err);
  }
  return errors;
}

export function validateCoach(list: CoachSituation[]): string[] {
  return runner(list, (s, err) => {
    if (!s.title || s.title.length > 40) err('title required, at most 40 characters');
    checkEmoji(s.emoji, err);
    if (!(s.group in COACH_GROUPS)) err(`unknown group ${s.group}`);
    checkAge(s.minMonths, s.maxMonths, err);
    if (!s.keywords?.length) err('keywords required');
    if (!s.bands?.length) err('at least one band');
    const sorted = [...(s.bands ?? [])].sort((a, b) => a.minMonths - b.minMonths);
    sorted.forEach((b, i) => {
      checkAge(b.minMonths, b.maxMonths, err);
      if (i > 0 && b.minMonths <= sorted[i - 1].maxMonths) err('bands overlap');
      if (b.rightNow?.length !== 3) err('rightNow: exactly 3 steps');
      checkLen(b.rightNow, 110, 'rightNow', err);
      if (!b.say || b.say.length < 2 || b.say.length > 4) err('say: 2–4');
      checkLen(b.say, 90, 'say', err);
      if ((b.avoid?.length ?? 0) > 2) err('avoid: at most 2');
      checkLen(b.avoid, 110, 'avoid', err);
    });
    if (sorted.length && (sorted[0].minMonths > s.minMonths || sorted[sorted.length - 1].maxMonths < s.maxMonths)) {
      err('bands must cover the whole age range');
    }
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i].minMonths !== sorted[i - 1].maxMonths + 1) err('gap between bands');
    }
    checkLen([s.why], 160, 'why', err);
    checkLen([s.later?.text], 120, 'later', err);
    for (const t of s.later?.tags ?? []) if (!TAGS.includes(t)) err(`unknown tag ${t}`);
    for (const d of s.later?.domains ?? []) if (!DOMAINS.includes(d)) err(`unknown domain ${d}`);
    if (!s.help?.length || s.help.length > 4) err('help: 1–4');
    checkLen(s.help, 120, 'help', err);
    if (!['strong', 'moderate', 'practice'].includes(s.evidence)) err('evidence must be strong, moderate or practice');
    checkRefs(s.refs, err);
  });
}

export function validateAid(list: AidCard[]): string[] {
  const allowed = new Set<string>([...Object.keys(AID_REGIONS), 'all']);
  return runner(list, (c, err) => {
    if (!c.title || c.title.length > 36) err('title required, at most 36 characters');
    checkEmoji(c.emoji, err);
    if (c.tier !== 1 && c.tier !== 2) err('tier must be 1 or 2');
    checkLen([c.signs], 120, 'signs', err);
    if ((c.callIf?.length ?? 0) > 5) err('callIf: at most 5');
    checkLen(c.callIf, 110, 'callIf', err);
    if (!c.callFirst && !c.callIf?.length) err('a card that does not lead with the call must say when to call');
    const keys = Object.keys(c.regions ?? {});
    if (!keys.length) err('regions required');
    for (const k of keys) if (!allowed.has(k)) err(`unknown region ${k}`);
    if (!c.regions.all) {
      for (const r of Object.keys(AID_REGIONS)) if (!(r in c.regions)) err(`missing region ${r} (or use "all")`);
    }
    for (const [k, r] of Object.entries(c.regions ?? {})) {
      if (!r) continue;
      if (!r.steps || r.steps.length < 2 || r.steps.length > 6) err(`${k}: 2–6 steps`);
      checkLen(r.steps, 140, `${k} steps`, err);
      if ((r.dont?.length ?? 0) > 4) err(`${k}: dont at most 4`);
      checkLen(r.dont, 120, `${k} dont`, err);
      if (!r.basedOn?.trim()) err(`${k}: basedOn required`);
      checkRefs(r.refs, err);
    }
  });
}

export function validateEmergency(table: Record<string, EmergencyNumbers>): string[] {
  const errors: string[] = [];
  const number = /^\+?[0-9][0-9 -]{0,14}$/;
  for (const [code, row] of Object.entries(table)) {
    if (!/^[A-Z]{2}$/.test(code)) errors.push(`${code}: country code must be two capital letters`);
    const nums = [row.general, row.ambulance, row.police, row.fire].filter(Boolean) as string[];
    if (!nums.length) errors.push(`${code}: no numbers`);
    for (const n of nums) if (!number.test(n)) errors.push(`${code}: odd number "${n}"`);
    if (typeof row.agreed !== 'boolean') errors.push(`${code}: agreed must be boolean`);
  }
  return errors;
}

export function validateHelplines(table: Record<string, Helpline[]>): string[] {
  const errors: string[] = [];
  for (const [code, lines] of Object.entries(table)) {
    if (!/^[A-Z]{2}$/.test(code) && code !== 'WORLD') errors.push(`${code}: country code must be two capital letters or WORLD`);
    if (!lines.length) errors.push(`${code}: empty`);
    for (const l of lines) {
      if (!l.name?.trim()) errors.push(`${code}: line needs a name`);
      if (!l.phone && !l.url && !l.textLine) errors.push(`${code}/${l.name}: needs a phone, text line or url`);
      if (l.phone && !/^\+?[0-9][0-9 -]{1,20}$/.test(l.phone)) errors.push(`${code}/${l.name}: odd phone "${l.phone}"`);
      if (l.url && !/^https:\/\//.test(l.url)) errors.push(`${code}/${l.name}: url must be https`);
      if (!['crisis', 'parent', 'talk'].includes(l.kind)) errors.push(`${code}/${l.name}: bad kind`);
      if (!['operator', 'directory'].includes(l.via)) errors.push(`${code}/${l.name}: bad via`);
    }
  }
  return errors;
}

export function validateCrying(h: CryingHelp): string[] {
  const errors: string[] = [];
  const err: Err = (m) => errors.push(`[crying] ${m}`);
  if (!h.reassure?.length) err('reassure required');
  if (!h.redFlags?.length) err('redFlags required');
  checkLen(h.redFlags, 110, 'redFlags', err);
  if (!h.soothe?.length) err('soothe required');
  for (const s of h.soothe ?? []) {
    checkEmoji(s.emoji, err);
    checkLen([s.title], 36, 'soothe title', err);
    checkLen([s.text], 170, 'soothe text', err);
  }
  if (!h.stepAway?.steps?.length || !(h.stepAway?.minutes > 0)) err('stepAway needs steps and minutes');
  if (!h.neverShake?.trim()) err('neverShake required');
  if (!h.cues?.more?.length || !h.cues?.stop?.length) err('cues required');
  if (!h.soundSafety?.length) err('soundSafety required');
  checkRefs(h.refs, err);
  return errors;
}

export function validateSupport(p: ParentSupport): string[] {
  const errors: string[] = [];
  const err: Err = (m) => errors.push(`[support] ${m}`);
  for (const k of ['question', 'intro', 'yes', 'notNow', 'scared'] as const) if (!p.checkIn?.[k]?.trim()) err(`checkIn.${k} required`);
  if (!p.kindWords?.length) err('kindWords required');
  checkLen(p.kindWords, 200, 'kindWords', err);
  if (!p.smallThings?.length) err('smallThings required');
  for (const s of p.smallThings ?? []) checkEmoji(s.emoji, err);
  if (!p.hurtBaby?.steps?.length) err('hurtBaby required');
  if (!p.hurtSelf?.question?.trim()) err('hurtSelf required');
  if (!p.whenToSeek?.length) err('whenToSeek required');
  if (!p.privacy?.trim()) err('privacy required');
  checkRefs(p.refs, err);
  return errors;
}

export function validateStories(list: Story[]): string[] {
  return runner(list, (s, err) => {
    if (!s.title || s.title.length > 48) err('title required, at most 48 characters');
    if (!s.culture?.trim()) err('culture required');
    checkLang(s.lang, err);
    checkEmoji(s.emoji, err);
    checkAge(s.minMonths, s.maxMonths, err);
    if (!(s.minutes >= 1 && s.minutes <= 15)) err('minutes 1–15');
    if (!s.themes?.length) err('themes required');
    for (const t of s.themes ?? []) if (!STORY_THEMES.includes(t)) err(`unknown theme ${t}`);
    if (typeof s.bedtime !== 'boolean') err('bedtime must be boolean');
    if (!s.paragraphs || s.paragraphs.length < 3 || s.paragraphs.length > 14) err('paragraphs: 3–14');
    const words = (s.paragraphs ?? []).join(' ').split(/\s+/).filter(Boolean).length;
    if (words < 120 || words > 600) err(`retelling must be 120–600 words (${words})`);
    if (!s.beats || s.beats.length < 4 || s.beats.length > 7) err('beats: 4–7');
    if (!s.prompts || s.prompts.length < 3 || s.prompts.length > 4) err('prompts: 3–4');
    if (s.stance !== 'open' && s.stance !== 'care') err('stance must be open or care');
    checkRefs(s.refs, err);
  });
}

const NOTE = /^(?:[A-G][#b]?[2-7]|R):(?:\d+(?:\.\d+)?)$/;

export function validateSongs(list: Song[]): string[] {
  return runner(list, (s, err) => {
    if (!s.title?.trim()) err('title required');
    if (!s.language?.trim() || !s.culture?.trim()) err('language and culture required');
    checkLang(s.lang, err);
    if (!(s.type in SONG_TYPES)) err(`unknown type ${s.type}`);
    checkEmoji(s.emoji, err);
    checkAge(s.minMonths, s.maxMonths, err);
    if ((s.actions?.length ?? 0) > 5) err('actions: at most 5');
    if (!s.rights?.trim()) err('rights required');
    for (const l of s.lines ?? []) {
      if (!l.english?.trim()) err('every line needs its English meaning');
      if (l.original && !l.roman && /[^\p{Script=Latin}\P{L}]/u.test(l.original)) err('a line not in Latin letters needs a romanisation');
    }
    if (s.melody) {
      const tokens = s.melody.notes?.trim().split(/\s+/) ?? [];
      if (tokens.length < 4) err('melody too short');
      for (const t of tokens) if (!NOTE.test(t)) err(`bad note "${t}"`);
      if (!(s.melody.bpm >= 40 && s.melody.bpm <= 160)) err('melody bpm 40–160');
      if (!s.melody.source?.trim()) err('melody needs its source');
    }
    checkRefs(s.refs, err);
  });
}

export function validateTalk(list: TalkCard[]): string[] {
  return runner(list, (c, err) => {
    if (!c.theme?.trim()) err('theme required');
    checkEmoji(c.emoji, err);
    if (!['3-5', '6-8', '9-12'].includes(c.band)) err(`unknown band ${c.band}`);
    checkLen([c.text], 110, 'text', err);
    if (c.lang !== undefined) checkLang(c.lang, err);
  });
}

export function validateStages(list: StageCard[]): string[] {
  const errors = runner(list, (s, err) => {
    checkAge(s.minMonths, s.maxMonths, err);
    if (!s.title?.trim()) err('title required');
    checkEmoji(s.emoji, err);
    if (!s.happening || s.happening.length < 3 || s.happening.length > 5) err('happening: 3–5');
    checkLen(s.happening, 130, 'happening', err);
    if (!s.usuallyFine || s.usuallyFine.length < 2 || s.usuallyFine.length > 4) err('usuallyFine: 2–4');
    checkLen(s.usuallyFine, 130, 'usuallyFine', err);
    if (!s.worthAsking || s.worthAsking.length < 2 || s.worthAsking.length > 4) err('worthAsking: 2–4');
    checkLen(s.worthAsking, 130, 'worthAsking', err);
    if (!s.tryThis || s.tryThis.length < 3 || s.tryThis.length > 5) err('tryThis: 3–5');
    checkLen(s.tryThis, 110, 'tryThis', err);
    for (const t of s.tags ?? []) if (!TAGS.includes(t)) err(`unknown tag ${t}`);
    for (const d of s.domains ?? []) if (!DOMAINS.includes(d)) err(`unknown domain ${d}`);
    checkRefs(s.refs, err);
  });
  const sorted = [...list].sort((a, b) => a.minMonths - b.minMonths);
  if (sorted.length) {
    if (sorted[0].minMonths !== 0) errors.push('stages must start at 0 months');
    if (sorted[sorted.length - 1].maxMonths !== MAX_MONTHS) errors.push(`stages must end at ${MAX_MONTHS} months`);
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i].minMonths !== sorted[i - 1].maxMonths + 1) errors.push(`stage gap or overlap before ${sorted[i].id}`);
    }
  }
  return errors;
}

export function validateRoutines(list: RoutineTemplate[]): string[] {
  return runner(list, (r, err) => {
    if (!r.name?.trim()) err('name required');
    checkEmoji(r.emoji, err);
    checkAge(r.minMonths, r.maxMonths, err);
    if (!r.steps || r.steps.length < 2 || r.steps.length > 8) err('steps: 2–8');
    for (const s of r.steps ?? []) {
      checkEmoji(s.emoji, err);
      checkLen([s.label], 24, 'step label', err);
    }
    if (!r.why?.trim()) err('why required');
    checkRefs(r.refs, err);
  });
}

export function validateFirsts(list: FirstIdea[]): string[] {
  return runner(list, (f, err) => {
    if (!f.title?.trim()) err('title required');
    checkEmoji(f.emoji, err);
    checkAge(f.minMonths, f.maxMonths, err);
  });
}

export function validateCelebrations(list: Celebration[]): string[] {
  return runner(list, (c, err) => {
    if (!c.name?.trim()) err('name required');
    checkEmoji(c.emoji, err);
    if (!['cultural', 'religious', 'shared'].includes(c.kind)) err(`unknown kind ${c.kind}`);
    checkLang(c.lang, err);
    checkLen([c.whoCelebrates], 160, 'whoCelebrates', err);
    if (c.notEveryone) checkLen([c.notEveryone], 160, 'notEveryone', err);
    checkLen([c.about], 240, 'about', err);
    for (const [year, days] of Object.entries(c.dates ?? {})) {
      if (!/^20\d\d$/.test(year)) err(`bad year ${year}`);
      for (const d of days) if (!/^\d{4}-\d{2}-\d{2}$/.test(d) || !d.startsWith(year)) err(`bad date ${d} under ${year}`);
    }
    if (typeof c.approximate !== 'boolean') err('approximate must be boolean');
    checkRefs(c.refs, err);
  });
}

export function validateAdaptations(list: Adaptation[]): string[] {
  return runner(list, (a, err) => {
    if (!(a.need in NEEDS)) err(`unknown need ${a.need}`);
    checkLen([a.text], 140, 'text', err);
    for (const t of a.whenTag ?? []) if (!TAGS.includes(t)) err(`unknown tag ${t}`);
  });
}
