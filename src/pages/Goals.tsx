import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ActivityTile } from '../components/ActivityCard';
import { Art } from '../components/Art';
import { ProfileButton } from '../components/ChildSwitcher';
import { Emoji } from '../components/Emoji';
import { HelpButton, ReadAloud } from '../components/Help';
import { Icon } from '../components/Icon';
import { BackButton, Empty, Page, Section } from '../components/Page';
import { toast } from '../components/Toast';
import { Carousel, Glyph, ListGroup, ListRow, Ring } from '../components/ui';
import { ACTIVITIES } from '../data/activities';
import { COACH } from '../data/coach';
import { GOALS, GOAL_BY_ID } from '../data/goals';
import { GUIDE_BY_SLUG } from '../data/guides';
import type { GoalExpect, GoalStep, ParentingGoal } from '../data/packs';
import { DOMAINS } from '../data/types';
import { num, t } from '../i18n';
import { hashString } from '../lib/random';
import { dueCheckIn } from '../lib/checkIns';
import { isEligible } from '../lib/recommend';
import { haptic } from '../platform';
import { useActiveChild } from '../store/hooks';
import type { GoalFeeling, GoalHolding, GoalProgress } from '../store/model';
import { actions, useStore } from '../store/store';

/** More than this many open goals at once, and the page gently suggests focusing. */
const FOCUS = 2;
/** After this long without a visit, the practice opens with a welcome back. */
const AWAY_MS = 10 * 24 * 60 * 60 * 1000;


const palette = (g: ParentingGoal) => DOMAINS[hashString(g.id) % DOMAINS.length];

const EVIDENCE: Record<ParentingGoal['evidence'], string> = {
  strong: t('These practices come from parenting programmes tested in many trials.'),
  moderate: t('These practices draw on tested programmes and good studies, though not this exact sequence.'),
  practice: t('This is sensible advice from health bodies, with little direct research behind it.'),
};

const FEELINGS: { value: GoalFeeling; label: string; emoji: string }[] = [
  { value: 'helped', label: t('It helped'), emoji: '🌟' },
  { value: 'some', label: t('A little'), emoji: '🌱' },
  { value: 'not-yet', label: t('Not yet'), emoji: '🌧️' },
];

/** What the page says back. Every answer is a fine answer. */
const REPLY: Record<GoalFeeling, string> = {
  helped: t('Lovely. Keep it going, and move on when it feels like part of your week.'),
  some: t('That’s how change usually starts. Another week with it often makes the difference.'),
  'not-yet': t('That’s common: most new habits take a few weeks to show. Try it again, or read more first.'),
};

/** Goals in progress first, then the rest by how well they fit this child. */
export function openGoals(goals: GoalProgress[]): { progress: GoalProgress; goal: ParentingGoal }[] {
  return goals
    .filter((p) => !p.closedAt)
    .map((progress) => ({ progress, goal: GOAL_BY_ID.get(progress.goalId) }))
    .filter((x): x is { progress: GoalProgress; goal: ParentingGoal } => !!x.goal);
}

export function currentStep(goal: ParentingGoal, progress: GoalProgress): GoalStep {
  return goal.steps.find((s) => s.id === progress.current) ?? goal.steps[0];
}

function GoalArt({ g, className, eager }: { g: ParentingGoal; className?: string; eager?: boolean }) {
  return <Art emoji={g.emoji} seed={g.id} palette={palette(g)} energy="calm" className={className} eager={eager} />;
}

