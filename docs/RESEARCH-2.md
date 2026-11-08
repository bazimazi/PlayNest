# Research Brief, Part 2: from play app to parenting companion (0–12 years)

> **Corrections:** [RESEARCH-3.md](RESEARCH-3.md) carries newer findings on AAP screen limits, Bebbo, ANZCOR, NHS toothpaste, the mood check-in, UK helplines and more. Its table lists each one.

Part 1 ([RESEARCH.md](RESEARCH.md)) covers the evidence behind play. This part supports the expansion described in
[EXPANSION.md](EXPANSION.md). It has four sections:

1. **Market:** who else is out there, why parents stay, why they leave, and the gaps.
2. **Evidence by domain:** feeding, sleep, growth, health, behaviour, emotions, school age, parent wellbeing and safety.
3. **Mobile UX:** what makes an app feel native, calm and quick to use with one hand at 3 a.m.
4. **Technology:** storage, sync, notifications, growth charts, i18n, privacy and compliance.

Research was done in October 2026. Prices are US App Store prices and change often. Anything marked *(unverified)*
comes from a single secondary source.

---

## 1. Market

### 1.1 The landscape at a glance

| Segment | Leading apps | What they do well | Where they fail |
|---|---|---|---|
| **Trackers (0–3)** | Huckleberry (4.9★, 76K), Baby Tracker/Nighp (4.8★, 227K), Nara Baby, Glow Baby, Baby Daybook, Sprout | One-tap logging, caregiver sync, widgets, Live Activities, Watch, nap prediction (Huckleberry *SweetSpot*), doctor-ready exports | Retroactive paywalls (Glow, Sprout), sync failures and data loss (Sprout, Glow, Nara), ads at 3 a.m., privacy labels that say data is "used to track you" |
| **Hardware companions** | Nanit (#1 US parenting app by revenue, Q3 2025), Owlet, Hatch | Sleep insights from devices | Setup that forces a subscription choice; past data moved behind paywalls |
| **Development & play** | Kinedu (to 6 y), BabySparks (0–3), Lovevery (kit-bound), Vroom (free), **Bebbo (UNICEF)**, Khan Kids (2–8, for the child) | Daily age-matched activities, the "why" behind them | Paywalls, age-mismatched activities, upsell banners; most stop at 3–6 years |
| **Coaching** | Good Inside (4.9★ at **$279/yr**), ParentLab/Era | Scripts for hard moments, emotional coaching | Price; separate from daily life (routines, play) |
| **Content & community** | BabyCenter, What to Expect, Peanut | Breadth | Data selling (Mozilla *Privacy Not Included*), notification overload, ads |
| **Memories** | FamilyAlbum (free unlimited storage, 338K reviews), Tinybeans, Qeepsake | Memories that build up over the years | Old memories put behind a paywall (Tinybeans), book upsells |
| **Older kids & family** | Joon (6–12, quests and a pet), Brili (routines), S'moresUp, Cozi, FamilyWall, Greenlight, Bark | Routines, chores, money, safety | Joon's motivation fades in 4–8 weeks; Brili is "too expensive for a timer"; **OurHome's servers went dark** with no export |

Notable 2025–26 moves:
- **AI everywhere, mostly in the cloud and behind paywalls:** Huckleberry "Berry", Good Inside "GiGi", Kinedu "Ana",
  BabySparks "Ava", Peanut "Ask Peanut".
- Baby Tracker's *What's Next* timing cues run on the device.
- Nanit raised $50M for a "Parenting Intelligence System".
- Co-parenting tools (TalkingParents, OurFamilyWizard) are top-5 in US parenting revenue.

### 1.2 Feature coverage

PN = PlayNest today. ● core or free · ◐ partial or paid · ○ none.

| Area | Huckleberry | Baby Tracker | Nara | Kinedu | Bebbo | Good Inside | Joon/Brili | **PN** |
|---|---|---|---|---|---|---|---|---|
| Feed / sleep / diaper log | ● | ● | ● | ◐ | ○ | ○ | ○ | ○ |
| Sleep prediction | ◐ | ◐ | ○ | ○ | ○ | ○ | ○ | ○ |
| Growth charts (WHO) | ◐ | ● | ● | ? | ● | ○ | ○ | ○ |
| Vaccines & check-ups | ? | ● | ● | ○ | ● | ○ | ○ | ○ |
| Medicine / fever | ● | ● | ? | ○ | ○ | ○ | ○ | ○ |
| Milestones | ● | ? | ● | ● | ● | ○ | ○ | ● |
| Play & activities | ○ | ○ | ○ | ● | ● | ○ | ◐ | ● |
| Routines & chores | ◐ | ○ | ◐ | ○ | ○ | ○ | ● | ○ |
| Behaviour & emotion coaching | ◐ | ○ | ○ | ◐ | ◐ | ● | ◐ | ○ |
| Memories | ◐ | ◐ | ● | ○ | ○ | ○ | ○ | ◐ |
| Caregiver sync | ● | ● | ● | ◐ | ○ | ○ | ● | ○ |
| Parent wellbeing | ○ | ○ | ● | ○ | ◐ | ◐ | ○ | ○ |
| Doctor report / export | ◐ | ● | ◐ | ◐ | ○ | ○ | ○ | ○ |
| Widgets / Watch / Live Activities | ● | ● | ● | ○ | ○ | ○ | ○ | ○ |
| **Offline, no account** | ○ | ◐ | ○ | ○ | ● | ○ | ○ | **●** |

### 1.3 Why parents stay

1. **Shared logging and smooth shift handoffs** between caregivers. Reviewers name this as the reason they pay.
2. **Very fast logging:** one tap, widgets, Live Activities, Watch, voice. Physical one-tap buttons (Talli) measurably
   improved logging consistency.
3. **A "what's next" answer that removes a decision.** Examples: SweetSpot, *What's Next*, and PlayNest's own "one big
   pick".
4. **Data to take to the doctor:** PDF and printable summaries.
5. **Personal, not population, numbers.** Parents prefer "your baby's own averages" to "compare with millions".
6. **A calm, uncluttered interface.** This is Nara's main praise.
7. **Small, age-matched daily content** (Vroom, Bebbo, BabySparks).
8. **Trusted sources:** UNICEF, AAP and CDC, cited inline.
9. **Memories that build up.** They become precious, which also makes them lock-in.
10. **Fair, predictable pricing:** a free core that never shrinks, a lifetime unlock, one plan for all caregivers.

**The biggest retention problem is outgrowing the app, not churn.** Logging usually stops around **9 months**, or when
daycare starts; some parents drop trackers at 6–10 weeks. An app built only around logging loses its family just as the
parenting questions get harder.

### 1.4 Why parents leave or come to hate an app

1. Features moved **behind a paywall after the fact** (Glow, Sprout, Nanit, Hatch, Cozi).
2. **Upsells inside core flows**: during logging, in onboarding, a banner that won't close.
3. **Ads at 3 a.m.**, sometimes even for paying users.
4. **Caregiver sync that fails**, with duplicates and stale widgets.
5. **Data loss** when changing phones or after reinstalling.
6. **Service shutdowns** that strand the data (OurHome, Mush, Lifecake).
7. **Anxiety, guilt and comparison.**
   - Parents describe "liberation" after quitting trackers (Edinburgh study, 2018).
   - Wonder Weeks is the cautionary tale: precise-looking predictions with weak science.
8. **Generic or wrong guidance:** activities at the wrong age, preemies without corrected age.
9. **Billing traps:** hard cancellation, weekly pricing.
10. **Clutter:** notification overload, community and shopping pushed on the user.
11. **Privacy.** Every major tracker checked declares tracking in its Apple privacy label. BabyCenter's owner says it
    plans to sell personal information. In Aug 2025 a jury found Meta illegally obtained Flo health data.

### 1.5 Gaps, and where PlayNest can win

| Gap | Evidence | PlayNest move |
|---|---|---|
| **No app spans 0–12.** Most stop at 3–6 years; parents of 3–8-year-olds juggle 4–5 apps. | Wonder Weeks 0–20 m, BabySparks 0–3, Huckleberry 0–5, Kinedu ≤6, Joon 6–12 | One longitudinal child profile with age-adaptive modules |
| **No graceful "graduation" from logging.** Trackers lose families at 6–12 months. | 360info / DTE; Reddit | Tracking is prominent at 0–12 m, then fades into light-touch weekly check-ins, routines, play, reading and coaching. The app suggests "you don't need to log this any more". |
| **Privacy-first, local-first products barely exist.** | Bebbo proves offline, no-account and no-ads works at scale (1.4M families). Privacy-minded parents self-host (Baby Buddy). | No account, end-to-end encrypted caregiver sync, a full export that is never gated: "your data outlives us" |
| **Nobody brands themselves on anti-anxiety design.** | BSA 2018; Wonder Weeks backlash | Ranges not dates; corrected age; no guilt notifications or streak pressure; inline sources; clear "talk to your doctor" rules |
| **On-device AI is untapped.** | Cloud chat behind paywalls everywhere | Later: an on-device assistant grounded in our curated content, and natural-language logging |
| **Coaching is separate from daily life.** | Good Inside is loved, at $279/yr | A **"Hard moment" button** with age-specific scripts (tantrum, sibling fight, bedtime battle) that links to a follow-up play idea |
| **Pre-reader routines (3–7) have no good option.** | Joon starts at 6; Brili is expensive; OurHome is dead | Picture-based routines with a kid-facing mode |
| Thin areas | — | Well-child visit prep (questions to ask plus a milestone summary PDF), screen-time plan without surveillance, reading log, school readiness, two-household caregiving |

### 1.6 Monetisation that parents accept

| Accepted | Resented |
|---|---|
| A free core that never shrinks | Retroactive paywalls, daily log caps |
| A lifetime or one-time unlock: $38–80 is typical (Baby Daybook $49.99, BabySparks $37.99) | Charging per caregiver; a Premium that can't be shared |
| One family plan covering every caregiver | Paywalling your own history or exports |
| Paying for real expertise (Good Inside) | Ads for paying users; weekly pricing; store-only cancellation |
| Nonprofit or free (Bebbo, Vroom, Khan Kids), which earns the most trust | Selling data; formula marketing |

**PlayNest's model:**
- Everything that runs on the device is free forever, with no ads and no data sales.
- An optional one-time **Family** unlock covers premium content packs and extras.
- Optional encrypted sync, if it has running costs, is a small yearly fee that covers every caregiver.
- History and export are never gated.

Market sources: App Store listings (Huckleberry id1169136078, Baby Tracker id779656557, Nara id1444639029, Glow Baby
id1077177456, Baby Daybook id1446283219, Kinedu id741277284, BabySparks id794574199, Good Inside id6463803046,
Qeepsake id1332312787, Peanut id1178656034), [Sensor Tower Q3 2025 parenting revenue](https://sensortower.com/blog/2025-q3-unified-top-5-parenting-revenue-us-60770e78241bc16eb81e8fcf),
[Bebbo](https://bebbo.app/) and [UNICEF on Bebbo](https://www.unicef.org/eca/Bebbo-parenting-app),
[Mozilla Privacy Not Included: BabyCenter](https://www.mozillafoundation.org/en/privacynotincluded/babycenter/),
[HHS-OIG on the Glow settlement](https://oig.hhs.gov/fraud/enforcement/attorney-general-becerra-announces-landmark-settlement-against-glow-inc-fertility-app-risked-exposing-millions-of-womens-personal-and-medical-information),
[BSA 2018: baby apps leave parents feeling guilty](https://britsoc.co.uk/about/latest-news/2018/april/baby-apps-leave-parents-feeling-guilty-and-pressured-research-says/),
[360info/DTE: hidden dangers of baby apps](https://www.downtoearth.org.in/amp/story/science-technology/baby-apps-are-everywhere-but-their-use-can-carry-hidden-dangers),
[Biviji et al., JMIR 2021](https://scholarworks.indianapolis.iu.edu/items/e7bee561-2b8a-44eb-ae08-e857c49e35fa),
[JMIR Pediatrics & Parenting 2022](https://pediatrics.jmir.org/2022/4/e37581/XML),
[Engadget on Talli](https://www.engadget.com/the-talli-baby-tracker-is-a-one-touch-system-for-logging-kids-activities-130022927.html),
[Fierce Healthcare on Meta and Flo](https://www.fiercehealthcare.com/digital-health/meta-found-liable-abusing-consumer-reproductive-health-data-run-targeted-ads).
Not verified: Baby+, BabyBook, OurPact and ParentLab details, Joon's US price, and the exact Mush and Lifecake
shutdown dates.

---

## 2. Evidence by domain

What the main bodies advise, the numbers PlayNest could encode, where the bodies disagree, and where the app hands over
to a professional. Checked online in October 2026. Items marked **[verify]** come from training knowledge or secondary
coverage and were **not** re-checked against the primary source.

Short names: AASM (American Academy of Sleep Medicine), CPS (Canadian Paediatric Society), DGA (US Dietary Guidelines),
HER (the 2019 drinks consensus of AAP, AAPD, AND and AHA, via [Healthy Eating Research](https://www.aapd.org/globalassets/media/policies_guidelines/e_healthybev.pdf)).

### 2.1 Cross-cutting rules

| Rule | What it means for PlayNest |
|---|---|
| **Teach, don't diagnose** | Software that interprets one child's data to diagnose, screen or advise treatment can become a regulated medical device (SaMD): EU MDR Rule 11 puts most decision-support software in Class IIa or higher; in the US the FDA's General Wellness and Clinical Decision Support guidances apply **[verify current revision]**. Cognoa's autism aid (Canvas Dx) needed FDA De Novo authorisation in 2021. PlayNest keeps to information, logging, reminders, "talk to your clinician" prompts and static red-flag lists that route to a professional. |
| **Region and source on every record** | AAP, NHS/NICE, CPS, WHO and Australian bodies disagree on bed-sharing, vitamin D, iron, choking first aid, thermometers and milk storage. Every guidance record stores a `region` and a `source`. |
| **US federal guidance is unstable** | Since 2025, US federal guidance on vaccines, fluoride and nutrition has changed repeatedly, and the vaccine changes are partly enjoined by a court (§2.6). Never hard-code one "US schedule"; show AAP beside the federal position, with dates. |
| **Emergency content works offline** | Emergency numbers by country, the choking/CPR card and red-flag lists are cached on the device, each with a "last reviewed" date. |
| **Licensed instruments** | No EPDS, M-CHAT-R/F or ASQ without written licences (below). CDC material is public domain. WHO material is CC BY-NC-SA 3.0 IGO; **commercial use needs WHO permission**. |
| **Health-data privacy** | US: FTC Health Breach Notification Rule (covers non-HIPAA health apps), Washington's My Health My Data Act. EU: GDPR Art. 9. UK: the Children's Code, if children could use the app. No analytics SDKs on health screens (§4.5). |
| **No labels; graded evidence** | No diagnostic or weight labels on a child. Contested claims are never shown as fact (§2.16). |

| Asset | Use in app? |
|---|---|
| CDC milestones, growth charts, CDC 2000 LMS | Yes, public domain: attribute, no substantive changes, no implied endorsement, no CDC logo ([CDC reuse policy](https://www.cdc.gov/other/agencymaterials.html)); CDC prefers links to reposts |
| WHO growth data and guidelines | CC BY-NC-SA 3.0 IGO; **commercial use needs WHO permission** ([WHO copyright](https://www.who.int/about/policies/publishing/copyright)) |
| M-CHAT-R/F | **Licence from Diana Robins** for any app, website or software. No changes to title, items, instructions or order; no "enhancements"; no reposting. **Linking is allowed** ([mchatscreen.com](https://www.mchatscreen.com/)). |
| ASQ-3 / ASQ:SE-2 | Brookes: electronic use, translation and adaptation need **written permission and fees** ([terms](https://brookespublishing.com/wp-content/uploads/2022/04/ASQ3-ASQSE-Terms-of-Use-2022.pdf)) |
| EPDS | Clinicians may photocopy it for their own use; **any distribution needs written RCPsych permission** ([LOINC note](https://loinc.org/71354-5)). Embedding was reportedly refused to CamCOPS in 2013 ([CamCOPS](https://camcops.readthedocs.io/en/latest/tasks/epds.html)). |
| PHQ-9 / PHQ-2 / GAD-7 | *"No permission required to reproduce, translate, display or distribute"* ([phqscreeners.com](https://www.phqscreeners.com)) **[verify]** |
| AAP/HealthyChildren text | Copyrighted: link out, or paraphrase with citation |

### 2.2 Feeding, 0–12 months

- **Breastfeeding:** exclusive to about 6 months, then alongside solids to 2 years or beyond (WHO; AAP 2022 adds "as
  mutually desired").
- **Responsive feeding:** follow hunger cues (early: stirring, rooting, hand-to-mouth; active: fussing, squirming;
  crying is a *late* cue) and fullness cues (slowing down, turning away, closing the mouth, relaxed hands). No clock
  feeding; don't push a baby to finish a bottle.

| Item | Value | Source |
|---|---|---|
| Breastfeeds | Newborn every 1–3 h, then every 2–4 h; **8–12 feeds/24 h** | [CDC](https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/how-much-and-how-often.html) |
| Formula | Newborn **1–2 oz (30–60 mL) every 2–3 h**, 8–12 feeds/24 h; then every 3–4 h; **5–6 feeds/24 h** at 6–12 m | [CDC](https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/how-much-and-how-often.html) |
| Formula rule of thumb | **~2.5 oz per lb per day** (~165 mL/kg/day); usually ≤**32 oz (~960 mL)/24 h**; most level off at 7–8 oz per feed. Not a target. | [AAP](https://www.healthychildren.org/English/tips-tools/ask-the-pediatrician/Pages/How-much-formula-does-my-baby-need.aspx) |
| Expressed milk (CDC) | Room ≤25 °C (77 °F): **4 h** · fridge 4 °C (40 °F): **4 days** · freezer −18 °C (0 °F): **6 months best, 12 acceptable** · thawed in fridge: **24 h** · once warmed: **2 h** · leftovers: discard **2 h** after the feed · cooler with ice packs: **24 h** · **never refreeze** | [CDC](https://www.cdc.gov/breastfeeding/breast-milk-preparation-and-storage/handling-breastmilk.html) (from ABM Protocol #8) |
| Expressed milk (NHS) | Fridge **up to 8 days at ≤4 °C**; freezer compartment of a fridge 2 weeks **[verify]** | NHS |
| Vitamin D | **US: 400 IU/day** from the first days if breastfed, or formula-fed on **<32 oz/day**. **UK: 8.5–10 µg/day** from birth if breastfed; not needed on **>500 mL formula/day**; **10 µg/day** at 1–4 y. | [CDC](https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/how-much-and-how-often.html), [NHS](https://www.nhs.uk/conditions/baby/weaning-and-feeding/vitamins-for-children/) |
| Iron | **AAP (2010): 1 mg/kg/day** from **4 months** for exclusively breastfed term infants until iron-rich foods are established. NHS and ESPGHAN: **no** routine supplement. Use iron-fortified formula. | AAP Baker & Greer 2010 **[verify]** |
| Solids | **Around 6 months, never before 4** (AAP, WHO, NHS) | [AAP](https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx) |
| Honey | **None before 12 months** (botulism), including in baked goods | AAP, CDC, NHS |
| Cow's milk | Not as a main drink before 12 m (fine in cooking from 6 m, NHS); whole milk from 12 m | NHS, CDC |
| Juice / water | **No juice under 12 m.** Water: sips with meals, about **4–8 oz/day** at 6–12 m | AAP 2017; HER |
| Salt, sugar | No added salt (NHS: under 1 g salt/day under 1) **[verify]**; no added sugar under 2 | DGA, AHA |
| Formula prep | Water **≥70 °C** (WHO, NHS), especially for infants <3 m, preterm or immunocompromised (CDC) | WHO, NHS, CDC |

**Solids readiness** (AAP and NHS agree): head control and sitting with support; brings objects to the mouth; lost the
tongue-thrust reflex; interest in food. NHS: night waking, chewing fists or wanting extra milk are **not** signs.

**Allergens:** peanut **and egg** at about 6 months, not before 4; **no routine pre-screening**; keep them in the diet;
don't delay others ([2021 AAAAI/ACAAI/CSACI consensus](https://link.springer.com/content/pdf/10.1186/s13223-021-00638-y.pdf);
[AAP agrees](https://www.healthychildren.org/English/healthy-living/nutrition/Pages/when-to-introduce-egg-peanut-butter-and-other-common-food-allergens-to-your-baby-food-allergy-prevention-tips.aspx)).
[NIAID 2017](https://www.niaid.nih.gov/sites/default/files/peanut-allergy-prevention-guidelines-clinician-summary.pdf):
severe eczema and/or egg allergy → peanut at **4–6 months after clinician evaluation**; mild to moderate eczema → about
**6 months** at home; high-risk maintenance about **6–7 g peanut protein/week over ≥3 feedings [verify against primary
text]**. Peanut allergy fell **0.79% → 0.45%** after the guidelines (Gabryszewski, *Pediatrics* Oct 2025, observational;
[summary](https://www.hcplive.com/view/peanut-allergy-decline-shows-success-of-early-introduction-guidelines-with-stanislaw-j-gabryszewski-md-phd)).
Use thinned smooth peanut butter, dissolved puffs, well-cooked egg; **never whole nuts**.

**Baby-led weaning:** AAP says BLW and purées are both fine ([AAP](https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/baby-led-weaning-is-it-safe.aspx)).
The BLISS RCT's **modified** BLW: no more choking than spoon-feeding (about a third in both arms choked at least once at
6–8 m), more gagging, no BMI difference **[verify exact figures]**. Unmodified BLW has weaker iron evidence.

**Choking hazards** (AAP): hot dogs, meat sticks, nuts and seeds, chunks of meat or cheese, whole grapes, popcorn, globs
of peanut butter, raw vegetables, hard fruit chunks, hard or sticky sweets.

**Where bodies disagree:** milk storage, vitamin D and iron (table). Whole nuts: a hazard under 4 (AAP); NHS says none
under 5 and quarter round foods lengthwise **[verify]**.

**App feature:** feed, nappy and pump logger; pumped-milk inventory with CDC or NHS expiry timers; vitamin D reminder;
first-foods tracker with an allergen checklist ("offered / tolerated / keep regular: 2–3×/week"); choking-safe prep
cards by age.

**Red lines**
- No personalised formula or mL targets as prescriptions; no homemade-formula recipes or dilution advice.
- Preterm, medically complex or weight-faltering infants, and high-risk allergen introduction (severe eczema, known egg
  allergy) → clinician.
- Allergic reaction (hives plus vomiting, breathing difficulty, swelling, floppiness) → emergency services; no in-app
  management.

### 2.3 Toddler and child nutrition

- **Division of Responsibility** ([Satter](https://www.ellynsatterinstitute.org/)): the parent decides *what, when,
  where*; the child decides *whether and how much*. Few direct RCTs, but it fits responsive-feeding research: pressure
  and restriction go with more pickiness and poorer self-regulation. The INSIGHT RCT (Paul, *JAMA* 2018) showed benefit
  from responsive parenting **[verify]**.
- **Food neophobia** peaks at about **2–6 years**. Repeated, neutral exposure works; no dessert bribes; one "safe" food
  per meal. Portions are about ¼ of an adult's; judge intake over a week.
- **Family meals** go with better diet and wellbeing (observational, partly confounded).

| Item | Value | Source |
|---|---|---|
| Milk | 12–24 m: whole, **16–24 oz/day**. 2–5 y: about **16–20 oz/day**. Water freely. **>~24 oz/day** risks iron deficiency. | HER |
| Juice | **1–3 y ≤4 oz (120 mL)/day; 4–6 y ≤4–6 oz; 7–18 y ≤8 oz.** Whole fruit preferred. | AAP 2017 |
| Added sugar | **None under 2; ≤25 g (6 tsp)/day** at 2–18 | AHA |
| Not recommended | Toddler milks, plant "milks" other than fortified soy, flavoured milks, sugary drinks | HER; AAP 2023 toddler-milk report **[verify]** |
| New foods | **8–10 exposures** (DGA 2025–2030); research cites 8–15 | DGA |

**Where bodies disagree (US policy change):** the **DGA 2025–2030** (HHS/USDA, released **7 Jan 2026**) advises avoiding
added sugars and caffeinated drinks in children; reports disagree on whether that runs "until age 10" or covers ages
5–10. It leans towards full-fat dairy, a shift from low-fat after age 2; AAP's dairy-fat stance may differ
([summary](https://www.contemporarypediatrics.com/view/new-dietary-guidelines-emphasize-whole-foods-and-child-nutrition);
primary PDF reported at cdn.realfood.gov/DGA.pdf **[verify]**). Show it as a dated federal position.

**App feature:** a "new food" tracker that counts tries, not bites ("tried 3 of ~10"); Division-of-Responsibility meal
prompts; a family-meal count that only grows (§3.1). No calorie counting.

**Red lines:** no calorie or weight-loss plans; no supplements beyond public-health vitamin D. To a clinician or feeding
specialist: possible ARFID or eating disorder, weight faltering, fewer than ~20 accepted foods, gagging or vomiting with
textures, any growth concern.

### 2.4 Sleep

**Safe sleep, AAP 2022** ([AAP](https://www.aap.org/en/news-room/news-releases/aap/2022/american-academy-of-pediatrics-updates-safe-sleep-recommendations-back-is-best);
Moon et al., *Pediatrics* 2022;150:e2022057990)
- **Back** for every sleep to age 1, on a **firm, flat surface** (incline **≤10°**) meeting CPSC standards. **Room-share
  without bed-sharing, ideally ≥6 months.**
- No soft bedding, pillows or bumpers (the US Safe Sleep for Babies Act 2022 banned inclined sleepers and bumpers); no
  **weighted** swaddles, sacks or blankets. Stop swaddling at signs of rolling, often around 3–4 months **[verify
  wording]**.
- Dummy at sleep once breastfeeding is established; no overheating or head covering; smoke-, alcohol- and drug-free.
  Breastfeeding and vaccination protect.
- Car seats, swings and pushchairs aren't for routine sleep. **Sofas and armchairs are extremely dangerous.** Monitors
  and consumer wearables do not reduce SIDS.

| Age | Sleep per 24 h incl. naps, AASM/AAP ([Paruthi 2016](https://jcsm.aasm.org/doi/10.5664/jcsm.5866)) | WHO 2019 |
|---|---|---|
| 0–3 m | No recommendation (NSF: 14–17 h) | 14–17 h |
| 4–12 m | **12–16 h** | 12–16 h |
| 1–2 y | **11–14 h** | 11–14 h |
| 3–5 y | **10–13 h** | 10–13 h (3–4 y) |
| 6–12 y | **9–12 h** | — |
| 13–18 y | 8–10 h | — |

- **Naps:** most move to one nap at about 12–18 m and stop at about 3–5 y; wide variation.
- **Routines** go with better sleep, dose-dependently (Mindell, *Sleep* 2015) **[verify]**. AAP "4 Bs": bath, brush,
  book, bed. No screens in the hour before bed or in bedrooms.
- **Night terrors:** NREM parasomnia, peak 3–7 y, 1–3 h after sleep onset, no memory. Don't wake; keep safe; scheduled
  awakenings 15–30 min before the usual time can help. Sleep deprivation is a trigger; OSA can be one.

**Where bodies disagree:** AAP "cannot recommend bed-sharing under any circumstances". NICE NG194 (2021), the Lullaby
Trust and UNICEF UK Baby Friendly give **harm-reduction advice on safer bed-sharing**. Copy is region-specific.

| Claim | Evidence | Use |
|---|---|---|
| **Wake windows** | **Weak.** No peer-reviewed validation of age charts; real homeostasis science underneath, but the numbers come from consultants. Craig Canapari found no PubMed literature on the term ([Canapari](https://drcraigcanapari.com/wake-windows)). | If shown: "commonly used ranges, not medical guidance"; favour sleepy cues |
| **Wonder Weeks / "leaps"** | **Not supported.** About 15 infants in the 1990s; de Weerth & van Geert did not replicate it; no link to cognitive change shown ([overview](https://en.wikipedia.org/wiki/The_Wonder_Weeks), secondary) | No leap calendar |
| **"4-month regression"** | Real sleep maturation; thin evidence for a discrete event | Not as a dated event |
| **Sleep training** | **Reasonably supported as safe and effective for healthy infants from about 6 months.** Mindell 2006 (52 studies): 94% benefit. Price 2012 RCT ([doi](https://doi.org/10.1542/peds.2011-3467)), n=225, 5-year follow-up: **no differences** in behaviour, cortisol, closeness or maternal depression. Gradisar 2016 ([doi](https://doi.org/10.1542/peds.2015-1486)), n=43: graduated extinction and bedtime fading worked; cortisol fell; attachment unharmed. Critics cite small samples and a criticised n≈25 cortisol study (Middlemiss 2012). | Neutral explainers with gentler options (camping out, bedtime fading). Not under ~4–6 m, or for unwell or weight-faltering babies. |

**App feature:** sleep log with 24-hour totals against the AASM band, in §3.4 copy ("9h · usual range for 4 mo");
bedtime-routine builder; safe-sleep "room audit"; evidence-graded method explainers.

**Red lines**
- **Emergency:** breathing pauses or colour change in an infant.
- Clinician: snoring ≥3 nights/week, gasping or pauses (AAP OSA guideline); night terrors that look stereotyped or
  seizure-like, cause injury or come with daytime sleepiness.
- No inclined, weighted or positioning products; no "safe bed-sharing" copy in the US locale; never link sleep advice to
  feeding restriction in young infants.

### 2.5 Growth

| Region / age | Chart |
|---|---|
| 0–5 y | **WHO Child Growth Standards 2006**: prescriptive, built on breastfed children in 6 countries. Weight-, length/height-, BMI- and head-circumference-for-age; weight-for-length/height. |
| 5–19 y | **WHO Growth Reference 2007** |
| US | WHO 0–24 m; **CDC 2000 for 2–20 y**; **2022 extended BMI-for-age** above the 97th percentile ([CDC](https://www.cdc.gov/growth-chart-training/hcp/overview/recommended.html), [extended](https://www.cdc.gov/growth-chart-training/hcp/extended-growth-charts/index.html)) |
| UK | UK-WHO 0–4; UK90 from 4 |

**Measurement:** lying length under 2, standing height from 2 (about 0.7 cm difference); weight-for-length under 2,
BMI-for-age from 2; head circumference to 2 (WHO tables run to 5); correct for prematurity to about 24 months.

| Cut-offs (data model only; never shown as labels) | |
|---|---|
| CDC BMI-for-age, ≥2 y | <5th underweight; 85th–<95th overweight; ≥95th obesity; **severe ≥120% of the 95th or ≥35 kg/m²** |
| WHO 0–5 y | Overweight >+2 SD; obesity >+3 SD; wasting <−2 SD weight-for-length; stunting <−2 SD length/height |
| WHO 5–19 y | Overweight >+1 SD; obesity >+2 SD |
| CDC on WHO charts | **2.3rd and 97.7th** percentiles (±2 SD) **[verify; from CDC 2010 MMWR]** |
| Clinicians watch | Crossing **≥2 major percentile lines**; weight-for-length <2nd or >98th; rapid head-circumference change; flattening height |

**Where bodies disagree:** charts and cut-offs differ by country (WHO SD bands, CDC percentiles from 2, UK-WHO/UK90), so
the chart follows the child's region.

**Data:** WHO "expanded tables" by day ([WHO](https://www.who.int/tools/child-growth-standards/standards/weight-for-age));
WHO 0–24 m and CDC 2000 LMS on [cdc.gov](https://www.cdc.gov/growthcharts/who-data-files.htm). WHO values hosted by CDC
are still WHO's: a paid or freemium PlayNest applies to WHO for permission; a free, non-commercial app may use them with
attribution and share-alike; legal review either way. Maths and WHO's restricted tails beyond ±3 SD: §4.4.

**App feature:** measurements on the region's chart with the child's own trend line; a measurement-tips coach (home
length measurements are error-prone); a printable chart for the clinician. Core copy: "A percentile is a comparison, not
a grade. The 10th percentile is as healthy as the 90th if your child follows their own curve."

**Red lines**
- Never "obese", "failure to thrive", "microcephaly" or "short stature". Weight-neutral language (AAP weight-stigma
  policy; AAP 2023 obesity guideline). No percentile-driven diet advice.
- Soft prompt ("worth discussing at your next visit") for extremes or line-crossing.
- **Urgent:** still below birth weight after about 2 weeks; a rapidly enlarging head, especially with vomiting or a
  bulging fontanelle.

### 2.6 Health

**The biggest change since 2024: US federal vaccine guidance has been unstable.** Never hard-code a single US schedule.

| Date | Event |
|---|---|
| 2025 | COVID-19 vaccine off routine for healthy children (May). All ACIP members dismissed and replaced (Jun). ACIP voted against combined MMRV under 4 (Sep) **[verify]**. |
| 5 Dec 2025 | ACIP voted to end the **universal hep B birth dose** for infants of HBsAg-negative mothers, moving to individual decision-making ([AAP FAQ](https://www.aap.org/en/patient-care/hepatitis-b/hepatitis-b-vaccine-frequently-asked-questions/)) |
| 5 Jan 2026 | HHS/CDC replaced the schedule **without an ACIP vote**; universal diseases fell from about 17–18 to **11** ([STAT](https://www.statnews.com/2026/01/05/childhood-vaccine-schedule-new-cdc-recommendation-11-shots/), [Georgetown](https://ccf.georgetown.edu/2026/01/15/hhs-announces-changes-to-recommended-vaccine-schedule-for-children/)). **Universal:** measles, mumps, rubella, polio, pertussis, tetanus, diphtheria, Hib, pneumococcus, varicella, HPV (single dose). **High-risk only:** RSV, hep A, hep B, meningococcal, dengue. **Shared decision:** influenza, COVID-19, others. |
| 16 Mar 2026 | *AAP v. Kennedy* (D. Mass.): preliminary injunction **stayed the Jan 2026 schedule, ACIP's reconstitution and its votes** ([APHA](https://www.apha.org/news-and-media/news-releases/apha-news-releases/federal-judge-blocks-immunization-schedule-changes), [case](https://clearinghouse.net/case/46764/)) |
| Appeal | First Circuit, No. 26-1325 ([STAT](https://www.statnews.com/2026/04/29/hhs-appealing-acip-vaccine-policy-lawsuit-ruling/)); argument reportedly 6 Oct 2026. **Outcome not confirmed.** Reports disagree on which prior schedule is legally operative. |

- **AAP's own 2026 schedule** keeps the hep B birth dose, RSV, flu, COVID and hep A; ACP and others endorse it
  ([ACP](https://www.acponline.org/sites/default/files/acp-policy-library/policies/statement_of_support_aap_immunization_schedule_2026.pdf)).
- **UK:** MMRV replaced MMR from **1 Jan 2026**, with a new 18-month appointment; visits at 8, 12, 16 weeks, 1 y, 18 m,
  3 y 4 m ([UKHSA](https://ukhsa.blog.gov.uk/2025/12/30/changes-to-the-childhood-vaccination-schedule-from-january-2026/)).
  **WHO** tables: many countries give BCG and hep B at birth and DTP-containing vaccine at 6/10/14 weeks.
- **App rule:** per-country, dated, sourced data packs. US: show the **"AAP schedule"** and, if at all, the CDC schedule
  with its legal status. Always "confirm with your clinician". **Never** vaccine-hesitancy or "spacing" advice.

**Well-child visits** (AAP Bright Futures [periodicity schedule](https://www.aap.org/periodicityschedule), updated yearly)

| Item | Ages |
|---|---|
| Visits | Newborn, 3–5 days, by 1 m, 2, 4, 6, 9, 12, 15, 18 m, 2 y, 30 m, 3 y, then **annually** |
| Screening | Developmental **9, 18, 30 m** · autism **18, 24 m** · maternal depression **1, 2, 4, 6 m** |
| Other | Fluoride varnish from the first tooth · instrument vision screening from 12 m, acuity from about 3–4 y · hearing "1-3-6" (JCIH): screen by 1 m, diagnose by 3 m, intervene by 6 m |

| Fever | AAP ([HealthyChildren](https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/When-to-Call-the-Pediatrician.aspx)) | NICE NG143 ([NICE](https://www.nice.org.uk/guidance/ng143)) |
|---|---|---|
| <3 months | **≥100.4 °F (38.0 °C) → call right away** | **≥38 °C = RED (high risk)** |
| 3–6 months | Duration rules below | **≥39 °C = AMBER** |
| Any age | Repeatedly >104 °F (40 °C); fever >24 h if <2 y; >72 h if ≥2 y | Fever ≥5 days = AMBER |

Call **immediately at any temperature** (AAP) if the child looks very ill, is hard to wake or inconsolable; has a stiff
neck, breathing difficulty, an unexplained or non-blanching rash, a seizure, repeated vomiting or diarrhoea, or
dehydration; is immunocompromised; or was in an overheated car. NICE adds a bulging fontanelle. Never aspirin.

**Teeth**
- **Teething** (first tooth around 6 m): drooling, irritability, at most a slight temperature rise; **not true fever or
  diarrhoea**. FDA warns against benzocaine/lidocaine gels, homeopathic tablets and amber or teething necklaces
  (strangulation) **[verify dates: 2016–2018]**.
- **Dental:** first visit **by age 1** or within 6 months of the first tooth (AAPD/AAP). Fluoride toothpaste twice daily:
  **rice-grain smear under 3, pea-sized at 3–6** (NHS: ≥1,000 ppm under 3; 1,350–1,500 ppm from 3).
- **Fluoride, 2025–26:** FDA (31 Oct 2025): **ingestible fluoride supplements no longer recommended under 3** or for
  low-risk older children ([coverage](https://abc7.com/post/fda-restricts-use-kids-fluoride-supplements-citing-emerging-health-risks-latest-action-robert-kennedy-jr/18099050/)).
  Utah and Florida banned community water fluoridation in 2025 **[verify]**. AAP, ADA and AAPD still support varnish and
  fluoridation. Show toothpaste guidance; supplements are a dentist's decision.

**Where bodies disagree:** vaccine schedules and fever bands (tables). Thermometers: AAP favours rectal in infants; NICE
an electronic axillary thermometer under 4 weeks, no routine rectal or oral use. Ibuprofen: AAP none under 6 months; UK
from 3 months and >5 kg **[verify]**.

**Emergency card** (offline): breathing difficulty (indrawing, grunting, blue or grey); non-blanching rash ("glass
test"); floppy or hard to wake; seizure; green (bilious) vomiting; dehydration (very few wet nappies, sunken fontanelle);
**any fever under 3 months**; suspected poisoning or battery/magnet ingestion. **Urgent:** white pupil reflex in photos
(leukocoria). **Review:** constant eye turn after about 4 m; no startle or turning to sound by about 6 m.

**App feature:** visit and vaccine reminders from region packs; a symptom diary for the clinician; static "when to call /
when to go" cards (AAP or NICE by region); a toothbrushing timer.

**Red lines:** no symptom-checker scoring or fever "triage" algorithm (likely SaMD under EU MDR Rule 11); no dose
calculators; no vaccine-schedule customisation; no reassurance such as "probably just teething".

### 2.7 Developmental screening

**CDC "Learn the Signs. Act Early." 2022** (Zubler, *Pediatrics* 2022;149:e2021052138, [PubMed](https://pubmed.ncbi.nlm.nih.gov/35132439/);
[CDC](https://www.cdc.gov/ActEarly)): milestones now show what **≥75% of children** do by an age, not the average (50%).
216 → 159 milestones; 10 → 12 checklists, **adding 15 m and 30 m** so every visit from 2 m to 5 y has one; "crawling"
removed. CDC says they are **not a screening tool**: a missed milestone means "talk to your doctor now, don't wait".

| Instrument | Ages | PlayNest use |
|---|---|---|
| CDC checklists | 2 m–5 y | Yes, as education (public domain, §2.1) |
| ASQ-3 / ASQ:SE-2 | 1–66 m / 1–72 m | Only under a Brookes licence |
| M-CHAT-R/F | 16–30 m | Link out. Scoring for reference: 0–2 low; 3–7 medium (**Follow-Up interview essential**); 8–20 high. Real-world sensitivity is lower than first reported (Guthrie, *Pediatrics* 2019) **[verify]**, so "low risk" is never reassurance. |

**Where sources differ:** CDC's pre-2022 lists used roughly 50% milestones; don't mix them with the 2022 lists.

**App feature:** CDC milestone education; "questions for your 18-month visit"; reminders at AAP screening ages (9/18/30 m;
autism 18/24 m); private notes and videos for the clinician; links to early intervention (US: IDEA Part C evaluation is
free and needs no referral; Help Me Grow).

**Red lines:** no ASQ or M-CHAT scoring without a licence and regulatory review; no "autism risk" or "delay" labels;
**any loss of skills at any age → clinician promptly.**

### 2.8 Behaviour and discipline

- **AAP 2018** (Sege & Siegel, *Pediatrics* 142:e20183112, [doi](https://doi.org/10.1542/peds.2018-3112)): **against all
  corporal punishment** and harsh verbal discipline. Recommends positive reinforcement, clear expectations, redirection,
  natural and logical consequences, and **time-out**. Spanking was linked to worse outcomes on 13 of 17 measures
  (Gershoff & Grogan-Kaylor 2016, about 160,000 children).
- **Labelled praise** ("Thanks for putting the blocks in the box") beats generic praise; "mindset" praise effects are
  small and contested. Routines reduce conflict.
- **Strong programmes:** PCIT (2–7 y; "PRIDE": labelled Praise, Reflect, Imitate, Describe, Enjoy, then structured
  time-out), Incredible Years, Triple P, Parent Management Training (GenerationPMTO; Kazdin). Group parent training for
  3–11 y with conduct problems ([NICE CG158](https://www.nice.org.uk/guidance/cg158)); structured programmes to reduce
  maltreatment ([WHO 2022](https://www.who.int/teams/social-determinants-of-health/violence-prevention/parenting-guidelines),
  0–17 y). CDC "Essentials for Parenting" is public domain.

| Tantrums | Value |
|---|---|
| Normal | About 1–4 y, peak 2–3; most are short |
| Red flags ([Belden 2008](https://pmc.ncbi.nlm.nih.gov/articles/PMC2211733)) | **Self-injury** (most specific); aggression towards carers or objects; **>5 a day** over several days; average **>25 min**; can't self-calm |
| Time-out | Brief, calm (often about 1 min per year of age, around 3–5 min max), predictable, then reconnect |

**Contested: time-out vs "time-in".** AAP recommends time-out, and it is core to PCIT, Incredible Years and Triple P.
Early Head Start data (Knight, *JDBP* 2020) found **no link to later emotional or behavioural harm**
([summary](https://wolterskluwer.com/en/news/no-longterm-negative-effects-of-timeout-in-children-study-finds)); Dadds &
Tully 2019 agree **[verify]**. Time-in as a *replacement* is popular on social media but has **no RCT evidence**; in
PCIT, warm attention outside discipline is what makes time-out work.

**App feature:** PRIDE "special time" timer (5 min/day, as in PCIT homework); labelled-praise prompts; an ABC tantrum log
that flags the Belden patterns as worth raising with a clinician; time-out script cards; links to local Triple P or PCIT.
This feeds the "Hard moment" button (§1.5).

**Red lines:** never endorse physical punishment, restraint or isolation of a distressed child. Injurious aggression,
self-harm, a parent's fear of their own anger ("I'm afraid I'll hurt my child") or abuse disclosures → professional,
crisis line or child protection.

### 2.9 Emotional development

- **Emotion coaching** (Gottman): notice the emotion; see a chance to connect; listen and validate; help name it; set
  limits while problem-solving. Tuning in to Kids RCTs (Havighurst) improved coaching and reduced behaviour problems
  **[verify]**.
- **Naming feelings** supports regulation. **Co-regulation comes before self-regulation** ([Harvard Center on the
  Developing Child](https://developingchild.harvard.edu/)).
- **Resilience:** the most common factor is *at least one stable, committed relationship with a supportive adult*
  (Harvard Center; AAP 2021 relational-health policy).
- **Anxiety:** about 1 in 10 children aged 3–17 diagnosed (CDC NSCH) **[verify current figure]**. **USPSTF 2022: screen
  ages 8–18.** CBT first-line; **SPACE** (parent-only, reduces family accommodation) was non-inferior to CBT (Lebowitz
  2020). Parent message: gentle exposure, not avoidance.
- **Weak evidence:** "name it to tame it" and similar slogans are useful but not trial-tested.

**App feature:** emotion cards or feelings wheel by age; calm-down corner builder; five-step coaching script; a "brave
steps" exposure ladder framed as psychoeducation.

**Red lines:** no anxiety or depression "diagnosis". **Urgent routing:** self-harm talk, suicidal statements (988 / 111 /
local), school refusal over 1–2 weeks, panic attacks, impairing compulsions. Trauma or abuse disclosures → child
protection.

### 2.10 Language and literacy

- **AAP 2024 literacy policy** (Klass, *Pediatrics* 154(6), [PubMed](https://pubmed.ncbi.nlm.nih.gov/39342414/)):
  shared reading **from birth to at least kindergarten**; books at visits in the family's language; **print over
  digital**. [Reach Out and Read](https://reachoutandread.org) (books at visits, **6 m–5 y**): over a dozen studies show
  more home reading and better vocabulary.
- **Talk, read, sing:** conversational turns matter more than word counts (Romeo 2018).
- **Dialogic reading** (Whitehurst): **PEER** (Prompt, Evaluate, Expand, Repeat) with **CROWD** prompts (Completion,
  Recall, Open-ended, Wh-, Distancing); positive What Works Clearinghouse findings for preschool language.
- **Bilingualism does not cause delay.** Count words across both languages; mixing is normal; **never advise dropping the
  home language** (ASHA).

| By about | Red flag (CDC 2022 plus common clinical rules) |
|---|---|
| 9 m | No babbling |
| 12 m | No gestures (waving, pointing) or no response to name |
| 18 m | Fewer than 3 words besides mama/dada |
| 24 m | **No two-word phrases** |
| 30 m | Fewer than about 50 words |
| Any age | **Any loss of words or social skills.** Any speech concern → hearing test. |

**Contested:** the "30-million-word gap" (Hart & Risley 1995); replications found smaller or different gaps (Sperry
2019). The 50/75/100% intelligibility rule at 2/3/4 y (Coplan & Gleason 1988) is still quoted, but newer norms (Hustad
2021) suggest slower development: approximate only **[verify]**.

**App feature:** a read/sing tally that only grows; dialogic-reading prompts inside existing PlayNest activities; a
"words my child says" list with language tags; library and Reach Out and Read finders.

**Red lines:** no "speech delay" verdicts. Route to the clinician, a speech-language pathologist or early intervention
(US Part C self-referral).

### 2.11 Toilet training

AAP endorses Brazelton's **child-oriented approach**: start when ready, no punishment, no pressure
([Raising Children](https://raisingchildren.net.au/preschoolers/health-daily-care/toileting/toilet-training-guide);
[*Pediatrics in Review* 2026](https://publications.aap.org/pediatricsinreview/article-abstract/47/5/290/207421/Toilet-Training)).

| Item | Value |
|---|---|
| Readiness | Dry about 2 h; predictable bowels; follows 2-step instructions; pulls pants up and down; bothered by a dirty nappy; interested; has words for pee/poo |
| Start | AAP: not before about **18 m**. Many ready at **2–2½ y**; reported mean start **26.8 m** |
| Day dryness | By 3, about **9 in 10** dry most days; by 4, most reliably dry (UK NHS sources). Bowel control usually first. |
| Night dryness | Later; up to **1 in 5 five-year-olds** still wet sometimes. **Bedwetting not treated before 5** ([NICE CG111](https://www.nice.org.uk/guidance/cg111)). |
| Regression | Common with stressors (sibling, move, childcare). **Constipation is the commonest medical driver.** |

Elimination communication has little evidence.

**App feature:** readiness checklist; sticker chart; "pause and retry in 2–3 weeks" coach; constipation card.

**Red lines** (clinician): pain or blood; constant dribbling; **new wetting with excessive thirst or urination (possible
diabetes, urgent)**; daytime wetting after 5, or wetting after 6+ months dry; hard stools or withholding; regression with
behaviour change suggesting abuse.

### 2.12 Screens and digital life

| Age | WHO 2019 ([WHO](https://www.who.int/publications/i/item/9789241550536)) | AAP 2016 ([AAP](https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds)) | CPS |
|---|---|---|---|
| <18 m | **None** | Avoid, except **video chat** | None except video chat |
| 18–24 m | None | High-quality, watched together | None except video chat |
| 2–5 y | **≤1 h/day** at 2–4, "less is better"; not restrained >1 h at a time | **≤1 h/day**, watched together | Under 1 h |
| School age | — | AAP 2026 below | "4 Ms": Manage, Meaningful, Model, Monitor |

AAP 2016 also: no screens at meals or in the hour before bed; bedrooms without screens.

**AAP 2026, "Digital Ecosystems, Children, and Adolescents"** (*Pediatrics* 157(2):e2025075320, [AAP](https://publications.aap.org/pediatrics/article/157/2/e2025075320/206129/Digital-Ecosystems-Children-and-Adolescents-Policy)):
**drops fixed daily caps** for older children. It focuses on engagement-driven design, displacement of sleep, activity
and in-person time, family media plans, shared devices, and ADHD or depression screening when use is problematic, and
puts duties on industry and policymakers ([EdSurge](https://www.edsurge.com/news/2026-02-05-new-aap-screen-time-recommendations-focus-less-on-screens-more-on-family-time)).
**Full text not accessed: unconfirmed whether the under-5 limits were retired.** Until checked, keep AAP 2016 and WHO
for under-5s. AAP's [Center of Excellence](https://www.aap.org/en/patient-care/media-and-children/center-of-excellence-on-social-media-and-youth-mental-health/)
uses the **"5 Cs"** (Child, Content, Calm, Crowding out, Communication) and has a Family Media Plan tool.

**Ages 6–12:** **no evidence-based first-phone age**. Use readiness criteria, step up gradually (watch or basic phone
first), keep devices out of bedrooms overnight, use parental controls. Minimum ages: US COPPA 13 for social accounts;
**Australia 16 from 10 Dec 2025** ([NT Govt](https://territorycommunitysafety.nt.gov.au/latest-news/australias-social-media-age-ban-begins-december-10));
UK Online Safety Act child-safety duties from 25 Jul 2025 **[verify]**. Use ESRB/PEGI ratings; ICD-11 gaming disorder
is uncommon. Grooming and **sextortion** reporting: NCMEC CyberTipline / Take It Down (US), CEOP (UK), eSafety (Australia).

**Where bodies disagree:** WHO says no screens under 2; AAP and CPS allow video chat, and AAP allows co-viewed quality
content from 18 m. AAP has moved away from fixed caps for older children.

**App feature:** Family Media Plan builder (linking to AAP's); co-viewing prompts; first-phone readiness checklist;
age-rating explainer; region-aware reporting card; PlayNest play as the screen-free alternative.

**Red lines:** no monitoring or spyware on children's devices; no "boosts IQ" claims. Sextortion or exploitation → law
enforcement and NCMEC/CEOP at once; never advise paying or deleting evidence.

### 2.13 School age (5–12)

| Topic | Guidance and evidence |
|---|---|
| School readiness | Child, family, school and community together (AAP); self-regulation and language over academic drills. Delayed entry ("redshirting"): mixed evidence. |
| Homework | Support it; don't do it. Weak link with achievement in primary, stronger in secondary (Cooper 2006). "10 min per grade" is convention. |
| Bullying ([StopBullying.gov](https://www.stopbullying.gov)) | Unwanted aggression + power imbalance + repetition. Signs: unexplained injuries, lost belongings, avoiding school, sleep or appetite changes. Listen, document, involve the school; never encourage retaliation. |
| Chores (AAP) | 2–3 y toys away · 4–5 y set the table · 6–8 y make the bed, simple meal prep · 9–12 y laundry, supervised cooking. Benefits observational. |
| Home alone | No universal age; US laws vary by state. NSPCC: no UK legal age, but under-12s rarely mature enough for long, babies and toddlers never. Under about 10, poor traffic judgement. |
| Activity 5–17 y ([WHO 2020](https://www.who.int/publications/i/item/9789240015128)) | **Average ≥60 min/day moderate-to-vigorous**; vigorous and muscle/bone-strengthening **≥3 days/week**; limit recreational screens |
| Activity under 5 (WHO 2019) | <1 y **≥30 min tummy time** a day; 1–2 y **≥180 min/day** any intensity; 3–4 y **≥180 min incl. ≥60 moderate-to-vigorous** |
| Puberty | Girls 8–13 (breast budding), boys 9–14 (testicular enlargement); US average first period about 12–12.5 y. Talk before it starts (around 8). |
| Body safety | Correct anatomical names; body autonomy; "surprises vs secrets"; NSPCC **PANTS**. School programmes improve knowledge and disclosure (Cochrane, Walsh 2015). |
| Money | Save/spend/share jars; CFPB "building blocks" (executive function → habits → knowledge); habits form by about 7 (Whitebread & Bingham 2013) |

**App feature:** chore charts by age; an independence ladder (errands, walking to school) built on readiness, not a fixed
age; a bullying log; puberty and body-safety conversation starters; activity minutes against the WHO target.

**Red lines:** **suspected abuse → child-protection services or police** (Childhelp 1-800-422-4453, US; NSPCC 0808 800
5000 / Childline 0800 1111, UK). Bullying with self-harm talk → crisis line. Puberty signs before 8 (girls) or 9 (boys)
→ clinician. No sexual-health content beyond age-appropriate education.

### 2.14 Parent wellbeing

| Item | Figure |
|---|---|
| Postpartum depression | US about **1 in 8** (CDC PRAMS 2018; states about 10–24%, [CDC](https://pmc.ncbi.nlm.nih.gov/articles/PMC5657855)); global about 13–17% |
| Paternal depression | About **8–10%** (Paulson & Bazemore, *JAMA* 2010: 10.4%) **[verify]** |
| Postpartum anxiety | Roughly 10–15% **[verify]** |
| Baby blues | Most mothers; resolves within about 2 weeks. **Longer → evaluate.** |
| Postpartum psychosis | 1–2 per 1,000 births. **Emergency.** |
| Screening | AAP: mothers at the **1, 2, 4, 6-month** visits (Earls, *Pediatrics* 2019). USPSTF 2019: counselling for those at increased risk. |
| EPDS | 10 items, 0–30. **≥10 possible, ≥13 probable depression; any non-zero item 10 (self-harm) → urgent.** Validated in fathers, often with lower cut-offs. Licence: §2.1. |
| Infant crying | Peaks about **6–8 weeks** (Period of PURPLE Crying) |
| Couples | About two-thirds report falling satisfaction in the first 3 years (Shapiro, Gottman & Carrère 2000); Bringing Baby Home-style programmes help |

- **Parental burnout** (Mikolajczak & Roskam): distinct from depression; linked to "escape" thoughts and neglect;
  highest in individualistic cultures (42 countries, n=17,409, *Affective Science* 2021, [Tilburg](https://research.tilburguniversity.edu/en/publications/parental-burnout-around-the-globe-a-42-country-study/)).
- **Sleep deprivation:** drowsy driving; falling asleep with the baby on a sofa (lethal). Single parents: social support
  is the main protective factor.
- **Crying plan:** "**it's OK to put baby down safely and step away**" is shaken-baby prevention.

| Crisis lines (cached offline) | |
|---|---|
| US | **988**; Maternal Mental Health Hotline **1-833-TLC-MAMA (1-833-852-6262)**, 24/7 call or text; PSI HelpLine 1-800-944-4773 (not a crisis line) |
| UK | 999 / **NHS 111** (mental health option); Samaritans **116 123**; PANDAS |
| Canada | **9-8-8** |
| Australia | Lifeline **13 11 14**; PANDA **1300 726 306** |

**App feature:** a mood check-in with a free or licensed validated tool (PHQ/GAD), framed as "share with your provider";
co-parent sleep-shift planner; "step away" crying plan; burnout reflection as education; an offline, region-aware "get
help now" button.

**Red lines:** never present a score as a diagnosis; no counselling bot. **Immediate crisis routing** for thoughts of
self-harm or harming the baby, or psychosis signs (confusion, hallucinations, not sleeping for days). No medication
advice, including breastfeeding compatibility → clinician or LactMed.

### 2.15 Safety and first aid

| Stage | Childproofing |
|---|---|
| 0–6 m | Safe sleep; fitted car seat; never left on a raised surface; water heater ≤120 °F (49 °C); constant bath supervision |
| 6–12 m | Hardware-mounted gates at stair tops; anchored furniture (US STURDY Act rule, 2023); cordless blinds; socket covers; detergent pods locked away; **no baby walkers** (AAP wants a ban; Canada banned them in 2004) |
| 1–3 y | Drowning (pools, buckets, toilets, baths); window stops at 4 in (10 cm) or guards; hot drinks; medicines; button batteries |
| All ages | **Firearms:** AAP says the safest home has none; otherwise unloaded and locked, ammunition locked separately. Never leave a child in a car. |

| Car seats | AAP 2018 ([doi](https://doi.org/10.1542/peds.2018-2460)) | UK/EU |
|---|---|---|
| Rear-facing | **As long as possible, to the seat's height or weight limit**; "until age 2" dropped | R129 i-Size: at least 15 months |
| Forward | Harness to the seat's limit | — |
| Booster | **Until the adult belt fits: about 4 ft 9 in (145 cm), typically 8–12 y** | UK law: restraint to **12 y or 135 cm** |
| Seat | **Back seat until 13**; no bulky coats under harnesses | — |

**Water** (AAP 2019 drowning policy) **[verify details]**: a **leading cause of death at 1–4** (CDC). Swim lessons from
about **age 1** reduce risk but don't "drown-proof". **Four-sided fence ≥4 ft (1.2 m)** with a self-closing,
self-latching gate. **Touch supervision** for toddlers and weak swimmers; a designated "water watcher"; USCG-approved life
jackets in boats. Bath seats are not safety devices.

**Ingestions:** medicines "Up and Away" (CDC); **don't induce vomiting**; poison help **US 1-800-222-1222, UK NHS
111/999, Australia 13 11 26**. **Button battery: emergency department now.** National Capital Poison Center: for children
**≥1 y**, within 12 h and able to swallow, **10 mL honey every 10 min, up to 6 doses**, on the way, without delay
([poison.org](https://www.poison.org/battery)) **[verify]**. Reese's Law (2022): child-resistant battery compartments.
**More than one magnet → emergency department** (CPSC magnet standard, 2022). Water beads → urgent care.

**Choking and CPR: AHA/AAP 2025 changes** ([summary](https://www.contemporarypediatrics.com/view/aha-issues-2025-cpr-and-ecc-updates-for-choking-opioid-overdose-and-pediatric-care))

| Situation | AHA/AAP 2025 | Before 2025 / elsewhere |
|---|---|---|
| Infant <1 y, choking | **5 back blows** (face-down on the forearm, head low) **alternating with 5 chest thrusts with the heel of one hand** on the lower breastbone. **No abdominal thrusts.** | Chest thrusts used two fingers |
| Child ≥1 y and adult, choking | **Alternate 5 back blows and 5 abdominal thrusts** | AHA: abdominal thrusts only. Red Cross and UK/ERC already back blows first. **ANZCOR: back blows then *chest* thrusts [verify]** |
| Unresponsive | Call emergency services; start CPR; look in the mouth before breaths; **no blind finger sweeps** | — |
| Infant compressions | **Two-finger technique removed:** heel of one hand or two-thumb encircling | Two fingers |
| CPR numbers | 100–120/min; depth about 4 cm (1.5 in) infant, about 5 cm (2 in) child; 30:2 one rescuer, 15:2 two (healthcare providers) | — |

**Where bodies disagree:** choking sequences (AHA, UK/ERC, ANZCOR) and car-seat rules (AAP limits vs UK law and R129).
Region-specific cards are mandatory.

**App feature:** childproofing checklists unlocked by age and logged milestones (crawling, walking); a car-seat stage
tracker using the seat's own limits; offline choking/CPR cards by region (AHA, Resuscitation Council UK/ERC, ANZCOR);
poison and emergency numbers by country; pool and bath cards.

**Red lines:** "**call emergency services**" comes first, plus a certified course (AHA, Red Cross, St John Ambulance).
Never a substitute for emergency care for ingestions, burns, head injury with vomiting or drowsiness, or near-drowning.
Never recommend products (positioners, weighted sleepwear, walkers). Guideline version and date on every card.

### 2.16 Contested or weak evidence

| Claim | Status |
|---|---|
| Wake-window charts | No direct evidence; consultant-derived |
| Wonder Weeks "leaps"; "4-month regression" as a discrete event | Not replicated; thin evidence |
| Time-in replacing time-out | No RCTs |
| 30-million-word gap; 50/75/100% intelligibility | Contested; older norms |
| Mindset praise; elimination communication; unmodified BLW for iron | Small, little or weaker evidence |
| "1 tbsp per year" portions; "10 min per grade" homework | Heuristics |
| US vaccine, fluoride and dietary guidance, 2025–26 | Politically contested and partly enjoined; show AAP beside the federal position, with dates |

**To verify before shipping:**
1. Whether the First Circuit has ruled in *AAP v. Kennedy*.
2. AAP's 2026 Digital Ecosystems full text: were the under-5 limits kept?
3. The DGA 2025–2030 wording on added sugar and dairy.
4. ANZCOR's choking sequence; NHS milk-storage times.
5. Current PHQ and EPDS permission terms.
6. Every other **[verify]** item above.

---

## 3. Mobile UX: native, calm, low-text

### 3.1 Ten governing principles

1. **Numbers, icons and shapes first; words only when they carry meaning.** Apple built the Activity rings "around a
   visual". NN/g measures that users read only 20–28% of the words on a page.
2. **Every icon has a short visible label.** NN/g says labels must be "visible at all times".
3. **At most two levels of disclosure.** A tile leads to a detail screen or a sheet, and that is the end. NN/g reports
   that more levels "typically have low usability".
4. **Keep actions within thumb reach.** 49% of people hold the phone one-handed and about 75% of taps are by thumb
   (Hoober via LukeW). Top-left is the worst spot.
5. **One primary action per screen.** Headspace's home is one session plus one big Start button.
6. **Log first, add details later** (Huckleberry).
7. **Undo instead of a confirm dialog.** NN/g says to make Undo highly visible.
8. **Never punish a missed day.** Finch never scolds. Smashing 2026 advises highlighting progress, not loss. A garden
   that only grows fits this; streak-loss messages do not.
9. **Night use is the default case**, not an edge case.
10. **Follow the platform for system behaviour** (appearance, Dynamic Type, back gesture, haptics). Put the brand in
    illustration, colour and motion.

### 3.2 Specs adopted in v1.3

| Pattern | Spec | Source |
|---|---|---|
| Large title | 34px bold. Collapses into a 17px centred title in a 44–52px bar after about 50px of scroll. The bar's separator and blur appear only once collapsed. | Apple HIG navigation bars; WWDC17 #810 |
| Tab bar | 4 tabs, one-word labels, icon plus label, a tinted pill behind the active icon (Material 3). Tapping the active tab scrolls to top or pops to the tab's root. Each tab remembers where you were. | HIG tab bars; M3 navigation bar |
| Push / pop | About 350ms slide from the right on push, a mirrored slide on Back, and a ≤150ms cross-fade between tabs. Reduced motion becomes a fade or nothing. | HIG; M3 motion |
| Sheets | Grabber, drag to dismiss (past about 110px, or a fast flick), plus a visible ✕ (NN/g). One sheet at a time. Opens in 320ms with `cubic-bezier(.05,.7,.1,1)` (M3 emphasized-decelerate); closes in 220ms. | HIG sheets; NN/g bottom sheets; M3 tokens |
| Press state | `scale(.97)` over 120ms; `touch-action: manipulation`; no tap highlight; no text selection on controls | Native-feel checklist |
| Toast | One at a time, a single Undo action, sits 8px above the tab bar, lasts 6s when it has an action | M3 snackbar; NN/g |
| Inputs | Font size ≥16px, otherwise iOS zooms the page on focus | WebKit behaviour |
| Dynamic Type | On iOS, `html { font: -apple-system-body }` so `rem` follows the system text size. Sizes are in `rem`. | Lickability; HIG typography |
| Swipe actions | Only for Delete, always with Undo, and always with a keyboard-reachable button | NN/g contextual swipe |
| Rings | Only for goals the parent chooses (plan done, check-in progress). Never for physiology targets a parent can "fail". | Apple Fitness; Smashing 2026 |
| Empty states | An illustration, one line, one button | NN/g empty states |
| Haptics | Selection for chips and segments, light for taps, success for saves and ticks. Can be turned off (planned setting). | HIG playing haptics |

### 3.3 Word budgets (house rules)

| Element | Budget |
|---|---|
| Tab label | 1 word |
| Tile | Label of ≤2 words, 1 number, meta of ≤4 words |
| Card | Title ≤6 words; body ≤12 words or none; button ≤2 words |
| First screenful | ≤40 words, not counting numbers |

Full sentences are allowed only for:
- why a suggestion was made;
- empty states;
- emotional and support moments;
- safety, as one line that links to the details.

Everything else moves behind an ⓘ button that opens a sheet.

### 3.4 Patterns reserved for the expansion

- **Now card** on Today: "Last feed · 2h 10m ago · L" with a Start button, and "Nap window in ~25 min" with a
  wake-window ring. The wording is soft ("~", "around").
- **Live timer tiles** with `tabular-nums`. A mini-bar above the tab bar while a timer runs. Later, a native Live
  Activity (`@capgo/capacitor-live-activities`, which needs native code).
- **Quick-log sheet:** a 3×2 grid of tiles at least 96px tall, where one tap logs with defaults.
  - Time chips `Now · −5m · −15m · −30m` instead of a time picker.
  - Diaper: Wet / Dirty / Both.
  - Breastfeeding: giant L and R buttons.
  - Every log gets a success haptic and "Logged · Undo".
- **Night-feed mode** is a separate task mode, not a theme. It is offered automatically 21:00–06:00 or when a timer
  starts at night.
  - Black background, red `#FF5A4E` text (about 6.8:1).
  - No white, no images, no confetti.
  - 72–96px buttons and a 48–64px timer.
  - Only three actions: Stop, Switch side, Log.
  - Precedent: iOS StandBy's red tint. Red light suppresses melatonin less than blue (small preliminary study).
- **Co-parent attribution:** "Logged by Sam · 5m ago", so the other parent doesn't log the same feed twice.
- **Onboarding in at most 3 screens, then the first win.**
  1. Name and birth or due date.
  2. "What would help most?" as icon chips, which configure the Today tiles.
  3. Optionally invite a caregiver.
  - Notification permission is asked for in context (after the first timer), never at launch.
- **Copy rules:** use the child's name. Never say "missed", "failed", "only" or "below average".

  | Instead of | Write |
  |---|---|
  | "Only 9h sleep (below average)" | "9h · usual range for 4 mo" |
  | "Streak lost" | "Welcome back. Pick up anywhere." |

### 3.5 Browser support that shapes implementation choices

| Feature | Android WebView (Chrome) | iOS WKWebView (Safari) | Decision |
|---|---|---|---|
| View Transitions (same document) | 111 | 18 | Use CSS keyframe slides keyed on navigation direction for now. They work everywhere, including iOS 17. |
| Scroll-driven animations | 115 | **26** | Collapse the large title with IntersectionObserver, which works everywhere |
| `@starting-style` | 117 | 17.5 | Can be used for entry animations |
| Unprefixed `backdrop-filter` | yes | 18 | Ship `-webkit-` too, with a solid fallback |
| `dvh` | 108 | 15.4 | Used |
| Container queries | 105 | 16 | Can be used for tiles at large text sizes |

On iOS, the outer WKWebView scroll view can bounce even with `overscroll-behavior` set. Test on a device and consider
`ios.scrollEnabled: false` with an inner scroller (Capacitor #5907). On Android WebView below 140, safe-area insets are
wrong; Capacitor 8 SystemBars injects `--safe-area-inset-*` variables, so CSS uses
`var(--safe-area-inset-top, env(safe-area-inset-top))`.

UX sources:
- Apple HIG: [navigation bars](https://developer.apple.com/design/human-interface-guidelines/navigation-bars),
  [tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars),
  [sheets](https://developer.apple.com/design/human-interface-guidelines/sheets),
  [haptics](https://developer.apple.com/design/human-interface-guidelines/playing-haptics),
  [dark mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode),
  [onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding),
  [Live Activities](https://developer.apple.com/design/human-interface-guidelines/live-activities).
- NN/g: [how little users read](https://www.nngroup.com/articles/how-little-do-users-read/),
  [icon usability](https://www.nngroup.com/articles/icon-usability/),
  [progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/),
  [bottom sheets](https://www.nngroup.com/articles/bottom-sheet/),
  [contextual swipe](https://www.nngroup.com/articles/contextual-swipe/),
  [mobile tutorials](https://www.nngroup.com/articles/mobile-tutorials/),
  [empty states](https://www.nngroup.com/articles/empty-state-interface-design/),
  [hamburger vs visible navigation](https://www.nngroup.com/articles/find-navigation-mobile-even-hamburger/).
- Other: [LukeW on thumb zones](https://www.lukew.com/ff/entry.asp?1927),
  [Smashing on streak design (2026)](https://www.smashingmagazine.com/2026/02/designing-streak-system-ux-psychology/),
  [Capacitor SystemBars](https://capacitorjs.com/docs/apis/system-bars),
  [Capacitor haptics](https://capacitorjs.com/docs/apis/haptics),
  [WebKit features in Safari 26](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/),
  [Lickability on Dynamic Type in web views](https://lickability.com/blog/dynamic-type-and-in-app-font-scaling/),
  [Huckleberry widgets FAQ](https://huckleberry.zendesk.com/hc/en-us/articles/15265962112787-iOS-Widgets-Frequently-Asked-Questions-FAQ),
  [red light and melatonin (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12113466/).

---

## 4. Technology

### 4.1 Recommendations at a glance

| Concern | Recommendation | Why |
|---|---|---|
| **Storage** | **SQLite as the system of record:** `@capacitor-community/sqlite` natively; wa-sqlite or SQLite-WASM on OPFS for the PWA. One schema, two drivers, behind a `Db` interface. | Logging reaches 30–40k rows in 3 years, which localStorage (≈5 MB, synchronous, rewrites the whole blob) can't hold. Capacitor's docs say to *expect* localStorage loss on iOS. There was an IndexedDB "connection lost" bug on iOS 17.4. Native SQLite isn't subject to WebKit eviction. |
| **Sync between caregivers** | **End-to-end-encrypted operation log, per-field last-writer-wins with hybrid logical clocks, through a "dumb" relay.** Spend about a week testing whether **Evolu** fits; otherwise build the thin layer in the style of Actual Budget. | Data is mostly append-only events, so no rich CRDT is needed. Server-authoritative engines (PowerSync, Electric, Zero, Instant, Firebase) break the privacy promise. Automerge is about 1.6 MB, and Yjs is built for text. |
| **Reminders** | `@capacitor/local-notifications` | No server needed. iOS allows 64 pending notifications, so schedule the next N. On Android 14, exact alarms need user permission. **A PWA can't do offline scheduled reminders.** |
| **Native surfaces** | Local notifications → Live Activity for running timers → widgets → Watch | Each surface after the first needs Swift or Kotlin extensions. Widgets read data from App Group storage. |
| **Growth charts** | **Our own LMS module (about 150 lines)**, with golden tests against WHO anthro/zscorer outputs; data compiled to lazy-loaded JSON | Simple math. Existing libraries are thin. |
| **Charts** | Hand-rolled SVG for curves, bars and sparklines; **uPlot** (22 KB gz) for dense timelines, lazy-loaded | Recharts is 150 KB gz |
| **i18n** | **Lingui** (2.2 KB, ICU, compiled) plus CSS logical properties | Arabic has 6 plural categories; ICU is the standard |
| **Dates** | `Intl.DateTimeFormat` (`fa-IR` uses the Persian calendar and Persian digits; `ar-SA` uses Umm al-Qura), plus jalaali-js or date-fns-jalali for arithmetic and pickers | `Temporal` isn't in Safari yet, and its polyfill is ≈160 KB |
| **Photos** | Files via `@capacitor/filesystem` plus rows in SQLite; re-encode to JPEG at ≈2048 px with a 320 px thumbnail; explicit ZIP export | Safari silently returns PNG when asked for WebP. Android Auto Backup is capped at 25 MB. Re-encoding strips GPS data. |
| **Animation** | CSS and the Web Animations API first, View Transitions as an enhancement; Motion (LazyMotion, ≈5 KB) only for gesture-heavy sheets | Zero-KB baseline |
| **Purchases** | RevenueCat Capacitor SDK, anonymous IDs, "Restore purchases" | Apple 3.1.1: unlocking features requires in-app purchase |

### 4.2 Migration path off localStorage

1. Add a `Db` interface (async SQL, transactions, change events) behind a repository layer. Keep the
   `useSyncExternalStore` store as an in-memory cache for "hot" state: profiles, settings, today.
2. On first launch of the new build:
   - Read the localStorage blob and run the existing `migrate()`.
   - Insert everything into SQLite in **one transaction** and verify row counts.
   - Set `migrated=1` in SQLite and in `@capacitor/preferences`.
   - Keep the old copy for 2–3 releases as a rollback.
   - Make the whole migration idempotent.
3. Prepare the schema for sync from day one:
   - ULID/UUIDv7 ids;
   - UTC milliseconds **plus** the local timezone offset on every event (DST and travel);
   - an `updated_hlc` column;
   - tombstones instead of hard deletes;
   - no stored aggregates.
4. Gotcha: WebView data is bound to `capacitor://localhost` (iOS) and `https://localhost` (Android). PWA data is
   invisible to the native app, so moving users from the PWA to the app needs export/import or sync pairing.

### 4.3 Caregiver sync design (no account)

- **Household:** a random household id plus a 256-bit key K.
- **Invites:** an invite link or QR code, `playnest://join#hid=…&k=…`. The fragment never reaches a server.
  - In-person pairing shows a 6-digit confirmation code.
  - Remote invites (grandparents) use one-time tokens that the relay deletes after first use.
- **Devices:** each device has its own Ed25519 key, and the relay accepts only signed appends. Operations
  `{opId, table, rowId, fields, hlc, deviceId}` are encrypted with XChaCha20-Poly1305.
- **Relay:** a Cloudflare Worker plus a SQLite-backed Durable Object per household. It orders ciphertext, stores it,
  and sends a content-free push so the other phones wake and cancel a reminder that's already been done.
  - Estimated cost: low tens of dollars a month for thousands of households *(estimate)*.
- **Removing a caregiver:** rotate to a new epoch key. The removed device keeps only what it already had.
- **Honest limits:**
  - Read access is enforced cryptographically. "Nanny can log but not edit" is enforced only by the app.
  - Losing every device loses the data unless the recovery phrase was saved, so saving it is part of onboarding.

### 4.4 Growth-chart data and math

- **Sources:**
  - WHO Child Growth Standards 2006 (0–5 y; tables by day): weight-for-age, length/height-for-age,
    weight-for-length/height, BMI-for-age, head circumference.
  - WHO 2007 reference (5–19 y): BMI-for-age, height-for-age.
  - CDC 2000 (2–20 y).
  - Per-indicator xlsx files with L, M and S are at [who.int](https://www.who.int/tools/child-growth-standards/standards).
    The CDC mirrors the 0–24 m WHO data and its own charts as CSV ([cdc.gov](https://www.cdc.gov/growthcharts/who-data-files.htm)).
- **Licences:**
  - CDC data is US federal work.
  - **WHO's terms license use "for public health purposes" and exclude "promotion of a commercial enterprise".
    Get written permission from WHO before shipping WHO curves in any paid tier.**
- **Math:**
  - z = ((X/M)^L − 1)/(L·S), or ln(X/M)/S when L = 0. Percentile = 100·Φ(z). Curve value X(z) = M(1+LSz)^(1/L).
  - WHO restricted tails for weight-based indicators beyond ±3 SD: z\* = 3 + (X − X(3))/(X(3) − X(2)), mirrored below
    −3. Not for length/height or head circumference.
  - Use age in days with interpolated LMS.
  - Apply the 0.7 cm length/height adjustment.
  - Use corrected age until 24 months.
  - Show extremes as "<0.1th" or ">99.9th".
- **Copy:** show the percentile band and the child's own trend line. Never rank. Always add "Your doctor looks at the
  trend over time" (Apple 1.4.1).

### 4.5 Privacy and compliance by stage

| Stage | COPPA | GDPR / UK GDPR | US state health laws | App stores |
|---|---|---|---|---|
| **On-device only (today)** | The app is for parents and data is about children, entered by parents, and never collected by us | Household exemption for the parent; we're not a controller of data we never receive. **No analytics or crash SDKs by default.** | Not triggered | Don't list in the Kids category (1.3). Health claims must say "check with a doctor" (1.4.1). Play requires a health-apps declaration from every app. |
| **+ Encrypted sync** | Still parent-sourced. A **kid-facing routines mode** could make that part "directed to children" (amended rule effective 23 Jun 2025, compliance by 22 Apr 2026). | Treat us as a processor/controller of Art. 9 health data plus metadata. Explicit consent, a DPIA, EU hosting, deletion. Whether E2E data counts as personal data is unsettled. | Washington's My Health My Data Act (private right of action), plus Nevada and Connecticut: consent and a dedicated policy | **Apple 5.1.3: no personal health information in iCloud**, so don't build on CloudKit. Declare in privacy labels and Data safety. |
| **+ AI assistant** | Disclosure to a vendor; keep AI out of kid mode | The provider is a processor: a DPA, zero retention, no training, EU region, explicit Art. 9 consent. Medical-device risk if it gives medical advice. | Separate consent to share | **Apple 5.1.2(i) (Nov 2025): disclose third-party AI and obtain explicit permission.** Prefer on-device models (Apple Foundation Models, Gemini Nano). |

**Rules we adopt:**
- The core stays local.
- Sync and AI are separate, explicit opt-ins.
- No third-party SDKs.
- Kid mode has no network access and collects nothing.
- History and export are never paywalled.
- A legal review and DPIA happen before sync or AI launches.

Technical sources:
- Storage: [WebKit storage policy (2023)](https://webkit.org/blog/14403/updates-to-storage-policy/),
  [WebKit ITP and Home Screen apps](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/),
  [Capacitor storage guide](https://capacitorjs.com/docs/guides/storage),
  [WebKit bug 273827](https://bugs.webkit.org/show_bug.cgi?id=273827).
- Sync: [Evolu](https://www.evolu.dev/), [Actual Budget](https://github.com/actualbudget/actual),
  [Cloudflare Durable Objects pricing](https://developers.cloudflare.com/durable-objects/platform/pricing).
- Notifications: [Capacitor local notifications](https://capacitorjs.com/docs/apis/local-notifications),
  [Android 14 exact alarms](https://developer.android.com/about/versions/14/changes/schedule-exact-alarms),
  [Capgo Live Activities](https://capgo.app/docs/plugins/live-activities/).
- Growth charts: [WHO data terms](https://www.who.int/about/policies/publishing/data-policy/terms-and-conditions),
  [zscorer vignette](https://cran.r-project.org/web/packages/zscorer/vignettes/anthropometry.html).
- Compliance: [COPPA amended rule (2025)](https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule),
  [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/),
  [TechCrunch on 5.1.2(i)](https://techcrunch.com/2025/11/13/apples-new-app-review-guidelines-clamp-down-on-apps-sharing-personal-data-with-third-party-ai),
  [Google Play health apps declaration](https://support.google.com/googleplay/android-developer/answer/14738291),
  [Android Auto Backup](https://developer.android.com/identity/data/autobackup).
- Purchases and animation: [RevenueCat Capacitor](https://www.revenuecat.com/docs/getting-started/installation/capacitor),
  [React Router view transitions](https://reactrouter.com/how-to/view-transitions),
  [Motion bundle size](https://motion.dev/docs/react-reduce-bundle-size).
- Bundle sizes: [bundlephobia](https://bundlephobia.com).

**To verify before committing:**
- OPFS and SQLite-WASM inside Capacitor's iOS WKWebView.
- The exact scope of Apple 5.1.3.
- How store labels treat E2E-encrypted data.
- WHO permission for commercial use.
- Evolu's sharing API stability under Capacitor.
- Current RevenueCat and Play fees.
