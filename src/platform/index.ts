/**
 * Device features behind one small interface. Everything here uses web APIs with graceful fallbacks, so the app
 * works in any browser, as an installed PWA and inside a native wrapper (Capacitor). To use native plugins later,
 * swap the implementations here; nothing else in the app touches these APIs directly.
 */
import { t } from '../i18n';

type CapacitorGlobal = { isNativePlatform?: () => boolean; getPlatform?: () => string };

/** True inside the iOS/Android app shell (Capacitor injects `window.Capacitor`). */
export function isNative(): boolean {
  const cap = (globalThis as { Capacitor?: CapacitorGlobal }).Capacitor;
  return !!cap?.isNativePlatform?.();
}

/** Running as an installed app (home-screen PWA or native shell) rather than in a browser tab. */
export function isStandalone(): boolean {
  if (isNative()) return true;
  return (
    globalThis.matchMedia?.('(display-mode: standalone)').matches === true ||
    (globalThis.navigator as Navigator & { standalone?: boolean })?.standalone === true
  );
}

export function isIOS(): boolean {
  const ua = globalThis.navigator?.userAgent ?? '';
  // i18n-ignore
  return /iPad|iPhone|iPod/.test(ua) || (ua.includes('Macintosh') && (globalThis.navigator?.maxTouchPoints ?? 0) > 1);
}

/** A light physical tick for confirmations. Silently does nothing where vibration isn't supported (e.g. iOS Safari). */
export function haptic(kind: 'tap' | 'success' = 'tap'): void {
  try {
    globalThis.navigator?.vibrate?.(kind === 'tap' ? 8 : [12, 60, 18]);
  } catch {
    /* not supported */
  }
}

/**
 * Keeps the screen on (e.g. while a parent follows play steps) and returns a release function.
 * The browser drops the lock when the page is hidden, so it is re-requested when the page comes back.
 */
export function keepAwake(): () => void {
  type Sentinel = { release: () => Promise<void> };
  const wl = (globalThis.navigator as Navigator & { wakeLock?: { request: (t: 'screen') => Promise<Sentinel> } })?.wakeLock;
  if (!wl) return () => {};
  let sentinel: Sentinel | null = null;
  let active = true;
  const request = () => {
    if (!active || document.visibilityState !== 'visible') return;
    wl.request('screen')
      .then((s) => {
        if (active) sentinel = s;
        else void s.release();
      })
      .catch(() => {
        /* denied (battery saver, unsupported context): play on without it */
      });
  };
  request();
  document.addEventListener('visibilitychange', request);
  return () => {
    active = false;
    document.removeEventListener('visibilitychange', request);
    void sentinel?.release().catch(() => {});
    sentinel = null;
  };
}

export type ShareResult = 'shared' | 'copied' | 'cancelled' | 'unavailable';

/** Opens the system share sheet, or copies the link where sharing isn't available. */
export async function share(data: { title: string; text: string; url: string }): Promise<ShareResult> {
  const nav = globalThis.navigator;
  if (nav?.share) {
    try {
      await nav.share(data);
      return 'shared';
    } catch (e) {
      if ((e as DOMException)?.name === 'AbortError') return 'cancelled';
    }
  }
  try {
    await nav?.clipboard?.writeText(`${data.text}\n${data.url}`);
    return 'copied';
  } catch {
    return 'unavailable';
  }
}

/**
 * Shares plain text on its own, with no link needed: a grandparent or a childminder gets the whole game in the message,
 * whether or not they have the app. Falls back to copying.
 */
export async function shareText(title: string, text: string): Promise<ShareResult> {
  const nav = globalThis.navigator;
  if (nav?.share) {
    try {
      await nav.share({ title, text });
      return 'shared';
    } catch (e) {
      if ((e as DOMException)?.name === 'AbortError') return 'cancelled';
    }
  }
  try {
    await nav?.clipboard?.writeText(text);
    return 'copied';
  } catch {
    return 'unavailable';
  }
}

export type BackupResult = 'shared' | 'cancelled' | 'downloaded' | 'failed';

/**
 * Hands the parent a copy of their data. Shared as `.txt` because share sheets don't accept `.json` files; the content
 * is still JSON, and Restore accepts either. Must be called straight from a tap: a browser only allows sharing then.
 */
export async function saveBackupFile(json: string, today: string): Promise<BackupResult> {
  const name = `PlayNest-backup-${today}.txt`; // i18n-ignore: file names stay in English
  const file = new File([json], name, { type: 'text/plain' });
  const nav = globalThis.navigator;
  if (nav?.canShare?.({ files: [file] })) {
    try {
      await nav.share({ files: [file], title: t('PlayNest backup') });
      return 'shared';
    } catch (e) {
      if ((e as DOMException)?.name === 'AbortError') return 'cancelled';
      // Anything else (not allowed in this context, for example): fall through to a plain download.
    }
  }
  try {
    const url = URL.createObjectURL(file);
    const a = Object.assign(document.createElement('a'), { href: url, download: name });
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
    return 'downloaded';
  } catch {
    return 'failed';
  }
}

export type StorageProtection = 'persisted' | 'best-effort' | 'unsupported';

/**
 * Asks the browser not to clear this app's data under storage pressure. Some browsers decide from how the app is used
 * (Safari favours Home Screen apps) and Firefox shows a prompt, so call it after a real save rather than at launch.
 */
export async function protectStorage(): Promise<StorageProtection> {
  const s = globalThis.navigator?.storage;
  if (!s?.persist) return 'unsupported';
  try {
    if (await s.persisted()) return 'persisted';
    return (await s.persist()) ? 'persisted' : 'best-effort';
  } catch {
    return 'unsupported';
  }
}

export async function storageProtection(): Promise<StorageProtection> {
  const s = globalThis.navigator?.storage;
  if (!s?.persisted) return 'unsupported';
  try {
    return (await s.persisted()) ? 'persisted' : 'best-effort';
  } catch {
    return 'unsupported';
  }
}

/** A link to a screen of the app, e.g. `appLink('/activity/peekaboo')`. */
export function appLink(path: string): string {
  const { origin, pathname } = globalThis.location;
  return `${origin}${pathname}#${path}`;
}

// ---------- install prompt (Chrome / Edge / Android) ----------

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

let deferredInstall: InstallPromptEvent | null = null;
const installListeners = new Set<() => void>();

/** Call once at startup so the browser's install prompt can be offered from inside the app later. */
export function captureInstallPrompt(): void {
  globalThis.addEventListener?.('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstall = e as InstallPromptEvent;
    installListeners.forEach((l) => l());
  });
  globalThis.addEventListener?.('appinstalled', () => {
    deferredInstall = null;
    installListeners.forEach((l) => l());
  });
}

export function canPromptInstall(): boolean {
  return deferredInstall !== null;
}

export function onInstallAvailabilityChange(listener: () => void): () => void {
  installListeners.add(listener);
  return () => installListeners.delete(listener);
}

export async function promptInstall(): Promise<boolean> {
  if (!deferredInstall) return false;
  await deferredInstall.prompt();
  const { outcome } = await deferredInstall.userChoice;
  deferredInstall = null;
  installListeners.forEach((l) => l());
  return outcome === 'accepted';
}
