# PlayNest 2: the expansion plan

> **Status, November 2026:** v1.5 shipped much of phases 2, 3 and 5 except the care tracker and growth charts. [RESEARCH-3.md](RESEARCH-3.md) challenges the care tracker as the next step, and [REVIEW-1.5.md](REVIEW-1.5.md) comes first. See [PLAN.md §14](PLAN.md).

> **From "what shall we play?" to "what does my child need right now — and how are they growing?"**
> A calm, private companion that grows with a child from the first night home to their first phone (0–12 years).

This plan builds on three documents:
- the play-focused v1 plan ([PLAN.md](PLAN.md));
- the original evidence base ([RESEARCH.md](RESEARCH.md));
- new research on the market, the evidence for each domain, mobile UX and technology ([RESEARCH-2.md](RESEARCH-2.md)).

Section numbers like "R2 §1.5" point into RESEARCH-2.

---

## 0. Where we are (October 2026)

| | v1.2 (play app) | v1.3 (this release: UI overhaul) |
|---|---|---|
| Scope | Play for 0–8 y: 528 activities, CDC milestones, weekly plan, journal, sibling play, 18 guides | Same scope with a native-app shell, ready for new modules |
| UI | Web-style header, long text-heavy feed, list cards with summaries | Large collapsing titles, 4-tab bar that remembers each tab's place, push/pop transitions, draggable sheets, picture-first tiles, rings and widgets, swipe-to-delete with Undo, ⓘ sheets instead of paragraphs |
| Privacy | No account, on-device | Unchanged |

**Why expand now?**
- **Parents outgrow trackers around 9 months** and juggle 4–5 apps after age 3 (R2 §1.3–1.5).
- PlayNest already owns the part with long-term value: play, development and evidence.
- It also already has the privacy stance competitors lack: no account, no ads, no tracking.
- The gap is everything else a parent does every day.

---

## 1. Vision and positioning

**One sentence:** the only parenting app that spans 0–12, works offline without an account, and replaces guilt with calm.

| We are | We are not |
|---|---|
| A companion that answers "what now?" and remembers "how are they growing?" | A medical device, a diagnosis or screening tool, or a substitute for a doctor |
| Evidence-based, with sources one tap away and region-aware guidance | A content farm, a forum or a social network |
| Private by default; shared with caregivers only by explicit, end-to-end-encrypted choice | An ad business or a data business |
| Age-adaptive: modules appear when they matter and step back when they don't | A dashboard of everything, always |

### 1.1 Design principles

Principles 1–8 from v1 still hold: glance then play, serve and return, follow the child, grow with the child, plain science,
safe by default, private by design, inclusive. The expansion adds six more.

9. **Grows with the child.** Each module has an age window. When a module stops being useful, the app says so kindly,
   for example "Diapers are on autopilot now. Want to stop logging them?" (R2 §1.5).
10. **Calm over complete.**
    - Show ranges, not ranks.
    - No streak-loss messages, guilt notifications or "missed" language.
    - Rings only for goals the parent chooses (R2 §3.1, §3.4).
11. **Teach, don't diagnose.** Guidance is static and sourced. Nothing interprets one child's data as a diagnosis or
    recommends treatment. Red flags always send the parent to a professional (R2 §2.1; this keeps us outside SaMD rules).
12. **Your data outlives us.**
    - Local-first.
    - Full export is never paywalled.
    - Sync is optional and end-to-end encrypted.
    - If PlayNest ever shuts down, the app keeps working (R2 §1.4, failure reasons 5–6).
13. **Works at 3 a.m.**
    - One-handed.
    - Every log takes ≤2 taps.
    - A red night mode.
    - Undo instead of confirm (R2 §3.4).
14. **Region-aware.**
    - Vaccine schedules, feeding and sleep advice, emergency numbers and units follow the family's region.
    - Every guidance record carries its `region` and `source` (R2 §2.1).

---

## 2. One app, six stages

The app reads the child's (corrected) age and reshapes Today. Tabs and names stay fixed; content adapts (R2 §3, navigation).

