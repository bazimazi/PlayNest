import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ActivityTile } from '../components/ActivityCard';
import { ActivityArt } from '../components/Art';
import { BalanceBars } from '../components/BalanceBars';
import { ProfileButton } from '../components/ChildSwitcher';
import { Emoji } from '../components/Emoji';
import { HelpButton } from '../components/Help';
import { Icon } from '../components/Icon';
import { Empty, Page, Section } from '../components/Page';
import { PlayGarden } from '../components/PlayGarden';
import { Sheet } from '../components/Sheet';
import { toast } from '../components/Toast';
import { Carousel, Glyph, InfoButton, ListGroup, ListRow, Ring, SwipeRow } from '../components/ui';
import { ACTIVITIES, ACTIVITY_BY_ID } from '../data/activities';
import { MILESTONES, currentChecklistAge, milestoneAgeAdjective } from '../data/milestones';
import { addDays, formatRelativeDay, toISODate } from '../lib/dates';
import { areaBalance, favouriteActivities, weekSummary } from '../lib/insights';
import { eligibleActivities } from '../lib/recommend';
import { useActiveChild, useChildSessions, useToday } from '../store/hooks';
import { REACTIONS, type Moment, type Session } from '../store/model';
import { actions, useStore } from '../store/store';
import { num, t, tn } from '../i18n';

type Entry = ({ kind: 'session' } & Session) | ({ kind: 'moment' } & Moment);

/** Days of journal shown before "Show older". */
const DAYS_SHOWN = 10;

