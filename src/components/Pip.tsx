import { useEffect, useId, useRef, useState } from 'react';
import { burst, motionAllowed, useAmbient } from '../lib/motion';

const INK = '#231a4b';
const EDGE = '#fff';

export type PipMood = 'happy' | 'energetic' | 'fussy' | 'sleepy' | 'wow' | 'calm';

const OPEN_BEAK: PipMood[] = ['energetic', 'wow'];
const WINGS_UP: PipMood[] = ['energetic', 'wow'];

const TUFT = 'M54 22C52 12 46 8 40 9c4 3 6 8 7 14zM60 21C60 10 62 5 68 3c0 5 0 12-1 18zM67 23c3-8 8-11 14-10-4 3-6 7-7 12z';
const BODY = 'M60 18c28 0 44 30 44 54 0 24-20 38-44 38S16 96 16 72c0-24 16-54 44-54z';
const WING_L = 'M20 66C8 70 4 86 13 96c9-3 15-14 13-27z';
const WING_R = 'M100 66c12 4 16 20 7 30-9-3-15-14-13-27z';
const FOOT = 'M46 106v8m0 0l-7 5m7-5v7m0-7l7 5M74 106v8m0 0l-7 5m7-5v7m0-7l7 5';

function Eyes({ mood }: { mood: PipMood }) {
  if (mood === 'happy') {
    return (
      <g fill="none" stroke={INK} strokeWidth={4.4} strokeLinecap="round">
        <path d="M37 60q7-10 14 0" />
        <path d="M69 60q7-10 14 0" />
      </g>
    );
  }
  if (mood === 'sleepy' || mood === 'calm') {
    return (
      <g fill="none" stroke={INK} strokeWidth={4.4} strokeLinecap="round">
        <path d="M37 56q7 8 14 0" />
        <path d="M69 56q7 8 14 0" />
      </g>
    );
  }
  const r = mood === 'wow' ? 8.4 : 7;
  return (
    <g className="pip-eyes">
      {mood === 'fussy' && (
        <g fill="none" stroke={INK} strokeWidth={3.4} strokeLinecap="round">
          <path d="M36 45l13 4" />
          <path d="M84 45l-13 4" />
        </g>
      )}
      <circle cx={44} cy={58} r={r} fill={INK} />
      <circle cx={76} cy={58} r={r} fill={INK} />
      <g className="pip-glint" fill="#fff">
        <circle cx={46.4} cy={55} r={2.6} />
        <circle cx={78.4} cy={55} r={2.6} />
        <circle cx={41.6} cy={61} r={1.2} opacity={0.75} />
        <circle cx={73.6} cy={61} r={1.2} opacity={0.75} />
      </g>
    </g>
  );
}

/** Pip's small acts and how long each takes (ms). */
const ACTS = { 'pip-blink-now': 280, 'pip-look-now': 1500, 'pip-wing-now': 900, 'pip-flap-now': 1700, 'pip-zzz-now': 3400 } as const;
type Act = keyof typeof ACTS;

function nextAct(mood: PipMood): Act {
  if (WINGS_UP.includes(mood)) return 'pip-flap-now';
  if (mood === 'sleepy') return 'pip-zzz-now';
  const roll = Math.random();
  // Eyes that are closed in this mood can't blink or look around.
  if (mood === 'happy' || mood === 'calm') return roll < 0.5 ? 'pip-wing-now' : 'pip-blink-now';
  return roll < 0.55 ? 'pip-blink-now' : roll < 0.85 ? 'pip-look-now' : 'pip-wing-now';
}

/**
 * Pip, the chick who hatched in the nest. Reacts to what's going on, and hops when tapped, so the app feels like company.
 * Pip never asks for anything: no hunger, no sulking, nothing to keep up.
 */
