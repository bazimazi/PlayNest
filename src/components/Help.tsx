import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { chime, unlockAudio } from '../lib/audio';
import { countryName, countryOptions, emergencyLine, guessCountry, telHref } from '../lib/emergency';
import { canSpeak, speak, stopSpeaking, warmUpVoices } from '../lib/speech';
import { haptic, keepAwake } from '../platform';
import { actions, useStore } from '../store/store';
import { Icon } from './Icon';
import { Sheet } from './Sheet';
import { asciiDigits, localDigits, t } from '../i18n';

/** The way to help from any tab: one tap, always in the same place. */
export function HelpButton() {
  return (
    <Link to="/help" className="icon-btn glass help-btn" aria-label={t('Help right now')} onClick={() => haptic()}>
      <Icon name="lifebuoy" size={22} strokeWidth={2.4} />
    </Link>
  );
}

function useEmergencyLine() {
  const country = useStore((s) => s.settings.country);
  const own = useStore((s) => s.settings.emergencyNumber);
  return { country, line: emergencyLine(country ?? guessCountry(), own), guessed: !country };
}

/** Lets a parent say where they are, and enter their own number when the list is unsure. Used wherever a number shows. */
export function CountrySheet({ onClose }: { onClose: () => void }) {
  const country = useStore((s) => s.settings.country) ?? guessCountry() ?? '';
  const own = useStore((s) => s.settings.emergencyNumber) ?? '';
  const [code, setCode] = useState(country);
  const [number, setNumber] = useState(own);
  const options = countryOptions();
  return (
    <Sheet title={t('Where you are')} onClose={onClose}>
      {(close) => (
        <div className="stack-lg">
          <label className="field">
            <span className="label">{t('Country')}</span>
            <select className="big-input" value={code} onChange={(e) => setCode(e.target.value)}>
              <option value="">{t('Choose a country')}</option>
              {options.map((o) => (
                <option key={o.code} value={o.code}>
                  {o.name}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span className="label">{t('Your own emergency number (optional)')}</span>
            <input
              className={`big-input${number ? ' ltr' : ''}`}
              inputMode="tel"
              value={localDigits(number)}
              placeholder={t('Leave blank to use the list')}
              onChange={(e) => setNumber(asciiDigits(e.target.value).replace(/[^+0-9 ]/g, ''))}
            />
          </label>
          <p className="footnote">{t('Saved only on this phone. Check your number now, while things are calm.')}</p>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => {
              actions.setSettings({ country: code || null, emergencyNumber: number.trim() || null });
              close();
            }}
          >
            {t('Save')}
          </button>
        </div>
      )}
    </Sheet>
  );
}

/** The call button. Big, in thumb reach, and honest when the number needs checking or isn't known. */
export function CallButton({ label = t('Call') }: { label?: string }) {
  const { line, guessed } = useEmergencyLine();
  const [editing, setEditing] = useState(false);
  return (
    <>
      {line.number ? (
        <a className="btn btn-call btn-lg btn-block" href={telHref(line.number)} onClick={() => haptic('success')}>
          <Icon name="phone" size={22} strokeWidth={2.6} />{' '}
          {/* One flex item, as a single run of text would be: the button puts a gap between its children. */}
          <span>
            {label} <span className="ltr">{localDigits(line.number)}</span>
          </span>
        </a>
      ) : (
        <button type="button" className="btn btn-call btn-lg btn-block" onClick={() => setEditing(true)}>
          <Icon name="phone" size={22} strokeWidth={2.6} /> {t('Set your emergency number')}
        </button>
      )}
      {line.number && (line.checkLocally || guessed) && (
        <p className="call-note">
          {line.checkLocally ? t('Sources differed on this number. Please check it for where you are.') : t('Is this right for where you are?')}{' '}
          <button type="button" className="link-btn" onClick={() => setEditing(true)}>
            {t('Change')}
          </button>
        </p>
      )}
      {editing && <CountrySheet onClose={() => setEditing(false)} />}
    </>
  );
}

/** Other services, for a country with separate numbers: fire, police and so on. */
export function OtherNumbers() {
  const { line } = useEmergencyLine();
  if (!line.others.length) return null;
  return (
    <p className="other-numbers">
      {line.others.map((o) => (
        <a key={o.label} href={telHref(o.number)}>
          {o.label} <span className="ltr">{localDigits(o.number)}</span>
        </a>
      ))}
    </p>
  );
}

export function CountryRow() {
  const country = useStore((s) => s.settings.country) ?? guessCountry();
  const [editing, setEditing] = useState(false);
  return (
    <>
      <button type="button" className="link-btn country-row" onClick={() => setEditing(true)}>
        <Icon name="edit" size={16} strokeWidth={2.4} /> {country ? countryName(country) : t('Choose your country')}
      </button>
      {editing && <CountrySheet onClose={() => setEditing(false)} />}
    </>
  );
}

/** Turns the screen very dim, for reading or soothing in the dark. Stays on until turned off. */
export function BedsideToggle() {
  const bedside = useStore((s) => s.settings.bedside);
  return (
    <button
      type="button"
      className="icon-btn glass"
      aria-pressed={bedside}
      aria-label={bedside ? t('Turn off the dim night screen') : t('Dim the screen for night')}
      onClick={() => {
        haptic();
        actions.setSettings({ bedside: !bedside });
      }}
    >
      <Icon name="moon" size={20} strokeWidth={2.4} />
    </button>
  );
}

/** Late at night, a bright screen is the last thing anyone wants. Offered, not imposed. */
export function DimOffer() {
  const bedside = useStore((s) => s.settings.bedside);
  const hour = new Date().getHours();
  if (bedside || (hour >= 6 && hour < 20)) return null;
  return (
    <button type="button" className="btn btn-block dim-offer" onClick={() => actions.setSettings({ bedside: true })}>
      <Icon name="moon" size={18} strokeWidth={2.4} /> {t('Dark in there? Dim the screen')}
    </button>
  );
}

/** "Read it to me": for full hands. Leaves the words on screen, so it's never the only way in. */
export function ReadAloud({ texts, label = t('Read to me'), onItem }: { texts: string[]; label?: string; onItem?: (i: number) => void }) {
  const [on, setOn] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  useEffect(() => () => stopSpeaking(), []);
  useEffect(() => warmUpVoices(() => setUnavailable(false)), []);
  useEffect(() => {
    // New words on screen: stop reading the old ones.
    if (on) {
      stopSpeaking();
      setOn(false);
    }
    // Only when the words themselves change.
  }, [texts.join('|')]);
  if (!canSpeak()) return null;
  if (unavailable) return <p className="footnote">{t('This phone has no built-in voice for reading aloud.')}</p>;
  return (
    <button
      type="button"
      className={`btn read-aloud${on ? ' on' : ''}`}
      aria-pressed={on}
      onClick={() => {
        haptic();
        if (on) {
          stopSpeaking();
          setOn(false);
          return;
        }
        const started = speak(texts, { onItem, onEnd: () => setOn(false) });
        if (started) setOn(true);
        else setUnavailable(true);
      }}
    >
      <Icon name={on ? 'pause' : 'speaker'} size={18} strokeWidth={2.6} /> {on ? t('Stop reading') : label}
    </button>
  );
}

const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

/**
 * A countdown the parent starts. Works from the clock rather than counting ticks, so it stays right after the phone
 * sleeps, and keeps the screen on while it runs.
 */
export function Countdown({ minutes, label, doneText = t('Time’s up.') }: { minutes: number; label: string; doneText?: string }) {
  const [endAt, setEndAt] = useState<number | null>(null);
  const [left, setLeft] = useState(minutes * 60);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (endAt === null) return;
    const release = keepAwake();
    const tick = () => {
      const s = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
      setLeft(s);
      if (s === 0) {
        haptic('success');
        chime();
        setEndAt(null);
        setFinished(true);
      }
    };
    tick();
    const t = window.setInterval(tick, 500);
    document.addEventListener('visibilitychange', tick);
    return () => {
      window.clearInterval(t);
      document.removeEventListener('visibilitychange', tick);
      release();
    };
  }, [endAt]);

  if (endAt === null) {
    return (
      <>
        {finished && (
          <p className="countdown-done" role="status">
            <b>{doneText}</b>
          </p>
        )}
      <button
        type="button"
        className="btn btn-block"
        onClick={() => {
          haptic();
          unlockAudio(); // Browsers only allow the chime later if sound was started from a tap.
          setFinished(false);
          setLeft(minutes * 60);
          setEndAt(Date.now() + minutes * 60_000);
        }}
      >
        <Icon name="timer" size={20} strokeWidth={2.4} /> {label} · {t('{n} min', { n: minutes })}
      </button>
      </>
    );
  }
  return (
    <div className="countdown" role="timer" aria-live="off">
      <b>{localDigits(mmss(left))}</b>
      <button type="button" className="link-btn" onClick={() => setEndAt(null)}>
        {t('Stop timer')}
      </button>
    </div>
  );
}

/** While a clinician hasn't signed off the safety content, say so wherever it appears. */
export const CLINICALLY_REVIEWED = false;

export function ReviewNote() {
  if (CLINICALLY_REVIEWED) return null;
  return <p className="footnote review-note">{t('Written from the published guidance listed here. Not yet reviewed by a clinician.')}</p>;
}
