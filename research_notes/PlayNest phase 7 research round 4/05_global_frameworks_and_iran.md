# 05 — Global frameworks (Nurturing Care, WHO ECD, INSPIRE), digital-health standards, and Iran's child-health system

Research notes for PlayNest (offline parenting app, children 0–12, English + Persian; Iranian parents are the likely main
audience). Compiled 17 Nov 2026. All findings are paraphrased. Nothing under `src/` was edited.

## How to read these notes

Every fact carries one tag:

- **[opened]**: I opened the source myself. The publisher and date are given. For journal papers this usually means the
  abstract, read through the Europe PMC REST API (same records as PubMed).
- **[search]**: I saw only a search snippet or an abstract summary from a search tool. Treat it as a lead, not a fact.
- **[recall, unverified]**: from background knowledge. It must be checked before it ships.

Effect sizes appear only where I saw the number.

**Access notes (blocked or partial sources)**
- WHO IRIS PDFs: HTTP 403 or an HTML wall. I used copies hosted by WHO's CDN, nurturing-care.org, UNICEF and the Better
  Care Network, and extracted the text locally with `pdftotext`.
- NICE web pages: 403. The full ESF PDF (45 pages) downloaded directly and was read in full.
- Iranian government sites:
  - **health.gov.ir**, **fda.gov.ir** and **1490.fda.gov.ir** did not respond.
  - **behdasht.gov.ir** returned a JavaScript bot challenge.
  - **medu.ir** redirected and was not read.
  - **behzisti.ir** worked, so the Welfare Organization helplines below are verified on the operator's own site.
- Iranian university PDFs mostly downloaded, but Persian text from `pdftotext` sometimes comes out in visual (reversed)
  order. Table rows were then hard to map to columns. Where that happened, I say so.
- **The shared web-search budget ran out partway through.** After that I used only direct fetches of known URLs and the
  Europe PMC literature API. Some searches therefore never ran, chiefly for the current (1403) vaccine table, the school-entry
  assessment, Harris 2020, Corralejo 2018 and 4030/190. Those items are marked unverified. A follow-up round can finish them.

---

## 1. Global frameworks

### 1.1 Nurturing Care Framework (WHO, UNICEF, World Bank, 2018)

Facts from the framework:
- **[opened]** It was launched at the 71st World Health Assembly in May 2018 by WHO, UNICEF and the World Bank, with
  PMNCH and ECDAN (*Nurturing Care Framework*, full report and executive summary, WHO/FWC/MCA/18.02, 2018).
- **[opened]** **Five components.** It calls them "inter-related and indivisible":
  1. Good health.
  2. Adequate nutrition.
  3. Responsive caregiving.
  4. Opportunities for early learning.
  5. Security and safety.
- **[opened]** **Five strategic actions:**
  1. Lead and invest.
  2. Focus on families and their communities.
  3. Strengthen services.
  4. Monitor progress.
  5. Use data and innovate.

**[opened] What each component asks of caregivers** (full report, pp. 12–15):

| Component | What the framework says caregivers do |
|---|---|
| Good health | Monitor the child's physical **and emotional** condition. Respond affectionately to daily needs. Protect from household and environmental dangers. Use hygiene to cut infections. **Use promotive and preventive health services.** Seek care for illness. Caregiver wellbeing matters too: an anaemic, apathetic mother is less able to be responsive. |
| Adequate nutrition | Exclusive breastfeeding to 6 months with skin-to-skin contact. Then frequent, diverse complementary foods, "offered in a way that accommodates the social and emotional interaction involved in feeding". Supplements or treatment when needed, explicitly **including obesity**. |
| Responsive caregiving | Observe and respond to the child's movements, sounds, gestures and requests. Includes **responsive feeding**. Before speech: cuddling, eye contact, smiles, vocalising, gestures. Effective caregivers "observe… interpret… respond consistently and appropriately". |
| Opportunities for early learning | Learning starts at birth, not at preschool. It happens through smiling, talking, singing, imitation and simple games ("wave bye-bye"), and through play with household items (tin cups, containers, pots). **Busy caregivers can talk during feeding, bathing and chores.** |
| Security and safety | Protect from danger once the child is mobile (touching, swallowing), from air pollution and chemicals, and from poverty (cash transfers). Children feel "extreme fear" at threats of abandonment or punishment. **Toddlers are the group most often harshly punished.** It lists "Children experience supportive discipline" as an outcome. |

More from the framework:
- **[opened]** **Tiers of support.** "All families need information, affirmation and encouragement". Some need targeted
  support, and a few need indicated (specialised) support. *Universal* support means age-appropriate guidance, early
  identification and referral, and guidance on transitions such as return to work or starting day care. An app sits in
  the universal tier.
- **[opened]** Caregivers are "the best providers of nurturing care". Nurturing care should continue through middle
  childhood and adolescence, not stop at age 3.
- **[opened]** **Headline statistic:** "an estimated 250 million under-5s (43% of all under-5s in [LMICs]) are at risk of
  suboptimal development". The estimate uses only poverty and stunting as proxies.

### 1.2 WHO guideline: *Improving early childhood development* (2020)

- **[opened]** It has four recommendations for the first 3 years of life (WHO guideline PDF, 2020; WHO FAQ sheet):

| # | Recommendation (paraphrased) | Strength | Quality of evidence |
|---|---|---|---|
| 1 | All infants and children should get **responsive care** in the first 3 years, and caregivers should be supported to give it | Strong | Moderate |
| 2 | All should have **early learning activities** with caregivers in the first 3 years, and caregivers should be supported | Strong | Moderate |
| 3 | Support for responsive care and early learning should be **built into nutrition interventions** | Strong | Moderate |
| 4 | **Psychosocial support for maternal mental health** should be integrated into ECD services | Strong | Moderate |

- **[opened] The outcome-level evidence is weaker than the "strong" labels suggest.**
  - **Responsive-caregiving-only interventions (17 studies, mostly high-income countries):**
    - Caregiver–child interaction improved (SMD 0.34, low certainty).
    - Caregiver depressive symptoms fell (SMD −0.21, moderate).
    - Language (0.08), socioemotional development (0.14), behaviour problems (−0.14) and attachment (0.13) were **not**
      significant.
  - **Early-learning interventions:**
    - Cognition SMD 0.20 (low).
    - Motor 0.32 (low).
    - Socioemotional 0.28 (very low).
    - Language 0.07 (ns).
  - **Maternal mental health interventions:** depressive symptoms SMD −0.70, anxiety −0.51, and child cognitive
    development 0.30.
  - **Nutrition alone** did not improve development. It did when combined with responsive care and early learning
    (FAQ Q7).
- **[opened]** The FAQ defines responsive caregiving as the caregiver's ability "to notice, understand, and respond to the
  child's signals in a timely and appropriate manner". It says these things come naturally to many parents during feeding,
  bathing and play, but can be inhibited by violence, depression and displacement. It names **Care for Child Development**
  as the WHO/UNICEF package for this support.
- **[opened]** The FAQ says maternal depression affects about **1 in 6 women in the perinatal period**.

### 1.3 Care for Child Development (CCD): counselling card recommendations

- **[opened]** UNICEF-hosted counselling card ("Counsel the family on Care for Child Development"). The search snippet said
  this is the 2012 update **[search]**. Age-band recommendations, paraphrased:

| Age | Play | Communicate |
|---|---|---|
| Newborn (birth–1 week) | Ways to see, hear, move arms and legs freely, and touch you. Gently soothe, stroke and hold. Skin-to-skin is good. | Look into baby's eyes and talk. Breastfeeding is a good time. A newborn sees your face and hears your voice. |
| 1 week–6 months | See, hear, feel, move freely, touch you. Slowly move colourful things for baby to see and reach. Sample toys: shaker rattle, big ring on a string. | Smile and laugh together. Talk. Copy the baby's sounds or gestures to get a "conversation" going. |
| 6–9 months | Clean, safe household things to handle, bang and drop. Sample toys: containers with lids, metal pot and spoon. | Respond to sounds and interests. Call the child's name and watch the response. |
| 9–12 months | Hide a favourite toy under a cloth or box and see if they find it. Peek-a-boo. | Name things and people. Show how to say things with hands ("bye bye"). Sample toy: doll with a face. |
| 12 months–2 years | Things to stack, and to put into containers and take out. Sample toys: nesting and stacking objects, container and clothes pegs. | Ask simple questions. Respond to attempts to talk. Show and talk about nature, pictures and things. |
| 2 years+ | Help the child count, name and compare things. Make simple toys. Sample toys: objects of different colours and shapes to sort, stick or chalk board, puzzle. | Encourage talking and answer questions. Teach stories, songs and games. Talk about pictures or books. |

