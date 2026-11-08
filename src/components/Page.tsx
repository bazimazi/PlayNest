import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { backMorphAvailable, morphBack, useAmbient } from '../lib/motion';
import { applyWorld, type World } from '../lib/world';
import { Icon } from './Icon';
import { Pip, type PipMood } from './Pip';
import { t } from '../i18n';

/** Height of the compact navigation bar (without the safe area). Keep in sync with `--navbar-h` in app.css. */
const NAVBAR_H = 52;

export function useWorld(world: World) {
  useLayoutEffect(() => applyWorld(world), [world]);
}

/** Goes back one screen, or to `fallback` when the page was opened directly (a shared link or a reload). */
export function BackButton({ fallback = '/', label = t('Back') }: { fallback?: string; label?: string }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button
      type="button"
      className="nav-back"
      aria-label={label}
      onClick={() => {
        if (location.key === 'default') return navigate(fallback);
        const game = /^\/activity\/([^/]+)$/.exec(location.pathname);
        if (game && backMorphAvailable()) morphBack(navigate, game[1]);
        else navigate(-1);
      }}
    >
      <Icon name="left" size={24} strokeWidth={2.6} />
    </button>
  );
}

const CLOUD = 'M26 88c-9 0-16-6-16-13 0-6 5-11 11-12 2-8 10-13 18-11 4-5 12-6 18-2 5 3 7 8 7 13 7 0 13 6 13 13s-7 12-14 12z';
const PAPER_SHADE = 'rgb(58 30 96 / 12%)';

/** One layer of a header's picture. Each thing that moves has its own, so it can slide without repainting the others. */
function Layer({ className, style, children }: { className?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <svg className={`decor-layer${className ? ` ${className}` : ''}`} style={style} viewBox="0 0 200 124" focusable="false">
      {children}
    </svg>
  );
}

/** Where a point in the picture is, as a transform origin. */
const at = (x: number, y: number): CSSProperties => ({ transformOrigin: `${x / 2}% ${(y / 124) * 100}%` });

function Cloud({ x, y, s = 1, slow }: { x: number; y: number; s?: number; slow?: boolean }) {
  return (
    <Layer className={`d-drift${slow ? ' slow' : ''}`}>
      <g transform={`translate(${x} ${y}) scale(${s})`}>
        <path d={CLOUD} fill={PAPER_SHADE} transform="translate(0 2.5)" />
        <path d={CLOUD} fill="var(--w-cloud)" />
      </g>
    </Layer>
  );
}

/** Two birds gliding across now and then. */
function Birds({ y = 26, late = 0 }: { y?: number; late?: number }) {
  const wing = (x: number, yy: number) => `M${x - 6} ${yy - 2}q3-4 6 0q3-4 6 0`;
  return (
    <Layer className="d-birds" style={{ animationDelay: `${late}s` }}>
      <g fill="none" stroke="var(--w-ink)" strokeOpacity={0.55} strokeWidth={1.8} strokeLinecap="round">
        <path d={wing(0, y)} />
        <path d={wing(16, y + 8)} />
      </g>
    </Layer>
  );
}

const sparkle = (x: number, y: number, s: number) =>
  `M${x} ${y - s}Q${x} ${y} ${x + s} ${y}Q${x} ${y} ${x} ${y + s}Q${x} ${y} ${x - s} ${y}Q${x} ${y} ${x} ${y - s}Z`;

/** Sparkles that twinkle in two groups, out of step. */
function Sparkles({ a, b, fill = 'var(--w-sun)' }: { a: [number, number, number][]; b: [number, number, number][]; fill?: string }) {
  return (
    <>
      <Layer className="d-twinkle">
        <path fill={fill} d={a.map((s) => sparkle(...s)).join('')} />
      </Layer>
      <Layer className="d-twinkle two">
        <path fill={fill} d={b.map((s) => sparkle(...s)).join('')} />
      </Layer>
    </>
  );
}

/** A sun on its own sheet of paper, with a soft ring that breathes and rays that turn very slowly. */
function DecorSun({ x = 156, y = 42, r = 32 }: { x?: number; y?: number; r?: number }) {
  return (
    <>
      <Layer className="d-halo" style={at(x, y)}>
        <circle cx={x} cy={y} r={r * 1.42} fill="var(--w-sun)" opacity={0.28} />
      </Layer>
      <Layer className="decor-rays" style={at(x, y)}>
        <g stroke="var(--w-sun)" strokeWidth={6} strokeLinecap="round">
          {Array.from({ length: 10 }, (_, i) => (
            <path key={i} d={`M${x} ${y - r * 1.5}v${-r * 0.36}`} transform={`rotate(${i * 36} ${x} ${y})`} />
          ))}
        </g>
      </Layer>
      <Layer>
        <circle cx={x} cy={y + 2.5} r={r} fill={PAPER_SHADE} />
        <circle cx={x} cy={y} r={r} fill="var(--w-sun)" />
        <circle cx={x - r * 0.3} cy={y - r * 0.32} r={r * 0.26} fill="#fff" opacity={0.4} />
      </Layer>
    </>
  );
}

