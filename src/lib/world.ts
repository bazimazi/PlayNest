import type { Domain } from '../data/types';
import type { Mood } from '../store/model';

/**
 * Every screen lives in a colour "world". The tokens for each one are in app.css (`[data-world='…']`), so setting the
 * attribute recolours the header, the page paper, the tab indicator and the browser's status bar in one move.
 */
export type World = 'sun' | 'sky' | 'coral' | 'leaf' | 'lilac' | 'dusk' | 'night';

export const DOMAIN_WORLD: Record<Domain, World> = {
  movement: 'coral',
  hands: 'sun',
  language: 'sky',
  thinking: 'lilac',
  feelings: 'dusk',
  senses: 'sky',
  imagination: 'leaf',
  selfcontrol: 'lilac',
};

/** Choosing how the child is feeling changes the sky over Today. */
export const MOOD_WORLD: Record<Mood, World> = {
  happy: 'sun',
  energetic: 'coral',
  fussy: 'lilac',
  sleepy: 'night',
};

/** Before a mood is picked, Today follows the actual sky outside. */
export function timeWorld(now: Date): World {
  const h = now.getHours();
  if (h >= 5 && h < 11) return 'sun';
  if (h >= 11 && h < 17) return 'sky';
  if (h >= 17 && h < 21) return 'dusk';
  return 'night';
}

/** Applies a world to the page and matches the phone's status bar to it. */
export function applyWorld(world: World) {
  const root = document.documentElement;
  root.dataset.world = world;
  syncThemeColor();
}

export function syncThemeColor() {
  const color = getComputedStyle(document.documentElement).getPropertyValue('--w').trim();
  if (color) document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
}