- **[opened]** Three messages for all ages:
  - "Give your child affection and show your love."
  - "Be aware of your child's interests and respond to them."
  - "Praise your child for trying to learn new skills."
- **[opened]** The problem-solving page is directly reusable as app copy. In paraphrase:
  - **No time:** combine play and talk with other care, and ask family to help with chores.
  - **No toys:** use clean, safe household objects and make simple toys.
  - **Too stressed:** find a key person to share feelings with, start with one simple activity, and refer to services.
  - **Child slow to respond:** do extra play and talk, **check seeing and hearing**, and refer.
  - **Harsh treatment:** look for chances to praise, try to understand why the child is sad or angry, and give choices
    instead of saying "don't".
  - **Leaving the child with someone else:** pick one regular carer and make the change gradually.
- **[search]** Tabriz University of Medical Sciences hosts a "Counselling cards – Big Card" PDF in a folder for
  comprehensive health centres. This suggests CCD materials are used in Iranian primary care. Not opened.
- Round 6 found CCD RCTs in Isfahan with small, short-lived effects (see phase 6 note 01).

### 1.4 Lancet Early Childhood Development series (2016) and the 2024 "next 1000 days" series

- **[opened]** Black et al., *Lancet* (online Oct 2016; print 2017, vol 389). "250 million children (43%) younger than 5
  years in LMICs are at risk of not reaching their developmental potential", based on stunting and poverty proxies. The
  paper calls for quality programming that covers health, nutrition, security and safety, responsive caregiving and early
  learning.
- **[opened]** WHO news release (5 Oct 2016):
  - The ECD package may cost about **US$0.50 per child per year** when added to existing services such as health.
  - Adults affected lose about a quarter of average adult income.
  - The health sector is the entry point, through CCD and Reach Up.
- **[opened]** The EurekAlert release of the same date gives:
  - 249.4 million children at risk in 2010, down from 279.1 million in 2004.
  - Policy asks: paid parental leave, two years of free pre-school, breastfeeding breaks and minimum wages.
- **[opened]** **Lancet 2024 series, "ECD and the next 1000 days" (ages 2–5).** Draper et al., *Lancet* 2024;404:2094–2116.
  - In LMICs only **62 million 3–4-year-olds (25.4%) receive adequate nurturing care**, leaving **181.9 million** exposed to
    risks.
  - 86.2% have a healthy weight.
  - **Fewer than 1 in 3 have developmental stimulation or are protected from physical punishment.**
  - 38.8% attend early childhood care and education.
- **[opened]** Nores et al. (paper 2) found that for ages 2–5 the effective interventions are ECCE, **parenting
  interventions** and cash transfers. Not providing ECCE forgoes benefits of **8–19 times** the cost. This is a different
  metric from the 2016 "250 million", so do not compare the two.
- I found **no 2025 Lancet update** to the 250-million estimate (one search; the budget then ran out).

### 1.5 INSPIRE: seven strategies to end violence against children (2016)

- **[opened]** INSPIRE (UNICEF-hosted PDF; WHO publication page dated 26 Oct 2016).
- **[opened] Seven strategies** (the letters spell INSPIRE):
  1. Implementation and enforcement of laws.
  2. Norms and values.
  3. Safe environments.
  4. **Parent and caregiver support.**
  5. Income and economic strengthening.
  6. Response and support services.
  7. Education and life skills.
- **[opened]** WHO prepared it with CDC, End Violence, PAHO, PEPFAR, Together for Girls, UNICEF, UNODC, USAID and the World
  Bank (10 agencies).
- **[opened] Parent and caregiver support strategy.**
  - **Objective:** "reduce harsh parenting practices and create positive parent-child relationships".
  - **Delivery modes:** home visits, groups in community settings, and comprehensive programmes.
  - **Rationale:** understanding non-violent discipline and close parent–child communication reduces harsh parenting.
  - **Evidence cited:** Nurse-Family Partnership's 15-year follow-up showed a **48% reduction in child abuse and neglect**.
    A Cape Town lay home-visiting trial improved mother–infant relationship and attachment.
  - **Expected effects:** less maltreatment and harsh discipline, less bullying, more positive interaction and **more
    parental monitoring of safety**.

### 1.6 Proposal (a): "Five things every child needs" (parent-facing guide)

Framed for parents, built from NCF plus CCD. Keep it to one screen per component, each with one "today" action. This is
**draft copy**: the facts are verified above, and the wording is mine.

1. **Health: keep them well and checked.** Go to every routine check at the health centre (in Iran:
   «مراقبت‌های کودک سالم»). Keep vaccines on time, wash hands, and get help early when your child is unwell. *Today: find
   your child's health card and note the next check date.*
2. **Food: feed them well, and feed them with love.** Breast milk only for about 6 months, then varied family foods
   alongside breast milk. Watch your child's hunger and fullness signals, and talk and smile during meals. *Today: eat one
   meal together without screens.*
3. **Responsive care: notice, understand, respond.** Watch what your child is telling you with sounds, faces and
   movements, and answer kindly and soon. Comfort when upset. *Today: copy your baby's sound, wait, and see if they "answer".*
4. **Learning: play and talk every day; it starts at birth.** No special toys needed: pots, cups, boxes, stories, songs
   and peek-a-boo all teach. *Today: name five things you see on the way to the shop.*
5. **Safety and security: safe home, calm discipline, steady love.** Keep medicines, cleaning products, water and hot
   things out of reach. Never use threats of leaving or hitting. Children need to feel safe with you. *Today: do the
   two-minute "crawl-height check" of one room.*

Plus a sixth, cross-cutting card: **"Look after yourself too."** NCF and WHO Rec. 4 both say caregiver wellbeing is part
of nurturing care. Signpost to 1480 (see §5) and to the health centre for low mood.

### 1.7 Proposal (b): which components PlayNest may be weak on

Based on a read-only skim of `src/data` guide titles and keyword greps on 17 Nov 2026. This is a skim, not an audit.

| Component | Apparent coverage | Likely gaps |
|---|---|---|
| Good health | Fever, colds, D&V, teeth, teething, vaccination distress, toilet training, activity/sleep | **No guide on routine well-child checks (no "check-up" or "well-child" keyword in guide titles), growth monitoring (no "growth chart" hits), or the Iranian schedule.** NCF lists "using promotive and preventive services" as a core caregiver action. |
| Adequate nutrition | Strong (WHO 2023 complementary feeding, solids, allergens, fussy eating) | **"Responsive feeding" / hunger–fullness cues: no keyword hit.** NCF and WHO Rec. 3 make this explicit. Iron, vitamin A+D drops and the Iranian supplement programme are not obviously covered. |
| Responsive caregiving | Strong (child-led play, emotion coaching, crying) | Infant-level "serve and return" framing for 0–6 months could be more explicit. CCD wording helps here. |
| Early learning | Strong (activities, songs, stories, talk, Persian reading) | Fine. Consider CCD's "household objects as toys" and "talk during chores" messages for busy or low-income families. |
| Security and safety | First aid, emergency numbers, discipline/no-smacking guides; safety mentions scattered in tips | **No single injury-prevention guide** (road safety, drowning, burns, falls, poisoning prevention). Iranian data in §4 show these are the leading causes of child death after infancy. **Iranian helplines are incomplete** (1480 was excluded pending verification and is now verified, see §5). |
| Caregiver wellbeing (cross-cutting) | "You" guides: burnout, keeping calm, couple relationship | Perinatal depression is mentioned in some files. WHO Rec. 4 supports a clearer "maternal mental health" card with Iranian signposting. |

---

## 2. Digital and app-based parenting support: evidence, standards, endorsement

### 2.1 Evidence on digital parenting interventions (adds to phase 6 note 01 §6)

Round 6 already covered Thongseiratch 2020, Spencer 2020, Baumel 2016/2023, Canário 2025 and Gonzalez 2026.

**[opened] New this round:**

- **Flujas-Contreras, García-Palacios & Gómez 2019** (*Psychol Med*; 24 studies, 22 meta-analysed).
  - Technology-based parenting programmes showed "moderate effect sizes" on parenting and on parent and child emotional
    wellbeing.
  - **Attendance and participation were higher than in traditional formats.**
  - The pooled effect size was not given in the abstract.
