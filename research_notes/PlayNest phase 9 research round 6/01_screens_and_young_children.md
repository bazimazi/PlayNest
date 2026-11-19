# 01: Screens with babies and young children (0 to 8 years): what helps

Research notes for PlayNest phase 9, round 6. Researched 17 Nov 2026.

## Scope and house rules

**What these notes cover.** The evidence and practical advice needed for a new guide, working title **"Screens with babies and young children: what helps"**, plus 12 to 16 daily tips. The topic is screens for children aged 0 to 8, with most weight on 0 to 5.

**What they don't re-research.** The existing `screens` guide (src/data/guides.ts) already has the limits table (WHO, England, Sweden, Norway, Spain, Canada), the January 2026 AAP statement and the Mallawaarachchi 2024 meta-analysis. I read it, along with:
- `phone-and-presence` (guides-you.ts)
- `video-games` (guides-learning.ts)
- `first-phone` and `ai-chatbots-toys` (guides-more.ts)
- the `screen-off-meltdown` coach card (coach.ts)
- the screen-related goals (goals.ts) and tips (tips*.ts)

I only re-checked the limits where something has changed (see §13).

**House rules applied throughout:**
- Teach, don't diagnose.
- No doses of anything.
- Red flags always go to a professional.
- Where bodies disagree, say so and take the cautious path.
- Keep associations and trial results apart, and give honest effect sizes.
- No guilt.
- Respect tradition, give no religious rulings and stay politically neutral.
- Persian copy may adapt for Iran.

## How to read these notes

| Tag | Meaning |
|---|---|
| **[opened]** | I opened the page, PDF or full text myself this session. |
| **[abstract]** | I read the abstract myself, through the Europe PMC REST API. Full text not read unless stated. |
| **[search]** | Search-engine snippet or secondary summary only. **Recheck before shipping.** |
| **[recall, unverified]** | Background knowledge I did not re-check this session. |

**Evidence words** (as in earlier rounds):
- **Strong:** replicated RCTs or meta-analyses of RCTs.
- **Moderate:** several good cohorts or small RCTs.
- **Weak:** single or cross-sectional studies.
- **Contested:** good studies disagree.

**Access problems this round:**
- **HUS (Helsinki University Hospital) Persian-language leaflet** on screen time and language development (`production.hus-ref.prod.gc.hus.fi/...Persia (farsi)...opas.pdf`): the connection failed (curl returned 000). Not read. It is worth a manual look, because it is ready-made Persian patient copy from a Nordic health body.
- **Mares & Pan 2013 PDF** (documentcloud): the server returned HTML, not the PDF. The meta-analysis is [search] only.
- **Canadian Paediatric Society position statement "Screen time and young children"** (cps.ca): the page now shows **"Statement Retired"** [opened]. The CPS parent handout on Caring for Kids, dated March 2025, still gives under-5 advice. My fetch could only see a saved copy, so its live status is unconfirmed [opened, cached].
- **vch.ca** (Vancouver Coastal Health; one result looked like a Farsi handout): 403.
- **behdasht.gov.ir:** two searches, one in Persian and one naming the site, found **no Ministry of Health page with screen advice for young children**. I did not browse the site's child-health (کودک سالم) pages directly. This is a gap.
- **Not indexed in Europe PMC:**
  - Hiniker 2016 (CHI), [search]
  - Kearney & Levine 2019 (AEJ Applied), covered from the AEA interview page [opened] and a search
  - Hirsh-Pasek 2015 (PSPI), [recall]; its four pillars are confirmed via Meyer 2021 [abstract]
- **Takahashi 2023:** the Europe PMC abstract is garbled (the "<" signs are stripped). I read the **full text** through the Europe PMC fullTextXML (PMC10442786) [opened].
- **Budget:** about 15 web searches, plus roughly 10 page or PDF fetches and many Europe PMC API calls.

---

## 1. What the developmental evidence actually shows

### 1.1 Madigan et al. 2019, JAMA Pediatrics (Canada): screen time, then later developmental screening

Source: [abstract], PMID 30688984.

**Design:**
- 2,441 mother–child pairs from the All Our Families cohort in Calgary.
- Measured at 24, 36 and 60 months.
- Exposure: mother-reported total screen hours per week.
- Outcome: the Ages & Stages Questionnaire (ASQ-3), a **screening** tool filled in by mothers. It is not a diagnosis.

**Results:**
- The analysis was a random-intercept cross-lagged panel model, which separates stable differences between families from changes within a child.
- More screen time at 24 months predicted lower ASQ scores at 36 months: **β −0.06** (95% CI −0.10 to −0.01).
- More screen time at 36 months predicted lower scores at 60 months: **β −0.08** (−0.13 to −0.02).
- My recollection is that the reverse path (poorer development predicting more screen time later) was not significant in this sample [recall, unverified]. The abstract only says the results "support the directional association".

**Honest reading:**
- These are **very small** standardised effects.
- Both the exposure and the outcome were reported by the same parent.
- It is a cohort, not a trial. The within-person model strengthens the case for direction but cannot rule out time-varying confounders such as family stress, illness or a new sibling.

**Evidence:** moderate for a small association with a plausible direction.

### 1.2 Takahashi et al. 2023, JAMA Pediatrics (Japan): screen time at 1 year, then delays at 2 and 4

Source: [opened], full text PMC10442786.

**Design:**
- 7,097 mother–child pairs from the Tohoku Medical Megabank cohort.
- Screen time at age 1 in four bands:
  - under 1 hour: 48.5%
  - 1 to under 2 hours: 29.5%
  - 2 to under 4 hours: 17.9%
  - 4 hours or more: 4.1%
- "Delay" meant an ASQ-3 domain score more than 2 SD below the mean.

**Results at age 2** (odds ratios versus under 1 hour a day):

| Domain | 1 to under 2 h | 2 to under 4 h | 4 h or more |
|---|---|---|---|
| Communication | 1.61 (1.23–2.10) | 2.04 (1.52–2.74) | 4.78 (3.24–7.06) |
| Problem-solving | — | 1.40 (1.02–1.92) | 2.67 (1.72–4.14) |
| Fine motor | — | — | 1.74 (1.09–2.79) |
| Personal-social | — | — | 2.10 (1.39–3.18) |

**Results at age 4:**
- Communication: 1.64 (1.20–2.25) at 2 to under 4 hours, and 2.68 (1.68–4.27) at 4 hours or more.
- Problem-solving: 1.91 (1.17–3.14) at 4 hours or more.

**Caveats:**
- These are **relative** odds of a screening flag, not a diagnosis. The absolute numbers are small because few children are flagged at all.
- The authors note that the ASQ "is not a diagnostic tool".
- They could not separate educational screen time from other screen time.
- It is observational. The largest effects are in the 4% of children who had 4 hours or more a day.
- The clearest pattern is the dose–response in communication.

**Copy direction:** "In a large Japanese study, one-year-olds who had more screen time were more likely to be flagged for slower talking at 2 and 4. The link was strongest in the small group watching 4 hours or more a day. It's a link, not proof that screens caused it."

### 1.3 Brushe et al. 2024, JAMA Pediatrics (Australia, LENA recorders): screen time and fewer conversational turns

Source: [abstract], PMID 38436942.

**Design:**
- 220 families. Children wore LENA audio recorders for an average 16-hour day at 12, 18, 24, 30 and 36 months.
- Screen time was coded from the recorded "electronic noise", so it was not parent-reported.

**Result:**
- More screen time went with fewer adult words, fewer child vocalisations and fewer conversational turns.
- The largest effect was at 36 months. **Each extra minute of screen time** went with:
  - 6.6 fewer adult words (95% CI −11.7 to −1.5)
  - 4.9 fewer child vocalisations (−6.1 to −3.7)
  - 1.1 fewer conversational turns (−1.4 to −0.8)
- The authors frame this as "technoference".

**Companion paper:** Brushe 2023, *SSM Population Health* [abstract].
- Objectively measured screen exposure averaged **1 h 16 min a day at 6 months** and **2 h 28 min at 24 months**.
- Children of more highly educated mothers had about **1 h 43 min less** a day.

**Older evidence:** Christakis et al. 2009 (*Archives of Pediatrics & Adolescent Medicine*, LENA, 329 children aged 2 to 48 months) [abstract]. Each hour of audible TV went with:
- about **636 fewer adult female words** (CI −812 to −460)
- fewer child vocalisations (z −0.26)
- fewer conversational turns (z −0.22)

**Why it matters for copy:** this is the most concrete version of the **displacement** explanation. Talk is what builds language, and a TV that is on, even in the background, means less of it. It remains observational: families with the TV on more may differ in other ways.

### 1.4 Madigan et al. 2020, JAMA Pediatrics: meta-analysis of screen use and language

Source: [abstract], PMID 32202633.

42 studies, 18,905 children aged 12 or under. Effects are correlations (r):

