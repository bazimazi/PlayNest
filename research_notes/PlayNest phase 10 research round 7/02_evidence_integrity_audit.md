# 02 — Evidence integrity audit of research claims in the guides

Research notes for PlayNest phase 10, round 7. Researched 19 Nov 2026.

## 1. Scope

This audit checks research claims that have already shipped in the English guides. It covers claims about studies, numbers and effects. It writes no new content.

- **Input:** the 185 lines in `claims.txt` (file | slug | line), taken from `src/data/guides*.ts`.
- **Sources checked against:** each guide's `refs` / `sources`, plus `src/data/sources.ts`.
- **Skipped:** content that round 6 already audited in `07_currency_audit_high_stakes.md`, namely first aid, fever, feeding, safe sleep, car seats and teeth. That means lines 1–5 (`newborn-jaundice`, `swaddling-and-hips`), 54 (`starting-solids`), 58–59 (`everyday-eating`) and 138 (`car-seats`).
- **Not read:** the Persian copy in `src/i18n/locales/fa/guides.json`. Every fix below must be made there too, and the hash check in `src/i18n/hashes/fa/guides.json` will flag each changed string.

**Triage of the 185 lines**

| Group | Lines | What I did |
|---|---|---|
| Code comments and metadata (`*` lines, `refs:` lines) | 8, 22–24, 41, 78–79, 107, 124, 135, 142–144, 156–157, 162, 164 | Read for rules only. They make no claim to parents. |
| Round 6 territory | 1–5, 54, 58–59, 138 | Skipped. |
| Summaries, table headers, pure advice with no study claim | 25, 32–33, 133, 145–146, 26, 55, 69, 91–94, 113, 118–119, 122 | Triaged as low risk. No number or causal claim to check. |
| Claims with a number, effect, "trial" or a famous study | about 150 lines | Triaged. Of these, **about 60 were verified** (sections 3 and 4) against an abstract, the opened page or an earlier opened note (section 4). The rest are in section 5. |

**Headline:** no P1 (harm) problems. There are **6 P2 items** (wrong or misleading) and **14 P3 items** (wording or citation). Most of the content holds up well. The pattern in the problems is consistent: findings are generalised beyond the population studied, and a few famous findings are quoted without their later failed replications.

## 2. How to read these notes

- **Verdicts:**
  - **OK**: the claim matches the source.
  - **soften**: true, but it overreaches or leaves out an important limit.
  - **wrong**: the source says something different.
  - **outdated**: a newer result changes the picture.
  - **unverifiable**: I could not reach the source.
- **Severity:**
  - **P1**: could cause harm.
  - **P2**: wrong or misleading.
  - **P3**: wording or citation.
- **Tags:**
  - **[opened]**: I read the page or full text this session.
  - **[abstract]**: I read the abstract, through the Europe PMC REST API.
  - **[search]**: from search snippets only.
  - **[recall, unverified]**: background knowledge I did not check.
  - **[note: …]**: I relied on an earlier PlayNest research note. I give that note's own tag, which matters where the note says [opened].
- **Line numbers** are the line numbers in `claims.txt`. Quoted app text is exact, so a fix can find the string.
- **Replacement wording** is the same length as the original or shorter. I checked this by character count.
- **Access problems:**
  - pmc.ncbi.nlm.nih.gov returned a reCAPTCHA.
  - The Europe PMC `fullTextXML` endpoint returned HTTP 500 for all three papers I tried (PMC4402657, PMC5681450, PMC12355463).
  - So figures that appear only in full texts were taken from earlier notes or from search snippets, and are tagged that way.
- **Budget:** 6 web searches, 5 page fetches, and about 75 abstract look-ups in 11 Europe PMC batches.

---

## 3. Claims that need a change

### P2: wrong or misleading

**E-1. `guides.ts` | `bilingual-families` | line 176 | verdict: outdated / soften | P2**

> "One study of kindergarten children found that those growing up with two languages did better on several attention and self-control tasks. Researchers still debate how big this effect is — the surest reason to keep your languages is connection to family, stories and culture."

Evidence:

- Carlson & Meltzoff 2008 [abstract]:
  - 50 children.
  - The bilingual children's raw scores did **not** differ from their peers'. The advantage appeared only after statistically controlling for their lower verbal scores and lower family income.
  - There was **no advantage on impulse-control ("Delay") tasks**. So "self-control" is wrong.
- Lowe et al. 2021, *Psychological Science* meta-analysis [abstract]:
  - 1,194 effect sizes from 23,414 children aged 3 to 17.
  - The overall effect was g = 0.08, and it was "indistinguishable from zero (g = −.04) after we adjusted for publication bias".
- Dick et al. 2019, *Nature Human Behaviour* [abstract]: in 4,524 US children aged 9 to 10, "little evidence for a bilingual advantage".

The debate is now about whether the effect exists at all, not about how big it is. This is the famous-finding-that-didn't-replicate pattern.

Replace with:

> "A small study of kindergarten children found that those growing up with two languages did better on some attention tasks, but larger studies since mostly find little or no difference. The surest reason to keep your languages is connection to family, stories and culture."

Add Lowe 2021 (doi:10.1177/0956797621993108) to `sources`.