- **Lin-Lewry et al. 2024** (*Int J Med Inform*; 7 RCTs, n=1,342, first year after birth).
  - Digital parenting education raised parenting self-efficacy (SMD 1.06) and social support (2.72), and lowered depressive
    symptoms at 3 months (−0.39).
  - Moderators that helped: **≥6 weeks of use, an in-person orientation, and a guided curriculum.**
  - The SMDs are very large and heterogeneous, so treat them with caution.
- **Aldridge et al. 2024** (*JMIR*; 127 studies of technology-assisted parenting programmes targeting ACEs).
  - Five strategies were reliably linked to more engagement:
    1. **Involving parents in design.**
    2. Web delivery (versus face to face).
    3. **Personalisation or tailoring.**
    4. **User control features.**
    5. **Practical support.**
  - Professional-support features, videos and behaviour-change techniques were *not* reliably linked to engagement.
- **WHO / Oxford PLH digital adaptations: engagement is the main problem.**
  - **ParentText** (chatbot over WhatsApp and Messenger) in Jamaica, Malaysia and the Philippines (*npj Digital Public
    Health* 2026, N=1,293):
    - Median engagement was **2 days and 1 module**.
    - **93.8% completed less than 25% of the content.**
    - In two of the three sites, fewer than 1 in 5 were still active on day 7.
    - Proposed design principles: let users resume easily, cut message burden without cutting content, and treat
      re-engagement as a core feature.
  - **ParentApp** (Tanzania, *JMIR Pediatr Parent* 2026, 614 caregivers): 97% did module 1, 46% module 2, and **7.9% all 12
    modules**.
  - **ParentText South Africa** (2026 qualitative work): caregivers reported less physical punishment. A major barrier was
    "entrenched beliefs that non-violent forms of discipline are ineffective". Social influence helped ongoing use.
- **[search]** Brookings summary of Schafer et al. 2025: reductions in intimate partner violence among Jamaican women using
  ParentText. Not opened.
- **Not found this round:** Harris et al. 2020 and Corralejo & Domenech Rodríguez 2018 (the search budget ran out). Do not
  cite them until checked.

### 2.2 What predicts engagement and benefit: synthesis for PlayNest

This list combines round 6 and this round:
- Reminders or prompts. Thongseiratch: the only component found sufficient.
- Practice with your own child (Kaminski).
- Persuasive design: progress and feedback (Baumel 2023: completion went from 28% to 69%).
- Guided rather than fully free module choice (Brandes 2026; Lin-Lewry 2024).
- Co-design with parents, personalisation and user control (Aldridge 2024).
- Low data and offline use. ParentText and ParentApp found lack of internet and smartphone access a main cause of drop-out.
  PlayNest being offline is an advantage.
- **Easy re-entry after a gap** (ParentText 2026).
- **Expect steep drop-off after the first session** (ParentApp, ParentText). Make session 1 the most valuable one.

### 2.3 Safety, privacy and standards for child-health apps

- **[opened] WHO 2019, *Recommendations on digital interventions for health system strengthening*** (summarised in Labrique
  et al., *npj Digit Med* 2020).
  - Recommendation 6, **targeted client communication** (for example messages to parents of under-5s), is "recommended
    only in specific contexts or conditions".
  - Certainty for parents of under-5s is very low to moderate.
  - The condition: **"potential concerns about sensitive content and data privacy can be addressed."**
  - The guideline notes one study suggesting messaging may have *increased* violence against women. This is a reason to
    think about who else reads the phone.
- **[opened] NICE Evidence Standards Framework (ECD7; published 10 Dec 2018, updated 9 Aug 2022).**
  - **Tiers:**
    - **A:** system services with no direct patient outcomes.
    - **B:** communicating about health; health and care diaries; **"Promoting good health"**, meaning non-personalised
      information and resources, which may encourage healthy behaviour.
    - **C:** informs clinical management, drives clinical management, treats, or diagnoses.
  - **PlayNest as it stands fits tier B ("Promoting good health").** If it adds symptom-to-action flows, scoring or
    personal health tracking that is shared with clinicians, it moves toward tier C.
  - **Standards that apply to tier B:**
    - 1: comply with safety and quality standards (UK: DTAC, DCB0129, data protection, ICO registration).
    - 2: **involve intended users in design**, and usability and accessibility (DTAC D1; IEC 62366-1).
    - 3: environmental sustainability.
    - 4: **health inequalities and bias.**
    - 5: good data practice.
    - 6: define the level of professional oversight.
    - **7: processes for reliable health information.** Content must be:
      - **valid** (aligned to best sources such as NICE or professional bodies);
      - **accurate**;
      - **reviewed and updated by relevant experts at defined intervals "such as every year"**;
      - sufficiently comprehensive.
    - **8: credible with professionals.** Professionals helped design, develop or test it, or support its deployment.
    - **9: safeguarding assurances** where users are vulnerable (children) or peer-to-peer features exist: who has access,
      moderation, user agreements.
    - 10–13: intended purpose, target population, pathway, expected impacts.
    - 15: **real-world evidence of benefit from a pilot.**
    - 16: an evidence-generation plan.
- **[opened] MHRA, *Medical device stand-alone software including apps*** (landing page updated 1 Jul 2023; this agrees
  with the phase 5 note 04 reading).
  - **Unlikely to be a device:**
    - Apps that "just provide tips or advice on prevention".
    - Patient medical education.
    - General wellbeing monitoring.
    - Apps that "just provide tips or advice or link to support groups".
    - Apps that treat non-medical conditions "e.g. non-specific stress".
    - Apps that replace a written symptom diary.
    - Educational anatomy apps.
    - Decision support that offers "only lifestyle treatment choices or referral advice (e.g. see your GP)".
  - **Likely a device:** automated reasoning (calculation, algorithm) such as **dose calculations, symptom tracking with
    interpretation, and outputs that match or rank conditions**.
  - **General disclaimers ("this product is not a medical device") do not help** if medical claims are made or implied
    anywhere, including store text and testimonials.
- **[search] ORCHA** (UK app-review company): its Baseline Review is a desktop compliance assessment that ORCHA says
  underpins NHS DTAC. DTAC covers clinical safety, technical security, data protection, and usability/accessibility.
  Welsh and Northern Irish NHS app libraries use ORCHA reviews (hduhb.nhs.wales, apps4healthcareni pages seen in search
  only).
- **[recall, unverified]** The national NHS Apps Library (NHS Digital, about 2017–2021) was closed, and assessment moved to
  DTAC plus local or ORCHA-run libraries. One search did not confirm the closure.

### 2.4 What it would take to be endorsed: practical takeaways

The owner's long-term goal is for health systems to recommend or require PlayNest. For an information app the realistic
route is tier-B-style credibility, **not** medical-device status:

1. **Stay on the information side.**
   - No diagnosis, no scoring that outputs "delay / no delay", no dose calculators, no symptom-checker that ranks causes or
     triages.
   - Milestone content should say "most children can… by… / talk to the health centre if…" and **list** signs. It should
     not compute a verdict. A tappable milestone checklist that produces "your child may have a delay" is the same pattern
     MHRA describes as device-like (decision support with automated reasoning). Take regulatory advice before building one.
2. **Cite a source on every guide.** The app already does this. Add a **"last reviewed" date and a "next review" date**
   (NICE standard 7: defined interval, for example yearly).
3. **Named clinical reviewer sign-off per guide** (paediatrician, midwife, child psychologist, nutritionist). Show "Reviewed
   by [role], [month year]" in app (NICE standard 8). For Iran, a reviewer from a university of medical sciences carries
   the most weight **[recall, unverified]**.
4. **Content-governance document** stating sources hierarchy (WHO, then Iranian MoHME national guidance for Iranian users,
   then professional bodies), review cycle, error-report process and change log.
5. **User involvement record.** Parent co-design and usability testing in Persian and English, including low-literacy and
   rural parents (NICE standards 2 and 4; Aldridge 2024).
6. **Accessibility.** Screen-reader labels, large text, colour contrast, RTL correctness, audio for low-literacy users.
7. **Privacy by design.**
   - Offline, with no account.
   - No analytics on sensitive pages.
   - Discreet app name and notification text (WHO 2019 condition on sensitive content).
   - A clear data statement in Persian.
