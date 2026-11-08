# PlayNest — Implementation Plan

> *Play together. Grow together.* A private, offline-first app that gives parents the right game for their
> child's age and mood, explains the science in one sentence, and then gets out of the way so they can play.

Research foundation: [RESEARCH.md](RESEARCH.md).

---

## 1. Product vision

### Who it's for
- Parents and caregivers of children **0–8 years** (grandparents, nannies, early-years educators too).
- Busy, often tired, often holding a baby with one hand. Many have more than one child.
- They want **ideas that fit the moment** ("I have 10 minutes, we're stuck indoors, he's fussy"), reassurance
  that they're doing enough, and to understand *why* an activity helps.

### Design principles (derived from the research)
1. **Glance, then play.** Any activity is understandable in ~15 seconds. The phone goes down; the child is the screen.
   No screen-based activities for children; no nagging notifications.
2. **Serve & return everywhere.** Every activity has "things to say" prompts that model back-and-forth talk.
3. **Follow the child.** Recommendations adapt to age (corrected for prematurity), current mood/energy, what the
   child loved, and what developmental areas have had less play lately.
4. **Grow with the child.** Each activity has *easier* and *harder* variations (iterative play).
5. **Science you can trust, in plain words.** Each activity carries a "why it helps" line; guides cite sources.
   Milestones follow the CDC checklists and say clearly they are not a diagnosis.
6. **Safe by default.** Safety notes on every relevant activity; choking/water rules surfaced for under-3s.
7. **Private by design.** No account, no server, no tracking. Data lives on the device; export/import backup.
8. **Inclusive & global.** Games from 15+ cultures; encourage home languages; works for every family shape.

---

## 2. Features (v1 scope)

| # | Feature | What it does |
|---|---|---|
| F1 | **Child profiles** | Name, birth date, optional "born early (weeks)" → corrected age until 24 months, avatar emoji + colour. Multiple children; quick switcher. |
| F2 | **Today** (home) | Greeting + child's age; *"How is {name} right now?"* mood chips (Alert & happy / Full of energy / Fussy, needs calm / Winding down) that steer energy level; **3 personalised picks**; quick-context chips (5 minutes, No toys, Car, Bath, Mealtime, Bedtime, Outdoors, Waiting); **Surprise me**; daily science tip; this week's **Play Garden**; next milestone check prompt. *v1.1:* **New at this age** carousel; **Bring back a favourite** with a new twist. |
| F3 | **Explore** library | 520+ activities (v1.1), paged 40 at a time; **Not tried yet** filter; "tried X of Y for this age" progress; "Played N×" badges. Search; filters for age band (defaults to child), development area, setting, energy, duration, "no materials", group-friendly; curated collections (Songs & rhymes, Games from around the world, Everyday moments, Calm-down, Tummy time, Brain-building games, Reading together, Outdoors & nature, Pretend play, Art & making, Little scientists; v1.1 adds Kitchen play, Water play, Build it, Party games). |
| F4 | **Activity detail** | Summary, age range, duration, energy, materials, steps, things to say, why it helps (with source), easier/harder, **more ways to play** (v1.1), safety, origin (for world games), favourite, "Play now"; after a play, "Next time, try…". |
| F5 | **Play mode** | Full-screen, large type, one step at a time, optional gentle timer, "put your phone down" nudge; finish → rate reaction (Loved it / Liked it / Not today / Too hard / Too easy) + optional note → saved to journal; suggests the next twist to try (v1.1). |
| F6 | **Weekly plan** | Auto-generated 7-day plan, 2 activities/day (one active, one calm), covering all 8 development areas, no repeats, respects age; swap any item; tick off; regenerate; steers away from the previous plan (v1.1). |
| F7 | **Milestones** | CDC checklists for 2 m–5 y; default to the checklist for current (corrected) age; Yes / Not yet / Not sure per item; progress per area; "Not yet" items link to related activities; clear *act early* guidance and CDC link. |
| F8 | **Journal & insights** | Timeline of play sessions and free-form "moments"; per-week minutes and sessions; streak; **development balance** chart across the 8 areas; most-loved activities; different games explored (v1.1). |
| F9 | **Play together** | Pick 2+ children → activities that fit everyone's ages (overlapping ranges, group-friendly first) with tips for adapting roles for the older/younger child. |
| F10 | **Learn** guides | Short evidence-based guides: Serve & Return; Talk, Read, Sing (dialogic reading); Tummy time; Screens by age; Safe play; Executive function; Learning through play; Risky play & rough-and-tumble; Premature babies & corrected age; Bilingual families; Games with numbers & blocks. v1.1 adds Big feelings & tantrums; Outdoor & nature play; Play on the go; Siblings; Play when you're running on empty; Independent play & boredom. |
| F11 | **Settings** | Manage children; theme (system/light/dark); export/import JSON backup; erase all data; about, disclaimer, sources. |
| F12 | **Installable & offline** | PWA manifest + service worker; works with no connection after first load. |