/**
 * An illustrated corner for a coloured header, different in each world. Purely decorative, and it moves slowly.
 * Things that move stay to the right of the picture: titles can run long, and words matter more than clouds.
 */
export function WorldDecor({ world }: { world: World }) {
  const ref = useRef<HTMLSpanElement>(null);
  useAmbient(ref);
  let body: ReactNode;
  switch (world) {
    case 'night':
      body = (
        <>
          <Layer className="d-halo" style={at(146, 44)}>
            <circle cx={146} cy={44} r={38} fill="var(--w-sun)" opacity={0.16} />
          </Layer>
          <Layer>
            <path d="M146 16a28 28 0 1 0 25 41a25 25 0 1 1-25-41z" fill={PAPER_SHADE} transform="translate(0 2.5)" />
            <path d="M146 16a28 28 0 1 0 25 41a25 25 0 1 1-25-41z" fill="var(--w-sun)" />
            <circle cx={132} cy={40} r={3.2} fill="#000" opacity={0.08} />
            <circle cx={138} cy={56} r={2.4} fill="#000" opacity={0.08} />
          </Layer>
          <Sparkles
            a={[
              [58, 32, 10],
              [186, 92, 5],
              [22, 80, 4],
            ]}
            b={[
              [104, 80, 6],
              [88, 18, 3.5],
            ]}
          />
          <Layer className="d-shoot">
            <path d="M196 4l-22 11" stroke="var(--w-sun)" strokeWidth={2.4} strokeLinecap="round" />
          </Layer>
          <Cloud x={92} y={18} s={0.62} slow />
        </>
      );
      break;
    case 'coral':
      body = (
        <>
          <Layer className="d-bob">
            <circle cx={154} cy={40.5} r={22} fill={PAPER_SHADE} />
            <circle cx={154} cy={38} r={22} fill="var(--w-2)" />
            <circle cx={147} cy={31} r={5.5} fill="#fff" opacity={0.35} />
          </Layer>
          <Layer className="d-spin-slow" style={at(85, 31)}>
            <rect x={72} y={20} width={26} height={26} rx={7} fill={PAPER_SHADE} transform="rotate(16 85 33)" />
            <rect x={72} y={18} width={26} height={26} rx={7} fill="var(--w-3)" transform="rotate(16 85 31)" />
          </Layer>
          <Layer className="d-bob two">
            <path d="M112 76l18 30h-36z" fill={PAPER_SHADE} />
            <path d="M112 74l18 30h-36z" fill="var(--w-3)" />
          </Layer>
          <Layer className="d-bob three">
            <circle cx={178} cy={96} r={9} fill="var(--w-3)" />
          </Layer>
        </>
      );
      break;
    case 'lilac':
      body = (
        <>
          <Cloud x={96} y={-8} />
          <Layer className="d-bob two">
            <circle cx={166} cy={94} r={12} fill="var(--w-2)" />
            <ellipse cx={166} cy={94} rx={20} ry={4.6} fill="none" stroke="var(--w-3)" strokeWidth={3} transform="rotate(-18 166 94)" />
          </Layer>
          <Sparkles
            a={[
              [44, 22, 11],
              [118, 92, 7],
            ]}
            b={[[186, 38, 6]]}
            fill="var(--w-3)"
          />
        </>
      );
      break;
    case 'dusk':
      body = (
        <>
          <DecorSun x={150} y={48} r={30} />
          <Cloud x={72} y={8} />
          <Cloud x={118} y={36} s={0.6} slow />
          <Birds y={22} late={-9} />
        </>
      );
      break;
    case 'sky':
      body = (
        <>
          <DecorSun />
          <Cloud x={8} y={-42} />
          <Cloud x={140} y={46} s={0.6} slow />
          {/* A little hot-air balloon, clear of long titles. */}
          <Layer className="d-bob">
            <g transform="translate(58 24) scale(0.76)">
              <path d="M62 62a15 17 0 1 1 18 0l-3 7h-12z" fill={PAPER_SHADE} transform="translate(0 2.5)" />
              <path d="M62 62a15 17 0 1 1 18 0l-3 7h-12z" fill="var(--w-3)" />
              <path d="M71 26c-5 8-5 28-2 43M71 26c5 8 5 28 2 43" fill="none" stroke="#fff" strokeOpacity={0.6} strokeWidth={1.6} />
              <rect x={66} y={72} width={10} height={7} rx={2} fill="#a8693a" />
            </g>
          </Layer>
        </>
      );
      break;
    case 'leaf':
      body = (
        <>
          <DecorSun />
          <Cloud x={8} y={-42} />
          {[
            [108, 78, 0],
            [136, 98, 3],
            [176, 90, 6],
          ].map(([x, y, d]) => (
            <Layer key={x} className="d-leaf" style={{ ...at(x, y), animationDelay: `${-d}s` }}>
              <path d={`M${x} ${y}q8-11 19-7q-2 11-13 13q-4 0-6-6z`} fill="var(--w-3)" />
            </Layer>
          ))}
        </>
      );
      break;
    default:
      // The sun's own open sky.
      body = (
        <>
          <DecorSun />
          <Cloud x={8} y={-42} />
          <Birds y={92} />
        </>
      );
  }
  return (
    <span ref={ref} className="world-decor" aria-hidden="true">
      {body}
    </span>
  );
}

