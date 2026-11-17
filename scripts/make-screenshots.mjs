// Takes the screenshots the browser shows in its install dialog (the `screenshots` in public/manifest*.webmanifest),
// in English and in Persian, from the production build. Run after a visible change to these screens:
//
//   npm run build && node scripts/make-screenshots.mjs
//
// Uses an installed Chrome or Edge (or CHROME_PATH), like the e2e tests. The files are not precached for offline use:
// only the install dialog needs them, and it is online by definition.
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';

const root = fileURLToPath(new URL('..', import.meta.url));
const out = fileURLToPath(new URL('../public/screenshots/', import.meta.url));
mkdirSync(out, { recursive: true });

/** Same sizes as the manifests declare: phones get a 2× portrait shot, computers a landscape one. */
const NARROW = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 };
const WIDE = { viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 };
const SHOTS = [
  ['today', '/', NARROW],
  ['play', '/explore', NARROW],
  ['help', '/help', NARROW],
  ['stories', '/stories', NARROW],
  ['wide', '/', WIDE],
];
const PEOPLE = {
  en: { name: 'Asha', country: 'GB' },
  fa: { name: 'آوا', country: 'IR' },
};

const server = await preview({ root, logLevel: 'silent', preview: { port: 4174 } });
const base = server.resolvedUrls.local[0];
const browser = await launch();

// A child of two and a half has something on every screen: games, stories and age-matched help.
const birth = new Date('2026-11-17T10:00:00');
birth.setMonth(birth.getMonth() - 30);

for (const [language, person] of Object.entries(PEOPLE)) {
  const state = {
    version: 2,
    children: [{ id: 'c1', name: person.name, birthDate: birth.toISOString().slice(0, 10), weeksEarly: 0, emoji: '🦊', color: 'sky', interests: [] }],
    activeChildId: 'c1',
    sessions: [],
    settings: { onboarded: true, country: person.country, language, theme: 'light' },
  };
  for (const [name, hash, size] of SHOTS) {
    // No service worker, so its "works offline" message can't appear in the picture.
    const context = await browser.newContext({ ...size, colorScheme: 'light', reducedMotion: 'reduce', serviceWorkers: 'block', locale: language });
    // A fixed morning, so the sky, the greeting and today's pick are the same every time.
    await context.clock.setFixedTime(new Date('2026-11-17T10:00:00'));
    await context.addInitScript((s) => {
      localStorage.setItem('playnest:state', s);
      localStorage.setItem('playnest:install-nudge-dismissed', '1');
    }, JSON.stringify(state));
    const page = await context.newPage();
    await page.goto(`${base}#${hash}`);
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${out}${name}-${language}.jpg`, type: 'jpeg', quality: 82 });
    await context.close();
    console.log(`screenshots/${name}-${language}.jpg`);
  }
}

await browser.close();
await server.close();

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
