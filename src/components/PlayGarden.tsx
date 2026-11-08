import { useEffect, useRef, type CSSProperties } from 'react';
import { ACTIVITY_BY_ID } from '../data/activities';
import { DOMAIN_INFO } from '../data/domains';
import { addDays, startOfWeek, toISODate, WEEKDAYS, WEEKDAYS_SHORT, weekdayIndex } from '../lib/dates';
import { motionAllowed, useAmbient } from '../lib/motion';
import { hashString, seededRandom } from '../lib/random';
import type { Session } from '../store/model';
import { commaList, isRtl, num, t, tn } from '../i18n';

const W = 390;
const H = 176;
const GROUND = 134;
/** The top of the picture: just above the tallest flower. */
const TOP = 48;
const COL = (W - 16) / 7;
const MAX_PER_DAY = 4;
const BREEZE_MS = 3200;

/** Four kinds of flower, so a garden looks grown rather than printed. The seed picks one, the same every time. */
function FlowerHead({ x, y, r, color, kind, spin }: { x: number; y: number; r: number; color: string; kind: number; spin: number }) {
  const fill = { fill: color };
  switch (kind) {
    case 1: // daisy
      return (
        <>
          {Array.from({ length: 8 }, (_, i) => (
            <ellipse key={i} cx={x} cy={y - r * 1.3} rx={r * 0.5} ry={r * 1.05} style={fill} transform={`rotate(${spin + i * 45} ${x} ${y})`} />
          ))}
          <circle className="flower-eye" cx={x} cy={y} r={r * 0.68} fill="#ffc42e" />
          <circle className="flower-shine" cx={x - r * 0.18} cy={y - r * 0.2} r={r * 0.22} fill="#fff" opacity={0.55} />
        </>
      );
    case 2: // tulip
      return (
        <>
          <path d={`M${x - r * 1.5} ${y - r * 0.6}C${x - r * 1.7} ${y + r * 1.6} ${x + r * 1.7} ${y + r * 1.6} ${x + r * 1.5} ${y - r * 0.6}L${x + r * 0.75} ${y + r * 0.1}L${x} ${y - r * 1.2}L${x - r * 0.75} ${y + r * 0.1}Z`} style={fill} />
          <path className="flower-shine" d={`M${x - r * 0.75} ${y + r * 0.1}L${x} ${y - r * 1.2}L${x + r * 0.75} ${y + r * 0.1}Q${x} ${y + r * 1.1} ${x - r * 0.75} ${y + r * 0.1}Z`} fill="#fff" opacity={0.26} />
        </>
      );
    case 3: // buttercup: five broad heart-shaped petals
      return (
        <>
          {Array.from({ length: 5 }, (_, i) => (
            <path key={i} d={`M${x} ${y}C${x - r * 1.5} ${y - r} ${x - r} ${y - r * 2.3} ${x} ${y - r * 1.75}C${x + r} ${y - r * 2.3} ${x + r * 1.5} ${y - r} ${x} ${y}Z`} style={fill} transform={`rotate(${spin + i * 72} ${x} ${y})`} />
          ))}
          <circle className="flower-eye" cx={x} cy={y} r={r * 0.6} fill="#ffe07a" />
        </>
      );
    default: {
      return (
        <>
          {Array.from({ length: 5 }, (_, i) => {
            const a = ((i * 72 + spin) * Math.PI) / 180;
            return <circle key={i} cx={x + Math.cos(a) * r * 1.15} cy={y + Math.sin(a) * r * 1.15} r={r} style={fill} />;
          })}
          <circle className="flower-eye" cx={x} cy={y} r={r * 0.72} fill="#ffd34d" />
          <circle className="flower-shine" cx={x - r * 0.2} cy={y - r * 0.22} r={r * 0.22} fill="#fff" opacity={0.6} />
        </>
      );
    }
  }
}

