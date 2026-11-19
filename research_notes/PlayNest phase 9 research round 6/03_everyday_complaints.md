# 03: Everyday complaints that worry parents (constipation and poo, threadworms and head lice, legs and feet)

Research notes for PlayNest phase 9, round 6. Researched 17 Nov 2026.

## Scope and house rules

Scope: three NEW guides on common complaints that are usually minor but cause parents a lot of worry.
1. **Constipation and poo worries (0 to 12 years).**
2. **Threadworms (pinworms) and head lice.**
3. **Legs, feet and growing pains: what's normal.**

What the app already covers, so these guides should link to it rather than repeat it:
- `toilet-training` (src/data/guides-health.ts) covers readiness signs, sitting after meals, praise and accidents, and wet nights. Its safety callout already says doctors often check for constipation as a hidden cause of accidents. The constipation guide should link to it and leave out the basics of potty training.
- `old-remedies` (src/data/guides-baby.ts, 0 to 12 months) covers water, sugar water and tea before 6 months, herbal drinks, honey, kohl, salt on the skin and the cord. Its safety callout covers constipation with floppiness or a weak cry in babies under 1 (infant botulism). **Don't repeat the sugar-water or honey content; link to it.**
- `guides-illness.ts` has tummy bugs (diarrhoea and vomiting, including "blood in poo" and "green vomit" red flags), coughs and colds, eczema and nappy rash, and hot days. None of them covers constipation, worms, lice or legs.
- Goals (goals.ts lines ~869–883, 1145) already say constipation is common and treatable, and that punishment makes children hold on.
- The hip-check callout in the swaddling guide (guides-baby.ts) covers developmental hip dysplasia. The legs guide should point to it for babies.
- Vitamin D drops: guides-food.ts says "follow your health centre's programme". Phase 6 note `02_feeding_and_eating.md` §4 has Iran's A+D drop programme (all infants from 3–5 days to 24 months) [opened then, MoH textbook 2021]. The legs guide can link to it for rickets.

House rules (applied throughout):
- Teach, don't diagnose.
- **No medicine doses or amounts, and no brand names.** Guideline tables with doses (ESPGHAN 2026 Table 10, NICE CG99) were seen and deliberately not copied. I have also avoided naming specific laxatives or lice and worm medicines in the copy recommendations. Generic drug names appear only in the evidence sections, so editors can check them.
- Red flags always send the parent to a professional.
- Where bodies disagree, say so and take the cautious path.
- Separate associations from trials.
- No shaming, especially about worms, lice and soiling.
- Respect tradition and make no religious rulings.
- Persian copy may adapt for Iran.

## How to read these notes

- **[opened]**: I opened the page or file myself (WebFetch, or curl plus text extraction) and took the facts from it. The publisher and the date or review date are given.
- **[abstract]**: I read the abstract through the Europe PMC REST API, not the full paper.
- **[search]**: The facts come only from a search-result snippet or summary. Recheck before shipping.
- **[recall, unverified]**: Background knowledge I could not confirm this session. It must be checked before any copy relies on it.

Access problems this session:
- **cks.nice.org.uk** (Constipation in children CKS) returned **HTTP 403** to both WebFetch and curl. **However, nice.org.uk itself worked with curl** this round. NICE CG99 "Recommendations" returned HTTP 200, and I extracted its text with node, so it counts as [opened]. Next round, try curl with a browser user-agent first for NICE pages.
- **publications.aap.org** (AAP 2022 head-lice clinical report, Nolt et al.) returned **403**. I used the abstract [abstract], the AAP HealthyChildren parent page adapted from the AAP parent guide (updated 26 Sep 2022) [opened], and news coverage of the 2022 report [search].
- **onlinelibrary.wiley.com / journals.lww.com** (ESPGHAN/NASPGHAN 2014) returned **403** or a redirect. Instead I found and opened the **new 2026 ESPGHAN/NASPGHAN treatment guideline** (Gordon et al., JPGN 2026, doi 10.1002/jpn3.70447) as an open-access repository PDF at the University of Central Lancashire, extracted with pdftotext [opened]. For 2014 I have the abstract only.
- **RCH Kids Health Info**: the in-toeing and flat-feet fact-sheet URLs I tried returned **404**, and the RCH fact-sheet index is built dynamically. I opened the RCH **Constipation** clinical guideline, the **Constipation** Kids Health Info sheet, the **Worms** sheet and the **Septic arthritis** sheet. RCH "Limp" guideline URLs returned 404, so the RCH limp content is [search].
- **Queensland Children's Health "Limp" guideline** returned **403** [search only].
- **NHS**: the adult constipation page points to `/baby/health/constipation-in-children/` (opened). The NHS "knock knees" page has been removed (redirect to page-removed), and there's no NHS "bow legs" page. The content is on the NHS "leg and foot problems in children" page (opened). There's no NHS toe-walking page.
- **Persian PDFs**: several Iranian university PDFs downloaded but **extracted as unreadable glyphs** (fonts with no Unicode map). These were the IUMS rehab-faculty "flat foot" leaflet and the Iranian national pediculosis (head-lice) control guideline, version 1399, re-issued 2024 via IUMS. Their content is **[search] only**. One attempt to download the Tabriz copy of the pediculosis guideline was blocked by the session's permission system, and I did not retry it.
- A Mashhad case-report PDF (J Ped Perspect 2025) **extracted cleanly** and counts as [opened].
- Web searches used: about 13. Europe PMC API queries: about 20.

---

## 1. Constipation and poo worries (0–12 years)

### 1.1 What's normal

- **Breastfed babies** may poo after every feed, or as rarely as **once a week**. **Bottle-fed babies and older children usually poo at least every 1 to 3 days.** Poo colour from yellowy-brown to dark green is generally normal. **White, red or black poo needs a doctor** (RCH Kids Health Info "Constipation", reviewed Aug 2020, updated Jul 2025) [opened].
- The RCH clinical guideline (Mar 2020) says: "most children open their bowels at least every 2–3 days; breastfed babies may pass stool as infrequently as once a week" [opened].
- NICE CG99 table 1 says that "fewer than three complete stools per week" counts towards constipation in babies **"(this does not apply to exclusively breastfed babies after 6 weeks of age)"** [opened]. This is useful official support for "a breastfed baby going several days can be normal".
- **Infant dyschezia:** a healthy baby **under 6 months** may strain and cry (often going red and grunting) for some minutes before passing a **soft** poo. It isn't constipation unless the poo is hard, and it settles by itself. It reflects learning to coordinate the muscles (RCH guideline and RCH Kids Health Info) [opened].
  - Prevalence: a 2025 European meta-analysis found infant dyschezia in **6.9%** of babies aged 0–12 months and functional constipation in about **8%** of children (Bloem et al., JPGN 2025) [abstract].
  - Caution: a 2026 Iranian case-control study (Kaveh et al., Int J Pediatr 2026) reports that a history of infant dyschezia is *associated* with later functional constipation [abstract; results section truncated]. This is a single clinic-based case-control study open to recall bias, so the app should not mention it. Keep "it settles by itself".
- **Worldwide prevalence of childhood functional constipation: about 9.5%** (cited as ref 1 in the ESPGHAN/NASPGHAN 2026 guideline) [opened]. NHS: "common in childhood", especially during potty training around 2–3 years [opened].

### 1.2 Signs of constipation

From NHS "Constipation in children" (reviewed 2 Aug 2023; **next review was due 2 Aug 2026, so it may be overdue**) [opened], NICE CG99 table 1 [opened] and the Rome IV criteria via RCH [opened]:
- Fewer than 3 poos a week (except exclusively breastfed babies after 6 weeks).
- Large, hard poos, or small hard pellets ("rabbit droppings"). Large poos can block the toilet.
- Straining, pain or distress when pooing, or bleeding from a small tear (fissure) caused by hard poo.
- Poor appetite that improves after a big poo, or tummy ache that comes and goes with pooing.
- **Holding-on postures**: NICE describes "straight legged, tiptoed, back arching posture". RCH lists squatting, crossing legs and refusing the toilet.
- **Soiling** in a child over about 1 who was clean: "very loose, very smelly, stool passed without sensation" (NICE) [opened].
- Rome IV functional constipation, for clinicians: at least 2 of these for 1 month (infants) or 2 months (older children): ≤2 stools a week; retentive posturing; painful or hard stools; large stools; a large faecal mass; and in toilet-trained children, ≥1 soiling episode a week [opened via RCH].

### 1.3 The withholding cycle and overflow soiling

- A painful or frightening poo leads the child to **hold on**. The poo then **gets harder and larger**, so the next one hurts more, and the cycle repeats. Young children also put off going while they're busy playing (RCH Kids Health Info) [opened].
- Common triggers (NICE table 2): a fissure, a change of diet, **the timing of potty training**, infections, moving house, **starting nursery or school**, fears and phobias, a major family change, and some medicines [opened]. NHS adds pressure or interruptions during potty training, and worries such as a new baby [opened].
- **Overflow soiling**: long-term constipation stretches the rectum, so the child may not feel the urge. Runny poo then leaks around the hard poo into their pants **without them noticing** (RCH; NHS) [opened].
  - NHS: "soiling is not deliberate", so don't scold [opened].
  - NICE: tell families that the first clear-out treatment "**can initially increase symptoms of soiling and abdominal pain**" [opened]. NHS also says laxatives may temporarily worsen soiling [opened]. **This matters for the app**: parents often stop treatment because soiling seems worse at first.
- **Iran-relevant social point:** NICE recommends health professionals **liaise with school nurses** and help schools raise awareness of constipation. Children often avoid school toilets (RCH: check for worries about school or childcare toilets) [opened]. Iranian school toilets are often squat toilets; whether that helps or hinders is unknown. **Gap.**

### 1.4 What helps, and how strong the evidence is (say this honestly)

**Toilet-sitting routine.**
- RCH: sit after breakfast, lunch and dinner for **3 to 5 minutes**, even without an urge. Use a timer, praise attempts, and use sticker charts (Kids Health Info). The guideline says "up to 5 minutes, three times daily, preferably after meals" [opened].
- NHS: sit after meals or before bed, **with praise whether or not they poo**. This is especially important for boys who have started standing to wee [opened].

**Position.**
- RCH: a **footstool so the knees are higher than the hips**, leaning forward with elbows on knees, and a toilet ring if needed [opened].
- NHS: feet flat on the floor or a step [opened].

**Calm, positive approach.**
- NICE: "negotiated and non-punitive behavioural interventions… scheduled toileting… bowel diary… encouragement and rewards systems", **combined with laxatives** [opened].
- ESPGHAN/NASPGHAN 2026 good practice statement: "demystification, explanation, and guidance for toilet training (if developmentally appropriate)". It also says behavioural interventions "should **not be used in isolation**" but as an adjunct to medicine [opened].
- Evidence strength: the 2026 guideline makes these **good practice statements**, which means expert consensus because the trial evidence was insufficient. They are not GRADE recommendations [opened].

**Fluids and fibre: the honest picture.**
- NICE CG99 says "**Do not use dietary interventions alone as first-line treatment**". Advise a balanced diet with adequate fluids and fibre (fruit, vegetables, high-fibre bread, beans, wholegrain cereals, "not applicable to exclusively breastfed infants"), and **do not recommend unprocessed bran** (bloating, wind, reduced micronutrient absorption) [opened].
- ESPGHAN/NASPGHAN 2026 good practice statement: "a healthy, balanced diet with **age-appropriate** water and fiber intake and normal physical activity". **No GRADE recommendation** could be made for extra fibre or fluid [opened].
  - In the evidence tables, PEG plus fibre versus fibre alone showed "may be no difference" (low certainty). PEG versus fibre favoured PEG [opened].
  - The 2014 guideline's lead author Nurko is quoted as saying there is no evidence that **additional** fluid or fibre helps [search].
