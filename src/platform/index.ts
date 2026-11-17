/**
 * Device features behind one small interface. Everything here uses web APIs with graceful fallbacks, so the app
 * works in any browser, as an installed PWA and inside a native wrapper (Capacitor on iOS/Android, Tauri on Windows,
 * macOS and Linux). To use native plugins later, swap the implementations here; nothing else in the app touches these
 * APIs directly.
 */
import { t } from '../i18n';

type CapacitorGlobal = { isNativePlatform?: () => boolean; getPlatform?: () => string };

/** True inside the Tauri desktop shell (Tauri injects `window.__TAURI_INTERNALS__`). */
export function isTauri(): boolean {
  return !!(globalThis as { __TAURI_INTERNALS__?: unknown }).__TAURI_INTERNALS__;
}

/** True inside a native app shell: Capacitor (iOS/Android, injects `window.Capacitor`) or Tauri (desktop). */
export function isNative(): boolean {
  const cap = (globalThis as { Capacitor?: CapacitorGlobal }).Capacitor;
  return !!cap?.isNativePlatform?.() || isTauri();
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

export type BackupResult = 'shared' | 'saved' | 'cancelled' | 'downloaded' | 'failed';

/**
 * Hands the parent a copy of their data. Shared as `.txt` because share sheets don't accept `.json` files; the content
 * is still JSON, and Restore accepts either. Must be called straight from a tap: a browser only allows sharing then.
 */
export async function saveBackupFile(json: string, today: string): Promise<BackupResult> {
  const name = `PlayNest-backup-${today}.txt`; // i18n-ignore: file names stay in English
  // A desktop webview has no share sheet and may ignore downloads: ask where to save it instead.
  if (isTauri()) {
    try {
      const { invoke } = await import('@tauri-apps/api/core');
      return (await invoke<boolean>('save_backup', { name, contents: json })) ? 'saved' : 'cancelled';
    } catch {
      return 'failed';
    }
  }
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

// ---------- links in the desktop shell ----------

/** Links that belong to another app: a website, a phone number, an email. Matches the opener scope in src-tauri/capabilities. */
const EXTERNAL_LINK = /^(https?|tel|mailto):/i;

/**
 * In the Tauri desktop shell, a web link or a `tel:` number would otherwise replace the app inside its own window (or do
 * nothing). Call once at startup: it hands them to the system's browser or phone app, so a helpline is still one tap
 * away. Does nothing anywhere else, where the browser already does the right thing.
 */
export function openLinksExternally(): void {
  if (!isTauri()) return;
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0) return;
    const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
    const href = a?.getAttribute('href');
    if (!href || !EXTERNAL_LINK.test(href)) return;
    e.preventDefault();
    void import('@tauri-apps/plugin-opener').then(({ openUrl }) => openUrl(href)).catch(() => {});
  });
}

// ---------- offline ----------

/** `ready`: every screen opens with no connection. `preparing`: still downloading. `unavailable`: only while online. */
export type OfflineReadiness = 'ready' | 'preparing' | 'unavailable';

/**
 * Whether the whole app is on this device yet. A native shell bundles it; on the web the service worker only becomes
 * active once it has stored every file, so an active worker means everything is there.
 */
export async function offlineReadiness(): Promise<OfflineReadiness> {
  if (isNative()) return 'ready';
  const sw = globalThis.navigator?.serviceWorker;
  if (!sw) return 'unavailable';
  if (sw.controller) return 'ready';
  try {
    const reg = await sw.getRegistration();
    // Active but not in charge of this page (after a hard reload): everything is still stored for next time.
    if (reg?.active) return 'ready';
    if (reg?.installing || reg?.waiting) return 'preparing';
  } catch {
    /* blocked (a private window, for example) */
  }
  return 'unavailable';
}

/** Calls `listener` now and whenever readiness may have changed, until the returned function is called. */
export function watchOfflineReadiness(listener: (readiness: OfflineReadiness) => void): () => void {
  let live = true;
  let timer: ReturnType<typeof setInterval> | undefined;
  const check = () =>
    void offlineReadiness().then((r) => {
      if (!live) return;
      listener(r);
      if (r === 'ready') clearInterval(timer); // Ready stays ready: an update keeps the old files until it has all the new.
    });
  check();
  const sw = globalThis.navigator?.serviceWorker;
  sw?.addEventListener('controllerchange', check);
  // An install in progress tells the page nothing until it takes over, so look again now and then while watched.
  timer = setInterval(check, 2000);
  return () => {
    live = false;
    sw?.removeEventListener('controllerchange', check);
    clearInterval(timer);
  };
}

// ---------- launching the installed app ----------

type LaunchQueue = { setConsumer: (consumer: (params: { targetURL?: string }) => void) => void };

/**
 * The manifest asks for an open PlayNest window to be brought forward rather than a second one opened
 * (`launch_handler`), so a parent keeps their place. A shortcut such as Help still has to take them to that screen:
 * every screen is in the hash, so a launch with one goes there, and a plain launch leaves the window as it was.
 */
export function handleLaunches(): void {
  const queue = (globalThis as { launchQueue?: LaunchQueue }).launchQueue;
  queue?.setConsumer(({ targetURL }) => {
    if (!targetURL) return;
    const { hash } = new URL(targetURL);
    if (hash && hash !== globalThis.location.hash) globalThis.location.hash = hash;
  });
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
