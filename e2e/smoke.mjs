// End-to-end smoke test: every screen of the production build in a phone-sized browser, plus an axe
// accessibility audit (WCAG 2.1 A/AA, serious and critical issues) of each one.
//
//   npm run e2e                     build, then test (screenshots go to e2e/screenshots/)
//   node e2e/smoke.mjs [baseUrl]    test an already-running server instead of starting one
//
// Uses an installed Chrome or Edge (set CHROME_PATH to pick a specific browser), so no browser download is needed.
import { chromium } from 'playwright-core';
import { mkdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';

const require = createRequire(import.meta.url);
const AXE = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const root = fileURLToPath(new URL('..', import.meta.url));

const server = process.argv[2] ? null : await preview({ root, logLevel: 'silent', preview: { port: 4173 } });
const base = process.argv[2] ?? server.resolvedUrls.local[0];
const out = fileURLToPath(new URL('./screenshots', import.meta.url));
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

const browser = await launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, colorScheme: 'light' });
const page = await ctx.newPage();
const problems = [];
page.on('console', (m) => m.type() === 'error' && problems.push(`console: ${m.text()}`));
page.on('pageerror', (e) => problems.push(`pageerror: ${e.message}`));
// Every illustration and font is bundled, so nothing the app asks for may ever be missing.
page.on('response', (r) => r.status() >= 400 && problems.push(`${r.status()}: ${r.url()}`));

let n = 0;
const shot = async (name, full = false) => {
  await page.waitForTimeout(350);
  await page.screenshot({ path: `${out}/${String(++n).padStart(2, '0')}-${name}.png`, fullPage: full });
};
const go = async (hash) => {
  await page.goto(`${base}#${hash}`);
  await page.waitForLoadState('networkidle');
};
const step = async (label, fn) => {
  // ONLY=movement runs just the steps with that word in their name.
  if (process.env.ONLY && !label.includes(process.env.ONLY)) return;
  try {
    await fn();
    console.log(`ok   ${label}`);
  } catch (e) {
    problems.push(`step "${label}": ${e.message.split('\n')[0]}`);
    console.log(`FAIL ${label}: ${e.message.split('\n')[0]}`);
  }
};
/** Runs axe on the current screen; serious/critical WCAG A/AA violations are problems. */
const audit = async (label) => {
  await page.waitForTimeout(300);
  await page.evaluate(() => document.getAnimations().forEach((a) => { if (a.effect?.getTiming().iterations !== Infinity) a.finish(); }));
  if (!(await page.evaluate(() => 'axe' in window))) await page.addScriptTag({ content: AXE });
  const violations = await page.evaluate(async () => {
    const r = await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } });
    return r.violations
      .filter((v) => v.impact === 'serious' || v.impact === 'critical')
      .map((v) => `${v.id} (${v.nodes.length}): ${v.nodes.slice(0, 2).map((x) => x.target.join(' ')).join(' | ')}`);
  });
  for (const v of violations) problems.push(`a11y ${label}: ${v}`);
};

const isoMonthsAgo = (m) => {
  const d = new Date();
  d.setMonth(d.getMonth() - m);
  return d.toISOString().slice(0, 10);
};

