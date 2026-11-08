import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { ActivityTile } from '../components/ActivityCard';
import { Art } from '../components/Art';
import { ProfileButton } from '../components/ChildSwitcher';
import { Emoji, EmojiText } from '../components/Emoji';
import { Icon } from '../components/Icon';
import { Empty, Page } from '../components/Page';
import { HelpButton } from '../components/Help';
import { PlayTabs } from '../components/PlayTabs';
import { Sheet } from '../components/Sheet';
import { Carousel } from '../components/ui';
import { ACTIVITIES, ACTIVITY_BY_ID } from '../data/activities';
import { AGE_BANDS, DOMAIN_INFO, ENERGY_INFO, SETTING_INFO, TAG_INFO } from '../data/domains';
import { DOMAINS, ENERGIES, SETTINGS, TAGS, type Activity, type Domain, type Energy, type Setting, type Tag } from '../data/types';
import { playCounts } from '../lib/insights';
import { daySeed, isEligible, scoreActivities } from '../lib/recommend';
import { canonicalTerm } from '../lib/search';
import { useActiveChild, useChildSessions, useFavoriteSet, useToday } from '../store/hooks';
import { useStore } from '../store/store';
import { compareText, foldText, num, t } from '../i18n';
import { rich } from '../i18n/rich';

const DURATIONS = [5, 10, 20] as const;
/** Results are rendered in pages to keep long lists snappy. */
const PAGE = 40;
/** One-tap answers to "what can we do right here, right now?" */
const QUICK_SETTINGS: Setting[] = ['outdoor', 'bath', 'car', 'bedtime', 'mealtime', 'waiting'];
/** A collection needs a few real choices at this age before it's worth a tile. */
const MIN_FOR_COLLECTION = 3;
/** A little sticker and its label, for filter chips. */
function ChipLabel({ emoji, label }: { emoji: string; label: string }) {
  return (
    <>
      <Emoji e={emoji} size={20} /> {label}
    </>
  );
}

/** How many results were showing for each filter combination, so Back returns to the same place in a long list. */
const shownByFilters = new Map<string, number>();

function searchText(a: Activity): string {
  return [
    a.title,
    a.summary,
    a.origin ?? '',
    ...a.materials,
    ...a.domains.map((d) => DOMAIN_INFO[d].label),
    ...(a.tags ?? []).map((t) => TAG_INFO[t].label),
  ]
    .join(' ');
}
const INDEX = new Map(ACTIVITIES.map((a) => [a.id, foldText(searchText(a))]));

/** A collection that is a place of its own (talk cards, routines), shown like the others. */
function Shelf({ to, emoji, palette, label }: { to: string; emoji: string; palette: Domain; label: string }) {
  return (
    <Link to={to} className="collection">
      <Art emoji={emoji} seed={to} palette={palette} className="collection-art" />
      <span className="collection-label">{label}</span>
    </Link>
  );
}

