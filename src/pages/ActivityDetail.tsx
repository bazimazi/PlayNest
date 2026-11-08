import { Link, useParams } from 'react-router-dom';
import { ActivityTile, DomainChip, FavoriteButton } from '../components/ActivityCard';
import { ActivityArt } from '../components/Art';
import { Emoji } from '../components/Emoji';
import { Icon } from '../components/Icon';
import { BackButton, BottomBar, Empty, Page, Section } from '../components/Page';
import { MakeItWork } from '../components/MakeItWork';
import { Pip } from '../components/Pip';
import { toast } from '../components/Toast';
import { Carousel } from '../components/ui';
import { ACTIVITIES, ACTIVITY_BY_ID } from '../data/activities';
import { DOMAIN_INFO, ENERGY_INFO, SETTING_INFO, TAG_INFO } from '../data/domains';
import { SOURCES } from '../data/sources';
import type { Activity } from '../data/types';
import { formatAgeRange } from '../lib/age';
import { formatRelativeDay } from '../lib/dates';
import { isEligible, nextTwist } from '../lib/recommend';
import { DOMAIN_WORLD } from '../lib/world';
import { shareText } from '../platform';
import { useActiveChild, useChildSessions } from '../store/hooks';
import { REACTIONS } from '../store/model';
import { commaList, num, t } from '../i18n';
import { rich } from '../i18n/rich';

/** The whole game in the message, so a grandparent or a childminder can play it without the app. */
export function gameAsText(a: Activity): string {
  const lines = [a.title, a.summary, ''];
  if (a.materials.length) lines.push(t("You'll need: {items}", { items: commaList(a.materials) }), '');
  if (a.safety?.length) lines.push(t('Keep it safe:'), ...a.safety.map((s) => `- ${s}`), '');
  lines.push(t('How to play:'), ...a.steps.map((s, i) => `${num(i + 1)}. ${s}`), '', t('From PlayNest'));
  return lines.join('\n');
}

async function shareActivity(a: Activity) {
  const result = await shareText(a.title, gameAsText(a));
  if (result === 'copied') toast(t('Copied. Paste it to share'));
  if (result === 'unavailable') toast(t('Sharing isn’t available on this device'));
}