### Out of scope for v1 (roadmap)
Cloud sync between partners' phones, push reminders, photo journal, audio for lullabies, localisation (structure
ready), native store builds (Capacitor wrapper), educator/classroom mode, printable activity cards.

---

## 3. Information architecture

```
Bottom nav:  Today | Explore | Plan | Growth          (v1.2 — v1 had 5 tabs + Learn in the header)
Header:      logo · child switcher · Settings
Routes (hash router, static-host friendly):
  #/                       Today
  #/welcome                Onboarding: intro → add your child
  #/explore                Library (query + filter state in URL); ?view=guides shows the guides
  #/activity/:id           Activity detail
  #/play/:id               Play mode (Before you start → steps → finish)
  #/plan                   Weekly plan
  #/growth                 Garden, milestone status, balance, favourites, journal
  #/milestones             Checklists; ?checkin=1 = one-question-at-a-time check-in
  #/together               Play together
  #/learn/:slug            Guide
  #/settings               Children, install, theme, backup, about
  #/journal, #/learn       Redirects kept for old links
```

---

## 4. Content model

### Development areas (8)
| Key | Label | Covers |
|---|---|---|
| `movement` | Moving | gross motor, balance, coordination |
| `hands` | Little hands | fine motor, hand-eye |
| `language` | Talking & listening | receptive/expressive language, early literacy |
| `thinking` | Thinking | cognition, problem-solving, early math & science |
| `feelings` | Feelings & friends | social-emotional, attachment, empathy |
| `senses` | Senses | sensory exploration & processing |
| `imagination` | Imagination | pretend play, art, music-making, creativity |
| `selfcontrol` | Focus & self-control | executive function: working memory, inhibition, flexibility |

### Activity schema (`src/data/types.ts`)
`id, title, emoji, summary, minMonths, maxMonths, domains[1–3], durationMin, energy (calm|moderate|active),
settings[], materialsLevel (none|household|craft|toy), materials[], groupFriendly, steps[], talk[], whyItHelps,
easier?, harder?, variations[2–4] (required by the validator since v1.1), safety[]?, origin?, tags[]?, sources[]?`

### Age bands
0–3 m · 3–6 m · 6–9 m · 9–12 m · 12–18 m · 18–24 m · 2–3 y · 3–4 y · 4–5 y · 5–6 y · 6–8 y

### Content volumes
| File | Ages (by start age) | v1 target | v1 | v1.1 |
|---|---|---|---|---|
| `activities/infant.ts` | 0–11 m | ~60 | 65 | 154 |
| `activities/toddler.ts` | 12–35 m | ~55 | 59 | 127 |
| `activities/preschool.ts` | 36–59 m | ~50 | 56 | 118 |
| `activities/school.ts` | 60–96 m + world games | ~50 | 79 | 129 |
| Activities in total | | | 259 | 528 (56 world games, 1,553 variations) |
| `milestones.ts` | CDC 2 m–5 y | all checklists | 12 checklists, 159 items | unchanged |
| `guides.ts` | — | 11 guides | 12 | 18 |
| `tips.ts` | — | ~40 daily tips | 43 | 215 (≥ 60 eligible at every age) |
| `sources.ts` | — | citation registry | 20 | 49 |

Content rules: no screens for the child; every activity under 36 months checked for choking/water/cord hazards;
gender-neutral language; culturally attributed only when confident; plain words (reading age ~12).

---

## 5. Recommendation logic (pure, unit-tested — `src/lib/`)

- **Age** (`age.ts`): chronological months/days; corrected age = chronological − weeksEarly (only when
  weeksEarly > 0 and chronological < 24 months); friendly labels ("5 months, 2 weeks", "3 years, 4 months").
- **Eligibility**: `minMonths ≤ age ≤ maxMonths`.
- **Today's picks** (`recommend.ts`) — score each eligible activity:
  - *Area need*: areas with fewer sessions in the last 14 days score higher (balance).
  - *Novelty*: penalise activities done in the last 3 days; bonus if never tried.
  - *Preference*: bonus for "Loved it" & favourites; penalty for "Not today"/"Too hard" recently.
  - *Mood*: energetic → active, fussy → calm/calm-down tag, winding down → calm/bedtime, happy → any.
  - *Fit*: prefer activities centred on the child's age (not at the edge of range).
  - Deterministic daily seed (child id + date) for tie-breaks so picks stay stable through the day; "Shuffle" bumps the seed.
  - Choose top 3 with **distinct primary areas**.
- **Weekly plan** (`plan.ts`): 14 slots; greedy fill guaranteeing every area appears ≥1×; each day = one
  active/moderate + one calm; no duplicate activities; deterministic per week + regenerate seed.
- **Play together** (`together.ts`): intersection of age ranges across children; group-friendly first; else
  activities where every child is within range ± a small tolerance flagged "adapt".
- **Insights** (`insights.ts`): sessions/minutes per week, streak of days with play, area balance, top loved.

---

## 6. Technical architecture

