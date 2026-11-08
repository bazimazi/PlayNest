import { useCallback, useEffect, useRef, useState, type PointerEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from './Icon';
import { t } from '../i18n';

/** How long the closing slide takes (ms); keep in sync with `.sheet.closing` in app.css. */
const CLOSE_MS = 220;
/** Dragging the sheet down this far (px), or flicking it, dismisses it. */
const DISMISS_PX = 110;
const DISMISS_VELOCITY = 0.6;

/** Keeps Tab inside a dialog: the page behind it is out of reach while it's open. Call from a keydown handler. */
export function keepTabInside(e: KeyboardEvent, box: HTMLElement | null): void {
  if (e.key !== 'Tab' || !box) return;
  const items = box.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])');
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  const active = document.activeElement;
  if (e.shiftKey && (active === first || active === box || !box.contains(active))) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && (active === last || !box.contains(active))) {
    e.preventDefault();
    first.focus();
  }
}

/**
 * Accessible bottom sheet. Slides up; closes on the backdrop, Escape, the close button, or by dragging the grip or
 * header downwards. Restores focus to whatever opened it.
 *
 * A button inside that finishes the task (Save, Keep this) should close through the function passed to `children`, so
 * the sheet slides away like every other way of closing it rather than vanishing.
 */
export function Sheet({
  title,
  onClose,
  children,
  hideTitle = false,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode | ((close: () => void) => ReactNode);
  /** Keep the title for assistive technology only (e.g. when the content has its own big heading). */
  hideTitle?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [closing, setClosing] = useState(false);
  const [dragY, setDragY] = useState(0);
  const drag = useRef<{ y: number; t: number } | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  // Read while rendering, before anything inside (an autoFocus field) can take the focus, so it really is the opener.
  const [opener] = useState(() => document.activeElement as HTMLElement | null);
  const closed = useRef(false);

  const close = useCallback(() => {
    if (closed.current) return; // Escape and a tap on the backdrop together still close it once
    closed.current = true;
    setClosing(true);
    window.setTimeout(() => onCloseRef.current(), CLOSE_MS);
  }, []);

  useEffect(() => {
    // A field inside that asked for the focus keeps it; otherwise the sheet itself takes it.
    if (!ref.current?.contains(document.activeElement)) ref.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      keepTabInside(e, ref.current);
    };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      if (opener?.isConnected) opener.focus();
    };
  }, [close, opener]);

  const onPointerDown = (e: PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    drag.current = { y: e.clientY, t: performance.now() };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: PointerEvent) => {
    if (drag.current) setDragY(Math.max(0, e.clientY - drag.current.y));
  };
  const onPointerUp = (e: PointerEvent) => {
    const start = drag.current;
    drag.current = null;
    if (!start) return;
    const dy = e.clientY - start.y;
    const velocity = dy / Math.max(1, performance.now() - start.t);
    if (dy > DISMISS_PX || velocity > DISMISS_VELOCITY) close();
    else setDragY(0);
  };

  return createPortal(
    <div className={`sheet-backdrop${closing ? ' closing' : ''}`} onClick={close}>
      <div
        className={`sheet${closing ? ' closing' : ''}${dragY ? ' dragging' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        ref={ref}
        style={dragY ? { transform: `translateY(${dragY}px)` } : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="sheet-handle"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            drag.current = null;
            setDragY(0);
          }}
        >
          <div className="sheet-grip" />
          <div className="sheet-head">
            <h2 className={hideTitle ? 'sr-only' : undefined}>{title}</h2>
            <button type="button" className="icon-btn filled" onClick={close} aria-label={t('Close')}>
              <Icon name="x" size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
        <div className="sheet-body">{typeof children === 'function' ? children(close) : children}</div>
      </div>
    </div>,
    document.body,
  );
}