export function Pip({ mood = 'happy', size = 96, className }: { mood?: PipMood; size?: number; className?: string }) {
  const id = useId().replace(/:/g, '');
  const ref = useRef<SVGSVGElement>(null);
  useAmbient(ref);
  const up = WINGS_UP.includes(mood);

  const hopTimer = useRef(0);
  useEffect(() => () => window.clearTimeout(hopTimer.current), []);
  const hop = () => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove('pip-hop-now');
    void el.getBoundingClientRect(); // restart the hop, even mid-way through one
    el.classList.add('pip-hop-now');
    // Then back to Pip's usual gentle bob.
    window.clearTimeout(hopTimer.current);
    hopTimer.current = window.setTimeout(() => el.classList.remove('pip-hop-now'), 760);
  };
  // Now and then Pip does some small thing. These run on a timer rather than as endless animations, which would have the
  // browser repainting Pip on every frame just to wait for the next blink. Nothing happens out of sight or left alone.
  useEffect(() => {
    if (!motionAllowed()) return;
    let timer = 0;
    let clear = 0;
    const act = () => {
      const el = ref.current;
      if (el && !el.hasAttribute('data-off') && !document.documentElement.hasAttribute('data-rest') && !document.hidden) {
        const name = nextAct(mood);
        el.classList.add(name);
        clear = window.setTimeout(() => el.classList.remove(name), ACTS[name]);
      }
      timer = window.setTimeout(act, 3000 + Math.random() * 3800);
    };
    timer = window.setTimeout(act, 900 + Math.random() * 1600);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(clear);
    };
  }, [mood]);

  // Pip answers when the mood changes.
  const last = useRef(mood);
  useEffect(() => {
    if (last.current !== mood) hop();
    last.current = mood;
  }, [mood]);

  return (
    <svg
      ref={ref}
      className={`pip pip-${mood}${up ? ' pip-up' : ''}${className ? ` ${className}` : ''}`}
      width={size}
      height={size}
      viewBox="0 0 120 124"
      aria-hidden="true"
      focusable="false"
      onClick={() => {
        hop();
        burst(ref.current, 'hearts', 5, 0.8);
      }}
    >
      <defs>
        <radialGradient id={`${id}b`} cx="0.38" cy="0.26" r="0.88">
          <stop offset="0" stopColor="#ffe97f" />
          <stop offset="0.55" stopColor="#ffd440" />
          <stop offset="1" stopColor="#f6a91e" />
        </radialGradient>
        <radialGradient id={`${id}y`} cx="0.5" cy="0.32" r="0.72">
          <stop offset="0" stopColor="#fff8d6" />
          <stop offset="1" stopColor="#ffe48a" />
        </radialGradient>
        <linearGradient id={`${id}w`} x1="0.2" y1="0" x2="0.7" y2="1">
          <stop offset="0" stopColor="#ffcb45" />
          <stop offset="1" stopColor="#f49a10" />
        </linearGradient>
        <linearGradient id={`${id}k`} x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0" stopColor="#ffa95a" />
          <stop offset="1" stopColor="#f0651c" />
        </linearGradient>
        <radialGradient id={`${id}c`}>
          <stop offset="0" stopColor="#ff8e7c" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ff8e7c" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className="pip-all">
      <ellipse className="pip-shadow" cx={60} cy={120} rx={30} ry={3.6} fill={INK} opacity={0.14} />

      {/* The white paper edge is drawn, not filtered: Pip moves all the time, and a filter would be redrawn each frame. */}
      <g fill="none" stroke={EDGE} strokeWidth={9.6} strokeLinecap="round" strokeLinejoin="round">
        <path d={FOOT} />
      </g>
      <g fill="none" stroke={`url(#${id}k)`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={4.4}>
        <path d={FOOT} />
      </g>

      <g className="pip-body">
        <g fill={EDGE} stroke={EDGE} strokeWidth={6} strokeLinejoin="round">
          <path d={TUFT} />
          <path d={BODY} />
          <g className="pip-wing pip-wing-l">
            <path d={WING_L} />
          </g>
          <g className="pip-wing pip-wing-r">
            <path d={WING_R} />
          </g>
        </g>
        <path d={TUFT} fill={`url(#${id}w)`} />
        <path d={BODY} fill={`url(#${id}b)`} />
        <ellipse cx={60} cy={87} rx={28} ry={22} fill={`url(#${id}y)`} />
        <g fill="none" stroke="#f3b93a" strokeOpacity={0.55} strokeWidth={2} strokeLinecap="round">
          <path d="M48 84q4 4 8 0M64 84q4 4 8 0M56 94q4 4 8 0" />
        </g>
        <ellipse cx={40} cy={36} rx={9} ry={5.4} fill="#fff" opacity={0.46} transform="rotate(-38 40 36)" />
        <g className="pip-wing pip-wing-l">
          <path d={WING_L} fill={`url(#${id}w)`} />
          <path d="M13 88q5-2 8-8M17 92q4-3 6-7" fill="none" stroke="#e58a0c" strokeOpacity={0.6} strokeWidth={1.8} strokeLinecap="round" />
        </g>
        <g className="pip-wing pip-wing-r">
          <path d={WING_R} fill={`url(#${id}w)`} />
          <path d="M107 88q-5-2-8-8M103 92q-4-3-6-7" fill="none" stroke="#e58a0c" strokeOpacity={0.6} strokeWidth={1.8} strokeLinecap="round" />
        </g>
        <circle cx={31} cy={71} r={10} fill={`url(#${id}c)`} />
        <circle cx={89} cy={71} r={10} fill={`url(#${id}c)`} />
        <Eyes mood={mood} />
        {OPEN_BEAK.includes(mood) ? (
          <>
            <path d="M51 71q9 19 18 0z" fill="#c9411c" />
            <path d="M55 74q5 8 10 0z" fill="#ff8f8f" />
            <path d="M48 71q12-12 24 0z" fill={`url(#${id}k)`} />
          </>
        ) : (
          <>
            <path d="M51 67.5q9-8 18 0-9 11-18 0z" fill={`url(#${id}k)`} />
            <path d="M55 65.5q5-2.5 9 0" fill="none" stroke="#fff" strokeOpacity={0.55} strokeWidth={1.6} strokeLinecap="round" />
          </>
        )}
        {mood === 'sleepy' && (
          <g fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
            <path className="pip-zzz" d="M96 20h9l-9 10h9" />
            <path className="pip-zzz two" d="M108 6h6l-6 7h6" />
          </g>
        )}
      </g>
      </g>
    </svg>
  );
}

