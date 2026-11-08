import { useMemo, useState } from 'react';
import { ActivityTile } from '../components/ActivityCard';
import { Emoji } from '../components/Emoji';
import { BackButton, Empty, Page, Section } from '../components/Page';
import { Sheet } from '../components/Sheet';
import { Carousel, Glyph, ListGroup, ListRow } from '../components/ui';
import { CELEBRATION_ACTIVITIES } from '../data/activities';
import { CELEBRATIONS } from '../data/celebrations';
import type { Celebration } from '../data/packs';
import { compareText, formatDate, showsOwnScript, t } from '../i18n';
import { rich } from '../i18n/rich';
import { nextDate } from '../lib/celebrations';
import { isEligible } from '../lib/recommend';
import { haptic } from '../platform';
import { useActiveChild, useToday } from '../store/hooks';
import { actions, getState, useStore } from '../store/store';

const shortDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return formatDate(new Date(y, m - 1, d), { day: 'numeric', month: 'long', year: 'numeric' });
};

function CelebrationSheet({ c, onClose }: { c: Celebration; onClose: () => void }) {
  const { age } = useActiveChild();
  const now = useToday();
  const ours = useStore((s) => s.settings.celebrations.includes(c.id));
  const next = nextDate(c, now);
  const games = CELEBRATION_ACTIVITIES.filter((a) => a.celebration === c.id && (!age || isEligible(a, age.months)));
  return (
    <Sheet title={c.name} onClose={onClose}>
      <div className="stack-lg">
        {c.gentleNote && (
          <p className="notice">
            <Emoji e="💛" size={22} />
            <span>{c.gentleNote}</span>
          </p>
        )}
        {showsOwnScript(c.nativeName) && <p className="native-title" dir="auto">{c.nativeName}</p>}
        <p>{c.about}</p>
        <p className="muted">{c.whoCelebrates}</p>
        {c.notEveryone && <p className="muted">{c.notEveryone}</p>}
        {next && (
          <p>
            {c.approximate
              ? rich('<b>Next:</b> around {date}', { b: (s) => <b>{s}</b> }, { date: shortDate(next) })
              : rich('<b>Next:</b> {date}', { b: (s) => <b>{s}</b> }, { date: shortDate(next) })}
          </p>
        )}
        <button
          type="button"
          className={`btn btn-block${ours ? '' : ' btn-primary'}`}
          aria-pressed={ours}
          onClick={() => {
            haptic();
            const list = getState().settings.celebrations;
            actions.setSettings({ celebrations: ours ? list.filter((x) => x !== c.id) : [...list, c.id] });
          }}
        >
          {ours ? t('We mark this ✓') : t('We mark this')}
        </button>
        {games.length > 0 && (
          <Section title={t('To do together')} id="celebrate-games-title">
            <Carousel label={t('Things to do for {name}', { name: c.name })}>
              {games.map((a) => (
                <ActivityTile key={a.id} activity={a} />
              ))}
            </Carousel>
          </Section>
        )}
        {c.respect && <p className="footnote">{c.respect}</p>}
        <div className="sources">
          {c.refs.map((r) => (
            <a key={r.url} href={r.url} target="_blank" rel="noreferrer">
              {r.title} — <span className="muted">{r.publisher}</span>
            </a>
          ))}
        </div>
      </div>
    </Sheet>
  );
}

/**
 * Celebrations are chosen one by one and never guessed: not from a name, a language or a location. A wrong guess about
 * someone's faith is worse than offering nothing. The choice stays on this phone.
 */
export default function Celebrate() {
  const now = useToday();
  const chosen = useStore((s) => s.settings.celebrations);
  const [open, setOpen] = useState<Celebration | null>(null);
  const sorted = useMemo(() => [...CELEBRATIONS].sort((a, b) => compareText(a.name, b.name)), []);
  const ours = sorted.filter((c) => chosen.includes(c.id));

  const row = (c: Celebration) => {
    const next = nextDate(c, now);
    return (
      <ListRow
        key={c.id}
        onClick={() => setOpen(c)}
        lead={<Glyph emoji={c.emoji} tone="var(--d-feelings)" />}
        title={c.name}
        subtitle={next ? (c.approximate ? t('Around {date}', { date: shortDate(next) }) : shortDate(next)) : undefined}
        chevron
      />
    );
  };

  return (
    <Page world="dusk" title={t('Celebrate')} heading={t('What you celebrate')} subtitle={t('Choose as many or as few as you like')} back={<BackButton fallback="/explore" />}>
      {CELEBRATIONS.length === 0 && <Empty mood="calm" compact text={t('Nothing here yet.')} />}
      {ours.length > 0 && (
        <Section title={t('Yours')} id="ours-title">
          <ListGroup>{ours.map(row)}</ListGroup>
        </Section>
      )}
      {sorted.length > 0 && (
        <Section title={t('All')} id="all-title">
          <ListGroup>{sorted.filter((c) => !chosen.includes(c.id)).map(row)}</ListGroup>
          <p className="footnote">{t('Your choices stay on this phone. We’ll never guess them. Dates that depend on a sighting or differ by community are marked “around”.')}</p>
        </Section>
      )}
      {open && <CelebrationSheet c={open} onClose={() => setOpen(null)} />}
    </Page>
  );
}
