import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Emoji } from '../components/Emoji';
import { BedsideToggle, DimOffer } from '../components/Help';
import { Icon } from '../components/Icon';
import { BackButton, Page, Section } from '../components/Page';
import { Segmented } from '../components/ui';
import { CRYING } from '../data/crying';
import { t, tc } from '../i18n';
import { NOISES, setNoiseEnd, startNoise, stopNoise, type NoiseKind } from '../lib/audio';
import { haptic, keepAwake } from '../platform';
import { actions, useStore } from '../store/store';

const TIMERS = [15, 30, 45, 60] as const;
const SEEN_KEY = 'playnest:sound-safety-seen';

function seenSafety(): boolean {
  try {
    return localStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
}

/**
 * Soft background noise. It starts at the quietest level, always has a timer and never starts on its own. A phone can't
 * measure how loud it is, so this screen makes no promise about loudness.
 */
export default function Sounds() {
  const level = useStore((s) => s.settings.soundLevel);
  const [kind, setKind] = useState<NoiseKind>('pink');
  const [minutes, setMinutes] = useState<(typeof TIMERS)[number]>(45);
  const [endAt, setEndAt] = useState<number | null>(null);
  const [left, setLeft] = useState(0);
  const [safetyOpen, setSafetyOpen] = useState(() => !seenSafety());

  const playing = endAt !== null;

  useEffect(() => {
    if (endAt === null) return;
    const release = keepAwake();
    const tick = () => {
      const remaining = endAt - Date.now();
      setLeft(Math.max(0, Math.ceil(remaining / 60000)));
      if (remaining <= 0) {
        stopNoise();
        setEndAt(null);
      }
    };
    tick();
    const t = window.setInterval(tick, 1000);
    document.addEventListener('visibilitychange', tick);
    return () => {
      window.clearInterval(t);
      document.removeEventListener('visibilitychange', tick);
      release();
    };
  }, [endAt]);

  // Leaving the screen stops the sound, so it can never be left on by accident.
  useEffect(() => () => stopNoise(), []);

  const play = (nextKind = kind, nextLevel = level) => {
    haptic();
    const end = Date.now() + minutes * 60_000;
    startNoise(nextKind, nextLevel, end, () => setEndAt(null));
    setEndAt(end);
  };

  return (
    <Page world="night" title={t('Sounds')} heading={t('Soothing sounds')} back={<BackButton fallback="/help" />} actions={<BedsideToggle />} className="sounds">
      <DimOffer />
      {safetyOpen && (
        <section className="safety-box" aria-label={t('Before you start')}>
          <b>
            <Icon name="shield" size={18} strokeWidth={2.6} /> {t('Before you start')}
          </b>
          <ul>
            {CRYING.soundSafety.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => {
              setSafetyOpen(false);
              try {
                localStorage.setItem(SEEN_KEY, '1');
              } catch {
                /* it just shows again next time */
              }
            }}
          >
            {t('Got it')}
          </button>
        </section>
      )}

      <Section title={t('Sound')} id="sound-title">
        <div className="noise-choices" role="group" aria-labelledby="sound-title">
          {(Object.keys(NOISES) as NoiseKind[]).map((k) => (
            <button
              key={k}
              type="button"
              className="noise"
              aria-pressed={kind === k}
              onClick={() => {
                setKind(k);
                if (playing) play(k);
              }}
            >
              <b>{NOISES[k].label}</b>
              <span>{NOISES[k].hint}</span>
            </button>
          ))}
        </div>
      </Section>

      <Section title={t('How loud')} id="loud-title">
        <Segmented
          label={t('How loud')}
          value={String(level) as '0' | '1' | '2'}
          options={[
            { value: '0', label: t('Quiet') },
            { value: '1', label: t('Medium') },
            { value: '2', label: t('Louder') },
          ]}
          onChange={(v) => {
            const next = Number(v) as 0 | 1 | 2;
            actions.setSettings({ soundLevel: next });
            if (playing) play(kind, next);
          }}
        />
        <p className="footnote">{t('Your phone’s volume matters too. Softer and shorter is better.')}</p>
      </Section>

      <Section title={t('For how long')} id="time-title">
        <div className="chips" role="group" aria-labelledby="time-title">
          {TIMERS.map((m) => (
            <button
              key={m}
              type="button"
              className="chip"
              aria-pressed={minutes === m}
              onClick={() => {
                setMinutes(m);
                if (playing) {
                  // Changing the time while it plays counts from now.
                  const end = Date.now() + m * 60_000;
                  setNoiseEnd(end);
                  setEndAt(end);
                }
              }}
            >
              {t('{n} min', { n: m })}
            </button>
          ))}
        </div>
      </Section>

      <div className="sound-action">
        {playing && (
          <div className="sound-orb" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}
        {playing ? (
          <button
            type="button"
            className="btn btn-lg btn-block"
            onClick={() => {
              haptic();
              stopNoise();
              setEndAt(null);
            }}
          >
            <Icon name="pause" size={20} filled /> {t('Stop · {n} min left', { n: left })}
          </button>
        ) : (
          <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => play()}>
            <Icon name="play" size={20} filled /> {tc('audio', 'Play')}
          </button>
        )}
        <p className="footnote">{t('Stays on while this screen is open. Some phones stop the timer if the screen locks, so check it’s off afterwards.')}</p>
      </div>

      <Link to="/songs?type=lullaby" className="nudge">
        <span className="nudge-art">
          <Emoji e="🌙" size={32} />
        </span>
        <span className="nudge-text">
          <b>{t('Sing instead?')}</b>
          <span>{t('Your voice works too. Lullabies to sing')}</span>
        </span>
        <Icon name="right" size={18} strokeWidth={3} />
      </Link>
    </Page>
  );
}
