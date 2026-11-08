// Content coverage report: how many activities fit each age, broken down by development area,
// energy, setting and tag. Run with: npx vite-node scripts/content-stats.ts
// For what the Persian app shows: APP_LANG=fa npx vite-node scripts/content-stats.ts (in PowerShell, set $env:APP_LANG first).
import { loadLanguage } from '../src/i18n';
import { DOMAINS, ENERGIES, SETTINGS, TAGS } from '../src/data/types';

// Each language shows its own culture and what has been translated, so the language is settled before the content loads.
const LANG = process.env.APP_LANG === 'fa' ? 'fa' : 'en';
await loadLanguage(LANG);
const { ACTIVITIES } = await import('../src/data/activities');
const { TIPS } = await import('../src/data/tips');
const { GUIDES } = await import('../src/data/guides');

const AGES = [1, 3, 5, 7, 9, 11, 13, 15, 18, 21, 24, 27, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 132, 144];
const fits = (months: number) => ACTIVITIES.filter((a) => a.minMonths <= months && months <= a.maxMonths);
const pad = (s: string | number, n: number) => String(s).padStart(n);

console.log(`Language: ${LANG}   Activities: ${ACTIVITIES.length}   Tips: ${TIPS.length}   Guides: ${GUIDES.length}\n`);

const cols = [...DOMAINS.map((d) => d.slice(0, 5)), 'prim:', ...DOMAINS.map((d) => d.slice(0, 5))];
console.log(`${pad('age', 4)} ${pad('all', 4)} | any area: ${DOMAINS.map((d) => pad(d.slice(0, 5), 5)).join(' ')} | primary: ${DOMAINS.map((d) => pad(d.slice(0, 5), 5)).join(' ')}`);
void cols;
for (const m of AGES) {
  const list = fits(m);
  const any = DOMAINS.map((d) => pad(list.filter((a) => a.domains.includes(d)).length, 5)).join(' ');
  const prim = DOMAINS.map((d) => pad(list.filter((a) => a.domains[0] === d).length, 5)).join(' ');
  console.log(`${pad(m, 4)} ${pad(list.length, 4)} |           ${any} |          ${prim}`);
}

console.log(`\n${pad('age', 4)} | ${ENERGIES.map((e) => pad(e, 8)).join(' ')} | ${SETTINGS.map((s) => pad(s.slice(0, 6), 6)).join(' ')} | nomat grp`);
for (const m of AGES) {
  const list = fits(m);
  const en = ENERGIES.map((e) => pad(list.filter((a) => a.energy === e).length, 8)).join(' ');
  const st = SETTINGS.map((s) => pad(list.filter((a) => a.settings.includes(s)).length, 6)).join(' ');
  const nomat = list.filter((a) => a.materialsLevel === 'none').length;
  const grp = list.filter((a) => a.groupFriendly).length;
  console.log(`${pad(m, 4)} | ${en} | ${st} | ${pad(nomat, 5)} ${pad(grp, 3)}`);
}

console.log(`\n${pad('age', 4)} | ${TAGS.map((t) => pad(t.slice(0, 6), 6)).join(' ')}`);
for (const m of AGES) {
  const list = fits(m);
  console.log(`${pad(m, 4)} | ${TAGS.map((t) => pad(list.filter((a) => a.tags?.includes(t)).length, 6)).join(' ')}`);
}

console.log(`\nTips per age:`);
console.log(AGES.map((m) => `${m}:${TIPS.filter((t) => t.minMonths <= m && m <= t.maxMonths).length}`).join('  '));
