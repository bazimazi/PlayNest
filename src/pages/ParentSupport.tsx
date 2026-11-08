import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Emoji } from '../components/Emoji';
import { BedsideToggle, CallButton, CountryRow, DimOffer, ReviewNote } from '../components/Help';
import { Icon } from '../components/Icon';
import { BackButton, Page, Section } from '../components/Page';
import { PARENT_SUPPORT as P } from '../data/crying';
import type { Helpline } from '../data/packs';
import { localDigits, num, t } from '../i18n';
import { guessCountry, helplinesFor, telHref } from '../lib/emergency';
import { useStore } from '../store/store';

function Line({ line }: { line: Helpline }) {
  return (
    <li className="helpline">
      <div className="helpline-text">
        <b translate="no" dir="auto">
          {line.name}
        </b>
        {line.hours && <span>{line.hours}</span>}
        {line.note && <span className="muted">{line.note}</span>}
        {line.textLine && (
          <span translate="no" dir="auto">
            {line.textLine}
          </span>
        )}
        {line.via === 'directory' && <span className="muted">{t('From a helpline directory. If it doesn’t answer, try the next one or your emergency number.')}</span>}
      </div>
      <div className="helpline-actions">
        {line.phone && (
          <a className="btn btn-primary btn-sm" href={telHref(line.phone)}>
            <Icon name="phone" size={18} strokeWidth={2.6} /> <span className="ltr">{localDigits(line.phone)}</span>
          </a>
        )}
        {line.url && (
          <a className="link-btn" href={line.url} target="_blank" rel="noreferrer">
            {t('Website')}
          </a>
        )}
      </div>
    </li>
  );
}