| Stage | Age | What parents struggle with | What Today shows | Modules that come forward |
|---|---|---|---|---|
| **Newborn** | 0–3 m | Feeds, sleep, nappies, recovery, "is this normal?" | **Now card** (last feed, side, time since; nap window as a soft range), timers, quick-log tiles, one tiny play idea | Care tracker, night mode, parent wellbeing, vaccines and checks, tummy-time play |
| **Baby** | 3–12 m | Routines, starting solids, sleep changes, milestones | Now card, today's pick, solids of the day, milestone check-in when due | Solids and allergens, teething and teeth, sleep patterns, milestones, play |
| **Toddler** | 1–3 y | Tantrums, words, sleep transitions, potty, picky eating | Today's pick, routine, **Hard-moment** button, words this week | Hard-moment coach, potty, words tracker, picture routines, play |
| **Preschool** | 3–5 y | Big feelings, independence, school readiness | Routine (with kid mode), today's pick, a reading streak that never punishes | Routines and kid mode, emotion tools, reading log, school readiness, play |
| **School age** | 5–8 y | Homework, friendships, screens, chores | Family routine, a game for tonight, conversation starter | Chores and pocket money, screen plan, friendships and bullying, family games |
| **Tween** | 9–12 y | Independence, first phone, body changes, online life | Weekly check-in, conversation starter, family media agreement | Media agreement, first-phone readiness, age-appropriate body and puberty guides, money skills |

Care tracking fades after the baby stage. It never disappears (growth, health and meds stay), but it moves out of Today.

---

## 3. Information architecture (target)

Four fixed tabs, already shipped in v1.3, plus a floating **+** for logging. The research advises against putting
actions in the tab bar (Apple HIG), so the + is a floating button bottom-right above the tab bar, not a centre tab
(R2 §3, navigation).

```
┌ Today ────────── Now card · timers · today's pick · routine · plan · tip     (adapts by stage)
├ Play ─────────── Ideas · This week · Together · (Hard-moment coach links here)
├ Grow ─────────── Timeline (logs + journal + photos) · Growth charts · Milestones · Health · Reports
└ Learn ────────── For this age · Topics · Hard moments · Safety & first aid · (Ask, later)

  [+] Quick log ── Feed · Sleep · Diaper · Pump · Solids · Growth · Temp/Meds · Photo/Moment · Play
                   (filtered by age; one tap logs with defaults; "Logged · Undo")

  Avatar (top-right, every tab) → Family sheet: children · caregivers · settings
```

| Route (new) | Screen |
|---|---|
| `#/log/:type` | Quick-log detail (time chips, side, amount) |
| `#/timeline` | Day-by-day record (Grow) |
| `#/growth/charts/:measure` | Growth chart (weight, height, head, BMI) |
| `#/health`, `#/health/vaccines`, `#/health/visits`, `#/health/meds` | Health record |
| `#/coach`, `#/coach/:situation` | Hard-moment coach |
| `#/routines`, `#/routines/:id`, `#/kid/:routineId` | Routines; kid mode is full-screen with no navigation out |
| `#/report` | Doctor-visit report (PDF / share) |
| `#/family` | Caregivers and sync |

---

## 4. Module catalogue

Each module lists its ages, the user-facing behaviour, the evidence behind it, its **red lines** (what it must never
do), and its phase (§6).

### M1. Care tracker: feed, sleep, diaper, pump (0–24 m) — Phase 2
- **Logging:**
  - One-tap tiles in a quick-log sheet (3×2, ≥96px tall).
  - Time chips `Now · −5m · −15m · −30m`; giant L/R buttons for breastfeeding; diaper Wet / Dirty / Both.
  - Timers with `tabular-nums`, and a mini-bar above the tab bar while one runs.
  - Every entry editable from the timeline; "Logged by Sam · 5m ago" when synced (R2 §3.4).
- **Now card:**
  - "Last feed 2h 10m ago · L".
  - "Nap window around 1:30–2:00" from the child's *own* recent pattern, always shown as a range in soft words.
  - Wake windows are weakly evidenced (R2 §2), so we never present them as targets.
