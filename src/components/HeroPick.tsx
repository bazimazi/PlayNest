import { useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Activity } from '../data/types';
import { morphToActivity } from '../lib/motion';
import { haptic } from '../platform';
import { FavoriteButton, MetaLine } from './ActivityCard';
import { ActivityArt } from './Art';
import { Icon } from './Icon';
import { isRtl, t } from '../i18n';

/** Horizontal drag (px) that counts as a swipe, or less if it was a quick flick. */
const SWIPE = 80;
const FLICK = 0.5; // px per ms
/** A second tap this soon after the first is a double tap, not a request for two ideas. */
const SETTLE_MS = 180;

type Role = 'prev' | 'top' | 'next';

/** Every card is moved by the same transform list, so any two of them interpolate cleanly. */
const tf = (x: string, y: number, r: number, s: number) => `translateX(${x}) translateY(${y}px) rotate(${r}deg) scale(${s})`;

/**
 * Today's pick, on top of a little deck of ideas. The next idea is the real card underneath: swipe the top one away (or
 * tap "Another idea") and it comes forward. Swipe the other way and the last one comes back from where it went. Tap the
 * card for details; "Let's play" goes straight into play mode.
 *
 * `index` counts from the first card dealt, so `cardAt` can deal more when the deck runs out; `deck` changes when the
 * whole deck is dealt again (a mood, a situation), which brings it in fresh.
 */
