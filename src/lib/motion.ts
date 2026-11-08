import { useEffect, useLayoutEffect, type RefObject } from 'react';
import { flushSync } from 'react-dom';
import type { NavigateFunction } from 'react-router-dom';

/**
 * Everything that moves from JavaScript asks here first. The switch is `data-motion` on the root (the device's reduced
 * motion setting or our own "Less movement"), and the night screen never moves at all.
 */
export function motionAllowed(): boolean {
  const root = document.documentElement;
  return root.dataset.motion !== 'less' && !root.dataset.mode;
}

const SHAPES = {
  hearts: '<path d="M12 21C5 15.5 2 12 2 8a5 5 0 0 1 10-1.4A5 5 0 0 1 22 8c0 4-3 7.5-10 13z"/>', // i18n-ignore
  stars: '<path d="M12 1.5l3 6.8 7.3.7-5.5 4.9 1.6 7.2L12 16.9 5.6 20.6l1.6-7.2L1.7 9l7.3-.7z"/>', // i18n-ignore
  notes: '<path d="M9 3l11-2v14.5a3.5 3 0 1 1-2.5-2.9V6L11 7.2v10.3a3.5 3 0 1 1-2-2.9z"/>', // i18n-ignore
  petals: '<path d="M12 2c5 4 7 8 7 12a7 7 0 0 1-14 0c0-4 2-8 7-12z"/>', // i18n-ignore
};
const COLOURS: Record<keyof typeof SHAPES, string[]> = {
  hearts: ['#ff6f91', '#ff8fab', '#e8386f', '#ffb3c6'],
  stars: ['#ffc93c', '#ffb020', '#ffe07a', '#ff9f6b'],
  notes: ['#7c6cf0', '#5db8f0', '#ff8fab', '#3fc5a8'],
  petals: ['#ff9fbb', '#ffc93c', '#b29dff', '#86d993'],
};

let layer: HTMLElement | null = null;
function fxLayer(): HTMLElement {
  if (!layer || !layer.isConnected) {
    layer = document.createElement('div');
    layer.className = 'fx-layer';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);
  }
  return layer;
}

/**
 * A little burst of hearts, stars, notes or petals from an element, for the moments that deserve one. It lives outside
 * the app's tree, so it survives the element that caused it. Each piece is one compositor-only animation.
 */
