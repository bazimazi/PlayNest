import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { emojiFile } from './components/Emoji';
import { NEWER_EMOJI } from './data/validate';

const sources = import.meta.glob<string>(['./**/*.{ts,tsx}', '!./**/*.test.ts'], { query: '?raw', import: 'default', eager: true });
const EMOJI = /\p{Extended_Pictographic}(?:\uFE0F|\u200D\p{Extended_Pictographic}|\p{Emoji_Modifier})*/gu;

describe('emoji', () => {
  it('only uses emoji that render on Windows 10 and older phones (Emoji 12.0 or older)', () => {
    const offenders = Object.entries(sources)
      .filter(([path]) => !path.endsWith('validate.ts'))
      .flatMap(([path, text]) => (NEWER_EMOJI.test(text) ? [`${path}: ${text.match(NEWER_EMOJI)![0]}`] : []));
    expect(offenders).toEqual([]);
  });

  it('has bundled artwork for every emoji in the app (run scripts/make-emoji.mjs after adding one)', () => {
    const used = new Set(Object.values(sources).flatMap((text) => text.match(EMOJI) ?? []));
    const missing = [...used].filter((e) => !existsSync(join(__dirname, '..', 'public', 'emoji', `${emojiFile(e)}.svg`)));
    expect(missing).toEqual([]);
  });
});