await step('welcome intro, then add a child', async () => {
  await page.goto(base);
  await page.waitForURL(/#\/welcome/);
  await shot('welcome');
  await audit('welcome');
  await page.getByRole('button', { name: /Get started/ }).click();
  await page.getByRole('heading', { name: /Who are we playing with/ }).waitFor();
  await page.getByRole('button', { name: /Next/ }).click();
  await page.getByRole('alert').waitFor(); // a missing name is explained, not silently ignored
  await page.fill('#child-name', 'Noor');
  await shot('welcome-name');
  await audit('welcome-name');
  await page.getByRole('button', { name: /Next/ }).click();
  await page.getByRole('heading', { name: 'When was Noor born?' }).waitFor();
  await page.fill('#child-birth', isoMonthsAgo(7));
  await page.getByRole('switch').click();
  await page.fill('#weeks-early', '5');
  await page.getByText(/games are ready/).waitFor();
  await shot('welcome-birth');
  await audit('welcome-birth');
  await page.getByRole('button', { name: /Next/ }).click();
  await page.getByRole('heading', { name: 'Pick a buddy for Noor' }).waitFor();
  await shot('welcome-buddy');
  await audit('welcome-buddy');
  await page.getByRole('button', { name: /Start playing/ }).click();
  await page.locator('.hero-pick').waitFor();
});

let heroTitle = '';
await step('today: one clear pick with a reason', async () => {
  await page.locator('.hero-pick').waitFor();
  heroTitle = (await page.locator('#hero-title').textContent()) ?? '';
  const reason = await page.locator('.is-top .hero-reason').textContent();
  if (!reason || reason.length < 5) throw new Error('no pick reason');
  // The next idea is a real card waiting underneath, not a blank one.
  if (!(await page.locator('.deck-slot.is-next h2').textContent())) throw new Error('no next idea under the pick');
  await page.locator('section[aria-labelledby="plan-today-title"] .plan-row').first().waitFor();
  await shot('today');
  await shot('today-full', true);
  await audit('today');
});

await step('today: another idea and mood', async () => {
  await page.getByRole('button', { name: /Another idea/ }).click();
  await page
    .waitForFunction((before) => document.querySelector('#hero-title')?.textContent !== before, heroTitle, { timeout: 3000 })
    .catch(() => {
      throw new Error('hero did not change');
    });
  await page.getByRole('button', { name: /Energetic/ }).click();
  await page.locator('.is-top').getByText('To burn off energy').waitFor();
  await shot('today-energetic');
});

await step('today: each mood changes the sky, and stays readable', async () => {
  for (const [mood, world] of [['Happy', 'sun'], ['Fussy', 'lilac'], ['Sleepy', 'night'], ['Energetic', 'coral']]) {
    await page.getByRole('button', { name: new RegExp(mood) }).click();
    await page.waitForFunction((w) => document.documentElement.dataset.world === w, world);
    await page.waitForTimeout(500); // let the colours finish crossfading before measuring contrast
    await shot(`mood-${mood.toLowerCase()}`);
    await audit(`mood ${mood}`);
  }
  // Tapping the chosen mood again clears it, handing the sky back to the time of day.
  await page.getByRole('button', { name: /Energetic/ }).click();
});

await step('today: the main action is on the first screen', async () => {
  const box = await page.getByRole('link', { name: /Let’s play/ }).boundingBox();
  const tab = await page.locator('.tabbar').boundingBox();
  if (!box || box.y + box.height > tab.y) throw new Error('"Let’s play" is hidden behind the tab bar');
});

await step('today stays one decision', async () => {
  // Today stays one decision: at most one extra card competes with the pick.
  const cards = await page.locator('.page-body > .nudge, .page-body > .backup-nudge, .page-body > .install, section[aria-labelledby="again-title"]').count();
  if (cards > 1) throw new Error(`${cards} extra cards on Today`);
});

let firstId = '';
let firstTitle = '';
await step('explore lists activities; learn lists guides', async () => {
  await go('/explore');
  await page.locator('.tile-link').first().waitFor();
  firstId = await page.locator('.tile-link').first().getAttribute('data-id');
  firstTitle = (await page.locator('.tile-title').first().textContent()) ?? '';
  await shot('explore');
  await audit('explore');
  await page.getByRole('link', { name: /^Learn$/ }).click();
  await page.locator('.guide-card').first().waitFor();
  await shot('learn');
  await audit('learn');
  await go('/explore?view=guides'); // old link redirects to the Learn tab
  await page.locator('.guide-card').first().waitFor();
});

await step('explore quick filters, collections & search', async () => {
  await go('/explore');
  await page.getByRole('button', { name: /Bath time/ }).click();
  await page.locator('.tile').first().waitFor();
  await go('/explore?age=all&tag=world');
  await page.locator('.tile').first().waitFor();
  await go('/explore?age=all&q=bath');
  await page.locator('.tile').first().waitFor();
});

await step('filters sheet opens', async () => {
  await go('/explore');
  await page.getByRole('button', { name: /^Filters/ }).click();
  await page.getByRole('dialog', { name: 'Filters' }).waitFor();
  await shot('filters');
  await audit('filters');
  await page.keyboard.press('Escape');
});

await step('activity detail: before you start, then extras folded away', async () => {
  await go(`/activity/${firstId}`);
  await page.getByRole('heading', { name: 'Before you start' }).waitFor();
  await page.getByRole('heading', { name: 'How to play' }).waitFor();
  await page.getByText(/More ways to play/).click();
  const ways = await page.locator('.ways-list li').count();
  if (ways < 2) throw new Error(`expected 2+ variations, got ${ways}`);
  await shot('activity', true);
  await audit('activity');
});

await step('play mode with intro, then save to journal', async () => {
  await go(`/play/${firstId}`);
  await shot('play');
  await audit('play');
  const start = page.getByRole('button', { name: /We’re ready/ });
  if (await start.isVisible()) {
    await shot('play-intro');
    await start.click();
  }
  await page.locator('.step-text').waitFor();
  await shot('play-step');
  await audit('play-step');
  for (let i = 0; i < 10; i++) {
    const next = page.getByRole('button', { name: /Next step/ });
    if (!(await next.isVisible())) break;
    await next.click();
  }
  await page.getByRole('button', { name: /We played/ }).click();
  await page.getByRole('button', { name: /Loved it/ }).click();
  await page.getByRole('button', { name: 'One minute more' }).click();
  await page.getByRole('button', { name: /Add a note/ }).click();
  await page.fill('#note', 'Giggled the whole time!');
  await page.getByText('Next time, try:').waitFor();
  await shot('play-finish');
  await audit('play-finish');
  await page.getByRole('button', { name: /Save to our garden/ }).click();
  await page.locator('.hero-pick').waitFor();
});

await step('explore: tried badge, not-tried filter and paging', async () => {
  await go('/explore');
  await page.locator('.tile').first().waitFor();
  await page.getByText(/Noor has tried 1 of \d+/).waitFor();
  await go(`/explore?age=all&q=${encodeURIComponent(firstTitle)}`);
  await page.locator(`.tile-link[data-id="${firstId}"] .tile-badge`, { hasText: 'Played' }).waitFor();
  await go('/explore?fresh=1');
  await page.locator('.tile').first().waitFor();
  if (await page.locator(`.tile-link[data-id="${firstId}"]`).count()) throw new Error('played activity still listed under Not tried yet');
  await go('/explore?age=all');
  await page.locator('.tile').first().waitFor();
  const before = await page.locator('.tile').count();
  await page.getByRole('button', { name: /Show more/ }).click();
  const after = await page.locator('.tile').count();
  if (after <= before) throw new Error(`paging did not add cards (${before} -> ${after})`);
});

await step('plan: rows tick off and swap', async () => {
  await go('/plan');
  await page.locator('.plan-row').first().waitFor();
  const count = await page.locator('.plan-row').count();
  if (count !== 2) throw new Error(`expected 2 plan items for today, got ${count}`);
  const title = await page.locator('.plan-row-title').first().textContent();
  await page.getByRole('button', { name: /^Swap/ }).first().click();
  if ((await page.locator('.plan-row-title').first().textContent()) === title) throw new Error('swap did not change the item');
  await page.locator('.check-btn').first().click();
  if ((await page.locator('.check-btn').first().getAttribute('aria-pressed')) !== 'true') throw new Error('tick did not stick');
  await shot('plan', true);
  await audit('plan');
});

await step('milestones: one-at-a-time check-in', async () => {
  await go('/milestones?checkin=1');
  await page.locator('.checkin-q').waitFor();
  await shot('checkin');
  await audit('checkin');
  await page.getByRole('button', { name: 'Yes', exact: true }).click();
  await page.getByRole('button', { name: 'Not yet', exact: true }).click();
  await page.getByText(/^3 of \d+$/).waitFor();
  await go('/milestones');
  await page.locator('.ms-item').first().waitFor();
  await page.getByText('Ideas to practise through play').first().waitFor();
  await page.getByRole('link', { name: /Continue check-in/ }).waitFor();
  await shot('milestones', true);
  await audit('milestones');
});

await step('growth: garden, milestones, journal in one place', async () => {
  await go('/growth');
  await page.getByText('Giggled the whole time!').waitFor();
  await page.getByText('Play across 8 areas').waitFor();
  await page.getByText('1 different game explored').waitFor();
  await page.getByRole('link', { name: /Continue check-in/ }).waitFor();
  await shot('growth', true);
  await audit('growth');
  await go('/journal'); // old route redirects
  await page.getByText('Play across 8 areas').waitFor();
});

await step('growth: add a moment, delete with undo', async () => {
  await go('/growth');
  await page.getByRole('button', { name: /Add a moment/ }).first().click();
  await page.fill('#moment', 'Rolled over for the first time');
  await page.getByRole('button', { name: /Save moment/ }).click();
  // The sheet slides away first; until it has gone, its words are on screen twice.
  await page.getByRole('dialog').waitFor({ state: 'detached' });
  await page.getByText('Rolled over for the first time').waitFor();
  // Swipe the row left to reveal Delete, as on a phone.
  const row = page.locator('.swipe-content', { hasText: 'Rolled over for the first time' });
  await row.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  const box = await row.boundingBox();
  await page.mouse.move(box.x + box.width - 20, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width - 80, box.y + box.height / 2, { steps: 4 });
  await page.mouse.move(box.x + box.width - 140, box.y + box.height / 2, { steps: 4 });
  await page.mouse.up();
  await shot('journal-swipe');
  await page.getByRole('button', { name: 'Delete moment' }).click();
  await page.getByRole('button', { name: 'Undo' }).click();
  await page.getByText('Rolled over for the first time').waitFor();
});

await step('today brings back a loved game after a break', async () => {
  await page.waitForTimeout(500); // let the app's own pending save land first
  await page.evaluate(() => {
    const st = JSON.parse(localStorage.getItem('playnest:state'));
    for (const s of st.sessions) s.date = new Date(Date.now() - 15 * 864e5).toISOString();
    localStorage.setItem('playnest:state', JSON.stringify(st));
  });
  await go('/');
  await page.reload();
  await page.getByRole('heading', { name: 'Play it again' }).waitFor();
  await page.getByText('New twist').waitFor();
});

await step('learn guide page', async () => {
  await go('/learn/talk-read-sing');
  await page.getByText('CROWD prompt').waitFor();
  await shot('guide');
  await audit('guide');
});

await step('settings: add second child gets a different avatar', async () => {
  await go('/settings');
  await page.getByRole('button', { name: 'Add a child' }).click();
  await page.fill('#child-name', 'Sami');
  await page.fill('#child-birth', isoMonthsAgo(50));
  await page.getByRole('dialog').getByRole('button', { name: 'Add child' }).click();
  await page.getByText('Sami').first().waitFor();
  const avatars = await page.locator('main .row-item .avatar img').evaluateAll((els) => els.map((e) => e.dataset.emoji));
  if (avatars.length < 2 || new Set(avatars).size !== avatars.length) throw new Error(`duplicate avatars: ${avatars.join(' ')}`);
  await shot('settings', true);
  await audit('settings');
});

await step('play together: wide age gap still gets ideas', async () => {
  await go('/together');
  await page.getByRole('heading', { name: /Sami leads, Noor plays/ }).waitFor();
  await page.locator('.tile').first().waitFor();
  await shot('together', true);
  await audit('together');
});

await step('child switcher', async () => {
  await go('/');
  await page.locator('.profile-btn').click();
  await page.getByRole('dialog').waitFor();
  await shot('switcher');
  await audit('switcher');
  await page.getByRole('dialog').getByRole('button', { name: /Noor/ }).click();
});

// ---------- v1.5 ----------

await step('today: what’s going on right now changes the pick, and takes unsafe ideas out', async () => {
  await go('/');
  await page.locator('.right-now').waitFor();
  await page.getByRole('button', { name: 'More kinds of weather' }).click();
  await page.locator('.right-now').getByRole('button', { name: /Stormy/ }).click();
  await page.waitForTimeout(300);
  await page.locator('.hero-pick').waitFor();
  await shot('today-stormy');
  await audit('today-stormy');
  await page.locator('.right-now').getByRole('button', { name: /Stormy/ }).click();
  // The picks never repeat what's already in today's plan on the same screen.
  const shown = await page.locator('.deck-slot h2').allTextContents();
  const planned = await page.locator('section[aria-labelledby="plan-today-title"] .plan-row-title').allTextContents();
  const repeat = shown.filter((t) => planned.includes(t));
  if (repeat.length) throw new Error(`"${repeat[0]}" is shown twice`);
});

await step('help: one tap from Today, with a number to call', async () => {
  await go('/');
  await page.getByRole('link', { name: 'Help right now' }).click();
  await page.getByRole('heading', { name: 'We’re here' }).waitFor();
  await shot('help', true);
  await audit('help');
});

await step('first aid: asks whose steps, never blends them, and always shows the call button', async () => {
  await go('/help/first-aid');
  await page.locator('.row-item').first().waitFor();
  await shot('first-aid', true);
  await audit('first-aid');
  await page.getByRole('button', { name: /Choose whose steps/ }).click();
  await page.getByRole('dialog').getByRole('button', { name: /United Kingdom/ }).click();
  const links = await page.locator('main .row-item').evaluateAll((els) => els.map((e) => e.getAttribute('href')));
  await go(links[0].replace(/^#/, ''));
  await page.locator('.aid-steps li').first().waitFor();
  const steps = await page.locator('.aid-steps li').count();
  if (steps < 2 || steps > 6) throw new Error(`expected 2–6 steps, got ${steps}`);
  await page.getByText(/Based on:/).waitFor();
  await shot('first-aid-card', true);
  await audit('first-aid-card');
  await page.locator('.bottom-bar .btn-call, .bottom-bar .btn').first().waitFor();
});

await step('crying: stepping away is one tap, with a timer', async () => {
  await go('/help/crying');
  await page.getByRole('button', { name: /expanded/ }).count();
  await page.locator('.btn-step-away').click();
  await page.locator('.step-away').waitFor();
  // The way to a person is on this screen, without having to open anything.
  await page.locator('section[aria-labelledby="flags-title"] .btn-call, section[aria-labelledby="flags-title"] .btn').first().waitFor();
  await page.locator('.step-away').getByRole('button', { name: /Start a timer/ }).click();
  await page.locator('.countdown').waitFor();
  await shot('crying', true);
  await audit('crying');
});

await step('parent support: a frightened parent reaches a person in two taps, either way', async () => {
  // Search takes them straight to the right screen rather than to a question.
  await go('/help/you?view=self');
  await page.locator('.crisis-open').waitFor();
  await go('/help/you?view=baby');
  await page.locator('.crisis-open').waitFor();
  await go('/help/you?view=help');
  await page.locator('.btn-call, .emergency-card .btn').first().waitFor();
  await go('/help/you');
  await page.locator('.btn-urgent').first().click();
  await page.getByRole('button', { name: /hurt my baby/ }).waitFor();
  await audit('support-scared');
  await page.getByRole('button', { name: /hurt myself/ }).click();
  await page.locator('.crisis-open').waitFor();
  await shot('support-self', true);
  await audit('support-self');
  await page.getByRole('button', { name: 'Back' }).click();
  await go('/help/you');
  await shot('support', true);
  await audit('support');
});

await step('hard moments: steps and words fit the child’s age', async () => {
  const { context, p } = await freshPage(30);
  await p.goto(`${base}#/help`);
  await p.getByRole('link', { name: 'Tantrum in public' }).click();
  await p.getByRole('heading', { name: 'Right now' }).waitFor();
  const steps = await p.locator('.coach-now .steps li').allTextContents();
  if (steps.length !== 3) throw new Error(`expected 3 steps, got ${steps.length}`);
  await p.screenshot({ path: `${out}/coach.png`, fullPage: true });
  await auditOn(p, 'coach');
  // The words change with age: a 10-year-old doesn't get a toddler's card.
  await context.close();
  const older = await freshPage(120);
  await older.p.goto(`${base}#/help/moment/tantrum-public`);
  await older.p.getByRole('heading', { name: 'Right now' }).waitFor();
  const olderSteps = await older.p.locator('.coach-now .steps li').allTextContents();
  if (olderSteps.join() === steps.join()) throw new Error('same steps at 30 months and at 10 years');
  await older.context.close();
});

await step('stories: a story to read, or to tell with the phone away', async () => {
  // Stories start around 2, and says so kindly for a baby.
  await go('/stories');
  await page.getByText(/Stories start around age 2/).waitFor();
  const { context, p } = await freshPage(48);
  await p.goto(`${base}#/stories`);
  await p.locator('.tile-link').first().waitFor();
  await p.screenshot({ path: `${out}/stories.png` });
  await auditOn(p, 'stories');
  await p.locator('.tile-link').first().click();
  await p.locator('.story-text p').first().waitFor();
  await p.screenshot({ path: `${out}/story.png`, fullPage: true });
  await auditOn(p, 'story');
  await p.getByRole('button', { name: /Tell it yourself/ }).click();
  await p.getByRole('heading', { name: /few beats/ }).waitFor();
  await p.getByRole('button', { name: /We shared this/ }).click();
  await p.getByRole('button', { name: /Added/ }).waitFor();
  // The night screen on the page it's most for.
  await p.getByRole('button', { name: 'Dim the screen for night' }).click();
  await p.waitForFunction(() => document.documentElement.dataset.mode === 'bedside');
  await p.waitForTimeout(300);
  await p.screenshot({ path: `${out}/bedside-story.png` });
  await auditOn(p, 'bedside-story');
  await context.close();
});

await step('songs: words, and a tune that plays only when asked', async () => {
  await go('/songs');
  await page.locator('.tile-link').first().waitFor();
  await shot('songs');
  await audit('songs');
  await page.locator('.tile-link').first().click();
  await page.locator('.detail-head h1').waitFor();
  const tune = page.getByRole('button', { name: /Hear the tune/ });
  if (await tune.count()) {
    await tune.click();
    await page.getByRole('button', { name: 'Stop' }).click();
  }
  await shot('song', true);
  await audit('song');
});

await step('sounds: starts quiet, and with a timer', async () => {
  await go('/sounds');
  await page.getByRole('heading', { name: 'Soothing sounds' }).waitFor();
  const quiet = await page.getByRole('button', { name: 'Quiet' }).getAttribute('aria-pressed');
  if (quiet !== 'true') throw new Error('sound should default to the quietest level');
  await shot('sounds', true);
  await audit('sounds');
  await page.getByRole('button', { name: 'Got it' }).click();
  await page.getByRole('button', { name: /^Play$/ }).click();
  await page.getByRole('button', { name: /Stop · / }).click();
});

await step('talk cards: one question at a time', async () => {
  await go('/talk');
  await page.locator('.talk-card p').waitFor();
  const before = await page.locator('.talk-card p').textContent();
  await page.getByRole('button', { name: /Next question/ }).click();
  if ((await page.locator('.talk-card p').textContent()) === before) throw new Error('card did not change');
  await shot('talk');
  await audit('talk');
});

await step('this stage, firsts and pressed flowers', async () => {
  await go('/stage');
  await page.getByRole('heading', { name: 'What’s going on' }).waitFor();
  await shot('stage', true);
  await audit('stage');
  await go('/firsts');
  await page.fill('#first-custom', 'First time on a swing');
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.getByRole('dialog').getByRole('button', { name: /Keep this/ }).click();
  await page.getByRole('dialog').waitFor({ state: 'detached' });
  await page.getByText('First time on a swing').waitFor();
  await shot('firsts', true);
  await audit('firsts');
  await go('/album');
  await page.locator('.album-page').first().waitFor();
  await shot('album');
  await audit('album');
});

await step('search: finds everything, in your words, and pins help first', async () => {
  await go('/search');
  await page.fill('#search-all', 'diaper');
  await page.getByRole('heading', { name: 'Games' }).waitFor();
  await shot('search');
  await audit('search');
  await page.fill('#search-all', 'choking');
  await page.locator('.urgent-hit').first().waitFor();
  const first = await page.locator('.urgent-hit').first().getAttribute('href');
  if (!first?.includes('/help/first-aid')) throw new Error(`"choking" should pin first aid, got ${first}`);
  await page.fill('#search-all', 'zzzzqqq');
  await page.getByText(/Nothing for/).waitFor();
});

await step('celebrate: nothing is on until you choose it, and it stays yours', async () => {
  await go('/celebrate');
  await page.locator('.row-item').first().waitFor();
  await shot('celebrate');
  await audit('celebrate');
  const before = await page.evaluate(() => JSON.parse(localStorage.getItem('playnest:state')).settings.celebrations.length);
  if (before !== 0) throw new Error('a celebration was switched on without being chosen');
  await page.locator('.row-item').first().click();
  await page.getByRole('dialog').getByRole('button', { name: /We mark this/ }).click();
  await page.getByRole('dialog').getByRole('button', { name: /We mark this/ }).getAttribute('aria-pressed');
  await page.waitForTimeout(400);
  const after = await page.evaluate(() => JSON.parse(localStorage.getItem('playnest:state')).settings.celebrations.length);
  if (after !== 1) throw new Error('choosing a celebration did not stick');
  await audit('celebrate-sheet');
});

await step('printing: a visit summary and a game on paper', async () => {
  await go('/print/summary');
  await page.getByRole('button', { name: /Print or save PDF/ }).waitFor();
  await page.fill('.print-questions', 'Is this normal?');
  await shot('print-summary', true);
  await audit('print-summary');
  await page.emulateMedia({ media: 'print' });
  if (await page.getByRole('button', { name: /Print or save PDF/ }).isVisible()) throw new Error('buttons show on paper');
  await page.emulateMedia({ media: 'screen' });
  await go(`/print/card/${firstId}`);
  await page.locator('.print-card h1').waitFor();
  await audit('print-card');
});

await step('the night screen: black, warm, with no pictures, and still readable', async () => {
  await go('/help/crying');
  await page.getByRole('button', { name: 'Dim the screen for night' }).click();
  await page.waitForFunction(() => document.documentElement.dataset.mode === 'bedside');
  await page.waitForTimeout(300);
  await shot('bedside-crying', true);
  await audit('bedside-crying');
  for (const [hash, name] of [['/', 'today'], ['/help', 'help'], ['/stories', 'stories'], ['/songs', 'songs'], ['/explore', 'explore'], ['/growth', 'growth'], ['/settings', 'settings']]) {
    await go(hash);
    await page.waitForTimeout(200);
    await audit(`bedside-${name}`);
  }
  await shot('bedside-today');
  await go('/help/crying');
  await page.reload();
  await page.waitForLoadState('networkidle');
  const mode = await page.evaluate(() => document.documentElement.dataset.mode);
  if (mode !== 'bedside') throw new Error('the night screen did not survive a reload');
  await page.getByRole('button', { name: /Turn off the dim/ }).click();
  await page.waitForFunction(() => !document.documentElement.dataset.mode);
});

await step('a game: make it work for us, share the whole game, print it', async () => {
  await go(`/activity/${firstId}`);
  await page.getByText('Make it work for us').click();
  await page.getByRole('button', { name: /Too much/ }).click();
  await page.locator('.disclosure .ways-list li').first().waitFor();
  await shot('make-it-work', true);
  await audit('make-it-work');
});

await step('dark theme', async () => {
  await go('/settings');
  await page.getByRole('button', { name: /Dark/ }).click();
  await go('/');
  await shot('today-dark');
  await audit('today-dark');
  await go(`/activity/${firstId}`);
  await shot('activity-dark');
  await go('/milestones?checkin=1');
  await shot('checkin-dark');
  await audit('checkin-dark');
  for (const [hash, name] of [['/explore', 'explore'], ['/growth', 'growth'], ['/learn', 'learn'], ['/together', 'together'], ['/milestones', 'milestones'], ['/settings', 'settings']]) {
    await go(hash);
    await shot(`${name}-dark`);
    await audit(`${name}-dark`);
  }
  await go(`/play/${firstId}`);
  await shot('play-dark');
  await audit('play-dark');
  await go('/');
  for (const mood of ['Happy', 'Energetic', 'Fussy', 'Sleepy']) {
    await page.getByRole('button', { name: new RegExp(mood) }).click();
    await page.waitForTimeout(500);
    await audit(`dark mood ${mood}`);
  }
});

await step('state persists across reload', async () => {
  await page.reload();
  await page.waitForLoadState('networkidle');
  const theme = await page.evaluate(() => document.documentElement.dataset.theme);
  if (theme !== 'dark') throw new Error(`theme after reload: ${theme}`);
});

await step('no horizontal scroll on any page, even on a small phone', async () => {
  await page.setViewportSize({ width: 360, height: 640 });
  for (const h of ['/help', '/help/first-aid', '/help/crying', '/help/you', '/sounds', '/stories', '/songs', '/talk', '/routines', '/stage', '/firsts', '/album', '/search', '/celebrate', '/print/summary', '/', '/explore', '/learn', '/learn/talk-read-sing', '/plan', '/growth', '/milestones', '/milestones?checkin=1', '/settings', '/together', `/activity/${firstId}`, `/play/${firstId}`]) {
    await go(h);
    const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (over > 1) throw new Error(`${h} overflows by ${over}px`);
  }
});

await step('small phone: the main action is still on the first screen', async () => {
  await go('/');
  await page.waitForTimeout(500);
  const box = await page.getByRole('link', { name: /Let’s play/ }).boundingBox();
  const tab = await page.locator('.tabbar').boundingBox();
  await shot('small-today');
  if (!box || box.y + box.height > tab.y) throw new Error('"Let’s play" is hidden behind the tab bar at 360×640');
  await go(`/play/${firstId}`);
  const main = page.locator('.play-foot .btn-primary');
  if (!(await main.isVisible()) || (await main.boundingBox()).y + 40 > 640) throw new Error('play mode: the main button is off screen');
});

/** The same audit as `audit`, on any page. */
async function auditOn(p, label) {
  await p.waitForTimeout(300);
  if (!(await p.evaluate(() => 'axe' in window))) await p.addScriptTag({ content: AXE });
  const violations = await p.evaluate(async () => {
    const r = await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } });
    return r.violations
      .filter((v) => v.impact === 'serious' || v.impact === 'critical')
      .map((v) => `${v.id} (${v.nodes.length}): ${v.nodes.slice(0, 2).map((x) => x.target.join(' ')).join(' | ')}`);
  });
  for (const v of violations) problems.push(`a11y ${label}: ${v}`);
}

