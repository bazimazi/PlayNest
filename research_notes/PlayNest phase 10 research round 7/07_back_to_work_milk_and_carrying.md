# 07 — Back to work: expressed milk, bottles away from home, and carrying

Research notes for PlayNest phase 10, round 7. Researched 19 Nov 2026.

## 1. Scope, and what is already in the app

Practical care for babies and toddlers when life gets busy:

1. **Expressing and storing breast milk:** times at room temperature, in the fridge and in the freezer; thawing and warming; cleaning pump parts; hand expression. Where bodies differ, and the cautious path.
2. **Going back to work** while breastfeeding, formula feeding or mixed feeding: keeping supply, paced bottle feeding, practising with the new carer, what research says about mothers' employment and children (no guilt), fathers' leave. Iran: maternity leave, the daily breastfeeding hour «پاس شیر», breastfeeding rooms.
3. **Slings and carriers:** TICKS, suffocation and falls, hip-healthy positions, hot drinks and cooking, back carries, carrying traditions in Iran.
4. **Formula and bottles out and about**, and paced feeding for carers.

House rules applied: teach, don't diagnose; no milk volumes (the content test fails on any "number + ml" pattern, so the ABM storage portion sizes are deliberately left out); no brand names; trials kept apart from observational studies; no guilt; Iranian law only in Persian copy and without the political framing some of the source documents use.

**Already in the app. I read these and don't repeat them below, except to cross-link or to flag a problem:**

- `milk-feeds` (guides-food.ts): hunger and fullness signs, "hold your baby fairly upright and let them set the pace", WHO/AAP duration, making formula (pack exactly, water boiled and cooled for no more than 30 minutes, no microwave, infant formula only), enough-milk signs, vitamin drops differ by country, red flags.
- `starting-solids` (guides-food.ts): readiness, iron, allergy foods, choking table, drinks.
- `starting-nursery` (guides-learning.ts): what good care looks like, questions on a visit, a gentle settling-in plan, goodbyes, attachment and drop-off crying.
- `first-weeks-at-home` (guides-baby.ts): cord, washing, warmth, newborn red flags.
- `safe-sleep-essentials` (guides-more.ts): AAP 2022; includes "Move a sleeping baby from a car seat, swing or carrier to a flat surface as soon as you can" and "Avoid pods, nests, positioners, hammocks…" (Persian already renders hammocks as «ننو»).
- `grandparents-carers` (guides-more.ts): consistency across carers, safe sleep, the crying plan, raising a difference kindly with elders.
- `guides-you.ts`: `keeping-your-cool`, `running-on-empty`, `you-two-after-baby` (sharing night feeds, invisible work), `phone-and-presence`.
- `tips-food.ts`: `food-early-cues`, `food-bottle-pace` ("Hold your baby fairly upright and let them set the pace…"), and solids tips.

Nothing in the app yet covers expressing, storing milk, pump cleaning, formula away from home, going back to work, or slings and carriers. `swaddling-and-hips` covers hips in wraps but not in carriers.

### Problems found in existing content

| # | Severity | Where | Exact text | Problem | Fix |
|---|---|---|---|---|---|
| E1 | **P2** | `src/i18n/locales/fa/guides.json`, `milk-feeds.blocks.3.text`; and `src/i18n/locales/fa/tips.json`, `food-bottle-pace.text` | «نوزاد را نسبتاً صاف در بغل بگیرید» / «نوزاد را نسبتاً صاف بغل کنید» | «صاف» is ambiguous: it can mean "straight up" but is commonly read as "flat" («صاف خوابیدن»). The English says "fairly upright", and NHS says never bottle feed a baby lying flat on their back [opened, NHS feeding advice]. A parent could read the Persian as the opposite of the advice. | «نوزاد را تقریباً نشسته، با سری بالاتر از بدنش، در بغل بگیرید» (and the same in the tip). |
| E2 | P3 | `milk-feeds` (English and Persian) | "With a bottle, hold your baby fairly upright and let them set the pace." | Missing the one bottle-safety line both NHS and CDC give: never prop the bottle or leave a baby alone with it (choking; CDC adds ear infections and tooth decay) [opened, NHS; opened, CDC bottle-feeding page, March 2026]. | Add: "Never prop a bottle or leave your baby alone with one." |
| E3 | P3 | `safe-sleep-essentials` | "Move a sleeping baby from a car seat, swing or carrier to a flat surface as soon as you can." | Correct, but carriers need their own airway rule while the baby is awake or asleep in them (TICKS). | Cross-link to the proposed slings guide. |
| E4 | P3 | `grandparents-carers` | List under "Agree a few things" | Carers giving bottles and using slings are a common handover. | Add one line: "Show them paced bottle feeding and the sling checks (TICKS)." |

No P1 problems found. The formula-making advice in `milk-feeds` (water boiled and cooled no more than 30 minutes, so at least 70°C; no microwave; throw away leftovers) matches NHS (reviewed 31 August 2023) and GOV.UK (2 November 2026) [opened].

---

## 2. How to read these notes

- **[opened]**: I opened the page, the PDF, or the full text, and took the fact from it.
- **[abstract]**: taken from the abstract through the Europe PMC REST API.
- **[search]**: from search-result snippets or summaries only. Check before shipping.
- **[recall, unverified]**: background knowledge I could not confirm this session.

**Access problems this session:**

- **NHS URLs moved.** `nhs.uk/baby/.../expressing-and-storing-breast-milk/`, `.../breastfeeding-returning-to-work` (old path), `.../combination-feeding/` and an older CDC storage-guidelines path returned 404. NHS content has moved under `/best-start-in-life/` and `/start-for-life/`; I used those. Several of those NHS pages show no review date.
- **ABM Protocol #8 (2017)** is not open on Europe PMC (the correction notice's full-text endpoint returned a 500 error). I read the protocol PDF from bfmed.org through `pdftotext` [opened]. Its Table 1 prints the freezer temperature as "<-4°C (24.8°F)"; the 2018 correction says this was wrong and should read −18°C (0°F) [search, for the correction's content].
- **WHO:** I found no current WHO home-storage table for breast milk. WHO's 2007 "How to prepare formula for bottle-feeding at home" PDF returned 403 from iris.who.int. WHO's 2003 newborn-problems guide is cited only through an MSF page.
- **403:** cpsc.gov news release on babywearing, HSE Ireland burns page.
- **IHDI** carrier page at its old URL was 404; the current `/baby-carriers-other-equipment/` page opened.
- **Iranian law:** the Majlis research centre site was not reached. I read the law texts in two Iranian university copies: the Ministry of Health's compilation of the 1374 breastfeeding law (IUMS) and the Kermanshah health centre's 1404 compilation of the 1400 family law (KUMS), both through `pdftotext` [opened]. The Labour Law text came from edalatsara.com, a legal-text site [opened, unofficial copy].
- **No source found** for Iranian traditional carrying practices, or for any national body's advice on the age for back carries.
- **Searches used:** 21 web searches, about 14 Europe PMC API queries, and about 28 page or PDF fetches.

---

## 3. Findings by topic

### 3.1 Storing expressed breast milk: the numbers

These are safety numbers. Each is given exactly as the body states it.

**CDC (US), "Breast milk storage and preparation"**, published 15 May 2024, updated 14 August 2026, reviewed 25 March 2026 [opened]:

- Freshly expressed milk: **room temperature (25°C / 77°F or colder) up to 4 hours; fridge up to 4 days; freezer about 6 months is best, up to 12 months acceptable.**
- Thawed in the fridge: use **within 24 hours**, counting from when it is fully thawed, not from when it left the freezer.
- Once thawed milk is at room temperature or warmed: use **within 2 hours**. **"Never refreeze breast milk after it has thawed."**
- Leftover milk after a feed: use within 2 hours of the baby finishing, then throw away.
- Insulated cooler with frozen ice packs: **up to 24 hours** while travelling, then use, refrigerate or freeze.
- Thaw overnight in the fridge, in warm or lukewarm water, or under lukewarm running water. **"Never thaw or heat breast milk in a microwave"** (hot spots can burn the mouth; nutrients lost).
- Milk "does not need to be warmed". If warming, keep it sealed, use warm (not hot) water, and test drops on your wrist.
- Containers: breast milk storage bags or clean food-grade glass or plastic with tight lids; never disposable bottle liners or ordinary plastic bags. Leave space at the top for freezing. Store away from the fridge or freezer door.
- The CDC's simplified table uses fridge 4°C (40°F) and freezer −18°C (0°F) [search, CDC adaptation of the ABM table].

