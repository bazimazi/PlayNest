/**
 * Sound, generated on the phone: nothing to download, nothing to license, works offline.
 *
 *  - The music-box guide plays a tune once through Web Audio, so a parent can learn it and sing it themselves. Their own
 *    voice is the point: a toy's tune carries none of the meaning a parent's singing does (Mehr et al., 2016), so this
 *    never loops and never starts on its own.
 *  - Soothing noise uses an <audio> element playing a WAV file made here, because Web Audio stops when an iPhone locks and
 *    <audio> doesn't. It starts at the quietest level and always has a timer.
 */
import { t } from '../i18n';

type Win = typeof globalThis & { webkitAudioContext?: typeof AudioContext };

let ctx: AudioContext | null = null;

/** Must first be called from inside a tap: browsers keep audio silent until then. */
function audioContext(): AudioContext | null {
  const Ctor = globalThis.AudioContext ?? (globalThis as Win).webkitAudioContext;
  if (!Ctor) return null;
  ctx ??= new Ctor();
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

const SEMITONES: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** "C4" → 261.63 Hz. Returns null for a rest. */
export function noteToHz(note: string): number | null {
  const m = /^([A-G])([#b]?)([2-7])$/.exec(note);
  if (!m) return null;
  const midi = (Number(m[3]) + 1) * 12 + SEMITONES[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
  return 440 * 2 ** ((midi - 69) / 12);
}

export interface ParsedNote {
  hz: number | null;
  beats: number;
}

/** Parses the songbook's "C4:1 D4:0.5 R:1" format. */
export function parseMelody(notes: string): ParsedNote[] {
  return notes
    .trim()
    .split(/\s+/)
    .map((token) => {
      const [name, beats] = token.split(':');
      return { hz: name === 'R' ? null : noteToHz(name), beats: Number(beats) || 1 };
    });
}

/** One music-box note: a quick attack and a long fade, with the higher partials a real tine has. */
function pluck(audio: BaseAudioContext, out: AudioNode, freq: number, t: number, velocity = 0.2) {
  const partials = [
    { ratio: 1, gain: 1, decay: 1.8 },
    { ratio: 6.267, gain: 0.12, decay: 0.45 },
    { ratio: 17.55, gain: 0.03, decay: 0.12 },
  ];
  for (const p of partials) {
    const f = freq * p.ratio;
    if (f > 12000) continue;
    const osc = audio.createOscillator();
    const amp = audio.createGain();
    osc.frequency.value = f;
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.exponentialRampToValueAtTime(velocity * p.gain, t + 0.004);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + p.decay);
    osc.connect(amp).connect(out);
    osc.start(t);
    osc.stop(t + p.decay + 0.02);
  }
}

/** Call from inside a tap, so sound can play later without one. */
export function unlockAudio() {
  audioContext();
}

/** A soft two-note sound for a timer ending. Quiet on purpose: a baby may be asleep nearby. */
export function chime() {
  const audio = ctx;
  if (!audio) return;
  // A locked phone can suspend audio, so wake it before playing.
  if (audio.state !== 'running') void audio.resume();
  const master = audio.createGain();
  master.gain.value = 0.5;
  master.connect(audio.destination);
  const t = audio.currentTime + 0.02;
  pluck(audio, master, 523.25, t);
  pluck(audio, master, 659.25, t + 0.28);
  window.setTimeout(() => master.disconnect(), 2500);
}

let stopTune: (() => void) | null = null;

/** Plays a tune once. Returns its length in seconds, or 0 when the device can't play sound. */
export function playTune(notes: string, bpm: number, onEnd?: () => void): number {
  stopTune?.();
  const audio = audioContext();
  if (!audio) return 0;
  const lowpass = audio.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.value = 4500;
  const master = audio.createGain();
  master.gain.value = 0.6;
  lowpass.connect(master).connect(audio.destination);

  const beat = 60 / bpm;
  let t = audio.currentTime + 0.08;
  for (const n of parseMelody(notes)) {
    if (n.hz) pluck(audio, lowpass, n.hz, t);
    t += n.beats * beat;
  }
  const seconds = t - audio.currentTime;
  const end = window.setTimeout(() => {
    stopTune = null;
    onEnd?.();
  }, seconds * 1000 + 300);
  stopTune = () => {
    window.clearTimeout(end);
    master.gain.setTargetAtTime(0, audio.currentTime, 0.05);
    window.setTimeout(() => master.disconnect(), 300);
    stopTune = null;
    onEnd?.();
  };
  return seconds;
}

export function stopPlayingTune() {
  stopTune?.();
}

// ---------- soothing noise ----------

export type NoiseKind = 'white' | 'pink' | 'brown';
export const NOISES: Record<NoiseKind, { label: string; hint: string }> = {
  white: { label: t('White'), hint: t('Like a fan') },
  pink: { label: t('Pink'), hint: t('Like steady rain') },
  brown: { label: t('Brown'), hint: t('Like a far-off waterfall') },
};

/** Loudness steps, baked into the file because iOS ignores `audio.volume`. Step 0 is the default. */
export const LEVEL_DB = [-30, -24, -20] as const;

/** A seamless mono 16-bit WAV. Runs in about half a second on a slow phone, so it's made once and kept. */
export function renderNoiseWav(kind: NoiseKind, rmsDb: number, seconds = 30, rate = 44100, fadeSec = 1): Blob {
  const n = Math.floor(seconds * rate);
  const x = Math.floor(fadeSec * rate);
  const s = new Float32Array(n + x);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0, last = 0;
  for (let i = 0; i < s.length; i++) {
    const w = Math.random() * 2 - 1;
    if (kind === 'white') s[i] = w;
    else if (kind === 'brown') {
      last = (last + 0.02 * w) / 1.02;
      s[i] = last;
    } else {
      // Paul Kellet's pink-noise filter, tuned for 44.1 kHz.
      b0 = 0.99886 * b0 + w * 0.0555179;
      b1 = 0.99332 * b1 + w * 0.0750759;
      b2 = 0.969 * b2 + w * 0.153852;
      b3 = 0.8665 * b3 + w * 0.3104856;
      b4 = 0.55 * b4 + w * 0.5329522;
      b5 = -0.7616 * b5 - w * 0.016898;
      s[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362;
      b6 = w * 0.115926;
    }
  }
  // Brown noise wanders: centre it so the loop point stays clean.
  const mean = s.reduce((a, v) => a + v, 0) / s.length;
  for (let i = 0; i < s.length; i++) s[i] -= mean;
  // Crossfade the tail into the head, so the loop has no click.
  for (let i = 0; i < x; i++) {
    const t = (i / x) * (Math.PI / 2);
    s[i] = s[i] * Math.sin(t) + s[n + i] * Math.cos(t);
  }
  // The same loudness for every colour.
  let energy = 0;
  for (let i = 0; i < n; i++) energy += s[i] * s[i];
  const gain = 10 ** (rmsDb / 20) / Math.sqrt(energy / n);

  const buffer = new ArrayBuffer(44 + n * 2);
  const v = new DataView(buffer);
  const text = (at: number, value: string) => {
    for (let i = 0; i < value.length; i++) v.setUint8(at + i, value.charCodeAt(i));
  };
  text(0, 'RIFF');
  v.setUint32(4, 36 + n * 2, true);
  text(8, 'WAVEfmt ');
  v.setUint32(16, 16, true);
  v.setUint16(20, 1, true);
  v.setUint16(22, 1, true);
  v.setUint32(24, rate, true);
  v.setUint32(28, rate * 2, true);
  v.setUint16(32, 2, true);
  v.setUint16(34, 16, true);
  text(36, 'data');
  v.setUint32(40, n * 2, true);
  for (let i = 0; i < n; i++) v.setInt16(44 + i * 2, Math.max(-1, Math.min(1, s[i] * gain)) * 32767, true);
  return new Blob([buffer], { type: 'audio/wav' });
}

let noiseEl: HTMLAudioElement | null = null;
let noiseUrl: string | null = null;

type SessionNav = Navigator & { audioSession?: { type: string } };

/** When noise should stop. Checked as the file plays, which can keep working after a timer on the page has stopped. */
let noiseEndsAt = 0;
let onNoiseEnd: (() => void) | null = null;

export function setNoiseEnd(at: number) {
  noiseEndsAt = at;
}

/** Starts looping noise. Must be called from inside a tap. `onEnd` fires if it stops by itself or from the lock screen. */
export function startNoise(kind: NoiseKind, level: 0 | 1 | 2, endsAt: number, onEnd: () => void) {
  stopNoise();
  noiseEndsAt = endsAt;
  onNoiseEnd = onEnd;
  const session = (navigator as SessionNav).audioSession;
  if (session) session.type = 'playback'; // Keeps playing when the phone is locked or on silent.
  noiseUrl = URL.createObjectURL(renderNoiseWav(kind, LEVEL_DB[level]));
  noiseEl = new Audio(noiseUrl);
  noiseEl.loop = true;
  noiseEl.addEventListener('timeupdate', () => {
    if (noiseEndsAt && Date.now() >= noiseEndsAt) endNoiseNow();
  });
  void noiseEl.play().catch(() => {});
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({ title: t('{label} noise', { label: NOISES[kind].label }), artist: t('PlayNest') });
    const el = noiseEl;
    navigator.mediaSession.setActionHandler('play', () => void el.play());
    navigator.mediaSession.setActionHandler('pause', () => el.pause());
    try {
      navigator.mediaSession.setActionHandler('stop', endNoiseNow);
    } catch {
      /* not every browser has a stop action */
    }
  }
}

function endNoiseNow() {
  const done = onNoiseEnd;
  stopNoise();
  done?.();
}

export function stopNoise() {
  onNoiseEnd = null;
  noiseEndsAt = 0;
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = null;
    for (const action of ['play', 'pause', 'stop'] as const) {
      try {
        navigator.mediaSession.setActionHandler(action, null);
      } catch {
        /* not every browser has every action */
      }
    }
  }
  if (noiseEl) {
    noiseEl.pause();
    noiseEl.src = '';
    noiseEl = null;
  }
  if (noiseUrl) {
    URL.revokeObjectURL(noiseUrl);
    noiseUrl = null;
  }
  const session = (navigator as SessionNav).audioSession;
  if (session) session.type = 'auto'; // So everyday sounds respect the silent switch again.
}

export const isNoisePlaying = () => noiseEl !== null;
