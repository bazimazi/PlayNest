# 04 — Parents' mental health after a birth

Research notes for PlayNest phase 10, round 7. Researched 19 Nov 2026.

## 1. Scope, and what is already in the app

**Scope.** Mothers', fathers' and partners' mental health from pregnancy to the end of the first year, with a little on the
second year where it helps. Covers baby blues, postnatal depression, anxiety, frightening unwanted thoughts (OCD-type),
birth trauma, postpartum psychosis, suicide routes, fathers and partners, what helps (WHO Thinking Healthy and its peer-delivered
version, peer support, talking therapies, sleep, activity, partner and family support), the WHO 2022 guidance, effects on babies,
medicines in general terms only, and Iran (data, the Ministry's postnatal screening, services, the 40-day tradition). It ends
with one proposed guide and 14 tips for parents themselves.

House rules applied: teach, don't diagnose; no scores or self-tests; no medicine names or amounts; every red flag sends the parent
to a professional or the emergency number; safety first, then normalising; no guilt.

**Already in the app.** I read these and do not repeat them below except to flag a problem:

- `guides-you.ts`: `keeping-your-cool` (anger plan, "never shake a baby", safety callout), `running-on-empty` (burnout, with a
  depression callout), `you-two-after-baby` (couple strain, Family Foundations and Bringing Baby Home, "about 1 in 10 fathers").
- `guides-more.ts`: `dads-non-birth-parents` (safety callout "about 1 in 10 fathers"), `crying-curve` (walk-away plan).
- `crying.ts`: `PARENT_SUPPORT` — an unscored check-in, kind words, small things, the "I'm scared I might hurt my baby" screen,
  the "hurt myself" screen and the `whenToSeek` list (psychosis = emergency, OCD, birth trauma, partners). This is the app's
  crisis content and it is good. Its wording was drafted in phase 5 and still needs specialist review (its own comment says so).
- `helplines.ts` `IR`: Iran Crisis Text Line, 123, Yara's Voice 42152, 109, 1480. 190 extension 9 is on hold until a test call.
- `goals.ts` `first-year-together`: six practices, one of which ("One small thing for me") borrows from Thinking Healthy.
- Tips `low-mood` (tips.ts) and `you-dads-too` (tips-you.ts).
- `research_notes/PlayNest phase 5 app research/05_crying_soothing_parent_wellbeing.md`: prevalence, intrusive thoughts,
  screening tools and why the app must not score, crisis wording, safe messaging. This note builds on it and fills its gaps
  (newer father figures, Fairbrother's later work on intrusive thoughts, Thinking Healthy trial results, effects on children).

### Problems found in existing content

| # | Severity | File, slug | Exact line | Problem | Fix |
|---|---|---|---|---|---|
| 1 | **P2** | `src/data/goals.ts`, `BABY_YEAR_REFS.thinkingHealthy` (goal `first-year-together`) | `url: 'https://doi.org/10.1016/S0140-6736(08)61263-X'` | Crossref returns 404 for this DOI: the link is broken. The real DOI of Rahman et al. 2008 is 10.1016/S0140-6736(08)61400-2 (Crossref record [opened]). | Change the URL to `https://doi.org/10.1016/S0140-6736(08)61400-2` and the title to the full one: "…for mothers with depression and their infants in rural Pakistan: a cluster-randomised controlled trial". |
| 2 | **P2** | `src/data/guides-you.ts`, `running-on-empty`, last callout | "If you feel low or hopeless most days for two weeks or more, can’t enjoy anything, or have thoughts of escaping or harming yourself, talk to your doctor soon." | Puts thoughts of self-harm under "soon". The app's own crisis triage (`crying.ts` `whenToSeek`) says thoughts of suicide or self-harm are a "Today" matter, and NHS lists "thoughts of suicide, harming yourself or your baby" as a symptom needing help (NHS PND [opened]); NHS urgent-help page sends urgent mental-health needs to 111 or a GP, and 999 if you can't keep yourself safe [opened]. | Split it: "If you feel low or hopeless most days for two weeks or more, or can’t enjoy anything, talk to your doctor soon. If you have thoughts of harming yourself or ending your life, tell a doctor or a crisis line today. If you might act on them, call your emergency number now." |
| 3 | **P2** | `src/data/goals.ts`, `first-year-together`, `help` | The three `help` lines (shake/hurt baby; low mood 2 weeks; baby's crying red flags) | A first-year red-flag list that omits the two most urgent perinatal signs: thoughts of ending your life, and psychosis signs soon after birth (NHS, RCPsych [opened]). | Add: "Thoughts of ending your life, or a parent seeing, hearing or believing strange things or acting very unlike themselves soon after the birth: call your emergency number now. The person may not notice it themselves." |
| 4 | P3 | `src/data/guides-you.ts`, `you-two-after-baby` | "In men it can look like irritability, pulling away, working longer hours or drinking more, not only sadness." | No source found. The phase-6 note lists it under "App framing" with no citation. The NHS PND page lists irritability and restlessness for everyone, nothing male-specific [opened]. | Either find a national-body source or reword: "It can look like irritability, restlessness or pulling away, not only sadness." (NHS symptom list.) |
| 5 | P3 | `src/data/crying.ts`, `whenToSeek` (psychosis line) | "…is seeing, hearing or believing things that feel strange or frightening, is very confused, or has fast-changing moods." | Misses two signs that families notice first: feeling unusually high or energetic (mania: NHS, RCPsych [opened]) and a "decreased need for or an inability to sleep for more than 2 days" (US Office on Women's Health fact sheet [opened]). | Add "…feels unusually high or full of energy, or can't sleep or feels no need to sleep for two days or more…". Word it so ordinary newborn tiredness doesn't read as a red flag. |
| 6 | P3 | `src/data/crying.ts` refs | NHS postpartum psychosis page | The page's "next review due" date (18 Oct 2026) has passed [opened]. Content still matches RCPsych. | Recheck at the next review. |

Nothing in the existing content is P1. The "1 in 10 fathers" figures in `you-two-after-baby`, `dads-non-birth-parents` and the
`you-dads-too` tip still hold against newer meta-analyses (8.4% to 10.4%; §3.6).

## 2. How to read these notes

- **[opened]** I read the page, PDF or full text (Europe PMC `fullTextXML` for Rahman 2008, Wang 2021, Derakhshani 2023).
- **[abstract]** Abstract only, through the Europe PMC REST API.
- **[search]** Search snippets or summaries only. Must not reach the app until checked.
- **[recall, unverified]** Background knowledge not confirmed this session.

**Access problems.** postpartum.net (Postpartum Support International) failed twice with "socket closed", so **no PSI wording is
verified**; I used the US Office on Women's Health fact sheet (which points to PSI) instead. nice.org.uk returned 403 for CG192, so
NICE wording is [search] only. The NHS Start for Life "dads' mental health" URL was 404. WebFetch pages are summarised by a small
model, so quoted lines marked [opened] from web pages should be re-copied by hand before shipping (Recheck §10). PDFs (the US
fact sheet and the Iranian Ministry booklet) were read as extracted text.

**Searches.** 11 web searches, about 20 Europe PMC API queries, about 22 page, PDF or full-text fetches.

## 3. Findings

### 3.1 Baby blues

- NHS: "Feeling down, anxious or irritable for a few days after your baby is born is very common. This is sometimes called the
  baby blues, and it usually goes away within 2 weeks of the birth. But if it continues, gets worse or you're struggling to cope,
  it's important to get help." Reviewed 18 Mar 2026 [opened].
- RCPsych (Postnatal depression leaflet, published Nov 2018): "Over half of new mothers will experience the 'Baby Blues'", usually
  starting 3 to 4 days after birth and stopping by about day 10 [opened].
- Iran's Ministry of Health maternal care booklet (1402) describes «اندوه پس از زایمان» in the first two weeks: sadness, crying,
  restlessness, irritability, poor sleep and appetite. It tells health workers that blues in a mother with a past or pregnancy
  mental-health problem should be watched, because it may be the start of a more serious illness [opened].

### 3.2 Postnatal depression

- NHS symptom list [opened]: low mood; finding it hard to enjoy anything; feeling hopeless or that you cannot cope; feeling guilty
  or worthless, or that you're a bad parent; feeling fearful, anxious or worrying all the time; restless or irritable; difficulty
  sleeping even when you get time to rest; difficulty concentrating or making decisions; difficult feelings about, or difficulty
  bonding with, your baby; thoughts of suicide, harming yourself or your baby. Can start in pregnancy, soon after birth or up to a
  year after. "Fathers and partners can also have depression after having a baby."
- NHS on fear of losing the baby, verbatim [opened]: "You may be scared that your baby will be taken away if you ask for help or
  share how you're feeling, but this is very rare. Your care team will give you the support you need to care for your baby."
- RCPsych [opened]: "Women often worry that if they tell someone how they feel, their baby may be taken away… Actually your GP,
  health visitor and midwife will want to help you get better." On thoughts of harming the baby: "Depressed mothers often worry that
  they might do this, but it is very rare… most mothers never act on them. If you do feel like this, tell someone."
- NICE CG192 evidence material and an RCGP resource list "fear the baby may be taken away" as a reason women don't disclose, and
  advise asking about mental health separately from the baby check [search; NICE site 403].
- **How common.**
  - Global: 17.22% (95% CI 16.00 to 18.51), 565 studies, 80 countries; lower in high-income settings (Wang et al. 2021,
    meta-analysis) [abstract; Iran figure opened in full text, §6].
  - WHO 2022 launch: "Almost one in five women will experience a mental health condition during pregnancy or in the year after
    the birth" (UN News, 19 Sep 2022) [opened].
  - RCPsych: 10 to 15 in every 100 women [opened].
  - Most prevalence studies use symptom questionnaires (EPDS), not diagnostic interviews, so they overstate diagnosed illness.
    Use "common" or "about 1 in 6 to 1 in 5" rather than a precise figure.

### 3.3 Anxiety, and frightening unwanted thoughts (OCD-type)

- Anxiety after birth: symptoms 15.0%, any anxiety disorder 9.9% (Dennis 2017, meta-analysis; from the phase-5 note) [abstract].
- **Unwanted intrusive thoughts are close to universal.** Collardeau, Fairbrother et al. 2024, *J Clin Psychiatry*, prospective
  cohort of 763 pregnant women in British Columbia, interviewed twice after birth [abstract]:
  - thoughts of accidental harm (most often suffocation or sudden infant death) 95.8%; thoughts of intentional harm 53.9% (most
    often thoughts of neglect);
  - most intense in about the first 8 weeks; over 40% had moderate or extreme distress at the peak;
  - for most, the thoughts faded or stopped by 6 months; "UITs are a normative and typically self-resolving occurrence."
- **No link with harming the baby so far.** Beck, Fairbrother et al. 2026, *J Clin Psychiatry*, same cohort (n = 502): "Evidence to
  date has failed to find any association with physical aggression toward the infant." Unwanted thoughts of sexual harm (9.2%) were
  not associated with sexual behaviour towards the infant, but the sample was small and needs replication [abstract]. Fairbrother &
  Woody 2008 (100 women) found the same for aggressive parenting [phase-5 note, abstract].
- **What makes thoughts worse:** treating them as meaningful, feeling over-responsible and needing to control them were linked with
  more frequent and distressing thoughts (Pestana et al. 2026, scale development, 439 + 142 parents) [abstract]. This supports
  telling parents plainly that the thoughts are common, so they are less frightened by them.
- IOCDF expert opinion (Abramowitz, 2007): up to 80% of new mothers and over two-thirds of new fathers report unwanted scary thoughts;
  perinatal OCD probably 1% to 3% of childbearing women; the risk of someone with perinatal OCD acting on violent obsessions is
  "extremely low"; in OCD the person is terrified and resists the thought, while in psychosis violent thoughts may fit delusions
  [opened].
- US Office on Women's Health fact sheet (Oct 2024) [opened]: postpartum OCD signs include upsetting thoughts or images about the baby
  that come over and over, compulsions (cleaning, checking, counting), avoiding being alone with the baby or refusing to let trusted
  people hold the baby. "Women with postpartum OCD know that their thoughts are disturbing and are unlikely to ever act on them." The
  same sheet still says "If you're having thoughts about harming your baby, get help immediately" (by calling or texting 988).
- **Wording conclusion.** Normalise, but never with a blanket "you would never do it": the app can't tell OCD from depression,
  overwhelm or psychosis. Keep the existing order in `crying.ts` (safety first, then "having them is not the same as wanting to act",
  then "tell a doctor"). Add the new facts in the guide, not on the crisis screen.

### 3.4 Birth trauma (post-traumatic stress after birth)

- Heyne et al. 2022, *Clin Psychol Rev*, meta-analysis of 154 studies (n = 54,711): birth-related PTSD in mothers 4.7%, significant
  post-traumatic stress symptoms 12.3%; fathers 1.2% and 1.3%. Higher in at-risk groups [abstract].
- Yildiz 2017 (phase-5 note): 4.0% community, 18.5% high-risk [abstract].
- Parents of babies in neonatal intensive care: a 2023 systematic review found wide variation, self-report only (McKeown 2023)
  [abstract]. No pooled figure to use.
- NICE CG192 advises against single-session debriefing focused on the birth [recall, unverified; NICE 403]. Not for the app.

### 3.5 Postpartum psychosis (emergency)

- NHS [opened; reviewed 18 Oct 2023, next review was due 18 Oct 2026]: around 1 in 1,000 mothers; usually starts suddenly within
  the first 2 weeks, often within hours or days, rarely several weeks later. Symptoms: hallucinations, delusions, manic episodes,
  low mood, mixed or rapidly changing moods, feeling very confused. Higher risk with bipolar disorder or schizophrenia, a family
  history (especially of postpartum psychosis), or a previous episode. Action: see a GP immediately for a same-day assessment; 111
  if a GP can't be reached; the crisis team if there is a care plan; **A&E or 999 if there is danger of imminent harm**. "Be aware
  that if you have postpartum psychosis, you may not realise you're ill." Most people make a full recovery with the right
  treatment; severe symptoms usually last 2 to 12 weeks, full recovery 6 to 12 months or more.
- RCPsych [opened; published Nov 2018]: about 1 in 1,000 (0.1%); usually in the first two weeks, often the first few days. "It is a
  psychiatric emergency - you should seek help as quickly as possible": crisis plan, same-day GP or A&E; ideally a Mother and Baby
  Unit. Higher risk with bipolar I or schizoaffective disorder, a previous episode or a close relative who had one. Lists
  "disturbed sleep patterns" as one possible contributing factor and advises as much sleep and rest as possible late in pregnancy
  and after birth. About 1 in 2 who have had it have another episode after a later birth.
- Action on Postpartum Psychosis [opened, © 2026]: "begins suddenly in the days and weeks after having a baby"; "Some people who get
  PP have no previous history of mental illness"; "PP can get worse very quickly and should always be considered as a medical
  emergency"; "Almost all mums recover fully".
- US Office on Women's Health fact sheet [opened]: signs include delusions, hallucinations, feeling irritable or agitated, being very
  talkative or unable to sit still, "decreased need for or an inability to sleep for more than 2 days", paranoia, rapid mood swings,
  difficulty communicating; "a mental health emergency that needs urgent medical attention"; go to an emergency room immediately.
- A 2026 qualitative paper gives 1 to 2 per 1,000 births (Scalise et al. 2026, citing earlier work) [abstract].
- Iran Ministry booklet: in very rare cases, severe postnatal depression plus delusions, hallucinations or severe aggression, called
  «جنون پس از زایمان», which can put mother and baby at serious risk [opened].

### 3.6 Fathers and partners

- Rao et al. 2020, *J Affect Disord*, meta-analysis of 47 studies (n = 20,728) [abstract]: fathers' depression in pregnancy 9.76%;
  in the year after birth 8.75% (8.98% in the first month, 7.82% at 1 to 3 months, 9.23% at 3 to 6 months, 8.40% at 6 to 12 months).
- Cameron 2016: 8.4% (74 studies). Paulson & Bazemore 2010: 10.4%, with 25.6% at 3 to 6 months in a subgroup (phase-5 note)
  [abstract]. Rao's flat curve does not reproduce Paulson's 3-to-6-month peak, so don't use the 25.6%.
- Paternal and maternal depression are moderately correlated (r ≈ 0.31; Paulson 2010) [abstract].
- Birth-related PTSD in fathers 1.2% (Heyne 2022) [abstract].
- A West Yorkshire NHS partnership page says "around 1 in 5 men" [opened], far above the meta-analyses. Do not use it.
- The US fact sheet and the NHS page stress that partners, family or friends may need to act when psychosis is suspected [opened].

### 3.7 Suicide

- WHO 2022 launch (UN News): around 20% of women with perinatal mental health conditions "will experience suicidal thoughts or
  undertake acts of self-harm" [opened].
- MBRRACE-UK 2025 (2021–23 deaths, 643 women): "Maternal suicides were the leading cause of death occurring between six weeks and one
  year after the end of pregnancy" (NHS Providers/NHS Alliance summary) [opened, secondary summary]. Psychiatric causes about a third
  of late deaths; suicides more common in deprived areas [search].
- Use this for the team's reasoning (why the app must route suicide thoughts clearly), **not** in parent-facing copy: Samaritans'
  2026 guidelines warn against statistics on crisis screens (phase-5 note) and the figure frightens without helping.
- NHS urgent help page (reviewed 23 Oct 2026) [opened]: 999 or A&E if "someone's life is at risk" or "you do not feel you can keep
  yourself or someone else safe"; 111 or an urgent GP appointment if "you need urgent help for your mental health"; Samaritans 116 123.

### 3.8 What helps

**Guidelines**

- WHO 2022 postnatal guideline (BIGG-REC copy) [opened]: "Screening for postpartum depression and anxiety using a validated
  instrument is recommended" with diagnostic and management services for those who screen positive (recommended; low-certainty
  evidence). All women should be asked about their emotional wellbeing at every postnatal contact. Women at risk should be offered
  psychosocial and/or psychological interventions to prevent depression and anxiety (Recommendation 19). WHO's news release adds
  "Encouragement of partner involvement" [opened].
- WHO *Guide for integration of perinatal mental health in maternal and child health services* (19 Sep 2022, 66 pages, CC BY-NC-SA 3.0
  IGO) [opened summary page]: for programme managers; a respectful, caring environment "free from stigmatization"; helps providers
  promote mental health, identify symptoms and respond in a way adapted to local culture. UN News adds: treat mild conditions within
  maternal and child services and refer moderate to severe ones; a core team, a needs assessment, training and supervision [opened].
- NHS self-help [opened]: talk to someone you trust, ask for practical help, exercise, join a support group, rest, do enjoyable things;
  avoid alcohol or drugs to manage symptoms. Treatment: talking therapies such as CBT; "Many antidepressants are safe to use while
  breastfeeding" (tell the doctor you are breastfeeding). The summariser reported "usually gets better in 3 to 6 months"; re-copy
  before use.
- RCPsych [opened]: for many antidepressants there is no evidence of problems for breastfed babies. Partners: spend time with the
  person, help with practical things. Take every chance to rest.
- US fact sheet [opened]: therapy, medicine in some cases, support groups, rest, food, activity, social support.

**Talking therapies**

- Cuijpers et al. 2026, *JAACAP*, meta-analysis of 47 randomised trials (7,745 participants) of psychological treatment for depressed
  pregnant women and mothers [abstract]: moderate effect on mothers' depression (SMD 0.57, 95% CI 0.43 to 0.70); small effects on
  parental functioning or couple distress (g 0.23), mother–child interaction (g 0.34) and child mental health (g 0.29); no
  significant effect on child development, height or weight. High heterogeneity; some results not robust in sensitivity analyses.
  Authors: treatment "probably has small but significant effects" on the family.
- Internet-based treatments for perinatal depression: small effect (SMD 0.29), better response and remission (individual-patient
  meta-analysis of 9 trials, Ciharova 2026) [abstract].

**WHO Thinking Healthy Programme (trials)**

- Rahman et al. 2008, *Lancet*, cluster RCT, 40 union councils in rural Rawalpindi, 903 depressed pregnant women [opened full text]:
  - delivered by trained Lady Health Workers (government community health workers): weekly for 4 weeks in late pregnancy, 3 sessions in
    the first postnatal month, then 9 monthly sessions; CBT techniques (active listening, "collaboration with the family", guided
    discovery, homework) built into routine health visits;
  - major depression at 6 months 23% vs 53% (adjusted OR 0.22, 0.14 to 0.36); at 12 months 27% vs 59% (OR 0.23);
  - **primary outcome (infant growth) did not differ**; in the discussion, infants in the intervention group had fewer diarrhoea
    episodes and were more likely to be immunised, and both parents reported more time playing with their babies.
- Maselko et al. 2015, *Lancet Psychiatry*, 7-year follow-up of 584 of the children [abstract]: **no difference** in cognitive,
  socioemotional or physical development between the intervention and control groups. Both groups of children whose mothers had
  prenatal depression had somewhat more emotional and anxiety difficulties than a reference group whose mothers did not.
- Peer-delivered version (THPP; mothers from the community, trained and supervised):
  - Goa, India (Fuhr et al. 2019, *Lancet Psychiatry*, individually randomised, n = 280) [abstract]: remission at 6 months 73% vs 60%
    (prevalence ratio 1.21, 1.01 to 1.45); no difference in symptom severity (SMD −0.18, −0.43 to 0.07). "Moderate effect on
    remission"; cost-saving.
  - Rawalpindi, Pakistan (Sikander et al. 2019, *Lancet Psychiatry*, cluster RCT, n = 570) [abstract]: **no significant difference**
    in severity (SMD −0.13, p = 0.07) or remission (49% vs 45%); some benefits on other severity and disability measures;
    cost-effective.
  - Pooled mediation analysis: effects worked through patient activation and social support (Singla et al. 2021) [abstract].
- A Turkish pilot of a 5-session group version in antenatal classes was feasible; small trends only (Boran 2023) [abstract].
- **Reading:** Thinking Healthy has strong trial evidence when delivered by trained health workers; the peer version helped in one
  trial and not significantly in the other; benefits to children's long-term development were not shown. The goal's line ("Planning
  small, valued moments and involving family are at the heart of WHO's Thinking Healthy approach") is accurate and makes no outcome
  claim. Keep it that way.

**Peer support**

- Dennis et al. 2009, *BMJ*, multisite RCT, Ontario, 701 mothers at high risk in the first two weeks [abstract]: phone support from a
  volunteer mother who had recovered from postnatal depression (4-hour training). At 12 weeks, 14% vs 25% scored above 12 on EPDS.
  A larger Australian trial (DAISY, n = 1,060) is under way (protocol 2024) [abstract].

**Sleep**

- Actigraphy meta-analysis (Sobol et al. 2024, 19 studies): total night-time sleep after birth was the sleep measure most strongly
  linked with postpartum depression [abstract]. Observational: a link, not proof.
- No trial of "protected sleep" for preventing postnatal depression was found this session. Experts advise rest (NHS, RCPsych), and
  sleep loss is a listed factor in psychosis (RCPsych) [opened]. Say "experts advise" and "is linked with".
- Douglas & Hill 2013 review: behavioural infant-sleep programmes in the first six months have not been shown to protect against
  postnatal depression (round-4 note) [abstract]. Don't sell sleep training as a mood treatment.

**Physical activity**

- Mohr et al. 2026, *eClinicalMedicine*, umbrella review of 20 meta-analyses of trials: activity reduced perinatal depressive symptoms,
  moderate certainty (SMD −0.56); light intensity similar to moderate; may reduce anxiety (more limited) [abstract].
- de Faria et al. 2026, 17 trials: for prevention after birth, SMD −0.33 with very low certainty [abstract]. So: "trials suggest it
  helps a little", not a treatment on its own.

**Partners and family**

- Stein et al. 2014, *Lancet* series: modifiable factors that change the link between a parent's illness and the child's outcomes
  include parenting quality, social (including partner) and material support, and how long the illness lasts [abstract].
- Grigoriadis et al. 2009 (systematic review of postpartum rituals and depression, 12 studies): "the key protective element may be the
  presence of welcome support rather than the specific ritual" [abstract]. Dennis et al. 2007 (51 studies, 20+ countries): rituals let
  the mother be "mothered" for a time; with modernisation and migration some can't keep them, and others "feel pressured to carry out
  activities in which they no longer believe" [abstract].
- Couple programmes (Family Foundations, Bringing Baby Home) are already covered in `you-two-after-baby`.

**Medicines (general only, by rule)**

- NHS and RCPsych both say medicines may be offered and that many can be used while breastfeeding; tell the doctor you are breastfeeding
  [opened]. The app should say only: "If medicine is suggested, some can be used while breastfeeding. Your doctor can choose one with
  you." No names, no amounts.

### 3.9 Effects on babies (honest, no blame)

- Stein et al. 2014: perinatal mental disorders "are associated with increased risk of psychological and developmental disturbances in
  children. However, these disturbances are not inevitable." The authors stress treating the parent and helping with caregiving
  [abstract].
- UN News on the WHO guide: neglecting maternal mental health "impacts infants' physical and emotional development" [opened]. This is
  advocacy wording; the app should use Stein's "linked with… not inevitable".
- Treatment helps the family a little (Cuijpers 2026, above). The one long follow-up of Thinking Healthy found no lasting difference
  in children at 7 (Maselko 2015). So the honest message is: getting help is good for you, it may help your relationship with your baby
  a little, and babies are resilient. No promise that treatment "protects" a child's development.

## 4. Where bodies disagree

| Question | Position A | Position B | App's path |
|---|---|---|---|
| Postpartum psychosis: which route? | NHS: same-day GP, 111, or 999/A&E if imminent harm | RCPsych "psychiatric emergency"; APP "always… a medical emergency"; US fact sheet: ER immediately | Cautious: emergency number now (Iran 115). Already so in `crying.ts`. |
| Baby blues frequency | RCPsych: over half | NHS: "very common", no number | Say "very common". |
| Fathers' depression | Meta-analyses 8.4% to 10.4% | One NHS partnership page "1 in 5"; Paulson subgroup 25.6% at 3–6 months | "About 1 in 10". |
| Screening | WHO 2022: universal screening with a validated tool (low certainty); Iran uses EPDS at two postnatal visits | UK NSC/SIGN 127: EPDS not as a screening tool, only as a conversation aid (phase-5 note) | The app never screens or scores. It can tell Iranian parents that the health centre will ask about mood, and that answering honestly gets help. |
| Thoughts of harming the baby | IOCDF: risk "extremely low" in OCD; Fairbrother cohort: no link with aggression | US fact sheet: get help immediately (988) | Both: they are common and not a sign of danger, **and** tell a doctor; emergency if the thoughts feel right, or come with strange beliefs or fear of not stopping yourself. |
| Peer-delivered Thinking Healthy | India trial: better remission | Pakistan trial: no significant difference | Don't claim peer programmes "work"; say "in some trials". |
| Postpartum rituals | Can bring welcome support (Grigoriadis, Dennis) | Not consistently protective; some feel pressured (Dennis) | Respect the 40 days; frame the value as rest and wanted company. |

## 5. Claims the app must NOT make

1. "You would never act on these thoughts" or "intrusive thoughts are harmless", as a blanket statement (the app can't tell OCD from psychosis).
2. Any self-test, symptom score or EPDS cut-off, even though Iran's health centres use the EPDS. No "you may have postnatal depression" result.
3. Any medicine name, class-by-name, amount, or "antidepressants are safe". Only "some can be used while breastfeeding; ask your doctor".
4. "Your baby will never be taken away." NHS says "very rare", not never.
5. "Postnatal depression damages your baby's development", or that treatment "protects" development. Use "is linked with… not inevitable".
6. "Postpartum psychosis means your baby is in danger", or any statistic about harm to babies.
7. Suicide statistics (MBRRACE, WHO 20%) on any parent-facing screen.
8. "Thinking Healthy / peer support cures depression", or "halves depression" outside the specific trial.
9. "1 in 4 Iranian mothers has postnatal depression": these are questionnaire rates from older studies with wide variation.
10. "1 in 4 fathers" or "1 in 5 fathers".
11. "Sleep training prevents postnatal depression" or "protected sleep prevents depression" (no trial found).
12. "Staying at home for 40 days prevents depression", or the opposite, that the tradition is harmful.
13. Anything about folk beliefs such as «آل»: no endorsement, no ridicule; leave them out.
14. "Baby blues need no attention." NHS: get help if they continue, get worse or you are struggling.

## 6. Iran

### 6.1 Data

- Wang et al. 2021 global meta-analysis, Iran subgroup: **18 studies, 24.41% (95% CI 17.18 to 33.43)**, n = 15,753; Western Asia
  19.83% [opened full text]. Heterogeneity 99%.
- Veisani et al. 2013, *Depression Research and Treatment*, 41 Iranian studies: pooled 25.3% (22.7 to 27.9); higher with unwanted
  pregnancy (43.4%), past depression (45.2%), illiteracy and being a housewife [abstract].
- An earlier Persian meta-analysis (Veisani & Sayehmiri, *Iranian Journal of Obstetrics, Gynecology and Infertility*, 1391/2012, 15
  studies 1381–1389): about 28%, range 3% to 43% across studies [search].
- These are mostly EPDS questionnaire rates, many from before 2012. No good-quality recent national figure, and none for fathers,
  was found. **Gap:** search SID and Magiran directly for 2018–2026 meta-analyses and any Iranian father data.

### 6.2 The Ministry's postnatal screening in primary care

Source: «برنامه کشوری مادری ایمن: مراقبت‌های ادغام‌یافته سلامت مادران (راهنمای خدمات خارج بیمارستانی)، ویژه مراقب سلامت – بهورز،
تجدید نظر نهم، ۱۴۰۲», Ministry of Health, اداره سلامت مادران, with the دفتر سلامت روانی، اجتماعی و اعتیاد; copy hosted by Ahvaz
(Jundishapur) University of Medical Sciences, May 2024 [opened, text extracted from PDF].

- Routine postnatal care is **three visits: days 1 to 3, days 10 to 15, and days 30 to 42** after birth.
- **Postnatal depression screening (section ت-۷) with the Edinburgh scale at the second and third visits**, done by the مراقب سلامت or
  بهورز. Referral bands: retest in a month; non-urgent referral to a doctor; urgent referral to a doctor for the highest scores
  (the app must not reproduce these bands).
- Health workers teach mothers about blues, depression and the emotional support of the husband and close relatives at postnatal
  visits, and list «افسردگی شدید» among signs that need prompt attention at a health centre.
- The booklet names «جنون پس از زایمان» as very rare and dangerous for mother and baby.
- Pregnancy: a TUMS pre-pregnancy guide and a search summary say short distress questionnaires are used in pregnancy with suicide
  screening and doctor assessment if positive [search]. Not confirmed in the 1402 booklet I read, which covers substance use and
  partner-violence referral to the کارشناس سلامت روان in pregnancy.
- An IUMS process guideline (1399) says people with suicidal thoughts identified by a بهورز, midwife, مراقب سلامت or doctor are
  referred to the کارشناس سلامت روان, and the county mental health lead follows up [search].
- **App use (Persian copy):** "At your health centre or health house, the مراقب سلامت or بهورز will ask how you've been feeling at
  your postnatal visits. Answer honestly: it's how you get help." Each claim sourced to the booklet.

### 6.3 Services for the guide's Persian version

- **115** emergency (ambulance): for psychosis signs, or if a parent might act on thoughts of suicide or of harming the baby.
- **123** social emergency (State Welfare Organisation): danger to a child or adult, family crisis, suicide risk. Verified on behzisti.ir in
  round 4; usual hours not confirmed.
- **1480** صدای مشاور: free, confidential counselling, usually 8:00 to midnight. Verified on behzisti.ir in round 4. National survey:
  only 10% had heard of 1480 (behzisti.ir, 2026) — a reason to name it.
- **مرکز خدمات جامع سلامت / خانه بهداشت**: postnatal visits and EPDS screening (6.2); referral to the doctor and کارشناس سلامت روان.
- **190** (Ministry free psychological counselling; about 700 experts in shifts; the head of the Ministry's mental health office, Shargh
  17 Farvardin 1405) [opened news report]: still **on hold** until a test call, as `helplines.ts` already says.
- No Iranian mother-and-baby psychiatric unit was found. Don't promise one.

### 6.4 The 40 days (چله) and family support

- Derakhshani et al. 2023, qualitative study, 20 mothers in Qom hospitals from several regions (2019–2020) [opened full text]:
  mothers often avoid public gatherings and stay home for up to 40 days; several said they should **not be left alone for 40 days**;
  rest and less activity; warm, nourishing foods; prayer described as a source of support and inner peace. The authors recommend
  understanding beliefs first, then correcting only harmful ones.
- Grigoriadis 2009 and Dennis 2007 (3.8): the protective part seems to be welcome support and rest, not the ritual itself; some
  mothers feel pressured.
- **Respectful framing for the Persian guide:** "The 40 days after birth are a time when many families make sure the mother rests and
  isn't left alone. That rest and company can be a real help. Say which help you want; and if you still feel low, worried or not like
  yourself, tell your health worker. Feeling low during the 40 days is not a failure of the tradition, or of you." Avoid naming folk
  beliefs. No religious rulings.

## 7. Recommended guide outline

**Slug:** `your-mind-after-birth`
**Title:** Your mind after a baby
**Summary:** Blues, low mood, worry, frightening thoughts and birth trauma: what's common, what's urgent, and what helps.
**Age range:** 0 to 24 months. **Shelf:** you. **Minutes:** about 5.
**Related:** link to `running-on-empty`, `you-two-after-baby`, `dads-non-birth-parents`, and the Help screen (`PARENT_SUPPORT`).
**For:** mothers, fathers, partners and any parent; say so in the first paragraph.

Blocks (each line traced to a tagged fact):

1. **callout, safety (first block).** "Call your emergency number now if you might act on thoughts of ending your life or of hurting
   your baby, or if a parent is seeing, hearing or believing strange things, feels unusually high, can't sleep or feels no need to sleep for days
   (more than tiredness), or is very confused, especially in the first weeks after birth. The person may not notice it, so someone else may need to call."
   (NHS PND and psychosis; RCPsych; APP; US fact sheet [opened].)
2. **p.** "Having a baby changes your body, your sleep and your days. Feeling up and down is normal. For some parents, mothers,
   fathers and partners alike, it becomes more than that, and help works." (NHS [opened]; Rao 2020 [abstract].)
3. **h** "Baby blues" + **p.** "In the first days after birth, many mothers feel tearful, anxious or irritable. It usually passes within
   2 weeks. If it lasts longer, gets worse, or you're struggling, ask for help." (NHS; RCPsych [opened].)
4. **table** — head: `What it can be` · `How it can feel` · `What to do`. Rows (no empty cells):
   - Postnatal depression · Low, hopeless, no joy, guilty, can't sleep even when you can, hard to bond · See your doctor or health worker
     if it lasts 2 weeks or more (NHS).
   - Anxiety · Worrying all the time, restless, a sense that something bad will happen · See your doctor or health worker (NHS; US
     fact sheet).
   - Frightening unwanted thoughts · Sudden images or thoughts of your baby being hurt, checking again and again · Tell a doctor;
     this is common and treatable (Collardeau 2024; IOCDF; NHS OCD).
   - Birth trauma · The birth keeps coming back, with fear, nightmares or avoiding reminders · Tell your doctor; partners can have it
     too (Heyne 2022).
   - Postpartum psychosis · Strange beliefs, hearing or seeing things, very high or fast-changing moods, confusion, no need for sleep ·
     Emergency: call now (NHS; RCPsych; APP).
5. **h** "Frightening thoughts are common" + **p.** "In a study that followed hundreds of new mothers, almost all had sudden thoughts of
   their baby being hurt by accident, and about half had unwanted thoughts of harming the baby themselves. They were strongest in the
   first two months and usually faded by six. Studies so far have not found these unwanted thoughts linked to harming babies. If they
   frighten you or keep coming back, tell a doctor: it's common and it can be treated." (Collardeau 2024; Beck 2026 [abstract];
   IOCDF [opened].) Plus: "If the thoughts feel right to you, or come with strange beliefs, that's different: call your emergency
   number." (IOCDF; NHS psychosis [opened].)
6. **callout, tip.** "Worried that asking for help means losing your baby? This is very rare. Health workers want to help you get
   better and care for your baby." (NHS; RCPsych [opened].)
7. **h** "Fathers and partners" + **p.** "About 1 in 10 fathers have depression in pregnancy or the year after a birth, and it's more
   likely when the mother is struggling too. A partner may also be the first to notice when something is very wrong." (Rao 2020;
   Paulson 2010 [abstract]; NHS psychosis [opened].)
8. **steps — "What helps"** (titles):
   - *Tell one person today*: a partner, friend or health worker. (NHS self-help [opened].)
   - *Ask for specific help*: meals, a nap, someone to sit with you. (NHS; RCPsych partners [opened].)
   - *Protect some sleep*: take turns at night so each adult gets one longer stretch. Short nights are linked with low mood. (Sobol
     2024 [abstract]; RCPsych [opened]; experts advise.)
   - *Move a little*: a walk with the pram counts. Trials suggest light activity eases low mood. (Mohr 2026 [abstract].)
   - *Talk to someone trained*: talking therapies help many parents. (NHS [opened]; Cuijpers 2026 [abstract].)
   - *Talk to parents who've been there*: support from other parents helped in some trials. (Dennis 2009; Fuhr 2019 [abstract].)
   - *If medicine is suggested*: say if you breastfeed; some medicines can be used while breastfeeding. (NHS; RCPsych [opened].)
9. **callout, science.** "Trials show talking treatments help parents with depression after a birth: in a review of 47 trials the effect
   was moderate. In one large trial in villages, mothers visited by trained community health workers using WHO's Thinking Healthy
   approach were much less likely to still be depressed a year later. Versions run by trained local mothers helped in one trial but not
   clearly in another. We don't know yet which parts matter most." (Cuijpers 2026; Rahman 2008 [opened]; Fuhr 2019; Sikander 2019
   [abstract].) Keep country names out for an easy Persian version.
10. **h** "And your baby?" + **p.** "Long-lasting low mood in a parent is linked with more difficulties for some children, but this is not
    inevitable. Babies are resilient, and support from a partner or family makes a difference. Getting help is good for you, and in
    trials it helped parents and babies get on a little better." (Stein 2014; Cuijpers 2026 [abstract].) No "damage", no blame.
11. **h** "Rest and family" + **p.** "Many families have traditions of rest and company after a birth. Research suggests the part that helps
    is support the mother actually wants. Say what would help you." (Grigoriadis 2009; Dennis 2007 [abstract].) Persian version adds the
    چله paragraph (§6.4) and the health-centre visits (§6.2).
12. **callout, safety (last block).** "See your doctor or health centre soon if low mood, worry or no joy last 2 weeks or more, if
    frightening thoughts keep coming back, or if the birth keeps replaying. If you have thoughts of ending your life, tell a doctor or a
    crisis line today. Help, top right, lists people to call." (NHS PND and urgent help [opened]; `crying.ts` triage.) Persian adds: 1480
    for counselling, 123 for danger or suicide risk, 115 for an emergency.

**refs:** NHS PND; NHS postpartum psychosis; NHS urgent help; RCPsych PND; RCPsych postpartum psychosis; APP; US OWH fact sheet;
IOCDF; Collardeau 2024; Beck 2026; Heyne 2022; Rao 2020; Paulson 2010; Cuijpers 2026; Rahman 2008; Fuhr 2019; Sikander 2019; Dennis
2009; Mohr 2026; Sobol 2024; Stein 2014; Grigoriadis 2009; Dennis 2007; WHO 2022 guide; WHO 2022 postnatal recommendation. Persian:
Ministry booklet 1402; behzisti.ir 123/1480; Derakhshani 2023; Wang 2021 (Iran row).

## 8. Daily tips (for parents themselves)

| id | Months | Tip | Source |
|---|---|---|---|
| `mind-blues` | 0–1 | Tearful and up and down in the first days? Baby blues are very common and usually pass within two weeks. If they last or worsen, tell your health worker. | NHS PND [opened] |
| `mind-scary-thoughts` | 0–6 | Sudden scary thoughts of your baby being hurt are very common in the early weeks and usually fade. If they frighten you or keep coming back, tell a doctor. | Collardeau 2024 [abstract]; NHS OCD |
| `mind-not-taken` | 0–12 | Afraid that asking for help means losing your baby? This is very rare. Health workers want to help you get better and care for your baby. | NHS PND; RCPsych [opened] |
| `mind-psychosis` | 0–3 | Strange beliefs, hearing things, feeling unusually high, or no need for sleep for days, soon after birth is an emergency. Call your emergency number: the parent may not notice. | NHS; RCPsych; US OWH [opened] |
| `mind-partners` | 0–12 | About 1 in 10 dads and partners get depressed around a birth. Ask each other, "How are you, really?" and listen to the answer. | Rao 2020 [abstract]; NHS PND [opened] |
| `mind-talk-therapy` | 0–24 | Talking therapies help many parents with low mood after a birth. Ask your doctor or health centre. You don't need to be at breaking point. | NHS [opened]; Cuijpers 2026 [abstract] |
| `mind-medicine-feeding` | 0–24 | If a doctor suggests medicine and you breastfeed, say so. Some medicines for low mood can be used while breastfeeding. | NHS; RCPsych [opened] |
| `mind-peer` | 0–12 | Talking with a parent who has been through it can help. In one trial, phone support from such mothers meant fewer had depression symptoms at three months. | Dennis 2009 [abstract] |
| `mind-sleep` | 0–12 | Take turns at night so each adult gets one longer sleep. Short nights after a birth are linked with low mood. | Sobol 2024 [abstract]; RCPsych [opened] |
| `mind-walk` | 0–24 | A short walk with the pram counts. Trials suggest light activity eases low mood in pregnancy and after birth. | Mohr 2026 [abstract] |
| `mind-birth-trauma` | 0–24 | A birth that keeps replaying, with fear or nightmares, can be birth trauma. Partners can have it too. Tell your doctor: support is available. | Heyne 2022 [abstract]; US OWH [opened] |
| `mind-help-family` | 0–24 | Getting help for your low mood helps your family too. In trials, therapy for mothers went with slightly better parent–baby interaction. | Cuijpers 2026 [abstract] |
| `mind-welcome-help` | 0–2 | In the first weeks, say which help you want: a meal, a nap, company. Research suggests welcome support is what helps mood most. | Grigoriadis 2009 [abstract] |
| `mind-today` | 0–24 | Thoughts of ending your life are a reason to get help today. Tell a doctor or call a crisis line. If you might act, call your emergency number. | NHS PND; NHS urgent help [opened] |

All 14 are 30 words or fewer (counted). `mind-today` should be checked against safe-messaging guidance by the clinical reviewer
before it goes into a rotating daily-tip feed; it may be better shown only in the guide and Help screen, never as a push or surprise
tip (Samaritans on push notifications, phase-5 note).

## 9. Persian glossary

| English | Persian | Note |
|---|---|---|
| Baby blues | اندوه پس از زایمان | Ministry booklet term |
| Postnatal depression | افسردگی پس از زایمان | |
| Perinatal (pregnancy and the year after) | دوران بارداری و پس از زایمان | Simpler than «پری‌ناتال» |
| Anxiety | اضطراب | |
| Frightening unwanted thoughts | افکار مزاحم ناخواسته | |
| Obsessive-compulsive disorder | وسواس فکری-عملی | |
| Birth trauma / post-traumatic stress | تجربهٔ زایمان آسیب‌زا / اختلال استرس پس از سانحه | |
| Postpartum psychosis | روان‌پریشی پس از زایمان | The Ministry booklet uses «جنون پس از زایمان»; «جنون» is stigmatising in everyday speech. Reviewer to choose; give both once. |
| Hallucination / delusion | توهم / هذیان | |
| Mania, unusually high mood | سرخوشی غیرعادی، پرانرژی بودن بیش از حد | |
| Talking therapy | درمان با گفت‌وگو (روان‌درمانی) | |
| Peer support | حمایت از سوی مادران/پدرانی که همین را تجربه کرده‌اند | |
| Health centre | مرکز خدمات جامع سلامت | |
| Health house (rural) | خانهٔ بهداشت | |
| Community health worker | مراقب سلامت / بهورز | |
| Mental health expert (primary care) | کارشناس سلامت روان | |
| Postnatal visit | مراقبت پس از زایمان | Days 1–3, 10–15, 30–42 |
| The 40 days after birth | چله (چهل روز پس از زایمان) | |
| Woman who has just given birth | زائو | Traditional, warm term |
| Counselling line 1480 | صدای مشاور ۱۴۸۰ | |
| Social emergency 123 | اورژانس اجتماعی ۱۲۳ | |

## 10. Recheck before shipping

1. Fix the three P2 items in §1 (DOI in `goals.ts`; `running-on-empty` callout; `first-year-together` help list).
2. Re-copy by hand every [opened] quotation from NHS, RCPsych, APP and the WHO pages (WebFetch summarised them), especially the NHS "3 to
   6 months" recovery line, which I have not used.
3. Read the Postpartum Support International pages (postpartum.net failed) and add PSI wording on intrusive thoughts if it differs.
4. Get NICE CG192 (2014, surveillance 2025) recommendations text from a non-blocked copy; check psychological therapy timing and the
   advice on birth trauma.
5. Read the full texts of Collardeau 2024 and Beck 2026 (abstract only) before quoting their numbers in the guide.
6. Read Cuijpers 2026 in full: confirm the child-mental-health result survives its sensitivity analyses before the "helps your family too"
   tip ships.
7. Confirm the Iranian booklet section ت-۷ is still current (look for a 1404 or 1405 revision) and whether item 10 (self-harm) triggers
   urgent referral; the extracted text did not show it.
8. Search SID/Magiran for recent Iranian meta-analyses of postnatal depression and anxiety, and any data on Iranian fathers.
9. Test-call 1480 and 123 again before release (governance §6); keep 190 out until test-called.
10. Clinical review by a perinatal psychiatrist or psychologist of the guide, the `mind-today` and `mind-psychosis` tips, and the
    existing `crying.ts` crisis screens (still drafts).
11. Persian back-check of the safety callouts line by line by a second bilingual reader (governance §5.7).
12. Decide with the reviewer between «روان‌پریشی» and «جنون» for postpartum psychosis in Persian copy.

## 11. Sources

| Title | Publisher | Year | URL | Tag |
|---|---|---|---|---|
| Postnatal depression | NHS | reviewed Mar 2026 | https://www.nhs.uk/mental-health/conditions/post-natal-depression/overview/ | opened |
| Postpartum psychosis | NHS | reviewed Oct 2023 | https://www.nhs.uk/mental-health/conditions/post-partum-psychosis/ | opened |
| Where to get urgent help for mental health | NHS | reviewed Oct 2026 | https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/ | opened |
| Postnatal depression | Royal College of Psychiatrists | 2018 | https://www.rcpsych.ac.uk/mental-health/problems-disorders/postnatal-depression | opened |
| Postpartum psychosis | Royal College of Psychiatrists | 2018 | https://www.rcpsych.ac.uk/mental-health/problems-disorders/postpartum-psychosis | opened |
| What is postpartum psychosis? | Action on Postpartum Psychosis | 2026 | https://www.app-network.org/what-is-pp/ | opened |
| Perinatal mental health conditions: fact sheet | US Office on Women's Health | 2024 | https://womenshealth.gov/sites/default/files/_documents/2025/talkingppd/23348-66_OWH24-Fact-Sheet-Perinatal-Mental-Health-Conditions-04_ADA_submitted.pdf | opened |
| Perinatal OCD (expert opinion, Abramowitz) | International OCD Foundation | 2007 | https://iocdf.org/expert-opinions/perinatal-ocd/ | opened |
| WHO guide for integration of perinatal mental health in maternal and child health services | WHO | 2022 | https://www.who.int/publications/i/item/9789240057142 | opened (summary page) |
| New UN guide helps support perinatal mental healthcare | UN News | 2022 | https://news.un.org/en/story/2022/09/1127041 | opened |
| WHO urges quality care for women and newborns in critical first weeks after childbirth | WHO | 2022 | https://www.who.int/news/item/30-03-2022-who-urges-quality-care-for-women-and-newborns-in-critical-first-weeks-after-childbirth | opened |
| Screening for postpartum depression and anxiety (WHO 2022 recommendation, BIGG-REC copy) | PAHO/BVS BIGG-REC | 2022 | https://bigg-rec.bvsalud.org/en/recommendations/04c378fc96d68d1596bb563d5089fbedf8d12487 | opened |
| Summary of the 2025 MBRRACE-UK report | NHS Providers / NHS Alliance | 2025 | https://thenhsalliance.org/resources/summary-of-the-2025-mbrrace-uk-saving-lives-improving-mothers-care-report | opened (secondary) |
| Rahman A et al. CBT-based intervention by community health workers for mothers with depression and their infants in rural Pakistan | The Lancet 372:902–909 | 2008 | https://doi.org/10.1016/S0140-6736(08)61400-2 (PMC2603063) | opened |
| Maselko J et al. Effect of an early perinatal depression intervention on long-term child development outcomes | Lancet Psychiatry | 2015 | https://doi.org/10.1016/S2215-0366(15)00109-1 | abstract |
| Fuhr DC et al. Delivering the Thinking Healthy Programme through peers: RCT in India | Lancet Psychiatry | 2019 | https://doi.org/10.1016/S2215-0366(18)30466-8 | abstract |
| Sikander S et al. Delivering the Thinking Healthy Programme through volunteer peers: cluster RCT in Pakistan | Lancet Psychiatry | 2019 | https://doi.org/10.1016/S2215-0366(18)30467-X | abstract |
| Singla DR et al. Multiple mediation analysis of the peer-delivered Thinking Healthy Programme | Br J Psychiatry | 2021 | https://doi.org/10.1192/bjp.2019.184 | abstract |
| Boran P et al. Thinking Healthy as a universal group intervention: pilot RCT | BMC Psychiatry | 2023 | https://doi.org/10.1186/s12888-022-04499-6 | abstract |
| Dennis CL et al. Effect of peer support on prevention of postnatal depression among high risk women | BMJ | 2009 | https://doi.org/10.1136/bmj.a3064 | abstract |
| Shafiei T et al. DAISY telephone peer support trial protocol | BMJ Open | 2024 | https://doi.org/10.1136/bmjopen-2024-087477 | abstract |
| Cuijpers P et al. Effects of psychological treatment of maternal depression on children and parental functioning | J Am Acad Child Adolesc Psychiatry | 2026 | https://doi.org/10.1016/j.jaac.2026.02.005 | abstract |
| Ciharova M et al. Internet-based interventions for perinatal depression: IPD meta-analysis | Internet Interventions | 2026 | https://doi.org/10.1016/j.invent.2026.100993 | abstract |
| Stein A et al. Effects of perinatal mental disorders on the fetus and child | The Lancet | 2014 | https://doi.org/10.1016/S0140-6736(14)61277-0 | abstract |
| Collardeau F et al. Prevalence and course of unwanted, intrusive thoughts of infant-related harm | J Clin Psychiatry | 2024 | https://doi.org/10.4088/JCP.23m15145 | abstract |
| Beck QM et al. Unwanted intrusive thoughts of infant-related sexual harm: prevalence and assessment of safety | J Clin Psychiatry | 2026 | https://doi.org/10.4088/JCP.25m15985 | abstract |
| Pestana JE et al. Perinatal Intrusions Interpretation Index | Br J Clin Psychol | 2026 | https://doi.org/10.1111/bjc.70093 | abstract |
| Heyne CS et al. Prevalence and risk factors of birth-related posttraumatic stress among parents | Clin Psychol Rev | 2022 | https://doi.org/10.1016/j.cpr.2022.102157 | abstract |
| McKeown L et al. PTSD in parents of infants in NICU: systematic review | Clin Child Fam Psychol Rev | 2023 | https://doi.org/10.1007/s10567-022-00421-4 | abstract |
| Rao WW et al. Prevalence of prenatal and postpartum depression in fathers | J Affect Disord | 2020 | https://doi.org/10.1016/j.jad.2019.10.030 | abstract |
| Paulson & Bazemore. Prenatal and postpartum depression in fathers | JAMA | 2010 | https://doi.org/10.1001/jama.2010.605 | abstract (phase-5) |
| Cameron EE et al. Paternal depression in the postnatal period | J Affect Disord | 2016 | https://pubmed.ncbi.nlm.nih.gov/27475890/ | abstract (phase-5) |
| Wang Z et al. Mapping global prevalence of depression among postpartum women | Translational Psychiatry | 2021 | https://doi.org/10.1038/s41398-021-01663-6 | opened (full text) |
| Scalise AL et al. Support for postpartum psychosis: qualitative analysis | J Health Psychol | 2026 | https://doi.org/10.1177/13591053261460698 | abstract |
| Sobol M et al. Sleep, circadian activity and postpartum depression: actigraphy meta-analysis | J Sleep Res | 2024 | https://doi.org/10.1111/jsr.14116 | abstract |
| Mohr E et al. Physical activity and perinatal depression and anxiety: umbrella review | eClinicalMedicine | 2026 | https://doi.org/10.1016/j.eclinm.2026.104054 | abstract |
| de Faria DA et al. Isolated physical activity programmes in pregnancy and postpartum: meta-analysis | Arch Womens Ment Health | 2026 | https://doi.org/10.1007/s00737-026-01752-9 | abstract |
| Grigoriadis S et al. Traditional postpartum practices and rituals: clinical implications | Can J Psychiatry | 2009 | https://doi.org/10.1177/070674370905401206 | abstract |
| Dennis CL et al. Traditional postpartum practices and rituals: a qualitative systematic review | Women's Health | 2007 | https://doi.org/10.2217/17455057.3.4.487 | abstract |
| Veisani Y et al. Trends of postpartum depression in Iran: systematic review and meta-analysis | Depress Res Treat | 2013 | https://doi.org/10.1155/2013/291029 | abstract |
| Veisani & Sayehmiri. شیوع افسردگی پس از زایمان در ایران (meta-analysis) | Iranian Journal of Obstetrics, Gynecology and Infertility | 2012 | https://ijogi.mums.ac.ir/article_5689.html | search |
| Derakhshani M et al. Cultural beliefs and practices in postpartum women in Iran: a qualitative study | J West Afr Coll Surg | 2023 | https://doi.org/10.4103/jwas.jwas_290_22 (PMC10395854) | opened (full text) |
| برنامه کشوری مادری ایمن: مراقبت‌های ادغام‌یافته سلامت مادران، ویژه مراقب سلامت – بهورز، تجدید نظر نهم | Ministry of Health (copy: Ahvaz Jundishapur UMS) | 1402 / 2024 | https://vchhealth.ajums.ac.ir/uploads/97/2024/May/15/مراقبت های ادغام یافته سلامت مادران -بهورز-مراقب سلامت.pdf | opened |
| دستورالعمل فرآیند ارائه خدمت (suicide referral pathway) | Iran University of Medical Sciences | 1399 | https://sghc.iums.ac.ir/uploads/60/2023/Jul/15/دستورالعمل فرآیند ارائه خدمت 17-02-99.pdf | search |
| کارشناس سلامت روان مشاوره رایگان می‌دهند (190) | Shargh daily | 1405 | https://www.sharghdaily.com/بخش-جامعه-220/1096974 | opened |
| 123 and 1480 | State Welfare Organisation (behzisti.ir) | 2026 | https://www.behzisti.ir/news/172004/ ; https://www.behzisti.ir/news/171896/ | opened (round 4) |
| Antenatal and postnatal mental health (CG192) | NICE | 2014, surveillance 2025 | https://www.nice.org.uk/guidance/cg192 | search (403) |
| Dads and partners | West Yorkshire Healthier Together (NHS) | undated | https://wyhealthiertogether.nhs.uk/parentscarers/emotional-wellbeing-and-mental-health/dads-partners | opened |
| Rahman 2008 DOI check (wrong DOI in app) | Crossref API | 2026 | https://api.crossref.org/works/10.1016/S0140-6736(08)61263-X (404) | opened |
