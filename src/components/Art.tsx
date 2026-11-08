import { Children, isValidElement, memo, useRef, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import type { Activity, Domain, Energy } from '../data/types';
import { burst, useAmbient } from '../lib/motion';
import { hashString, seededRandom } from '../lib/random';
import { haptic } from '../platform';
import { Emoji } from './Emoji';

interface Palette {
  bg: string;
  /** Mid tone, the main paper. */
  a: string;
  /** Light tone. */
  b: string;
  /** Accent: suns, moons, little things. */
  c: string;
  /** Deep tone, for what's nearest. */
  d: string;
}

/**
 * Cut-paper colours for each development area. They stay the same in dark mode, like the pages of a picture book;
 * app.css only dims them a little at night.
 */
const PALETTES: Record<Domain, Palette> = {
  movement: { bg: '#ffb49c', a: '#ff9272', b: '#ffd6c8', c: '#ffd25e', d: '#f2714f' },
  hands: { bg: '#ffdb80', a: '#ffc53f', b: '#fff0c4', c: '#ff9f6b', d: '#f5a623' },
  language: { bg: '#a9e0fc', a: '#7fcdf7', b: '#d8f2ff', c: '#ffd25e', d: '#56b4ea' },
  thinking: { bg: '#cfc0ff', a: '#b29dff', b: '#e9e2ff', c: '#ffd25e', d: '#917af0' },
  feelings: { bg: '#ffc2d3', a: '#ff9fbb', b: '#ffe1ea', c: '#ffdd86', d: '#f77ea3' },
  senses: { bg: '#9de8da', a: '#68d8c5', b: '#d2f7ef', c: '#ffc9a6', d: '#3fc2ac' },
  imagination: { bg: '#c3e994', a: '#9edb6a', b: '#e5f7cf', c: '#ffd25e', d: '#7cc748' },
  selfcontrol: { bg: '#b6c2fc', a: '#93a2f7', b: '#dde3ff', c: '#ffc4d8', d: '#7283ea' },
};

type Kind = 'hills' | 'night' | 'arches' | 'waves' | 'petals' | 'blob' | 'burst' | 'zigzag' | 'dots' | 'meadow' | 'clouds' | 'forest' | 'balloons' | 'peaks';

/** The scene hints at the energy of the game: quiet places for calm, rays and peaks for active. */
const KINDS: Record<Energy, Kind[]> = {
  calm: ['night', 'waves', 'arches', 'hills', 'clouds', 'forest'],
  moderate: ['hills', 'petals', 'blob', 'arches', 'dots', 'meadow', 'clouds', 'forest', 'balloons'],
  active: ['burst', 'zigzag', 'blob', 'peaks', 'balloons', 'burst', 'meadow'],
};

const W = 300;
const H = 200;
const SHADE = 'rgb(58 30 96 / 13%)';

/**
 * One sheet of paper with the faint shadow it casts on the sheet behind. Drawn, not filtered: a grid shows dozens of
 * these, and a filter on each would cost far more than a second copy of the shape.
 */
function Cut({ fill, lift = 3, children }: { fill: string; lift?: number; children: ReactNode }) {
  return (
    <g>
      <g fill={SHADE} transform={`translate(0 ${lift})`}>
        {children}
      </g>
      <g fill={fill}>{children}</g>
    </g>
  );
}

/**
 * A part of a scene that moves in a live picture. A live picture gives each one its own layer (see `liveLayers`), so it
 * can slide around on the graphics chip. Moving a shape inside a single SVG repaints the whole picture on every frame.
 */
function Moving({ children }: { className: string; delay?: number; children: ReactNode }) {
  return <g>{children}</g>;
}

const star = (x: number, y: number, s: number) =>
  `M${x} ${y - s}Q${x} ${y} ${x + s} ${y}Q${x} ${y} ${x} ${y + s}Q${x} ${y} ${x - s} ${y}Q${x} ${y} ${x} ${y - s}Z`;

const cloud = (x: number, y: number, s: number) =>
  `M${x} ${y}c${-9 * s} 0 ${-16 * s} ${-6 * s} ${-16 * s} ${-13 * s}c0 ${-6 * s} ${5 * s} ${-11 * s} ${11 * s} ${-12 * s}c${2 * s} ${-8 * s} ${10 * s} ${-13 * s} ${18 * s} ${-11 * s}c${4 * s} ${-5 * s} ${12 * s} ${-6 * s} ${18 * s} ${-2 * s}c${5 * s} ${3 * s} ${7 * s} ${8 * s} ${7 * s} ${13 * s}c${7 * s} 0 ${13 * s} ${6 * s} ${13 * s} ${13 * s}s${-7 * s} ${12 * s} ${-14 * s} ${12 * s}z`;

function wave(y: number, amp: number, phase: number): string {
  const step = W / 4;
  let d = `M${-step + phase} ${y}`;
  for (let i = 0; i < 7; i++) d += `q${step / 2} ${i % 2 ? amp : -amp} ${step} 0`;
  return `${d}V${H + 10}H${-step}Z`;
}

function zigzag(y: number, amp: number, phase: number): string {
  const step = 30;
  let d = `M${-step + phase} ${y}`;
  for (let i = 0; i < 14; i++) d += `l${step / 2} ${i % 2 ? amp : -amp}`;
  return `${d}V${H + 10}H${-step}Z`;
}

/** A sun: disc, short rays, and a soft ring that breathes in a live picture. */
function sun(x: number, y: number, r: number, p: Palette): ReactNode[] {
  return [
    <Moving key="halo" className="a-pulse">
      <circle cx={x} cy={y} r={r * 1.5} fill={p.c} opacity={0.3} />
    </Moving>,
    <g key="rays" stroke={p.c} strokeWidth={4} strokeLinecap="round">
      {Array.from({ length: 8 }, (_, i) => (
        <path key={i} d={`M${x} ${y - r * 1.34}v${-r * 0.32}`} transform={`rotate(${i * 45} ${x} ${y})`} />
      ))}
    </g>,
    <Cut key="disc" fill={p.c} lift={2}>
      <circle cx={x} cy={y} r={r} />
    </Cut>,
  ];
}

function Tree({ x, y, s, fill, round }: { x: number; y: number; s: number; fill: string; round: boolean }) {
  return (
    <g>
      <rect x={x - 2.5 * s} y={y - 16 * s} width={5 * s} height={18 * s} rx={2} fill="#a8693a" />
      <Cut fill={fill} lift={2}>
        {round ? (
          <>
            <circle cx={x} cy={y - 28 * s} r={15 * s} />
            <circle cx={x - 9 * s} cy={y - 20 * s} r={10 * s} />
            <circle cx={x + 9 * s} cy={y - 20 * s} r={10 * s} />
          </>
        ) : (
          <path d={`M${x} ${y - 54 * s}L${x + 16 * s} ${y - 28 * s}h${-6 * s}L${x + 19 * s} ${y - 10 * s}H${x - 19 * s}L${x - 10 * s} ${y - 28 * s}h${-6 * s}Z`} />
        )}
      </Cut>
    </g>
  );
}

function Bloom({ x, y, s, petal, heart, stem }: { x: number; y: number; s: number; petal: string; heart: string; stem: string }) {
  return (
    <g>
      <path d={`M${x} ${y}V${y - 22 * s}`} stroke={stem} strokeWidth={2.4} strokeLinecap="round" />
      {Array.from({ length: 5 }, (_, i) => {
        const a = (i * 72 * Math.PI) / 180;
        return <circle key={i} cx={x + Math.cos(a) * 5 * s} cy={y - 22 * s + Math.sin(a) * 5 * s} r={4.4 * s} fill={petal} />;
      })}
      <circle cx={x} cy={y - 22 * s} r={3.2 * s} fill={heart} />
    </g>
  );
}

function balloon(x: number, y: number, s: number, fill: string, r: () => number): ReactNode {
  return (
    <Moving key={x} className="a-bob" delay={-r() * 6}>
      <path d={`M${x} ${y + 24 * s}q${6 * s} ${14 * s} 0 ${30 * s}`} fill="none" stroke="#fff" strokeOpacity={0.7} strokeWidth={1.6} />
      <Cut fill={fill} lift={3}>
        <ellipse cx={x} cy={y} rx={19 * s} ry={23 * s} />
        <path d={`M${x - 3 * s} ${y + 22 * s}h${6 * s}l${2 * s} ${5 * s}h${-10 * s}z`} />
      </Cut>
      <ellipse cx={x - 7 * s} cy={y - 8 * s} rx={3.6 * s} ry={6.4 * s} fill="#fff" opacity={0.42} transform={`rotate(20 ${x - 7 * s} ${y - 8 * s})`} />
    </Moving>
  );
}

/** Stars or dots that twinkle in two groups, out of step. */
function twinkling(items: ReactElement[]): ReactNode[] {
  return [0, 1].map((group) => (
    <Moving key={group} className={`a-twinkle${group ? ' two' : ''}`}>
      {items.filter((_, i) => i % 2 === group)}
    </Moving>
  ));
}

function shapes(kind: Kind, p: Palette, r: () => number): ReactNode {
  switch (kind) {
    case 'hills':
      return (
        <>
          {sun(50 + r() * 200, 46 + r() * 12, 20 + r() * 7, p)}
          <Moving className="a-drift">
            <path d={cloud(40 + r() * 70, 56, 0.72)} fill={p.b} opacity={0.85} />
          </Moving>
          <Cut fill={p.a}>
            <path d={`M0 ${132 + r() * 18}C70 ${92 + r() * 20} 130 ${92 + r() * 20} 190 ${130 + r() * 12}S270 ${122 + r() * 18} 300 ${112 + r() * 18}V200H0Z`} />
          </Cut>
          <Cut fill={p.d}>
            <path d={`M0 ${160 + r() * 10}C60 ${140 + r() * 10} 130 ${168 + r() * 8} 300 ${146 + r() * 12}V200H0Z`} />
          </Cut>
          <Cut fill={p.b}>
            <path d={`M0 184C80 ${166 + r() * 8} 170 ${172 + r() * 8} 300 ${178 + r() * 8}V200H0Z`} />
          </Cut>
        </>
      );
    case 'night': {
      const mx = 40 + r() * 220;
      return (
        <>
          <Cut fill={p.c} lift={2}>
            <path d={`M${mx} 22a28 28 0 1 0 22 46a25 25 0 1 1 -22 -46z`} />
          </Cut>
          {twinkling(Array.from({ length: 8 }, (_, i) => <path key={i} d={star(10 + r() * 280, 14 + r() * 92, 4 + r() * 6)} fill={i % 2 ? p.b : p.c} />))}
          <Moving className="a-drift">
            <path d={cloud(170 + r() * 60, 92, 0.8)} fill={p.b} opacity={0.5} />
          </Moving>
          <Cut fill={p.a}>
            <path d={`M0 164Q150 ${118 + r() * 20} 300 164V200H0Z`} />
          </Cut>
          <Tree x={46 + r() * 30} y={158} s={0.8} fill={p.d} round={false} />
          <Tree x={246 + r() * 30} y={160} s={0.68} fill={p.d} round={false} />
          <Cut fill={p.d}>
            <path d="M0 190Q150 158 300 186V200H0Z" />
          </Cut>
        </>
      );
    }
    case 'arches': {
      const cx = 110 + r() * 80;
      return (
        <>
          <Cut fill={p.a} lift={4}>
            <circle cx={cx} cy={212} r={168} />
          </Cut>
          <Cut fill={p.b} lift={4}>
            <circle cx={cx} cy={212} r={132} />
          </Cut>
          <Cut fill={p.c} lift={4}>
            <circle cx={cx} cy={212} r={96} />
          </Cut>
          <Cut fill={p.d} lift={4}>
            <circle cx={cx} cy={212} r={60} />
          </Cut>
          <Cut fill={p.bg} lift={4}>
            <circle cx={cx} cy={212} r={30} />
          </Cut>
          <Moving className="a-drift">
            <path d={cloud(14 + r() * 20, 194, 1)} fill="#fff" opacity={0.92} />
          </Moving>
          <Moving className="a-drift a-rev">
            <path d={cloud(238 + r() * 20, 196, 0.9)} fill="#fff" opacity={0.92} />
          </Moving>
        </>
      );
    }
    case 'waves':
      return (
        <>
          {sun(30 + r() * 240, 46, 20 + r() * 7, p)}
          <Moving className="a-wave">
            <Cut fill={p.a}>
              <path d={wave(112 + r() * 10, 16, r() * 40)} />
            </Cut>
          </Moving>
          <Moving className="a-wave a-rev">
            <Cut fill={p.b}>
              <path d={wave(146 + r() * 8, 13, r() * 40)} />
            </Cut>
          </Moving>
          <Moving className="a-wave">
            <Cut fill={p.d}>
              <path d={wave(178, 10, r() * 40)} />
            </Cut>
          </Moving>
        </>
      );
    case 'petals': {
      const n = 10;
      const spin = r() * 36;
      return (
        <>
          <g>
            {Array.from({ length: n }, (_, i) => (
              <Cut key={i} fill={i % 2 ? p.a : p.d} lift={2}>
                <ellipse cx={150} cy={32} rx={25} ry={68} transform={`rotate(${spin + (i * 360) / n} 150 100)`} />
              </Cut>
            ))}
          </g>
          <Cut fill={p.b} lift={4}>
            <circle cx={150} cy={100} r={62} />
          </Cut>
        </>
      );
    }
    case 'blob':
      return (
        <>
          <Cut fill={p.a} lift={4}>
            <path d="M150 18C204 12 262 44 266 98S226 188 164 186 44 170 36 112 96 24 150 18Z" transform={`rotate(${r() * 360} 150 100)`} />
          </Cut>
          <Moving className="a-bob">
            {Array.from({ length: 11 }, (_, i) => {
              const x = r() * W;
              const y = r() * H;
              const s = 4 + r() * 5;
              return i % 3 === 0 ? (
                <rect key={i} x={x} y={y} width={s * 2} height={s * 2} rx={2} fill={p.c} transform={`rotate(${r() * 90} ${x} ${y})`} />
              ) : i % 3 === 1 ? (
                <circle key={i} cx={x} cy={y} r={s} fill={p.b} />
              ) : (
                <path key={i} d={star(x, y, s * 1.5)} fill={p.d} />
              );
            })}
          </Moving>
        </>
      );
    case 'burst': {
      const n = 16;
      const spin = r() * 22;
      return (
        <>
          <g>
            {Array.from({ length: n / 2 }, (_, i) => {
              const a0 = ((i * 2 + spin / 11) * Math.PI * 2) / n;
              const a1 = a0 + (Math.PI * 2) / n;
              const R = 300;
              return (
                <path
                  key={i}
                  d={`M150 100L${150 + Math.cos(a0) * R} ${100 + Math.sin(a0) * R}L${150 + Math.cos(a1) * R} ${100 + Math.sin(a1) * R}Z`}
                  fill={p.a}
                />
              );
            })}
          </g>
          <Cut fill={p.c} lift={4}>
            <circle cx={150} cy={100} r={76} />
          </Cut>
          <Cut fill={p.b} lift={4}>
            <circle cx={150} cy={100} r={62} />
          </Cut>
        </>
      );
    }
    case 'zigzag':
      return (
        <>
          {twinkling(Array.from({ length: 7 }, (_, i) => <circle key={i} cx={20 + r() * 260} cy={14 + r() * 76} r={4 + r() * 6} fill={i % 2 ? p.b : p.c} />))}
          <Cut fill={p.a}>
            <path d={zigzag(116 + r() * 8, 22, r() * 30)} />
          </Cut>
          <Cut fill={p.d}>
            <path d={zigzag(148, 20, r() * 30)} />
          </Cut>
          <Cut fill={p.b}>
            <path d={zigzag(176, 14, r() * 30)} />
          </Cut>
        </>
      );
    case 'dots':
      return (
        <>
          {Array.from({ length: 7 * 5 }, (_, i) => (
            <circle key={i} cx={22 + (i % 7) * 43} cy={22 + Math.floor(i / 7) * 40} r={5} fill={p.b} />
          ))}
          <Cut fill={p.a} lift={4}>
            <circle cx={150} cy={100} r={72} />
          </Cut>
          <circle cx={150} cy={100} r={58} fill="none" stroke={p.b} strokeWidth={3} strokeDasharray="2 10" strokeLinecap="round" />
        </>
      );
    case 'meadow': {
      const sunX = 30 + r() * 240;
      return (
        <>
          {sun(sunX, 42, 20, p)}
          <Moving className="a-drift">
            <path d={cloud(sunX > 150 ? 30 : 190, 62, 0.84)} fill="#fff" opacity={0.86} />
          </Moving>
          <Cut fill={p.a}>
            <path d={`M0 ${128 + r() * 12}C90 ${104 + r() * 10} 210 ${108 + r() * 10} 300 ${130 + r() * 10}V200H0Z`} />
          </Cut>
          {Array.from({ length: 3 }, (_, i) => (
            <Bloom key={i} x={18 + i * 26 + r() * 10} y={166} s={1} petal={i % 2 ? p.c : '#fff'} heart={p.d} stem={p.d} />
          ))}
          {Array.from({ length: 3 }, (_, i) => (
            <Bloom key={i} x={228 + i * 26 + r() * 10} y={168} s={1} petal={i % 2 ? '#fff' : p.c} heart={p.d} stem={p.d} />
          ))}
          <Cut fill={p.d}>
            <path d="M0 176C70 158 220 164 300 174V200H0Z" />
          </Cut>
        </>
      );
    }
    case 'clouds':
      return (
        <>
          {sun(228 + r() * 40, 40, 22, p)}
          <Moving className="a-drift a-rev">
            <path d={cloud(36 + r() * 30, 58, 0.9)} fill="#fff" opacity={0.75} />
          </Moving>
          <Moving className="a-drift">
            <Cut fill={p.b} lift={3}>
              <path d={cloud(-12, 150, 1.9)} />
              <path d={cloud(216, 156, 1.9)} />
            </Cut>
          </Moving>
          <Cut fill="#fff" lift={3}>
            <path d={cloud(40, 188, 2.3)} />
            <path d={cloud(170, 194, 2.2)} />
          </Cut>
        </>
      );
    case 'forest':
      return (
        <>
          {sun(40 + r() * 220, 40, 18, p)}
          <Cut fill={p.a}>
            <path d="M0 132C70 108 220 112 300 136V200H0Z" />
          </Cut>
          <Tree x={32 + r() * 12} y={146} s={1} fill={p.d} round={false} />
          <Tree x={78 + r() * 8} y={152} s={0.74} fill={p.a} round />
          <Tree x={226 + r() * 8} y={150} s={0.82} fill={p.a} round />
          <Tree x={268 + r() * 12} y={148} s={1.06} fill={p.d} round={false} />
          <Cut fill={p.b}>
            <path d="M0 176C90 158 200 168 300 164V200H0Z" />
          </Cut>
        </>
      );
    case 'balloons':
      return (
        <>
          <Moving className="a-drift a-rev">
            <path d={cloud(120 + r() * 50, 46, 0.7)} fill="#fff" opacity={0.8} />
          </Moving>
          {balloon(40 + r() * 14, 62, 1, p.d, r)}
          {balloon(84 + r() * 8, 36, 0.76, p.c, r)}
          {balloon(218 + r() * 8, 40, 0.8, p.b, r)}
          {balloon(262 + r() * 10, 68, 1.02, p.a, r)}
          <Cut fill={p.a}>
            <path d="M0 172C80 152 220 156 300 172V200H0Z" />
          </Cut>
        </>
      );
    case 'peaks': {
      const x1 = 60 + r() * 30;
      const x2 = 220 + r() * 30;
      return (
        <>
          {sun(140 + r() * 30, 38, 20, p)}
          <Cut fill={p.a}>
            <path d={`M${x1 - 110} 200L${x1} ${58 + r() * 12}L${x1 + 110} 200Z`} />
          </Cut>
          <path d={`M${x1 - 24} 92L${x1} 62L${x1 + 24} 92l-11 8-13-8-13 8Z`} fill="#fff" opacity={0.9} />
          <Cut fill={p.d}>
            <path d={`M${x2 - 120} 200L${x2} ${72 + r() * 12}L${x2 + 120} 200Z`} />
          </Cut>
          <path d={`M${x2 - 22} 104L${x2} 76L${x2 + 22} 104l-10 7-12-7-12 7Z`} fill="#fff" opacity={0.9} />
          <Cut fill={p.b}>
            <path d="M0 178C80 160 210 170 300 164V200H0Z" />
          </Cut>
        </>
      );
    }
  }
}

// i18n-ignore
const SCENE = { viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: 'xMidYMid slice', focusable: false } as const;

/** Splits a scene into stacked SVGs: one for each moving part, and one for each still run between them. Order is kept. */
function liveLayers(scene: ReactNode): ReactNode[] {
  const parts = Children.toArray((scene as ReactElement<{ children: ReactNode }>).props.children);
  const out: ReactNode[] = [];
  let still: ReactNode[] = [];
  const flush = () => {
    if (!still.length) return;
    out.push(
      <svg key={out.length} className="art-scene" {...SCENE}>
        {still}
      </svg>,
    );
    still = [];
  };
  for (const part of parts) {
    if (isValidElement(part) && part.type === Moving) {
      flush();
      const { className, delay, children } = part.props as { className: string; delay?: number; children: ReactNode };
      const style: CSSProperties | undefined = delay === undefined ? undefined : { animationDelay: `${delay}s` };
      out.push(
        <svg key={out.length} className={`art-scene ${className}`} style={style} {...SCENE}>
          {children}
        </svg>,
      );
    } else {
      still.push(part);
    }
  }
  flush();
  return out;
}

/**
 * A little cut-paper scene behind an illustration. The colour comes from the development area and the scene from the
 * energy; the seed keeps each game's picture the same every time it appears.
 *
 * `live` is for the one big picture on a screen: its clouds drift, its sun turns, the sticker floats, and a tap sets it
 * wiggling. Grids stay still, because a screenful of moving pictures would be tiring and slow.
 */
export const Art = memo(function Art({
  emoji,
  seed,
  palette,
  energy = 'moderate',
  className,
  eager = false,
  live = false,
}: {
  emoji: string;
  seed: string;
  palette: Domain;
  energy?: Energy;
  className?: string;
  eager?: boolean;
  live?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useAmbient(live ? ref : NO_REF);
  const p = PALETTES[palette];
  const r = seededRandom(hashString(seed));
  const options = KINDS[energy];
  const kind = options[Math.floor(r() * options.length)];
  const tap = () => {
    // A picture inside a link belongs to the link: the tap is for going there.
    const sticker = ref.current?.closest('a') ? null : ref.current?.querySelector<HTMLElement>('.art-sticker');
    if (!sticker) return;
    sticker.classList.remove('wiggle');
    void sticker.offsetWidth; // restart the wiggle, even mid-way through one
    sticker.classList.add('wiggle');
    burst(sticker, 'stars', 6);
    haptic();
  };
  return (
    <span
      ref={ref}
      className={`art${live ? ' art-live' : ''}${className ? ` ${className}` : ''}`}
      aria-hidden="true"
      style={{ background: p.bg }}
      onClick={live ? tap : undefined}
    >
      {live ? (
        liveLayers(shapes(kind, p, r))
      ) : (
        <svg className="art-scene" {...SCENE}>
          {shapes(kind, p, r)}
        </svg>
      )}
      {/* The wrapper moves and the sticker keeps its paper edge, so the edge isn't redrawn on every frame. */}
      <span className="art-float">
        <Emoji e={emoji} className="art-sticker" eager={eager} />
      </span>
    </span>
  );
});
const NO_REF = { current: null };

export function ActivityArt({ activity: a, className, eager, live }: { activity: Activity; className?: string; eager?: boolean; live?: boolean }) {
  return <Art emoji={a.emoji} seed={a.id} palette={a.domains[0]} energy={a.energy} className={className} eager={eager} live={live} />;
}
