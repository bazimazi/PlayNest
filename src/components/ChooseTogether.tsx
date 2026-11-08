import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import type { Activity } from '../data/types';
import { motionAllowed } from '../lib/motion';
import { haptic } from '../platform';
import { ActivityArt } from './Art';
import { Icon } from './Icon';
import { keepTabInside } from './Sheet';
import { t } from '../i18n';

/** How long it takes to fade away (ms); keep in sync with `.choose.closing` in app.css. */
const CLOSE_MS = 160;

/**
 * You picked three, they pick one. Choosing gives a young child a real say, and it's all in pictures, so no reading is
 * needed. Handing the phone over for a moment is fine: there's nothing else on this screen to tap.
 */
export function ChooseTogether({ name, options, onClose }: { name: string; options: Activity[]; onClose: () => void }) {
  const box = useRef<HTMLDivElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  // It fades in, so it fades out too, rather than vanishing.
  const [closing, setClosing] = useState(false);
  const dismiss = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => onCloseRef.current(), motionAllowed() ? CLOSE_MS : 0);
  }, []);
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    close.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
      keepTabInside(e, box.current);
    };
    window.addEventListener('keydown', onKey);
    // It covers the whole screen, so the page behind mustn't scroll away underneath it.
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, []);
  return createPortal(
    <div ref={box} className={`choose${closing ? ' closing' : ''}`} role="dialog" aria-modal="true" aria-label={t('{name} chooses a game', { name })}>
      <div className="choose-top">
        <h2>{t('{name}, which one?', { name })}</h2>
        <button ref={close} type="button" className="icon-btn" aria-label={t('Close')} onClick={dismiss}>
          <Icon name="x" strokeWidth={2.8} />
        </button>
      </div>
      <div className="choose-options">
        {options.map((a) => (
          <Link key={a.id} to={`/play/${a.id}`} className="choose-option" onClick={() => haptic('success')}>
            <ActivityArt activity={a} className="choose-art" eager />
            <span className="choose-title">{a.title}</span>
          </Link>
        ))}
      </div>
    </div>,
    document.body,
  );
}