**E-2. `guides-evidence.ts` | `what-decades-show` | line 31 | verdict: outdated | P2**

> "A well-known US home-visiting programme was tested in England, alongside its existing health services, and added no measurable benefit."

Evidence:

- Building Blocks (Robling 2016): no benefit on its four primary outcomes up to age 2 [recall, unverified; the ref is in the guide].
- The linked-data follow-up to age 7 (BB:2-6, *Int J Popul Data Sci* 2022 and NIHR *Public Health Research* 2021) found [search]:
  - children in the programme were more likely to reach a "good level of development" at age 4–5 (aOR 1.24, 95% CI 1.01–1.52);
  - after adjusting for birth month, they did better in Key Stage 1 reading;
  - there was no difference in child-in-need status.

So "no measurable benefit" is now too strong.

Replace with:

> "A well-known US home-visiting programme was tested in England, alongside its existing health services, and met none of its main goals."

Add the BB:2-6 paper (PMC9644691) to `refs` once it has been opened. This wording is safe either way.

**E-3. `guides-growing.ts` | `praise-and-confidence` | line 61 | verdict: soften | P2**

> "The study was small, but lab studies point the same way: children praised for being clever may avoid hard tasks, so they don't risk looking less clever."

Evidence:

- Gunderson et al. 2013 [abstract]: 53 children. Process praise at 14–38 months predicted "incremental frameworks" at 7–8 years. Praise for traits was *not* linked with fixed frameworks. The app's first sentences are fine.
- Mueller & Dweck 1998 is the classic lab result [abstract]: six studies, fifth graders.
- Li & Bates 2019, *J Exp Psychol Gen* [abstract], closely replicated Mueller & Dweck in 624 children aged 9 to 13:
  - none of the 8 motivation and attribution measures replicated (mean p = .48);
  - two further studies found no effect.

"Point the same way" hides a well-known replication failure.

Replace with:

> "The study was small. Early lab studies found children praised for being clever avoided hard tasks, but a large repeat study didn't: treat it as a hint."

The advice to praise effort and strategy can stay. It is low-risk, and the same guide's mindset paragraph (line 63) is already honest.

**E-4. `guides.ts` | `numbers-and-shapes` | line 178 | verdict: wrong | P2**

> "In a study of more than 100 three-year-olds, children who were better at copying block structures also did better at early maths. Parents of children who were behind reported using fewer spatial words like "above" and "below" — so build together and talk as you go."

Evidence: Verdine et al. 2014, *Child Development* [abstract]:

- N = 102 three-year-olds.
- "Lower SES children were already lagging behind… lower SES parents reported using significantly fewer spatial words."
- So the spatial-words finding was about **family income**, not about the parents of the children who were behind. The app turns an income difference into a parent-behaviour finding that reads as blame.

Replace with:

> "In a study of about 100 three-year-olds, children who were better at copying block structures also did better at early maths. So build together, and use words like "above" and "below" as you go."

**E-5. `guides-more.ts` | `premature-hospital-stays` | line 100 | verdict: wrong (too broad) | P2**

> "It starts right after birth and goes on for as many hours as possible, unless a baby needs breathing support or is in shock."

Evidence:

- WHO news release, 15 Nov 2022 [opened]:
  - babies born before 37 weeks or under 2.5 kg;
  - care "should start immediately after birth, without any initial period in an incubator";
  - "for as many hours as possible".
  - It lists no exceptions.
- The WHO 2022 guideline remarks [search: BIGG recommendation database; UCL-hosted *Lancet* comment, Hill 2022]: immediate kangaroo care can start before a baby is stable, **except** when the baby "is unable to breathe spontaneously after resuscitation, is in shock or needs mechanical ventilation".

"Needs breathing support" would also cover the many small babies on CPAP or oxygen. WHO does not exclude them. A parent could wrongly think kangaroo care isn't for their baby.

Replace with:

> "It starts at birth, for as many hours as possible, unless a baby can't breathe alone, needs a ventilator or is in shock."

Open the guideline text (NCBI Bookshelf NBK586704) before shipping, and add it to `refs`.

**E-6. `guides-evidence.ts` | `what-decades-show` | line 27 | verdict: soften | P2 (generalisation) + P3 (citation)**

> "In Jamaica, health workers visited mothers of toddlers once a week for two years, … In a New York trial, parents who watched short videos … had children with fewer behaviour problems at school."

Evidence on Jamaica:

- The trial enrolled **growth-stunted** toddlers in poor neighbourhoods (Gertler 2014 [abstract]; Walker 2022 [abstract]: n = 48 vs 47).
- At 31, the treated group had higher IQ, fewer depressive symptoms and more grit; 18 of 33 outcomes were significant.
- Earnings were 25% higher (Gertler).
- Leaving out "stunted" implies that these large gains apply to every family.

Evidence on New York (Video Interaction Project): Mendelsohn 2018 [abstract]:

- Behaviour was **parent-reported at 4.5 years** ("school entry"), not observed at school.
- Effect sizes were d ≈ 0.25–0.30.
- The `vip` ref is defined in the file but **is not in this guide's `refs`**.

Replace the paragraph with:

