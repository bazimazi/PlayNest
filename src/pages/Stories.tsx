import { useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Art } from '../components/Art';
import { ProfileButton } from '../components/ChildSwitcher';
import { Emoji } from '../components/Emoji';
import { BedsideToggle, DimOffer, HelpButton, ReadAloud } from '../components/Help';
import { Icon } from '../components/Icon';
import { BackButton, Empty, Page, Section } from '../components/Page';
import { Pip } from '../components/Pip';
import { PlayTabs } from '../components/PlayTabs';
import { toast } from '../components/Toast';
import { STORY_THEMES, type Story, type StoryPromptKind, type StoryTheme } from '../data/packs';
import { STORIES } from '../data/stories';
import { DOMAINS } from '../data/types';
import { num, showsOwnScript, t, tn } from '../i18n';
import { burst } from '../lib/motion';
import { formatAgeRange } from '../lib/age';
import { daysBetween } from '../lib/dates';
import { hashString } from '../lib/random';
import { haptic } from '../platform';
import { useActiveChild, useToday } from '../store/hooks';
import { actions, useStore } from '../store/store';

const palette = (id: string) => DOMAINS[hashString(id) % DOMAINS.length];

const THEME_LABEL: Record<StoryTheme, string> = {
  kindness: t('Kindness'),
  cleverness: t('Clever ideas'),
  bravery: t('Bravery'),
  sharing: t('Sharing'),
  patience: t('Patience'),
  fear: t('Scared of something'),
  nature: t('Nature'),
  siblings: t('Brothers and sisters'),
  friendship: t('Friends'),
  bedtime: t('Bedtime'),
  honesty: t('Telling the truth'),
  family: t('Family'),
};

const fits = (s: Story, months: number | undefined) => months === undefined || (s.minMonths <= months && months <= s.maxMonths);

function StoryTile({ story, read }: { story: Story; read?: number }) {
  return (
    <div className="tile">
      <Link to={`/stories/${story.id}`} className="tile-link">
        <Art emoji={story.emoji} seed={story.id} palette={palette(story.id)} energy="calm" className="tile-art" />
        {read ? (
          <span className="tile-badge" aria-label={tn(read, 'Shared {n} time', 'Shared {n} times')}>
            <Emoji e="📖" size={16} /> {num(read)}
          </span>
        ) : null}
        <span className="tile-body">
          <span className="tile-title">{story.title}</span>
          <span className="meta-line">
            <span className="meta-item">
              <Icon name="clock" size={15} strokeWidth={2.6} />
              {t('{n} min', { n: story.minutes })}
            </span>
            <span className="meta-item story-culture">{story.culture}</span>
          </span>
        </span>
      </Link>
    </div>
  );
}

export default function Stories() {
  const { child, age } = useActiveChild();
  const now = useToday();
  const [params, setParams] = useSearchParams();
  const reads = useStore((s) => s.storyReads);
  const saved = useStore((s) => s.savedStories);
  const asked = params.get('theme');
  const theme = STORY_THEMES.includes(asked as StoryTheme) ? (asked as StoryTheme) : null;
  const months = age?.months;

  const forAge = useMemo(() => STORIES.filter((s) => fits(s, months)), [months]);
  const list = theme ? forAge.filter((s) => s.themes.includes(theme)) : forAge;
  const readCounts = useMemo(() => {
    const m = new Map<string, number>();
    for (const r of reads) if (r.childId === child?.id) m.set(r.storyId, (m.get(r.storyId) ?? 0) + 1);
    return m;
  }, [reads, child?.id]);

  // One gentle story a night for this child, the same until tomorrow, favouring ones not read yet.
  const tonight = useMemo(() => {
    const pool = forAge.filter((s) => s.bedtime);
    if (!pool.length) return null;
    const fresh = pool.filter((s) => !readCounts.has(s.id));
    const from = fresh.length ? fresh : pool;
    const day = daysBetween(new Date(2024, 0, 1), now);
    return from[(day + (child ? hashString(child.id) : 0)) % from.length];
  }, [forAge, readCounts, now, child]);

  const themes = STORY_THEMES.filter((t) => forAge.some((s) => s.themes.includes(t)));
  const savedList = forAge.filter((s) => saved.includes(s.id));

  return (
    <Page world="dusk" title={t('Stories')} heading={t('Story time')} actions={<><HelpButton /><ProfileButton /></>} head={<PlayTabs view="stories" />}>
      {tonight && !theme && (
        <Link to={`/stories/${tonight.id}`} className="tonight">
          <Art emoji={tonight.emoji} seed={tonight.id} palette={palette(tonight.id)} energy="calm" className="tonight-art" eager live />
          <span className="tonight-text">
            <span className="eyebrow">{t('Tonight’s story')}</span>
            <b>{tonight.title}</b>
            <span>
              {t('{n} min · {culture}', { n: tonight.minutes, culture: tonight.culture })}
            </span>
          </span>
          <Icon name="right" size={18} strokeWidth={3} />
        </Link>
      )}

      {themes.length > 0 && (
        <div className="chips scroll" role="group" aria-label={t('Story themes')}>
          {themes.map((t) => (
            <button
              key={t}
              type="button"
              className="chip"
              aria-pressed={theme === t}
              onClick={() => setParams(theme === t ? {} : { theme: t }, { replace: true })}
            >
              {THEME_LABEL[t]}
            </button>
          ))}
        </div>
      )}

      {savedList.length > 0 && !theme && (
        <Section title={t('Saved')} id="saved-title">
          <div className="tile-grid">
            {savedList.map((s) => (
              <StoryTile key={s.id} story={s} read={readCounts.get(s.id)} />
            ))}
          </div>
        </Section>
      )}

      <Section title={theme ? THEME_LABEL[theme] : child ? t('For {name}', { name: child.name }) : t('All stories')} id="stories-title">
        {list.length > 0 ? (
          <div className="tile-grid">
            {list.map((s) => (
              <StoryTile key={s.id} story={s} read={readCounts.get(s.id)} />
            ))}
          </div>
        ) : (
          <Empty mood="calm" compact text={months !== undefined && months < 24 ? t('Stories start around age 2. For now, try songs and your own voice.') : t('No stories for this age yet.')}>
            <Link to="/songs" className="btn">
              {t('Songs')}
            </Link>
          </Empty>
        )}
      </Section>
    </Page>
  );
}

