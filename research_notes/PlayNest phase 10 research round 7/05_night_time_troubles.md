# 05 — Night-time troubles (about 1 to 12 years)

Research notes for PlayNest phase 10, round 7. Researched 19 Nov 2026.

## 1. Scope, and what is already in the app

**Scope.** Night-time problems in children aged about 1 to 12, for one possible guide:

- nightmares, night terrors, confusional arousals and sleepwalking (ages, what to do, what not to do, scheduled waking, safety)
- bedtime fears and fear of the dark (brave practice, night-lights, the Kushnir and Sadeh doll trial, books, "monster spray")
- insomnia and behavioural help for school-age children
- snoring and obstructive sleep apnoea (OSA), including the CHAT (2013) and PATS (2023) trials
- teeth grinding, head-banging and body-rocking, restless legs (brief)
- melatonin: what bodies say, rising use and child poisonings in the US (no amounts, ever)
- screens and sleep, and when night-time trouble points to anxiety or something else
- Iran: sleep habits, Iranian studies, Persian terms

House rules applied: teach, don't diagnose; no medicine or supplement amounts; no brand names; trials versus links kept apart; red flags go to a professional.

**Already in the app.** I read these and don't repeat them below, except to flag problems.

- `guides-more.ts` → `sleep-by-age`: hours table (CDC, Canada, NHS), a routine survey callout, and "screens off about an hour before bed".
- `guides-more.ts` → `safe-sleep-essentials`: infant safe sleep (AAP 2022), bed-sharing where bodies differ.
- `guides-baby.ts` → `settling-to-sleep`: sleep methods after 6 months, and a safety callout on loud snoring with pauses.
- `coach.ts` → `bedtime-stalling`, `night-waking`, `nightmare-night-terror`: what to say and do in the moment, by age band. They include the nightmare versus terror test ("awake and wants you" versus "eyes open, not noticing you"), "don't wake them in a night terror", and the NHS help thresholds (nightmares after 6, terrors starting after 5 or going on after 12, waking 15 minutes before).
- `stages.ts`: "Night terrors, which are most common in toddlers and preschoolers."
- `guides-health.ts` → `toilet-training`: wet nights, with a safety callout.
- Tips already cover screens out of the bedroom (`screens-off-bedtime`, `older-charge-outside`), evening cartoons (`sc-evening-story`) and bringing bedtime forward (`older-earlier-bed`).

**Problems found in existing content.** No P1 problems. None of the problems below is harmful. The fixes are wording or added nuance.

| # | Severity | File / slug | Exact line | Problem | Fix |
|---|---|---|---|---|---|
| 1 | P2 | `coach.ts` → `nightmare-night-terror`, `help` | "Worth talking to your doctor if nightmares are frequent, carry on after about 6, or follow something upsetting." | The line copies NHS wording exactly [opened], but the AAP says nightmares "tend to peak between 3 and 12 years old" [opened]. A parent of a normal 7-year-old with an occasional bad dream may read "carry on after about 6" as a warning sign. | "Worth talking to your doctor if nightmares are frequent or upsetting enough to affect days or bedtimes, or if they started after something frightening." |
| 2 | P3 | `guides-baby.ts` → `settling-to-sleep`, safety callout | "See your doctor first if your child snores loudly with pauses in breathing…" | Correct, but it can be read as "snoring without pauses is fine". The AAP 2012 guideline says **all** children should be screened for snoring [abstract]. RCH lists gasping, snorting, restless sweaty sleep and mouth breathing as signs too [opened]. | "…snores most nights, or gasps, snorts or stops breathing in their sleep…" |
| 3 | P3 | `coach.ts` → `nightmare-night-terror`, `later` | "By day, draw the dream and tear it up, or make a dream-catcher." | The dream-catcher has no evidence behind it and is a cultural object that may not fit families. Rewriting the ending of a bad dream is closer to the imagery-rehearsal approach studied in older children and teenagers [abstract, 2026 IRT study ages 14 to 25, small, no control group]. | "By day, draw the dream, then draw a new ending where they're safe or brave." Don't claim it is tested in young children. |
| 4 | P3 | `coach.ts` → `night-waking`, `help` | "lasting sleep problems rarely sort themselves out" | I didn't research this claim this round. Infant and toddler waking often settles with time, as `settling-to-sleep` itself says, so this line reads as stronger than that guide. | Check its source, or soften to "Worth asking early if it goes on for weeks and wears the family down." |
| 5 | P3 | `stages.ts` | "Night terrors, which are most common in toddlers and preschoolers." | It agrees with the AAP [opened] and with Petit 2015 (peak at 1½ years) [abstract]. The NHS says "between the ages of 3 and 8" [opened]. Not wrong. | No change needed. If the new guide gives ages, say "most often between about 1½ and 8, and most children outgrow them". |

---

## 2. How to read these notes

- **[opened]**: I read the page or PDF myself.
- **[abstract]**: from the Europe PMC abstract record (REST API).
- **[search]**: from search-result snippets or summaries only. Check before use; must not go into the app as it stands.
- **[recall, unverified]**: background knowledge I couldn't confirm this session.

**Access problems this session**
- Python wasn't available on this machine, so I queried Europe PMC with Node `fetch` instead. The API sometimes returned an HTML error page and needed a retry.
- **403:** raisingchildren.net.au (head-banging and teeth-grinding pages). **404:** RCH `Snoring` fact sheet, the healthychildren.org sleep-apnoea and rhythmic-behaviour URLs, and the JAMA research-letter URL.
- **Content cut off:** sleepeducation.org (AASM) pages came back as a title only, so the AASM's confusional-arousal and head-banging pages are **not** opened.
- **Unreadable PDF:** the Evelina (Guy's and St Thomas') snoring leaflet.
- **Not available:** Europe PMC full text for Cohen 2023 (gummies) gave a 500 error, so those figures are [search].
- **Not found:** no Iranian Ministry of Health or university-of-medical-sciences parent leaflet on children's parasomnias or snoring. The Persian results were news and commercial sites, which I didn't use.
- **Searches used:** 15 web searches, about 30 Europe PMC API queries, and 14 page or PDF fetches.

---

## 3. Findings by topic

### 3.1 Nightmares, night terrors, confusional arousals and sleepwalking

**How the four differ**

| | Nightmare | Night terror (sleep terror) | Confusional arousal | Sleepwalking |
|---|---|---|---|---|
| Sleep stage | Dream sleep, often later in the night [search: AAP summary] | Deep non-dream sleep, often early in the night [search: AAP summary] | Deep non-dream sleep [recall] | Deep non-dream sleep [recall] |
| Child awake? | Yes. Wakes, wants comfort, can tell you about it [opened, AAP] | No. Eyes may be open, doesn't recognise you, inconsolable [opened, NHS] | Half-awake, confused, may cry or thrash [search] | Asleep. Moves about and can't be reasoned with [opened, NHS] |
| Remembers it? | Often | No [opened, NHS: "they may not recognise you"] | No [recall] | No [recall] |
| Peak age | 3 to 12 (AAP) [opened] | 1½ years in a Quebec cohort; 3 to 8 per NHS [abstract; opened] | About 18 months to 5 years [search] | About 10 years in the Quebec cohort [abstract] |

**Disorders of arousal**
- Night terrors, confusional arousals and sleepwalking are the three main "disorders of arousal", partial wakings from deep non-dream sleep [abstract, Castelnovo 2021 *Nat Sci Sleep*].

