import { Component, useState, type ReactNode } from 'react';
import { toISODate } from '../lib/dates';
import { isIOS, isStandalone, protectStorage, saveBackupFile } from '../platform';
import { STORAGE_KEY, actions, damagedCopy, exportState, getState, recordCount, releaseDamagedSave, useStorageHealth, useStore } from '../store/store';
import { Icon } from './Icon';
import { toast } from './Toast';
import { t } from '../i18n';

/** Hands the parent a copy of their data. Must run straight from a tap. */
export async function backUpNow() {
  const result = await saveBackupFile(exportState(), toISODate(new Date()));
  if (result === 'shared' || result === 'downloaded') {
    actions.markBackedUp();
    toast(result === 'shared' ? t('💾 Copy saved') : t('💾 Copy downloaded'));
  } else if (result === 'failed') {
    toast(t('That didn’t work. Try again from Settings'));
  }
}

/** Saving is only ever mentioned when it has gone wrong, and then it stays until it's right. */
export function StorageBanner() {
  const { saveFailed, nearLimit, damagedKey } = useStorageHealth();
  if (damagedKey) {
    const inPlace = damagedKey === STORAGE_KEY;
    return (
      <div className="storage-banner" role="alert">
        <p>
          {inPlace
            ? t('We couldn’t read your saved data, and there’s no room to copy it. Nothing will be saved over it until you’ve kept a copy.')
            : t('We couldn’t read your saved data, so PlayNest started fresh. A copy has been kept. Restore from a backup if you have one.')}
        </p>
        <button
          type="button"
          className="btn btn-sm"
          onClick={() => {
            const text = damagedCopy(damagedKey);
            if (!text) return;
            void saveBackupFile(text, `damaged-${toISODate(new Date())}`).then((result) => {
              if (inPlace && (result === 'shared' || result === 'downloaded')) releaseDamagedSave();
            });
          }}
        >
          {t('Save the copy')}
        </button>
      </div>
    );
  }
  if (saveFailed) {
    return (
      <div className="storage-banner" role="alert">
        <p>{t('This phone isn’t saving right now. Your latest changes could be lost if you close PlayNest.')}</p>
        <button type="button" className="btn btn-sm" onClick={() => void backUpNow()}>
          {t('Save a copy')}
        </button>
      </div>
    );
  }
  if (nearLimit) {
    return (
      <div className="storage-banner soft" role="status">
        <p>{t('PlayNest’s storage on this phone is getting full. A copy keeps everything safe.')}</p>
        <button type="button" className="btn btn-sm" onClick={() => void backUpNow()}>
          {t('Save a copy')}
        </button>
      </div>
    );
  }
  return null;
}

const DAY_MS = 86_400_000;

/** Whether to suggest a copy: something new to keep, never at night, and never right after "Later". */
export function shouldSuggestBackup(now: Date): boolean {
  const state = getState();
  const { lastBackupAt, lastBackupRecords, backupSnoozeUntil } = state.settings;
  const hour = now.getHours();
  if (hour >= 20 || hour < 7) return false;
  if (backupSnoozeUntil && new Date(backupSnoozeUntil) > now) return false;
  const newRecords = recordCount(state) - lastBackupRecords;
  if (newRecords < 10) return false;
  if (!lastBackupAt) return true;
  return now.getTime() - new Date(lastBackupAt).getTime() > 30 * DAY_MS;
}

/** A quiet card after something good has happened. Says what's to gain, never what could be lost. */
export function BackupNudge({ now, childName }: { now: Date; childName: string }) {
  useStore((s) => s.settings.backupSnoozeUntil);
  useStore((s) => s.settings.lastBackupAt);
  const [hidden, setHidden] = useState(false);
  if (hidden || !shouldSuggestBackup(now)) return null;
  const safariTab = isIOS() && !isStandalone();
  return (
    <section className="card backup-nudge" aria-labelledby="backup-title">
      <h2 id="backup-title">{t('Keep {name}’s memories safe', { name: childName })}</h2>
      <p>{safariTab ? t('On iPhone, add PlayNest to your Home Screen so it keeps your data. A copy is safest of all.') : t('Save a copy somewhere of your own?')}</p>
      <div className="btn-row">
        <button
          type="button"
          className="btn"
          onClick={() => {
            actions.snoozeBackup();
            setHidden(true);
          }}
        >
          {t('Later')}
        </button>
        <button type="button" className="btn btn-primary grow" onClick={() => void backUpNow()}>
          {t('Save a copy')}
        </button>
      </div>
    </section>
  );
}

/** Asks the browser to keep this app's data, once there's something worth keeping. */
export function askToKeepData() {
  void protectStorage();
}

/** If a screen breaks, the parent still gets a way forward, and is told their data is safe. Help stays reachable. */
export class ErrorBoundary extends Component<{ children: ReactNode; resetKey: string }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidUpdate(prev: { resetKey: string }) {
    if (this.state.failed && prev.resetKey !== this.props.resetKey) this.setState({ failed: false });
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main className="crash">
        <h1>{navigator.onLine ? t('Something went wrong on this screen') : t('This part needs a connection the first time')}</h1>
        <p>{t('Your saved data is safe.')}</p>
        {navigator.onLine && (
          <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => location.reload()}>
            <Icon name="refresh" size={20} strokeWidth={2.6} /> {t('Reload')}
          </button>
        )}
        <a
          className="btn btn-block"
          href="#/help"
          onClick={() => {
            this.setState({ failed: false });
          }}
        >
          {t('Help right now')}
        </a>
      </main>
    );
  }
}