/** A fresh browser profile with one child of the given age, for checks that mustn't disturb the main run. */
async function freshPage(months, options = {}, extraState = {}) {
  const birth = isoMonthsAgo(months);
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, ...options });
  const state = {
    version: 2,
    children: [{ id: 'c1', name: 'Asha', birthDate: birth, weeksEarly: 0, emoji: '🦊', color: 'sky', interests: [] }],
    activeChildId: 'c1',
    sessions: [],
    settings: { onboarded: true, country: 'GB' },
    ...extraState,
  };
  await context.addInitScript((s) => {
    if (!localStorage.getItem('playnest:state')) localStorage.setItem('playnest:state', s);
  }, JSON.stringify(state));
  const p = await context.newPage();
  p.on('pageerror', (e) => problems.push(`pageerror: ${e.message}`));
  return { context, p };
}

await step('older children: a pick, a plan and no empty screens, at 8, 10, 12 and past 12', async () => {
  for (const months of [97, 120, 144, 160]) {
    const { context, p } = await freshPage(months);
    await p.goto(`${base}#/`);
    await p.locator('.hero-pick').waitFor();
    if ((await p.locator('section[aria-labelledby="plan-today-title"] .plan-row').count()) === 0) throw new Error(`no plan at ${months} months`);
    if (await p.getByText(/check-in/).count()) throw new Error(`milestone check-in offered at ${months} months`);
    await p.goto(`${base}#/explore`);
    await p.locator('.tile-link').first().waitFor();
    await p.goto(`${base}#/stage`);
    await p.getByRole('heading', { name: 'What’s going on' }).waitFor();
    if (months === 120) await p.screenshot({ path: `${out}/older-stage.png`, fullPage: true });
    await p.goto(`${base}#/talk`);
    await p.locator('.talk-card p').waitFor();
    await context.close();
  }
});

