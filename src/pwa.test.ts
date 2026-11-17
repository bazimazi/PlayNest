import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = join(__dirname, '..');
const PUBLIC = join(ROOT, 'public');

interface Image {
  src: string;
  sizes?: string;
  type?: string;
  purpose?: string;
  form_factor?: 'narrow' | 'wide';
  label?: string;
}
interface Manifest {
  id: string;
  name: string;
  short_name: string;
  lang: string;
  dir: string;
  start_url: string;
  scope: string;
  display: string;
  launch_handler?: { client_mode: string | string[] };
  icons: Image[];
  screenshots: Image[];
  shortcuts: { name: string; short_name: string; description?: string; url: string; icons: Image[] }[];
}

const read = (name: string) => JSON.parse(readFileSync(join(PUBLIC, name), 'utf8')) as Manifest;
const MANIFESTS = { 'manifest.webmanifest': read('manifest.webmanifest'), 'manifest.fa.webmanifest': read('manifest.fa.webmanifest') };
const [english, persian] = Object.values(MANIFESTS);

/** Width and height from a PNG's header, or a JPEG's frame marker. */
function dimensions(path: string): [number, number] {
  const b = readFileSync(path);
  if (b.readUInt32BE(0) === 0x89504e47) return [b.readUInt32BE(16), b.readUInt32BE(20)];
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length) {
      const marker = b[i + 1];
      // Start-of-frame markers, except the ones that aren't (DHT, JPG, DAC).
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  throw new Error(`can't read the size of ${path}`);
}

describe('the web app manifests', () => {
  it('describe the same app, so switching language never makes a second one', () => {
    for (const key of ['id', 'start_url', 'scope', 'display', 'icons', 'launch_handler'] as const) expect(persian[key]).toEqual(english[key]);
    expect(persian.shortcuts.map((s) => [s.url, s.icons])).toEqual(english.shortcuts.map((s) => [s.url, s.icons]));
    expect([english.lang, english.dir, persian.lang, persian.dir]).toEqual(['en', 'ltr', 'fa', 'rtl']);
  });

  it('are the ones index.html links, including the swap for Persian', () => {
    const html = readFileSync(join(ROOT, 'index.html'), 'utf8');
    for (const name of Object.keys(MANIFESTS)) expect(html).toContain(`./${name}`);
  });

  it('have what browsers need to offer an install: a name, standalone display, and 192 px, 512 px and maskable icons', () => {
    for (const m of Object.values(MANIFESTS)) {
      expect(m.name && m.short_name && m.start_url).toBeTruthy();
      expect(m.display).toBe('standalone');
      const png = m.icons.filter((i) => i.type === 'image/png');
      expect(png.some((i) => i.sizes === '192x192' && i.purpose === 'any')).toBe(true);
      expect(png.some((i) => i.sizes === '512x512' && i.purpose === 'any')).toBe(true);
      expect(png.some((i) => i.purpose === 'maskable')).toBe(true);
    }
  });

  it('point only at files that exist, at the size they claim', () => {
    for (const [name, m] of Object.entries(MANIFESTS)) {
      for (const image of [...m.icons, ...m.screenshots, ...m.shortcuts.flatMap((s) => s.icons)]) {
        const path = join(PUBLIC, image.src);
        expect(existsSync(path), `${name}: ${image.src}`).toBe(true);
        if (image.sizes && image.sizes !== 'any') expect(dimensions(path).join('x'), `${name}: ${image.src}`).toBe(image.sizes);
      }
    }
  });

  it('show screenshots the richer install dialog accepts, for phones and for computers (scripts/make-screenshots.mjs)', () => {
    for (const [name, m] of Object.entries(MANIFESTS)) {
      const lang = m.lang;
      for (const factor of ['narrow', 'wide'] as const) {
        const shots = m.screenshots.filter((s) => s.form_factor === factor);
        expect(shots.length, `${name} ${factor}`).toBeGreaterThan(0);
        const ratios = new Set<string>();
        for (const s of shots) {
          expect(s.label, s.src).toBeTruthy();
          // Each language shows its own app.
          expect(s.src.endsWith(`-${lang}.jpg`) || s.src.endsWith(`-${lang}.png`), s.src).toBe(true);
          const [w, h] = s.sizes!.split('x').map(Number);
          // Chrome's rules: 320 to 3840 px each way, the long side at most 2.3 times the short one, one shape per form factor.
          expect(Math.min(w, h)).toBeGreaterThanOrEqual(320);
          expect(Math.max(w, h)).toBeLessThanOrEqual(3840);
          expect(Math.max(w, h) / Math.min(w, h)).toBeLessThanOrEqual(2.3);
          expect(factor === 'wide' ? w > h : h > w, s.src).toBe(true);
          ratios.add((w / h).toFixed(3));
        }
        expect(ratios.size, `${name} ${factor} aspect ratios`).toBe(1);
      }
    }
  });

  it('have shortcuts that open real screens', () => {
    const app = readFileSync(join(__dirname, 'App.tsx'), 'utf8');
    const routes = new Set([...app.matchAll(/path="\/?([^"]+)"/g)].map((m) => m[1]));
    for (const s of english.shortcuts) {
      const path = new URL(s.url, 'https://example.org/').hash.replace(/^#\/?/, '').split('?')[0];
      if (path) expect(routes.has(path), s.url).toBe(true);
      expect(s.description, s.name).toBeTruthy();
    }
  });
});
