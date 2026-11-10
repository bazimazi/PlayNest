# PlayNest

**Play together. Grow together.** A private, offline-first app for parents of children from birth to 12. It answers
one question, *what shall we play right now?*, then gets out of the way so they can play. And when things get hard, help is one
tap away, with no signal needed.

> **Not ready for families yet.** No clinician, native speaker, community member or parent has read the 1.5 content, no phone number has
> been test-called, and nothing has run on a real phone. [docs/REVIEW-1.5.md](docs/REVIEW-1.5.md) lists exactly what must happen first.

## What's inside

Four tabs, each answering one question:

| Tab | Question | What you get |
|---|---|---|
| **Today** | What shall we play right now? | Mood (happy / energetic / fussy / sleepy), which changes the sky. **One big pick** with a plain reason; swipe or tap *Another idea*. One-tap chips for what's going on (5 min, no toys, car, bath, rainy, stormy, very hot…), which change the pick and take unsafe ideas out. *Let them choose* from three pictures. Then two alternatives, today's plan, the garden, one extra card at most, and a row of more |
| **Play** | What else is there? | **Ideas:** 800+ games, with search, filters and collections. **Stories:** folk tales to read or tell, from the language's own culture. **Songs:** lullabies and rhymes from the language's own culture, with a music-box guide. **Week:** two ideas a day across 8 areas of development. Plus talk cards, picture routines, and celebrations you choose |
| **Grow** | How are they growing? | A **garden** where every game plants a flower, pressed flowers that only grow, firsts to keep, this stage, a **one-question-at-a-time milestone check-in** (CDC checklists to age 5, corrected age for premature babies), a one-page summary for a visit, and the journal |
| **Learn** | What should I know? | 50 short guides on shelves by topic, this stage with your child, and search across the whole app |

**Help** sits top right of every tab, beside the child's avatar:

- **In an emergency:** the local number, one tap away, and 25 first-aid cards. Choking and CPR steps follow one named body per region and never blend them.
- **A hard moment:** 41 situations with 3 steps and words to say, written for the child's age, and a game to practise later.
- **When crying won't stop:** what helps, when to phone, and how to step away, with a timer.
- **When it's too much:** an unscored, unstored check-in, helplines in 36 countries, and crisis screens that reach a person in two taps.

Plus:

- **Play mode:** a "Before you start" card, one big step at a time, read aloud if your hands are full, then a new flower blooms.
- **Kid mode:** picture routines a child follows alone: big pictures, no reading, no score, no way to fail.
- **Play together:** games that fit siblings of different ages. For big gaps, "big kid leads" games.
- **Make it work for us:** on every game, ideas by barrier ("too much", "hard to hear"). It names the barrier, never the child.
- **Your data is safe:** no account, no server, no tracking. A damaged save is kept rather than overwritten, failed saves are announced, and a copy can go anywhere your phone can share to.
- **The night screen:** black, one warm colour, no pictures and no movement.
- **Everywhere:** installable PWA, fully offline, light and dark themes, and Capacitor-ready for the App Store and Google Play ([docs/NATIVE.md](docs/NATIVE.md)).
- **Accessible:** WCAG 2.1 AA, keyboard and screen-reader friendly, reduced motion, raised contrast and 200% text are all tested.

| Document | What it covers |
|---|---|
| [docs/REVIEW-1.5.md](docs/REVIEW-1.5.md) | **What a person must check before release:** clinicians, test calls, native speakers, communities, devices, families |
| [docs/RESEARCH-3.md](docs/RESEARCH-3.md) | The newest research: what to improve next, and corrections to the earlier research. Full notes are in `research_notes/` |
| [docs/EXPANSION.md](docs/EXPANSION.md) | **The plan for PlayNest 2:** from a play app to a full parenting companion for ages 0–12, with modules, architecture and a phased roadmap |
| [docs/RESEARCH-2.md](docs/RESEARCH-2.md) | Research for the expansion: the market, evidence by domain, mobile UX and technology |
| [docs/DESIGN.md](docs/DESIGN.md) | The design system: components, word budgets, motion and accessibility rules for new screens |
| [docs/RESEARCH.md](docs/RESEARCH.md) | The original research behind play |
| [docs/PLAN.md](docs/PLAN.md) | The v1 product and technical plan, and the reasoning behind each release |

## Run it

Requires Node 22+.

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & deploy

```bash
npm run build      # type-checks, then builds to dist/
npm run preview    # serve the production build locally
```

`dist/` is a static site (hash routing, relative paths). Upload it to any static host: GitHub Pages, Netlify,
Cloudflare Pages, S3 and so on. The service worker is generated at build time and precaches the whole app for offline
use. When a new version is deployed, open apps show "PlayNest has been updated — Reload".

For iOS and Android builds, see [docs/NATIVE.md](docs/NATIVE.md) (`npm run android`, `npm run ios`).

## Test

```bash
npm test           # unit tests + content validation (Vitest)
npm run typecheck
npm run e2e        # build, then drive every screen in a phone-sized browser + axe accessibility audit
```