- **Night mode** (21:00–06:00, or when a timer starts at night): black background, red `#FF5A4E` text, 72–96px
  buttons, only Stop / Switch side / Log, no white and no animation (R2 §3.4).
- **Red lines:**
  - No "normal" thresholds for an individual baby's intake.
  - Feeding concerns route to the guide's "call your doctor or health visitor if…" list.
  - No formula marketing, ever.

### M2. Solids and allergens (4–24 m) — Phase 2
- A "signs of readiness" checklist (around 6 months, region-aware) and a first-foods log with reactions.
- An **allergen introduction tracker**: introduced → keep it in the diet regularly.
  - Follows the early-introduction guidance (NIAID 2017 addendum and successors; R2 §2) with a region note.
- A choking-hazard card per age.
- Honey and cow's-milk rules.
- **Red lines:** high-risk infants (e.g. severe eczema) get "talk to your doctor before introducing peanut", never a
  home protocol. No allergy diagnosis.

### M3. Growth charts (0–12 y) — Phase 2
- **Data and math:**
  - Measure weight, length/height, head circumference; BMI from age 2.
  - WHO 2006 standards for 0–5; CDC 2000 for 2–20 in the US region; WHO 2007 reference for 5–19 elsewhere.
  - Our own LMS module with golden tests; corrected age until 24 months (R2 §4.4).
- **Display:** the child's own line over soft percentile bands. Label: "between the 25th and 50th percentile lines".
  Never "below average".
- **Red lines:**
  - No diagnosis of under- or overweight.
  - A sustained crossing of two major lines prompts "worth mentioning at your next check-up" with the guide.
  - **WHO data needs written permission before any paid tier**; CDC data is public domain (R2 §4.4).

### M4. Health record — Phase 2
| Part | What | Notes |
|---|---|---|
| Vaccines | Region schedule packs (UK NHS, Canada, Australia, WHO EPI baseline, US AAP/CDC…) that tick off as given; reminders | US federal guidance has been unstable in 2025–26. Store the schedule source and date, never hard-code one "US schedule", and say which body it follows (R2 §2) |
| Check-ups | Well-child visit timeline (e.g. AAP Bright Futures for the US, region equivalents) and **visit prep**: questions to ask, milestones to mention, the latest measurements | |
| Meds and doses | Log the dose given and set a reminder for when the next dose is *allowed* (from the label the parent enters) | **No dose calculators** (Apple 1.4.1, SaMD) |
| Illness and temperature | Temperature log plus a static **red-flag card by age** ("Under 3 months with a fever? Call now.") | Teach, don't triage. Emergency numbers by country, offline |
| Teeth | Eruption log, first dentist visit nudge, brushing routine | Fluoride advice is region-specific (US guidance in flux) |
| Allergies and notes | Allergies, conditions, doctor contacts, blood type (optional) | Shown on the report |

### M5. Milestones+ (0–12 y) — exists; extended in Phase 3
- Keep the CDC 2 m–5 y check-ins (public domain).
- Over 5 y: **non-clinical "skills to practise"** lists (self-care, school, social) with no pass/fail.
- A **Firsts** journal ("first steps") with a photo.
- **Red lines:** do not embed ASQ-3, ASQ:SE-2 or M-CHAT-R/F without licences. Instead link to "ask your doctor about
  the 18- and 24-month autism screening" (R2 §2.1).

### M6. Hard-moment coach: behaviour and emotions (1–12 y) — Phase 3
- **"Hard moment" button** on Today (toddler stage onwards) and in Learn.
- Pick a situation: tantrum, hitting or biting, bedtime battle, sibling fight, whining, won't get dressed, lying,
  screen meltdown, homework standoff and others.
- The card that comes back, word-budgeted:
  1. **Right now:** 3 steps.
  2. **Try saying:** swipeable script cards.
  3. **Why it works:** one line plus sources.
  4. **Later, play this:** a linked activity that practises the skill (feelings and self-control areas).
  5. **When to get help.**
- Built on AAP's 2018 effective-discipline policy (no spanking), the principles of Triple P, Incredible Years and
  PCIT, emotion coaching, and labelled praise (R2 §2). This is the low-cost answer to Good Inside's $279/yr
  (R2 §1.5).
