# 01 — World research 2024 to 2026: a horizon scan for PlayNest

Research notes for PlayNest phase 10, round 7. Researched 19 Nov 2026.

## 1. Scope, and what is already in the app

**Question.** What are the most important, legitimate parenting and early-childhood studies and guidance published worldwide from
2024 to November 2026, and what, if anything, should they change in PlayNest? The scan leans towards research from outside the US and
UK: sub-Saharan Africa, South and South-East Asia, Latin America, Ukraine and Iran.

**Covered:** WHO/UNICEF guidance since 2022; major reviews (Lancet family, JAMA Pediatrics, Cochrane, Child Development, JCPP);
big trials and scale-ups (Parenting for Lifelong Health, Sugira Muryango, Moments that Matter, Hope Groups, VIPP-SD, Pakistan,
Bangladesh, Iran); cohorts reporting 2024 to 2026 (JECS Japan, GUSTO Singapore, the EU Child Cohort Network, four pooled
European cohorts).

**Not covered here, because other round-7 notes do:** parents' mental health after a birth in depth (note 04), night-time
troubles (05), online safety (06), school-age worries (08), and a line-by-line audit of numbers already in the app (02). Where a
finding here touches their topics, I point to them rather than repeat.

**Already in the app. I read these and don't repeat them below, except to confirm, cross-link or flag a problem:**
- `docs/RESEARCH-4.md` to `RESEARCH-7.md` (releases 1.6 to 1.9).
- `guides-evidence.ts`: `what-decades-show` (Parenting Across Cultures, conversational turns, Jamaica, Dunedin, bedtimes, NICHD,
  Bucharest, England's null home-visiting trial) and `myths-checked` (13 myths).
- `guides-parenting.ts`: `parenting-pyramid`, `special-time`, `attention-and-praise`, `rewards-that-work`, `emotion-coaching`.
- `guides-wellbeing.ts`: `nurturing-care` (five components, WHO 2020 ECD guideline, Care for Child Development, Lancet 2024
  "next 1000 days") and `what-protects-children` (Bethell 2019 positive childhood experiences).
- Also checked because the new evidence bears on them: `instead-of-smacking` (guides-discipline.ts), `dads-non-birth-parents`
  (guides-more.ts), `your-mind-after-birth` (guides-mind.ts), `temperament` (guides-wellbeing.ts), `reading-every-age`
  (guides-more.ts), `healthy-eyes` (guides-learning.ts).

### Problems found in existing content

No P1 (could cause harm) and no P2 (wrong or misleading) problems. Four wording points (P3):

| # | Severity | File, slug | Line now | Why | Suggested fix |
|---|---|---|---|---|---|
| 1 | P3 | guides-parenting.ts, `parenting-pyramid` (tip callout) | "Learning on your own from an app or website helps too, though less than a course: online programmes have small to moderate effects, and regular reminders to practise seem to matter most." | The small-to-moderate effects of self-directed programmes come almost entirely from parents' own ratings. A 2026 preprint pooling 27 trials found no measurable change when teachers, children or blinded observers rated the child (§3.6, [abstract], **preprint, single author: recheck**). A 2026 Thai trial of a blended in-person and messaging programme found no fall in maltreatment at one month (§3.2, [abstract]). | "…online programmes have small effects, mostly as parents themselves report them, and practising with your own child seems to matter most." |
| 2 | P3 | guides-parenting.ts, `parenting-pyramid` (science callout) | "Programmes taken to very different countries worked at least as well there." | Still true on average (Gardner 2016), but some new versions in new places have not worked (Thailand 2026 blended trial; Kenya 2026 child development outcomes; §3.2). | "On average, programmes taken to very different countries worked about as well there, though not every new version has." |
| 3 | P3 | guides-wellbeing.ts, `temperament` (refs only) | Refs Belsky & Pluess 2009 and Lionetti 2018 ("orchids and dandelions") | A 2025 pooled analysis of over 30,000 children in four cohorts found infant temperament and parenting mostly add up rather than interact; "differential susceptibility" patterns appeared in 0 of 16 tests (§3.9, [abstract]). The guide's text makes no orchid claim, so nothing parents see is wrong. | Keep the text. Never add "sensitive children gain most from good parenting". Consider dropping the two refs or adding Eves et al. 2025 beside them. |
| 4 | P3 | guides-discipline.ts, `instead-of-smacking` (science callout) | "But the findings are consistent across many countries and study designs." | True, and now much better supported for lower- and middle-income countries (189 studies, 92 countries; §3.3). Parents in Iran often ask whether Western studies apply to them. | Add one sentence (see §3.3 app implication). |

## 2. How to read these notes

- **[opened]**: I read the page, the slides or the full text (Europe PMC `fullTextXML`) and took the fact from it.
- **[abstract]**: taken from the abstract via the Europe PMC REST API.
- **[search]**: from search-result summaries only. The app must not use it until someone checks the source.
- **[recall, unverified]**: background knowledge I could not confirm this session.

**Access problems this session:**
- The WHO parenting-guideline PDF on iris.who.int returned the new DSpace app shell, not the PDF. NCBI Bookshelf (NBK589381) served
  a reCAPTCHA. So the guideline's **strength and certainty ratings were not read**. The wording of the recommendations and the
  "essential components" come from WHO's own launch-webinar slides (Butchart, 14 April 2023), which I **opened** as text.
- Two Iranian university PDFs on the Ministry of Health parenting-skills programme (SBMU 1402 workshop instruction; IUMS 1402
  skills-workshop instruction) downloaded but `pdftotext` returned unreadable glyphs, as in round 6. Only digits ("12-2", "98")
  were legible. The programme description is therefore **[search]**.
- Several 2026 items are preprints (Research Square, OSF, medRxiv). Each is labelled "preprint" and none is used in an outline.
- **Searches used:** 6 general web searches, about 30 Europe PMC API queries, and 9 page, slide or full-text fetches.

---

## 3. Findings by topic

Each finding gives: what was found, design, size, effect, tag, and an **App implication**.

### 3.1 WHO and UNICEF guidance since 2022

**(a) WHO guidelines on parenting interventions to prevent maltreatment and enhance parent–child relationships with children
aged 0–17 years.**
- Published 10 February 2023 (some records say 2022) [opened: WHO publication page].
- **Five recommendations** [opened: WHO slides; WHO news release 23 Feb 2023]:
  1. In LMICs, evidence-based parenting interventions should be "made readily accessible to all parents or caregivers of children
     aged 2-17 years, in group-based or individualized formats", delivered through government health, education or social
     services and NGOs.
  2. Globally, the same for parents of children aged 2–10, for interventions "informed by social learning theory".
  3. In LMICs, for parents of adolescents aged 10–17, considering adolescents' specific needs.
  4. In humanitarian settings in LMICs, for parents of 0–17s, "that consider the impact on recipients' mental health".
  5. Ages 0–3: it adopts the 2020 WHO ECD guideline's recommendations (responsive care, early learning, both built into nutrition
     programmes, and psychosocial support for maternal mental health).
