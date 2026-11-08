import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Confetti } from '../components/Confetti';
import { Emoji } from '../components/Emoji';
import { Icon } from '../components/Icon';
import { BackButton, Page, useWorld } from '../components/Page';
import { Pip, type PipMood } from '../components/Pip';
import { InfoButton, ListGroup, ListRow, Ring } from '../components/ui';
import { MILESTONE_CATEGORY_INFO } from '../data/domains';
import { MILESTONE_AGES, MILESTONES, currentChecklistAge, milestoneAgeAdjective, milestoneAgeLabel, nextChecklistAge } from '../data/milestones';
import { SOURCES } from '../data/sources';
import { MILESTONE_CATEGORIES, type Milestone } from '../data/types';
import { haptic } from '../platform';
import { useActiveChild } from '../store/hooks';
import type { Child, MilestoneAnswer } from '../store/model';
import { actions, useStore } from '../store/store';
import { num, t } from '../i18n';
import { rich } from '../i18n/rich';

const ANSWERS: { key: MilestoneAnswer; label: string; emoji?: string; pip: PipMood }[] = [
  { key: 'yes', label: t('Yes'), pip: 'wow' },
  { key: 'notyet', label: t('Not yet'), emoji: '⏳', pip: 'calm' },
  { key: 'unsure', label: t('Not sure'), emoji: '🤔', pip: 'happy' },
];

function ActEarly() {
  return (
    <div className="callout tip">
      <Emoji e="🤝" size={28} />
      <div className="stack-xs">
        <b>{t('Every child grows at their own pace')}</b>
        <p>{t('The CDC advises talking with your child’s doctor about any “not yet” — and not waiting. Acting early can make a real difference. Bring this checklist to your next visit.')}</p>
      </div>
    </div>
  );
}

function AboutChecklists() {
  return (
    <InfoButton title={t('About these checklists')} label={t('About the milestone checklists')}>
      <p>{rich('Each checklist lists things most children can do by that age, from the CDC’s <i>Learn the Signs. Act Early.</i> programme, revised with the AAP in 2022.', { i: (s) => <i>{s}</i> })}</p>
      <p>{t('They are not a developmental screening. If your child loses skills they once had, or you have any concern, talk to your doctor.')}</p>
      <p>
        <a href={SOURCES['cdc-milestones'].url} target="_blank" rel="noreferrer">
          {t('CDC milestones')}
        </a>{' '}
        · <Link to="/learn/about-milestones">{t('Understanding milestones')}</Link>
      </p>
    </InfoButton>
  );
}

