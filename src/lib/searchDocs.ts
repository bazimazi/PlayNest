import { ACTIVITIES } from '../data/activities';
import { COACH } from '../data/coach';
import { AID_CARDS } from '../data/firstaid';
import { GUIDES } from '../data/guides';
import { SONGS } from '../data/songs';
import { STAGES } from '../data/stages';
import { STORIES } from '../data/stories';
import type { SearchDoc } from './search';
import { t } from '../i18n';

/** Everything in the app that search can find. Only the opening words are indexed: whole steps add noise, not answers. */
export function allSearchDocs(): SearchDoc[] {
  const docs: SearchDoc[] = [];
  for (const a of ACTIVITIES) {
    docs.push({ id: `game:${a.id}`, type: 'game', title: a.title, subtitle: a.summary, emoji: a.emoji, to: `/activity/${a.id}`, text: [a.summary, a.origin ?? '', ...a.materials, ...(a.tags ?? [])].join(' '), minMonths: a.minMonths, maxMonths: a.maxMonths });
  }
  for (const s of COACH) {
    docs.push({ id: `help:${s.id}`, type: 'help', title: s.title, subtitle: t('What to do right now'), emoji: s.emoji, to: `/help/moment/${s.id}`, text: s.keywords.join(' '), minMonths: s.minMonths, maxMonths: s.maxMonths });
  }
  for (const c of AID_CARDS) {
    docs.push({ id: `aid:${c.id}`, type: 'firstaid', title: c.title, subtitle: c.signs, emoji: c.emoji, to: `/help/first-aid/${c.id}`, text: c.signs, minMonths: 0, maxMonths: 144 });
  }
  for (const g of GUIDES) {
    docs.push({ id: `guide:${g.slug}`, type: 'guide', title: g.title, subtitle: g.summary, emoji: g.emoji, to: `/learn/${g.slug}`, text: g.summary, minMonths: g.minMonths, maxMonths: g.maxMonths });
  }
  for (const s of STORIES) {
    docs.push({ id: `story:${s.id}`, type: 'story', title: s.title, subtitle: s.culture, emoji: s.emoji, to: `/stories/${s.id}`, text: [s.culture, s.nativeTitle ?? '', ...s.themes].join(' '), minMonths: s.minMonths, maxMonths: s.maxMonths });
  }
  for (const s of SONGS) {
    docs.push({ id: `song:${s.id}`, type: 'song', title: s.title, subtitle: s.culture, emoji: s.emoji, to: `/songs/${s.id}`, text: [s.culture, s.language, s.nativeTitle ?? '', s.type].join(' '), minMonths: s.minMonths, maxMonths: s.maxMonths });
  }
  for (const s of STAGES) {
    docs.push({ id: `stage:${s.id}`, type: 'stage', title: s.title, subtitle: t('What’s typical at this age'), emoji: s.emoji, to: '/stage', text: s.happening.join(' '), minMonths: s.minMonths, maxMonths: s.maxMonths });
  }
  return docs;
}