- **Red lines:**
  - No scripts for abuse or safety disclosures; route to helplines.
  - Persistent aggression, self-harm talk or regression gets a "talk to your doctor" card.

### M7. Routines and chores, with kid mode (2–12 y) — Phase 3
- **Picture routines** (morning, bedtime, leaving the house) built from icon steps.
- **Kid mode:** full-screen, huge pictures, tap to tick, a celebration at the end, no navigation out without a
  parent gate, **no network, no data collection** (R2 §4.5, COPPA).
- **Chores by age** with gentle, non-coercive rewards: stickers that only accumulate, never deducted.
- Optional pocket money from 6 y.
- Fills the 3–7 gap left by Joon/Brili/OurHome (R2 §1.5).

### M8. Learn v2 — Phases 2–5
- Guides grow from 18 to about 90, organised by **topic** (Feeding, Sleep, Health, Behaviour, Feelings, Talking &
  reading, Play, School, Screens, Safety, You) and **age**.
- A weekly **"This week with Noor"** card: what's typical at this age, one thing to try, one thing to watch for. Ranges
  only, no Wonder-Weeks-style dates (R2 §1.4).
- Each guide shows a "last reviewed" date and its sources.

### M9. Memories — Phase 4
- Photos and videos attached to moments, firsts and milestones.
- Monthly portrait prompt and letters to your child.
- Stored as local files with a 320 px thumbnail plus a 2048 px JPEG; GPS is stripped (R2 §4.1).
- **Year book** export (PDF) and a full ZIP export. Photos are not in default sync; opt-in encrypted photo sync later.

### M10. Family and caregivers — Phase 4
- **E2E-encrypted sync without accounts:**
  - Invite by QR code or link.
  - Roles: Parent, Caregiver (log only), Viewer.
  - A recovery phrase saved at setup.
  - Design in R2 §4.3: per-field last-writer-wins, hybrid logical clocks, ciphertext-only relay. Evaluate Evolu first.
- **Handoff summary** when a caregiver opens the app: "Since 2 pm: 2 feeds, nap 1h20, last diaper wet 30m ago".
- Two-household support: two parents in different homes share a child; each household's own notes stay private.

### M11. Parent wellbeing (all ages, strongest 0–12 m) — Phase 2
- A gentle **"How are *you*?"** check-in: a mood emoji, sleep and a note. It is not the EPDS unless licensed (R2 §2.1).
- If the parent reports low mood for 2+ weeks: one supportive card with the **local helpline** and "talk to your GP or
  health visitor". Postnatal depression affects fathers too.
- Micro-rest ideas; partner check-in prompts.
- **Red lines:**
  - No scoring that implies a diagnosis.
  - Crisis numbers available offline at all times.

### M12. Screens and digital life (2–12 y) — Phase 5
- An **AAP Family Media Plan**–style builder (screen-free zones and times).
- An optional, parent-entered screen-time log; no surveillance and no device monitoring.
- From 9 y: a **first-phone readiness** checklist, a family tech agreement and online-safety conversations.

### M13. Talking and reading (0–12 y) — Phase 3
- A **words tracker** (first words; bilingual tags).
- A **reading log** that celebrates without punishing, with dialogic-reading prompts from the existing content.
- Speech red flags by age, with "ask your doctor or speech therapist" (R2 §2).

### M14. School age (5–12 y) — Phase 5
- Homework routine, friendship and bullying guides, conversation starters, a non-clinical school-readiness checklist.
- **Activities extended to 12 y**: about 250 new ideas covering family games, strategy, outdoor, making, cooking and
  conversation.

### M15. Safety and first aid (0–12 y) — Phase 2 (cards), Phase 3 (checklists)
- **Offline first-aid cards:** infant and child choking, CPR basics, burns, poisoning. Each shows its source, a "last
  reviewed" date, a link to official training, and the local emergency number.
- Childproofing checklists by stage; car-seat stages; water, button-battery and magnet safety.
- Jurisdiction note: choking first-aid steps differ slightly between bodies, and the app follows the region pack.

