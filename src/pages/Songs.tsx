import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Art } from '../components/Art';
import { ProfileButton } from '../components/ChildSwitcher';
import { Emoji } from '../components/Emoji';
import { BedsideToggle, HelpButton } from '../components/Help';
import { Icon } from '../components/Icon';
import { BackButton, Empty, Page, Section } from '../components/Page';
import { Pip } from '../components/Pip';
import { PlayTabs } from '../components/PlayTabs';
import { SONG_TYPES, type Song, type SongType } from '../data/packs';
import { SONGS } from '../data/songs';
import { DOMAINS } from '../data/types';
import { showsOwnScript, t } from '../i18n';
import { formatAgeRange } from '../lib/age';
import { playTune, stopPlayingTune } from '../lib/audio';
import { hashString } from '../lib/random';
import { haptic } from '../platform';
import { useActiveChild } from '../store/hooks';
import { actions, useStore } from '../store/store';

const palette = (id: string) => DOMAINS[hashString(id) % DOMAINS.length];
const fits = (s: Song, months: number | undefined) => months === undefined || (s.minMonths <= months && months <= s.maxMonths);

function SongTile({ song }: { song: Song }) {
  return (
    <div className="tile">
      <Link to={`/songs/${song.id}`} className="tile-link">
        <Art emoji={song.emoji} seed={song.id} palette={palette(song.id)} energy="calm" className="tile-art" />
        <span className="tile-body">
          <span className="tile-title">{song.title}</span>
          <span className="meta-line">
            <span className="meta-item story-culture">{song.culture}</span>
            {song.melody && (
              <span className="meta-item" aria-label={t('Has a tune to listen to')}>
                <Emoji e="🎵" size={16} />
              </span>
            )}
          </span>
        </span>
      </Link>
    </div>
  );
}

export default function Songs() {
  const { child, age } = useActiveChild();
  const [params, setParams] = useSearchParams();
  const saved = useStore((s) => s.savedSongs);
  const asked = params.get('type');
  const type = asked && asked in SONG_TYPES ? (asked as SongType) : null;
  const months = age?.months;

  const forAge = useMemo(() => SONGS.filter((s) => fits(s, months)), [months]);
  const types = (Object.keys(SONG_TYPES) as SongType[]).filter((t) => forAge.some((s) => s.type === t));
  const list = type ? forAge.filter((s) => s.type === type) : forAge;
  const savedList = forAge.filter((s) => saved.includes(s.id));

  return (
    <Page world="sky" title={t('Songs')} heading={t('Sing together')} actions={<><HelpButton /><ProfileButton /></>} head={<PlayTabs view="songs" />}>
      <aside className="pip-says" aria-label={t('About the songbook')}>
        <Pip mood="calm" size={72} />
        <div className="bubble">
          <span className="eyebrow">{t('Pip says')}</span>
          <p>{t('Your voice is the one they want, in tune or not. Tap a song to learn it, then sing it your way.')}</p>
        </div>
      </aside>

      {types.length > 1 && (
        <div className="chips scroll" role="group" aria-label={t('Kinds of song')}>
          {types.map((t) => (
            <button key={t} type="button" className="chip" aria-pressed={type === t} onClick={() => setParams(type === t ? {} : { type: t }, { replace: true })}>
              <Emoji e={SONG_TYPES[t].emoji} size={20} /> {SONG_TYPES[t].label}
            </button>
          ))}
        </div>
      )}

      {savedList.length > 0 && !type && (
        <Section title={t('Saved')} id="saved-songs-title">
          <div className="tile-grid">
            {savedList.map((s) => (
              <SongTile key={s.id} song={s} />
            ))}
          </div>
        </Section>
      )}

      <Section title={type ? SONG_TYPES[type].label : child ? t('For {name}', { name: child.name }) : t('All songs')} id="songs-title">
        {list.length > 0 ? (
          <div className="tile-grid">
            {list.map((s) => (
              <SongTile key={s.id} song={s} />
            ))}
          </div>
        ) : (
          <Empty mood="calm" compact text={t('No songs for this age yet.')} />
        )}
      </Section>

      <Link to="/sounds" className="nudge">
        <span className="nudge-art">
          <Emoji e="🌊" size={32} />
        </span>
        <span className="nudge-text">
          <b>{t('Soothing sounds')}</b>
          <span>{t('Soft noise, with a timer')}</span>
        </span>
        <Icon name="right" size={18} strokeWidth={3} />
      </Link>
    </Page>
  );
}