export function HeroPick({
  deck,
  index,
  cardAt,
  reasonFor,
  label,
  position,
  total,
  onMove,
  extra,
}: {
  deck: string | number;
  index: number;
  cardAt: (i: number) => Activity;
  reasonFor: (a: Activity) => string;
  label: string;
  /** Where the top card sits in this deal, and how many cards a deal holds (for the dots). */
  position: number;
  total: number;
  onMove: (to: number) => void;
  /** A second quiet action beside "Another idea". */
  extra?: ReactNode;
}) {
  const [dx, setDx] = useState(0);
  const box = useRef<HTMLDivElement>(null);
  const g = useRef<{ x0: number; y0: number; axis: 'x' | 'y' | null; width: number; t: number; x: number; v: number } | null>(null);
  const dragged = useRef(false);
  const settled = useRef(0);

  const many = total > 1;
  const hasPrev = many && index > 0;
  // Ideas leave towards the start of the line (left, or right in Persian) and come back from there.
  const out = isRtl() ? 1 : -1;

  // The card that had focus is about to become unreachable, so focus follows to the same control on the new one.
  const refocus = useRef(-1);
  const focusables = (scope: string) => [...(box.current?.querySelectorAll<HTMLElement>(`${scope} a, ${scope} button`) ?? [])];
  const move = (to: number) => {
    if (to < 0 || performance.now() < settled.current) return;
    settled.current = performance.now() + SETTLE_MS;
    haptic();
    refocus.current = focusables('.is-top').indexOf(document.activeElement as HTMLElement);
    setDx(0);
    onMove(to);
  };
  useLayoutEffect(() => {
    if (refocus.current < 0) return;
    focusables('.is-top')[refocus.current]?.focus({ preventScroll: true });
    refocus.current = -1;
  }, [index]);

  const down = (e: PointerEvent<HTMLDivElement>) => {
    // A new press is a new gesture: a swipe that ended without a click mustn't swallow the next tap.
    dragged.current = false;
    if (!many || (e.pointerType === 'mouse' && e.button !== 0)) return;
    if ((e.target as HTMLElement).closest('button')) return;
    g.current = { x0: e.clientX, y0: e.clientY, axis: null, width: box.current?.offsetWidth || 320, t: e.timeStamp, x: e.clientX, v: 0 };
  };
  const drag = (e: PointerEvent<HTMLDivElement>) => {
    const s = g.current;
    if (!s) return;
    const x = e.clientX - s.x0;
    const y = e.clientY - s.y0;
    if (!s.axis) {
      if (Math.abs(x) < 8 && Math.abs(y) < 8) return;
      s.axis = Math.abs(x) > Math.abs(y) ? 'x' : 'y';
      if (s.axis === 'x') e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (s.axis !== 'x') return;
    const dt = e.timeStamp - s.t;
    if (dt > 0) s.v = (e.clientX - s.x) / dt;
    s.t = e.timeStamp;
    s.x = e.clientX;
    dragged.current = true;
    setDx(x);
  };
  const up = () => {
    const s = g.current;
    g.current = null;
    if (!s || s.axis !== 'x') return;
    const forward = Math.sign(dx) === out;
    const far = Math.abs(dx) > SWIPE || (Math.abs(dx) > 24 && Math.abs(s.v) > FLICK && Math.sign(s.v) === Math.sign(dx));
    if (far && (forward || hasPrev)) move(forward ? index + 1 : index - 1);
    else setDx(0);
  };

  const keys = (e: KeyboardEvent<HTMLElement>) => {
    if (!many || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return;
    // As in any carousel: → for the next idea and ← for the last one, mirrored right to left.
    const forward = (e.key === 'ArrowLeft') === (out === 1);
    e.preventDefault();
    move(forward ? index + 1 : index - 1);
  };

  // How far the drag has gone towards the card it would bring, 0 to 1.
  const width = g.current?.width ?? box.current?.offsetWidth ?? 320;
  const p = Math.min(1, Math.abs(dx) / (width * 0.9));
  const toward: Role | null = !dx ? null : Math.sign(dx) === out ? 'next' : hasPrev ? 'prev' : null;

  const styleFor = (role: Role): CSSProperties | undefined => {
    if (!dx) return undefined;
    if (role === 'top') {
      if (toward === 'prev') return { transform: tf('0px', 0, 0, 1 - 0.04 * p) };
      // Nothing behind on that side: the card gives a little, then springs back.
      const x = toward === 'next' ? dx : dx * 0.3;
      return { transform: tf(`${x}px`, 0, x / 26, 1) };
    }
    if (role === 'next' && toward === 'next') return { transform: tf('0px', 14 * (1 - p), 0, 0.94 + 0.06 * p) };
    if (role === 'prev' && toward === 'prev') {
      return { transform: tf(`${out * 135 * (1 - p)}%`, 0, out * 14 * (1 - p), 1), visibility: 'visible' };
    }
    return undefined;
  };

  const slots: { i: number; role: Role }[] = [{ i: index, role: 'top' }];
  if (many) slots.push({ i: index + 1, role: 'next' });
  if (hasPrev) slots.push({ i: index - 1, role: 'prev' });
  // Keep a stable DOM order (by position in the deck), so React moves nothing and every card keeps its transition.
  slots.sort((a, b) => a.i - b.i);

  const top = cardAt(index);
  return (
    <section className="hero-pick" aria-labelledby="hero-title" onKeyDown={keys}>
      <div
        ref={box}
        className={`hero-deck${g.current?.axis === 'x' ? ' dragging' : ''}${many ? '' : ' single'}`}
        style={{ '--out': out } as CSSProperties}
        onPointerDown={down}
        onPointerMove={drag}
        onPointerUp={up}
        onPointerCancel={up}
        onClickCapture={(e) => {
          if (dragged.current) {
            e.preventDefault();
            e.stopPropagation();
            dragged.current = false;
          }
        }}
      >
        {many && <i className="deck-stub" aria-hidden="true" />}
        {slots.map(({ i, role }) => (
          <DeckCard
            key={`${deck}:${i}`}
            role={role}
            style={styleFor(role)}
            activity={cardAt(i)}
            label={label}
            reason={reasonFor(cardAt(i))}
            actions={
              <div className="hero-more">
                {many && (
                  <button type="button" className="link-btn" onClick={() => move(index + 1)}>
                    <Icon name="shuffle" size={18} strokeWidth={2.4} /> {t('Another idea')}
                  </button>
                )}
                {extra}
              </div>
            }
          />
        ))}
      </div>
      {many && (
        <span className="pager-dots" aria-hidden="true">
          {Array.from({ length: total }, (_, i) => (
            <i key={i} className={i === position ? 'on' : undefined} />
          ))}
        </span>
      )}
      {/* The cards themselves are swapped silently; this says what's on top now. */}
      <p className="sr-only" aria-live="polite">
        {top.title}
      </p>
    </section>
  );
}

function DeckCard({
  role,
  style,
  activity: a,
  label,
  reason,
  actions,
}: {
  role: Role;
  style?: CSSProperties;
  activity: Activity;
  label: string;
  reason: string;
  actions: ReactNode;
}) {
  const navigate = useNavigate();
  const slot = useRef<HTMLDivElement>(null);
  // How a card arrives depends on where it first appeared: the top one rises in, the next one fades in behind it.
  const [born] = useState(role);
  const isTop = role === 'top';
  useLayoutEffect(() => {
    // Only the top card can be reached. `inert` isn't a React 18 prop, so it's set here.
    if (slot.current) slot.current.inert = !isTop;
  }, [isTop]);

  return (
    <div ref={slot} className={`deck-slot is-${role}`} style={style} aria-hidden={isTop ? undefined : true}>
      <div className={`hero-card born-${born}`}>
        <Link to={`/activity/${a.id}`} className="hero-body" draggable={false} onClick={(e) => morphToActivity(e, navigate, `/activity/${a.id}`)}>
          <span className="hero-picture">
            <ActivityArt activity={a} className="hero-art" eager live={isTop} />
            <span className="hero-label">{label}</span>
          </span>
          <span className="hero-copy">
            <h2 id={isTop ? 'hero-title' : undefined}>{a.title}</h2>
            <span className="hero-reason">
              <Icon name="sparkle" size={16} /> {reason}
            </span>
            <span className="hero-summary">{a.summary}</span>
            <MetaLine a={a} full />
          </span>
        </Link>
        <FavoriteButton id={a.id} title={a.title} floating />
        <div className="hero-actions">
          <Link to={`/play/${a.id}`} className="btn btn-primary btn-lg btn-block" draggable={false}>
            <Icon name="play" size={20} filled /> {t('Let’s play')}
          </Link>
          {actions}
        </div>
      </div>
    </div>
  );
}
