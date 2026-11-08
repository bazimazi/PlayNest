/**
 * "Read it to me", for hands that are full, using the phone's own voice. Only voices that run on the device are used by
 * default: a cloud voice would send what it reads (a child's name, for instance) to someone's server.
 */

export const canSpeak = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

/** Long text can stall some voices, so split on sentence ends, then on commas. */
export function chunkForSpeech(text: string, max = 180): string[] {
  const out: string[] = [];
  const push = (s: string) => {
    const t = s.trim();
    if (t) out.push(t);
  };
  // A closing quote or bracket stays with its sentence, rather than being read as a pause of its own.
  for (const sentence of text.match(/[^.!?。؟]+[.!?。؟]*["'”’»)\]]*\s*/g) ?? [text]) {
    if (sentence.length <= max) {
      push(sentence);
      continue;
    }
    let current = '';
    // Split after each comma without a lookbehind, which older iPhones can't even parse.
    for (const part of sentence.replace(/([,;:،])\s*/g, '$1\u0000').split('\u0000').filter(Boolean)) {
      if (current && `${current} ${part}`.length > max) {
        push(current);
        current = part;
      } else current = current ? `${current} ${part}` : part;
    }
    push(current);
  }
  return out;
}

function pickVoice(voices: SpeechSynthesisVoice[], lang: string): SpeechSynthesisVoice | undefined {
  const norm = (s: string) => s.replace('_', '-').toLowerCase();
  const want = norm(lang);
  const base = want.slice(0, 2);
  const score = (v: SpeechSynthesisVoice) => (v.localService ? 4 : 0) + (norm(v.lang) === want ? 2 : 0) + (v.default ? 1 : 0);
  return voices
    .filter((v) => norm(v.lang).slice(0, 2) === base && v.localService)
    .sort((a, b) => score(b) - score(a))[0];
}

let generation = 0;

/**
 * Reads the texts in order. Queued straight away because iOS drops speech started later from a timer, so call this from
 * inside the tap. `onItem` says which text has started; `onEnd` fires when the last has finished.
 */
export function speak(texts: string[], opts: { onItem?: (i: number) => void; onEnd?: () => void; rate?: number } = {}): boolean {
  if (!canSpeak()) return false;
  const synth = window.speechSynthesis;
  synth.cancel();
  const run = ++generation;
  const lang = document.documentElement.lang || 'en';
  const voice = pickVoice(synth.getVoices(), lang);
  // With no on-device voice, some browsers would quietly use a cloud voice, so say nothing instead.
  if (!voice) return false;

  const utterances = texts.flatMap((text, i) => chunkForSpeech(text).map((chunk, n) => ({ chunk, i, first: n === 0 })));
  utterances.forEach(({ chunk, i, first }, index) => {
    const u = new SpeechSynthesisUtterance(chunk);
    if (voice) u.voice = voice;
    u.lang = voice?.lang ?? lang;
    u.rate = opts.rate ?? 0.92;
    if (first) u.onstart = () => run === generation && opts.onItem?.(i);
    if (index === utterances.length - 1) u.onend = () => run === generation && opts.onEnd?.();
    u.onerror = () => run === generation && opts.onEnd?.();
    synth.speak(u);
  });
  return true;
}

/** Browsers load voices late, so ask early: by the first tap they're ready. Calls back whenever the list changes. */
export function warmUpVoices(onChange?: () => void): () => void {
  if (!canSpeak()) return () => {};
  window.speechSynthesis.getVoices();
  if (!onChange) return () => {};
  window.speechSynthesis.addEventListener('voiceschanged', onChange);
  return () => window.speechSynthesis.removeEventListener('voiceschanged', onChange);
}

export function stopSpeaking() {
  generation++;
  if (canSpeak()) window.speechSynthesis.cancel();
}
