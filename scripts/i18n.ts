// Translation tooling. Run with: npx vite-node scripts/i18n.ts <command>
//
//   status                     how much of each collection is translated, and what has gone stale
//   todo <name> [file] [ids]   write the English still to translate as JSON (ids: comma-separated, only those items)
//   check <name> <file>        run the Persian checks on a file of translations without changing anything
//   merge <name> <file>        add finished translations to the language's files, recording what English they came from
//   ui                         the interface strings that have no translation yet
//   leaks [prefix]             words on screen not yet marked for translation, e.g. leaks pages/Today
//
// A collection is anything passed to `localize()`. See docs/I18N.md.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { registry } from '../src/i18n/all-content';
import { problemsWithPersian } from '../src/i18n/check';
import { fingerprint, flatten } from '../src/i18n/flatten';
import { scanSource } from '../src/i18n/scan';

const LANG = 'fa';
const LOCALE = join(__dirname, '..', 'src', 'i18n', 'locales', LANG);
const HASHES = join(__dirname, '..', 'src', 'i18n', 'hashes', LANG);

const readJson = (p: string): Record<string, string> => (existsSync(p) ? (JSON.parse(readFileSync(p, 'utf8')) as Record<string, string>) : {});
const writeJson = (p: string, data: unknown) => writeFileSync(p, `${JSON.stringify(data, null, 1)}\n`);
const sourceOf = (name: string) => {
  if (!registry.has(name)) throw new Error(`No collection called ${name}. Known: ${[...registry.keys()].join(', ')}`);
  return flatten(name, registry.get(name));
};

const [command, a, b, c] = process.argv.slice(2);

if (command === 'status') {
  let total = 0;
  let done = 0;
  let chars = 0;
  for (const name of [...registry.keys()].sort()) {
    const source = sourceOf(name);
    const translated = readJson(join(LOCALE, `${name}.json`));
    const hashes = readJson(join(HASHES, `${name}.json`));
    const keys = Object.keys(source);
    const have = keys.filter((k) => k in translated);
    const stale = have.filter((k) => hashes[k] !== fingerprint(source[k]));
    const left = keys.filter((k) => !(k in translated)).reduce((n, k) => n + source[k].length, 0);
    total += keys.length;
    done += have.length;
    chars += left;
    console.log(`${name.padEnd(24)} ${String(have.length).padStart(6)}/${String(keys.length).padEnd(6)} ${String(Math.round((100 * have.length) / Math.max(1, keys.length))).padStart(3)}%  ${String(left).padStart(8)} chars left${stale.length ? `  ${stale.length} STALE` : ''}`);
  }
  console.log(`\n${done}/${total} strings translated. ${chars} characters of English left.`);
} else if (command === 'todo') {
  const source = sourceOf(a);
  const translated = readJson(join(LOCALE, `${a}.json`));
  const hashes = readJson(join(HASHES, `${a}.json`));
  const only = c ? new Set(c.split(',')) : null;
  const todo = Object.fromEntries(
    Object.entries(source).filter(([k, v]) => (only ? only.has(k.split('.')[0]) : true) && (!(k in translated) || hashes[k] !== fingerprint(v))),
  );
  if (b) writeJson(b, todo);
  else console.log(JSON.stringify(todo, null, 1));
  console.error(`${Object.keys(todo).length} strings, ${Object.values(todo).reduce((n, s) => n + s.length, 0)} characters`);
} else if (command === 'check') {
  const source = sourceOf(a);
  const incoming = readJson(b);
  let problems = 0;
  for (const [key, persian] of Object.entries(incoming)) {
    const found = key in source ? problemsWithPersian(source[key], persian) : ['no such text'];
    for (const p of found) console.log(`${key}: ${p}`);
    problems += found.length;
  }
  console.log(`${Object.keys(incoming).length} strings, ${problems} problem(s)`);
} else if (command === 'merge') {
  const source = sourceOf(a);
  const incoming = readJson(b);
  const translated = readJson(join(LOCALE, `${a}.json`));
  const hashes = readJson(join(HASHES, `${a}.json`));
  const problems: string[] = [];
  for (const [key, persian] of Object.entries(incoming)) {
    if (!(key in source)) {
      problems.push(`${key}: no such text`);
      continue;
    }
    for (const p of problemsWithPersian(source[key], persian)) problems.push(`${key}: ${p}`);
    translated[key] = persian;
    hashes[key] = fingerprint(source[key]);
  }
  // In the content's own order, so a reader can follow along and a diff stays small.
  const ordered = (m: Record<string, string>) => Object.fromEntries(Object.keys(source).filter((k) => k in m).map((k) => [k, m[k]]));
  writeJson(join(LOCALE, `${a}.json`), ordered(translated));
  writeJson(join(HASHES, `${a}.json`), ordered(hashes));
  console.log(`Merged ${Object.keys(incoming).length} into ${a}.`);
  if (problems.length) {
    console.log(`\n${problems.length} problem(s):\n${problems.join('\n')}`);
    process.exitCode = 1;
  }
} else if (command === 'leaks') {
  const { leaks, dynamic } = scanSource();
  const mine = (l: { file: string }) => !a || l.file.startsWith(a);
  for (const l of leaks.filter(mine)) console.log(`${l.file}:${l.line}  ${l.text}`);
  for (const l of dynamic.filter(mine)) console.log(`${l.file}:${l.line}  NOT A LITERAL: ${l.text}`);
  console.error(`${leaks.filter(mine).length} leaks, ${dynamic.filter(mine).length} non-literal keys`);
} else if (command === 'ui') {
  const have = readJson(join(LOCALE, 'ui.json'));
  const { uses } = scanSource();
  const missing = [...new Set(uses.map((u) => u.key))].filter((k) => !(k in have)).sort();
  console.log(JSON.stringify(Object.fromEntries(missing.map((k) => [k, ''])), null, 1));
  console.error(`${missing.length} missing`);
} else {
  console.log('Commands: status, todo <name> [file] [ids], merge <name> <file>, ui, leaks [prefix]');
}
