import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Confetti } from '../components/Confetti';
import { burst } from '../lib/motion';
import { Emoji } from '../components/Emoji';
import { Icon } from '../components/Icon';
import { useWorld } from '../components/Page';
import { Pip } from '../components/Pip';
import { speak, stopSpeaking } from '../lib/speech';
import { haptic, keepAwake } from '../platform';
import { useActiveChild } from '../store/hooks';
import { useStore } from '../store/store';
import { localDigits, num, t } from '../i18n';

const HOLD_MS = 3000;

function randomSum(hard: boolean) {
  const a = (hard ? 6 : 3) + Math.floor(Math.random() * 6);
  const b = (hard ? 6 : 3) + Math.floor(Math.random() * 6);
  const answer = hard ? a * b : a + b;
  const choices = new Set([answer]);
  while (choices.size < 4) choices.add(Math.max(1, answer + Math.floor(Math.random() * 13) - 6));
  return { text: hard ? `${a} × ${b}` : `${a} + ${b}`, answer, choices: [...choices].sort((x, y) => x - y) };
}

/**
 * The way out: hold the lock for three seconds, then answer a sum. It stops accidental exits, and is honest about that:
 * it can't stop a child leaving the app altogether. Guided Access or screen pinning does that.
 */
function ParentGate({ hard, onExit }: { hard: boolean; onExit: () => void }) {
  const [holding, setHolding] = useState(false);
  const [sum, setSum] = useState<ReturnType<typeof randomSum> | null>(null);
  const timer = useRef<number | undefined>(undefined);

  const stop = (e?: { isPrimary?: boolean }) => {
    if (e && e.isPrimary === false) return;
    window.clearTimeout(timer.current);
    setHolding(false);
  };
  useEffect(() => () => window.clearTimeout(timer.current), []);

  if (sum) {
    return (
      <div className="kid-gate" role="dialog" aria-label={t('Grown-ups only')}>
        <p className="kid-gate-q">{t('Grown-ups: what is {sum}?', { sum: localDigits(sum.text) })}</p>
        <div className="kid-gate-answers">
          {sum.choices.map((c, i) => (
            <button
              key={c}
              type="button"
              className="btn btn-lg"
              autoFocus={i === 0}
              onClick={() => {
                if (c === sum.answer) onExit();
                else setSum(null);
              }}
            >
              {num(c)}
            </button>
          ))}
        </div>
        <p className="footnote">
          {t('This stops accidental exits. To lock the phone to PlayNest, turn on Guided Access (iPhone) or screen pinning (Android) in your phone’s settings.')}
        </p>
        <button type="button" className="link-btn" onClick={() => setSum(null)}>
          {t('Back to the routine')}
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`kid-lock${holding ? ' holding' : ''}`}
      aria-label={t('Grown-ups: press and hold to leave')}
      onPointerDown={(e) => {
        if (!e.isPrimary) return;
        window.clearTimeout(timer.current);
        setHolding(true);
        timer.current = window.setTimeout(() => {
          setHolding(false);
          setSum(randomSum(hard));
        }, HOLD_MS);
      }}
      onPointerUp={stop}
      onPointerCancel={stop}
      onPointerLeave={stop}
      onContextMenu={(e) => e.preventDefault()}
      onKeyDown={(e) => {
        // Keyboard and switch users have no long press.
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setSum(randomSum(hard));
        }
      }}
    >
      <Icon name="lock" size={22} strokeWidth={2.4} />
    </button>
  );
}

/** Time left, as a colour that shrinks. Digits mean nothing to a three-year-old, and red would only worry them. */
function TimePie({ minutes, stepKey }: { minutes: number; stepKey: string }) {
  const [fraction, setFraction] = useState(1);
  useEffect(() => {
    const endAt = Date.now() + minutes * 60_000;
    const tick = () => setFraction(Math.max(0, (endAt - Date.now()) / (minutes * 60_000)));
    tick();
    const t = window.setInterval(tick, 500);
    return () => window.clearInterval(t);
  }, [minutes, stepKey]);
  return <span className="kid-pie" style={{ '--left': `${fraction * 360}deg` } as CSSProperties} role="img" aria-label={t('{n} minutes left', { n: Math.ceil(fraction * minutes) })} />;
}

