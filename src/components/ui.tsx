import { useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { haptic } from '../platform';
import { Emoji } from './Emoji';
import { Icon, type IconName } from './Icon';
import { Sheet } from './Sheet';
import { isRtl, t } from '../i18n';

/** A circular progress ring (Apple Fitness style) with optional content in the middle. */
export function Ring({
  value,
  max,
  size = 48,
  stroke = 5,
  color = 'var(--brand)',
  label,
  children,
}: {
  value: number;
  max: number;
  size?: number;
  stroke?: number;
  color?: string;
  /** Accessible name, e.g. "Milestones answered". */
  label: string;
  children?: ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const frac = max > 0 ? Math.min(1, value / max) : 0;
  return (
    <span
      className="ring"
      style={{ width: size, height: size }}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--fill-2)" strokeWidth={stroke} />
        {/* No arc at zero: a round cap on a zero-length stroke would still draw a dot. */}
        {frac > 0 && (
          <circle
            className="ring-arc"
            style={{ '--c': c } as CSSProperties}
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${c * frac} ${c}`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        )}
      </svg>
      {children !== undefined && <span className="ring-inner">{children}</span>}
    </span>
  );
}

/**
 * Segmented control. `tabs` mode switches between views (role=tab); otherwise it's a set of toggle buttons.
 */
export function Segmented<T extends string>({
  value,
  options,
  onChange,
  label,
  tabs = false,
}: {
  value: T;
  options: { value: T; label: ReactNode }[];
  onChange: (v: T) => void;
  label: string;
  tabs?: boolean;
}) {
  const index = Math.max(0, options.findIndex((o) => o.value === value));
  return (
    <div
      className="segmented"
      role={tabs ? 'tablist' : 'group'}
      aria-label={label}
      style={{ '--n': options.length, '--i': index } as CSSProperties}
    >
      <span className="segmented-thumb" aria-hidden="true" />
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role={tabs ? 'tab' : undefined}
          aria-selected={tabs ? o.value === value : undefined}
          aria-pressed={tabs ? undefined : o.value === value}
          onClick={() => {
            if (o.value !== value) haptic();
            onChange(o.value);
          }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** An inset, rounded group of rows — the native "settings list" look. */
export function ListGroup({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="group" role={label ? 'group' : undefined} aria-label={label}>
      {children}
    </div>
  );
}

/** A coloured rounded square holding a glyph or emoji, used at the start of list rows and tiles. */
export function Glyph({ icon, emoji, tone = 'var(--brand)' }: { icon?: IconName; emoji?: string; tone?: string }) {
  return (
    <span className={`glyph${emoji ? ' emoji' : ''}`} style={{ '--tone': tone } as CSSProperties} aria-hidden="true">
      {icon ? <Icon name={icon} size={18} strokeWidth={2.4} /> : emoji ? <Emoji e={emoji} size={22} /> : null}
    </span>
  );
}

export function ListRow({
  to,
  href,
  onClick,
  lead,
  title,
  subtitle,
  value,
  chevron = !!(to || href),
  danger = false,
  ariaLabel,
}: {
  to?: string;
  href?: string;
  onClick?: () => void;
  lead?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  value?: ReactNode;
  chevron?: boolean;
  danger?: boolean;
  ariaLabel?: string;
}) {
  const body = (
    <>
      {lead}
      <span className="row-text">
        <span className="row-title">{title}</span>
        {subtitle && <span className="row-sub">{subtitle}</span>}
      </span>
      {value !== undefined && <span className="row-value">{value}</span>}
      {chevron && (
        <span className="row-chevron">
          <Icon name={href ? 'external' : 'right'} size={href ? 16 : 18} />
        </span>
      )}
    </>
  );
  const cls = `row-item${danger ? ' danger' : ''}`;
  if (to)
    return (
      <Link to={to} className={cls} aria-label={ariaLabel}>
        {body}
      </Link>
    );
  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls} aria-label={ariaLabel}>
        {body}
      </a>
    );
  if (onClick)
    return (
      <button type="button" className={cls} onClick={onClick} aria-label={ariaLabel}>
        {body}
      </button>
    );
  return <div className={cls}>{body}</div>;
}

/** Width (px) of the revealed delete action. */
const ACTION_W = 88;

/**
 * A row that slides left to reveal a Delete action (and deletes on a long swipe), like iOS Mail.
 * The action is a real button after the content, so keyboard and screen-reader users reach it with Tab: focusing it
 * opens the row.
 */
export function SwipeRow({ children, onDelete, deleteLabel }: { children: ReactNode; onDelete: () => void; deleteLabel: string }) {
  const [x, setX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const g = useRef<{ x0: number; y0: number; base: number; axis: 'x' | 'y' | null; width: number } | null>(null);
  const moved = useRef(false);

  const down = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    g.current = { x0: e.clientX, y0: e.clientY, base: x, axis: null, width: e.currentTarget.offsetWidth };
    moved.current = false;
  };
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const s = g.current;
    if (!s) return;
    // A row slides towards the start of the line, which is the other way in right-to-left.
    const dx = (e.clientX - s.x0) * (isRtl() ? -1 : 1);
    const dy = e.clientY - s.y0;
    if (!s.axis) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      s.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (s.axis === 'x') {
        e.currentTarget.setPointerCapture(e.pointerId);
        setDragging(true);
      }
    }
    if (s.axis !== 'x') return;
    moved.current = true;
    setX(Math.min(0, Math.max(-s.width, s.base + dx)));
  };
  const up = () => {
    const s = g.current;
    g.current = null;
    setDragging(false);
    if (!s || s.axis !== 'x') return;
    if (x < -s.width * 0.6) {
      haptic('success');
      onDelete();
      setX(0);
    } else setX(x < -ACTION_W / 2 ? -ACTION_W : 0);
  };

  return (
    <div className="swipe">
      <div
        className={`swipe-content${dragging ? ' dragging' : ''}`}
        style={{ transform: x ? `translateX(${isRtl() ? -x : x}px)` : undefined }}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        onClickCapture={(e) => {
          // A drag (or a tap on an open row) shouldn't also follow a link inside the row.
          if (moved.current || x !== 0) {
            e.preventDefault();
            e.stopPropagation();
            if (!moved.current) setX(0);
          }
          moved.current = false;
        }}
      >
        {children}
      </div>
      <button
        type="button"
        className="swipe-action"
        aria-label={deleteLabel}
        onFocus={() => setX(-ACTION_W)}
        onBlur={() => setX(0)}
        onClick={() => {
          haptic('success');
          onDelete();
          setX(0);
        }}
      >
        <Icon name="trash" size={20} />
        <span>{t('Delete')}</span>
      </button>
    </div>
  );
}

/** A small ⓘ button that opens a sheet with the longer explanation, so screens can stay short. */
export function InfoButton({ title, children, label }: { title: string; children: ReactNode; label?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className="icon-btn sm" aria-label={label ?? t('About: {title}', { title })} onClick={() => setOpen(true)}>
        <Icon name="info" size={18} />
      </button>
      {open && (
        <Sheet title={title} onClose={() => setOpen(false)}>
          <div className="prose small-prose">{children}</div>
        </Sheet>
      )}
    </>
  );
}

/** A horizontally scrolling, snapping row (carousel). */
export function Carousel({ children, label, wide = false }: { children: ReactNode; label?: string; wide?: boolean }) {
  return (
    <div className={`carousel${wide ? ' wide' : ''}`} role={label ? 'group' : undefined} aria-label={label}>
      {children}
    </div>
  );
}