> "In Jamaica, health workers visited mothers of toddlers with stunted growth weekly for two years, showing simple play with things at home. Decades later, those children were doing better in work, mood and many other parts of life. In a New York trial, parents who watched short videos of themselves playing and reading, with a coach praising what went well, reported fewer behaviour problems as children began school."

Also add `R.vip` to `refs`.

### P3: wording and citation

| ID | File, slug, line | Exact text | Verdict | Evidence | Replacement |
|---|---|---|---|---|---|
| E-7 | `guides.ts`, `serve-and-return`, 171 | "An MIT study of 4–6 year-olds found that the number of back-and-forth conversational turns — more than the number of words heard — was linked to activity in the brain's language areas and to verbal skills, regardless of family income." | soften | Romeo 2018 [abstract]: only **36** children; one brain scan at one point in time; turns linked to brain activity "independently of SES". The study is presented as the answer to the contested 30-million-word gap, so its small size should show. | "A small MIT study of 36 children aged 4 to 6 found that back-and-forth conversational turns, more than the number of words heard, were linked to activity in the brain's language areas and to verbal skills, whatever the family income." |
| E-8 | `guides-evidence.ts`, `what-decades-show`, 30 | "Good-quality care was linked with slightly better language, and very long hours in group care with slightly more restless behaviour." | soften | Belsky 2007 [abstract]: higher-quality care predicted higher **vocabulary**; more **centre-care** exposure predicted more **teacher-reported externalising problems**. These are not "restless" behaviour, and the finding was not limited to "very long hours". | "Good-quality care was linked with slightly better vocabulary, and more hours in group care with slightly more behaviour problems." |
| E-9 | `guides-evidence.ts`, `what-decades-show`, 29 | "Regular matters more than early: the right time is the one your family can keep." | soften | Kelly 2013 [abstract]: 10,230 children; the effect grew with more years of irregular bedtimes, and behaviour improved after a switch to a regular bedtime. The abstract does not test regular against early. | "In this study regular mattered most: the right time is one your family can keep." |
| E-10 | `guides-you.ts`, `you-two-after-baby`, 167 | "Big studies have found that couples' happiness with each other often dips after a first baby, on average by a small to moderate amount, for mothers and fathers alike." | soften (and more reassuring) | Mitnick 2009 meta-analysis [abstract]: declines are small up to 11 months and moderate at 12–14 months, **but** newlywed couples who did not become parents declined by a similar amount. | "Big studies found that couples' happiness with each other often dips a little after a first baby, for mothers and fathers alike, though childless couples dip too." |
| E-11 | `guides.ts`, `outdoor-play`, 182 | "…just over half of the results linked time in nature with better mental health…" | wording | Tillmann 2018 [abstract]: "About half of all reported findings… almost half reported no statistical significance." | "A review of 35 studies found that about half of the results linked time in nature with better mental health in children and teenagers: promising, but not yet proof." |
| E-12 | `guides-health.ts`, `move-sit-sleep`, 77 | "A 2026 review of 31 studies found that children spending more than about 2 hours a day outside had lower odds of becoming short-sighted," | soften + citation | Dai 2026, *J Glob Health* 16:04122 [opened]: 31 studies, 380,215 participants, **all Chinese**, 22 cross-sectional, 8 cohort, 1 trial; >2 h: OR 0.74 (0.69–0.80). This review is **not in the guide's `refs`**, which are WHO only. | "A 2026 review of 31 studies, mostly surveys in China, linked more than about 2 hours a day outside with lower odds of short sight," and add Dai 2026 to `refs`. |
| E-13 | `guides-growth.ts`, `iron-drops-and-tea`, 72 | "In a lab study, a cup of black tea with a meal cut the iron absorbed by about 80 to 90%." | wording | Hurrell 1999 [abstract]: the studies were in **adults**, eating a bread meal; black tea cut absorption by 79–94%. | "In adults, a cup of black tea with a meal cut the iron absorbed by about 80 to 90%." |
| E-14 | `guides-growth.ts`, `iron-drops-and-tea`, 71 | "Low iron is common in young children around the world, including about 1 in 5 young children in Iran in pooled studies." | wording | Nazari 2019 [abstract]: 6 studies, 1,700 children under 6. Iron-deficiency **anaemia** was 18.2%; iron deficiency was 27.7%. "Low iron" at 1 in 5 understates iron deficiency. | "Low iron is common in young children around the world: pooled Iranian studies found anaemia from it in about 1 in 5." |
| E-15 | `guides-evidence.ts`, `what-decades-show` (not in claims.txt; found while checking the Bucharest ref) | "In Romania, young children moved from orphanages into caring foster families caught up a great deal, most of all when moved early, but later-placed children improved too." | soften | Nelson 2007 (`R.beip`) [recall, unverified]: foster care raised IQ, more so when placement came before about age 2, but the children stayed below children who had never been in an institution. "Caught up" overstates this. | "In Romania, young children moved from orphanages into caring foster families made big gains, most of all when moved early, and later-placed children improved too." |
| E-16 | `guides-family-bodies.ts`, `siblings-fights-fairness`, 42 | "about 4 in 10 children were hurt or picked on by a sibling in a year, most often between 2 and 9" | citation only | The figures (37.6%; peaks of 45% at ages 2–5 and 46% at 6–9) come from Tucker et al. 2013, *Child Abuse & Neglect* [note: round 6 04, abstract]. But `refs` cites Tucker 2013, *Pediatrics*, which gives no prevalence [abstract]. | Text OK. Add Tucker 2013 *CAN* (PMID 23428164) to `refs`. |
| E-17 | `sources.ts`, `cdc-child-led-play` (used by line 184) | URL `https://www.cdc.gov/parents/essentials/…/specialplaytime.html` | citation only | The claim is OK: "Spend at least 5-15 minutes every day playing with your child" [opened, 30 Apr 2026 page]. The old URL is from before CDC reorganised its site. | Change the URL to `https://www.cdc.gov/parenting-toddlers/communication/child-led-play.html`. |
| E-18 | `guides-more.ts`, `crying-curve`, 110 | "All the crying babies in one small study, of 21 babies, stopped during the walk." | OK, optional | Ohmura 2022 [abstract]; the "all stopped" figure is from the phase 5 note 05 [note: opened press material]. That note itself advised "many babies settled in one study". The current text already says "It won't work every time". | Optional: "In one small study of 21 babies, the crying babies settled during the walk." |
| E-19 | `guides-more.ts`, `ai-chatbots-toys`, 123 | "in Common Sense's own tests, 27% of toy responses weren't suitable for children" | OK, recheck | Phase 5 note 11 has 27% (tag not stated). News coverage says "more than a quarter" [search]. I could not open the PDF. | If it can't be opened before shipping: "more than a quarter of toy responses". |
| E-20 | `guides-differences.ts`, `stuttering`, 9 | "Those children were not shyer beforehand" | unverifiable detail | Reilly 2013 [abstract]: 11.2% by age 4 (so "about 1 in 10" is OK); stronger language at 4 confirmed. The temperament result is in the truncated part of the abstract. | Keep. Confirm in the full text. |

