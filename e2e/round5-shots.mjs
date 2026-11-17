// Screenshots of the release 1.8 screens, in Persian and English: the new guides, the first-year goal and the dog-bite card.
// Also runs an axe audit on each and reports sideways overflow.
//
//   npm run build && node e2e/round5-shots.mjs     (screenshots go to e2e/screenshots-r5/)
import { chromium } from 'playwright-core';
import { mkdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';

const require = createRequire(import.meta.url);
const AXE = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const root = fileURLToPath(new URL('..', import.meta.url));
const server = await preview({ root, logLevel: 'silent', preview: { port: 4177 } });
const base = server.resolvedUrls.local[0];
const out = fileURLToPath(new URL('./screenshots-r5', import.meta.url));
mkdirSync(out, { recursive: true });

async function launch() {
  if (process.env.CHROME_PATH) return chromium.launch({ executablePath: process.env.CHROME_PATH });
  for (const channel of ['chrome', 'msedge']) {
    try {
      return await chromium.launch({ channel });
    } catch {
      /* next */
    }
  }
  throw new Error('No Chrome or Edge found.');
}

const isoMonthsAgo = (m) => {
  const d = new Date();
  d.setMonth(d.getMonth() - m);
  return d.toISOString().slice(0, 10);
};

const seed = (lang, months) => ({
  version: 5,
  children: [{ id: 'c1', name: lang === 'fa' ? 'نورا' : 'Nora', birthDate: isoMonthsAgo(months), weeksEarly: 0, emoji: '🐻', color: 'mint', interests: [] }],
  activeChildId: 'c1',
  sessions: [], moments: [], favorites: [], milestones: {}, plans: {}, routines: [], firsts: [], storyReads: [], savedStories: [], savedSongs: [], goals: [],
  settings: { language: lang, theme: 'light', onboarded: true, country: lang === 'fa' ? 'IR' : 'GB', climate: 'temperate-north', aidRegion: 'eu', celebrations: [] },
});

const browser = await launch();
const problems = [];

async function shot(lang, months, hash, name, after) {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, colorScheme: 'light', locale: lang === 'fa' ? 'fa-IR' : 'en-GB' });
  await context.addInitScript((s) => {
    if (!localStorage.getItem('playnest:state')) localStorage.setItem('playnest:state', s);
  }, JSON.stringify(seed(lang, months)));
  const page = await context.newPage();
  page.on('pageerror', (e) => problems.push(`${name}: pageerror ${e.message}`));
  page.on('console', (m) => m.type() === 'error' && problems.push(`${name}: console ${m.text()}`));
  await page.goto(`${base}#${hash}`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(400);
  if (after) await after(page);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  if (overflow) problems.push(`${name}: sideways overflow`);
  await page.addScriptTag({ content: AXE });
  const v = await page.evaluate(async () => (await window.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa'] })).violations.map((x) => x.id));
  if (v.length) problems.push(`${name}: axe ${v.join(', ')}`);
  await page.screenshot({ path: `${out}/${name}.png`, fullPage: true });
  await context.close();
  console.log('ok  ', name);
}

const GUIDES = ['what-decades-show', 'myths-checked', 'tummy-bugs', 'coughs-colds-ears', 'eczema-and-nappy-rash', 'hot-days-and-sun', 'when-scary-things-happen', 'weeks-after-hard-times', 'stuttering', 'when-learning-is-hard', 'festival-fires-fireworks', 'children-and-animals', 'anchor-furniture', 'water-safety'];
for (const lang of ['fa', 'en']) {
  for (const g of GUIDES) await shot(lang, 48, '/learn/' + g, lang + '-' + g);
  await shot(lang, 3, '/goals', lang + '-goals-baby');
  await shot(lang, 3, '/goals/first-year-together', lang + '-first-year');
  await shot(lang, 48, '/help/first-aid/dog-bite', lang + '-dog-bite');
}

await browser.close();
await server.close();
if (problems.length) {
  console.log('\n' + problems.join('\n'));
  process.exit(1);
}
console.log('\nNo problems found.');