### M16. Reports — Phase 2
- A **doctor-visit report** (PDF and share sheet) containing:
  - recent feed, sleep and diaper summaries;
  - the growth chart;
  - milestone answers, including "not yet" items;
  - meds and allergies;
  - the parent's questions.
- Generated on the device.

### M17. Reminders — Phase 1 (engine), Phase 2 (uses)
- Native local notifications for vaccines, visits, next-allowed dose and an opt-in gentle play nudge, with quiet hours.
- At most one non-essential notification a day. No guilt copy.
- iOS allows 64 pending notifications, so we roll a window; Android 14 needs the exact-alarm permission (R2 §4.1).
- **The PWA cannot do offline reminders.** The installed app is the main platform from Phase 2 onwards.

### M18. Ask (assistant) — Phase 6, opt-in
- Answers only from PlayNest's curated, cited content (retrieval-only), and **on-device first** (Apple Foundation
  Models / Gemini Nano).
- Natural-language logging ("fed 120 ml at 3").
- Never diagnoses.
- Apple 5.1.2(i): explicit consent before any third-party AI. A GDPR Art. 9 DPA if the cloud is ever used (R2 §4.5).

### M19. Night mode — Phase 2
Described in M1. It also applies to Today and the timeline after 21:00 when the parent opts in.

### M20. Languages and regions — Phase 1 (scaffold), then continuous
- **Tooling:**
  - Lingui (ICU plurals).
  - CSS logical properties for RTL; directional icons mirrored.
  - `Intl` for dates and units; a Persian (Jalali) calendar option; a Saturday week start where local (R2 §4.1).
- **Region packs:** vaccines, feeding and sleep notes, emergency numbers, units.
- **First locales:** decided with the product owner (§9).

---

## 5. Architecture changes

| Area | Today | Target | Phase |
|---|---|---|---|
| Storage | One JSON blob in `localStorage` | **SQLite** as the system of record behind a `Db` interface: `@capacitor-community/sqlite` natively, wa-sqlite/OPFS for the PWA. A one-time, idempotent migration keeps the old blob for 2–3 releases (R2 §4.2) | 1 |
| State | `useSyncExternalStore` store | Kept as a hot cache (profiles, settings, today); lists query the DB | 1 |
| Data model | Sessions, moments, milestones, plans | Adds `events` (type, start, end, tz offset, payload, createdBy, `updated_hlc`, tombstone), `measurements`, `health_*`, `media`, `routines`, `caregivers`. ULID ids. No stored aggregates | 1 |
| Content | TypeScript modules per age band | Plus **content packs**: typed, validated, versioned and region-tagged, each record with `source` and `reviewedAt`, lazy-loaded per module | 1–2 |
| Native | Capacitor configured, no native projects | Generate iOS/Android; plugins: haptics, status bar, splash, keyboard, app (**Android back closes sheets first**), local notifications, filesystem, camera, share, preferences | 1 |
| Sync | None | E2E relay (Cloudflare Worker + Durable Object per household), or Evolu | 4 |
| Charts | Hand-rolled SVG | SVG for growth and bars; uPlot (22 KB) lazy-loaded for dense sleep/feed timelines | 2 |
| i18n | English strings inline | Lingui catalogues; logical CSS; `<bdi>` around names. *Built instead: a dependency-free `t()` with English keys, content overlays and RTL; see I18N.md* | 1 |
| Code size | One app chunk plus content chunks | Route-level lazy loading per module; content per module and region | 1 |
| Tests | Vitest + Playwright/axe smoke | Plus golden LMS tests, schedule-pack validation, a migration test from real v1 backups, night-mode contrast check, kid-mode "no network" test | each |

**Design system.**
- v1.3 introduced the shared primitives every new module must use: `Page`, `Section`, `Sheet`, `Segmented`, `ListGroup`/`ListRow`,
  `Ring`, `SwipeRow`, `InfoButton`, `Carousel`, `ActivityTile`.
- Rules for new screens are in [DESIGN.md](DESIGN.md).

---

## 6. Roadmap