| Concern | Choice | Why |
|---|---|---|
| Platform | **PWA** (React 18 + TypeScript + Vite) | Runs on any phone/desktop, installable, offline; trivially wrapped by Capacitor later. |
| Routing | react-router (HashRouter) | Works on any static host without rewrites. |
| State | Tiny custom store on `useSyncExternalStore`, persisted to `localStorage` with schema version + migrations | No dependency, synchronous, testable. |
| Styling | Hand-written CSS with design tokens (CSS variables), light/dark themes | Small bundle, full control, no framework lock-in. |
| Charts | Hand-rolled SVG (balance bars, play garden) | No chart dependency. |
| Offline | Hand-written service worker (cache-first app shell, versioned cache) + web manifest | No plugin dependency. |
| Tests | Vitest — age, recommendations, plan, together, store migrations, content validation | Logic and content integrity. |

### Folder layout
```
src/
  data/        types.ts, sources.ts, activities/*.ts, milestones.ts, guides.ts, tips.ts, domains.ts
  lib/         age.ts, recommend.ts, plan.ts, together.ts, insights.ts, random.ts, dates.ts
  store/       store.ts (state, actions, persistence, migrations)
  components/  ActivityCard, DomainChip, ChildSwitcher, BottomNav, Header, PlayGarden, BalanceChart, Sheet, Icon…
  pages/       Today, Explore, ActivityDetail, PlayMode, Plan, Milestones, Journal, Together, Learn, Guide, Settings, Welcome
  styles/      tokens.css, base.css, components.css
public/        manifest.webmanifest, sw.js, icons
```

### Persisted state (v1)
```ts
{ version: 1,
  children: Child[],                 // id, name, birthDate, weeksEarly, emoji, color
  activeChildId: string | null,
  sessions: Session[],               // id, childId, activityId, date, minutes, reaction, note
  moments: Moment[],                 // id, childId, date, text
  favorites: string[],               // activity ids
  milestones: Record<childId, Record<milestoneId, 'yes'|'notyet'|'unsure'>>,
  plans: Record<childId, { weekStart: string, seed: number, items: PlanItem[] }>,
  settings: { theme: 'system'|'light'|'dark', shuffle: number } }
```

---

## 7. Visual design

- Warm, calm, "nursery morning" palette: cream background, deep ink text, one accent per development area.
- Rounded system font stack; large tap targets (≥44 px); generous spacing; mobile-first, max-width column on desktop.
- Emoji as friendly, zero-dependency illustrations; inline SVG for nav icons.
- **Play Garden**: each session this week plants a flower coloured by its development area — a gentle, non-competitive
  motivator instead of points and badges.
- Accessibility: semantic landmarks, labelled controls, visible focus, `prefers-reduced-motion`, AA contrast in both themes.

---

## 8. Build sequence

1. Scaffold Vite + React + TS; tokens & base styles.
2. Types, sources registry, content validator tests.
3. Content authored in parallel (four age-band files) against the schema + validator.
4. Store + persistence + migrations; age/recommend/plan/together/insights libs with tests.
5. Shell: header, child switcher, bottom nav, routing, onboarding.
6. Pages: Today → Explore → Activity → Play mode → Plan → Milestones → Journal → Together → Learn → Settings.
7. Milestones, guides and daily tips content.
8. PWA manifest, icons, service worker.
9. Verification: type-check, unit tests, content validation, production build, browser smoke test of every route.
10. README with run/build/deploy instructions.

---

## 9. Plan review — gaps checked

| Question | Resolution |
|---|---|
| Does it work for preemies? | Corrected age until 24 m drives activities and milestone checklists; both ages shown. |
| What if a parent ticks "Not yet" on milestones? | Calm copy: every child develops at their own pace, *but* the CDC advises acting early — talk to your doctor; link to CDC. Related activities are offered, never framed as "treatment". |
| Is the app itself adding screen time? | Play mode encourages phone down; activities never use screens; Learn guide on screens by age; no notifications. |
| Multiple children? | Profiles + switcher + Play together. |
| Data loss (a complaint about competitors)? | Versioned schema with migrations, export/import backup, no forced updates of data. |
| Offline / low connectivity (global audience)? | PWA, all content bundled, no external fonts or CDNs. |
| Safety? | Validator requires safety notes on under-3 activities that use small objects, water or cords; Safe play guide. |
| Cultural respect? | Origins only where confident; adaptations noted (e.g. gentle blanket "toss" only as a low swing). |
| Older kids (5–8)? | Card/board/strategy games, outdoor rule games, world games, maker & science activities. |
| Evidence honesty? | "Why it helps" lines are phrased in proportion to evidence; guides cite sources; correlational findings described as such. |

---

## 10. Release 1.1 — staying fresh over months of use

**Problem.** A family uses PlayNest daily for months or years, but v1 had only 17 activities for a 1-month-old,
36 for a 15-month-old and ~80 for 6–8 year olds (30 of them world games). Daily tips repeated every 3–4 weeks, and a
favourite game had nothing new to offer the tenth time.

