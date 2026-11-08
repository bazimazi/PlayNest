import { Link, useParams } from 'react-router-dom';
import { ActivityTile } from '../components/ActivityCard';
import { Art } from '../components/Art';
import { ProfileButton } from '../components/ChildSwitcher';
import { HelpButton, ReadAloud } from '../components/Help';
import { Icon } from '../components/Icon';
import { Emoji } from '../components/Emoji';
import { BackButton, Empty, Page, Section } from '../components/Page';
import { Carousel, Glyph, ListGroup, ListRow } from '../components/ui';
import { ACTIVITIES } from '../data/activities';
import { GUIDES, GUIDE_BY_SLUG } from '../data/guides';
import { SOURCES } from '../data/sources';
import { STAGES } from '../data/stages';
import { DOMAINS, GUIDE_TOPICS, type Domain, type Guide, type GuideBlock, type GuideTopic } from '../data/types';
import { formatDate, language, num, t, tn } from '../i18n';
import { parseISODate } from '../lib/dates';
import { hashString } from '../lib/random';
import { isEligible } from '../lib/recommend';
import { DOMAIN_WORLD } from '../lib/world';
import { useActiveChild } from '../store/hooks';

/** Each guide gets its own cover colour, derived from its slug, so it's recognisable at a glance. */
const coverPalette = (g: Guide): Domain => DOMAINS[hashString(g.slug) % DOMAINS.length];

function GuideArt({ g, className, eager }: { g: Guide; className?: string; eager?: boolean }) {
  return <Art emoji={g.emoji} seed={g.slug} palette={coverPalette(g)} className={className} eager={eager} />;
}

function GuideCard({ g }: { g: Guide }) {
  return (
    <Link to={`/learn/${g.slug}`} className="guide-card">
      <GuideArt g={g} className="guide-cover" />
      <span className="guide-card-body">
        <span className="guide-title">{g.title}</span>
        <span className="guide-meta">{t('{n} min read', { n: g.minutes })}</span>
      </span>
    </Link>
  );
}

/** The Learn tab: guides for the child's age first (big cards), then everything else as a list. */
export default function Learn() {
  const { child, age } = useActiveChild();
  const months = age?.months;
  const fits = (g: Guide) => months === undefined || (g.minMonths <= months && months <= g.maxMonths);
  const span = (g: Guide) => g.maxMonths - g.minMonths;
  // Guides written for this very age come first, ahead of the ones that suit everybody.
  const relevant = GUIDES.filter(fits).sort((a, b) => span(a) - span(b));
  const others = months === undefined ? [] : GUIDES.filter((g) => !fits(g));
  const stage = months === undefined ? undefined : STAGES.find((s) => s.minMonths <= months && months <= s.maxMonths);
  const shelves = (Object.keys(GUIDE_TOPICS) as GuideTopic[])
    .map((topic) => ({ topic, guides: relevant.filter((g) => g.topic === topic) }))
    .filter((s) => s.guides.length > 0);

  return (
    <Page
      world="lilac"
      title={t('Learn')}
      heading={t('Little reads, big ideas')}
      subtitle={t('Short and backed by research')}
      actions={
        <>
          <HelpButton />
          <ProfileButton />
        </>
      }
    >
      <Link to="/search" className="search search-link">
        <Icon name="search" size={20} strokeWidth={2.6} />
        <span>{t('Search everything')}</span>
      </Link>

      {stage && child && (
        <Link to="/stage" className="tonight">
          <Art emoji={stage.emoji} seed={stage.id} palette="thinking" energy="calm" className="tonight-art" eager live />
          <span className="tonight-text">
            <span className="eyebrow">{t('This stage with {name}', { name: child.name })}</span>
            <b>{stage.title}</b>
            <span>{t('What’s going on, and what to try')}</span>
          </span>
          <Icon name="right" size={18} strokeWidth={3} />
        </Link>
      )}

      <ListGroup>
        <ListRow to="/help" lead={<Glyph icon="lifebuoy" tone="var(--d-feelings)" />} title={t('A hard moment')} subtitle={t('What to do and say right now')} />
        <ListRow to="/help/first-aid" lead={<Glyph emoji="🚑" tone="var(--safety)" />} title={t('First aid')} subtitle={t('Works with no signal')} />
      </ListGroup>

      {shelves.map(({ topic, guides }) => (
        <Section key={topic} title={GUIDE_TOPICS[topic].label} id={`shelf-${topic}`}>
          <Carousel label={GUIDE_TOPICS[topic].label}>
            {guides.map((g) => (
              <GuideCard key={g.slug} g={g} />
            ))}
          </Carousel>
        </Section>
      ))}

      {others.length > 0 && (
        <Section title={t('For other ages')} id="other-title">
          <ListGroup>
            {others.map((g) => (
              <ListRow key={g.slug} to={`/learn/${g.slug}`} lead={<GuideArt g={g} className="thumb sm" />} title={g.title} subtitle={t('{n} min read', { n: g.minutes })} />
            ))}
          </ListGroup>
        </Section>
      )}
    </Page>
  );
}