8. **Safeguarding.** If any community or peer feature is ever added, moderation and access rules are needed (NICE
   standard 9). Today, keep it peer-free.
9. **Evidence generation.** A small real-world pilot (for example with one Iranian health centre or a university
   department) measuring usage and parent-reported outcomes (NICE standard 15). Engagement data alone are informative,
   given the ParentText and ParentApp drop-off.
10. **Map content to the national schedule.** Health systems endorse tools that *reinforce* their own programme. Aligning
    PlayNest's age bands, screening reminders and wording with «مراقبت‌های ادغام‌یافته کودک سالم» (§3) is likely the
    strongest single step toward Iranian endorsement **[recall, unverified, as a strategy]**.
11. **Iranian regulatory route not researched (blocked).** I found nothing on an Iranian health-app accreditation
    framework. Ask MoHME's child health office (اداره سلامت کودکان) and FDA Iran whether a non-device health information
    app needs any licence **[recall, unverified]**.

---

## 3. Iran's child-health system as parents meet it

### 3.1 Structure

- **[search]**
  - Rural primary care runs through **health houses (خانه بهداشت)** staffed by a **behvarz (بهورز)**, a community health
    worker. Each covers one village or several.
  - Urban care runs through **health posts (پایگاه سلامت)**.
  - Both feed into **comprehensive health service centres (مرکز خدمات جامع سلامت)**, which have a physician, then district
    hospitals.
  - The networks are managed by universities of medical sciences.
  - The 2014 Health Transformation Plan (طرح تحول سلامت) expanded coverage. An older source says about 94% of the population
    is covered.
- **[recall, unverified]** In urban posts the frontline worker is the **مراقب سلامت** (health care provider), and in
  rural areas it is the behvarz. Families register with a team, and the physician sees the child at set visits.
- **[opened] SIB (سامانه یکپارچه بهداشت, «سیب»).** Ghorbani Kalkhajeh et al., *BMC Prim Care* 2023 (qualitative,
  Khuzestan).
  - SIB is Iran's integrated electronic health record for primary care, operational from **February 2015**.
  - It records household data, health events, **screening, immunisation**, pregnancy and elderly care, NCD risk factors
    and mental-health care.
  - Reported coverage is records for more than 73 million people, used by more than 130,000 staff.
  - Challenges: internet outages, workload, privacy concerns, and records that cannot be edited after 24 hours.
  - **Parents may not see SIB directly.** Whether a parent-facing portal exists was not verified.

### 3.2 Well-child care schedule («مراقبت ادغام‌یافته کودک سالم»)

- **[opened]** *مراقبت ادغام یافته کودک سالم – پزشک* (physician booklet, Ministry programme).
  - Hosted by Guilan University of Medical Sciences (Rasht). Dated **دی ۱۳۹۷** (Dec 2018/Jan 2019), "بازنگری ۱۳۹۵".
  - **This is the 2016 revision. A newer version may exist.**
- **Visit ages in the schedule table** (header row read clearly):
  - **3–5 days, 14–15 days, 30–45 days.**
  - **2, 4, 6, 7, 9, 12, 15 and 18 months.**
  - **24 and 30 months.**
  - **3, 4 and 5 years** (the table runs to 60 months).
  - Your guessed list was right, plus 30 months.
- **What the booklet lists** (some row-to-column mapping was lost in extraction; the items themselves are certain):
  - **At each visit:** growth monitoring (weight, length/height, head circumference against WHO z-scores), nutrition
    assessment, and age-appropriate nutrition counselling "at every visit".
  - **Breast milk adequacy screening form at the 3–5-day visit** (or by 2 months if missed).
  - **Neonatal metabolic screening (G6PD, PKU, hypothyroidism)** at 3–5 days, with catch-up at 14–15 and 30–45 days "if not
    yet done". PKU retest timing is 14 days, provided the baby has fed adequately for 3 days.
  - **Hearing:**
    - "All newborns are screened at birth by AABR/OAE".
    - If missed, screen at later visits, preferably before 6 months.
    - "Golden times": screening by 1 month, diagnosis (ABR) by 3 months, intervention by 6 months.
    - It lists risk factors (NICU over 5 days, severe jaundice, birthweight under 1500 g, ototoxic drugs, meningitis,
      family deafness, and others).
  - **Vision:**
    - Checks at the first visit (under 2 months) and **7 months**.
    - **Visual acuity test at 4 and 5 years.**
    - The physician asks whether the child was checked "in the national annual amblyopia screening programme".
    - Refer if there is a family history of congenital cataract, glaucoma or retinoblastoma, or **parental concern because
      of a consanguineous marriage**.
    - Preterm babies need retinal (ROP) exams on a set schedule, generally 4 weeks after birth.
  - **Development:**
    - **"Red flags"** at some visits and a **"standard test"** (standardised screening questionnaire) at others.
    - Referral if the standard test score is ≤ −2 SD, or still below −1 SD on retest, or if there is a problem in the
      general-concerns items.
    - The booklet's references include the **ASQ-3 user's guide** and ASQ learning activities.
    - **[search]** A university leaflet says ASQ is used at 12 months, "if needed".
    - Which exact months get the standard test could not be read reliably from the extracted table (it appears to include
      6, 12 and 18 or 24 months and 3 and 5 years). **Check against the PDF visually or with Iranian staff.**
    - The booklet says children should say at least one word by 15 months and two-word sentences by 2 years.
  - **Oral and dental:** from first tooth eruption, with referral to a dentist at older ages.
  - **Supplements:** vitamin A+D and iron drops "according to the supplements instruction". The start and stop ages were
    not in the opened text. **[recall, unverified]** A+D from about the first weeks to 2 years, and iron from about 6 months
    (earlier for preterm or low-birthweight babies) to 2 years. **Verify.**
  - **Child maltreatment assessment** is part of the visit ("ارزیابی بدرفتاری با کودک").
  - **Blood pressure** yearly from age 3, or earlier if there are risk factors.
  - **Anaemia screening:**
    - For at-risk term children at 9–12 months (CBC, ferritin), rechecked at 15–18 months.
    - For preterm, low-birthweight and early cow's-milk-fed infants at 4 months.
  - **Lipids** if family history or overweight.
  - **Genetics** assessment early.
  - Complementary food starts at the end of 6 months.

### 3.3 National vaccine schedule (ages and names only)

- **[opened]** *کتاب جامع بهداشت عمومی*, chapter 10 (Shahid Beheshti University of Medical Sciences e-book). Table 7, "universal
  child immunisation", gives the **1394 schedule (as reviewed in 1396)**:

| Age | Vaccines |
|---|---|
| Birth | BCG, hepatitis B, oral polio (OPV) |
| 2 months | Pentavalent (DTP-HepB-Hib), OPV |
| 4 months | Pentavalent, OPV, **IPV** (injectable polio) |
| 6 months | Pentavalent, OPV |
| 12 months | MMR |
| 18 months | DTP (three-in-one), OPV, MMR |
| 6 years | DTP, OPV |

- **[opened]** Background from a 1399 behvarz journal article (MUMS/Sabzevar):
  - The EPI started in 1363.
  - Hep B was added in 1372 and MMR in 1383.
  - Hib was added in **1393** via pentavalent, and IPV in **1394**.
  - New vaccines (PCV, rotavirus, HPV, acellular pertussis) were *goals* for the "Iran 1400" horizon.
- **[search] A newer national table «مصوب کمیته کشوری ایمن‌سازی ۱۴۰۳» exists.** Its content was not seen. It may add a second
  IPV dose or new vaccines. **Do not ship the table above as "current".** Either:
  - get the 1403 table from Iranian health staff and cite it, or
  - show the general message: "Vaccines are given at birth, 2, 4, 6, 12 and 18 months and 6 years; your health centre card
    shows exactly which".
  The visit ages have been stable since 1394. The vaccine contents may not be.
- **[opened]** Useful parent messages from the same sources:
  - Preterm and low-birthweight babies follow the normal schedule.
  - Loose stools, a cold and malnutrition are **not** reasons to delay.
  - There is no need to restart a delayed series. Continue from where the child stopped.
  - Breastfeeding is fine around oral polio.

### 3.4 School-entry assessment («سنجش سلامت جسمانی و آمادگی تحصیلی نوآموزان»)

- **[opened]** A 2014 paper (*Adv Biomed Res*) confirms that "routine screening examinations at school entry" ran
  nationally in 2009–10, carried out by each province's university of medical sciences, at entry to three school levels.