**Content (measured with `scripts/content-stats.ts` and filled where thin).**
- **Activities:** 259 → 528, written to a gap list per age: primary area, energy, setting and tag counts.
  - Newborns: 17 → 43 ideas at 1 month (36 new start at 0–2 months, including play for an exhausted parent lying
    down or feeding).
  - Second year: 36 → 94 at 15 months, with feelings, pretend and reading games added.
  - 3½-year-olds: 60 → 107 at 42 months.
  - 6–8 years: ~80 → 131–147, adding imagination, bath, bedtime, car and card games.
  - World games: 30 → 56, including baby and toddler rhymes from Korea, Japan, China, Mexico, Russia, Brazil,
    Germany, India and Chile.
- **Variations:** every activity has 2–4 "more ways to play" (1,553 in all). These are fresh twists at the same
  level, distinct from easier/harder.
- **Review of existing content:** all 259 v1 activities were re-read. Fixes covered safety notes (bath settings,
  small parts, choking foods), British spelling, evidence wording ("studies have found it can…") and unverifiable
  claims about world games.
- **Tips and guides:** tips 43 → 215, so each age has at least two months without repeats. Six new guides were
  added, and the two thinnest v1 guides were rewritten. The board-game claim was corrected to match its cited
  study: five sessions, gains in comparing numbers.

**Features that use the larger library.**
| Feature | How |
|---|---|
| More ways to play | Shown on the activity page; the finish screen suggests the next one ("Next time, try…"), rotating with each replay (`nextTwist`). |
| Bring back a favourite | Today surfaces a loved, still-age-appropriate game not played for ≥ 10 days, with the promised twist (`favouriteToRevisit`). |
| New at this age | Today lists untried activities whose range started in the last 2 months (`newlyEligible`). |
| Not tried yet / progress | Explore filter, "Played N×" badges, "tried X of Y for this age"; Journal shows games explored (`playCounts`). |
| Fresh weekly plans | Activities in the plan being replaced are penalised, so consecutive weeks differ unless an area has no alternative. |
| Daily guide rotation | Today cycles through every age-appropriate guide (v1 only ever showed five). |
| Bundle | Each content band is its own chunk (largest ~90 kB gzip). Code-only updates don't re-download content. |

**Quality gates added.**
- Validator: 2–4 variations of ≤ 220 characters, included in the no-screens check.
- Tests:
  - unique titles across all files;
  - ≥ 35 activities at every month from 0 to 96;
  - ≥ 60 tips at every month;
  - tips, guides and sources validated.
- `scripts/safety-scan.ts` flags hazards mentioned without a safety note (honey under 12 months, choking foods,
  balloons, magnets, button batteries, cords, small parts, knives and heat). Reviewed false positives are listed in
  the script, so new flags stand out.
- The Playwright smoke test (21 steps) covers every new feature at phone size.

**Still worth doing.**
- Have a child-development professional review the new content, especially world-game details and the safety
  calls each writer flagged.
- Seasonal suggestions (needs a hemisphere setting).
- Printable cards.

---

## 11. Release 1.2 — simpler to follow, ready for every platform

**Audit (screenshots of every screen at phone size, read as a tired parent with one free hand).**

| Finding | Why it mattered |
|---|---|
| Today was an 11-section feed: 3 equal picks, 2 carousels, quick-filter chips, tip, plan, garden, milestones, guide | The one job — *what do we play now?* — competed with everything else; no reason was given for any pick |
| 5 tabs plus 3 header icons (child, lightbulb = Learn, gear) | Learn was hidden behind an ambiguous icon; Journal and Milestones both answered "how are they growing?" |
| Activity page: safety came after nine other sections | Safety must be read *before* playing |
| Milestones: 13+ statements × 3 buttons on one screen | Felt like a test; easy to abandon |
| Play together: a 5-month-old and a 4-year-old got "0 fits everyone… try the ideas below" — and nothing below | Wide sibling gaps are common; a dead end |
| New siblings got the same avatar; Welcome made you scroll past a feature list to the form (and said "200" games) | Small papercuts that make an app feel unfinished |
| No keep-awake, swipe, haptics, share, install prompt or update notice | Missing basics of a native-feeling app |

**Design decisions.**
- **Today = one decision.** Mood → one big pick with an honest one-line reason (`pickReason`: mood fit, loved before,
  favourite, new at this age, an area that has had less play, something new), then **Let's play** (straight into play
  mode) and **Another idea** (cycles through 9 ranked ideas, then reshuffles). Below: two alternatives, today's plan as
  a checklist, favourites to bring back, ideas new at this age, a tip, and three "keep growing" links. Everything
  else moved to its home tab.
- **Four tabs.** Today · Explore (games + guides) · Plan · Growth (garden, milestone status, balance, favourites,
  journal). No nested tabs anywhere.