await step('routines and kid mode: big pictures, and a gate that stops accidental exits', async () => {
  const { context, p } = await freshPage(48);
  await p.goto(`${base}#/routines`);
  await p.getByRole('button', { name: /Add the .* routine/ }).first().click();
  await p.getByRole('button', { name: /Start/ }).first().click();
  await p.locator('.kid-now').waitFor();
  await p.screenshot({ path: `${out}/kid-mode.png` });
  // Nothing in kid mode may lead out of it, and nothing may reach the network.
  const links = await p.locator('.kid a').count();
  if (links) throw new Error('kid mode has links');
  const requests = [];
  p.on('request', (r) => r.url().startsWith('http') && !r.url().includes('/emoji/') && requests.push(r.url()));
  const box = await p.locator('.kid-now').boundingBox();
  if (box.height < 240) throw new Error(`kid button is small: ${box.height}px`);
  // A wrong answer goes back to the routine, without any fuss.
  await p.locator('.kid-lock').focus();
  await p.keyboard.press('Enter');
  await p.locator('.kid-gate').waitFor();
  await p.screenshot({ path: `${out}/kid-gate.png` });
  await p.getByRole('button', { name: /Back to the routine/ }).click();
  // Back doesn't leave, whether it's a button or a gesture.
  await p.goBack();
  await p.waitForTimeout(200);
  if (!(await p.locator('.kid-now').count())) throw new Error('the back button left kid mode');
  for (let i = 0; i < 12 && !(await p.locator('.kid-done').count()); i++) {
    await p.locator('.kid-now').click();
    await p.waitForTimeout(520); // a double tap counts once, so wait as a child would
  }
  await p.locator('.kid-done').waitFor();
  await p.screenshot({ path: `${out}/kid-done.png` });
  // Finishing isn't a way out either: only the gate is.
  if (await p.getByRole('button', { name: 'Finish' }).count()) throw new Error('the done screen has a way out');
  if (!(await p.locator('.kid-lock').count())) throw new Error('no way for a grown-up to leave the done screen');
  if (requests.length) throw new Error(`kid mode reached the network: ${requests[0]}`);
  await context.close();
});

