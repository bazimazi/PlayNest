import type { CapacitorConfig } from '@capacitor/cli';

/**
 * Native iOS/Android shells around the same web build (see docs/NATIVE.md).
 * `appId` is the published Android package name (Cafebazaar); it cannot change after the first upload.
 */
const config: CapacitorConfig = {
  appId: 'games.bazimazi.playnest',
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
