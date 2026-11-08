# Mobile UX craft and web-platform capabilities for PlayNest (status: 4 November 2026)

Current versions used throughout: iOS Safari 27.2 ([released 26 Oct 2026](https://webkit.org/blog/18515/webkit-features-for-safari-27-2/)), Chrome 156 for Android, Firefox 159 for Android, Samsung Internet 30 (versions as listed on caniuse today, for example [caniuse: view transitions](https://caniuse.com/view-transitions)).

**How to read these notes.** Claims link to their source. `[Local]` marks something I measured or read in this repo on 2026-11-04, with the file or method named. "(digest)" means the fact came from a search-result summary and I did not open the page itself. "Spec" blocks are my own recommendations built on the cited facts. They are not sourced facts.

**Research limits.** The session's shared web-search budget ran out part-way, and several domains were rate-limited or blocked (web.dev and developer.chrome.com returned 403, PMC returned a bot check, Apple HIG and Material returned empty pages). Later items rely on direct fetches of known URLs, and each section's Gaps list says what is unverified. TypeScript snippets were type-checked under `strict`. The noise renderer, speech chunker, `.ics` date stamp, Intl helpers and search config were run in Node. The CSS and service-worker snippets were not run, and no code here has been tested on a real phone. Device checks are listed in the final section.

Baseline already in the repo and not repeated: [RESEARCH-2.md §3 and §4](../../docs/RESEARCH-2.md), [DESIGN.md](../../docs/DESIGN.md).

---

## Data durability: keeping a family's data safe with no server

### Takeaway
Installing to the Home Screen and calling `persist()` are the two cheap wins. Neither is a guarantee, so a file the parent holds outside the app is the only real backup. PlayNest has three concrete holes today: its backup is a `.json` file that the Web Share list does not allow, it silently discards a corrupt blob, and it silently swallows failed saves.

### Cited Findings

**7-day eviction (no change found in 2026)**
- ITP's 7-day cap covers IndexedDB, LocalStorage, Media keys, SessionStorage, and Service Worker registrations and cache — [WebKit tracking prevention](https://webkit.org/tracking-prevention/)
- The first-party domain of a Home Screen web app is "exempt from ITP's 7-day cap on all script-writeable storage" — [WebKit tracking prevention](https://webkit.org/tracking-prevention/)
- Home Screen apps "have their own counter of days of use", and "We do not expect the first-party in such a web application to have its website data deleted" — [WebKit 2020](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/)
- MDN still describes Safari's rule as no interaction "in the last seven days of browser use", and it does not mention the Home Screen exemption — [MDN storage quotas](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- A March 2026 Reddit report says data in Safari tabs was wiped after 7 days while Home Screen installs lasted longer. Anecdotal, but consistent with the above — [Reddit snapshot](https://reddit.sentinel-team.org/posts/1rpp4oh/snapshots/2026-03-10T20%3A04%3A16.679163Z) (digest)
- The Safari 26.4, 27.0 and 27.2 posts list no storage-policy change, only IndexedDB fixes such as "transactions could be blocked for an extended period before starting" — [Safari 27.0](https://webkit.org/blog/18325/webkit-features-for-safari-27-0/), [Safari 26.4](https://webkit.org/blog/17862/webkit-features-for-safari-26-4/), [Safari 27.2](https://webkit.org/blog/18515/webkit-features-for-safari-27-2/)
- Since Safari 26, every site added to the Home Screen opens as a web app by default — [WebKit WWDC25](https://webkit.org/blog/16993/news-from-wwdc25-web-technology-coming-this-fall-in-safari-26-beta/) (digest)

**Eviction still happens without ITP**
- WebKit can evict when overall quota is exceeded, under system storage pressure, or after long disuse. It evicts per origin, as a whole, least recently used first. An origin may be excluded if it has an active page or is in persistent mode — [WebKit storage policy](https://webkit.org/blog/14403/updates-to-storage-policy/)
- In a Capacitor app, "the OS will reclaim local storage from Web Views if a device is running low on space". The same applies to IndexedDB on iOS. Use Preferences or SQLite instead — [Capacitor storage guide](https://capacitorjs.com/docs/guides/storage)

**`navigator.storage.persist()`**

| Browser | Support | How it is decided |
|---|---|---|
| iOS Safari | 15.2+ ([caniuse](https://caniuse.com/mdn-api_storagemanager_persist)) | Silent. "currently grants a request based on heuristics like whether the website is opened as a Home Screen Web App" ([WebKit](https://webkit.org/blog/14403/updates-to-storage-policy/)) |
| Chrome / Edge | 55+ / 79+ ([caniuse](https://caniuse.com/mdn-api_storagemanager_persist)) | Silent, based on interaction history ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)) |
| Samsung Internet | 6.2+ ([caniuse](https://caniuse.com/mdn-api_storagemanager_persist)) | Not stated. Presumably as Chromium |
| Firefox | 57+ ([caniuse](https://caniuse.com/mdn-api_storagemanager_persist)) | "the user is notified with a UI popup" ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)) |

- Global support is 97.11% — [caniuse](https://caniuse.com/mdn-api_storagemanager_persist)
- Persistent data "is only evicted, or deleted, if the user chooses to" — [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- Conflict on iOS behaviour. A commenter says requests are often silently denied unless the site is on the Home Screen ([Reddit](https://reddit.sentinel-team.org/posts/1rpp4oh/snapshots/2026-03-10T20%3A04%3A16.679163Z), digest). A secondary guide says they are always denied ([MagicBell](https://www.magicbell.com/blog/pwa-ios-limitations-safari-support-complete-guide) or [swoff](https://swoff.netlify.app/docs/concepts/ios-safari-limitations), digest; I could not confirm which). An Apple forum reply says to request it on every app open ([Apple forums](https://developer.apple.com/forums/thread/710157), digest). WebKit's own statement above outranks all three.

**Quota and size limits**
- Safari 17+: browser apps get up to 60% of disk per origin and 80% overall. Other apps embedding web content get 15% and 20%. Home Screen apps get the browser figures — [WebKit](https://webkit.org/blog/14403/updates-to-storage-policy/), [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- Chrome: 60% of disk per origin. Firefox best-effort: smaller of 10% of disk or 10 GiB. Firefox persistent: up to 50% of disk — [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- Web Storage: "Browsers can store up to 5 MiB of local storage, and 5 MiB of session storage per origin". Overflow throws `QuotaExceededError` — [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- Quota "is an upper limit, not a guarantee", and it can change with usage and visit frequency — [WebKit](https://webkit.org/blog/14403/updates-to-storage-policy/)

**Getting a file out of the app**
- File System Access (`showSaveFilePicker`): 30.22% global. Chrome and Edge desktop only (105+, partial from 86). No iOS Safari, Safari, Firefox, Samsung Internet or Chrome for Android — [caniuse](https://caniuse.com/native-filesystem-api), [web.dev](https://web.dev/articles/files/save-a-file) (digest)
- Web Share: 94.17% global. iOS 12.2+, Safari 12.1+, Samsung 8.2+, Chrome 128+ on desktop (partial from 89), Chrome and Firefox for Android supported. **Firefox desktop has none** — [caniuse](https://caniuse.com/web-share)
- **MDN's "usually shareable" file list includes `.pdf`, `.txt`, `.text`, `.csv` and images, but not `.json` or `.zip`.** It says to always test with `navigator.canShare()` — [MDN Navigator.share](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
- `share()` requires transient activation. `NotAllowedError` means blocked, no activation, or a blocked file. `AbortError` means the user cancelled or no targets exist. `TypeError` covers invalid or unsupported files — [MDN Navigator.share](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share), [MDN Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)
- Safari 27.2 "Fixed transient activation being wrongly discarded", which made gated APIs fail on the first attempt. The post names the Clipboard API, not Web Share. Expect similar first-tap failures on older iOS — [Safari 27.2](https://webkit.org/blog/18515/webkit-features-for-safari-27-2/)
- Android WebView may not expose Web Share, and a `.vcf` share failed where `.txt` and images worked ([Mozilla Discourse](https://discourse.mozilla.org/t/web-share-api-and-vcard/95913), digest). Capacitor's Share plugin can only share files from the caches folder by default on Android ([Capacitor Share](https://capacitorjs.com/docs/v7/apis/share), digest)

**What PlayNest does today**
- Backup is a `.json` download through `<a download>`, and import accepts only `application/json,.json` — `[Local]` `src/pages/Settings.tsx:25-29,108`
- `load()` catches a parse failure and returns an empty state, so the next save overwrites the damaged blob — `[Local]` `src/store/store.ts:73-80`
- `persist()` swallows every `setItem` error ("keep working in memory"), so a full disk or quota failure loses everything at next launch with no warning — `[Local]` `src/store/store.ts:85-91`
- The whole state is re-stringified on every `setState` — `[Local]` `src/store/store.ts:87,93-95`
- `navigator.storage` is not used anywhere in `src/` — `[Local]` grep

### Inferences

**Protection ladder**

| Layer | Protects against | Does not protect against |
|---|---|---|
| Home Screen install | ITP 7-day cap | Storage pressure, reinstall, phone change |
| `persist()` granted | Automatic eviction | Reinstall, phone change, a user clearing data |
| IndexedDB copy of the blob | Corruption, the 5 MiB limit | Eviction, because WebKit evicts the origin as a whole |
| Backup file in Files, Drive or email | Everything above | Parent never making one |
| Native shell (SQLite) | WebKit eviction | Phone loss, unless also backed up |

**Spec: fix the silent failures first**
```ts
function load(): AppState {
  const text = globalThis.localStorage?.getItem(STORAGE_KEY);
  if (!text) return emptyState();
  try {
    return migrate(JSON.parse(text));
  } catch {
    // Never let the next save overwrite the only copy.
    localStorage.setItem(`${STORAGE_KEY}:damaged:${Date.now()}`, text);
    flagRecoveryNeeded();
    return emptyState();
  }
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    clearSaveProblem();
  } catch (err) {
    reportSaveProblem(err); // A banner that stays until a save succeeds, with "Save a backup now".
  }
}
```
Also coalesce writes (about 300 ms, plus a flush on `pagehide` and `visibilitychange`) and warn at a 3 MiB blob, well before the 5 MiB limit.

**Spec: backup v2.** Share as `.txt`, which is on the shareable list, and keep JSON as the content.
```ts
export async function saveBackup(json: string): Promise<'shared' | 'cancelled' | 'downloaded'> {
  const date = new Date().toISOString().slice(0, 10);
  const name = `PlayNest-backup-${date}.txt`;
  const file = new File([json], name, { type: 'text/plain' });
  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: 'PlayNest backup' });
      return 'shared';
    } catch (e) {
      if ((e as DOMException).name === 'AbortError') return 'cancelled';
      // NotAllowedError and others fall through to a plain download.
    }
  }
  const url = URL.createObjectURL(file);
  const a = Object.assign(document.createElement('a'), { href: url, download: name });
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
  return 'downloaded';
}
```
- Call it directly in the click handler, with no `await` before `share()`, so activation is not lost.
- Treat `'cancelled'` as neutral. It does not update `lastBackupAt`. Note that "shared" only means a share target was chosen. The app cannot know the file was actually saved.
- Change the import to `accept=".txt,.json,text/plain,application/json"`. Validate by parsing the `{ app: 'playnest', ... }` envelope.
- Put **"Restore from a backup"** on the first onboarding screen. After eviction the app looks like a new install, and this is the parent's only way back.
- Photos later: `.zip` is not on the share list, so use a download, or Capacitor Filesystem plus Share in the native shell.
- On desktop Chrome and Edge, `showSaveFilePicker` can be a bonus "keep saving to this file", but not a core path.

**Spec: persist and status**
```ts
export async function secureStorage(): Promise<'persisted' | 'best-effort' | 'unsupported'> {
  const s = navigator.storage;
  if (!s?.persist) return 'unsupported';
  if (await s.persisted()) return 'persisted';
  return (await s.persist()) ? 'persisted' : 'best-effort';
}
```
- Call it after the first meaningful save, not at launch, because Firefox shows a prompt. Call it again on each launch while the answer is `best-effort`.
- Settings row: "Saved on this phone · Protected" or "Saved on this phone · Back up to stay safe".

**Spec: nudge rules (never guilt, never at night)**
- Trigger: 30 days and at least 10 new records since `lastBackupAt`, or a Safari-tab user on iOS (not standalone).
- Surface: one quiet card on Today, shown right after something good such as a finished activity. Not a modal. Not between 20:00 and 07:00.
- Copy: "Keep Maya's memories safe. Save a copy?" with buttons `Save a copy` and `Later`. "Later" snoozes for 14 days. Never mention what could be lost.
- Safari-tab variant: "On iPhone, add PlayNest to your Home Screen so it keeps your data." This is the one case where naming the risk is warranted.

### Gaps
- I found no measured real-world eviction rate for installed iOS PWAs. Apple gives only an expectation ("We do not expect..."), not a guarantee.
- I could not confirm whether `<a download>` of a blob works in iOS Home Screen mode on 26 or 27, or where the file lands. Test it.
- Exact Chrome grant heuristics for `persist()`: web.dev returned 403.
- Whether Safari's actual share allowlist matches MDN's list. MDN says "usually shareable", so `canShare()` must stay the gate.

---

## Audio: soft melody guide and white, pink and brown noise, offline

### Takeaway
Use Web Audio only while the app is visible, because iOS interrupts it when the screen locks. For anything that must keep playing at bedtime, pre-render to a WAV and play it through `<audio>` with Media Session. Default to low volume, a timer, and "across the room, never in the cot". A phone cannot know its real loudness, so never show a dB promise.

### Cited Findings

**iOS and autoplay rules**
- Media with sound is generally blocked until the user has interacted with the site. `start()` on a Web Audio source outside a user input handler is subject to autoplay rules. Firefox's `media.autoplay.block-webaudio` needs sticky activation — [MDN Autoplay](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay)
- `navigator.getAutoplayPolicy('audiocontext')` can check policy, but there is no change event, so results go stale — [MDN Autoplay](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay)
- "In iOS Safari, when the user leaves the page (switching tabs, minimizing the browser, or turning off the screen), the state changes to `interrupted` and must be resumed" — [MDN AudioContext.state](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/state)
- A forum post says Web Audio and WebRTC are suspended when the screen locks or Safari backgrounds — [Apple forums 774239](https://developer.apple.com/forums/thread/774239) (digest)
- Web Audio is muted by the ringer switch by default: "By default the type is ambient and so audio will be muted if the phone is muted". Since iOS 17, `navigator.audioSession.type = "playback"` stops suspension — [WebKit bug 237322, comment by Jean-Yves Avenard, Sep 2024](https://bugs.webkit.org/show_bug.cgi?id=237322)
- The old looping-silent-`<audio>` workaround makes lock-screen controls appear for the silent file — [WebKit bug 237322](https://bugs.webkit.org/show_bug.cgi?id=237322)
- `AudioSession.type` values are `auto`, `playback`, `transient`, `transient-solo`, `ambient`, `play-and-record`. `playback` pauses other playback audio. MDN marks it experimental and "Limited availability" — [MDN AudioSession.type](https://developer.mozilla.org/en-US/docs/Web/API/AudioSession/type). As of Nov 2025 only Safari implements it — [blog](https://portfolio-2024-b6r.pages.dev/blog/web-audio-ios-unmute) (digest)

**Background and lock screen in installed PWAs**
- Audio in Home Screen apps stopped in the background for years. The fix shipped in **iOS 15.4**, with lock-screen pause and resume confirmed — [WebKit bug 198277](https://bugs.webkit.org/show_bug.cgi?id=198277)
- After about **30 seconds paused**, the lock-screen Play button does nothing until the PWA returns to the foreground. Single reporter, Aug 2024, no iOS version stated, no Apple reply — [Apple forums 762582](https://developer.apple.com/forums/thread/762582)
- In standalone mode, lock-screen next and previous stop responding after a track ends (2023 report) — [WebKit bug 261858](https://bugs.webkit.org/show_bug.cgi?id=261858) (digest)
- Lock-screen artwork has broken and been fixed more than once — [dbushell](https://dbushell.com/2023/03/20/ios-pwa-media-session-api/) (digest)
- Media Session: 97.07% global. iOS and Safari 15+, Chrome 73+, Edge 79+, Firefox 82+, Samsung 7.2+. Firefox for Android is partial — [caniuse](https://caniuse.com/mdn-api_mediasession). MDN calls it limited availability, and unsupported actions can throw — [MDN Media Session](https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API)
- Safari 27.0 fixed `setActionHandler` throwing and fixed artwork `sizes` parsing. It also fixed `HTMLMediaElement.volume` having no effect when connected to an AudioContext — [Safari 27.0](https://webkit.org/blog/18325/webkit-features-for-safari-27-0/). Safari 27.2 fixed `decodeAudioData()` failing on valid AAC/M4A — [Safari 27.2](https://webkit.org/blog/18515/webkit-features-for-safari-27-2/)
- Wake Lock: iOS 16.4+, Chrome 84+, Firefox 126+, 96% global — [caniuse](https://caniuse.com/wake-lock). It did not work in Home Screen apps until **iOS 18.4** — [WebKit bug 254545](https://bugs.webkit.org/show_bug.cgi?id=254545). The Aug 2024 forum claim that it is unsupported is out of date.

**Noise and tone synthesis**
- White: `Math.random()*2-1`, in a looped buffer of 2 × sampleRate. Repetition is audible when the loop is under about 2 s — [Noisehack](https://noisehack.com/generate-noise-web-audio-api/)
- Pink (Paul Kellet's refined method, seven state variables, ×0.11 compensation) and brown (`(last + 0.02·w) / 1.02`, ×3.5 compensation) — [Noisehack](https://noisehack.com/generate-noise-web-audio-api/)
- With those published gains, white measures −4.8 dBFS RMS, pink −14.3 and brown −13.9. So white is about 9.5 dB louder at the same gain — `[Local]` 20 s render in Node
- `exponentialRampToValueAtTime` throws on a target of 0. Use a small positive value. The ramp starts from the previous scheduled event, so anchor with `setValueAtTime` — [MDN](https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/exponentialRampToValueAtTime)
- A cantilever's natural frequencies follow ωₙ ∝ βₙ², with βL ≈ 1.875, 4.694, 7.855 — [Wikipedia: beam theory](https://en.wikipedia.org/wiki/Euler%E2%80%93Bernoulli_beam_theory). That gives partial ratios of **1 : 6.267 : 17.55**, which suits a music-box comb tooth, since a tooth is a clamped steel bar — `[Local]` root-solving cos(x)cosh(x) = −1

**Infant sound-machine evidence**
- Hugh et al., *Pediatrics* 2014: 14 machines at maximum volume, measured at 30, 100 and 200 cm, with correction for a 6-month-old's ear canal. At 30 cm all exceeded 50 dBA, the hospital-nursery limit. Three exceeded 85 dBA, which over 8 hours would exceed adult occupational limits. The authors conclude these "may be damaging to infant hearing and auditory development" — [McMaster abstract](https://experts.mcmaster.ca/scholarly-works/1649352), [PubMed](https://www.pubmed.gov/24590753/)
- All but one still exceeded 50 dB at 200 cm. Advice: place more than 200 cm from the crib, keep volume low — [CHOP](https://www.chop.edu/news/white-noise-not-right-noise)
- Mean maximum output was 79 dBA at 30 cm, 71 at 100 cm, 63 at 200 cm — [NEJM Journal Watch](https://clinician.nejm.org/sleep-machines-damage-infant-hearing-nejm-jw.NA34176) (digest; I could not tell which listed source carried these figures, so re-check them)
- Source conflict: ENT Today gives 300 cm in its methods and 200 cm in its results. The abstract says 200 cm — [ENT Today](https://enttoday.org/?p=9218)
- The study measured maximum output, not hearing outcomes. Harvey Karp (founder of a sleep-product company) notes it did not directly address real-world risk — [search digest of coverage](https://www.ksl.com/article/28933209) (digest)
- AAP (Balk et al., *Pediatrics* 2023): as far from the infant as possible, at the lowest setting, for as short a time as possible, with **no numeric dB limit** — [WebMD, Jul 2024](https://www.webmd.com/parenting/baby/news/20240716/cm/white-noise-for-babies-sleep-aid-or-potential-hazard), [Care.com](https://www.care.com/c/white-noise-for-babies/) (digest)
- Erbele et al., *Sleep Medicine* 2024, scoping review of 20 studies: commercial machines can reach 91 dB. The authors suggest capping white noise for children at 60 dB. Animal studies suggest delayed auditory and language development, cause unclear. Experts advise measuring with a sound-level-meter app at the child's head — [WebMD](https://www.webmd.com/parenting/baby/news/20240716/cm/white-noise-for-babies-sleep-aid-or-potential-hazard)
- One audiologist personally caps at 45 dB. That is her own practice, not a guideline — [WebMD](https://www.webmd.com/parenting/baby/news/20240716/cm/white-noise-for-babies-sleep-aid-or-potential-hazard)
- Many search results come from sleep-product sellers (SNOO, Yogasleep, Happiest Baby), which have a commercial interest. Some cite "AAP says 50 dB and 7 feet", which the sources above do not support.

### Inferences

**Engine choice**

| Need | Engine | Why |
|---|---|---|
| Melody guide during a game, UI sounds | Web Audio, default session type | Low latency. Respects the mute switch. Fine to stop on lock |
| Bedtime noise or lullaby that must survive lock | `<audio loop>` playing a pre-rendered WAV, with Media Session and `audioSession.type = 'playback'` | Background audio has worked since iOS 15.4. Web Audio is interrupted |
| Must be reliable all night, or needs a timer while locked | Native shell, or Bedside mode with Wake Lock | Background JS timing in iOS PWAs is undocumented |

**Spec: noise renderer.** Tested in Node: equal −20 dBFS RMS for all three colours, peaks at or below −5.6 dBFS, no clipping, 2.65 MB per colour, about 55-70 ms on desktop. Expect around 0.6 s on a low-end phone (my estimate), so run it in a worker or show a spinner.
```ts
export type Noise = 'white' | 'pink' | 'brown';
/** Loopable mono 16-bit WAV. Kellet's pink filter is tuned for 44.1 kHz, so keep that rate. */
export function renderNoiseWav(kind: Noise, seconds = 30, rmsDb = -20, rate = 44100, fadeSec = 1): Blob {
  const n = Math.floor(seconds * rate), x = Math.floor(fadeSec * rate);
  const s = new Float32Array(n + x);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0, last = 0;
  for (let i = 0; i < s.length; i++) {
    const w = Math.random() * 2 - 1;
    if (kind === 'white') s[i] = w;
    else if (kind === 'brown') { last = (last + 0.02 * w) / 1.02; s[i] = last; }
    else {
      b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759;
      b2 = 0.969 * b2 + w * 0.153852;    b3 = 0.8665 * b3 + w * 0.3104856;
      b4 = 0.55 * b4 + w * 0.5329522;    b5 = -0.7616 * b5 - w * 0.016898;
      s[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362;
      b6 = w * 0.115926;
    }
  }
  // Brown noise wanders: remove DC so the loop point and headroom stay clean.
  const mean = s.reduce((a, v) => a + v, 0) / s.length;
  for (let i = 0; i < s.length; i++) s[i] -= mean;
  // Equal-power crossfade of the tail into the head makes the loop seamless.
  for (let i = 0; i < x; i++) {
    const t = (i / x) * (Math.PI / 2);
    s[i] = s[i] * Math.sin(t) + s[n + i] * Math.cos(t);
  }
  // Normalise loudness so all three colours sit at the same RMS, then clamp.
  let e = 0;
  for (let i = 0; i < n; i++) e += s[i] * s[i];
  const g = Math.pow(10, rmsDb / 20) / Math.sqrt(e / n);
  const buf = new ArrayBuffer(44 + n * 2), v = new DataView(buf);
  const str = (o: number, t: string) => { for (let i = 0; i < t.length; i++) v.setUint8(o + i, t.charCodeAt(i)); };
  str(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); str(8, 'WAVEfmt '); v.setUint32(16, 16, true);
  v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, rate, true);
  v.setUint32(28, rate * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);
  str(36, 'data'); v.setUint32(40, n * 2, true);
  for (let i = 0; i < n; i++) v.setInt16(44 + i * 2, Math.max(-1, Math.min(1, s[i] * g)) * 32767, true);
  return new Blob([buf], { type: 'audio/wav' });
}
```

**Spec: start bedtime audio** (must run inside the tap handler)
```ts
export function playBedtime(el: HTMLAudioElement, wav: Blob, title: string) {
  const session = (navigator as Navigator & { audioSession?: { type: string } }).audioSession;
  if (session) session.type = 'playback'; // Keeps playing when locked or muted.
  el.src = URL.createObjectURL(wav);
  el.loop = true;
  void el.play();
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title,
      artist: 'PlayNest',
      artwork: [{ src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' }],
    });
    for (const [action, fn] of [['play', () => el.play()], ['pause', () => el.pause()], ['stop', () => el.pause()]] as const) {
      try { navigator.mediaSession.setActionHandler(action, fn); } catch { /* unsupported action */ }
    }
  }
}
```
Set the session type back to `auto` when bedtime audio stops, so UI sounds respect the mute switch again.

**Spec: music-box voice.** These numbers are my starting design, to tune by ear. Only the 1 : 6.267 : 17.55 ratio comes from physics.
```ts
const PARTIALS = [
  { ratio: 1, gain: 1, decay: 1.8 },
  { ratio: 6.267, gain: 0.12, decay: 0.45 },
  { ratio: 17.55, gain: 0.03, decay: 0.12 },
];
export function pluck(ctx: BaseAudioContext, out: AudioNode, freq: number, t: number, vel = 0.2) {
  for (const p of PARTIALS) {
    const f = freq * p.ratio;
    if (f > 12000) continue; // Very high partials only sound harsh on phone speakers.
    const osc = ctx.createOscillator(), amp = ctx.createGain();
    osc.frequency.value = f;
    osc.detune.value = (Math.random() - 0.5) * 4; // A little life, about 2 cents either way.
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.exponentialRampToValueAtTime(vel * p.gain, t + 0.004); // Attack.
    amp.gain.exponentialRampToValueAtTime(0.0001, t + p.decay); // No sustain.
    osc.connect(amp).connect(out);
    osc.start(t);
    osc.stop(t + p.decay + 0.02);
  }
}
```
- Master chain: `pluck` → lowpass at about 4.5 kHz (softer at night) → master gain about 0.5 → destination.
- Play at 60-72 BPM, in the C4-C6 range. Use public-domain tunes only (Twinkle, Brahms).
- For lock-screen use, render with `OfflineAudioContext` and wrap the result as a WAV, then use the same `<audio>` path. Schedule notes ahead of time on the audio clock rather than with a JS timer for each note.

**Spec: sleep timer**
- Default 45 minutes, with options 15, 30, 45 and 60. No "all night" default. AAP says as short a time as possible.
- Store `endAt` as a timestamp and re-check it on `visibilitychange`. Never count ticks.
- In the foreground: fade out over 60 s using a gain ramp, then stop and release Wake Lock.
- While locked on iOS, assume JS timers may not fire. The most reliable design is a file that simply ends: a fixed-length file with the fade built in. A 45-minute WAV is too large (about 238 MB), so that needs prebuilt compressed assets or a native shell. For v1, offer Bedside mode (black screen plus Wake Lock) as the reliable path, and label lock-screen playback as "may stop if paused".

**Spec: safety defaults and copy**
- Start at the lowest of three levels. Render levels into the file (for example −30, −24 and −20 dBFS RMS) rather than relying on `el.volume`, which may be ignored on iOS.
- First-run card, one time: "Put the phone across the room, at least 2 m from the cot. Never in or on the cot. Softer and shorter is better."
- Info sheet: "Your phone can't measure how loud it is. To check, use a sound-meter app at your baby's head." Mention 50 dB as the hospital-nursery limit researchers used, and say that the AAP sets no number.
- Never claim "safe", "doctor approved" or a dB value. Never autoplay. No sleep promises.
- Do not put the 45 dB or 60 dB figures forward as guidelines.

**Delight sounds** are covered under the motion section.

### Gaps
- Could not confirm current (iOS 26/27) behaviour of lock-screen play after a 30 s pause, of background JS timers, or of `ended` events in Home Screen mode. These decide the timer design, so device test them.
- `<audio loop>` gap on iOS with WAV is unverified. WAV has no encoder padding to my knowledge, but the seam must be listened to.
- Whether `HTMLMediaElement.volume` is honoured on iOS: from memory it is not, and I found no source. Hence the rendered levels.
- Brown noise on phone speakers: small speakers may barely reproduce it. No source retrieved. Test by ear.
- Scheduling on the audio clock and `OfflineAudioContext` are from memory of the Web Audio API. I did not re-fetch MDN for them.
- Primary full texts of Hugh 2014, Balk 2023 and Erbele 2024 were not accessible (PubMed cookie wall, AAP 403).

---

## Voice: SpeechSynthesis and speech recognition

### Takeaway
SpeechSynthesis is widely available, and it is the right tool for a "read this to me" button in the browser, if you speak short chunks, start from a tap and prefer `localService` voices. It is not a reliable engine for hands-free flows. Speech recognition is not usable offline across platforms in 2026, so do not build on it in the PWA.

### Cited Findings

**Support**
- SpeechSynthesis: 95.91% global. Chrome 33+, Edge 79+, Safari 7+, iOS 7+, Firefox 49+, Samsung 5+, Chrome for Android, Firefox for Android — [caniuse](https://caniuse.com/speech-synthesis). MDN: Baseline widely available since Sep 2018 — [MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
- Conflict: caniuse lists Firefox for Android 159 as supported. A May 2026 guide says it lacks the synthesis half — [testmuai](https://www.testmuai.com/learning-hub/speech-synthesis-api-browser-support/)
- caniuse lists "Android Browser 156" (the WebView-style entry) as **not supported**. A 2022 vendor note reports speech working on iOS but not in its Android embed — [caniuse](https://caniuse.com/speech-synthesis), [PTC](https://www.ptc.com/en/support/article/CS327306) (digest). This matters for the Capacitor Android shell.

**Offline and voices**
- Each voice has a `localService` flag, and network voices send the utterance text to vendor servers — [testmuai, May 2026](https://www.testmuai.com/learning-hub/speech-synthesis-api-browser-support/)
- Android voices come from the installed Google or Samsung TTS engine. Chrome on iOS shares Safari's voice list — [testmuai](https://www.testmuai.com/learning-hub/speech-synthesis-api-browser-support/)
- MDN's page does not state whether synthesis works offline. It says only that `getVoices()` returns voices "available on the current device" — [MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)

**Known bugs**

| Bug | Where | Status of evidence |
|---|---|---|
| `speak()` only fires inside a user gesture. Calls from timers or page load are dropped silently | iOS Safari | [testmuai, 2026](https://www.testmuai.com/learning-hub/speech-synthesis-api-browser-support/) |
| Utterances cancelled after about 15 s (about 200-250 characters) | Desktop Chrome | [testmuai, 2026](https://www.testmuai.com/learning-hub/speech-synthesis-api-browser-support/), single source, no primary. Long-text fixes also exist in [a chunking gist](https://Gist.github.com/woollsta/2d146f13878a301b36d7) |
| `cancel()` removed utterances queued by later `speak()` calls | Safari before 27.0, fixed in 27.0 | [Safari 27.0](https://webkit.org/blog/18325/webkit-features-for-safari-27-0/) |
| `end` does not fire after `cancel()` | Safari | [Coder's Block, 2020](https://codersblock.com/blog/javascript-text-to-speech-and-its-many-quirks/), dated |
| Inaudible when the mute switch is on | iOS | [Coder's Block, 2020](https://codersblock.com/blog/javascript-text-to-speech-and-its-many-quirks/), dated |
| `pause()` and `resume()` do not work | Chrome and Firefox on Android | [Coder's Block, 2020](https://codersblock.com/blog/javascript-text-to-speech-and-its-many-quirks/), dated |
| `boundary` does not fire | Chrome and Firefox on Android | [Coder's Block, 2020](https://codersblock.com/blog/javascript-text-to-speech-and-its-many-quirks/), dated |
| Voice can't be changed from the device default | Chrome and Firefox on Android | [Coder's Block, 2020](https://codersblock.com/blog/javascript-text-to-speech-and-its-many-quirks/), dated |
| `name` is not always unique, so use `voiceURI`. `addEventListener` was undefined on `speechSynthesis`, so use `onvoiceschanged` | Safari | [Coder's Block, 2020](https://codersblock.com/blog/javascript-text-to-speech-and-its-many-quirks/), dated |
| Voices load asynchronously. EasySpeech retries with `maxTimeout: 5000`, `interval: 250` | All | [MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis), [EasySpeech](https://github.com/jankapunkt/easy-speech) |

**Speech recognition**
- 87.96% global, all partial. Chrome 25+, Safari 14.1+, iOS 14.5+, Samsung. Disabled by default in Firefox. Not in Firefox for Android or the Android Browser entry. Not in Edge — [caniuse](https://caniuse.com/speech-recognition)
- By default recognition runs on a server, so it does not work offline — [MDN guide](https://developer.mozilla.org/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) (digest)
- `processLocally = true` forces on-device recognition, and it is marked experimental. `SpeechRecognition.available()` and `install()` manage language packs — [MDN processLocally](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/processLocally), [MDN install](https://developer.mozilla.org/docs/Web/API/SpeechRecognition/install_static)
- On-device is supported in Chrome 139 and disabled on ChromeOS — [Chromium preview thread](https://groups.google.com/a/chromium.org/g/chrome-ai-dev-preview-discuss/c/Rlyc2uAsFCY) (digest). Edge's local model is Canary and Dev only — [Microsoft](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/speech-recognition-api) (digest)

### Inferences

**Spec: chunking.** Tested in Node. Keeps every chunk well under the claimed limit.
```ts
/** Split on sentence ends, then on commas, so no utterance runs near the ~15 s limit. */
export function chunkForSpeech(text: string, max = 180): string[] {
  const out: string[] = [];
  const push = (s: string) => { const t = s.trim(); if (t) out.push(t); };
  for (const sent of text.match(/[^.!?。؟]+[.!?。؟]*\s*/g) ?? [text]) {
    if (sent.length <= max) { push(sent); continue; }
    let cur = '';
    for (const part of sent.split(/(?<=[,;:،])\s*/)) {
      if ((cur + ' ' + part).length > max) { push(cur); cur = part; } else cur = cur ? cur + ' ' + part : part;
    }
    push(cur);
  }
  return out;
}
```

**Spec: voice selection and speaking**
```ts
export function pickVoice(voices: SpeechSynthesisVoice[], lang: string): SpeechSynthesisVoice | undefined {
  const norm = (s: string) => s.replace('_', '-').toLowerCase(); // Some Android engines report en_US.
  const want = norm(lang), base = want.slice(0, 2);
  const score = (v: SpeechSynthesisVoice) =>
    (v.localService ? 4 : 0) +                       // Offline and private first.
    (norm(v.lang) === want ? 2 : 0) +
    (v.default ? 1 : 0);
  // Language must match first: a local voice in the wrong language is worse than none.
  return voices.filter((v) => norm(v.lang).slice(0, 2) === base).sort((a, b) => score(b) - score(a))[0];
}

export function speakSteps(steps: string[], lang: string, onStep: (i: number) => void) {
  const synth = window.speechSynthesis;
  synth.cancel();
  const voice = pickVoice(synth.getVoices(), lang);
  // Queue everything now, inside the tap, because iOS drops speak() calls made later from timers.
  steps.forEach((text, i) => {
    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.lang = voice?.lang ?? lang;
    u.rate = 0.92;
    u.onstart = () => onStep(i);
    synth.speak(u);
  });
}
```
- Do not rely on `pause()`. Implement Stop as `cancel()` and Resume as re-queueing from the current step.
- Track "is speaking" in app state. Do not wait for `end` after `cancel()`.
- Cancel on `pagehide` and when leaving the screen.
- If the best match isn't `localService`, don't speak silently through it. Tell the parent once: "This voice uses the internet, so your phone's voice service would receive the text." Then let them choose, because a child's name would reach a vendor server. If no voice matches the language, hide the button.

**Spec: "Read this to me" UX**
- One button per activity, on the same line as the title, about 48 px. Its label stays visible ("Read to me").
- **Step mode (default):** read one step, then stop. A large `Next` button sits in thumb reach, with `Again` beside it. Hands are often busy, so the buttons are 72 px or larger and the screen stays awake through Wake Lock.
- **Read-all mode:** for stories and guides, with the current sentence highlighted through `onstart` (not `boundary`, which is unreliable on Android).
- On iOS show one "Can't hear it? Check the ring switch" hint, because the failure is otherwise invisible.
- Do not read over an active bedtime sound, and duck or pause noise while speaking.
- Keep voice as an extra. Words and pictures must remain complete without it.

**Decision on recognition:** no voice commands in the PWA. Consider native on-device recognition in the Capacitor shell later. Note that a server-based default would break the no-data-leaves-the-phone promise, so `processLocally` would be mandatory if it is ever used on the web.

### Gaps
- No primary source found for the 15 s cutoff, or whether it affects Android or only remote voices. Test with a 40 s string.
- The 2020 Android bugs may be out of date. Re-test on Chrome 156.
- Which iOS and Android voices are installed by default, their quality, and whether enhanced iOS voices are exposed to the web: search ended before I could verify this.
- Safari's `processLocally` status and iOS offline recognition: nothing found.
- Android WebView TTS support for the Capacitor shell needs a direct test. From memory, a native TTS plugin will be needed.

---

## Printing, PDF and file sharing on phones

### Takeaway
Print CSS is good enough now that `@page size` works on iOS 18.2+, so build one print view rather than a PDF generator. PDF libraries cost 134-208 KB gzipped, which is too heavy for the core bundle. iOS Home Screen `window.print()` is the one unverified risk, and it decides whether a fallback is needed.

### Cited Findings
- `@page size`: 95.43% global. **iOS and Safari 18.2+**, Chrome 15+, Firefox 95+, Samsung 4+, Chrome for Android, Firefox for Android — [caniuse](https://caniuse.com/mdn-css_at-rules_page_size)
- `@page` can contain page descriptors and margin at-rules. Do not use `vh` or `vw` inside it. Many page-box properties "have not been supported by any user agent yet" — [MDN @page](https://developer.mozilla.org/en-US/docs/Web/CSS/@page)
- Print patterns: `@media print`, `beforeprint` and `afterprint` events, and a hidden same-origin iframe for printing a separate page — [MDN Printing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Printing)
- `print-color-adjust: exact` is Baseline 2025 (newly available since May 2025). User print options take priority, so it is not guaranteed — [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/print-color-adjust)
- Safari 27.0 fixed animations being ignored during print (which caused missing content) and invisible text when printing light text on dark with backgrounds off — [Safari 27.0](https://webkit.org/blog/18325/webkit-features-for-safari-27-0/). So older iOS can print missing content from animated pages.
- `window.matchMedia('print')` listeners fired for both `window.print()` and the Share Sheet's Print action in WebKit — [Mozilla bug 1247848](https://bugzilla.mozilla.org/show_bug.cgi?id=1247848) (digest, old)
- An iOS-9-era report describes the print sheet appearing in a full-screen Home Screen web app, but printing failing or crashing — [Apple forums 4009](https://developer.apple.com/forums/thread/4009) (digest, very old). iOS Chrome showed a print dialog that never started printing, while Safari on iPad worked (undated) — [PDFTron thread](https://groups.google.com/g/pdfnet-webviewer/c/NxJVh1it4E4) (digest)
- `.pdf` is on the usually-shareable list — [MDN Navigator.share](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
- pdf-lib@1.17.1 is 524 KB min, 208 KB gzip. jspdf@4.2.1 is 418 KB min, 134 KB gzip, with optional dependencies excluded — `[Local]` esbuild `--bundle --minify`
- PlayNest has no `@media print` rules at all — `[Local]` grep of `src/styles/app.css`

### Inferences

**Spec: one print route** at `#/print/summary`, `#/print/card/:id` and `#/print/cards?ids=...`, rendering plain documents (no tab dock, no world header).
```css
@media print {
  @page { margin: 12mm; }  /* Leave size to the printer, so A4 and US Letter both work. */

  :root { /* Force light tokens, even if the app is in dark or night mode. */
    --paper: #fff; --ink: #1b1740; --ink-2: #3d3966; color-scheme: light;
  }
  html, body { background: #fff !important; }
  * { animation: none !important; transition: none !important; } /* Needed before Safari 27. */

  .tab-dock, .bottom-bar, .sheet, .toast, .no-print, button { display: none !important; }
  .page, .print-doc { width: auto; padding: 0; box-shadow: none; }
  section, figure, table, .print-card { break-inside: avoid; }
  h2, h3 { break-after: avoid; }

  .print-art { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
  .tile, .section { content-visibility: visible !important; contain-intrinsic-size: none; }
}
```
- Class names are illustrative. Map them to the real components.

**One-page summary**
- Common printable box for A4 (210×297 mm) and Letter (216×279 mm) with 12 mm margins is about **186×255 mm**. Design to that box and both paper sizes fit on one page. That figure is my calculation, not a sourced one.
- Contents: child's name and age, date, 3 to 5 facts, questions for the visit, the sources line. Put "Prepared by the parent with PlayNest. Not a medical record" in the footer.
- Use `pt` or `mm` for type here, not `rem`, so iOS Larger Text does not spill it onto a second page.

**Printable activity cards**
- 2×3 grid per sheet (about 90×80 mm), with a picture, title, numbered steps and "why it helps".
- Before calling print: switch `<img loading="lazy">` to eager, then `await Promise.all(imgs.map((i) => i.decode()))`. Otherwise art can be missing.
- `document.title` becomes the suggested filename on many browsers, so set it to `PlayNest-Maya-summary-2026-11-04` before printing and restore it in `afterprint`.

**Flow and fallback**
```ts
export async function printRoute(prepare: () => Promise<void>) {
  await prepare();
  window.print();
}
```
- Button label: "Print or save PDF". Add a one-line hint for the path, by platform, once device-verified.
- If `window.print()` turns out to fail on iOS Home Screen, the fallback order is:
  1. Offer a share of the page's public URL, opened in Safari. The route must then work with data passed in the fragment, or with a one-off export.
  2. A lazy-loaded jsPDF chunk (134 KB gzip, not precached) that produces a real `.pdf` and goes through the same `saveBackup`-style share flow.
- Do not ship a PDF library in the core bundle unless that test fails.

### Gaps
- **Most important unverified item:** `window.print()` in a Home Screen web app on iOS 18, 26 and 27. No current source. Test on devices before committing.
- Exact Save-as-PDF steps on iOS and Android Chrome are not sourced here. Verify on device before writing the hint.
- Margin boxes (`@bottom-center`) on iOS Safari: `@page size` is confirmed, margin boxes are not. Use a normal footer element.

---

## Transitions, motion, haptics and sound

### Takeaway
Everything needed for native-feeling motion is now Baseline-level in the browsers that matter. Same-document view transitions work on iOS 18+ and Firefox 144+, spring easing via `linear()` on iOS 17.2+, and scroll-driven animation on iOS 26+ and Firefox 159+. The decisions in RESEARCH-2 §3.5 can be relaxed. iOS web haptics should now be assumed to need a real tap, and programmatic triggering should be treated as gone.

### Cited Findings

| Feature | Global | iOS Safari | Chrome / Edge | Firefox | Samsung | Source |
|---|---|---|---|---|---|---|
| View transitions, same-document | 92.9% | 18.0+ | 111+ | 144+ | 23+ | [caniuse](https://caniuse.com/view-transitions) |
| View transitions, cross-document | 88.81% | 18.2+ | 126+ | partial 144+ | none | [caniuse](https://caniuse.com/cross-document-view-transitions) |
| Scroll-driven animations | 88.25% | 26.0+ | 115+ | **159+** | 23+ | [caniuse](https://caniuse.com/mdn-css_properties_animation-timeline_scroll) |
| `linear()` easing | 93.99% | 17.2+ | 113+ | 112+ | 23+ | [caniuse](https://caniuse.com/mdn-css_types_easing-function_linear-function) |

- Same-document view transitions became Baseline Newly Available in Oct 2025 with Firefox 144. `view-transition-class`, `match-element` and `:active-view-transition` are also available — [web.dev](https://web.dev/blog/same-document-view-transitions-are-now-baseline-newly-available) (digest)
- Safari 26.4 runs scroll-driven animations on the compositor thread, with no code change — [Safari 26.4](https://webkit.org/blog/17862/webkit-features-for-safari-26-4/)
- Safari 27.0 fixed a transition group snapping to its final state when a CSS rule is inserted mid-transition, and stale transforms in snapshots — [Safari 27.0](https://webkit.org/blog/18325/webkit-features-for-safari-27-0/). So older iOS has these bugs.
- Interop 2026 includes scroll-driven animations and cross-document transitions, with same-document in reliability work — [summary](https://news.lavx.hu/article/interop-2026-a-cross-browser-commitment-to-web-compatibility) (digest, secondary)
- `viewTransition` is available on React Router 6.30's API — `[Local]` `node_modules/react-router-dom/dist/index.d.ts`, version 6.30.6
- View transition pseudo-elements and `view-transition-scope` — [MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)

**Springs with `linear()`**
- 11 points look robotic. About 40-50 evenly spaced points look convincing, and tool-generated strings can use fewer — [Comeau, updated May 2026](https://www.joshwcomeau.com/animation/linear-timing-function/)
- Over 100 values rendered as smoothly as `linear(0, 1)` even on low-end hardware. Three large springs added about 1.3 KB gzipped — [Comeau](https://www.joshwcomeau.com/animation/linear-timing-function/)
- Main gotcha: interrupted CSS transitions reverse with a shortened duration, and do not carry velocity as a JS spring does — [Comeau](https://www.joshwcomeau.com/animation/linear-timing-function/)
- Use a `cubic-bezier` default in a variable and override it in `@supports (animation-timing-function: linear(0, 1))`. Apply springs inside `@media (prefers-reduced-motion: no-preference)` — [Comeau](https://www.joshwcomeau.com/animation/linear-timing-function/)
- `linear()` syntax and Baseline since Dec 2023 — [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/linear)

**Reduced motion**
- The preference asks for an interface that "removes, reduces, or replaces motion-based animations". Scaling or panning large objects are the triggers. MDN's example **replaces** a scaling pulse with a dissolve — [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- DESIGN.md currently says "Reduced motion turns all of it off" — `[Local]` `docs/DESIGN.md`

**Haptics**
- Vibration API: 77.22% global. Chrome 30+, Edge 79+, Samsung 4+, Chrome for Android. **None on Safari or iOS.** Firefox removed it after 128. None on Firefox for Android — [caniuse](https://caniuse.com/vibration)
- PlayNest's `haptic()` only calls `navigator.vibrate` — `[Local]` `src/platform/index.ts:30-32`. So iOS PWA users get nothing today.
- The switch trick: a hidden `<input type="checkbox" switch>` (Safari 17.4+) tied to a `<label>`, clicked to trigger the native haptic — [ios-haptics](https://github.com/tijnjh/ios-haptics)
- Status conflict: third-party docs say programmatic triggering works on iOS 17.4 through 26.4, and Apple patched it in **26.5** ([npm ios-haptics](https://npmjs.com/package/ios-haptics), [tester](https://rapidtoolset.com/en/tool/ios-haptics-tester), digest). No Apple confirmation found.
- A real user tap on a switch still produces a haptic ([tester](https://rapidtoolset.com/en/tool/ios-haptics-tester), digest). The current ios-haptics README no longer mentions versions and describes `hapticTrigger`, a transparent label laid over your element so a real tap goes through to the switch ([ios-haptics README](https://github.com/tijnjh/ios-haptics)). That change fits the claimed patch.
- It is non-standard and Apple could remove it — [azukiazusa](https://azukiazusa.dev/en/blog/ios-safari-web-haptics) (digest)

### Inferences

**Spec: easing tokens.** Generated from the damped-spring equation, ready to paste. Settle times are the suggested durations.
```css
:root {
  --ease-spring-gentle: cubic-bezier(.2, .9, .3, 1.02);
  --ease-spring-playful: cubic-bezier(.34, 1.4, .64, 1);
  --ease-spring-toy: cubic-bezier(.34, 1.56, .64, 1);
  --dur-spring-gentle: 516ms;
  --dur-spring-playful: 725ms;
  --dur-spring-toy: 858ms;
}
@supports (animation-timing-function: linear(0, 1)) {
  :root {
    /* zeta .75, 3% overshoot: sheets, push and pop, anything navigational */
    --ease-spring-gentle: linear(0, 0.044, 0.149, 0.283, 0.424, 0.558, 0.677, 0.776, 0.856, 0.917, 0.961, 0.992, 1.011, 1.022, 1.027, 1.028, 1.027, 1.023, 1.019, 1.015, 1.012, 1.008, 1.006, 1.004, 1);
    /* zeta .53, 14% overshoot: chips, hearts, press-release */
    --ease-spring-playful: linear(0, 0.061, 0.21, 0.4, 0.597, 0.775, 0.921, 1.028, 1.096, 1.132, 1.14, 1.13, 1.108, 1.081, 1.054, 1.029, 1.009, 0.995, 0.986, 0.981, 0.98, 0.982, 0.985, 0.989, 0.993, 0.996, 0.999, 1.001, 1.002, 1.003, 1.003, 1.002, 1);
    /* zeta .40, 25% overshoot: flower growth and Pip only */
    --ease-spring-toy: linear(0, 0.063, 0.222, 0.432, 0.657, 0.864, 1.034, 1.156, 1.227, 1.253, 1.242, 1.205, 1.153, 1.096, 1.042, 0.997, 0.964, 0.944, 0.936, 0.938, 0.946, 0.959, 0.973, 0.987, 0.999, 1.008, 1.014, 1.016, 1.016, 1.014, 1.011, 1.007, 1.004, 1.001, 0.998, 0.997, 0.996, 0.996, 0.996, 0.997, 1);
  }
}
```
- Keep CSS springs for things that play through. Anything users can interrupt with a finger (dragging a sheet) should stay on JS or the Web Animations API, carrying real velocity.
- Night and Bedside modes use no overshoot at all.

**Spec: view transitions.** Treat as an enhancement over the existing CSS keyframes.
```tsx
<Link to={path} viewTransition>...</Link>
```
```css
@media (prefers-reduced-motion: no-preference) {
  ::view-transition-old(root) { animation: 180ms ease both vt-fade-out; }
  ::view-transition-new(root) { animation: 340ms var(--ease-spring-gentle) both vt-slide-in; }
  html[data-nav='pop']::view-transition-new(root) { animation-name: vt-slide-in-back; }
}
.tile--active img { view-transition-name: activity-hero; } /* Only the tapped tile, so the name stays unique. */
```
- React Router's `viewTransition` prop is a plain boolean (`[Local]` `react-router-dom/dist/index.d.ts`), so it can't pass transition types. Set `document.documentElement.dataset.nav = 'pop'` before navigating back, and read that in CSS as above. The `vt-*` keyframes are placeholders, to be defined with `[dir='rtl']` variants.
- Set `view-transition-name` only on the tapped tile. Duplicate names skip the transition.
- Do not animate during input. On Chrome-based low-end phones, measure before keeping the hero morph.
- Use scroll-driven animation for the collapsing large title as a progressive layer. iOS below 26 keeps the IntersectionObserver version.

**Spec: reduced motion means replaced, not removed.** Change DESIGN.md. Keep a 120-180 ms opacity crossfade between screens and for sheets, because an abrupt cut loses orientation. Remove slides, overshoot, parallax, confetti, and flowers growing by scale. Replace these with fades.

**Spec: haptics**
- Use native `<input type="checkbox" switch>` for real on-and-off settings. That gives iOS 17.4+ users a real haptic for free, and it is honest markup.
- For one or two high-value ticks (activity done), try the transparent-label overlay on a real device. Do not build a helper that calls `.click()`.
- Keep `navigator.vibrate` for Android and Samsung. Capacitor Haptics in the native shell.
- All of this needs a Settings off switch (already planned in RESEARCH-2), and it must silently do nothing where unavailable.

**Spec: sound for delight (my own design, no evidence base found)**
- At most four earcons: tap-select, success, flower-grows, undo. Each 300 ms or shorter, soft sine tones from the music-box voice.
- Off by default, opt-in from Settings. Never at night or in Bedside mode. Never over bedtime audio.
- Leave the session type on the default so the mute switch silences them on iOS.
- Sound must never be the only signal. Play one sound per action.

### Gaps
- Apple's motion, audio and haptics HIG pages came back empty, so I have no primary Apple spec here. Material's sound guidance also failed.
- No research retrieved on sound design and delight in parenting apps. Treat the earcon spec as opinion.
- The iOS 26.5 haptic patch is third-party only. Test on iOS 26.5+ and 27.
- Comeau's "smooth on low-end hardware" is an author's test, not a benchmark. Measure on a real low-end Android.

---

## Notifications without a server

### Takeaway
Honestly: a no-server PWA cannot deliver a reliable, timed reminder on iOS, and only a coarse, best-effort one on Android. Notification Triggers has no evidence of shipping, Periodic Sync is Chromium-only and not exact, and Declarative Web Push still needs a push server. The useful no-server options are an in-app "what's next" on open, a calendar file for key dates, and later Capacitor local notifications.

### Cited Findings
- **Notification Triggers:** Chrome's docs describe a `showTrigger` API, usable only from a service-worker registration, with no network needed — [Chrome docs (localised copy)](https://developer.chrome.com/docs/web-platform/notification-triggers?hl=es) (digest; the English page returned 403). The explainer dates from Jan-Feb 2019, and shows no status banner — [explainer repo](https://github.com/beverloo/notification-triggers). caniuse's URL for it returned its homepage, not a feature page — [caniuse](https://caniuse.com/mdn-api_serviceworkerregistration_showtrigger)
- **Periodic Background Sync:** 76.58% global. Chrome and Edge 80+, Samsung 13+, Chrome for Android. **None on Firefox, Safari or iOS** — [caniuse](https://caniuse.com/mdn-api_periodicsyncmanager)
- It is experimental. In Chrome, permission goes only to an installed web app launched as a separate application. The engagement score decides whether and how often it fires. `minInterval` is a lower bound, not a schedule — [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- An early Chrome proposal described at least 12 hours between events and no events at zero engagement — [Intent to Experiment](https://groups.google.com/a/chromium.org/g/blink-dev/c/aHdERJoKYh8/m/o3IysK5PFQAJ) (digest, dated)
- **Declarative Web Push:** shows notifications with no service worker, on iOS and iPadOS 18.4 and macOS 15.5 beta. Sending a push still "works exactly as before", through the push service. The message needs `"web_push": 8030`, plus `notification.title` and `notification.navigate` — [WebKit](https://webkit.org/blog/16535/meet-declarative-web-push/)
- **Web Push on iOS:** 16.4+, Home Screen only, permission only "in response to direct user interaction". Badging: `setAppBadge` works in the foreground or while handling a push — [WebKit](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/). caniuse rates iOS 16.4-27.2 as partial and Safari 18+ as full — [caniuse](https://caniuse.com/push-api)
- The Safari 27.0 and 27.2 posts mention no notification changes in the sections I read — [Safari 27.0](https://webkit.org/blog/18325/webkit-features-for-safari-27-0/), [Safari 27.2](https://webkit.org/blog/18515/webkit-features-for-safari-27-2/)
- **Capacitor LocalNotifications:** Android 13 needs a runtime permission. Exact timing on Android 12+ needs `SCHEDULE_EXACT_ALARM`, which users can turn off (check `checkExactNotificationSetting()`). `USE_EXACT_ALARM` on Android 14 only if alarms are central to the app. In Doze, `allowWhileIdle` fires at most once per 9 minutes per app — [Capacitor](https://capacitorjs.com/docs/apis/local-notifications). iOS allows 64 pending — [RESEARCH-2 §4.1](../../docs/RESEARCH-2.md)
- iCalendar: lines end in CRLF, default charset UTF-8, and `FREQ` must be first in a recurrence rule — [RFC 5545](https://www.rfc-editor.org/rfc/rfc5545)
- `.ics` is not on the Web Share list — [MDN Navigator.share](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)

### Inferences

**What is honestly possible**

| Approach | iOS PWA | Android PWA | Timing | Use for |
|---|---|---|---|---|
| "What's next" card on open | Yes | Yes | Only when opened | Default for everything |
| `showNotification` from a live page | While running | While running | Only while the app is alive | A timer the parent is actively running |
| Periodic Sync, then `showNotification` | No | Chrome and Samsung, installed | Hours, best effort | A gentle daily idea. Never health |
| `setAppBadge` | Foreground only without push | Depends on the browser | When opened | Light cue. Optional |
| `.ics` calendar file | To be tested | To be tested | Exact, handled by the OS calendar | Vaccines, check-ups, 2-month visit |
| Web Push or Declarative Web Push | Needs a server | Needs a server | Near-exact | Breaks the no-server rule. Later, only with sync |
| Capacitor LocalNotifications | Native shell | Native shell | Exact, with limits | The real answer for reminders |

**Spec: `.ics` export** (my design. Requires device testing, including how each platform opens a downloaded `.ics`.)
```ts
const esc = (s: string) => s.replace(/([\\,;])/g, '\\$1').replace(/\n/g, '\\n');
const stamp = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, '');

export function icsEvent(o: { id: string; title: string; start: Date; alarmHoursBefore?: number }): string {
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//PlayNest//Reminders//EN',
    'BEGIN:VEVENT', `UID:${o.id}@playnest.app`, `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(o.start)}`, `SUMMARY:${esc(o.title)}`,
    'BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${esc(o.title)}`,
    `TRIGGER:-PT${o.alarmHoursBefore ?? 24}H`, 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n') + '\r\n';
}
```
Deliver through `<a download>` with type `text/calendar`. Lines longer than 75 octets should be folded. Keep titles short and free of health details, since calendars often sync to other accounts.

**Product copy must be honest.** On web, say "PlayNest can't remind you when it's closed. Add this to your calendar instead." Do not ask for notification permission on the web at all until a feature truly uses it.

**For the native shell:** schedule the next N only, since iOS caps pending at 64. Do not request exact-alarm permission unless a user turns on a timed reminder. Medication timers should not be sold as reliable until tested through Doze.

### Gaps
- I could not confirm Notification Triggers' current status. From memory, Chrome stopped development after an origin trial, but the English Chrome page returned 403 and chromestatus rendered empty. Treat it as unavailable, and use `'showTrigger' in Notification.prototype` only as a harmless check.
- Whether Periodic Sync can show a notification in practice: MDN does not say. This is an inference from the service-worker context plus the separate Notifications permission.
- `.ics` handling from a Home Screen app on iOS and Android has not been verified.
- Current Android Doze and battery-manager behaviour across OEMs was not checked.

---

## Kid-facing modes

### Takeaway
A web app cannot lock a phone. The real safety boundary is Guided Access or Screen Pinning, so PlayNest should coach parents to use them, and treat its own gate as protection against accidental exits only. Design for about 2 cm targets (about 120-128 CSS px), tap-only, no reading, one choice at a time. The research on 2-year-olds is thin, so user test.

### Cited Findings

**Apple rules**
- Guideline 1.3: Kids Category apps "must not include links out of the app, purchasing opportunities, or other distractions to kids unless reserved for a designated area behind a parental gate". They should not include third-party analytics or advertising — [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- Once customers expect Kids Category behaviour, the app must keep meeting those rules, "even if you decide to deselect the category" — [Guideline 1.3](https://developer.apple.com/app-store/review/guidelines/)
- 5.1.4: "Apps not in the Kids Category cannot include any terms in app name, subtitle, icon, screenshots or description that imply the main audience for the app is children" (also 2.3.8). The gate is "generally not the same as securing parental consent" — [Guideline 5.1.4](https://developer.apple.com/app-store/review/guidelines/)
- Gates are "adult-level tasks", guarding purchases and link-outs. Examples include maths and answering a question. "If your app is intended for pre-literate children, consider using a voiceover prompt". Age bands are 5 and under, 6-8, 9-11 — [Apple Kids](https://developer.apple.com/app-store/kids-apps/)
- "There are several ways to do this" — [WWDC 2014 deck](https://devstreaming-cdn.apple.com/videos/wwdc/2014/717xxux5eg6f9v4/717/717_kids_and_apps.pdf?dl=1) (digest). A developer calls gates best effort, "near impossible to be full proof" — [Solar2D forum](https://forums.solar2d.com/t/use-parental-gate-for-an-entire-section/330365) (digest)
- PlayNest's web manifest lists `"kids"` in `categories` — `[Local]` `public/manifest.webmanifest`. RESEARCH-2 §4.5 already decides against the Kids category.

**Device-level lock**
- **Guided Access:** Settings > Accessibility > Guided Access, set a passcode (Face ID or Touch ID optional). Triple-click the side button to start. Circle areas to disable, or turn off Touch. Can disable side, volume and other buttons, motion and keyboard. Time limits end in a full-screen "Time Expired". **Crash Detection and emergency services aren't available during a session** — [Apple Support](https://support.apple.com/en-us/111795)
- **Screen Pinning:** Settings > Security (or Security and location) > Advanced > App pinning. Swipe up and hold, tap the app's icon, tap Pin. PIN, pattern or password can be required to unpin. Unpin gesture varies by navigation mode — [Google](https://support.google.com/android/answer/9455138)
- Fullscreen API on iOS Safari: **partial across 12-27.2**, no fully supported version listed. Chrome for Android is supported — [caniuse](https://caniuse.com/fullscreen)
- Home Screen web apps use `display: standalone` or `fullscreen` — [WebKit](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/). PlayNest uses `standalone` — `[Local]` `public/manifest.webmanifest`

**Child touch ability**
- **NN/g (2018, qualitative, US and China, ages 3-12):** targets of at least **2 cm × 2 cm** for young children, against 1 cm × 1 cm for adults. Ages 3-5: tapping, swiping and simple dragging work. Avoid precise dragging, two-handed actions and quick reactions. Ages 6-8: still offer alternatives to dragging. A 5 mm close button defeated 7-year-olds. Adult-level physical interaction arrives by about 11 — [NN/g](https://www.nngroup.com/articles/children-ux-physical-development/)
- **Vatavu, Cramariuc & Schipor, IJHCS 2015:** 89 children aged 3-6 and 30 adults, 4,069 trials, tap and drag tasks on phones and tablets. Accuracy improves significantly from 3 to 6. Completion time and accuracy correlate with finger dexterity, graphomotor and visuospatial abilities — [dataset page](https://raduvatavu.usv.ro/projects/ChildrenTouchInput)
- A tablet user's age group can be inferred with 99% accuracy from a few touches, which shows how different child touches are — [dataset page](https://raduvatavu.usv.ro/projects/ChildrenTouchInput)
- Pre-kindergarten: "little work has been done in the area to assess their actual abilities" — [Nácher & Jaén 2015](https://riunet.upv.es/handle/10251/77963)
- A kindergarten study found 100 px objects most suitable, with no physical size given — [i-scholar](https://www.i-scholar.in/index.php/indjst/article/view/182605) (digest)
- Adult fingertips are 1.6-2 cm wide. The minimum comes from Parhi, Karlson & Bederson — [NN/g touch targets](https://www.nngroup.com/articles/touch-target-size/) (digest)

**Visual schedule apps** (sources are vendor-adjacent, no independent trial found)
- **Choiceworks:** visual schedules, waiting supports, feelings check-ins, built-in timer, speaks the schedule — [Autisable (sponsored comparison)](https://autisable.com/blog/vizyplan-vs-goally-choiceworks-and-tiimo-comparing-visual-schedule-apps-for-autism/), [BridgingApps](https://bridgingapps.org/?p=23127) (digest)
- **Goally:** schedules, routines, reminders, regulation tools, also described as a visual scheduler with AAC and token boards — [Autisable](https://autisable.com/blog/vizyplan-vs-goally-choiceworks-and-tiimo-comparing-visual-schedule-apps-for-autism/), [comparison digest](https://digikidz-com.pages.dev/best-apps-kids-autism) (digest)
- **Tiimo:** AI co-planner and focus timers, with an interface that "doesn't feel designed for toddlers", not built for autism specifically — [Autisable](https://autisable.com/blog/vizyplan-vs-goally-choiceworks-and-tiimo-comparing-visual-schedule-apps-for-autism/)
- A competitor argues personal photos help because many autistic children struggle with stimulus generalisation. Weigh with its vendor interest — [VizyPlan](https://vizyplan.com/blog/best-visual-schedule-apps-autism-2026)

### Inferences

**Sizing.** 2 cm at about 153-160 CSS px per inch is **about 120-126 CSS px**. So:

| Age | Target | Screen layout | Interactions |
|---|---|---|---|
| 2-3 (no direct evidence) | 160 px or larger | One big picture and a Done | Tap only. No drag |
| 3-5 | 128 px or larger, 16 px gaps | Up to 4 tiles, 2×2 | Tap, simple swipe |
| 6-8 | 96-128 px | 4-6 tiles | Tap. Tap-to-place instead of drag |

- Activate on `pointerup` within the target, and ignore a second touch (`isPrimary` only). Small children rest a palm or hold a finger down, so also fire if the press lasts, rather than cancelling on slight movement. Allow about 30 px of movement slop. These are my estimates, to test.

**Spec: kid-mode shell**
- A separate route with no tab dock, no links, no network calls, no share or install buttons, nothing to buy. Zero analytics. Kid mode is exempt from word budgets because it has almost no words.
- `touch-action: manipulation; overscroll-behavior: none; user-select: none; -webkit-touch-callout: none; -webkit-user-select: none;`, plus prevent the context menu on images.
- Wake Lock while a timer runs.
- Every tile speaks its label on tap, as Apple's pre-literate advice suggests. Use a speech call in the tap handler. Show a tiny icon if the mute switch might be on, for the parent.

**Spec: parent gate (two steps)**
1. A small, plain lock in a top corner: **press and hold for 3 s** with a ring filling up and no sound. Two-handed gestures are hard for 3-5s (NN/g), but a hidden hold is learnable by watching, so it cannot be the only barrier.
2. A sheet: "Grown-ups: what is 7 + 8?" with 4 large random answers. New sum each time. One wrong answer returns to kid mode silently, with no alarm. Offer a harder sum (7 × 8) when any child profile is 6 or older. Use numbers, not words, so it works in every language.
- Copy for the parent: "This stops accidental exits. To lock the phone to PlayNest, use Guided Access." with a link that shows the steps and notes that emergency features are unavailable during a session.
- Never present the gate as consent, in line with 5.1.4.
- Honest limit: on iOS a child can still swipe home from a PWA.

**Spec: visual routine UX (picture-first, first-then)**
- Parent builds in the normal app: routines made of picture steps (art or a parent's photo stored locally), with an optional per-step timer.
- Child sees **Now and Next**, never the whole list unless asked. Now is a giant picture. Next is a small one.
- Timer: a shrinking colour pie, not digits, with a soft sound at the end. No red, no alarm.
- Tap the picture to finish. Then a short celebration, and the garden grows. No streaks, no loss, no fail state, in line with DESIGN.md.
- Parent-only summary afterwards, with no scores about the child.
- Offline is the whole feature, which is an advantage over connected rivals.

**Store consequences**
- Keep the App Store listing parent-directed. Do not use "for kids" in metadata, and do not describe kid mode as the main audience.
- Consider removing `"kids"` from the manifest `categories`, to keep the positioning consistent. It costs nothing.
- A kid-facing mode may change the COPPA analysis (RESEARCH-2 §4.5). Get legal review before launch.

### Gaps
- No controlled study with a millimetre minimum target for 2-4-year-olds was found. Vatavu's full numeric results were not accessible (the page gives none). NN/g's 2 cm comes from qualitative testing.
- Gate effectiveness: no study found on how often 3-8-year-olds defeat hold-to-exit or sums. Children who can add will pass a simple sum, and that is why the harder version exists.
- Evidence for visual schedules (for example the Knight et al. review) could not be retrieved. Do not claim clinical benefit.
- iPhone vs iPad Fullscreen API differences: caniuse's notes did not come through. From memory iPhone does not support it for non-video elements. Do not rely on it.
- Goally, Tiimo and Choiceworks prices and current features were not verified from their own pages.

---

## Accessibility beyond WCAG 2.1

### Takeaway
The most useful new item is `<meta name="text-scale">`, shipped in Chrome 146, which finally lets Android text sizing reach `rem`-based apps. Pair it with the existing iOS `-apple-system-body` rule. For exhausted parents, design around lapses of attention and weak working memory. Those effects are large and well evidenced, while "decision fatigue" as a mechanism is not.

### Cited Findings

**WCAG 2.2** (W3C Recommendation, 5 Oct 2023) — [W3C](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)

| Criterion | Level | Check for PlayNest |
|---|---|---|
| 2.4.11 Focus Not Obscured (Min) | AA | Focus isn't fully hidden behind the tab dock, BottomBar or a toast |
| 2.4.12 Focus Not Obscured (Enhanced) | AAA | Stretch goal |
| 2.4.13 Focus Appearance | AAA | Perimeter 2 CSS px thick, 3:1 contrast |
| 2.5.7 Dragging Movements | AA | Sheet drag has ✕. SwipeRow has a button. HeroPick deck has "Another idea" |
| 2.5.8 Target Size (Min) | AA | 24×24 CSS px, already beaten by the 44 px house rule |
| 3.2.6 Consistent Help | A | Help and "get help now" stay in the same relative place |
| 3.3.7 Redundant Entry | A | Never re-ask a child's name or age |
| 3.3.8 / 3.3.9 Accessible Authentication | AA / AAA | Relevant only when sync arrives |
| 4.1.1 Parsing | removed | Obsolete |

**Contrast and forced colours**
- `prefers-contrast`: 96.22% global. iOS 14.5+, Safari 14.1+, Chrome 96+, Firefox 101+, Samsung 17+ — [caniuse](https://caniuse.com/mdn-css_at-rules_media_prefers-contrast)
- `forced-colors`: 96.77% global. iOS 16+, Safari 16+, Chrome 89+, Firefox 89+, Samsung 15+ — [caniuse](https://caniuse.com/mdn-css_at-rules_media_forced-colors)
- PlayNest has a `forced-colors` block and no `prefers-contrast` rule — `[Local]` `src/styles/app.css:3695`, grep

**Text scaling**
- `<meta name="text-scale" content="scale">`: Intent to Ship for **Chrome 146** on desktop, Android and Android WebView. Sets the root default font size from OS and browser text scale, and turns off mobile text autosizing. Opt-in. WebKit and Gecko gave "No signal" — [blink-dev, Jan 2026](https://groups.google.com/a/chromium.org/g/blink-dev/c/0yp2ygJK5HE)
- Later status: works on mobile in Chromium browsers, Windows in progress, macOS unlikely — [Tumath, Jul 2026](https://www.joshtumath.uk/posts/2026-07-02-lets-fix-the-webs-text-size/)
- Only `rem` and `em` scale, not `px`. Adding it can cause horizontal scrolling on existing sites — [Matuzo, Feb 2026](https://matuzo.at/blog/2026/text-scaling-meta-tag)
- Do not set a fixed root size, and do not combine with `env(preferred-text-scale)` (double-scaling) — [Chrome guide](https://developer.chrome.com/docs/modern-web-guidance/guides/accessibility/respect-os-text-scale) (digest)
- Advice: `rem` for type, `px` for spacing, single column below about 300 px, no fixed heights, slow headings with `font size × (rate × (scale − 1) + 1)` at rate 0.5, test at 320 px width with 200% text — [Tumath](https://www.joshtumath.uk/posts/2026-07-02-lets-fix-the-webs-text-size/)
- Conflict on how many people resize: "about 37%" — [Tumath](https://www.joshtumath.uk/posts/2026-07-02-lets-fix-the-webs-text-size/). "more than a fifth", page dated Jan 2023 — [Appt](https://appt.org/en/stats/font-size)
- Android Firefox responds with full-page zoom, not text scaling — [Matuzo](https://matuzo.at/blog/2026/text-scaling-meta-tag)

**iOS Dynamic Type**
- `font: -apple-system-body` in `@supports`, with the family then overridden. Works in WKWebView and SFSafariViewController — [gist](https://gist.github.com/colingourlay/d95908ec5cd4854c7a5afa06f3989479), [Michael Tsai](https://mjtsai.com/blog/2024/07/05/dynamic-type-on-the-web) (digest). PlayNest already has it — `[Local]` `src/styles/app.css:210`
- It can compound: 150% system text with 150% Safari zoom gives about 225% — [Discourse](https://meta.discourse.org/t/accessibility-automatically-selecting-a-larger-text-size-for-visually-impaired-users/203618) (digest)
- It is proprietary, and the CSS WG is discussing how keywords relate to text-scale — [W3C CSS archive](https://lists.w3.org/Archives/Public/public-css-archive/2025Jul/0324.html) (digest)
- Safari 26.4 fixed `line-height` scaling of font-relative units under text zoom — [Safari 26.4](https://webkit.org/blog/17862/webkit-features-for-safari-26-4/)
- Without these, browsers do nothing on mobile when OS text size changes — [Tumath](https://www.joshtumath.uk/posts/2026-07-02-lets-fix-the-webs-text-size/), [Matuzo](https://matuzo.at/blog/2026/text-scaling-meta-tag)

**Sleep deprivation and task performance**
- Lim & Dinges 2010, meta-analysis, 70 articles, 147 tests, under 48 h of total deprivation: effects range from nonsignificant (reasoning accuracy g = −0.125, 95% CI −0.27 to 0.02) to large (**lapses in simple attention g = −0.776**, CI −0.96 to −0.60) — [Lim & Dinges](https://www.med.upenn.edu/uep/assets/user-content/documents/LimDinges2010MetaAnalysis.pdf)
- A later review summarises this as considerable deficits in simple attention, moderate in complex attention and working memory, small in short-term memory, with processing speed and crystallised intelligence relatively intact — [review](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2017.01607/pdf) (digest)
- Insana, Williams & Montgomery-Downs, *SLEEP* 2013: 70 first-time mothers, 12 weeks, actigraphy and daily PVT. Despite sleep improving, neurobehavioural performance kept worsening from week 2 to the end of the study — [PMC3524545](https://pmc.ncbi.nlm.nih.gov/articles/PMC3524545) (digest; PMC blocked the full text)
- Mixed: an earlier thesis found previous-night sleep and fragmentation were not linked to next-day PVT, though postpartum women perform poorly on it — [WVU](https://researchrepository.wvu.edu/etd/2633) (digest). Late-postpartum reaction times were poor against controls — [WVU](https://researchrepository.wvu.edu/etd/4981) (digest)

**"Decision fatigue" is weaker than its reputation**
- Multi-lab ego-depletion test (Vohs et al. 2021, 36 labs, N = 3,531): d = 0.06. Data about 4× more likely under the null — [PubMed](https://pubmed.ncbi.nlm.nih.gov/34520296/) (digest). A commentary calls this inconclusive, not debunked — [Frontiers commentary](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8134656/) (digest)
- I found no decision-fatigue-specific replication.

**Cognitive guidance, low literacy**
- W3C's cognitive guidance has objectives including "Help users focus", "Ensure processes do not rely on memory", "Avoid data loss and timeouts", and "Provide feedback". Impaired working memory "may only be able to hold one to three items". Status: Working Group Note, not required for conformance — [W3C COGA](https://www.w3.org/TR/coga-usable/)
- Plain language: lower-literacy task success 46% → 82%, time 22.3 → 9.5 min. High-literacy users also gained (68% → 93%). 6th-grade reading level on key pages. No moving text. Search tolerant of misspellings. One site, 50 users, 2005, Pfizer-sponsored — [NN/g](https://www.nngroup.com/articles/writing-for-lower-literacy-users/)
- Bebbo: free, online and offline, one game and one article each day, "easy to understand" content — [Bebbo](https://bebbo.app/). More than 1 million downloads — [UNICEF](https://www.unicef.org/eca/Bebbo-parenting-app). Country count conflict: 17 ([Bebbo](https://bebbo.app/)) vs 15 ([UNICEF](https://www.unicef.org/eca/Bebbo-parenting-app)). Neither page mentions audio or low-literacy features.

**One-handed reach**
- Hoober, n = 780 touching (1,333 observed), Jan 2013: one-handed 49%, cradled 36%, two-handed 15%. One-handed thumb is right 67%, left 33% — [UXmatters](https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php)
- Top-corner close buttons conflict with the thumb zone. Suggest a bottom close. Swipe areas at least 45 px. Swipes run diagonally down from the edge — [Smashing 2016](https://www.smashingmagazine.com/2016/09/the-thumb-zone-designing-for-mobile-users/)

### Inferences

**Spec: text scale**
```html
<meta name="text-scale" content="scale" />
```
- Good news: `app.css` sets no `px` font sizes anywhere, and `html` has no fixed root size, so the meta tag should mostly just work — `[Local]` grep of `src/styles/app.css`
- First verify: tiles use `min-height`, not `height`. Icons in `em` where they sit next to text. Headings don't overflow, and add `overflow-wrap: anywhere` to titles if they do.
- Audit at 360 px and 320 px, at 100%, 150% and 200%: no horizontal scroll, primary action reachable. Add these as e2e checks. The existing 360×640 check is a good base.
- On small screens at 200%, `ActivityTile` should drop to one column via a container query.
- Keep the iOS rule. Do not add `env(preferred-text-scale)` on top.

**Spec: `prefers-contrast`**
```css
@media (prefers-contrast: more) {
  :root { --ink-2: var(--ink); --ink-3: var(--ink); }
  .tile, .card, .chip, .sheet { border: 2px solid currentColor; }
  .pressable { box-shadow: none; border: 2px solid currentColor; } /* The lip alone isn't enough. */
  .art-scene { opacity: 1; filter: none; }
}
```
Worlds must still pass. Extend the axe run to emulate `prefers-contrast: more`. Variable names are illustrative, apart from `--ink*`.

**Spec: fatigue-proofing.** Base this on attention lapses and working memory, not on decision fatigue.

| Evidence | Rule |
|---|---|
| Lapses are the largest effect | Assume any on-screen message may be missed. Raise the Undo toast from 6 s to 10 s, and keep a "Recent actions" list with Undo for the day. Today's toast timer is 6000 and 2600 ms (`[Local]` `src/components/Toast.tsx:30`) |
| Lapses and double taps | Ignore a repeat tap on a log or save button within 400 ms. Show what just happened in plain words |
| Working memory | Never make a parent carry a value between screens. Recognition over recall: "last time" chips, prefilled values, one step per screen |
| Performance worsens over weeks | Night is not the only bad time. Keep these rules in every mode |
| COGA: avoid data loss | Draft state survives a phone call, lock or app kill. Resume where they were. No timeouts |
| Fewer options | Keep "one big pick". Justify it by attention and task time, and do not cite "decision fatigue" as fact |

**Spec: low literacy and voice**
- Reading level: grade 6 on key screens, checked by a script in CI (for example Flesch-Kincaid on content records).
- Every safety card and activity gets "Read to me".
- Icons always with labels (already a rule). Numbers with units. No moving text.
- Search must tolerate misspellings (see the search section).
- One conflict to resolve: DESIGN.md removes summaries from tiles, while search results need a one-line summary, per NN/g.

**Spec: reach zones.** Exact zone maps need data I could not retrieve, so use these as working rules.
- Primary action in the bottom 40% of the screen, with no critical target in the top-left corner. Back is a top-left exception, so also keep the edge-swipe and a bottom "Done" in focused tasks.
- Parents holding a baby are likely to use whichever hand is free, so keep the primary action centred, or spanning the full width, rather than bottom-right only. Mirror nothing by handedness setting yet.
- Sheets should close from the bottom too (drag down or a bottom `Close`), not only the top ✕.
- Offer a "bottom sheet" for filters and pickers instead of dropdowns at the top.

### Gaps
- Reach data is from 2013 and predates today's phones. I could not retrieve newer studies or current phone dimensions.
- WHO and UNICEF low-literacy guidance, ParentText evidence (the site did not resolve), and Medhi et al.: not retrieved.
- Whether `-apple-system-body` works in iOS Home Screen mode specifically: no source. The WKWebView statement is the closest evidence. Test it.
- Whether iOS ever triggers `forced-colors`: caniuse lists support, but from memory iOS has no such user setting.
- `prefers-contrast: more` mapping on iOS (Increase Contrast) and Android: Apple's page returned navigation only.
- Lim & Dinges measures total deprivation, not the chronic fragmentation parents have. Treat it as direction, not magnitude.

---

## Night use

### Takeaway
Lower total light first, and treat colour as the second factor. Consensus evening and night limits are 10 lux melanopic at the eye or less. The evidence for colour filters is mixed, so a red UI is a reasonable low-cost choice but not a proven sleep aid. PlayNest's real 3 a.m. problem is that its install splash and theme colour are bright.

### Cited Findings
- Brown et al., *PLOS Biology* 2022, consensus for healthy adults 18-55: **evening (from at least 3 h before bed) ≤10 lux melanopic EDI at the eye; sleep environment ≤1 lux, "as dark as possible"; night-time activities that require vision ≤10 lux** — [Brown et al.](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3001571)
- Night Shift-style filters reduce blue emissions and shrink the colour gamut. Blue-light glasses: Cochrane 2023 finds mixed results, and studies have methodological flaws or risk of bias — [Wikipedia, citing Singh 2023 and Shechter 2020](https://en.wikipedia.org/wiki/Effects_of_blue_light_technology)
- Red light suppressing melatonin less than blue comes from a small preliminary study, and StandBy's red tint is a platform precedent — [RESEARCH-2 §3.4](../../docs/RESEARCH-2.md) (not re-verified; [PMC12113466](https://pmc.ncbi.nlm.nih.gov/articles/PMC12113466/) blocked my fetch)
- Contrast on near-blacks — `[Local]` WCAG formula:

| Foreground | On `#000000` | On `#120404` | On `#1A0606` | Use |
|---|---|---|---|---|
| `#FF5A4E` (current doc) | 6.82 | 6.53 | 6.36 | Night-feed body |
| `#FF453A` | 6.16 | 5.90 | 5.75 | Body |
| `#E5483B` | 5.32 | 5.09 | 4.96 | Bedside body |
| `#D9534A` | 5.29 | 5.06 | 4.93 | Bedside body, softer |
| `#C7443A` | 4.32 | 4.13 | 4.02 | Large only (3:1 or more) |
| `#B23A30` | 3.54 | 3.39 | 3.30 | Large only, dimmest. Big timer, icons |
| `#8A2E26` | 2.50 | 2.39 | 2.33 | Fails. Decorative only |
| `#FF8A3D` (amber) | 8.95 | 8.57 | 8.35 | Alternative for red-hard viewers |
| `#E8A15C` (soft amber) | 9.68 | 9.27 | 9.03 | Alternative body |

- `background_color` is `#fff9e8` and `theme_color` is `#ffcf56` in the manifest, and `<meta name="theme-color">` is `#ffcf56` in `index.html` — `[Local]` `public/manifest.webmanifest`, `index.html:11`
- An early theme script already reads the stored preference, which avoids a white flash in the page itself — `[Local]` `index.html:25`

### Inferences

**Spec: three levels, not one theme**

| Level | When | Look | Rules |
|---|---|---|---|
| Dark | System or Settings, as today | Deep worlds | Art dims slightly |
| Dim evening (new) | Auto from 19:00, or 3 h before the child's bedtime | Dark, warm palette, art at 70% | No confetti. Slower motion |
| Bedside (extends RESEARCH-2's night-feed) | Offered 21:00-06:00, or on starting noise or a timer | Black, `#D9534A` body, `#B23A30` big timer | No art, no white, no images, no motion. 72-96 px buttons. Black screen when idle |

```css
[data-mode='bedside'] {
  --paper: #000; --card: #0a0202; --ink: #d9534a; --ink-2: #c7443a; --line: #3a1512;
  --cta: #b23a30; --cta-ink: #000;
  color-scheme: dark;
}
[data-mode='bedside'] img, [data-mode='bedside'] .art { display: none; }
[data-mode='bedside'] * { animation: none !important; transition: none !important; }
```
- Check: `--ink-2 #c7443a` is 4.32:1 on black, so use it at 18.66 px bold or 24 px and larger only, or swap it for `#d9534a`.
- `#000` page plus an OLED phone means idle pixels are off.
- Bedside is a separate mode with its own buttons, not the normal screens recoloured.

**Spec: amber option.** Red-only text is not ideal for everyone. From general knowledge (not a source I retrieved), people with protan colour vision see red as much darker than the WCAG number suggests, and red is harder to focus on. So offer "Soft amber" (`#E8A15C`) in Settings as a Bedside option. Test real readability in the dark with a few parents, since WCAG ratios were not designed for dark-adapted eyes.

**Spec: manage what the web can't control**
- The web cannot set screen brightness, so the UI must carry the dimming. One-time hint at first Bedside use: "Turn brightness all the way down too."
- Light check: measure with a lux-meter app at 30 cm from the phone. Target at or below 10 lux, the Brown "night-time activities" figure, noting that lux isn't the same as melanopic EDI, and red would score lower.
- Offer a link to the OS features in the info sheet: Reduce White Point and Colour Filters on iOS, Extra Dim on Android. I could not verify the setting paths.

**Spec: fix the 3 a.m. splash**
- A bright cream splash may be the first thing a tired parent sees. From general knowledge, Android builds its launch splash from the manifest's `background_color`, and manifest colours can't follow the time of day. So change `background_color` to a calm mid-dark world colour and accept a brief dark splash by day. Confirm this on an Android device first.
- Set `<meta name="theme-color">` early in the inline script alongside the theme, using the mode's colour, and use `media="(prefers-color-scheme: dark)"` variants.
- iOS start-up images are device-specific. Check what actually shows on launch.

**Automatic behaviour.** Offer, don't force: a small "Dim for night?" chip at the first night use, remembered afterwards. Never change appearance while a parent is mid-task. Copy: no mention of sleep benefit. Say "Easier on your eyes in the dark", which is all the evidence supports.

### Gaps
- **Search budget ended before I could retrieve** Huckleberry, Moshi or Kindle night patterns, and the Night Shift studies (Duraccio 2021, Nagare 2019). From memory, those studies suggest brightness matters as much as or more than colour, but I can't cite them here. Competitor patterns are limited to what RESEARCH-2 already has.
- Apple's StandBy and Reduce White Point pages, and Google's Extra Dim page, returned navigation only or 404.
- No research found on the legibility of red text for dark-adapted, sleep-deprived users.
- Brown's figures are for adults 18-55 and don't address infants seeing the screen.

---

## Internationalisation for a later release

### Takeaway
Week start and calendars are now solved by platform `Intl` (`getWeekInfo` reached Baseline in July 2026). `Temporal` still isn't in Safari. RTL is mostly CSS logical properties plus a short list of things that must not flip. Self-host one compact Arabic or Persian font and one Devanagari font, and use system fonts for CJK.

### Cited Findings

**Week start**
- `Intl.Locale.prototype.getWeekInfo()` returns `{ firstDay, weekend, minimalDays }`, with 1 = Monday and 7 = Sunday. Examples: `he` firstDay 7, weekend [5, 6]; `en-GB` firstDay 1; `ar-AF` firstDay 6; `dv-MV` firstDay 5. Older browsers had a `weekInfo` accessor. **Baseline 2026, newly available since July 2026** — [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo)
- Support, 96.03% global: Chrome and Edge 130+ (partial 99-129), Firefox 153+, Safari 17+, iOS 17+ (partial 15.4-16.7), Samsung 28+ (partial 18-27), Chrome for Android, Firefox for Android — [caniuse](https://caniuse.com/mdn-javascript_builtins_intl_locale_getweekinfo)

**Calendars**
- Available calendars include `persian` (Solar Hijri), `islamic-umalqura` (KACST months 1300-1600 AH, falling back to `islamic-civil` outside that), `islamic-civil`, `islamic-tbla`, `hebrew`, `indian`, `buddhist`, `chinese`, `dangi`, `coptic`, `ethiopic`, `japanese`, `roc`. `islamic` is unspecified and canonicalised with a warning — [MDN supportedValuesOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf)
- Numbering systems: `arab`, `arabext` (Persian digits), `deva`, `latn`. `ca` and `nu` locale extensions exist, with the options object taking precedence — [MDN supportedValuesOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf), [MDN DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
- **`Temporal`:** 70.18% global. Chrome and Edge 144+, Firefox 139+, Chrome and Firefox for Android. **Not in Safari or iOS Safari (only Technology Preview). Not in Samsung Internet** — [caniuse](https://caniuse.com/temporal). Safari 27.0's Temporal fix (`Temporal.Instant`) points to work in progress — [Safari 27.0](https://webkit.org/blog/18325/webkit-features-for-safari-27-0/)

**RTL conversion**
- Set `dir` on `<html>`. Flexbox and Grid order flips automatically. `dir="auto"` for user or mixed text. Use logical properties for padding, margin, border, radius and `text-align` — [RTL Styling 101](https://rtlstyling.com/posts/rtl-styling)
- `translate` doesn't flip, so use a direction-aware override and `scaleX(-1)` for directional icons — [RTL Styling 101](https://rtlstyling.com/posts/rtl-styling)
- **Flip:** breadcrumb arrows, back and forward, toggles, tab icons, menu icons. **Don't flip:** symmetrical icons, media playback icons, objects held in a hand. Email and phone inputs stay LTR — [RTL Styling 101](https://rtlstyling.com/posts/rtl-styling)
- Arabic typography: `letter-spacing: 0`, more line height (about 1.9 for body, tune per font), no `rgba()` or opacity on text, no splitting `word-break`, separate font in the stack, watch underlines over dots. Buttons need `min-width` — [RTL Styling 101](https://rtlstyling.com/posts/rtl-styling)
- `app.css` has 42 lines with physical properties against 20 with logical ones — `[Local]` grep of `src/styles/app.css`

**Font cost** — `[Local]` from `@fontsource-variable` packages, WOFF2, full weight axis

| Font | Script subset | Latin subset | Note |
|---|---|---|---|
| Vazirmatn (Arabic and Persian) | **45.2 KB** | 33.7 KB | Compact. Covers Persian too |
| Noto Sans Arabic | 162.1 KB | 30.7 KB | 3.6× Vazirmatn |
| Noto Sans Devanagari | 118.4 KB | 24.8 KB | |
| Noto Sans SC | 112 files, 4.9 MB total package | | Slices. Not for precache |
| Noto Sans JP | 135 files, 5.8 MB total package | | |
| Noto Sans KR | 135 files, 3.8 MB total package | | |

- PlayNest's current Latin fonts total 95.6 KB (three WOFF2), and already use `unicode-range` — `[Local]` `dist/assets`, `src/styles/app.css:13`

### Inferences

**Spec: Intl helpers**
```ts
export function firstDayOfWeek(tag: string): number {
  const loc = new Intl.Locale(tag) as Intl.Locale & {
    getWeekInfo?: () => { firstDay: number };
    weekInfo?: { firstDay: number };
  };
  return loc.getWeekInfo?.().firstDay ?? loc.weekInfo?.firstDay ?? 1; // 1 = Monday; ISO fallback.
}

export const formatDay = (d: Date, tag: string, calendar?: string, numberingSystem?: string) =>
  new Intl.DateTimeFormat(tag, { dateStyle: 'long', calendar, numberingSystem }).format(d);
// formatDay(d, 'fa-IR', 'persian')          -> Solar Hijri with Persian digits
// formatDay(d, 'ar-SA', 'islamic-umalqura') -> Hijri (Umm al-Qura)
// formatDay(d, 'ar-EG', undefined, 'latn')  -> Arabic text with 0-9 digits
```
- Checked in Node 24: `firstDayOfWeek` gives `he` 7, `en-GB` 1, `en-US` 7, `ar-AF` 6, `fa-IR` 6, `ar-SA` 7. `formatDay` for 4 Nov 2026 gives `۱۳ آبان ۱۴۰۵` (`fa-IR`), `٢٤ جمادى الأولى ١٤٤٨ هـ` (`ar-SA`), `4 نوفمبر 2026` (`ar-EG`, `latn`). Browsers may differ by ICU version — `[Local]`
- Always store UTC plus offset (RESEARCH-2 §4.2) and format at the edge. `Intl` is read-only, so date arithmetic in Jalali or Hijri still needs a helper (jalaali-js, as RESEARCH-2 says). Don't wait for `Temporal`.
- Child age in months stays calendar-independent. Compute it on Gregorian, and only display it in the local calendar. Birthdays in a Hijri calendar shift each Gregorian year, so ask families which they want.
- Offer a user setting for calendar and digits, because locale defaults aren't always what people want.

**Spec: RTL rollout**
1. Add a stylelint rule (`stylelint-use-logical` or similar) and convert the 42 physical lines now, ahead of any translation. Low risk, cheap, and new code stays clean.
2. Add a dev `?dir=rtl` switch and run the e2e axe and overflow checks with it.
3. Review the rule list:

| Flip | Don't flip | Check case by case |
|---|---|---|
| Back and forward chevrons | Numbers inside text | Sheet swipe, SwipeRow direction |
| Push and pop slide direction, `Carousel` scroll order | Play, pause and speed controls | Progress bars and `Ring` start point |
| `BalanceBars` fill, progress direction | Clock faces, timers | `HeroPick` swipe deck |
| Toast and Undo placement | Pip and art with no direction | Art that shows reading or movement direction |

4. The view-transition keyframes and `translateX` in `app.css` need `[dir='rtl']` overrides. Logical properties don't reach transforms.
5. Caprasimo has no Arabic, so for `[lang='ar'], [lang='fa']` use a heavy weight of Vazirmatn for display. No fake bold. Keep the existing `font-synthesis` rule.

**Spec: font strategy**
- Arabic and Persian: self-host Vazirmatn, 45 KB. Precache it only for users in those locales (separate cache entry, added when the language is chosen).
- Devanagari: Noto Sans Devanagari, 118 KB, same conditional precache. Check that Nunito-scale text sizes work, since conjuncts need more line height.
- CJK: use system fonts (a `system-ui` stack). 4-6 MB of slices breaks the offline budget. Sliced web fonts also aren't practical offline unless all slices are cached. Latin glyphs in CJK text can keep Nunito.
- Never precache all scripts for all users. Add a `fonts-<script>` chunk, requested on language change.

**Which languages first (my reasoning, not evidence).** Without analytics, pick by a mix of births, smartphone reach, and a gap in free parenting content, not by number of speakers. A sensible hypothesis to test: Spanish, Portuguese (BR), Hindi, Arabic, Indonesian, French. Add Persian if there is a personal network to review content. Health-related copy must be professionally reviewed per language, and it needs region packs anyway (RESEARCH-2 §2.1).

### Gaps
- **No sourced data on "highest parent demand" by language.** Search ended first, and the Ethnologue (403) and births (404) pages I tried did not load. The list above is a hypothesis. Use UN World Population Prospects births data, and App Store and Play country stats, to decide.
- Apple's right-to-left HIG and Material's bidirectionality page returned empty, so the mirroring rules rest on one good practitioner guide. Re-check clocks, progress bars and checkmarks against Apple's page before shipping. The WebFetch tool's fallback for HIG was "general knowledge", so I did not cite it.
- Actual Persian and Arabic display of `Intl` output on iOS and Android was not tested.
- Sizes are for the `@fontsource-variable` packaging. Static weights may differ.
- Bebbo localises for 17 countries, which shows the pattern but says nothing about demand — [Bebbo](https://bebbo.app/).

---

## Precaching and performance

### Takeaway
Precaching 300-500 tiny SVGs is not a problem by size, and individual `<img>` files are among the fastest rendering methods, so don't build a sprite. The real risks are in how `sw.js` behaves: start-up waits on the network, one failed file fails the install, and updates delete chunks a running tab may still need. Budget for a Galaxy A24-class phone, and test on a slower one.

### Cited Findings

**Today's numbers** — `[Local]` parsed `dist/sw.js`, gzip level default

| Group | Files | Raw | Gzip, per file |
|---|---|---|---|
| Everything precached | 340 | 2.06 MB | 830 KB |
| JS | 7 | 1.40 MB | 450 KB |
| SVG | 323 | 444 KB | 208 KB |
| CSS | 1 | 63 KB | 16 KB |
| Fonts | 3 | 96 KB | 96 KB |
| PNG icons | 4 | 62 KB | 61 KB |

- SVG concatenated into one file: 442 KB raw, **154 KB gzip, 129 KB Brotli**, so a sprite would save about 54-78 KB (0.05-0.08 MB) on the first download. Mean SVG is 661 B gzip, and the largest is 2.65 KB — `[Local]`
- First-load JS for one age: index 40 KB + vendor 53 KB + content 37 KB + one activity pack 72-91 KB, about 202-221 KB gzip, 621-691 KB raw — `[Local]`

**Service worker behaviour** — `[Local]` `dist/sw.js`, generated by `vite.config.ts`
- Install: `c.addAll(PRECACHE)` followed by `skipWaiting()`.
- Navigation: `fetch(req).catch(() => caches.match('./'))`, which is network-first with no timeout.
- Activate deletes every other `playnest-*` cache, and `clients.claim()` follows. Per `src/main.tsx`, "the open page keeps running the old code until reloaded".
- `cache.addAll` fails on any non-2xx response. Old entries with matching keys get overwritten — [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll). All-or-nothing behaviour is in the Service Worker spec, as MDN's fetch summary noted, but I did not read the spec itself.

**Rendering method**
- Cloud Four (2021, 1,000 icons, Chrome, Edge, Firefox, Safari, Samsung): `<img>` with an external SVG was among the most performant in all browsers. External symbol sprites were slowest and least consistent in Chrome and Edge. Masks and filters were worst. Optimising SVGs helps whichever technique is used — [Cloud Four](https://cloudfour.com/thinks/svg-icon-stress-test/)
- PlayNest renders emoji through `<img>` — `[Local]` `src/components/Emoji.tsx:29`

**Device and network targets**
- P75 device recommendation: Samsung Galaxy A24 4G or equivalent (A16 4G, A07 4G, Redmi Note 13 Pro 4G). For the low-end cohort, Galaxy A51 or a late-model Moto E. Network: 9 Mbps down, 3 up, 100 ms RTT. Slower for global ambition: 5/1/100 — [Russell, Nov 2025](https://infrequently.org/2025/11/performance-inequality-gap-2026/)
- Low-end single-core performance is "9x slower than contemporary iPhones", mid-tier "more than 3.5x slower" — [Russell](https://infrequently.org/2025/11/performance-inequality-gap-2026/)
- Critical-path budgets: 3 s target allows about 0.3 MiB JS on JS-light pages, 0.62 MiB on JS-heavy. 5 s target allows 0.57 and 1.15 MiB — [Russell](https://infrequently.org/2025/11/performance-inequality-gap-2026/)
- INP: good under 200 ms, poor over 500 ms, measured at the 75th percentile. 77% of mobile sites were good in 2025, up from 74%. Mobile CWV overall: 48% — [Web Almanac 2025](https://almanac.httparchive.org/en/2025/performance). React sites dropped further when INP replaced FID — [Russell](https://infrequently.org/2025/11/performance-inequality-gap-2026/)

**Content and containment**
- `JSON.parse` "is much faster compared to the JavaScript object literal, especially for cold loads", at 10 KB or more, evaluated once. Split bundles larger than about 50-100 KB. Measure first — [V8, 2019](https://v8.dev/blog/cost-of-javascript-2019)
- `content-visibility`: 94.85% global. Chrome and Edge 85+, Firefox 125+, Safari and iOS 18+, Samsung 14+ — [caniuse](https://caniuse.com/css-content-visibility). Baseline 2024 — [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility)
- `auto` keeps content available to find-in-page, focus, tab order and the accessibility tree. Pair it with `contain-intrinsic-size: auto 500px`. `hidden` removes it from those — [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility)

### Inferences

**Answer on SVGs:** at 500 SVGs (about 325 KB gzip by file) the size is fine. The 54-78 KB a sprite would save isn't worth it, since it makes every art update re-download the lot, loses per-file caching across releases, and renders no better according to the one test found. If SVG count passes about 1,000, consider a per-domain chunk that's downloaded after install rather than a precached single sprite. Run SVGO on `scripts/make-emoji.mjs` output first, for a cheap win.

**Spec: three `sw.js` fixes.** These are the biggest available reliability gains.

1. **Cache-first app shell.** Today a lie-fi connection at 3 a.m. leaves the parent looking at a blank screen until the fetch fails.
```js
if (req.mode === 'navigate') {
  event.respondWith(caches.match('./').then((hit) => hit || fetch(req)));
  return;
}
```
2. **Never delete a chunk a running page might still need.** Keep the previous version's cache until the next update.
```js
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const old = (await caches.keys()).filter((k) => k.startsWith('playnest-') && k !== CACHE);
    // keys() returns creation order (from memory of the spec; confirm), so keep the newest old cache.
    for (const k of old.slice(0, -1)) await caches.delete(k);
    await self.clients.claim();
  })());
});
```
Also handle `vite:preloadError` in the page (`[Local]` the event exists in the installed Vite): show "Update ready · Reload" instead of a dead screen.

3. **Resilient, delta install.** Copy unchanged hashed files from the old cache rather than re-downloading 340 files. Retry small failures, and only fail the install if a *critical* file is missing.
```js
async function installCache(files, critical) {
  const cache = await caches.open(CACHE);
  await Promise.all(files.map(async (url) => {
    // Only content-hashed files are safe to reuse without re-downloading.
    const old = url.startsWith('assets/') ? await caches.match(url) : null;
    if (old) return cache.put(url, old);
    for (let i = 0; i < 3; i++) {
      try {
        const res = await fetch(url, { cache: 'no-cache' });
        if (res.ok) return cache.put(url, res);
      } catch { /* retry */ }
    }
    if (critical.has(url)) throw new Error(`precache failed: ${url}`);
  }));
}
```
Limit concurrency to about 8-12 on HTTP/1.1 hosts. `public/emoji` names are code points, not hashes (`[Local]`), so as written all 322 SVGs re-download on each release. To save that too, have the build add a content hash to the art names, or compare against a stored hash list.

**Spec: content packs**
- Move large data from JS to JSON: `activities-*.js` at 221-291 KB each are prime candidates for `fetch` + `JSON.parse`. Measure first, as V8 says. Target 2,000 records as separate language and age packs.
- Precache only the current child's age band plus neighbours. Fetch the rest on idle after install, and tell the user: "Offline for all ages · Download". That keeps first install fast while keeping the promise visible.
- Keep safety and emergency content in the critical, always-precached group.

**Spec: `content-visibility`**
```css
.section--lazy { content-visibility: auto; contain-intrinsic-size: auto 480px; }
```
- Use on off-screen sections and long lists of tile rows, not each tile, because the bookkeeping isn't free. Not on anything above the fold, not on `Sheet`, and not on the focused element's ancestors during transitions.
- Turn it off in print (see print section).
- Safari below 18 simply ignores it.

**Spec: INP budget**
- Target INP under 200 ms at p75 on a Galaxy A24-class device, and under 100 ms for tab switches and quick-log taps, which is my stricter house target.
- Rules: no `JSON.stringify` of the whole state on the input path (coalesce writes). Use `startTransition` for filters and search. Lazy-create sheets. Yield in long loops.
- Verification: add a Playwright or Lighthouse run in CI with CPU throttling at 4×, plus a physical Moto E or A-series test before each release. Log INP with the `web-vitals` library in dev only, since the app has no analytics.

### Gaps
- Precise Galaxy A24 or Moto E numbers for PlayNest weren't measured. No phone in this environment. CPU multipliers are extrapolated from Russell.
- Cloud Four's test is 2021, and I found no newer one. It tested icon rendering at 1,000 count, not the service-worker cost of 500 files.
- I did not measure 340-file install time on a real low-end phone. Do this with DevTools remote debugging.
- Workbox's precaching advice: developer.chrome.com returned 403.
- Whether the Cache API stores compressed or decoded bodies (affects disk use) wasn't checked. Assume about the raw figure, 2 MB. That is tiny against quota.

---

## Search UX on phones

### Takeaway
Use MiniSearch at 5.9 KB gzip: it gave sub-millisecond queries on real PlayNest content, while Fuse took about 52 ms per query on desktop, which is too slow for each keystroke on a low-end phone. Fuzzy matching alone is not enough. Your content says "nappy" 38 times and "diaper" zero times, and fuzzy turned "diaper" into a stargazing activity, so a canonical synonym map is the essential piece.

### Cited Findings

**Bundle size** — `[Local]` esbuild `--bundle --minify`, gzip

| Library | Min | Gzip |
|---|---|---|
| @leeoniya/ufuzzy 1.0.19 | 8.9 KB | **4.2 KB** |
| minisearch 7.2.0 | 17.6 KB | **5.9 KB** |
| fuse.js 7.5.0 | 26.5 KB | **9.5 KB** |
| flexsearch 0.8.212 (`Index`) | 50.5 KB | **17.3 KB** |

**Speed on PlayNest's content** — `[Local]` Node 24, desktop PC, 2,000 records made by repeating the 920 real records (528 activities, 215 tips, 18 guides, 159 milestones), 20 queries × 30 repeats. Repeating records flatters vocabulary size, so treat these as relative. Low-end phones may be 9× slower or more than a contemporary iPhone (Russell), and this desktop is not an iPhone either, so scale conservatively.

| Setup | Index build | Query p50 | Query p95 |
|---|---|---|---|
| MiniSearch, title + tags + steps | 118 ms | 0.09 ms | 2.00 ms |
| MiniSearch, title + tags | 14 ms | 0.04 ms | 0.54 ms |
| **MiniSearch tuned, title + tags + summary, canonical terms** | **57 ms** | **0.06 ms** | **0.54 ms** |
| Fuse, title + tags + body | 11.5 ms | **52 ms** | **86 ms** |
| Fuse, title + tags | 4.6 ms | 9.6 ms | 16.6 ms |
| uFuzzy, title + tags | 8.7 ms | 0.15 ms | 0.25 ms |

**Result quality** — `[Local]`. Counts in the first three rows are on the repeated 2,000-record set. The tuned rows are on the 920 unique records, so compare quality rather than raw numbers. The content contains the word "diaper" zero times, so any hit in a setup without synonyms is a false match.

| Setup | "tantrun" (typo) | "diaper" (no such word in content) |
|---|---|---|
| Plain MiniSearch, all text | 0 | 2. Top hit: "Backyard star gazing" (likely *dipper*) |
| Fuse, title + tags + body | 8 | 315, all false matches |
| uFuzzy, title + tags | 6 | 0 |
| MiniSearch tuned, single pass | 3, correct | 13. Top hits correct, but the count is inflated by fuzzy words |
| **MiniSearch tuned, two-pass (below)** | **3, correct** | **6, correct, same as "nappy"** |

- Serialising the full MiniSearch index gives 1.2 MB, 324 KB gzip, 26 ms to load, so build at runtime rather than ship it — `[Local]`
- Vocabulary in `src/data`: nappy 38, tantrums 20, cot 23, pram 10, tantrum 1, meltdown 2, and **diaper, nappies, dummy, pacifier, crib, stroller, pushchair all 0** — `[Local]` grep
- Remaining failures with the two-pass setup — `[Local]`:
  - "dummy" and "pacifier" → "Lap tummy time" in fuzzy mode, since the content has no such word.
  - "teething" → a "teach" tip and a "Spaghetti and marshmallow tower" activity in fuzzy mode.
  - "car" → "Save a big cardboard box" ranked above "Car-seat singalong", because prefix matches can win.
  - "fine motor" → partial mode with irrelevant "Motorboat", because the content doesn't use the phrase.
  - "tantrun" needed the plural stem as well as fuzzy, because the content mostly says "tantrums".

**Zero results and search UX**
- About half of ecommerce sites have no effective recovery from no results. Suggest related categories, offer alternative searches with a preview of 3-5 results, apply the single working alternative automatically and say so, and show popular content. Search tips alone are not enough — [Baymard, updated Feb 2025](https://baymard.com/blog/no-results-page)
- State no results prominently, restate the query, keep it editable in the box, put suggestions in the main body, avoid humour that could read as mockery, always offer a next step — [NN/g, 2014](https://www.nngroup.com/articles/search-no-results-serp/)
- Search must tolerate misspellings, and results need short readable summaries, especially for lower-literacy users — [NN/g](https://www.nngroup.com/articles/writing-for-lower-literacy-users/)
- W3C's cognitive guidance lists "Provide search" among its patterns — [W3C COGA](https://www.w3.org/TR/coga-usable/)

### Inferences

**Spec: MiniSearch setup.** This config produced the tuned row above.
```ts
import MiniSearch from 'minisearch';

// One canonical word per concept, applied at both index and query time.
const SYN = new Map(Object.entries({
  diaper: 'nappy', diapers: 'nappy', nappies: 'nappy', pacifier: 'dummy', binky: 'dummy',
  stroller: 'pram', pushchair: 'pram', crib: 'cot', color: 'colour', colors: 'colour',
  meltdown: 'tantrum', senses: 'sensory', mom: 'mum', mommy: 'mum', potty: 'toilet',
}));
const fold = (s: string) => s.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase();
const stem = (w: string) =>
  w.length > 4 && w.endsWith('ies') ? w.slice(0, -3) + 'y'
  : w.length > 3 && w.endsWith('s') && !w.endsWith('ss') ? w.slice(0, -1)
  : w;
const processTerm = (t: string) => { const w = stem(fold(t)); return SYN.get(w) ?? w; };

export const searchIndex = new MiniSearch({
  fields: ['title', 'tags', 'summary'],
  storeFields: ['title', 'type', 'ageMin', 'ageMax'],
  processTerm,
  searchOptions: {
    boost: { title: 3, tags: 1.5 },
    combineWith: 'AND',
    prefix: (t) => t.length >= 3,
    fuzzy: (t) => (t.length < 4 ? false : t.length < 8 ? 1 : 2),
    weights: { prefix: 0.7, fuzzy: 0.3 },
    maxFuzzy: 2,
  },
});
```
- The one-way map makes "diaper" and "nappy" the same term, so US users find British content with no duplicate index. Store display names per region in the data, and use the user's word in the UI.
- Grow the map from real zero-result queries saved locally. A parent can opt to include them in a feedback email. There is no telemetry.

**Spec: a two-pass search, to fix false positives**
```ts
export function find(q: string) {
  const exact = searchIndex.search(q, { fuzzy: false, prefix: (t) => t.length >= 3 });
  if (exact.length >= 3) return { hits: exact, mode: 'exact' as const };
  const fuzzy = searchIndex.search(q);
  if (fuzzy.length) return { hits: dedupe([...exact, ...fuzzy]), mode: 'fuzzy' as const };
  const any = searchIndex.search(q, { combineWith: 'OR' });
  return { hits: any, mode: any.length ? ('partial' as const) : ('none' as const) };
}
const dedupe = <T extends { id: unknown }>(a: T[]) => [...new Map(a.map((x) => [x.id, x])).values()];
```
- This was run against the real content. All 14 test queries behaved as listed in the failures above.
- Label non-exact modes honestly: "No exact match for 'teething'. Showing similar words."
- **Words you know are real should never go fuzzy.** "dummy" and "pacifier" are real words with no content, and mapping them to "tummy time" looks broken. Keep a small `KNOWN` set (the values of `SYN`, plus common topics such as "teething") and skip the fuzzy pass for them. That sends them to the honest zero-result screen, which is also a useful list of content gaps.
- To stop "car" ranking below "cardboard", try `prefix: (t) => t.length >= 4`, and re-check the golden queries.
- Build the index lazily on first focus of the search field, in a worker or `requestIdleCallback`. 57 ms desktop could be about 0.5 s on a low-end phone by Russell's multiple. Index title, tags and summary, not full steps (full steps cost 2× and add noise).
- Precompute nothing to disk. The 324 KB serialised index isn't worth it for 57 ms of build time.

**Spec: safety queries bypass ranking.** Before searching, match a small list ("choking", "not breathing", "fever", "poison", "battery", "suicide", "can't cope" and equivalents). If matched, pin the matching offline safety card as the first result, always, with the emergency number for the region. Fuzzy-match this list too, since a panicking parent mistypes.

**Spec: mixed results**
- Layout: one **Top match** row, then sections by type in a fixed order: Safety (only if matched), Activities, Guides, Tips, Milestones. Up to 3 per section, with a "See all 12" that opens a filtered list.
- Each row: picture, title, type label in words, age range, plus one short line of summary. That extends DESIGN.md's "tiles have no summary" rule for search only.
- Age: filter to the current child by default, with a visible chip: "For Maya, 14 mo ✕". Results out of range appear below a divider ("For other ages"). Never hide them silently.
- Type chips at the top only after results appear, and only those with results.

**Spec: input details**
- `<input type="search" inputmode="search" enterkeyhint="search" autocapitalize="off" autocomplete="off" spellcheck="false">`, at 16 px or larger.
- Results update with each keystroke using `startTransition`. No spinner, no debounce needed at these speeds.
- Empty state: recent searches (stored locally, clearable) and 6 age-matched suggestions as chips.
- Back from a result restores query and scroll position.

**Spec: zero results (no dead ends)**
- Headline, not humour: `Nothing for "fine motor" yet`. Pip doesn't look sad or joke.
- Keep the query editable. Directly below, show these in order: "Did you mean" chip, partial matches, browse by area (all 8 tiles), age-matched suggestions.
- If the query looks like a health question, add a static card: "PlayNest doesn't answer health questions. For worries, talk to your doctor." with the "Get help now" link.
- `fine motor` should be fixed by data: add the tag and synonym `fine motor → hands`. Use phrases in `SYN` as an index-time expansion.

### Gaps
- All speeds are desktop Node, not a phone, and the 2,000 records repeat 920 real ones. Re-run on a Galaxy A24-class phone once content really reaches 2,000. Unique text will produce a bigger vocabulary and a slower index.
- Arabic, Persian, Hindi and CJK tokenisation weren't tested. MiniSearch's default tokeniser needs customising for those (`Intl.Segmenter` is the likely route). A separate index per language is needed.
- The stemmer is English only, and intentionally crude. Check it against real queries.
- No parent-specific search research found. Baymard and NN/g are general or ecommerce evidence, and NN/g's page dates from 2014.

---

## Final prioritised list: top 20 UX and platform upgrades

### Takeaway
Protect the data first, because it is cheap and PlayNest's whole promise rests on it. Then fix start-up reliability. After that, add what makes the app loved at 3 a.m.: bedside mode, read-aloud, sound, and search. Effort assumes one developer familiar with the code. **XS** is under half a day, **S** up to 1 day, **M** 2-4 days, **L** 1-2 weeks.

### Cited Findings

| # | Upgrade | Why it ranks here | Effort | How to verify |
|---|---|---|---|---|
| 1 | **Stop silent data loss:** keep a damaged blob, surface failed saves, warn at 3 MiB, coalesce writes | `[Local]` `store.ts:73-91` discards and hides failures. localStorage is 5 MiB ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)) | S | Vitest: corrupt JSON keeps a copy. A mocked `setItem` throw shows the banner. Blob over 3 MiB warns |
| 2 | **Backup v2:** share as `.txt`, accept `.txt` on import, Restore on first screen, `lastBackupAt`, calm nudge | `.json` isn't shareable ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)). Eviction looks like a new install | M | Round-trip unit test. Device matrix: iOS 18.4, 26, 27 Home Screen, Chrome 156, Samsung, Firefox 159: `canShare` true, file reaches Files or Drive, restores identically |
| 3 | **`persist()` plus a storage status row, tied to the install nudge** | Home Screen drives the grant ([WebKit](https://webkit.org/blog/14403/updates-to-storage-policy/)) and exempts from ITP ([WebKit](https://webkit.org/tracking-prevention/)) | S | `navigator.storage.persisted()` via Web Inspector on iPhone in Safari vs Home Screen. Chrome DevTools > Application > Storage |
| 4 | **Service-worker hardening:** cache-first shell, keep previous cache, delta and resilient install, `vite:preloadError` | `[Local]` `dist/sw.js` is network-first with no timeout, and deletes old chunks. `addAll` fails on any bad response ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll)) | M | Playwright: a hung network route still boots in under 1 s. Offline test. Open old tab, deploy, lazy-load old chunk offline. One 500 doesn't kill install |
| 5 | **Fatigue-proofing:** 10 s Undo, "Recent actions" list, 400 ms double-tap guard, draft survives interruption | Attention lapses are the largest deficit ([Lim & Dinges](https://www.med.upenn.edu/uep/assets/user-content/documents/LimDinges2010MetaAnalysis.pdf)). New mothers' performance worsens over weeks ([Insana 2013](https://pmc.ncbi.nlm.nih.gov/articles/PMC3524545)) | S-M | Unit tests. Kill the app mid-form and resume. Hallway test: 5 tired parents, count missed Undos |
| 6 | **Bedside mode plus the 3 a.m. splash fix** | ≤10 lux for night tasks ([Brown 2022](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3001571)). `[Local]` manifest splash is cream | M | Contrast unit test on tokens (4.5:1 body, 3:1 large). Lux-meter app at 30 cm in a dark room. Launch on Android at night and film it |
| 7 | **Honest reminders:** "what's next" on open, `.ics` export, no web permission prompt, native plan | No server means no reliable timing ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API), [WebKit](https://webkit.org/blog/16535/meet-declarative-web-push/)) | S-M | Import `.ics` on iOS and Android, confirm the alarm fires. Unit test RFC format. Copy review |
| 8 | **Search:** MiniSearch, canonical UK/US map, two-pass, safety pinning, no dead ends | `[Local]` "diaper" is wrong today in plain fuzzy. 5.9 KB gzip, sub-ms | M | Golden-query test list (the queries in the search section, plus "choking" returning the safety card first). INP on low-end phone while typing. Zero-result screen review |
| 9 | **Read to me:** chunked, local voice, step mode, no cloud voices | 95.91% support ([caniuse](https://caniuse.com/speech-synthesis)). Hands-busy use case | M | Airplane mode on all target phones. 40 s text. Cancel mid-speech. Leave screen. Mute switch on iOS. Android WebView separately |
| 10 | **Print:** summary and activity cards, plus a `window.print()` device test | `@page size` iOS 18.2+ ([caniuse](https://caniuse.com/mdn-css_at-rules_page_size)). `[Local]` no print CSS | M | Print and Save-as-PDF from iOS Home Screen, Safari, Android Chrome, on A4 and Letter. Exactly one page. Dark mode on while printing. Art present |
| 11 | **Noise and music-box:** pre-rendered WAV, Media Session, low default, timer, placement guidance | Web Audio stops on lock ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/state)). Sound machines can be hazardous ([Hugh 2014](https://experts.mcmaster.ca/scholarly-works/1649352)) | L | 1-hour locked soak on iPhone and Android. Silent switch on. Pause 60 s then lock-screen play. Sound meter at 2 m. Listen for a loop seam |
| 12 | **Text scaling:** `text-scale` meta plus a 200% audit | Chrome 146 ([blink-dev](https://groups.google.com/a/chromium.org/g/blink-dev/c/0yp2ygJK5HE)). 20-37% resize text ([Appt](https://appt.org/en/stats/font-size), [Tumath](https://www.joshtumath.uk/posts/2026-07-02-lets-fix-the-webs-text-size/)) | M | Android at largest setting. iPhone at AX sizes. e2e overflow check at 320 px and 360 px, 200%. Check Capacitor WebView |
| 13 | **WCAG 2.2 pass:** 2.4.11, 2.5.7, 2.5.8, 3.2.6, 3.3.7 | [W3C](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/). Axe doesn't cover all of these | S | Add Playwright checks: focused element not under the dock. Each drag has a button. Manual keyboard pass |
| 14 | **`prefers-contrast: more`** across worlds | 96.22% ([caniuse](https://caniuse.com/mdn-css_at-rules_media_prefers-contrast)). `[Local]` absent | S | Axe with emulated `prefers-contrast`, in every world. iPhone Increase Contrast by eye |
| 15 | **Motion tokens:** `linear()` springs, Router `viewTransition`, reduced motion means replaced, not removed | iOS 17.2+, 18+ ([caniuse](https://caniuse.com/mdn-css_types_easing-function_linear-function), [caniuse](https://caniuse.com/view-transitions)). [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) | S-M | iPhone and low-end Android side by side at 60 fps in DevTools. Reduce Motion on keeps fades. Interrupt tests |
| 16 | **Honest iOS haptics:** native `switch` for toggles, optional real-tap overlay for ticks | `vibrate` is missing on iOS ([caniuse](https://caniuse.com/vibration)). `[Local]` `platform/index.ts:32` | S | Feel test on iOS 17.4, 26.4, 26.5+, 27. Off when Settings or system haptics are off |
| 17 | **Performance budget:** `content-visibility`, JSON content packs, age-based precache, throttled CI | [Russell](https://infrequently.org/2025/11/performance-inequality-gap-2026/), [V8](https://v8.dev/blog/cost-of-javascript-2019), [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility) | M | INP under 200 ms on Galaxy A-series via `web-vitals` in dev. First install time on 9 Mbps. Bundle-size check in CI. Find-in-page and a screen reader still work |
| 18 | **Kid mode v1:** Now and Next routines, 128 px or larger targets, spoken labels, hold-plus-sum gate, Guided Access coaching | [NN/g](https://www.nngroup.com/articles/children-ux-physical-development/), [Apple](https://developer.apple.com/app-store/kids-apps/), [Apple Support](https://support.apple.com/en-us/111795) | L | Observe 5+ children per band (2-3, 3-5, 6-8): success without help, accidental exits. Gate defeat rate. Legal check |
| 19 | **RTL and Intl groundwork:** stylelint logical rule, convert 42 lines, `?dir=rtl` e2e, `firstDayOfWeek`, calendar helper, font-chunk plan | `[Local]` 42 physical lines. `getWeekInfo` Baseline ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo)). `Temporal` not on iOS ([caniuse](https://caniuse.com/temporal)) | M | Lint passes. All screens at `?dir=rtl` free of overflow. Golden tests for `fa-IR`, `ar-SA`, `he`, `en-GB` on Chrome, Safari, Firefox |
| 20 | **Small store and copy fixes:** drop `"kids"` from manifest categories, no "for kids" in metadata, no dB or sleep promises, Settings backup wording | 5.1.4 and 2.3.8 ([Apple](https://developer.apple.com/app-store/review/guidelines/)) | XS | Review listing and manifest against 1.3, 2.3.8 and 5.1.4 |

### Inferences
- **Do first (1-4, about 1 week):** they prevent the only failure parents never forgive, and they don't add visible UI risk.
- **Quick wins worth bundling with them:** 13, 14, 16 and 20 are small and separate.
- **Device-test day before committing to 10 and 11.** Half a day with an iPhone on iOS 18.4, 26 and 27, plus a low-end Android, settles the open unknowns:
  - `window.print()` from a Home Screen app
  - `<a download>` from a Home Screen app
  - Lock-screen play after a 30 s pause
  - Timers and `ended` while locked
  - `.ics` open
  - Speech with the mute switch on
  - Haptics on 26.5+
  - `-apple-system-body` at large sizes
  - `persist()` result in each mode
- **Sequencing with RESEARCH-2 §4.2:** do 1-3 regardless of when SQLite arrives. They still apply afterwards, and the backup format is what eventually carries PWA users to the native app.
- **Things to deliberately not build:** a web reminder feature that pretends to be reliable, voice commands in the PWA, an SVG sprite, a PDF library in the core bundle, a dB meter or dB promises, or an in-app "lock" that claims to keep a child inside the app.

### Gaps
- Effort figures are my estimates. I read only part of the code.
- Ranking blends sourced severity with my judgement. There is no user research behind the order. A parent interview round could reorder 5-12.
- **Sources I could not reach:** web.dev and developer.chrome.com (403), PMC and PubMed (bot and cookie checks), publications.aap.org (403), Apple HIG and Material (empty pages), Ethnologue (403), parenttext.org (DNS), bridgingapps.org (403 on direct fetch). The shared search budget was exhausted before the night-use, low-literacy, reach-zone and language-demand questions could be searched, so **those four rest on fewer sources, and are the first to revisit** with a follow-up search session.
- Anything marked "(digest)" should be opened and re-checked before being quoted in a final report.