/** One milestone at a time — far gentler than a wall of questions. */
function CheckIn({ child, ageLabel, items, onExit }: { child: Child; ageLabel: string; items: Milestone[]; onExit: () => void }) {
  const answers = useStore((s) => s.milestones[child.id]);
  useWorld('lilac');
  // Fix the queue when the check-in starts: unanswered items first time round, or all of them for a re-check.
  const [queue] = useState(() => {
    const open = items.filter((m) => !answers?.[m.id]);
    return open.length ? open : items;
  });
  const [index, setIndex] = useState(0);
  const [pip, setPip] = useState<PipMood>('happy');
  const done = index >= queue.length;

  if (done) {
    const notYet = items.filter((m) => answers?.[m.id] === 'notyet');
    const yes = items.filter((m) => answers?.[m.id] === 'yes').length;
    const answered = items.filter((m) => answers?.[m.id]).length;
    const areas = [...new Set(notYet.map((m) => m.category))];
    return (
      <main className="checkin checkin-done">
        {/* Skipping everything is fine, but it isn't something to celebrate, or to count as "doesn't do". */}
        {answered > 0 && <Confetti />}
        <div className="checkin-top">
          <span />
          <button type="button" className="icon-btn glass" aria-label={t('Close')} onClick={onExit}>
            <Icon name="x" strokeWidth={2.8} />
          </button>
        </div>
        <div className="checkin-finish">
          {answered === 0 ? (
            <>
              <Pip mood="calm" size={128} />
              <h1>{t('No rush')}</h1>
              <p>{t('Come back whenever you’ve had a chance to watch {name}.', { name: child.name })}</p>
            </>
          ) : (
            <>
              <Pip mood="wow" size={128} />
              <h1>{t('Check-in done!')}</h1>
              <p>
                {answered === items.length
                  ? rich('{name} does <yes/> of {total} things on this list.', { yes: <b>{num(yes)}</b> }, { name: child.name, total: items.length })
                  : rich('{name} does <yes/> of the {n} things you’ve answered so far.', { yes: <b>{num(yes)}</b> }, { name: child.name, n: answered })}
              </p>
            </>
          )}
        </div>
        <div className="checkin-after">
          {notYet.length > 0 && (
            <>
              <ActEarly />
              <section className="section">
                <div className="section-head">
                  <h2>{t('Ideas to practise through play')}</h2>
                </div>
                <ListGroup>
                  {areas.map((cat) => {
                    const info = MILESTONE_CATEGORY_INFO[cat];
                    return (
                      <ListRow
                        key={cat}
                        to={`/explore?domain=${info.domains[0]}`}
                        lead={
                          <span className="glyph emoji" aria-hidden="true">
                            <Emoji e={info.emoji} size={22} />
                          </span>
                        }
                        title={info.label}
                        subtitle={t('Games for {name}’s age', { name: child.name })}
                      />
                    );
                  })}
                </ListGroup>
              </section>
            </>
          )}
          <button type="button" className="btn btn-primary btn-lg btn-block" onClick={onExit}>
            {t('See the full checklist')}
          </button>
        </div>
      </main>
    );
  }

  const m = queue[index];
  const info = MILESTONE_CATEGORY_INFO[m.category];
  const answer = (a: (typeof ANSWERS)[number]) => {
    haptic(a.key === 'yes' ? 'success' : 'tap');
    actions.setMilestone(child.id, m.id, a.key);
    setPip(a.pip);
    setIndex(index + 1);
  };

  return (
    <main className="checkin">
      <div className="checkin-top">
        <button type="button" className="nav-back" aria-label={index === 0 ? t('Close check-in') : t('Previous question')} onClick={index === 0 ? onExit : () => setIndex(index - 1)}>
          <Icon name={index === 0 ? 'x' : 'left'} size={24} strokeWidth={2.8} />
        </button>
        <span className="progress" aria-hidden="true">
          <i style={{ width: `${((index + 1) / queue.length) * 100}%` }} />
        </span>
        <span className="count" aria-live="polite">
          {t('{n} of {total}', { n: index + 1, total: queue.length })}
        </span>
      </div>
      <div className="checkin-stage">
        <h1 className="sr-only">{t('{age} check-in', { age: ageLabel })}</h1>
        <span className="checkin-pip" key={`${index}-${pip}`}>
          <Pip mood={pip} size={96} />
        </span>
        <div className="checkin-card" key={m.id}>
          <span className="checkin-cat">
            <Emoji e={info.emoji} size={20} eager /> {info.label}
          </span>
          <p className="checkin-ask">{t('Have you seen {name} do this?', { name: child.name })}</p>
          <p className="checkin-q">{m.text}</p>
        </div>
      </div>
      <div className="checkin-answers" role="group" aria-label={t('Answer for: {text}', { text: m.text })}>
        {ANSWERS.map((a) => (
          <button key={a.key} type="button" className={`answer ${a.key}`} aria-pressed={answers?.[m.id] === a.key} onClick={() => answer(a)}>
            {a.emoji ? <Emoji e={a.emoji} size={28} eager /> : <Icon name="check" size={26} strokeWidth={3.6} />}
            {a.label}
          </button>
        ))}
        <button type="button" className="link-btn checkin-skip" onClick={() => setIndex(index + 1)}>
          {t('Skip for now')}
        </button>
      </div>
    </main>
  );
}