**NHS (England), "Storing breast milk", Start for Life** (no review date shown) [opened]:

- **Fridge at 4°C or colder, at the back not the door: up to 8 days.**
- **Ice compartment of a fridge: up to 2 weeks.**
- **Freezer at −18°C or colder: up to 6 months.**
- Use a sterilised container or storage bags; label and date; store in small amounts.
- Thaw in the fridge; if needed straight away, in a jug of warm water or under warm running water. **Never thaw in a microwave.**
- **Use defrosted milk straight away**, whichever way it was thawed. Throw away leftovers after a feed. **Never refreeze.**
- Room temperature is not on that page. The NHS pump page says: refrigerate straight away "or leave it out at room temperature for no more than 4 to 6 hours" [opened, NHS "Expressing breast milk with a pump"].

**Academy of Breastfeeding Medicine, Clinical Protocol #8, revised 2017** (Eglash, Simon; Breastfeeding Medicine 12:390–395), for healthy full-term babies at home [opened, PDF]:

- Table 1: **room temperature 16–29°C: 4 hours optimal; 6–8 hours acceptable under very clean conditions. Fridge about 4°C: 4 days optimal; 5–8 days under very clean conditions. Freezer: 6 months optimal; 12 months acceptable.** (Freezer temperature corrected to −18°C, see above.)
- "For room temperatures ranging from 27°C to 32°C… 4 hours may be a reasonable limit." Chill as soon as possible if the milk won't be used.
- Ice pack in a small cooler (about 15°C): one study suggested safe for 24 hours (graded IIB).
- Thawed milk that has been thawed for 24 hours should not be left at room temperature for more than 2 hours.
- **Refreezing:** "At this time no recommendations can be made on the refreezing of thawed human milk."
- **Leftover milk:** "it seems reasonable to discard the remaining milk within 1–2 hours after the infant is finished feeding" (graded IV, expert opinion).
- Don't add freshly expressed warm milk to milk that is already cold or frozen; cool it first.
- Warming: best over about 20 minutes in lukewarm water, at most 40°C. A hot water bath (80°C) creates hot spots. Microwaving heats unevenly and reduces immune factors.
- Stored milk may smell different (fat breakdown by lipase). "There is no evidence to suggest that infants often reject human milk due to this odor." Milk that looks stringy, foul or pus-like should be thrown away.
- Expressed milk can go in a shared workplace fridge, labelled with name and date; it needs no special handling.
- In one study, 12% of mothers had heated their milk in a microwave.
- Evidence quality: "Many studies are older, and because of differences in methodology, are difficult to compare." There is no agreed definition of unsafe milk.

**Iran Ministry of Health**, Baby-Friendly Hospital monitoring guide, as summarised for nurses and mothers by 17 Shahrivar hospital, Guilan University of Medical Sciences (1402) [opened]:

- Glass or hard clear plastic container with a lid, washable in hot water and detergent.
- **Room temperature (25°C): up to 4 hours ideal, up to 8 hours acceptable. Home fridge (2–4°C): 3–5 days. Fridge ice compartment: two weeks.** (No deep-freezer figure on that page.)
- All mothers are taught hand expression before discharge, and how to feed expressed milk by cup.

**WHO (2003), "Managing newborn problems"**, a hospital guide for small or sick newborns, as cited by MSF's medical guidelines [opened, MSF page; WHO original not opened]: without a fridge, expressed milk in a clean covered container can be kept up to 4 hours if the room is 22°C or cooler, but **only up to 1 hour above 22°C**; in a fridge (2–8°C) up to 24 hours. This is for facility care of vulnerable newborns, not home use for healthy babies, but it shows how much heat matters.