---

## 4. Claims verified as OK (no change)

| Line | Slug | Claim (short) | Evidence | Tag |
|---|---|---|---|---|
| 13 | ignore-and-redirect | Briefly ignoring increased compliance | Leijten 2018 meta-analysis: ignoring d = 0.36–1.77; 19 studies | [abstract] |
| 14 | consequences-that-teach | Natural/logical consequences linked with stronger results; 14 European trials: follow-through and less harsh talk mattered most | Leijten 2019 (154 trials); Laas Sigurðardóttir 2025 | [abstract] |
| 15 | instead-of-smacking | >160,000 children, no good outcomes | Gershoff & Grogan-Kaylor 2016 | [recall, unverified] |
| 16, 163 | instead-of-smacking, keeping-your-cool | 976 families, harsh words at 13, warmth didn't cancel it out, two-way | Wang & Kenny 2014 | [abstract] |
| 28 | what-decades-show | 1,000 children to their thirties; beyond IQ and social class | Moffitt 2011 | [abstract] |
| 34 | myths-checked | Mothers told "sugar" rated their son as wilder | Hoover & Milich 1994: 35 boys, all given placebo | [abstract] |
| 35 | myths-checked | Over half of Iranian babies used walkers; walked no earlier | Shiva 2010: 54.5% of 414; p = 0.40 | [abstract] |
| 36 | myths-checked | No more words from a month of a baby DVD; parents naming things did best | DeLoache 2010 | [abstract] |
| 38 | myths-checked | Five-year follow-up: no harm, no lasting benefit | Price 2012: 225 families, no differences | [abstract] |
| 39 | myths-checked | Some studies find only children a little less lonely | Lin, Falbo 2021 (Chinese samples) | [abstract] |
| 43 | siblings-fights-fairness | 34 studies; conflict mattered most | Buist 2013 | [note: round 6, abstract] |
| 47 | siblings-fights-fairness | Sibling bullying linked with later depression and self-harm | Bowes 2014: >6,900 in ALSPAC, depression OR 2.16 | [abstract] |
| 51, 168 | parenting-as-a-team, you-two-after-baby | Family Foundations: larger trial showed child and family-violence benefits | Feinberg 2016: 399 couples, effects on more than two-thirds of measures, large on violence | [search] |
| 63 | praise-and-confidence | Mindset programmes: small effects, reviews disagree | Sisk 2018; Yeager 2019; Macnamara & Burgoyne 2023 | [recall, unverified] |
| 64 | honest-and-kind | Punitive school: more and better lying; honesty-praise story helped | Talwar & Lee 2011 (84 children); Lee 2014 | [abstract] |
| 65, 131 | honest-and-kind, rewards-that-work | Toddlers rewarded with toys helped less; praise didn't do this | Warneken & Tomasello 2008 | [recall, unverified] |
| 68 | growth-and-appetite | "Finish your soup": ate less and enjoyed it less; fussiness and pressure in a circle | Galloway 2006; Jansen 2017 (4,845 dyads, both directions) | [abstract] |
| 73 | iron-drops-and-tea | Extra iron may slow growth in iron-replete babies | Dewey 2002 RCT (Sweden, Honduras) | [abstract] |
| 87 | starting-nursery | Securely attached toddlers protested more | Ahnert 2004: 70 infants at 15 months | [abstract] |
| 90, 181 | healthy-eyes, outdoor-play | 40-minute outdoor class: about 30% vs 40% short-sighted | He 2015 (30.4% vs 39.5%) | [recall, unverified] |
| 95 | autistic-children-play | 2023 review of 252 studies; harms rarely tracked | Sandbank 2023 BMJ | [abstract] + [note: phase 5] |
| 96, 173 | adhd-active-play, executive-function | No effect on overall ADHD scores; small effects on attention | Westwood 2023: 36 RCTs; total SMD 0.12 (ns); inattention 0.17 | [abstract] |
| 105, 126, 129 | talk-so-it-lands, parenting-pyramid, attention-and-praise | 14 trials, 3,252 families, ages 1–13; praise not a unique mediator; praise alone didn't raise compliance | Laas Sigurðardóttir 2025; Leijten 2018 | [abstract] |
| 106 | time-out-time-in | 474 Australian caregivers; half used a spot with distractions, a third used it with an anxious child; US: no link at 3 | Roach 2025 (49.8%, 33.1%); Knight 2020 | [abstract] + [note: phase 5 03] |
| 111 | crying-curve | Carrying doesn't help colic that has already started | Barr 1991 RCT (66 infants) | [abstract] |
| 112 | sleep-by-age | ~10,000 mothers, 13 countries and regions, dose–response | Mindell 2015: 10,085 mothers, 13 listed | [abstract]; "about half as often" not seen (full text blocked) |
| 114–115 | reading-every-age | 19 trials; education made no difference; low dosage had minimal impact | Dowdall 2020 (d = 0.41 expressive, 0.26 receptive) | [abstract] |
| 121 | first-phone | >10,000 children; phone at 12 linked with depression, obesity, poor sleep | Barzilay 2026 *Pediatrics*: 10,588; OR 1.31 depression | [abstract] |
| 126, 128 | parenting-pyramid, special-time | 77 programmes; practising with own child | Kaminski 2008 | [abstract] |
| 127 | parenting-pyramid | 428 studies; authoritative parenting linked with better outcomes in every region | Pinquart & Kauser 2018 | [abstract] |
| 155 | food-and-body-talk | 15-year follow-up; diet encouragement linked with overweight, bingeing, body dissatisfaction, passed on to their own children | Berge 2018 (n = 556) | [abstract] |
| 170 | phone-and-presence | 170 families; about half reported 3+ interruptions a day; two-way | McDaniel & Radesky 2018 (48%); follow-up with 183 couples | [abstract] + [search] |
| 172 | screens | 2024 review of 100 studies; co-viewing better; background TV worse | Mallawaarachchi 2024 | [abstract] + [note: phase 5 11] |
| 174 | risky-and-rough-play | Reviews of >70 studies; Scottish >4,000 | Ramsden 2026 (74 studies); Brussoni 2015; Dodd 2026 (4,151) | [abstract] |
| 177 | numbers-and-shapes | Linear 1–10 board, five sessions over three weeks; magnitude comparison improved | WWC review of Siegler & Ramani 2009: 59 children, only magnitude comparison significant | [opened] |
| 179 | big-feelings | RCT, 216 parents of 4–5-year-olds, six sessions, parent- and teacher-reported behaviour | Havighurst 2010 | [abstract] |
| 184 | tired-parent-play | CDC: 5 to 15 minutes of child-led play | CDC page, 30 Apr 2026 | [opened] |
| 185 | independent-play | 6–7-year-olds; less-structured time linked with self-directed executive function | Barker 2014 | [abstract] |
| 104, 169 | dads-non-birth-parents, you-two-after-baby | About 1 in 10 fathers depressed around a birth | Paulson & Bazemore 2010 (10.4%) | [recall, unverified] |
| 148 | screens-young-children | England: no proven safe number of minutes | [note: round 6 01, opened] | — |
| 136 | festival-fires-fireworks | Under-15s had about a third of firework injuries | [note: round 5 06: 31%] | — |
| 158 | on-wheels | 40 studies, >64,000 cyclists, about half the odds of head injury | [note: round 6 05] | — |