- **Essential components**, as WHO lists them [opened: WHO slides, slide 6]:
  - *Non-violent discipline:* ignoring negative attention-seeking behaviour, natural and logical consequences, time-out.
  - *Proactive parenting:* clear rules, monitoring the child's behaviour, positive and direct instructions.
  - *Positive reinforcement:* praise and rewards for appropriate behaviour.
  - *Parent self-management:* emotion regulation, problem solving, communication and partner support.
  - *Relationship:* child-led play, empathy building.
  - WHO's slide stamps "Practice!" beside the discipline and proactive skills.
- Interventions "focus on developing new skills and behaviours – not didactic instruction". Parents "learn and practice applying
  new skills to their own child". Delivery can be centre-based, home-based, online or mixed, by professionals or
  para-professionals [opened: WHO slides, slide 4].
- **Evidence base:** about 450 RCTs (more than 300 in high-income and more than 150 in LMICs) [opened: Gardner/Backhaus team,
  *Health Res Policy Syst* 2024, WHO-INTEGRATE paper]. Many critical outcomes were rated "moderate" to "low" certainty, and the
  panel had "reservations about issuing 'strong' recommendations" [opened: same paper]. The final strength labels were **not
  read** (see access problems).
- **App implication:** confirms `parenting-pyramid`. Its table already matches WHO's components, including partner support and
  the parent's own calm. Possible new guide (§7): a parent-facing "what a good parenting course looks like", with the Iranian
  health-centre route.

**(b) WHO report "Corporal punishment of children: the public health impact" (20 August 2025).**
- About **1.2 billion** children aged 0–18 are physically punished at home each year [opened: WHO news item].
- Across 58 countries, 17% of children punished in the past month got its most severe forms [opened].
- Across 49 LMICs, exposed children were on average **"24% less likely to be developmentally on track"** [opened].
- Laws are "necessary but not sufficient". WHO calls for them to be paired with public awareness and direct support for parents,
  caregivers and teachers [opened].
- The report states that no study has found positive effects of corporal punishment [search: summary only, not seen on the WHO
  page I opened].
- **App implication:** confirms `instead-of-smacking`. It could cite WHO 2025 next to WHO's existing position. Persian:
  argue from health, never from law (house rule), and name no countries.

**(c) UNICEF, 11 June 2024 (first International Day of Play).**
- Nearly **400 million** under-5s, "about 6 in 10", "regularly endure psychological aggression or physical punishment at home".
  About 330 million are physically punished [opened: UNICEF press release]. Data from 100 countries, 2010–2023 [search].
- 66 countries ban physical punishment at home [opened].
- "Slightly more than 1 in 4" mothers and primary caregivers say physical punishment is necessary to raise children properly
  [opened].
- Among 2–4-year-olds, about 4 in 10 lack enough responsive interaction or stimulation, about 1 in 5 don't play with caregivers at
  home, and about 1 in 8 under-5s have no toys [opened].
- **App implication:** none needed. The useful line for parents is the reassurance that household objects count as toys, which
  `nurturing-care` already says. Don't quote global prevalence to Iranian parents in a way that implies blame.

**(d) Global discipline trends, 88 countries, 2005–2023** (Egyir et al. 2026, **preprint**).
- 176 MICS and DHS surveys, 1.544 million children aged 1–14.
- Only **19.1%** had only non-violent discipline. 55.0% had physical punishment, 12.7% severe physical punishment, and 64.0%
  emotional violence.
- Violent discipline was highest at ages 6–9. Physical violence fell in 33 countries and rose in some others [abstract,
  preprint].
- **App implication:** a reason to make sure discipline guides reach ages 6–9, not only toddlers. `instead-of-smacking` runs 12–144
  months, so it already does. None.

**(e) Nurturing Care updates.**
- I found **no new WHO/UNICEF nurturing-care guideline from 2024 to 2026** in two searches. The newest items were a 2023 progress
  report and 2025 country roll-outs of Care for Child Development, such as Nepal [search].
- New and relevant: the **UNICEF "Caring for the Caregiver"** package (counselling built into routine home visits). In a
  six-country pre-post evaluation, *Lancet Glob Health* 2026, 822 caregivers in Bhutan, Brazil, Serbia, Sierra Leone, Rwanda and
  Zambia:
  - Depression fell (PHQ-9 −2.23 points) and parenting stress fell (−12.35).
  - Self-efficacy and social support rose, more with a higher dose.
  - There was **no control group**, and the authors call for controlled studies [abstract].
- **App implication:** confirms `nurturing-care`'s "look after yourself too" callout. No number should be quoted (pre-post only).

**(f) Cochrane 2025, skin-to-skin contact.**
- 69 trials, 7,290 mother–infant pairs.
- Immediate skin-to-skin "probably increases" exclusive breastfeeding at discharge to 1 month (RR 1.36) and at 6 weeks to 6 months
  (RR 1.38), moderate certainty. It also improves temperature and blood sugar.
- The review supports it "regardless of mode of birth" [abstract].
- **App implication:** confirms the existing `skin-to-skin` tip and the WHO/UNICEF position. None.

### 3.2 Parenting programmes: big trials and scale-ups, 2024 to 2026

**(a) Effects over time** (Backhaus et al., *EClinicalMedicine* 2023; just before the window, but it underpins WHO and is new to
the app).
- Systematic review of 346 RCTs of social-learning programmes for parents of 2–10-year-olds; 60 reported physical or emotional
  violence.
- 22% were from LMICs, and the search included Farsi databases.
- Violent parenting fell by **d = −0.46** straight after, **−0.24** at 1–6 months and **−0.18** at 7–24 months: effects held but
  shrank. Mostly parent self-report, with high risk of bias in several domains [abstract].
- **App implication:** confirms the goals' design (check-ins after a goal; RESEARCH-5 "programme effects mostly last"). Adds an
  honest line for a "what we don't know" box: gains get smaller over time.

**(b) Parenting for Lifelong Health (PLH), WHO/UNICEF's open-access programme.**
- **Tanzania, ParentApp** (Cluver et al., *Lancet* 2026), cluster RCT:
  - 80 sub-wards, 2,396 caregiver–adolescent pairs (ages 10–17).
  - A 12-module offline-first app on a low-cost phone, plus one in-person session and WhatsApp support; about US$6 a family at
    scale.
  - At 18 months, girls' past-month sexual violence fell (IRR 0.43), with no effect for boys.
  - Maltreatment fell slightly (adolescent report IRR 0.92) [abstract].
- **Thailand, blended in-person and LINE chat programme** (Pongpaew et al., *Lancet Reg Health SE Asia* 2026), cluster RCT:
  - 240 caregivers of 2–17-year-olds.
  - **No reduction** in maltreatment at 1 month (IRR 1.46, CI 0.83–2.57). Emotional abuse was *higher* in the intervention arm
    (IRR 2.57), which the authors think may reflect more awareness or different reporting [abstract].
- **Rural China, self-directed online PLH-Young Children with two group discussions** (Wang & Zhang, *Child Abuse Negl* 2026),
  cluster RCT: 191 caregivers in one kindergarten; maltreatment −33% at 2 weeks [abstract]. Small, single site, short follow-up.