| Exposure | Number of studies | r (95% CI) | Direction |
|---|---|---|---|
| Screen time | 38 | −0.14 (−0.18 to −0.10) | worse language |
| Background TV | 5 | −0.19 (−0.33 to −0.05) | worse language |
| Educational programmes | 13 | +0.13 (0.02 to 0.24) | better language |
| Co-viewing | 12 | +0.16 (0.07 to 0.24) | better language |
| Later age of first screen use | 4 | +0.17 (0.07 to 0.27) | better language |

All of these are **small** correlations. Most of the studies were cross-sectional. **Quality and context matter about as much as quantity.**

### 1.5 2025–2026 syntheses (newer than the existing guide)

- **UK Early Years Screen Time Advisory Group (EYSTAG) report, 27 March 2026** [opened, full PDF]. This is the evidence base behind England's under-5 guidance. Key points:
  - **How it was done:** a rapid review of 63 systematic reviews in 10 weeks. The authors say it was "not exhaustive" and did not formally assess quality.
  - **On the evidence:** most included studies were cross-sectional. Harms were "predominantly small". A "small number of complex longitudinal studies" (Madigan 2019; Gath 2026; Neville 2021 and 2026) "allow us to conclude that higher levels of screen use **may** causally negatively influence later development".
  - **On reverse causation:** "causality might run the other way… Few studies considered this possibility."
  - **No safe number:** "None of the literature we identified provided convincing evidence for specific thresholds."
  - **On short periods:** "we found no convincing evidence that short periods of screen use, of up to 30 minutes, were in and of themselves harmful for young children aged two and over", provided bedtime, meals and fast-paced or inappropriate content are avoided. It also says there is "little evidence of harm with screen use below one hour a day for children aged two and over".
  - **Basis of the recommendations:** the panel says its recommendations are "**not based directly on evidence** but… on knowledge of child development", and that it took a **precautionary** approach.
  - **Thresholds in new cohorts** (cited in the report; I did not open the papers):
    - Gath et al. 2026 (Growing Up in New Zealand): problems rose above about 1.5 hours a day at age 2.
    - Fish et al. 2026: poorer language at age 2 appeared above about 86 minutes a day.
    - Campbell & Cooper 2026 (England): at 9 months, up to 2 hours of screens went with **no less** reading, and more pretend play and singing. Above 3 hours, these activities were lower.
  - **Theories with no convincing evidence:** EYSTAG found "no convincing evidence" for harm from electromagnetic radiation, or from **blue light** on sleep, in young children. This matters for Iran (§10).
- **Panayotova & Yakabova 2026** (*Healthcare*, systematic review of 43 studies, ages 2 to 5) [abstract]:
  - Greater exposure is generally associated with poorer language, especially expressive language.
  - Findings for working memory, flexibility and general cognition are "more heterogeneous".
  - Passive, background, solo and "highly stimulating entertainment" use were more often the problem.
- **Alghadier et al. 2026** (scoping review of 27 studies, 0 to 5, with a Middle East focus) [abstract]: content quality, context and caregiver co-use "consistently modified" the associations.
- **Liu et al. 2025** (*Reviews on Environmental Health*, 10 studies) [abstract]: an association between screens and autism. This is cross-sectional or case-control evidence, very open to reverse causation and confounding. See §11, claims not to make.

### 1.6 Displacement and reverse causation: the two explanations to teach

**Displacement** (moderate support):
- Screens may matter less for what is on them than for what they push out: talk (Brushe, Christakis), play, sleep (§6) and movement.
- In a Danish cohort, Rasmussen et al. 2026 [abstract] found each hour of screens went with only **3.1 fewer minutes a day** of non-sedentary time cross-sectionally, and **no** prospective association. So the movement-displacement effect is small.

**Reverse causation** (real, and under-studied):
- **Danet et al. 2022** (*Acta Paediatrica*, 368 children aged 3 to 4) [abstract]: children with **weaker executive functioning were more likely to be given devices to calm down**.
- **Fitzpatrick et al. 2024** (JAMA Pediatrics, 315 children, Canada) [abstract]. This was a cycle:
  - 1 SD more tablet use at 3.5 years (about 1.2 h/day) predicted 0.22 SD more anger and frustration at 4.5.
  - 1 SD more anger at 4.5 predicted 0.22 SD more tablet use at 5.5.
- **Geusens et al. 2026** (*Child Abuse & Neglect*, meta-analysis of 13 studies, n = 9,603) [abstract]: **maternal perinatal depression** was associated with more child screen exposure (OR 1.50, 95% CI 1.24–1.81). The authors flag heterogeneity and publication bias.
  - **Use for the app:** frame this as "struggling parents need support", never "screens = neglect". The paper itself uses a neglect frame; do not import it.
- **Takeaway for copy:** a child who is already struggling, or a parent who is exhausted, can lead to more screens, as well as the other way round. That is a reason for support, not blame.

**Overall evidence verdict:** moderate evidence of **small** associations between more screen time (especially solo, background or adult-content use) and poorer language and cognitive scores in under-5s. A causal role is plausible and partly supported by within-person cohort designs. Size is uncertain, and reverse causation is real. Context (co-use, content, timing) changes the picture as much as minutes do.

---

## 2. Video chat is different

- **Roseberry, Hirsh-Pasek & Golinkoff 2014** (*Child Development*) [abstract]:
  - 36 toddlers aged 24 to 30 months.
  - They learned new verbs from **live interaction and video chat**, but **not** from a pre-recorded (yoked) video of the same session.
  - The key ingredient is **social contingency**: a partner who responds to the child.
- **Myers et al. 2017** (*Developmental Science*, "Baby FaceTime") [abstract]:
  - Children aged 12 to 25 months.
  - After a week of real-time FaceTime, they recognised and preferred their on-screen partner and learned more patterns. The oldest learned more words.
  - The pre-recorded video group did not.
- **Roche et al. 2026** (*Infancy*, 47 parent–infant–grandparent triads) [abstract]: when **both** caregivers (the one on screen and the one in the room) were sensitive to the baby, babies were in calmer, more positive states. Joint attention across the screen did not improve.
  - **Practical point:** the parent in the room is part of the call. Holding the baby, pointing and repeating what the grandparent says helps.
- **Every body that ranks under-2 screen use makes video chat the exception:**
  - England's Best Start in Life, 29 June 2026 [opened]: "video calling friends and family and looking through digital photo albums together".
  - The EYSTAG report [opened]: video calls, family photos, and e-books read with a parent.
  - CPS Caring for Kids (March 2025) [opened, cached]: "the exception is video chatting with caring adults, such as extended family".
- **Evidence:** moderate. These are small lab RCTs, and the learning measures are short-term. They do not show that video chat *builds* development, only that babies can learn and connect through it in ways they can't from video.
- **Iran:** very relevant, because many Iranian families have relatives abroad or in other cities (§10).

---

## 3. Background TV

- **Kirkorian et al. 2009** (*Child Development*) [abstract]:
  - 51 children aged 12, 24 and 36 months, each with a parent, in a living-room-style lab.
  - During half an hour with an adult TV programme on in the background, **both the quantity and quality of parent–child interaction fell**.
  - This was an experiment (within-family), so the drop in interaction is causal **in that setting**. It is a small, short lab study.
- **Christakis 2009** (§1.3): each hour of audible TV went with fewer adult words.
- **Meta-analyses:**
  - Madigan 2020: background TV r −0.19 with language.
  - Mallawaarachchi 2024: background TV r −0.10 with cognitive outcomes (from the abstract, re-opened this session to confirm the existing guide).
- **Evidence:** moderate. Experimental evidence for reduced interaction, plus consistent small associations with language.
- **Copy direction:** "TV on in the background, even when no one's watching, means fewer words between you and your child. If nobody's watching, switch it off." This is low-cost, unambiguous advice.

---

## 4. Learning from screens: co-viewing, quality TV, apps and the video deficit

### 4.1 Co-viewing and talking about content

- **Effect sizes:**
  - Madigan 2020: co-viewing r +0.16 with language.
  - Mallawaarachchi 2024: co-use r +0.14 with cognitive outcomes.
  - Both are associations. Parents who co-view may differ in other ways.
- **EYSTAG** [opened] defines co-viewing as more than sitting together: "adults talking, responding to children's interests, asking questions, taking turns, and engaging with the content". It suggests treating it "like how you read a book with your child".
- **Caveat:** EYSTAG notes that co-viewing "may be the most difficult for time-poor working parents". Don't make it a guilt item.

### 4.2 Quality educational TV for preschoolers

