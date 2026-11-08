import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ActivityTile } from '../components/ActivityCard';
import { Art } from '../components/Art';
import { ProfileButton } from '../components/ChildSwitcher';
import { Emoji } from '../components/Emoji';
import { CallButton, HelpButton, ReadAloud } from '../components/Help';
import { Icon } from '../components/Icon';
import { BackButton, Empty, Page, Section } from '../components/Page';
import { Carousel, Glyph, ListGroup, ListRow } from '../components/ui';
import { ACTIVITIES } from '../data/activities';
import { COACH } from '../data/coach';
import { COACH_GROUPS, type CoachBand, type CoachGroup, type CoachSituation } from '../data/packs';
import { DOMAINS } from '../data/types';
import { english, foldText, num, t } from '../i18n';
import { hashString } from '../lib/random';
import { isEligible } from '../lib/recommend';
import { useActiveChild } from '../store/hooks';

/** The moments parents reach for first, so they're on top rather than behind a heading. */
const COMMON = ['tantrum-public', 'tantrum-home', 'hitting', 'bedtime-stalling', 'sibling-fight', 'screen-off-meltdown'];

function bandFor(s: CoachSituation, months: number | undefined): CoachBand {
  if (months === undefined) return s.bands[0];
  return s.bands.find((b) => b.minMonths <= months && months <= b.maxMonths) ?? (months < s.minMonths ? s.bands[0] : s.bands[s.bands.length - 1]);
}

/**
 * The help hub. A frightened parent lands here, so the first thing is the way to a person, then first aid, then the
 * rest. Nothing here waits on a network.
 */
export default function Help() {
  const { child, age } = useActiveChild();
  const months = age?.months;
  const [q, setQ] = useState('');

  const situations = useMemo(() => {
    const term = foldText(q.trim());
    return COACH.filter((s) => {
      if (months !== undefined && !(s.minMonths <= months && months <= s.maxMonths)) return false;
      if (!term) return true;
      return foldText([s.title, ...s.keywords].join(' ')).includes(term);
    });
  }, [months, q]);

  const common = situations.filter((s) => COMMON.includes(s.id));
  const groups = (Object.keys(COACH_GROUPS) as CoachGroup[])
    .map((g) => ({ g, list: situations.filter((s) => s.group === g && (q.trim() !== '' || !COMMON.includes(s.id))) }))
    .filter((x) => x.list.length > 0);

  return (
    <Page world="lilac" title={t('Help')} heading={t('We’re here')} subtitle={t('Works with no signal')} back={<BackButton fallback="/" />} actions={<ProfileButton />} className="help">
      <section className="emergency-card" aria-labelledby="emergency-title">
        <h2 id="emergency-title">{t('In an emergency')}</h2>
        <CallButton />
        <Link to="/help/first-aid" className="btn btn-block">
          <Emoji e="🚑" size={22} /> {t('First aid steps')}
        </Link>
      </section>

      <ListGroup>
        {(
          <ListRow to="/help/crying" lead={<Glyph emoji="🍼" tone="var(--d-language)" />} title={t('When crying won’t stop')} subtitle={t('What helps, and when to step away')} />
        )}
        <ListRow to="/help/you" lead={<Glyph emoji="💛" tone="var(--d-feelings)" />} title={t('When it’s too much for you')} subtitle={t('Support, and who to call')} />
        <ListRow to="/sounds" lead={<Glyph emoji="🌊" tone="var(--d-senses)" />} title={t('Soothing sounds')} subtitle={t('Soft noise, with a timer')} />
      </ListGroup>

      {COACH.length > 0 && (months === undefined || months >= 12) && (
        <>
          <div className="search help-search">
            <Icon name="search" size={20} strokeWidth={2.6} />
            <label htmlFor="help-search" className="sr-only">
              {t('Search hard moments')}
            </label>
            <input
              id="help-search"
              type="search"
              enterKeyHint="search"
              placeholder={t('What’s happening?')}
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            {q && (
              <button type="button" className="search-clear" aria-label={t('Clear search')} onClick={() => setQ('')}>
                <Icon name="x" size={14} strokeWidth={3} />
              </button>
            )}
          </div>
          {common.length > 0 && !q && (
            <Section title={t('A hard moment')} id="common-title">
              <ListGroup>
                {common.map((s) => (
                  <ListRow key={s.id} to={`/help/moment/${s.id}`} lead={<Glyph emoji={s.emoji} tone="var(--d-feelings)" />} title={s.title} />
                ))}
              </ListGroup>
            </Section>
          )}
          {groups.map(({ g, list }) => (
            <Section key={g} title={COACH_GROUPS[g].label} id={`group-${g}`}>
              <ListGroup>
                {list.map((s) => (
                  <ListRow key={s.id} to={`/help/moment/${s.id}`} lead={<Glyph emoji={s.emoji} tone="var(--d-feelings)" />} title={s.title} />
                ))}
              </ListGroup>
            </Section>
          ))}
          {situations.length === 0 && (
            <Empty mood="calm" compact text={q ? t('Nothing for “{q}” yet.', { q }) : child ? t('Nothing here for {name} yet.', { name: child.name }) : t('Nothing here for this age yet.')} />
          )}
        </>
      )}
    </Page>
  );
}

