import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { registry } from './all-content';
import { problemsWithPersian } from './check';
import { fingerprint, flatten } from './flatten';
import { asciiDigits, loadLanguage, localDigits, num, preferredLanguage, t, tn } from './index';
import { scanSource } from './scan';

const LOCALE = join(__dirname, 'locales', 'fa');
const HASHES = join(__dirname, 'hashes', 'fa');
const readJson = (p: string) => JSON.parse(readFileSync(p, 'utf8')) as Record<string, string>;

const catalog = () => (existsSync(join(LOCALE, 'ui.json')) ? readJson(join(LOCALE, 'ui.json')) : {});

describe('choosing a language', () => {
  it('uses the parent’s choice, then the device, then English', () => {
    expect(preferredLanguage('fa', ['en-GB'])).toBe('fa');
    expect(preferredLanguage('en', ['fa-IR'])).toBe('en');
    expect(preferredLanguage(null, ['fa-IR', 'en'])).toBe('fa');
    expect(preferredLanguage(null, ['de-DE', 'fa'])).toBe('fa');
    expect(preferredLanguage(null, ['en-US', 'fa'])).toBe('en');
    expect(preferredLanguage(null, ['de-DE'])).toBe('en');
    expect(preferredLanguage('xx', [])).toBe('en');
  });
});

describe('strings', () => {
  afterAll(() => loadLanguage('en'));

  it('in English are the source itself', async () => {
    await loadLanguage('en');
    expect(t('Hello {name}', { name: 'Noor' })).toBe('Hello Noor');
    expect(tn(1, '{n} play', '{n} plays')).toBe('1 play');
    expect(tn(3, '{n} play', '{n} plays')).toBe('3 plays');
    expect(num(12)).toBe('12');
    expect(localDigits('115')).toBe('115');
  });

  it('in Persian use Persian digits and keep names from scrambling the line', async () => {
    await loadLanguage('fa');
    expect(num(12)).toBe('۱۲');
    expect(localDigits('115')).toBe('۱۱۵');
    expect(t('{name} {n}', { name: 'Noor', n: 3 })).toBe('⁨Noor⁩ ۳');
    // A bare number follows the sentence's own direction.
    expect(t('{n}', { n: '۱۲+' })).toBe('۱۲+');
  });

  it('reads digits from any keyboard', () => {
    expect(asciiDigits('۱۱۵')).toBe('115');
    expect(asciiDigits('٠١٢')).toBe('012');
    expect(asciiDigits('+98 21')).toBe('+98 21');
  });

  it('never loses a phone number to a Persian keyboard', async () => {
    const { telHref } = await import('../lib/emergency');
    expect(telHref('۱۱۵')).toBe('tel:115');
    expect(telHref('+۹۸ ۲۱ ۱۲۳')).toBe('tel:+9821123');
  });
});

describe('words on screen', () => {
  const { uses, dynamic, leaks } = scanSource();

  it('are all marked for translation', () => {
    expect(leaks.map((l) => `${l.file}:${l.line} ${l.text}`)).toEqual([]);
  });

  it('come from literals, which is how they can be found', () => {
    expect(dynamic.map((l) => `${l.file}:${l.line} ${l.text}`)).toEqual([]);
  });

  it('all have a Persian translation, and none is left over', () => {
    const keys = new Set(uses.map((u) => u.key));
    const have = catalog();
    expect([...keys].filter((k) => !(k in have)).sort()).toEqual([]);
    expect(Object.keys(have).filter((k) => !keys.has(k)).sort()).toEqual([]);
  });

  it('pass the Persian checks', () => {
    const bad: string[] = [];
    for (const [english, persian] of Object.entries(catalog())) {
      const source = english.includes('|') ? english.split('|')[1] : english;
      for (const p of problemsWithPersian(source, persian)) bad.push(`${english}: ${p}`);
    }
    expect(bad).toEqual([]);
  });
});

describe('translated content', () => {
  const overlays = () => (existsSync(LOCALE) ? readdirSync(LOCALE).filter((f) => f.endsWith('.json') && f !== 'ui.json') : []);

  it('matches what is in the app, has not gone stale, and passes the Persian checks', () => {
    const bad: string[] = [];
    for (const file of overlays()) {
      const name = file.slice(0, -'.json'.length);
      if (!registry.has(name)) {
        bad.push(`${file}: nothing in the app is called this`);
        continue;
      }
      const source = flatten(name, registry.get(name));
      const translated = readJson(join(LOCALE, file));
      const hashes = existsSync(join(HASHES, file)) ? readJson(join(HASHES, file)) : {};
      for (const [key, persian] of Object.entries(translated)) {
        if (!(key in source)) {
          bad.push(`${name}/${key}: no such text in English any more`);
          continue;
        }
        // A changed English sentence must not keep showing its old translation, least of all on a first-aid card.
        if (hashes[key] !== fingerprint(source[key])) bad.push(`${name}/${key}: the English changed after this was translated`);
        for (const p of problemsWithPersian(source[key], persian)) bad.push(`${name}/${key}: ${p}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('is never half done: an item is translated whole or not at all', () => {
    const bad: string[] = [];
    for (const file of overlays()) {
      const name = file.slice(0, -'.json'.length);
      const source = flatten(name, registry.get(name));
      const translated = readJson(join(LOCALE, file));
      const started = new Set(Object.keys(translated).map((k) => k.split('.')[0]));
      for (const key of Object.keys(source)) {
        if (started.has(key.split('.')[0]) && !(key in translated)) bad.push(`${name}/${key}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('the app’s safety screens are complete', () => {
    for (const name of ['firstaid', 'crying', 'helplines', 'coach', 'milestones', 'labels-domains', 'labels-packs', 'labels-types', 'labels-store']) {
      const source = flatten(name, registry.get(name));
      const path = join(LOCALE, `${name}.json`);
      const translated = existsSync(path) ? readJson(path) : {};
      expect(Object.keys(source).filter((k) => !(k in translated)), name).toEqual([]);
    }
  });
});