**Hospitals:** NHS trust guidelines for babies in neonatal units use shorter times (for example, one trust's thawed milk within 12 hours) [search]. Milk for a baby in hospital follows the unit's rules.

### 3.2 Thawing, warming and the microwave

All bodies read agree: **never thaw or warm breast milk or formula in a microwave** (CDC, NHS, ABM for breast milk; NHS for formula) [opened]. Thaw in the fridge (slow thawing loses less fat, ABM [opened]) or in warm water. Warming is optional (CDC [opened]).

### 3.3 Hand expression

NHS steps [opened, NHS "Expressing breast milk by hand", no review date]:

1. Wash your hands; use a sterilised container (bottle, wide jug or bowl); sit somewhere warm and quiet.
2. Warm your hands and gently massage the breast with long strokes from armpit towards nipple.
3. Cup the breast in a C-shape, thumb and finger about 2 to 3 cm back from the nipple, opposite each other (12 and 6 o'clock).
4. Press thumb and fingers together gently, release, repeat in a rhythm. "It may take a few minutes so be patient!"
5. When the flow slows, move round the breast (11 and 5 o'clock).
6. Swap sides, then come back to the first side.

NHS lists hand expression for a baby not feeding or latching well, to stimulate supply, and to relieve engorged breasts [opened]. Iran's Baby-Friendly standard is that every mother is taught it [opened, GUMS 1402].

### 3.4 Cleaning pump parts: bodies differ

- **CDC, "How to keep your breast pump kit clean"** (12 September 2024) [opened]: wash hands 20 seconds; check the kit and tubing for mould; on a shared pump, wipe dials and switch. After every use: take the kit apart, rinse milk-contact parts under running water, clean them "as soon as possible after pumping" (by hand or on a dishwasher's top rack if dishwasher-safe), and **air-dry; don't dry with a dish towel**. **Sanitise at least once daily** (steam per the maker's directions, or boil 5 minutes, or a dishwasher with hot water and heated drying). Sanitising is "especially important if your baby is less than 2 months old, was born prematurely" or has a weakened immune system, and may be unnecessary daily for older healthy babies whose parts are carefully cleaned. (Earlier CDC versions said under 3 months [recall, unverified].)
- **NHS** [opened, pump page]: "Make sure your pump and all the parts… are clean and sterile before using them"; wash and sterilise after each use.
- **ABM 2017** [opened]: pump kits and containers should be taken apart, washed in hot soapy water (or dishwasher) and air-dried; "They do not need to be sterilized"; if soap isn't available, boiling water is preferable; chemical disinfectants are not ideal. Feeding devices for a healthy baby need soap-and-water cleaning, not sterilising.

Cautious path for the app: clean every part after every use and air-dry; sterilise or sanitise as your health service advises, and at least daily for babies under about 2 months, premature or unwell (CDC). NHS goes further (after each use). Formula bottles and teats: keep sterilising, as `milk-feeds` already says (NHS).

### 3.5 Going back to work while breastfeeding

- **Tell your employer before the first day back**, in writing, that you're breastfeeding; ask about flexible hours or working from home; do trial runs of the new routine; practise expressing beforehand. You "might need to express at least every 3 hours when you're first away from your baby". Ask for a private space; "You should not express in a toilet." In England an employer must give a place to rest but not necessarily a place to breastfeed [opened, NHS Best Start in Life "Breastfeeding and returning to work", no date].
- If childcare is close to work, you can breastfeed in breaks [opened, same NHS page].
- **AAP (HealthyChildren.org, updated 7 July 2025, from the AAP *New Mother's Guide to Breastfeeding*, 2017)** [opened]: start back in the middle of the working week if possible, for a 2- or 3-day trial; at home offer the breast at least every two or three hours; "Diminished milk supply is a common problem for employed parents", usually from skipped or short pumping sessions.
- **CDC "5 tips"** (updated 14 August 2026) [opened]: talk to your employer; learn to pump or express; learn to store milk at work; work with your childcare provider; get support.
- Building a freezer stock 3 to 4 weeks before going back [search, attributed to HealthyChildren.org]; waiting about a month before introducing a bottle [search, womenshealth.gov]. Not used in outlines.

**Mixed feeding (breast milk and formula)** — NHS Best Start in Life, "Introducing formula feeds" (no date) [opened]:

- "You could start by replacing 1 breastfeed a day with a bottle feed."
- "Introducing infant formula will probably reduce the amount of breast milk you produce."
- Breasts take "around 5 to 7 days" to adjust after each feed is replaced. Going gradually lowers the risk of mastitis.
- To keep supply, "it's important to keep breastfeeding your baby regularly".
- Responsive (on-demand) feeding helps prevent overfeeding.
- NHS Best Start: if possible, get comfortable with breastfeeding before starting mixed feeding [search]. NHS expressing page: if you don't need to express straight away, wait until breastfeeding is going well [opened].

**Workplace support: what the evidence is**

- **Cochrane review (Abdulwadud & Snow 2012):** **no randomised or quasi-randomised trials** of workplace interventions to support breastfeeding were found [abstract]. So "trials show" can't be used here.
- **Systematic review, International Journal for Equity in Health 2021** (28 quantitative and 9 qualitative studies, 2008–2019, mostly observational): the commonest supports were a designated space (24 studies) and co-worker support (20). Workplace support was linked with longer breastfeeding and later introduction of substitutes; a lactation space, expressing breaks and workplace policies were the key strategies [abstract].
- **US systematic review (Journal of Human Lactation 2019, 10 studies):** return-to-work consultations were linked with more exclusive breastfeeding at 6 months (40% versus 17%), and each extra service with more [abstract]. Observational.

### 3.6 Bottles, paced feeding and the new carer

- **CDC "About feeding from a bottle"** (11 March 2026) [opened]: hold your baby close; "Position the bottle at an angle rather than straight up and down so the milk only comes out when your baby sucks"; let the baby take breaks; stop at fullness cues even if the bottle isn't empty; "Do not force your baby to finish the bottle"; "Do not prop or leave the bottle in your baby's mouth" (choking, ear infections, tooth decay). Start bottles when the baby is calm and not too hungry. "If you are breastfeeding, your baby may be more willing to take a bottle from someone other than you." Only breast milk or formula in a bottle; no cereal.
- **NHS feeding advice** [opened]: keep the bottle slightly tipped so milk doesn't flow too fast; short breaks; if the teat flattens, gently pull the corner of the mouth to release the vacuum; "Forcing your baby to finish a feed will be distressing and can mean your baby is overfed"; "Never use a prop for the bottle or leave your baby alone with a bottle"; never bottle feed while the baby is lying flat on their back.
- **Paced bottle feeding: the evidence is thin.**
  - Within-subject experiment, 29 mothers and full-term babies (Early Human Development 2025): paced feeding gave **longer, slower feeds than typical bottle feeding, with no difference in how much milk was taken**; mothers' sensitivity to cues was similar for paced and typical bottle feeding, and both were lower than breastfeeding [abstract].
  - Online survey (J Nutr Educ Behav 2023): 41% had heard of paced feeding; those who used it were much less likely to encourage the baby to finish the bottle (OR 0.04). "More research is needed to determine the effectiveness" [abstract].
  - The 2025 paper's authors note no earlier experimental studies of its effectiveness [search, snippet of the same abstract].
  - So the app can teach responsive bottle feeding (CDC, NHS) and call it paced feeding, but must not claim it protects breastfeeding, prevents "nipple confusion" or prevents obesity.

### 3.7 Formula when out and about

**GOV.UK / UKHSA, "Preparing infant formula safely during water supply disruptions and when travelling"**, published 2 November 2026 [opened]:

- **Ready-to-feed liquid formula** in a carton is a convenient option away from home.
- Or take **a vacuum flask of hot water that's just been boiled**: "If the flask is full and sealed, the water will stay above 70°C for several hours." The flask needn't be sterilised but should be clean and used only for the baby. Carry measured powder separately in a clean, dry container; add it only when making the feed.
- If you must make a feed in advance: cool it quickly at home (bowl of cold water, then the fridge), take it out of the fridge just before leaving, carry it **in a cool bag with an ice pack and use it within 4 hours**; **without an ice pack or fridge, within 2 hours**. Not recommended as a regular approach.
- Made-up formula in a fridge: **use within 24 hours**.
- Bottled water isn't sterile and must be boiled before use; choose still water with low sodium (the page gives limits; left out of app copy because the content test rejects "mg" patterns).

**NHS "How to make up baby formula"** (reviewed 31 August 2023, next review due 31 August 2026, so now overdue) [opened]: make feeds one at a time as needed; "Even when a feed is kept in a fridge, bacteria can still survive and multiply"; never warm formula in a microwave; throw away formula left after a feed; water at 70°C or more kills harmful bacteria.

WHO 2007 formula guidance: prepared feeds in a fridge at 5°C or below for up to 24 hours; transported feeds used within 2 hours of leaving the fridge [recall, unverified; PDF returned 403].

### 3.8 Mothers' work and children: what the research says

All observational; none can show cause.

- **Goldberg, Prause, Lucas-Thompson & Himsel 2008**, Psychological Bulletin, meta-analysis of **68 studies (770 effect sizes)**: comparing employed with non-employed mothers, effects on children's achievement were **non-significant**. Part-time work showed small benefits over full-time. Associations were **positive** for single-parent families, diverse or international samples, and families who were not middle or upper class [abstract].
- **Lucas-Thompson, Goldberg & Prause 2010**, Psychological Bulletin, meta-analysis of **69 studies (1,483 effect sizes)** on employment in infancy and early childhood: with a few exceptions, **not significantly associated** with later achievement or behaviour problems; where there were associations, employment went with higher teacher-rated achievement and fewer internalising problems. Most beneficial where families faced single parenthood or welfare. Some moderator analyses found negative effects for middle-class and two-parent families and for very early employment (first year). The authors: the small and mostly non-significant results "should allay concerns about mothers working when children are young", while the first-year findings fit calls for more generous maternity leave [abstract].
- **Brooks-Gunn, Han & Waldfogel 2010**, Monographs SRCD, NICHD Study of Early Child Care (about 900 white and 113 African-American children): full-time work in the first year had some negative direct links with cognitive scores, offset by higher income, more use of good-quality centre care and, for part-time work, greater maternal sensitivity. **Overall effects were neutral.** No link with attachment security. Centre-based care was not linked with more behaviour problems. Some links with later maternal depressive symptoms [abstract].
- Low-income Chicago sample (N = 411, Infant Mental Health Journal 2018): first-year employment linked with more behaviour problems at 3 and 5; **more involvement by fathers in childcare eased** the link with internalising problems [abstract].

What the app can say: children of working mothers do as well on average; quality of care and what happens at home matter more (already the message in `starting-nursery`); in the first year, part-time hours, leave and a partner sharing care may help. No guilt.

### 3.9 Fathers and partners

- Swedish population cohort (Scand J Public Health 2010): babies whose fathers took **no paternity leave** in the first year were less likely to be breastfed at 2 months and beyond; the authors suggest paid paternity leave may help breastfeeding up to 6 months [abstract]. Observational.
- Meta-analysis of family-centred breastfeeding interventions (Nursing Open 2026, 19 studies, Cochrane RoB 2 tool): involving family members improved **exclusive breastfeeding at 6 months** compared with routine care (**OR 2.93, 95% CI 1.90 to 4.50**); the authors recommend involving fathers and grandparents [abstract].
- The Iranian Ministry of Health's World Breastfeeding Week 2023 pack (Tabriz University of Medical Sciences, Bonab, 1402) states that fathers' practical and emotional support helps breastfeeding and that paternity and parental leave matter [opened]. The pack contains other countries' case stories, so only its general points are usable in Persian copy.

### 3.10 Slings and carriers

**TICKS** (UK Sling Consortium; Lullaby Trust page, last reviewed 1 February 2025, page shows "last updated 7 October 2026") [opened]:

- **T**ight
- **I**n view at all times
- **C**lose enough to kiss
- **K**eep chin off the chest
- **S**upported back

(Same five points on the Queensland Government page, 29 March 2022 [opened].)

**Feeding in a sling.** The Lullaby Trust: feeding hands-free while moving about or doing other tasks is unsafe, especially under four months, and this also applies to premature babies or those with a health condition; "take them out of the sling" to feed. The airway risk is greatest when the chin rests on the chest or the mouth and nose are covered by the parent's skin or clothes. There is "no reliable evidence" linking slings to sudden infant death, but accidents have happened, mostly with very young babies [opened]. The Trust's April 2025 statement after a baby's death in a sling: it has developed guidance to avoid hands-free feeding and is considering further changes [opened]. A coroner's report concerned a seven-week-old breastfed hands-free in a carrier [opened, Durham University news, 16 June 2026].

**CPSC (US), March 2010** (archived blog) [opened]: at least 14 babies died in sling-style carriers since 1998; warning for babies **under 4 months**. Two ways slings suffocate: the face presses against the fabric or the adult's body; or the fabric pushes the chin onto the chest, partly closing the airway. Extra care, and a talk with the baby's doctor, for twins, low birthweight or premature babies, or those with health problems (including colds) [opened; colds detail is search]. 12 of the 14 deaths were under 4 months [search]. A US mandatory sling standard applies to products made after 30 January 2018 [search].

**Research:**

- **Bergounioux et al. 2015**, European Journal of Pediatrics: **19 sudden unexpected infant deaths linked to carriers**; most were healthy full-term babies **under 3 months**, and suffocation was the most frequent cause [abstract].
- **Narrative systematic review, BMJ Paediatrics Open 2026** (Durham; 62 papers, 2000–2024, mostly small studies): benefits for babies and carers (breastfeeding support, development, bonding, parental wellbeing), but **infrequent accidental deaths (mainly asphyxia) and injuries (mainly falls)**, usually with a poorly fitting or poorly positioned carrier; ill-fitting carriers also caused wearers pain [abstract].
- **UK survey, BMJ Paediatrics Open 2026** (1,470 mostly white mothers aged 26 to 45 with babies under 12 months): 96% had used a sling or carrier; manufacturers gave little safety information; **25% didn't know the UK guidance and another 25% felt it lacked crucial information** [abstract].
- **English ambulance registry, Resuscitation Plus 2026** (April 2020 to March 2025): of 114 infant cardiac arrests, **2 were linked to slings (1.8%)**; co-sleeping was involved in 33.3% [abstract]. One region; rare but real.
- The 2010 CPSC data and the 2015 series both point to **the first 3 to 4 months** as the risk window.

**Falls and everyday handling** — Queensland Government [opened]: the wearer tripping and falling is a main hazard; when bending, support the baby with a hand behind their back and **bend at the knees, not the waist**; don't use a sling during activities that could cause injury, **such as drinking hot drinks or cooking**; premature, low birthweight babies or those with breathing difficulties are at greater risk. Health Canada (archived 2013) [opened]: not while **cooking, running, cycling or drinking hot beverages**; hold on to the baby when bending; babies born prematurely or with a medical condition are at higher risk of suffocation, so talk to the doctor first. HSE Ireland: don't make or drink hot drinks while a child is in a sling or carrier [search; page 403]. The existing `burns-scalds` card and `grandparents-carers` already say to keep hot drinks out of reach.

**Hips** — International Hip Dysplasia Institute (no page date) [opened]: the hip-healthy position is **thighs spread apart and supported to the knee, hips bent** (the "M-position"); narrow-based carriers that don't support the thigh are "Not Recommended" for prolonged use; occasional short use is unlikely to affect hips, but many hours a day in the first six months may; carriers "could inadvertently place hips in an unhealthy position, especially when used for extended periods". IHDI doesn't endorse products. Inward-facing is "acknowledged as hip healthy" for the first six months [search]. A 2023 ultrasound study of 13 babies found hips sat deeper in wide-base carriers [search]. Never say a carrier prevents hip dysplasia.

**Back carries:** no national body page found with an age rule or method. Leave out of app copy, beyond "learn new carries with an experienced helper" [recall, unverified].

**Benefits:** in the existing app, carrying trials on crying (Hunziker & Barr 1986; Barr 1991) are already cited in `crying-curve`. The 2026 review adds breastfeeding support and parental wellbeing as reported benefits, from mostly small studies [abstract].

---

## 4. Where bodies disagree

| Question | CDC (US) 2024–26 | NHS (England) | ABM 2017 | Iran MoH (GUMS 1402) | Cautious path for the app |
|---|---|---|---|---|---|
| Fresh milk at room temperature | Up to 4 hours at 25°C or cooler | 4 to 6 hours (pump page) | 4 hours optimal; 6–8 hours if very clean; 4 hours at 27–32°C | 4 hours ideal, 8 acceptable at 25°C | Up to 4 hours, in a cool place. In a hot room, chill it sooner (WHO 2003 newborn care: 1 hour above 22°C). |
| Fridge | Up to 4 days | Up to 8 days at 4°C or colder, at the back | 4 days optimal; 5–8 days if very clean | 3–5 days at 2–4°C | Up to 4 days, at the back of the fridge. Say NHS allows longer. |
| Ice compartment in a fridge | Not given | Up to 2 weeks | Not given | Two weeks | Up to 2 weeks. |
| Freezer (−18°C) | About 6 months best, 12 acceptable | Up to 6 months | 6 months optimal, 12 acceptable | Not given | Use within about 6 months. |
| Thawed milk | 24 hours in fridge from fully thawed; 2 hours once warm | Use straight away | No refreeze advice possible; 2 hours at room temperature | Not given | Use as soon as you can; if thawed in the fridge, within 24 hours; never refreeze. |
| Leftovers after a feed | Within 2 hours of the baby finishing | Throw away after the feed | Discard within 1–2 hours | Not given | Throw away what's left, at the latest 1 to 2 hours after the feed. |
| Cool bag with ice packs (breast milk) | Up to 24 hours | Not stated | One study, 24 hours at 15°C | Not given | Up to 24 hours, then into a fridge or freezer. |
| Pump parts | Clean after each use; sanitise at least daily, especially under 2 months or premature | Sterilise after each use | Wash and air-dry; sterilising not needed | Not given | Clean after every use; sterilise as your health service advises, at least daily for young, premature or unwell babies. |
| Made-up formula carried out | — | Make feeds one at a time | — | — | Flask of just-boiled water plus powder, or ready-to-feed. If pre-made: cool bag with ice pack, within 4 hours; without, within 2 hours (GOV.UK 2026). |

Other disagreements:

- **Hands-free breastfeeding in a sling:** the Lullaby Trust (2025) says it's unsafe, especially under 4 months [opened]. Some babywearing groups teach it [recall, unverified]. App: take the baby out to feed.
- **When to introduce a bottle for a breastfed baby:** NHS local trusts say once breastfeeding is established, from a few weeks up to about 6 weeks; womenshealth.gov says at least a month [search]. App: "once breastfeeding is going well, and a few weeks before you go back".

---

## 5. Claims the app must NOT make

1. A single "correct" storage time as if all bodies agree, or the longest times (8 days in the fridge, 6–8 hours at room temperature, 12 months frozen) without the condition attached.
2. That thawed milk can be refrozen, or that warm fresh milk can be added to frozen milk.
3. That microwaving on a low setting is fine.
4. That stored milk that smells soapy or sour has gone off (ABM: lipase smell, no evidence babies reject it). But don't say any smell is fine: stringy or foul-looking milk goes in the bin.
5. Any milk volume ("2–4 ounces", "60–120 ml"): the content test fails on these, and amounts vary by baby.
6. That paced bottle feeding protects breastfeeding, prevents "nipple confusion", prevents overfeeding or obesity. There is one small experiment and one survey.
7. "Trials show" workplace support helps breastfeeding: Cochrane found no trials. Say "is linked with".
8. That mothers' work harms children, or that staying at home is better. Nor the reverse: that work is better for children. The research is mostly neutral and context-dependent.
9. That slings cause cot death, or that slings are safe for sleeping unattended. The Lullaby Trust: no reliable evidence for a SIDS link, but suffocation accidents happen.
10. That feeding hands-free in a sling is safe.
11. That any carrier prevents or treats hip dysplasia, or names of "hip-healthy" products.
12. Any pump, bottle, formula or carrier brand.
13. That every employer in Iran must give a breastfeeding room, or that the 9-month leave covers informal or self-employed workers. State what the laws say and suggest checking with the workplace or the Social Security Organisation.
14. Pronatalist framing ("to increase the population") taken from the 1400 law or its implementation documents. State entitlements only.
15. The bottled-water sodium and sulphate limits from GOV.UK (they would trip the "mg" test, and Iranian bottled-water labels may differ).

---

## 6. Iran-specific section (for Persian copy only)

### 6.1 Maternity leave: 9 months

**قانون حمایت از خانواده و جوانی جمعیت (1400), ماده ۱۷** [opened, KUMS Kermanshah health centre compilation, 1404]:

- Applies "to all employees in all public and non-public sectors" («نسبت به همه مستخدمین و کارکنان در کلیه بخشهای دولتی و غیردولتی»).
- **(الف)** Maternity leave **nine full months with full pay and allowances**; at the mother's request up to two months can be taken in the last months of pregnancy; **twelve months for twins or more**. The government compensates private employers where needed.
- **(ب)** Night shifts are **optional** for pregnant mothers, mothers of a breastfed child up to two years, and **fathers until the baby is one month old**, in jobs that need night shifts. This clause does not cover the private sector under the Labour Law.
- **(پ)** Pregnant mothers whose jobs allow it are entitled, on request, to **at least four months of remote work** during pregnancy.
- [recall, unverified] The 1400 law was approved for a seven-year trial period under Article 85 of the Constitution. Check its current status before shipping.
- [search] Eligibility for Social Security payment: 60 days of contributions in the year before the birth. Unverified.
- The Labour Law's own Article 76 still reads **90 days** for women workers (45 days preferably after birth, 14 days extra for twins) [opened, edalatsara copy]. The 1392 and 1400 laws extended this; the app should give the 9 months and say "check with your workplace or insurer".

### 6.2 The daily breastfeeding hour «پاس شیر» / «ساعت شیردهی»

**قانون ترویج تغذیه با شیر مادر و حمایت از مادران در دوران شیردهی (1374)** with amendments to 1386, Ministry of Health compilation [opened, IUMS copy]:

- **ماده ۳، تبصره ۱** (as amended 1386/4/6): breastfeeding mothers who return to work and keep breastfeeding may take **one hour a day, up to the child's 24 months**, without it being deducted from their earned leave («حداکثر تا ۲۴ ماهگی… روزانه یک ساعت»).
- **تبصره ۲:** mothers' job security must be protected after maternity leave and while breastfeeding.
- **Executive regulation, ماده ۶** (amended 1383): the hour can be taken **in up to three parts** as the baby needs; **two hours for mothers of twins or more**. Government bodies must provide a suitable place in proportion to the number of breastfeeding mothers.
- **Regulation ماده ۴:** the hourly leave needs a health-centre certificate that the mother is breastfeeding. (The regulation text still says 20 months; the law was amended to 24.)
- **Regulation ماده ۵:** after maternity leave, mothers return to their previous job and can't be transferred during breastfeeding unless they ask.
- **Regulation:** women covered by the Labour Law follow its own rules.
- **Law ماده ۴:** government bodies not covered by the Labour Law must provide suitable facilities near the workplace for feeding babies.

**قانون کار، ماده ۷۸** [opened, edalatsara copy]: in workplaces with women workers, the employer must give breastfeeding mothers **half an hour for feeding after every three hours of work, until the child is two years old**; this counts as working time. The employer must also set up childcare (crèche, nursery) in proportion to the number of children; Behzisti sets the rules (note amended 1390).

### 6.3 Breastfeeding rooms and nurseries

**1400 law, ماده ۲۲** as compiled [opened, KUMS]: listed public bodies must, within six months, provide suitable spaces in buildings and public places under their control for babies' needs, for pregnant mothers to rest, for **breastfeeding** and for childcare; such places are recognised as «مراکز تکریم مادر و کودک». **تبصره ۳:** these bodies must provide **nurseries for the children of their working mothers**, directly with the private sector or by buying services. How widely this is implemented is unknown.

### 6.4 Fathers' leave

[search] **Two weeks of compulsory paid ("encouragement") leave** for employed fathers when a child is born, from Note 2 of the 1392 amendment to population and family laws. In Aban 1403 the Administrative and Recruitment Organisation said this rule is still in force. Mainly government employees; coverage for Labour-Law workers unclear. Verify against the official text before use. The 1400 law also makes night shifts optional for fathers until the baby is one month old [opened, see 6.1].

### 6.5 Storage advice in Iran

The Ministry of Health's Baby-Friendly guidance gives 25°C room temperature: 4 hours ideal, 8 acceptable; home fridge (2–4°C): 3–5 days; ice compartment: two weeks [opened, GUMS 1402]. The Persian guide should use the cautious path (4 hours, 4 days), mention that the health centre may give slightly different times, and add a line on hot summers: chill sooner, carry in a cool bag with ice packs.

### 6.6 Traditions

- **Carrying:** I found no ethnographic or health source on traditional carrying in Iran. Back carrying in a cloth by rural and nomadic mothers, and the hanging cradle «ننو», are part of family life in many regions [recall, unverified]. The existing safe-sleep guide already advises against «ننو» for sleep; a slings guide in Persian could say holding and carrying are good, and the TICKS checks apply to any cloth or carrier. Don't describe regional practices without a source.
- **Swaddling «قنداق»:** already handled in `swaddling-and-hips`.
- **Stopping breastfeeding (out of scope, flag for a future note):** a Tehran survey of mothers (International Breastfeeding Journal 2026) found 41.2% used bitter or sticky substances on the breast to stop breastfeeding and 32.9% unprescribed medicines; 56.2% stopped between 18 and 24 months [abstract].

### 6.7 Persian copy rules

No other country named in Persian-only text (for the storage table, say «برخی نهادهای بهداشتی» rather than naming the US or UK, or follow the app's existing pattern for naming bodies). Cite the laws by name and article number. No political or pronatalist framing.

---

## 7. Recommended guide outlines

Only [opened] or [abstract] facts are used. Each block line is followed by its source in brackets for the drafter (remove before shipping).

### Guide A

- **slug:** `milk-when-apart`
- **title:** Feeding your baby when you're apart
- **summary:** Expressing, storing and thawing breast milk, bottles for carers, formula on the go, and going back to work.
- **minMonths:** 0 **maxMonths:** 24
- **topic:** food
- **relatedTags:** none needed; cross-link `milk-feeds`, `starting-nursery`, `grandparents-carers`

**Blocks:**

1. **p:** Going back to work or study, a night away, or a carer giving some feeds: there are many reasons to feed your baby when you're apart. Breast milk, formula or a mix can all work. Here's how to keep milk safe and feeds calm. [NHS expressing page; `milk-feeds` framing]
2. **h:** Expressing by hand
3. **steps:**
   - *Get ready* — Wash your hands, use a clean, sterilised container, and sit somewhere warm and quiet. [NHS hand expression]
   - *Warm and massage* — Gently stroke the breast from the armpit towards the nipple. [NHS]
   - *Make a C* — Cup the breast with your thumb and finger opposite each other, about 2 to 3 cm back from the nipple. [NHS]
   - *Press and release* — Squeeze gently, let go, and keep a steady rhythm. It can take a few minutes before drops come. [NHS]
   - *Move round, then swap* — When the flow slows, move your fingers round the breast. Then do the other side, and come back to the first. [NHS]
4. **p:** A pump can be quicker, but hand expression costs nothing and is useful for sore, full breasts. [NHS pump page; NHS hand expression]
5. **h:** How long milk keeps
6. **table:** head: `Where`, `How long`, `Notes`
   - `Room temperature, in a cool place`, `Up to 4 hours`, `Chill it sooner if the room is hot` [CDC; ABM; WHO 2003 via MSF]
   - `Cool bag with frozen ice packs`, `Up to 24 hours`, `Then use it, or put it in the fridge or freezer` [CDC]
   - `Fridge, at the back, 4°C or colder`, `Up to 4 days`, `Some health services allow up to 8 days` [CDC; ABM; NHS]
   - `Ice compartment inside a fridge`, `Up to 2 weeks`, `Not for long-term storage` [NHS; Iran MoH]
   - `Freezer, −18°C or colder`, `About 6 months`, `Some services allow up to 12 months` [NHS; CDC; ABM]
7. **callout science:** Advice on storage times differs between health services, because the studies are small and older and kitchens differ. We give the shorter times. If your health centre gives different ones, follow them. A baby in hospital follows the unit's own rules. [ABM "many studies are older"; NHS; CDC; search note on hospitals stays out]
8. **h:** Thawing and warming
9. **list:**
   - Thaw in the fridge overnight, or stand the sealed bag or bottle in warm water. [CDC; NHS]
   - Use thawed milk as soon as you can. If it thawed in the fridge, use it within 24 hours. Once warmed, within 2 hours. [CDC; NHS "straight away"]
   - Never refreeze milk that has thawed. [CDC; NHS]
   - Cold milk is fine if your baby takes it. If you warm it, use warm water, not boiling, and test a few drops on your wrist. [CDC; ABM]
   - Stored milk can smell a little different. That's normal. Throw it away if it looks stringy or smells foul. [ABM]
10. **callout safety:** Never thaw or warm breast milk or formula in a microwave. It heats unevenly and can burn your baby's mouth. Throw away milk left in the bottle after a feed. [CDC; NHS; ABM; NHS formula]
11. **h:** Keeping pump parts clean
12. **list:**
    - Take the parts apart and rinse off milk under running water. [CDC]
    - Wash them as soon as you can after pumping, then let them air-dry. Don't use a tea towel. [CDC]
    - Sterilise as your health service advises, and at least once a day if your baby is under 2 months, was premature or is unwell. [CDC; NHS after each use]
13. **h:** Bottles from someone else
14. **p:** A breastfed baby often takes a bottle more easily from someone other than you. Start when your baby is calm and not too hungry. [CDC bottle-feeding]
15. **steps:**
    - *Upright and close* — Hold your baby close and fairly upright, never lying flat. [CDC; NHS]
    - *Bottle tipped* — Hold the bottle at an angle so milk only flows when your baby sucks. [CDC; NHS]
    - *Let them pause* — Give breaks when your baby wants them. [CDC; NHS]
    - *Stop at full* — Stop when they turn away or relax, even if milk is left. Never push them to finish. [CDC; NHS]
16. **callout safety:** Never prop a bottle or leave a baby alone with one. They could choke. [NHS; CDC]
17. **callout science:** This slower, baby-led way is often called paced bottle feeding. In one small study of 29 babies, it made feeds slower without changing how much milk babies took. We don't yet know if it helps breastfeeding last longer. [Early Hum Dev 2025; J Nutr Educ Behav 2023]
18. **h:** Formula on the go
19. **list:**
    - Easiest: a carton of ready-to-feed liquid formula. [GOV.UK 2026]
    - Or a clean flask of water that's just boiled, full and sealed, with the powder measured into a separate clean, dry pot. Make the feed when it's needed. [GOV.UK 2026; `milk-feeds` 70°C rule]
    - Had to make one earlier? Cool it fast, keep it in the fridge, then carry it in a cool bag with an ice pack and use it within 4 hours. Without an ice pack, within 2 hours. [GOV.UK 2026]
20. **h:** Going back to work
21. **steps:**
    - *Tell your workplace early* — Say in writing that you're breastfeeding, and ask about flexible hours, a private room (not a toilet) and a fridge. [NHS returning to work; ABM shared fridge]
    - *Practise first* — Try expressing and a few trial days with the new carer before you start. Starting midweek gives a shorter first week. [NHS; AAP HealthyChildren 2025]
    - *Keep milk flowing* — Expect to express about every 3 hours at first, and breastfeed often when you're together. Skipped or short sessions are the usual reason supply drops. [NHS; AAP]
    - *Mixing with formula?* — Swap one feed at a time and give your body 5 to 7 days to adjust before swapping the next. Formula feeds will probably lower your milk supply, so keep breastfeeding regularly if you want to carry on. [NHS introducing formula]
22. **callout science:** Large reviews of dozens of studies found that, on average, children whose mothers work do as well as children whose mothers stay at home. What matters more is warm, steady care and what happens at home. These are studies of links, not proof, and in the first year shorter hours and shared care may help. [Goldberg 2008; Lucas-Thompson 2010; Brooks-Gunn 2010]
23. **p:** Partners count too. Babies whose fathers took leave were more likely to be breastfed for longer in one large study, and in trials, involving the family raised breastfeeding at 6 months. [Swedish cohort 2010; Nursing Open 2026]
24. **callout tip:** No trials have tested workplace support for breastfeeding yet, but studies link a private room, breaks and a supportive manager with breastfeeding for longer. It's worth asking. [Cochrane 2012; IJEH 2021]
25. **(Persian only) callout tip:** Iranian law: nine months' paid maternity leave (twelve for twins or more); one breastfeeding hour a day until 24 months, which can be split into up to three parts (two hours for twins); under the Labour Law, half an hour after every three hours of work until age two. Ask your workplace or insurer how it applies to you. [1400 law ماده ۱۷; 1374 law ماده ۳ تبصره ۱ as amended 1386; regulation ماده ۶; Labour Law ماده ۷۸]
26. **callout safety:** See your health worker or a breastfeeding supporter if your breast becomes red, hot and painful, you feel feverish and unwell, or your baby has fewer wet nappies than usual. [`milk-feeds` red flags; mastitis link from NHS introducing formula. **Recheck:** the mastitis red-flag wording needs a source opened before shipping, see §10.]

### Guide B

- **slug:** `slings-and-carriers`
- **title:** Slings and carriers, safely
- **summary:** The TICKS checks, why feeding and cooking wait, the first months, and keeping hips healthy.
- **minMonths:** 0 **maxMonths:** 24
- **topic:** safety
- **relatedTags:** cross-link `safe-sleep-essentials`, `swaddling-and-hips`, `crying-curve`

**Blocks:**

1. **p:** Carrying your baby close can soothe them, free your hands and help you both feel connected. Most of the time it goes well. Rarely, babies have suffocated in slings, almost always very young babies and usually when the carrier was loose or badly positioned. A few checks make it much safer. [BMJ PO 2026 review; Bergounioux 2015; Lullaby Trust]
2. **h:** TICKS, every time
3. **table:** head: `Check`, `What it means`
   - `Tight`, `Snug, so your baby is held against you and can't slump down` [Lullaby Trust/UK Sling Consortium; Queensland]
   - `In view at all times`, `You can see their face just by looking down` [same; CPSC 2010 face uncovered]
   - `Close enough to kiss`, `Their head is high enough that you can kiss the top of it` [same]
   - `Keep chin off the chest`, `There's at least a finger's space under their chin` [same; Lullaby Trust chin-on-chest mechanism] (**Recheck:** "a finger's space" comes from the TICKS leaflet's usual explanation, which I did not open; use "Their chin isn't pressed down onto their chest" if not confirmed.)
   - `Supported back`, `Their back is held in its natural curve, with their tummy and chest against you` [same]
4. **callout safety:** Babies under 4 months, and those born early, small, or with breathing or health problems, are most at risk: they can't lift their head if their face presses into fabric or their chin drops onto their chest. Check them often, and talk to your health worker first if your baby was premature or has a health condition. [CPSC 2010; Lullaby Trust; Health Canada 2013; Queensland; Bergounioux 2015]
5. **h:** Things to wait for
6. **list:**
   - Feeding: take your baby out of the sling to feed, especially in the first 4 months. Feeding hands-free while you move about is not safe. [Lullaby Trust 2025]
   - Cooking and hot drinks: no cooking, hot drinks or hot food while your baby is in a carrier. [Queensland; Health Canada]
   - Running and cycling: not with a baby in a carrier. [Health Canada]
   - Sleep: if your baby falls asleep, keep checking TICKS, and move them to a flat, firm cot when you can. [Safe-sleep essentials; Lullaby Trust]
7. **callout tip:** Bending down? Hold your baby with one hand behind their back and bend at the knees, not the waist. Falls are the commonest injury with carriers. [Queensland; BMJ PO 2026 review]
8. **h:** Healthy hips
9. **p:** Hips grow best when your baby's thighs are spread around you and supported out to the knees, with the knees bent up, like an M. Narrow carriers that leave the legs dangling aren't recommended for long periods. A short time in any carrier is unlikely to matter. [IHDI]
10. **callout science:** A review of 62 studies found carriers can support breastfeeding, bonding and parents' wellbeing. It also found rare deaths, mostly from blocked breathing, and injuries, mostly falls, usually when the carrier fitted badly. A UK survey found a quarter of parents hadn't seen any safety advice. Most of the studies were small. [BMJ PO 2026 review and survey]
11. **callout tip:** Shown how to use a carrier by the seller, a midwife or an experienced friend? It's worth it: many parents get little safety information with the product. [BMJ PO 2026 survey]
12. **(Persian only) p:** Holding and carrying babies is part of many family traditions. The same checks apply to a cloth tied round you or a bought carrier. A «ننو» is for awake time with you nearby, not for sleep. [Lullaby/TICKS; `safe-sleep-essentials`; tradition line is respectful framing, no factual claim]

---

## 8. Daily tips (14)

All 30 words or fewer. Ages in months. No milk volumes.

| id | Ages | Text | Source |
|---|---|---|---|
| `away-milk-microwave` | 0–24 | Never thaw or warm breast milk or formula in a microwave. It heats unevenly and can burn. Stand the bottle in warm water instead. | CDC storage 2026; NHS storing milk; NHS formula [opened] |
| `away-milk-no-refreeze` | 0–24 | Thawed breast milk can't go back in the freezer. Freeze it in small portions, so you only thaw what your baby will drink. | CDC; NHS [opened] |
| `away-milk-fridge-back` | 0–24 | Store expressed milk at the back of the fridge, not in the door, where it stays colder. Label it with the date. | NHS storing milk; CDC [opened] |
| `away-milk-4-hours` | 0–24 | Freshly expressed milk keeps up to 4 hours in a cool room. On a hot day, get it into the fridge or a cool bag sooner. | CDC; ABM 2017 [opened] |
| `away-milk-smell` | 0–24 | Stored breast milk can smell a bit soapy. That's normal fat breaking down. Throw it out if it looks stringy or smells foul. | ABM 2017 [opened] |
| `away-hand-express` | 0–12 | Learn to express by hand: thumb and finger in a C, a little back from the nipple, press and release. Handy for full, sore breasts. | NHS hand expression [opened] |
| `away-pump-air-dry` | 0–24 | After pumping, rinse the parts, wash them soon and let them air-dry. A tea towel can put germs back on. | CDC pump cleaning 2024 [opened] |
| `away-bottle-someone-else` | 1–12 | A breastfed baby often takes a bottle more happily from someone else. Try when they're calm and not starving. | CDC bottle feeding 2026 [opened] |
| `away-bottle-tipped` | 0–12 | Show carers: baby close and upright, bottle tipped so milk flows only when they suck, pauses allowed, stop when they turn away. | CDC; NHS [opened] |
| `away-no-prop` | 0–12 | Never prop a bottle or leave a baby alone with one. They can choke, and it's linked to ear infections and tooth decay. | NHS; CDC [opened] |
| `away-formula-flask` | 0–12 | Formula out and about: carry a clean flask of just-boiled water and the powder separately, and make the feed when needed. Or use ready-to-feed. | GOV.UK 2026 [opened] |
| `away-mixed-one-feed` | 1–12 | Adding formula? Swap one breastfeed at a time and give your body about a week to adjust before the next swap. | NHS introducing formula [opened] |
| `sling-ticks` | 0–24 | Sling check: Tight, In view, Close enough to kiss, Keep chin off the chest, Supported back. TICKS, every time you put them in. | Lullaby Trust; Queensland [opened] |
| `sling-feed-out` | 0–6 | Take your baby out of the sling to feed, especially in the first 4 months. Feeding hands-free while moving about isn't safe. | Lullaby Trust 2025 [opened] |

(Also consider `sling-no-hot-drinks`, 0–24: "No cooking or hot drinks with your baby in a sling. Put the cup down, out of reach, first." Queensland; Health Canada [opened].)

---

## 9. Persian glossary

| English | Persian |
|---|---|
| expressed breast milk | شیر دوشیده‌شده |
| expressing by hand | دوشیدن شیر با دست |
| breast pump | شیردوش |
| storage bag / container | کیسه / ظرف نگهداری شیر |
| room temperature | دمای اتاق |
| fridge / ice compartment / freezer | یخچال / جایخی یخچال / فریزر |
| cool bag / ice pack | کیف خنک‌نگه‌دار / یخ مصنوعی (آیس‌پک) |
| thaw | یخ‌زدایی، آب کردن یخ شیر |
| refreeze | دوباره فریز کردن |
| sterilise | استریل کردن، جوشاندن |
| ready-to-feed formula | شیر خشک آمادهٔ مصرف (مایع) |
| flask | فلاسک |
| mixed (combination) feeding | تغذیهٔ ترکیبی (شیر مادر و شیر خشک) |
| paced bottle feeding | شیر دادن آرام و به رهبری نوزاد با شیشه |
| milk supply | تولید شیر |
| maternity leave | مرخصی زایمان |
| father's (paternity) leave | مرخصی پدر (مرخصی تشویقی پدران) |
| breastfeeding hour | پاس شیر، ساعت شیردهی، مرخصی ساعتی شیردهی |
| breastfeeding room | اتاق شیردهی |
| workplace nursery / crèche | مهدکودک / شیرخوارگاه محل کار |
| sling / baby carrier | آغوشی پارچه‌ای (اسلینگ) / آغوشی (کریر) |
| TICKS (keep the English acronym) | قانون TICKS — needs a Persian mnemonic; Latin letters are rejected by the checker, so render as five checks without the acronym |
| suffocation (positional) | خفگی (به‌خاطر وضعیت بدن) |
| hip dysplasia | دیسپلازی (دررفتگی) تکاملی مفصل ران |
| hanging cradle | ننو |

---

## 10. Recheck before shipping

1. **E1 (P2):** fix «نسبتاً صاف» in `fa/guides.json` `milk-feeds.blocks.3.text` and `fa/tips.json` `food-bottle-pace.text`.
2. Re-open the CDC storage page and the NHS Start for Life storage page on the day of drafting; both have been updated recently and the NHS URLs keep moving.
3. Confirm the ABM correction (freezer −18°C) and check whether ABM has revised Protocol #8 since 2017.
4. Open the official TICKS leaflet (babyslingsafety.co.uk "ticks.pdf") to confirm the explanation under each letter, including "a finger's width under the chin" and "close enough to kiss".
5. Open a source for the mastitis red-flag line in Guide A block 26 (NHS mastitis page) before using it.
6. Iran: open the 1400 law on the Majlis research centre site to confirm Article 17 and the article number for breastfeeding spaces (the KUMS compilation labels it ماده ۲۲), and check whether the law's seven-year trial status [recall] affects it.
7. Iran: confirm the 2-week paternity leave from the official 1392 text and the 1403 circular, and whether it covers Labour-Law workers. Until then, leave it out of the app.
8. Iran: confirm how Social Security pays the 9-month leave for Labour-Law workers, and the eligibility rule [search].
9. Ask a Ministry of Health or university reviewer which storage times Iranian health centres currently teach (the GUMS summary gives 3–5 days fridge), and whether the app's cautious "4 days" is acceptable for Persian copy.
10. Run the content test: no "ml" or "mg" anywhere (ABM portion sizes and GOV.UK water limits are deliberately excluded).
11. Persian checker: TICKS letters are Latin and will be rejected; write the five checks out in Persian.
12. Persian copy must not name other countries: the storage table's "some health services allow 8 days" line is fine; don't say "in the UK".
13. Clinical reviewer (midwife or lactation specialist) to read Guide A; paediatrician or injury-prevention reviewer to read Guide B.

---

## 11. Sources

| Title | Publisher | Year | URL | Tag |
|---|---|---|---|---|
| Breast milk storage and preparation | CDC | 2024, updated Aug 2026 | https://www.cdc.gov/breastfeeding/breast-milk-preparation-and-storage/handling-breastmilk.html | opened |
| How to keep your breast pump kit clean | CDC | 2024 | https://www.cdc.gov/hygiene/childcare/breast-pump.html | opened |
| About feeding from a bottle | CDC | Mar 2026 | https://www.cdc.gov/infant-toddler-nutrition/bottle-feeding/index.html | opened |
| 5 tips for returning to work and breastfeeding | CDC | updated Aug 2026 | https://www.cdc.gov/breastfeeding/features/returning-to-work-and-breastfeeding.html | opened |
| Storing breast milk | NHS Start for Life | no date | https://www.nhs.uk/start-for-life/baby/feeding-your-baby/breastfeeding/expressing-your-breast-milk/storing-breast-milk/ | opened |
| Expressing your breast milk (overview) | NHS Start for Life | no date | https://www.nhs.uk/start-for-life/baby/feeding-your-baby/breastfeeding/expressing-your-breast-milk/ | opened |
| Expressing breast milk by hand | NHS Best Start in Life | no date | https://www.nhs.uk/best-start-in-life/baby/feeding-your-baby/breastfeeding/expressing-your-breast-milk/expressing-breast-milk-by-hand/ | opened |
| Expressing breast milk with a pump | NHS Best Start in Life | no date | https://www.nhs.uk/best-start-in-life/baby/feeding-your-baby/breastfeeding/expressing-your-breast-milk/expressing-breast-milk-with-a-pump/ | opened |
| Feeding advice (bottle feeding expressed milk) | NHS Best Start in Life | no date | https://www.nhs.uk/best-start-in-life/baby/feeding-your-baby/breastfeeding/expressing-your-breast-milk/feeding-advice/ | opened |
| Breastfeeding and returning to work | NHS Best Start in Life | no date | https://www.nhs.uk/best-start-in-life/baby/feeding-your-baby/breastfeeding/breastfeeding-returning-to-work/ | opened |
| Introducing formula feeds | NHS Best Start in Life | no date | https://www.nhs.uk/best-start-in-life/baby/feeding-your-baby/mixed-feeding/introducing-formula-feeds/ | opened |
| How to make up baby formula | NHS | reviewed 2023 | https://www.nhs.uk/baby/breastfeeding-and-bottle-feeding/bottle-feeding/making-up-baby-formula/ | opened |
| Preparing infant formula safely during water supply disruptions and when travelling | GOV.UK (UKHSA) | Nov 2026 | https://www.gov.uk/government/publications/preparing-infant-formula-safely-during-water-supply-disruptions-and-when-travelling | opened |
| ABM Clinical Protocol #8: Human milk storage information for home use for full-term infants, revised 2017 (Eglash, Simon) | Academy of Breastfeeding Medicine, Breastfeeding Medicine 12:390–395 | 2017 | https://www.bfmed.org/assets/DOCUMENTS/PROTOCOLS/8-human-milk-storage-protocol-english.pdf | opened |
| Correction to ABM Protocol #8 (freezer temperature) | Breastfeeding Medicine 13:459 | 2018 | https://europepmc.org/article/MED/29958002 | search |
| Appendix 3. Breastfeeding (citing WHO, Managing newborn problems, 2003) | Médecins Sans Frontières medical guidelines | n.d. | https://medicalguidelines.msf.org/en/viewport/ONC/english/appendix-3-breastfeeding-51416391.html | opened |
| Expressing breast milk at work | American Academy of Pediatrics, HealthyChildren.org | 2025 | https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Expressing-Breastmilk-on-the-Job.aspx | opened |
| Does paced bottle-feeding improve the quality and outcome of bottle-feeding interactions? | Early Human Development | 2025 | https://europepmc.org/article/MED/39693774 | abstract |
| Knowledge and use of paced bottle-feeding among mothers of young infants | J Nutrition Education and Behavior | 2023 | https://europepmc.org/article/MED/37737815 | abstract |
| Interventions in the workplace to support breastfeeding for women in employment (Abdulwadud & Snow) | Cochrane Database of Systematic Reviews | 2012 | https://europepmc.org/article/MED/23076920 | abstract |
| Breastfeeding at the workplace: a systematic review of interventions | International Journal for Equity in Health | 2021 | https://europepmc.org/article/MED/33926471 | abstract |
| Effectiveness of workplace lactation interventions in the US: updated systematic review | Journal of Human Lactation | 2019 | https://europepmc.org/article/MED/29928834 | abstract |
| Maternal employment and children's achievement in context: a meta-analysis of four decades of research (Goldberg et al.) | Psychological Bulletin | 2008 | https://europepmc.org/article/MED/18193996 | abstract |
| Maternal work early in the lives of children and its distal associations with achievement and behavior problems: a meta-analysis (Lucas-Thompson et al.) | Psychological Bulletin | 2010 | https://europepmc.org/article/MED/20919797 | abstract |
| First-year maternal employment and child development in the first seven years (Brooks-Gunn, Han, Waldfogel) | Monographs of the SRCD | 2010 | https://europepmc.org/article/MED/25152543 | abstract |
| Role of first-year maternal employment and paternal involvement in behavioral and cognitive development | Infant Mental Health Journal | 2018 | https://europepmc.org/article/MED/29904929 | abstract |
| The influence of fathers' socioeconomic status and paternity leave on breastfeeding duration | Scandinavian Journal of Public Health | 2010 | https://europepmc.org/article/MED/20147577 | abstract |
| Family-centred breastfeeding interventions to improve exclusive breastfeeding: systematic review and meta-analysis | Nursing Open | 2026 | https://europepmc.org/article/MED/42400223 | abstract |
| How to use baby slings and carriers safely | The Lullaby Trust | reviewed 2025 | https://www.lullabytrust.org.uk/safer-sleep-advice/swaddling-slings/ | opened |
| Investigating the safety of slings and baby carriers | The Lullaby Trust | Apr 2025 | https://www.lullabytrust.org.uk/investigating-the-safety-of-slings-and-baby-carriers/ | opened |
| Baby slings (news on BMJ Paediatrics Open papers) | Durham University | Jun 2026 | https://dur.ac.uk/research/current/research-news/2026/06/baby-slings/ | opened |
| Safety and benefits of adult-worn slings and baby carriers: a narrative systematic review | BMJ Paediatrics Open | 2026 | https://europepmc.org/article/MED/42235974 | abstract |
| Adult-worn sling and baby carrier safety: parental practices, knowledge and information needs | BMJ Paediatrics Open | 2026 | https://europepmc.org/article/MED/42235975 | abstract |
| Infant carry sling-associated out-of-hospital cardiac arrest in children under two: five-year regional registry | Resuscitation Plus | 2026 | https://europepmc.org/article/MED/43022814 | abstract |
| Sudden deaths in adult-worn baby carriers: 19 cases (Bergounioux et al.) | European Journal of Pediatrics | 2015 | https://europepmc.org/article/MED/26174105 | abstract |
| Parents: use extra caution when wearing baby slings | US CPSC OnSafety (archived) | 2010 | https://onsafety.cpsc.gov/blog/2010/03/12/parents-use-extra-caution-when-wearing-baby-slings/ | opened |
| CPSC educates new parents on safe babywearing | US CPSC | 2010s | https://www.cpsc.gov/content/cpsc-educates-new-parents-on-safe-babywearing-infant-suffocation-deaths-in-slings-prompt | search (403) |
| Baby slings | Queensland Government, Office of Fair Trading | 2022 | https://www.qld.gov.au/community/fair-trading/consumer-rights-complaints-and-scams/product-safety-for-consumers/safety-advice-and-warnings/baby-products/baby-slings | opened |
| Baby slings and carriers (archived) | Health Canada | 2013 | https://bac-lac.wayback.archive-it.org/web/20131016231951/http://www.healthycanadians.gc.ca/kids-enfants/infant-care-soins-bebe/slings-porte_bebes-eng.php | opened |
| Preventing burns: liquids | HSE Ireland | n.d. | https://www2.hse.ie/babies-children/child-safety/preventing-burns/liquids/ | search (403) |
| Baby carriers and other equipment | International Hip Dysplasia Institute | n.d. | https://hipdysplasia.org/baby-carriers-other-equipment/ | opened |
| Baby wearing / carrier design criteria | International Hip Dysplasia Institute | n.d. | https://hipdysplasia.org/baby-wearing/ | search |
| قانون ترویج تغذیه با شیرمادر و حمایت از مادران در دوران شیردهی (۱۳۷۴)، آئین‌نامه اجرایی (۱۳۷۵) و الحاقات (۱۳۸۰–۸۶) | وزارت بهداشت، اداره سلامت کودکان و ترویج تغذیه با شیرمادر (copy on IUMS site) | 2025 upload | https://whc.iums.ac.ir/uploads/59/2025/Feb/02/ (file: قانون ترویج تغذیه با شیرمادر و حمایت از مادران در دوران شیرد.pdf) | opened |
| دستورالعمل اجرای قانون حمایت از خانواده و جوانی جمعیت (includes text of ماده ۱۷ and ۲۲) | مرکز بهداشت شهرستان کرمانشاه، KUMS | 1404 | https://women.kums.ac.ir/kums_content/media/image/2026/05/جوانی جمعیت_251276.pdf | opened |
| قانون کار، مبحث چهارم: شرایط کار زنان (مواد ۷۶ و ۷۸) | edalatsara.com (unofficial legal text) | n.d. | https://edalatsara.com/rules/قانون-کار/مبحث-چهارم-–-شرایط-کار-زنان | opened |
| بخشنامه/نامه سازمان اداری و استخدامی: دو هفته مرخصی پدران | ekhtebar.ir (report) | 1403 | https://www.ekhtebar.ir/سازمان-اداری-و-استخدامی-کشور-حکم-دو-هفت/ | search |
| کتابچه ترویج تغذیه با شیر مادر، راهنمای بیمارستان‌های دوستدار کودک | بیمارستان ۱۷ شهریور، دانشگاه علوم پزشکی گیلان | 1402 | https://17shahrivar.gums.ac.ir/uploads/40/2023/Dec/28/ (file: کتابچه ترویج تغذیه باش یرمادر-راهنمای بیمارستانهای دوستدار کودک7-10-1402.pdf) | opened |
| تغذیه با شیر مادر (هفته جهانی ترویج تغذیه با شیر مادر ۲۰۲۳: شیردهی و اشتغال) | دانشگاه علوم پزشکی تبریز، شبکه بناب | 1402 | https://bonab.tbzmed.ac.ir/uploads/user/861/1402/تغذیه با شیر مادر.pdf | opened |
| Breastfeeding cessation decisions, practices, and support-seeking among mothers in Tehran | International Breastfeeding Journal | 2026 | https://europepmc.org/article/MED/42363224 | abstract |
| How to prepare formula for bottle-feeding at home | WHO | 2007 | https://iris.who.int/bitstream/handle/10665/43659/9789241595414_eng.pdf | recall, unverified (403) |
