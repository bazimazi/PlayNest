import type { CSSProperties } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DOMAIN_INFO, ENERGY_INFO } from '../data/domains';
import type { Activity, Domain } from '../data/types';
import { burst, morphToActivity } from '../lib/motion';
import { haptic } from '../platform';
import { actions, useStore } from '../store/store';
import { ActivityArt } from './Art';
import { Emoji, EmojiText } from './Emoji';
import { Icon } from './Icon';
import { t } from '../i18n';

export const domainStyle = (d: Domain) => ({ '--dc': DOMAIN_INFO[d].color, '--dc-soft': `var(--d-${d}-soft)` }) as CSSProperties;

export function DomainChip({ domain }: { domain: Domain }) {
  return (
    <span className="domain-chip" style={domainStyle(domain)}>
      <Emoji e={DOMAIN_INFO[domain].emoji} size={18} />
      {DOMAIN_INFO[domain].short}
    </span>
  );
}

export function FavoriteButton({ id, title, floating = false }: { id: string; title: string; floating?: boolean }) {
  const fav = useStore((s) => s.favorites.includes(id));
  return (
    <button
      type="button"
      className={`fav-btn${floating ? ' floating' : ''}`}
      aria-pressed={fav}
      aria-label={fav ? t('Remove {title} from favourites', { title }) : t('Save {title} to favourites', { title })}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        haptic(fav ? 'tap' : 'success');
        if (!fav) burst(e.currentTarget, 'hearts', 7);
        actions.toggleFavorite(id);
      }}
    >
      <Icon name="heart" size={20} filled={fav} strokeWidth={2.4} />
    </button>
  );
}

/** Time and energy, the two facts a parent needs at a glance. */
export function MetaLine({ a, full = false }: { a: Activity; full?: boolean }) {
  const e = ENERGY_INFO[a.energy];
  return (
    <span className="meta-line">
      <span className="meta-item">
        <Icon name="clock" size={15} strokeWidth={2.6} />
        {t('{n} min', { n: a.durationMin })}
      </span>
      <span className="meta-item">
        <Emoji e={e.emoji} size={16} />
        {full ? e.label : <span className="sr-only">{e.label}</span>}
      </span>
      {full && a.materialsLevel === 'none' && (
        <span className="meta-item">
          <Emoji e="🙌" size={16} />
          {t('Nothing needed')}
        </span>
      )}
    </span>
  );
}

/**
 * A picture-first card for grids and carousels: scene, title, time and energy.
 * The link and the heart are siblings (not nested), so both stay valid, separately focusable controls.
 */
export function ActivityTile({
  activity: a,
  badge,
  played,
  fav = true,
}: {
  activity: Activity;
  badge?: string;
  /** Times the active child has played it; shows a tick when > 0. */
  played?: number;
  fav?: boolean;
}) {
  const navigate = useNavigate();
  return (
    <div className="tile">
      <Link to={`/activity/${a.id}`} className="tile-link" data-id={a.id} onClick={(e) => morphToActivity(e, navigate, `/activity/${a.id}`)}>
        <ActivityArt activity={a} className="tile-art" />
        <span className="tile-body">
          <span className="tile-title">{a.title}</span>
          <MetaLine a={a} />
        </span>
        {(badge || !!played) && (
          <span className={`tile-badge${badge ? ' brand' : ''}`}>
            {badge ? (
              <EmojiText text={badge} size={14} />
            ) : (
              <>
                <Icon name="check" size={12} strokeWidth={3.4} /> {played! > 1 ? t('{n}×', { n: played! }) : t('Played')}
              </>
            )}
          </span>
        )}
      </Link>
      {fav && <FavoriteButton id={a.id} title={a.title} floating />}
    </div>
  );
}