- **At scale in eight African countries** (Cluver et al., *BMJ Glob Health* 2026):
  - 123,050 participants, **pre-post with no control group**.
  - Physical abuse −65%, emotional abuse −59%, parenting stress −46% [abstract].
  - Because there is no comparison group, these percentages **must not be quoted** as programme effects.
- **App implication:** confirms that PlayNest's offline-first, practice-a-week design fits where digital parenting is going. It
  also supports the P3 wording fixes to `parenting-pyramid` (§1): results vary by place and format.

**(c) Sugira Muryango, Rwanda (home visiting for families in extreme poverty, children under 3).**
- **Four-year follow-up** (Jensen et al., *BMJ Glob Health* 2025), cluster RCT, 1,009 households (93% retained):
  - Caregivers kept doing more stimulating play (b = 0.53) and used less harsh discipline (b = −0.19).
  - **Fathers were more engaged in play** (b = 0.25).
  - **No effect** on children's cognition, self-regulation or behaviour, and a very small negative association with
    height-for-age [abstract].
- **Scale-up** (Black et al., *JCPP* 2025): hybrid trial of 538 households within a roll-out to 8,745 families, delivered by
  child-protection volunteers:
  - Stimulation d = 0.20.
  - Fathers' involvement in care IRR 1.18.
  - Harsh discipline OR 0.34.
  - Caregiver mental health d = −0.13 [abstract].
- A 2025 PLOS One paper on spillover effects on child temperament was **retracted** in 2025 [abstract: retraction notice
  40638580]. Don't cite it.
- **App implication:** confirms the honest framing in `nurturing-care` ("mixed results for children") and adds fathers' play as a
  realistic change. Supports an update to `dads-non-birth-parents` (§3.5).

**(d) Moments that Matter, Kenya** (Jeong et al., *BMJ Glob Health* 2026), cluster RCT:
- 595 caregiver–child pairs (0–18 months), 46 villages, 18 months of groups and home visits delivered with faith leaders.
- **No overall effect on child development.**
- "Moderate-to-large" effects on caregiver stimulation, harsh discipline, caregiver mental health, social support,
  intimate-partner violence, dietary diversity and fathers' engagement (all reported by mothers) [abstract].
- **App implication:** confirms `nurturing-care`. None.

**(e) Bangladesh, parenting plus cash versus cash alone, 5-year follow-up** (Hossain et al., *J Glob Health* 2026):
- 555 of 599 pairs followed up at ages 6–8.
- **No benefit for IQ** (ES 0.11, CI −0.04 to 0.27).
- Benefits for reading, home stimulation, mothers' knowledge and mothers' depressive symptoms, which the authors call
  "hypothesis-generating" [abstract].
- **App implication:** a reason never to claim that parenting support raises IQ (§5).

**(f) Hope Groups, Ukraine** (Tucker et al., *Lancet Reg Health Eur* 2026), cluster RCT:
- 90 clusters, 510 war-affected or displaced caregivers, 12 group sessions combining mental health, parenting and violence
  prevention.
- Parental depression and anxiety d = −0.86, violence against children d = −0.43, parenting practices d = 0.57.
- Outcomes were measured straight after the sessions, with no longer follow-up [abstract].
- **App implication:** relevant to Iranian families after the 2025 and 2026 conflicts. Supports `weeks-after-hard-times` and
  `when-scary-things-happen`: a parent's own support and calm discipline go together. The guides must name no side, date or place
  (house rule). Possible one-line addition: "In a trial with families living through war, group support for parents eased their
  own worry and low mood and reduced harsh discipline."

**(g) A film for migrant and displaced caregivers from Myanmar in Thailand** (Sim et al., *Lancet Reg Health SE Asia* 2025),
cluster RCT:
- 44 communities, 2,249 caregivers; one 66-minute drama film plus discussion.
- Physical violence fell (IRR 0.91). There was no clear change in psychological violence [abstract].
- **App implication:** a story-based, one-off format had a small population effect. This supports PlayNest's story and script
  approach, but there's nothing to add to the copy.

**(h) Iran**
- **Incredible Years BASIC** (Chahardoli et al., *J Prev* 2025), RCT:
  - 77 mothers of preschoolers with behaviour problems, 15 sessions.
  - Fewer behaviour problems and less stress. The reported effect sizes are implausibly large (for example η²p = .80 for the
    parent–child relationship), which suggests a small, unblinded trial.
  - The process evaluation found **cultural fit challenges**: compatibility with traditional Iranian parenting, "strict rules and
    cultural sensitivities", funding and fidelity [abstract].
- **Care for Child Development, Isfahan, 48 months** (Talebi Anaraki et al., *BMC Pediatr* 2024; already in round 3 notes):
  - 166 analysed.
  - Some behaviour benefits at 36 months; by 48 months only sleep problems differed.
  - The authors call the long-term efficacy "weak" [abstract].
- **App implication:** confirms that Iranian evidence is supportive but low quality (round 3). For the Persian version: tested
  programmes can work in Iran, and **parents found some parts culturally hard**. That supports the house rule of respecting
  family expectations while dropping hitting and shaming. No numbers.

**(i) Other 2024–26 trials and pooled analyses**
- **VIPP-SD (video feedback), England, 6-year follow-up** (Ramchandani et al., *JCPP* 2026), RCT:
  - 300 families with children aged 12–36 months at risk of behaviour problems, 6 home visits.
  - At about age 8, an 86% probability of benefit, d = −0.11: "a small enduring positive impact" [abstract].
  - **App implication:** confirms `what-decades-show` ("short videos with a coach"). None.
- **Parents of under-3s without special difficulties** (Liu et al., *Trauma Violence Abuse* 2026), meta-analysis:
  - 19 trials, 14 meta-analysed.
  - Parenting stress SMD −0.30, self-efficacy +0.61 [abstract].
  - **App implication:** possible new myth in `myths-checked`: "Parenting courses are only for families with problems." Not true.
- **Multi-component parenting plus parental mental-health programmes, first 3 years** (Al Sager et al., *Lancet Child Adolesc
  Health* 2024), meta-analysis:
  - 25 RCTs, 8,520 children and caregivers.
  - Child cognition SMD 0.19, social-emotional 0.26.
  - Mothers' depressive symptoms −0.18, **not significant** [abstract].
  - **App implication:** confirms `nurturing-care`. Don't claim that parenting programmes treat parental depression (§5).
- **Language and literacy, ages 3–7, LMICs** (Cooper et al., *Child Dev* 2026), meta-analysis:
  - 26 studies, 15 countries, 6,264 children.
  - Language g = 1.35, literacy g = 0.94, with substantial heterogeneity and moderate risk of bias.
  - The authors stress uncertainty "concerning the magnitude". Effects were larger with **shared book reading** [abstract].
  - **App implication:** confirms `reading-every-age`. The effect sizes are too uncertain to quote.
- **Dialogic book-sharing starting at 3.5 years, South Africa** (Koopowitz et al., *Compr Psychiatry* 2024), RCT:
  - 122 caregivers.
  - **No differences** in language, executive function or behaviour 4 months later [abstract].
  - **App implication:** an honest caveat: book-sharing training has the clearest results when it starts in infancy. Fits the
    existing callout ("a small, regular habit"). None.