Each phase ships on its own, keeps the app fully usable offline, and must pass the quality gates in §7.

| Phase | Version | Theme | Scope | Exit criteria |
|---|---|---|---|---|
| **0** | **1.3** ✅ | UI/UX overhaul | Native shell, large titles, per-tab memory, transitions, sheets, picture tiles, widgets, rings, swipe rows, Learn tab, research and this plan | e2e + axe green; no paragraph longer than 2 lines in the first screenful of any tab |
| **1** | 1.4 | Foundations | SQLite + migration; data model v2; native projects + core plugins; reminders engine; i18n scaffold + RTL audit; **quick-log FAB with Moment and Play** (the two loggable things we have); settings for region, units and haptics; route-level code splitting | Migration tested on 1,000 synthetic backups with zero loss; app installs from TestFlight / internal track |
| **2** | 2.0 | **Baby care** | M1 tracker + Now card + timers + night mode; M2 solids and allergens; M3 growth charts; M4 health (vaccines for 3–5 launch regions, visits, meds, temperature, red flags); M11 wellbeing check-in; M15 first-aid cards; M16 doctor report; guides +25 | Logging ≤2 taps for feed/diaper; night mode passes a contrast check; WHO permission resolved (or CDC-only charts in that region); clinician review of all red-flag content |
| **3** | 2.1 | **Toddler and preschool** | M6 hard-moment coach (≈40 situations × age bands); M7 routines + kid mode; potty; M13 words and reading; Milestones+ firsts; childproofing checklists; guides +25 | Child-psychologist review of scripts; kid mode verified offline with no data collection |
| **4** | 2.2 | **Family** | M10 E2E sync, invites, roles, handoff summary; M9 photos, year book and ZIP export | Security review and DPIA; conflict tests (two phones offline for a day, then merge); recovery-phrase flow tested |
| **5** | 2.3 | **School age and tweens** | Activities to 12 y (+≈250); M12 media plan and first phone; M14 school, friendships and bullying; chores and money; puberty basics (age-appropriate, reviewed) | Content review; no screen-based activities for the child |
| **6** | 2.4+ | **Native surfaces and intelligence** | Live Activities for timers, widgets, Watch (logging only), on-device assistant (M18), Android Live Updates | Each surface optional; assistant answers only from cited content |

**Sequencing logic:**
- Foundations first, because storage, native reminders and i18n block everything else.
- Baby care next: it has the most daily use and fills the biggest gap (R2 §1.2).
- Then the stages where competitors are thin (toddler to tween).
- Sync once there is enough shared, high-frequency data to justify it.

---

## 7. Quality gates (every release)

1. **Content:**
   - Every guidance record has a source, a region and a `reviewedAt`.
   - Red-flag and first-aid content is clinician-reviewed.
   - The validator fails on missing fields; the safety scan extends to feeding, sleep and medicine terms.
2. **Words:** the house word budgets apply (R2 §3.3). Full sentences only for reasons, empty states, support and safety.
3. **Accessibility:**
   - axe has no serious or critical issues.
   - Dynamic Type works to 200%.
   - VoiceOver labels on all icon buttons.
   - Every swipe or long-press action has a visible alternative.
4. **Privacy:**
   - No third-party SDKs.
   - Network calls only for opt-in sync and the assistant, listed in Settings.
   - Export is always available.
5. **Performance:**
   - Today renders under 1 s from a cold start on a mid-range Android.
   - Logging writes in under 50 ms.
   - No list re-renders that grow with history length.
6. **Data safety:**
   - Migrations are idempotent and tested on real backups.
   - Tombstones instead of hard deletes.
   - Undo everywhere.

---

## 8. Content plan

| Content | Today | Target | Review by |
|---|---|---|---|
| Activities | 528 (0–8 y) | ≈780 (0–12 y) | Early-years specialist |
| Guides | 18 | ≈90 by topic and age | Paediatrician, child psychologist, dietitian, lactation consultant (by topic) |
| Coach situations | 0 | ≈40 × 3–4 age bands | Child psychologist (PCIT/Triple P–trained) |
| Region packs | 0 | Vaccines, visit schedules, emergency numbers, feeding and sleep notes for 3–5 launch regions | Local clinician per region |
| First-aid cards | 0 | 6–8 | Paediatric first-aid trainer |
| Routine templates | 0 | ≈20 | Occupational therapist (visual routines) |
| Skills lists 5–12 | 0 | Per year of age | Educator |

