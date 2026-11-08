# PlayNest on iOS and Android

PlayNest is one codebase that ships three ways:

| Where | How | Status |
|---|---|---|
| Any browser | Static site (`npm run build` → `dist/`) | Ready |
| Home screen (Android, iOS, desktop) | Installable PWA: manifest, service worker, offline, app shortcuts | Ready |
| App Store / Google Play | [Capacitor](https://capacitorjs.com) native shells around the same build | Configured; native projects not generated yet |

## Why Capacitor

The app is a React web app with no server, and all its content is bundled. Capacitor wraps that exact build in a native
iOS/Android project, so there is no second codebase to keep in sync. It also gives a path to native plugins when
they're worth it. React Native would mean rewriting every screen.

## One-time setup

Requirements: Node 22+.
- **Android:** Android Studio with an SDK and an emulator or device.
- **iOS:** a Mac with Xcode and CocoaPods.

```bash
npm install
npm run build
npx cap add android      # creates android/ — commit it
npx cap add ios          # creates ios/ — commit it (macOS only)
```

Before publishing, change `appId` in `capacitor.config.ts` to a reverse-domain id you own (e.g. `com.yourstudio.playnest`).

## Everyday workflow

```bash
npm run android   # build the web app, copy it into android/, open Android Studio
npm run ios       # same for Xcode
npm run cap:sync  # build and copy into both, without opening an IDE
```

Run from Android Studio or Xcode onto a device or emulator.

## What already works natively

- **Safe areas:** `viewport-fit=cover` plus `env(safe-area-inset-*)` on the header, bottom navigation, play mode and
  toasts.
- **Back button (Android):** hash routing keeps real history entries, and Capacitor's default back-button behaviour
  walks that history.
- **Offline:** content ships inside the app. The service worker is skipped in the native shell (`isNative()` in
  `src/platform`).
- **Data:** `localStorage` in the app's own WebView, plus JSON backup and restore from Settings.

## Native upgrades (optional plugins)

Every device feature goes through `src/platform/index.ts`, so each upgrade below changes one function there.

| Feature | Web today | Native upgrade |
|---|---|---|
| Haptics | `navigator.vibrate` (Android only) | `@capacitor/haptics` — works on iOS too |
| Keep screen on in play mode | Screen Wake Lock API | `@capacitor-community/keep-awake` |
| Share an activity | Web Share API, clipboard fallback | `@capacitor/share` |
| Status bar colour | `theme-color` meta | `@capacitor/status-bar` (follow light/dark theme) |
| Splash screen | Manifest background | `@capacitor/splash-screen` |
| Gentle daily reminder | — | `@capacitor/local-notifications` (opt-in, quiet hours) |
| Durable storage | `localStorage` | `@capacitor/preferences`, or SQLite for large journals |

## Store checklist

- **Icons:** generate them from `public/icons/icon.svg`, e.g. with `npx @capacitor/assets generate`.
- **Privacy labels:** no data collected. PlayNest has no accounts, analytics or network calls.
- **Children's category:** both stores have extra rules for apps aimed at children. PlayNest is for parents, so list it
  under Parenting / Education rather than Kids.
- **Screenshots:** `npm run e2e` captures every screen at 390×844 in `e2e/screenshots/`. Change the viewport in
  `e2e/smoke.mjs` for other sizes, e.g. 412×915 for Android.