- **Safety before steps.** The activity page opens with fact pills and **Before you start** (materials + safety);
  "Make it easier or harder" and "More ways to play" fold away. Play mode shows the same card first whenever there is
  something to gather or watch for, so going straight from Today to play never skips safety.
- **Milestones as a conversation.** "Does Noor do this?", one statement at a time, big Yes / Not yet / Not sure, skip,
  back, progress; a summary with the CDC act-early guidance and practice ideas for any "not yet" areas.
- **Forgiving actions.** Deleting a journal entry is instant with **Undo** (restores the exact entry), instead of a
  blocking confirm dialog.
- **Play together never dead-ends.** "Big kid leads" offers group-friendly games for the youngest that the older
  child has outgrown, ranked by how well a child can run them (sibling-themed, songs, rhymes, pretend first; meals,
  baths and car seats last).

**Cross-platform readiness.**
- `src/platform/` is the single seam for device features: haptics (Vibration API), keep-awake (Screen Wake Lock),
  share (Web Share → clipboard), install prompt capture, standalone/native detection. Native plugins replace these
  one function at a time (docs/NATIVE.md).
- Manifest: stable `id`, shortcuts (Play now, Plan, Milestone check-in). iOS/Android web-app meta tags.
- Service worker updates announce themselves with a **Reload** action; the worker is skipped inside a native shell.
- Install offered in Settings, and once (dismissible) on Today after two play sessions.
- Capacitor 8 configured (`capacitor.config.ts`, `npm run android` / `npm run ios`); native projects are generated
  with `npx cap add` on a machine with Android Studio / Xcode.

**Accessibility.** The end-to-end test now runs axe (WCAG 2.1 A/AA) on every screen. It found and we fixed: text
contrast below 4.5:1 (`--ink-3`, links on tinted backgrounds, danger red), and `aria-pressed` on tab controls. Also
added a skip link, labelled icon buttons and `aria-current` on the active tab.

**Testing.** `npm run e2e` (in the repo now) builds the app, serves it, walks 22 flows in a phone-sized Chrome/Edge,
audits accessibility and saves screenshots. Unit tests cover pick reasons, the big-kid ranking and the helper mode.

**Next.**
- Upgrade the toolchain (Vite 8, Vitest 5, React Router 7) to clear dev-dependency advisories.
- Generate and test the native projects on real devices; add the native plugins listed in docs/NATIVE.md.
- Localisation (UI strings first, then content), since many families play in their home language.
- Optional sync between two parents' devices (end-to-end encrypted, still no account required).
- Professional review of content and of the milestone check-in wording.

---

## 12. Release 1.3: a native app, not a web page

**Problem.** v1.2 worked, but it read like a website:
- a brand header on every screen;
- paragraphs explaining each section;
- list cards carrying a summary sentence;
- long feeds of equal-weight sections;
- page loads with no sense of place.

Parents asked for less reading and more doing.