export function CoachDetail() {
  const { id = '' } = useParams();
  const { child, age } = useActiveChild();
  const s = COACH.find((x) => x.id === id);

  if (!s) {
    return (
      <Page world="lilac" title={t('Not found')} heading={t('Hmm.')} back={<BackButton fallback="/help" />}>
        <Empty mood="fussy" text={t('We couldn’t find that one.')}>
          <Link to="/help" className="btn btn-primary">
            {t('All help')}
          </Link>
        </Empty>
      </Page>
    );
  }

  const band = bandFor(s, age?.months);
  // Read in English, so that the same lines are urgent in every language.
  const helpInEnglish = english(s.help);
  const urgent = s.help.filter((_, i) => URGENT_LINE.test(helpInEnglish[i]));
  const otherHelp = s.help.filter((_, i) => !URGENT_LINE.test(helpInEnglish[i]));
  const months = age?.months;
  const games = ACTIVITIES.filter(
    (a) => (months === undefined || isEligible(a, months)) && (a.tags?.some((t) => s.later.tags.includes(t)) || a.domains.some((d) => s.later.domains.includes(d))),
  )
    .sort((a, b) => hashString(a.id + s.id) - hashString(b.id + s.id))
    .slice(0, 6);

  return (
    <Page
      world="lilac"
      title={s.title}
      back={<BackButton fallback="/help" />}
      actions={<HelpButton />}
      hero={
        <header className="detail-hero short">
          <Art emoji={s.emoji} seed={s.id} palette={DOMAINS[hashString(s.id) % DOMAINS.length]} energy="calm" className="detail-art" eager live />
        </header>
      }
      className="detail coach"
    >
      <div className="detail-head">
        <h1>{s.title}</h1>
        {child && <p className="detail-summary">{t('For {name}, right now.', { name: child.name })}</p>}
      </div>

      {urgent.length > 0 && (
        <section className="safety-box coach-urgent" aria-label={t('If someone may be in danger')}>
          <ul>
            {urgent.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <CallButton />
          <Link to="/help/you?view=help" className="link-btn">
            {t('Who else to call')}
          </Link>
        </section>
      )}

      <section className="card coach-now" aria-labelledby="now-title">
        <div className="card-head spread">
          <h2 id="now-title">{t('Right now')}</h2>
          <ReadAloud texts={band.rightNow} label={t('Read')} />
        </div>
        <ol className="steps big">
          {band.rightNow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <Section title={t('Try saying')} id="say-title">
        <ul className="say-bubbles">
          {band.say.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Section>

      {band.avoid && band.avoid.length > 0 && (
        <section className="card" aria-labelledby="avoid-title">
          <h2 id="avoid-title">{t('Best to avoid')}</h2>
          <ul className="plain-list">
            {band.avoid.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      )}

      <div className="group disclosure">
        <details>
          <summary>
            <Emoji e="🧠" size={26} />
            {t('Why this helps')}
          </summary>
          <div className="disclosure-body">
            <p>{s.why}</p>
            <p className="footnote">{EVIDENCE[s.evidence]}</p>
          </div>
        </details>
        <details>
          <summary>
            <Emoji e="🩺" size={26} />
            {t('When to get help')}
          </summary>
          <div className="disclosure-body">
            <ul className="plain-list">
              {otherHelp.map((t) => (
                <li key={t}>{t}</li>
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
            <span className="count">{num(s.refs.length)}</span>
          </summary>
          <div className="disclosure-body sources">
            {s.refs.map((r) => (
              <a key={r.url} href={r.url} target="_blank" rel="noreferrer">
                {r.title} — <span className="muted">{r.publisher}</span>
              </a>
            ))}
          </div>
        </details>
      </div>

      {games.length > 0 && (
        <Section title={t('Later, when it’s calm')} id="later-title">
          <p className="section-note">{s.later.text}</p>
          <Carousel label={t('Games to play later')}>
            {games.map((a) => (
              <ActivityTile key={a.id} activity={a} />
            ))}
          </Carousel>
        </Section>
      )}
    </Page>
  );
}

/**
 * Lines about someone being hurt or in danger don't wait behind a tap. The lines reach here already translated, so the
 * test has to know each language's words. `\b` only works on Latin letters, which is why the Persian sits outside it.
 */
const URGENT_LINE = /\b(die|dying|hurt(ing)? (you|your|them|themselves|him|her|someone)|someone (has )?hurt|is hurting|has been hurt|been hurt|might hurt|violence|abuse|in danger)\b/i;

const EVIDENCE: Record<CoachSituation['evidence'], string> = {
  strong: t('Draws on strong research on parenting programmes. This exact card hasn’t been tested.'),
  moderate: t('Draws on some research and on what health bodies advise.'),
  practice: t('General guidance: sensible professional advice, with little research on this exact moment.'),
};