export default function Explore() {
  const [params, setParams] = useSearchParams();
  const { child, age } = useActiveChild();
  const sessions = useChildSessions(child?.id);
  const favorites = useFavoriteSet();
  const childCount = useStore((s) => s.children.length);
  const now = useToday();
  const [showFilters, setShowFilters] = useState(false);
  const counts = useMemo(() => playCounts(sessions), [sessions]);
  const more = useRef<HTMLButtonElement>(null);

  const q = params.get('q') ?? '';
  const ageParam = params.get('age') ?? (child ? 'child' : 'all');
  // Values from a link might not exist, so anything unknown is simply ignored.
  const known = <T extends string>(list: readonly T[], value: string | null): T | null => (list.includes(value as T) ? (value as T) : null);
  const domain = known<Domain>(DOMAINS, params.get('domain'));
  const setting = known<Setting>(SETTINGS, params.get('setting'));
  const energy = known<Energy>(ENERGIES, params.get('energy'));
  const tag = known<Tag>(TAGS, params.get('tag'));
  const max = Number(params.get('max')) || null;
  const noMaterials = params.get('nomat') === '1';
  const group = params.get('group') === '1';
  const favOnly = params.get('fav') === '1';
  const freshOnly = params.get('fresh') === '1' && !!child;
  const filterKey = params.toString();
  const [, rerender] = useState(0);
  const shown = shownByFilters.get(filterKey) ?? PAGE;
  const setLimit = (n: number) => {
    shownByFilters.set(filterKey, n);
    rerender((x) => x + 1);
  };

  const update = (patch: Record<string, string | null>) => {
    const next = new URLSearchParams(params);
    for (const [k, v] of Object.entries(patch)) {
      if (v === null || v === '') next.delete(k);
      else next.set(k, v);
    }
    setParams(next, { replace: true });
  };
  const toggle = (key: string, value: string, current: string | null) => update({ [key]: current === value ? null : value });
  const clearAll = () => setParams(child ? { age: 'child' } : {}, { replace: true });

  const results = useMemo(() => {
    const terms = foldText(q).split(/\s+/).filter(Boolean);
    const band = AGE_BANDS.find((b) => b.key === ageParam);
    const list = ACTIVITIES.filter((a) => {
      if (ageParam === 'child' && age && !isEligible(a, age.months)) return false;
      if (band && !(a.minMonths <= band.max && a.maxMonths >= band.min)) return false;
      if (domain && !a.domains.includes(domain)) return false;
      if (setting && !a.settings.includes(setting) && !a.settings.includes('anywhere')) return false;
      if (energy && a.energy !== energy) return false;
      if (tag && !a.tags?.includes(tag)) return false;
      if (max && a.durationMin > max) return false;
      if (noMaterials && a.materialsLevel !== 'none') return false;
      if (group && !a.groupFriendly) return false;
      if (favOnly && !favorites.has(a.id)) return false;
      if (freshOnly && counts.has(a.id)) return false;
      if (terms.length) {
        const text = INDEX.get(a.id) ?? '';
        // Parents search in their own words: "diaper" should find the app's "nappy".
        if (!terms.every((t) => text.includes(t) || text.includes(canonicalTerm(t)))) return false;
      }
      return true;
    });
    if (child && age && ageParam === 'child') {
      const scored = scoreActivities(list, { months: age.months, sessions, favorites, now, seed: daySeed(child.id, now) }, ACTIVITY_BY_ID);
      return scored.sort((a, b) => b.score - a.score).map((s) => s.activity);
    }
    return [...list].sort((a, b) => a.minMonths - b.minMonths || compareText(a.title, b.title));
  }, [q, ageParam, age, domain, setting, energy, tag, max, noMaterials, group, favOnly, freshOnly, counts, favorites, child, sessions, now]);

  // Load the next page as the end of the list scrolls into view (the button stays for keyboards and old browsers).
  useEffect(() => {
    const el = more.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setLimit(shown + PAGE), { rootMargin: '400px' });
    io.observe(el);
    return () => io.disconnect();
  });

  if (params.get('view') === 'guides') return <Navigate to="/learn" replace />;

  // Filters that live in the sheet (the quick chips show their own state).
  const sheetFilters: { label: string; clear: () => void }[] = [];
  if (ageParam !== 'all' && ageParam !== 'child')
    sheetFilters.push({ label: AGE_BANDS.find((b) => b.key === ageParam)?.label ?? ageParam, clear: () => update({ age: child ? 'child' : null }) });
  if (child && ageParam === 'all') sheetFilters.push({ label: t('All ages'), clear: () => update({ age: 'child' }) });
  if (domain) sheetFilters.push({ label: `${DOMAIN_INFO[domain].emoji} ${DOMAIN_INFO[domain].label}`, clear: () => update({ domain: null }) });
  if (setting && !QUICK_SETTINGS.includes(setting))
    sheetFilters.push({ label: `${SETTING_INFO[setting].emoji} ${SETTING_INFO[setting].label}`, clear: () => update({ setting: null }) });
  if (energy) sheetFilters.push({ label: `${ENERGY_INFO[energy].emoji} ${ENERGY_INFO[energy].label}`, clear: () => update({ energy: null }) });
  if (max && max !== 5) sheetFilters.push({ label: t('≤ {n} min', { n: max }), clear: () => update({ max: null }) });
  if (group) sheetFilters.push({ label: t('👫 Siblings'), clear: () => update({ group: null }) });
  if (tag) sheetFilters.push({ label: `${TAG_INFO[tag].emoji} ${TAG_INFO[tag].label}`, clear: () => update({ tag: null }) });

  const forAge = child && age ? ACTIVITIES.filter((a) => isEligible(a, age.months)) : [];
  const triedForAge = forAge.filter((a) => counts.has(a.id)).length;
  const browsing = !q && !tag && !freshOnly && !favOnly;

  const resultsTitle = tag
    ? TAG_INFO[tag].label
    : q
      ? t('Results')
      : ageParam === 'child' && child
        ? t('For {name}', { name: child.name })
        : ageParam === 'all'
          ? t('All ages')
          : AGE_BANDS.find((b) => b.key === ageParam)?.label;

  return (
    <Page
      world="coral"
      title={t('Play')}
      heading={t('Let’s play!')}
      actions={
        <>
          <HelpButton />
          <ProfileButton />
        </>
      }
      head={
        <>
          <PlayTabs view="ideas" />
          <div className="search">
            <Icon name="search" size={20} strokeWidth={2.6} />
            <label htmlFor="search" className="sr-only">
              {t('Search games')}
            </label>
            <input
              id="search"
              type="search"
              enterKeyHint="search"
              placeholder={t('Search {n} games', { n: ACTIVITIES.length })}
              value={q}
              onChange={(e) => update({ q: e.target.value })}
            />
            {q && (
              <button type="button" className="search-clear" aria-label={t('Clear search')} onClick={() => update({ q: null })}>
                <Icon name="x" size={14} strokeWidth={3} />
              </button>
            )}
          </div>
        </>
      }
    >

      <div className="chips scroll" role="group" aria-label={t('Quick filters')}>
        <button type="button" className="chip" aria-pressed={sheetFilters.length > 0} onClick={() => setShowFilters(true)}>
          <Icon name="filter" size={18} strokeWidth={2.6} /> {t('Filters')}{sheetFilters.length > 0 && ` · ${num(sheetFilters.length)}`}
        </button>
        {child && (
          <button type="button" className="chip" aria-pressed={freshOnly} onClick={() => update({ fresh: freshOnly ? null : '1' })}>
            <ChipLabel emoji="🌱" label={t('Not tried')} />
          </button>
        )}
        <button type="button" className="chip" aria-pressed={max === 5} onClick={() => toggle('max', '5', max ? String(max) : null)}>
          <ChipLabel emoji="⏱" label={t('{n} min', { n: 5 })} />
        </button>
        <button type="button" className="chip" aria-pressed={noMaterials} onClick={() => update({ nomat: noMaterials ? null : '1' })}>
          <ChipLabel emoji="🙌" label={t('No toys')} />
        </button>
        {QUICK_SETTINGS.map((s) => (
          <button key={s} type="button" className="chip" aria-pressed={setting === s} onClick={() => toggle('setting', s, setting)}>
            <ChipLabel emoji={SETTING_INFO[s].emoji} label={SETTING_INFO[s].label} />
          </button>
        ))}
        <button type="button" className="chip" aria-pressed={favOnly} onClick={() => update({ fav: favOnly ? null : '1' })}>
          <ChipLabel emoji="❤️" label={t('Saved')} />
        </button>
      </div>

      {browsing && (
        <section className="section" aria-labelledby="collections-title">
          <div className="section-head">
            <h2 id="collections-title">{t('Collections')}</h2>
          </div>
          <Carousel label={t('Collections')}>
            {TAGS.filter((t) => !age || forAge.filter((a) => a.tags?.includes(t)).length >= MIN_FOR_COLLECTION).map((t, i) => (
              <button key={t} type="button" className="collection" aria-pressed={tag === t} onClick={() => toggle('tag', t, tag)}>
                <Art emoji={TAG_INFO[t].emoji} seed={t} palette={DOMAINS[i % DOMAINS.length]} className="collection-art" />
                <span className="collection-label">{TAG_INFO[t].label}</span>
              </button>
            ))}
            {/* Places, not filters, but they belong with the collections: one row of things to browse, not two. */}
            {(!age || age.months >= 36) && <Shelf to="/talk" emoji="💬" palette="language" label={t('Talk cards')} />}
            {(!age || (age.months >= 24 && age.months <= 108)) && <Shelf to="/routines" emoji="🗓️" palette="selfcontrol" label={t('Routines')} />}
            <Shelf to="/celebrate" emoji="🎉" palette="feelings" label={t('Celebrate')} />
          </Carousel>
        </section>
      )}

      {browsing && childCount > 1 && (
        <Link to="/together" className="nudge">
          <span className="nudge-art">
            <Emoji e="👫" size={32} />
          </span>
          <span className="nudge-text">
            <b>{t('Play together')}</b>
            <span>{t('Games for all your children')}</span>
          </span>
          <Icon name="right" size={18} strokeWidth={3} />
        </Link>
      )}

      {sheetFilters.length > 0 && (
        <div className="chips" aria-label={t('Active filters')}>
          {sheetFilters.map((f) => (
            <button key={f.label} type="button" className="chip sm active" onClick={f.clear} aria-label={t('Remove filter {name}', { name: f.label })}>
              <EmojiText text={f.label} size={18} /> <Icon name="x" size={14} strokeWidth={3} />
            </button>
          ))}
        </div>
      )}

      <section className="section" aria-labelledby="results-title">
        <div className="section-head">
          <h2 id="results-title">{resultsTitle}</h2>
          <span className="count" aria-live="polite">
            {num(results.length)}
          </span>
        </div>
        {tag && <p className="section-note">{TAG_INFO[tag].blurb}</p>}
        {ageParam === 'child' && child && triedForAge > 0 && !tag && !q && (
          <div className="explored">
            <span className="progress" aria-hidden="true">
              <i style={{ width: `${(triedForAge / forAge.length) * 100}%` }} />
            </span>
            <span>
              {rich('{name} has tried <b>{n}</b> of {total}', { b: (s) => <b>{s}</b> }, { name: child.name, n: triedForAge, total: forAge.length })}
            </span>
          </div>
        )}
        {results.length === 0 ? (
          <Empty mood="fussy" text={t('Nothing matches all of those filters.')} compact>
            <button type="button" className="btn" onClick={clearAll}>
              {t('Clear filters')}
            </button>
            {q && (
              <Link to={`/search?q=${encodeURIComponent(q)}`} className="btn">
                {t('Search everything')}
              </Link>
            )}
          </Empty>
        ) : (
          <>
            <div className="tile-grid">
              {results.slice(0, shown).map((a) => (
                <ActivityTile key={a.id} activity={a} played={counts.get(a.id)} />
              ))}
            </div>
            {results.length > shown && (
              <button ref={more} type="button" className="btn btn-ghost btn-block" onClick={() => setLimit(shown + PAGE)}>
                {t('Show more · {n} to go', { n: results.length - shown })}
              </button>
            )}
          </>
        )}
      </section>

      {showFilters && (
        <Sheet title={t('Filters')} onClose={() => setShowFilters(false)}>
          {(close) => (
            <>
              <div className="field">
                <span className="label">{t('Age')}</span>
                <div className="chips">
                  {child && (
                    <button type="button" className="chip" aria-pressed={ageParam === 'child'} onClick={() => update({ age: 'child' })}>
                      {t('{name}’s age', { name: child.name })}
                    </button>
                  )}
                  <button type="button" className="chip" aria-pressed={ageParam === 'all'} onClick={() => update({ age: 'all' })}>
                    {t('All ages')}
                  </button>
                  {AGE_BANDS.map((b) => (
                    <button key={b.key} type="button" className="chip" aria-pressed={ageParam === b.key} onClick={() => update({ age: b.key })}>
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="field">
                <span className="label">{t('Area of development')}</span>
                <div className="chips">
                  {DOMAINS.map((d) => (
                    <button key={d} type="button" className="chip" aria-pressed={domain === d} onClick={() => toggle('domain', d, domain)}>
                      <ChipLabel emoji={DOMAIN_INFO[d].emoji} label={DOMAIN_INFO[d].label} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="field">
                <span className="label">{t('Where & when')}</span>
                <div className="chips">
                  {SETTINGS.filter((s) => s !== 'anywhere').map((s) => (
                    <button key={s} type="button" className="chip" aria-pressed={setting === s} onClick={() => toggle('setting', s, setting)}>
                      <ChipLabel emoji={SETTING_INFO[s].emoji} label={SETTING_INFO[s].label} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="field">
                <span className="label">{t('Energy')}</span>
                <div className="chips">
                  {ENERGIES.map((e) => (
                    <button key={e} type="button" className="chip" aria-pressed={energy === e} onClick={() => toggle('energy', e, energy)}>
                      <ChipLabel emoji={ENERGY_INFO[e].emoji} label={ENERGY_INFO[e].label} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="field">
                <span className="label">{t('Time I have')}</span>
                <div className="chips">
                  {DURATIONS.map((d) => (
                    <button key={d} type="button" className="chip" aria-pressed={max === d} onClick={() => toggle('max', String(d), max ? String(max) : null)}>
                      {t('≤ {n} min', { n: d })}
                    </button>
                  ))}
                </div>
              </div>
              <div className="field">
                <span className="label">{t('Who’s playing')}</span>
                <div className="chips">
                  <button type="button" className="chip" aria-pressed={group} onClick={() => update({ group: group ? null : '1' })}>
                    <ChipLabel emoji="👫" label={t('Works with siblings')} />
                  </button>
                </div>
              </div>
              <div className="btn-row sheet-actions">
                <button type="button" className="btn" onClick={clearAll}>
                  {t('Reset')}
                </button>
                <button type="button" className="btn btn-primary" onClick={close}>
                  {t('Show {n}', { n: results.length })}
                </button>
              </div>
            </>
          )}
        </Sheet>
      )}
    </Page>
  );
}
