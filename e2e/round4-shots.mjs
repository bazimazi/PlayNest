// Screenshots of the release 1.7 screens, in Persian and English: new guides, a goal's "what's typical" card and the
// check-in after a finished goal. Also runs an axe audit on each and reports sideways overflow.
//
//   npm run build && node e2e/round4-shots.mjs     (screenshots go to e2e/screenshots-r4/)
import { chromium } from 'playwright-core';
import { mkdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';

const require = createRequire(import.meta.url);
const AXE = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const root = fileURLToPath(new URL('..', import.meta.url));
const server = await preview({ root, logLevel: 'silent', preview: { port: 4176 } });
const base = server.resolvedUrls.local[0];
const out = fileURLToPath(new URL('./screenshots-r4', import.meta.url));
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
const daysAgo = (n) => new Date(Date.now() - n * 86400000).toISOString();

// A family that finished "Calmer bedtimes" ten days ago, so the first check-in is due.
const seed = (lang, months) => ({
  version: 5,
  children: [{ id: 'c1', name: lang === 'fa' ? 'نورا' : 'Nora', birthDate: isoMonthsAgo(months), weeksEarly: 0, emoji: '🐻', color: 'mint', interests: [] }],
  activeChildId: 'c1',
  sessions: [],
  moments: [],
  favorites: [],
  milestones: {},
  plans: {},
  routines: [],
  firsts: [],
  storyReads: [],
  savedStories: [],
  savedSongs: [],
  goals: [
    {
      goalId: 'calmer-bedtimes',
      startedAt: daysAgo(60),
      current: 'morning-praise',
      tried: { 'same-time': daysAgo(55), 'same-steps': daysAgo(45), 'screens-off': daysAgo(35), 'one-last-thing': daysAgo(25), 'morning-praise': daysAgo(12) },
      felt: {},
      note: '',
      closedAt: daysAgo(10),
      checkIns: [],
      settled: false,
    },
  ],
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

await shot('fa', 1, '/learn', 'fa-learn-baby');
await shot('fa', 1, '/learn/g6pd', 'fa-g6pd');
await shot('fa', 1, '/learn/newborn-jaundice', 'fa-jaundice');
await shot('fa', 40, '/goals', 'fa-goals-checkin');
await shot('fa', 40, '/goals', 'fa-goals-checkin-answered', (p) => p.getByRole('button', { name: 'این اواخر نه' }).click());
await shot('fa', 40, '/goals/fewer-battles', 'fa-goal-expect');
await shot('fa', 40, '/goals/safer-home', 'fa-safer-home');
await shot('fa', 96, '/learn/is-my-child-ok', 'fa-is-my-child-ok');
await shot('fa', 30, '/learn/car-seats', 'fa-car-seats');
await shot('fa', 8, '/help/you?view=help', 'fa-helplines');
await shot('en', 40, '/goals', 'en-goals-checkin');
await shot('en', 40, '/goals/fewer-battles', 'en-goal-expect');
await shot('en', 1, '/learn/old-remedies', 'en-old-remedies');

await browser.close();
await server.close();
if (problems.length) {
  console.log('\n' + problems.join('\n'));
  process.exit(1);
}
console.log('\nNo problems found.');