/** Every goal, and the ones being worked on. */
export default function Goals() {
  const { child, age } = useActiveChild();
  const saved = useStore((s) => s.goals);
  const months = age?.months;
  const open = openGoals(saved);
  const openIds = new Set(open.map((x) => x.goal.id));
  const closed = saved.filter((p) => p.closedAt).map((p) => GOAL_BY_ID.get(p.goalId)).filter((g): g is ParentingGoal => !!g);
  const closedIds = new Set(closed.map((g) => g.id));
  const fits = (g: ParentingGoal) => months === undefined || (g.minMonths <= months && months <= g.maxMonths);
  const rest = GOALS.filter((g) => !openIds.has(g.id) && !closedIds.has(g.id));
  const forThisAge = rest.filter(fits);
  const forOthers = rest.filter((g) => !fits(g));
  // Worked out once per visit, so answering one doesn't make another goal's question jump in straight away.
  const [checkIn] = useState(() => dueCheckIn(saved));

  const row = (g: ParentingGoal) => (
    <ListRow key={g.id} to={`/goals/${g.id}`} lead={<Glyph emoji={g.emoji} tone={`var(--d-${palette(g)})`} />} title={g.title} subtitle={g.promise} />
  );

  return (
    <Page
      world="leaf"
      title={t('Parenting goals')}
      heading={t('What would you like to work on?')}
      subtitle={t('Small steps, one week at a time')}
      back={<BackButton fallback="/learn" />}
      actions={
        <>
          <HelpButton />
          <ProfileButton />
        </>
      }
    >
      {checkIn && <CheckIn goal={checkIn.goal} />}

      {open.length > 0 && (
        <Section title={t('Working on')} id="open-goals">
          <div className="goal-cards">
            {open.map(({ goal, progress }) => {
              const tried = goal.steps.filter((s) => progress.tried[s.id]).length;
              return (
                <Link key={goal.id} to={`/goals/${goal.id}`} className="goal-card">
                  <GoalArt g={goal} className="goal-card-art" />
                  <span className="goal-card-text">
                    <b>{goal.title}</b>
                    <span>{t('Now: {step}', { step: currentStep(goal, progress).title })}</span>
                  </span>
                  <Ring value={tried} max={goal.steps.length} size={44} label={t('{n} of {total} practices tried', { n: tried, total: goal.steps.length })}>
                    <b>{num(tried)}</b>
                  </Ring>
                </Link>
              );
            })}
          </div>
          {open.length > FOCUS && <p className="section-note">{t('One or two goals at a time is usually plenty. The others will wait.')}</p>}
        </Section>
      )}

      {open.length === 0 && (
        <section className="card goal-how" aria-labelledby="how-title">
          <h2 id="how-title">{t('How it works')}</h2>
          <ol className="steps">
            <li>{t('Pick one thing you’d like to change.')}</li>
            <li>{t('Try one small practice for a week or so. Each comes with a plan you can borrow.')}</li>
            <li>{t('Say how it went, then stay with it or move on. There are no deadlines and nothing to fall behind on.')}</li>
          </ol>
        </section>
      )}

      {forThisAge.length > 0 && (
        <Section title={child ? t('Goals for {name}’s age', { name: child.name }) : t('Goals')} id="age-goals">
          <ListGroup>{forThisAge.map(row)}</ListGroup>
        </Section>
      )}

      {closed.length > 0 && (
        <Section title={t('Finished or set aside')} id="closed-goals">
          <ListGroup>{closed.map(row)}</ListGroup>
        </Section>
      )}

      {forOthers.length > 0 && (
        <Section title={t('For other ages')} id="other-goals">
          <ListGroup>{forOthers.map(row)}</ListGroup>
        </Section>
      )}
    </Page>
  );
}

const HOLDINGS: { value: Exclude<GoalHolding, 'later'>; label: string; emoji: string }[] = [
  { value: 'most-days', label: t('Most days'), emoji: '🌟' },
  { value: 'sometimes', label: t('Sometimes'), emoji: '🌱' },
  { value: 'not-lately', label: t('Not lately'), emoji: '🌧️' },
];

/** Kind words for every answer. A lapse is ordinary information: one missed stretch doesn't undo a habit. */
const HOLDING_REPLY: Record<Exclude<GoalHolding, 'later'>, string> = {
  'most-days': t('That’s a real change, and you made it. We’ll ask once more later, unless you’d rather we didn’t.'),
  sometimes: t('That’s how habits usually go: they wobble and come back. A week with one practice is often enough to steady them.'),
  'not-lately': t('Busy stretches happen, and they don’t undo what you built. Pick it up again from any practice, whenever you like.'),
};

