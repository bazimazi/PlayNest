# 07 — Currency audit of high-stakes health and first-aid claims

Research notes for PlayNest phase 9, round 6. Researched 17 Nov 2026.

## Scope

This audit checks whether what PlayNest already says is still current. It does not write new content. Each high-stakes claim in the English source text was compared with the newest guidance I could reach, preferring 2024–2026 editions.

Files read (English only; Persian locale JSON not read):

- `src/data/firstaid.ts`: all 24 cards, every region.
- `src/data/emergency.ts`: numbers only, no health claims. Iran's row is `IR: { ambulance: '115', police: '110', fire: '125' }`, which matches my recall [recall, unverified].
- `src/data/crying.ts`: crying helper, red flags, step-away plan, parent support.
- Guides: `safe-sleep-essentials` and `home-safety-by-stage` (guides-more.ts), `swaddling-and-hips`, `newborn-jaundice` and `first-weeks-at-home` (guides-baby.ts), `milk-feeds`, `starting-solids` and `everyday-eating` (guides-food.ts), `fever-and-sick-days`, `healthy-teeth` and `vaccines-and-jabs` (guides-health.ts), `car-seats` and `medicines-at-home` (guides-safety.ts), `water-safety` (guides-safety-more.ts).

Context that matters for Iran: `suggestedAidRegion()` in `src/lib/emergency.ts` returns `null` for `IR`, so an Iranian parent picks one of us / ca / uk / eu / anz by hand. Whatever is weak in any one region can therefore reach Iranian families. This matters most for the ANZ two-finger finding (C-3).

## How to read

- **Status** values:
  - **AGREES**: matches current guidance from at least one body, with no current body contradicting it on safety.
  - **OUTDATED**: a clear, current source says something different.
  - **BODIES DIFFER**: current bodies disagree, and the app follows one of them.
  - **UNCLEAR**: I could not reach a current primary source.
- **Tags** on each source:
  - **[opened]**: I opened the page or PDF this session.
  - **[abstract]**: I read only an abstract.
  - **[search]**: the fact comes from a search snippet or summary only.
  - **[recall, unverified]**: background knowledge I did not confirm this session.
- **IDs:** each row has an ID (C-1, B-2 and so on). The fix list refers to these IDs.
- **App quotes** are exact, so a fix can find the string. Where a row says "replace", the suggested wording is plain English, short, and contains no doses.

**Access problems this session:**

- **HTTP 403:** cpr.heart.org (AHA 2025 Part 6 guideline page), ahajournals.org (AHA 2025 full text), journalfeed.org, and nice.org.uk (NG143 April 2025 surveillance PDF).
  - AHA 2025 paediatric content therefore comes from the AAP's healthychildren.org summary [opened], Contemporary Pediatrics [opened] and search snippets.
  - NICE content comes from NHS pages [opened] and recall.
  - A curl download of the NICE PDF was blocked by the session's permission system, so I did not retry it.
- **ERC 2025 First Aid chapter (Resuscitation 2025;215:110752):** not reachable. cprguidelines.eu links only the 2021 PDFs and the 2025 lay booklet. I read the ERC 2025 lay booklet in full instead [opened, pdftotext], plus RCUK's 2025 paediatric BLS and first-aid pages [opened], since RCUK implements ERC.
- **AHA/ARC 2024 First Aid guidelines:** I read the official "Highlights" PDF [opened]. It lists burn cooling as a topic but gives no duration in the highlights.
- **ILCOR CoSTR:** opened only the burns-cooling-duration review (FA 770), and it is a 2021 public-comment draft. No 2025 paediatric CoSTR text was opened.
- **IFRC:** the guidelines page confirms the 2020 edition is current [search]. No 2025/2026 IFRC edition was found.
- **Budget:** 14 web searches and about 20 page fetches.

---

## A. Coverage table: what changed in 2024–2026 that touches the app

| Change (body, year) | App position | Notes |
|---|---|---|
| AHA/AAP 2025: two-finger infant compressions dropped; use 2 thumbs encircling or heel of one hand | US/CA cards already updated | AGREES (see C-1) |
| AHA/AAP 2025: child choking = 5 back blows alternating with 5 abdominal thrusts (was thrusts only) | US/CA child cards already updated | AGREES (C-6) |
| AHA/AAP 2025: infant choking = 5 back blows / 5 chest thrusts, heel of one hand for thrusts | US card already updated | AGREES (C-5) |
| ERC/RCUK 2025: two-thumb encircling for infants; 5 rescue breaths; lone rescuer with no phone gives 1 min CPR then calls | UK/EU cards updated | AGREES (C-2) |
| ANZCOR: Guidelines 4 and 6 still April 2021 (two-finger lay infant CPR, no abdominal thrusts) | ANZ card follows ANZCOR | BODIES DIFFER (C-3, C-7) |
| RCUK 2025 first aid: tourniquet for life-threatening limb bleeding; haemostatic dressing | Card omits tourniquet on purpose | BODIES DIFFER (F-2) |
| RCUK 2025: heatstroke = cold-water immersion neck-down; AAP 2026 = cool (not cold) bath | Card: spray/sponge + fan, no ice bath | BODIES DIFFER (F-10) |
| NHS Dec 2025: burns cool 20 to 30 min | Card: 20 min | AGREES (F-1) |
| AHA/ARC 2024: remove stinger "by plucking or scraping" | Card: "Do not use tweezers" | BODIES DIFFER (F-12) |
| FDA 2024/2025: adrenaline nasal spray (neffy 2 mg ≥30 kg; 1 mg 15–30 kg, age 4+) | Card mentions only auto-injector | wording gap (F-3) |
| ASCIA 2026: peanut and egg "soon after solid feeding begins", ongoing at least weekly | Guide: "Once solids are going well" | AGREES (N-4) |
| AAP safe sleep 2022: no newer policy found | Guide cites 2022 | AGREES (S-1) |

---

## B. Resuscitation: CPR and choking (`src/data/firstaid.ts`)

