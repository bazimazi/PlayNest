import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileButton } from '../components/ChildSwitcher';
import { HelpButton } from '../components/Help';
import { Emoji } from '../components/Emoji';
import { Icon } from '../components/Icon';
import { Empty, Page } from '../components/Page';
import { PlanRow } from '../components/PlanRow';
import { PlayTabs } from '../components/PlayTabs';
import { toast } from '../components/Toast';
import { InfoButton, Ring } from '../components/ui';
import { ACTIVITIES, ACTIVITY_BY_ID } from '../data/activities';
import { addDays, startOfWeek, WEEKDAYS, WEEKDAYS_SHORT, weekdayIndex } from '../lib/dates';
import { swapPlanItem } from '../lib/plan';
import { haptic } from '../platform';
import { useActiveChild, useChildSessions, useFavoriteSet, useToday } from '../store/hooks';
import { actions } from '../store/store';
import { useWeekPlan } from '../store/useWeekPlan';
import { dayOfMonth, num, t } from '../i18n';

const HEADING = t('Let’s play!');

export default function Plan() {
  const { child, age } = useActiveChild();
  const now = useToday();
  const sessions = useChildSessions(child?.id);
  const favorites = useFavoriteSet();
  const { plan, rebuild } = useWeekPlan();
  const [day, setDay] = useState(() => weekdayIndex(now));
  const months = age?.months ?? 0;

  const covered = useMemo(
    () => new Set(plan?.items.map((i) => ACTIVITY_BY_ID.get(i.activityId)?.domains[0]).filter(Boolean)),
    [plan],
  );

  if (!child || !age) {
    return (
      <Page world="coral" title={t('Play')} heading={HEADING} actions={<><HelpButton /><ProfileButton /></>} head={<PlayTabs view="week" />}>
        <Empty mood="calm" text={t('Add your child for a balanced week of play made for their age.')}>
          <Link to="/welcome" className="btn btn-primary">
            {t('Add your child')}
          </Link>
        </Empty>
      </Page>
    );
  }

  const items = plan?.items ?? [];
  const doneCount = items.filter((i) => i.done).length;
  const monday = startOfWeek(now);
  const today = weekdayIndex(now);

  const swap = (index: number) => {
    if (!plan) return;
    haptic();
    const next = swapPlanItem(items, index, ACTIVITIES, months, sessions, favorites, (Date.now() ^ index) >>> 0, ACTIVITY_BY_ID, now);
    actions.setPlan(child.id, { ...plan, items: next });
  };

  return (
    <Page world="coral" title={t('Play')} heading={HEADING} actions={<><HelpButton /><ProfileButton /></>} head={<PlayTabs view="week" />}>
      <div className="week-summary card">
        <Ring value={doneCount} max={items.length} size={60} stroke={7} color="var(--brand)" label={t('Plan progress')}>
          <b>{num(doneCount)}</b>
        </Ring>
        <div className="week-summary-text">
          <b>
            {t('{done} of {total} played', { done: doneCount, total: items.length })}
          </b>
          <span>{t('Covers {n} of 8 areas this week', { n: covered.size })}</span>
        </div>
        <button
          type="button"
          className="icon-btn filled"
          aria-label={t('New plan')}
          onClick={() => {
            haptic();
            rebuild(((plan?.seed ?? 1) * 31 + Date.now()) >>> 0);
            toast(t('✨ Fresh plan made'));
          }}
        >
          <Icon name="refresh" size={20} strokeWidth={2.4} />
        </button>
        <InfoButton title={t('How the weekly plan works')}>
          <p>{t('Two ideas a day: one to get moving and one to wind down. Across the week they cover all eight areas of development.')}</p>
          <p>{t('Plans refresh every Monday and never repeat last week. Skip whatever doesn’t suit the day: following your child’s mood matters more than sticking to the plan.')}</p>
        </InfoButton>
      </div>

      <div className="week-strip" role="tablist" aria-label={t('Days of the week')}>
        {WEEKDAYS_SHORT.map((label, i) => {
          const dayItems = items.filter((it) => it.day === i);
          const done = dayItems.filter((it) => it.done).length;
          return (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={day === i}
              aria-label={t('{day}, {done} of {total} done', { day: WEEKDAYS[i], done, total: dayItems.length })}
              className={i === today ? 'today' : ''}
              onClick={() => {
                haptic();
                setDay(i);
              }}
            >
              <span className="wd">{label.slice(0, 1)}</span>
              <span className="dd">{dayOfMonth(addDays(monday, i))}</span>
              <span className="pips" aria-hidden="true">
                {dayItems.length > 0 && done === dayItems.length ? (
                  <Emoji e="🌸" size={14} />
                ) : (
                  dayItems.map((it) => <i key={it.slot} className={it.done ? 'done' : ''} />)
                )}
              </span>
            </button>
          );
        })}
      </div>

      <section className="section" aria-labelledby="day-title">
        <div className="section-head">
          <h2 id="day-title">{day === today ? t('Today') : WEEKDAYS[day]}</h2>
        </div>
        <div className="list">
          {items
            .map((it, index) => ({ it, index }))
            .filter(({ it }) => it.day === day)
            .map(({ it, index }) => {
              const a = ACTIVITY_BY_ID.get(it.activityId);
              if (!a) return null;
              return (
                <PlanRow
                  key={`${it.slot}-${it.activityId}`}
                  item={it}
                  activity={a}
                  onToggle={() => actions.togglePlanItem(child.id, index)}
                  onSwap={() => swap(index)}
                />
              );
            })}
        </div>
      </section>
    </Page>
  );
}
