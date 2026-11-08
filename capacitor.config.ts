import type { CapacitorConfig } from '@capacitor/cli';

/**
 * Native iOS/Android shells around the same web build (see docs/NATIVE.md).
 * Change `appId` to a reverse-domain id you own before publishing to the App Store or Google Play.
 */
const config: CapacitorConfig = {
  appId: 'app.playnest.mobile',
  appName: 'PlayNest',
  webDir: 'dist',
  backgroundColor: '#fff9e8',
  android: {
    // Content is bundled with the app, so no mixed-content or remote loading is needed.
    allowMixedContent: false,
  },
  ios: {
    contentInset: 'never',
  },
};

export default config;