| ID | App location | What the app says | Current guidance (body, year, tag) | Status | Suggested replacement |
|---|---|---|---|---|---|
| C-1 | `cpr-baby` us + ca, steps 2–3; `dont` | "Start with presses, not breaths. Put both thumbs on the breastbone, right below the nipple line, fingers around the back." / "…Can't reach that? Use the heel of one hand." / dont: "Do not press with two fingers. AHA no longer recommends it." | AHA/AAP 2025 (23 Oct 2025): "The use of 2 fingers along the sternum was eliminated due to ineffectiveness in achieving proper depth"; infants: "1-hand technique or the 2 thumbs–encircling hands technique"; heel of one hand if the rescuer cannot encircle [opened, AAP healthychildren summary]. Contemporary Pediatrics confirms [opened]. | AGREES | none |
| C-1b | `cpr-baby`/`cpr-child` us + ca, step 3–4 | depth "about 4 cm (1½ in)" infant / "about 5 cm (2 in)" child; "30 presses at 100 to 120 a minute" | AHA: at least 1/3 chest depth, about 1.5 in infant / 2 in child, 100–120/min [recall, unverified; AHA text 403]. ERC/RCUK 2025: at least 1/3 AP depth, never over 6 cm [opened]. | AGREES | none |
| C-1c | `CPR_ALONE` note (us/ca) | "On your own with no phone: give about 2 minutes of CPR, then go and call." | AHA lone-rescuer, unwitnessed: 2 min CPR first [search, study guides only; AHA text not opened]. | AGREES (UNCLEAR on 2025 wording) | Recheck against the AHA Part 6 text |
| C-2 | `cpr-baby` uk + eu, steps 3–4; `cpr-child` uk/eu; notes | "Give 5 rescue breaths…" / "Put both thumbs on the lower half of the breastbone, hands around the chest." / uk note "Alone with no phone: give 5 breaths and 1 minute of CPR, then call" | RCUK PBLS 2025 (27 Oct 2025): "Use the two-thumb encircling method for chest compressions in infants"; "Give five initial rescue breaths"; "A single rescuer without a mobile phone should perform CPR for 1 min before going to seek help"; "do not exceed a depth of 6 cm at any age" [opened]. ERC 2025 lay booklet: "The ERC recommends the two-thumb encircling technique… on infants"; child "one- or two-handed compressions"; "If you are alone, make the call, put in speaker mode" [opened]. | AGREES | none |
| C-3 | `cpr-baby` anz, step 3 and note | "Give 30 presses with 2 fingers on the lower half of the breastbone, at 100 to 120 a minute." Note: "ANZCOR's lay guideline (2021) uses 2 fingers. Its 2026 guideline for trained responders prefers 2 thumbs…" | ANZCOR Guideline 6 is still "Approved April 2021" and says "the two finger technique should be used by lay rescuers", with no revision notice [opened]. Against this, AHA/AAP 2025 removed two fingers for "ineffectiveness in achieving proper depth" [opened], and ERC/RCUK 2025 use two thumbs [opened]. | BODIES DIFFER (ANZ is now the only body here still teaching two fingers) | Optional, owner decision. Step 3: "Give 30 presses on the lower half of the breastbone, at 100 to 120 a minute. Use 2 fingers, or both thumbs with your hands around the chest if you can press deeper that way." Keep the note. |
| C-4 | `cpr-child` uk + eu, `dont` | "Do not press deeper than 6 cm." | RCUK 2025: "do not exceed a depth of 6 cm at any age" [opened]. | AGREES | none |
| C-5 | `choking-baby` us, steps 2–5; `dont` | "Give up to 5 quick downward thrusts, about 1 a second, with the heel of one hand on the middle of the chest, lower half of the breastbone." / dont: "Do not give abdominal thrusts to a baby under 1." | AHA/AAP 2025: infants "repeated cycles of 5 back blows alternating with 5 chest thrusts"; abdominal thrusts not recommended in infants [opened]. Heel of one hand for infant chest thrusts [search, study guide only]. | AGREES | none |
| C-5b | `choking-baby` uk + eu, steps 4–5 | "Put both thumbs on the breastbone, a finger below the nipple line, hands around the chest." (uk) / "…lower half of the breastbone…" (eu) | RCUK 2025: "For infants, use chest thrusts with the two-thumb encircling technique, with the infant on their back on your knees" [opened]. | AGREES | none |
| C-6 | `choking-child` us + ca | "Give 5 back blows…" then "Give 5 quick, forceful upward thrusts…" / "Repeat 5 blows and 5 thrusts…" | AHA/AAP 2025: children "repeated cycles of 5 back blows alternating with 5 abdominal thrusts", replacing thrusts-only [opened]. RCUK 2025 the same order [opened]. | AGREES | none |
| C-7 | `choking-child` anz, step 4 and `dont` | "Give up to 5 chest thrusts…" / "Do not give abdominal thrusts. ANZCOR does not recommend them." | ANZCOR Guideline 4 (April 2021, still current): "the use of abdominal thrusts in the management of FBAO is not recommended" [opened]. AHA 2025 and ERC/RCUK 2025 use abdominal thrusts for children [opened]. | BODIES DIFFER (region-locked, correct for ANZCOR) | none. Recheck when ANZCOR publishes its post-ILCOR-2025 update. |
| C-8 | `choking-*` all regions, `dont` | "Do not sweep a finger in the mouth unless you can see the object." | RCUK 2025: "Do NOT use blind finger sweeps" [opened]. | AGREES | none |
| C-9 | `drowning` us/ca/uk/eu/anz | us: "start CPR with rescue breaths and chest presses"; uk/eu: "give 5 rescue breaths"; anz: "Presses alone are strongly discouraged here" | ERC 2025 lay booklet: if not responsive, "immediately deliver 5" rescue breaths; untrained should not enter water [opened]. AHA 2025 emphasises ventilation for paediatric arrest [search]. | AGREES | none |
| C-10 | recovery position in `poison`, `seizure` | "Not responding but breathing normally: roll them on their side in the recovery position." | ERC 2025: side-lying recovery position for decreased responsiveness that does not need CPR; not if breathing is abnormal or there is trauma [opened]. RCUK 2025 the same [opened]. | AGREES | none |
| C-11 | `cpr-*` defibrillator steps | "Under about 8 years or 25 kg, use child mode if it has one. If not, use it as it is." | ERC 2025: under 25 kg (about 8 years) use paediatric mode; if none, standard mode [opened]. | AGREES | none |

