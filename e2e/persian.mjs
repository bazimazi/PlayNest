// End-to-end check of the app in Persian: every screen right to left in a phone-sized browser, with an axe audit, a check
// for sideways overflow at the smallest phone width, and a sweep for English left on screen.
//
//   npm run build && node e2e/persian.mjs          (screenshots go to e2e/screenshots-fa/)
//
// Uses an installed Chrome or Edge, like smoke.mjs.
import { chromium } from 'playwright-core';
import { mkdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';

const require = createRequire(import.meta.url);
const AXE = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const root = fileURLToPath(new URL('..', import.meta.url));
const server = await preview({ root, logLevel: 'silent', preview: { port: 4174 } });
const base = server.resolvedUrls.local[0];
const out = fileURLToPath(new URL('./screenshots-fa', import.meta.url));
mkdirSync(out, { recursive: true });

async function launch() {
  if (process.env.CHROME_PATH) return chromium.launch({ executablePath: process.env.CHROME_PATH });
  for (const channel of ['chrome', 'msedge']) {
    try {
      return await chromium.launch({ channel });
    } catch {
      /* try the next installed browser */
    }
  }
  throw new Error('No Chrome or Edge found. Install one, or set CHROME_PATH to a Chromium-based browser.');
}

const problems = [];
const isoMonthsAgo = (m) => {
  const d = new Date();
  d.setMonth(d.getMonth() - m);
  return d.toISOString().slice(0, 10);
};

// A family with a little history, so that screens show their full selves. The name is Persian, so it isn't mistaken for a leak.
const seed = (months) => ({
  version: 3,
  children: [{ id: 'c1', name: 'نورا', birthDate: isoMonthsAgo(months), weeksEarly: 0, emoji: '🐻', color: 'mint', interests: ['animals'] }],
  activeChildId: 'c1',
  sessions: [
    { id: 's1', childId: 'c1', activityId: 'attal-mattal-tootooleh', date: new Date().toISOString(), minutes: 10, reaction: 'loved' },
    { id: 's2', childId: 'c1', activityId: 'amu-zanjir-baf', date: new Date(Date.now() - 2 * 86400000).toISOString(), minutes: 5 },
  ],
  moments: [{ id: 'm1', childId: 'c1', date: new Date().toISOString(), text: 'امروز برای اولین بار خندید' }],
  favorites: ['attal-mattal-tootooleh'],
  milestones: {},
  plans: {},
  routines: [],
  firsts: [{ id: 'f1', childId: 'c1', firstId: 'first-laugh', title: 'اولین خنده', date: isoMonthsAgo(1) }],
  storyReads: [],
  savedStories: [],
  savedSongs: [],
  settings: { language: 'fa', theme: 'light', onboarded: true, country: 'IR', climate: 'temperate-north', aidRegion: 'eu', celebrations: ['nowruz', 'yalda'] },
});

const browser = await launch();

/** A family's phone, in Persian. */
async function open({ width = 390, months = 40, state = seed(months) } = {}) {
  const context = await browser.newContext({ viewport: { width, height: 844 }, deviceScaleFactor: 2, colorScheme: 'light', locale: 'fa-IR' });
  await context.addInitScript((s) => {
    if (!localStorage.getItem('playnest:state') && s) localStorage.setItem('playnest:state', s);
  }, state ? JSON.stringify(state) : null);
  const page = await context.newPage();
  page.on('console', (m) => m.type() === 'error' && problems.push(`console: ${m.text()}`));
  page.on('pageerror', (e) => problems.push(`pageerror: ${e.message}`));
  page.on('response', (r) => r.status() >= 400 && problems.push(`${r.status()}: ${r.url()}`));
  return { context, page };
}

const go = async (page, hash) => {
  await page.goto(`${base}#${hash}`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(250);
  await page.evaluate(() =>
    document.getAnimations().forEach((a) => {
      if (a.effect?.getTiming().iterations !== Infinity) a.finish();
    }),
  );
};

// Words that are meant to be in Latin letters: citations and names of real bodies and services.
const ALLOWED_LATIN = /^(AHA|AAP|WHO|NHS|CDC|UNICEF|RCUK|ERC|ANZCOR|ILCOR|CPR|AED|PDF)$/;

/** English on screen that nobody meant to leave there. Citations and original lyrics are fine; they aren't marked here. */
const englishOnScreen = (page) =>
  page.evaluate(() => {
    // Citations, original lyrics and names stay as written: they're marked so, or live in these places.
    const skip = '.refs, .sources, .source-link, .song-roman, .song-original, .native-title, [translate="no"], [lang]:not([lang="fa"]), script, style, svg, noscript';
    // A Persian sentence may name something in Latin letters ("از Microsoft"). Only text that is mostly Latin is a leak.
    const mostlyLatin = (t) => (t.match(/[A-Za-z]/g) ?? []).length > (t.match(/[\u0600-\u06ff]/g) ?? []).length;
    const found = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      const text = n.textContent.trim();
      if (!/[A-Za-z]{3,}/.test(text) || !mostlyLatin(text)) continue;
      const el = n.parentElement;
      if (!el || el.closest(skip)) continue;
      const box = el.getBoundingClientRect();
      if (box.width === 0 || box.height === 0 || getComputedStyle(el).visibility === 'hidden') continue;
      found.push(text.slice(0, 90));
    }
    // Attributes a screen reader reads out, too.
    for (const el of document.querySelectorAll('[aria-label], [title], [placeholder], [alt]')) {
      if (el.closest(skip)) continue;
      for (const a of ['aria-label', 'title', 'placeholder', 'alt']) {
        const v = el.getAttribute(a);
        if (v && /[A-Za-z]{3,}/.test(v) && mostlyLatin(v)) found.push(`[${a}] ${v.slice(0, 80)}`);
      }
    }
    return found;
  });

const axe = async (page, label) => {
  if (!(await page.evaluate(() => 'axe' in window))) await page.addScriptTag({ content: AXE });
  const violations = await page.evaluate(async () => {
    const r = await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } });
    return r.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical').map((v) => `${v.id} (${v.nodes.length}): ${v.nodes.slice(0, 2).map((x) => x.target.join(' ')).join(' | ')}`);
  });
  for (const v of violations) problems.push(`a11y ${label}: ${v}`);
};

