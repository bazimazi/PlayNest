import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Emoji } from '../components/Emoji';
import { CallButton, CountryRow, OtherNumbers, ReadAloud, ReviewNote } from '../components/Help';
import { BackButton, BottomBar, Empty, Page, Section } from '../components/Page';
import { Sheet } from '../components/Sheet';
import { Glyph, ListGroup, ListRow } from '../components/ui';
import { AID_CARDS } from '../data/firstaid';
import { AID_REGIONS, type AidRegion, type AidSteps } from '../data/packs';
import { english, t } from '../i18n';
import { rich } from '../i18n/rich';
import { guessCountry, suggestedAidRegion } from '../lib/emergency';
import { keepAwake } from '../platform';
import { actions, useStore } from '../store/store';

function RegionSheet({ onClose, current }: { onClose: () => void; current: AidRegion | null }) {
  const country = useStore((s) => s.settings.country) ?? guessCountry();
  const suggested = current ?? suggestedAidRegion(country);
  return (
    <Sheet title={t('Whose first-aid steps?')} onClose={onClose}>
      {(close) => (
        <div className="stack-lg">
          <p>{t('Choking and CPR steps differ between countries. Pick the ones you trained on, or the ones where you live. We’ll keep them if you travel.')}</p>
          <ListGroup>
            {(Object.keys(AID_REGIONS) as AidRegion[]).map((r) => (
              <ListRow
                key={r}
                onClick={() => {
                  actions.setSettings({ aidRegion: r });
                  close();
                }}
                title={AID_REGIONS[r].label}
                subtitle={r === suggested ? t('{body} · suggested', { body: AID_REGIONS[r].body }) : AID_REGIONS[r].body}
                chevron={r === current ? false : true}
                value={r === current ? '✓' : undefined}
              />
            ))}
          </ListGroup>
          <p className="footnote">{t('Not listed? Choose the one you trained on, or the closest to you. The card always says whose steps it shows.')}</p>
        </div>
      )}
    </Sheet>
  );
}

/** The list of named emergencies. Picking a card is reference, not triage: it never asks for symptoms. */
export default function FirstAid() {
  const region = useStore((s) => s.settings.aidRegion);
  const [choosing, setChoosing] = useState(false);
  const tier1 = AID_CARDS.filter((c) => c.tier === 1);
  const tier2 = AID_CARDS.filter((c) => c.tier === 2);

  return (
    <Page world="lilac" title={t('First aid')} back={<BackButton fallback="/help" />} className="firstaid">
      <section className="emergency-card" aria-label={t('Emergency number')}>
        <CallButton />
        <OtherNumbers />
        <CountryRow />
      </section>

      <ListGroup>
        {tier1.map((c) => (
          <ListRow key={c.id} to={`/help/first-aid/${c.id}`} lead={<Glyph emoji={c.emoji} tone="var(--safety)" />} title={c.title} subtitle={c.signs} />
        ))}
      </ListGroup>

      {tier2.length > 0 && (
        <Section title={t('More')} id="more-aid-title">
          <ListGroup>
            {tier2.map((c) => (
              <ListRow key={c.id} to={`/help/first-aid/${c.id}`} lead={<Glyph emoji={c.emoji} tone="var(--ink-3)" />} title={c.title} />
            ))}
          </ListGroup>
        </Section>
      )}

      <Section>
        <button type="button" className="link-btn" onClick={() => setChoosing(true)}>
          {region ? t('Steps from: {body}. Change', { body: AID_REGIONS[region].body }) : t('Choose whose steps to follow')}
        </button>
        <p className="footnote">{t('A course teaches this far better than a phone can. Red Cross and St John groups run them around the world, often for parents.')}</p>
        <p className="footnote">
          {t('Emergency numbers use UK Foreign Office and Government of Canada travel advice. Contains public sector information licensed under the Open Government Licence v3.0. Some services may not answer everywhere, so learn yours now.')}
        </p>
        <ReviewNote />
      </Section>

      {choosing && <RegionSheet current={region} onClose={() => setChoosing(false)} />}
    </Page>
  );
}

/** Whether a step already tells you to call. Read in English, so the banner is the same in every language. */
const NAMES_THE_CALL = /emergency number/i;