- **[opened]** A 2026 SWOT study (*Int J School Health*) describes an Iranian **early assessment and intervention programme
  for preschool children**.
  - Strengths: school readiness for at-risk children, awareness of slow learning.
  - Weaknesses: **limited coverage**, few assessment teams, not enough space or equipment.
- **[opened]** National **amblyopia screening** for ages 2–6 has run since 1996 and is delivered by the Welfare
  Organization (Behzisti) with kindergarten teachers, optometrists and ophthalmologists.
  - In Ardabil in 2012 only 51.7% of eligible children took part.
  - Sources: Rafiei 2017, *Public Health*; Ojaghi 2016, *Int J Prev Med*.
- **[recall, unverified]** The Education Ministry's Organisation for Exceptional Education (سازمان آموزش و پرورش استثنایی)
  runs the pre-registration assessment for new first-graders. It covers vision, hearing, physical health and growth,
  cognitive/IQ screening, speech/language and behaviour, and children are referred for further assessment if flagged.
  The registration timing (spring/summer before Mehr) and the exact components need checking on medu.ir, which was not
  reachable.

---

## 4. Iranian child-health data: priorities for content

Survey sizes, years and definitions differ, so do not compare numbers across rows.

| Topic | Finding | Source / tag |
|---|---|---|
| Causes of death, under 5 | Neonatal: perinatal conditions 57.8%, congenital anomalies 17%. **28 days–5 years: transport accidents 21.1%, congenital anomalies 18.1%, neoplasms 9.3%.** | Karami, Abbasi & Tajvar 2020, systematic review of 30 studies (Research Square preprint, not peer reviewed) **[opened]** |
| Injury deaths, 0–19 (Fars, 2004–2019) | 6,590 unintentional-injury deaths. Share of YLL: **transport 67.4%, drowning 7.2%, burns 6.7%.** Rates halved over 16 years. | Azarbakhsh et al. 2023, *BMJ Paediatr Open* **[opened]** |
| Injury deaths, under 5 (north Iran, 2013–22) | 7.08% of under-5 deaths were unintentional injuries; 0.81 per 1,000 live births | Farokhi et al. 2026, *Sci Rep* **[opened]** |
| Road injuries, 0–14 | GBD 2019 analysis exists; numbers not seen | Goodarzi et al. 2025, *BMC Public Health* **[search/abstract start]** |
| Child mental health (6–18, national, IRCAP, n=30,532) | **22.31% at least one disorder.** Anxiety disorders 14.13%, behavioural 8.3%. Higher if a parent has a mental disorder (OR 1.96). | Mohammadi et al. 2019, *Iran J Psychiatry* **[opened]** |
| Same survey: other disorders | Elimination disorders 5.4% (enuresis); OCD 3.1–3.8%; PTSD 0.6% | Mohammadi 2021; Hooshyari 2024 **[opened]** |
| Iron deficiency anaemia, under 6 | **IDA 18.2%** and iron deficiency 27.7% (6 studies, n=1,700). An umbrella review gives 19.9%. | Nazari 2019, *J Blood Med*; Dehghani 2024, *BMC Preg Childbirth* **[opened]** |
| Vitamin D, 7–18 (CASPIAN-V, 2019 analysis of stored sera) | 10.6% deficient (cut-off not shown in abstract) | Pourrostami 2023 **[opened]** |
| Stunting, under 5 | Pooled **12% (10–14)**, 16 studies, 1989–2017 | Mansori 2018, *MJIRI* **[opened]** |
| Growth, 6–18 (CASPIAN-IV, n=36,486) | Underweight 10.9%, short stature 4.2%. Both worse in rural and lower-income families. | Heshmat 2021 **[opened]** |
| Growth, 7–18 (CASPIAN-V, 2015, n=3,844) | Short stature (<5th centile) 15.8%; **excess weight (BMI >85th) 17.6%**. Excess weight highest in north/northwest/Tehran, underweight in the southeast. | Safari 2021; Nasr 2020 **[opened]**. Definitions differ from CASPIAN-IV, so do not compare. |
| Early childhood caries | Pooled **61.7%** (30 studies, 2006–2024) | Jabbarian 2025, *Evid Based Dent* **[opened]** |
| Refractive error | 7-year-olds (8 cities, 2013): **myopia 3.0%**, hyperopia 6.2%, astigmatism 17.4%. Dezful 6–15 years: myopia 14.9%. | Hashemi 2016 *IJPH*; Norouzirad 2015 **[opened]** |
| Exclusive breastfeeding | Pooled **53% (44–62)**, 32 studies | Behzadifar 2019, *BMC Pediatr* **[opened]** |
| Physical punishment / maltreatment | 2014 meta-analysis: physical abuse ~44%, emotional ~65%, neglect ~41%. **The CIs are nonsensical (−216% to 303%), so the pooling is unreliable.** Kurdistan 2023 (n=135 mothers): severe physical punishment 78.5%, psychological 99.3%. | Mohammadi, Zarafshan & Khaleghi 2014; Khazaei 2023 **[opened]** |
| Screen time (7–18, 2015) | 54.3% watched TV ≥2 h/day; 9% computer ≥2 h/day; 33.5% short sleep. **Pre-smartphone-era data; no national under-5 screen data found.** | Mortazavi 2019, CASPIAN-V **[opened]** |

**What the data suggest for content priorities:**
1. **Injury prevention** (road and car safety, drowning, burns, poisoning). These are the top killers after infancy.
2. **Child anxiety** (the most common disorder) plus behaviour.
3. **Dental care.** The ECC rate is very high.
4. **Iron and anaemia, and growth.** Use the well-child visits.
5. **Breastfeeding support.**
6. **Non-violent discipline**, with high prevalence and normalisation.

Myopia in young Iranian children looks lower than in East Asia, so the outdoor-time messaging is still fine but not urgent.

---

## 5. Iranian helplines and services (safety-critical)

Verified on 17 Nov 2026 unless stated. **Test-call every number before release**, as `src/data/helplines.ts` already
requires.

