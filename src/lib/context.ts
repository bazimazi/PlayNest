import type { Activity, Season, Setting, Weather } from '../data/types';
import type { Climate } from '../store/model';
import { t } from '../i18n';

/**
 * What the parent can tell the app about right now. Everything here is tapped by the parent or worked out from the
 * clock: no location, no weather service, nothing leaves the phone.
 */
export const WEATHER_INFO: Record<Weather, { label: string; emoji: string; reason: string }> = {
  rainy: { label: t('Rainy'), emoji: '🌧️', reason: t('Made for a rainy day') },
  stormy: { label: t('Stormy'), emoji: '⛈️', reason: t('Good indoors while the storm passes') },
  hot: { label: t('Very hot'), emoji: '🌞', reason: t('A way to play and stay cool') },
  snowy: { label: t('Snowy'), emoji: '❄️', reason: t('Good for a snowy day') },
  windy: { label: t('Windy'), emoji: '🍃', reason: t('Good on a windy day') },
  smoky: { label: t('Smoky air'), emoji: '🌫️', reason: t('Burns off energy indoors') },
  powercut: { label: t('Power cut'), emoji: '🔦', reason: t('Works with the lights out') },
};

const outdoorsOnly = (a: Activity) => a.settings.includes('outdoor') && !a.settings.some((s) => s === 'indoor' || s === 'anywhere' || s === 'bath');

/**
 * Weather can make an idea unsafe, not just unsuitable, so these are taken out of suggestions altogether:
 *  - in a storm, no water play (lightning can travel through plumbing) and nothing that has to be outside;
 *  - on smoky days, nothing that has to be outside and no real flames;
 *  - in a power cut, no real flames;
 *  - on very hot days, no active game that has to be outside.
 */
export function hiddenByWeather(a: Activity, weather: Weather | null | undefined): boolean {
  switch (weather) {
    case 'stormy':
      return a.settings.includes('bath') || !!a.tags?.includes('water') || outdoorsOnly(a);
    case 'smoky':
      return outdoorsOnly(a) || !!a.usesFlame;
    case 'powercut':
      return !!a.usesFlame;
    case 'hot':
      return outdoorsOnly(a) && a.energy === 'active';
    default:
      return false;
  }
}

/** True when this idea was written with that weather in mind. */
export function suitsWeather(a: Activity, weather: Weather): boolean {
  if (a.weather?.includes(weather)) return true;
  if (weather === 'rainy') return !!a.tags?.includes('rainy-day');
  if (weather === 'hot') return !!a.tags?.includes('hot-day');
  if (weather === 'snowy') return !!a.tags?.includes('snow-day');
  return false;
}

/** Meteorological seasons for the four-season climates. Elsewhere the app makes no guess at all. */
export function seasonFor(climate: Climate | null | undefined, now: Date): Season | null {
  if (climate !== 'temperate-north' && climate !== 'temperate-south') return null;
  const northern: Season[] = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  const season = northern[now.getMonth()];
  if (climate === 'temperate-north') return season;
  const opposite: Record<Season, Season> = { winter: 'summer', summer: 'winter', spring: 'autumn', autumn: 'spring' };
  return opposite[season];
}

export type DayPart = 'morning' | 'day' | 'evening' | 'night';

export function dayPart(now: Date): DayPart {
  const h = now.getHours();
  if (h >= 5 && h < 11) return 'morning';
  if (h >= 11 && h < 18) return 'day';
  if (h >= 18 && h < 22) return 'evening';
  return 'night';
}

/** A quick "where are we" answer from Today. */
export interface Situation {
  weather?: Weather | null;
  setting?: Setting | null;
  /** Upper limit in minutes. */
  maxMinutes?: number | null;
  noToys?: boolean;
}

export function matchesSituation(a: Activity, s: Situation | undefined): boolean {
  if (!s) return true;
  if (hiddenByWeather(a, s.weather)) return false;
  if (s.setting && !a.settings.includes(s.setting) && !a.settings.includes('anywhere')) return false;
  if (s.maxMinutes && a.durationMin > s.maxMinutes) return false;
  if (s.noToys && a.materialsLevel !== 'none') return false;
  return true;
}