/**
 * A child follows their routine: what's happening now, big, and what's next, small. Tap the picture when it's done.
 * Nothing here can fail: no score, no streak, no time pressure. No links out, no network, nothing to buy.
 */
export default function KidMode() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const routine = useStore((s) => s.routines.find((r) => r.id === id));
  const { child, age } = useActiveChild();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  useWorld('sun');

  useEffect(() => {
    const release = keepAwake();
    return () => {
      release();
      stopSpeaking();
    };
  }, []);

  // The back button or gesture stays in the routine: only the gate leads out. An extra history entry at the same address
  // gives Back somewhere harmless to go, and it's put back each time.
  const leaving = useRef(false);
  useEffect(() => {
    window.history.pushState(window.history.state, '', window.location.href);
    const stay = () => {
      if (!leaving.current) window.history.pushState(window.history.state, '', window.location.href);
    };
    window.addEventListener('popstate', stay);
    return () => window.removeEventListener('popstate', stay);
  }, []);
  const exit = () => {
    if (leaving.current) return;
    leaving.current = true;
    // Step off the extra entry first, then off kid mode's own, so Back from wherever we land can't open it again.
    const cameFromApp = location.key !== 'default';
    const offExtra = () => {
      window.removeEventListener('popstate', offExtra);
      if (cameFromApp) navigate(-1);
      else navigate('/routines', { replace: true });
    };
    window.addEventListener('popstate', offExtra);
    window.history.back();
  };
  const lastTap = useRef(0);
  // A child who can do sums shouldn't be able to answer the grown-ups' question.
  const hard = (age?.months ?? 0) >= 72;

  if (!routine || routine.steps.length === 0) {
    return (
      <div className="kid">
        <p>{t('That routine isn’t here any more.')}</p>
        <button type="button" className="btn btn-primary" onClick={exit}>
          {t('Back')}
        </button>
      </div>
    );
  }

  const now = routine.steps[step];
  const next = routine.steps[step + 1];

  const finishStep = (event?: { currentTarget: Element }) => {
    // A small hand can double-tap: one tap finishes one step.
    const tapped = Date.now();
    if (tapped - lastTap.current < 500) return;
    lastTap.current = tapped;
    haptic('success');
    burst(event?.currentTarget ?? null, 'stars', next ? 12 : 20, 2.2);
    if (next) {
      setStep(step + 1);
      speak([next.label]);
    } else {
      setDone(true);
      speak([t('All done!')]);
    }
  };

  if (done) {
    return (
      <div className="kid kid-done">
        <Confetti />
        <Pip mood="wow" size={180} />
        <div className="kid-top kid-done-top">
          <span />
          <ParentGate hard={hard} onExit={exit} />
        </div>
        <h1>{child ? t('All done, {name}!', { name: child.name }) : t('All done!')}</h1>
        <p className="kid-show">{t('Go and show a grown-up!')}</p>
      </div>
    );
  }

  return (
    <div className="kid" onContextMenu={(e) => e.preventDefault()}>
      <div className="kid-top">
        {step > 0 && (
          <button type="button" className="kid-back" aria-label={t('Back one step')} onClick={() => setStep(step - 1)}>
            <Icon name="left" size={24} strokeWidth={3} />
          </button>
        )}
        <div className="kid-pips" aria-hidden="true">
          {routine.steps.map((s, i) => (
            <i key={s.id} className={i < step ? 'done' : i === step ? 'on' : undefined} />
          ))}
        </div>
        <ParentGate hard={hard} onExit={exit} />
      </div>

      <button type="button" className="kid-now" onClick={finishStep} aria-label={t('{step}. Tap when done.', { step: now.label })}>
        <span key={`art${now.id}`} className="kid-now-in">
          <Emoji e={now.emoji} className="kid-now-art" eager />
        </span>
        <span key={`label${now.id}`} className="kid-now-label">{now.label}</span>
        {now.minutes && <TimePie minutes={now.minutes} stepKey={now.id} />}
        <span className="kid-tap">
          <Icon name="check" size={32} strokeWidth={3.4} />
        </span>
      </button>

      {next && (
        <div className="kid-next" aria-label={t('Next: {step}', { step: next.label })}>
          <span>{t('Next')}</span>
          <Emoji e={next.emoji} size={48} eager />
          <b>{next.label}</b>
        </div>
      )}
    </div>
  );
}