- RCH guideline: "**Increasing dietary fibre alone is not an adequate treatment.** Fluids do not need to exceed daily maintenance requirements." **Too much cow's milk** may crowd out fibre and worsen constipation in some children. Kids Health Info suggests limiting cow's milk to about 500 ml a day over 18 months [opened]. *Amount note: if copy mentions milk, say "a lot of milk can fill children up and crowd out other foods; ask your health worker how much is right". Don't print a millilitre figure unless the owner accepts that a food amount isn't a medicine dose.*
- RCH: "**Diet matters less for children than for adults.**" Fibre helps **some** children. Prune or pear-type fruit, and diluted prune juice, may help (babies on solids: small amounts of stewed prunes or apricots) [opened].
- **Bottom line for copy:** "A varied diet with fruit, vegetables and water is good for everyone and may help a little. On its own it usually isn't enough to fix constipation that has set in."

**Cow's milk.**
- ESPGHAN/NASPGHAN 2026: a **2–4 week cow's-milk-free trial** is a conditional, low-certainty option **for children not responding to usual treatment and when cow's milk allergy is suspected**, with dietitian support to prevent malnutrition [opened].
- **Copy rule:** "Don't cut out milk without talking to your doctor."

**Laxatives (no names, no doses in copy).**
- **ESPGHAN/NASPGHAN 2026**, the first update since 2014, built on 102 RCTs: PEG ("polyethylene glycol") is "recommended as a treatment option" (strong recommendation, moderate certainty, moderate effect). It is "the most studied therapy". "**No serious adverse events related to PEG were reported.**" The guideline says "there is no evidence that the use of PEG is associated with neurotoxicity". Common side effects are diarrhoea, tummy pain, bloating and nausea [opened].
- **NICE CG99** says: "Continue medication at maintenance dose for **several weeks after regular bowel habit is established – this may take several months**." Children who are toilet training should stay on laxatives until training is well established. "**Do not stop medication abruptly**: gradually reduce… over a period of months." "Some children may require laxative therapy for **several years**." Tell families "there is a suitable treatment… but **it may take several months** for the condition to be resolved." Refer if there's no response within 3 months [opened].
- **RCH guideline**: osmotic and lubricant laxatives "are usually needed long term (months to years)". This is **safe and does not cause a 'lazy bowel'**. "A common cause of recurrence is stopping laxatives too early." [opened]
- **NHS**: treatment "can take several months… keep going". The GP may advise continuing for a while afterwards [opened].
- **RCH Kids Health Info**: over-the-counter laxatives are "not recommended without medical advice" [opened].
- **App wording (allowed):** "If your child's doctor prescribes a medicine for constipation, it's often needed for months, and it is considered safe to use for that long. Stopping too soon is a common reason constipation comes back. Ask before stopping or changing it."

**Rectal treatments (suppositories and enemas).**
- RCH guideline: "Suppositories and enemas should generally be avoided." Oral treatment is "usually more effective and less distressing". "**Never give an enema unless a doctor has said to**" (Kids Health Info) [opened].
- ESPGHAN/NASPGHAN 2026: enemas are **not** suggested as a routine add-on to maintenance (conditional, low certainty). Suppositories have a role "in select cases". The guideline "acknowledges the **potential psychosocial impact of all per rectum therapies**", and decisions should be shared with child and family [opened].
- **Copy:** "Only use suppositories (شیاف) or enemas if a doctor has advised them for your child."

**Herbal medicine and massage.**
- ESPGHAN/NASPGHAN 2026 lists **herbal medicine, massage and dry cupping** under "proposed not to make a recommendation" [opened].
- Seven RCTs compared PEG with herbal medicines, and several of them were **Iranian trials**. The references include flixweed (خاکشیر) versus PEG (Nimrouzi et al., Iran J Pediatr 2015) and a commercial herbal laxative versus PEG (Saneian et al.) [opened, reference list]. Safety data versus herbal medicine were low certainty (15% vs 9% adverse events, RR 1.68, CI 0.53–5.34) [opened].
- **Honest copy:** "Some herbal remedies used in Iran have been tested in small trials, but the evidence isn't strong enough for experts to recommend them. Ask your doctor before giving any herbal product, especially to babies."

**Probiotics.** Only specific mixtures got conditional, low-certainty support. Other products lack evidence (ESPGHAN 2026) [opened]. The app should not recommend probiotics.

### 1.5 Red flags: from the guidelines

**NICE CG99 red flags (tables 2 and 3)** [opened]. "If a child… has any 'red flag' symptoms, do not treat them for constipation. Instead, refer them urgently":
- Constipation reported **from birth or the first few weeks of life**.
- **Failure or delay in passing meconium** (the first poo) for **more than 48 hours after birth** in a term baby.
- **'Ribbon stools'** (more likely under 1 year).
- **Previously unknown weakness in the legs or locomotor delay.**
- **Abdominal distension with vomiting**, or gross abdominal distension.
- Abnormal appearance or position of the anus.
- An abnormal lower back or spine: a hairy patch, a deep dimple, a lump, discoloured skin.
- Abnormal leg tone, strength or reflexes, or deformity such as talipes.
- **Faltering growth**: treat the constipation **and** test for coeliac disease and hypothyroidism.
- Possible maltreatment: treat and follow the maltreatment guideline.
- Under 1 year and not responding within 4 weeks: refer urgently.

**RCH guideline red flags** [opened]:
- Infants under 6 weeks.
- Delayed meconium. Most babies pass it **within 24 hours**; consider Hirschsprung disease or an anorectal malformation.
- Ribbon-like stools.
- Weight loss or poor growth.
- Persistent vomiting.
- An abdominal mass not consistent with poo.

**RCH Kids Health Info** [opened]:
- Babies under 12 months who seem constipated should see a GP or child-health nurse.
- **Seek urgent advice for white, red or black poo.**
- Older children should see a GP if diet changes don't help, if they're in significant pain, or if there's bleeding from the bottom.

**Not in these guidelines, but already in the app:** a baby under 1 with constipation **plus** weak cry, poor sucking, drooping eyelids or floppiness could have infant botulism (old-remedies guide). Keep linking to it.

**Note on the meconium threshold.** NICE says more than 48 h and RCH says most pass it within 24 h. The cautious parent-facing line: "**If your newborn hasn't passed their first poo by 24 hours, tell the midwife or doctor.**" Most babies are still in hospital or under midwife care then.

### 1.6 Iran

**Prevalence.**
- I found **no national, Rome-criteria community prevalence for Iran**.
- A 2015 school-based study in the *Caspian Journal of Pediatrics* (4–12-year-olds, nine schools) reported **more than one-fifth** with functional constipation, and 18.1% among 4–6-year-olds [search, location presumed northern Iran; full text not opened].
- Clinic-based studies (Fars, Shiraz) are not population prevalence.
- **App:** don't print an Iranian prevalence figure. "Constipation is very common in children everywhere" is safe.

**Lead and constipation (Iran-specific; an association, not a cause).**
- In 237 children with Rome IV chronic constipation in Tehran clinics, **20.7% had blood lead ≥5 µg/dL**. The authors suggest lead screening in childhood constipation with refractory abdominal pain (Zamani et al., Sci Rep 2023) [abstract].
- In Guilan, lead poisoning was found in **37.8%** of 90 constipated 2–13-year-olds versus **8.9%** of controls (Maleknejad et al., Iran J Pediatr 2013) [abstract].
- An Ahvaz study looked at lead and cadmium in refractory constipation (Gharibshahi et al. 2021) [abstract].
- These are **cross-sectional or case-control** studies, so they show **association, not cause**.
- Lead sources relevant to Iranian families include kohl (already in old-remedies), contaminated traditional products, and **household exposure from adulterated opium** [recall, unverified for paediatric exposure route].
- **App:** in the Persian honest box or the doctor section, say something like "In Iran, doctors sometimes test for lead when constipation and tummy pain go on despite treatment." Present this as information, not a diagnosis.

**Traditional practices.**
- **Iranian traditional medicine (ITM)** has a detailed theory of childhood constipation and many herbal remedies (Motaharifard et al., J Integr Med 2016, a descriptive review of ITM texts) [abstract]. Several small Iranian RCTs compared herbal products with PEG (see 1.4). Evidence is low certainty, and ESPGHAN 2026 makes no recommendation [opened].
- **Soap sticks or a soap sliver in the bottom.** I found **no published paediatric case series** this session. Adult literature describes "soap-suds enema colitis" and chemical proctitis from soap enemas [recall, unverified]. The RCH and ESPGHAN positions (rectal treatments only on medical advice, and a psychosocial impact) cover it. **Copy: "Don't put soap, oil, a thermometer, cotton buds or anything else into a child's bottom to make them poo, unless a doctor has shown you how."** The thermometer and cotton-bud practice is common worldwide. AAP HealthyChildren is understood to discourage frequent rectal stimulation [recall, unverified].
- **Shop-bought suppositories («شیاف»).**
  - Glycerine suppositories for babies are widely sold in Iranian pharmacies and used by families [recall, unverified]. A Persian news site (Mizan) mentions doctors using glycerine suppositories for acute constipation [search].
  - RCH says avoid them generally; ESPGHAN 2026 limits them to select cases [opened].
  - **Cautious path:** only on a doctor's advice. Repeated use is a reason to see a doctor about the cause.
- **Oils by mouth (olive, almond, castor, ghee or animal fat).**
  - Documented risk: **exogenous lipoid pneumonia** from oil going down the wrong way. Case series show babies and children given **mineral oil for constipation** developing lipoid pneumonia (Zanetti et al., Pediatr Radiol 2007: 17 children aged 2 months to 9 years; Sias et al., J Bras Pneumol 2009: 28 children, 23 given mineral oil for constipation) [abstract].
  - Traditional forced feeding of **vegetable or animal oils** to infants is reported as a cause in Mexico (Furuya et al. 2000) and Oman (ghee; Al-Kindi et al. 2008) [abstract]. An Iranian paediatric case was reported in Iran J Pediatr 2015 (Modaresi et al.; abstract not available, cause not confirmed) [abstract metadata only].
  - ESPGHAN 2026 says **liquid paraffin** (mineral oil) has a role but "**routine use is not recommended due to the potential significant side effects**" [opened].
  - **Castor oil** is a strong stimulant purgative. Cramping and fluid loss are expected effects [recall, unverified]. No paediatric guideline endorses it.
  - **Copy:** "Don't give oil by mouth to a baby or young child for constipation. Oil can slip into the lungs and cause a serious pneumonia." This is cautious but supported.
- **Water or sugar water to young babies.** This is already in `old-remedies`: not needed before 6 months.
  - **Disagreement:** NHS says formula-fed constipated babies "can have extra water between feeds", cooled boiled water if under 6 months [opened]. WHO and the Iranian MoH promote exclusive breastfeeding with no water [recall, consistent with old-remedies refs]. RCH says formula-fed babies may need a formula change [opened].
  - **Cautious path:** "If a baby under 6 months seems constipated, talk to your health centre before giving water or changing formula. Never add sugar, and never make formula weaker or stronger than the tin says."