- **Online play-modelling videos, Thailand** (Jongpaiboonpatana et al., *Pediatr Res* 2025), RCT:
  - 112 parents of 12–36-month-olds, a 2–3-minute video a week for 6 weeks.
  - Parent–child play frequency d = 0.38 at 10 weeks. Physical and noisy play rose most [abstract].
  - **App implication:** supports PlayNest's short-format play prompts. Tip only.

### 3.3 Physical punishment: the LMIC evidence gap is now closed

**Cuartas, Gershoff & Bailey, *Nature Human Behaviour* 2025:** pre-registered systematic review and multilevel meta-analysis.
- 189 studies, **1,490 effect sizes, 92 low- and middle-income countries**, searched in six languages.
- Physical punishment was associated with worse mental health, parent–child relationships, substance use, social-emotional
  development, academic outcomes and externalising behaviour.
- "All subgroup estimates were consistent in direction."
- The links were specific to physical punishment and psychological aggression, and were **not** seen for other non-violent
  discipline [abstract].
- Design: observational studies pooled, so these are associations.
- **App implication: update `instead-of-smacking`.** Add after the Gershoff line: "A 2025 review of 189 studies from 92 lower- and
  middle-income countries, where smacking is often common, found the same links, and found them only for hitting and harsh words,
  not for calm, non-violent discipline." Persian: drop "lower- and middle-income countries" if the reviewer feels it implies
  comparison. «در کشورهای زیادی که تنبیه بدنی رایج است» works.

### 3.4 Parental mental health (brief; see note 04 for depth)

- **Prenatal depression and child outcomes** (Hermans et al., *Lancet Reg Health Eur* 2026): individual participant data from
  seven European cohorts, up to **76,514 children**.
  - Linked with higher internalising, externalising, ADHD and autism-symptom scores (6.6 to 10.9 percentile points).
  - Partly mediated by postnatal depression [abstract].
  - Observational.
  - **App implication:** confirms `your-mind-after-birth` ("linked with more difficulties for some children, but this isn't
    inevitable"). Must not be told as blame (§5).
- **Thinking Healthy, peer-delivered, Pakistan, 6-year follow-up** (Frost et al., *Stress Health* 2026):
  - 570 mothers with prenatal depression randomised.
  - Children of treated mothers had hair cortisol closer to children of non-depressed mothers [abstract].
  - **App implication:** none. A biomarker finding, not something parents can act on.
- **Mindfulness-enhanced parenting programmes** (Featherston et al., Cochrane 2024): 11 studies, 2,118 participants, all at unclear
  or high risk of bias.
  - Against standard parent training without mindfulness: "little to no difference" in child adjustment (SMD −0.09) or parenting
    skills, **very low certainty** [abstract].
  - **App implication:** the app should not suggest that mindfulness adds to parenting skills. `running-on-empty` cites small
    burnout trials "some based on mindfulness", which is fine.

### 3.5 Fathers

- **Fathers' perinatal distress and child development** (Le Bas et al., *JAMA Pediatrics* 2025): meta-analysis of 48 cohorts (84
  studies, 674 effect sizes, including 286 unpublished).
  - Fathers' depression, anxiety and stress around the birth were linked with poorer global (r = −0.12), social-emotional (r =
    0.09), cognitive (r = −0.07) and language (r = −0.15) development.
  - Associations were stronger for **postnatal** than antenatal distress [abstract].
  - Small, observational associations.
  - **App implication: update `dads-non-birth-parents`** safety callout. It now says "Partners get low too. Studies suggest about 1
    in 10 fathers have depression around a birth." Add: "A father's low mood after a birth is also linked with small differences
    in children's development, so getting help is good for the whole family." Coordinate with note 04 §3.6 so the two guides say
    the same.
- **Father engagement programme, Rohingya camps and host communities, Bangladesh** (Iqbal et al., *BMC Glob Public Health* 2026),
  cluster RCT:
  - 2,002 fathers of under-3s, a 6-month programme added to a mothers' programme.
  - Fathers' parenting and engagement with the family improved, by father and mother report.
  - **No main effect on directly assessed child development**, and mixed subgroup effects (negative for boys on some
    mother-reported outcomes) [abstract].
- **Fathers attending Incredible Years** (Bachmann et al., 2026, **preprint**): individual participant data from 10 European trials,
  785 families. When fathers attended as well as mothers, there was **no extra benefit** on mother-reported behaviour [abstract,
  preprint].
- **Father involvement and children's social behaviour** (Li & Hao, *Behav Sci* 2026), three-level meta-analysis:
  - 37 studies.
  - r = 0.20 with positive social behaviour, r = −0.09 with negative [abstract].
  - Correlational, in a lower-tier journal.
- **Paternal authoritarian parenting and later cheating, Singapore (GUSTO)** (Yu et al., *Child Dev* 2026):
  - 479 families.
  - Fathers' authoritarian parenting at 4.5 predicted cheating at 6, through children's self-criticism [abstract].
  - Interesting, but a single cohort with a lab measure. Not for the app yet.
- **App implication overall:** programmes can change what fathers do (Rwanda, Bangladesh, Kenya), but proof that this alone changes
  child development is thin. Keep `dads-non-birth-parents` framed as "your bond is built the same way as anyone's", which the
  evidence supports. Don't claim fathers' involvement "boosts development".

### 3.6 Digital and self-directed parenting support

- **Self-directed digital programmes for ages 2–12** (Kuznetsov, 2026, **preprint, single author**):
  - 27 RCT cohorts, 10,157 families.
  - Parent-rated child improvement g = 0.25, and g = 0.21 for purely self-directed programmes.
  - **Independent raters** (teachers, the child, masked video, accelerometers): g = 0.02, null [abstract, preprint].
  - This is a striking result from an unreviewed source; recheck before relying on it.
- **Digital infant-sleep interventions** (Uzdil et al., *J Psychiatr Res* 2025): 4 RCTs, all at high risk of bias.
  - Longest sleep stretch +0.76 h, total night sleep no change.
  - Low certainty [abstract].
- **App implication:** P3 wording fix to `parenting-pyramid` (§1). It also strengthens the case, in CONTENT-GOVERNANCE §11, for a
  pilot that measures more than parents' own ratings. PlayNest must never claim its goals "improve behaviour" (§5).

### 3.7 Cohorts reporting 2024 to 2026

- **JECS, Japan: shared storybook reading** (Nakamura et al., *Pediatr Res* 2026): **36,866** mother–child pairs.
  - Children read to "always" had higher ASQ-3 development scores in all five domains, about **5.5 points** higher at age 3 after
    adjustment for play, media exposure and parents' phone use.
  - Among children below the ASQ cut-off at age 1, continued reading was linked with greater improvement.
  - About a third of families read frequently. The authors state "causality cannot be established" [opened: full text].
  - **App implication: update `reading-every-age`** (or `talk-read-sing`) with one line: "In a study of nearly 37,000 families,
    toddlers who were read to often had higher development scores, even after taking play and screen time into account. It's a
    link, not proof." Persian: drop the country.
