import type { CSSProperties } from 'react';
import { DOMAIN_INFO } from '../data/domains';
import { DOMAINS, type Domain } from '../data/types';
import { Emoji } from './Emoji';

/**
 * How play spread across the eight areas: ranked bars in one colour, so the labels (not eight similar hues) say which
 * is which, and bars on one baseline are easy to compare.
 */
export function BalanceBars({ values }: { values: Record<Domain, number> }) {
  const max = Math.max(1, ...DOMAINS.map((d) => values[d]));
  const ranked = [...DOMAINS].sort((a, b) => values[b] - values[a]);
  return (
    <ul className="bars">
      {ranked.map((d, i) => (
        <li className="bar-row" key={d}>
          <Emoji e={DOMAIN_INFO[d].emoji} size={22} />
          <span className="bar-label">{DOMAIN_INFO[d].short}</span>
          <span
            className="bar-track"
            role="meter"
            aria-label={DOMAIN_INFO[d].label}
            aria-valuemin={0}
            aria-valuemax={max}
            aria-valuenow={values[d]}
          >
            {values[d] > 0 && <i style={{ width: `${Math.max(4, (values[d] / max) * 100)}%`, '--n': i } as CSSProperties} />}
          </span>
        </li>
      ))}
    </ul>
  );
}
