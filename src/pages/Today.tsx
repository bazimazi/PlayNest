import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ActivityTile } from '../components/ActivityCard';
import { ProfileButton } from '../components/ChildSwitcher';
import { ChooseTogether } from '../components/ChooseTogether';
import { HelpButton } from '../components/Help';
import { RightNowChips, readSituation, writeSituation } from '../components/RightNow';
import { BackupNudge, askToKeepData, shouldSuggestBackup } from '../components/Status';
import { Emoji } from '../components/Emoji';
import { HeroPick } from '../components/HeroPick';
import { Icon } from '../components/Icon';
import { InstallPrompt } from '../components/InstallPrompt';
import { Empty, Page, Section } from '../components/Page';
import { Pip, type PipMood } from '../components/Pip';
import { PlanRow } from '../components/PlanRow';
import { PlayGarden } from '../components/PlayGarden';
import { Ring } from '../components/ui';
import { ACTIVITIES, ACTIVITY_BY_ID } from '../data/activities';
import type { Activity } from '../data/types';
import { MILESTONES, currentChecklistAge, milestoneAgeAdjective } from '../data/milestones';
import { SOURCES } from '../data/sources';
import { TIPS } from '../data/tips';
import { shortAge } from '../lib/age';
import { daysBetween, greeting, toISODate, weekdayIndex } from '../lib/dates';
import { favouriteToRevisit, weekSummary } from '../lib/insights';
import { daySeed, nextTwist, pickReason, recommend } from '../lib/recommend';
import { hashString } from '../lib/random';
import { comingUp } from '../lib/celebrations';
import { hiddenByWeather, seasonFor, type Situation } from '../lib/context';
import { MOOD_WORLD, timeWorld } from '../lib/world';
import { haptic } from '../platform';
import { useActiveChild, useChildSessions, useFavoriteSet, useToday } from '../store/hooks';
import { MOODS, type Mood } from '../store/model';
import { actions, useStore } from '../store/store';
import { useWeekPlan } from '../store/useWeekPlan';
import { t, tn } from '../i18n';

/** How many ranked ideas the hero cycles through before reshuffling. */
const RANKED = 9;

const PIP_MOOD: Record<Mood, PipMood> = { happy: 'happy', energetic: 'energetic', fussy: 'fussy', sleepy: 'sleepy' };

function moodKey(childId: string, now: Date) {
  return `playnest:mood:${childId}:${toISODate(now)}`;
}

function readMood(childId: string, now: Date): Mood | null {
  try {
    return (sessionStorage.getItem(moodKey(childId, now)) as Mood | null) ?? null;
  } catch {
    return null;
  }
}

function Nudge({ to, emoji, title, text }: { to: string; emoji: string; title: string; text: string }) {
  return (
    <Link to={to} className="nudge">
      <span className="nudge-art">
        <Emoji e={emoji} size={32} />
      </span>
      <span className="nudge-text">
        <b>{title}</b>
        <span>{text}</span>
      </span>
      <Icon name="right" size={18} strokeWidth={3} />
    </Link>
  );
}