## C. First aid (`src/data/firstaid.ts`)

| ID | App location | What the app says | Current guidance (body, year, tag) | Status | Suggested replacement |
|---|---|---|---|---|---|
| F-1 | `burns-scalds` step 2 | "Hold the burn under cool running water for 20 minutes. Start straight away. Cooling can still help up to 3 hours later." | NHS "what to do if your child has an accident" (reviewed 18 Dec 2025): "cool running water for 20 to 30 minutes" [opened]. ILCOR FA 770 (2021 draft): immediate cooling with running water, no duration recommended [opened]. IFRC (via CDAC): at least 10, ideally 20 min [search]. American Red Cross: 5–20 min [search]. AHA/ARC 2024 lists burn cooling as a topic [opened, highlights only]. | AGREES (20 min is at or above every figure found) | Optional P3: "…for at least 20 minutes." |
| F-2 | `severe-bleeding` (code comment omits tourniquet) | Steps: press, add pads on top, leave objects in. No tourniquet. | RCUK First Aid 2025 (27 Oct 2025): "Apply a tourniquet as soon as possible for life-threatening extremity bleeding that is not controlled by direct manual pressure"; "ideally a haemostatic dressing" [opened]. ANZCOR limits tourniquets to trained rescuers (per app comment; not re-opened). | BODIES DIFFER | Optional P3, add after step 4: "Heavy bleeding from an arm or leg that pressing doesn't stop: if you have a tourniquet and know how to use it, put it on above the wound." |
| F-3 | `anaphylaxis` step 1 | "If they have an adrenaline (epinephrine) auto-injector, use it now, into the outer thigh." | FDA approved neffy 2 mg nasal spray (9 Aug 2024, ≥30 kg) and neffy 1 mg (5 Mar 2025, children aged 4+ weighing 15–30 kg) [search]. An EU approval (EURneffy, 2024) [recall, unverified]. | AGREES, with a wording gap | P3: "If they have adrenaline (epinephrine), use it now: an auto-injector into the outer thigh, or a nasal spray as its instructions say." |
| F-4 | `anaphylaxis` steps 3, 5; `dont` | "Lay them down with their legs raised. If breathing is hard, sit them up slowly." / "No better after 5 minutes: give a second auto-injector if you have one, ideally in the other leg." / "Do not let them stand or walk." | RCUK First Aid 2025: "Ensure that the person is lying down unless there are breathing difficulties, in which case they may sit up with their legs extended"; "If symptoms persist five minutes after administration, give a second dose of adrenaline, ideally in the opposite leg" [opened]. ASCIA action plan: "Hold young children flat, not upright" [recall, unverified]. | AGREES | Optional P3: add "Hold a small child lying flat, not upright." |
| F-5 | `seizure` steps, `callIf`, `dont` | "It lasts longer than 5 minutes…"; "Give no food or drink until they are fully awake and alert."; "Do not hold them down." "Do not put anything in their mouth." | AHA/ARC 2024 First Aid: call EMS for a first-time seizure, an infant under 6 months, longer than 5 minutes, no return to baseline in 5–10 min, injury, breathing difficulty, or a seizure in water; do not restrain; "Nothing should be put in the mouth and no food, liquids, or oral medicines" [opened]. | AGREES | none |
| F-6 | `head-injury` `callIf` and steps | "A fall of over 1 metre or 5 stairs…" / "Under 1 year with a bruise, swelling or large cut on the head." / "Let them sleep… They don't need to stay awake." / "Keep an adult with them for the next 24 hours." | NHS head injury (reviewed 29 May 2025, based on NICE NG232) "Call 999" list: knocked out and not woken; can't stay awake; fit; "fallen from a height of more than 1 metre or 5 stairs"; vision or hearing problems; "has a black eye, but did not hit their eye"; clear fluid from ears or nose; bleeding from ears or bruising behind them; numbness or weakness; walking or speaking problems; high speed; dent or object in wound; under-1 bruise, swelling or large cut; behaviour change. "do not need to stay awake"; adult for "at least the first 24 hours" [opened]. NICE NG232 (May 2023) itself not opened (403) [recall]. | AGREES (one omission) | P3: add to `callIf` line 4: "…bruising behind the ears or a black eye they didn't hit, a dent or open wound." |
| F-7 | `swallowed-battery-magnet-beads` us, steps 2–3 | "Battery, over 12 months, swallowed in the last 12 hours, able to swallow: give 2 teaspoons (10 mL) of honey on the way." / "Repeat the honey about every 10 minutes, up to 6 doses." | National Capital Poison Center guideline: ≥12 months, within 12 h, able to swallow, "10 mL (2 teaspoons) of honey… every 10 minutes for up to 6 doses"; "Do not delay going to an ER". Revised 6/2018, still the live version [opened]. | AGREES | P3 wording only: "up to 6 times" instead of "up to 6 doses" (the app's no-doses rule) |
| F-8 | `swallowed-battery-magnet-beads` anz, steps 2–3 | honey over 1, jam under 1, "every 10 minutes until you reach care" | ANZCOR 9.5.1 (approved June 2025, amended July 2026): honey over 1, jam under 1, 10 mL every 10 minutes "until they reach higher level of care"; "If honey is not available, use jam"; "Give nothing else by mouth"; "Do NOT try to make them vomit" [opened]. | AGREES | none |
| F-9 | `swallowed-battery-magnet-beads` uk, eu, ca | No honey: "Give nothing to eat or drink unless the call handler tells you to." | NHS national page: "call 999 or take them to A&E straight away", no mention of honey [opened]. Cambridge University Hospitals NHS leaflet: honey 10 mL every 10 min for children over 12 months within 12 h, before hospital [search]. ESPGHAN 2021 position paper supports pre-hospital honey over 1 year if it doesn't delay care [recall, unverified]. | BODIES DIFFER / UNCLEAR | Recheck (P2): if the ESPGHAN text or an RCEM/RCPCH national page confirms, add the US-style honey step to uk/eu. Leave ca as is until a Canadian source is read. |
| F-10 | `heatstroke-hot-car` step 4, `dont` | "Cool the skin with cool water, by spraying or sponging, and fan them." / "Do not use an ice bath on a young child." | RCUK First Aid 2025: "whole-body (neck down) cold water (1-26°C) immersion until the core temperature falls below 39°C"; "cool first, transfer second" [opened]. ERC 2025 lay booklet: "start active cooling by any means available, like removing clothing, using wet cloths, fans, cool water" [opened]. AAP extreme temperature page (updated 28 Jan 2026): "place him in a cool (not cold) bathtub" [opened]. | BODIES DIFFER | Optional P3, step 4: "Cool them fast: a cool bath with their head held above water, or spray or sponge them with cool water and fan them. Keep going until help takes over." Keep the `dont` until a paediatric source is read. |
| F-11 | `nosebleed` steps 3–4, `callIf` | "Keep pinching for 10 minutes…" / "If it is still bleeding, pinch for another 10 minutes." / "Still bleeding after pinching twice: see a doctor or go to hospital." | AHA/ARC 2024: head slightly forward, nostrils pinched "for 10 to 15 minutes"; seek care if not stopped after 15 min of continuous pressure; ice of unknown use [opened]. | AGREES | none |
| F-12 | `stings` step 1, `dont` | "If the sting is still in the skin, brush or scrape it off sideways." / "Do not use tweezers or squeeze the sting." | AHA/ARC 2024: "Removal of a stinger remaining in the skin, as soon as possible, by plucking or scraping, can be beneficial" [opened]. The NHS says scrape and don't pinch [recall, unverified]. | BODIES DIFFER (the app's `dont` may slow removal) | P3, step 1: "If the sting is still in the skin, get it out quickly. Scraping it off sideways with a fingernail or card works well." Drop or soften the `dont`. |
| F-13 | `tooth-knocked-out` | "Baby tooth: do not put it back." / "keep it in milk, saline or saliva. Never in tap water." | IADT 2020: primary teeth are not replanted; milk is a storage medium [recall, unverified; iadt page not re-opened]. | AGREES | none |
| F-14 | `eye-injury` step 1 | "run lots of clean water over it for 20 minutes" | AHA/ARC 2024 covers chemical eye exposure; duration not in highlights [opened]. NHS 20 min (per app) [recall]. | AGREES | none |
| F-15 | `poison` `dont` | "Do not try to make them sick." | ANZCOR 9.5.1 (2025/2026): "Do NOT try to make them vomit" [opened]. | AGREES | none |
| F-16 | `dog-bite` step 1 | "Wash… with soap under running water for 15 minutes." | WHO rabies: 15 min wash [recall; verified round 5]. | AGREES | none |
| F-17 | `electric-shock`, `dehydration`, `broken-bone`, `very-unwell` | as written | No 2024–2026 change found. AHA/ARC 2024 has no new electric-shock item in highlights [opened]. | AGREES | none |
| F-18 | `trouble-breathing` anz, steps 2–3 | "Asthma reliever, Australia: 4 separate puffs, 4 breaths after each one, then wait 4 minutes…" / "…New Zealand: 6 separate puffs…" | National Asthma Council Australia 4×4×4 and Asthma NZ 6×6×6 first-aid plans [recall, unverified]. AHA/ARC 2024: spacer preferred to an inhaler alone [opened]. | AGREES, but **a medicine dose is stated** | Owner policy decision (P3): the file allows "a body's own first-aid plan", but the brief bans doses. Alternative: "Give their reliever through a spacer, as their asthma action plan or the call handler says." |

