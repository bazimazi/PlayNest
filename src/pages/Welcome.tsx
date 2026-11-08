import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Confetti } from '../components/Confetti';
import { AvatarPicker, EarlyFields, freshAvatar, InterestPicker, minBirthISO, todayISO } from '../components/ChildForm';
import { Emoji } from '../components/Emoji';
import { Icon } from '../components/Icon';
import { Link } from 'react-router-dom';
import { useWorld } from '../components/Page';
import { StorageBanner } from '../components/Status';
import { Pip, PipInNest, type PipMood } from '../components/Pip';
import { ACTIVITIES } from '../data/activities';
import { childAge } from '../lib/age';
import { isEligible } from '../lib/recommend';
import type { World } from '../lib/world';
import { haptic } from '../platform';
import { actions } from '../store/store';
import { DateField } from '../components/DateField';
import { LanguageSwitch } from '../components/LanguageSwitch';
import { t } from '../i18n';
import { rich } from '../i18n/rich';

const PROMISES = [
  { emoji: '🎯', text: t('The right game for their age and mood') },
  { emoji: '👀', text: t('Glance, then play. Phone down.') },
  { emoji: '🔒', text: t('No account. Stays on this phone.') },
];

type Step = 'intro' | 'name' | 'birth' | 'buddy';
const STEPS: Step[] = ['name', 'birth', 'buddy'];
const STEP_WORLD: Record<Step, World> = { intro: 'sky', name: 'sky', birth: 'dusk', buddy: 'leaf' };
const STEP_PIP: Record<Step, PipMood> = { intro: 'happy', name: 'wow', birth: 'happy', buddy: 'energetic' };