**Petit et al., *JAMA Pediatrics* 2015 (Quebec Longitudinal Study, n = 1,940, born 1997–98, mother-reported yearly to age 13)** [abstract]
- Sleep terrors peaked at **1½ years (34.4%)**. Sleepwalking peaked at **10 years (13.4%)**.
- "As many as one-third" of children with early sleep terrors went on to sleepwalk.
- Sleepwalking rose with parental history: **22.5%** with no parent who sleepwalked, **47.4%** with one, **61.5%** with both.
- Parental sleepwalking also predicted sleep terrors and their persistence.
- Design: an observational cohort with parent report. Prevalence here means "at least once in the year", not a disorder.

**Simard et al., *Sleep* 2008 (same Quebec cohort, n = 987, 5 months to 6 years)** [abstract]
- **Frequent** bad dreams were less common than expected: **1.3% to 3.9%** across ages.
- Comforting a child after a night waking at 29 and 41 months went with fewer later bad dreams. Anxiousness at 17 months and a difficult temperament at 5 months were risk factors.
- These are links, not proof.

**What to do in a night terror (NHS, page reviewed 24 Nov 2025)** [opened]
- "Stay calm and wait for the person to calm down."
- "Do not talk to them or try to stop them moving about" unless there's a risk they could hurt themselves or someone else.
- "Do not try to wake them – they may not recognise you and may get more upset."
- Triggers: being very tired or unwell, sudden noises, needing to pee in the night, something frightening such as a scary film, stress, and conditions such as **sleep apnoea** or **restless legs**. Night terrors are more common where relatives have had them or sleepwalk.
- Prevention: a relaxing bedtime routine, a sleep diary, and dealing with stress.
- "Try waking them up 15 minutes before the night terror every night for 2 weeks."

**What to do in a night terror (AAP, updated 21 Sep 2023)** [opened]
- "Stay calm." Make sure the child can't get hurt.
- "If they try to get out of bed, gently restrain them." This differs from the NHS; see §4.
- For sleepwalking: "Do not try to wake children when they are sleepwalking or sleep talking."

**What to do when a child sleepwalks (NHS, reviewed 11 Apr 2025)** [opened]
- "Gently guide them back to bed." Don't wake them suddenly: "they'll be confused and will not know what's happening."
- Safety: "keep doors and windows closed, and use stair gates", clear tripping hazards, "lock away sharp objects like knives and tools", and "fit door alarms if there's a risk of leaving the house".
- "Do not let your child sleep in the top of a bunk bed if they sleepwalk."
- Triggers: lack of sleep, sleep apnoea or restless legs, fever, some medicines, and stress.
- Outlook: "most children grow out of it without treatment by the time they're teenagers."
- See a GP if it disrupts sleep, if injury is a worry, or if there is daytime tiredness or breathing that stops and starts.

**Confusional arousals** [search only; AASM page not readable]
- Typical ages: about 18 months to 5 years.
- Let the episode run its course. Don't shake or shout, which prolongs it.
- Overtiredness is the main trigger.
- Never lock a child in their room, because of fire risk.
- Tell babysitters what to expect.
- None of this can go in the outline until checked.

**Scheduled (anticipatory) waking: the evidence is thin**
- NHS recommends it [opened] (above).
- The evidence is case series:
  - Frank et al. 1997 (*J Pediatr Psychol*): **3 children** who sleepwalked, using a multiple-baseline design. Sleepwalking stopped in all three, and gains held at 3 and 6 months [abstract].
  - Lask 1988 (*BMJ* letter): about **19 children** with night terrors [recall, unverified for numbers]. The BMJ record exists, PMC1834433, plus a 1993 BMJ item "'Working treatment' best for night terrors" [abstract record, no text].
- Mindell et al. 2006 (*Sleep*, AASM task force, 52 studies) supports scheduled awakenings for **habitual night waking** in young children, not for terrors [abstract].
- **2026 systematic review** of non-REM parasomnia treatment (*Sleep Med Rev*, PROSPERO CRD420261327423): 14 studies, "mostly retrospective and uncontrolled". Certainty was "very low for most outcomes", and "no formal treatment guidelines exist" [abstract].
- So the app may say it is "a simple step some health services suggest, with only small studies behind it". It must not say it is proven.

**Seizures can look like parasomnias** [recall, unverified]
- Night-time seizures, especially frontal-lobe ones, can look like night terrors. Clues: many episodes a night, the same stiff movements each time, or episodes at any hour.
- Not confirmed this session. Use only as "if episodes happen several times a night or look the same each time, see a doctor". Clinical reviewer to confirm.

### 3.2 Bedtime fears and fear of the dark

