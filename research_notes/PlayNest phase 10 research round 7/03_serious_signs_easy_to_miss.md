# 03 — Serious signs that are easy to miss ("Signs not to wait on")

Research notes for PlayNest phase 10, round 7. Researched 19 Nov 2026.

## 1. Scope, and what is already in the app

**Scope.** Serious illnesses in children aged 0 to 12 whose early signs parents (and sometimes clinicians) often miss, explain away or wait on: type 1 diabetes and diabetic ketoacidosis (DKA), appendicitis, testicular and ovarian torsion, intussusception, sepsis and meningitis, urinary infection in babies, worrying headaches (brain tumour), green (bilious) vomiting in babies, breathing difficulty, dehydration, swallowed button batteries and magnets, Kawasaki disease (brief), and the evidence on parents' instinct and asking for a second opinion. For each: the signs in parent words, how urgent, which body says so. Output: one guide outline ("Signs not to wait on") and daily tips.

This is high-stakes content. The rule throughout: **a list of signs can send a child to help, but it can never tell a parent their child is fine.** Every body read says some version of "your child may not have every sign" (NHS sepsis and meningitis pages) [opened].

**Already in the app (read for this note; not repeated below except to flag problems):**
- `firstaid.ts`: `very-unwell` (sepsis/meningitis, glass test, "your worry is reason enough"), `fever-young-baby`, `trouble-breathing`, `dehydration`, `swallowed-battery-magnet-beads`, `head-injury`, `seizure`. These are consistent with what I found. The battery card's honey step (US and ANZ only) matches AAP/NCPC and ANZCOR as the governance doc allows.
- `crying.ts` red flags: include green, yellow-green, red, black or coffee-ground vomit, non-blanching rash, no wet nappy in 8 hours. Consistent.
- `guides-health.ts` `fever-and-sick-days`: traffic-light style table. Consistent with NICE NG143 (opened this round).
- `guides-illness.ts` `tummy-bugs` and `coughs-colds-ears`.
- `guides-everyday-body.ts` `constipation-and-poo`, `legs-and-feet`.
- `guides-wellbeing.ts` `is-my-child-ok`.
- Also found by search: `guides-health.ts` `toilet-training` safety callout, `goals.ts` toilet goal `help` and `smoother-mornings` `ask`, `coach.ts` fears card.

### Problems found in existing content