const SCREENS = [
  ['today', '/'],
  ['explore', '/explore?age=all'],
  ['activity', '/activity/attal-mattal-tootooleh'],
  ['activity-world', '/activity/amu-zanjir-baf'],
  ['play', '/play/attal-mattal-tootooleh'],
  ['plan', '/plan'],
  ['milestones', '/milestones'],
  ['checkin', '/milestones?checkin=1'],
  ['growth', '/growth'],
  ['together', '/together'],
  ['learn', '/learn'],
  ['guide', '/learn/tummy-time'],
  ['settings', '/settings'],
  ['stories', '/stories'],
  ['story', '/stories/auntie-cockroach'],
  ['songs', '/songs'],
  ['song', '/songs/lala-gol-e-pooneh'],
  ['talk', '/talk'],
  ['routines', '/routines'],
  ['stage', '/stage'],
  ['firsts', '/firsts'],
  ['album', '/album'],
  ['search', '/search'],
  ['celebrate', '/celebrate'],
  ['help', '/help'],
  ['first-aid', '/help/first-aid'],
  ['first-aid-card', '/help/first-aid/cpr-baby'],
  ['crying', '/help/crying'],
  ['support', '/help/you'],
  ['support-self', '/help/you?view=self'],
  ['support-baby', '/help/you?view=baby'],
  ['support-help', '/help/you?view=help'],
  ['sounds', '/sounds'],
  ['print-summary', '/print/summary'],
  ['print-card', '/print/card/attal-mattal-tootooleh'],
];

const leaks = new Map();