export function SongPage() {
  const { id = '' } = useParams();
  const song = SONGS.find((s) => s.id === id);
  const saved = useStore((s) => s.savedSongs.includes(id));
  const [playing, setPlaying] = useState(false);
  useEffect(() => () => stopPlayingTune(), []);

  if (!song) {
    return (
      <Page world="sky" title={t('Not found')} heading={t('Hmm.')} back={<BackButton fallback="/songs" />}>
        <Empty mood="fussy" text={t('We couldn’t find that song.')}>
          <Link to="/songs" className="btn btn-primary">
            {t('All songs')}
          </Link>
        </Empty>
      </Page>
    );
  }

  const melody = song.melody;
  const hasOriginal = song.lines.some((l) => l.original);

  return (
    <Page
      world="sky"
      title={song.title}
      back={<BackButton fallback="/songs" />}
      actions={
        <>
          <BedsideToggle />
          <button
            type="button"
            className="icon-btn glass"
            aria-pressed={saved}
            aria-label={saved ? t('Remove {title} from saved', { title: song.title }) : t('Save {title}', { title: song.title })}
            onClick={() => {
              haptic();
              actions.toggleSavedSong(song.id);
            }}
          >
            <Icon name="heart" size={20} filled={saved} strokeWidth={2.4} />
          </button>
        </>
      }
      hero={
        <header className="detail-hero short">
          <Art emoji={song.emoji} seed={song.id} palette={palette(song.id)} energy="calm" className="detail-art" eager live />
          {playing && (
            <span className="note-float" aria-hidden="true">
              <Emoji e="🎵" eager />
              <Emoji e="🎶" eager />
              <Emoji e="🎵" eager />
              <Emoji e="🎶" eager />
              <Emoji e="🎵" eager />
            </span>
          )}
        </header>
      }
      className="detail song"
    >
      <div className="detail-head">
        <h1>{song.title}</h1>
        {showsOwnScript(song.nativeTitle) && <p className="native-title" dir="auto">{song.nativeTitle}</p>}
        <div className="chips">
          <span className="domain-chip plain">
            <Emoji e="🌍" size={18} /> {song.culture}
          </span>
          <span className="domain-chip plain">
            <Emoji e={SONG_TYPES[song.type].emoji} size={18} /> {SONG_TYPES[song.type].label}
          </span>
          <span className="domain-chip plain">
            <Emoji e="🎂" size={18} /> {formatAgeRange(song.minMonths, song.maxMonths)}
          </span>
        </div>
      </div>

      {melody && (
        <section className="card tune-card" aria-labelledby="tune-title">
          <h2 id="tune-title">{t('Learn the tune')}</h2>
          <p>{t('Plays once, so you can sing it yourself. It’s a simple version: real singers bend notes in ways a music box can’t.')}</p>
          <button
            type="button"
            className="btn btn-primary btn-block"
            aria-pressed={playing}
            onClick={() => {
              haptic();
              if (playing) {
                stopPlayingTune();
                return;
              }
              const seconds = playTune(melody.notes, melody.bpm, () => setPlaying(false));
              if (seconds > 0) setPlaying(true);
            }}
          >
            <Icon name={playing ? 'pause' : 'play'} size={20} filled /> {playing ? t('Stop') : t('Hear the tune')}
          </button>
        </section>
      )}

      {song.lines.length > 0 && (
        <Section title={t('The words')} id="words-title">
          <div className="song-words">
            {song.lines.map((l, i) => (
              <p key={i} className="song-line">
                {l.original && (
                  <span className="song-original" dir="auto" lang={undefined}>
                    {l.original}
                  </span>
                )}
                {l.roman && (!l.original || showsOwnScript(l.original)) && <span className="song-roman">{l.roman}</span>}
                <span className={hasOriginal || l.roman ? 'song-english' : 'song-sing'}>{l.english}</span>
              </p>
            ))}
          </div>
        </Section>
      )}

      {song.actions.length > 0 && (
        <Section title={t('While you sing')} id="actions-title">
          <ol className="steps">
            {song.actions.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ol>
        </Section>
      )}

      {song.note && (
        <p className="notice">
          <Emoji e="💡" size={22} />
          <span>{song.note}</span>
        </p>
      )}

      <div className="group disclosure">
        <details>
          <summary>
            <Emoji e="📚" size={26} />
            {t('Where this song comes from')}
          </summary>
          <div className="disclosure-body sources">
            <p>
              {t('{language}. {rights}.', { language: song.language, rights: song.rights })}
            </p>
            {melody && <p className="footnote">{t('Tune from: {source}', { source: melody.source })}</p>}
            {song.refs.map((r) => (
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
