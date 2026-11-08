import { Link } from 'react-router-dom';
import type { Activity } from '../data/types';
import { SLOT_INFO } from '../lib/plan';
import { haptic } from '../platform';
import type { PlanItem } from '../store/model';
import { MetaLine } from './ActivityCard';
import { burst } from '../lib/motion';
import { ActivityArt } from './Art';
import { Icon } from './Icon';
import { t } from '../i18n';

/** One plan entry: tick it off, open it, play it — and optionally swap it for another idea. */
export function PlanRow({
  item,
  activity: a,
  onToggle,
  onSwap,
}: {
  item: PlanItem;
  activity: Activity;
  onToggle: () => void;
  onSwap?: () => void;
}) {
  return (
    <div className={`plan-row${item.done ? ' done' : ''}`}>
      <button
        type="button"
        className="check-btn"
        aria-pressed={item.done}
        aria-label={item.done ? t('{title}: done. Mark as not done', { title: a.title }) : t('Mark {title} as done', { title: a.title })}
        onClick={(e) => {
          haptic(item.done ? 'tap' : 'success');
          if (!item.done) burst(e.currentTarget, 'stars', 7);
          onToggle();
        }}
      >
        <Icon name="check" size={18} strokeWidth={3.4} />
      </button>
      <Link to={`/activity/${a.id}`} className="plan-row-main">
        <ActivityArt activity={a} className="thumb" />
        <span className="plan-row-text">
          <span className="plan-row-slot">{SLOT_INFO[item.slot].label}</span>
          <span className="plan-row-title">{a.title}</span>
          <MetaLine a={a} />
        </span>
      </Link>
      {onSwap && (
        <button type="button" className="swap-btn link-btn" aria-label={t('Swap {title} for another idea', { title: a.title })} onClick={onSwap}>
          <Icon name="shuffle" size={16} strokeWidth={2.6} /> {t('Swap')}
        </button>
      )}
      <Link to={`/play/${a.id}`} className="play-btn" aria-label={t('Play {title}', { title: a.title })}>
        <Icon name="play" size={16} filled />
      </Link>
    </div>
  );
}