/** One flower, in the colour of the area it was played for. It grows: the stem draws, the leaf opens, the head pops. */
export function Flower({
  x,
  ground = GROUND,
  h,
  color,
  seed,
  delay = 0,
  still = false,
  headScale = 1,
}: {
  x: number;
  ground?: number;
  h: number;
  color: string;
  seed: number;
  delay?: number;
  /** Already grown: no bloom animation. For keepsakes, where dozens would otherwise pop at once. */
  still?: boolean;
  /** Size of the flower's head, for one flower shown large. */
  headScale?: number;
}) {
  const rand = seededRandom(seed);
  const top = ground - h;
  const r = (5.4 + rand() * 1.6) * headScale;
  const lean = (rand() - 0.5) * 10;
  const spin = rand() * 72;
  const kind = Math.floor(rand() * 4);
  const side = rand() > 0.5 ? 1 : -1;
  const leafY = ground - h * 0.36;
  const stem = `M${x} ${ground}Q${x + lean / 2} ${ground - h / 2} ${x + lean} ${top}`;
  const leaf = (
    <g className={still ? undefined : 'flower-leaf'}>
      <ellipse cx={x + 6 * side} cy={leafY} rx={7} ry={3.4} fill="var(--stem)" transform={`rotate(${-28 * side} ${x + 6 * side} ${leafY})`} />
    </g>
  );
  const head = <FlowerHead x={x + lean} y={top} r={r} color={color} kind={kind} spin={spin} />;
  if (still) {
    return (
      <g>
        <path d={stem} stroke="var(--stem)" strokeWidth={3} strokeLinecap="round" fill="none" />
        {leaf}
        {head}
      </g>
    );
  }
  return (
    <g className="flower" style={{ '--d': `${delay}ms` } as CSSProperties}>
      <g className="flower-sway" style={{ transformOrigin: `${x}px ${ground}px`, animationDelay: `${-(seed % 4000)}ms` }}>
        <path className="flower-stem" d={stem} pathLength={1} stroke="var(--stem)" strokeWidth={3} strokeLinecap="round" fill="none" />
        {leaf}
        <g className="flower-head">{head}</g>
      </g>
    </g>
  );
}

function Sprout({ x }: { x: number }) {
  return (
    <path
      className="sprout"
      style={{ transformOrigin: `${x}px ${GROUND}px` }}
      d={`M${x} ${GROUND}v-9m0 0q-7-6-11-1m11 1q7-6 11-1`}
      stroke="var(--stem)"
      strokeWidth={2.6}
      strokeLinecap="round"
      fill="none"
      opacity={0.75}
    />
  );
}

/** A butterfly on a slow, looping flight over the garden. Its wings really beat. Each wing is its own little layer. */
function Butterfly({ left, top, color, slow }: { left: string; top: string; color: string; slow?: boolean }) {
  return (
    <span className={`critter critter-fly${slow ? ' slow' : ''}`} style={{ left, top }} aria-hidden="true">
      <svg className="c-wing" viewBox="-15 -12 15 21" focusable="false">
        <path d="M0 0C-4-9-14-11-14-4c0 3 3 5 7 5C-11 2-11 8-6 8c3 0 5-4 6-8z" fill={color} stroke="#fff" strokeWidth={1} />
      </svg>
      <svg className="c-wing right" viewBox="0 -12 15 21" focusable="false">
        <path d="M0 0C4-9 14-11 14-4c0 3-3 5-7 5C11 2 11 8 6 8 3 8 1 4 0 0z" fill={color} stroke="#fff" strokeWidth={1} />
      </svg>
      <i className="c-body" />
    </span>
  );
}

/** A bee, busy on a smaller loop of its own. */
function Bee({ left, top }: { left: string; top: string }) {
  return (
    <span className="critter critter-buzz" style={{ left, top }} aria-hidden="true">
      <svg className="c-buzz" viewBox="-7 -11 14 11" focusable="false">
        <g fill="#fff" opacity={0.85}>
          <ellipse cx={-2.6} cy={-6} rx={3} ry={4.6} transform="rotate(-24 -2.6 -6)" />
          <ellipse cx={2.6} cy={-6} rx={3} ry={4.6} transform="rotate(24 2.6 -6)" />
        </g>
      </svg>
      <svg className="c-bee" viewBox="-9 -6.5 18 13" focusable="false">
        <ellipse cx={0} cy={0} rx={7.6} ry={5.2} fill="#ffc93c" stroke="#fff" strokeWidth={1} />
        <path d="M-2-4.8v9.6M2.4-4.6v9.2" stroke="#3b2a5e" strokeWidth={2.2} />
        <circle cx={-5} cy={-1.4} r={1} fill="#3b2a5e" />
      </svg>
    </span>
  );
}

/** Tufts of grass along the near hill, at the same spots every time. */
function Grass() {
  const r = seededRandom(90210);
  return (
    <g fill="none" stroke="var(--stem)" strokeWidth={2} strokeLinecap="round" opacity={0.55}>
      {Array.from({ length: 16 }, (_, i) => {
        const x = 6 + i * 25 + r() * 12;
        const y = GROUND - 2 + r() * 6;
        return <path key={i} d={`M${x} ${y}q-2-5-5-7M${x} ${y}q0-6 0-9M${x} ${y}q2-5 5-7`} />;
      })}
    </g>
  );
}

/**
 * This week as a little garden: every game played plants a flower on its day, coloured by its development area.
 * Colour is decoration here, not data: the count is what matters, and it's spoken in the accessible name.
 */
