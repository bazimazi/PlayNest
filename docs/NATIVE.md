# PlayNest on iOS, Android and desktop

PlayNest is one codebase that ships four ways:

| Where | How | Status |
|---|---|---|
| Any browser | Static site (`npm run build` → `dist/`) | Ready |
| Home screen (Android, iOS, desktop) | Installable PWA: manifest, service worker, offline, app shortcuts ([PWA.md](PWA.md)) | Ready |
| App Store / Google Play | [Capacitor](https://capacitorjs.com) native shells around the same build | Configured; native projects not generated yet |
| Windows, macOS, Linux | [Tauri 2](https://tauri.app) desktop shell around the same build (`src-tauri/`) | Ready; builds and runs on Windows, not yet tried on macOS or Linux |

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

## Desktop (Tauri)

Tauri wraps the same `dist/` build in a small native window that uses the system's own webview (WebView2 on Windows,
WKWebView on macOS, WebKitGTK on Linux). Installers are a few MB, because no browser engine is bundled.

### One-time setup

- **Rust** (stable, via [rustup](https://rustup.rs)).
- **Windows:** Microsoft C++ Build Tools and WebView2 (already part of Windows 10 and 11).
- **macOS:** Xcode Command Line Tools (`xcode-select --install`).
- **Linux:** `libwebkit2gtk-4.1-dev`, `build-essential`, `libssl-dev`, `libayatana-appindicator3-dev` and
  `librsvg2-dev` (Debian/Ubuntu names; see [Tauri's prerequisites](https://tauri.app/start/prerequisites/)).

### Everyday workflow

```bash
npm run desktop         # starts Vite, then opens the app window with hot reload
npm run desktop:build   # builds the web app, then the installers for this OS
```

Installers land in `src-tauri/target/release/bundle/`: `.msi` and `.exe` (NSIS) on Windows, `.app` and `.dmg` on
macOS, `.deb`, `.rpm` and `.AppImage` on Linux. Each OS builds its own installers, so build on each one, or let CI
do it: `.github/workflows/desktop.yml` builds all three when run by hand (installers attached to the run) or when a
`v*` tag is pushed (installers attached to a draft GitHub release).

Icons in `src-tauri/icons/` come from `public/icons/icon.svg`: run `npm run tauri icon public/icons/icon.svg` after
changing it. The app id is `app.playnest.desktop` in `src-tauri/tauri.conf.json`; the version comes from
`package.json`.

### What the desktop shell changes

Only `src/platform/index.ts` knows about it (`isTauri()`), and every change falls back to the web behaviour:

- **Links and phone numbers:** a webview would open a web page inside the app's own window. `openLinksExternally()`
  sends `http(s):`, `tel:` and `mailto:` links to the system's browser, phone or mail app instead, so a helpline is
  still one click away (on Windows, `tel:` opens Phone Link or whatever app handles calls).
- **Save a copy:** a native *Save as* dialog through the app's `save_backup` command (`src-tauri/src/lib.rs`), instead
  of a share sheet or a download.
- **Offline:** content ships inside the app, so the service worker is skipped, as in Capacitor.
- **Data:** `localStorage` in the app's own webview data folder, plus JSON backup and restore from Settings.
- **Locked down:** a strict Content Security Policy with no network access, and the window may only open URLs (no file
  system, no shell). See `src-tauri/capabilities/default.json`.

### Not yet done on desktop

- **Code signing:** unsigned installers trigger SmartScreen on Windows and Gatekeeper on macOS. Sign them (and notarise
  on macOS) before giving them to families.
- **Auto-update:** add `tauri-plugin-updater` and a signed update feed if the desktop app is distributed outside a store.
- **Printing on macOS:** `window.print()` works in WebView2; check the printable summary in WKWebView before release.

### Tauri on phones

Tauri 2 can also build for Android and iOS (`npm run tauri android init`, `npm run tauri ios init`), and
`src-tauri/src/lib.rs` already has the mobile entry point. Capacitor stays the supported route for the stores, because
the plugins listed above exist for it; use one or the other per platform, not both.

## Store checklist

- **Icons:** generate them from `public/icons/icon.svg`, e.g. with `npx @capacitor/assets generate`.
- **Privacy labels:** no data collected. PlayNest has no accounts, analytics or network calls.
- **Children's category:** both stores have extra rules for apps aimed at children. PlayNest is for parents, so list it
  under Parenting / Education rather than Kids.
- **Screenshots:** `npm run e2e` captures every screen at 390×844 in `e2e/screenshots/`. Change the viewport in
  `e2e/smoke.mjs` for other sizes, e.g. 412×915 for Android.