const CALLOUT_EMOJI = { safety: '🛡️', science: '🔬', tip: '💡' } as const;

/** English shows the date as the guide holds it. Another language needs its own digits and calendar. */
const checkedDate = (iso: string) => (language() === 'en' ? iso : formatDate(parseISODate(iso), { year: 'numeric', month: 'long', day: 'numeric' }));

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case 'p':
      return <p>{block.text}</p>;
    case 'h':
      return <h2>{block.text}</h2>;
    case 'list':
      return (
        <ul>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case 'steps':
      return (
        <ol className="steps">
          {block.items.map((i) => (
            <li key={i.title}>
              <span>
                <b>{i.title}.</b> {i.text}
              </span>
            </li>
          ))}
        </ol>
      );
    case 'callout':
      return (
        <div className={`callout ${block.tone}`}>
          <Emoji e={CALLOUT_EMOJI[block.tone as keyof typeof CALLOUT_EMOJI] ?? '💡'} size={28} />
          <p>{block.text}</p>
        </div>
      );
    case 'table':
      return (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r) => (
                <tr key={r.join('|')}>
                  {r.map((c, i) => (
                    <td key={i}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function GuidePage() {
  const { slug = '' } = useParams();
  const g = GUIDE_BY_SLUG.get(slug);
  const { child, age } = useActiveChild();

  if (!g) {
    return (
      <Page world="lilac" title={t('Not found')} heading={t('Hmm.')} back={<BackButton fallback="/learn" />}>
        <Empty mood="fussy" text={t('We couldn’t find that guide.')}>
          <Link to="/learn" className="btn btn-primary">
            {t('All guides')}
          </Link>
        </Empty>
      </Page>
    );
  }

  const spoken = g.blocks.flatMap((b) => {
    if (b.type === 'p' || b.type === 'h' || b.type === 'callout') return [b.text];
    if (b.type === 'list') return b.items;
    if (b.type === 'steps') return b.items.map((i) => `${i.title}. ${i.text}`);
    return [];
  });
  const refs = g.refs ?? [];

  const related = g.relatedTags
    ? ACTIVITIES.filter((a) => a.tags?.some((t) => g.relatedTags!.includes(t)) && (!age || isEligible(a, age.months))).slice(0, 8)
    : [];

  return (
    <Page
      world={DOMAIN_WORLD[coverPalette(g)]}
      title={g.title}
      back={<BackButton fallback="/learn" />}
      hero={
        <header className="detail-hero">
          <GuideArt g={g} className="detail-art" eager />
        </header>
      }
      className="detail guide"
    >
      <div className="detail-head">
        <h1>{g.title}</h1>
        <p className="detail-summary">{g.summary}</p>
        <div className="chips">
          <span className="domain-chip plain">
            <Emoji e="⏱" size={18} /> {t('{n} min read', { n: g.minutes })}
          </span>
          <span className="domain-chip plain">
            <Emoji e="📚" size={18} /> {tn(g.sources.length + refs.length, '{n} source', '{n} sources')}
          </span>
        </div>
        <ReadAloud texts={spoken} />
      </div>

      <article className="prose">
        {g.blocks.map((b, i) => (
          <Block key={i} block={b} />
        ))}
      </article>

      {related.length > 0 && (
        <Section title={child ? t('Try it with {name}', { name: child.name }) : t('Try it')} id="try-title">
          <Carousel label={t('Related games')}>
            {related.map((a) => (
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
            <span className="count">{num(g.sources.length + refs.length)}</span>
          </summary>
          <div className="disclosure-body sources">
            {g.sources.map((s) => (
              <a key={s} href={SOURCES[s].url} target="_blank" rel="noreferrer">
                {SOURCES[s].title} — <span className="muted">{SOURCES[s].publisher}</span>
              </a>
            ))}
            {refs.map((r) => (
              <a key={r.url} href={r.url} target="_blank" rel="noreferrer">
                {r.title} — <span className="muted">{r.publisher}</span>
              </a>
            ))}
            {g.checkedOn && <p className="footnote">{t('Checked against these sources on {date}.', { date: checkedDate(g.checkedOn) })}</p>}
          </div>
        </details>
      </div>
    </Page>
  );
}