- **JECS: fathers' bonding and depression at 1 month** (Nishigori et al., *Infant Ment Health J* 2026):
  - 646 father–child pairs.
  - Fathers' bonding difficulty and depression scores were linked with ASQ delays at 4 [abstract].
  - Small sample, wide confidence intervals. Background only, consistent with Le Bas 2025.
- **GUSTO, Singapore: infant screen time and adolescent anxiety** (Huang et al., *EBioMedicine* 2026):
  - **168 children.**
  - A statistical "serial mediation" path from screen time at 1–2 through brain-network changes (diffusion MRI 4.5–7.5) and
    decision-making at 8.5 to anxiety at 13 (β = 0.033) [abstract].
  - **App implication: none.** Too small and too model-dependent for parents. It is the kind of "screens rewire the brain" headline
    the app must not repeat (§5). `screens-young-children` already gives the honest picture.
- **GUSTO: reading, writing, screens and myopia at 9** (Wu et al., *Acta Ophthalmol* 2026):
  - 471 children.
  - Paper reading and writing at 6 and 9 were linked with myopia; more than 3 hours a day at 9 meant 76% higher odds.
  - **Screen time at all ages was not** [abstract].
  - **App implication:** confirms `healthy-eyes` ("Researchers aren't sure screens are worse than books"). Optional tip.
- **Infant temperament × parenting, four pooled cohorts** (Eves, Nearchou & Wolke, *JCPP* 2025):
  - More than 30,000 children.
  - Infant characteristics and parenting acted **additively** in 10 of 16 tests. Diathesis-stress appeared in 4, vantage
    sensitivity in 2, and **differential susceptibility in 0** [abstract].
  - **App implication:** see P3 #3 (`temperament`).
- **TOPCHILD: parent-focused obesity prevention starting before 12 months** (Hunter et al., *Lancet* 2025):
  - Individual participant data, 17 trials, 9,128 participants.
  - **No effect** on BMI z-score at 24 months (MD −0.01), **high certainty** [abstract].
  - **App implication:** I found no app claim that responsive feeding prevents overweight (grep of guides). Keep it that way (§5).
- **No new 2024–26 results found** from MoBa, ALSPAC, Growing Up in Ireland or LSAC that change parenting advice. MoBa's 2025–26
  output in the search was mostly prenatal exposures and genetics. LSAC: a family-structure and screen-time paper (not opened). A
  targeted search for ABCD sleep or screen papers in JAMA, Lancet or Nature journals returned nothing in the window. Gap: a
  dedicated ABCD search was not done.

### 3.8 Sleep and play

- **Sleep:** nothing from 2024 to 2026 changes `sleep-by-age` or `settling-to-sleep`.
  - Behavioural sleep-duration interventions for children added about **8 to 14 minutes** a night (Decker et al., *Sleep Med Rev*
    2024, 37 interventions) [abstract].
  - The digital infant-sleep review is low certainty (§3.6).
  - **App implication:** none. Supports not promising big sleep gains.
- **Play:** UNICEF 2024 (§3.1c) and the Thai play-video RCT (§3.2i). No 2024–26 meta-analysis of parent–child play was found (a
  title search returned two trials). **App implication:** none beyond a tip.

### 3.9 What "small" means: a summary across the scan

Across the strongest new studies, programmes reliably change **what parents do**: less harsh discipline, more play and talk, more
father involvement, less stress. They change **children's measured development** less often and less reliably: null in Kenya, Rwanda
at 4 years and Bangladesh IQ at 5 years; small in the Lancet CAH 2024 meta-analysis and VIPP-SD at 6 years. This matches what
`nurturing-care` and `what-decades-show` already say, and it is the main reason for the claims in §5.

---

## 4. Where bodies and studies disagree