| Service | Number | Who runs it / purpose | Hours | Status |
|---|---|---|---|---|
| **اورژانس اجتماعی** (Social Emergency) | **123** | Welfare Organization (سازمان بهزیستی). Crisis intervention for children, women, older people, people with disabilities and others at risk. Behzisti asks the public to call 123 about people at risk, including **suicide risk**, and to report working or street children. Teams also go to the scene. | **"Became 24-hour"** per a Behzisti infographic dated **5 Mar 2026** (wartime). Normal-time hours were not stated in the pages opened. | **[opened]** behzisti.ir news 172004 (2026-03-05), 194819 (2026-07-19), 195665 (2026-07-21), 204831 (2026-09-09), 203522 (2026-09-02: 27th anniversary of the service) |
| **صدای مشاور** (Counsellor's Voice) | **1480** | Welfare Organization. **Free, confidential, anonymous telephone counselling**: anxiety, depression, trauma, **family problems, child and adolescent issues**, mental disorders, with referral. Running since 1371. | **Normally 8:00–24:00, including holidays.** 24-hour during the 2026 war. | **[opened]** behzisti.ir news 171896 (2026-03-04). **This resolves the round-5 conflict:** Find A Helpline lists 1480 as a "National Addiction Helpline". Behzisti's own pages describe it as general free counselling. Use Behzisti's description. |
| Awareness of these lines | — | National survey: only **25%** of people had heard of 123, and **10%** had heard of 1480. Of those aware of 1480, 47% had used it and 93% trust it. | — | **[opened]** behzisti.ir news 201451 (2026-08-24). A strong argument for PlayNest to surface them. |
| Medical emergency (اورژانس) | **115** | Ambulance | 24 h | Agreed across sources in phase 5 note 04 (115 ambulance, 110 police, 125 fire). Already in `emergency.ts`. Not re-opened on an Iranian site this round. |
| Police | 110 | — | 24 h | as above |
| Fire | 125 | — | 24 h | as above |
| **Drug and poison information** (مرکز اطلاع‌رسانی داروها و سموم) | **1490** (national callers) | National Drug and Poisoning Information Center, Food and Drug Organization (website listed as 1490.fda.gov.ir). Regional university centres also list 1490. | National centre: "24hrs", but marked **"Available to the public: No"**. Most regional centres keep office hours (for example 7:30–15:30 Sat–Thu). Isfahan and Tabriz are listed as 24 h. | **[opened]** WHO *World Directory of Poisons Centres*, 2023 spreadsheet. **Conflict to resolve:** is 1490 open to the public 24 h? Test-call. The FDA site was unreachable. |
| Loghman Hakim poison centre (Tehran) | +98 21 554 22020 (admin); emergency +98 912 194 7601 | Loghman Hakim Hospital, Shahid Beheshti UMS | Listed as **19:00–08:00** | **[opened]** WHO 2023 directory. A mobile number in a 2023 directory may be out of date. **Do not ship without a test call.** |
| Shahid Beheshti DPIC (Tehran) | 09646 (national callers) | Shahid Beheshti UMS | 24 h | **[opened]** WHO 2023 directory. Test-call. |
| 190 | — | You suggested a "drug answering line". **Not verified.** **[recall, unverified]** it may be the Food and Drug Organization's complaints and information line. | — | **Do not ship.** The WHO directory points to **1490** for poison information. |
| 4030 | — | **[recall, unverified]** A Ministry of Health line set up during COVID-19 for health information and psychological counselling. Not checked: the MoHME sites were blocked. | — | **Do not ship.** |
| 109 | — | Listed by Find A Helpline as the "Ministry of Health helpline" | — | **[opened directory only]**. Purpose unclear. Do not ship as a counselling line. |
| 1570 | — | Find A Helpline: "Student helpline" (youth) | — | **[opened directory only]**, not for parents of 0–12s |
| 42152 صدای یارا (Yara's Voice) | 42152 | Find A Helpline lists it for parents, youth and children, Sat–Wed from 9 am (truncated) | — | **[opened directory only]**. Operator not checked. |

**App takeaway:**
- Add **123** (danger to a child or adult, family crisis, suicide risk) and **1480** (free counselling for parents,
  including child and family issues).
- Cite the behzisti.ir pages and date.
- Keep 115 first for medical emergencies.
- For poisoning: **"Call 115 if the child is drowsy, struggling to breathe or fitting. For advice, call the drug and poison
  information line 1490"**, only after a test call confirms public access and hours.

---

## 6. Iranian parenting: strengths to build on and common challenges

Evidence here is thin and mostly small or qualitative, so keep the copy respectful and non-generalising.

**Strengths**
- **Extended family and grandparents.**
  - **[opened]** Kashan survey of 377 people aged 60+ (Momtaz et al. 2018): grandparent–grandchild relationships were
    "moderate to high". The authors recommend programmes that strengthen them.
  - **[opened]** Qualitative study of grandchildren in multigenerational homes (Bahador et al. 2025 preprint):
    - Benefits: "valuable resources", "a bridge to the past", stronger family bonds.
    - Challenges: caregiving strain and intergenerational gaps.
  - Content idea: a guide on **"Working with grandparents"**. Value their help, agree two or three key rules (sleep,
    sweets, screens, no hitting), and turn differences into a gentle conversation, not a fight. The app's family section
    already has "The trouble with grandparents"; adapt it for Iranian households where grandparents may live with or near
    the family.
- **Storytelling, poetry and song.**
  - **[recall, unverified]** Rich oral tradition: lullabies (لالایی), Shahnameh stories and poetry memorisation. Phase 5
    notes 08 and 09 cover lullabies and folk tales.
  - These map directly onto the NCF component "opportunities for early learning" and the CCD advice to "teach stories,
    songs and games".
- **Family gatherings and rituals** (دورهمی, Nowruz, Yalda, religious occasions).
  - **[recall, unverified]** These offer natural moments for multi-generational play and talk.
  - Family-routine and ritual research (Fiese 2002) is already in the app. Frame Persian celebrations as "family rituals
    that help children feel safe and belong".
- **Emotion-coaching acceptability.** **[opened, phase 6]** The Tuning in to Kids pilot in Iran found the content
  acceptable. Delivery needed adapting: a slower pace, more practice, and an emotion-word list.

**Common challenges**
- **Harsh discipline.** It is common and normalised (§4: high prevalence even if pooled numbers are poor).
  - The 2026 ParentText qualitative study found "entrenched beliefs that non-violent forms of discipline are
    ineffective" as a barrier. Expect the same objection, and answer it with effectiveness evidence (phase 6 note 01 §3),
    not blame.
  - The Lancet 2024 series says fewer than 1 in 3 children aged 3–4 in LMICs are protected from physical punishment.
- **Parental mental health and stress.** **[opened]** IRCAP found children's risk doubled when a parent had a mental
  disorder. **[opened]** Teen mothers in Iran described a "storm of anxiety" (Tirgari 2020, qualitative).
- **Screens.** National data are old (2015) and cover school-age children only. For under-5s, **no Iranian national data
  found**; rely on WHO guidance.
- **Academic pressure and overprotection.**
  - **[recall, unverified]** These are widely discussed in Iranian media and research, for example around the konkur
    exam culture and pressure on school-age children.
  - I did **not** find good-quality Iranian studies on this in the time left. Do not state prevalence. Frame as "many
    parents feel pressure about school. Here is what helps" (autonomy-supportive homework help, which is already in the
    learning guides).
- **Inequality.** **[opened]** Stunting, underweight and caries are worse in rural, southeastern and low-income families
  (CASPIAN-IV, CASPIAN-V maps, Amiresmaili 2018). Content must work with no special toys and low data. CCD's household-
  objects approach fits.

---

## Contested points and overclaims to avoid

- **"Strong recommendation" ≠ "strong evidence of child benefit".** The WHO 2020 recommendations are strong, but many
  pooled child outcomes for responsive-care-only programmes were null or low certainty. Say "WHO recommends", not "proven
  to boost development".
- **"250 million children" is an LMIC estimate using poverty and stunting proxies (2010 data).** It is not about Iran, and
  it is not a count of children with delays. The 2024 "181.9 million" is a different metric (3–4-year-olds without
  adequate nurturing care).
- **"The first 1000 days decide everything."** The Lancet 2024 series and NCF both stress that development continues
  (the next 1000 days, middle childhood and adolescence). Avoid deterministic brain claims.
- **Digital parenting effect sizes.** Lin-Lewry's SMDs (1.06; 2.72) are implausibly large and heterogeneous. Real-world
  engagement is very low (ParentText 93.8% under a quarter; ParentApp 7.9% completion). Do not imply that using the app
  will change outcomes. Say "programmes like this have helped some parents" at most.
- **Iranian prevalence numbers.**
  - The 2014 child-abuse meta-analysis has impossible confidence intervals.
  - CASPIAN short-stature figures differ fourfold between waves because of different definitions.
  - The under-5 causes-of-death review is a preprint.
  - Cite cautiously and never as "X% of Iranian children are abused".
- **Vaccine schedule.** The opened table is the 1394 version. A 1403 revision exists. Do not present an unverified table
  as current.
- **Helplines.** 1480 is general counselling (Behzisti), not an addiction line (Find A Helpline). Hours changed in
  wartime. 190 and 4030 remain unverified. The poison-line public access (1490) conflicts with the WHO entry.
- **Medical-device line.** A "not a medical device" disclaimer does not protect an app that implies diagnosis (MHRA).
- **NHS Apps Library.** Its closure is unverified. Do not tell the owner that "getting into the NHS Apps Library" is a
  current route.

---

## App takeaways

**New guides (priority order)**
1. **"Five things every child needs"** (§1.6): NCF-based, plus a sixth card, "Look after yourself too". Sources: NCF
   2018, WHO ECD guideline 2020, CCD cards.
2. **"Your child's health checks in Iran"** (Persian-first): the visit ages, what happens at each (growth, development
   questionnaire, hearing, vision, teeth, drops, vaccines), and "bring the health card". Wording: «این زمان‌ها بر اساس
   برنامه کشوری مراقبت کودک سالم است. زمان دقیق را از مرکز خدمات جامع سلامت یا پایگاه سلامت خود بپرسید.»
3. **"Keeping children safe from injury"**: road and car seats, water and drowning, burns and hot liquids, poisons and
   medicines, falls. Ordered by Iranian mortality data. Prevention, not first aid (first aid is already in the app).
4. **"Feeding with love: hunger and fullness signals"** (responsive feeding): fills an NCF and WHO Rec. 3 gap.
5. **"Play with what you have"**: CCD age bands, household-object toys, and talk during chores.
6. **"When a parent feels low"** (perinatal and parental depression): WHO Rec. 4, signposting to 1480 and the health centre.
7. **"Working with grandparents"** (Iranian adaptation of the existing guide).

**Features**
- **"Next health check" reminder.** The parent enters the child's birthdate, and the app shows the next national visit age
  (information only, no scoring). It supports the national programme, so it helps with endorsement.
- **Iranian helpline card:** 123 and 1480 (verified on behzisti.ir) plus 115/110/125. Poison line only after a test call.
- **Engagement design:** strong first session, easy re-entry after gaps, light reminders, guided path, co-design with
  Iranian parents.
- **Trust layer on each guide:** sources, "reviewed by [role], [date]", "next review [date]", and a "report a mistake"
  link (works offline as a mailto or queued note).

**Exact safe wording (drafts)**
- Development: "Most children [do X] by about [age]. Children vary. If you are worried, or your child has lost a skill
  they had, talk to your health centre. They can do a development check." Never: "Your child is delayed."
- Vaccines: "Vaccines are given at birth, 2, 4, 6, 12 and 18 months and 6 years. Your child's health card shows which
  ones. A cold or loose stools are not usually a reason to wait; ask the health worker." (The ages are verified; the
  specific vaccine list is not current.)