export default function Growth() {
  const { child, age } = useActiveChild();
  const now = useToday();
  const sessions = useChildSessions(child?.id);
  const allMoments = useStore((s) => s.moments);
  const firstsCount = useStore((s) => s.firsts.filter((f) => f.childId === child?.id).length);
  const answers = useStore((s) => (child ? s.milestones[child.id] : undefined));
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState('');
  const saved = useRef(false);
  const [daysShown, setDaysShown] = useState(DAYS_SHOWN);

  const moments = useMemo(() => allMoments.filter((m) => m.childId === child?.id), [allMoments, child?.id]);

  const days = useMemo(() => {
    const entries: Entry[] = [
      ...sessions.map((s) => ({ kind: 'session' as const, ...s })),
      ...moments.map((m) => ({ kind: 'moment' as const, ...m })),
    ].sort((a, b) => (a.date < b.date ? 1 : -1));
    const groups = new Map<string, Entry[]>();
    for (const e of entries) {
      const key = toISODate(new Date(e.date));
      groups.set(key, [...(groups.get(key) ?? []), e]);
    }
    return [...groups.entries()];
  }, [sessions, moments]);

  if (!child || !age) {
    return (
      <Page world="leaf" title={t('Grow')} heading={t('The garden')} actions={<ProfileButton />}>
        <Empty mood="happy" text={t('Add your child to grow their play garden, track milestones and keep a journal.')}>
          <Link to="/welcome" className="btn btn-primary">
            {t('Add your child')}
          </Link>
        </Empty>
      </Page>
    );
  }

  const week = weekSummary(sessions, ACTIVITY_BY_ID, now);
  const balance = areaBalance(sessions, ACTIVITY_BY_ID, addDays(now, -30));
  const loved = favouriteActivities(sessions, 8);
  const totalMinutes = sessions.reduce((n, s) => n + s.minutes, 0);
  const triedIds = new Set(sessions.map((s) => s.activityId));
  const waiting = eligibleActivities(ACTIVITIES, age.months).filter((a) => !triedIds.has(a.id)).length;

  const checklistAge = currentChecklistAge(age.months);
  const checklist = MILESTONES.filter((m) => m.ageMonths === checklistAge);
  const answered = checklist.filter((m) => answers?.[m.id]).length;

  const saveMoment = (close: () => void) => {
    if (!draft.trim()) return;
    actions.addMoment(child.id, draft.trim());
    saved.current = true;
    close();
    toast(t('📝 Moment saved'));
  };

  const removeSession = (s: Session) => {
    actions.deleteSession(s.id);
    toast(t('Play session removed'), { label: t('Undo'), onClick: () => actions.restoreSession(s) });
  };
  const removeMoment = (m: Moment) => {
    actions.deleteMoment(m.id);
    toast(t('Moment removed'), { label: t('Undo'), onClick: () => actions.restoreMoment(m) });
  };

  const summary =
    week.sessions === 0
      ? t('Every game you play plants a flower here.')
      : t('{plays} · {minutes} together this week', { plays: tn(week.sessions, '{n} play', '{n} plays'), minutes: tn(week.minutes, '{n} minute', '{n} minutes') });

  return (
    <Page
      world="leaf"
      title={t('Grow')}
      heading={t('{name}’s garden', { name: child.name })}
      subtitle={
        <span className="garden-sub">{summary}</span>
      }
      actions={
        <>
          <button type="button" className="icon-btn glass" aria-label={t('Add a moment')} onClick={() => setAdding(true)}>
            <Icon name="plus" size={20} strokeWidth={2.8} />
          </button>
          <HelpButton />
          <ProfileButton />
        </>
      }
      head={<PlayGarden sessions={sessions} now={now} childId={child.id} />}
      className="grow"
    >
      {/* The CDC checklists stop at 5 years. After that, a check-in would be asking about a stage long past. */}
      {age.months <= 66 && (
      <section className="card milestone-card" aria-labelledby="ms-title">
        <Ring value={answered} max={checklist.length} size={64} stroke={7} color="var(--brand)" label={t('Milestones answered')}>
          <b>{num(answered)}</b>
        </Ring>
        <div className="milestone-card-text">
          <h2 id="ms-title">{t('{age} milestones', { age: milestoneAgeAdjective(checklistAge) })}</h2>
          <span className="muted">
            {answered === 0 ? t('A 2-minute check-in') : answered < checklist.length ? t('{done} of {total} answered', { done: answered, total: checklist.length }) : t('All answered')}
          </span>
        </div>
        <div className="milestone-card-actions">
          {answered < checklist.length && (
            <Link to="/milestones?checkin=1" className="btn btn-primary">
              {answered === 0 ? t('Start check-in') : t('Continue check-in')}
            </Link>
          )}
          <Link to="/milestones" className="btn">
            {t('Checklist')}
          </Link>
        </div>
      </section>
      )}

      <ListGroup>
        <ListRow to="/stage" lead={<Glyph emoji="🌱" tone="var(--d-imagination)" />} title={t('This stage')} subtitle={t('What’s going on for {name} now', { name: child.name })} />
        <ListRow to="/firsts" lead={<Glyph emoji="🌟" tone="var(--d-hands)" />} title={t('Firsts')} subtitle={firstsCount > 0 ? tn(firstsCount, '{n} first kept', '{n} firsts kept') : t('The little things to remember')} />
        {sessions.length > 0 && (
          <ListRow to="/album" lead={<Glyph emoji="🌸" tone="var(--d-feelings)" />} title={t('Pressed flowers')} subtitle={tn(sessions.length, '{n} flower kept for good', '{n} flowers kept for good')} />
        )}
        <ListRow to="/print/summary" lead={<Glyph icon="print" tone="var(--d-language)" />} title={t('Summary for a visit')} subtitle={t('One page to print or save')} />
      </ListGroup>

      {triedIds.size > 0 && (
        <Link to="/explore?fresh=1" className="nudge">
          <span className="nudge-art">
            <Emoji e="🧭" size={32} />
          </span>
          <span className="nudge-text">
            <b>{tn(triedIds.size, '{n} different game explored', '{n} different games explored')}</b>
            <span>{waiting > 0 ? t('{n} more to discover at this age', { n: waiting }) : t('You’ve tried every idea for this age!')}</span>
          </span>
          <Icon name="right" size={18} strokeWidth={3} />
        </Link>
      )}

      {sessions.length > 0 && (
        <section className="card" aria-labelledby="balance-title">
          <div className="card-head">
            <div>
              <h2 id="balance-title">{t('Play across 8 areas')}</h2>
              <span className="muted">{t('Last 30 days')}</span>
            </div>
            <InfoButton title={t('Play across 8 areas')}>
              <p>{t('How the last 30 days of play spread across the eight areas of development.')}</p>
              <p>{t('A little of everything is plenty — there’s no need for perfect balance. Today’s pick and the weekly plan gently favour areas that have had less play.')}</p>
            </InfoButton>
          </div>
          <BalanceBars values={balance} />
        </section>
      )}

      {loved.length > 0 && (
        <Section title={t('Most loved')} id="loved-title">
          <Carousel label={t('Most loved')}>
            {loved.map((l) => {
              const a = ACTIVITY_BY_ID.get(l.activityId);
              return a ? <ActivityTile key={l.activityId} activity={a} badge={`😍 ${num(l.loved)}`} /> : null;
            })}
          </Carousel>
        </Section>
      )}

      <Section
        title={t('Journal')}
        id="journal-title"
        action={
          <button type="button" className="link-btn" onClick={() => setAdding(true)}>
            <Icon name="plus" size={18} strokeWidth={2.8} /> {t('Add a moment')}
          </button>
        }
      >
        {days.length === 0 ? (
          <Empty mood="calm" compact text={t('Finished games and moments you add appear here.')}>
            <Link to="/" className="btn">
              {t('Find something to play')}
            </Link>
          </Empty>
        ) : (
          <div className="timeline">
            {days.slice(0, daysShown).map(([day, entries]) => (
              <section key={day} className="timeline-day" aria-label={formatRelativeDay(entries[0].date, now)}>
                <h3>{formatRelativeDay(entries[0].date, now)}</h3>
                <div className="group">
                  {entries.map((e) => {
                    if (e.kind === 'moment') {
                      return (
                        <SwipeRow key={e.id} onDelete={() => removeMoment(e)} deleteLabel={t('Delete moment')}>
                          <div className="entry">
                            <span className="entry-moment" aria-hidden="true">
                              <Emoji e="📝" size={28} />
                            </span>
                            <p className="entry-note">{e.text}</p>
                          </div>
                        </SwipeRow>
                      );
                    }
                    const a = ACTIVITY_BY_ID.get(e.activityId);
                    return (
                      <SwipeRow key={e.id} onDelete={() => removeSession(e)} deleteLabel={t('Delete play session')}>
                        <div className="entry">
                          {a ? (
                            <ActivityArt activity={a} className="thumb" />
                          ) : (
                            <span className="entry-moment" aria-hidden="true">
                              <Emoji e="🎈" size={28} />
                            </span>
                          )}
                          <div className="entry-body">
                            {a ? (
                              <Link to={`/activity/${a.id}`} className="entry-title">
                                {a.title}
                              </Link>
                            ) : (
                              <span className="entry-title">{t('A game')}</span>
                            )}
                            <span className="entry-meta">
                              {t('{n} min', { n: e.minutes })}
                              {e.reaction && (
                                <>
                                  {' · '}
                                  <Emoji e={REACTIONS[e.reaction].emoji} size={16} className="inline" /> {REACTIONS[e.reaction].label}
                                </>
                              )}
                            </span>
                            {e.note && <p className="entry-note">{e.note}</p>}
                          </div>
                        </div>
                      </SwipeRow>
                    );
                  })}
                </div>
              </section>
            ))}
            {days.length > daysShown && (
              <button type="button" className="btn btn-ghost btn-block" onClick={() => setDaysShown((n) => n + DAYS_SHOWN)}>
                {t('Show older')}
              </button>
            )}
            <p className="footnote">
              {t('{plays} · {minutes} · {moments} · swipe left to delete', {
                plays: tn(sessions.length, '{n} play', '{n} plays'),
                minutes: tn(totalMinutes, '{n} minute', '{n} minutes'),
                moments: tn(moments.length, '{n} moment', '{n} moments'),
              })}
            </p>
          </div>
        )}
      </Section>

      {adding && (
        <Sheet
          title={t('Add a moment')}
          onClose={() => {
            setAdding(false);
            // A saved moment clears the box once the sheet has gone; one closed unsaved keeps its words for next time.
            if (saved.current) setDraft('');
            saved.current = false;
          }}
        >
          {(close) => (
            <>
              <div className="field">
                <label className="field-label" htmlFor="moment">
                  {t('What made you smile today?')}
                </label>
                <textarea
                  id="moment"
                  className="textarea"
                  maxLength={500}
                  autoFocus
                  placeholder={t('Said “dada” for the first time! Stacked three blocks…')}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                />
              </div>
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => saveMoment(close)} disabled={!draft.trim()}>
                <Icon name="check" size={20} strokeWidth={3.2} /> {t('Save moment')}
              </button>
            </>
          )}
        </Sheet>
      )}
    </Page>
  );
}