1. **WHO's universal recommendation versus outcomes at scale.**
   - WHO recommends parenting support for all parents of 2–17-year-olds in LMICs (§3.1a).
   - Several large 2025–26 trials found strong parent effects but **no child-development effect** (Kenya, Rwanda, Bangladesh), and
     one found no maltreatment effect (Thailand).
   - Not a contradiction (WHO's main aims are less maltreatment and better relationships), but the app must say "programmes change
     what parents do; effects on children's development are smaller and less certain".
2. **Pre-post at scale versus RCTs.**
   - PLH in eight African countries reported −65% physical abuse with no control group.
   - RCTs show d ≈ −0.46 falling to −0.18 over two years (Backhaus 2023).
   - Use the RCT picture.
3. **Self-directed digital programmes.**
   - Parent ratings: small benefit. Independent raters: null (preprint).
   - The 2020 meta-analysis the app cites found small-to-moderate effects, mostly parent-rated.
4. **Fathers.**
   - Programmes change fathers' behaviour, and observational links are consistent.
   - But adding fathers to a mothers' programme showed no extra child benefit in one IPD preprint, and mixed child effects in the
     Rohingya trial.
5. **Temperament.** Differential-susceptibility ("orchid") theory versus a 30,000-child replication that rarely found it (§3.7).
6. **WHO parenting guideline strength.** The rating labels were not read. A search summary suggested "(S, M)" markers (strong,
   moderate?) for at least one recommendation [search], but the WHO-INTEGRATE paper says the panel had reservations about "strong".
   **Recheck** before the app says "WHO strongly recommends". Today the app says only "WHO recommends", which is safe.

## 5. Claims the app must NOT make

- "Parenting courses (or PlayNest) raise children's IQ or development." Not shown at scale; Bangladesh IQ null at 5 years.
- "Parenting programmes treat or prevent parents' depression." The Lancet CAH 2024 pooled effect on mothers' depression was not
  significant. Combined programmes like Hope Groups did help, but their design differs.
- Any percentage from the eight-country PLH pre-post study (−65% and so on), or any number from the Caring for the Caregiver pre-post
  evaluation.
- "Screens in infancy change the brain and cause anxiety" (GUSTO, n = 168).
- "Reading every day raises development scores by 5 points." It's an association, and the paper itself says causality can't be
  established.
- "Responsive feeding or parent programmes in infancy prevent obesity." TOPCHILD found high-certainty evidence of no effect at 2.
- "Mindfulness makes parenting skills work better." Cochrane 2024: little or no difference, very low certainty.
- "Sensitive (orchid) children gain most from good parenting."
- "Involving dads doubles the benefit" or "fathers' play boosts development."
- "Smacking is harmful only in Western countries", or the opposite overreach, "smacking causes…". Cuartas 2025 is observational:
  use "linked with".
- "WHO strongly recommends…" until the strength label is read (§4.6).
- Any Iranian maltreatment prevalence figure (Kurdistan n = 135; online COVID survey n = 605). Small convenience samples, and
  quoting them would carry blame (house rule).
- Anything from the retracted Sugira Muryango spillover paper (PLOS One 2025).

## 6. Iran-specific section

- **Ministry of Health parenting-skills programme** [search: provincial operational plans and workshop instructions from Bam,
  Tabriz, Golestan, IUMS and SBMU university health services, 1397–1402; the SBMU and IUMS PDFs downloaded but were unreadable]:
  - The Office of Mental, Social and Addiction Health («دفتر سلامت روانی، اجتماعی و اعتیاد») has a training package for **parents
    of children aged 2 to 12** («بسته آموزش مهارت‌های فرزندپروری برای کودکان ۲ تا ۱۲ سال»), with a workbook and a guide.
  - It is delivered by the **mental-health worker («کارشناس سلامت روان»)** at the **comprehensive health centre («مرکز خدمات جامع
    سلامت»)**, in groups (referred by the «مراقب سلامت») or one-to-one.
  - Related programmes: «نوجوان سالم من» for parents of 12–17-year-olds, and a "parenting in crisis" package («فرزندپروری در
    بحران»).
  - One instruction noted group sessions were disrupted after COVID.
  - **Status in 1405 unknown.** If confirmed, this is the Iranian route for the proposed guide (§7) and for `parenting-pyramid`'s
    safety callout ("ask your doctor or health centre about a parenting programme"). The Persian could then name the mental-health
    worker at the health centre. **Must be confirmed from a readable Ministry or university source, ideally with a phone call to a
    health centre.**
- **Iranian trials (2024–26):**
  - Incredible Years with 77 mothers. Positive, but the effect sizes are implausibly large; parents found parts culturally hard
    (§3.2h).
  - Care for Child Development, Isfahan: weak long-term effects (§3.2h).
  - Backhaus 2023 searched Farsi databases, so Iranian trials are in WHO's evidence base [abstract].
- **Discipline in Iran:**
  - Small studies only: Kurdistan, 135 mothers; an online survey of 605 parents of 6–12-year-olds during COVID reported more
    shouting [abstract]. Not for the app.
  - Iran's 2010 MIDHS included a child-discipline module [recall, unverified: the COVID study used its questionnaire].
  - Iran has no full legal ban (round 3 note 01).
  - The Persian argues from health, and can now say «در کشورهای زیادی که تنبیه بدنی رایج است» (Cuartas 2025).
- **Traditions:** respect for elders and firm family rules fit the evidence (`parenting-pyramid`). The IY Iran process evaluation
  names "strict rules and cultural sensitivities" as a challenge, so Persian copy should keep presenting firm rules as compatible
  with warmth, not as something to give up.
- **War and displacement:** the Ukraine Hope Groups trial (§3.2f) is the closest evidence for families affected by conflict. The
  Persian must not name any country, side or date.

## 7. Recommended new guide (one only)

Only one new guide meets the bar of strong evidence plus no existing guide covering it. Parental low mood is already covered in depth
by `your-mind-after-birth` and note 04. Fathers, reading and smacking are better served by the updates above than by new guides.

### `parenting-courses` — Parenting courses: who they're for and what good ones teach

- **Summary:** Tested courses help ordinary families, not only those in trouble. Here's what a good one includes, and how to find
  one.
- **Age range:** 0–144 months.
- **Shelf:** family.
- **Blocks:**
  1. **p.** Parenting courses have been tested in about 450 trials, over 150 of them in lower- and middle-income countries
     [opened: WHO-INTEGRATE paper]. WHO says courses that teach skills, in groups or one-to-one, should be easy to get for all
     parents, through health, education and social services [opened: WHO slides].
  2. **p.** They aren't only for families with problems. In trials with ordinary families of babies and toddlers, parents felt less
     stressed and more confident afterwards [abstract: Liu 2026].
  3. **table** (head: "What a good course teaches" | "What it looks like at home") [opened: WHO slides, essential components]:
     - Play your child leads, and understanding their feelings | A few minutes a day following their play.
     - Noticing and praising what goes well | "You put your shoes on by yourself!"
     - Clear rules and calm, direct instructions | One short instruction at a time, said as what to do.
     - Calm consequences instead of hitting or shouting | Ignoring small attention-seeking, a short related consequence, a brief
       time-out.
     - Looking after your own calm | Breathing before reacting, solving problems together, supporting each other as parents.
  4. **steps** (titles without full stops):
     - *Look for practice, not lectures* — Good courses have you try each skill with your own child and talk about how it went
       [opened: WHO slides].
     - *Check it rules out hitting and shaming* — Tested courses teach non-violent discipline [opened: WHO slides].
     - *Bring another carer if you can* — Programmes that welcomed fathers saw them play and help more [abstract: Sugira Muryango
       2025, Rohingya trial 2026].
     - *Keep practising after it ends* — In trials, calmer discipline lasted up to two years but grew smaller over time [abstract:
       Backhaus 2023].
  5. **callout science.** Courses reliably change what parents do: less harsh discipline, more play, less stress. Effects on
     children's development are smaller and less certain, and several large trials found none [abstract: Kenya 2026, Rwanda 2025,
     Bangladesh 2026]. Most results are what parents report themselves. We don't yet know which parts matter most, or how well apps
     work compared with a course.
  6. **callout tip.** Learning on your own counts too. PlayNest's goals follow the same order: connection first, one small practice
     a week.
  7. **callout safety.** If behaviour is very hard most days, if your child hurts others or themselves, or if you feel close to
     losing control, ask your doctor or health centre about a course with a trained coach. If you're afraid you might hurt your
     child, make them safe, step away and call someone now (Help).
- **Persian addition, only after §6 is verified:** «در مرکز خدمات جامع سلامت محل زندگی‌تان از مراقب سلامت بپرسید؛ کارشناس سلامت روان
  مرکز ممکن است دورهٔ آموزش فرزندپروری برای والدین کودکان ۲ تا ۱۲ سال برگزار کند.»

## 8. Daily tips (11)

| # | Tip (≤30 words) | Months | Source |
|---|---|---|---|
| 1 | Pick one parenting skill this week and practise it with your child, not just read about it. Tested courses work best when parents practise. | 12–144 | WHO 2023 guideline slides [opened] |
| 2 | Hitting may stop a behaviour for a moment. Studies from many countries where smacking is common link it with more problems later. Calm, small consequences teach more. | 24–144 | Cuartas 2025 [abstract] |
| 3 | In a study of nearly 37,000 families, toddlers read to often had higher development scores. It's a link, not proof, and every story counts. | 6–48 | Nakamura 2026, JECS [opened] |
| 4 | Dads' mood matters too. A father's low mood after a birth is linked with small differences in children's development, so dads deserve check-ins and help. | 0–24 | Le Bas 2025 [abstract] |
| 5 | Parenting courses aren't only for families in trouble. In trials, ordinary parents of babies and toddlers felt less stressed and more confident afterwards. | 0–36 | Liu 2026 [abstract] |
| 6 | Short on time? Noisy games, gentle tickles and rough-and-tumble all count as play. Parents shown short video examples played more with their toddlers. | 12–36 | Jongpaiboonpatana 2025 [abstract] |
| 7 | Learned a calmer way to handle hard moments? Keep using it. In trials, the gains lasted up to two years but slowly got smaller. | 24–144 | Backhaus 2023 [abstract] |
| 8 | Invite your partner to tonight's story or bath. Programmes that welcomed fathers saw them play and help more at home. | 0–60 | Sugira Muryango 2025 [abstract] |
| 9 | Feeling low or stretched makes patience harder. In a trial with families living through war, support for parents' own mood also meant less harsh discipline. | 12–144 | Hope Groups 2026 [abstract] |
| 10 | Long stretches of close-up reading and writing count for eyes too, not just screens. Mix in outdoor time and breaks to look into the distance. | 48–144 | Wu 2026, GUSTO [abstract] |
| 11 | No toys? Pots, cups, boxes and lids are enough. What matters most is you playing and talking together. | 6–36 | UNICEF 2024 [opened]; WHO/UNICEF CCD |

