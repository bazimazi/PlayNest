import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ActivityTile } from '../components/ActivityCard';
import { Art } from '../components/Art';
import { Emoji } from '../components/Emoji';
import { BackButton, Empty, Page, Section } from '../components/Page';
import { Carousel } from '../components/ui';
import { ACTIVITIES } from '../data/activities';
import type { StageCard } from '../data/packs';
import { STAGES } from '../data/stages';
import { DOMAINS } from '../data/types';
import { num, t } from '../i18n';
import { hashString } from '../lib/random';
import { isEligible } from '../lib/recommend';
import { useActiveChild } from '../store/hooks';

export function stageFor(months: number): StageCard | undefined {
  return STAGES.find((s) => s.minMonths <= months && months <= s.maxMonths) ?? STAGES[STAGES.length - 1];
}

/** The heading already says "worth asking", so each line needn't say it again. */
function withoutLeadIn(line: string): string {
  const rest = line.replace(/^Worth asking( your doctor( or health visitor)?)?( about)?( if)?[:,]?\s*/i, '');
  return rest.charAt(0).toUpperCase() + rest.slice(1);
}

/** What's going on at this age, in ranges: the antidote to comparing with other children. */
export default function Stage() {
  const { child, age } = useActiveChild();
  const stage = age ? stageFor(age.months) : STAGES[0];
  const months = age?.months;

  const games = useMemo(() => {
    if (!stage) return [];
    return ACTIVITIES.filter(
      (a) => (months === undefined || isEligible(a, months)) && (a.tags?.some((t) => stage.tags.includes(t)) || a.domains.some((d) => stage.domains.includes(d))),
    )
      .sort((a, b) => hashString(a.id + stage.id) - hashString(b.id + stage.id))
      .slice(0, 8);
  }, [stage, months]);

  if (!stage) {
    return (
      <Page world="lilac" title={t('This stage')} back={<BackButton fallback="/learn" />}>
        <Empty mood="calm" compact text={t('Nothing here yet.')} />
      </Page>
    );
  }

  return (
    <Page
      world="lilac"
      title={t('This stage')}
      back={<BackButton fallback="/learn" />}
      hero={
        <header className="detail-hero short">
          <Art emoji={stage.emoji} seed={stage.id} palette={DOMAINS[hashString(stage.id) % DOMAINS.length]} energy="calm" className="detail-art" eager live />
        </header>
      }
      className="detail stage"
    >
      <div className="detail-head">
        <h1>{stage.title}</h1>
        {child && <p className="detail-summary">{t('Every child gets there their own way, {name} included.', { name: child.name })}</p>}
      </div>

      <Section title={t('What’s going on')} id="happening-title">
        <ul className="plain-list big">
          {stage.happening.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Section>

      <Section title={t('Try this week')} id="try-title">
        <ul className="say-bubbles">
          {stage.tryThis.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Section>

      <section className="card kind-card" aria-labelledby="fine-title">
        <h2 id="fine-title">
          <Emoji e="🌱" size={24} /> {t('Usually nothing to worry about')}
        </h2>
        <ul className="plain-list">
          {stage.usuallyFine.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="card" aria-labelledby="ask-title">
        <h2 id="ask-title">
          <Emoji e="🩺" size={24} /> {t('Worth asking a doctor or health visitor')}
        </h2>
        <ul className="plain-list">
          {stage.worthAsking.map((t) => (
            <li key={t}>{withoutLeadIn(t)}</li>
          ))}
        </ul>
        <p className="footnote">{t('If something worries you, ask. You know your child best, and asking early never hurts.')}</p>
        <Link to="/print/summary" className="link-btn">
          {t('Make a summary for a visit')}
        </Link>
      </section>

      {games.length > 0 && (
        <Section title={t('Games for now')} id="games-title">
          <Carousel label={t('Games for this stage')}>
            {games.map((a) => (
              <ActivityTile key={a.id} activity={a} />
            ))}
          </Carousel>
        </Section>
      )}

      <div className="group disclosure">
        <details>
          <summary>
            <Emoji e="📚" size={26} />
            {t('Sources')}
            <span className="count">{num(stage.refs.length)}</span>
          </summary>
          <div className="disclosure-body sources">
            {stage.refs.map((r) => (
              <a key={r.url} href={r.url} target="_blank" rel="noreferrer">
                {r.title} — <span className="muted">{r.publisher}</span>
              </a>
            ))}
          </div>
        </details>
      </div>
    </Page>
  );
}