export function PlayGarden({ sessions, now, childId, className }: { sessions: Session[]; now: Date; childId: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useAmbient(ref);
  // Every so often a breeze goes through the flowers. Repainting a whole garden is too much to do all the time.
  useEffect(() => {
    if (!motionAllowed()) return;
    let timer = 0;
    let calm = 0;
    const breeze = () => {
      const el = ref.current;
      if (el && !el.hasAttribute('data-off') && !document.documentElement.hasAttribute('data-rest') && !document.hidden) {
        el.classList.add('breeze');
        calm = window.setTimeout(() => el.classList.remove('breeze'), BREEZE_MS);
      }
      timer = window.setTimeout(breeze, 11000 + Math.random() * 9000);
    };
    timer = window.setTimeout(breeze, 3500);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(calm);
    };
  }, []);
  const monday = startOfWeek(now);
  const todayIdx = weekdayIndex(now);
  const byDay: Session[][] = Array.from({ length: 7 }, () => []);
  for (const s of sessions) {
    const iso = toISODate(new Date(s.date));
    for (let i = 0; i < 7; i++) if (toISODate(addDays(monday, i)) === iso) byDay[i].push(s);
  }
  const total = byDay.reduce((n, d) => n + d.length, 0);
  const perDay = commaList(
    byDay.map((list, i) => (list.length ? t('{n} on {day}', { n: list.length, day: WEEKDAYS[i] }) : null)).filter((s): s is string => s !== null),
  );

  return (
    <span className="garden-box" ref={ref}>
    <svg
      className={`garden-svg${className ? ` ${className}` : ''}`}
      viewBox={`0 ${TOP} ${W} ${H - TOP}`}
      role="img"
      aria-label={
        perDay
          ? tn(total, 'Play garden: {n} flower this week, {perDay}', 'Play garden: {n} flowers this week, {perDay}', { perDay })
          : tn(total, 'Play garden: {n} flower this week', 'Play garden: {n} flowers this week')
      }
    >
      <path d={`M-1600 ${GROUND - 26}H0C70 ${GROUND - 50} 150 ${GROUND - 44} 230 ${GROUND - 26}S350 ${GROUND - 40} ${W} ${GROUND - 26}H2000V${H}H-1600Z`} fill="var(--w-2)" />
      <path d={`M-1600 ${GROUND - 5}H0C110 ${GROUND - 21} 270 ${GROUND - 17} ${W} ${GROUND - 5}H2000V${H}H-1600Z`} fill="rgb(58 30 96 / 9%)" />
      <path d={`M-1600 ${GROUND - 8}H0C110 ${GROUND - 24} 270 ${GROUND - 20} ${W} ${GROUND - 8}H2000V${H}H-1600Z`} fill="var(--w-3)" />
      <Grass />
      {byDay.map((list, day) => {
        const cx = 8 + COL * (isRtl() ? 6 - day : day) + COL / 2;
        const shown = list.slice(0, MAX_PER_DAY);
        const isToday = day === todayIdx;
        return (
          <g key={day}>
            <ellipse cx={cx} cy={GROUND + 2} rx={COL * 0.42} ry={7} fill="var(--soil)" />
            {shown.length === 0 && day <= todayIdx && <Sprout x={cx} />}
            {shown.map((s, i) => {
              const a = ACTIVITY_BY_ID.get(s.activityId);
              const color = a ? DOMAIN_INFO[a.domains[0]].color : 'var(--d-feelings)';
              const offset = (i - (shown.length - 1) / 2) * 9;
              const seed = hashString(s.id + childId);
              return <Flower key={s.id} x={cx + offset} h={36 + (seed % 34)} color={color} seed={seed} delay={(day + i) * 70} />;
            })}
            {list.length > MAX_PER_DAY && (
              <text x={cx + 16} y={GROUND - 78} fontSize={12} fontWeight={800} fill="var(--w-ink)">
                +{num(list.length - MAX_PER_DAY)}
              </text>
            )}
            {isToday && <rect x={cx - 19} y={GROUND + 14} width={38} height={21} rx={10.5} fill="var(--w-ink)" />}
            <text
              x={cx}
              y={GROUND + 29}
              textAnchor="middle"
              fontSize={12}
              fontWeight={800}
              fill={isToday ? 'var(--w-ink-on)' : 'var(--w-ink)'}
            >
              {WEEKDAYS_SHORT[day]}
            </text>
          </g>
        );
      })}
    </svg>
      {total >= 1 && <Butterfly left="70%" top="10%" color="#ff8fab" />}
      {total >= 3 && <Butterfly left="22%" top="6%" color="#a78bff" slow />}
      {total >= 6 && <Bee left="86%" top="26%" />}
    </span>
  );
}
