import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ActivityArt } from '../components/Art';
import { burst } from '../lib/motion';
import { Avatar } from '../components/ChildSwitcher';
import { Confetti } from '../components/Confetti';
import { Emoji } from '../components/Emoji';
import { ReadAloud } from '../components/Help';
import { Icon } from '../components/Icon';
import { useWorld } from '../components/Page';
import { Flower } from '../components/PlayGarden';
import { toast } from '../components/Toast';
import { ACTIVITY_BY_ID } from '../data/activities';
import { DOMAIN_INFO } from '../data/domains';
import { startOfWeek, toISODate, weekdayIndex } from '../lib/dates';
import { nextTwist } from '../lib/recommend';
import { DOMAIN_WORLD } from '../lib/world';
import { haptic, keepAwake } from '../platform';
import { REACTIONS, type Reaction } from '../store/model';
import { actions, getState, selectActiveChild, useStore } from '../store/store';
import { isRtl, localDigits, t } from '../i18n';

function useElapsed(running: boolean): number {
  const [seconds, setSeconds] = useState(0);
  const banked = useRef(0);
  useEffect(() => {
    if (!running) return;
    const started = Date.now();
    const tick = () => setSeconds(banked.current + Math.floor((Date.now() - started) / 1000));
    const t = window.setInterval(tick, 1000);
    return () => {
      banked.current += Math.floor((Date.now() - started) / 1000);
      window.clearInterval(t);
    };
  }, [running]);
  return seconds;
}

const mmss = (s: number) => localDigits(`${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`);
/** Horizontal distance (px) that counts as a swipe between steps. */
const SWIPE = 60;

/** The flower this game just planted. It grows on screen, and opens with a little burst. */
function FinishBloom({ color, seed }: { color: string; seed: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = window.setTimeout(() => burst(ref.current, 'petals', 10, 1.2), 900);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <div className="finish-bloom" aria-hidden="true" ref={ref}>
      <svg viewBox="0 0 120 110" focusable="false">
        <ellipse cx={60} cy={102} rx={38} ry={7} fill="var(--soil)" />
        <Flower x={60} ground={102} h={70} color={color} seed={seed} headScale={2} />
      </svg>
    </div>
  );
}

