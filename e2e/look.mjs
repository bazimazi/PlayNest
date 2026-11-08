// Takes a screenshot of any screen, for checking how something looks without walking the whole app.
//   npm run build && node e2e/look.mjs /help /stories "/help/first-aid"   (in Git Bash, set MSYS_NO_PATHCONV=1)
// Options via env: AGE=30 (months), DARK=1, BEDSIDE=1, WIDTH=360, HEIGHT=640, FULL=1, BIGTEXT=1, AUDIT=1
import { chromium } from 'playwright-core';
import { mkdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';

const root = fileURLToPath(new URL('..', import.meta.url));
const out = fileURLToPath(new URL('./screenshots/look', import.meta.url));
mkdirSync(out, { recursive: true });

const server = await preview({ root, logLevel: 'silent', preview: { port: 4174 } });
const base = server.resolvedUrls.local[0];

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

const months = Number(process.env.AGE ?? 30);
const birth = new Date();
birth.setMonth(birth.getMonth() - months);
const state = {
  version: 2,
  children: [{ id: 'c1', name: 'Noor', birthDate: birth.toISOString().slice(0, 10), weeksEarly: 0, emoji: '🐣', color: 'peach', interests: ['animals'] }],
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
  settings: { theme: process.env.DARK ? 'dark' : 'light', onboarded: true, country: process.env.COUNTRY ?? 'GB', aidRegion: 'uk', bedside: !!process.env.BEDSIDE },
};

const browser = await launch();
const ctx = await browser.newContext({
  viewport: { width: Number(process.env.WIDTH ?? 390), height: Number(process.env.HEIGHT ?? 844) },
  deviceScaleFactor: 2,
});
await ctx.addInitScript((s) => localStorage.setItem('playnest:state', s), JSON.stringify(state));
const page = await ctx.newPage();
page.on('pageerror', (e) => console.log('pageerror', e.message));
page.on('console', (m) => m.type() === 'error' && console.log('console', m.text()));

let n = 0;
for (const hash of process.argv.slice(2)) {
  await page.goto(`${base}#${hash}`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
  if (process.env.BIGTEXT) {
    await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
    await page.waitForTimeout(200);
    const wide = await page.evaluate(() => {
      const limit = window.innerWidth;
      return [...document.querySelectorAll('body *')]
        .filter((el) => {
          const r = el.getBoundingClientRect();
          return r.width > 0 && r.right > limit + 1 && !el.closest('.carousel, .chips.scroll, .routine-emoji');
        })
        .slice(0, 6)
        .map((el) => `${el.tagName.toLowerCase()}.${String(el.className?.baseVal ?? el.className).split(' ').slice(0, 2).join('.')} right=${Math.round(el.getBoundingClientRect().right)}`);
    });
    console.log(hash, 'over', await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth), wide.join(' | '));
  }
  if (process.env.AUDIT) {
    await page.addScriptTag({ content: readFileSync(createRequire(import.meta.url).resolve('axe-core/axe.min.js'), 'utf8') });
    const lines = await page.evaluate(async () => {
      const r = await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } });
      return r.violations.flatMap((v) => v.nodes.map((x) => `${v.id} ${x.target.join(' ')} ${JSON.stringify(x.any?.[0]?.data ?? {}).slice(0, 110)}`));
    });
    console.log(hash, lines.length ? lines.join('\n') : 'no violations');
  }
  const name = `${String(++n).padStart(2, '0')}${hash.replace(/[^a-z0-9]+/gi, '-')}.png`;
  await page.screenshot({ path: `${out}/${name}`, fullPage: !!process.env.FULL });
  console.log(`${out}/${name}`);
}
await browser.close();
await server.close();