- **Corn syrup or sugar syrups.** WebMD says modern corn syrup doesn't soften stool [search]. Not needed in copy; sugar water is already covered.
- **Shir-khesht («شیرخشت», Cotoneaster manna)** is a traditional Iranian laxative often given to newborns, especially for jaundice [recall, unverified]. Europe PMC turned up only rat studies (Valipour 2026) and a review of mannas (Rameshk 2023) [abstract]. I found no paediatric safety data. **Gap.** Copy can fold it into "herbal products: ask first, especially for babies and newborns with jaundice", and link to jaundice care.

**MANA (Iran's IMCI programme)** covers the sick child under 5. I did not find a constipation module this session. **Gap.**

---

## 2. Threadworms (pinworms) and head lice

### 2.1 Threadworms (pinworms, Enterobius; Persian «کرمک»)

**What they are and how they spread** (NHS "Threadworms", reviewed 1 Dec 2023, next review 1 Dec 2026 [opened]; CDC "About pinworm infection", 9 Sep 2024 [opened]; RCH Kids Health Info "Worms", reviewed Apr 2026 [opened]):
- Tiny white threads, seen in poo or around the bottom, often at night.
- **Intense itching around the bottom (or vagina) at night**, disturbed sleep and irritability. Often there are **no symptoms**.
- Less common: bedwetting, irritated skin, weight loss (NHS).
- Females lay eggs on the skin around the anus at night. Scratching moves eggs to the fingers and under the nails, then to the mouth, food, toys, bedding and surfaces.
- Eggs survive **up to 2 weeks** (NHS, RCH) or **2–3 weeks** on objects (CDC). Inhaling eggs is rare (CDC).
- **People cannot catch threadworms from pets**, and pets don't need treating because of a child's threadworms (RCH) [opened].
- "Threadworms are inconvenient and uncomfortable but are **not dangerous**" (RCH) [opened].
- CDC: a doctor may use the **sticky-tape test** first thing in the morning, or look for worms 2–3 hours after the child falls asleep [opened].

**Treatment.**
- **Treat everyone in the household at the same time, even without symptoms** (NHS: everyone aged 2 and over; CDC: also caregivers; RCH: all family members) [opened].
- Medicine kills worms but **not eggs**. CDC: a second dose 2 weeks after the first. RCH: most products advise a second treatment 1–2 weeks later [opened]. *(No names or doses in copy. NHS names a pharmacy medicine; the app should say "a medicine from the pharmacy or doctor, following the pack or the doctor's instructions".)*
- **Children under 2, and pregnant or breastfeeding people**: see a pharmacist or GP, because medicine may not be suitable. If medicine can't be used, hygiene alone for **6 weeks** (NHS) [opened].
- When to see a doctor (RCH): if over-the-counter treatment hasn't helped after several weeks, if you see **a large worm** (that is a different parasite), or if there's tummy pain, nausea, vomiting or low energy [opened].

**Hygiene: how long.** NHS: **2 weeks with medicine, 6 weeks without** [opened]. What to do:
- Wash hands and scrub nails, especially before eating and after the toilet or nappy changes.
- Shower or bath every morning.
- Keep nails short.
- Rinse toothbrushes.
- Wash nightwear, bedding, towels and soft toys (NHS says hot; RCH says hot water daily for several days after treatment).
- Damp-dust and vacuum, and wipe kitchen and bathroom surfaces.
- Wear underwear at night and change it in the morning.
- **Don't shake** bedding or clothes, and don't share towels.
- Discourage nail-biting and thumb-sucking. Do this gently: these are comfort habits, so don't shame them.

**School and nursery: bodies disagree.**
- NHS: "no need to stay off nursery, school or work" [opened].
- RCH: "treat your child before they return… best to keep them home until treatment has started" [opened].
- **Cautious and practical:** start treatment the same day and they can go back. No long absence.

**Iran.**
- Meta-analysis of **51 studies (46,070 children)**: pooled prevalence **6.7%** (95% CI 5.2–8.6), **falling over time** (Moussavi et al., Parasite Epidemiol Control 2023) [abstract].
- An earlier meta-analysis (19 studies) gave **17.2%** with a huge range (1.2–66.1%) (Moosazadeh et al., Osong 2017) [abstract]. It attributed this to "poor public health", which is wording the app must not echo.
- Babol kindergartens (Mazandaran, 2013): **22.2%** of 126 children positive by parent-collected tape test (Amiri et al., J Parasit Dis 2016) [abstract].
- **App:** "Threadworms are common in young children, including in Iran, especially in nurseries and kindergartens." Avoid a single number, or cite "about 1 in 15 children in Iranian studies" from the 2023 meta-analysis if a figure is wanted.

### 2.2 Head lice (Persian «شپش سر»)

**Spread and myths** (NHS "Head lice and nits", reviewed 22 Apr 2024 [opened]; CDC "About head lice", 4 Jun 2024 [opened]; AAP HealthyChildren "Signs of lice", updated 26 Sep 2022 [opened]):
- **Head-to-head contact** is the main route. Sharing combs, hats or pillows is much less likely ("a very small chance", AAP).
- Lice **can't hop, jump or fly** (CDC). They are unlikely to spread in swimming pools (CDC).
- **"Getting head lice is not related to how clean you or your environment are"** (CDC). "Head lice are not caused by dirty hair" (NHS) [opened].
- **"Animals do not get or spread head lice"** (CDC) [opened].
- **Shaving the head is not needed.** None of the NHS, CDC or AAP pages recommends it. AAP's treatment approach is combing plus medicine [opened, by absence of any shaving advice]. Shaving is humiliating for many children, especially girls. **Copy: "There's no need to cut or shave hair."** NHS says the combing method works for all hair types (combing takes longer for long or curly hair).
- **A caution for honesty:** Iranian meta-analyses report associations with family size, parents' education, **shared combs, no bathroom at home and less frequent bathing** (Moosazadeh et al. 2015) [abstract]. These are markers of crowding and poverty, not proof that dirt causes lice. The bodies agree lice are not a sign of poor hygiene. **The app should say "lice spread by head-to-head contact and can happen to any family", and avoid "only dirty children get lice" or the opposite claim that lice prefer clean hair.**

**Wet combing (detection and treatment).**
- NHS method [opened]:
  1. Wash hair with ordinary shampoo.
  2. Apply lots of conditioner.
  3. Comb from the roots with a fine-toothed **detection comb**.
  4. Comb the whole head twice.
  - It takes about 10 minutes for short hair and 20–30 for long or curly hair.
  - **Comb on days 1, 5, 9 and 13**, then check everyone on **day 17**.
- NHS lists wet combing as the first option, with medicated lotions or sprays "if wet combing has not worked or is not suitable". NHS also says:
  - lotions should **not** be used to prevent lice (they irritate the scalp);
  - **not recommended**: products containing permethrin, "repellents", electric combs, and plant-oil treatments such as tea tree, eucalyptus or lavender;
  - no need to stay off school;
  - no need for hot washes of laundry.
- **Evidence (mixed; say so):**
  - **Hill et al., BMJ 2005**: single-blind RCT, 133 children aged 2–15. A kit of combs cured **57%** versus **13%** for over-the-counter insecticide lotions (organophosphate or pyrethroid), relative risk 4.4 [abstract].
  - **Roberts et al., Lancet 2000**: pragmatic RCT in Wales, 81 children. Wet combing ("bug-busting") cured **38%** versus **78%** for an organophosphate lotion. The authors concluded that bug-busting as first-line was "inappropriate" [abstract].
  - Plastow et al. 2001: small pilot RCT (30 children) favouring nurse-performed combing [abstract].
  - Australian HANDI (RACGP 2013): wet combing has NHMRC level 2 evidence, **no serious adverse effects**, but "persistence is needed" [abstract].
  - **Fair summary:** combing is very safe and can work, but it takes time and persistence. Results depend on how thoroughly and how often it's done, and on local insecticide resistance. AAP: "the comb-out method usually doesn't work on its own" but helps after medicine (every 2–3 days for 2–3 weeks) [opened].
- **Insecticide resistance**: widespread in the UK since the 1990s (Burgess, Parasitol Res 2023) [abstract].
  - **Iran:** a knockdown-resistance (kdr) mutation was found in head lice from Mazandaran, with 41.7% homozygous resistant at one site (Eslami et al., J Parasit Dis 2024) [abstract]. kdr mutations were also studied in Khorasan Razavi (Taheri et al., BMC Res Notes 2024) [abstract].
  - An Islamshahr (Tehran) trial compared ivermectin lotion, **permethrin shampoo (described as the "gold standard" used by health centres)** and dimeticone lotion (Hamedanian et al., J Arthropod Borne Dis 2021) [abstract; results not read].
  - **App:** "If a treatment from the pharmacy doesn't work, it may be resistance rather than something you did wrong. Ask the pharmacist or health centre about a different type. Don't just repeat the same one or use more of it."

**Medicines: safe-use principles** (no names). From AAP HealthyChildren 2022 [opened] and CDC "Treatment", 12 Nov 2024 [opened]:
- Use only when **live lice** are found.
- Follow the label exactly. Never let children apply it.
- Rinse over a sink with warm water, not in the shower.
- Don't leave a child alone with medicine in their hair.
- Store it locked away.
- Don't use conditioner before lice medicine (CDC).
- Ask before adding or switching products.
- Check and treat household members who have lice on the same day.
- **Flammability:** some lice products are **flammable**. MHRA (UK) reported serious burns, including a child in 2017 who touched a naked flame during treatment. Keep treated hair away from flames, gas fires, heaters and cigarettes until it is washed (MHRA Drug Safety Update, 8 Mar 2018) [opened]. **Very relevant to Iranian homes with gas heaters («بخاری گازی»).**

**Cleaning.**
- CDC: wash items used in the 2 days before treatment on hot, or seal them in a bag for 2 weeks. Vacuum. "Extensive housecleaning is not necessary." **"Do not use fumigant sprays or fogs"**, which "can be toxic if inhaled or absorbed through the skin" [opened].
- AAP: don't spray pesticides in the home [opened].
- NHS: no hot wash needed [opened].
- **App:** a light clean is enough. Never spray insecticides in the home or on bedding.

**Dangerous remedies: documented harms.**
- AAP: "**Never use dangerous products like gasoline or kerosene or medicines made for use on animals!**" Home remedies (petroleum jelly, mayonnaise, margarine, essential oils, olive oil) are not shown to work [opened]. CDC: no evidence that smothering with mayonnaise or olive oil works [opened].
- **Iranian case report:** a **3-year-old girl in Mashhad** developed acute **organophosphate poisoning** (sweating, breathlessness, salivation, nausea, very low cholinesterase) within minutes after her mother **sprayed an agricultural or household organophosphate pesticide (diazinon) on her scalp for lice**. She needed antidotes and supportive care, and recovered after 48 hours. The authors call for education on the "deadly cost of misguided pest control in Iran's households" (Alizadeh & Pourbadakhshan, J Ped Perspect 2025;13(11):19794–7, doi 10.22038/jpp.2025.92892.5616) [opened].
- Other documented harms: a 9-year-old with scalp burns and systemic phenol toxicity after undiluted Creolin was used for lice (J Med Toxicol 2014) [search]. Kerosene, petrol and turpentine have a long history as lice remedies, with burn injuries reported, mostly in news or secondary accounts [search]. Childhood **kerosene poisoning** (aspiration pneumonitis) is well documented, mostly from swallowing [search]. Persian sources describe kerosene poisoning as one of the commonest childhood poisonings [search].
- I found **no peer-reviewed Iranian case of kerosene used for lice** this session. **Gap.** The diazinon case is enough to justify a strong Persian warning.
- **Copy:** "Never put kerosene (نفت), petrol (بنزین), garden or house insecticide (سم), or animal lice or flea products on a child's head. They can burn, catch fire or poison through the skin, and children have needed hospital care."

**School policies.**
- **AAP and the US National Association of School Nurses discourage "no-nit" policies**: "a child should not miss or be excluded from school because of head lice" (HealthyChildren 2022) [opened].
- Coverage of the 2022 AAP report says: no-nit policies are unproven and may breach students' rights; school screening programmes haven't been shown to reduce lice over time and aren't cost-effective; and lice "are not a health hazard or a sign of poor hygiene" [search, from Fox News and earlier AAP versions; recheck against the report].
- CDC: children don't need to be sent home early. They can go home at the end of the day, be treated and return [opened].
- NHS: no need to stay off school [opened].
- **Iran:** there is a **national joint MoH and Ministry of Education pediculosis (head-lice) control guideline** for students («دستورالعمل اجرایی مبارزه با پدیکلوزیس سر در دانش‌آموزان», version 1399, re-issued around 2024 via university health deputies). School health teams **screen** and **refer** infested children to health centres or خانه بهداشت, and rural treatment is by بهورز [search; PDFs downloaded but unreadable]. **I could not read whether it requires exclusion from school.** **Recheck before writing any school advice for Iran.**

**Iran prevalence.**
- Meta-analysis of **67 studies (358,053 primary school children)**: pooled **7.5%**. **Girls 9.0% versus boys 2.0%.** Highest in **Hormozgan (29%)**, lowest in Isfahan (0.7%) (Akbari et al., J Med Entomol 2022) [abstract].
- Earlier meta-analysis: 7.4% overall, girls 8.8%, boys 1.6% (Moosazadeh et al., Osong 2015) [abstract].
- Khorasan Razavi health records: 1.6–1.7% in 2016–17 (Taheri 2024) [abstract].
- **App:** "Head lice are common in primary-school children in Iran, especially girls, and more so in some provinces." Avoid singling out provinces in copy.

### 2.3 How not to shame children (applies to worms, lice and soiling)

- Bodies agree: lice are not about cleanliness (CDC, NHS, AAP). Soiling "is not deliberate" (NHS). Threadworms are common and not dangerous (RCH) [opened].
- Practical wording for parents, adapted from the above. This is my suggestion, not quoted from a source:
  - "Lots of children get these. It's nobody's fault."
  - Treat quietly and privately. Don't announce it to relatives or classmates.
  - Don't cut or shave hair as a punishment or "to be sure".
  - Keep siblings from teasing.
  - Tell the school or nursery confidentially if the policy asks.
- Iran-specific: both Iranian meta-analyses frame lice as linked with family poverty and hygiene [abstract]. The app must counter the stigma, not echo it.

---

## 3. Legs, feet and growing pains: what's normal

### 3.1 Normal variants by age

| Variant | Typical course | Source and tag |
|---|---|---|
| **Flat feet** | All children have very flat feet when they start walking. A fat pad hides the arch in babies. Arches form **between about 3 and 10** (NHS). Flat feet usually disappear **by about 6** (AAP), and NHS (leg and foot problems page) says "typically resolve by age 6". Some children don't start to form an arch until 5 or older, and it's fully formed around 10 (NHS Lothian). About **1–2 in 10 keep flat feet into adulthood**, usually with no problems (AAP). | NHS "Flat feet" (reviewed 24 Jun 2025) [opened]; AAP HealthyChildren "Flat feet and fallen arches" (updated 14 Mar 2023) [opened]; NHS Lothian RHCYP leaflet v2.0 (Sep 2023, review Sep 2026) [opened]; NHS "Leg and foot problems in children" (reviewed 5 Jun 2026) [opened] |
| **Flexible vs stiff** | If an arch appears when the child stands on tiptoe, no treatment is normally needed (NHS). A **stiff or rigid** flat foot (for example tarsal coalition, usually teens) needs checking (AAP). | [opened] |
| **In-toeing** ("pigeon toes") | Usually resolves **around 8** with no treatment (NHS). Causes by age: metatarsus adductus (curved foot, babies), internal tibial torsion (toddlers; usually resolves by 3–4, rarely persists past 6), femoral anteversion (preschool and school age) (AAFP 2025). | NHS [opened]; AAFP 2025 [opened, abstract and SORT table] |
| **Out-toeing** | Typically resolves **around 4** (NHS). Causes include external tibial torsion, femoral retroversion and flat feet (AAFP). | [opened] |
| **Bow legs** (genu varum) | A small gap between the knees is very common **before 18 months** (NHS). All infants have some bowing, which usually resolves **by 2** (NHS Lothian). | [opened] |
| **Knock knees** (genu valgum) | Begin **around 4** and usually straighten **by 7** (NHS) or **by 8** (Lothian). A mild degree may persist into adulthood. | [opened] |
| **Toe-walking** | Common in children **3 and under** (NHS). In a Swedish population cohort of 1,436 children aged 5.5, **4.9%** had ever toe-walked and **2.1%** still did. More than half had stopped by 5.5 (Engström & Tedroff, Pediatrics 2012). Of 63 toe-walkers, **79% had stopped spontaneously by 10**, with no calf contractures from idiopathic toe-walking (JBJS 2018). Toe-walking was **41%** among children with a neuropsychiatric diagnosis or developmental delay (2012). Persistent toe-walking is more common in autistic children (6.3% vs 1.5%; Chapek & Kessler 2025). | NHS [opened]; Engström [abstract]; Chapek [abstract] |

**W-sitting:** AAFP 2025 (SORT B, prospective cohorts) says W-sitting **does not cause** femoral anteversion, and discouraging it is **unnecessary** [opened]. Many parents and some therapists still discourage it [recall]. This is a useful myth-buster, but keep it light: "W-sitting doesn't cause in-toeing; if your child sits that way and is otherwise moving well, it's fine."

### 3.2 Do corrective shoes, insoles and splints change development?

- **Wenger et al., JBJS Am 1989** (RCT): 129 children with flexible flatfoot were randomised to control, **corrective orthopaedic shoes**, Helfet heel cup, or custom plastic insert, for **at least 3 years**. 98 had documented compliance. **All groups improved, including the controls, with no difference between treated and untreated children** (p > 0.4). The authors concluded corrective shoes or inserts "**does not influence the course of flexible flatfoot in children**" [abstract].
- **Cochrane review, Evans et al. 2022** (16 trials, 1,058 children aged 11 months to 19 years): for healthy children with **painless** flat feet, custom or ready-made orthoses versus shoes made "little or no difference" to pain at 1 year (low-quality evidence). The effect of orthoses on pain, function and quality of life is "**uncertain**". Orthoses **may** help pain and function in children with **juvenile idiopathic arthritis**, with little difference between expensive custom and cheap ready-made ones [abstract].
- **AAFP 2025** (Baird et al., Am Fam Physician 111(2):125–139): "minimal evidence supports orthotics or braces". Custom orthoses show no pain improvement over prefabricated ones for pes planus (SORT C), and there is **no clear benefit of any orthoses in painless pes planus** (SORT C) [opened].
- **AAP HealthyChildren**: "**Shoe inserts won't help your child develop an arch**" and may cause more problems than the flat feet themselves [opened].
- **NHS Lothian**: for knock knees and bow legs, "**splints, insoles and exercises do not have any effect**"; they resolve with normal development [opened].
- **NHS (adult and child flat feet)**: insoles, stretches and painkillers can ease pain or stiffness, but "**these treatments don't change the foot's shape**" [opened].
- **Counterpoint (report honestly):** a 2024 meta-analysis of 6 RCTs (297 children) found orthoses improved X-ray angles in **older** children with flexible flat feet and reduced pain in **symptomatic** flatfoot. Benefit in younger children was not shown (Liu et al., Front Pediatr 2024) [abstract].
  - **Reconciliation:** for painless flat feet in young children, there's no evidence that special shoes or insoles change development. For a child with foot **pain**, a clinician may suggest insoles to ease symptoms.
- **Staheli, Pediatrics 1991** ("Shoes for children: a review"; expert review, not a trial):
  - Optimum foot development occurs **barefoot**.
  - Shoes are mainly for **protection**.
  - Stiff, compressive shoes may cause deformity and weakness.
  - "**Corrective shoes" is a misnomer.**
  - Merchandising of corrective shoes is "harmful to the child, expensive for the family, and a discredit to the medical profession".
  - [abstract]
  - Staheli & Giffin 1980 surveyed doctors and found corrective shoes are often prescribed although regular shoes "would be more appropriate and economical" [abstract].

**First shoes and barefoot** (NHS "Leg and foot problems in children", reviewed 5 Jun 2026) [opened]:
- Children don't need proper shoes until they **walk independently**.
- Shoes should be the right size and hold the heel (laces, buckles or Velcro). If the heel slips off on tiptoe, the shoe is too big.
- Natural, breathable materials are best. Cotton socks.
- Tight shoes **or tight socks** can stop soft toe bones from straightening.
- NHS gives no specific barefoot advice. Staheli supports barefoot where safe [abstract].
- **App:** "Barefoot at home is good while learning to walk. Outside, choose light, flexible, well-fitting shoes. Check the fit every few months, because feet grow fast."

**Iran: orthopaedic or "medical" shoes and insoles («کفش طبی», «کفی طبی»).**
- A Persian search found university leaflets: the IUMS rehabilitation faculty's "flat foot" and "the right shoe from a physiotherapy view", and SBMU's "what is a medical shoe". The search summary says mild flat feet in children don't need treatment and usually correct with growth. Red flags are pain, stiffness, one-sided flat foot, frequent falls and a rigid sole. Medical shoes or insoles **don't cure** flat feet but may help symptoms [search; PDFs downloaded but Persian text unreadable].
- Commercial clinic and shop pages (nobat.ir, digikala, basalam) market flat-foot shoes and insoles for children [search].
- An Iranian registered trial (IRCT) of insoles in 8–11-year-olds with flexible flat feet is under way [search].
- I found **no formal statement from the Iranian Society of Orthopaedic Surgeons or the MoH** on corrective shoes. **Gap.**
- **App (Persian):** "In most children, flat feet, in-toeing and knock knees get better with growth, and special shoes or insoles don't speed this up. If someone recommends expensive medical shoes for a child with no pain, it's fine to ask for a second opinion from a children's orthopaedic doctor or a children's physiotherapist."

### 3.3 Growing pains

- **NHS "Growing pains"** (reviewed 16 Jun 2026, next review 2029) [opened]:
  - Common at **ages 3–12**.
  - Aching or throbbing in **both legs**, in the evening or at night, and **gone by morning**. NHS says "in the muscles or joints".
  - Helps: gentle massage, a covered hot water bottle or heat pack, and children's pain relief. *(Copy: "a children's painkiller from the pharmacy, as the pack says". No names, no doses. Never aspirin under 16.)*
  - **See a GP if:** pain is in **one leg only** or **one joint** (knee, ankle); pain is there **in the morning or when walking or active**; pain is bad enough to **stop walking or cause a limp**; there's a **rash, swelling or unusual bruising**; pain comes **with a high temperature**; the child is unusually tired or sleepy; or they're off food or **losing weight**.
- **What defines growing pains is not settled.** A Pediatrics scoping review of **145 studies** found "**extremely poor consensus**". The most consistent features were lower-limb pain (50%), evening or night pain (48%), an episodic course (42%), a normal examination (35%) and **both sides** (31%). **93% made no reference to growth.** "Clinicians should be wary of relying on the diagnosis to direct treatment decisions" (O'Keeffe et al., Pediatrics 2022) [abstract].
- A 2025 BMJ Open scoping review found **15 different diagnostic criteria**, sometimes contradicting each other (Smith et al.) [abstract].
- Cause unknown. Theories include a lower pain threshold, but none is decisive (Pavone et al., World J Orthop 2019, systematic review) [abstract].
- There is overlap with restless legs syndrome in children (Walters et al., Sleep Med 2013) [abstract].
- **Honest-box line:** "Despite the name, there's no proof these pains are caused by growing. Doctors use the label when the pattern fits and everything else is normal."
- **What is NOT growing pains** (combining NHS [opened], the RCH septic arthritis sheet [opened] and the limp guidance [search]):
  - pain in one leg or one joint;
  - joint swelling, redness or warmth;
  - a limp;
  - pain in the daytime or when active;
  - pain that **wakes** the child night after night in the same spot [recall, unverified as a specific body's wording; standard teaching];
  - fever;
  - weight loss, tiredness or pale skin;
  - unusual bruising or a rash;
  - pain that is getting worse.

### 3.4 Red flags: limp, one-sided findings and fever

- **Fever with limp, or refusing to walk or use a leg = urgent.** RCH "Septic arthritis" (reviewed 2018, updated Jul 2025, "awaiting routine review") [opened]:
  - Usually a sudden illness with fever over 38°C.
  - A painful, hot, swollen, red joint, with reduced use of the joint. It most often affects hips, knees and ankles.
  - In **newborns and young babies**, irritability or fever may be the only signs. Look for **swelling of the buttock or thigh**, pain when the hip is moved **during nappy changes**, and an unusual leg position.
  - "**A rapid onset of fever with reluctance or inability to use a limb**" calls for the emergency department.
- RCH limp guideline (Jul 2020): an **acute inability to walk or weight-bear** is a red flag, and septic arthritis is an orthopaedic emergency to consider in any limping child with severe localised joint pain and fever. Most limps need no tests [search].
- Queensland limp guideline: suspect septic arthritis with fever above 38.5°C, acute severe joint pain and difficulty weight-bearing [search].
- **Persistent limp** with normal X-rays should be referred to paediatric orthopaedics or rheumatology [search].
- **One-sided or worsening leg shape** (NHS Lothian) [opened]: "one leg significantly worse than the other, severe or worsening deformity, or a history of trauma or infection"; a new limp; seeming in pain; or **losing skills they had before**.
- **Flat feet**: see a doctor for pain, stiffness, sores on the inner foot, limited foot or ankle movement (AAP); flat feet **in only one foot**, flat feet that appear when they weren't there before, weakness or numbness, frequent ankle injuries, or problems with walking or balance (NHS) [opened].
- **In-toeing** still marked at 8 (thigh-foot angle beyond normal) warrants orthopaedic review (AAFP SORT table) [opened]. Also refer when measurements are far outside the normal range, or there is pain or functional impairment (AAFP abstract) [opened].
- **Toe-walking.** NHS: talk to a GP or health visitor if you are concerned [opened]. Idiopathic toe-walking is defined as persisting **beyond age 3** with no other cause (Santos et al., integrative review, preprint 2023) [abstract].
  - Standard reasons to check [recall, unverified, consistent with the sources above]:
    - toe-walking **all the time after about 3**;
    - **only one side**;
    - **tight heels** (can't stand flat);
    - started after walking normally;
    - **delayed walking or other development**;
    - frequent falls, clumsiness or weakness;
    - concerns about **speech, social interaction or autism**.
  - NICE CG99 also lists previously unknown leg weakness or locomotor delay as a red flag in a constipated child [opened]. This is a useful **cross-link**, because spinal problems can show up as both.
- **Rickets as a real cause of bowed legs.** NHS "Rickets and osteomalacia" (reviewed 9 Jul 2025) [opened]:
  - The main sign is **bowed legs** with a large gap between the knees.
  - Also: being small for age, **late teeth**, swollen or painful wrists, bone pain, muscle weakness, and fractures after minor falls.
  - Causes are low vitamin D or calcium. Exclusively breastfed babies need vitamin D drops from birth (UK). Darker skin needs more sun.
  - **Copy:** "Bow legs that get worse after 2, are worse on one side, or come with slow growth, late teeth or bone pain need a check. A doctor may test for rickets." Prevention: follow your health centre's vitamin drop programme (Iran: A+D drops to 24 months, phase 6 note). Blount disease and other causes of progressive bowing [recall, unverified] are for the doctor and need not be named.

### 3.5 Iran: vitamin D

- **CASPIAN-V** (a national school-based survey of 7–18-year-olds in 30 provinces): **71.1% vitamin D deficient** (n=2,596), with no sex difference. More sun exposure was protective (Rastad et al., J Diabetes Metab Disord 2021) [abstract].
- A meta-analysis of healthy Iranian children (Jazayeri et al., MJIRI 2018) [abstract; pooled figure not in the snippet I read].
- Iran ran a **national vitamin D programme for high-school students**: monthly high-dose supplements for 9 months, reaching more than 1.18 million students (Zandieh et al. 2022, economic evaluation) [abstract]. *(The dose is in the source. Don't copy it.)*
- Clinical rickets incidence in Iranian young children: **no recent data found. Gap.**
- **App:** the infant A+D programme is the right anchor. For older children, "time outdoors, a varied diet with dairy, and any school vitamin D programme" is enough without amounts.

---

## Where bodies disagree

| Topic | Positions | Cautious app line |
|---|---|---|
| Water for a constipated baby under 6 months | NHS: formula-fed babies can have extra cooled boiled water between feeds [opened]. WHO and Iran exclusive-breastfeeding messaging: no water before 6 months [old-remedies refs]. RCH: formula-fed babies may need a formula change [opened]. | "Talk to your health centre before giving water or changing formula. Keep breastfeeding often. Never add sugar or make formula stronger or weaker." |
| Fibre and fluids | NICE: adequate fibre and fluids alongside laxatives; diet alone is not first-line [opened]. ESPGHAN 2026: healthy diet with **age-appropriate** water and fibre; no evidence for **extra** [opened]. RCH: fibre alone is not adequate; fluids needn't exceed normal needs [opened]. | "A varied diet and water help everyone's gut a little, but they usually aren't enough on their own once constipation has set in." |
| Behavioural measures alone | NICE and ESPGHAN: combine with medicine, not instead of it [opened]. | Present toilet routines as **part** of treatment. |
| Suppositories and enemas | RCH: generally avoid [opened]. ESPGHAN 2026: role in select cases; not routine [opened]. NICE: oral first [opened, by structure; exact rectal wording not extracted]. | Only on a doctor's advice. |
| Meconium timing | NICE: more than 48 h is a red flag [opened]. RCH: most pass within 24 h [opened]. | "Tell the midwife or doctor if your newborn hasn't pooed by 24 hours." |
| Threadworms and school | NHS: no need to stay off [opened]. RCH: keep home until treatment has started [opened]. | "Start treatment the same day; no need for a long absence." |
| Wet combing vs insecticide | NHS: combing first; lotions second; permethrin products not recommended [opened]. Trials conflict (Hill 2005 favours combing; Roberts 2000 favours an organophosphate lotion) [abstract]. AAP: combing alone usually doesn't work; use it after medicine [opened]. Iran: permethrin shampoo is the health-centre standard, and kdr resistance is documented [abstract]. | Offer both: thorough combing on a schedule, **or** a pharmacy treatment used exactly as labelled **plus** combing. If one doesn't work, ask for a different type. |
| School exclusion for lice | AAP, NASN, CDC, NHS: no exclusion; no-nit policies discouraged [opened]. Iran: school screening and referral programme; exclusion rules unread [search]. | Global: "Children don't need to miss school." Persian: "Follow your school's health instructions; ask the school health worker." Recheck the Iranian guideline. |
| Growing pains: joints? | NHS: "muscles or joints" [opened]. Many definitions: not joints, with a normal examination (O'Keeffe 2022 shows no consensus) [abstract]. | Avoid saying "joint pain is growing pains". **Joint swelling or one painful joint = see a doctor.** |
| Orthoses for flat feet | Wenger 1989 and Cochrane 2022: no change in development and uncertain benefit [abstract]. Liu 2024: X-ray and pain improvement in older or symptomatic children [abstract]. | "For flat feet that don't hurt, special shoes or insoles don't change how the feet develop. If feet hurt, see a doctor or physiotherapist." |
| Age legs straighten | Bow legs: before 18 months (NHS) or by 2 (Lothian). Knock knees: by 7 (NHS) or 8 (Lothian). Arches: by 6 (AAP, NHS) or 3 to 10 (NHS flat-feet page). | Give ranges, not single ages. |
| W-sitting | AAFP 2025: harmless; no need to discourage [opened]. Popular advice (and some therapists): discourage it [recall]. | Don't tell parents to stop it; don't make it a worry. |

---

## App takeaways

### A) Recommended outlines

#### Guide 1: "Constipation and poo worries" (slug idea `constipation-and-poo`, minMonths 0, maxMonths 144, topic `health`)

1. **Intro (p).** Poo patterns vary a lot. Constipation is very common, is nobody's fault, and is treatable. It often takes months to settle fully.
2. **h: What's normal at different ages.** A short table:
   - **Breastfed babies**: anything from after every feed to once a week can be normal if the poo is soft and the baby feeds well.
   - **Formula-fed babies and older children**: usually every 1–3 days.
   - **Babies under 6 months who strain, go red and cry before a soft poo**: normal, and they grow out of it.
   - **Poo colour**: yellow to green to brown is fine. White, red or black is not.
3. **h: Signs of constipation (list).** Fewer than 3 poos a week (not exclusively breastfed babies), hard or pellet poos, pain or straining, a little blood on hard poo, tummy ache or poor appetite that improves after pooing, holding-on postures (stiff legs, tiptoe, crossed legs, hiding), soiled pants.
4. **h: The holding-on cycle.** Short p plus a callout (tip): "It hurts → they hold on → poo gets bigger and harder → it hurts more." Starting nursery or school, potty-training pressure, a fissure or a change can start it.
5. **callout (tip or info): Soiling isn't naughtiness.** "Leaking poo is usually runny poo slipping past a hard blockage. Your child often can't feel it or stop it. Treatment can make it seem worse for a little while before it gets better." Link to `toilet-training`.
6. **steps: What helps at home.**
   - Sit for a few minutes after meals.
   - Feet on a stool with knees higher than hips; lean forward.
   - Praise sitting, not results.
   - Calm words, no punishment.
   - Water and a varied diet with fruit and vegetables (and see the honest box).
   - Active play.
   - Check whether school toilets worry them.
7. **h: Medicines.** p: "Doctors often prescribe a medicine to soften poo. It's commonly needed for months, sometimes longer, and is considered safe to use for that long. It doesn't make the bowel 'lazy'. Stopping too early is a common reason constipation comes back, so ask before stopping. Don't use suppositories, enemas or shop-bought laxatives unless a doctor advises them for your child."
8. **callout (safety): What not to put in a child's bottom or mouth.** "No soap, oil, cotton buds, thermometers or home-made suppositories in the bottom. Don't give oil by mouth to babies or young children: it can slip into the lungs and cause pneumonia. Ask before any herbal remedy, especially for babies." Link to `old-remedies` for water, sugar water and honey.
9. **Get-help table** (see below).
10. **Honest box (science callout).** "Fibre and water: good for everyone, but studies haven't shown that *extra* fibre or fluids fix constipation on their own. Experts recommend a normal healthy diet *plus* medicine and routines when needed. Probiotics and herbal remedies: some small trials, but not enough evidence for experts to recommend them."

**Get-help table for Guide 1**

| Get help now or today | See a doctor soon (days) |
|---|---|
| A newborn who hasn't passed their first poo by 24 hours | A baby under 1 who seems constipated |
| Swollen, tight tummy **with vomiting** (especially green vomit) | Constipation lasting more than a couple of weeks despite home steps |
| Severe tummy pain | Pain, straining or blood on the poo from a tear |
| A baby under 1 who is constipated **and** floppy, with a weak cry, poor sucking or drooping eyelids | Soiled pants or holding on |
| White, red or black poo, or more than a streak of blood | Constipation that keeps coming back after medicine is stopped |
| | Constipation **since birth or the first weeks of life** |
| | Very thin, ribbon-like poos |
| | Poor weight gain or growth, or weight loss |
| | New weakness in the legs, walking later than expected, or falling a lot |
| | A tuft of hair, dimple or lump at the base of the spine |

*Editors: the urgency of the "see soon" items differs between sources. NICE says "refer urgently" for its red flags, which means prompt specialist assessment, not an emergency. Use wording like "see a doctor within a few days, and say these words".*

#### Guide 2: "Threadworms and head lice" (slug idea `worms-and-lice`, minMonths 24, maxMonths 144, topic `health`)

1. **Intro (p).** Both are very common in nursery and school children, can happen to any family, and are not dangerous. Treat them calmly and quietly.
2. **h: Threadworms.**
   - Signs: night-time bottom itching, tiny white threads.
   - How they spread (fingers to mouth; eggs live up to 2 weeks).
   - **steps:**
     1. Pharmacy or doctor medicine **for everyone at home on the same day**, even without symptoms.
     2. Most need a **second dose about 2 weeks later**, as the pack or doctor says.
     3. **2 weeks of hygiene**: morning shower; short nails; handwashing before eating and after the toilet; underwear at night, changed each morning; wash bedding, towels and soft toys; damp-dust; don't shake bedding.
   - callout: under 2s, pregnant or breastfeeding people should ask a doctor first. Without medicine, hygiene for 6 weeks.
   - Pets don't spread them.
3. **h: Head lice.**
   - How they spread (head-to-head; they don't jump; not about cleanliness; pets don't carry them).
   - **steps: wet-combing**: conditioner and a fine comb, the whole head twice, on days 1, 5, 9 and 13, and check on day 17.
   - Option: a pharmacy treatment used exactly as the pack says, plus combing.
   - If it doesn't work, ask for a different type rather than more of the same.
   - Check everyone at home and treat only those with live lice.
   - Light cleaning only.
   - No need to cut or shave hair.
4. **callout (safety): never use these.** Kerosene, petrol, garden or house insecticide sprays, animal flea or lice products, and fumigant sprays at home. They can burn, catch fire or poison through the skin. "In Iran, a 3-year-old needed emergency treatment after insecticide spray was used on her hair." Some pharmacy lice products are flammable, so keep treated hair away from heaters, gas fires and flames until it's washed.
5. **callout (tip): no shame.** Words to use. Tell the school privately if needed. Stop siblings from teasing.
6. **Get-help table** (see below).
7. **Honest box.** "Combing vs lotions: trials disagree. Combing is very safe but takes time and patience; lotions can fail where lice have become resistant, which is now common in many countries, including parts of Iran. Home remedies like mayonnaise, oils or vinegar haven't been shown to work."

**Get-help table for Guide 2**

| Get help now or today | See a doctor, pharmacist or health centre soon |
|---|---|
| Any lice product, kerosene or insecticide **swallowed, or used and the child is unwell** (vomiting, drooling, sweating, breathing trouble, drowsiness): emergency or poison centre | Threadworms in a child under 2, or in a pregnant or breastfeeding family member |
| Burns from a product near a flame | You see **a large worm** (not a tiny thread) |
| | Tummy pain, vomiting, weight loss or tiredness with worms |
| | Itching continues after treatment and 2 weeks of hygiene |
| | Lice still alive after two treatments |
| | A red, swollen or oozing scalp or bottom from scratching (possible skin infection) |

#### Guide 3: "Legs, feet and growing pains: what's normal" (slug idea `legs-and-feet`, minMonths 9, maxMonths 144, topic `health` or `growing`)

1. **Intro (p).** Children's legs and feet change shape a lot as they grow. Most differences that worry parents are normal stages that straighten without treatment.
2. **table: "What's normal and when it usually settles".** Use ranges:
   - flat feet (arch forms between about 3 and 10; usually by 6);
   - bow legs (common to about 18 months to 2 years);
   - knock knees (from about 4; straight by about 7 to 8);
   - in-toeing (usually better by about 8);
   - out-toeing (usually by about 4);
   - toe-walking (common to about 3; most stop by themselves).
3. **callout (science): special shoes and insoles.** "In a trial, children with flat feet wore corrective shoes or insoles for 3 years. Their feet developed no differently from children who wore ordinary shoes. Reviews since then agree there's no good evidence that shoes, insoles or splints change normal leg or foot development. They can help some children whose feet *hurt*."
4. **h: First shoes and going barefoot.** Barefoot indoors helps learning to walk. Shoes are for protection outside. Choose a good fit with room for the toes, a flexible sole and the heel held in. Avoid tight socks. Check the size often. Hand-me-down shoes: optional. *(Don't make claims about worn shoes; no evidence was found.)*
5. **h: Growing pains.**
   - Typical: both legs, evening or night, gone by morning, a normal child the next day, aged 3–12.
   - Helps: a cuddle, gentle massage, warmth, and a children's painkiller as the pack says if needed.
   - **Not growing pains** (list): one leg or one spot; swelling, redness or warmth; limping; pain in the day or with activity; pain that wakes them in the same place night after night; fever; weight loss, tiredness or unusual bruising.
6. **Get-help table** (see below).
7. **callout (tip): W-sitting.** It doesn't cause in-toeing, so there's no need to stop it if your child moves well.
8. **Honest box.** "'Growing pains' is a label for a pattern, not a proven cause. Researchers can't agree on an exact definition, and nobody has shown they're caused by growth. That's why doctors look for anything that doesn't fit the pattern."

**Get-help table for Guide 3**

| Get help now or today | See a doctor soon |
|---|---|
| **Fever with a limp**, or a child who suddenly won't walk, stand or use a leg | Bow legs getting worse after 2, or one side clearly more bowed |
| A painful, hot, swollen joint | Knock knees that are severe, or one side worse, or still marked after about 8 |
| A baby with fever or irritability who cries when the hip or leg is moved during nappy changes, or has a swollen thigh or buttock | Flat feet that hurt, are stiff, only on one side, or are new |
| Severe leg pain after a fall, or not bearing weight | Toe-walking all the time after about 3, only on one side, with tight heels, or with delays in walking, talking or play |
| | Leg pain that wakes them in the same spot night after night, or comes with tiredness, weight loss or bruising |
| | A limp lasting more than a few days, even without pain |
| | Losing skills (walking, running or climbing) they could do before |
| | Bowed legs with slow growth, late teeth or bone pain (a doctor may check for rickets) |

### B) Daily tips (16; ≤30 words; age ranges in months)

1. **(0–6)** A breastfed baby can go several days without a poo and be fine. Soft poo, good feeding and wet nappies matter more than how often. *(25 words)*
2. **(0–6)** Babies often go red, grunt and cry before a soft poo. That's learning to coordinate muscles, not constipation. Hard, pebbly poo is different: ask your health centre. *(28)*
3. **(0–12)** Please don't put soap, oil or anything else into a baby's bottom to help them poo. If you're worried about constipation, ask your health centre what's safe. *(28)*
4. **(18–144)** After meals, try a few relaxed minutes on the toilet with feet on a stool and knees above hips. Praise the sitting, whether or not anything happens. *(28)*
5. **(24–144)** Soiled pants in a constipated child are usually runny poo leaking past a blockage. They often can't feel it. It's not naughtiness: stay calm and see the doctor. *(29)*
6. **(12–144)** If the doctor prescribes medicine for constipation, it's often needed for months. Stopping too early is a common reason it comes back. Ask before stopping. *(25)*
7. **(24–144)** Night-time bottom itching may be threadworms. They're common and harmless. Treat everyone at home on the same day, then keep up handwashing and short nails for two weeks. *(29)*
8. **(24–144)** Worms and lice happen in clean, caring families too. "Lots of children get these" helps your child tell you next time, instead of hiding it. *(26)*
9. **(36–144)** To check for head lice, comb wet, conditioned hair with a fine comb from the roots, section by section. Only live lice need treatment. *(25)*
10. **(24–144)** Never use kerosene, petrol, or garden or pet insecticide on a child's hair. They can burn or poison. Use pharmacy lice products exactly as the pack says. *(27)*
11. **(36–144)** Head lice spread by heads touching, not from dirt or pets. There's no need to cut or shave hair: combing and treatment work for all hair types. *(28)*
12. **(12–96)** Flat feet, bow legs and knock knees are normal stages for young children. Special shoes or insoles don't change how legs and feet develop. *(24)*
13. **(9–36)** Barefoot at home helps babies learn to walk. Outside, choose light, flexible shoes that fit, and check the size every few months. Feet grow fast. *(26)*
14. **(36–144)** Growing pains: both legs, evening or night, fine by morning. Pain in one leg, a limp, swelling, or pain in the daytime needs a doctor's check. *(26)*
15. **(9–144)** A child with a fever who limps or won't put weight on a leg needs to be seen today. Joint infections need prompt treatment. *(25)*
16. **(24–60)** Many toddlers walk on tiptoe and stop by themselves. See your doctor if it's every step after 3, only one side, or they can't stand flat. *(27)*

*(Word counts are approximate; editors should recount after copy-editing.)*

### C) Claims the app must NOT make

- No laxative, worm or lice medicine **names, doses, amounts or schedules beyond "a second dose about 2 weeks later as the pack or doctor says"**. Don't copy ESPGHAN Table 10 or NICE's table 4 fluid volumes.
- Don't say extra **fibre or water cures constipation**, or that constipation is caused by "not drinking enough". The evidence doesn't support either.
- Don't say laxatives are **addictive**, make the bowel lazy, or should be stopped as soon as poo is normal.
- Don't tell parents to use **suppositories, enemas or rectal stimulation** themselves, or present soap sticks or oils as safe "natural" options.
- Don't recommend **probiotics, herbal remedies, massage, cupping or prune juice for young babies** as treatments. At most say "some children find prunes or pears help" for children on solids.
- Don't say a **cow's milk-free diet** is a treatment to try at home.
- Don't diagnose **Hirschsprung disease, coeliac disease, hypothyroidism, lead poisoning or spinal problems**. List signs and send to a doctor.
- Don't say **lice mean dirtiness**, that lice prefer clean hair, that pets spread lice or worms, or that a child **must** stay off school for lice or worms (Iran: defer to the school health programme until it's checked).
- Don't recommend **shaving or cutting hair**, essential oils, mayonnaise, vinegar or electric combs, or say "natural" lice remedies are proven.
- Don't print **Iranian prevalence figures with words like "poor hygiene" or "poor public health"**.
- Don't say **corrective shoes, insoles, splints or exercises** fix flat feet, bow legs, knock knees or in-toeing in children without pain. Don't say expensive custom insoles beat ready-made ones.
- Don't say **growing pains are caused by growth**, or that **joint pain** or **one-sided pain** is growing pains.
- Don't say **W-sitting causes** hip or leg problems.
- Don't say **toe-walking means autism**. Persistent toe-walking is more common in autistic children, but most toe-walkers are not autistic.
- Don't say **all bow legs are rickets**, or recommend vitamin D amounts.
- Don't call infant dyschezia a risk factor for later constipation (a single case-control study).

### D) Iran and Persian adaptations

**Persian terms:**
- Constipation: یبوست
- Soiling: کثیف کردن لباس زیر / بی‌اختیاری مدفوع. Prefer the gentle «نشت مدفوع»; avoid a shaming tone.
- Withholding: نگه‌داشتن مدفوع
- Fissure: شقاق / ترک مقعد
- Suppository: شیاف
- Enema: تنقیه
- Laxative: ملیّن. Avoid «مسهل» (purgative), which sounds harsh.
- Threadworms: کرمک
- Head lice: شپش سر. Nits: رشک
- Fine-tooth lice comb: شانهٔ دندانه‌ریز / شانهٔ مخصوص شپش
- Flat feet: صافی کف پا
- In-toeing: پای پرانتزی is **wrong**, because it means bow legs. Use «راه رفتن با پنجهٔ رو به داخل». Bow legs: پای پرانتزی. Knock knees: پای ضربدری (زانوی ضربدری)
- Toe-walking: راه رفتن روی پنجه
- Growing pains: درد رشد
- Medical shoes and insoles: کفش طبی / کفی طبی
- Rickets: راشیتیسم (نرمی استخوان)

**Where to get help:** مرکز خدمات جامع سلامت / خانه بهداشت / پایگاه سلامت, the school health trainer «مراقب سلامت مدرسه», the pharmacist, a paediatrician «متخصص کودکان», a children's orthopaedic surgeon «ارتوپد کودکان», a children's physiotherapist. Poisoning: Iran's emergency number 115 and the poison information line (the app's emergency.ts holds numbers; don't hard-code new ones here).

**Constipation (Persian copy):**
- Mention that families often use شیاف, oils (روغن زیتون، روغن بادام، روغن کرچک), شیرخشت, خاکشیر, and sugar water or نبات water. Say respectfully: "Many families have trusted remedies. Some herbs have been studied in Iranian trials, but the evidence isn't strong enough yet. Oils by mouth and anything placed in the bottom can harm young children. Please ask your doctor first."
- Link to `old-remedies` for sugar water and honey.
- Lead: "In Iran, doctors sometimes check blood lead when constipation and tummy pain carry on despite treatment." Present this as context, not a self-test prompt.
- School toilets: suggest parents ask the school to let the child use the toilet when needed. Children may hold on at school because of unfamiliar or squat toilets [my suggestion; not sourced].

**Worms and lice (Persian copy):**
- Kerosene is a common household item, and the Mashhad diazinon case shows the pesticide risk. **Make the safety callout prominent in Persian.** Mention **gas heaters («بخاری»)** and flammable products.
- Lice treatment in Iran is usually through the **health centre or pharmacy**. Permethrin shampoo is the standard health-centre product [abstract]. Say: "If the treatment from the health centre or pharmacy doesn't work after the second application, go back and say so. Lice in some areas have become resistant."
- School: "Follow the school health instructions. If your child is sent home, start treatment the same day; they don't need a long absence." Recheck the national pediculosis guideline before shipping.
- Girls: Iranian data show much higher rates in girls (long hair, close play). The app can note that combing takes longer with long hair and is still effective, with no need to cut.
- Prevalence lines are allowed without blame (see 2.1 and 2.2).

**Legs and feet (Persian copy):**
- Address «کفش طبی» directly and kindly (see 3.2 wording). Parents often buy them on the advice of shops or relatives.
- Vitamin D: anchor to the national A+D drops to 24 months. For older children: outdoor play and the school vitamin D programme if offered. Note that covered clothing and indoor lifestyles reduce sun exposure, without religious comment.
- MANA: no link this round.

### E) Gaps

1. **Iranian national pediculosis guideline (1399 / 2024 re-issue)**: content unread (glyph extraction failed; one download blocked). Need its treatment, combing, school-exclusion and confidentiality rules.
2. **No Iranian community prevalence of childhood constipation** (Rome criteria). The Caspian J Pediatr 2015 school study wasn't opened.
3. **No documented paediatric harm series for soap sticks or home suppositories**, and no Iranian data on oral-oil practices for constipation. Lipoid pneumonia evidence is from mineral oil and traditional oils elsewhere, plus one Iranian case (cause not confirmed).
4. **Shir-khesht (Cotoneaster manna) safety in newborns**: no human safety data found.
5. **No formal Iranian professional statement on corrective shoes or insoles.** IUMS and SBMU leaflets unread (glyphs).
6. **Toe-walking and limp red flags**: no single opened parent-facing guideline. RCH limp and Queensland limp were [search] only, and the toe-walking red-flag list is [recall].
7. **ESPGHAN 2014** full text not opened (2026 replaces it, so it matters less).
8. **AAP 2022 head-lice report** full text not opened (403). Exclusion and screening statements are from the HealthyChildren page and secondary coverage.
9. **Rickets incidence in Iranian young children**: not found.
10. **MANA**: no constipation or worm module checked.
11. **Kerosene-for-lice harm in Iran**: no peer-reviewed case found.
12. **AAP HealthyChildren constipation and rectal-stimulation advice**: not opened this round.

---

## Recheck before shipping

- **NHS "Constipation in children"**: next review was due **2 Aug 2026**. Check it has been re-reviewed and that the "extra water for formula-fed babies" line is unchanged.
- **NHS "Threadworms"**: next review due **1 Dec 2026**, two weeks after this research. Recheck.
- **NICE CG99** (last updated 13 Jul 2017): check whether NICE has updated it since (a surveillance proposal exists) [search].
- **ESPGHAN/NASPGHAN 2026** (JPGN, doi 10.1002/jpn3.70447): confirm the final published version matches the repository PDF I read (accepted 14 Apr 2026).
- **AAP 2022 head-lice clinical report** (Pediatrics 150(4):e2022059282): verify the no-nit, screening and "not a sign of poor hygiene" wording from the report itself.
- **Iranian pediculosis guideline**: open a readable copy (try another university mirror or OCR) before writing any Iran-specific school advice.
- **RCH Septic arthritis sheet** says "awaiting routine review". Recheck wording.
- **RCH limp guideline and Queensland limp guideline**: open them directly to confirm the red flags quoted as [search].
- **Engström toe-walking figures and AAFP 2025 SORT items**: fine as quoted from the abstract and table. The full text could add a red-flag list.
- **Moussavi 2023 (6.7%) vs Moosazadeh 2017 (17.2%)** pinworm prevalence. If a figure goes in copy, prefer the larger, more recent meta-analysis.
- All **[recall, unverified]** items:
  - soap-enema colitis;
  - AAP on rectal stimulation;
  - castor oil effects;
  - glycerine suppository use in Iran;
  - shir-khesht use;
  - opium-lead household exposure;
  - Blount disease;
  - the toe-walking red-flag list;
  - the night pain "same spot" wording;
  - W-sitting popular advice.
- **Word counts** of the daily tips after copy-editing (≤30).

---

## Sources

**Constipation**
- NICE. *Constipation in children and young people: diagnosis and management* (CG99). Published 26 May 2010, last updated 13 Jul 2017. https://www.nice.org.uk/guidance/cg99/chapter/Recommendations [opened via curl; text extracted with node]
- NICE CKS. *Constipation in children*. https://cks.nice.org.uk/topics/constipation-in-children/ [HTTP 403, not read]
- Gordon M, de Geus A, Boruta M, et al. *ESPGHAN/NASPGHAN guidelines for treatment of functional constipation in children aged 0–18 years*. J Pediatr Gastroenterol Nutr 2026. doi:10.1002/jpn3.70447. Open-access copy: https://knowledge.lancashire.ac.uk/id/eprint/59044/ [opened, PDF text extracted]
- Gordon M, et al. *ESPGHAN and NASPGHAN 2024 protocol for paediatric functional constipation treatment guidelines*. BMJ Paediatr Open 2025. doi:10.1136/bmjpo-2024-003161 [abstract]
- Tabbers MM, et al. *Evaluation and treatment of functional constipation in infants and children: ESPGHAN and NASPGHAN*. JPGN 2014;58(2):258–274. doi:10.1097/MPG.0000000000000266 [abstract; full text 403]
- Contemporary Pediatrics / secondary summaries of the 2014 guideline (fibre and fluid; maintenance ≥2 months) [search]
- Royal Children's Hospital Melbourne. *Clinical Practice Guideline: Constipation* (Mar 2020). https://www.rch.org.au/clinicalguide/guideline_index/Constipation/ [opened]
- RCH Kids Health Info. *Constipation* (reviewed Aug 2020, updated Jul 2025). https://www.rch.org.au/kidsinfo/fact_sheets/Constipation/ [opened]
- NHS. *Constipation in children* (reviewed 2 Aug 2023). https://www.nhs.uk/baby/health/constipation-in-children/ [opened]
- NHS. *Constipation* (adults; reviewed 26 Oct 2023). https://www.nhs.uk/conditions/constipation/ [opened, used only for the redirect to the children's page]
- Bloem MN, et al. *Prevalence of functional defecation disorders in European children: systematic review and meta-analysis*. JPGN 2025. doi:10.1002/jpn3.12437 [abstract]
- Kaveh M, et al. *Infant dyschezia is associated with increased risk of functional constipation in childhood: a case-control study*. Int J Pediatr 2026. doi:10.1155/ijpe/6410431 [abstract]
- Zamani N, et al. *Blood lead level evaluation in children presenting with chronic constipation in Tehran-Iran*. Sci Rep 2023. doi:10.1038/s41598-023-29487-y [abstract]
- Maleknejad S, et al. *Evaluation of serum lead levels in children with constipation and normal controls in northern Iran*. Iran J Pediatr 2013. PMID 24427495 [abstract]
- Gharibshahi N, et al. *Relationship between lead and cadmium levels in blood and refractory chronic constipation among Iranian children*. Arq Gastroenterol 2021. doi:10.1590/s0004-2803.202100000-56 [abstract]
- Motaharifard MS, et al. *Prevention and treatment of constipation in children from the perspective of Iranian traditional medicine*. J Integr Med 2016. doi:10.1016/s2095-4964(16)60278-9 [abstract]
- Nimrouzi M, et al. *Flixweed vs. polyethylene glycol…* Iran J Pediatr 2015;25(2):e425 [cited in the ESPGHAN 2026 reference list; not opened]
- Caspian Journal of Pediatrics 2015 school-based functional constipation study, 4–12-year-olds [search; not opened]
- Zanetti G, et al. *Lipoid pneumonia in children following aspiration of mineral oil used in the treatment of constipation*. Pediatr Radiol 2007. doi:10.1007/s00247-007-0603-1 [abstract]
- Sias SM, et al. *Evolution of exogenous lipoid pneumonia in children*. J Bras Pneumol 2009. doi:10.1590/s1806-37132009000900004 [abstract]
- Furuya ME, et al. *Lipoid pneumonia in children: clinical and imagenological manifestations*. Arch Med Res 2000. doi:10.1016/s0188-4409(99)00084-3 [abstract]
- Al-Kindi H, et al. *Lipoid pneumonia following aspiration of ghee in an Omani infant*. Oman Med J 2008. PMID 22379548 [abstract]
- Modaresi M, et al. *Exogenous lipoid pneumonia…* Iran J Pediatr 2015. doi:10.5812/ijp.3172 [metadata only, no abstract]
- Valipour F, et al. *Cotoneaster nummularius manna in hyperbilirubinemia: rat model*. Avicenna J Phytomed 2026 [abstract]; Rameshk M, et al. *Mannas…* Heliyon 2023 [abstract]
- Mizan Online. *شایع‌ترین علت یبوست در کودکان* [search]; WebMD on corn syrup [search]; Mayo Clinic infant constipation FAQ [search]

**Threadworms**
- NHS. *Threadworms* (reviewed 1 Dec 2023). https://www.nhs.uk/conditions/threadworms/ [opened]
- CDC. *About pinworm infection* (9 Sep 2024). https://www.cdc.gov/pinworm/about/index.html [opened]
- RCH Kids Health Info. *Worms* (reviewed Apr 2026). https://www.rch.org.au/kidsinfo/fact_sheets/worms/ [opened]
- Moussavi E, et al. *Prevalence of Enterobius vermicularis among children in Iran: systematic review and meta-analysis*. Parasite Epidemiol Control 2023. doi:10.1016/j.parepi.2023.e00315 [abstract]
- Moosazadeh M, et al. *Prevalence of Enterobius vermicularis among children in Iran*. Osong Public Health Res Perspect 2017. doi:10.24171/j.phrp.2017.8.2.02 [abstract]
- Amiri SA, et al. *Prevalence of Enterobius vermicularis infection among preschool children, Babol*. J Parasit Dis 2016. doi:10.1007/s12639-015-0727-4 [abstract]

**Head lice**
- NHS. *Head lice and nits* (reviewed 22 Apr 2024). https://www.nhs.uk/conditions/head-lice-and-nits/ [opened]
- CDC. *About head lice* (4 Jun 2024). https://www.cdc.gov/lice/about/head-lice.html [opened]
- CDC. *Treatment of head lice* (12 Nov 2024). https://www.cdc.gov/lice/treatment/index.html [opened]
- AAP HealthyChildren. *Signs of lice* (adapted from *A Parent's Guide to Head Lice*; updated 26 Sep 2022). https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Signs-of-Lice.aspx [opened]
- Nolt D, Moore S, Yan AC, Melnick L; AAP Committee on Infectious Diseases, Committee on Practice and Ambulatory Medicine, Section on Dermatology. *Head lice*. Pediatrics 2022;150(4):e2022059282. doi:10.1542/peds.2022-059282 [abstract; publisher page 403]
- Fox News. *Kids with head lice don't need to leave school: report* (Sep 2022), and earlier AAP coverage (Healio 2010, 2015) [search]
- Hill N, et al. *Single blind, randomised, comparative study of the Bug Buster kit and over the counter pediculicide treatments*. BMJ 2005. doi:10.1136/bmj.38537.468623.e0 [abstract]
- Roberts RJ, et al. *Comparison of wet combing with malathion for treatment of head lice in the UK*. Lancet 2000. doi:10.1016/s0140-6736(00)02578-2 [abstract]
- Plastow L, et al. *Head lice infestation: bug busting vs. traditional treatment*. J Clin Nurs 2001. doi:10.1046/j.1365-2702.2001.00541.x [abstract]
- HANDI Project Team. *Wet combing for the eradication of head lice*. Aust Fam Physician 2013. PMID 23529522 [abstract]
- Burgess IF. *Do some families act as a reservoir of head lice…* Parasitol Res 2023. doi:10.1007/s00436-023-07795-6 [abstract]
- MHRA. *Head lice eradication products: risk of serious burns if treated hair is exposed to open flames or other sources of ignition*. Drug Safety Update 11(8), 8 Mar 2018. https://www.gov.uk/drug-safety-update/head-lice-eradication-products-risk-of-serious-burns-if-treated-hair-is-exposed-to-open-flames-or-other-sources-of-ignition-eg-cigarettes [opened]
- Alizadeh A, Pourbadakhshan N. *From itching to poisoning: the deadly cost of misguided pest control in Iran's households, a case report*. J Ped Perspect 2025;13(11):19794–19797. doi:10.22038/jpp.2025.92892.5616. https://jpp.mums.ac.ir/ [opened, PDF text extracted]
- Snopes; University of Utah Health; Lice Clinics of America; J Med Toxicol 2014 Creolin case; South Sudan Medical Journal on kerosene poisoning; Djibouti kerosene poisoning study [search]
- Akbari M, et al. *Prevalence of pediculosis among primary school-aged students in Iran: updated meta-analysis*. J Med Entomol 2022. doi:10.1093/jme/tjac117 [abstract]
- Moosazadeh M, et al. *Prevalence of head lice infestation and its associated factors among primary school students in Iran*. Osong Public Health Res Perspect 2015. doi:10.1016/j.phrp.2015.10.011 [abstract]
- Eslami R, et al. *kdr mutations in head lice in the north of Iran*. J Parasit Dis 2024. doi:10.1007/s12639-024-01707-w [abstract]
- Taheri M, et al. *Epidemiological analysis of pediculosis and kdr mutation frequency… Khorasan Razavi*. BMC Res Notes 2024. doi:10.1186/s13104-024-06940-3 [abstract]
- Hamedanian L, et al. *Ivermectin lotion vs permethrin shampoo vs dimethicone lotion… Islamshahr*. J Arthropod Borne Dis 2021. doi:10.18502/jad.v15i3.9820 [abstract]
- Iran MoH / Ministry of Education. *دستورالعمل اجرایی مبارزه با پدیکلوزیس سر در دانش‌آموزان* (version 1399; re-issued 2024 via IUMS Ghods, TBZMED and others) [search; PDF downloaded, text unreadable]

**Legs, feet and growing pains**
- Wenger DR, Mauldin D, Speck G, Morgan D, Lieber RL. *Corrective shoes and inserts as treatment for flexible flatfoot in infants and children*. J Bone Joint Surg Am 1989. PMID 2663868 [abstract]
- Evans AM, Rome K, Carroll M, Hawke F. *Foot orthoses for treating paediatric flat feet*. Cochrane Database Syst Rev 2022. doi:10.1002/14651858.CD006311.pub4 [abstract]
- Liu C, et al. *Effects of foot orthoses on radiological parameters and pain in children with flexible flat feet: systematic review and meta-analysis*. Front Pediatr 2024. doi:10.3389/fped.2024.1388248 [abstract]
- Baird DC, Dickison CG, Spires HI. *Lower extremity abnormalities in children*. Am Fam Physician 2025;111(2):125–139. https://www.aafp.org/afp/2025/0200/lower-extremity-abnormalities-children [opened: abstract and SORT table]
- Staheli LT. *Shoes for children: a review*. Pediatrics 1991. PMID 1861942 [abstract]
- Staheli LT, Giffin L. *Corrective shoes for children: a survey of current practice*. Pediatrics 1980. doi:10.1542/peds.65.1.13 [abstract]
- NHS. *Flat feet* (reviewed 24 Jun 2025). https://www.nhs.uk/conditions/flat-feet/ [opened]
- NHS. *Leg and foot problems in children* (reviewed 5 Jun 2026). https://www.nhs.uk/conditions/baby/health/leg-and-foot-problems-in-children/ [opened]
- NHS. *Growing pains* (reviewed 16 Jun 2026). https://www.nhs.uk/conditions/growing-pains/ [opened]
- NHS. *Rickets and osteomalacia* (reviewed 9 Jul 2025). https://www.nhs.uk/conditions/rickets-and-osteomalacia/ [opened]
- NHS Lothian, Royal Hospital for Children and Young People. *Normal lower limb variants in childhood* (v2.0, approved Sep 2023, review Sep 2026). https://apps.nhslothian.scot/files/sites/2/Normal-Lower-Limb-Variants-in-Childhood-RHCYP-V2.0.pdf [opened, PDF text extracted]
- AAP HealthyChildren. *Flat feet and fallen arches* (updated 14 Mar 2023). https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Flat-Feet-Fallen-Arches.aspx [opened]
- RCH Kids Health Info. *Septic arthritis* (reviewed Jun 2018, updated Jul 2025). https://www.rch.org.au/kidsinfo/fact_sheets/Septic_arthritis/ [opened]
- RCH Clinical Practice Guideline. *Limp* (Jul 2020), via Don't Forget the Bubbles and Medicine Today summaries [search]
- Queensland Children's Health. *Limp: emergency management in children*. https://childrens.health.qld.gov.au/guideline-limp-emergency-management-in-children [403; search snippet only]
- O'Keeffe M, Kamper SJ, Montgomery L, et al. *Defining growing pains: a scoping review*. Pediatrics 2022. doi:10.1542/peds.2021-052578 [abstract]
- Smith M, Pacey V, et al. *Assessments, diagnostic criteria and outcome measures for growing pains… scoping review*. BMJ Open 2025. doi:10.1136/bmjopen-2025-101989 [abstract]
- Pavone V, et al. *Growing pains: what do we know about etiology? A systematic review*. World J Orthop 2019. doi:10.5312/wjo.v10.i4.192 [abstract]
- Walters AS, et al. *Restless legs syndrome and growing pains: are they the same thing?* Sleep Med 2013. doi:10.1016/j.sleep.2013.07.013 [abstract]
- Engström P, Tedroff K. *The prevalence and course of idiopathic toe-walking in 5-year-old children*. Pediatrics 2012. doi:10.1542/peds.2012-0225 [abstract]
- Engström P, Tedroff K. *Idiopathic toe-walking: prevalence and natural history from birth to ten years of age*. JBJS Am 2018. doi:10.2106/jbjs.17.00851 [abstract]
- Chapek M, Kessler J. *Prevalence of persistent toe walking in children with and without autism…* J Foot Ankle Surg 2025. doi:10.1053/j.jfas.2024.08.005 [abstract]
- Santos LDL, et al. *Idiopathic toe walking: what's new? An integrative review*. Preprints 2023. doi:10.20944/preprints202312.0331.v1 [abstract]
- Rastad H, et al. *Prevalence and determinants of vitamin D deficiency in Iranian children and adolescents: the CASPIAN-V study*. J Diabetes Metab Disord 2021. doi:10.1007/s40200-021-00757-8 [abstract]
- Jazayeri M, et al. *Prevalence of vitamin D deficiency in healthy Iranian children: systematic review and meta-analysis*. MJIRI 2018. doi:10.14196/mjiri.32.83 [abstract, partial]
- Zandieh N, et al. *Economic evaluation of a national vitamin D supplementation program among Iranian adolescents*. BMC Complement Med Ther 2022. doi:10.1186/s12906-021-03474-0 [abstract]
- IUMS Faculty of Rehabilitation leaflets (*صافی کف پا*; *کفش مناسب از دیدگاه فیزیوتراپی*) and SBMU *کفش طبی چیست*, plus commercial pages (nobat.ir, digikala mag, basalam) and an IRCT registered insole trial [search; PDFs downloaded, Persian text unreadable]
- PlayNest phase 6 note `02_feeding_and_eating.md` §4: Iran MoH A+D drops programme [opened in an earlier round]
