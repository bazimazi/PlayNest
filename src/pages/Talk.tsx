import { useMemo, useState } from 'react';
import { Art } from '../components/Art';
import { Emoji } from '../components/Emoji';
import { Icon } from '../components/Icon';
import { BackButton, Empty, Page } from '../components/Page';
import { toast } from '../components/Toast';
import { Segmented } from '../components/ui';
import type { TalkBand } from '../data/packs';
import { TALK } from '../data/talk';
import { DOMAINS } from '../data/types';
import { localDigits, t } from '../i18n';
import { hashString, seededRandom, shuffled } from '../lib/random';
import { haptic, shareText } from '../platform';
import { useActiveChild } from '../store/hooks';

const bandFor = (months: number): TalkBand => (months < 72 ? '3-5' : months < 108 ? '6-8' : '9-12');

const BANDS: { value: TalkBand; label: string }[] = [
  { value: '3-5', label: localDigits('3–5') },
  { value: '6-8', label: localDigits('6–8') },
  { value: '9-12', label: localDigits('9–12') },
];

/** One question at a time, for the dinner table, the car or the walk to school. The phone goes back down. */
export default function Talk() {
  const { age } = useActiveChild();
  const [band, setBand] = useState<TalkBand>(() => bandFor(age?.months ?? 72));
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const deck = useMemo(() => shuffled(TALK.filter((c) => c.band === band), seededRandom(hashString(`${band}${new Date().toDateString()}`))), [band]);

  if (!deck.length) {
    return (
      <Page world="dusk" title={t('Talk cards')} back={<BackButton fallback="/explore" />}>
        <Empty mood="calm" compact text={t('No cards here yet.')} />
      </Page>
    );
  }

  const card = deck[index % deck.length];
  const next = (step: number) => {
    haptic();
    setDirection(step < 0 ? -1 : 1);
    setIndex((i) => (i + step + deck.length) % deck.length);
  };

  return (
    <Page world="dusk" title={t('Talk cards')} heading={t('Let’s talk')} subtitle={t('At the table, in the car, on the way home')} back={<BackButton fallback="/explore" />} className="talk">
      <Segmented
        label={t('Age')}
        value={band}
        options={BANDS}
        onChange={(v) => {
          setBand(v);
          setIndex(0);
        }}
      />

      <div aria-live="polite" className="play-live">
      <section className="talk-card" key={card.id} data-dir={direction}>
        <Art emoji={card.emoji} seed={card.id} palette={DOMAINS[hashString(card.id) % DOMAINS.length]} energy="calm" className="talk-art" live eager />
        <span className="eyebrow">{card.theme}</span>
        <p>{card.text}</p>
      </section>
      </div>

      <div className="btn-row">
        <button type="button" className="btn back-step" aria-label={t('Previous question')} onClick={() => next(-1)}>
          <Icon name="left" size={22} strokeWidth={2.8} />
        </button>
        <button type="button" className="btn btn-primary btn-lg grow" onClick={() => next(1)}>
          {t('Next question')} <Icon name="right" strokeWidth={3} />
        </button>
      </div>

      <div className="talk-foot">
        <p>
          <Emoji e="👂" size={20} className="inline" /> {t('Listen first. Anyone can pass, and grown-ups answer too.')}
        </p>
        <button
          type="button"
          className="link-btn"
          onClick={async () => {
            const result = await shareText(t('A question for the family'), card.text);
            if (result === 'copied') toast(t('Copied. Paste it to share'));
          }}
        >
          <Icon name="share" size={16} strokeWidth={2.4} /> {t('Share this question')}
        </button>
      </div>
    </Page>
  );
}