Lines 6, 7, 10–12, 17–21, 44–46, 49–50, 52–53, 56–57, 60, 62, 66–67, 74–76, 80–86, 88–89, 97–99, 101–103, 108–109, 116–117, 120, 125, 130, 132, 134, 137, 140, 147, 149–154, 159–161, 166, 175, 180 and 183 were triaged as consistent with their cited bodies or with well-known evidence [recall, unverified]. They have honest "link, not cause" framing and no single high-risk figure. They are listed in section 5 where a figure still needs opening.

## 5. Claims I could not check (recheck before the next release)

1. Line 112: "reported sleep problems about half as often". This is in the Mindell 2015 full text only, which was blocked.
2. Line 99: "About half to 70% of late talkers catch up". This range is widely quoted, but the primary source was not opened.
3. Line 102: "In one trial, parents who were given this information were more likely to pass it on." The trial was not identified.
4. Line 117: the family-stories prompt trial ("bigger vocabularies and more complex stories a year later").
5. Line 139: the Tehran burns-centre study ("nearly three in four … hot liquids", ages 2–4).
6. Line 141: the English review of window falls ("almost every fall from a flat").
7. Line 159: motorbike passengers ("about a third … fewer than 1 in 5 correctly").
8. Line 101: the CEBC rating of Theraplay as "promising".
9. Line 20: Wenger 1989, corrective shoes for 3 years. The Europe PMC search failed.
10. Line 13: the age range "roughly 2 to 8" for the ignoring studies.
11. Line 19: lice resistance "in parts of Iran".
12. Line 85: Persian short vowels and reading.
13. Line 154: IRCAP, anxiety as the most common difficulty [recall].
14. Line 166: burnout across countries (Roskam 2021) and the 8-week group-course trial.
15. Line 175: the 2026 review on play-fighting and aggression. Ramsden 2026 covers rough-and-tumble play, but the abstract was truncated before the aggression results.
16. Line 9: the "not shyer beforehand" detail (E-20).
17. E-15: the Bucharest claim. The ref was not opened this round.