await step('storage: a damaged save is kept, explained, and can be rescued', async () => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await context.addInitScript(() => {
    if (!sessionStorage.getItem('seeded')) {
      localStorage.setItem('playnest:state', '{"children":[{"id":"a","na');
      sessionStorage.setItem('seeded', '1');
    }
  });
  const p = await context.newPage();
  await p.goto(`${base}#/settings`);
  await p.waitForLoadState('networkidle');
  const kept = await p.evaluate(() => Object.keys(localStorage).filter((k) => k.includes(':damaged:')).map((k) => localStorage.getItem(k)));
  if (!kept.some((v) => v.includes('"na'))) throw new Error('the damaged save was not kept');
  await context.close();
});

await step('storage: restoring a stray file changes nothing, and a real backup can be undone', async () => {
  const { context, p } = await freshPage(30);
  await p.goto(`${base}#/settings`);
  await p.getByRole('button', { name: /Restore from backup/ }).waitFor();
  const input = p.locator('input[type=file]');
  await input.setInputFiles({ name: 'photo.json', mimeType: 'application/json', buffer: Buffer.from('{"hello":"world"}') });
  await p.getByText(/doesn’t look like a PlayNest backup/).waitFor();
  if ((await p.getByText('Asha').count()) === 0) throw new Error('a stray file wiped the app');
  const backup = { app: 'playnest', state: { children: [{ id: 'z', name: 'Zed', birthDate: isoMonthsAgo(20) }], sessions: [] } };
  await input.setInputFiles({ name: 'PlayNest-backup.txt', mimeType: 'text/plain', buffer: Buffer.from(JSON.stringify(backup)) });
  await p.getByText('Zed').first().waitFor();
  await p.getByRole('button', { name: 'Undo' }).click();
  await p.getByText('Asha').first().waitFor();
  await context.close();
});

await step('help reaches anyone, even before adding a child', async () => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const p = await context.newPage();
  await p.goto(`${base}#/help`);
  await p.getByRole('heading', { name: 'We’re here' }).waitFor();
  await p.goto(`${base}#/help/first-aid`);
  await p.locator('.row-item').first().waitFor();
  await p.goto(`${base}#/welcome`);
  await p.getByRole('link', { name: /Need help right now/ }).waitFor();
  await context.close();
});

await step('a weather warning reaches the whole of Today', async () => {
  // A bath game in today's plan must go when a storm is tapped.
  const today = new Date();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
  const weekStart = `${monday.getFullYear()}-${String(monday.getMonth() + 1).padStart(2, '0')}-${String(monday.getDate()).padStart(2, '0')}`;
  const day = (today.getDay() + 6) % 7;
  const { context, p } = await freshPage(30, {}, { plans: { c1: { weekStart, seed: 1, items: [{ day, slot: 'calm', activityId: 'bath-pour-and-squeeze', done: false }] } } });
  await p.goto(`${base}#/`);
  await p.getByRole('button', { name: 'More kinds of weather' }).click();
  await p.locator('.right-now').getByRole('button', { name: /Stormy/ }).click();
  await p.waitForTimeout(300);
  if (await p.locator('.plan-row').count()) throw new Error('a bath game stayed in the plan during a storm');
  await context.close();
});

