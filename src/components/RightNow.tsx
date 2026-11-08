import { useState } from 'react';
import { SETTING_INFO } from '../data/domains';
import { WEATHERS, type Setting, type Weather } from '../data/types';
import { WEATHER_INFO, type Situation } from '../lib/context';
import { toISODate } from '../lib/dates';
import { Emoji } from './Emoji';
import { Icon } from './Icon';
import { t } from '../i18n';

const key = (childId: string, now: Date) => `playnest:situation:${childId}:${toISODate(now)}`;

/** Today's answer lasts for today: tomorrow may not be rainy. */
export function readSituation(childId: string, now: Date): Situation {
  try {
    return JSON.parse(sessionStorage.getItem(key(childId, now)) ?? '{}') as Situation;
  } catch {
    return {};
  }
}

export function writeSituation(childId: string, now: Date, situation: Situation) {
  try {
    sessionStorage.setItem(key(childId, now), JSON.stringify(situation));
  } catch {
    /* it simply won't survive a reload */
  }
}

const PLACES: Setting[] = ['outdoor', 'car', 'bath', 'mealtime', 'waiting', 'bedtime'];

/**
 * What's going on right now, one tap each. It changes the pick above, and says why. Weather can also take unsafe ideas
 * out altogether: in a storm, no water play. Nothing is looked up: no location, no weather service.
 */
export function RightNowChips({ value, onChange }: { value: Situation; onChange: (next: Situation) => void }) {
  const [moreOpen, setMoreOpen] = useState(!!value.weather && value.weather !== 'rainy' && value.weather !== 'hot');
  const toggleWeather = (w: Weather) => onChange({ ...value, weather: value.weather === w ? null : w });
  const togglePlace = (s: Setting) => onChange({ ...value, setting: value.setting === s ? null : s });

  const shownWeather: Weather[] = moreOpen ? [...WEATHERS] : ['rainy', 'hot'];

  return (
    <div className="right-now" role="group" aria-label={t('What’s going on right now')}>
      <div className="chips scroll">
        <button type="button" className="chip" aria-pressed={value.maxMinutes === 5} onClick={() => onChange({ ...value, maxMinutes: value.maxMinutes === 5 ? null : 5 })}>
          <Emoji e="⏱" size={20} /> {t('{n} min', { n: 5 })}
        </button>
        <button type="button" className="chip" aria-pressed={!!value.noToys} onClick={() => onChange({ ...value, noToys: !value.noToys })}>
          <Emoji e="🙌" size={20} /> {t('No toys')}
        </button>
        {PLACES.map((s) => (
          <button key={s} type="button" className="chip" aria-pressed={value.setting === s} onClick={() => togglePlace(s)}>
            <Emoji e={SETTING_INFO[s].emoji} size={20} /> {SETTING_INFO[s].label}
          </button>
        ))}
        {shownWeather.map((w) => (
          <button key={w} type="button" className="chip" aria-pressed={value.weather === w} onClick={() => toggleWeather(w)}>
            <Emoji e={WEATHER_INFO[w].emoji} size={20} /> {WEATHER_INFO[w].label}
          </button>
        ))}
        {!moreOpen && (
          <button type="button" className="chip" onClick={() => setMoreOpen(true)} aria-label={t('More kinds of weather')}>
            <Icon name="plus" size={16} strokeWidth={2.8} /> {t('Weather')}
          </button>
        )}
      </div>
    </div>
  );
}
