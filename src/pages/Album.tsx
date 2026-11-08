import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BackButton, Empty, Page, Section } from '../components/Page';
import { Flower } from '../components/PlayGarden';
import { ACTIVITY_BY_ID } from '../data/activities';
import { DOMAIN_INFO } from '../data/domains';
import { intlLocale, t, tn } from '../i18n';
import { hashString } from '../lib/random';
import { useActiveChild, useChildSessions } from '../store/hooks';
import { useStore } from '../store/store';

const W = 340;
const ROW = 62;
const PER_ROW = 8;

/** One month as a pressed-flower page. A quiet month is just a quiet month: it isn't drawn as a gap. */
function MonthPage({ label, flowers, childId }: { label: string; flowers: { id: string; color: string }[]; childId: string }) {
  const rows = Math.ceil(flowers.length / PER_ROW);
  const h = rows * ROW + 12;
  return (
    <article className="album-page">
      <h3>{label}</h3>
      <svg viewBox={`0 0 ${W} ${h}`} role="img" aria-label={tn(flowers.length, '{month}: {n} flower', '{month}: {n} flowers', { month: label })}>
        {flowers.map((f, i) => {
          const seed = hashString(f.id + childId);
          const row = Math.floor(i / PER_ROW);
          const x = 22 + (i % PER_ROW) * ((W - 44) / (PER_ROW - 1));
          return <Flower key={f.id} x={x} ground={(row + 1) * ROW + 6} h={26 + (seed % 18)} color={f.color} seed={seed} still />;
        })}
      </svg>
    </article>
  );
}

/** Every game ever played, kept. Unlike the week's garden, this only ever grows. */
export default function Album() {
  const { child } = useActiveChild();
  const sessions = useChildSessions(child?.id);
  const reads = useStore((s) => s.storyReads);

  // A page is a month in the reader's calendar: a Persian month doesn't begin when a Gregorian one does.
  const months = useMemo(() => {
    const monthName = new Intl.DateTimeFormat(intlLocale(), { month: 'long', year: 'numeric' });
    const map = new Map<string, { id: string; color: string }[]>();
    for (const s of [...sessions].sort((a, b) => (a.date < b.date ? -1 : 1))) {
      const key = monthName.format(new Date(s.date));
      const a = ACTIVITY_BY_ID.get(s.activityId);
      const flowers = map.get(key) ?? [];
      flowers.push({ id: s.id, color: a ? DOMAIN_INFO[a.domains[0]].color : 'var(--d-feelings)' });
      map.set(key, flowers);
    }
    return [...map.entries()].reverse();
  }, [sessions]);

  const shared = reads.filter((r) => r.childId === child?.id).length;

  return (
    <Page world="leaf" title={t('Pressed flowers')} subtitle={t('Every game you’ve played, kept')} back={<BackButton fallback="/growth" />}>
      {months.length === 0 ? (
        <Empty mood="happy" text={t('Each game you play leaves a flower here, to keep.')}>
          <Link to="/" className="btn btn-primary">
            {t('Find a game')}
          </Link>
        </Empty>
      ) : (
        <Section title={tn(sessions.length, '{n} flower so far', '{n} flowers so far')} id="album-title">
          <div className="album">
            {months.map(([label, flowers]) => (
              <MonthPage key={label} label={label} flowers={flowers} childId={child?.id ?? ''} />
            ))}
          </div>
          {shared > 0 && <p className="footnote">{tn(shared, 'And {n} story shared together.', 'And {n} stories shared together.')}</p>}
        </Section>
      )}
    </Page>
  );
}