export default function ActivityDetail() {
  const { id = '' } = useParams();
  const a = ACTIVITY_BY_ID.get(id);
  const { child, age } = useActiveChild();
  const sessions = useChildSessions(child?.id);

  if (!a) {
    return (
      <Page world="coral" title={t('Not found')} heading={t('Hmm.')} back={<BackButton fallback="/explore" />}>
        <Empty mood="fussy" title={t('We couldn’t find that game')}>
          <Link to="/explore" className="btn btn-primary">
            {t('Browse games')}
          </Link>
        </Empty>
      </Page>
    );
  }

  const history = sessions.filter((s) => s.activityId === a.id).sort((x, y) => (x.date < y.date ? 1 : -1));
  const last = history[0];
  const twist = history.length > 0 ? nextTwist(a, history.length) : null;
  const outOfRange = age && !isEligible(a, age.months);
  const related = ACTIVITIES.filter(
    (r) => r.id !== a.id && r.domains[0] === a.domains[0] && (age ? isEligible(r, age.months) : r.minMonths <= a.maxMonths && r.maxMonths >= a.minMonths),
  ).slice(0, 8);
  const where = a.settings.includes('anywhere') ? (['anywhere'] as const) : a.settings;
  const energy = ENERGY_INFO[a.energy];

  return (
    <Page
      world={DOMAIN_WORLD[a.domains[0]]}
      title={a.title}
      back={<BackButton fallback="/explore" />}
      actions={
        <>
          <button type="button" className="icon-btn glass" aria-label={t('Share {title}', { title: a.title })} onClick={() => void shareActivity(a)}>
            <Icon name="share" size={20} strokeWidth={2.4} />
          </button>
          <FavoriteButton id={a.id} title={a.title} floating />
        </>
      }
      hero={
        <header className="detail-hero">
          <ActivityArt activity={a} className="detail-art" eager live />
        </header>
      }
      className="detail"
    >
      <div className="detail-head">
        <h1>{a.title}</h1>
        <p className="detail-summary">{a.summary}</p>
        <div className="chips">
          {a.domains.map((d) => (
            <DomainChip key={d} domain={d} />
          ))}
          {a.origin && (
            <span className="domain-chip plain">
              <Emoji e="🌍" size={18} /> {a.origin}
            </span>
          )}
        </div>
      </div>

      <ul className="stat-tiles" aria-label={t('At a glance')}>
        <li>
          <Emoji e="⏱" size={26} />
          <b>{t('{n} min', { n: a.durationMin })}</b>
          <span>{t('Time')}</span>
        </li>
        <li>
          <Emoji e="🎂" size={26} />
          <b>{formatAgeRange(a.minMonths, a.maxMonths)}</b>
          <span>{t('Ages')}</span>
        </li>
        <li>
          <Emoji e={energy.emoji} size={26} />
          <b>{energy.label}</b>
          <span>{t('Energy')}</span>
        </li>
        <li>
          <Emoji e={a.groupFriendly ? '👫' : '🤗'} size={26} />
          <b>{a.groupFriendly ? t('Siblings') : t('One-on-one')}</b>
          <span>{t('Who')}</span>
        </li>
      </ul>

      {outOfRange && child && (
        <p className="notice">
          <Emoji e="🎂" size={22} />
          <span>{age!.months < a.minMonths ? t('{name} may enjoy this a little later.', { name: child.name }) : t('{name} may have outgrown it — try the harder version.', { name: child.name })}</span>
        </p>
      )}

      <section className="card before-start" aria-labelledby="before-title">
        <h2 id="before-title">{t('Before you start')}</h2>
        <div className="need-chips">
          {a.materials.length === 0 ? (
            <span className="need-chip">
              <Emoji e="🙌" size={18} /> {t('Nothing needed')}
            </span>
          ) : (
            a.materials.map((m) => (
              <span key={m} className="need-chip">
                {m}
              </span>
            ))
          )}
          {where.map((s) => (
            <span key={s} className="need-chip soft">
              <Emoji e={SETTING_INFO[s].emoji} size={18} /> {SETTING_INFO[s].label}
            </span>
          ))}
        </div>
        {a.safety && a.safety.length > 0 && (
          <div className="safety-box">
            <b>
              <Icon name="shield" size={18} strokeWidth={2.6} /> {t('Keep it safe')}
            </b>
            <ul>
              {a.safety.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <Section title={t('How to play')} id="how-title">
        <ol className="steps">
          {a.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </Section>

      <Section title={t('Things to say')} id="say-title">
        <ul className="say-bubbles">
          {a.talk.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="say-note">
          <Pip mood="happy" size={44} />
          <p>{t('Then pause, and wait for a look, a sound or words back.')}</p>
        </div>
      </Section>

      <div className="group disclosure">
        <MakeItWork activity={a} />
        <details>
          <summary>
            <Emoji e="🧠" size={26} />
            {t('Why it helps')}
          </summary>
          <div className="disclosure-body">
            <p>{a.whyItHelps}</p>
            {a.sources?.map((s) => (
              <a key={s} href={SOURCES[s].url} target="_blank" rel="noreferrer" className="source-link">
                {SOURCES[s].publisher}
              </a>
            ))}
            {a.refs?.map((r) => (
              <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="source-link">
                {r.publisher}
              </a>
            ))}
          </div>
        </details>
        {(a.easier || a.harder) && (
          <details>
            <summary>
              <Emoji e="📈" size={26} />
              {t('Easier or harder')}
            </summary>
            <div className="disclosure-body">
              {a.easier && (
                <p>
                  <b>
                    <Emoji e="🐣" size={18} className="inline" /> {t('Easier')}
                  </b>{' '}
                  {a.easier}
                </p>
              )}
              {a.harder && (
                <p>
                  <b>
                    <Emoji e="🚀" size={18} className="inline" /> {t('Harder')}
                  </b>{' '}
                  {a.harder}
                </p>
              )}
            </div>
          </details>
        )}
        {a.variations && a.variations.length > 0 && (
          <details open={history.length > 0}>
            <summary>
              <Emoji e="✨" size={26} />
              {t('More ways to play')}
              <span className="count">{num(a.variations.length)}</span>
            </summary>
            <ul className="ways-list">
              {a.variations.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </details>
        )}
      </div>

      {child && last && (
        <section className="card history-card" aria-label={t('Your history with this game')}>
          <div className="history-top">
            <span className="history-count">
              {rich('<b>{n}×</b> played', { b: (s) => <b>{s}</b> }, { n: history.length })}
            </span>
            <span className="history-last">
              {formatRelativeDay(last.date)}
              {last.reaction && (
                <>
                  {' · '}
                  <Emoji e={REACTIONS[last.reaction].emoji} size={18} className="inline" /> {REACTIONS[last.reaction].label}
                </>
              )}
            </span>
          </div>
          {twist && (
            <p className="twist">
              <span className="twist-label">
                <Icon name="sparkle" size={16} /> {t('Next time, try')}
              </span>
              {twist}
            </p>
          )}
        </section>
      )}

      {a.tags && a.tags.length > 0 && (
        <div className="chips">
          {a.tags.map((t) => (
            <Link key={t} to={`/explore?tag=${t}`} className="chip sm">
              <Emoji e={TAG_INFO[t].emoji} size={18} /> {TAG_INFO[t].label}
            </Link>
          ))}
        </div>
      )}

      <Link to={`/print/card/${a.id}`} className="link-btn print-link">
        <Icon name="print" size={18} strokeWidth={2.4} /> {t('Print this game')}
      </Link>

      {related.length > 0 && (
        <Section title={t('More {area}', { area: DOMAIN_INFO[a.domains[0]].label.toLowerCase() })} id="related-title">
          <Carousel label={t('Related games')}>
            {related.map((r) => (
              <ActivityTile key={r.id} activity={r} />
            ))}
          </Carousel>
        </Section>
      )}

      <BottomBar>
        <Link to={`/play/${a.id}`} className="btn btn-primary btn-lg btn-block">
          <Icon name="play" size={20} filled /> {t('Play now')}
        </Link>
      </BottomBar>
    </Page>
  );
}