function Helplines({ title, kinds }: { title: string; kinds: Helpline['kind'][] }) {
  const country = useStore((s) => s.settings.country) ?? guessCountry();
  const { lines, world } = helplinesFor(country);
  const matching = lines.filter((l) => kinds.includes(l.kind));
  // A real person nearby always beats a directory, even when their line isn't the exact kind asked for.
  const shown = matching.length > 0 ? matching : lines;
  return (
    <Section title={title} id={`lines-${kinds.join('-')}`}>
      <CountryRow />
      {shown.length > 0 ? (
        <>
          {matching.length === 0 && <p className="section-note">{t('We don’t have a crisis line listed for here. These lines may be able to point you to help. You can also try your emergency number.')}</p>}
          <ul className="helplines">
            {shown.map((l) => (
              <Line key={l.name} line={l} />
            ))}
          </ul>
        </>
      ) : (
        <>
          <p className="section-note">{t('We don’t have a checked line for this place yet. Your emergency number is above. If you have signal, these sites can find a line near you.')}</p>
          <ul className="helplines">
            {world.map((l) => (
              <Line key={l.name} line={l} />
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}

/** A slow breath, for a minute. Steady text does the work when motion is off. */
function Breathe() {
  const [on, setOn] = useState(false);
  const [phase, setPhase] = useState<'in' | 'out'>('in');
  useEffect(() => {
    if (!on) return;
    const started = Date.now();
    let current: 'in' | 'out' = 'in';
    setPhase('in');
    const t = window.setInterval(() => {
      const s = (Date.now() - started) / 1000;
      if (s >= 60) {
        setOn(false);
        return;
      }
      const next = s % 10 < 4 ? 'in' : 'out';
      if (next !== current) {
        current = next;
        setPhase(next);
      }
    }, 250);
    return () => window.clearInterval(t);
  }, [on]);
  if (!on) {
    return (
      <button type="button" className="btn btn-block" onClick={() => setOn(true)}>
        <Emoji e="🌬️" size={22} /> {t('Breathe with me · 1 min')}
      </button>
    );
  }
  return (
    <button type="button" className="breathe" onClick={() => setOn(false)} aria-label={t('Stop breathing exercise')}>
      <span className={`breathe-circle ${phase}`} aria-hidden="true" />
      <b aria-live="polite">{phase === 'in' ? t('Breathe in') : t('And slowly out')}</b>
    </button>
  );
}

type View = 'ask' | 'help' | 'scared' | 'baby' | 'self' | 'self-yes' | 'self-no';

/**
 * Support for the parent. Nothing on this screen is scored, stored or logged, and it only appears when opened: no
 * prompts, no reminders. Buttons, not free text, so a person is one tap away. No screen ever tries to assess someone.
 */
export default function ParentSupport() {
  const [params] = useSearchParams();
  const asked = params.get('view');
  const [view, setView] = useState<View>('ask');
  // A link can go straight to the screen it means. Following another one while already here moves there too.
  useEffect(() => {
    setView(asked === 'help' || asked === 'scared' || asked === 'baby' || asked === 'self' ? asked : 'ask');
  }, [asked]);

  // A screen reader user needs to know the screen changed.
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    const heading = document.querySelector<HTMLElement>('main h1');
    if (heading) {
      heading.tabIndex = -1;
      heading.focus();
    }
  }, [view]);

  // "Myself or my baby" are different screens, so both have to be one tap from here.
  if (view === 'scared') {
    return (
      <Page world="night" title={t('Right now')} heading={t('You did the right thing')} back={<button type="button" className="nav-back" aria-label={t('Back')} onClick={() => setView('ask')}><Icon name="left" size={24} strokeWidth={2.6} /></button>} actions={<BedsideToggle />} className="crisis">
        <section className="emergency-card">
          <CallButton />
        </section>
        <div className="stack-sm">
          <button type="button" className="btn btn-urgent btn-lg btn-block" onClick={() => setView('baby')}>
            {t('I’m scared I might hurt my baby')}
          </button>
          <button type="button" className="btn btn-urgent btn-lg btn-block" onClick={() => setView('self')}>
            {t('I’m scared I might hurt myself')}
          </button>
        </div>
        <p className="footnote">{P.privacy}</p>
      </Page>
    );
  }

  if (view === 'baby') {
    return (
      <Page world="night" title={t('Right now')} heading={t('Let’s keep you both safe')} back={<button type="button" className="nav-back" aria-label={t('Back')} onClick={() => setView('ask')}><Icon name="left" size={24} strokeWidth={2.6} /></button>} actions={<BedsideToggle />} className="crisis">
        <p className="crisis-open">{P.hurtBaby.opening}</p>
        <ol className="steps big">
          {P.hurtBaby.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <section className="emergency-card">
          <p>{P.hurtBaby.callIf}</p>
          <CallButton />
        </section>
        <Helplines title={t('Talk to someone')} kinds={['crisis', 'parent']} />
        <section className="card kind-card">
          <p>{P.hurtBaby.normal}</p>
        </section>
        <button type="button" className="link-btn" onClick={() => setView('self')}>
          {t('I’m scared for myself too')}
        </button>
        <p className="footnote">{P.privacy}</p>
        <ReviewNote />
      </Page>
    );
  }

  if (view === 'self' || view === 'self-yes' || view === 'self-no') {
    return (
      <Page world="night" title={t('Right now')} heading={t('You don’t have to carry this alone')} back={<button type="button" className="nav-back" aria-label={t('Back')} onClick={() => setView('ask')}><Icon name="left" size={24} strokeWidth={2.6} /></button>} actions={<BedsideToggle />} className="crisis">
        <p className="crisis-open">{P.hurtSelf.opening}</p>
        {view === 'self' && (
          <section className="card">
            <h2>{P.hurtSelf.question}</h2>
            <div className="stack-sm">
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => setView('self-yes')}>
                {P.hurtSelf.yes}
              </button>
              <button type="button" className="btn btn-lg btn-block" onClick={() => setView('self-no')}>
                {P.hurtSelf.no}
              </button>
            </div>
          </section>
        )}
        {view === 'self-yes' && (
          <>
            <p>{P.hurtSelf.afterYes}</p>
            <section className="emergency-card">
              <CallButton />
            </section>
            <Helplines title={t('Someone to talk to, now')} kinds={['crisis']} />
          </>
        )}
        {view === 'self-no' && (
          <>
            <p>{P.hurtSelf.afterNo}</p>
            <section className="emergency-card">
              <CallButton />
            </section>
            <Helplines title={t('Someone to talk to')} kinds={['crisis', 'parent', 'talk']} />
          </>
        )}
        <p className="footnote">{P.privacy}</p>
        <ReviewNote />
      </Page>
    );
  }

  return (
    <Page world="night" title={t('For you')} heading={t('How are you doing?')} back={<BackButton fallback="/help" />} actions={<BedsideToggle />} className="support">
      <DimOffer />
      {view === 'ask' && (
        <section className="card">
          <p>{P.checkIn.intro}</p>
          <h2>{P.checkIn.question}</h2>
          <div className="stack-sm">
            <button type="button" className="btn btn-primary btn-block" onClick={() => setView('help')}>
              {P.checkIn.yes}
            </button>
            <button type="button" className="btn btn-block" onClick={() => document.getElementById('kind-words')?.scrollIntoView({ behavior: 'smooth' })}>
              {P.checkIn.notNow}
            </button>
            <button type="button" className="btn btn-urgent btn-block" onClick={() => setView('scared')}>
              {P.checkIn.scared}
            </button>
          </div>
        </section>
      )}

      {view === 'help' && (
        <>
          <section className="emergency-card">
            <CallButton />
          </section>
          <Helplines title={t('Who can help')} kinds={['crisis', 'parent', 'talk']} />
          <Section title={t('When to see someone')} id="seek-title">
            <ul className="plain-list">
              {P.whenToSeek.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </Section>
          <button type="button" className="btn btn-urgent btn-block" onClick={() => setView('self')}>
            {t('I’m thinking about dying')}
          </button>
        </>
      )}

      <section id="kind-words" className="card kind-card">
        {P.kindWords.map((w) => (
          <p key={w}>{w}</p>
        ))}
      </section>

      <Section title={t('Small things that may help')} id="small-title">
        <Breathe />
        <div className="soothe-list">
          {P.smallThings.map((s) => (
            <article key={s.id} className="card soothe">
              <h3>
                <Emoji e={s.emoji} size={26} /> {s.title}
              </h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {view === 'ask' && (
        <button type="button" className="link-btn" onClick={() => setView('self')}>
          {t('I’m thinking about dying')}
        </button>
      )}

      <p className="footnote">{P.privacy}</p>
      <div className="group disclosure">
        <details>
          <summary>
            <Emoji e="📚" size={26} />
            {t('Sources')}
            <span className="count">{num(P.refs.length)}</span>
          </summary>
          <div className="disclosure-body sources">
            {P.refs.map((r) => (
              <a key={r.url} href={r.url} target="_blank" rel="noreferrer">
                {r.title} — <span className="muted">{r.publisher}</span>
              </a>
            ))}
          </div>
        </details>
      </div>
      <ReviewNote />
    </Page>
  );
}