Writing rules stay as in v1: plain words (reading age about 12), gender-neutral, culturally attributed only when
confident, evidence-proportionate wording. Two additions: region notes where bodies disagree, and *never* a single
precise date for a developmental event.

---

## 9. Business model

From the research, parents accept and resent different things (R2 §1.6). Our options, in order of preference:

| Tier | What | Price (indicative) |
|---|---|---|
| **Free forever** | Everything on the device: play, care tracking, growth, health, milestones, coach, routines, memories, export | Free, no ads, no data sales |
| **Family** (optional, one-time) | Premium content packs (e.g. school-age deep dives), year-book designs, extra themes and app icons | ≈ $39–59 once, covers the whole family |
| **Sync** (optional) | E2E caregiver sync and encrypted photo backup; our only running cost | ≈ $10–20 / year per household, all caregivers included |

Never paywall: history, export, safety content or the core logging. Purchases go through RevenueCat with anonymous IDs
and "Restore purchases" (R2 §4.1).

Alternative: run as a **nonprofit or foundation-backed** product, like Bebbo or Vroom. That earns the most trust and
may unlock partnerships (UNICEF-style content licensing, health-system distribution).

---

## 10. Measuring success without tracking

No analytics SDKs. We use:
- **Store dashboards:** App Store Connect and Play Console aggregate installs and retention for users who opted in at
  the OS level.
- **In-app, opt-in, anonymous micro-surveys:** one question, at most once a month, answers sent only if the parent taps
  Send.
- **Ratings and reviews,** read weekly.

| Goal | Signal |
|---|---|
| Outgrowing becomes growing with | Store retention at 6 and 12 months; survey "still useful for your child's age?" |
| Calm, not guilt | Survey "How does PlayNest make you feel?"; zero reviews mentioning guilt or anxiety |
| Logging is fast | Measured on the device in usability tests (seconds to log at night) |
| Trust | Rating ≥ 4.7; review themes |

---

## 11. Risks

| Risk | Mitigation |
|---|---|
| Medical liability or a SaMD classification | Teach, don't diagnose; static red-flag lists; clinician review; legal review before Phase 2 |
| Wrong or outdated guidance (especially US 2025–26 volatility) | Region packs with source and review date; a quarterly review cycle; show which body a recommendation comes from |
| WHO growth-data licence | Ask WHO for permission early; fall back to CDC data in the US region |
| App-store rules (1.4.1, 5.1.2(i), 5.1.3, Families) | Don't list as Kids; no dose calculators; no CloudKit for health data; explicit AI consent; kid mode offline |
| Data loss in migration or sync | Idempotent migration, rollback copy, tombstones, conflict tests, recovery phrase |
| Scope creep and team size | Strict phases; each module has an age window and an exit criterion; ship baby care before anything else new |
| Becoming the anxiety app we set out to replace | Copy rules, no streak loss, no comparison with "other babies", a prompt to stop tracking |

---

## 12. Decisions for the product owner

1. **Name.** Keep **PlayNest** (strong for play, and "Nest" stretches) or rebrand for the wider scope? Recommendation:
   keep the name and change the tagline to *"Play, care and grow together."*
2. **Age ceiling.** Recommendation: 12, with tween content in Phase 5.
3. **Launch regions and languages.** These drive the vaccine, emergency and feeding packs and the first translations.
   Recommendation: start with English (UK/US/CA/AU) plus 1–2 locales the team can review natively (e.g. Persian, Arabic
   or Spanish).
4. **Business model:** free + one-time Family + sync subscription, or nonprofit?
5. **Sync:** test Evolu for a week, or build the thin relay in-house?
6. **Professional reviewers:** who signs off red-flag, first-aid and coach content before Phase 2/3?