- **Unit and content tests:**
  - every activity is checked against the schema rules in `src/data/validate.ts` (age ranges, safety notes for
    under-3s, a water-safety note on any game that puts a child in the bath or near a bowl of water, no screens, unique
    ids and titles, 2–4 variations, emoji that render on older devices);
  - every age must have enough activities and daily tips, with every development area covered;
  - tips, guides and sources are validated, and the recommendation, plan, play-together and insight logic is tested.
- **Packs:** every pack is checked against `src/data/validatePacks.ts`, and `src/lib/content-links.test.ts` guards the safety rules (choking and CPR never share steps, no abdominal thrusts for a baby, no phone numbers in first-aid text, festival games stay out of everyday picks).
- **End-to-end (`e2e/smoke.mjs`):** uses an installed Chrome or Edge (or `CHROME_PATH`), so there's nothing to download.
  - It walks every screen, including help, first aid, crisis screens, kid mode, printing and the night screen.
  - It checks offline help, a damaged save, restore and undo, every age to past 12, and no overflow at 200% text.
  - It fails on console errors, horizontal overflow, or serious or critical WCAG A/AA violations.
  - Screenshots land in `e2e/screenshots/`.
- **One screen at a time:** `node e2e/look.mjs /help /stories` takes screenshots. `AGE=30`, `BEDSIDE=1`, `BIGTEXT=1` and `AUDIT=1` change what it checks. In Git Bash, set `MSYS_NO_PATHCONV=1`.
- **Content tools:**

```bash
npx vite-node scripts/content-stats.ts   # activities per age × area, energy, setting and tag; tips per age
npx vite-node scripts/safety-scan.ts     # hazards (small parts, cords, balloons, honey…) mentioned without a safety note
```

## Languages

English and Persian (فارسی). Persian runs right to left, with Persian digits, the Persian calendar for dates and birthdays, and a week
that starts on Saturday. The language follows the phone until a parent picks one on the first screen or in Settings.

**Each language uses only its own culture.** Stories, songs, festivals and traditional games carry the language whose culture they come
from, and appear only in it:

- **Persian** has Persian stories from folk tradition, the Shahnameh, Rumi, Saadi, Attar and Nezami; Iranian lullabies and rhymes;
  Iranian games, crafts and pastimes; Persian proverbs, poetry and riddles; and 11 Iranian days, from Nowruz and Yalda to Sadeh, Tirgan
  and Ferdowsi Day.
- **English** has English folk tales, nursery rhymes and songs, and its own days.
- **Neither borrows from the other or from anywhere else.** Play ideas, guides, tips, help and first aid belong to no one culture and are
  in both, translated.

All 50 guides and every daily tip are in Persian, with 425 games (every one that starts in a baby's first year) and 39 festival games,
26 stories and 21 songs. Persian shows only what has been translated. The Persian added for this has not yet been read by a Persian
speaker: see section 8 of [REVIEW-1.5.md](docs/REVIEW-1.5.md).

How it works, how to add a language, and the house style for Persian: [docs/I18N.md](docs/I18N.md).

```bash
npm run e2e:fa                           # every screen in Persian: direction, overflow, axe, English left behind
npm run i18n -- status                   # how much of each collection is translated, and what has gone stale
```

## Project layout

```
docs/                 research brief, plan, native (iOS/Android) guide
e2e/                  Playwright smoke test + accessibility audit
public/               manifest, icons (`node scripts/make-icons.mjs`), illustrations (`node scripts/make-emoji.mjs`)
scripts/              content statistics, safety scan, and the icon and illustration generators
src/assets/fonts/     self-hosted Caprasimo, Nunito, Vazirmatn and Lalezar
src/data/             content: activities/, milestones, guides, tips, sources, schema + validator
src/lib/              pure logic: age & corrected age, recommendations & reasons, weekly plan, play together, insights, colour worlds
src/platform/         device features (haptics, keep-awake, share, install) — the one seam for native plugins
src/store/            persisted state (localStorage) with migrations; weekly-plan hook
src/components/       shared UI
src/pages/            screens
src/styles/app.css    design tokens (light/dark) and styles
capacitor.config.ts   native shells
```

## Adding activities

Add an object to the file for the age it starts at: `infant` (0–11 months), `toddler` (12–35), `preschool` (36–59),
`school` (60–95) or `older` and `older-make` (96+). World games go in `world`, weather and routines in `seasons`, and festival
games in `celebrate` (these appear only to families who chose that celebration). Follow the `Activity` type in `src/data/types.ts`, including 2–4 `variations`, then run `npm test` and
the safety scan. Ids are stored in users' journals, so never change or remove an existing id. If you use an emoji the
app hasn't used before, run `node scripts/make-emoji.mjs` to add its artwork (`npm test` tells you if you forget).

## Credits

Illustrations: [Fluent Emoji](https://github.com/microsoft/fluentui-emoji) by Microsoft (MIT). Fonts: Caprasimo, Nunito, Vazirmatn and Lalezar (SIL Open Font License). Some coding games draw on CS Unplugged (CC BY-SA 4.0). Emergency numbers contain public
sector information licensed under the Open Government Licence v3.0.

## Disclaimer

PlayNest offers ideas for play and general information. It is not medical advice, its first-aid cards do not replace training or
a call for help, and milestone checklists are not a developmental screening. If you have any concern about a child, talk to a doctor.