/** A light check-in after a finished goal: one question, three answers in words, and always a way out. */
function CheckIn({ goal }: { goal: ParentingGoal }) {
  const navigate = useNavigate();
  const [answered, setAnswered] = useState<GoalHolding | 'settled'>();
  const answer = (how: GoalHolding) => {
    actions.checkInGoal(goal.id, how);
    setAnswered(how);
    haptic('success');
  };
  const settle = () => {
    actions.settleGoal(goal.id);
    setAnswered('settled');
  };
  if (answered === 'later') return null;
  return (
    <section className="card goal-now goal-check" aria-labelledby="check-title">
      <p className="eyebrow">{t('A quick check-in')}</p>
      <h2 id="check-title">{t('How is “{goal}” going now?', { goal: goal.title })}</h2>
      {!answered && (
        <>
          <p>{t('You finished this goal a while ago. Over the last week or so, have the practices still been part of your days?')}</p>
          <div className="btn-row">
            {HOLDINGS.map((h) => (
              <button key={h.value} type="button" className="btn grow" onClick={() => answer(h.value)}>
                <Emoji e={h.emoji} size={20} /> {h.label}
              </button>
            ))}
          </div>
          <div className="btn-row">
            <button type="button" className="link-btn" onClick={() => answer('later')}>
              {t('Not now')}
            </button>
            <button type="button" className="link-btn" onClick={settle}>
              {t('This goal is done for us')}
            </button>
          </div>
        </>
      )}
      {answered === 'settled' && (
        <p className="goal-reply" role="status">
          <Emoji e="🌳" size={22} /> {t('Lovely. We won’t ask about this one again. It’s always here if you want it.')}
        </p>
      )}
      {answered && answered !== 'settled' && (
        <div className="goal-reply" role="status">
          <p>
            <Emoji e={HOLDINGS.find((h) => h.value === answered)!.emoji} size={22} /> {HOLDING_REPLY[answered]}
          </p>
          {answered === 'not-lately' && <p className="footnote">{t('If things have become much harder than before, see When to get help on the goal.')}</p>}
          <div className="btn-row">
            {answered === 'most-days' ? (
              <button type="button" className="btn grow" onClick={settle}>
                {t('No more check-ins')}
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary grow"
                onClick={() => {
                  actions.startGoal(goal.id, goal.steps[0].id);
                  navigate(`/goals/${goal.id}`);
                }}
              >
                {t('Pick it up again')}
              </button>
            )}
            <Link to={`/goals/${goal.id}`} className="btn grow">
              {t('See the practices')}
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

/** What's typical at the child's age for this goal, or at every age when no child is set up. */
function Expect({ goal }: { goal: ParentingGoal }) {
  const { child, age } = useActiveChild();
  const bands = goal.expect;
  if (!bands?.length) return null;
  const months = age?.months;
  const mine = months === undefined ? undefined : bands.find((b) => b.minMonths <= months && months <= b.maxMonths);
  const shown: GoalExpect[] = mine ? [mine] : bands;
  const guide = GUIDE_BY_SLUG.get('what-to-expect');
  return (
    <section className="card goal-expect" aria-labelledby="expect-title">
      <h2 id="expect-title">{mine && child ? t('What’s typical at {name}’s age', { name: child.name }) : t('What’s typical by age')}</h2>
      {shown.map((b) => (
        <div key={b.minMonths} className="goal-expect-band">
          {!mine && <p className="eyebrow">{b.age}</p>}
          <p>{b.typical}</p>
          {b.ask && (
            <p className="footnote">
              <b>{t('Worth asking about:')}</b> {b.ask}
            </p>
          )}
        </div>
      ))}
      <p className="footnote">{t('These are typical ranges, not tests. Children grow at different speeds.')}</p>
      {guide && (
        <Link to={`/learn/${guide.slug}`} className="link-btn">
          {guide.title}
        </Link>
      )}
    </section>
  );
}

function Practice({ goal, step, progress }: { goal: ParentingGoal; step: GoalStep; progress: GoalProgress }) {
  const { age } = useActiveChild();
  const [asking, setAsking] = useState(false);
  const felt = progress.felt[step.id];
  const tried = !!progress.tried[step.id];
  const index = goal.steps.indexOf(step);
  const next = goal.steps[index + 1];
  const guide = step.guide ? GUIDE_BY_SLUG.get(step.guide) : undefined;
  const coach = step.coach ? COACH.find((c) => c.id === step.coach) : undefined;
  const months = age?.months;
  const games = useMemo(
    () =>
      step.tags?.length
        ? ACTIVITIES.filter((a) => (months === undefined || isEligible(a, months)) && a.tags?.some((tag) => step.tags!.includes(tag)))
            .sort((a, b) => hashString(a.id + step.id) - hashString(b.id + step.id))
            .slice(0, 6)
        : [],
    [step, months],
  );

  const answer = (value: GoalFeeling) => {
    actions.markGoalTried(goal.id, step.id, value);
    setAsking(false);
    haptic('success');
  };

  // After a long gap, a word of welcome. It never says how long: a missed week doesn't undo anything.
  const lastTouched = Math.max(Date.parse(progress.startedAt) || 0, ...Object.values(progress.tried).map((d) => Date.parse(d) || 0));
  const [away] = useState(() => Date.now() - lastTouched > AWAY_MS);

  return (
    <>
      {away && (
        <p className="goal-welcome" role="status">
          <Emoji e="👋" size={22} /> {t('Welcome back. Busy weeks happen: carry on from here, or give this practice another go.')}
        </p>
      )}
      <section className="card goal-now" aria-labelledby="practice-title">
        <div className="card-head spread">
          <p className="eyebrow">{t('Practice {n} of {total}', { n: index + 1, total: goal.steps.length })}</p>
          <ReadAloud texts={[step.title, step.try, step.plan, step.ifHard]} label={t('Read')} />
        </div>
        <h2 id="practice-title">{step.title}</h2>
        <p className="goal-try">{step.try}</p>
        <div className="goal-plan">
          <span className="eyebrow">{t('Your plan')}</span>
          <p>{step.plan}</p>
        </div>
        <details className="goal-hard">
          <summary>{t('A hard week?')}</summary>
          <p>{step.ifHard}</p>
        </details>
        <p className="footnote">{step.why}</p>

        {!asking && !tried && (
          <button type="button" className="btn btn-primary btn-block" onClick={() => setAsking(true)}>
            {t('We tried it')}
          </button>
        )}
        {(asking || (tried && !felt)) && (
          <div className="goal-felt" role="group" aria-label={t('How did it go?')}>
            <p className="goal-felt-q">{t('How did it go?')}</p>
            <div className="btn-row">
              {FEELINGS.map((f) => (
                <button key={f.value} type="button" className="btn grow" onClick={() => answer(f.value)}>
                  <Emoji e={f.emoji} size={20} /> {f.label}
                </button>
              ))}
            </div>
          </div>
        )}
        {felt && !asking && (
          <div className="goal-reply" role="status">
            <p>
              <Emoji e={FEELINGS.find((f) => f.value === felt)!.emoji} size={22} /> {REPLY[felt]}
            </p>
            <div className="btn-row">
              {next ? (
                <button
                  type="button"
                  className="btn btn-primary grow"
                  onClick={() => {
                    actions.setGoalStep(goal.id, next.id);
                    window.scrollTo({ top: 0 });
                  }}
                >
                  {t('Next practice')}
                </button>
              ) : (
                <Link to="/goals" className="btn btn-primary grow" onClick={() => actions.closeGoal(goal.id)}>
                  {t('Finish this goal')}
                </Link>
              )}
              <button type="button" className="btn grow" onClick={() => setAsking(true)}>
                {t('Tried it again')}
              </button>
            </div>
          </div>
        )}
      </section>

      {(guide || coach) && (
        <ListGroup>
          {guide && <ListRow to={`/learn/${guide.slug}`} lead={<Glyph emoji={guide.emoji} tone="var(--d-thinking)" />} title={guide.title} subtitle={t('Read more')} />}
          {coach && <ListRow to={`/help/moment/${coach.id}`} lead={<Glyph icon="lifebuoy" tone="var(--d-feelings)" />} title={coach.title} subtitle={t('If it goes wrong')} />}
        </ListGroup>
      )}

      {games.length > 0 && (
        <Section title={t('Games that practise it')} id="goal-games">
          <Carousel label={t('Games that practise it')}>
            {games.map((a) => (
              <ActivityTile key={a.id} activity={a} />
            ))}
          </Carousel>
        </Section>
      )}
    </>
  );
}

/** The parent's own reason, in their own words. Coming back to it on a hard day is the point. */
function WhyItMatters({ goalId, note }: { goalId: string; note: string }) {
  const [text, setText] = useState(note);
  return (
    <section className="card goal-note" aria-labelledby="note-title">
      <h2 id="note-title">{t('Why this matters to you')}</h2>
      <p className="footnote">{t('A line in your own words, and one thing that already goes well. Only you see it.')}</p>
      <textarea
        className="textarea"
        aria-labelledby="note-title"
        value={text}
        rows={3}
        maxLength={400}
        placeholder={t('For example: I want evenings to feel calmer for all of us.')}
        onChange={(e) => setText(e.target.value)}
        onBlur={() => text !== note && actions.setGoalNote(goalId, text.trim())}
      />
    </section>
  );
}

export function GoalPage() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const goal = GOAL_BY_ID.get(id);
  const progress = useStore((s) => s.goals.find((g) => g.goalId === id));
  const openCount = useStore((s) => openGoals(s.goals).length);

  if (!goal) {
    return (
      <Page world="leaf" title={t('Not found')} heading={t('Hmm.')} back={<BackButton fallback="/goals" />}>
        <Empty mood="fussy" text={t('We couldn’t find that goal.')}>
          <Link to="/goals" className="btn btn-primary">
            {t('All goals')}
          </Link>
        </Empty>
      </Page>
    );
  }

  const active = progress && !progress.closedAt ? progress : undefined;
  const step = active ? currentStep(goal, active) : undefined;

  const start = () => {
    actions.startGoal(goal.id, goal.steps[0].id);
    haptic('success');
    window.scrollTo({ top: 0 });
  };

  const close = () => {
    actions.closeGoal(goal.id);
    toast(t('Set aside. It’s here when you want it.'), { label: t('Undo'), onClick: () => actions.startGoal(goal.id, goal.steps[0].id) });
    navigate('/goals');
  };

  return (
    <Page
      world="leaf"
      title={goal.title}
      back={<BackButton fallback="/goals" />}
      actions={<HelpButton />}
      hero={
        <header className="detail-hero short">
          <GoalArt g={goal} className="detail-art" eager />
        </header>
      }
      className="detail goal"
    >
      <div className="detail-head">
        <h1>{goal.title}</h1>
        <p className="detail-summary">{goal.promise}</p>
      </div>

      {active && step ? (
        <>
          <Practice goal={goal} step={step} progress={active} />
          <WhyItMatters goalId={goal.id} note={active.note} />
        </>
      ) : (
        <section className="card" aria-labelledby="approach-title">
          <h2 id="approach-title">{t('The idea')}</h2>
          <p>{goal.approach}</p>
          <p className="footnote">{EVIDENCE[goal.evidence]}</p>
          {openCount >= FOCUS && <p className="footnote">{t('You’re already working on {n} goals. One or two at a time is usually plenty.', { n: openCount })}</p>}
          <button type="button" className="btn btn-primary btn-block" onClick={start}>
            {progress ? t('Pick it up again') : t('Start this goal')}
          </button>
        </section>
      )}

      <Expect goal={goal} />

      <Section title={t('The practices')} id="path-title">
        <ol className="goal-path">
          {goal.steps.map((s, i) => {
            const done = !!progress?.tried[s.id];
            const here = active && s.id === step?.id;
            const label = done ? t('Tried') : here ? t('Now') : undefined;
            const body = (
              <>
                <span className={`goal-dot${done ? ' done' : ''}${here ? ' here' : ''}`} aria-hidden="true">
                  {done ? <Icon name="check" size={14} strokeWidth={3.4} /> : num(i + 1)}
                </span>
                <span className="goal-path-text">
                  <b>{s.title}</b>
                  {label && <span className="muted"> · {label}</span>}
                </span>
              </>
            );
            return (
              <li key={s.id}>
                {active && !here ? (
                  <button type="button" className="goal-path-item" onClick={() => actions.setGoalStep(goal.id, s.id)} aria-label={t('Go to practice {n}: {title}', { n: i + 1, title: s.title })}>
                    {body}
                  </button>
                ) : (
                  <div className="goal-path-item" aria-current={here ? 'step' : undefined}>
                    {body}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </Section>

      <section className="card" aria-labelledby="signs-title">
        <h2 id="signs-title">{t('Signs it’s working')}</h2>
        <ul className="plain-list">
          {goal.signs.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <div className="group disclosure">
        {active && (
          <details>
            <summary>
              <Emoji e="🧠" size={26} />
              {t('Why this order')}
            </summary>
            <div className="disclosure-body">
              <p>{goal.approach}</p>
              <p className="footnote">{EVIDENCE[goal.evidence]}</p>
            </div>
          </details>
        )}
        <details>
          <summary>
            <Emoji e="🩺" size={26} />
            {t('When to get help')}
          </summary>
          <div className="disclosure-body">
            <ul className="plain-list">
              {goal.help.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <Link to="/help/you?view=help" className="link-btn">
              {t('Who to call')}
            </Link>
          </div>
        </details>
        <details>
          <summary>
            <Emoji e="📚" size={26} />
            {t('Sources')}
            <span className="count">{num(goal.refs.length)}</span>
          </summary>
          <div className="disclosure-body sources">
            {goal.refs.map((r) => (
              <a key={r.url} href={r.url} target="_blank" rel="noreferrer">
                {r.title} — <span className="muted">{r.publisher}</span>
              </a>
            ))}
          </div>
        </details>
      </div>

      {active && (
        <button type="button" className="link-btn goal-close" onClick={close}>
          {t('Set this goal aside')}
        </button>
      )}
    </Page>
  );
}