**How common**
- Muris et al. (2007, *Behav Res Ther*): of 511 children aged 8 to 16, **64.2%** reported night-time fears, **79.4% of children** versus **48.8% of adolescents**. Intruders were the most common fear. Most children used self-distraction and told someone [abstract]. (The brief's Muris 2001 reference: I found the 2007 school study instead.)

**Night-time fears and anxiety (Kushnir, Sadeh and colleagues)**
- **Kushnir, Gothelf & Sadeh 2014** (*Compr Psychiatry*, 109 children aged 4 to 6 with significant night fears versus 30 controls) [abstract]:
  - Children with severe night fears had more fears of other kinds, more behaviour problems, and weaker attention control.
  - Authors: night fears "may serve as a marker for anxiety vulnerability". Cross-sectional, so a link only.
- **Kushnir & Sadeh 2013** (*Child Psychiatry Hum Dev*, 80 fearful 4- to 6-year-olds versus 32 controls): fearful children showed more fantasy-reality confusion, especially the younger ones [abstract]. Supports explaining "real versus pretend" gently, by age.

**Kushnir & Sadeh 2012 "Huggy-Puppy" trial** (*Eur J Pediatr*, randomised, n = 104, aged 4 to 6 with significant night fears) [abstract]
- Arm 1: a puppy doll, and the child is asked to **look after** it.
- Arm 2: the same doll, presented as a **protector**.
- Plus a waiting-list comparison group.
- Both arms reduced night fears similarly and more than the waiting list at 1 month. Child sleep problems and parents' fear-managing behaviours also fell.
- Gains held at 6 months.
- Note for the app: being asked to care for a soft toy helped as much as the "protector" story. That supports a calm "your teddy needs you to keep them company" over feeding the idea of a threat.
- Soft toys are only for children over 12 months (see `safe-sleep-essentials`).

**Brave practice (graded exposure, rewards, coping self-talk)**
- **Gordon, King & Gullone 2007** (*Clin Psychol Rev*), a review of **29 studies** [abstract]:
  - Most used cognitive-behavioural techniques: desensitisation, emotive imagery, coping self-talk and rewards.
  - Fears typically fell "after only a few sessions", and gains held.
  - Most designs were small (multiple baseline). The authors called for "a modern randomised controlled trial".
- **Lewis et al. 2015** (*J Anxiety Disord*), 9 children aged 5 to 7 with a specific phobia of the dark [abstract]:
  - Parents read a fear-of-the-dark activity book with their children over 4 weeks.
  - 8 of 9 showed clinically significant improvement, and nights in their own bed increased.
  - Very small, multiple-baseline design.
- **2026 trial** (*Eur J Pediatr*, NCT07067320, retrospectively registered), 38 children aged 4 to 8 [abstract]:
  - Book reading plus games over 4 to 5 weeks, against a waiting list.
  - Night-time and imaginary fears fell, and night-time behaviour and coping in the dark improved, in the intervention group only.
  - Small. The waiting-list control means no comparison with another active treatment.
- **CBT versus ACT cognitive elements in 8- to 12-year-olds** (*Int J Psychol* 2020; n = 21 versus 22, a single 30-minute session, fear of the dark) [abstract record; results not read]. Don't use.

**Night-lights**
- AAP: "Allow them to keep a light on if it makes them feel better." [opened]
- **2026 study** (*npj Biol Timing Sleep*), 25 top-rated night-lights measured [abstract]:
  - At source level, only 3 of 25 stayed below 5 lux melanopic EDI, the level "known to phase shift circadian rhythms and suppress melatonin in children".
  - In a simulated bedroom, 14 of 25 stayed below it on at least one setting. Those were mostly **red-toned, low-intensity and placed farther from the bed**.
  - Safe take-home: if you use a night-light, choose a dim, warm (orange or red) one and put it away from the bed. No number for the app.

**"Monster spray": bodies and clinicians differ**
- **For:** Meltzer & Crabtree, *Pediatric Sleep Problems: A Clinician's Guide to Behavioral Interventions* (APA, 2015), Handout 20 [opened]:
  - A water spray bottle labelled "Monster Spray". The child sprays the room each night "to help them feel safe and in control".
  - It expects use to fade "as he begins to believe that the monsters won't come back".
- **Against:** some practitioners argue it confirms monsters are real [search: therapist and sleep-consultant blogs only; not citable].
- **No study** has tested monster spray either way [search; none found in Europe PMC].
- The Huggy-Puppy trial found a **caretaking** framing worked as well as a **protector** framing [abstract]. That is indirect support for not needing "monster" props.
- **Cautious path for the app:** don't recommend or condemn it. Say: "Some families use a playful bedtime ritual. Others prefer not to suggest monsters might be real. Either way, keep it light, and pair it with 'monsters are pretend'."

**Canadian Paediatric Society, "Children and fears"**
- Already a ref in the app (`cpsFears`). Not re-opened this session.

### 3.3 Insomnia and behavioural help for school-age children

**Young children (AASM review, Mindell et al. 2006, *Sleep*, 52 studies)** [abstract]
- 94% of studies found behavioural treatments effective.
- Over 80% of children improved, with gains held for 3 to 6 months.
- Strongest support: extinction and preventive parent education. Also supported: graduated extinction, bedtime fading with positive routines, and scheduled awakenings.
- Mostly under-5s, so already reflected in `settling-to-sleep`.

**Children with ADHD (Hiscock et al. 2015, *BMJ*, RCT, n = 244, aged 5 to 12)** [abstract]
- Two sessions of sleep hygiene and behavioural strategies, plus a phone call.
- ADHD symptoms fell more than with usual care: effect size −0.3 at 3 months and −0.4 at 6 months.
- Moderate–severe sleep problems: **56% in controls versus 30% with the intervention** at 3 months (adjusted OR 0.30).
- Authors: "modestly improves".

**Autistic children (Sleeping Sound ASD RCT, *J Child Psychol Psychiatry* 2022, n = 245, aged 5 to 13)** [abstract]
- Two 50-minute sessions plus a phone call.
- Parent-reported sleep problems fell (effect size −0.7 at 3 months), with small gains in other areas.

**Short-sleeping 8- to 11-year-olds (*J Pediatr Psychol* 2024)** [abstract]
- Secondary analysis of a brief behavioural RCT, 66 families.
- The intervention lengthened actigraphy sleep (b = 46.3, about 46 minutes).
- Families with steadier daily routines responded better.

**Remote delivery (*Front Sleep* 2023 systematic review, 7 RCTs, 786 participants, mean ages 19 months to 17 years)** [abstract]
- Improvements in some sleep measures.
- Results comparable to, or slightly below, face-to-face delivery.

**Mood (*Eur Child Adolesc Psychiatry* 2026 meta-analysis, 8 RCTs, n = 904, mean age 13.5)** [abstract]
- Insomnia-focused interventions gave a small reduction in depressive symptoms (SMD 0.24).
- Mostly teenagers.

**Takeaway**
- Trials show that a few sessions of behavioural sleep help can improve sleep in school-age children, including those with ADHD or autism.
- Effects are small to moderate, and most outcomes are parent-reported.

**Not found this session:** a primary CBT-I trial in typically developing school-age children (for example Paine & Gradisar 2011). Its record didn't come back [recall, unverified].

### 3.4 Snoring and obstructive sleep apnoea

**How common (RCH Melbourne, reviewed March 2018, "awaiting routine review")** [opened]
- "About 15 to 20 per cent of children snore."
- OSA "only affects about two to three per cent of children".
- A 2026 narrative review gives OSA at about 2–5% [abstract].

**Signs (RCH)** [opened]
- At night:
  - loud snoring, pauses in breathing, difficulty breathing
  - choking, gasping or snorting
  - restless, sweaty sleep and unusual sleeping positions
  - mouth breathing
- By day:
  - morning headaches or tiredness
  - daytime sleepiness
  - "difficulties with paying attention, behavioural problems and learning difficulties may be the only signs".
- See a GP if you suspect OSA. The GP may refer to a paediatrician or ENT specialist, and may arrange overnight monitoring.

**AAP clinical practice guideline 2012 (*Pediatrics*)** [abstract]
1. "All children/adolescents should be screened for snoring."
2. Polysomnography if snoring plus symptoms or signs.
3. Adenotonsillectomy is first-line where tonsils and adenoids are enlarged.
4. CPAP if surgery isn't done or OSA persists.
5. Weight loss alongside other treatment if overweight.
6. Intranasal corticosteroids are an option in mild OSA. **No amounts or product names in the app.**

**CHAT trial (Marcus et al., *NEJM* 2013, RCT, n = 464, aged 5 to 9, OSA without prolonged desaturation)** [abstract]
- Early adenotonsillectomy versus watchful waiting, measured at 7 months.
- **Primary outcome (attention and executive function test): no significant difference** (+7.1 versus +5.1, P = 0.16).
- Surgery improved **behaviour, quality of life, symptoms and sleep-study results**.
- Sleep-study results became normal in **79% after surgery versus 46% with watchful waiting**. So almost half improved without surgery over 7 months.

**PATS trial (Redline et al., *JAMA* 2023, RCT, n = 459, aged 3 to 12, snoring with mild sleep-disordered breathing, AHI below 3)** [abstract]
- Early adenotonsillectomy versus watchful waiting, measured at 12 months.
- **No difference in executive function or attention**, the primary outcomes.
- Surgery improved **behaviour, sleepiness, symptoms and quality of life**, and lowered blood-pressure percentiles.
- Fewer children progressed to AHI above 3: **1.3% versus 13.2%**.
- **2.7% had a serious adverse event** linked to surgery.
- Exploratory PATS analysis (*JAMA Otolaryngol* 2024, n = 375): surgery was not independently linked to unwanted weight gain. A third of all children gained unwanted weight anyway [abstract].

**Takeaway**
- Trials show tonsil and adenoid surgery helps behaviour, symptoms and quality of life in children who snore or have OSA.
- It didn't improve the attention and thinking tests that were the main outcomes.
- Many children with mild problems improve while waiting.
- The decision is for the family and an ENT specialist. The app's job is "notice snoring and tell a doctor".

**RCH's "cures OSA in 80–90 per cent of children" [opened] is too strong for the app**
- A 2026 Iranian scoping review (*Med J Islam Repub Iran*) says residual OSA after surgery occurs in "20–75% of cases, particularly in children with craniofacial abnormalities" [abstract].
- CHAT normalised 79% [abstract].
- App wording: "helps most children".

**Bedwetting and OSA** [recall, unverified]
- Snoring and OSA are linked with bedwetting, including starting again after being dry.
- A Saudi 2023 cross-sectional study looked at this [abstract record seen; results not read].
- Don't use until checked.

### 3.5 Teeth grinding (sleep bruxism)

**Seattle Children's handout PE1288, dated 1 Feb 2025** [opened]
- "Teeth grinding is common in children."
- Grinding in babies "goes away on its own".
- "Nothing much needs to be done if a child is grinding their teeth."
- See a dentist for headaches, tooth pain or worn teeth.
- Tell the doctor if the child also snores, mouth-breathes or shows apnoea signs: "Obstructive sleep apnea … can trigger teeth grinding."
- Older children may benefit from a mouth guard against erosion.

**NHS teeth grinding page, reviewed 8 Apr 2026** [opened]
- Stress and anxiety are the most common link. Snoring and sleep apnoea are also linked.
- Treatment "isn't always needed".
- A dentist may suggest a fitted night guard.
- See a dentist "if you're worried about your child grinding their teeth".

**Anxiety (*J Clin Exp Dent* 2026, cross-sectional, 122 children aged 7 to 12)** [abstract]
- Children with sleep bruxism had higher parent-rated anxiety scores. A link only.

**Screens (*Braz Oral Res* 2026 systematic review, 13 observational studies)** [abstract]
- 8 found a link between screen use and bruxism and 5 did not. Evidence is mixed. Don't claim screens cause grinding.

**Prevalence:** published figures range widely, from about one in ten to over a third [search]. No figure for the app.

### 3.6 Head-banging, body-rocking and head-rolling

**Sleep Scotland handout, via NHS Lothian health visitors, 2022** [opened]
- "Common in young children … a normal part of development", from about **9 months to 3 or 4 years**.
- A way to self-soothe. "Most children will grow out of it by 4 years, but some with developmental delay will take longer."
- "Unlikely to hurt or injure themselves, beyond a small bruise. It won't affect their development or cause any damage to the brain."
- Tips:
  - a calm routine with lots of touch
  - check the bed's joints for stability
  - move the cot away from the wall
  - nap on a solid base, and never in a car seat on a table
- **Padding:** "cot bumpers and other types of padding are not recommended for babies for safety reasons."
- The handout also suggests a soft blanket or a parent's T-shirt to soothe. **The app must not repeat this for babies under 12 months**: it conflicts with `safe-sleep-essentials` (a clear cot).

**Health for Under 5s, NHS-funded, reviewed 14 Apr 2026** [opened]
- "Up to 20% of children headbang in their first few years." It "can peak at around 18–24 months" and "should ease when your child reaches four".
- For otherwise healthy children, "the best route is to ignore headbanging".
- Check cot bolts and screws.

**When to see a GP or paediatrician** [search; opened in part]
- It goes on past about 4 to 5.
- It causes injury or disturbs sleep.
- It comes with snoring or daytime tiredness.
- The child has developmental differences.

### 3.7 Restless legs (brief)

**Peds REST study (Picchietti et al., *Pediatrics* 2007, n = 10,523 UK and US families, online survey)** [abstract]
- Definite restless legs syndrome in **1.9% of 8- to 11-year-olds** and **2.0% of 12- to 17-year-olds**.
- Moderately or severely distressing symptoms at least twice a week: 0.5% and 1.0%.

**NHS** [opened]
- Lists restless legs as a trigger for night terrors and sleepwalking.

**Iron and "growing pains"** [recall, unverified]
- Iron deficiency is linked with restless legs and with "restless sleep disorder". A 2025 review says iron deficiency is "central" to restless sleep disorder [abstract, *Mov Disord Clin Pract* 2025].
- The app must **not** suggest giving iron. It should say "tell your doctor; they may check iron levels".
- Children may describe restless legs as "growing pains" or "bugs in my legs" [recall].

### 3.8 Melatonin (no amounts, no brands)

**What bodies say**
- **AAP (healthychildren.org, updated 22 Jan 2026)** [opened]:
  - Melatonin "should only be used after a discussion with your pediatrician".
  - It "may be a short-term way to help some kids get rest while you keep trying to establish good bedtime routines".
  - "Less is known about longer uses," with puberty a particular concern.
  - "Reports of poisonings in children have rapidly increased."
  - In the US, supplements aren't regulated as medicines, so contents may differ from labels.
- **AASM health advisory, 9 Sep 2022** [opened]:
  - "Parents should talk to a health care professional before giving melatonin or any supplement to children."
  - In tested products, melatonin "ranged from less than one-half to more than four times the amount stated on the label".
  - "Should be handled as any other medication and kept out of reach of children."
- **NHS (reviewed 6 Nov 2026)** [opened]:
  - In the UK melatonin is "only available with a prescription".
  - Used for sleep problems in people with learning disabilities and children with ADHD.
  - Not suitable for everyone, for example people with epilepsy or liver or kidney problems.
- **Iran:** I couldn't confirm melatonin's regulatory status for children in Iran [not found]. Recheck with the Food and Drug Organization (سازمان غذا و دارو) before any Persian line on where to get it.

**Rising use and poisonings**
- **MMWR 2022 (Lelak et al.; poison-centre data, US, ages 19 and under, 2012–2021)** [abstract]:
  - 260,435 melatonin ingestions were reported. Annual ingestions rose **530%**.
  - In 2020 melatonin became the most often ingested substance among children reported to poison centres.
  - Hospitalisations and serious outcomes rose, mainly unintentional ingestions in children aged 5 and under.
  - Five children needed mechanical ventilation, and two died.
- **MMWR 2024 (Notes from the Field, 7 Mar 2024)** [opened]:
  - About **10,930 emergency visits** (95% CI 7,609–14,251) for unsupervised melatonin ingestion by children aged 5 and under, 2019–2022.
  - That was 7.1% of all emergency visits for unsupervised medicine ingestion in that age group.
  - 93.5% weren't admitted.
  - Gummies were the most common documented form (47.3%).
  - "Melatonin products do not require child-resistant packaging." Choosing products with such packaging "might be advisable in homes with young children".
  - Keep all medicines and supplements, "including gummies", out of reach and sight.
- **Cohen et al., *JAMA* 2023 research letter** [search; full text not reached]:
  - 25 US gummy products. In the 24 that listed melatonin, contents ran from 74% to 347% of the label, and only 3 were within 10%.
  - One sample per brand.
- **Use:** a 2023 US survey of parent-reported melatonin use in children [recall, unverified; record not retrieved]. Don't use.

**Iranian trial (Hamadan, *BMC Pediatrics* 2026, RCT, n = 72, aged 6 to 12 with anxiety disorders and insomnia, IRCT20220820055756N1)** [abstract]
- Clonidine and melatonin both improved sleep-habit scores more than placebo at 6 weeks. There was no difference between them, and adverse effects were similar.
- Small, simple randomisation, 6 weeks.
- **Not for the app** except as "medicines are a doctor's decision".

**For the app**
- Melatonin is a medicine decision for a doctor, not a first step.
- Where it's sold as a supplement, the label may not match the contents.
- Store it, gummies especially, like medicine, locked away.
- No amounts, no brands.

### 3.9 Screens and sleep

**Carter et al., *JAMA Pediatrics* 2016 (meta-analysis of 20 cross-sectional studies, 125,198 children aged 6 to 19, mean 14.5)** [abstract]
- Bedtime access to or use of a portable device was linked with inadequate sleep (OR 2.17), poor sleep quality and daytime sleepiness.
- Cross-sectional, so a link only. Teen-heavy sample.

**Iranian studies**
- 358 Iranian parents of 0- to 36-month-olds (*BMC Pediatrics* 2026, cross-sectional): screen use before bed and bed-sharing were linked with poorer parent-reported sleep quality [abstract]. That study frames bed-sharing as a modifiable behaviour; the app should not, because sleeping arrangements are a family choice in Iran (see `night-waking`).
- 213 Iranian schoolchildren aged 4 to 11 (*Chronobiol Int* 2026): an evening chronotype went with worse sleep habits and higher smartphone or tablet "addiction" scores [abstract]. Cross-sectional.

**App coverage**
- The app already advises screens off an hour before bed and out of bedrooms. Nothing new is needed beyond a cross-link.

### 3.10 When night-time trouble points to something else

These are signs, not verdicts. Each sends the parent to a doctor or counsellor.

- **Anxiety.**
  - Severe night fears go with other fears and anxiety vulnerability [abstract, Kushnir 2014].
  - The NHS lists generalised anxiety disorder among causes of night terrors and nightmares [opened].
  - The app's `hard-month` tip covers worries after a frightening event.
- **Trauma or a frightening event.** NHS: see a GP for "nightmares caused by an upsetting or frightening event" [opened].
- **Breathing.** Snoring most nights, gasping or pauses, mouth breathing, or daytime sleepiness and behaviour change [opened, RCH].
- **Restless legs** [abstract, Picchietti; opened, NHS].
- **Seizures.** Several episodes a night, or the same stiff pattern each time [recall, unverified; reviewer to confirm].
- **ADHD and autism.** Sleep problems are common, and behavioural sleep help has trial support [abstract, Hiscock 2015; Sleeping Sound ASD 2022].
- **Any sudden, lasting change in sleep or behaviour.** The `night-waking` card already sends parents to a doctor, with an AAP abuse reference.

---

## 4. Where bodies disagree

| Question | Body A | Body B | Cautious path for the app |
|---|---|---|---|
| Restraining a child in a night terror | AAP: "If they try to get out of bed, gently restrain them." [opened] | NHS: "do not … try to stop them moving about" unless there's a risk of harm [opened] | Keep the current coach line: don't hold them down, step in only to stop a fall or knock, and guide them gently. |
| Age at which nightmares are worth a GP visit | NHS: "continues having nightmares after the age of 6" [opened] | AAP: nightmares "peak between 3 and 12" [opened] | Base the trigger on frequency, distress or a frightening event, not age alone (see P2 fix). |
| Where night terrors peak | NHS: 3 to 8 [opened] | AAP: toddlers and preschoolers; Petit cohort peak at 1½ years [opened; abstract] | "Most often between about 1½ and 8." |
| Scheduled waking | NHS recommends it for 2 weeks [opened] | 2026 systematic review: no guidelines, very low certainty [abstract]; only small case series [abstract] | Offer it as something some services suggest. Say evidence is small, and talk to a doctor first. |
| How well tonsil surgery works | RCH: "cures OSA in 80–90 per cent" [opened] | CHAT: 79% normalised versus 46% waiting; residual OSA in 20–75% in some groups [abstract] | "Often helps", decided with a specialist. |
| Monster spray | APA clinician handout recommends it [opened] | Some practitioners object [search]; no study either way | Neutral, family choice. Pair it with "monsters are pretend". |
| Melatonin access | UK: prescription only [opened] | US: sold as a supplement; AAP and AASM say talk to a doctor first [opened] | Always "ask a doctor first". No amounts. Say supplement labels may be wrong. |
| Padding for head-bangers | Sleep Scotland: padding may reassure for toddlers and older children [opened] | Same handout and safe-sleep guidance: no bumpers or padding for babies [opened] | Don't suggest padding at all. Suggest checking the bed's joints and moving it from the wall. |

---

## 5. Claims the app must NOT make

1. Any melatonin amount, timing-by-amount, product or brand. Any line that makes melatonin sound like a first step or "natural, so harmless".
2. "Wake your child during a night terror to stop it", or "shake or splash water".
3. "Scheduled waking cures night terrors or sleepwalking" (case series only).
4. "Night terrors or sleepwalking mean something is wrong emotionally." Both are strongly familial and usually outgrown [abstract, Petit 2015; opened, NHS].
5. "Night fears mean your child has an anxiety disorder." They're very common; severe fears are only *linked* with anxiety vulnerability.
6. "Monster spray works" or "monster spray harms": there's no study.
7. "Removing tonsils improves attention, learning or IQ." CHAT and PATS found no difference on those primary outcomes. Also no "cures OSA in 80–90%".
8. "Snoring is normal and harmless", or "all snoring needs surgery".
9. "Screens cause teeth grinding", or "teeth grinding means your child is stressed".
10. "Give iron for restless legs." Only a doctor checks iron.
11. Any suggestion of soft objects, padding or bumpers in a baby's cot for head-banging.
12. Locking a sleepwalker in their room (fire risk) [search]. Use door alarms and gates instead [opened].
13. Any number from a night-light study as a lux target for parents.
14. A screening score or "does my child have OSA?" checklist with a verdict. List signs, then "tell your doctor".

---

## 6. Iran-specific section

**Sleep timing and room-sharing**
- **Qazvin, 579 children aged 3 to 6 from 15 kindergartens** (*Malays J Med Sci* 2014, interviewer-completed BEARS and CSHQ) [abstract]:
  - Mean bedtime **23:18** (SD 48 minutes). Mean wake time **09:26**.
  - Mean sleep about 10 h 54 min a day.
  - **87% shared a room with their parents.**
  - Night waking 13.9%, snoring 2.7%, sleep-disordered breathing 1.2%, daytime sleepiness 6.9%.
  - These children slept within the usual range, but late. Late bedtimes are a cultural norm and fit family evenings. The concern is total sleep and fit with school start, not the clock time itself.
- **Tehran, 746 children aged 2 to 12** (*Iran J Pediatr* 2013; Persian BEARS filled in by paediatricians; 2008–09 data) [abstract]:
  - "Excessive daytime sleepiness" screened positive in **64.9%** of preschool and **62.9%** of school-age children. That is a screening item, so these are not diagnoses.
  - Bedtime and regularity problems were more common before school entry. "School entrance seems to play a positive role."
- **CASPIAN-V (2015, 30 provinces, ages 7 to 18):** about 23% reported short sleep in one analysis. Short-sleep definitions differ between papers [search only; don't use].
- **Note for the app:** respect room-sharing and family bedtimes. Focus on enough total sleep, a steady wind-down, and screens off. Sleeping arrangements are a family choice for children over 1 (`night-waking` already says so).

**Iranian research**
- Snoring and OSA: no national child prevalence study found. Qazvin preschool snoring 2.7% [abstract]. Tehran adolescents aged 11 to 17, 7.9% (2006) [search].
- Residual OSA after adenotonsillectomy: Iranian scoping review 2026, "20–75%" [abstract].
- Craniofacial features in Shiraz children with sleep-disordered breathing: 2026 case-control study [abstract; specialist, not for the app].
- Melatonin and clonidine RCT in anxious children (Hamadan, 2026) [abstract; doctor's decision only].
- Evening chronotype and device "addiction", 213 children aged 4 to 11 (2026) [abstract].
- Screens before bed and bed-sharing in 0- to 36-month-olds (2026) [abstract].
- **No Ministry of Health «کودک سالم» material on parasomnias or snoring was found this session.** Recheck the national well-child care booklets for sleep questions, especially snoring at the school-age visits.

**Services for Persian copy**
- 115 for an emergency, for example a child injured while sleepwalking, or not breathing normally.
- 1480 (Behzisti counselling line) for parents worried about a child's fears or anxiety.
- 123 (social emergency) if a sudden change in sleep comes with signs of harm at home.
- Poison line 1490 is **not** verified. Don't use it for melatonin ingestion; use 115.

**Traditions**
- Room-sharing and bed-sharing with older children are common [abstract, Qazvin 87% room-sharing]. No harm is shown for children over 1, so respect them.
- Reciting a prayer or verse at bedtime is a comforting routine. The app already lists "a prayer" in `sleep-by-age`. No religious rulings.
- Fear of «لولو» or «جن» used to make children behave: I found no Iranian study. A general caution fits the evidence on fantasy-reality confusion [abstract, Kushnir 2013]. "Avoid threatening children with scary figures to make them sleep; it can feed night fears." Mark this as expert reasoning, not evidence, and have the Persian reviewer check the tone.

---

## 7. Recommended guide outline

**slug:** `night-time-troubles`
**title:** Night frights, sleepwalking and snoring
**summary:** What's happening when your child screams, walks or snores in their sleep, what helps, and when to see a doctor.
**age range:** 12 to 144 months
**topic shelf:** `sleep`. This existing shelf ("Sleep and crying") isn't in the brief's list. If `sleep` must not be used, use `health`.
**refs:** NHS night terrors; NHS sleepwalking; AAP nightmares and night terrors; RCH OSA; AAP OSA guideline 2012; Marcus 2013 (CHAT); Redline 2023 (PATS); Petit 2015; Kushnir & Sadeh 2012; Gordon 2007; AAP melatonin; AASM melatonin advisory; MMWR 2024; Seattle Children's bruxism; Health for Under 5s head-banging; Sleep Scotland handout; night-light study 2026; Picchietti 2007.

**Blocks** (every line traces to an [opened] or [abstract] fact above)

1. **p:** Most night-time scares are a normal part of growing up, and most children grow out of them. Knowing which is which tells you whether to comfort, wait or call the doctor. *(NHS, AAP, Petit [opened/abstract])*

2. **table: Which is it?** Head: `What you see` | `Nightmare` | `Night terror` | `Sleepwalking`
   - Awake? | Yes, and wants you | No, may not know you | No, moving about asleep
   - Remembers? | Often | No | No
   - Most common | 3 to 12 | About 1½ to 8 | Later childhood, peak around 10
   - What helps | Comfort and a dim light | Stay close, keep them safe, wait | Guide them gently back to bed
   *(AAP, NHS, Petit)*

3. **steps: During a night terror**
   - *Stay calm and stay close.* It looks frightening, but your child isn't aware of it and won't remember it.
   - *Don't wake them.* They may not know you and can get more upset.
   - *Only step in for safety.* Move them away from stairs or sharp corners, gently, without holding them down.
   - *Look for patterns.* Overtiredness, illness, a full bladder and noise can set them off. A regular bedtime and a wee before bed may help.
   *(NHS [opened])*

4. **callout (safety): Sleepwalkers**
   - Close doors and windows and use stair gates.
   - Lock away knives and tools, and clear the floor.
   - No top bunk.
   - Door alarms if they might leave the house.
   - Guide them back to bed without waking them suddenly.
   - See a doctor if they get hurt, sleepwalk often, or are also tired in the day or breathe oddly in their sleep.
   *(NHS sleepwalking [opened])*

5. **callout (science): Runs in families**
   - In a Canadian study following almost 2,000 children, about a third had night terrors at 18 months. Sleepwalking peaked around 10.
   - Children of a parent who sleepwalked were about twice as likely to sleepwalk.
   - Waking a child 15 minutes before their usual terror time is suggested by the NHS, but only tiny studies have tested it. Ask your doctor.
   - We don't know why some children have many episodes and others none.
   *(Petit [abstract]; NHS [opened]; Frank 1997, 2026 review [abstract])*

6. **h: Fear of the dark**

7. **p:** Night-time fears are very common, especially before the teens. In one school study of 8- to 16-year-olds, about 8 in 10 of the younger children had them. Fears usually fade. If they're strong, small brave steps help more than lots of checking for monsters. *(Muris 2007; Gordon 2007 [abstract])*

8. **steps: Brave practice**
   - *Name it kindly.* "It feels scary in the dark. Your feelings are real, and you're safe."
   - *Make it a game by day.* Torch hunts, dark-den stories, and books about being brave in the dark.
   - *Give a job.* Ask them to keep their teddy company at night. In a trial with 4- to 6-year-olds, this cut night fears and sleep problems for at least 6 months. *(Kushnir & Sadeh 2012)*
   - *Take small steps.* Praise each one: lights a little lower, you a little further from the bed.
   *(Gordon 2007; Lewis 2015; 2026 trial [abstract])*

9. **callout (tip): Night-lights and monster spray**
   - A night-light is fine if it helps. Choose a dim, warm-coloured one placed away from the bed: bright or blue-white light can shift body clocks.
   - Some families use a pretend "monster spray". Others prefer not to suggest monsters might be real. No study has tested it either way, so it's your call, alongside "monsters are pretend".
   *(AAP [opened]; night-light study [abstract]; APA handout [opened])*

10. **h: Snoring**

11. **p:**
    - About 1 in 6 children snore, and 2 to 3 in 100 have obstructive sleep apnoea, when the airway keeps closing in sleep.
    - Signs: snoring most nights, gasps or pauses, restless sweaty sleep, mouth breathing, tired mornings.
    - In the day, trouble paying attention or behaviour changes may be the only clue.
    - If you notice these, tell your doctor.
    *(RCH [opened]; AAP 2012 [abstract].)* A "short phone video" tip appears only in [search] results, so it is left out. Add it only if a national body confirms it (recheck 5).

12. **callout (science): Tonsils and adenoids**
    - In two large trials of children who snored or had sleep apnoea, removing tonsils and adenoids improved behaviour, sleepiness and quality of life.
    - It didn't change attention and thinking tests.
    - Many children with mild problems improved while waiting. In the second trial, about 3 in 100 had a serious complication.
    - It's a decision to make with a specialist.
    *(CHAT, PATS [abstract])*

13. **table: Other things you may notice.** Head: `What` | `Usually` | `Worth asking about`
    - Teeth grinding | Common; often needs nothing | Tooth wear, jaw pain or headaches (dentist); snoring too (doctor)
    - Head-banging or rocking | Self-soothing, eases by about 4 | Injuries, disturbed sleep, past 4 to 5, or other development worries
    - Restless legs | About 2 in 100 children aged 8 to 17 | Leg discomfort that stops sleep; a doctor may check for causes
    *(Seattle Children's, NHS bruxism, Sleep Scotland, Health for Under 5s [opened]; Picchietti [abstract])*

14. **callout (safety): Melatonin is a medicine decision**
    - Health bodies advise talking to a doctor before giving melatonin, and it's a prescription medicine in some countries.
    - Supplement labels can be wrong.
    - US poison reports in young children rose sharply, often from gummies. Lock it away like medicine.
    - Swallowed some? Call your emergency number.
    *(AAP, AASM, NHS, MMWR 2024 [opened]; MMWR 2022 [abstract])*

15. **h: When to talk to a doctor**

16. **list:**
    - Night terrors that start after 5, happen often, or go on past 12.
    - Nightmares that are frequent, wear your child down, or began after something frightening.
    - Snoring most nights, gasps or pauses in breathing.
    - Fears that stop your child sleeping or doing everyday things most nights.
    - Any sudden, lasting change in sleep or behaviour.
    *(NHS, RCH [opened]; Kushnir 2014 [abstract])*

17. **callout (science): What we don't know**
    - Treatments for night terrors and sleepwalking rest on very small studies.
    - Fear-of-the-dark trials are small, mostly against a waiting list.
    - Melatonin's long-term effects in children are not well known.
    *(2026 SMR review, Gordon 2007 [abstract]; AAP melatonin [opened])*

18. **p:** See also: Nightmare or night terror (coach), Waking in the night (coach), Sleep by age, Toilet training and wet nights.

---

## 8. Daily tips (10–15)

| id | Ages (months) | Text (30 words or fewer) | Source |
|---|---|---|---|
| nt-terror-wait | 12–96 | Screaming but not seeing you? That may be a night terror. Stay close, keep them safe and wait. Waking them can make it worse. | NHS night terrors [opened] |
| nt-terror-diary | 24–144 | Frequent night terrors? Jot down bedtime, the time of each episode and the day before. Tiredness, illness or a full bladder can set them off. | NHS night terrors [opened] |
| nt-sleepwalk-safe | 36–144 | If your child sleepwalks, close windows, use a stair gate, lock away knives and keep them off the top bunk. | NHS sleepwalking [opened] |
| nt-sleepwalk-guide | 36–144 | Found your child sleepwalking? Guide them back to bed quietly. Waking them suddenly can leave them confused and upset. | NHS sleepwalking [opened] |
| nt-family-trait | 12–144 | Night terrors and sleepwalking often run in families, and most children grow out of them by their teens. | Petit 2015 [abstract]; NHS [opened] |
| nt-teddy-job | 36–84 | Scared at night? Give them a job: keeping teddy company. In a trial, caring for a soft toy eased young children's night fears for months. | Kushnir & Sadeh 2012 [abstract] |
| nt-brave-steps | 36–120 | Beat fear of the dark in small steps: torch games by day, then lights a little lower each week. Praise every brave try. | Gordon 2007; Lewis 2015 [abstract] |
| nt-warm-light | 24–144 | A night-light is fine if it helps. Choose a dim, warm-coloured one placed away from the bed, not a bright white one. | AAP [opened]; night-light study 2026 [abstract] |
| nt-snore-tell | 12–144 | Does your child snore most nights, gasp or breathe through their mouth when asleep? Tell your doctor, even if they seem well. | AAP 2012 [abstract]; RCH [opened] |
| nt-snore-day | 36–144 | Trouble concentrating, grumpy mornings and loud snoring can be linked. If you notice them together, mention the snoring to your doctor. | RCH [opened] |
| nt-grind | 24–144 | Teeth grinding in sleep is common and often needs nothing. See a dentist if there's tooth wear, jaw pain or headaches. | Seattle Children's; NHS [opened] |
| nt-headbang | 12–48 | Rocking or head-banging at bedtime is a common way to self-soothe and usually eases by about 4. Check the cot or bed is solid. | Sleep Scotland; Health for Under 5s [opened] |
| nt-melatonin-ask | 12–144 | Thinking about melatonin? Talk to your doctor first. Supplement labels can be wrong, and it isn't a first step. | AAP; AASM [opened] |
| nt-gummies-lock | 12–72 | Keep sleep gummies and all supplements locked away like medicine. Sweet gummies are a common cause of young children's emergency visits in the US. | MMWR 2024 [opened] |
| nt-scary-film | 36–144 | A scary film can bring on bad dreams and night terrors. Pick something calm for the last hour before bed. | NHS [opened] |

**Before shipping:** check these against the existing tips (`screens-off-bedtime`, `early-wind-down`). `nt-gummies-lock`: confirm the "never name other countries in Persian-only copy" rule. The Persian version should say «در برخی کشورها» or drop that clause.

---

## 9. Persian glossary

| English | Persian | Note |
|---|---|---|
| Nightmare | کابوس | Common word |
| Night terror / sleep terror | وحشت شبانه | Also «ترس شبانه» in lay use. Prefer «وحشت شبانه» to match medical texts. |
| Confusional arousal | بیداری همراه با گیجی | No settled lay term found. Persian reviewer to choose. |
| Sleepwalking | خوابگردی | Also «راه رفتن در خواب» |
| Sleep talking | خواب‌گویی / حرف زدن در خواب | |
| Snoring | خروپف | |
| Obstructive sleep apnoea | آپنه انسدادی خواب | Lay gloss: «قطع تنفس در خواب» |
| Tonsils / adenoids | لوزه‌ها / آدنوئید | Adenoid is often called «لوزهٔ سوم» in lay speech |
| Tonsil and adenoid removal | برداشتن لوزه و آدنوئید | |
| Teeth grinding (bruxism) | دندان‌قروچه | |
| Head-banging / body-rocking | سر کوبیدن / تاب‌دادن بدن در خواب | Reviewer to check naturalness |
| Restless legs syndrome | سندرم پاهای بی‌قرار | |
| Fear of the dark | ترس از تاریکی | |
| Night-light | چراغ خواب | |
| Insomnia | بی‌خوابی | |
| Melatonin | ملاتونین | |
| Bedwetting | شب‌ادراری | |
| Brave practice (graded exposure) | تمرین شجاعت، قدم‌به‌قدم | Descriptive, not a clinical term |

---

## 10. Recheck before shipping

1. Clinical reviewer to confirm the seizure "several times a night, same pattern" red flag. It is [recall].
2. Open the AASM sleepeducation.org pages on confusional arousals and rhythmic movement (blocked this session) before adding any confusional-arousal line.
3. Open the full Cohen 2023 *JAMA* gummies letter if any figure from it is used. It is currently [search] and is not used in the outline.
4. Recheck the RCH OSA fact sheet; it is "awaiting routine review". Find a newer national source for the "1 in 6 snore, 2 to 3 in 100 OSA" figures if possible, for example the NHS or the European Respiratory Society statement.
5. Confirm the "short phone video" tip with a national body before use. It is [search] only.
6. Confirm melatonin's regulatory status for children in Iran (Food and Drug Organization) before any Persian line about where to get it.
7. Search the Ministry of Health «کودک سالم» booklets for sleep and snoring questions at school-age visits, and cite them in the Persian copy if present.
8. Apply the P2 fix to the `nightmare-night-terror` coach card, and consider the P3 wording fixes in `settling-to-sleep`, the coach `later` text and `night-waking`.
9. Make sure no tip or guide line suggests soft objects or padding in a baby's cot. The Sleep Scotland handout does, and must not be copied for under-12-months.
10. Run the dose-pattern test on the melatonin callout and tips.
11. Persian reviewer: confirm the terms for confusional arousal and head-banging, and the tone of the «لولو» line.
12. Verify the Huggy-Puppy trial details in the full text (randomisation, attrition) before the tip quotes "for months".

---

## 11. Sources

| Title | Publisher / journal | Year | URL | Tag |
|---|---|---|---|---|
| Night terrors and nightmares | NHS | reviewed 2025 | https://www.nhs.uk/conditions/night-terrors/ | opened |
| Sleepwalking | NHS | reviewed 2025 | https://www.nhs.uk/conditions/sleepwalking/ | opened |
| Nightmares and night terrors | AAP, healthychildren.org | updated 2023 | https://www.healthychildren.org/English/ages-stages/preschool/Pages/Nightmares-and-Night-Terrors.aspx | opened |
| Melatonin and children's sleep | AAP, healthychildren.org | updated 2026 | https://www.healthychildren.org/English/healthy-living/sleep/Pages/melatonin-and-childrens-sleep.aspx | opened |
| Melatonin use in children and adolescents: health advisory | American Academy of Sleep Medicine | 2022 | https://aasm.org/advocacy/position-statements/melatonin-use-in-children-and-adolescents-health-advisory/ | opened |
| Melatonin | NHS | reviewed 2026 | https://www.nhs.uk/medicines/melatonin/ | opened |
| Notes from the Field: ED visits for unsupervised melatonin ingestion by children ≤5 years, 2019–2022 | CDC MMWR 73(9) | 2024 | https://www.cdc.gov/mmwr/volumes/73/wr/mm7309a5.htm | opened |
| Pediatric melatonin ingestions — United States, 2012–2021 (Lelak et al.) | CDC MMWR 71(22) | 2022 | doi:10.15585/mmwr.mm7122a1 | abstract |
| Quantity of melatonin and CBD in melatonin gummies sold in the US (Cohen et al.) | JAMA 329(16) | 2023 | doi:10.1001/jama.2023.2296 | search |
| Obstructive sleep apnoea (OSA) fact sheet | Royal Children's Hospital Melbourne | reviewed 2018 | https://www.rch.org.au/kidsinfo/fact_sheets/Obstructive_sleep_apnoea_OSA/ | opened |
| Diagnosis and management of childhood OSAS (Marcus et al.) | Pediatrics (AAP guideline) | 2012 | PMID 22926173 | abstract |
| A randomized trial of adenotonsillectomy for childhood sleep apnea (CHAT) | NEJM | 2013 | PMID 23692173 | abstract |
| Adenotonsillectomy for snoring and mild sleep apnea in children (PATS) | JAMA | 2023 | PMID 38051326 | abstract |
| Weight gain after adenotonsillectomy … PATS exploratory analysis | JAMA Otolaryngol Head Neck Surg | 2024 | PMID 39172463 | abstract |
| Childhood sleepwalking and sleep terrors: longitudinal study (Petit et al.) | JAMA Pediatrics | 2015 | PMID 25938617 | abstract |
| Longitudinal study of bad dreams in preschool children (Simard et al.) | Sleep | 2008 | PMID 18220079 | abstract |
| Mental activity during sleepwalking, night terrors or confusional arousals | Nat Sci Sleep | 2021 | PMID 34188578 | abstract |
| Management of non-REM parasomnias: systematic review | Sleep Med Rev | 2026 | PMID 42772083 | abstract |
| The use of scheduled awakenings to eliminate childhood sleepwalking (Frank et al.) | J Pediatr Psychol | 1997 | PMID 9212552 | abstract |
| Points: Treatment of night terrors (Lask) | BMJ | 1988 | PMC1834433 | recall, unverified (record only) |
| Behavioral treatment of bedtime problems and night wakings (Mindell et al.) | Sleep | 2006 | PMID 17068979 | abstract |
| Assessment of brief interventions for nighttime fears in preschool children (Kushnir & Sadeh) | Eur J Pediatr | 2012 | PMID 21594575 | abstract |
| Nighttime fears of preschool children: a potential disposition marker for anxiety? (Kushnir et al.) | Compr Psychiatry | 2014 | PMID 24262125 | abstract |
| Nighttime fears and fantasy-reality differentiation (Kushnir & Sadeh) | Child Psychiatry Hum Dev | 2013 | PMID 22760490 | abstract |
| Treatment of children's nighttime fears: the need for a modern RCT (Gordon, King, Gullone) | Clin Psychol Rev | 2007 | PMID 16935400 | abstract |
| Nighttime fears of children and adolescents (Muris et al.) | Behav Res Ther | 2007 | PMID 17490610 | abstract |
| Treating nighttime fears in young children with bibliotherapy (Lewis et al.) | J Anxiety Disord | 2015 | PMID 25638438 | abstract |
| Efficacy of bibliotherapy combined with games to reduce fear of the dark | Eur J Pediatr | 2026 | PMID 42008152 | abstract |
| Monster Spray (Handout 20, Meltzer & Crabtree, *Pediatric Sleep Problems*) | American Psychological Association | 2015 | https://www.apa.org/pubs/books/supplemental/pediatric-sleep-problems/Monster_Spray.pdf | opened |
| Quantifying the biological impacts of nightlights | npj Biol Timing Sleep | 2026 | PMID 41927975 | abstract |
| Impact of a behavioural sleep intervention … ADHD (Hiscock et al.) | BMJ | 2015 | PMID 25646809 | abstract |
| Sleeping Sound ASD RCT | J Child Psychol Psychiatry | 2022 | PMID 35285017 | abstract |
| Child routines moderate a brief behavioral sleep intervention | J Pediatr Psychol | 2024 | PMID 38553029 | abstract |
| Remotely delivered behavioral insomnia interventions: review of RCTs | Front Sleep | 2023 | PMID 41426469 | abstract |
| Insomnia-focused interventions and depressive symptoms: meta-analysis | Eur Child Adolesc Psychiatry | 2026 | PMID 42560515 | abstract |
| Portable screen-based media device access and sleep: meta-analysis (Carter et al.) | JAMA Pediatrics | 2016 | PMID 27802500 | abstract |
| Restless legs syndrome: Peds REST study (Picchietti et al.) | Pediatrics | 2007 | PMID 17671050 | abstract |
| Restless sleep disorder in children: educational review | Mov Disord Clin Pract | 2025 | PMID 40448264 | abstract |
| Teeth grinding (bruxism), PE1288 | Seattle Children's Hospital | 2025 | https://www.seattlechildrens.org/pe/sleep-medicine/bruxism-teeth-grinding/ | opened |
| Teeth grinding (bruxism) | NHS | reviewed 2026 | https://www.nhs.uk/conditions/teeth-grinding/ | opened |
| Sleep bruxism in children is associated with multiple dimensions of anxiety | J Clin Exp Dent | 2026 | PMID 42992269 | abstract |
| Is bruxism associated with screen devices? Systematic review | Braz Oral Res | 2026 | PMID 42585414 | abstract |
| Head banging, body rocking and head rolling | Sleep Scotland, via NHS Lothian health visitors | 2022 | https://services.nhslothian.scot/healthvisitors/wp-content/uploads/sites/27/2023/10/Head-banging-body-rocking-and-head-rolling-1-1.pdf | opened |
| Headbanging (under 5s) | Health for Under 5s (NHS-funded) | reviewed 2026 | https://healthforunder5s.co.uk/?p=12443 | opened |
| Sleep problems among pre-school children in Qazvin, Iran | Malays J Med Sci | 2014 | PMID 25897283 | abstract |
| High prevalence of sleep problems in school- and preschool-aged children in Tehran | Iran J Pediatr | 2013 | PMID 23550175 | abstract |
| Behavioral and parental predictors of infant and toddler sleep quality (Iran) | BMC Pediatrics | 2026 | PMID 42135646 | abstract |
| Chronotype, sleep habits and smartphone/tablet addiction among Iranian children | Chronobiol Int | 2026 | PMID 42175734 | abstract |
| Efficacy of clonidine and melatonin for insomnia in anxious children (Hamadan) | BMC Pediatrics | 2026 | PMID 41781909 | abstract |
| Craniofacial abnormalities and residual OSA after adenotonsillectomy: scoping review | Med J Islam Repub Iran | 2026 | PMID 42516626 | abstract |
| Current and emerging therapies for pediatric sleep disorders | Neurol Ther | 2026 | PMID 42525367 | abstract |
| Prevalence and correlates of snoring in adolescents (Tehran) | Iranian journal (magiran record) | 2006 | https://www.magiran.com/paper/353436/?lang=en | search |
| CASPIAN-V sleep duration analyses | Diabetol Metab Syndr and others | 2018 | https://dmsjournal.biomedcentral.com/track/pdf/10.1186/s13098-018-0381-y | search |