| # | Sev | File, slug | Exact current line | Problem | Fix |
|---|---|---|---|---|---|
| 1 | P2 | `guides-health.ts`, `toilet-training` (callout) | "Talk to a doctor if … they start wetting again after 6 months of being dry … or unusual thirst." | New wetting plus thirst is one of the 4Ts of type 1 diabetes. NHS says urgent GP appointment or 111 [opened]; NICE NG18 says refer **the same day** [opened]. "Talk to a doctor" reads as non-urgent. Diagnostic delay is linked with DKA (OR 2.27) [abstract]. | Split it out: "New bedwetting with thirst, tiredness or weight loss: see a doctor **the same day** and ask for a finger-prick blood sugar test." |
| 2 | P2 | `goals.ts`, toilet goal `help` | "If your child was dry for six months and starts wetting again, or is very thirsty, talk to your doctor." | As above. | "…starts wetting again and is very thirsty, tired or thinner, see a doctor today and ask for a blood sugar test." |
| 3 | P2 | `guides-illness.ts`, `tummy-bugs` table | No DKA cue. "Vomiting for more than a day" sits in "See a doctor today". | DKA is often mistaken for a tummy bug (NHS: tummy pain or vomiting in a child who has been weeing more and very thirsty = 999/A&E [opened]; Iranian series: 52% had tummy pain, 2 children were operated on for "appendicitis" [opened]). | Add to "Get help now": "Vomiting or tummy pain in a child who has lately been very thirsty and weeing a lot, or who is breathing deeply or fast." |
| 4 | P2 | `guides-illness.ts`, `tummy-bugs` table | "Blood in the poo" in "See a doctor today". | In a baby or toddler with bouts of pain, pale or floppy, blood or "red jelly" poo can be intussusception, which needs urgent care (KidsHealth NZ: ambulance if you can't be seen straight away [opened]; GOSH: emergency treatment [opened, old page]). | Add to "Get help now": "A baby or toddler with bouts of screaming or pain, pale or floppy between them, or red-jelly poo." Keep plain blood in poo in "today". |
| 5 | P2 | `guides-illness.ts`, `tummy-bugs` | No mention of testicles. | Torsion often shows as tummy pain and vomiting; NHS: testicle pain with tummy pain or being sick = A&E/999 [opened]; AAP lists tummy pain and vomiting as torsion symptoms [opened]. | Add to "Get help now": "Tummy pain with pain or swelling in a testicle." |
| 6 | P2 | `goals.ts`, `smoother-mornings` Y5 `ask` | "Tummy aches or headaches mainly on school mornings, again and again. It may be worry." | Headache on waking (with vomiting) is a HeadSmart brain-tumour sign [opened card, search for clinical guideline]. Framing it first as worry risks the very delay HeadSmart targets. | "…again and again: see a doctor to check the body first. It can also be worry." |
| 7 | P2 | `guides-wellbeing.ts`, `is-my-child-ok` table | "Tummy aches or headaches, often before school" (under Worry). | Same risk. | Add one line under the table: "See a doctor about headaches that wake them, come on waking with vomiting, or come with balance, eye or behaviour changes. Don't assume worry." |
| 8 | P2/P3 | `guides-everyday-body.ts`, `constipation-and-poo` | Column "Get help now or today": "A swollen, tight tummy with vomiting, especially green vomit". | Green vomit, especially in a baby, is "now", never "today" (RCH: "never wait for the 2nd green vomit" [opened]; app's own `crying.ts` and `tummy-bugs` treat it as now). | Make green vomit its own row with "now": "Green vomit, or a swollen, tight tummy with vomiting: get help now." |
| 9 | P3 | `crying.ts` vs `very-unwell` card | "no wet nappy in 8 hours" vs "no wee in 12 hours". | Both defensible (code comment says the stricter wins), but a parent seeing both may be confused. NHS seriously-ill page and UK Sepsis Trust both use 12 hours for the emergency line [opened]. | Leave the numbers; in the new guide use "fewer wet nappies: call today; no wee for 12 hours: call your emergency number". |
| 10 | P3 | `guides-illness.ts`, `tummy-bugs` | "Severe tummy pain that doesn't ease" only. | NHS: pain that is gradually getting worse, doesn't go away, or moves to the lower right side → GP/111 same day [opened]. | Add to "today": "Tummy pain that keeps getting worse or moves to the lower right side." |

No P1 problems found. The first-aid cards I read match their named bodies.

## 2. How to read these notes

- **[opened]**: I read the page, PDF or full text and took the fact from it.
- **[abstract]**: from the abstract (Europe PMC REST API).
- **[search]**: from search snippets only. Do not use in the app until checked.
- **[recall, unverified]**: background knowledge not confirmed this session.

**Access problems:**
- **NICE**: WebFetch got 403, but plain `curl` with a browser user-agent worked for NG143 (fever, updated 26 Nov 2021), NG224 (UTI, 27 Jul 2022) and NG18 (diabetes, updated 11 May 2023). Counted as [opened]. The traffic-light colour PDF still 403.
- **Diabetes UK 4Ts page**: 503. The 4Ts are taken from the NHS type 1 diabetes page, which names them [opened].
- **NHS England Martha's rule pages**: empty responses (JavaScript-rendered). Used the RCPCH news response (Feb 2024) [opened]; the 2025–26 expansions are [search].
- **HeadSmart website** redirects to a 404. Used the 2018 HeadSmart symptoms card PDF (Brain Tumour Charity, CBTRC, RCPCH) [opened]. The clinical guideline thresholds (headache >4 weeks, waking headache → imaging) are [search].
- **RCH Melbourne intussusception fact sheet**: 404. **Sydney Children's Hospitals Network**: DNS failure. **Oxford leaflet**: TLS error. Used KidsHealth NZ (Apr 2026) and GOSH (review date 2016, out of date) [opened].
- **Bilious vomiting**: RCH primary-care guideline is from 2009 (old but clear). BAPM 2024 parent leaflet (hosted by Walsall NHS) [opened via local text extraction].
- **Iran MANA booklet** (non-physician, 1st print 1400, Iran University of Medical Sciences library copy): text extracted with `pdftotext -enc UTF-8`; Persian partly garbled but the danger-sign questions are readable [opened, partial].
- **Iran Patient Rights Charter** (IUMS copy) [opened, text extracted].
- Qazvin and Fasa DKA studies: full texts 403; [search] only.
- **Searches used:** 11 web searches, about 22 Europe PMC queries, about 30 page/PDF fetches.

## 3. Findings by topic

### 3.1 Type 1 diabetes and DKA

**Signs (parent words).** NHS (reviewed 31 Oct 2024) [opened]:
- The 4Ts: **Toilet** (weeing more, especially at night; heavier nappies; new bedwetting), **Thirsty** (drinking much more), **Tired**, **Thinner** (losing weight without trying).
- Others: blurred vision, sweet or fruity-smelling breath, thrush.
- Children may seem to have a cold, tonsillitis, tummy pain or nappy rash when diabetes first shows, "which can make diagnosis harder".

**How urgent.**
- Suspected type 1 diabetes: **NHS: urgent GP appointment or NHS 111** [opened]. **NICE NG18 1.1.2: "Refer children and young people with suspected type 1 diabetes immediately (on the same day)"** to a paediatric diabetes team [opened]. → **Same day.**
- DKA: NHS: if the child has been weeing more, very thirsty and tired, **and** symptoms are getting worse quickly, or there is tummy pain, diarrhoea or vomiting, sleepiness or confusion, or **breathing faster and deeper than usual** → **call 999 or go to A&E**; "can be life threatening if not treated quickly" [opened]. NICE NG18 lists nausea, vomiting, abdominal pain, hyperventilation, dehydration or reduced consciousness as DKA features [opened]. → **Emergency now.**

**How often DKA is the first sign.**
- 13 countries, 2006–2016, 59,000 children: **29.9%** had DKA at diagnosis (adjusted); highest risk in preschool children, adolescents and ethnic minority groups (Cherubini et al., *Diabetologia* 2020, retrospective) [abstract].
- Systematic review, 46 studies, >24,000 children in 31 countries: children with DKA had symptoms for a mean of **two weeks**; up to **a third had a medical consultation in the week before diagnosis**; **misdiagnosis was associated with a threefold increase in DKA** (Usher-Smith et al., *BMJ* 2011) [opened]. Parental consanguinity: 68% DKA in 2 studies (151 children; small numbers) [opened, table 3].
- Updated review, 195 studies (2022): age under 2 at onset (OR 3.51) and **delayed diagnosis or misdiagnosis (OR 2.27)** linked with more DKA; family history of type 1 diabetes and screening linked with less (*JAMA Pediatrics* 2022) [abstract]. Observational.
- UK questionnaire, 88 families: median **25 days** from first symptom to diagnosis; most of the delay was before parents sought help; **1 in 5 not diagnosed at the first visit**; children whose parents suspected diabetes were 1.3 times more likely to be diagnosed at the first visit (Usher-Smith et al., *BMJ Open* 2015) [abstract].
- **Awareness campaigns** (before-and-after and area comparisons, so observational): pooled reduction in DKA of **7.2 percentage points** (12 studies) and 35.7 points in area comparisons (4 small studies) (*Diabetes Res Clin Pract* 2021 meta-analysis) [abstract]; a 2024 review of 15 campaigns found reductions between 1% and 65.5% (*J Pers Med* 2024) [abstract]. Say "linked with", not "trials show".

### 3.2 Appendicitis

NHS (reviewed 9 Aug 2024) [opened]:
- Pain often starts around the belly button and after a few hours **moves to the lower right side** and gets worse. Feeling or being sick, off food, fever, constipation or diarrhoea, weeing more.
- **Young children may not have the usual pain.** Most common over 10; rare under 12 months.
- **Same day:** GP or 111 if tummy pain is gradually getting worse, doesn't go away, or moves to the lower right.
- **Emergency:** 999/A&E for severe tummy pain, or confusion, blotchy or paler skin, or difficulty breathing ("could be signs of sepsis").

Young children: Bangladesh prospective study, 386 children: perforation **58% under 6 vs 32% at 6–14**, with delayed diagnosis in the younger group (*Mymensingh Med J* 2025) [abstract]. A 2024 *BMC Medicine* paper describes preschool appendicitis as "uncommon" but with "a high perforation rate" [abstract]. AAP: notify the paediatrician immediately if tummy complaints continue or worsen over 3 to 5 hours (HealthyChildren, updated Aug 2023) [opened].

### 3.3 Testicular torsion (and ovarian torsion)

- AAP Section on Urology (HealthyChildren, updated 17 Nov 2025) [opened]: twisting cuts the testicle's blood supply. Most common in teenage boys shortly after puberty, **but can occur in younger children**. Symptoms: sudden severe scrotal pain, swelling, **abdominal pain, nausea or vomiting**. **Within 6 hours: over 90% chance of saving the testicle; after 24 hours: under 10%.** "Encourage them to tell you or an adult if they are having sudden, severe scrotal pain"; "reassure them that there is nothing to be embarrassed about."
- NHS testicle pain (reviewed 26 Jun 2025) [opened]: **go to A&E or call 999** for sudden severe testicle pain; testicle pain with feeling or being sick or tummy pain; pain lasting over an hour or continuing at rest. "Do not drive to A&E." (Page doesn't mention children; AAP covers them.)
- Delay and loss: US cohort 2020–2025, 131 children: 58% lost the testicle; median symptom-to-arrival **2700 vs 360 minutes** in those who lost vs kept it (*J Pediatr Urol* 2026) [abstract]. Tehran (Labbafinejad), 72 patients 2014–2022: **25%** orchiectomy (*Urology Journal* 2026) [abstract]. Brazil, 71 under-18s: each extra hour before care raised the odds of loss by about 4% (*Iran J Med Sci* 2026 letter) [opened].
- **Ovarian torsion**: a surgical emergency in girls of any age; "classically involves sudden onset severe abdominal pain and vomiting but diagnostic delay can follow subtler presentations" (Scheier, *Open Access Emerg Med* 2022 review) [abstract]. Peak 9–14 years, pain can come and go, delays of 12 h–4 days in a third of premenarchal girls [search]. No national parent page found.

**Wording for Iranian families (modesty).** Use the plain medical words once («بیضه»، «کیسه بیضه»، «تخمدان»), then everyday phrasing: «درد ناگهانی در کیسه بیضه یا کشاله ران», «درد ناگهانی و شدید پایین شکم در یک طرف». Frame it as a body-safety message: "Teach your child: if anything hurts 'down there', tell me straight away. It's never rude and never embarrassing." Suggest the parent check gently or let the child show a doctor; avoid any image. [App wording proposal, based on AAP's "nothing to be embarrassed about" [opened].]

### 3.4 Intussusception

- KidsHealth NZ (Paediatric Society of NZ, reviewed 1 Apr 2026) [opened]: bowel slides into itself, causing a blockage; **most common under 2**; tummy pain, **blood in the poo, which may look like red jelly**, vomiting, pale, **floppy and not interested in surroundings**. Seek urgent help; **if you can't see a health professional straight away, call an ambulance.** Tell staff if the baby **recently had a rotavirus vaccine**.
- GOSH (last review 2016; out of date, use only as support) [opened]: usually 3–18 months; **severe pain that comes and goes, each bout about 2–3 minutes**; between bouts the child looks **very pale, tired and floppy**; later vomiting; blood and mucus in poo; "needs emergency treatment".
- Not every child has the classic triad; red-jelly stool is seen in only a minority [search]. Drawing up the legs during bouts [search; Mayo/KidsHealth].
- **Rotavirus vaccine link** (relevant because Iran added the vaccine in 1403): WHO GACVS estimated **about 1 to 5.6 extra cases per 100,000 vaccinated infants**, clustered in the first week after dose 1; "the risk remains small compared to the benefits" (statement Dec 2013) [opened]. App line: "After a rotavirus vaccine, the vaccine is still far safer than the illness. If your baby has bouts of screaming, pallor or blood in the poo, get help and say they had the vaccine."

### 3.5 Sepsis and meningitis

- NHS sepsis (reviewed 14 May 2026) [opened]: babies and children: breathing very fast or difficult; a fit; very hot or cold to touch; **blue, grey, pale or blotchy skin, lips or tongue** (check palms and soles on darker skin); **rash that does not fade when pressed**; sleepier than normal or hard to wake; **no pee in 12 hours (under 5s) or all day (5 and over)**; under 5s not feeding or keep vomiting. → **999 or A&E.** "Trust your instincts … A child … might not have every symptom listed."
- NHS meningitis (reviewed 12 Jun 2026) [opened]: fever, **very cold hands and feet**, stiff neck, joint and muscle pain, severe worsening headache, dislike of bright light, fits, vomiting, confusion, hard to wake, non-fading rash. "Not everyone with meningitis gets spots or a rash." → 999/A&E. "Trust your instincts."
- UK Sepsis Trust (undated) [opened]: same signs; "Call 999 or visit A&E" and **"Just ask: could it be sepsis?"**
- **Early signs come first, classic signs late.** 448 children with meningococcal disease: most had only non-specific symptoms in the first 4–6 hours; **classic rash, neck stiffness and drowsiness appeared late (median 13–22 h)**; **72% had early sepsis signs (leg pains, cold hands and feet, abnormal skin colour) at a median of 8 h**; only 51% were sent to hospital at the first consultation (Thompson et al., *Lancet* 2006, parent questionnaires plus records) [abstract]. This is why the app must say **don't wait for a rash**.
- **NICE NG143 traffic light** (fever in under 5s, table 2016/2013, updated 2021) [opened]. Red (high risk): pale, mottled, ashen or blue; no response to social cues; appears ill to a professional; does not wake or stay awake; weak, high-pitched or continuous cry; grunting; respiratory rate over 60; moderate or severe chest indrawing; reduced skin turgor; **under 3 months ≥38°C**; non-blanching rash; bulging fontanelle; neck stiffness; status epilepticus; focal signs or seizures. Amber includes pallor **reported by a parent**, 3–6 months ≥39°C, **fever ≥5 days**, rigors, not weight-bearing, poor feeding, reduced urine. NICE: "Reported parental perception of a fever should be considered valid and taken seriously." Parents should seek further advice if a fit, non-blanching rash, the child is **less well**, or the parent is **more worried than when they last sought advice**, or fever lasts 5 days (1.7.3) [opened].
- **Martha's rule** (England): Martha Mills died in 2021 of sepsis after her family's concerns were not acted on promptly; a coroner found she would probably have survived with earlier intensive care. Martha's rule gives patients and **families 24/7 access to a rapid review by a critical care outreach team** if worried about deterioration; from April 2024 at 100+ sites (RCPCH response, Feb 2024) [opened]. Extended to all acute hospitals (2025), maternity (Jun 2026) and A&E (phased to Mar 2028) [search]. Martha was 13 [recall, unverified]. **Do not name it in Persian copy** (house rule: no other countries); the transferable point is "you may ask for a senior review".

### 3.6 Urinary infection in babies and young children

- NHS UTIs (reviewed 11 Jul 2025) [opened]: babies and young children may just seem **generally unwell, irritable, not feeding**, have a **fever**, wet themselves or be sick. Any child 15 or under with a suspected UTI → **urgent GP or 111**; confused, drowsy or difficulty speaking → 999.
- NICE NG224 (2022) [opened]: signs that make UTI more likely include painful or more frequent weeing, **new bedwetting**, smelly, dark or cloudy urine, visible blood, **fever**, shivering, tummy pain. Test urine if these are present; **consider testing if unwell and a UTI is suspected even without them**; **babies under 3 months with suspected UTI are referred to a paediatric specialist**.
- MANA (2–59 months) asks about painful urination in children who can say so [opened, partial].
- Belgian GP interviews: childhood UTIs go undetected because signs are non-specific and urine is hard to collect (*BJGP* 2022, qualitative) [abstract].
- App point: "A fever with no clear cause in a baby or young child: ask whether their urine should be tested." (Teach, don't diagnose.)

### 3.7 Worrying headaches (brain tumours)

HeadSmart symptoms card (Brain Tumour Charity, CBTRC, RCPCH, 2018) [opened]:
- **Under 5**: persistent or recurrent vomiting; balance, coordination or walking problems; abnormal eye movements or possible loss of vision; behaviour change, especially lethargy; fits not with a fever; abnormal head position (head tilt, wry or stiff neck); head growing faster than expected.
- **5–11**: persistent or recurrent **headache**; persistent or recurrent vomiting; balance or walking problems; abnormal eye movements; blurred or double vision; behaviour change; fits; abnormal head position.
- Action: **1 symptom: see GP. 2 or more: ask the GP for an urgent referral.** Eye symptoms: GP and optician. "Any child … with symptoms that are unusual for him or her, or are persistent or unexplained, should be seen by a GP." 10 children and teenagers diagnosed each week in the UK.
- Clinical guidance: headache that **wakes the child or is present on waking**, and vomiting on waking, are flagged for imaging; "persistent" headache means over 4 weeks [search]. HeadSmart was associated with a fall in time to diagnosis [abstract, secondary mention, *J Cancer Educ* 2026]; the 9.1 to 6.7 weeks figure is [recall, unverified].
- Brain tumours are rare; most headaches are not tumours [recall; framing]. The app must not frighten, but must not file morning headaches under "worry" without a check.

### 3.8 Green (bilious) vomiting in babies

- BAPM parent leaflet (2024) [opened]: bilious vomit = a significant amount of **green (usually dark green), not yellow**, vomit. **Most babies remain well**, but it must be checked. About **1 in 4** need a surgeon's review; about **1 in 12** have **malrotation**, where the bowel can twist (volvulus). "Most babies with malrotation have no other signs they are ill, and their x-ray can also be normal."
- RCH Melbourne primary-care guideline (2009) [opened]: "BILE stained vomit is GREEN (not yellow)"; "**URGENT referral to the Emergency Department in all cases – NEVER WAIT FOR THE 2ND GREEN VOMIT**"; "one green vomit in a well baby is a classical presentation of small bowel volvulus".
- NHS uses "green or yellow-green" in its sick-baby lists (already in `crying.ts`). See §4 for the colour disagreement.

### 3.9 Breathing difficulty

Already in the `trouble-breathing` card and tables. NICE NG143 red: grunting, rate over 60, moderate or severe chest indrawing; amber: nasal flaring [opened]. NHS seriously-ill page: "breathing very fast or has difficulty breathing – they may make grunting noises or suck in their tummy" → 999/A&E (reviewed 6 Aug 2026) [opened]. MANA: under 2 months, 60 or more breaths a minute, severe chest indrawing → urgent referral [opened, partial]. Nothing new; the guide just cross-links. Deep, fast breathing without a cough can be DKA (§3.1).

### 3.10 Dehydration

Covered by the `dehydration` card. NICE NG143 home advice: look for **sunken fontanelle, dry mouth, sunken eyes, no tears, poor overall appearance** [opened]. NHS: no pee in 12 hours → 999/A&E [opened]. MANA danger signs for diarrhoea: unusual sleepiness, unable to drink or drinking poorly, sunken eyes, very slow skin pinch [opened in round 5]. Nothing to correct.

### 3.11 Button batteries and magnets

The `swallowed-battery-magnet-beads` card is consistent with AAP, NHS and ANZCOR as read in earlier rounds. For this guide, one cross-link row: "May have swallowed a button battery or magnets, even if they seem fine → emergency now; see the card." No new facts needed; no honey or amounts in the guide (they stay on the card).

### 3.12 Kawasaki disease (brief)

- NHS (reviewed 19 Feb 2026) [opened]: main sign is **a high temperature lasting 5 days or more**; also swollen neck glands, rash, red eyes; usually under 5. → **urgent GP or 111**.
- NICE NG143: think of Kawasaki with fever **5 days or more**; other features: red eyes without discharge, red cracked lips, strawberry tongue, red swollen hands and feet, rash, swollen neck glands [opened].
- MANA refers a child with fever **every day for more than 7 days** [opened, partial]. See §4.

### 3.13 Trust your instinct, and asking again

- Systematic review, 30 studies: **parental concern (LR+ 14.4)** and **clinician instinct (LR+ 23.5)** were strong red flags for serious infection in **one primary care study** (Van den Bruel et al., *Lancet* 2010) [abstract].
- Belgian primary care, 3,890 children: a clinician's gut feeling that something was wrong despite a reassuring examination had **LR 25.5**; the strongest trigger was **the parents' concern that this illness was different from previous ones (OR 36.3)**. Authors: gut feeling "should trigger action such as seeking a second opinion" (*BMJ* 2012, observational) [abstract].
- **Not every study agrees**: in a Riga emergency department (162 children), parental concern was **not** significantly predictive (LR+ 1.4) (*BMC Pediatr* 2019) [abstract]. Honest wording: "In one large study, a parent's sense that this illness was different was strongly linked with serious illness. Other studies are less clear. Your worry is still a good reason to ask."
- Parents who suspected diabetes got a diagnosis at the first visit more often (RR 1.3) (§3.1) [abstract].
- NHS, NICE, UK Sepsis Trust all tell parents to act on worry and to come back if more worried or the child is less well [opened].
- **Iran's Patient Rights Charter** (Ministry of Health) lists, under the right to choose and decide freely, **«انتخاب و نظرخواهی از پزشک دوم به عنوان مشاور»** (choosing and asking a second doctor for an opinion) and «انتخاب پزشک معالج و مرکز ارائه‌کننده خدمات سلامت در چارچوب ضوابط» [opened, IUMS copy].

### 3.14 Iran: general danger signs (MANA)

MANA non-physician booklet, children 2 months to 5 years (MOH, 1st print 1400) [opened, partial extraction]. Danger-sign questions: **Is the child able to drink or breastfeed? Has the child had a fit during this illness? Does the child vomit everything?** Look for **unusual sleepiness or reduced alertness**. Any one → "بیماری خیلی شدید" → complete assessment, first steps, **urgent referral**. Very severe febrile illness: any danger sign, **stiff neck, bulging fontanelle, or pinpoint bleeding under the skin (petechiae)** → urgent referral. Under 2 months: 60+ breaths a minute or severe chest indrawing among the signs → urgent referral.

These match WHO IMCI general danger signs [recall] and NHS/NICE. Good Persian anchor: «علائم خطر».

## 4. Where bodies disagree

| Point | Bodies | Cautious path for the app |
|---|---|---|
| What colour counts as "green vomit" | BAPM and RCH: dark green, **not yellow**; NHS lists "green or yellow-green" | Any green or yellow-green vomit in a baby: get help now. Don't make parents judge shades. |
| Suspected type 1 diabetes | NHS: urgent GP or 111; NICE: same-day referral | "See a doctor today and ask for a finger-prick test." Emergency if vomiting, tummy pain, deep fast breathing or drowsy. |
| Fever duration before checking for Kawasaki | NHS/NICE: 5 days; MANA: daily fever over 7 days | 5 days. (Persian copy: "fever for 5 days or more", no mention that MANA says 7.) |
| No-wee threshold | `crying.ts` 8 h (stricter); NHS/UK Sepsis Trust 12 h for 999 | Fewer wet nappies: call today; none in 12 h: emergency. |
| Does parental concern predict serious illness? | Strong in Belgian primary care; weak in a Latvian ED | Say "linked with" in one study; still advise acting on worry (all bodies agree on the advice). |
| Testicle pain: A&E vs ambulance | NHS: "A&E or 999"; AAP: treat immediately | Go to hospital emergency now; call 115 if you can't get there fast. |
| Intussusception urgency | KidsHealth NZ: urgent, ambulance if not seen straight away; GOSH: emergency | Emergency now. |

## 5. Claims the app must NOT make

1. No "if X is absent, it isn't Y" (no rash ≠ no meningitis; no lower-right pain ≠ no appendicitis; no blood in poo ≠ no intussusception; normal X-ray ≠ no malrotation).
2. No symptom counts or scores for parents to add up (no "2 of these 4"), except HeadSmart's own "1 symptom see GP, 2+ ask for urgent referral" is acceptable only as quoted guidance, and still with "one is enough to see a doctor".
3. No breaths-per-minute or heart-rate counting tasks for parents.
4. No blood sugar or ketone numbers, no instructions to use a relative's glucose meter, no "give sugar".
5. No "it's probably worry/growing pains/a tummy bug" for the listed patterns.
6. No percentages for testicle saving time as a countdown ("you have 6 hours"): say "every hour matters; go now".
7. Don't say awareness campaigns "prevent DKA" as trial evidence; say "are linked with fewer".
8. Don't say Martha's rule applies in Iran, and don't name it in Persian.
9. Don't discourage the rotavirus vaccine; the intussusception link is small and WHO says benefits outweigh it.
10. No medicine names or amounts (no painkillers "to see if it helps" for tummy pain).
11. No Iranian DKA rate as a national figure: they are single-centre studies, from 24% to 84%.

## 6. Iran-specific section

- **Emergency number 115** (ambulance). No equivalent of NHS 111 found; for "same day" the Persian copy should say «همان روز به پزشک یا مرکز خدمات جامع سلامت مراجعه کنید؛ اگر نمی‌شود، به اورژانس بیمارستان بروید» [app convention; service names to be checked].
- **MANA danger signs** «علائم خطر» (§3.14) [opened, partial]. These give a familiar Persian frame for the guide's "now" column.
- **DKA at diagnosis in Iran** (all single-centre, so a range not a national rate):
  - Hamadan, 1995–2005, 200 children: **24%** DKA at diagnosis, over half severe; commonest symptoms thirst 85%, weeing more 83%, weakness 69%, **tummy pain 52%**; **two children were operated on for suspected appendicitis before DKA was recognised** (Razavi, *Oman Med J* 2010) [opened].
  - Shiraz, 2026, 217 parents at a diabetes clinic: **38.7%** reported DKA as the first presentation; parental DKA knowledge "critically inadequate" (self-rated 1.86/10 mothers, 0.89/10 fathers) (*BMC Pediatr* 2026, cross-sectional) [abstract].
  - Qazvin 2006–2016, 144 new cases: **84.3%** DKA, mostly severe; authors blame limited family awareness [search].
  - Fasa 2014–2016, 45 children: nearly half [search].
  - Middle East PICU meta-analysis (Saudi Arabia, Egypt, Iran; 919 children): new-onset diabetes made up 42.5% of PICU DKA cases (*Cureus* 2026) [abstract].
  - Tehran Children's Medical Center 2018–2020, 270 children with DKA: cerebral oedema in 6.67% (*BMC Res Notes* 2025) [abstract].
- **Testicular torsion in Tehran**: 25% orchiectomy among 72 operated patients (Labbafinejad 2014–2022) [abstract]. No Iranian data found on how long families wait.
- **Rotavirus vaccine** at 2, 4 and 6 months since 1403 (round 5 note, [abstract/search]); intussusception line in §3.4.
- **Patient Rights Charter**: right to choose a doctor and to ask a second doctor's opinion [opened].
- **Traditions and beliefs to handle gently** [recall, unverified; check with Persian reviewer]: thirst and frequent weeing put down to hot weather or «گرمی»; bedwetting put down to cold or «سردی»; tummy pain treated at home with herbal waters (عرق نعناع، زنیان); boys not mentioning genital pain from modesty; waiting for a doctor's office to open rather than going to an emergency department at night. Copy should not criticise remedies, only say "these signs need a doctor first, today".
- No Iranian data found for intussusception, ovarian torsion, bilious vomiting or childhood brain tumour delays.

## 7. Recommended guide outline

**slug:** `signs-not-to-wait-on`
**title:** Signs not to wait on
**summary:** A few serious illnesses start quietly or look like something common. These are the signs to act on the same day, or straight away.
**age range:** 0 to 144 months
**shelf:** health
**refs:** NHS sepsis, meningitis, type 1 diabetes, appendicitis, testicle pain, UTI, Kawasaki, seriously-ill pages; NICE NG143, NG18, NG224; AAP testicular torsion; KidsHealth NZ intussusception; BAPM bilious vomiting leaflet; RCH bilious vomiting guideline; HeadSmart card; UK Sepsis Trust; Thompson 2006; Van den Bruel 2010 and 2012; Usher-Smith 2011; Cherubini 2020; Iran MANA booklet and Patient Rights Charter (Persian).

**Blocks:**

1. **p**: "Most illnesses in children are mild. A few serious ones start with signs that look ordinary, so they're easy to put down to a bug, a cold or worry. You don't need to know what it is. You only need to know when not to wait." [framing; NHS "trust your instincts" opened]
2. **callout (safety)**: "No list can tell you your child is fine. A child can be seriously ill without every sign. If your child seems very unwell, or you think something is seriously wrong, call your emergency number now." [NHS sepsis/meningitis, opened]
3. **h**: Call your emergency number now
4. **table** head: ['What you notice', 'What it can mean'] rows [all opened]:
   - ['A rash that doesn't fade when you press a glass on it, or cold hands and feet with a fever', 'Sepsis or meningitis. Don't wait for a rash: it often comes late'] [NHS; Thompson abstract]
   - ['Very sleepy, floppy or hard to wake; a fit; blue, grey, pale or blotchy skin', 'Serious illness of many kinds'] [NHS seriously ill]
   - ['Grunting, ribs or tummy sucking in, or breathing very fast', 'Breathing trouble. See the Trouble breathing card'] [NHS, NICE]
   - ['A child who has been very thirsty and weeing a lot, now with vomiting, tummy pain, deep fast breathing or drowsiness', 'Diabetic ketoacidosis, which can be the first sign of diabetes'] [NHS T1D; NICE NG18]
   - ['A baby with green vomit, even once, even if they seem well', 'A twisted or blocked bowel'] [RCH; BAPM]
   - ['A baby or toddler with bouts of screaming or pain, pale or floppy in between, or poo like red jelly', 'Intussusception, where the bowel folds into itself'] [KidsHealth NZ; GOSH]
   - ['Sudden pain in a testicle, or testicle pain with tummy pain or vomiting', 'A twisted testicle. Every hour matters'] [NHS; AAP]
   - ['Severe tummy pain, or a girl with sudden severe pain low on one side and vomiting', 'Appendicitis, a twisted ovary or another emergency'] [NHS appendicitis; Scheier abstract]
   - ['Under 3 months with a temperature of 38°C or more', 'Babies this young need checking straight away'] [NICE red; NHS]
   - ['No wee for 12 hours, or may have swallowed a button battery or magnets', 'Dehydration, or an internal burn or blockage. See the cards'] [NHS; existing cards]
5. **callout (tip)**: "Teach your child: if anything hurts 'down there', tell me straight away. It's never rude or embarrassing. Many boys with a twisted testicle first say their tummy hurts." [AAP opened]
6. **h**: See a doctor today
7. **table** head: ['What you notice', 'Why today'] rows:
   - ['Weeing more, new bedwetting, very thirsty, tired or getting thinner', 'These are signs of type 1 diabetes. Ask for a finger-prick blood sugar test today'] [NHS 4Ts; NICE same day]
   - ['Tummy pain that keeps getting worse, won't go away, or moves to the lower right side', 'Appendicitis. Young children often don't have the usual pattern'] [NHS]
   - ['A baby or young child with a fever and no clear cause, or who is irritable and off feeds', 'A urine infection is possible. Ask whether their urine should be tested'] [NHS UTI; NICE NG224]
   - ['A fever lasting 5 days or more', 'Doctors check for Kawasaki disease, which needs treatment to protect the heart'] [NHS Kawasaki; NICE] (heart: NHS page [recall that it states coronary risk — verify before shipping or drop "to protect the heart"])
   - ['You were told it's nothing, but your child is getting worse or you're more worried than before', 'Going back is exactly what doctors advise'] [NICE 1.7.3]
8. **h**: See a doctor soon
9. **p**: "Headaches or vomiting that keep coming back, especially on waking or waking them at night, or with clumsiness, eye changes, a head tilt or a change in behaviour, need a doctor's check. One sign is enough to see a doctor. With two or more, ask for an urgent referral. Most headaches are not serious, but don't put these down to worry before a check." [HeadSmart card opened; "most headaches not serious" = recall, reviewer to confirm or drop]
10. **h**: Trust what you see
11. **callout (science)**: "In one large study in family doctors' surgeries, when parents said 'this illness is different from before', serious infection was much more likely, and doctors' gut feelings were too. Other studies are less clear, so it's a link, not proof. All the health bodies agree: your worry is reason enough to ask." [Van den Bruel 2012 and 2010 abstracts; Riga 2019 abstract]
12. **steps**:
   - {title: 'Say what worries you', text: 'Describe what is different: "She has never been this sleepy." You don't need to name an illness.'} [BMJ 2012 contextual factor]
   - {title: 'Ask the question', text: '"Could this be sepsis?" "Could this be diabetes?" "Should their urine be tested?"'} [UK Sepsis Trust; NICE NG224; Usher-Smith 2015]
   - {title: 'Ask what to watch for', text: '"What should make me come back, and how fast?"'} [NICE safety-netting 1.7.3]
   - {title: 'Ask for another opinion', text: 'If your child is getting worse, you can ask for a senior doctor or a second opinion.'} [NHS/Martha's rule (EN only); Iran Patient Rights Charter (FA)]
13. **callout (science)** "what we don't know": "Studies across 13 countries found that about 3 in 10 children with diabetes were already in ketoacidosis when it was found, and areas that ran awareness campaigns saw fewer. These were not trials, so we can't be sure how much awareness alone helps." [Cherubini 2020; DRCP 2021 abstracts]

Persian version additions: replace step 4 text with the Patient Rights Charter line; mention 115; frame the "now" table with «علائم خطر» from MANA (unable to drink or breastfeed, vomits everything, fits, unusually sleepy); add Iranian DKA line: «در مطالعه‌هایی در بیمارستان‌های ایران، بسیاری از کودکان وقتی دیابتشان پیدا شد دچار کتواسیدوز بودند؛ در یک مطالعه نیمی از آن‌ها دل‌درد داشتند.» [Razavi opened; Shiraz abstract]; rotavirus vaccine line (§3.4).

## 8. Daily tips (≤30 words each)

1. Weeing more, very thirsty, tired or getting thinner can be signs of type 1 diabetes. See a doctor the same day and ask for a finger-prick test. (Don't imply all four are needed.) (24–144 m; NHS type 1 diabetes, NICE NG18)
2. One green vomit in a baby, even if they seem well, needs a hospital check straight away. Don't wait for a second one. (0–24 m; RCH bilious vomiting guideline, BAPM)
3. Don't wait for a rash. With sepsis and meningitis, cold hands and feet, leg pains and odd skin colour often come first. (0–144 m; Thompson 2006, NHS meningitis)
4. Teach your child to tell you straight away if anything hurts "down there". It's never embarrassing, and with a twisted testicle every hour matters. (36–144 m; AAP testicular torsion)
5. Tummy pain with vomiting in a boy? Check whether a testicle hurts too. Testicle pain with tummy pain needs hospital now. (24–144 m; NHS testicle pain, AAP)
6. Bouts of screaming every few minutes, pale and floppy in between, or poo like red jelly: get urgent help for your baby. (3–36 m; KidsHealth NZ, GOSH)
7. A fever for 5 days or more needs a doctor's check, even if your child seems to be coping. (0–144 m; NICE NG143, NHS Kawasaki)
8. A baby with a fever and no clear cause may have a urine infection. Ask the doctor whether their urine should be tested. (0–36 m; NICE NG224, NHS)
9. Tummy pain that moves to the lower right side or keeps getting worse needs a doctor today. Young children often don't show the usual pattern. (24–144 m; NHS appendicitis)
10. Headaches that wake your child, or come with vomiting on waking, need a doctor's check before anyone calls them worry. (36–144 m; HeadSmart card)
11. If you're more worried than when you last saw the doctor, or your child is worse, go back. That's what guidelines tell parents to do. (0–144 m; NICE NG143 1.7.3)
12. Saying "this illness feels different from before" helps doctors. In one large study, it was strongly linked with serious infection. (0–144 m; Van den Bruel BMJ 2012)
13. You don't have to name the illness. Ask: "Could this be sepsis?" (0–144 m; UK Sepsis Trust)
14. Very thirsty and weeing a lot, now vomiting or breathing deeply? That can be diabetic ketoacidosis. Call your emergency number. (12–144 m; NHS type 1 diabetes)
15. Persian only: «اگر کودک نمی‌تواند بنوشد یا شیر بخورد، هرچه می‌خورد استفراغ می‌کند، تشنج کرده یا خیلی خواب‌آلود است، فوراً با ۱۱۵ تماس بگیرید.» (2–60 m; MANA booklet)

## 9. Persian glossary

| English | Persian |
|---|---|
| Signs not to wait on | نشانه‌هایی که نباید منتظرشان ماند |
| Danger signs | علائم خطر |
| Very severe illness (MANA) | بیماری خیلی شدید |
| Urgent referral | ارجاع فوری |
| Type 1 diabetes | دیابت نوع ۱ |
| Diabetic ketoacidosis | کتواسیدوز دیابتی |
| Finger-prick blood sugar test | آزمایش قند خون با سوزن زدن به نوک انگشت |
| Excessive thirst / weeing a lot | تشنگی زیاد / پرادراری |
| New bedwetting | شب‌ادراری تازه |
| Appendicitis | آپاندیسیت |
| Testicular torsion | پیچ‌خوردگی بیضه |
| Ovarian torsion | پیچ‌خوردگی تخمدان |
| "Down there" (child-friendly) | «پایین‌تنه» / «جای خصوصی» |
| Intussusception | انواژیناسیون (فرورفتن روده در خودش) |
| Red-jelly poo | مدفوع شبیه ژله قرمز |
| Green (bilious) vomit | استفراغ سبز (صفراوی) |
| Malrotation / volvulus | چرخش ناقص روده / پیچ‌خوردگی روده |
| Sepsis | سپسیس (عفونت شدید خون) |
| Meningitis | مننژیت |
| Rash that doesn't fade under a glass | لکه‌هایی که با فشار لیوان کمرنگ نمی‌شوند |
| Petechiae (MANA) | خونریزی نقطه‌ای زیر پوست |
| Stiff neck / bulging fontanelle | سفتی گردن / ملاج برآمده |
| Urinary tract infection | عفونت ادراری |
| Brain tumour | تومور مغزی |
| Kawasaki disease | بیماری کاوازاکی |
| Dehydration | کم‌آبی بدن |
| Button battery / magnet | باتری سکه‌ای (دکمه‌ای) / آهنربا |
| Second opinion | نظر پزشک دوم |
| Patient Rights Charter | منشور حقوق بیمار |
| Trust your instinct | به حس خودتان اعتماد کنید |
| Ambulance 115 | اورژانس ۱۱۵ |

## 10. Recheck before shipping

1. Clinical review of the whole guide by a paediatrician and a paediatric surgeon, line by line (this is red-flag content; governance rule 5).
2. Confirm the NHS Kawasaki page says it can affect the heart before using "to protect the heart"; otherwise drop the clause.
3. Re-open the HeadSmart website (headsmart.org.uk, currently redirecting to a 404) for a newer card than 2018; confirm the waking-headache wording.
4. Re-open the Diabetes UK 4Ts page (503 this session).
5. Confirm "most headaches are not serious" with a source or drop it.
6. Check the MANA danger-sign wording against a clean copy of the booklet (my extraction was partly garbled); confirm the edition and whether a 1403/1404 revision exists.
7. Confirm Iranian service wording for "same day" (health centre, paediatric emergency) and that 115 is the right number for a child emergency nationwide.
8. Persian reviewer to check the modesty wording for testicle and ovary content, and the traditional-belief lines in §6 (all [recall]).
9. Check that the Persian copy does not mention Martha's rule or the UK.
10. Make sure the guide's "now" rows match `crying.ts`, `tummy-bugs`, `fever-and-sick-days`, and the `very-unwell`, `trouble-breathing`, `dehydration` and battery cards after fixes 1–10 in §1.
11. Run the dose-pattern test (no amounts appear in this outline).
12. Verify Martha Mills' age (13) before using it in English, or leave it out.

## 11. Sources

| Title | Publisher | Year | URL | Tag |
|---|---|---|---|---|
| Type 1 diabetes: symptoms | NHS | reviewed 31 Oct 2024 | https://www.nhs.uk/conditions/type-1-diabetes/symptoms/ | opened |
| Diabetes (type 1 and type 2) in children and young people (NG18) | NICE | updated 11 May 2023 | https://www.nice.org.uk/guidance/ng18/chapter/Recommendations | opened |
| The 4 Ts | Diabetes UK | — | https://www.diabetes.org.uk/about-diabetes/type-1-diabetes/the-4-ts | not opened (503) |
| Temporal trends in DKA at diagnosis … 13 countries (Cherubini et al.) | Diabetologia | 2020 | https://doi.org/10.1007/s00125-020-05152-1 | abstract |
| Factors associated with DKA at diagnosis: systematic review (Usher-Smith et al.) | BMJ | 2011 | https://doi.org/10.1136/bmj.d4092 | opened |
| Factors associated with DKA at onset of T1D among pediatric patients: systematic review | JAMA Pediatrics | 2022 | https://doi.org/10.1001/jamapediatrics.2022.3586 | abstract |
| The pathway to diagnosis of type 1 diabetes in children (Usher-Smith et al.) | BMJ Open | 2015 | https://doi.org/10.1136/bmjopen-2014-006470 | abstract |
| Effectiveness of ketoacidosis prevention campaigns: meta-analysis | Diabetes Res Clin Pract | 2021 | https://doi.org/10.1016/j.diabres.2021.108838 | abstract |
| Diabetes awareness campaigns to prevent ketoacidosis: systematic review | J Pers Med | 2024 | https://doi.org/10.3390/jpm14121115 | abstract |
| Frequency of ketoacidosis in newly diagnosed type 1 diabetic children (Razavi, Hamadan) | Oman Medical Journal | 2010 | https://www.omjournal.org/OriginalArticles/FullText/201004/Frequency%20of%20Ketoacidosis%20in%20Newly%20Diagnosed.html | opened |
| Parental awareness of DKA in children with diabetes, Shiraz | BMC Pediatrics | 2026 | https://doi.org/10.1186/s12887-026-06956-7 | abstract |
| DKA in pediatric ICU patients in the Middle East: meta-analysis | Cureus | 2026 | https://doi.org/10.7759/cureus.103735 | abstract |
| Incidence of cerebral edema in pediatric DKA, Tehran | BMC Research Notes | 2025 | https://doi.org/10.1186/s13104-025-07237-9 | abstract |
| DKA at diagnosis, Qazvin 2006–2016 | Iranian journal (via core.ac.uk) | — | https://core.ac.uk/download/343344363.pdf | search |
| Appendicitis | NHS | reviewed 9 Aug 2024 | https://www.nhs.uk/conditions/appendicitis/ | opened |
| Abdominal pain in children | AAP HealthyChildren | updated Aug 2023 | https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Abdominal-Pain-in-Children.aspx | opened |
| Appendicitis in preschool and school-age children | Mymensingh Med J | 2025 | PMID 40583653 | abstract |
| Testicle pain | NHS | reviewed 26 Jun 2025 | https://www.nhs.uk/conditions/testicle-pain/ | opened |
| Testicle pain and testicular torsion: why it's an emergency | AAP HealthyChildren | updated 17 Nov 2025 | https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/Testicular-Torsion.aspx | opened |
| Geographic access, prehospital delay and testicular loss | J Pediatr Urol | 2026 | https://doi.org/10.1016/j.jpurol.2026.106347 | abstract |
| Long-term evaluation after testicular torsion, Labbafinejad Tehran | Urology Journal | 2026 | https://doi.org/10.22037/uj.v23i03.8807 | abstract |
| Testicular torsion: time to care and ethnicity (letter) | Iranian J Med Sci | 2026 | https://doi.org/10.30476/ijms.2025.107251.4168 | opened |
| Diagnosis and management of pediatric ovarian torsion in the ED (Scheier) | Open Access Emerg Med | 2022 | https://doi.org/10.2147/oaem.s342725 | abstract |
| Intussusception | KidsHealth NZ (Paediatric Society of NZ) | reviewed 1 Apr 2026 | https://www.kidshealth.org.nz/intussusception | opened |
| Intussusception | Great Ormond Street Hospital | review 2016 (out of date) | https://www.gosh.nhs.uk/node/1327 | opened |
| Rotavirus vaccines and intussusception | WHO GACVS | 2013/2014 | https://www.who.int/groups/global-advisory-committee-on-vaccine-safety/topics/rotavirus-vaccines/intussusception | opened |
| Sepsis | NHS | reviewed 14 May 2026 | https://www.nhs.uk/conditions/sepsis/ | opened |
| Meningitis | NHS | reviewed 12 Jun 2026 | https://www.nhs.uk/conditions/meningitis/ | opened |
| About sepsis | UK Sepsis Trust | undated | https://sepsistrust.org/about/about-sepsis/ | opened |
| Is your baby or toddler seriously ill? | NHS | reviewed 6 Aug 2026 | https://www.nhs.uk/baby/health/is-your-baby-or-toddler-seriously-ill/ | opened |
| Fever in under 5s (NG143) | NICE | updated 26 Nov 2021 | https://www.nice.org.uk/guidance/ng143/chapter/Recommendations | opened |
| Clinical recognition of meningococcal disease in children (Thompson et al.) | Lancet | 2006 | https://doi.org/10.1016/s0140-6736(06)67932-4 | abstract |
| RCPCH responds to the rollout of Martha's rule | RCPCH | 2024 | https://www.rcpch.ac.uk/news-events/news/rcpch-responds-rollout-marthas-rule | opened |
| Martha's rule expansions (A&E, maternity) | various news | 2025–2026 | e.g. https://www.healthwatchkingston.org.uk/news/2025-09-12/marthas-rule-rolled-out-all-acute-hospitals-england | search |
| Urinary tract infections | NHS | reviewed 11 Jul 2025 | https://www.nhs.uk/conditions/urinary-tract-infections-utis/ | opened |
| Urinary tract infection in under 16s (NG224) | NICE | 2022 | https://www.nice.org.uk/guidance/ng224/chapter/Recommendations | opened |
| GPs' perspectives on diagnosing childhood UTI | BJGP | 2022 | https://doi.org/10.3399/bjgp.2021.0589 | abstract |
| HeadSmart symptoms card | Brain Tumour Charity, CBTRC, RCPCH | 2018 | https://www.thebraintumourcharity.org/app/uploads/2018/06/headsmart_symptoms_card.pdf | opened |
| HeadSmart clinical leaflet (copy) | HeadSmart via NHS Humber | — | https://hnyppr.org.uk/documents/d/humber/head-smart-leaflet | search |
| HeadSmart-based primary provider education tool | J Cancer Educ | 2026 | https://doi.org/10.1007/s13187-025-02699-8 | abstract |
| Bilious vomiting: parent information leaflet | BAPM (hosted by Walsall Healthcare NHS) | 2024 | https://www.walsallhealthcare.nhs.uk/wp-content/uploads/2026/05/Bilious-Vomiting-Parent-Information-English-1.pdf | opened |
| Bilious vomiting pre-referral guideline | Royal Children's Hospital Melbourne | 2009 | https://www.rch.org.au/kidsconnect/prereferral_guidelines/Bilious_vomiting_prereferral/ | opened |
| Kawasaki disease | NHS | reviewed 19 Feb 2026 | https://www.nhs.uk/conditions/kawasaki-disease/ | opened |
| Diagnostic value of clinical features … serious infection in children (Van den Bruel et al.) | Lancet | 2010 | https://doi.org/10.1016/s0140-6736(09)62000-6 | abstract |
| Clinicians' gut feeling about serious infections in children | BMJ | 2012 | https://doi.org/10.1136/bmj.e6144 | abstract |
| Value of parental concern and clinician's gut feeling (Riga) | BMC Pediatrics | 2019 | https://doi.org/10.1186/s12887-019-1591-7 | abstract |
| Signs and symptoms for diagnosis of serious infections in children (Van den Bruel) | BJGP | 2007 | PMID 17727746 | abstract |
| MANA non-physician booklet (مراقبت‌های ادغام‌یافته ناخوشی‌های اطفال، غیرپزشک) | Iran Ministry of Health, IUMS library copy | 1400 (print) | https://libfiroozgar.iums.ac.ir/uploads/431/2022/Dec/21/بوکلت مانا غیرپزشک_650231.pdf | opened (partial) |
| منشور حقوق بیمار در ایران | Iran Ministry of Health, IUMS copy | — | https://hpm.iums.ac.ir/uploads/178/2022/May/29/منشور_حقوق_بیمار.pdf | opened |