// ---- Every screen
{
  const { context, page } = await open();
  let n = 0;
  for (const [name, hash] of SCREENS) {
    await go(page, hash);
    const dir = await page.evaluate(() => document.documentElement.dir);
    if (dir !== 'rtl') problems.push(`${name}: not right-to-left`);
    await page.screenshot({ path: `${out}/${String(++n).padStart(2, '0')}-${name}.png`, fullPage: true });
    await axe(page, name);
    const words = await englishOnScreen(page);
    if (words.length) leaks.set(name, words);
    console.log(`ok   ${name}${words.length ? `  (${words.length} English)` : ''}`);
  }
  await context.close();
}

// ---- Nothing runs off the side of the smallest phone
{
  const { context, page } = await open({ width: 320 });
  for (const [name, hash] of SCREENS) {
    await go(page, hash);
    const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (over > 1) problems.push(`${name}: overflows sideways by ${over}px at 320 wide`);
  }
  await context.close();
  console.log('ok   no sideways overflow at 320px');
}

const flow = async (name, fn) => {
  try {
    await fn();
  } catch (e) {
    problems.push(`${name}: ${e.message.split('\n')[0]}`);
    console.log(`FAIL ${name}: ${e.message.split('\n')[0]}`);
  }
};

// ---- First run: a parent enters the birthday in the Persian calendar
await flow('first run', async () => {
  const { context, page } = await open({ state: null });
  await page.goto(base);
  await page.waitForURL(/#\/welcome/);
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${out}/50-welcome.png` });
  if ((await page.evaluate(() => document.documentElement.dir)) !== 'rtl') problems.push('welcome: a device in Persian did not start in Persian');
  await page.locator('.welcome button.btn-primary, .welcome a.btn-primary').first().click();
  await page.fill('#child-name', 'نورا');
  await page.screenshot({ path: `${out}/51-welcome-name.png` });
  await page.locator('button[type="submit"]').click();
  await page.locator('#child-birth').waitFor();
  // 14 Aban 1403 is 4 November 2024.
  await page.selectOption('.date-year', '1403');
  await page.selectOption('.date-month', '8');
  await page.selectOption('#child-birth', '14');
  await page.waitForTimeout(150);
  await page.screenshot({ path: `${out}/52-welcome-birth.png` });
  await page.locator('button[type="submit"]').click();
  await page.waitForTimeout(150);
  await page.locator('button.btn-primary').last().click();
  await page.locator('.hero-pick').waitFor();
  await page.waitForFunction(() => JSON.parse(localStorage.getItem('playnest:state') ?? '{}').children?.length > 0);
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('playnest:state')).children[0].birthDate);
  if (stored !== '2024-11-04') problems.push(`birthday 1403/8/14 stored as ${stored}, expected 2024-11-04`);
  console.log('ok   first run with a Persian birthday');
  await context.close();
});

// ---- Things that only work if the direction has really turned round
await flow('direction', async () => {
  const { context, page } = await open();
  await go(page, '/settings');

  // The sliding thumb of a two-way control sits under the option it marks.
  const off = await page.evaluate(() => {
    const seg = document.querySelector('.segmented');
    const on = seg?.querySelector('[aria-checked="true"], [aria-pressed="true"], [aria-selected="true"]');
    const thumb = seg?.querySelector('.segmented-thumb');
    if (!on || !thumb) return null;
    return Math.abs(on.getBoundingClientRect().left - thumb.getBoundingClientRect().left);
  });
  if (off !== null && off > 6) problems.push(`settings: the segmented thumb is ${off}px away from its option`);

  // Digits are Persian on screen.
  await go(page, '/');
  const latinDigits = await page.evaluate(() => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const found = [];
    // Citations stay as written, years and all, as in the check for Latin letters.
    const skip = '.refs, .sources, .source-link, [translate="no"], [lang]:not([lang="fa"]), script, style';
    for (let n = walker.nextNode(); n; n = walker.nextNode()) if (/\d/.test(n.textContent) && !n.parentElement.closest(skip)) found.push(n.textContent.trim().slice(0, 40));
    return found;
  });
  if (latinDigits.length) problems.push(`today: Latin digits on screen: ${latinDigits.slice(0, 5).join(' | ')}`);

  // Dialling still works: the number on screen is Persian, the link is not.
  await go(page, '/help/first-aid');
  const tel = await page.locator('a[href^="tel:"]').first().getAttribute('href');
  if (tel !== 'tel:115') problems.push(`first aid: the call link for Iran is ${tel}, expected tel:115`);

  // In a right-to-left game, the left arrow goes on.
  await go(page, '/play/attal-mattal-tootooleh');
  const start = await page.locator('button.btn-primary').first();
  await start.click();
  await page.waitForTimeout(600);
  const before = await page.locator('.play-card').first().textContent();
  await page.keyboard.press('ArrowLeft');
  await page.waitForTimeout(600);
  const after = await page.locator('.play-card').first().textContent();
  if (before === after) problems.push('play: the left arrow did not move forward in right-to-left');

  // A screen going deeper comes in from the left, the way the back arrow (pointing right) says it will go back.
  await go(page, '/learn');
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Animation.enable');
  await cdp.send('Animation.setPlaybackRate', { playbackRate: 0.1 });
  await page.locator('.guide-card').first().click();
  await page.waitForTimeout(150);
  const enteringAt = await page.evaluate(() => new DOMMatrix(getComputedStyle(document.querySelector('.screen')).transform).m41);
  await cdp.send('Animation.setPlaybackRate', { playbackRate: 1 });
  if (!(enteringAt < 0)) problems.push(`a pushed screen should slide in from the left in right-to-left (x=${enteringAt})`);

  // Switching language keeps the place, and switches back.
  await go(page, '/settings');
  await page.locator('button:has(> [lang="en"])').click();
  await page.waitForLoadState('load');
  await page.waitForFunction(() => document.documentElement.lang === 'en' && document.querySelector('h1'));
  if ((await page.evaluate(() => document.documentElement.dir)) !== 'ltr') problems.push('switching to English did not turn the layout round');
  if (!page.url().includes('/settings')) problems.push('switching language lost the screen');
  await page.getByRole('heading', { name: 'Language' }).waitFor();
  await page.locator('button:has(> [lang="fa"])').click();
  await page.waitForFunction(() => document.documentElement.lang === 'fa' && document.querySelector('h1'));
  console.log('ok   direction-dependent behaviour and language switch');

  // Search finds Persian whichever keyboard typed it.
  await go(page, '/search');
  const input = page.locator('input[inputmode="search"]');
  await input.fill('بازي'); // with Arabic ي
  await page.waitForTimeout(500);
  const hits = await page.locator('[id^="hits-"]').count();
  if (hits === 0) problems.push('search: nothing found for بازي typed with an Arabic ي');
  await page.screenshot({ path: `${out}/53-search-hits.png` });
  console.log('ok   Persian search');
  await context.close();
});

// ---- Offline: Persian loads its language files before the app, and they must be there with no signal too
await flow('offline', async () => {
  const { context, page } = await open();
  await page.goto(`${base}#/`);
  await page.waitForFunction(() => !!navigator.serviceWorker.controller, null, { timeout: 30000 });
  await context.setOffline(true);
  for (const hash of ['/help', '/help/first-aid', '/help/first-aid/cpr-baby', '/help/crying', '/help/you', '/stories', '/songs']) {
    await page.goto(`${base}#${hash}`);
    await page.reload();
    await page.locator('h1').first().waitFor({ timeout: 8000 });
    const ok = await page.evaluate(() => document.documentElement.dir === 'rtl' && /[\u0600-\u06ff]/.test(document.querySelector('h1')?.textContent ?? ''));
    if (!ok) throw new Error(`${hash} offline is not in Persian`);
  }
  console.log('ok   offline in Persian');
  await context.close();
});

await browser.close();
await server.close();

if (leaks.size) {
  console.log('\nEnglish left on screen:');
  for (const [name, words] of leaks) {
    console.log(`  ${name}:`);
    for (const w of [...new Set(words)].slice(0, 12)) console.log(`    ${w}`);
  }
}
for (const [name, words] of leaks) problems.push(`${name}: ${new Set(words).size} English string(s) on screen`);

if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of [...new Set(problems)]) console.log(`  ${p}`);
  process.exit(1);
}
console.log('\nAll screens fine in Persian.');
process.exit(0);
