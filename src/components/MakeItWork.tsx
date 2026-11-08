import { useMemo, useState } from 'react';
import { ADAPTATIONS } from '../data/adaptations';
import { NEEDS, type Adaptation, type Need } from '../data/packs';
import type { Activity } from '../data/types';
import { haptic } from '../platform';
import { Emoji } from './Emoji';
import { t } from '../i18n';

const fits = (line: Adaptation, a: Activity) =>
  (!line.whenEnergy?.length || line.whenEnergy.includes(a.energy)) &&
  (!line.whenSetting?.length || line.whenSetting.some((s) => a.settings.includes(s))) &&
  (!line.whenTag?.length || line.whenTag.some((t) => a.tags?.includes(t)));

/**
 * "Make it work for us". It names the barrier, never a child: it's as useful for a tired parent or a noisy room as for
 * a child with a disability. Nothing is saved, and nobody is asked for a diagnosis.
 */
export function MakeItWork({ activity }: { activity: Activity }) {
  const [need, setNeed] = useState<Need | null>(null);
  const lines = useMemo(() => {
    if (!need) return [];
    const specific = (l: Adaptation) => (l.whenEnergy?.length || l.whenSetting?.length || l.whenTag?.length ? 0 : 1);
    // Lines written for this kind of game come first: they're the most useful.
    return ADAPTATIONS.filter((l) => l.need === need && fits(l, activity))
      .sort((a, b) => specific(a) - specific(b))
      .slice(0, 6);
  }, [need, activity]);
  if (ADAPTATIONS.length === 0) return null;
  return (
    <details>
      <summary>
        <Emoji e="🤝" size={26} />
        {t('Make it work for us')}
      </summary>
      <div className="disclosure-body">
        <div className="chips" role="group" aria-label={t('What makes this game hard?')}>
          {(Object.keys(NEEDS) as Need[]).map((n) => (
            <button
              key={n}
              type="button"
              className="chip sm"
              aria-pressed={need === n}
              onClick={() => {
                haptic();
                setNeed(need === n ? null : n);
              }}
            >
              <Emoji e={NEEDS[n].emoji} size={18} /> {NEEDS[n].label}
            </button>
          ))}
        </div>
        {lines.length > 0 && (
          <ul className="ways-list">
            {lines.map((l) => (
              <li key={l.id}>{l.text}</li>
            ))}
          </ul>
        )}
      </div>
    </details>
  );
}
