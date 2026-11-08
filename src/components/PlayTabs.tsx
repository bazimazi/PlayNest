import { useNavigate } from 'react-router-dom';
import { Segmented } from './ui';
import { t } from '../i18n';

export type PlayView = 'ideas' | 'stories' | 'songs' | 'week';

const ROUTES: Record<PlayView, string> = { ideas: '/explore', stories: '/stories', songs: '/songs', week: '/plan' };

/** Switches the Play tab between the idea library, stories, songs and this week's plan. */
export function PlayTabs({ view }: { view: PlayView }) {
  const navigate = useNavigate();
  return (
    <Segmented
      tabs
      label={t('Play')}
      value={view}
      options={[
        { value: 'ideas', label: t('Ideas') },
        { value: 'stories', label: t('Stories') },
        { value: 'songs', label: t('Songs') },
        { value: 'week', label: t('Week') },
      ]}
      onChange={(v) => navigate(ROUTES[v], { replace: true })}
    />
  );
}