Persian note: tips 2 and 9 must name no country, side or war. Tip 3's "Japanese" is deliberately left out.

## 9. Persian glossary

| English | Persian | Note |
|---|---|---|
| parenting programme or course | دورهٔ آموزش فرزندپروری | as in the Ministry package titles [search] |
| parenting skills | مهارت‌های فرزندپروری | [search] |
| physical punishment | تنبیه بدنی | |
| harsh words, psychological aggression | پرخاشگری کلامی / تنبیه روانی | prefer «حرف‌های تند و تحقیرآمیز» in parent copy |
| non-violent discipline | انضباط بدون خشونت | |
| child-led play | بازی به رهبری کودک | |
| responsive care | مراقبت پاسخگو | |
| nurturing care | مراقبت پرورشی | [recall, unverified]: check the Ministry's term |
| shared book reading | کتاب‌خوانی با کودک | |
| practice (of a skill) | تمرین | |
| mental-health worker | کارشناس سلامت روان | round 5 note 04 [opened] |
| comprehensive health centre | مرکز خدمات جامع سلامت | |
| health carer | مراقب سلامت | |
| fathers' involvement | مشارکت پدران | |
| low mood after a birth (father) | افسردگی پدران پس از تولد فرزند | |

## 10. Recheck before shipping

1. Read the WHO parenting guideline's own recommendation table for **strength and certainty** (try a WHO mirror, the web annex, or
   an institutional download) before any copy says more than "WHO recommends".
2. Confirm the Ministry of Health's parenting-skills programme for parents of 2–12-year-olds is running in 1405. Get a readable
   source (an HTML page, a Word file, or a phone call to a health centre), and check who delivers it and how parents get referred.
3. Open the full text of Cuartas et al. 2025 (*Nat Hum Behav*): confirm whether Iran or Middle East studies are included, and get
   the pooled effect sizes, before saying more than "found the same links".
4. Check whether the Kuznetsov 2026 preprint (§3.6) has been peer reviewed. Until then, P3 #1 rests mainly on the general point
   that the evidence is parent-reported, and the Thai null result.
