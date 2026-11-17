import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { toast } from './components/Toast';
import { t } from './i18n';
import { captureInstallPrompt, handleLaunches, isNative, openLinksExternally } from './platform';

captureInstallPrompt();
openLinksExternally();
handleLaunches();

const offerReload = () => toast(t('✨ PlayNest has been updated'), { label: t('Reload'), onClick: () => location.reload() });

// An open tab asked for a code file from an older version that is no longer available: offer the new one.
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  if (navigator.onLine) offerReload();
  else toast(t('This part needs a connection the first time'));
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Offline support for the web/PWA build. A native shell bundles the files itself, so it needs no service worker.
if ('serviceWorker' in navigator && import.meta.env.PROD && !isNative()) {
  const register = () => {
    // The worker activates new versions straight away; the open page keeps running the old code until reloaded.
    let controlled = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      // The first worker takes over only once it has stored every file: from now on, no signal is no problem.
      if (controlled) offerReload();
      else toast(t('✅ PlayNest now works offline'), undefined, { waitTurn: true });
      controlled = true;
    });
    navigator.serviceWorker
      .register('./sw.js')
      .then((registration) => {
        // An installed app can stay open for days, so look for a new version whenever it comes back.
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') void registration.update().catch(() => {});
        });
      })
      .catch(() => {
        /* offline support is a progressive enhancement */
      });
  };
  // This module loads after the language does, so the page has often finished loading already and `load` won't fire again.
  if (document.readyState === 'complete') register();
  else window.addEventListener('load', register);
}
