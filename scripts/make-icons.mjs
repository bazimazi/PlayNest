// Renders the PlayNest app icon (public/icons/icon.svg) to PNG files using an installed Chrome or Edge, so there is no
// image dependency. Run after changing the icon: node scripts/make-icons.mjs
import { readFileSync } from 'node:fs';
import { chromium } from 'playwright-core';

const dir = new URL('../public/icons/', import.meta.url);
const svg = readFileSync(new URL('icon.svg', dir), 'utf8');
// Full-bleed variants (Android masks, iOS rounds) lose the icon's own rounded corners.
const square = svg.replace('rx="116"', '');
// Maskable icons keep the artwork inside the central 80%: scale it in and let the sky fill the square.
const maskable = square
  .replace('<circle cx="408"', '<g transform="translate(51 51) scale(.8)"><circle cx="408"')
  .replace('<path d="M0 356', '<path d="M-64 356')
  .replace('</svg>', '</g></svg>')
  .replace('s186 26 256-6v194H0z', 's250 26 384-6v260H-64z');

const browser = await launchBrowser();
const page = await browser.newPage({ deviceScaleFactor: 1 });

async function render(name, size, source, background = 'transparent') {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(
    `<!doctype html><style>html,body{margin:0;background:${background}}svg{display:block;width:${size}px;height:${size}px}</style>${source}`,
  );
  await page.screenshot({ path: new URL(name, dir).pathname.replace(/^\/([A-Za-z]:)/, '$1'), omitBackground: background === 'transparent' });
}

await render('icon-192.png', 192, svg);
await render('icon-512.png', 512, svg);
await render('icon-maskable-512.png', 512, maskable, '#8fd6fa');
await render('apple-touch-icon.png', 180, square, '#8fd6fa');

// App shortcuts (long-press the icon, or the taskbar's jump list): the tab's own picture on its world's colour, full
// bleed so a round mask can't cut it, with the picture inside the central 60%.
const SHORTCUTS = [
  ['shortcut-today.png', '2600', '#ffcf56'], // ☀️ Today, like the tab
  ['shortcut-help.png', '1f49b', '#ff9672'], // 💛 Help, like its rows
  ['shortcut-stories.png', '1f319', '#2a2360'], // 🌙 tonight's story
  ['shortcut-checkin.png', '1f331', '#bdeadf'], // 🌱 Grow, like the tab
];
for (const [name, code, colour] of SHORTCUTS) {
  const emoji = readFileSync(new URL(`../emoji/${code}.svg`, dir), 'utf8');
  await render(
    name,
    192,
    `<div style="width:192px;height:192px;display:grid;place-items:center;background:${colour}">${emoji.replace('<svg', '<svg style="width:116px;height:116px"')}</div>`,
  );
}
await browser.close();
console.log('icons written');

async function launchBrowser() {
  for (const channel of ['chrome', 'msedge']) {
    try {
      return await chromium.launch({ channel });
    } catch {
      /* try the next installed browser */
    }
  }
  throw new Error('No Chrome or Edge found.');
}