- Poisoning: "If your child is drowsy, struggling to breathe or having a fit, call **115** now. Do not make them sick."
- Helplines: "**123**: if a child or adult is in danger, or for a family crisis (Welfare Organization). **1480**: free,
  confidential counselling, including for parenting and family worries (Welfare Organization)."

**Check with Iranian health staff before shipping**
1. Current (1403) vaccine table, especially IPV doses and any new vaccines.
2. Which visits use the standard development questionnaire (ASQ?) versus red flags, and whether the 1395 well-child
   revision has been superseded.
3. Vitamin A+D and iron drop start and stop ages and doses (the app should name the programme, not give doses).
4. Whether parents can see their child's SIB record (any parent portal).
5. School-entry assessment («سنجش نوآموزان»): components, timing and how parents register.
6. 1490 public access and hours. Whether 190 or 4030 are relevant to parents.
7. 123 normal (non-crisis) hours.
8. Whether any Iranian body (MoHME, FDA Iran, a university of medical sciences) reviews or endorses health-information
   apps, and what it asks for.

---

## Persian glossary

| Persian | English |
|---|---|
| مراقبت‌های ادغام‌یافته کودک سالم | Integrated well-child care (national programme) |
| مرکز خدمات جامع سلامت | Comprehensive health service centre |
| پایگاه سلامت | (Urban) health post |
| خانه بهداشت | (Rural) health house |
| بهورز | Behvarz, community health worker |
| مراقب سلامت | Health care provider (frontline worker) |
| پزشک خانواده | Family physician |
| سامانه یکپارچه بهداشت (سیب) | SIB, integrated electronic health record |
| پایش رشد | Growth monitoring |
| غربالگری تکامل / تست استاندارد / علائم هشدار (Red flags) | Developmental screening / standard test / red flags |
| غربالگری شنوایی نوزادان | Newborn hearing screening |
| غربالگری تنبلی چشم | Amblyopia screening |
| کم‌کاری تیروئید مادرزادی / فنیل‌کتونوری / کمبود G6PD | Congenital hypothyroidism / PKU / G6PD deficiency |
| قطره آهن / قطره ویتامین A+D | Iron drops / vitamin A+D drops |
| ایمن‌سازی / واکسن پنج‌گانه / فلج اطفال خوراکی و تزریقی / ب‌ث‌ژ / سه‌گانه / ام‌ام‌آر | Immunisation / pentavalent / oral and injectable polio / BCG / DTP / MMR |
| سنجش سلامت جسمانی و آمادگی تحصیلی نوآموزان | School-entry health and readiness assessment |
| سازمان بهزیستی کشور | State Welfare Organization (Behzisti) |
| اورژانس اجتماعی (۱۲۳) | Social Emergency (123) |
| صدای مشاور (۱۴۸۰) | Counsellor's Voice counselling line (1480) |
| مرکز اطلاع‌رسانی داروها و سموم (۱۴۹۰) | Drug and Poison Information Centre (1490) |
| اورژانس (۱۱۵) | Ambulance emergency (115) |
| مراقبت پاسخگو / مراقبت پرورشی | Responsive caregiving / nurturing care |
| فرصت‌های یادگیری زودهنگام | Opportunities for early learning |
| تنبیه بدنی | Physical (corporal) punishment |
| دورهمی | Family get-together |
| لالایی | Lullaby |

---

## Sources

**Global frameworks**
1. WHO, UNICEF, World Bank. *Nurturing Care for Early Childhood Development: a framework…* 2018 (full report and executive summary WHO/FWC/MCA/18.02). https://nurturing-care.org/resources/Nurturing_Care_Framework_en.pdf ; https://nurturing-care.org/resources/NCF_English.pdf [opened]
2. Nurturing Care site, "What is nurturing care" (dated 19 Nov 2020). https://nurturing-care.org/what-is-nurturing-care/ [opened]
3. WHO. *Improving early childhood development: WHO guideline.* 2020. PDF via Better Care Network: https://bettercarenetwork.org/sites/default/files/2020-04/9789240002098-eng.pdf [opened]; FAQ: https://cdn.who.int/media/docs/default-source/mca-documents/child/early-child-development/frequently_asked_questions_improving_ecd_who-guideline_2020_bd.pdf [opened]
4. WHO/UNICEF. *Care for Child Development – Counselling Cards.* https://www.unicef.org/media/91181/file/4-CCD-Counselling-Cards.pdf [opened]
5. Black MM et al. *Early childhood development coming of age: science through the life course.* Lancet 2017;389:77–90. doi:10.1016/S0140-6736(16)31389-7 (PMC5884058) [opened abstract]
6. WHO news release, 5 Oct 2016. https://www.who.int/news/item/05-10-2016-investing-in-early-childhood-development-essential-to-helping-more-children-and-communities-thrive-new-lancet-series-finds [opened]; EurekAlert release https://www.eurekalert.org/news-releases/762985 [opened]
7. Draper CE et al. *The next 1000 days: building on early investments…* Lancet 2024;404:2094–2116. doi:10.1016/S0140-6736(24)01389-8 [opened abstract]
8. Nores M et al. *The cost of not investing in the next 1000 days.* Lancet 2024. doi:10.1016/S0140-6736(24)01390-4 [opened abstract]
9. WHO et al. *INSPIRE: Seven strategies for ending violence against children.* 2016. https://www.unicef.org/media/66876/file/INSPIRE-SevenStrategies.pdf ; WHO page https://www.who.int/publications/i/item/inspire-seven-strategies-for-ending-violence-against-children [opened]

**Digital health**
10. Flujas-Contreras JM et al. *Technology-based parenting interventions… meta-analysis.* Psychol Med 2019. doi:10.1017/S0033291719000692 [opened abstract]
11. Lin-Lewry M et al. *Effects of digital parenting interventions on self-efficacy… meta-analysis.* Int J Med Inform 2024. doi:10.1016/j.ijmedinf.2024.105405 [opened abstract]
12. Aldridge et al. *Engaging parents in technology-assisted interventions for childhood adversity: systematic review.* JMIR 2024. doi:10.2196/43994 (PMC10837762) [opened abstract]
13. *Chatbot-based health interventions in LMICs: effective access, early attrition…* (ParentText, Jamaica/Malaysia/Philippines). npj Digital Public Health 2026. doi:10.1038/s44482-026-00027-5 [opened abstract]
14. *Who is (not) engaging with a digital parenting intervention in Tanzania?* (ParentApp). JMIR Pediatr Parent 2026. doi:10.2196/86129 [opened abstract]
15. *When intentions are translated into actions…* (ParentText South Africa, qualitative). Research Square 2026. doi:10.21203/rs.3.rs-10296995/v1 [opened abstract]
16. Brookings, *Chatbot for parent engagement and support.* https://www.brookings.edu/chatbot-for-parent-engagement-and-support/ [search]
17. Labrique A et al. *WHO digital health guidelines: a milestone…* npj Digit Med 2020 (PMC7501250), summarising WHO 2019 *Recommendations on digital interventions for health system strengthening* [opened]
18. NICE. *Evidence standards framework for digital health technologies* (ECD7), published 10 Dec 2018, updated 9 Aug 2022. https://www.nice.org.uk/corporate/ecd7 (PDF downloaded) [opened]
19. MHRA. *Medical device stand-alone software including apps.* Landing page updated 1 Jul 2023. https://www.gov.uk/government/publications/medical-devices-software-applications-apps ; guidance PDF https://assets.publishing.service.gov.uk/media/6abf6c8c943e890cb55e5e52/Medical_device_stand-alone_software_including_apps__including_IVDMDs.pdf [opened]
20. ORCHA Baseline Review / DTAC pages (Hywel Dda UHB apps library; orchahealth.com). https://hduhb.nhs.wales/digital/appslibrary/stages-of-review/read-more/orcha-baseline-review-obr [search]

