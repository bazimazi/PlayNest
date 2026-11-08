import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { toast } from './components/Toast';
import { captureInstallPrompt, isNative } from './platform';

captureInstallPrompt();

// An open tab asked for a code file from an older version that is no longer available: offer the new one.
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  if (navigator.onLine) toast('✨ PlayNest has been updated', { label: 'Reload', onClick: () => location.reload() });
  else toast('This part needs a connection the first time');
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
    const hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (hadController) toast('✨ PlayNest has been updated', { label: 'Reload', onClick: () => location.reload() });
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
