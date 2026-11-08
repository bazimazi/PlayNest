// Builds public/emoji/: one SVG per emoji the app uses, taken from Microsoft's Fluent Emoji (the shaded "color" style, MIT).
// System emoji look different on every device and, on Windows, carry thick black outlines. Bundling one set keeps the
// art consistent everywhere and offline. Re-run after adding an emoji to the content: node scripts/make-emoji.mjs
import { mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public', 'emoji');

const set = require('@iconify-json/fluent-emoji/icons.json');
const { optimize } = require('svgo');
const names = require('emojibase-data/en/data.json');

/** Emoji whose Unicode name differs from Fluent's file name. */
const ALIASES = {
  '🤗': 'hugging-face',
  '🤼': 'person-wrestling',
  '🔺': 'red-triangle',
  '👫': 'people-hugging',
  '👪': 'people-hugging',
  '🧚': 'person-fairy',
  '🦸': 'person-superhero',
};

const EMOJI = /\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic}|\p{Emoji_Modifier})*/gu;

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const hex = (emoji) => [...emoji].map((c) => c.codePointAt(0).toString(16));
const fileName = (emoji) => hex(emoji).filter((h) => h !== 'fe0f').join('-');
const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[’'“”.,:!]/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const byHex = new Map();
for (const n of names) byHex.set(n.hexcode.toLowerCase().replace(/-fe0f/g, ''), n);

function bodyOf(name) {
  const icon = set.icons[name] ?? set.icons[set.aliases?.[name]?.parent];
  return icon?.body;
}

function iconFor(emoji) {
  if (ALIASES[emoji]) return bodyOf(ALIASES[emoji]);
  const entry = byHex.get(fileName(emoji));
  if (!entry) return undefined;
  for (const candidate of [entry.label, ...(entry.shortcodes ?? [])]) {
    const body = bodyOf(slug(candidate));
    if (body) return body;
  }
  return undefined;
}

/** The shaded art is ten times the size of the flat set, so it's worth squeezing. One path in the set trips svgo's path rewrite. */
function shrink(svg) {
  const keep = { removeViewBox: false };
  try {
    return optimize(svg, { multipass: true, floatPrecision: 2, plugins: [{ name: 'preset-default', params: { overrides: keep } }] }).data;
  } catch {
    return optimize(svg, { plugins: [{ name: 'preset-default', params: { overrides: { ...keep, convertPathData: false } } }] }).data;
  }
}

const used = new Set();
for (const file of walk(join(root, 'src'))) {
  if (!/\.tsx?$/.test(file) || file.includes('.test.')) continue;
  for (const m of readFileSync(file, 'utf8').matchAll(EMOJI)) used.add(m[0]);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const missing = [];
let bytes = 0;
for (const emoji of used) {
  const body = iconFor(emoji);
  if (!body) {
    missing.push(emoji);
    continue;
  }
  const svg = shrink(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${set.width ?? 32} ${set.height ?? 32}">${body}</svg>`);
  bytes += svg.length;
  writeFileSync(join(out, `${fileName(emoji)}.svg`), svg);
}

console.log(`${used.size - missing.length} emoji written (${Math.round(bytes / 1024)} KB)`);
if (missing.length) {
  console.error(`No artwork for: ${missing.join(' ')}. Add them to ALIASES.`);
  process.exit(1);
}