await step('a bad link or an odd search never breaks a screen', async () => {
  const { context, p } = await freshPage(30);
  for (const hash of ['/songs?type=foo', '/stories?theme=foo', '/explore?tag=foo&domain=foo&energy=foo&setting=foo', '/search?q=constructor']) {
    await p.goto(`${base}#${hash}`);
    await p.waitForTimeout(300);
    if (await p.locator('.crash').count()) throw new Error(`${hash} crashed`);
  }
  await context.close();
});

await step('storage: a new phone can restore straight from the first screen', async () => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const p = await context.newPage();
  await p.goto(`${base}#/welcome`);
  await p.getByRole('button', { name: 'Restore from a backup' }).waitFor();
  const backup = { app: 'playnest', state: { children: [{ id: 'z', name: 'Zed', birthDate: isoMonthsAgo(20) }], sessions: [] } };
  await p.locator('input[type=file]').setInputFiles({ name: 'b.txt', mimeType: 'text/plain', buffer: Buffer.from(JSON.stringify(backup)) });
  await p.getByRole('heading', { name: 'Zed' }).first().waitFor();
  await context.close();
});

await step('storage: saves survive closing the app straight after a change', async () => {
  const { context, p } = await freshPage(30);
  await p.goto(`${base}#/settings`);
  await p.getByRole('button', { name: /Dim night screen/ }).click();
  await p.reload();
  await p.waitForLoadState('networkidle');
  const on = await p.evaluate(() => JSON.parse(localStorage.getItem('playnest:state')).settings.bedside);
  if (!on) throw new Error('the change was lost on reload');
  await context.close();
});

await step('offline: help, first aid, stories and songs all work with no connection', async () => {
  const { context, p } = await freshPage(30);
  await p.goto(`${base}#/`);
  await p.evaluate(async () => {
    const reg = await navigator.serviceWorker.ready;
    if (!reg.active) throw new Error('no active worker');
  });
  // Wait until precaching has finished: the worker is active only after it has.
  await p.waitForFunction(() => !!navigator.serviceWorker.controller, null, { timeout: 30000 });
  await context.setOffline(true);
  for (const [hash, wait] of [['/help', 'We’re here'], ['/help/first-aid', 'First aid'], ['/help/crying', 'When crying won’t stop'], ['/help/you', 'How are you doing?'], ['/stories', 'Story time'], ['/songs', 'Sing together'], ['/search', null]]) {
    await p.goto(`${base}#${hash}`);
    await p.reload();
    if (wait) await p.getByRole('heading', { name: wait }).waitFor({ timeout: 8000 });
  }
  await context.close();
});

await step('readable for people who asked their phone for more contrast', async () => {
  const { context, p } = await freshPage(30, { contrast: 'more' });
  for (const hash of ['/', '/help', '/explore']) {
    await p.goto(`${base}#${hash}`);
    await p.waitForTimeout(400);
    await p.addScriptTag({ content: AXE });
    const bad = await p.evaluate(async () => {
      const r = await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } });
      return r.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical').map((v) => v.id);
    });
    for (const v of bad) problems.push(`a11y contrast-more ${hash}: ${v}`);
  }
  await p.screenshot({ path: `${out}/contrast-more.png` });
  await context.close();
});

await step('big text: nothing runs off the screen at 200%', async () => {
  const { context, p } = await freshPage(30, { viewport: { width: 360, height: 640 } });
  await context.addInitScript(() => {
    const style = () => {
      const s = document.createElement('style');
      s.textContent = 'html { font-size: 200% !important; }';
      document.documentElement.appendChild(s);
    };
    if (document.documentElement) style();
    else document.addEventListener('DOMContentLoaded', style);
  });
  const offenders = [];
  for (const hash of ['/', '/help', '/help/first-aid', '/help/crying', '/help/you', '/stories', '/songs', '/talk', '/stage', '/explore', '/plan', '/growth', '/learn', '/settings']) {
    await p.goto(`${base}#${hash}`);
    await p.waitForTimeout(300);
    const over = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (over > 1) offenders.push(`${hash} by ${over}px`);
  }
  await p.goto(`${base}#/help`);
  await p.waitForTimeout(300);
  await p.screenshot({ path: `${out}/big-text-help.png` });
  if (offenders.length) throw new Error(`overflows: ${offenders.join(', ')}`);
  await context.close();
});

/** Everything endlessly running on this screen, with what would make it a problem. */
const ambientProblems = (p) =>
  p.evaluate(() => {
    const out = [];
    for (const a of document.getAnimations()) {
      if (a.playState !== 'running' || a.effect?.getTiming().iterations !== Infinity) continue;
      const t = a.effect.target;
      const name = `${a.animationName} on ${t.tagName.toLowerCase()}.${String(t.className.baseVal ?? t.className).slice(0, 30)}`;
      // A shape inside an SVG can't move on the graphics chip: the whole picture would repaint on every frame.
      if (t.ownerSVGElement) out.push(`${name} animates forever inside an SVG`);
      // Chrome keeps a transform off the graphics chip for good if its element has a second animation when it starts.
      if (getComputedStyle(t).animationName.includes(',')) out.push(`${name} shares its element with another animation`);
      // Filtered things must not be what moves.
      if (getComputedStyle(t).filter !== 'none') out.push(`${name} is on a filtered element, redrawn every frame`);
    }
    return out;
  });

await step('movement: nothing that runs forever is expensive', async () => {
  const sessions = Array.from({ length: 7 }, (_, i) => ({ id: `s${i}`, childId: 'c1', activityId: 'bath-pour-and-squeeze', date: new Date().toISOString(), minutes: 10 }));
  const { context, p } = await freshPage(30, {}, { sessions });
  const found = [];
  for (const hash of ['/', '/explore', '/growth', '/learn', '/stories', '/songs', '/talk', '/activity/bath-pour-and-squeeze', '/play/bath-pour-and-squeeze', '/settings', '/help', '/sounds']) {
    await p.goto(`${base}#${hash}`);
    await p.waitForTimeout(1200);
    found.push(...(await ambientProblems(p)).map((x) => `${hash}: ${x}`));
  }
  if (found.length) throw new Error(found.join('\n'));
  await context.close();
});

await step('movement: Pip hatches on the welcome screen, and a tap gets a hop', async () => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const p = await context.newPage();
  await p.goto(`${base}#/welcome`);
  await p.locator('.egg').waitFor();
  await p.waitForTimeout(2800);
  const hatched = await p.evaluate(() => getComputedStyle(document.querySelector('.egg-top')).opacity);
  if (hatched !== '0') throw new Error(`the egg is still there after hatching (opacity ${hatched})`);
  // Pip never holds still, so Playwright's "wait until stable" would wait for ever. Tap where a finger would go.
  const pip = await p.locator('.pip').boundingBox();
  await p.mouse.click(pip.x + pip.width / 2, pip.y + pip.height * 0.3);
  if (!(await p.locator('.pip.pip-hop-now').count())) throw new Error('tapping Pip did nothing');
  if (!(await p.locator('.fx-layer .fx').count())) throw new Error('no hearts when Pip was tapped');
  await context.close();
});

await step('movement: a game’s picture is carried to its page and back, leaving nothing behind', async () => {
  const { context, p } = await freshPage(30);
  await p.goto(`${base}#/explore`);
  await p.locator('.tile-link').nth(2).waitFor();
  await p.waitForTimeout(400);
  const id = await p.locator('.tile-link').nth(2).getAttribute('data-id');
  await p.locator('.tile-link').nth(2).click();
  await p.waitForFunction((h) => location.hash === h, `#/activity/${id}`);
  await p.locator('.detail-art').waitFor();
  await p.waitForFunction(() => !document.documentElement.dataset.vt);
  if (await p.locator('.screen.anim-push').count()) throw new Error('the screen slid in as well as the picture moving');
  await p.locator('.nav-back').click();
  await p.waitForFunction((h) => location.hash === h, '#/explore');
  await p.waitForFunction(() => !document.documentElement.dataset.vt);
  const left = await p.evaluate(() => [...document.querySelectorAll('.art')].filter((e) => e.style.getPropertyValue('view-transition-name')).length);
  if (left) throw new Error(`${left} pictures kept the transition name, which would break the next one`);
  // And round again, because a leftover name only shows on the second time.
  await p.locator('.tile-link').nth(2).click();
  await p.waitForFunction((h) => location.hash === h, `#/activity/${id}`);
  await context.close();
});