export function burst(from: Element | null | undefined, kind: keyof typeof SHAPES = 'stars', count = 8, reach = 1): void {
  if (!from || !motionAllowed() || typeof Element.prototype.animate !== 'function') return;
  const box = from.getBoundingClientRect();
  const x = box.left + box.width / 2;
  const y = box.top + box.height / 2;
  const host = fxLayer();
  const colours = COLOURS[kind];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('i');
    piece.className = 'fx';
    const size = 12 + Math.random() * 12;
    piece.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;color:${colours[i % colours.length]}`;
    piece.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor">${SHAPES[kind]}</svg>`; // i18n-ignore
    host.appendChild(piece);
    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.6;
    const dist = (38 + Math.random() * 44) * reach;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 18 * reach;
    const spin = (Math.random() - 0.5) * 200;
    const animation = piece.animate(
      [
        { transform: 'translate(-50%, -50%) scale(0.2)', opacity: 1 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1) rotate(${spin}deg)`, opacity: 1, offset: 0.55 },
        { transform: `translate(calc(-50% + ${dx * 1.1}px), calc(-50% + ${dy + 26}px)) scale(0.7) rotate(${spin * 1.3}deg)`, opacity: 0 },
      ],
      { duration: 620 + Math.random() * 260, easing: 'cubic-bezier(0.16, 0.84, 0.3, 1)' },
    );
    animation.onfinish = animation.oncancel = () => piece.remove();
  }
}

type WithTransition = Document & {
  startViewTransition?: (update: () => void | Promise<void>) => { ready: Promise<void>; finished: Promise<void> };
};

function run(update: () => void | Promise<void>, source?: HTMLElement | null, way: 'morph' | 'back' = 'morph') {
  const doc = document as WithTransition;
  const root = document.documentElement;
  root.dataset.vt = way;
  if (source) {
    // Tapping a related game on a game's page: only one picture may carry the name.
    document.querySelector<HTMLElement>('.detail-art')?.style.setProperty('view-transition-name', 'none');
    source.style.setProperty('view-transition-name', 'activity-art');
  }
  const transition = doc.startViewTransition!(async () => {
    if (source) source.style.removeProperty('view-transition-name');
    await update();
  });
  transition.ready.catch(() => undefined);
  const done = () => {
    delete root.dataset.vt;
    document.querySelectorAll<HTMLElement>('.tile-link .art, .detail-art').forEach((el) => el.style.removeProperty('view-transition-name'));
  };
  transition.finished.then(done, done);
}

const canMorph = () => !!(document as WithTransition).startViewTransition && motionAllowed();

/**
 * Tapping a game's picture carries that picture up into its page. Where view transitions aren't available (or movement
 * is turned down) this does nothing, and the link behaves as an ordinary link with the usual slide.
 */
export function morphToActivity(event: { currentTarget: Element; preventDefault: () => void; metaKey?: boolean; ctrlKey?: boolean; shiftKey?: boolean }, navigate: NavigateFunction, to: string): void {
  if (!canMorph() || event.metaKey || event.ctrlKey || event.shiftKey) return;
  const art = event.currentTarget.querySelector<HTMLElement>('.art');
  if (!art) return;
  event.preventDefault();
  run(() => flushSync(() => navigate(to)), art);
}

/** The way back: the picture settles into its tile again, if that tile is on the page we return to. */
export function morphBack(navigate: NavigateFunction, id: string): void {
  run(
    () =>
      new Promise<void>((resolve) => {
        const finish = () => {
          window.removeEventListener('popstate', arrived);
          window.clearTimeout(timer);
          // Let the router render first; the screen stays frozen on the old picture until this resolves.
          window.setTimeout(() => {
            // Back onto another game's page (from one of its related games): its own picture isn't the one landing, and
            // two pictures with one name would cancel the transition altogether.
            document.querySelector<HTMLElement>('.detail-art')?.style.setProperty('view-transition-name', 'none');
            document.querySelector<HTMLElement>(`.tile-link[data-id="${CSS.escape(id)}"] .art`)?.style.setProperty('view-transition-name', 'activity-art');
            resolve();
          }, 0);
        };
        const arrived = () => finish();
        const timer = window.setTimeout(finish, 400);
        window.addEventListener('popstate', arrived);
        navigate(-1);
      }),
    null,
    'back',
  );
}
export function backMorphAvailable(): boolean {
  return canMorph();
}
/** How long the app's background movement carries on after the last touch. */
const REST_AFTER_MS = 40000;

/**
 * A phone left on the table shouldn't keep animating: it costs battery, and a moving screen tugs at the eye. So the ambient
 * movement rests after a while with nothing touched, and picks up again at the next touch. Sounds and songs that are playing
 * aren't ambient, and don't rest.
 */
export function useAmbientRest(): void {
  useEffect(() => {
    const root = document.documentElement;
    let timer = 0;
    const wake = () => {
      if (root.hasAttribute('data-rest')) root.removeAttribute('data-rest');
      window.clearTimeout(timer);
      timer = window.setTimeout(() => root.setAttribute('data-rest', ''), REST_AFTER_MS);
    };
    const events = ['pointerdown', 'keydown', 'scroll', 'wheel'] as const;
    for (const e of events) window.addEventListener(e, wake, { passive: true, capture: true });
    wake();
    return () => {
      window.clearTimeout(timer);
      for (const e of events) window.removeEventListener(e, wake, { capture: true });
      root.removeAttribute('data-rest');
    };
  }, []);
}

let watcher: IntersectionObserver | null = null;
/** Stops the slow background movement of anything scrolled out of sight. */
export function useAmbient(ref: RefObject<Element | null>): void {
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    watcher ??= new IntersectionObserver((entries) => {
      for (const e of entries) e.target.toggleAttribute('data-off', !e.isIntersecting);
    });
    watcher.observe(el);
    return () => watcher?.unobserve(el);
  }, [ref]);
}

const REVEAL = '.tile, .guide-card, .collection, .nudge, .card, .group';
const RISE_MS = 1000;

/**
 * Cards rise gently as they first come into view, a few at a time. Nothing is ever hidden while it waits: an element only
 * gets the animation at the moment it arrives, and keeps nothing afterwards, so a long list holds no extra layers. Coming
 * back to a screen with Back shows it as it was left.
 */
export function useReveal(screen: string, quiet: boolean): void {
  useLayoutEffect(() => {
    if (!motionAllowed() || typeof IntersectionObserver === 'undefined') return;
    const host = document.getElementById('main');
    if (!host) return;
    let settled = !quiet;
    const seen = new WeakSet<Element>();
    // A card only "arrives" once it's clear of the floating tab bar. Peeking out beside the bar first, then vanishing to
    // rise in, would look like a flicker.
    const dock = document.querySelector('.tabbar');
    const hidden = dock ? Math.ceil(window.innerHeight - dock.getBoundingClientRect().top) : 0;
    const bottom = Math.max(hidden + 8, Math.round(window.innerHeight * 0.04));
    const io = new IntersectionObserver(
      (entries) => {
        let n = 0;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          if (!settled || !motionAllowed()) continue;
          const el = e.target as HTMLElement;
          const order = Math.min(n++, 7);
          el.style.setProperty('--rise-i', String(order));
          el.classList.add('rise');
          // By the clock, not animationend: those bubble up from anything animating inside the card.
          window.setTimeout(() => el.classList.remove('rise'), RISE_MS + order * 46);
        }
      },
      { rootMargin: `0px 0px -${bottom}px 0px` },
    );
    const scan = () => {
      host.querySelectorAll(REVEAL).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        io.observe(el);
      });
    };
    scan();
    const quietTimer = window.setTimeout(() => {
      settled = true;
    }, 240);
    // Screens fill in after they mount (lazy chunks, filters), so keep looking.
    let frame = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });
    mo.observe(host, { childList: true, subtree: true });
    return () => {
      window.clearTimeout(quietTimer);
      cancelAnimationFrame(frame);
      mo.disconnect();
      io.disconnect();
    };
    // Once per screen. `quiet` is how the screen was reached; a filter changed on it afterwards (a REPLACE) mustn't start
    // it over, or every card in view would vanish and rise in again.
  }, [screen]);
}