## 6. Patterns worth fixing in the process

- **Population dropped in paraphrase.** This happened with stunted Jamaican toddlers (E-6), Chinese children in the myopia review (E-12), adults in the tea study (E-13) and lower-income families in Verdine (E-4). The research notes record the population, but the guide text drops it. Suggested rule for `CONTENT-GOVERNANCE.md` §4: *name the population when a study's sample differs from "ordinary families"*.
- **Famous findings without their replications.** This happened with the bilingual advantage (E-1) and praise for intelligence (E-3). The mindset paragraph (line 63) is the model to follow. Suggested rule: *any claim resting on a single lab paradigm must say whether large repeats agreed*.
- **Refs that don't match the claim.** The VIP ref is defined but not cited (E-6). The 2026 myopia review is not in `refs` (E-12). The Tucker prevalence figures come from a different paper (E-16). The CDC URL is stale (E-17). A test could check that every `R.*` defined in a file is used in some guide's `refs`.
- **No P1 found.** Nothing checked here could lead a parent into harm. E-5 (kangaroo care) is the closest, but the guide already says "Ask your team how this works for your baby".

## 7. Summary of all needed changes, by severity

| # | Sev | File | Slug | Verdict | Change |
|---|---|---|---|---|---|
| E-1 | P2 | guides.ts | bilingual-families | outdated | Say larger studies find little or no bilingual advantage |
| E-2 | P2 | guides-evidence.ts | what-decades-show | outdated | "added no measurable benefit" → "met none of its main goals" |
| E-3 | P2 | guides-growing.ts | praise-and-confidence | soften | Note that the large repeat of Mueller & Dweck failed |
| E-4 | P2 | guides.ts | numbers-and-shapes | wrong | Spatial-words finding was about family income, not about the children who were behind |
| E-5 | P2 | guides-more.ts | premature-hospital-stays | wrong (too broad) | WHO's exception is a ventilator, no breathing on their own, or shock; not all breathing support |
| E-6 | P2 | guides-evidence.ts | what-decades-show | soften + citation | Add "stunted growth"; VIP outcome was parent-reported at school entry; add `R.vip` to refs |
| E-7 | P3 | guides.ts | serve-and-return | soften | Say "small", 36 children |
| E-8 | P3 | guides-evidence.ts | what-decades-show | soften | "restless" → "behaviour problems"; "language" → "vocabulary" |
| E-9 | P3 | guides-evidence.ts | what-decades-show | soften | "Regular matters more than early" → "In this study regular mattered most" |
| E-10 | P3 | guides-you.ts | you-two-after-baby | soften | Add that childless couples' happiness dips too |
| E-11 | P3 | guides.ts | outdoor-play | wording | "just over half" → "about half" |
| E-12 | P3 | guides-health.ts | move-sit-sleep | soften + citation | Say "mostly surveys in China"; add Dai 2026 to refs |
| E-13 | P3 | guides-growth.ts | iron-drops-and-tea | wording | Tea study was in adults |
| E-14 | P3 | guides-growth.ts | iron-drops-and-tea | wording | 1 in 5 is anaemia from low iron |
| E-15 | P3 | guides-evidence.ts | what-decades-show | soften | "caught up a great deal" → "made big gains" |
| E-16 | P3 | guides-family-bodies.ts | siblings-fights-fairness | citation | Add Tucker 2013 *CAN* to refs |
| E-17 | P3 | sources.ts | cdc-child-led-play | citation | Update the CDC URL |
| E-18 | P3 | guides-more.ts | crying-curve | optional wording | "the crying babies settled" |
| E-19 | P3 | guides-more.ts | ai-chatbots-toys | recheck | Open the Common Sense PDF, or say "more than a quarter" |
| E-20 | P3 | guides-differences.ts | stuttering | recheck | Confirm "not shyer beforehand" in the full text |

Mirror every change in `src/i18n/locales/fa/guides.json`.

## 8. Sources