await step('movement: browsers without view transitions get the ordinary slide', async () => {
  const { context, p } = await freshPage(30);
  await context.addInitScript(() => {
    delete Document.prototype.startViewTransition;
  });
  await p.goto(`${base}#/explore`);
  await p.locator('.tile-link').nth(2).click();
  await p.locator('.screen.anim-push').waitFor();
  await p.locator('.nav-back').click();
  await p.waitForFunction((h) => location.hash === h, '#/explore');
  await context.close();
});

await step('movement: "Less movement" stills the app at once, and celebrations fade instead', async () => {
  const { context, p } = await freshPage(30);
  await p.goto(`${base}#/settings`);
  await p.getByRole('button', { name: 'Less movement' }).click();
  await p.waitForFunction(() => document.documentElement.dataset.motion === 'less');
  const saved = await p.evaluate(() => JSON.parse(localStorage.getItem('playnest:state')).settings.motion);
  await p.waitForTimeout(400); // saves are coalesced
  await p.goto(`${base}#/`);
  await p.waitForTimeout(500);
  const running = await p.evaluate(() => document.getAnimations().filter((a) => a.playState === 'running' && a.effect?.getTiming().iterations === Infinity).length);
  if (running) throw new Error(`${running} endless animations are still running`);
  await p.locator('.fav-btn').first().click();
  if (await p.locator('.fx-layer .fx').count()) throw new Error('a burst played with movement turned down');
  // Across a reload, from the first frame.
  await p.reload();
  if ((await p.evaluate(() => document.documentElement.dataset.motion)) !== 'less') throw new Error(`the setting didn’t last (${saved})`);
  await p.goto(`${base}#/play/bath-pour-and-squeeze`);
  await p.locator('.play-card').waitFor();
  await p.keyboard.press('ArrowRight');
  await p.getByRole('button', { name: 'Finish early' }).click();
  await p.locator('.finish-screen').waitFor();
  if (await p.locator('canvas.confetti').count()) throw new Error('confetti flew with movement turned down');
  await p.locator('.confetti-calm').waitFor();
  const fades = await p.evaluate(() => getComputedStyle(document.querySelector('.confetti-calm i')).animationDuration);
  if (fades !== '1.5s') throw new Error(`the calm celebration doesn't play (${fades})`);
  await context.close();
});

await step('movement: the phone’s own reduced-motion setting is honoured, with screens fading, not cutting', async () => {
  const { context, p } = await freshPage(30, { reducedMotion: 'reduce' });
  await p.goto(`${base}#/explore`);
  await p.locator('.tile-link').first().waitFor();
  if ((await p.evaluate(() => document.documentElement.dataset.motion)) !== 'less') throw new Error('the device setting was ignored');
  await p.locator('.tile-link').first().click();
  await p.locator('.detail-art').waitFor();
  const fade = await p.evaluate(() => {
    const s = getComputedStyle(document.querySelector('.screen'));
    return `${s.animationName} ${s.animationDuration}`;
  });
  if (fade !== 'fade-in 0.16s') throw new Error(`screens should fade with reduced motion, got "${fade}"`);
  await p.goto(`${base}#/welcome`);
  await p.locator('.pip').waitFor();
  if (await p.locator('.egg').count()) throw new Error('the egg hatched with reduced motion on');
  await context.close();
});

await step('movement: the night screen doesn’t move at all', async () => {
  const { context, p } = await freshPage(30, {}, { settings: { onboarded: true, country: 'GB', bedside: true, bedsideTone: 'red' } });
  for (const hash of ['/', '/explore', '/stories', '/sounds']) {
    await p.goto(`${base}#${hash}`);
    await p.waitForTimeout(500);
    const moving = await p.evaluate(() => document.getAnimations().filter((a) => a.playState === 'running').length);
    if (moving) throw new Error(`${hash}: ${moving} animations running on the night screen`);
  }
  await p.goto(`${base}#/explore`);
  await p.locator('.fav-btn').first().click();
  if (await p.locator('.fx-layer .fx').count()) throw new Error('a burst played on the night screen');
  await context.close();
});

await step('movement: a phone left alone comes to rest, and wakes at a touch', async () => {
  const { context, p } = await freshPage(30);
  await p.clock.install();
  await p.goto(`${base}#/`);
  await p.locator('.pip').first().waitFor();
  await p.clock.fastForward(41000);
  await p.waitForFunction(() => document.documentElement.hasAttribute('data-rest'));
  const running = await p.evaluate(() => document.getAnimations().filter((a) => a.playState === 'running' && a.effect?.getTiming().iterations === Infinity).length);
  if (running) throw new Error(`${running} endless animations carried on after resting`);
  await p.mouse.click(5, 300);
  await p.waitForFunction(() => !document.documentElement.hasAttribute('data-rest'));
  await context.close();
});

await step('movement: celebrations clear themselves away', async () => {
  const { context, p } = await freshPage(30);
  await p.goto(`${base}#/play/bath-pour-and-squeeze`);
  await p.locator('.play-card').waitFor();
  await p.keyboard.press('ArrowRight');
  await p.getByRole('button', { name: 'Finish early' }).click();
  await p.locator('canvas.confetti').waitFor();
  await p.locator('canvas.confetti').waitFor({ state: 'detached', timeout: 6000 });
  await context.close();
});

await step('movement: the pick flies off over the next idea, swiping back brings it back, and a heart swaps nothing', async () => {
  const { context, p } = await freshPage(30);
  await p.goto(`${base}#/`);
  await p.locator('.is-top .hero-card').waitFor();
  await p.waitForTimeout(1000);
  const first = await p.locator('#hero-title').textContent();
  const next = await p.locator('.deck-slot.is-next h2').textContent();
  // While the old card flies off, the next one is already there underneath, growing into place. It used to be blank
  // until the old card had gone; before that, a finished arrival animation held the card so it vanished in place.
  const frames = p.evaluate(
    () =>
      new Promise((done) => {
        const xs = new Set();
        let hidden = 0;
        const t0 = performance.now();
        const tick = () => {
          const gone = document.querySelector('.deck-slot.is-prev');
          if (gone) xs.add(new DOMMatrix(getComputedStyle(gone).transform).m41);
          const top = document.querySelector('.deck-slot.is-top');
          if (!top || getComputedStyle(top).visibility !== 'visible' || getComputedStyle(top.firstElementChild).opacity !== '1') hidden++;
          if (performance.now() - t0 < 400) requestAnimationFrame(tick);
          else done({ moves: xs.size, hidden });
        };
        requestAnimationFrame(tick);
      }),
  );
  await p.getByRole('button', { name: /Another idea/ }).click();
  const { moves, hidden } = await frames;
  if (moves < 3) throw new Error('the card didn’t move as it left');
  if (hidden) throw new Error(`the next idea was hidden for ${hidden} frames while the last one left`);
  if ((await p.locator('#hero-title').textContent()) !== next) throw new Error('the idea that came up wasn’t the one underneath');
  await p.waitForTimeout(600);

  // Swiping the other way goes back, not on: the last idea comes back from where it went.
  const deck = await p.locator('.hero-deck').boundingBox();
  const y = deck.y + 150;
  await p.mouse.move(deck.x + 60, y);
  await p.mouse.down();
  for (let i = 1; i <= 8; i++) await p.mouse.move(deck.x + 60 + i * 20, y);
  await p.mouse.up();
  await p.waitForTimeout(700);
  if ((await p.locator('#hero-title').textContent()) !== first) throw new Error('swiping back didn’t bring the last idea back');
  // And a tap straight after a swipe still counts.
  await p.getByRole('button', { name: /Another idea/ }).click();
  await p.waitForTimeout(700);
  if ((await p.locator('#hero-title').textContent()) !== next) throw new Error('a tap after a swipe was lost');

  const before = await p.locator('#hero-title').textContent();
  await p.locator('.is-top .fav-btn').click();
  await p.waitForTimeout(400);
  if ((await p.locator('#hero-title').textContent()) !== before) throw new Error('hearting the pick replaced it');
  await context.close();
});