/**
 * The egg, for the first time Pip is met: it rocks, cracks, and Pip comes out. It plays once for each visit to the
 * welcome screen, and with movement turned down Pip is simply there.
 */
function Egg() {
  return (
    <svg className="egg" viewBox="0 0 100 120" focusable="false">
      <defs>
        <radialGradient id="egg-shade" cx="0.36" cy="0.28" r="0.85">
          <stop offset="0" stopColor="#fffdf6" />
          <stop offset="0.6" stopColor="#fff2d9" />
          <stop offset="1" stopColor="#f2d5a8" />
        </radialGradient>
      </defs>
      <g className="egg-bottom">
        <path d="M12 72c0 26 16 44 38 44s38-18 38-44c-6-3-9 5-14 4s-7-8-13-6-7 9-12 8-7-8-13-6-8 6-13 4-6-6-11-4z" fill="url(#egg-shade)" stroke="#fff" strokeWidth={3} />
      </g>
      <g className="egg-top">
        <path d="M12 72C12 36 28 6 50 6s38 30 38 66c-6-3-9 5-14 4s-7-8-13-6-7 9-12 8-7-8-13-6-8 6-13 4-6-6-11-4z" fill="url(#egg-shade)" stroke="#fff" strokeWidth={3} />
        <g fill="#ffc4d8">
          <circle cx={36} cy={34} r={4} />
          <circle cx={62} cy={26} r={3} />
          <circle cx={68} cy={52} r={4.4} />
          <circle cx={30} cy={58} r={3} />
        </g>
      </g>
      <path className="egg-crack" d="M30 44l8 8-5 7 9 4" fill="none" stroke="#b08a5a" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
    </svg>
  );
}

/** Pip sitting in the woven nest, as in the app icon. */
export function PipInNest({ mood = 'happy', size = 150, hatch = false }: { mood?: PipMood; size?: number; hatch?: boolean }) {
  // Decided once: turning movement down shouldn't re-run anything, and with movement down there is no egg.
  const [egg] = useState(() => hatch && motionAllowed());
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!egg) return;
    const timer = window.setTimeout(() => burst(ref.current, 'stars', 12, 1.5), 1680);
    return () => window.clearTimeout(timer);
  }, [egg]);
  return (
    <span ref={ref} className={`pip-nest${egg ? ' hatching' : ''}`} style={{ width: size, height: size * 0.92 }} aria-hidden="true">
      <Pip mood={mood} size={size * 0.74} />
      {egg && <Egg />}
      <svg className="nest" viewBox="0 0 160 70" focusable="false">
        <defs>
          <linearGradient id="nest-shade" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0" stopColor="#c98a46" />
            <stop offset="1" stopColor="#9a6128" />
          </linearGradient>
        </defs>
        <path d="M6 18c0 30 30 48 74 48s74-18 74-48c-30 12-118 12-148 0z" fill="url(#nest-shade)" stroke="#fff" strokeWidth={3} paintOrder="stroke" />
        <g fill="none" stroke="#7f4e20" strokeWidth={3.4} strokeLinecap="round">
          <path d="M18 30c28 14 96 14 124 0" />
          <path d="M28 44c24 10 80 10 104 0" />
          <path d="M44 56c18 5 54 5 72 0" />
        </g>
        <g fill="none" stroke="#e6ad69" strokeWidth={3} strokeLinecap="round">
          <path d="M2 16c10 8 22 11 34 13" />
          <path d="M158 16c-10 8-22 11-34 13" />
          <path d="M58 26c10 3 34 3 44 0" />
          <path d="M24 38c10 5 20 7 30 8" />
          <path d="M136 38c-10 5-20 7-30 8" />
          <path d="M60 50c8 2 32 2 40 0" />
        </g>
      </svg>
    </span>
  );
}