export default function Today() {
  const { child, age } = useActiveChild();
  const now = useToday();
  const sessions = useChildSessions(child?.id);
  const favorites = useFavoriteSet();
  const childCount = useStore((s) => s.children.length);
  const answers = useStore((s) => (child ? s.milestones[child.id] : undefined));
  const { plan } = useWeekPlan();
  // Counts from the first idea dealt today; past the end of a deal, the next deal carries on (see `dealAt`).
  const [heroIndex, setHeroIndex] = useState(0);
  // Bumped whenever the whole deck is dealt again, so it comes in fresh rather than changing under the finger.
  const [dealNo, setDealNo] = useState(0);
  const [mood, setMoodState] = useState<Mood | null>(() => (child ? readMood(child.id, now) : null));
  const [situation, setSituationState] = useState<Situation>(() => (child ? readSituation(child.id, now) : {}));
  const [choosing, setChoosing] = useState(false);
  const climate = useStore((s) => s.settings.climate);
  const chosenCelebrations = useStore((s) => s.settings.celebrations);

  const setSituation = (next: Situation) => {
    haptic();
    setSituationState(next);
    setHeroIndex(0);
    setDealNo((n) => n + 1);
    if (child) writeSituation(child.id, now, next);
  };

  // Once there's something worth keeping, ask the browser not to clear it.
  const hasPlayed = sessions.length > 0;
  useEffect(() => {
    if (hasPlayed) askToKeepData();
  }, [hasPlayed]);

  const setMood = (m: Mood | null) => {
    haptic();
    setMoodState(m);
    setHeroIndex(0);
    setDealNo((n) => n + 1);
    if (!child) return;
    try {
      if (m) sessionStorage.setItem(moodKey(child.id, now), m);
      else sessionStorage.removeItem(moodKey(child.id, now));
    } catch {
      /* storage unavailable */
    }
  };

  const months = age?.months ?? 0;
  // The deck holds still while it's on screen: hearting the pick or ticking off a plan row mustn't swap the card under
  // the parent's finger. New plays and hearts count from the next deal (a mood, a situation or a new visit).
  const dealt = useMemo(
    () => ({ sessions, favorites }),
    [months, mood, now, child, situation, climate],
  );
  const ctx = useMemo(
    () => ({
      months,
      sessions: dealt.sessions,
      favorites: dealt.favorites,
      mood,
      now,
      seed: child ? daySeed(child.id, now) : 0,
      interests: child?.interests,
      situation,
      season: seasonFor(climate, now),
      live: true,
    }),
    [months, dealt, mood, now, child, situation, climate],
  );

  // Today's plan has its own place on this screen, so the picks don't repeat it.
  const planned = useMemo(
    () => new Set((plan?.items ?? []).filter((it) => it.day === weekdayIndex(now)).map((it) => it.activityId)),
    [plan, now],
  );
  // The deck is dealt RANKED ideas at a time. Past the end of a deal comes the next one, with new ideas where there are
  // enough, and Back can always return through them: an idea once seen is never lost behind a reshuffle.
  const dealAt = useMemo(() => {
    const deals = new Map<number, Activity[]>();
    const deal = (d: number): Activity[] => {
      const known = deals.get(d);
      if (known || !child) return known ?? [];
      const at = { ...ctx, seed: daySeed(child.id, now, d) };
      const any = recommend(ACTIVITIES, at, ACTIVITY_BY_ID, RANKED, (a) => !planned.has(a.id));
      let picks = any;
      if (d > 0) {
        const before = new Set(deal(d - 1).map((a) => a.id));
        const fresh = recommend(ACTIVITIES, at, ACTIVITY_BY_ID, RANKED, (a) => !planned.has(a.id) && !before.has(a.id));
        // Every deal is the same size, so a position in the deck always maps to one card.
        if (fresh.length === any.length) picks = fresh;
      }
      deals.set(d, picks);
      return picks;
    };
    return deal;
  }, [child, ctx, planned, now]);
  const ranked = dealAt(0);
  const cardAt = (i: number) => dealAt(Math.floor(i / ranked.length))[i % ranked.length];
  const hero = ranked.length ? cardAt(heroIndex) : null;

  const tip = useMemo(() => {
    const pool = TIPS.filter((t) => t.minMonths <= months && months <= t.maxMonths);
    const dayNo = daysBetween(new Date(2024, 0, 1), now);
    return pool[(dayNo + (child ? hashString(child.id) : 0)) % pool.length];
  }, [months, now, child]);

  const world = mood ? MOOD_WORLD[mood] : timeWorld(now);

  if (!child || !age) {
    return (
      <Page world={world} title={t('Today')} heading={t('Today')} actions={<><HelpButton /><ProfileButton /></>}>
        <Empty mood="wow" title={t('Who are we playing with?')} text={t('Add your child for ideas matched to their age.')}>
          <Link to="/welcome" className="btn btn-primary btn-lg">
            <Icon name="plus" size={20} strokeWidth={3} /> {t('Add your child')}
          </Link>
          <Link to="/explore" className="btn btn-ghost">
            {t('Browse all games')}
          </Link>
        </Empty>
      </Page>
    );
  }

  const week = weekSummary(sessions, ACTIVITY_BY_ID, now);
  const lovedAgain = favouriteToRevisit(sessions, ACTIVITY_BY_ID, months, now);
  const revisit = lovedAgain && !hiddenByWeather(lovedAgain.activity, situation.weather) ? lovedAgain : null;
  const revisitTwist = revisit && nextTwist(revisit.activity, revisit.played);
  const todayItems = (plan?.items ?? [])
    .map((it, index) => ({ it, index }))
    .filter(({ it }) => {
      const a = ACTIVITY_BY_ID.get(it.activityId);
      return it.day === weekdayIndex(now) && (!a || !hiddenByWeather(a, situation.weather));
    });

  const checklistAge = currentChecklistAge(months);
  const checklist = MILESTONES.filter((m) => m.ageMonths === checklistAge);
  const answered = checklist.filter((m) => answers?.[m.id]).length;
  // The CDC checklists end at 5 years, so an older child doesn't get asked about a stage long past.
  const checkInOpen = months <= 66 && answered < checklist.length;
  const celebrating = comingUp(chosenCelebrations, now)[0];
  const canChoose = months >= 24 && ranked.length >= 3;
  // You picked three, they pick one: the idea on top and the two after it.
  const choices = canChoose ? [0, 1, 2].map((k) => cardAt(heroIndex + k)).filter((a, k, all) => all.findIndex((b) => b.id === a.id) === k) : [];
  const lastPlayed = sessions.reduce((latest, s) => (s.date > latest ? s.date : latest), '');
  // A long gap gets no numbers and no reproach: the garden is simply resting.
  const resting = !!lastPlayed && daysBetween(new Date(lastPlayed), now) >= 14;

  let nudge: ReactNode = null;
  if (mood === 'fussy') {
    nudge = <Nudge to="/help" emoji="💛" title={t('Hard moment?')} text={t('Words to say and what to do right now')} />;
  } else if (celebrating) {
    const when = celebrating.celebration.approximate
      ? t('Around now. Things to do together')
      : celebrating.days === 0
        ? t('Today. Things to do together')
        : celebrating.days === 1
          ? t('Tomorrow. Things to do together')
          : t('In {n} days. Things to do together', { n: celebrating.days });
    nudge = <Nudge to="/celebrate" emoji={celebrating.celebration.emoji} title={celebrating.celebration.name} text={when} />;
  } else if (sessions.length >= 2 && shouldSuggestBackup(now)) {
    nudge = <BackupNudge now={now} childName={child.name} />;
  } else if (revisit) {
    nudge = (
      <Section title={t('Play it again')} id="again-title">
        <div className="revisit">
          <ActivityTile activity={revisit.activity} badge={t('Loved')} />
          {revisitTwist && (
            <p className="twist">
              <span className="twist-label">
                <Icon name="sparkle" size={16} /> {t('New twist')}
              </span>
              {revisitTwist}
            </p>
          )}
        </div>
      </Section>
    );
  } else if (checkInOpen) {
    nudge = (
      <Link to="/milestones?checkin=1" className="nudge" aria-label={t('{age} check-in: {answered} of {total} answered', { age: milestoneAgeAdjective(checklistAge), answered, total: checklist.length })}>
        <Ring value={answered} max={checklist.length} size={52} stroke={6} color="var(--brand)" label={t('Milestones answered')}>
          <Emoji e="🌱" size={24} />
        </Ring>
        <span className="nudge-text">
          <b>{t('{age} check-in', { age: milestoneAgeAdjective(checklistAge) })}</b>
          <span>{answered === 0 ? t('What’s {name} up to? Just two minutes.', { name: child.name }) : t('{n} left to answer', { n: checklist.length - answered })}</span>
        </span>
        <Icon name="right" size={18} strokeWidth={3} />
      </Link>
    );
  } else if (childCount > 1) {
    nudge = <Nudge to="/together" emoji="👫" title={t('Play together')} text={t('Games for all your children')} />;
  } else if (sessions.length >= 2) {
    nudge = <InstallPrompt nudge />;
  }
  // Long names get a smaller title, so the pick stays on the first screen.
  const longName = child.name.length > 12;

  return (
    <Page
      world={world}
      title={child.name}
      eyebrow={greeting(now)}
      subtitle={
        <span className="age-chips">
          <span className="pill">{shortAge(age.chronological)}</span>
          {age.corrected && <span className="pill soft">{t('corrected {age}', { age: shortAge(age.corrected) })}</span>}
        </span>
      }
      actions={
        <>
          <HelpButton />
          <ProfileButton />
        </>
      }
      overlap
      className={`today${longName ? ' long-name' : ''}`}
      head={
        <div className="mood-block">
          <span className="mood-pip" key={mood ?? 'none'}>
            <Pip mood={mood ? PIP_MOOD[mood] : 'happy'} size={70} />
          </span>
          <p className="mood-question" id="mood-question">
            {longName ? t('How are they right now?') : t('How’s {name} right now?', { name: child.name })}
          </p>
          <div className="mood-row" role="group" aria-labelledby="mood-question">
            {(Object.keys(MOODS) as Mood[]).map((m) => (
              <button
                key={m}
                type="button"
                className="mood"
                aria-pressed={mood === m}
                title={MOODS[m].hint}
                onClick={() => setMood(mood === m ? null : m)}
              >
                <span className="mood-face">
                  <Emoji e={MOODS[m].emoji} size={34} eager />
                </span>
                <span className="mood-label">{MOODS[m].label}</span>
              </button>
            ))}
          </div>
        </div>
      }
    >
      {hero ? (
        <HeroPick
          deck={dealNo}
          index={heroIndex}
          cardAt={cardAt}
          reasonFor={(a) => pickReason(a, { ...ctx, childName: child.name }, ACTIVITY_BY_ID)}
          label={mood ? MOODS[mood].heading : t('Today’s pick')}
          position={heroIndex % ranked.length}
          total={ranked.length}
          onMove={setHeroIndex}
          extra={
            canChoose && (
              <button type="button" className="link-btn" onClick={() => setChoosing(true)}>
                <Emoji e="🙋" size={20} /> {t('Let {name} choose', { name: child.name })}
              </button>
            )
          }
        />
      ) : (
        <Empty mood="calm" compact text={t('Nothing quite fits that. Try turning a choice off below.')} />
      )}

      <RightNowChips value={situation} onChange={setSituation} />

      {todayItems.length > 0 && (
        <Section title={t('Today’s plan')} id="plan-today-title" action={<Link to="/plan">{t('This week')}</Link>}>
          <div className="list">
            {todayItems.map(({ it, index }) => {
              const a = ACTIVITY_BY_ID.get(it.activityId);
              return a ? <PlanRow key={it.slot} item={it} activity={a} onToggle={() => actions.togglePlanItem(child.id, index)} /> : null;
            })}
          </div>
        </Section>
      )}

      <Link
        to="/growth"
        className="garden-peek"
        data-world="leaf"
        aria-label={tn(week.sessions, '{name}’s garden: {n} flower this week. See how {name} is growing.', '{name}’s garden: {n} flowers this week. See how {name} is growing.', { name: child.name })}
      >
        <span className="garden-peek-top">
          <span className="garden-peek-title">{t('{name}’s garden', { name: child.name })}</span>
          <span className="garden-peek-count">
            {week.sessions > 0 ? tn(week.sessions, '{n} flower this week', '{n} flowers this week') : resting ? t('Resting. Ready when you are') : t('Ready to plant')}
            <Icon name="right" size={16} strokeWidth={3} />
          </span>
        </span>
        <PlayGarden sessions={sessions} now={now} childId={child.id} />
      </Link>

      {nudge}

      {tip && (
        <aside className="pip-says" aria-label={t('Tip of the day')}>
          <Pip mood="calm" size={72} />
          <div className="bubble">
            <span className="eyebrow">{t('Pip’s tip')}</span>
            <p>{tip.text}</p>
            {tip.source && (
              <a className="source-link" href={SOURCES[tip.source].url} target="_blank" rel="noreferrer">
                {SOURCES[tip.source].publisher}
              </a>
            )}
          </div>
        </aside>
      )}

      {choosing && <ChooseTogether name={child.name} options={choices} onClose={() => setChoosing(false)} />}
    </Page>
  );
}