const PROMPT_LABEL: Record<StoryPromptKind, string> = {
  completion: t('Finish it'),
  recall: t('Remember'),
  open: t('What do you think?'),
  wh: t('Ask'),
  distancing: t('And you?'),
};

export function StoryPage() {
  const { id = '' } = useParams();
  const { child } = useActiveChild();
  const story = STORIES.find((s) => s.id === id);
  const saved = useStore((s) => s.savedStories.includes(id));
  const [telling, setTelling] = useState(false);
  const [shared, setShared] = useState(false);

  if (!story) {
    return (
      <Page world="dusk" title={t('Not found')} heading={t('Hmm.')} back={<BackButton fallback="/stories" />}>
        <Empty mood="fussy" text={t('We couldn’t find that story.')}>
          <Link to="/stories" className="btn btn-primary">
            {t('All stories')}
          </Link>
        </Empty>
      </Page>
    );
  }

  return (
    <Page
      world="dusk"
      title={story.title}
      back={<BackButton fallback="/stories" />}
      actions={
        <>
          <BedsideToggle />
          <button
            type="button"
            className="icon-btn glass"
            aria-pressed={saved}
            aria-label={saved ? t('Remove {title} from saved', { title: story.title }) : t('Save {title}', { title: story.title })}
            onClick={() => {
              haptic();
              actions.toggleSavedStory(story.id);
            }}
          >
            <Icon name="heart" size={20} filled={saved} strokeWidth={2.4} />
          </button>
        </>
      }
      hero={
        <header className="detail-hero short">
          <Art emoji={story.emoji} seed={story.id} palette={palette(story.id)} energy="calm" className="detail-art" eager live />
        </header>
      }
      className="detail story"
    >
      <div className="detail-head">
        <h1>{story.title}</h1>
        {showsOwnScript(story.nativeTitle) && <p className="native-title" dir="auto">{story.nativeTitle}</p>}
        <div className="chips">
          <span className="domain-chip plain">
            <Emoji e="🌍" size={18} /> {story.culture}
          </span>
          <span className="domain-chip plain">
            <Emoji e="⏱" size={18} /> {t('{n} min', { n: story.minutes })}
          </span>
          <span className="domain-chip plain">
            <Emoji e="🎂" size={18} /> {formatAgeRange(story.minMonths, story.maxMonths)}
          </span>
        </div>
      </div>

      {story.note && (
        <p className="notice">
          <Emoji e="💡" size={22} />
          <span>{story.note}</span>
        </p>
      )}

      <DimOffer />
      <div className="story-tools">
        <ReadAloud texts={story.paragraphs} />
        <button type="button" className="btn" aria-pressed={telling} onClick={() => setTelling(!telling)}>
          <Emoji e="🗣️" size={20} /> {telling ? t('Show the words') : t('Tell it yourself')}
        </button>
      </div>

      {telling ? (
        <section className="card" aria-labelledby="beats-title">
          <h2 id="beats-title">{t('The story in a few beats')}</h2>
          <p className="section-note">{t('Read these, then put the phone away and tell it your way. Change whatever you like.')}</p>
          <ol className="steps big">
            {story.beats.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ol>
        </section>
      ) : (
        <article className="story-text">
          <span className="read-progress" aria-hidden="true" />
          {story.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
      )}

      <Section title={t('Afterwards, you could ask')} id="prompts-title">
        <ul className="say-bubbles">
          {story.prompts.map((p) => (
            <li key={p.text}>
              <span className="say-kind">{PROMPT_LABEL[p.kind]}</span> {p.text}
            </li>
          ))}
        </ul>
        <div className="say-note">
          <Pip mood="happy" size={44} />
          <p>{t('Then wait. Whatever they say is the right answer.')}</p>
        </div>
      </Section>

      {child && (
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          disabled={shared}
          onClick={(e) => {
            haptic('success');
            burst(e.currentTarget, 'stars', 8);
            actions.logStoryRead(child.id, story.id);
            setShared(true);
            toast(t('📖 Added to your story shelf'));
          }}
        >
          <Icon name="check" size={20} strokeWidth={3} /> {shared ? t('Added') : t('We shared this')}
        </button>
      )}

      <div className="group disclosure">
        <details>
          <summary>
            <Emoji e="📚" size={26} />
            {t('Where this story comes from')}
          </summary>
          <div className="disclosure-body sources">
            <p>{t('A traditional story, retold for PlayNest in our own words.')}</p>
            {story.refs.map((r) => (
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