export default function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [early, setEarly] = useState(false);
  const [weeks, setWeeks] = useState(4);
  const [error, setError] = useState<string | null>(null);
  const [restoreError, setRestoreError] = useState<string | null>(null);
  const [interests, setInterests] = useState<string[]>([]);
  const restoreInput = useRef<HTMLInputElement>(null);
  const start = useRef(freshAvatar([]));
  const [emoji, setEmoji] = useState(start.current.emoji);
  const [color, setColor] = useState(start.current.color);
  const finishing = useRef(false);
  const today = todayISO();

  // Each step is a history entry, so the phone's Back goes back a step rather than out of the app part way through.
  const asked = (location.state as { step?: Step } | null)?.step ?? 'intro';
  // A step whose answers were lost (the page reloaded part way) goes back to where they're asked for.
  const birthOk = !!birthDate && birthDate <= today && birthDate >= minBirthISO();
  const step: Step = asked === 'intro' || asked === 'name' ? asked : !name.trim() ? 'name' : asked === 'buddy' && !birthOk ? 'birth' : asked;
  useWorld(STEP_WORLD[step]);

  // Finishing steps back to the first screen's entry, then puts Today in its place (below), so Back from Today leaves
  // the app instead of reopening a finished welcome.
  useEffect(() => {
    if (finishing.current && step === 'intro') navigate('/', { replace: true });
  }, [step, navigate]);
  // An explanation belongs to the step it was given on, however that step was left.
  useEffect(() => setError(null), [step]);

  const roundedCount = Math.floor(ACTIVITIES.length / 50) * 50;
  const age = birthDate && birthDate <= today ? childAge(birthDate, early ? weeks : 0) : null;
  const ready = useMemo(() => (age ? ACTIVITIES.filter((a) => isEligible(a, age.months)).length : 0), [age]);
  const shownName = name.trim() || t('your little one');

  const browse = () => {
    actions.finishOnboarding();
    navigate('/explore', { replace: true });
  };

  const goTo = (s: Step) => {
    setError(null);
    haptic();
    navigate('/welcome', { state: { step: s } });
  };

  /** Explains what's missing and puts the cursor where it's needed. */
  const problem = (text: string, field: string) => {
    setError(text);
    document.getElementById(field)?.focus();
  };

  const onName = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return problem(t('What should we call them? A nickname is fine.'), 'child-name');
    goTo('birth');
  };

  const onBirth = (e: FormEvent) => {
    e.preventDefault();
    if (!birthDate) return problem(t('Please add a birthday, so the games fit their age.'), 'child-birth');
    if (birthDate > today) return problem(t('The birthday can’t be in the future.'), 'child-birth');
    if (birthDate < minBirthISO()) return problem(t('Please check the year. PlayNest is for children up to 12.'), 'child-birth');
    goTo('buddy');
  };

  const finish = (e: FormEvent) => {
    e.preventDefault();
    if (finishing.current) return;
    haptic('success');
    actions.addChild({ name: name.trim(), birthDate, weeksEarly: early ? weeks : 0, emoji, color, interests });
    const above = STEPS.indexOf(step) + 1;
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
    if (idx >= above) {
      finishing.current = true;
      window.history.go(-above);
    } else navigate('/', { replace: true });
  };

  if (finishing.current) return null; // on the way to Today

  if (step === 'intro') {
    return (
      <div className="app no-tabs welcome-app">
        <StorageBanner />
        <main className="welcome">
          <div className="welcome-scene">
            <svg className="welcome-hills" viewBox="0 0 390 170" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <path d="M0 96C70 56 150 60 216 96S330 110 390 72V170H0Z" fill="var(--w-2)" />
              <path d="M0 136C110 100 260 104 390 132V170H0Z" fill="rgb(58 30 96 / 10%)" />
              <path d="M0 132C110 96 260 100 390 128V170H0Z" fill="var(--w-3)" />
            </svg>
            <span className="welcome-sun" aria-hidden="true" />
            {/* i18n-ignore */}
            <svg className="welcome-sky d-drift" viewBox="0 0 390 355" preserveAspectRatio="xMidYMin slice" aria-hidden="true" focusable="false">
              <path d="M26 88c-9 0-16-6-16-13 0-6 5-11 11-12 2-8 10-13 18-11 4-5 12-6 18-2 5 3 7 8 7 13 7 0 13 6 13 13s-7 12-14 12z" fill="var(--w-cloud)" transform="translate(84 -8) scale(0.8)" />
            </svg>
            {/* i18n-ignore */}
            <svg className="welcome-sky d-drift slow" viewBox="0 0 390 355" preserveAspectRatio="xMidYMin slice" aria-hidden="true" focusable="false">
              <path d="M26 88c-9 0-16-6-16-13 0-6 5-11 11-12 2-8 10-13 18-11 4-5 12-6 18-2 5 3 7 8 7 13 7 0 13 6 13 13s-7 12-14 12z" fill="var(--w-cloud)" transform="translate(286 148) scale(0.74)" />
            </svg>
            {/* i18n-ignore */}
            <svg className="welcome-sky d-birds" viewBox="0 0 390 355" preserveAspectRatio="xMidYMin slice" aria-hidden="true" focusable="false">
              <g fill="none" stroke="var(--w-ink)" strokeOpacity={0.5} strokeWidth={2} strokeLinecap="round">
                <path d="M0 40q4-5 8 0q4-5 8 0" />
                <path d="M22 50q3-4 6 0q3-4 6 0" />
              </g>
            </svg>
            <span className="float f1" aria-hidden="true">
              <Emoji e="🧸" eager />
            </span>
            <span className="float f2" aria-hidden="true">
              <Emoji e="🎨" eager />
            </span>
            <span className="float f3" aria-hidden="true">
              <Emoji e="🎵" eager />
            </span>
            <span className="float f4" aria-hidden="true">
              <Emoji e="🦋" eager />
            </span>
            <PipInNest size={168} hatch />
          </div>
          <div className="welcome-sheet">
            <LanguageSwitch quiet />
            <h1>{rich('Play together.<br/>Grow together.', { br: <br /> })}</h1>
            <p className="welcome-sub">
              {roundedCount > 0
                ? t('{n}+ research-backed games, birth to 12 years', { n: roundedCount })
                : t('{n} research-backed games, birth to 12 years', { n: ACTIVITIES.length })}
            </p>
            <ul className="promises" aria-label={t('What PlayNest does')}>
              {PROMISES.map((p) => (
                <li key={p.text}>
                  <Emoji e={p.emoji} size={26} eager />
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
            <div className="welcome-actions">
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => goTo('name')}>
                {t('Get started')} <Icon name="right" strokeWidth={3} />
              </button>
              <button type="button" className="btn btn-ghost btn-block" onClick={browse}>
                {t('Just browse for now')}
              </button>
              <button type="button" className="link-btn welcome-restore" onClick={() => restoreInput.current?.click()}>
                {t('Restore from a backup')}
              </button>
              <Link to="/help" className="link-btn welcome-restore">
                {t('Need help right now?')}
              </Link>
              <input
                ref={restoreInput}
                type="file"
                accept=".txt,.json,text/plain,application/json"
                hidden
                aria-label={t('Backup file')}
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  e.target.value = '';
                  if (!f) return;
                  void f.text().then((text) => {
                    try {
                      if (actions.importState(JSON.parse(text))) {
                        navigate('/', { replace: true });
                        return;
                      }
                    } catch {
                      /* not JSON: handled below */
                    }
                    setRestoreError(t('That file doesn’t look like a PlayNest backup.'));
                  });
                }}
              />
              {restoreError && (
                <p role="alert" className="form-error">
                  {restoreError}
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  const index = STEPS.indexOf(step);
  const back = () => {
    setError(null);
    haptic();
    // The entry underneath is the step before, the same place the phone's own Back goes.
    if (location.key !== 'default') navigate(-1);
    else navigate('/welcome', { replace: true, state: { step: index === 0 ? 'intro' : STEPS[index - 1] } });
  };

  return (
    <div className="app no-tabs welcome-app">
      <main className="meet" key={step}>
        {step === 'buddy' && <Confetti pieces={60} />}
        <header className="meet-top">
          <button type="button" className="nav-back" aria-label={t('Back')} onClick={back}>
            <Icon name="left" size={24} strokeWidth={2.6} />
          </button>
          <span className="meet-dots" aria-label={t('Step {step} of {total}', { step: index + 1, total: STEPS.length })} role="img">
            {STEPS.map((s, i) => (
              <i key={s} className={i <= index ? 'on' : undefined} />
            ))}
          </span>
          <span className="meet-spacer" />
        </header>

        <svg className="meet-hills" viewBox="0 0 390 150" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M0 76C70 40 150 44 216 78S330 92 390 56V150H0Z" fill="var(--w-2)" />
          <path d="M0 116C110 82 260 86 390 112V150H0Z" fill="rgb(58 30 96 / 10%)" />
          <path d="M0 112C110 78 260 82 390 108V150H0Z" fill="var(--w-3)" />
        </svg>

        <div className="meet-pip">
          <Pip mood={STEP_PIP[step]} size={112} />
        </div>

        {step === 'name' && (
          <form className="meet-card" onSubmit={onName} noValidate>
            <h1>{t('Hi, I’m Pip! Who are we playing with?')}</h1>
            <label className="sr-only" htmlFor="child-name">
              {t('Your child’s name or nickname')}
            </label>
            <input
              id="child-name"
              className="big-input"
              value={name}
              maxLength={30}
              autoComplete="off"
              autoFocus
              aria-invalid={!!error}
              aria-describedby={error ? 'meet-error' : undefined}
              placeholder={t('Name or nickname')}
              onChange={(e) => {
                setName(e.target.value);
                setError(null);
              }}
            />
            <p className="meet-note">{t('You can add brothers and sisters later.')}</p>
            {error && (
              <p role="alert" id="meet-error" className="form-error">
                {error}
              </p>
            )}
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              {t('Next')} <Icon name="right" strokeWidth={3} />
            </button>
          </form>
        )}

        {step === 'birth' && (
          <form className="meet-card" onSubmit={onBirth} noValidate>
            <h1>{t('When was {name} born?', { name: shownName })}</h1>
            <label className="sr-only" htmlFor="child-birth">
              {t('Birthday')}
            </label>
            <DateField
              id="child-birth"
              className="big-input"
              value={birthDate}
              min={minBirthISO()}
              max={today}
              onChange={(iso) => {
                setBirthDate(iso);
                setError(null);
              }}
            />
            <div className="group form-group">
              <EarlyFields early={early} weeks={weeks} onEarly={setEarly} onWeeks={setWeeks} />
            </div>
            {age && (
              <p className="meet-found">
                <Emoji e="🎉" size={24} />
                <span>
                  <b>{t('{age} old!', { age: age.label })}</b>
                  {age.correctedLabel && <> {t('Corrected age {age}.', { age: age.correctedLabel })}</>} {t('{n} games are ready.', { n: ready })}
                </span>
              </p>
            )}
            {error && (
              <p role="alert" id="meet-error" className="form-error">
                {error}
              </p>
            )}
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              {t('Next')} <Icon name="right" strokeWidth={3} />
            </button>
          </form>
        )}

        {step === 'buddy' && (
          <form className="meet-card" onSubmit={finish} noValidate>
            <h1>{t('Pick a buddy for {name}', { name: shownName })}</h1>
            <span className={`avatar xl ${color} meet-avatar`} aria-hidden="true">
              <Emoji e={emoji} eager />
            </span>
            <AvatarPicker emoji={emoji} color={color} onEmoji={setEmoji} onColor={setColor} />
            {age && age.months >= 12 && <InterestPicker name={shownName} value={interests} onChange={setInterests} />}
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              {t('Start playing')} <Icon name="play" size={20} filled />
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
