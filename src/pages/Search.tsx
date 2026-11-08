import { startTransition, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Emoji } from '../components/Emoji';
import { Icon } from '../components/Icon';
import { BackButton, Page, Section } from '../components/Page';
import { Glyph, ListGroup, ListRow } from '../components/ui';
import { num, t } from '../i18n';
import { rich } from '../i18n/rich';
import { formatAgeRange } from '../lib/age';
import { buildIndex, find, looksLikeHealthQuestion, urgentMatches, type Hit, type HitType } from '../lib/search';
import { allSearchDocs } from '../lib/searchDocs';
import { useActiveChild } from '../store/hooks';

const TYPE_LABEL: Record<HitType, string> = {
  firstaid: t('First aid'),
  help: t('Hard moments'),
  game: t('Games'),
  guide: t('Guides'),
  story: t('Stories'),
  song: t('Songs'),
  stage: t('Stages'),
};
const ORDER: HitType[] = ['firstaid', 'help', 'game', 'guide', 'story', 'song', 'stage'];
const PER_TYPE = 4;
const SUGGESTIONS = [t('No toys'), t('Rainy day'), t('Car'), t('Bath'), t('Tantrum'), t('Bedtime'), t('Bored'), t('Sharing')];

function HitRow({ hit }: { hit: Hit }) {
  return (
    <ListRow
      to={hit.to}
      lead={<Glyph emoji={hit.emoji} tone="var(--d-thinking)" />}
      title={hit.title}
      subtitle={`${TYPE_LABEL[hit.type]} · ${formatAgeRange(hit.minMonths, hit.maxMonths)}`}
    />
  );
}

/** One search for everything in the app. Results update as you type, and it never dead-ends. */
export default function Search() {
  const { child, age } = useActiveChild();
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState(params.get('q') ?? '');
  const [results, setResults] = useState<ReturnType<typeof find>>({ hits: [], mode: 'none' });
  const [allAges, setAllAges] = useState(false);
  const [expanded, setExpanded] = useState<HitType | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const index = useMemo(() => buildIndex(allSearchDocs()), []);

  useEffect(() => {
    startTransition(() => setResults(find(index, q)));
    setExpanded(null);
    if (q !== (params.get('q') ?? '')) setParams(q ? { q } : {}, { replace: true });
    // Only the query drives this.
  }, [q, index]);

  const months = age?.months;
  const inAge = (h: Hit) => months === undefined || allAges || (h.minMonths <= months && months <= h.maxMonths);
  const shown = results.hits.filter(inAge);
  const hiddenByAge = results.hits.length - shown.length;
  const urgent = urgentMatches(q);
  const trimmed = q.trim();

  return (
    <Page
      world="coral"
      title={t('Search')}
      back={<BackButton fallback="/" />}
      head={
        <div className="search">
          <Icon name="search" size={20} strokeWidth={2.6} />
          <label htmlFor="search-all" className="sr-only">
            {t('Search everything')}
          </label>
          <input
            id="search-all"
            ref={input}
            type="search"
            inputMode="search"
            enterKeyHint="search"
            autoCapitalize="off"
            autoComplete="off"
            spellCheck={false}
            autoFocus
            placeholder={t('Games, stories, help…')}
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          {q && (
            <button
              type="button"
              className="search-clear"
              aria-label={t('Clear search')}
              onClick={() => {
                setQ('');
                input.current?.focus();
              }}
            >
              <Icon name="x" size={14} strokeWidth={3} />
            </button>
          )}
        </div>
      }
    >
      {urgent.map((u) => (
        <Link key={u.to} to={u.to} className="urgent-hit">
          <Emoji e={u.emoji} size={32} />
          <span className="nudge-text">
            <b>{u.title}</b>
            <span>{u.subtitle}</span>
          </span>
          <Icon name="right" size={18} strokeWidth={3} />
        </Link>
      ))}

      {!trimmed && (
        <Section title={t('Try')} id="suggest-title">
          <div className="chips">
            {SUGGESTIONS.map((s) => (
              <button key={s} type="button" className="chip" onClick={() => setQ(s)}>
                {s}
              </button>
            ))}
          </div>
        </Section>
      )}

      {trimmed && results.mode === 'similar' && <p className="section-note">{t('No exact match for “{q}”. Showing similar words.', { q: trimmed })}</p>}
      {trimmed && results.mode === 'partial' && <p className="section-note">{t('Showing results with some of those words.')}</p>}

      {trimmed && child && (hiddenByAge > 0 || allAges) && (
        <div className="chips">
          <button type="button" className="chip" aria-pressed={!allAges} onClick={() => setAllAges(!allAges)}>
            {allAges ? t('Only for {name}’s age', { name: child.name }) : t('{n} more for other ages', { n: hiddenByAge })}
          </button>
        </div>
      )}

      {ORDER.map((type) => {
        const list = shown.filter((h) => h.type === type);
        if (!list.length) return null;
        const open = expanded === type;
        return (
          <Section key={type} title={TYPE_LABEL[type]} id={`hits-${type}`} action={<span className="count">{num(list.length)}</span>}>
            <ListGroup>
              {(open ? list : list.slice(0, PER_TYPE)).map((h) => (
                <HitRow key={h.id} hit={h} />
              ))}
            </ListGroup>
            {!open && list.length > PER_TYPE && (
              <button type="button" className="btn btn-ghost btn-block" onClick={() => setExpanded(type)}>
                {t('See all {n}', { n: list.length })}
              </button>
            )}
          </Section>
        );
      })}

      {trimmed && shown.length === 0 && (
        <section className="empty compact" aria-live="polite">
          <h2>{t('Nothing for “{q}” yet', { q: trimmed })}</h2>
          {hiddenByAge === 0 && <p>{t('Try fewer words, or browse below.')}</p>}
          <div className="btn-row">
            <Link to="/explore" className="btn">
              {t('All games')}
            </Link>
            <Link to="/learn" className="btn">
              {t('Guides')}
            </Link>
          </div>
        </section>
      )}

      {trimmed && looksLikeHealthQuestion(trimmed) && (
        <p className="notice">
          <Emoji e="🩺" size={22} />
          <span>
            {rich('PlayNest doesn’t answer health questions. For worries, talk to your doctor. <link>Get help now</link>', { link: (s) => <Link to="/help">{s}</Link> })}
          </span>
        </p>
      )}
    </Page>
  );
}