export default function Milestones() {
  const { child, age } = useActiveChild();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const answers = useStore((s) => (child ? s.milestones[child.id] : undefined));
  const defaultAge = age ? currentChecklistAge(age.months) : MILESTONE_AGES[0];
  const [selected, setSelected] = useState(defaultAge);

  useEffect(() => setSelected(defaultAge), [child?.id, defaultAge]);

  const items = MILESTONES.filter((m) => m.ageMonths === selected);
  const notYet = items.filter((m) => answers?.[m.id] === 'notyet');
  const answered = items.filter((m) => answers?.[m.id]).length;
  const next = age ? nextChecklistAge(age.months) : null;

  if (child && params.get('checkin') === '1') {
    return (
      <CheckIn
        child={child}
        ageLabel={milestoneAgeAdjective(defaultAge)}
        items={MILESTONES.filter((m) => m.ageMonths === defaultAge)}
        onExit={() => navigate('/milestones', { replace: true })}
      />
    );
  }

  return (
    <Page
      world="lilac"
      title={t('Milestones')}
      back={<BackButton fallback="/growth" />}
      actions={<AboutChecklists />}
      head={
        <div className="chips scroll age-tabs" role="tablist" aria-label={t('Checklist age')}>
          {MILESTONE_AGES.map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              className={`chip${m === defaultAge && child ? ' current' : ''}`}
              aria-selected={selected === m}
              onClick={() => {
                haptic();
                setSelected(m);
              }}
            >
              {milestoneAgeLabel(m)}
            </button>
          ))}
        </div>
      }
    >
      {child && age ? (
        <div className="card milestone-card">
          <Ring value={answered} max={items.length} size={64} stroke={7} color="var(--brand)" label={t('Milestones answered')}>
            <b>{num(answered)}</b>
          </Ring>
          <div className="milestone-card-text">
            <h2>
              {milestoneAgeLabel(selected)} · {child.name}
            </h2>
            <span className="muted">
              {answered > 0 && <>{t('{done} of {total} answered', { done: answered, total: items.length })} · </>}
              {selected > age.months
                ? t('Coming up next')
                : age.corrected
                  ? t('Corrected age {age}', { age: age.correctedLabel ?? '' })
                  : next
                    ? t('Next list at {age}', { age: milestoneAgeLabel(next) })
                    : t('CDC lists go to 5 years')}
            </span>
          </div>
          {selected === defaultAge && answered < items.length && (
            <div className="milestone-card-actions">
              <Link to="/milestones?checkin=1" className="btn btn-primary">
                {answered === 0 ? t('Start check-in') : t('Continue check-in · {n}', { n: items.length - answered })}
              </Link>
            </div>
          )}
        </div>
      ) : (
        <p className="notice">
          <Emoji e="👶" size={22} />
          <span>{rich('<link>Add your child</link> to tick off milestones.', { link: (s) => <Link to="/welcome">{s}</Link> })}</span>
        </p>
      )}

      {MILESTONE_CATEGORIES.map((cat) => {
        const list = items.filter((m) => m.category === cat);
        if (list.length === 0) return null;
        const info = MILESTONE_CATEGORY_INFO[cat];
        return (
          <section key={cat} className="section" aria-label={info.label}>
            <div className="section-head">
              <h2 className="with-art">
                <Emoji e={info.emoji} size={26} /> {info.label}
              </h2>
            </div>
            <div className="group">
              {list.map((m) => {
                const current = answers?.[m.id];
                return (
                  <div key={m.id} className="ms-item">
                    <p>{m.text}</p>
                    {child && (
                      <div className="ms-answers" role="group" aria-label={t('Answer for: {text}', { text: m.text })}>
                        {ANSWERS.map((ans) => (
                          <button
                            key={ans.key}
                            type="button"
                            className={ans.key}
                            aria-pressed={current === ans.key}
                            onClick={() => {
                              haptic();
                              actions.setMilestone(child.id, m.id, current === ans.key ? null : ans.key);
                            }}
                          >
                            {ans.label}
                          </button>
                        ))}
                      </div>
                    )}
                    {current === 'notyet' && (
                      <Link to={`/explore?domain=${info.domains[0]}`} className="ms-help">
                        {t('Ideas to practise through play')} <Icon name="right" size={14} strokeWidth={3} />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {child && notYet.length > 0 && <ActEarly />}

      {child && answered === items.length && notYet.length === 0 && items.length > 0 && (
        <div className="callout science">
          <Emoji e="🎉" size={28} />
          <p>{t('All done for this age! Keep playing, talking and reading together — that’s what helps most.')}</p>
        </div>
      )}

      <p className="footnote">{t('Not a screening tool. Any concern, or lost skills? Talk to your doctor.')}</p>
    </Page>
  );
}