**Research.** [RESEARCH-2.md §3](RESEARCH-2.md#3-mobile-ux-native-calm-low-text) covers Apple HIG, Material 3, NN/g,
and teardowns of Huckleberry, Headspace, Finch and Flo. It produced ten principles, word budgets, and specs for titles,
tabs, sheets, motion and haptics.

**What changed.**

| Area | Before | After |
|---|---|---|
| Navigation | Logo bar + 4 tabs (Today, Explore, Plan, Growth); Learn hidden in Explore | **Today · Play · Grow · Learn**. Plan is a segment of Play. The child's avatar (top right) opens the family sheet: switch child, add a child, play together, settings. |
| Titles | Page headings plus a sentence | Large titles that collapse into a blurred bar as you scroll; detail screens have a full-bleed hero with the bar floating over it |
| Movement | Every page faded in from the top | Pushed screens slide in, Back slides out and **restores the scroll position**, tabs cross-fade, and each tab **remembers where you were** |
| Today | Greeting, 4 two-word moods, a text-heavy pick, link list | One-word moods; a **swipeable hero card** (swipe or shuffle for another idea, pager dots); picture tiles; **widgets** (garden, milestones ring, week ring, together/learn) |
| Browsing | One-column cards with a summary | **Two-column picture tiles** (no summary), colour-tinted collection tiles, infinite scroll that keeps your place |
| Activity page | Text blocks | Hero art; four stat tiles (time, ages, energy, who); material chips; safety box; numbered steps; **speech-bubble prompts**; "Why it helps", "Easier or harder" and "More ways to play" folded into rows; a pinned Play bar |
| Grow | Paragraph-heavy cards | Garden plus a stat strip, a milestone ring card, balance with an ⓘ, a most-loved carousel, a grouped journal with **swipe-to-delete** and Undo |
| Sheets | Static modal | Slide up, **drag down to dismiss**, visible ✕, animated close |
| Settings | Cards of buttons | Inset grouped list with coloured glyphs, segmented theme picker |
| Forms | Stacked labelled inputs | Big tappable avatar, inline grouped fields, toggle, weeks-early stepper, live age preview |
| Onboarding | Feature list in sentences | Floating illustration, one-line value chips, two buttons |
| Copy | Explanations on screen | Moved behind ⓘ buttons; word budgets in [DESIGN.md](DESIGN.md) |

**Design system.**
- New components: `Page`, `Section`, `BottomBar`, `Sheet` (drag), `Segmented`, `ListGroup`/`ListRow`/`Glyph`, `Ring`,
  `SwipeRow`, `InfoButton`, `Carousel`, `ActivityTile`, `ActivityRow`, `HeroPick`, `ProfileButton`.
- Tokens in `rem` follow iOS Dynamic Type; there are fresh light and dark palettes.

**Testing.** The e2e test walks the new flows. It swipes a journal row to delete it, checks the Learn tab and the
profile sheet, and audits every screen with axe. All steps pass.

**Next.** See [EXPANSION.md](EXPANSION.md), the plan for growing PlayNest into a full parenting companion for ages 0–12.

---

## 13. Release 1.4: a picture book you can play

**Problem.** v1.3 worked well and read like a native app, but it looked like a settings app: white cards on beige, one
muted teal and heavy system fonts. Its main art was system emoji, which look different on every device and carry thick
black outlines on Windows. Nothing about it was a pleasure to open, for an audience doing something joyful.

**The concept.** Every screen is a colour world, art is cut paper, controls feel like toys, and playing grows a garden.
Rules for new screens are in [DESIGN.md](DESIGN.md).

| Area | Before | After |
|---|---|---|
| Art | System emoji on a soft gradient | **Bundled illustrations** (Fluent Emoji, flat) with a sticker edge, on a seeded cut-paper scene: colour from the area, pattern from the energy. The same on every device, and offline |
| Type | Heavy system font | **Caprasimo** for headings and **Nunito** for reading, self-hosted |
| Colour | Teal on beige everywhere | A **world** for each tab; yellow always means "do this". Today's sky follows the time of day, and picking a mood changes it |
| Company | None | **Pip**, a chick who reacts to moods, answers, empty states and onboarding |
| Today | Mood cards, a text-heavy hero, a grid of four widgets | Mood picker on the sky, a framed hero on a deck with a labelled "Another idea", the garden itself as a card, and a tip in Pip's voice. "Let's play" stays on the first screen, down to 360×640 |
| Reward | A toast | **A flower blooms** with confetti when a game finishes, then grows in the garden. A butterfly arrives at 3 plays and a bee at 6 |
| Grow | Dashboard: stat strip and bars | The garden fills the header with one plain sentence; ranked one-colour bars instead of bars with a misleading rounded number |
| Check-in | Tab bar on screen, "Does Noor… Smiles on their own" | A focused full-screen task, big answers in thumb reach, Pip reacting. "Have you seen Noor do this?" reads correctly with the CDC wording |
| Onboarding | Feature list and a form | Pip asks one question at a time, and the app shows how many games are ready as soon as it knows the age |
| Plan | Crowded rows that cut titles off; unlabelled coverage dots | "Swap" in words on its own line; "Covers 8 of 8 areas" in words |
| Safety | Alarm-red box | Clear, calm orange: visible without frightening |
| Tab bar | Grey outline icons | A floating dock with full-colour icons and a sliding pill in the current world's colour |
| Big screens | Phone column | Headers run full width, grids grow, and carousels wrap for mouse users |

**Testing.** The e2e test walks the new onboarding, audits every mood in both themes, fails on any missing asset, and
checks the main action is on the first screen at 390×844 and at 360×640. A unit test checks every emoji in the app has
bundled artwork.

**Next.**
- Have real parents try it. All of this was judged from screenshots and automated checks, not from watching people use it.
- Consider right-to-left layouts and translated copy: names in other scripts display well, but the interface is English only.
- Precaching adds about 320 small files on first load; if that proves slow on poor connections, combine them into a sprite.

---

## 14. Release 1.5: help when it's hard, and a companion to age 12

**Problem.** v1.4 looked and felt right, but on the screens it mattered most, it had nothing to offer. A parent at 3 a.m. with a screaming baby got a list of games. A tantrum in a shop got a mood called "Fussy". A choking child got
nothing at all. A child's Today screen went empty the day they turned 8. And a damaged save would silently wipe a family's data on the next write.

**Research.** Thirteen researchers covered competitor apps, mobile craft, hard moments, first aid, crying and parent wellbeing, games by world region, songs, folk tales, development by age, ages 8–12 and screens, inclusive play, and seasons and festivals. See
[RESEARCH-3.md](RESEARCH-3.md), which also corrects claims in the earlier research. Its most useful conclusion: adding is now the cheap part, and verified trust is what's scarce.

| Area | Before | After |
|---|---|---|
| Help | None | **A help button on every tab.** Emergency number one tap away, 25 first-aid cards following one named body per region, a crying helper with a step-away timer, unscored parent support with 36 countries of helplines, and crisis screens that reach a person in two taps. All offline |
| Hard moments | One guide | **41 situations** with 3 steps, words to say, why it helps, a game for later and when to get help, in age-specific versions from 1 to 12. Anything about danger is on the first screen with a call button |
| Ages | Empty after 8 | **To 12, and never empty after.** Games the child runs, independence in steps, 414 games past 8 |
| Today | Mood and a pick, plus long feed | Pruned to one decision: mood, pick, chips for what's going on, two alternatives, plan, garden, **one** extra card at a time, and a "More for Noor" row. Picks no longer repeat the plan |
| What's going on | Filters only in Explore | **Tap weather or place on Today.** It changes the pick and says why, and takes unsafe ideas out: no water play in a storm, no flames in a power cut. Nothing is looked up |
| Interests | None | "What's Noor into?" gently favours games about it, and says so honestly |
| Stories | None | **71 folk tales from around the world**, retold from scratch, with a "tell it yourself" outline so the phone can go down, and questions for afterwards. Tonight's story changes daily |
| Songs | Activities only | **A songbook of 45**: words, romanisation, meaning, actions, and a music-box guide that plays once, because a parent's voice is the point |
| Sounds | None | Soft noise generated on the phone, starting at the quietest level, with a timer and placement guidance |
| Talk cards | None | 232 open questions by age, for the table and the car |
| Routines | None | 12 picture routines to edit, and a **kid mode**: big pictures, no reading, no score, no way to fail, a hold-and-sum gate |
| This stage | None | 17 age cards: what's going on, what's usually fine, what's worth asking, what to try |
| Keepsakes | Weekly garden | **Pressed flowers** that only grow, and firsts to keep. The streak badge is gone, because the research ties streak loss to the angriest reviews |
| Inclusion | None | **"Make it work for us"** on every game: names the barrier, never the child. 13 guides on disability and family shapes |
| Festivals | None | 62 celebrations, **off by default**, chosen one by one, never guessed. Dates come from a reviewed table, because `Intl` gets Lunar New Year wrong |
| Search | Games only, exact words | Everything, with "diaper" finding "nappy" and typos forgiven. Emergency words always pin help first |
| Sharing | A link | The whole game in the message, so a grandparent needs no app. Print a game, or a one-page summary for a doctor's visit |
| Reading aloud | None | "Read to me" on steps, stories, guides and first aid, using the phone's own voice only |
| Night | Dark theme | A black, warm **night screen** with no pictures and no movement, set before first paint so it never flashes |
| Reminders | None | An honest line ("PlayNest can't remind you while it's closed") and a calendar file instead |

**Data safety, which came first.**

| Risk | Now |
|---|---|
| A corrupt save was replaced by an empty one on the next write | The damaged save is kept aside and can be rescued, and the app says so |
| Failed saves were swallowed | A banner stays until a save succeeds, and warns before storage fills up |
| A stray file could blank the app on restore | Files are checked, and a restore can be undone |
| Backups couldn't go through a share sheet | Shared as `.txt`, with Restore on the very first screen for a new phone |
| Browsers could clear data | Asks for persistent storage after a real save, and suggests a copy now and then, never at night |
| Another tab could overwrite newer data | Tabs now share changes |
| A bad connection could leave a blank screen | The app shell loads from the cache first |
| An update could delete a chunk an open tab needs | The previous version's cache is kept until the next update |
| One bad file failed the whole update | Only code is critical, unchanged files are reused, and failures retry |
| A broken screen went white | A friendly screen says data is safe and keeps help reachable |

**How the content was checked.**
- Every pack has a schema and a validator (`src/data/validatePacks.ts`).
- An independent reviewer read the safety content against its sources, found 25 issues, and all must-fix items were fixed. They included a script naming the wrong person in a bereavement card, screens that said "call" with no call button, and links that landed on a question instead of help.
- A second independent reviewer read the new code, reproducing most of its 31 findings in a real browser. The worst: updates left everyone one version behind (a corrected emergency number would have waited a release), a failed update could leave a white screen, a child could leave kid mode with the back button, and "erase all data" kept a full copy. All are fixed, and the update scenarios were re-run against the fix.
- `src/lib/content-links.test.ts` guards the rules that matter: choking and CPR never share one set of steps, no baby gets abdominal thrusts, no phone numbers in first-aid text, festival games never mix into everyday picks, and every hard moment leads to a real game.

**Testing.** 128 unit tests. `npm run e2e` walks 53 flows, audits every screen with axe (also on the night screen and with raised contrast), and checks offline help, a damaged save, restore and undo, kid mode's gate and network silence, every age to past 12, and no overflow at 200% text.

**What this release can't claim.** See [REVIEW-1.5.md](REVIEW-1.5.md). No clinician, lawyer, native speaker, community member, disabled reader or parent has read this content, no phone number has been test-called, and nothing has run on a real phone. The safety screens say so.

**Next.**
- Do [REVIEW-1.5.md](REVIEW-1.5.md) before anything else. The research argues that this, not more content, is now the most valuable work.
- Decide whether to build the care tracker at all (see §6 of that file).
- Persian is in (§16). Get a Persian speaker, and a Persian-speaking clinician for the safety screens, to read it before anything else is translated.
- The native shell for reminders and durable storage, then family voice recordings.

## 15. Better art, and a lot more movement

Asked for: better graphics, and especially more animations. Today had not to grow, so this adds no sections: everything here
changes how existing things look and move.

**Art.**
- Fluent Emoji's shaded set in place of the flat one, chosen by comparing the two on real scenes.
- Five new kinds of scene (meadow, clouds, forest, balloons, peaks), and every scene redrawn as layered paper with drawn shadows.
- Pip redrawn, with shading, feathers, proper feet and glossy eyes. The white edge is now part of the drawing.
- Illustrated corners for each world's header: a balloon in the sky, a shooting star at night, leaves on the breeze in the garden.
- A garden with four kinds of flower, grass, and butterflies and a bee that are really flying.

**Movement.**
- Pip hatches from an egg on the welcome screen, breathes, blinks, looks around, flaps when excited, and hops when tapped.
- A game's picture travels from its tile up into its page, and back again.
- The big picture on each screen is alive: the sticker floats, clouds drift, waves roll, stars twinkle. A tap makes it wiggle.
- Flowers grow stem first, then leaf, then head. A breeze goes through now and then.
- Confetti with real physics, thrown from both corners. Bursts of hearts, stars and petals on favourites, ticks and reactions.
- Talk cards flip. Play steps slide from the way you're going. Notes float up while a tune plays. Soothing sounds has a moon
  breathing at the pace of someone asleep. Kid mode bounces and throws stars. Cards rise into view as you scroll. Rings and bars
  fill in. A thin bar shows how far through a story you are.
- Springs on the tab bar, segmented controls, sheets, toasts and buttons.

**Less movement.** A new setting, alongside the device's own. It replaces rather than removes: see DESIGN.md.

**What it cost, and what was found.**
- *Download.* The shaded art is ten times the size: about 7.6 MB against 760 KB on disk, 1.26 MB against 356 KB compressed. An
  installed app goes from about 4 MB to about 11 MB. Worth it for the difference, and still far smaller than a native app, but
  it's a real cost on a slow connection. Art isn't marked critical, so it can't block an update.
- *Battery.* The first version was beautiful and expensive: with nobody touching the phone, the main thread was busy 39% of the
  time on Today and 100% on Learn (4x throttled). Chrome's own trace found why (see the rules in DESIGN.md). Reworked, those are 2%.
  This was measured on a desktop browser with the processor throttled, not on a phone.
- *A bug only a test could catch.* After hatching, the invisible egg was still lying over Pip, swallowing every tap.

**Testing.** `npm run e2e` now walks 62 flows. The new ones check that nothing that runs forever breaks the rules above on 12
screens, that the picture reaches its page and back with nothing left over, that browsers without view transitions still work,
that Less movement and the device setting both still everything, that the night screen has no animation running at all, that a
phone left alone comes to rest and wakes at a touch, and that celebrations clear themselves away. `ONLY=movement npm run e2e`
runs a single group.

**What it can't claim.** Nobody has seen this on a real phone or felt it in the hand, and timing is a matter of feel. Nobody with
a vestibular condition has tried it. See section 7 of [REVIEW-1.5.md](REVIEW-1.5.md).

## 16. Persian, and room for more languages

Asked for: make the app multilingual, with Persian as the second language.

**How.** A small `t()` with English as the key, not Lingui: no build step, no dependency, and the tests read the keys straight from the
source with the TypeScript parser. The language is settled before the app loads and changing it reloads, so module-level labels just work.
Content stays in English in `src/data`. Each module ends with `localize()`, which swaps in the Persian from `src/i18n/locales/fa/` as
it loads, and remembers the English for code that decides things by reading words. Details: [I18N.md](I18N.md).

**Right to left.** Logical CSS throughout, mirrored arrows, swipes, arrow keys, tab indicators and the week garden, and paragraphs that take
their own direction so a line of English inside Persian still reads. Fonts: Vazirmatn for text and Lalezar for headings, self-hosted and
loaded only for Persian letters.

**Dates and numbers.** Persian digits everywhere, the Persian calendar through `Intl`, a three-list birthday picker in the Persian calendar
(checked day by day against `Intl` from 1990 to 2060), a week from Saturday, and phone numbers that dial whatever digits were typed.

**Translation.** All of the interface and every safety and help screen, plus a first set of games, stories, songs, guides and festivals
chosen so that every age has a varied week and Iranian content comes first. What isn't translated is hidden in Persian rather than shown in
English. The tests fail on any untranslated word on screen, on a translation whose numbers differ from the English, and on a translation
whose English has since changed.

**What it can't claim.** No Persian speaker has read it. See section 8 of [REVIEW-1.5.md](REVIEW-1.5.md), which also lists what the
translators found wrong in the English.