/**
 * A screen: a coloured header (the world) that scrolls away, with a sticky bar above it that fades in a compact title.
 *
 * - `heading` is the big friendly title; `title` names the screen in the compact bar and defaults the heading.
 * - `head` is extra content inside the coloured header (search, tabs, mood picker, the garden).
 * - `hero` replaces the coloured header with a full-bleed picture (detail screens).
 * - `overlap` leaves room for the first card to sit over the header's edge.
 */
export function Page({
  world = 'sun',
  title,
  heading,
  eyebrow,
  subtitle,
  head,
  hero,
  back,
  actions,
  overlap = false,
  decor = true,
  className,
  children,
}: {
  world?: World;
  title: string;
  heading?: ReactNode;
  eyebrow?: ReactNode;
  subtitle?: ReactNode;
  head?: ReactNode;
  hero?: ReactNode;
  back?: ReactNode;
  actions?: ReactNode;
  overlap?: boolean;
  decor?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const watched = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);
  useWorld(world);

  useEffect(() => {
    const el = watched.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => setCollapsed(!e.isIntersecting), {
      rootMargin: `-${NAVBAR_H + 8}px 0px 0px 0px`,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className={`navbar${hero ? ' overlay' : ''}${collapsed ? ' collapsed' : ''}`}>
        <div className="navbar-side">{back}</div>
        {/* Decorative: the page's own heading is the real one for assistive technology. */}
        <div className="navbar-title" aria-hidden="true">
          {title}
        </div>
        <div className="navbar-side end">{actions}</div>
      </header>
      <main className={`page${hero ? ' has-hero' : ''}${className ? ` ${className}` : ''}`}>
        {hero ? (
          <div ref={watched} className="hero-wrap">
            {hero}
          </div>
        ) : (
          <div ref={watched} className={`world-head${overlap ? ' overlap' : ''}${head ? ' has-head' : ''}`}>
            {decor && <WorldDecor world={world} />}
            <div className="world-copy">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              <h1>{heading ?? title}</h1>
              {subtitle && <div className="subtitle">{subtitle}</div>}
            </div>
            {head && <div className="world-slot">{head}</div>}
          </div>
        )}
        <div className="page-body">{children}</div>
      </main>
    </>
  );
}

/** A section with a short heading and an optional trailing link or button. */
export function Section({
  title,
  action,
  children,
  id: given,
}: {
  title?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  id?: string;
}) {
  const auto = useId();
  const id = given ?? auto;
  return (
    <section className="section" aria-labelledby={title ? id : undefined}>
      {title && (
        <div className="section-head">
          <h2 id={id}>{title}</h2>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

/**
 * A bar pinned to the bottom of the screen for the main action (e.g. "Play").
 * Rendered into <body> so screen transitions (which transform the page) never move it.
 */
export function BottomBar({ children }: { children: ReactNode }) {
  return createPortal(<div className="bottom-bar">{children}</div>, document.body);
}

/** Nothing to show yet: Pip says so, kindly, and offers a way forward. */
export function Empty({
  mood = 'calm',
  title,
  text,
  compact = false,
  children,
}: {
  mood?: PipMood;
  title?: string;
  text?: string;
  compact?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`empty${compact ? ' compact' : ''}`}>
      <Pip mood={mood} size={compact ? 72 : 104} />
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      {children}
    </div>
  );
}