export function AidCardPage() {
  const { id = '' } = useParams();
  const region = useStore((s) => s.settings.aidRegion);
  const country = useStore((s) => s.settings.country) ?? guessCountry();
  const [choosing, setChoosing] = useState(false);
  const card = AID_CARDS.find((c) => c.id === id);
  // The screen must not sleep while someone is following steps.
  useEffect(() => keepAwake(), []);

  // Region-locked cards must never quietly fall back to another body's steps, so show one and name it, and offer to change.
  const shared = card?.regions.all;
  const chosen = region ?? suggestedAidRegion(country);
  const content: AidSteps | undefined = shared ?? (chosen ? card?.regions[chosen] : undefined);
  const needsChoice = !shared && !chosen;
  // In an emergency there's no time for a question, so a suggestion shows straight away, says whose it is, and is then
  // kept: steps must not change because a phone's language or the country setting does.
  useEffect(() => {
    if (!shared && !region && chosen) actions.setSettings({ aidRegion: chosen });
  }, [shared, region, chosen]);
  // "See the Not breathing card" during a cardiac arrest must be a big tap, not plain text.
  // Read in English: a different wording in another language must never silently lose this tap.
  const steps = english(content?.steps ?? []);
  const mentions = steps.join(' ');
  const goTo = AID_CARDS.filter((c) => c.id !== card?.id && mentions.includes(`${english(c).title.split(':')[0]} card`));

  if (!card) {
    return (
      <Page world="lilac" title={t('Not found')} heading={t('Hmm.')} back={<BackButton fallback="/help/first-aid" />}>
        <Empty mood="fussy" text={t('We couldn’t find that card.')}>
          <Link to="/help/first-aid" className="btn btn-primary">
            {t('All first aid')}
          </Link>
        </Empty>
      </Page>
    );
  }

  return (
    <Page world="lilac" title={card.title} back={<BackButton fallback="/help/first-aid" />} className="aid-card has-call-bar">
      <p className="aid-signs">
        <Emoji e={card.emoji} size={32} /> {card.signs}
      </p>

      {!shared && chosen && (
        <p className="aid-body">
          {rich(
            'Steps from {body}. <change>Change</change>',
            {
              change: (s) => (
                <button type="button" className="link-btn" onClick={() => setChoosing(true)}>
                  {s}
                </button>
              ),
            },
            { body: AID_REGIONS[chosen].body },
          )}
        </p>
      )}

      {card.callFirst && !NAMES_THE_CALL.test(steps[0] ?? '') && (
        <p className="aid-call-first">{t('Call your emergency number now, or get someone else to. Put the phone on speaker.')}</p>
      )}

      {needsChoice ? (
        <section className="stack-sm" aria-labelledby="whose-title">
          <h2 id="whose-title">{t('Pick the closest to you. The steps appear straight away.')}</h2>
          <ListGroup>
            {(Object.keys(AID_REGIONS) as AidRegion[]).map((r) => (
              <ListRow key={r} onClick={() => actions.setSettings({ aidRegion: r })} title={AID_REGIONS[r].label} subtitle={AID_REGIONS[r].body} chevron />
            ))}
          </ListGroup>
        </section>
      ) : content ? (
        <>
          <div className="spread aid-tools">
            <ReadAloud texts={[...content.steps, ...(content.dont ?? [])]} />
          </div>
          <ol className="steps aid-steps">
            {content.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          {goTo.length > 0 && (
            <ListGroup label={t('Go to another card')}>
              {goTo.map((c) => (
                <ListRow key={c.id} to={`/help/first-aid/${c.id}`} lead={<Glyph emoji={c.emoji} tone="var(--safety)" />} title={c.title} />
              ))}
            </ListGroup>
          )}

          {content.dont && content.dont.length > 0 && (
            <section className="safety-box" aria-labelledby="dont-title">
              <b id="dont-title">{t('Don’t')}</b>
              <ul>
                {content.dont.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </section>
          )}

          {card.callIf && card.callIf.length > 0 && (
            <Section title={card.callFirst ? t('Especially if') : t('Get urgent help if')} id="callif-title">
              <ul className="plain-list">
                {card.callIf.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Section>
          )}

          {content.note && <p className="notice">{content.note}</p>}

          <div className="aid-source">
            <p className="footnote">
              {rich('Based on: <source/>.', {
                source: (
                  <bdi lang="en" translate="no">
                    {content.basedOn}
                  </bdi>
                ),
              })}
            </p>
            <div className="sources">
              {content.refs.map((r) => (
                <a key={r.url} href={r.url} target="_blank" rel="noreferrer">
                  {r.title} — <span className="muted">{r.publisher}</span>
                </a>
              ))}
            </div>
            <ReviewNote />
          </div>
        </>
      ) : (
        <Empty mood="calm" compact text={t('We don’t have these steps for your region. Please call your emergency number and follow what they tell you.')} />
      )}

      <BottomBar>
        <CallButton />
      </BottomBar>

      {choosing && <RegionSheet current={region} onClose={() => setChoosing(false)} />}
    </Page>
  );
}