## D. Crying page (`src/data/crying.ts`)

| ID | App location | What the app says | Current guidance (body, year, tag) | Status | Suggested replacement |
|---|---|---|---|---|---|
| X-1 | `CRYING.redFlags` 1–2 | "Under 3 months with a temperature of 38°C (100.4°F) or higher" / "3 to 6 months with a temperature of 39°C (102.2°F) or higher" | NHS fever in children (reviewed 3 Jan 2024): both send to "Call 111" (urgent advice) [opened]. NICE NG143: under 3 months ≥38 °C = red; 3–6 months ≥39 °C = amber [recall, unverified; 403]. | AGREES (the app is stricter) | none |
| X-2 | `CRYING.redFlags` | "Not feeding, or no wet nappy in 8 hours" | `very-unwell` card says "no wee in 12 hours" | AGREES, but internally inconsistent | P3: align the two figures, or say why they differ |
| X-3 | `CRYING.checks` last item | "No honey before age 1." | All bodies read: no honey under 12 months [opened, ANZCOR/NCPC]. Iran MANA says 2 years (round 5 memory). | AGREES | none (Iran's 2-year figure is on the round-5 list) |
| X-4 | `neverShake`, `stepAway` | "Never shake a baby…"; back in cot, leave the room, 5–10 minutes | Unchanged ICON/NHS/CDC advice [recall]. | AGREES | none |

## E. Safe sleep and swaddling

| ID | App location | What the app says | Current guidance (body, year, tag) | Status | Suggested replacement |
|---|---|---|---|---|---|
| S-1 | `safe-sleep-essentials` list | back to sleep; firm flat surface; clear cot; "In your room, in their own space, for the first 6 months or more"; nothing weighted; stop swaddling at signs of rolling; no inclines; monitors don't lower risk | AAP 2022 policy is still current; no 2025/2026 AAP update found [search]. AAP parent guide: room-share "at least the first six months"; "doesn't recommend bed sharing… under any circumstances" [search]. | AGREES | none |
| S-2 | `safe-sleep-essentials` callout | "up to 67 times higher on a couch or soft armchair" | AAP parent page figure [recall, unverified this round]. | AGREES | none |
| S-3 | `safe-sleep-essentials` bed-sharing paragraph | UK: not if "premature or small at birth (under 37 weeks or 2.5 kg)", smoking, alcohol, drugs, sedating medicine | Lullaby Trust / NHS [recall, unverified this round]. | AGREES | none |
| S-4 | `swaddling-and-hips` "When to stop"; `home-safety-by-stage` row 1 | "Stop wrapping… as soon as your baby shows signs of trying to roll, which can be from about 2 months." | AAP "Swaddling: is it safe?" (updated 15 Jul 2022): "Stop swaddling as soon as your baby shows any signs of trying to roll over"; some roll "as early as 2 months"; hip-healthy swaddling lets legs "bend up and out"; no weighted swaddles [opened]. | AGREES | none |

## F. Feeding (`guides-food.ts`)

| ID | App location | What the app says | Current guidance (body, year, tag) | Status | Suggested replacement |
|---|---|---|---|---|---|
| N-1 | `starting-solids` p1, p3 | "around 6 months"; "Health bodies agree: not before 4 months." | WHO 2023 complementary feeding guideline: start at 6 months [search]. | AGREES | none |
| N-2 | `starting-solids` drinks list | "Cow's milk: fine in cooking. As a main drink, most bodies say from 12 months, though advice differs" | WHO 2023: for 6–11 months fed milks other than breast milk, "either milk formula or animal milk" (conditional); 12–23 months, animal milk, and follow-up formula not recommended. ESPGHAN: not the main drink before 12 months [search]. | AGREES (the difference is named) | none |
| N-3 | `starting-solids`; `everyday-eating` table | "No juice, tea or sweet drinks." (6–12 months) | WHO 2023: sugar-sweetened drinks "should not be consumed"; 100% juice limited [search]. ESPGHAN: juice diluted, once a day [search]. AAP: no juice under 1 [recall]. | AGREES (stricter than WHO) | none |
| N-4 | `starting-solids` "Allergy foods" | "Once solids are going well, offer well-cooked egg and smooth peanut butter mixed into food…" / "keep it in their meals regularly" | ASCIA 2026 update (first in a decade): peanut and egg "soon after solid feeding begins"; ongoing intake goal changed "from a twice-weekly… to once a week" (Medical Republic, 22 Jan 2026) [opened, news report of the guideline]. | AGREES | Optional P3: "Soon after solids begin, offer…" |
| N-5 | `starting-solids` safety callout | "If your baby has severe eczema or already has a food allergy, talk to your doctor or health centre before starting allergy foods. Advice differs on whether to test first." | NIAID 2017 addendum: evaluate high-risk infants first [recall]. ASCIA and the 2021 US consensus: don't delay, routine testing not needed [recall, unverified]. | BODIES DIFFER (named in app) | P3: add "Try not to let this delay starting." |
| N-6 | `milk-feeds` "Keep it clean" step | "Make each feed fresh, and throw away what's left after a feed." (no water temperature) | NHS making up formula (reviewed 31 Aug 2023): "Boil the water. Then leave the water to cool for no more than 30 minutes" so it "remains at a temperature of at least 70C", which "will kill any harmful bacteria" [opened]. WHO 2007 safe preparation, the same [recall]. CDC: 70 °C advised mainly for babies under 2 months, preterm or immunocompromised [recall, unverified]. | Gap (BODIES DIFFER in scope) | P2: add a sentence to "Keep it clean": "Make powder up with water boiled and left to cool for no more than 30 minutes, so it is still hot enough to kill germs. Cool the bottle before feeding." |
| N-7 | `starting-solids` drinks; `crying`; `fever-and-sick-days`; `medicines-at-home` | "No honey before 12 months" | NCPC, ANZCOR [opened]. | AGREES | none |
| N-8 | `starting-solids` table; `home-safety-by-stage` | grapes quartered; "no whole nuts until 5, and no popcorn or hard sweets until at least 4" | NHS (nuts under 5) and AAP (popcorn under 4) [recall, unverified this round]. | AGREES | none |
| N-9 | `starting-solids` drinks | "Water: sips from an open cup with meals from about 6 months." | WHO / NHS [recall]. | AGREES | none |

## G. Fever and sick days (`guides-health.ts`)

| ID | App location | What the app says | Current guidance (body, year, tag) | Status | Suggested replacement |
|---|---|---|---|---|---|
| V-1 | `fever-and-sick-days` p1 | "A fever is a temperature of 38°C or more." | NHS: "A high temperature is 38C or more" [opened]. | AGREES | none |
| V-2 | `fever-and-sick-days` list | "Skip cold baths, cold sponging and alcohol rubs." | NHS: "do not undress your child or sponge them down to cool them" [opened]. NICE NG143: no tepid sponging [recall]. | AGREES | none |
| V-3 | `fever-and-sick-days` list | "Don't switch back and forth between two fever medicines unless a doctor or pharmacist has told you to." | NHS: "do not alternate ibuprofen and paracetamol, unless a health professional… tells you to" [opened]. | AGREES | none |
| V-4 | `fever-and-sick-days` table, "See a doctor soon" column, row 1 | "A baby 3 to 6 months with a fever" | NHS (2024): "3 to 6 months old and has a temperature of 39C or higher" → **Call 111, urgent advice** [opened]. NICE NG143: 3–6 months ≥39 °C = amber, needing same-day face-to-face assessment [recall, unverified]. The app's own `fever-young-baby` uk card and `crying.ts` red flags treat 3–6 months ≥39 °C as "get medical help now". | OUTDATED / internally inconsistent: "soon" under-triages | **P1** replace the table cell pair with left: "A baby 3 to 6 months with 39°C or more" (Get help now) and right: "A baby 3 to 6 months with a lower fever" (See a doctor soon). Or at least: "A baby 3 to 6 months with a fever: get them seen today". |
| V-5 | `fever-and-sick-days` table and callout | "A fever lasting more than 2 to 3 days"; "some bodies say 24 hours for under-2s, others 2 to 3 days, others 5" | NHS: "lasted for 5 days or more" → 111 [opened]. AAP: 24 h under 2, 3 days over 2 [recall]. | AGREES (differences named) | none |
| V-6 | `fever-and-sick-days` list | "Fever medicine is for comfort when your child is distressed." (no young-baby caveat) | NHS: "do not give paracetamol to a child under 2 months"; "do not give ibuprofen to a child who is under 3 months, weighs under 5kg, has chickenpox, or is dehydrated" [opened]. | Gap | P3: add "Don't give fever medicine to a baby under 3 months unless a doctor tells you to." |
| V-7 | `fever-and-sick-days` "Taking a temperature" | "Under the arm is common and fine…" | NICE NG143: electronic axillary thermometer under 4 weeks; axillary or tympanic 4 weeks–5 years; no routine oral or rectal [search, NICE snippet]. | AGREES | none |
| V-8 | doses anywhere | No fever-medicine doses in any file read. Only amounts found: honey/jam (F-7, F-8), asthma puffs (F-18), and the "0.5 ml and 5 ml" decimal-point warning in `medicines-at-home` | brief: no doses | AGREES, except F-18 | see F-18 |

## H. Teeth, car seats, jaundice, newborn, vaccines, medicines, water, home safety

| ID | App location | What the app says | Current guidance (body, year, tag) | Status | Suggested replacement |
|---|---|---|---|---|---|
| T-1 | `healthy-teeth` table | "First tooth to 3: A smear, about the size of a grain of rice" / "3 to 6: A pea-sized amount" / "7 and up: A pea-sized amount of family toothpaste" | AAPD/ADA: rice-grain smear under 3, pea-size 3–6; UK Delivering Better Oral Health: smear under 3, pea-size 3+ [recall, unverified this round]. | AGREES | none |
| T-2 | `healthy-teeth` last p | "Take your child to a dentist when the first teeth come through, or by their first birthday." | AAPD: by the first birthday or within 6 months of the first tooth [recall]. | AGREES | none |
| T-3 | `healthy-teeth` teething list | "It doesn't cause a real fever."; "Teething gels aren't recommended."; "Never use amber necklaces…" | FDA (benzocaine and teething jewellery warnings) [recall]. NHS is softer on gels [recall]. | AGREES (gels: BODIES DIFFER mildly) | none |
| K-1 | `car-seats` table rows 1–4 | "Many seats allow 2 years or more; UK rules say at least 15 months." / booster "usually at about 145 cm, often between 10 and 12" / "Keep all children under about 13 in the back." | AAP car-seat page (updated 16 Apr 2026): rear-facing "as long as possible"; harness "at least to 4 years"; booster until belts fit, "typically when children reach about 4 feet 9 inches in height and are 8 to 12 years of age"; "All children younger than 13 years should ride in the back seat" [opened]. | AGREES (booster age range slightly off) | P3: "…usually at about 145 cm tall, between about 8 and 12 years." |
| J-1 | `newborn-jaundice` table | "Yellow in the first 24 hours after birth" → Get help now; "Pale, chalky or cream-coloured poo, or dark yellow or brown pee" → See a doctor today | NHS newborn jaundice (reviewed 24 Mar 2026): baby has jaundice and "is less than 24 hours old" → **Call 999 or go to A&E**; pale poo or dark pee → urgent GP, midwife or 111 [opened]. AAP 2022 hyperbilirubinemia guideline, NICE CG98: jaundice under 24 h needs urgent bilirubin measurement [recall, unverified]. | AGREES | none |
| J-2 | `newborn-jaundice` p, list | "still yellow at 2 weeks, or 3 weeks if born early, need a check"; "Looking at the skin isn't reliable"; no sunlight; no water | NICE CG98 prolonged jaundice 14/21 days; AAP 2022: visual estimation unreliable [recall, unverified]. NHS 2026 doesn't mention 14/21 days [opened]. | AGREES | none |
| J-3 | `newborn-jaundice` table | "Yellow palms or soles" → Get help now | Not in the NHS 999 list [opened]. Source not identified. | UNCLEAR (stricter, not harmful) | Recheck the source |
| W-1 | `first-weeks-at-home` | cord: "Nothing needs to go on it…"; "A temperature of 38°C or more, or feeling cold to the touch"; "Yellow skin in the first 24 hours" | WHO 2022 postnatal care (dry cord care); NHS jaundice: 36 °C or less counts as low [opened for NHS; WHO recall]. | AGREES | none |
| Q-1 | `vaccines-and-jabs` | after-effects; anaphylaxis signs "within minutes"; "A baby under 3 months with a fever needs help now."; CARD | No 2024–2026 change found. The "2026 Canadian guideline on vaccine pain" was not checked this round. | AGREES / UNCLEAR (CARD date) | Recheck the CARD citation date |
| M-1 | `medicines-at-home` | "Cough and cold medicines aren't recommended for young children. The age limit is 2, 4 or 6 depending on the country"; methadone/opium warning; "Never give aspirin to anyone under 16." | FDA under 2, US labels under 4; MHRA under 6 [recall, unverified this round]. | AGREES | none |
| H-1 | `water-safety`, `home-safety-by-stage` | arm's reach; four-sided pool fence; lessons "from about age 1"; no "drown-proof" | AAP drowning prevention / WHO [recall, unverified this round]. | AGREES | none |

---

## Prioritised fix list

**P1: could cause harm**

1. **V-4: `guides-health.ts` › `fever-and-sick-days` › table, "See a doctor soon" row 1, `'A baby 3 to 6 months with a fever'`.**
   - **Problem:** "Soon" under-triages. NHS sends 3–6 months at ≥39 °C to urgent advice (111), and NICE rates it amber, meaning same-day assessment. The app's own first-aid card and crying page call it "get medical help now", so the guide contradicts them.
   - **Fix:** put "A baby 3 to 6 months with 39°C or more" in the "Get help now" column, and "A baby 3 to 6 months with a lower fever" in "See a doctor soon". Or at minimum: "A baby 3 to 6 months with a fever: get them seen today."
   - **Persian:** the Persian locale needs the same change.

No other P1 items. Nothing read contradicts a current guideline in a way likely to harm a child.

**P2: outdated or behind current practice, not dangerous**

2. **C-3: `firstaid.ts` › `cpr-baby` › anz step 3** (two-finger presses).
   - ANZCOR's lay guideline (2021) still says two fingers, but AHA/AAP 2025 removed the technique as ineffective at reaching depth, and ERC/RCUK 2025 use two thumbs.
   - Because Iran has no default region, any Iranian parent who picks ANZ gets two fingers.
   - Owner decision: either allow thumbs in the ANZ step (wording in C-3), or keep strict region-locking and recheck when ANZCOR publishes its ILCOR-2025 update.
   - Of all the P2 items, this has the highest stakes.
3. **N-6: `guides-food.ts` › `milk-feeds` › "Keep it clean" step.** Add the 70 °C rule for powdered formula (NHS 2023, WHO). Wording is in N-6.
4. **F-9: `firstaid.ts` › `swallowed-battery-magnet-beads` › uk and eu.** No honey step, although an NHS trust leaflet and (by recall) ESPGHAN 2021 support pre-hospital honey over 1 year. Mark UNCLEAR until ESPGHAN or RCEM is read, then consider adding the US-style step.

**P3: wording, consistency, minor gaps**

- **F-12 `stings`:** replace "Do not use tweezers or squeeze the sting." AHA/ARC 2024 says pluck or scrape, as soon as possible. Speed matters more than method.
- **F-3 `anaphylaxis` step 1:** mention adrenaline nasal spray (FDA 2024/2025).
- **F-4 `anaphylaxis`:** optional "Hold a small child lying flat, not upright" (ASCIA, recall).
- **F-6 `head-injury` `callIf`:** add "a black eye they didn't hit" (NHS 2025 list).
- **F-10 `heatstroke-hot-car` step 4:** add the cool-bath option (AAP 2026; RCUK 2025 cold-water immersion). Recheck the "no ice bath" line against a paediatric source.
- **F-2 `severe-bleeding`:** optional tourniquet line (RCUK 2025). Bodies differ.
- **F-7 `swallowed-battery-magnet-beads` us step 3:** "up to 6 doses" → "up to 6 times".
- **F-18 `trouble-breathing` anz steps 2–3:** puff counts are medicine doses. Owner policy decision; alternative wording is in F-18.
- **V-6 `fever-and-sick-days`:** add "Don't give fever medicine to a baby under 3 months unless a doctor tells you to."
- **X-2:** align "no wet nappy in 8 hours" (crying.ts) with "no wee in 12 hours" (`very-unwell` card).
- **K-1 `car-seats`:** booster age "between about 8 and 12" (AAP 2026) instead of "often between 10 and 12".
- **N-4, N-5 `starting-solids`:** "Soon after solids begin…" (ASCIA 2026), and "Try not to let this delay starting."
- **F-1 `burns-scalds`:** optional "for at least 20 minutes" (NHS now 20–30).

## Recheck before shipping

- **AHA 2025 Part 6 full text** (Circulation, doi 10.1161/CIR.0000000000001370). It returned 403, so the following AHA points rest on the AAP summary and search snippets only. Confirm them from the AHA text:
  - lone-rescuer wording (2 minutes of CPR before calling)
  - heel of one hand for infant chest thrusts in choking
  - infant and child depth
  - the drowning breaths-first wording
- **ANZCOR:** watch for revised Guidelines 4, 6 and 8 after ILCOR 2025. The ANZ cards on infant compressions and child choking would change.
- **ERC 2025 First Aid chapter** (Resuscitation 2025;215:110752): could not be opened. Check burns duration, the tourniquet, heatstroke immersion in children, stings, and dental avulsion.
- **NICE NG143:** the April 2025 exceptional surveillance outcome (403). NICE NG232 and CG98 primary text was not opened this round.
- **ESPGHAN 2021 button-battery position paper and any RCEM/RCPCH UK pathway:** check for pre-hospital honey (F-9).
- **ASCIA 2026 full guideline text:** this round read only a news report.
- **Source of "Yellow palms or soles = get help now"** (J-3) and of the "2026 Canadian guideline" CARD date (Q-1).
- **Iran-specific:** honey age (app 1 year vs MANA 2 years); Iran's 115 number; and whether any Iranian MoH first-aid curriculum (Red Crescent) prescribes a CPR or choking method, since Iranian parents must pick a foreign region.
- **Teeth, safe sleep and choking-food figures** were not re-opened this round (recall only). Spot-check before an endorsement review.

## Sources

Resuscitation and first aid:

- AAP / healthychildren.org. "AHA and AAP release update CPR guidelines to help save young lives", dated 23 Oct 2025. https://www.healthychildren.org/English/news/Pages/AHA-and-AAP-release-update-CPR-guidelines-to-help-save-young-lives.aspx [opened]
- Contemporary Pediatrics. "AAP, AHA update pediatric CPR and ECC guidelines" (2025). https://www.contemporarypediatrics.com/view/aap-aha-update-pediatric-cardiopulmonary-resuscitation-emergency-cardiovascular-care-guidelines [opened]
- AHA. Part 6: Pediatric Basic Life Support, 2025. https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-basic-life-support [403; snippet only, search]
- AHA 2025 Pediatric BLS full text. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001370 [403]
- Study-guide summaries of AHA 2025 (open-exam-prep.com and similar) [search; low weight]
- Resuscitation Council UK. Paediatric basic life support guidelines 2025, published 27 Oct 2025. https://www.resus.org.uk/library/2025-resuscitation-guidelines/paediatric-basic-life-support-guidelines [opened]
- Resuscitation Council UK. First aid guidelines 2025, published 27 Oct 2025. https://www.resus.org.uk/library/2025-resuscitation-guidelines/first-aid-guidelines [opened]
- European Resuscitation Council. Guidelines 2025: booklet for the public (v1.1). https://www.erc.edu/media/p5ymaeej/gl2025_layperson_book_ipdf-v11-e.pdf [opened, pdftotext]
- ERC Guidelines 2025 First Aid, Resuscitation 2025;215 Suppl 1:110752 [not reachable; search]
- ANZCOR Guideline 6: Compressions, approved April 2021. https://www.anzcor.org/home/basic-life-support/guideline-6-compressions [opened]
- ANZCOR Guideline 4: Airway, approved April 2021. https://www.anzcor.org/home/basic-life-support/guideline-4-airway [opened]
- ANZCOR Guideline 9.5.1: Poisoning, approved June 2025, amended July 2026. https://www.anzcor.org/home/first-aid/guideline-9-5-1-first-aid-management-of-poisoning [opened]
- AHA/ARC. 2024 Guidelines for First Aid, Highlights PDF. https://u1-cd-cpr.sc.heart.org/en/-/media/CPR-Files/CPR-Guidelines-Files/2024-Highlights/Highlights-2024-FA-240927.pdf [opened, pdftotext]
- ILCOR CoSTR FA 770: duration of cooling with water for thermal burns (draft, 22 Feb 2021). https://costr.ilcor.org/document/duration-of-cooling-with-water-for-thermal-burns-as-a-first-aid-intervention-fa-770-systematic-review [opened]
- IFRC. International first aid, resuscitation and education guidelines (2020 edition). https://www.ifrc.org/document/international-first-aid-resuscitation-and-education-guidelines [search]
- CDAC Network message library, burns (citing the IFRC reference centre). https://www.cdacnetwork.org/burns [search]
- American Red Cross. Burns: how to help. https://www.redcross.org/take-a-class/resources/learn-first-aid/burns [search]

Button batteries and anaphylaxis:

- National Capital Poison Center. Button battery guideline, revised 6/2018. https://www.poison.org/battery/guideline [opened]
- Cambridge University Hospitals NHS. Button battery ingestion in children: advice for parents. https://www.cuh.nhs.uk/patient-information/button-battery-ingestion-in-children-advice-for-parents-and-carers/ [search]
- ESPGHAN position paper on button battery ingestion (Mubarak et al., JPGN 2021) [recall, unverified]
- ARS Pharmaceuticals / FDA. neffy 1 mg approval, 5 Mar 2025 (BioSpace press release). https://www.biospace.com/press-releases/ars-pharmaceuticals-announces-fda-approval-of-neffy-1-mg-epinephrine-nasal-spray-for-type-i-allergic-reactions-including-anaphylaxis-in-pediatric-patients-weighing-15-to-30-kilograms [search]
- ASCIA anaphylaxis action plan, "hold young children flat" [recall, unverified]

NHS and AAP parent pages:

- NHS. What to do if your child has an accident, reviewed 18 Dec 2025. https://www.nhs.uk/baby/first-aid-and-safety/first-aid/what-to-do-if-your-child-has-an-accident/ [opened]
- NHS. Head injury and concussion, reviewed 29 May 2025. https://www.nhs.uk/conditions/head-injury-and-concussion/ [opened]
- NHS. Fever in children, reviewed 3 Jan 2024. https://www.nhs.uk/conditions/fever-in-children/ [opened]
- NHS. Newborn jaundice, reviewed 24 Mar 2026. https://www.nhs.uk/conditions/jaundice-newborn/ [opened]
- NHS. Making up baby formula, reviewed 31 Aug 2023. https://www.nhs.uk/baby/breastfeeding-and-bottle-feeding/bottle-feeding/making-up-baby-formula/ [opened]
- AAP. Extreme temperature exposure, updated 28 Jan 2026. https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/extreme-temperature-exposure.aspx [opened]
- AAP. Car safety seats: information for families, updated 16 Apr 2026. https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Car-Safety-Seats-Information-for-Families.aspx [opened]
- AAP. Swaddling: is it safe?, updated 15 Jul 2022. https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Swaddling-Is-it-Safe.aspx [opened]
- AAP. A parent's guide to safe sleep, and AAP 2022 safe sleep policy. https://healthychildren.org/english/ages-stages/baby/sleep/pages/a-parents-guide-to-safe-sleep.aspx [search]

NICE (403 this round):

- NICE NG143. Fever in under 5s (last updated 26 Nov 2021; April 2025 exceptional surveillance). https://www.nice.org.uk/guidance/ng143 [search; PDF 403]
- NICE NG232. Head injury (May 2023) [recall, unverified]
- NICE CG98. Jaundice in newborn babies [recall, unverified]

Feeding and allergy:

- WHO. Guideline for complementary feeding of infants and young children 6–23 months (2023). Summaries via ENN and NCBI Bookshelf: https://ennonline.net/fex/72/who-guideline-for-complementary-feeding-of-infants-and-young-children [search]
- ESPGHAN Infant Feeding Campaign summary. https://www.espghan.org/dam/jcr%3Aea5c9b57-9315-44b7-b9a0-149511b96654/ESPGHAN%20Infant%20Feeding%20Campaign%20-%20Guidance%20Summary.pdf [search]
- Medical Republic. New ASCIA advice on infant formula and allergen introduction (22 Jan 2026). https://www.medicalrepublic.com.au/?p=122697 [opened; news report of the ASCIA 2026 guideline]
- ASCIA guidelines on infant feeding and allergy prevention (2020 / 2024 format). https://www.allergy.org.au/images/pcc/ASCIA_Guidelines_infant_feeding_and_allergy_prevention.pdf [search]
- NIAID 2017 addendum guidelines on peanut allergy prevention [recall, unverified]