**Iran: system**
21. *مراقبت ادغام یافته کودک سالم – پزشک* (W.C.C), دی ۱۳۹۷, بازنگری ۱۳۹۵. Hosted by Guilan UMS. https://rasht.gums.ac.ir/uploads/old/Contents/asset90/PHYSICIAN%20booklet%20dey%2097-koodakan.pdf [opened]
22. Ghorbani Kalkhajeh S et al. *The Integrated Electronic Health System in Iranian health centers.* BMC Prim Care 2023;24:53. doi:10.1186/s12875-023-02011-x [opened]
23. Iran PHC network descriptions (health houses, behvarz, HTP): search results including https://mjiri.iums.ac.ir/article-1-10131-en.pdf and https://pmc.ncbi.nlm.nih.gov/articles/PMC5632316 [search]
24. *کتاب جامع بهداشت عمومی*, ch. 10, Immunisation (SBMU e-book). https://phs.sbmu.ac.ir/uploads/PUBLIC-HEALTH-EBOOK/CHAPTER-10.pdf [opened]
25. Mehri SM et al. Immunisation article, *Behvarz* journal, Winter 1399. https://behvarz.mums.ac.ir/article_17223_cf26e7d8443ab8f1139ecaf10e352bbd.pdf [opened]
26. Yazd UMS snippet citing the 1403 national immunisation table [search only]
27. *Prevalence of genitalia malformation… nationwide screening survey at school entry.* Adv Biomed Res 2014. doi:10.4103/2277-9175.125648 [opened abstract]
28. Khaleghinezhad SA et al. *SWOT analysis of the Early Assessment and Intervention Program for Preschool Children in Iran.* Int J School Health 2026. doi:10.30476/intjsh.2026.106497.1504 [opened abstract]
29. Rafiei M et al. *Community-based amblyopia screening program… Iran 1996–2013.* Public Health 2017. doi:10.1016/j.puhe.2015.06.011; Ojaghi H et al. *Amblyopia prevention screening program in Ardabil.* Int J Prev Med 2016 (PMC4809124) [opened abstracts]

**Iran: data**
30. Mohammadi MR et al. *Prevalence and correlates of psychiatric disorders in a national survey of Iranian children and adolescents.* Iran J Psychiatry 2019 (PMC6505051) [opened abstract]; related IRCAP papers 2021 and 2024 (doi:10.3233/prm-190628; doi:10.1016/j.jpsychires.2021.06.018; doi:10.1007/s00787-024-02441-7) [opened abstracts]
31. Karami B, Abbasi M, Tajvar M. *Leading causes of death among under-five children in Iran: systematic review.* Research Square 2020. doi:10.21203/rs.3.rs-132227/v1 [opened abstract; preprint]
32. Azarbakhsh H et al. *Unintentional injuries in children in the south of Iran, 2004–2019.* BMJ Paediatr Open 2023. doi:10.1136/bmjpo-2023-002144 [opened abstract]
33. Farokhi R et al. *Unintentional injury mortality among children under five in northern Iran 2013–2022.* Sci Rep 2026. doi:10.1038/s41598-026-46126-4 [opened abstract]
34. Goodarzi E et al. *Inequality in the burden of road traffic injuries among children 0–14 in Iran (GBD 2019).* BMC Public Health 2025. doi:10.1186/s12889-025-25186-7 [search/abstract start]
35. Nazari M et al. *IDA in Iranian children under 6: meta-analysis.* J Blood Med 2019. doi:10.2147/JBM.S196102; Dehghani A et al. umbrella review, BMC Pregnancy Childbirth 2024. doi:10.1186/s12884-024-06575-z [opened abstracts]
36. Pourrostami K et al. *Vitamin D status and sleep duration… CASPIAN-V.* J Diabetes Metab Disord 2023. doi:10.1007/s40200-022-01146-5 [opened abstract]
37. Mansori K et al. *Prevalence of stunting in Iranian children under five: meta-analysis.* MJIRI 2018. doi:10.14196/mjiri.32.103 [opened abstract]
38. Heshmat R et al. *Economic inequality in underweight and short stature: CASPIAN-IV.* Arch Endocrinol Metab 2021. doi:10.20945/2359-3997000000280; Safari O et al. CASPIAN-V 2021. doi:10.1007/s40200-021-00831-1; Nasr M et al. CASPIAN-V map 2020. doi:10.34172/hpp.2020.37 [opened abstracts]
39. Jabbarian R et al. *Iranian early childhood dental caries: meta-analysis.* Evid Based Dent 2025. doi:10.1038/s41432-024-01078-4 [opened abstract]; Amiresmaili M et al. SES and caries meta-analysis, IJPVM 2018 (PMC6106133) [opened abstract]
40. Hashemi H et al. *High prevalence of refractive errors in 7 year old children in Iran.* IJPH 2016 (PMC4841874); Norouzirad R et al. Dezful 2015 (PMC4877718) [opened abstracts]
41. Behzadifar M et al. *Prevalence of exclusive breastfeeding in Iran: meta-analysis.* BMC Pediatr 2019. doi:10.1186/s12887-019-1776-0; Dalili H et al. J Pediatr Nurs 2019 [opened abstracts]
42. Mohammadi MR, Zarafshan H, Khaleghi A. *Child abuse in Iran: systematic review and meta-analysis.* Iran J Psychiatry 2014 (PMC4277799); Khazaei S et al. Kurdistan 2023. doi:10.1177/00912174231163740 [opened abstracts]
43. Mortazavi S et al. *Screen time and sleep duration… CASPIAN-V.* J Res Health Sci 2019 (PMC7183543) [opened abstract]

**Iran: helplines**
44. Behzisti (State Welfare Organization) news pages, accessed 17 Nov 2026:
    - 171896, 1480 free 24-h counselling (2026-03-04): https://www.behzisti.ir/news/171896/
    - 172004, 123 and 1480 24-hour (2026-03-05): https://www.behzisti.ir/news/172004/
    - 201451, national awareness survey (2026-08-24): https://www.behzisti.ir/news/201451/
    - 194819 (2026-07-19), 195665 (2026-07-21), 203522 (2026-09-02), 204831 (2026-09-09)
    - Tag pages /tag/۱۲۳ and /tag/۱۴۸۰
    [opened]
45. WHO. *World directory of poisons centres*, 2023 spreadsheet (Iran rows). https://cdn.who.int/media/docs/default-source/gho-documents/public-health-and-environment/ech-world-directory-of-poisons-centres-for-gho-2023.xlsx [opened]
46. Find A Helpline, Iran. https://findahelpline.com/countries/ir [opened, directory]

**Iran: culture**
47. Momtaz YA et al. *Grandparents–grandchildren relationship in Iran, 2017.* Clin Pract Epidemiol Ment Health 2018 (PMC6407660) [opened abstract]
48. Bahador RS et al. *Grandchildren's experiences in Iranian multigenerational families.* Research Square 2025. doi:10.21203/rs.3.rs-6794360/v1 [opened abstract; preprint]
49. Havighurst SS et al. *Cultural appropriateness of Tuning in to Kids in Germany, Turkey, Iran and China.* IJERPH 2022 (PMC9407904) [opened abstract]
50. Tirgari B et al. *Experiences of Iranian teen mothers with parenting stress.* Compr Child Adolesc Nurs 2020. doi:10.1080/24694193.2019.1651420 [opened abstract]

**Not verified this round:**
- Harris 2020 and Corralejo 2018 digital-parenting reviews.
- NHS Apps Library closure date.
- The current 1403 vaccine table.
- Supplement drop ages.
- Exact ASQ visit ages.
- School-entry assessment components.
- 123 normal hours; 190; 4030; 1490 public access.
- Any Iranian health-app accreditation route.
- Iranian studies on academic pressure and overprotection.
- A 2025 Lancet ECD update.