- **Kearney & Levine 2019** (*AEJ: Applied Economics* 11(1):318–50) [opened AEA interview; search for the abstract]:
  - A natural experiment. Whether a 1969 US county could receive *Sesame Street* depended on UHF versus VHF broadcast technology.
  - Children in high-coverage areas were **about 16% less likely to fall behind their grade** in elementary and middle school. The effect was larger for boys and Black non-Hispanic children.
  - Long-term education and earnings effects were imprecise.
  - **Caveats:** this measured *access*, not viewing ("We don't know who actually watched the show"). Kearney doubts any single show would have such an effect today. She also warns against seeing TV as a replacement for preschool.
- **Mares & Pan 2013** (*Journal of Applied Developmental Psychology*, 24 studies, more than 10,000 children in 15 countries) [search]:
  - International *Sesame Street* co-productions had positive effects on literacy and numeracy, world knowledge, and social reasoning and attitudes.
  - My recollection is an overall effect of about **d 0.29** [recall, unverified]. Recheck the number before quoting.
- **AAP HealthyChildren, 5 Cs page for toddlers and preschoolers** (updated April 2024) [opened]:
  - It names PBS KIDS, *Sesame Street*, *Blue's Clues* and *Daniel Tiger's Neighborhood* as quality shows.
  - It advises keeping YouTube cartoons and influencer content "to a minimum", making a playlist, and "**turn off autoplay**".
- **Evidence:** moderate for well-designed educational TV aged at **preschoolers (about 3 to 5)**. Not for babies.

### 4.3 The video deficit and transfer

- **Strouse & Samson 2021** (*Child Development* meta-analysis, 59 reports, 122 effect sizes, ages 0 to 6) [abstract]:
  - Children learn less from video than from face-to-face teaching: an average deficit of **about half a standard deviation**, which **shrinks with age**.
  - It was largest for object-retrieval tasks.
  - The authors flag quality and publication-bias issues that may overestimate the deficit.
- **Touchscreens:** some small studies suggest that interactive or touch features narrow the deficit for 2- to 3-year-olds, but transfer from 2D to the real world remains harder under about 3 [recall, unverified, e.g. Huber et al. 2016; Moser et al. 2015].
- **E-books:** Munzer et al. 2019 (*Pediatrics*) found parents and toddlers talked less, and less richly, over electronic books than print books [recall, unverified]. EYSTAG still lists e-books read **with** a parent as acceptable for under-2s.
- **Copy direction:** "Under about 3, children learn much more from people than from screens. If they meet something on a screen, link it to real life."

### 4.4 Apps