await step('the phone’s Back: a step back in onboarding, and never into a finished game or kid mode', async () => {
  const hash = (p) => p.evaluate(() => location.hash);
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const p = await context.newPage();
  await p.goto(base);
  await p.getByRole('button', { name: /Get started/ }).click();
  await p.fill('#child-name', 'Noor');
  await p.getByRole('button', { name: /Next/ }).click();
  await p.getByRole('heading', { name: 'When was Noor born?' }).waitFor();
  await p.goBack();
  if ((await p.locator('#child-name').inputValue()) !== 'Noor') throw new Error('Back left onboarding, or lost the name');
  await p.getByRole('button', { name: /Next/ }).click();
  await p.fill('#child-birth', isoMonthsAgo(30));
  await p.getByRole('button', { name: /Next/ }).click();
  const start = await p.getByRole('button', { name: /Start playing/ }).boundingBox();
  if (start.y + start.height > 844) throw new Error('"Start playing" is below the screen');
  await p.getByRole('button', { name: /Start playing/ }).click();
  await p.locator('.hero-pick').waitFor();
  await p.goBack();
  await p.waitForTimeout(400);
  if ((await hash(p)).startsWith('#/welcome')) throw new Error('Back from Today reopened onboarding');
  await context.close();

  const routine = { id: 'r1', childId: 'c1', name: 'Bedtime', emoji: '🌙', steps: [{ id: 's1', emoji: '🛁', label: 'Bath' }, { id: 's2', emoji: '🦷', label: 'Teeth' }] };
  const fresh = await freshPage(30, {}, { routines: [routine] });
  const q = fresh.p;
  await q.goto(`${base}#/explore`);
  await q.locator('.tile-link').first().waitFor();
  await q.evaluate(() => (location.hash = '#/play/bath-pour-and-squeeze'));
  await q.locator('.play-card').waitFor();
  await q.keyboard.press('ArrowRight');
  await q.getByRole('button', { name: 'Finish early' }).click();
  await q.locator('.finish-screen button.btn-primary').last().click();
  await q.locator('.hero-pick').waitFor();
  await q.goBack();
  await q.waitForTimeout(400);
  if ((await hash(q)).startsWith('#/play')) throw new Error('Back from the garden started the game again');
  await q.goto(`${base}#/routines`);
  await q.evaluate(() => (location.hash = '#/kid/r1'));
  await q.locator('.kid-lock').waitFor();
  const lock = await q.locator('.kid-lock').boundingBox();
  await q.mouse.move(lock.x + lock.width / 2, lock.y + lock.height / 2);
  await q.mouse.down();
  await q.waitForTimeout(3300);
  await q.mouse.up();
  const sum = /(\d+)\s*\+\s*(\d+)/.exec(await q.locator('.kid-gate-q').textContent());
  await q.getByRole('button', { name: String(+sum[1] + +sum[2]), exact: true }).click();
  await q.waitForFunction(() => location.hash === '#/routines');
  await q.goBack();
  await q.waitForTimeout(400);
  if ((await hash(q)).startsWith('#/kid')) throw new Error('Back from Routines went into kid mode again');
  await fresh.context.close();
});

await step('help belongs to every tab, so Learn still opens Learn after it', async () => {
  const { context, p } = await freshPage(30);
  await p.goto(`${base}#/`);
  await p.locator('.help-btn').first().click();
  await p.waitForFunction(() => location.hash === '#/help');
  if (await p.locator('.tabbar a[aria-current="page"]').count()) throw new Error('Help lit up a tab');
  await p.locator('.tabbar').getByRole('link', { name: 'Today' }).click();
  await p.locator('.tabbar').getByRole('link', { name: 'Learn' }).click();
  await p.waitForTimeout(300);
  if ((await p.evaluate(() => location.hash)) !== '#/learn') throw new Error('the Learn tab opened Help');
  await context.close();
});

await step('movement: Back from a related game keeps its transition', async () => {
  const { context, p } = await freshPage(30);
  const errors = [];
  p.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  await p.goto(`${base}#/explore`);
  await p.locator('.tile-link').nth(1).click();
  await p.locator('.detail-art').waitFor();
  await p.waitForFunction(() => !document.documentElement.dataset.vt);
  await p.locator('.page-body .tile-link').first().click();
  await p.waitForFunction(() => !document.documentElement.dataset.vt);
  await p.locator('.nav-back').click();
  await p.waitForTimeout(100);
  await p.waitForFunction(() => !document.documentElement.dataset.vt);
  if (errors.length) throw new Error(errors.join('; '));
  await context.close();
});

await step('sheets: a field inside keeps the focus, and focus goes home when it closes', async () => {
  const { context, p } = await freshPage(30);
  await p.goto(`${base}#/growth`);
  await p.getByRole('button', { name: 'Add a moment' }).first().focus();
  await p.keyboard.press('Enter');
  await p.locator('.sheet').waitFor();
  if ((await p.evaluate(() => document.activeElement?.id)) !== 'moment') throw new Error('typing would go nowhere');
  await p.keyboard.press('Escape');
  await p.locator('.sheet').waitFor({ state: 'detached' });
  if ((await p.evaluate(() => document.activeElement?.getAttribute('aria-label'))) !== 'Add a moment') throw new Error('focus was lost on closing');
  await context.close();
});

await step('check-in: skipping every question is fine, and not celebrated', async () => {
  const { context, p } = await freshPage(30);
  await p.goto(`${base}#/milestones?checkin=1`);
  await p.locator('.checkin-q').waitFor();
  while (await p.locator('.checkin-skip').count()) await p.locator('.checkin-skip').click();
  await p.getByRole('heading', { name: 'No rush' }).waitFor();
  if (await p.locator('canvas.confetti').count()) throw new Error('confetti for skipping everything');
  await context.close();
});

await step('the night screen: the garden keeps one colour, without butterflies or a bee', async () => {
  const sessions = Array.from({ length: 6 }, (_, i) => ({ id: `n${i}`, childId: 'c1', activityId: 'bath-pour-and-squeeze', date: new Date().toISOString(), minutes: 10 }));
  const { context, p } = await freshPage(30, {}, { sessions, settings: { onboarded: true, country: 'GB', bedside: true, bedsideTone: 'amber' } });
  await p.goto(`${base}#/growth`);
  await p.locator('.garden-svg').first().waitFor();
  const shown = await p.evaluate(() => [...document.querySelectorAll('.critter')].filter((c) => getComputedStyle(c).display !== 'none').length);
  if (shown) throw new Error(`${shown} coloured critters on the night screen`);
  await context.close();
});

await browser.close();
await server?.close();
console.log(problems.length ? `\nPROBLEMS (${problems.length}):\n${problems.join('\n')}` : '\nNo problems found.');
process.exit(problems.length ? 1 : 0);