export default function PlayMode() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const a = ACTIVITY_BY_ID.get(id);
  const children = useStore((s) => s.children);
  const active = useStore(selectActiveChild);
  const timesPlayed = useStore((s) => s.sessions.filter((x) => x.activityId === id && x.childId === active?.id).length);
  useWorld(a ? DOMAIN_WORLD[a.domains[0]] : 'coral');

  // Step -1 is "Before you start" (what you need + safety), shown only when there is something to prepare.
  const hasIntro = !!a && (a.materials.length > 0 || (a.safety?.length ?? 0) > 0);
  const first = hasIntro ? -1 : 0;
  const [step, setStep] = useState(first);
  const [running, setRunning] = useState(!hasIntro);
  const elapsed = useElapsed(running);
  const [finished, setFinished] = useState(false);
  const [reaction, setReaction] = useState<Reaction | null>(null);
  const [note, setNote] = useState('');
  const [noteOpen, setNoteOpen] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [who, setWho] = useState<string[]>(active ? [active.id] : []);
  const swipeFrom = useRef<{ x: number; y: number } | null>(null);
  /** Which way the last step change went, so the card comes in from that side. */
  const direction = useRef<1 | -1>(1);

  // Keep the screen on while playing, so a glance is all it takes.
  useEffect(() => keepAwake(), []);

  const leave = () => (location.key !== 'default' ? navigate(-1) : navigate('/'));
  const lastStep = (a?.steps.length ?? 1) - 1;
  const go = (n: number) => {
    const next = Math.max(first, Math.min(n, lastStep));
    if (next === step) return;
    haptic();
    direction.current = next > step ? 1 : -1;
    setStep(next);
    if (next >= 0 && step < 0) setRunning(true);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (finished) return;
      const forward = isRtl() ? 'ArrowLeft' : 'ArrowRight'; // i18n-ignore
      const back = isRtl() ? 'ArrowRight' : 'ArrowLeft'; // i18n-ignore
      if (e.key === forward) go(step + 1);
      if (e.key === back) go(step - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!a) {
    return (
      <div className="play">
        <div className="play-stage">
          <p>{t('Activity not found.')}</p>
          <Link to="/explore" className="btn btn-primary">
            {t('Explore')}
          </Link>
        </div>
      </div>
    );
  }

  const finish = () => {
    setRunning(false);
    setMinutes(Math.max(1, Math.round(elapsed / 60)));
    setFinished(true);
    haptic('success');
  };

  const save = () => {
    const date = new Date();
    for (const childId of who) {
      actions.logSession({ childId, activityId: a.id, date: date.toISOString(), minutes, reaction: reaction ?? undefined, note: note.trim() || undefined });
      // Tick it off this week's plan if it's there.
      const plan = getState().plans[childId];
      if (plan && plan.weekStart === toISODate(startOfWeek(date))) {
        const today = weekdayIndex(date);
        const idx = plan.items.findIndex((it) => it.activityId === a.id && !it.done && it.day <= today);
        if (idx >= 0) actions.togglePlanItem(childId, idx);
      }
    }
    if (who.length) {
      toast(t('🌸 A new flower in the garden!'));
      // In place of the game, so Back from the garden doesn't start the same game again.
      navigate('/', { replace: true });
    } else {
      leave();
    }
  };

  const onPointerDown = (e: PointerEvent) => {
    swipeFrom.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e: PointerEvent) => {
    const from = swipeFrom.current;
    swipeFrom.current = null;
    if (!from) return;
    const dx = e.clientX - from.x;
    if (Math.abs(dx) > SWIPE && Math.abs(dx) > Math.abs(e.clientY - from.y) * 1.5) go(step + (dx < 0 !== isRtl() ? 1 : -1));
  };

  if (finished) {
    const twist = nextTwist(a, timesPlayed + 1);
    return (
      <div className="play finish-screen" role="dialog" aria-label={t('Play finished')}>
        <Confetti />
        <div className="play-top">
          <span />
          <button type="button" className="icon-btn glass" aria-label={t('Close without saving')} onClick={leave}>
            <Icon name="x" strokeWidth={2.8} />
          </button>
        </div>
        <div className="finish-scroll">
          <FinishBloom color={DOMAIN_INFO[a.domains[0]].color} seed={a.id.length * 97} />
          <h1>{t('Lovely play!')}</h1>
          <p className="finish-sub">{active ? t('A new flower for {name}’s garden.', { name: active.name }) : t('A new flower for your garden.')}</p>

          <div className="finish-card">
            <p className="field-label" id="reaction-label">
              {active ? t('How did {name} find it?', { name: active.name }) : t('How did it find it?')}
            </p>
            <div className="reactions" role="group" aria-labelledby="reaction-label">
              {(Object.keys(REACTIONS) as Reaction[]).map((r) => (
                <button
                  key={r}
                  type="button"
                  aria-pressed={reaction === r}
                  onClick={(e) => {
                    haptic();
                    if (reaction !== r) burst(e.currentTarget, 'hearts', 5, 0.8);
                    setReaction(reaction === r ? null : r);
                  }}
                >
                  <Emoji e={REACTIONS[r].emoji} size={36} eager />
                  <span>{REACTIONS[r].label}</span>
                </button>
              ))}
            </div>

            {children.length > 1 && (
              <div className="field">
                <span className="field-label">{t('Who played?')}</span>
                <div className="chips">
                  {children.map((c) => {
                    const on = who.includes(c.id);
                    return (
                      <button
                        key={c.id}
                        type="button"
                        className="chip"
                        aria-pressed={on}
                        onClick={() => setWho(on ? who.filter((x) => x !== c.id) : [...who, c.id])}
                      >
                        <Avatar child={c} size="sm" /> {c.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="spread">
              <span className="field-label" id="minutes-label">
                {t('Time played')}
              </span>
              <div className="stepper" role="group" aria-labelledby="minutes-label">
                <button type="button" aria-label={t('One minute less')} onClick={() => setMinutes((m) => Math.max(1, m - 1))}>
                  <Icon name="minus" size={18} strokeWidth={2.8} />
                </button>
                <output aria-live="polite">{t('{n} min', { n: minutes })}</output>
                <button type="button" aria-label={t('One minute more')} onClick={() => setMinutes((m) => Math.min(240, m + 1))}>
                  <Icon name="plus" size={18} strokeWidth={2.8} />
                </button>
              </div>
            </div>

            {noteOpen ? (
              <div className="field">
                <label className="field-label" htmlFor="note">
                  {t('A moment to remember')}
                </label>
                <textarea
                  id="note"
                  className="textarea"
                  maxLength={500}
                  autoFocus
                  placeholder={t('First giggle! Found the toy under the cloth twice…')}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            ) : (
              <button type="button" className="link-btn add-note" onClick={() => setNoteOpen(true)}>
                <Icon name="edit" size={18} strokeWidth={2.6} /> {t('Add a note')}
              </button>
            )}
          </div>

          {twist && (
            <p className="twist on-world">
              <span className="twist-label">
                <Icon name="sparkle" size={16} /> {t('Next time, try:')}
              </span>
              {twist}
            </p>
          )}
        </div>
        <div className="play-foot">
          {who.length === 0 && children.length > 0 && <p className="play-hint">{t('Pick who played to save it.')}</p>}
          <button type="button" className="btn btn-primary btn-lg btn-block" onClick={save} disabled={children.length > 0 && who.length === 0}>
            <Icon name="check" strokeWidth={3.2} /> {children.length ? t('Save to our garden') : t('Done')}
          </button>
        </div>
      </div>
    );
  }

  const intro = step < 0;

  return (
    <div className="play" role="dialog" aria-label={t('Playing {title}', { title: a.title })}>
      <div className="play-top">
        <button type="button" className="icon-btn glass" aria-label={t('Stop playing')} onClick={leave}>
          <Icon name="x" strokeWidth={2.8} />
        </button>
        <div className="play-progress" aria-hidden="true">
          {a.steps.map((_, i) => (
            <i key={i} className={i <= step ? 'on' : ''} />
          ))}
        </div>
        <button
          type="button"
          className={`timer${running ? ' running' : ''}`}
          onClick={() => setRunning(!running)}
          aria-label={running ? t('Pause timer, {time} elapsed', { time: mmss(elapsed) }) : t('Start timer, {time} elapsed', { time: mmss(elapsed) })}
        >
          <Icon name={running ? 'pause' : 'clock'} size={15} filled={running} strokeWidth={2.6} /> {mmss(elapsed)}
        </button>
      </div>

      <div className="play-stage" onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={() => (swipeFrom.current = null)}>
        <ActivityArt activity={a} className={`play-art${intro ? ' small' : ''}`} eager live />
        <div aria-live="polite" className="play-live">
        <div className="play-card" key={step} data-dir={direction.current}>
          {intro ? (
            <>
              <p className="play-kicker">{t('Before you start')}</p>
              <h1 className="play-title">{a.title}</h1>
              {a.materials.length > 0 && (
                <div className="play-need">
                  <h2>{t('You’ll need')}</h2>
                  <ul className="need-chips">
                    {a.materials.map((m) => (
                      <li key={m} className="need-chip">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {a.safety && a.safety.length > 0 && (
                <div className="safety-box">
                  <b>
                    <Icon name="shield" size={18} strokeWidth={2.6} /> {t('Keep it safe')}
                  </b>
                  <ul>
                    {a.safety.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <>
              <p className="play-kicker">
                {t('Step {n} of {total}', { n: step + 1, total: a.steps.length })}
              </p>
              <p className="step-text">{a.steps[step]}</p>
              <div className="say">
                <span className="say-label">{t('Try saying')}</span>
                <span>{a.talk[step % a.talk.length]}</span>
              </div>
              <ReadAloud texts={[a.steps[step]]} label={t('Read this step')} />
            </>
          )}
        </div>
        </div>
      </div>

      <div className="play-foot">
        <div className="btn-row">
          {!intro && (
            <button type="button" className="btn btn-lg back-step" disabled={step === first} onClick={() => go(step - 1)} aria-label={t('Previous step')}>
              <Icon name="left" strokeWidth={3} />
            </button>
          )}
          {intro ? (
            <button type="button" className="btn btn-primary btn-lg grow" onClick={() => go(0)}>
              {t('We’re ready')} <Icon name="right" strokeWidth={3} />
            </button>
          ) : step === lastStep ? (
            <button type="button" className="btn btn-primary btn-lg grow" onClick={finish}>
              {t('We played!')} <Icon name="check" strokeWidth={3.2} />
            </button>
          ) : (
            <button type="button" className="btn btn-primary btn-lg grow" onClick={() => go(step + 1)}>
              {t('Next step')} <Icon name="right" strokeWidth={3} />
            </button>
          )}
        </div>
        {!intro && step < lastStep && (
          <button type="button" className="link-btn finish-early" onClick={finish}>
            {t('Finish early')}
          </button>
        )}
      </div>
    </div>
  );
}