5. Confirm in the WHO 2025 corporal-punishment report itself that "no study has found positive effects" (currently [search]).
6. Coordinate the fathers' line (§3.5) with note 04 §3.6, so `dads-non-birth-parents` and `your-mind-after-birth` say the same.
7. Check the JECS reading paper's definition of "always" and the exact adjusted figures in the tables, if the 5.5-point figure is
   ever used (recommendation: don't use it).
8. A psychologist should review the new `parenting-courses` guide and the `instead-of-smacking` update. A Persian reader should
   check that «انضباط بدون خشونت» and «مراقبت پرورشی» match Ministry usage.
9. Re-run `content.test.ts` (dose patterns) and `culture.test.ts` (no country names in Persian) after edits.

## 11. Sources

| Title | Publisher | Year | URL | Tag |
|---|---|---|---|---|
| WHO guidelines on parenting interventions to prevent maltreatment and enhance parent–child relationships with children aged 0–17 years | WHO | 2023 | https://www.who.int/publications/i/item/9789240065505 | opened (landing page only) |
| WHO Guideline on parenting interventions (launch webinar slides, A. Butchart) | WHO / ISSUP | 2023 | https://www.issup.net/files/2023-05/Alex%20Butchart%2014%20April%202023%20parenting%20intervention%20webinar%5B15%5D.pdf | opened |
| New WHO guidelines on parenting aim to help prevent child maltreatment (news release) | WHO | 2023 | https://www.who.int/news/item/23-02-2023-new-who-guidelines-on-parenting-aim-to-help-prevent-child-maltreatment-and-enhance--parent-child-relationships | opened |
| Applying the WHO-INTEGRATE framework in the development of WHO guidelines on parenting interventions | Health Res Policy Syst | 2024 | https://doi.org/10.1186/s12961-024-01165-z | opened |
| New report demonstrates that corporal punishment harms children's health | WHO | 2025 | https://www.who.int/news/item/20-08-2025-new-report-demonstrates-that-corporal-punishment-harms-children-s-health | opened |
| Nearly 400 million young children worldwide regularly experience violent discipline at home | UNICEF | 2024 | https://www.unicef.org/press-releases/nearly-400-million-young-children-worldwide-regularly-experience-violent-discipline | opened |
| Global levels and trends in child discipline: 88 countries, 2005–2023 (Egyir et al.) | medRxiv preprint | 2026 | https://doi.org/10.64898/2026.02.13.26346262 | abstract (preprint) |
| Impact of the UNICEF Caring for the Caregiver intervention: six-country pre-post evaluation (Redinger et al.) | Lancet Glob Health | 2026 | https://doi.org/10.1016/s2214-109x(26)00029-x | abstract |
| Immediate or early skin-to-skin contact for mothers and healthy newborns (Moore et al.) | Cochrane | 2025 | https://doi.org/10.1002/14651858.cd003519.pub5 | abstract |
| Effects over time of parenting interventions to reduce physical and emotional violence (Backhaus et al.) | EClinicalMedicine | 2023 | https://doi.org/10.1016/j.eclinm.2023.102003 | abstract |
| A blended digital parenting intervention… Tanzania (Cluver et al.) | Lancet | 2026 | https://doi.org/10.1016/s0140-6736(26)01819-2 | abstract |
| Blended in-person and online parenting programme… rural Thailand (Pongpaew et al.) | Lancet Reg Health SE Asia | 2026 | https://doi.org/10.1016/j.lansea.2026.100789 | abstract |
| Self-directed parenting program… rural China (Wang & Zhang) | Child Abuse Negl | 2026 | https://doi.org/10.1016/j.chiabu.2026.107937 | abstract |
| Are parenting programmes effective at scale? Eight African countries (Cluver et al.) | BMJ Glob Health | 2026 | https://doi.org/10.1136/bmjgh-2025-020422 | abstract |
| Four-year follow-up, Sugira Muryango (Jensen et al.) | BMJ Glob Health | 2025 | https://doi.org/10.1136/bmjgh-2024-017866 | abstract |
| Scaling up home-visiting in Rwanda (Black et al.) | JCPP | 2025 | https://doi.org/10.1111/jcpp.14160 | abstract |
| Moments that Matter, Kenya (Jeong et al.) | BMJ Glob Health | 2026 | https://doi.org/10.1136/bmjgh-2025-023335 | abstract |
| Parenting and cash transfer, urban Bangladesh, 5-year follow-up (Hossain et al.) | J Glob Health | 2026 | https://doi.org/10.7189/jogh.16.04321 | abstract |
| Hope Groups, Ukraine (Tucker et al.) | Lancet Reg Health Eur | 2026 | https://doi.org/10.1016/j.lanepe.2026.101783 | abstract |
| Universal film intervention, Myanmar caregivers (Sim et al.) | Lancet Reg Health SE Asia | 2025 | https://doi.org/10.1016/j.lansea.2024.100526 | abstract |
| Incredible Years BASIC for Iranian mothers (Chahardoli et al.) | J Prev | 2025 | https://doi.org/10.1007/s10935-025-00848-9 | abstract |
| Lasting influence of CCD parenting intervention, Isfahan (Talebi Anaraki et al.) | BMC Pediatr | 2024 | https://doi.org/10.1186/s12887-024-05253-5 | abstract |
| Long-term follow-up of VIPP-SD, Healthy Start Happy Start (Ramchandani et al.) | JCPP | 2026 | https://doi.org/10.1111/jcpp.70037 | abstract |
| Interventions on parenting outcomes in families with children under 3 (Liu et al.) | Trauma Violence Abuse | 2026 | https://doi.org/10.1177/15248380261451785 | abstract |
| Multi-component parenting and parental mental health interventions (Al Sager et al.) | Lancet Child Adolesc Health | 2024 | https://doi.org/10.1016/s2352-4642(24)00134-2 | abstract |
| Parenting interventions for language and literacy, 3–7, LMICs (Cooper et al.) | Child Dev | 2026 | https://doi.org/10.1093/chidev/aacag207 | abstract |
| Dialogic book-sharing in a South African birth cohort (Koopowitz et al.) | Compr Psychiatry | 2024 | https://doi.org/10.1016/j.comppsych.2023.152436 | abstract |
| Online peer-modelling play programme, Thailand (Jongpaiboonpatana et al.) | Pediatr Res | 2025 | https://doi.org/10.1038/s41390-025-03800-z | abstract |
| Physical punishment and lifelong outcomes in LMICs (Cuartas, Gershoff & Bailey) | Nat Hum Behav | 2025 | https://doi.org/10.1038/s41562-025-02164-y | abstract |
| Prenatal maternal depression and child outcomes, IPD of 76,514 children (Hermans et al.) | Lancet Reg Health Eur | 2026 | https://doi.org/10.1016/j.lanepe.2026.101595 | abstract |
| Treating maternal depression and HPA activity, 6-year follow-up, Pakistan (Frost et al.) | Stress Health | 2026 | https://doi.org/10.1002/smi.70239 | abstract |
| Mindfulness-enhanced parenting programmes (Featherston et al.) | Cochrane | 2024 | https://doi.org/10.1002/14651858.cd012445.pub2 | abstract |
| Paternal perinatal depression, anxiety and stress and child development (Le Bas et al.) | JAMA Pediatr | 2025 | https://doi.org/10.1001/jamapediatrics.2025.0880 | abstract |
| Father engagement programme, Cox's Bazar (Iqbal et al.) | BMC Glob Public Health | 2026 | https://doi.org/10.1186/s44263-026-00266-x | abstract |
| Predictors and benefits of fathers' parenting programme attendance (Bachmann et al.) | Research Square preprint | 2026 | https://doi.org/10.21203/rs.3.rs-10832343/v1 | abstract (preprint) |
| Father involvement and children's social behaviour (Li & Hao) | Behav Sci | 2026 | https://doi.org/10.3390/bs16081426 | abstract |
| Authoritarian parenting at 4.5 predicts cheating at 6 (Yu et al.) | Child Dev | 2026 | https://doi.org/10.1093/chidev/aacaf049 | abstract |
| Who reports change? Digital self-directed parenting programmes, ages 2–12 (Kuznetsov) | Research Square preprint | 2026 | https://doi.org/10.21203/rs.3.rs-11739046/v1 | abstract (preprint) |
| Digital behavioural interventions and infant sleep (Uzdil et al.) | J Psychiatr Res | 2025 | https://doi.org/10.1016/j.jpsychires.2025.10.005 | abstract |
| Intervention components in child sleep-duration interventions (Decker et al.) | Sleep Med Rev | 2024 | https://doi.org/10.1016/j.smrv.2024.101995 | abstract |
| Shared storybook reading and child development, JECS (Nakamura et al.) | Pediatr Res | 2026 | https://doi.org/10.1038/s41390-025-04721-7 | opened |
| Paternal bonding failure and depression and neurodevelopment, JECS (Nishigori et al.) | Infant Ment Health J | 2026 | https://doi.org/10.1002/imhj.70082 | abstract |
| Neurobehavioural links from infant screen time to anxiety, GUSTO (Huang et al.) | EBioMedicine | 2026 | https://doi.org/10.1016/j.ebiom.2025.106093 | abstract |
| Reading, writing, screen time and myopia at 9, GUSTO (Wu et al.) | Acta Ophthalmol | 2026 | https://doi.org/10.1111/aos.70009 | abstract |
| Infant characteristics × parenting rarely replicate (Eves, Nearchou & Wolke) | JCPP | 2025 | https://doi.org/10.1111/jcpp.14149 | abstract |
| TOPCHILD: parent-focused obesity prevention, IPD (Hunter et al.) | Lancet | 2025 | https://doi.org/10.1016/s0140-6736(25)01144-4 | abstract |
| Retraction: Sugira Muryango spillover on temperament | PLOS One | 2025 | Europe PMC 40638580 | abstract (notice) |
| Changes in child discipline strategies in Iran during COVID-19 (Farahzadi et al.) | J Sch Nurs | 2023 | https://doi.org/10.1177/10598405221114398 | abstract |
| Child maltreatment among mothers, Kurdistan, Iran (Khazaei et al.) | Int J Psychiatry Med | 2023 | https://doi.org/10.1177/00912174231163740 | abstract |
| Iranian MoH parenting-skills package for parents of 2–12-year-olds (provincial plans and instructions) | Bam, Tabriz, Golestan, IUMS, SBMU universities of medical sciences | 1397–1402 | https://health.sbmu.ac.ir/uploads/22/2023/Jun/03/ (workshop instruction PDF, unreadable) | search |

## 12. Ranked: the five most valuable additions or changes

1. **Update `instead-of-smacking`** with the 2025 review of 189 studies from 92 lower- and middle-income countries (§3.3), and
   cite WHO's 2025 report. It answers the question Iranian parents most often raise, "is this only true in the West?", from health
   evidence, not law.
2. **New guide `parenting-courses`** (§7). WHO's components in parent language, honest about modest effects. Once §6 is verified,
   it gives the Persian version a concrete route to the Ministry's parenting-skills course at the health centre, a strong link to
   the national system for endorsement.
3. **Honesty edits to `parenting-pyramid`** (P3 #1 and #2): self-directed learning helps mostly by parents' own report, and
   programmes don't work everywhere. These protect PlayNest's credibility with health-system reviewers.
4. **Fathers' mood and involvement:** add the JAMA Pediatrics 2025 line to `dads-non-birth-parents`, aligned with note 04, plus tip
   8 on inviting a partner into play.
5. **Add the §5 guardrails to REVIEW-1.5.md** as a checklist for reviewers. The biggest risks from 2024–26 headlines are no IQ
   or obesity-prevention claims, no "screens rewire the brain", no pre-post percentages and no orchid claims. Smaller extras: the
   JECS reading line in `reading-every-age`, and a new myth in `myths-checked` ("courses are only for families with problems";
   Liu 2026).
