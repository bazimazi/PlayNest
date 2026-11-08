import { useEffect, useState } from 'react';
import { canPromptInstall, isIOS, isStandalone, onInstallAvailabilityChange, promptInstall } from '../platform';
import { Icon } from './Icon';
import { toast } from './Toast';
import { t } from '../i18n';
import { rich } from '../i18n/rich';

const DISMISSED_KEY = 'playnest:install-nudge-dismissed';

function useInstallAvailable(): boolean {
  const [available, setAvailable] = useState(canPromptInstall);
  useEffect(() => onInstallAvailabilityChange(() => setAvailable(canPromptInstall())), []);
  return available;
}

/**
 * "Install as an app" where the browser offers it (Android, desktop Chrome/Edge) or with instructions on iPhone/iPad.
 * `nudge` is the dismissible version shown once on Today; the default is the permanent row in Settings.
 */
export function InstallPrompt({ nudge = false }: { nudge?: boolean }) {
  const available = useInstallAvailable();
  const [dismissed, setDismissed] = useState(() => {
    try {
      return nudge && localStorage.getItem(DISMISSED_KEY) === '1';
    } catch {
      return false;
    }
  });

  if (dismissed || isStandalone() || (!available && !isIOS())) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISSED_KEY, '1');
    } catch {
      /* storage unavailable: it just shows again next time */
    }
  };

  return (
    <section className="install card" aria-labelledby="install-title">
      <span className="install-icon" aria-hidden="true">
        <Icon name="install" size={22} strokeWidth={2.4} />
      </span>
      <div className="install-text">
        <h2 id="install-title">{nudge ? t('Keep PlayNest one tap away') : t('Get the app')}</h2>
        {available ? (
          <span>{t('Full screen, works offline, no app store.')}</span>
        ) : (
          <span>
            {rich('Tap <share>Share</share> <icon/> then <add>Add to Home Screen</add>.', {
              share: (s) => <b>{s}</b>,
              icon: <Icon name="share" size={14} />,
              add: (s) => <b>{s}</b>,
            })}
          </span>
        )}
      </div>
      {available && (
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={async () => {
            if (await promptInstall()) toast(t('🎉 PlayNest is on your home screen'));
          }}
        >
          {t('Install')}
        </button>
      )}
      {nudge && (
        <button type="button" className="icon-btn sm" aria-label={t('Not now')} onClick={dismiss}>
          <Icon name="x" size={16} />
        </button>
      )}
    </section>
  );
}
