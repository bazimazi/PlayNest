import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ActivityTile } from '../components/ActivityCard';
import { Avatar } from '../components/ChildSwitcher';
import { BackButton, Empty, Page, Section } from '../components/Page';
import { InfoButton } from '../components/ui';
import { ACTIVITIES } from '../data/activities';
import { childAge } from '../lib/age';
import { togetherActivities, type TogetherMatch } from '../lib/together';
import { haptic } from '../platform';
import { useToday } from '../store/hooks';
import { useStore } from '../store/store';
import { commaList, num, t } from '../i18n';

const TIPS = [
  t('Give the older child a “leader” or “teacher” role — explaining the game stretches their thinking too.'),
  t('Give the younger child a simpler job: the one who rings the bell, holds the basket or says “go!”'),
  t('Play cooperative versions so everyone wins together.'),
  t('Keep it short and end on a happy note before anyone gets frustrated.'),
];

/** How many results each section shows before "Show all". */
const SHOWN = 6;

function MatchGrid({ matches, badge }: { matches: TogetherMatch[]; badge?: (m: TogetherMatch) => string | undefined }) {
  const [all, setAll] = useState(false);
  return (
    <>
      <div className="tile-grid">
        {(all ? matches : matches.slice(0, SHOWN)).map((m) => (
          <ActivityTile key={m.activity.id} activity={m.activity} badge={badge?.(m)} />
        ))}
      </div>
      {!all && matches.length > SHOWN && (
        <button type="button" className="btn btn-ghost btn-block" onClick={() => setAll(true)}>
          {t('Show all {n}', { n: matches.length })}
        </button>
      )}
    </>
  );
}

export default function Together() {
  const children = useStore((s) => s.children);
  const now = useToday();
  const [picked, setPicked] = useState<string[]>(() => children.map((c) => c.id));

  const playing = useMemo(
    () =>
      children
        .filter((c) => picked.includes(c.id))
        .map((c) => ({ child: c, months: childAge(c.birthDate, c.weeksEarly, now).months }))
        .sort((a, b) => a.months - b.months),
    [children, picked, now],
  );
  const matches = useMemo(() => togetherActivities(ACTIVITIES, playing.map((p) => p.months)), [playing]);
  const perfect = matches.filter((m) => m.fit === 'perfect');
  const adapt = matches.filter((m) => m.fit === 'adapt');
  const helper = matches.filter((m) => m.fit === 'helper');
  const youngest = playing[0]?.child;
  const olderNames = playing.slice(1).map((p) => p.child.name);
  const helperNames = olderNames.length > 1 ? t('{names} and {last}', { names: commaList(olderNames.slice(0, -1)), last: olderNames[olderNames.length - 1] }) : olderNames[0];

  const tips = (
    <InfoButton title={t('Playing with mixed ages')}>
      <ul>
        {TIPS.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <p>
        <Link to="/learn/siblings">{t('Read the guide: playing with siblings')}</Link>
      </p>
    </InfoButton>
  );

  if (children.length < 2) {
    return (
      <Page world="dusk" title={t('Play together')} back={<BackButton fallback="/explore" />}>
        <Empty mood="happy" text={t('Add two or more children to find games everyone can enjoy.')}>
          <Link to="/settings" className="btn btn-primary">
            {t('Add a child')}
          </Link>
        </Empty>
      </Page>
    );
  }

  return (
    <Page
      world="dusk"
      title={t('Play together')}
      back={<BackButton fallback="/explore" />}
      actions={tips}
      head={
        <div className="who-row" role="group" aria-label={t('Children playing')}>
          {children.map((c) => {
            const on = picked.includes(c.id);
            return (
              <button
                key={c.id}
                type="button"
                className="who"
                aria-pressed={on}
                onClick={() => {
                  haptic();
                  setPicked(on ? picked.filter((x) => x !== c.id) : [...picked, c.id]);
                }}
              >
                <Avatar child={c} size="lg" />
                <span>{c.name}</span>
              </button>
            );
          })}
        </div>
      }
    >
      {picked.length < 2 ? (
        <p className="notice">{t('Pick at least two children.')}</p>
      ) : (
        <>
          {perfect.length > 0 && (
            <Section title={t('Fits everyone')} id="fits-title" action={<span className="count">{num(perfect.length)}</span>}>
              <MatchGrid matches={perfect} badge={(m) => (m.activity.groupFriendly ? t('Group') : undefined)} />
            </Section>
          )}

          {adapt.length > 0 && (
            <Section title={t('With a little adapting')} id="adapt-title" action={<span className="count">{num(adapt.length)}</span>}>
              <p className="section-note">{t('Use the easier or harder version for whoever is outside the age range.')}</p>
              <MatchGrid matches={adapt} badge={() => t('Adapt')} />
            </Section>
          )}

          {helper.length > 0 && youngest && (
            <Section
              title={
                olderNames.length > 1
                  ? t('{names} lead, {name} plays', { names: helperNames, name: youngest.name })
                  : t('{names} leads, {name} plays', { names: helperNames, name: youngest.name })
              }
              id="helper-title"
              action={<span className="count">{num(helper.length)}</span>}
            >
              <p className="section-note">
                {olderNames.length > 1
                  ? t('Games {names} have outgrown — perfect for a big kid to run. Show the first step, then let them lead while you stay close.', { names: helperNames })
                  : t('Games {names} has outgrown — perfect for a big kid to run. Show the first step, then let them lead while you stay close.', { names: helperNames })}
              </p>
              <MatchGrid matches={helper} badge={() => t('Big kid leads')} />
            </Section>
          )}

          {perfect.length + adapt.length + helper.length === 0 && (
            <Empty mood="calm" compact text={t('Nothing fits everyone exactly — try two children at a time.')} />
          )}
        </>
      )}
    </Page>
  );
}