- **Hirsh-Pasek et al. 2015** (*Psychological Science in the Public Interest*), "Putting education in 'educational' apps" [recall]. It sets out four pillars of learning: **active** (minds-on, not just tapping), **engaged** (not distracted by bells and whistles), **meaningful** (linked to the child's life) and **socially interactive**.
- **Meyer et al. 2021** (*Journal of Children and Media*) [abstract]:
  - Applied the four pillars to the 100 most-downloaded "educational" apps plus 24 apps preschoolers actually used.
  - **Overall scores were low** across all pillars.
  - Free apps scored lower on engagement because of "distracting enhancements".
- **Evidence:** the pillars are expert consensus from learning science, not a validated app-rating tool with outcome data. Present them as "what to look for", not as a guarantee.

---

## 5. Fast-paced content and short-form video: be honest about how weak this is

- **Lillard & Peterson 2011** (*Pediatrics*) [abstract]:
  - 60 four-year-olds watched 9 minutes of a fast-paced fantastical cartoon (SpongeBob), an educational cartoon, or drew.
  - Afterwards the fast-paced group did worse on executive-function tasks.
  - This was a small single study measuring the **immediate** effect.
- **Replications and the 2025 meta-analysis.** Hinten, Scarf & Imuta 2025 (*Developmental Science*) [abstract]:
  - **Pace:** 19 studies, 141 effect sizes, ages 1.5 to 10. **No effect** on attention or executive function immediately after viewing: d −0.12 (95% CI −0.33 to 0.09), p 0.23.
  - **Fantasy** (impossible events): 16 studies, ages 1.5 to 6. A **small short-term negative effect**: d −0.24 (−0.44 to −0.05).
  - Prediction intervals were very wide for both (pace −1.10 to 0.85), meaning effects vary from negative to positive depending on the study.
  - My recollection is that Lillard's own 2015 follow-ups also pointed to fantasy rather than pace [recall, unverified].
- **Lillard 2026 commentary and Hinten & Imuta's reply** (*Developmental Science*) [abstract]: both now explain the effect as fantasy overloading children's processing. These are theory pieces.
- **Arian Namazi, Sadeghi & Kiani 2026** (*Scientific Reports*, **Iranian** study, 65 children aged 5 to 7, eye-tracking) [abstract]: high- versus low-fantasy programmes showed **no** immediate effect on inhibitory control or attention. Bayesian analysis supported the null. The authors call into question "the universality of the fantasy deficit".
- **Short-form video in young children.** I found **no** study in under-8s.
  - The only systematic review, Ebster et al. 2026 (*European Child & Adolescent Psychiatry*, 42 studies) [abstract], had a **mean participant age of 16.8**.
  - 88% of its studies were cross-sectional.
  - It found associations of heavy use with inattention and impulsivity.
  - Mechanistic "dopamine" reviews (e.g. Fang & Chen 2026, *Translational Psychiatry*) [abstract] are explicitly speculative: "direct causal neurobiological data remain absent".
- **What the bodies say anyway:**
  - EYSTAG [opened]: "Evidence is limited, so a **precautionary approach** suggests avoiding short-form videos and fast-paced content". It also says the evidence that such content harms attention "remains mixed… and any observed negative effect is small".
  - Best Start in Life [opened]: choose "slow-paced, predictable content", and avoid "fast-paced, over-stimulating, social media-style videos".
- **Content young children actually see.** Henderson et al. 2024 (*Frontiers in Developmental Psychology*, 426 YouTube videos watched by 47 children aged 0 to 35 months) [abstract]:
  - Only **19% were age-appropriate** and 27% slow-paced.
  - 27% contained physical violence and 48% consumerism.
  - **Babies under 12 months saw more** age-inappropriate and violent content than toddlers.

**Honest verdict:**
- **Pace by itself:** the evidence for short-term harm is weak, and the meta-analysis is null.
- **Fantasy:** a small, short-lived effect, contested.
- **Short-form or endless video in young children:** no direct evidence. The case for caution rests on (a) the content children actually get served (Henderson), (b) autoplay and endless feeds making it harder to stop (AAP 2026), and (c) precaution.

**Copy direction:** "Experts suggest calm, slower shows and avoiding endless short clips. Research hasn't shown that fast pacing by itself harms attention, but slower shows are easier for young children to follow. Endless feeds are also built to be hard to stop."

---

## 6. Screens as a soother, sleep, meals, ads and purchases

### 6.1 Screens to calm children

- **Radesky et al. 2023** (JAMA Pediatrics) [abstract]:
  - 422 US children aged 3 to 5, measured three times over 6 months.
  - Among **boys**, more device use for calming predicted higher **emotional reactivity** 3 months later (r 0.20, CI 0.10–0.30).
  - Among children with high-surgency temperaments, the link ran **both ways** (0.11 and 0.13).
  - The authors suggest frequent device calming "may displace" chances to learn other regulation strategies.
  - **Caveats:** a convenience sample (74% White, 60% college-educated), parent report, and modest effects.
- **Supporting evidence:** Danet 2022 (§1.6, reverse direction) and Fitzpatrick 2024 (a two-way cycle).
- **Bodies:**
  - AAP 5 Cs [opened]: "try not to distract them with a device any time they're upset or bored". Keep screens for regular times "or when you're on a long car/bus/plane ride".
  - CPS Caring for Kids [opened, cached]: repeated use means "your child won't learn how to self-soothe without them".
- **Copy direction (no guilt):** "Using a screen to calm things down now and then is normal. If it becomes the main way, children get less practice at calming in other ways. Try comfort and naming the feeling first, and keep the screen as a backup."

### 6.2 Sleep

- **Janssen et al. 2020** (*Sleep Medicine Reviews*, 31 papers, under-5s) [abstract]:
  - Screen time was associated with poorer sleep. The meta-analysis confirmed this in infants and toddlers, but not preschoolers.
  - **Quality of evidence: very low.** The strongest evidence was for daily and **evening** use in toddlers and preschoolers.
- **Cheung et al. 2017** (*Scientific Reports*, 715 parents of children aged 6 to 36 months) [abstract]:
  - Touchscreen use was associated with shorter night and day sleep and longer time to fall asleep.
  - My recollection is about 15.6 minutes less sleep per hour of touchscreen use [recall, unverified].
- **EYSTAG** [opened]: "relatively consistent but low-quality evidence" of shorter sleep. It cites trial evidence that reducing screen time "slightly improves sleep duration" (Martin et al. 2020; not opened). Effects in the early years appear weaker than in older children.
- **Iran:** Alavi et al. 2026 (*BMC Pediatrics*, 358 Iranian parents of children aged 0 to 36 months, Persian BISQ-R) [abstract] found **screen use before bedtime** was among the modifiable factors associated with poorer parent-reported sleep quality.
- **Evidence:** moderate for a link with later, shorter sleep. Weak to moderate that cutting back helps.

### 6.3 Meals

- **Lutz et al. 2024** (*Academic Pediatrics*, 532 two-year-olds, mostly low-income US families) [abstract]:
  - 25% had the TV "usually on" at meals.
  - Those toddlers had higher odds of sugary drinks (aOR 3.72), fast food (2.83) and more junk food (4.25).
  - Cross-sectional, so confounding is likely.
- **Jusienė et al. 2019** (Lithuania, 847 children aged 2 to 5) [abstract]:
  - 22% used screens daily or at every meal.
  - Mealtime screens went with more total screen time, junk food and emotional or behavioural problems.
  - **First-time parents** were more likely to use them.
- **Masztalerz-Kozubek 2024** (Poland, toddlers) [abstract]: a distracted mealtime environment went with a "non-eaters" pattern.
- **Litterbach et al. 2023** (Australia, qualitative, two papers) [abstract]:
  - Mothers often used screens at meals to manage behaviour or to get the child to eat.
  - When they co-designed and tried strategies (changing where the meal happens, modelling), the change was "easier, more beneficial… than anticipated", but needed effort at first. Effort fell with consistency.
- **Evidence:** consistent but cross-sectional links with less healthy eating. There is no trial in young children showing developmental benefit. Screen-free meals are recommended by nearly every body (Best Start, AAP, Iranian university guide).

### 6.4 Advertising, autoplay and in-app purchases

- **Meyer et al. 2019** (JDBP, 135 apps played by or marketed to children 5 and under) [abstract]:
  - **95% contained advertising.** This included pop-up video ads (35%), in-app purchases (30%), ads to unlock items (16%), and hidden or camouflaged ads (7%).
  - Apps labelled "educational" had **as many** ads as others.
- **EYSTAG** [opened]: "children under five years are not generally able to distinguish advertising from other content". There is "clear evidence that advertising influences food choices and intake" in under-12s.
- **AAP January 2026 statement** (HealthyChildren news page, 20 January 2026) [opened]:
  - It asks companies for safety defaults, including **turning off autoplay** and no targeted advertising to minors, and fewer designs that prolong engagement.
  - It lists "calm or self-regulation" as one of the 5 Cs.
- **Iran:** Amini et al. 2026 (*International Journal of Preventive Medicine*) [abstract]:
  - 761 adverts aimed at children on Iranian TV Channel 2 in 2020. Food made up 41.7%, and 46% of those were desserts and sweets.
  - Animated characters were the most common strategy.
  - Most complied with Iranian rules but **not** with WHO EMRO or INFORMAS standards.

---

## 7. Cutting back or changing habits: what's tested

**Meta-analyses of interventions:**
- **Chandrasekaran et al. 2026** (*Obesity Reviews*, 65 RCTs, ages 0 to 5) [abstract]:
  - Interventions reduced screen time with a **small** effect (g 0.16, 95% CI 0.01–0.31).
  - 62% met their own reduction targets.
  - More successful features: delivery in **healthcare** settings, and caregivers as the sole recipients.
- **Machell et al. 2026** (*IJBNPA*, 10 RCTs of parent-focused interventions, under-6s) [abstract]:
  - Screen time fell (ES −0.92).
  - Social-emotional problems fell (ES −0.32), and so did externalising behaviour (−0.31).
  - Theory-based programmes using established behaviour-change techniques did better.
  - Few trials targeted **content or timing** rather than minutes. Evidence on sleep, cognition and motor skills was thin.
- **Schmidt-Persson et al. 2024** (JAMA Network Open, secondary analysis of the Danish SCREENS cluster RCT) [abstract]:
  - 89 families, 181 children (mean age about 9). Whole families cut leisure screens to 3 hours a **week** or less for 2 weeks.
  - Total difficulties scores improved (−1.67; Cohen's d 0.53), mainly through internalising symptoms and prosocial behaviour.
  - **Caveats:** parents reported the outcomes and were not blinded, the follow-up was short, the reduction was extreme, and children were older than our core range. It is the best **causal** evidence that cutting screens can change behaviour, but it doesn't translate directly to toddlers.
- **EYSTAG §H** [opened]: interventions reduce screen time somewhat, but "**none have looked at impacts on child development**" (the panel's statement; Machell 2026 partly fills this). It also notes "children use screens less when their parents are more confident in their parenting" (Lee 2020; Pyne 2025).
  - **Use for the app:** build parent confidence; don't scold.

**Family media plan:**
- Recommended by the AAP (2026), with its online tool [opened, via the news page].
- No trial shows the plan **by itself** works [recall: none found]. The existing `first-phone` guide already says this honestly.

**Transitions (ending screen time):**
- **Hiniker et al. 2016** (CHI; 27 families interviewed plus a 2-week diary study, ages 1 to 5) [search]:
  - Most endings were calm: 59% neutral, 19% positive, 22% negative.
  - Endings were easier when part of a **routine**.
  - Endings **caused by technology** (the video ended, no Wi-Fi) were easier than parent-imposed ones.
  - **Advance warnings were associated with *more* upset, not less.**
  - **Caveats:** a small, non-random diary study. Warnings may simply be used more when parents expect trouble (reverse causation). So "warnings make it worse" is not proven, but "warnings prevent meltdowns" is not supported either.
- **Hiniker et al. 2017**, "Plan & Play" [recall, unverified]: preschoolers who planned their own app session in advance transitioned away more easily.
- **AAP 5 Cs** [opened]: regular times of day. AAP resource-hub videos mention "timers and fun transitions" [search].
- **Practical synthesis:** end at a natural stop (end of an episode); have the next thing ready; make screen time predictable (same times); let the device or timer end it rather than an argument. Present warnings as optional and individual: "some children do better with a heads-up, others with none; notice which helps yours".

**Long trips:**
- AAP 5 Cs [opened]: long car, bus or plane rides are a reasonable time for screens.
- There is no research on the best strategy. The advice is common sense: songs and games first, screens for the long middle stretch, headphones, no screens for the driver's attention, and a downloaded playlist rather than autoplay.

**When a parent needs a break:**
- **EYSTAG** [opened]:
  - "screens are often used to occupy a young child whilst the parent completes an essential task" (quoting a single mum cooking dinner).
  - Short periods, "such as 30 minutes", of passive watching "appear unlikely to be a source of harm".
  - "parents… wanted guidance that was clear, evidence-based and **non-judgemental**… acknowledge that screen use is normal".
- **Copy direction:** "Using a show so you can cook, shower or rest is normal. Choose the show beforehand, keep it calm, keep it away from meals and bedtime, and don't feel guilty."

---

## 8. The `screen-off-meltdown` coach card and screen goals (checked)

**The coach card is well aligned with the evidence:**
- few words, out of sight, offer a better next thing
- don't give it back to stop crying
- no rules lecture mid-meltdown
- adults model the same rules
- a help line if meltdowns happen nearly every time

Possible small additions, if the owner wants them:
- (a) Under "later", add: "Make screen time predictable (same times, same ending), and let the end of the episode or a timer end it."
- (b) The 60 to 95 month band's "Let's set a timer together next time" fits Hiniker (technology-mediated endings were easier). Keep it.

**Flag (overstated), goals.ts:**
- Line 241, goal `screens-off`: "A warning before they go off helps avoid meltdowns."
- Line 616, goal `switch-off`: try, "Give a warning before screens end…"
- Line 617, goal `switch-off`: plan, "I'll give a five-minute warning".
- Line 619, goal `switch-off`, `why` field: "Warnings and something to move on to help avoid meltdowns."

The only study I found on screen transitions in 1- to 5-year-olds (Hiniker 2016) linked warnings with **more** upset. It is weak evidence either way.

**Suggested rewording:**
- "Finishing at a natural stop, with something to move on to, tends to make endings easier. Some children like a heads-up and others do better without one, so notice what helps yours."
- Keep "Use a timer the child can see, so the timer ends it, not you." That matches the finding that technology-mediated endings go better.

---

## 9. Red flags (always to a professional)

The guide must not let parents blame screens for, or wait on, possible developmental problems. Standard language red flags, phrased to match the app's existing milestones and speech content [recall, unverified; align with the app's `milestones.ts` and speech guides rather than new numbers]:
- not responding to their name or sounds
- no babbling or pointing by around 12 months
- no words by around 16 to 18 months
- not joining two words by about 2 years
- **any loss of words or skills at any age**
- parents' worry about hearing, eye contact or play

**Copy direction:** "If you're worried about your child's talking, hearing or play, see your doctor or health worker. Don't wait to see whether cutting screens fixes it. Cutting back is fine to do as well, but it isn't a test."

---

## 10. Iran

- **Prevalence:**
  - **SUNRISE Iran pilot** (Zarghani et al. 2024, *Child: Care, Health and Development*; 83 children aged 3 to 4 in preschools and health centres, 2022) [abstract]: **only 19.3% met the WHO screen-time recommendation**, and only 4.8% met all the 24-hour movement guidelines. A small feasibility sample, not nationally representative.
  - **Kerman** (274 preschoolers): 76.4% used digital media more than 2 hours a day [search, not opened; recheck].
  - **CASPIAN-IV** (national survey, ages 6 to 18): 33.4% watched more than 2 hours of TV or video a day on school days and 53% in holidays [search]. Older children.
  - **Gap:** no nationally representative preschool screen-time study found.
- **Links found in Iranian studies (all cross-sectional and low quality):**
  - **Karbasi Amel et al. 2025** (*Journal of Comprehensive Pediatrics*, Isfahan, 192 children aged 18 to 36 months) [opened]:
    - Screen time was 3.1 h/day in children flagged for speech delay versus 1.8 h/day in others. Adjusted OR 1.90 (1.50–2.40) per unit of screen time.
    - **Quality problems:** 60% of the sample were flagged as "speech delay" (an implausible rate, suggesting a loose ASQ cutoff or selection). The group counts in a table don't add up. The abstract's claim about early exposure contradicts its own table.
    - **Do not cite it in copy.**
  - **Fadaei et al. 2024** (*Journal of Paramedical Sciences & Rehabilitation*, Tehran health centres, 306 children aged 18 to 30 months) [opened]: reports associations, but the statistics are inconsistent. Not usable.
  - **Alavi et al. 2026** (§6.2): bedtime screen use linked with poorer sleep in Iranian 0- to 3-year-olds [abstract]. **Usable**, with association wording.
  - **Arian Namazi et al. 2026** (§5): an Iranian experiment that did **not** find the fantasy-TV effect [abstract].
- **Advice from Iranian bodies:**
  - **Ministry of Health:** no screen guidance for young children found (gap; browse behdasht.gov.ir child-health pages manually).
  - **Iranian Pediatric Society:** not found (not specifically searched; gap).
  - **University guide** (hosted on shmu.ac.ir; authors S.M.J. Mortazavi et al., Ionizing and Non-ionizing Radiation Protection Research Center) [opened PDF]:
    - Under 2: no screens except **short video calls with family**.
    - 2 to 5 (the table text is garbled; probably 2 to 5): at most 1 hour a day of educational content **with a parent**.
    - Older children: preferably under 2 hours of leisure screens.
    - No screens in bedrooms, and stop some minutes before sleep (the number is garbled in extraction, "۰۹"; probably 60 or 90).
    - It also centres **blue light and melatonin**, citing mainly the authors' own adult studies, and lists anxiety, obesity and "behavioural dependence".
    - **Caution:** EYSTAG found "no convincing evidence" for blue-light or radiation harms in young children. Use the guide's age advice (which matches WHO), **not** its blue-light rationale.
  - **Alaghband Rad et al. 2025** (*Iranian Journal of Psychiatry*) [abstract]: a culturally adapted 12-chapter parenting package on digital technology for Iranian parents (ages 0 to 18), content-validated with Iranian parents but **not yet tested**. Worth contacting for alignment.
- **Household patterns** (TV on during meals; phones to make babies eat):
  - **No Iranian study found** in two searches (English and Persian). This is a gap; do not assert prevalence.
  - International evidence (Litterbach, Jusienė) shows the pattern is common elsewhere, and more common among first-time parents.
  - In copy, describe it as "common in many countries", not as an Iranian habit.
- **Iranian TV advertising:** Amini 2026 (§6.4). Children's TV breaks carry many sweets and snack adverts using cartoon characters.
- **Persian media coverage, July 2026:** Euronews Persian reported a review by four UK universities (Leeds, Leeds Trinity, Aston, Loughborough), **commissioned by the 1001 Critical Days foundation** [opened news page; review not opened]. It recommends under-2s have **no deliberate, regular** screen exposure, and that guidance recommending shared screen use for under-2s be reviewed.
  - This may reach Iranian parents. It conflicts with England's official guidance (shared bonding activities allowed).
  - It was commissioned by an advocacy foundation, so treat it as opinion until the review itself is read.

---

## 11. Where bodies disagree

| Issue | Position A | Position B | Cautious path for the app |
|---|---|---|---|
| Under-2s: any screens? | WHO (none for 1-year-olds; under 1 "not recommended"); Sweden, Norway draft, Spain (none; Spain to 6, except brief video contact). July 2026 UK university review: no deliberate regular exposure, and reconsider shared screen use | England (Mar/Jun 2026), EYSTAG, CPS handout: allow **shared** activities (video calls, family photos, e-books with a parent) | Video calls and family photos with you are fine. Avoid sit-and-watch shows under 2. |
| Is there a safe amount at 2 to 5? | WHO, England, Sweden: about 1 hour, "less is better" | EYSTAG: no evidence for any threshold; about 30 minutes at a time and about 1 hour a day appear low-risk. AAP 2026: no number | Up to about 1 hour, in short chunks, away from meals and bedtime. Say plainly that the number is expert judgement. |
| Fast-paced content | EYSTAG and Best Start: avoid it (precautionary) | Hinten 2025 meta-analysis: no short-term effect of pace; fantasy has a small effect | Recommend calmer shows, honestly framed as easier to follow and less "sticky", not as brain-damaging. |
| Warnings before screens end | Common advice and the app's goals: warnings help | Hiniker 2016: warnings associated with more upset | Natural stops plus routines plus something next; warnings optional. |
| Blue light and radiation | Iranian university guide (Mortazavi): blue light and melatonin are a central harm | EYSTAG: no convincing evidence in young children | Protect the hour before bed because of displacement and arousal; don't cite blue light. |
| Canada | CPS 2017 under-5 statement (on CPS's site now: "Statement Retired") | CPS Caring for Kids handout (Mar 2025) still gives under-5 advice | Cite the handout, or drop Canada's under-5 cell; recheck. |
| Co-viewing under 2 | EYSTAG and England: shared screen use under 2 can support bonding | July 2026 UK university review (1001 Critical Days): reconsider shared screen use under 2 | Video calls only, as the clearest consensus; e-books and photos "with you" as optional. |

---

## 12. App takeaways

### A) Recommended outline: new guide "Screens with babies and young children: what helps"

- **Proposed slug:** `screens-young-children`
- **Ages:** 0 to 96 months, with most content for 0 to 60
- **Topic:** `screens`
- **Reading time:** about 4 minutes
- **Refs:**
  - EYSTAG 2026
  - Best Start in Life (June 2026)
  - AAP 5 Cs for toddlers and preschoolers
  - Madigan 2020
  - Takahashi 2023
  - Brushe 2024
  - Radesky 2023
  - Hinten 2025
  - Roseberry 2014 / Myers 2017
  - Kirkorian 2009
  - Meyer 2019
  - Chandrasekaran 2026 or Machell 2026
- **Link to:**
  - `screens` (limits table)
  - `phone-and-presence`
  - coach card `screen-off-meltdown`
  - the milestones and speech guides

**Sections and copy direction:**

1. **Opening paragraph.** "Screens are part of family life. This isn't about zero. It's about which uses help, which to keep away from meals and bedtime, and what to do when you need a break." Include one line pointing to the limits table in `screens`.

2. **What research shows, honestly** (table):

   | What studies found | Kind of study | How big | What it means for you |
   |---|---|---|---|
   | More screen time at 1 to 3 years goes with slightly lower development and language scores later | Large cohorts (Canada, Japan) and meta-analyses | Small. Clearest in children with many hours a day | Protect talk and play time |
   | TV on means fewer words between parent and child | Audio-recorder studies; a lab experiment | Each extra minute of screen time went with about 1 fewer back-and-forth turn at age 3 | Switch off background TV |
   | Watching together and talking about it goes with better language and thinking | Meta-analyses | Small, positive | Watch together when you can |
   | Good preschool TV (e.g. *Sesame Street*) helped school readiness | Natural experiment; meta-analysis | Modest | For 3 to 5s, not babies |
   | Video calls: toddlers learned from a live, responsive person on screen, not from a recording | Small experiments | Short-term learning | Video calls with family are fine |

3. **Science callout** (association versus cause, and reverse causation): "Most of this research shows links, not causes. It can work both ways: children who find calming down harder are often given screens more, and parents who are exhausted or low use screens more. That's a reason for support, not blame."

4. **The screen uses experts are happiest with** (list):
   - video calls with family, with you joining in
   - looking at family photos or videos together
   - a book on a screen read *with* you
   - for 3 to 5s, a calm, good-quality show you watch and talk about

5. **Choosing what they watch** (list):
   - calm, slower shows, clear talk, simple stories
   - no ads, autoplay off, a playlist you choose
   - avoid endless short clips
   - apps that get them thinking, talking and creating, not tapping for prizes
   - in-app purchases off

   Include a short honest note that pace alone hasn't been shown to harm attention (see C).

6. **Keep screens out of these times:** meals, the hour before bed and bedrooms, and background TV when no one's watching. Draw on the mealtime swaps from Best Start: music, chat, I spy.

7. **When a screen calms things down:** normal sometimes. Try comfort and naming the feeling first, so the skill gets practice. Link to calm-down content.

8. **Making switching off easier** (steps):
   - predictable times
   - natural stops
   - something good next
   - the device or a timer ends it
   - warnings optional, depending on the child

   Link to the coach card.

9. **Long trips and when you need a break:** non-judgemental, with practical tips (choose the show beforehand, a downloaded playlist, headphones, songs and games first).

10. **Safety callout (red flags):** "Worried about talking, hearing, eye contact or play, or your child has lost words or skills? See your doctor or health worker. Don't wait to see whether cutting back on screens helps." Content safety: parental controls; violent or adult content is not for young children (Mallawaarachchi: age-inappropriate content r −0.11 with psychosocial outcomes).

11. **"What we don't know" box:**
    - Whether screens *cause* the small differences seen, and how much.
    - Whether there's any safe or unsafe number of minutes; current numbers are expert judgement.
    - Whether fast-paced or short-form video harms young children's attention; no studies in under-8s yet.
    - Whether educational apps help babies and toddlers learn; under about 3, learning from screens is weaker.
    - Whether cutting back improves development in young children; trials show screen time can be reduced, with early signs of fewer behaviour problems.

12. **Tip callout:** "Notice one screen moment this week you could swap for talk or play. Just one."

**Existing `screens` guide updates** (see §13): England ref date, the Canada cell, and optionally a line on the July 2026 UK review as a sign of disagreement.

### B) Daily tips (16; each 30 words or fewer, word count in brackets)

| # | Ages (months) | Tip | Basis |
|---|---|---|---|
| 1 | 0–23 | Video calls with family are the screen use experts are happiest with for babies. Hold your baby on your lap, wave, point and chat so they can join in. (29) | Best Start, EYSTAG, Roseberry/Myers, Roche 2026 |
| 2 | 0–60 | If nobody is watching, switch the TV off. Background TV means fewer words between you and your child, even when no one seems to be listening. (26) | Kirkorian 2009, Christakis 2009, Madigan 2020 |
| 3 | 6–72 | Try a meal with the TV off and phones away. Name the food, copy their faces, chat. It can feel harder at first, and usually gets easier. (27) | Litterbach 2023, Best Start |
| 4 | 24–96 | Watching together? Pause now and then: "What do you think happens next?" Talking about a show, the way you would a book, helps children get more from it. (28) | EYSTAG, Madigan 2020, Mallawaarachchi 2024 |
| 5 | 24–72 | Pick calm shows with clear talk, simple stories and few sudden cuts. Endless short clips and noisy, fast videos are what experts are most cautious about. (26) | EYSTAG, Best Start (precautionary) |
| 6 | 12–96 | Turn off autoplay and choose the next video yourself, or make a short playlist. Then screen time ends when your plan says, not when the app decides. (27) | AAP 5 Cs, AAP 2026 |
| 7 | 24–96 | Stop at a natural end, like the end of an episode, and have the next thing ready. Screen endings that are part of a routine usually go more smoothly. (29) | Hiniker 2016 |
| 8 | 12–72 | A screen can calm a child fast, and sometimes that's fine. Most of the time, try a hug, a drink or naming the feeling first, so calming skills get practice. (30) | Radesky 2023, AAP 5 Cs |
| 9 | 12–96 | Need 20 minutes to cook or rest? A calm show you chose beforehand is a reasonable tool. Keep it away from meals and bedtime, and skip the guilt. (28) | EYSTAG (30 minutes unlikely harmful, aged 2+) |
| 10 | 24–96 | Before your child plays a "free" app, look for adverts and in-app purchases. Turn purchases off or set them to need your password. (23) | Meyer 2019 |
| 11 | 12–36 | Under about 3, children learn far more from you than from a screen. If they meet a word in a show, use it in real life: "Look, a real duck!" (30) | Strouse & Samson 2021 |
| 12 | 24–96 | Long journey? Start with songs, I spy and snacks, and save the tablet for the long middle stretch. Screens on a long trip are fine; bring headphones. (27) | AAP 5 Cs (long rides) |
| 13 | 0–60 | Feeling low or worn out? Leaning on screens more is common when parents are struggling. Tell your doctor or health worker; your wellbeing matters too. (25) | Geusens 2026 |
| 14 | 36–96 | Good apps get children thinking, talking and making things, not just tapping for prizes. Fewer pop-ups and rewards usually means more real learning. (23) | Hirsh-Pasek 2015, Meyer 2021 |
| 15 | 18–96 | Decide screen times ahead, like "one show after nap", rather than in the moment. When screens come at predictable times, there are usually fewer battles. (25) | Hiniker 2016, AAP 5 Cs |
| 16 | 12–23 | Swap the evening cartoon for a story or a song. Screens in the evening are linked with later bedtimes and shorter sleep in toddlers. (24) | Janssen 2020, Alavi 2026 |

**Notes on the tips:**
- Tip 9 starts at 12 months, but EYSTAG's 30-minute statement is for **2 and over**. Narrow it to 24–96 if the owner prefers the strictest reading.
- Tip 16 complements, rather than duplicates, the existing `screens-off-bedtime` tip (24–144).
- None duplicates the existing tips: `screens-under-2`, `screens-2-5`, `co-view`, `eat-together`, `phone-down`, `media-plan`, `hard-news-off`.

### C) Claims the app must NOT make

1. "Screens cause autism", or "virtual autism". The evidence is associations, with likely reverse causation.
2. "Screens cause speech delay or ADHD." Say instead: "linked with slightly lower language scores".
3. Any **specific threshold as proven** ("over 1 hour harms the brain"; "under 30 minutes is safe"). Thresholds are expert judgement.
4. "Fast-paced cartoons damage attention or executive function." The 2025 meta-analysis found no effect of pace. Don't name specific shows as harmful.
5. "Short videos rewire young children's brains", or dopamine claims. There are no studies in under-8s, and mechanistic papers are speculative.
6. Blue light from screens damages young children's eyes or sleep hormones; radiation from phones harms children. EYSTAG: no convincing evidence.
7. "Babies learn nothing from screens." There is a video deficit, not zero learning, and video chat shows learning.
8. Educational apps or videos make babies smarter or "get them ahead".
9. *Sesame Street* or educational TV "replaces preschool" or "boosts IQ".
10. "Warnings before turning off screens prevent meltdowns." Not supported (see §8; the goals.ts wording needs softening).
11. "Using screens to calm your child harms them." Effects are small and two-way; say "may mean less practice".
12. Anything framing heavy screen use as **neglect**, or linking it to bad parenting.
13. "90% of the brain develops by 5" as a scare line. Best Start uses it, but it refers to brain size and invites guilt.
14. Prevalence claims about Iranian families (e.g. "most Iranian parents feed babies with a phone"). Not studied.
15. Absolute risk language from the Takahashi odds ratios ("4.8 times more likely to be delayed"). Without the base rates it misleads.

### D) Iran and Persian adaptations

- **Video calls:**
  - Lead the under-2 section with video calls with grandparents and relatives abroad or in other cities. This is a common, positive Iranian use, and every body allows it.
  - Persian: تماس تصویری با مادربزرگ و پدربزرگ.
  - Tip: hold the baby, repeat and point.
- **Meals:**
  - Frame screen-free meals around **sofreh** and family meals (سفره), without implying Iranian families do it badly.
  - Phones-to-get-babies-to-eat is common worldwide; offer the no-guilt swap (talk, copy faces, small portions) and link to the app's feeding guides.
- **Grandparent and relative carers:** EYSTAG parents asked for help keeping rules consistent across family members. Suggest a short "family agreement" line in Persian that grandparents can see.
- **Iranian children's TV:**
  - Iranian children's TV can carry many sweets and snack adverts (Amini 2026).
  - Suggest recorded or downloaded programmes, or ad-free children's slots, without naming or criticising broadcasters (political neutrality).
  - Persian content: point to calm, slower Persian-language children's programmes **only if** the owner can vet them. We have not evaluated specific Iranian shows.
- **Iranian evidence to cite:**
  - SUNRISE Iran pilot: about 1 in 5 three- and four-year-olds met the WHO screen guideline; a small sample.
  - Alavi 2026: bedtime screens linked with poorer sleep in Iranian toddlers.
  - **Do not cite** Karbasi Amel 2025 or Fadaei 2024 (quality problems).
- **Authority:**
  - No Ministry of Health guidance was found. Say "WHO advice, which Iranian health services follow" **only if** confirmed (gap).
  - Otherwise use WHO and note that an Iranian university of medical sciences guide gives the same ages and limits (shmu.ac.ir, Mortazavi et al.), without its blue-light rationale.
- **Parental controls:** many families use connection tools that can bypass app or router settings. Write neutrally: "check that parental settings still work on every app and connection your family uses". No comment on filtering policy.
- **Language:**
  - "صفحه‌نمایش" for screen.
  - "پخش خودکار" for autoplay (check how Persian-language apps label it).
  - "خرید درون‌برنامه‌ای" for in-app purchases.

### E) Gaps

- Iranian Ministry of Health and Iranian Pediatric Society screen guidance: not found. Browse behdasht.gov.ir and the IPS site manually.
- Mealtime screen use, and phones used for feeding, in Iran: no study found. Magiran and SID were not searched directly.
- No nationally representative screen-time data for Iranian under-5s.
- Short-form video in under-8s: no research at all.
- Interventions on content or timing rather than minutes: very few trials (Machell 2026).
- Transition strategies: only small HCI studies (Hiniker); no trials.
- Children with developmental differences: EYSTAG notes assistive tech is exempt from limits. Not researched here; see the guides-differences content.
- HUS Persian leaflet, Mares & Pan full text, and the EYSTAG methodology annex: not read.

---

## 13. Claims in the existing `screens` guide that may be outdated

1. **England ref date.** The ref says "Best Start in Life, England (27 March 2026)". The page now shows "**Last updated: 29 June 2026**" [opened]. The content matches the table row, so only the date needs refreshing. Optionally add the underlying EYSTAG report (27 March 2026) as the evidence ref.
2. **Canada, under-5 cell** ("Covered in separate advice"). The CPS position statement "Screen time and young children" now displays "**Statement Retired**" on cps.ca [opened]. The Caring for Kids parent handout (March 2025) still advises:
   - no screens under 2 except video chat
   - about 1 hour or less a day at 2 to 5
   - no screens for 1 hour before bed

   [opened, cached copy]. Recheck which is current, then either cite the handout or say "Canada's paediatric society retired its under-5 statement; its parent handout advises…".
3. **New dissent worth a line.** In July 2026, a UK university review commissioned by the 1001 Critical Days foundation called for no deliberate, regular screen exposure under 2, and for review of advice allowing shared screen use. This is not official guidance [opened news page only].
4. **Science callout:** it is still accurate. I re-checked the Mallawaarachchi 2024 abstract: co-use r +0.14 with cognitive outcomes; background TV r −0.10; caregiver screen use during routines r −0.11 with psychosocial outcomes. Optionally add: "In 2026, England's expert panel found no proven safe or unsafe number of minutes."
5. **"What nearly everyone agrees on"** remains accurate. Optionally add "Choose calm, slower content and turn off autoplay"; Best Start, EYSTAG and AAP all now say some version of this.
6. **Not re-checked this round:** the Norway draft (June 2025; may now be final), Spain, Sweden and France rows.
7. **Goals, not the guide:** goals.ts lines 241, 616–617 and 619 overstate warnings (§8).

---

## 14. Recheck before shipping

- [ ] Best Start in Life page: still "29 June 2026", and same wording on video calls and the 1-hour figure.
- [ ] CPS: is "Screen time and young children" retired, and is there a replacement? Is the Caring for Kids handout live?
- [ ] Mares & Pan 2013 effect size (I recall d ≈ 0.29), if quoted.
- [ ] Kearney & Levine wording: "about 16% less likely to fall behind a grade". Check against the published abstract or tables.
- [ ] Hiniker 2016 figures (59/19/22%; warnings) against the CHI paper.
- [ ] Cheung 2017 "15.6 minutes per hour" if quoted (recall only).
- [ ] The Madigan 2019 reverse path (development to later screen time) being non-significant (recall only).
- [ ] The Kerman 76.4% and CASPIAN-IV figures (search only).
- [ ] Identity and text of the July 2026 UK review (1001 Critical Days); read the review, not just the news.
- [ ] The shmu.ac.ir guide's garbled numbers (the minutes before sleep; the 2 to 5 band) and its hosting institution.
- [ ] Whether Norway's screen advice is now final (was a June 2025 draft).
- [ ] Red-flag ages in §9: align with the app's existing milestones and speech content.
- [ ] Gath 2026, Fish 2026 and Campbell & Cooper 2026 thresholds: read via the EYSTAG report only. Open the papers before quoting numbers.

---

## 15. Sources

### Official and expert bodies

- Early Years Screen Time Advisory Group (EYSTAG). *Report on screen use by children aged under 5*. DfE/DHSC, 27 March 2026. https://assets.publishing.service.gov.uk/media/69c53daf4a06660f085442a7/EYSTAG_report.pdf [opened, full PDF]. Landing page: https://www.gov.uk/government/publications/screen-use-by-children-aged-under-5 [search]
- Best Start in Life (England). *Baby and toddler screen time guidance*. Last updated 29 June 2026. https://www.beststartinlife.gov.uk/screen-time-under-5s [opened]
- AAP / HealthyChildren. *Creating a child-friendly digital world: AAP releases new media recommendations*. 20 January 2026. https://www.healthychildren.org/English/news/Pages/creating-a-child-friendly-digital-world-AAP-releases-new-media-recommendations.aspx [opened]
- AAP / HealthyChildren. *Kids & Screen Time: 5 C's Questions for Toddlers & Preschoolers*. Updated 30 April 2024. https://www.healthychildren.org/English/family-life/Media/Pages/kids-and-screen-time-5-cs-questions-for-toddlers-and-preschoolers.aspx [opened]
- AAP 5 Cs resource hub. https://www.aap.org/5Cs [search]
- Canadian Paediatric Society. *Screen time and young children*, position statement page now marked "Statement Retired". https://cps.ca/en/documents/position/screen-time-and-young-children [opened]
- CPS Caring for Kids. *Screen time and young children*. March 2025. https://caringforkids.cps.ca/handouts/behavior-and-development/screen-time-and-young-children [opened, cached copy]
- Mortazavi SMJ et al. راهنمای کاهش زمان استفاده از تلفن همراه و تبلت در کودکان (Ionizing and Non-ionizing Radiation Protection Research Center), PDF hosted on shmu.ac.ir. https://shmu.ac.ir/file/download/news/1778302270-69febd3e6ba8d-.pdf [opened]
- Euronews Persian. *Babies should not use screens at all in the first two years, a major review finds*. 2 July 2026. https://parsi.euronews.com/2026/07/02/babies-should-not-use-screens-at-all-in-the-first-two-years-a-major-review-finds [opened]
- AEA Research Highlights. *Sesame Street's impact on early childhood education* (interview with Melissa Kearney). https://www.aeaweb.org/research/sesame-street-television-impact-early-childhood-education-melissa-kearney-interview [opened]

### Studies and reviews

- Madigan S, Browne D, Racine N, Mori C, Tough S. Association between screen time and children's performance on a developmental screening test. *JAMA Pediatrics* 2019. doi:10.1001/jamapediatrics.2018.5056 [abstract]
- Takahashi I et al. Screen time at age 1 year and communication and problem-solving developmental delay at 2 and 4 years. *JAMA Pediatrics* 2023. doi:10.1001/jamapediatrics.2023.3057; PMC10442786 [opened, full text]
- Brushe ME, Haag DG, Melhuish EC, Reilly S, Gregory T. Screen time and parent–child talk when children are aged 12 to 36 months. *JAMA Pediatrics* 2024. doi:10.1001/jamapediatrics.2023.6790 [abstract]
- Brushe ME et al. Objectively measured infant and toddler screen time. *SSM Population Health* 2023. doi:10.1016/j.ssmph.2023.101395 [abstract]
- Madigan S, McArthur BA, Anhorn C, Eirich R, Christakis DA. Associations between screen use and child language skills: a systematic review and meta-analysis. *JAMA Pediatrics* 2020. doi:10.1001/jamapediatrics.2020.0327 [abstract]
- Mallawaarachchi S et al. Early childhood screen use contexts and cognitive and psychosocial outcomes: a meta-analysis. *JAMA Pediatrics* 2024 [abstract, re-checked]
- Christakis DA et al. Audible television and decreased adult words, infant vocalizations, and conversational turns. *Archives of Pediatrics & Adolescent Medicine* 2009. doi:10.1001/archpediatrics.2009.61 [abstract]
- Kirkorian HL, Pempek TA, Murphy LA, Schmidt ME, Anderson DR. The impact of background television on parent–child interaction. *Child Development* 2009. doi:10.1111/j.1467-8624.2009.01337.x [abstract]
- Roseberry S, Hirsh-Pasek K, Golinkoff RM. Skype me! Socially contingent interactions help toddlers learn language. *Child Development* 2014. doi:10.1111/cdev.12166 [abstract]
- Myers LJ, LeWitt RB, Gallo RE, Maselli NM. Baby FaceTime: can toddlers learn from online video chat? *Developmental Science* 2017. doi:10.1111/desc.12430 [abstract]
- Roche EC et al. Mutual sensitivity between caregivers predicts infant affective state during video chat. *Infancy* 2026. doi:10.1111/infa.70068 [abstract]
- Strouse GA, Samson JE. Learning from video: a meta-analysis of the video deficit in children ages 0 to 6 years. *Child Development* 2021. doi:10.1111/cdev.13429 [abstract]
- Kearney MS, Levine PB. Early childhood education by television: lessons from Sesame Street. *AEJ: Applied Economics* 2019;11(1):318–50. doi:10.1257/app.20170300 [search, plus opened AEA interview]
- Mares ML, Pan Z. Effects of Sesame Street: a meta-analysis of children's learning in 15 countries. *Journal of Applied Developmental Psychology* 2013;34(3):140–151 [search]
- Hirsh-Pasek K et al. Putting education in "educational" apps. *Psychological Science in the Public Interest* 2015 [recall, unverified]
- Meyer M et al. How educational are "educational" apps for young children? *Journal of Children and Media* 2021. doi:10.1080/17482798.2021.1882516 [abstract]
- Lillard AS, Peterson J. The immediate impact of different types of television on young children's executive function. *Pediatrics* 2011. doi:10.1542/peds.2010-1919 [abstract]
- Hinten AE, Scarf D, Imuta K. Meta-analytic review of the short-term effects of media exposure on children's attention and executive functions. *Developmental Science* 2025. doi:10.1111/desc.70069 [abstract]
- Lillard AS. Why does fantasy in screen media deplete children's executive function? *Developmental Science* 2026. doi:10.1111/desc.70143 [abstract]; Hinten AE, Imuta K, reply, *Developmental Science* 2026. doi:10.1111/desc.70177 [abstract]
- Arian Namazi S, Sadeghi S, Kiani M. An eye tracking examination of fantasy television's immediate influence on children's executive functions. *Scientific Reports* 2026. doi:10.1038/s41598-026-54794-5 [abstract]
- Ebster M et al. Short-form videos, digital routines and neurocognitive outcomes in youth: a systematic review. *European Child & Adolescent Psychiatry* 2026. doi:10.1007/s00787-026-03083-7 [abstract]
- Fang S, Chen S. Algorithmic loops and the developing brain (narrative review). *Translational Psychiatry* 2026. doi:10.1038/s41398-026-04340-8 [abstract]
- Henderson D et al. YouTube for young children: what are infants and toddlers watching? *Frontiers in Developmental Psychology* 2024. doi:10.3389/fdpys.2024.1335922 [abstract]
- Radesky JS, Kaciroti N, Weeks HM, Schaller A, Miller AL. Longitudinal associations between use of mobile devices for calming and emotional reactivity and executive functioning in children aged 3 to 5 years. *JAMA Pediatrics* 2023. doi:10.1001/jamapediatrics.2022.4793 [abstract]
- Danet M et al. Children aged 3–4 years were more likely to be given mobile devices for calming purposes if they had weaker overall executive functioning. *Acta Paediatrica* 2022. doi:10.1111/apa.16314 [abstract]
- Fitzpatrick C et al. Early-childhood tablet use and outbursts of anger. *JAMA Pediatrics* 2024. doi:10.1001/jamapediatrics.2024.2511 [abstract]
- Geusens F et al. Peripartum depression and caregivers' practices of digital media exposure in infants and young children: meta-analysis. *Child Abuse & Neglect* 2026. doi:10.1016/j.chiabu.2026.108089 [abstract]
- Janssen X et al. Associations of screen time, sedentary time and physical activity with sleep in under 5s. *Sleep Medicine Reviews* 2020. doi:10.1016/j.smrv.2019.101226 [abstract]
- Cheung CH et al. Daily touchscreen use in infants and toddlers is associated with reduced sleep and delayed sleep onset. *Scientific Reports* 2017. doi:10.1038/srep46104 [abstract]
- Merín L et al. Excessive screen use, sleep patterns and behavioural and cognitive aspects in preschoolers: systematic review. *European Child & Adolescent Psychiatry* 2024. doi:10.1007/s00787-024-02430-w [abstract]
- Lutz MR et al. Television time, especially during meals, is associated with less healthy dietary practices in toddlers. *Academic Pediatrics* 2024. doi:10.1016/j.acap.2023.09.019 [abstract]
- Jusienė R et al. Screen use during meals among young children. *Medicina* 2019. doi:10.3390/medicina55100688 [abstract]
- Masztalerz-Kozubek D et al. Feeding practices, eating behaviours and screen time and dietary patterns in Polish toddlers. *Appetite* 2024. doi:10.1016/j.appet.2024.107580 [abstract]
- Litterbach EK et al. "That's the routine": mealtime screen use in lower educated Australian families. *Appetite* 2023. doi:10.1016/j.appet.2022.106377 [abstract]; Mothers' experiences of reducing family mealtime screen use. *Public Health Nutrition* 2023. doi:10.1017/s1368980023002847 [abstract]
- Meyer M et al. Advertising in young children's apps: a content analysis. *JDBP* 2019. doi:10.1097/dbp.0000000000000622 [abstract]
- Chandrasekaran M et al. Interventions to reduce screen time in preschool-aged children: meta-analysis of RCTs. *Obesity Reviews* 2026. doi:10.1111/obr.70185 [abstract]
- Machell A et al. Effect of parent-focused interventions for screen use on developmental outcomes in young children: meta-analysis. *IJBNPA* 2026. doi:10.1186/s12966-026-01919-8 [abstract]
- Schmidt-Persson J et al. Screen media use and mental health of children and adolescents: secondary analysis of an RCT. *JAMA Network Open* 2024. doi:10.1001/jamanetworkopen.2024.19881 [abstract]
- Rasmussen MGB et al. Screen media use and non-sedentary time in young children. *Archives de Pédiatrie* 2026. doi:10.1016/j.arcped.2025.10.012 [abstract]
- Panayotova GG, Yakabova DN. Early screen exposure and neurocognitive outcomes in children aged 2–5: systematic review. *Healthcare* 2026. doi:10.3390/healthcare14183081 [abstract]
- Alghadier M et al. Beyond screen time: a scoping review of screen exposure and early childhood development. *Healthcare* 2026. doi:10.3390/healthcare14193206 [abstract]
- Liu H et al. Screen exposure and autism spectrum disorder in children: meta-analysis. *Reviews on Environmental Health* 2025. doi:10.1515/reveh-2024-0147 [abstract]
- Swit CS et al. Early exposure to aggressive and prosocial television content and children's development from 2 to 8 (Growing Up in New Zealand). *BMC Public Health* 2026. doi:10.1186/s12889-026-28045-1 [abstract]
- Hiniker A, Suh H, Cao S, Kientz JA. Screen time tantrums: how families manage screen media experiences for toddlers and preschoolers. CHI 2016, 648–660. UW news release: https://www.washington.edu/news/2016/05/05/two-minute-warnings-make-kids-screen-time-tantrums-worse/ [search]
- Munzer TG et al. Differences in parent–toddler interactions with electronic versus print books. *Pediatrics* 2019 [recall, unverified]

### Iran

- Zarghani NH et al. SUNRISE: a pilot study from Iran. *Child: Care, Health and Development* 2024. doi:10.1111/cch.13269 [abstract]
- Alavi M et al. Behavioral and parental predictors of infant and toddler sleep quality (Iran). *BMC Pediatrics* 2026. doi:10.1186/s12887-026-06713-w [abstract]
- Karbasi Amel A, Hoghoughi N, Ahmadi K. Digital distractions: screen time and speech development in Iranian toddlers. *Journal of Comprehensive Pediatrics* 2025;16(4):e164701. https://brieflands.com/journals/jcp/articles/164701 [opened; quality concerns]
- Fadaei N et al. Electronic and digital devices and development of children in Tehran health centres. *Journal of Paramedical Sciences & Rehabilitation* 2024;13(3):32–42. https://jpsr.mums.ac.ir/article_24937.html?lang=en [opened; quality concerns]
- Amini M et al. TV food commercials target children: content analysis of TV food advertisements in Iran. *International Journal of Preventive Medicine* 2026. doi:10.4103/ijpvm.ijpvm_274_24 [abstract]
- Alaghband Rad J et al. A parenting package for digital technology use in Iranian children and adolescents. *Iranian Journal of Psychiatry* 2025. doi:10.18502/ijps.v20i4.19681 [abstract]
- Kerman preschool study (76.4% using more than 2 h/day) and CASPIAN-IV (ages 6–18) [search only]
