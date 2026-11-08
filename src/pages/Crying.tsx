import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Emoji } from '../components/Emoji';
import { BedsideToggle, CallButton, Countdown, DimOffer, ReviewNote } from '../components/Help';
import { BackButton, Page, Section } from '../components/Page';
import { Glyph, ListGroup, ListRow } from '../components/ui';
import { CRYING } from '../data/crying';
import { num, t } from '../i18n';
import { useActiveChild } from '../store/hooks';

/** 3 a.m. The parent may be at the end of their strength, so the way out is one tap from the top, always. */
export default function Crying() {
  const { age } = useActiveChild();
  const [steppingAway, setSteppingAway] = useState(false);
  const toddler = age && age.months >= 12;

  return (
    <Page world="night" title={t('Crying')} heading={t('When crying won’t stop')} back={<BackButton fallback="/help" />} actions={<BedsideToggle />} className="crying">
      <DimOffer />
      <button type="button" className="btn btn-step-away btn-lg btn-block" onClick={() => setSteppingAway(!steppingAway)} aria-expanded={steppingAway}>
        <Emoji e="🛏️" size={24} /> {CRYING.stepAway.title}
      </button>
      <p className="never-shake">
        <b>{CRYING.neverShake}</b>
      </p>

      <div hidden={!steppingAway}>
        <section className="card step-away" aria-label={CRYING.stepAway.title}>
          <ol className="steps big">
            {CRYING.stepAway.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <Countdown minutes={CRYING.stepAway.minutes} label={t('Start a timer')} doneText={t('Time to check on your baby.')} />
          <p>{CRYING.stepAway.closing}</p>
          <Link to="/help/you?view=help" className="btn btn-block">
            {t('Talk to someone')}
          </Link>
        </section>
      </div>

      <Section title={t('Phone for help if')} id="flags-title">
        <section className="safety-box" aria-labelledby="flags-title">
          <ul>
            {CRYING.redFlags.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p>
            <b>{t('Any of these: call now. If you are worried, get help. You do not need to be sure.')}</b>
          </p>
          <CallButton />
          <Link to="/help/first-aid" className="link-btn">
            {t('First aid')}
          </Link>
        </section>
      </Section>

      <section className="card kind-card">
        {CRYING.reassure.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>

      <Section title={t('Quick checks')} id="checks-title">
        <ul className="plain-list">
          {CRYING.checks.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Section>

      <Section title={t('Try these, one at a time')} id="soothe-title">
        <p className="section-note">{t('What worked yesterday might not work today. That’s not you.')}</p>
        <div className="soothe-list">
          {CRYING.soothe.map((s) => (
            <article key={s.id} className="card soothe">
              <h3>
                <Emoji e={s.emoji} size={26} /> {s.title}
              </h3>
              <p>{s.text}</p>
              {s.timerMinutes && <Countdown minutes={s.timerMinutes} label={t('Timer')} />}
            </article>
          ))}
        </div>
      </Section>

      {toddler && CRYING.toddler.length > 0 && (
        <Section title={t('With a toddler')} id="toddler-title">
          <ul className="plain-list">
            {CRYING.toddler.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <Link to="/help" className="link-btn">
            {t('Hard moments')}
          </Link>
        </Section>
      )}

      <ListGroup>
        <ListRow to="/sounds" lead={<Glyph emoji="🌊" tone="var(--d-senses)" />} title={t('Soothing sounds')} subtitle={t('Soft noise, across the room')} />
        <ListRow to="/songs?type=lullaby" lead={<Glyph emoji="🌙" tone="var(--d-thinking)" />} title={t('Lullabies')} subtitle={t('Sung in your own voice')} />
        <ListRow to="/help/you" lead={<Glyph emoji="💛" tone="var(--d-feelings)" />} title={t('How are you doing?')} />
      </ListGroup>

      <div className="group disclosure">
        <details>
          <summary>
            <Emoji e="👶" size={26} />
            {t('Play, or a break?')}
          </summary>
          <div className="disclosure-body two-cols">
            <div>
              <b>{t('More, please')}</b>
              <ul className="plain-list">
                {CRYING.cues.more.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <b>{t('I need a break')}</b>
              <ul className="plain-list">
                {CRYING.cues.stop.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </details>
        <details>
          <summary>
            <Emoji e="📚" size={26} />
            {t('Sources')}
            <span className="count">{num(CRYING.refs.length)}</span>
          </summary>
          <div className="disclosure-body sources">
            {CRYING.refs.map((r) => (
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