| Source | Publisher, year | URL | Tag |
|---|---|---|---|
| Carlson & Meltzoff, Bilingual experience and executive functioning in young children | Dev Sci 2008 | https://doi.org/10.1111/j.1467-7687.2008.00675.x | [abstract] |
| Lowe et al., The bilingual advantage in children's executive functioning is not related to language status | Psychol Sci 2021 | https://doi.org/10.1177/0956797621993108 | [abstract] |
| Dick et al., No evidence for a bilingual executive function advantage in the ABCD study | Nat Hum Behav 2019 | https://doi.org/10.1038/s41562-019-0609-3 | [abstract] |
| BB:2-6 main results, Family Nurse Partnership | Int J Popul Data Sci 2022 | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9644691/ | [search] |
| Gunderson et al., Parent praise to 1- to 3-year-olds | Child Dev 2013 | https://doi.org/10.1111/cdev.12064 | [abstract] |
| Mueller & Dweck, Praise for intelligence | J Pers Soc Psychol 1998 | https://doi.org/10.1037/0022-3514.75.1.33 | [abstract] |
| Li & Bates, Testing the role of growth mindset | J Exp Psychol Gen 2019 | https://doi.org/10.1037/xge0000669 | [abstract] |
| Verdine et al., Deconstructing building blocks | Child Dev 2014 | https://doi.org/10.1111/cdev.12165 | [abstract] |
| WHO advises immediate skin-to-skin care for small and preterm babies | WHO 2022 | https://www.who.int/news/item/15-11-2022-who-advises-immediate-skin-to-skin-care-for-survival-of-small-and-preterm-babies | [opened] |
| WHO recommendations for care of the preterm or low-birth-weight infant (remarks) | WHO 2022, via BIGG and Hill *Lancet* comment | https://bigg-rec.bvsalud.org/en/recommendations/7ecae9cdf45ceacba18155c120e5e165266ef932 ; https://discovery.ucl.ac.uk/10165531/1/Hill_Lancet_comment_27Oct2022.pdf | [search] |
| Gertler et al., Labor market returns … Jamaica | Science 2014 | https://doi.org/10.1126/science.1251178 | [abstract] |
| Walker et al., Gains at age 31 from the Jamaica stimulation trial | J Child Psychol Psychiatry 2022 | https://doi.org/10.1111/jcpp.13499 | [abstract] |
| Mendelsohn et al., Reading aloud, play and social-emotional development (VIP) | Pediatrics 2018 | https://doi.org/10.1542/peds.2017-3393 | [abstract] |
| Romeo et al., Beyond the 30-million-word gap | Psychol Sci 2018 | https://doi.org/10.1177/0956797617742725 | [abstract] |
| Belsky et al., Are there long-term effects of early child care? | Child Dev 2007 | https://doi.org/10.1111/j.1467-8624.2007.01021.x | [abstract] |
| Kelly, Kelly & Sacker, Bedtime schedules and behavioural difficulties | Pediatrics 2013 | https://doi.org/10.1542/peds.2013-1906 | [abstract] |
| Moffitt et al., Childhood self-control | PNAS 2011 | https://doi.org/10.1073/pnas.1010076108 | [abstract] |
| Mitnick, Heyman & Smith Slep, Relationship satisfaction across the transition to parenthood | J Fam Psychol 2009 | https://doi.org/10.1037/a0017004 | [abstract] |
| Tillmann et al., Nature and mental health in children | J Epidemiol Community Health 2018 | https://doi.org/10.1136/jech-2018-210436 | [abstract] |
| Dai et al., Outdoor time and myopia in Chinese children (meta-analysis) | J Glob Health 2026;16:04122 | https://jogh.org/2026/jogh-16-04122 | [opened] |
| Hurrell, Reddy & Cook, Inhibition of non-haem iron absorption by beverages | Br J Nutr 1999 | https://doi.org/10.1017/s0007114599000537 | [abstract] |
| Nazari et al., Iron-deficiency anaemia in Iranian children under 6 | J Blood Med 2019 | https://doi.org/10.2147/jbm.s196102 | [abstract] |
| Dewey et al., Iron supplementation and growth of breastfed infants | J Nutr 2002 | https://doi.org/10.1093/jn/132.11.3249 | [abstract] |
| Tucker et al., Sibling aggression and mental health | Pediatrics 2013 | https://doi.org/10.1542/peds.2012-3801 | [abstract] |
| Bowes et al., Sibling bullying and depression, anxiety, self-harm | Pediatrics 2014 | https://doi.org/10.1542/peds.2014-0832 | [abstract] |
| CDC, Child-led play | CDC 2026 | https://www.cdc.gov/parenting-toddlers/communication/child-led-play.html | [opened] |
| WWC review of Siegler & Ramani 2009 | IES What Works Clearinghouse | https://ies.ed.gov/ncee/wwc/study/73725 | [opened] |
| Laas Sigurðardóttir et al., IPD meta-analysis of 14 European trials | JAACAP 2025 | https://doi.org/10.1016/j.jaac.2024.10.003 | [abstract] |
| Kaminski et al., Components of parent training effectiveness | J Abnorm Child Psychol 2008 | https://doi.org/10.1007/s10802-007-9201-9 | [abstract] |
| Leijten et al., Parenting behaviours that shape child compliance | PLoS ONE 2018 | https://doi.org/10.1371/journal.pone.0204929 | [abstract] |
| Leijten et al., Key parenting programme components | JAACAP 2019 | https://doi.org/10.1016/j.jaac.2018.07.900 | [abstract] |
| Pinquart & Kauser, Parenting styles across cultures | Cultur Divers Ethnic Minor Psychol 2018 | https://doi.org/10.1037/cdp0000149 | [abstract] |
| Mindell et al., Bedtime routines for young children | Sleep 2015 | https://doi.org/10.5665/sleep.4662 | [abstract] |
| Dowdall et al., Shared picture book reading interventions | Child Dev 2020 | https://doi.org/10.1111/cdev.13225 | [abstract] |
| Ohmura et al., Soothing crying infants with the transport response | Curr Biol 2022 | https://doi.org/10.1016/j.cub.2022.08.041 | [abstract] |
| Havighurst et al., Tuning in to Kids community trial | J Child Psychol Psychiatry 2010 | https://doi.org/10.1111/j.1469-7610.2010.02303.x | [abstract] |
| Ahnert et al., Transition to child care and attachment | Child Dev 2004 | https://doi.org/10.1111/j.1467-8624.2004.00698.x | [abstract] |
| Lin, Falbo et al., Chinese only children and loneliness | Am J Orthopsychiatry 2021 | https://doi.org/10.1037/ort0000554 | [abstract] |
| Shiva et al., Baby walkers in Iranian infants | Singapore Med J 2010 | https://europepmc.org/article/MED/20848062 | [abstract] |
| Jansen et al., Fussy eating and pressure to eat | Physiol Behav 2017 | https://doi.org/10.1016/j.physbeh.2017.02.015 | [abstract] |
| Galloway et al., "Finish your soup" | Appetite 2006 | https://doi.org/10.1016/j.appet.2006.01.019 | [abstract] |
| Roach et al., Time-out under scrutiny | Br J Psychiatry 2025 | https://doi.org/10.1192/bjp.2024.228 | [abstract] |
| Knight et al., Time-out and later functioning | J Dev Behav Pediatr 2020 | https://doi.org/10.1097/dbp.0000000000000725 | [abstract] |
| McDaniel & Radesky, Technoference (two papers) | Child Dev 2018; Pediatr Res 2018 | https://doi.org/10.1111/cdev.12822 ; https://doi.org/10.1038/s41390-018-0052-6 | [abstract] + [search] |
| Sandbank et al., Project AIM | BMJ 2023 | https://doi.org/10.1136/bmj-2023-076733 | [abstract] |
| Westwood et al., Computerised cognitive training in ADHD | Mol Psychiatry 2023 | https://doi.org/10.1038/s41380-023-02000-7 | [abstract] |
| Barzilay et al., Smartphone ownership and health in early adolescence | Pediatrics 2026 | https://doi.org/10.1542/peds.2025-072941 | [abstract] |
| Mallawaarachchi et al., Early childhood screen use contexts | JAMA Pediatr 2024 | https://doi.org/10.1001/jamapediatrics.2024.2620 | [abstract] |
| Dodd et al., Early outdoor play and mental health trajectories | J Child Psychol Psychiatry 2026 | https://doi.org/10.1111/jcpp.70175 | [abstract] |
| Ramsden et al., Outdoor risky play and health, ages 3–12 | PLOS ONE 2026 | https://doi.org/10.1371/journal.pone.0347444 | [abstract] |
| Barker et al., Less-structured time and self-directed EF | Front Psychol 2014 | https://doi.org/10.3389/fpsyg.2014.00593 | [abstract] |
| Berge et al., Intergenerational transmission of encouragement to diet | Pediatrics 2018 | https://doi.org/10.1542/peds.2017-2955 | [abstract] |
| Wang & Kenny, Harsh verbal discipline | Child Dev 2014 | https://doi.org/10.1111/cdev.12143 | [abstract] |
| Hoover & Milich, Sugar expectancies | J Abnorm Child Psychol 1994 | https://doi.org/10.1007/BF02168088 | [abstract] |
| DeLoache et al., Do babies learn from baby media? | Psychol Sci 2010 | https://doi.org/10.1177/0956797610384145 | [abstract] |
| Price et al., Five-year follow-up of infant sleep intervention | Pediatrics 2012 | https://doi.org/10.1542/peds.2011-3467 | [abstract] |
| Talwar & Lee, A punitive environment fosters dishonesty | Child Dev 2011 | https://doi.org/10.1111/j.1467-8624.2011.01663.x | [abstract] |
| Lee et al., Can classic moral stories promote honesty? | Psychol Sci 2014 | https://doi.org/10.1177/0956797614536401 | [abstract] |
| Barr et al., Carrying as colic "therapy" | Pediatrics 1991 | PMID 2020506 | [abstract] |
| Reilly et al., Natural history of stuttering to 4 years | Pediatrics 2013 | https://doi.org/10.1542/peds.2012-3067 | [abstract] |
| Feinberg et al., Couple-focused prevention at the transition to parenthood | Prev Sci 2016 | https://doi.org/10.1007/s11121-016-0674-z | [search] |
| Common Sense Media, AI toys risk assessment | Common Sense 2026 | https://www.commonsensemedia.org/sites/default/files/ai-ratings/csm-ai-risk-assessment-ai-toys-01142026.pdf | [search] |
