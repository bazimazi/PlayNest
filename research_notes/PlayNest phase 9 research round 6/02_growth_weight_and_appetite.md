# 02 — Growth, weight and appetite worries; iron, vitamin drops and tea ("Food and eating" shelf)

Research notes for PlayNest phase 9, round 6. Researched 17 Nov 2026.

## Scope and house rules

**Scope.** One or two NEW guides for a very common worry among Iranian parents ("my child doesn't eat", "my child is too thin", "is my child short?"):

1. **"Growth charts and 'is my child eating enough?'"**: centiles in plain words, the WHO growth standards, why a small child can be perfectly healthy, crossing centiles, the normal drop in appetite after the first year, pressure to eat, appetite syrups and "growth tonics", overweight without stigma, short-stature worries, and red flags.
2. **"Iron, vitamin drops and tea"** (could be a section of guide 1 if the shelf is crowded): iron-deficiency anaemia in Iran, tea and iron, too much cow's milk, iron-rich foods, Iran's A+D and iron drop programme (ages only), iodised salt.

**Already in the app, so don't repeat it** (checked in `src/data/guides-food.ts`, `guides-wellbeing.ts`, `tips-food.ts`, and by grepping `src/data` for iron/tea/vitamin/juice):
- `fussy-eating` already covers the division of responsibility (with an honest "not tested as a programme on its own" line), 8 to 15 tastes, no pudding as a prize, no clean-plate rules, and a red-flag callout (losing weight or not growing, gagging, purées only at 1 year, a shrinking food list, distress).
- `everyday-eating` covers drinks by age, the WHO free-sugar limits, treats, body talk, and the AAP 2016 line that dieting and weight talk are risk factors.
- `food-and-body-talk` covers what to say to relatives ("Look how thin she is!") and that parents shouldn't start a diet at home.
- `starting-solids` covers "Iron early", that tea makes iron harder to absorb, and no juice, tea or sweet drinks under 12 months.
- `milk-feeds` covers the fact that vitamin drop advice differs by country, following the health centre, and not doubling up products.
- `health-checks` covers weight, length and head size plotted on a growth chart, and "any vitamin or iron drops your country recommends".
- Safety guides and tips already say to store iron drops and vitamins up high.

The new guides should **link to** these and add what is missing: what a growth chart actually means, the reassurance and the red flags, why pressure backfires *in the direction parents fear* (less eating, not more), appetite syrups, and the Iran-specific iron and tea picture.

**House rules applied throughout.** Teach, don't diagnose. **No medicine or supplement doses or amounts, ever**, including iron drops, A+D drops, cyproheptadine and vitamin D. Several sources I read contain doses. I have deliberately left them out. Red flags always send the parent to a professional. Where bodies disagree, say so and take the cautious path. Separate associations from trial results and give effect sizes honestly. No guilt and no body-shaming. Respect tradition (tea is part of family life in Iran). No religious rulings. Political neutrality: I mention sanctions only where a source raises them, as the source's own words.

## How to read these notes

- **[opened]**: I opened the page or file and took the facts from it.
- **[abstract]**: I read the abstract via the Europe PMC REST API, not the full paper.
- **[search]**: The facts came from search-result snippets or summaries only. Recheck before shipping.
- **[recall, unverified]**: Background knowledge I couldn't confirm this session. Must be checked before any copy relies on it.

**Access problems this session**
- **nice.org.uk returned HTTP 403** again (NG75 *Faltering growth*). NICE thresholds below come from search snippets of the NICE page, confirmed by an NHS South West London ICB page that reproduces them ([opened]). Per instructions I didn't try to get round the 403.
- **NHS "your baby's weight and height"** URL returned **404**. **raisingchildren.net.au** growth-charts page returned **403**.
- **WHO IRIS** PDF of the 2023 complementary feeding guideline returned **403**. **NCBI Bookshelf** showed a reCAPTCHA page. The strength ratings for WHO 2023 recommendations are therefore [search] or [recall].
- **Iranian university PDFs** (SBMU supplement leaflet from 2012; AJUMS 2024 «مراقبت‌های ادغام‌یافته کودک سالم – پزشک» booklet) downloaded, but pdftotext produced **no readable Persian** (fonts without Unicode mapping). Their content is not used. For the Iran supplement schedule I rely on the phase 6 note (MoH textbook 2021, [opened] then) and sibling note `06_governance_and_open_checks.md` §2.6.
- Europe PMC full text for Galloway 2006 returned HTTP 500 (abstract only).
- The shared scratchpad `epmc.js` was overwritten by a sibling agent mid-session. I used a private copy. No effect on results.
- Web searches used: about 16. Most evidence came through the Europe PMC API.

---

## 1. Growth charts and centiles

### 1.1 The WHO Child Growth Standards: children everywhere grow similarly with good care

- **WHO Multicentre Growth Reference Study (MGRS)**: **8,440 children** from Brazil, Ghana, India, Norway, Oman and the USA, from affluent settings that "support unconstrained growth". Criteria included **breastfeeding, no maternal smoking**, single term birth and no significant illness. Longitudinal from birth to 24 months, with 21 home visits, plus a cross-sectional sample at 18–71 months. **Only 3% of the variation in length was explained by which country a child lived in, against 70% by differences between individuals.** Site differences were mostly under 0.2 SD. Conclusion: "the striking similarity in linear growth among children in the six sites justifies… a single international standard from birth to 5 y" (MGRS Group, *Acta Paediatr Suppl* 2006;450:56–65, doi:10.1111/j.1651-2227.2006.tb02376.x) [abstract].
- **Oman** was one of the six sites, the nearest to Iran. Useful in Persian copy: the charts include a Middle Eastern population [abstract, site list].
- Selection: about **83% of 13,741 screened** were ineligible for the longitudinal part, mainly because of **low socioeconomic status** in Brazil, Ghana, India and Oman (MGRS Group, *Acta Paediatr Suppl* 2006, doi:10.1111/j.1651-2227.2006.tb02371.x) [abstract]. So the charts show how children grow **when conditions are good**. That makes them a *standard* (how children should grow), not just a description.
- WHO tool page: standards cover **birth to 5 years** (length/height-for-age, weight-for-age, weight-for-length/height, BMI-for-age, plus motor milestone windows). A separate **2007 growth reference for 5–19 years** exists (WHO, *Child growth standards* tool page) [opened]. The 5–19 reference merged 1977 NCHS data with MGRS data. At 19 years, +1 SD BMI ≈ the adult overweight cut-off and +2 SD ≈ the obesity cut-off (de Onis et al., *Bull WHO* 2007, doi:10.2471/blt.07.043497) [abstract].
- The **charts are based on breastfed babies but are for all babies, however they are fed**, and suit all ethnic backgrounds (RCPCH, *Growth charts: information for parents and carers*) [opened].
- Breastfed babies tend to gain faster in months 1–6 and more slowly from 6 months to 2 years than formula-fed babies. Health professionals should "carefully consider before suggesting a change in feeding" (Royal Children's Hospital Melbourne, *Children's growth assessment: Q&A for health professionals*, 2013, PDF) [opened; text extracted with pdftotext].
- **Iran** uses WHO-standard z-score growth curves in its child-care programme. Growth is classified on the curve: a line running flat against the z-score lines = «توقف رشد» (growth stopped), weight loss, and so on [search: Persian MoH/university training documents; not opened, PDFs unreadable]. **Recheck the current card wording** before Persian copy names the categories.

### 1.2 What centiles mean, in plain words

- A centile compares a child with others of the **same age and sex**. Example: a 4-year-old boy on the 10th percentile for weight weighs more than 10 in 100 boys his age, and less than 90 in 100 (Nemours KidsHealth, *Growth charts*, reviewed Aug 2019) [opened].
- "Being in a high or a low percentile **doesn't necessarily mean that a child is healthier** or has a growth or weight problem." A baby on the 5th can be as healthy as one on the 95th. What matters is the **pattern over time** (KidsHealth) [opened].
- "Weights and heights that are **anywhere within the centile lines are considered normal**" (RCPCH parents page) [opened].
- RCPCH made the **50th centile deliberately less prominent** on UK-WHO charts, so parents wouldn't think every child should be on or near it [search: RCPCH fact sheet, 2009].
- Children "do not always grow along the same percentile… but generally **track along or between** percentile curves". Rapid rises or falls, or a **flat line**, suggest a problem (RCH Melbourne 2013) [opened].
- Shifts across centiles are **common in infancy and puberty** (KidsHealth) [opened].
- **Height and weight are read together.** A light child who is also short and tracking steadily is a different picture from a child whose weight centile falls while height holds (KidsHealth; RCH) [opened].
- BMI-for-age naturally **falls after about 1 year** to a low point around **4–6 years**, then rises ("adiposity rebound"). Many parents notice toddlers "thinning out", and this is normal. An early rebound (before 4–6) is associated with later obesity. "**Labelling** children as overweight or obese is not helpful, and may lead to stigmatising and poor self-esteem" (RCH 2013) [opened]. RCH does not recommend BMI under 2 years.

### 1.3 Crossing centiles and early weight: when it matters

- **First 2 weeks**: no centile lines from birth to 2 weeks. A loss of **10% or more of birth weight**, or taking **more than 3 weeks** to regain birth weight, should prompt a feeding review (RCPCH parent FAQ; RCPCH parents page) [opened]. Losing up to about 10% early on is common, and birth weight is usually regained before 3 weeks (NHS SW London ICB, *Faltering growth*) [opened].
- **Dropping up to one centile space between measurements is normal. Crossing two spaces is less common**, and the health visitor or doctor may measure length, ask about eating and possibly investigate (RCPCH parent FAQ) [opened].
- **After an illness**, weight should return to its previous centile **within 2–3 weeks** of recovery (RCPCH parent FAQ) [opened]. This is a useful reassurance line.
- **NICE NG75 (2017) thresholds** for concern about faltering growth, which depend on birth weight: a fall across **≥1 weight centile space if birth weight was below the 9th centile; ≥2 spaces if 9th–91st; ≥3 spaces if above the 91st**; or a current weight **below the 2nd centile** whatever the birth weight [search: NICE snippet; confirmed by NHS SW London ICB page, which reproduces the table, opened]. NICE also says to compare length/height with the **mid-parental centile**. More than 2 centile spaces below it → consider undernutrition or a growth disorder (NG75 rec 1.2.2) [search].
- Caveat from RCH: the old "crossed 2 percentile lines" rule doesn't map neatly onto WHO/CDC charts, because their percentile spaces are uneven (RCH 2013) [opened]. **App consequence:** don't teach parents a numeric rule. Say "a steady drop across the lines, or a line that goes flat, is worth a check".
- Faltering growth management (NHS SW London): a detailed feeding history; measure length; consider a paediatrician and/or a paediatric dietitian. High-energy formula is **only after assessment**, not started routinely. For breastfed babies, keep breastfeeding and offer expressed milk before formula, because "supplementary formula often ends breastfeeding" [opened].
- A summary of NG75 exists: Gonzalez-Viana et al., *BMJ* 2017;358:j4219 (no abstract in Europe PMC) [abstract record only].

### 1.4 Normal appetite drop and growth spurts

- AAP: after the first birthday "your child's growth rate has slowed; he or she really doesn't require as much food now", "you'll probably notice a **sharp drop in his or her appetite**", and "the eating habits of toddlers are **erratic and unpredictable from one day to the next**!" "Encourage, but **don't pressure or force** your child to eat" (HealthyChildren.org, *Feeding & Nutrition: Your One-Year-Old*, updated 29 Oct 2020) [opened].
- Babies typically triple their birth weight by 1 year, and weight gain then slows to roughly 2 kg a year in the preschool years [recall, unverified]. These are useful context, but **don't put numbers in copy**.
- **Growth spurts:** infant length grows in short bursts separated by days to weeks of no growth ("saltation and stasis") (Lampl et al.; e.g. *Ann Hum Biol* 2001, doi:10.1080/03014460010016662) [abstract]. The popular claim of "growth spurts" at set ages (about 3 weeks, 6 weeks, 3 months) with extra feeding is widely repeated, but I found **no strong evidence for fixed timings** [recall, unverified]. Copy can say "growth comes in bursts, and appetite can rise and fall with it", without dates.

### 1.5 Short stature worries

- Short stature (definition for doctors): height ≥2 SD below average, about below the 2.3rd centile. **Common normal causes:** short parents, and "**constitutional growth delay**" (small but growing at a normal rate, later puberty, growing for longer). Medical causes include rickets, coeliac disease, hypothyroidism, diabetes, genetic conditions such as Turner syndrome, growth hormone deficiency, malnutrition and prenatal growth problems. **When to contact a provider:** child much shorter than peers, or **seems to have stopped growing**. Tests may include bone age X-ray, blood counts, thyroid tests, IGF-1 and GH stimulation. "**Most children with short stature have normal growth hormone levels and will not need growth hormone injections**" (MedlinePlus, *Short stature*, reviewed 1 Jul 2025) [opened].
- **Growth rate matters more than a single height.** A consistently short child growing steadily usually needs no more tests (patient-education mirrors of the MedlinePlus/A.D.A.M. text) [search].
- **Mid-parental height** is a rough guide only. In a study of 23 very large families, standard mid-parental height **explained 36% of the variation** in children's adult height (Zeevi et al., *Children* 2024, doi:10.3390/children11080916) [abstract]. Don't present it as a prediction.
- **Growth hormone myths:** GH is a prescription treatment for specific diagnoses, given before growth plates close. It is not a "height booster" for healthy short children (MedlinePlus) [opened]. "Height-increasing" supplements and tablets sold online in Iran (e.g. «قرص افزایش قد») — I didn't research them this session [recall, unverified that they're common]. The app can say generally: no pill or syrup makes a healthy child taller.

### 1.6 Stunting and underweight in Iran (the double burden)

- **Under 5, meta-analysis**: pooled **stunting 12%** (95% CI 10–14) from 16 studies, 1989–2017. Boys and girls similar. **Higher in southern provinces** (Mansori et al., *MJIRI* 2018, doi:10.14196/mjiri.32.103) [abstract].
- **Under 6, meta-analysis** (27 studies, 2002–2016, n=161,941): severe underweight 1%, moderate 6%; severe short stature 3%, moderate 8% (Motedayen et al., *Clin Nutr Res* 2019, doi:10.7762/cnr.2019.8.2.101) [abstract]. "Mild" categories (21–25%) are within the normal range by WHO definitions. Don't quote them as illness.
- **Eight food-insecure provinces, 2–5 years** (national food and nutrition surveillance, n=2,247): HAZ < −2 in **10.1%**, WHZ < −2 in 8.4%, WAZ < −2 in 8.1%. Stunting higher in **rural** areas. Household socioeconomic status had the largest effect, mostly on weight-for-age (Rabiei et al., *BMC Public Health* 2024, doi:10.1186/s12889-024-20931-w) [abstract].
- **Golestan 2–5 years** (2015, n=1,382): stunting 4–7.5%, underweight 4–7%, but **"at risk of overweight" 9–18%** (Jalali et al., *Clin Nutr Res* 2019, doi:10.7762/cnr.2019.8.2.119) [abstract]. This is the double burden in one province.
- **Sistan and Baluchestan**: local studies report stunting of 10–20% in Zahedan suburbs, up to 50% in one small 2025 sample [search; small local samples, not provincial rates]. National survey tables (IrMIDHS 2010, ANIS 2017) were **not found** this session. Gap.
- **CASPIAN-IV** (n=13,486, 6–18 years, 2011): **underweight and short stature fell as family socioeconomic status rose; overweight and obesity rose with it** (Djalalinia et al., *J Diabetes Metab Disord* 2021, doi:10.1007/s40200-021-00767-6) [abstract].
- **App takeaway:** most Iranian children worried about as "too thin" or "short" are healthy and following their own line. Real undernutrition is concentrated in poorer and some southern/south-eastern areas, which is a reason to keep every health-centre check, not to frighten every parent.

---

## 2. Pressure to eat, controlling feeding and responsive feeding

### 2.1 Pressure to eat

- **Galloway et al. 2006** (experiment, preschoolers, repeated measures): when children were pressured to "finish your soup", they ate **less**, and made "overwhelmingly" more negative comments. Children pressured at home had **lower BMI percentiles**, and were less affected by the lab pressure (*Appetite* 2006, doi:10.1016/j.appet.2006.01.019, PMC2604806) [abstract]. Sample size about 27 children [recall, unverified: full text unavailable]. **Small, single-lab experiment.** Present it as "a small experiment found…".
- **Ruzicka et al. 2021 meta-analysis** (51 studies, 17,431 parent–child pairs): **pressure to eat was associated with *lower* child weight** (d = −0.30, 95% CI −0.38 to −0.22). **Restriction was associated with *higher* weight** (d = 0.22, 95% CI 0.14 to 0.30). High heterogeneity, mostly cross-sectional (*Obes Rev* 2021, doi:10.1111/obr.13135) [abstract]. **The honest reading:** direction is unclear. Parents of thin children pressure more, and pressure may make eating worse.
- **Generation R (Netherlands), 4,845 pairs, longitudinal**: fussy eating at 1½–3 years predicted **more parental pressure** at 4 (adjusted B = 0.24). Pressure at 4 then predicted **more fussiness at 6** (B = 0.14), independent of earlier fussiness (Jansen et al., *Physiol Behav* 2017, doi:10.1016/j.physbeh.2017.02.015) [abstract]. It runs **both ways**: a vicious circle. This is the most useful study for Iranian parents. It is not blame: the child's fussiness comes first, and pressure tends to feed it.
- Wang et al. 2022 meta-analysis of longitudinal studies (14 studies, 15,348): using **food as a reward predicted later emotional eating** (β = 0.09). Restriction predicted more food enjoyment (β = 0.044). Most of the 94 tested effects were not significant (*Nutrients* 2022, doi:10.3390/nu14091896) [abstract]. Effects are small.
- Picky eating and weight: **41 studies**. Picky eating was defined inconsistently (prevalence 5.8–59%). Food neophobia was **not** associated with weight, and results for picky eating were **unclear** (Brown et al., *Child Obes* 2016, doi:10.1089/chi.2015.0189) [abstract]. Pooled picky-eating prevalence in children ≤30 months was 22% (Cole et al., *Nutr Rev* 2017, doi:10.1093/nutrit/nux024) [abstract]. **Reassurance:** most picky eaters are not underweight.
- Pressure recalled from childhood predicted less intuitive eating and more disordered-eating symptoms in 170 college students (Ellis et al., *Appetite* 2016, doi:10.1016/j.appet.2015.11.020) [abstract]. Retrospective and weak. Mention only as "some studies link".
- **Interventions can change feeding practices:** RCTs pooled in a 2024 meta-analysis reduced pressure to eat (SMD 0.61), food as reward (SMD −0.31) and emotional feeding (SMD −0.36) right after the intervention, **but not at later follow-up** (Wang et al., *Obes Rev* 2024, doi:10.1111/obr.13688) [abstract].

### 2.2 Iran and the Middle East

- **Shiraz, 333 six-year-olds**: an "unhealthy maternal feeding pattern" (factor analysis of the Comprehensive Feeding Practices Questionnaire) was linked to BMI before adjustment, **not after** (Askari et al., *J Health Popul Nutr* 2025, doi:10.1186/s41043-025-00956-6) [abstract].
- **Birjand**: the CFPQ was adapted for Iranian 2–5-year-olds (300 mothers), with a "Parent Pressure" factor. The authors note that overweight, obesity *and* underweight are common child problems in Iran (Minaie et al., *Int J Prev Med* 2019, doi:10.4103/ijpvm.ijpvm_34_18) [abstract].
- **Rasht** (208 mothers of 3–6-year-olds): mothers of **sons** used more pressure, and older mothers less [search].
- A nationwide school survey (23,183 students aged 6–18) reportedly found that students who were usually **forced to eat were more often underweight** [search; likely a CASPIAN paper; not found in Europe PMC]. Same reverse-causation caveat.
- **No Iranian trial** of reducing pressure or force-feeding was found. Gap. Cultural note: Iranian parenting puts a lot of weight on «خوب غذا خوردن» and plump children as a sign of health and good care [recall, unverified, consistent with relatives' comments already handled in `food-and-body-talk`].

### 2.3 Responsive feeding and the division of responsibility

- **WHO 2023 complementary feeding guideline**: responsive feeding is one of 7 recommendation areas. The ENN summary calls "recognising and responding to the child's hunger and feeding cues" "critical" (ENN *Field Exchange* 72, 2024) [opened]. The exact WHO wording and strength rating were **not seen** (IRIS 403, NCBI captcha). I believe it is phrased as caregivers practising responsive feeding [recall, unverified]. It covers 6–23 months.
- **INSIGHT RCT** (USA, 279 first-time mothers; responsive parenting covering feeding, sleep, play and soothing vs a safety control): BMI z-score at 3 years **−0.13 vs 0.15** (difference −0.28, 95% CI −0.53 to −0.01). Overweight 11.2% vs 19.8%, **not statistically significant** (*JAMA* 2018, doi:10.1001/jama.2018.9432) [abstract]. 86% white and privately insured, so generalisability is limited. The control group was more likely to feed first when the baby fussed (OR 1.9) (Adams et al. 2019, doi:10.1186/s12966-019-0837-y) [abstract]. Honest framing: **"a modest effect in one trial"**.
- **Satter's division of responsibility (sDOR):** it has measurement tools (sDOR.2-6y) and cross-sectional studies, e.g. Ruder & Lohse, *Nutrients* 2024, doi:10.3390/nu16060767; Harris et al. 2025 [abstract]. I found **no RCT of sDOR alone** on child weight or eating. The app's existing wording in `fussy-eating` ("hasn't been tested as a programme on its own") is accurate. Keep it.

### 2.4 Screens and distraction to "get food in"

- TV while eating: a meta-analysis of experiments (23 studies, all ages) found **no overall effect**, but a **small increase** for TV alone (g = 0.13) (Garg et al., *Nutrients* 2025, doi:10.3390/nu17010166) [abstract]. In adults, distraction had a non-significant effect on intake during the meal (Gough et al., *AJCN* 2026) [abstract].
- I found **no good study on parents using phones or cartoons to make young children eat**, though it's widely reported clinically and in Beijing and Turkish surveys ("inattentive eating" 16% in 6–35-month-olds in Beijing; Li et al., *J Glob Health* 2026) [abstract]. The reasoning for avoiding it (the child stops noticing hunger and fullness, and meals depend on the screen) is **expert opinion, not trial evidence**. Say so. Link to sibling note `01_screens_and_young_children.md` for screen advice in general.

---

## 3. Appetite syrups, "growth tonics" and supplement drinks

- **Use in Iran is documented.**
  - An **Iranian randomized double-blind trial** gave thin children aged 2–10 two doses of **cyproheptadine** or placebo (3 groups, 92 children) for 4 months. BMI rose more on cyproheptadine. **Mood swings were more frequent** in both drug groups. Short follow-up (Javidmehr et al., *Curr Drug Saf* 2026, doi:10.2174/0115748863470780260417103722) [abstract].
  - A registered Iranian trial of cyproheptadine in underweight 2–10-year-olds is on IRCT (fa.irct.ir/trial/17079) [search].
  - Persian health sites market **"Racip" syrup (cyproheptadine plus B vitamins)** as a popular «شربت اشتهاآور» for underweight children and adults (darmankade.com) [search]. These are commercial blogs, not evidence. Whether it is sold without a prescription in practice is [recall, unverified].
- **Evidence.**
  - Systematic review: 46 studies (32 RCTs) in 21 populations. 39 showed weight gain. Little benefit in cancer and HIV. **Transient sedation** was the most common side effect. Few studies measured appetite objectively (Harrison et al., *Appetite* 2019, doi:10.1016/j.appet.2019.02.012) [abstract]. Mostly specific patient groups, not healthy picky eaters.
  - Cyproheptadine is an **antihistamine**, approved for allergy. **"Excitement… especially in children"**, drowsiness and nervousness are listed side effects. MedlinePlus doesn't list appetite as an approved use (MedlinePlus drug info, revised 15 Mar 2026) [opened].
  - Safety and effectiveness under 2 years are not established (Persian drug-info summaries) [search]. Contraindicated in newborns and premature babies per US labelling [recall, unverified].
  - **Apetamin** (cyproheptadine, lysine, B vitamins; unapproved in the US, sold online): an **11-year-old developed hepatitis** after regular use, which improved on stopping (Neupane & Berg, *Cureus* 2024, doi:10.7759/cureus.74289) [abstract].
- **What bodies say.** I found **no AAP, ESPGHAN or NICE recommendation in favour of appetite stimulants** for picky or thin children. A clinical reference (AMBOSS) says they are "not routinely recommended" [search]. NICE NG75's position couldn't be checked (403). **Gap:** no formal guideline statement found either way.
- **High-energy supplement drinks (oral nutritional supplements, ONS).** A 2025 meta-analysis: **5 RCTs, 874 children with picky eating *and* underweight**. ONS plus dietitian counselling beat counselling alone for weight in 3 RCTs. Height and BMI were inconsistent. "Moderate evidence" (Iwańska et al., *Clin Nutr ESPEN* 2025, doi:10.1016/j.clnesp.2025.03.039) [abstract]. Industry funding of the underlying trials is likely but not checked [recall, unverified]. This applies to **underweight** children with a dietitian, not to children who are small and healthy. NHS SW London: high-energy formula only after assessment [opened].
- **Herbal appetite tonics:** not researched. Unknown content and the risk of contamination are general concerns [recall]. Note: herbal teas also block iron absorption (§5.2).
- **App message (no doses, no product names):** "Appetite syrups are medicines with side effects, such as sleepiness and moodiness. They don't fix the reason a child eats little. Ask your doctor before giving any appetite syrup, tonic or supplement drink, and never buy one on a friend's advice."

---

## 4. Overweight: Iran trends, drinks, rewards and family approaches

- **Iran prevalence.**
  - Umbrella review: children and adolescents **overweight 12.4%, obesity 6.5%** (Dehghani et al., *BMC Public Health* 2024, doi:10.1186/s12889-024-20860-8) [abstract].
  - A 2023 meta-analysis (studies 2012–2021) gives ≤18 years overweight 11.7%, obesity 8.1% (Abiri et al., *J Health Popul Nutr* 2023, doi:10.1186/s41043-023-00419-w) [abstract].
  - **CASPIAN trend** (10–18 years): obesity rose from **9.8% (2003–04) to 11.6% (2015–16)** (Mazaheri-Tehrani et al., *Ann Pediatr Endocrinol Metab* 2025, doi:10.6065/apem.2550042.021) [abstract].
  - Overweight rises with family socioeconomic status (CASPIAN-IV, §1.6) [abstract].
- **Sugary drinks.**
  - Meta-analysis: in child cohorts, **each extra daily serving** of sugar-sweetened drinks was associated with **+0.06 BMI units a year**. RCTs that **reduced** sugary drinks in children slowed BMI gain (fixed effects −0.12; random effects −0.17, CI crossing 0) (Malik et al., *AJCN* 2013, doi:10.3945/ajcn.113.058362) [abstract].
  - In CASPIAN-V (n=3,733, 7–18 years), soda and non-alcoholic malt drinks were linked to higher liver enzymes (ALT) (Khademian et al., *Adv Biomed Res* 2024, doi:10.4103/abr.abr_130_22) [abstract]. This is an association.
- **Juice.** AAP 2017: juice's sugar raises calorie intake and caries risk, and the lack of protein and fibre "can predispose to inappropriate weight gain (**too much or too little**)" (Heyman & Abrams, *Pediatrics* 2017, doi:10.1542/peds.2017-0967) [abstract]. Age limits per AAP: no juice under 12 months, small daily limits by age, whole fruit preferred [recall, unverified for the exact limits; the app already says "small, with meals"]. WHO 2023: limit 100% fruit juice (conditional, low certainty); avoid sugar-sweetened drinks; non-sugar sweeteners should not be consumed (strong, very low certainty) [search: NCBI Bookshelf snippet + ENN, opened]. **The "too little" point matters for Iran:** juice and sweet drinks fill small stomachs and can *reduce* appetite for meals.
- **WHO free sugars** guideline (2015): <10% of energy (strong), ideally <5% (conditional). Already in the app [opened in phase 6; grading recall].
- **Sweets as rewards:** food as a reward predicted later emotional eating (§2.1). Already advised against in `fussy-eating` and `food-and-body-talk`.
- **Family-based approaches.**
  - Cochrane (6–11 years, 70 RCTs, 8,461 children): multi-component diet, activity and behaviour programmes reduced BMI by **0.53 kg/m²** (95% CI −0.82 to −0.24) at longest follow-up. **Low or very-low certainty** (Mead et al., Cochrane 2017, CD012651) [abstract].
  - Prevention (153 RCTs): 0–5 years, diet + activity reduced BMI by **0.07 kg/m²** (moderate certainty). 6–12 years, activity reduced BMI by 0.10 kg/m², with little effect on zBMI (Brown et al., Cochrane 2019, CD001871) [abstract].
  - **Honest message:** effects are small. Whole-family habits beat singling out the child.
- **Weight stigma:** stigma "contributes to… binge eating, social isolation, avoidance of health care… decreased physical activity, and increased weight gain" (AAP policy, Pont et al., *Pediatrics* 2017, doi:10.1542/peds.2017-3034) [abstract]. RCH says labelling children is unhelpful [opened].
- Caregivers concerned about overweight **restrict** more (pooled β = 0.22) (Wang et al., *Nutrients* 2022, doi:10.3390/nu14142885) [abstract], and restriction is linked to higher weight (Ruzicka 2021). Another circle to explain gently.

---

## 5. Iron, tea and cow's milk

### 5.1 Iron deficiency in Iranian children

- **Under 6 years, meta-analysis** (6 studies, n=1,700): **iron deficiency 27.7%** (95% CI 11.9–43.5), **iron-deficiency anaemia (IDA) 18.2%** (14.3–22) (Nazari et al., *J Blood Med* 2019, doi:10.2147/jbm.s196102) [abstract]. Wide intervals and few studies.
- **Umbrella review:** IDA **19.9% in young children** (7 meta-analyses). Iran is "in the mild level of IDA prevalence" by WHO classification. The authors expect it to rise "due to sanctions and high inflation" (Dehghani et al., *BMC Pregnancy Childbirth* 2024, doi:10.1186/s12884-024-06575-z) [abstract]. *That expectation is the authors' speculation, not data. App copy should not repeat it.*
- Under 18: IDA 13.9%, iron deficiency 26.9%. The authors call for better use of the free supplements and for programmes that reach groups not covered, "including boys under six" (Akbari et al., *Hematology* 2017, doi:10.1080/10245332.2016.1240933) [abstract].
- **Tabas (South Khorasan), 897 infants aged 6–12 months already on the iron programme:** anaemia (WHO Hb criterion) **36.8%**, falling with age and with longer supplement use (OR 0.88 per month). Authors conclude the programme reduced anaemia (Riahi et al., *Arch Pediatr* 2019, doi:10.1016/j.arcped.2019.08.007) [abstract]. Cross-sectional, so causation is uncertain.
- **Thalassaemia trait is common in Iran.** 7% of a Shiraz sample were β-thalassaemia carriers (Karimi et al., *Arch Med Res* 2008, doi:10.1016/j.arcmed.2007.09.001) [abstract]. National carrier rates are about 4–10%, higher near the Caspian and the Persian Gulf [recall, unverified]. **Safety point:** a pale child or "small red cells" isn't always iron deficiency. Extra iron doesn't help thalassaemia trait. A blood test, not guesswork, decides.

### 5.2 Tea and iron

- **Mechanism (adults, isotope study):** with a bread meal, **black tea cut non-haem iron absorption by 79–94%**, peppermint tea 84%, pennyroyal 73%, cocoa 71%, vervain 59%, lime flower 52%, **camomile 47%**. **Adding milk made little or no difference** (Hurrell et al., *Br J Nutr* 1999, doi:10.1017/s0007114599000537) [abstract]. Relevant to Iran: herbal infusions (بابونه, نعناع) are also inhibitors, and "tea with milk" isn't a fix.
- **Infants (Israel, 122 healthy infants aged 6–12 months):** microcytic anaemia in **32.6% of tea drinkers vs 3.5% of non-drinkers**. Mean Hb 10.5 vs 11.2 g/dL. Multivariate analysis excluded age and social class as explanations. Median tea intake was large (Merhav et al., *AJCN* 1985, doi:10.1093/ajcn/41.6.1210) [abstract]. One observational study, 40 years old.
- **Review of 16 studies:** in groups with high rates of iron deficiency (infants, children, premenopausal women), tea was inversely associated with ferritin/Hb, **but the association disappeared after adjusting for diet, except in one study**. No effect where iron stores are adequate. "Only in populations… with marginal iron status does there seem to be a negative association" (Temme & Van Hoydonck, *Eur J Clin Nutr* 2002, doi:10.1038/sj.ejcn.1601309) [abstract].
- **Iran:** a Khuzestan study reportedly found 38% (or 61%; the paper is internally inconsistent) of families gave tea to children, and reported **less** IDA with more tea [search; full text not opened; conflicting]. A regional review says early complementary feeding in MENA and Iran often includes **sugar water and tea** [search; phase 6 note].
  - Iran MoH textbook (2021): avoid tea and herbal infusions as far as possible, **don't use tea to soften food**. If tea is insisted on, only **weak tea at least 2 hours before or after meals**, and no **sweet tea** (phase 6 note, [opened] then).
- **Honest summary:** the evidence that tea *reduces iron absorption from a meal* is strong (lab). The evidence that tea *causes anaemia in children* is limited and mixed (observational). The cautious path, which fits the Iranian MoH: no tea for babies, and for older children, tea away from meals, weak and unsweetened. Respect that tea is family life. Suggest milk or water *with* the meal and tea *between* meals.

### 5.3 Too much cow's milk

- Cow's milk causes iron deficiency in infants and toddlers in three ways. It is **low in iron**. It causes hidden **gut blood loss in about 40% of infants**, which stops after age 1. Its calcium and casein **block absorption**. Recommendation: no unmodified cow's milk as the main drink for infants, and only **modest amounts** for toddlers (Ziegler, *Nutr Rev* 2011, doi:10.1111/j.1753-4887.2011.00431.x) [abstract].
- Bodies give daily caps for toddler milk (e.g. CPS, AAP) — these are food amounts, not supplement doses, but they differ between bodies [phase 6 note, CPS opened then; AAP recall]. **Suggest the app says "large amounts of milk fill toddlers up and can lead to low iron; ask your health centre how much is right"**, rather than a number, to stay consistent with the no-amounts spirit and the Iranian advice.
- Iran MoH: cow's milk as a drink is not allowed under 1 year. It can be used in cooking, e.g. فرنی (phase 6 note, [opened] then).
- WHO 2023: for 12–23 months, animal milk is fine, and **follow-up/"growing-up" formulas are not recommended** (ENN summary) [opened].

### 5.4 Iron-rich foods

- Haem iron (meat, chicken, fish, liver) is absorbed best. Non-haem iron (lentils, beans, egg, leafy greens, fortified bread and cereals) is absorbed better **with vitamin C foods** (citrus, tomato, peppers) and worse with tea at the meal [recall for the general framing; NHS vitamins page says vitamin C helps the body absorb iron, opened].
- Iran-relevant foods: عدس (lentils), لوبیا, نخود, egg yolk, meat in آش and خورش, جگر (liver, occasionally), plus fresh herbs and citrus or lemon juice on food [recall; culturally plausible, to be checked by a Persian reviewer].

### 5.5 Don't add iron on your own

- RCT (Sweden and Honduras, breastfed infants): iron supplements from 4 to 9 months **reduced length and head growth in Swedish infants**. In Honduras the effect on length appeared only in infants who started with normal Hb. Iron **may benefit infants with low Hb but present risks for those with normal Hb** (Dewey et al., *J Nutr* 2002, doi:10.1093/jn/132.11.3249) [abstract]. A viewpoint raises concern about iron over-exposure in iron-replete infants in high-income countries (Hare et al., *Lancet Child Adolesc Health* 2018) [abstract].
- This is **not a reason to stop Iran's programme**. Iran's anaemia rates differ from Sweden's, and the programme is a deliberate public-health choice. It is a reason to say: **"Give the drops your health centre gives you. Don't add extra iron products or tonics unless a doctor tests and advises."**
- Iron overdose is dangerous for young children. The app already covers storage (keep up high).

---

## 6. Iran's supplement programme, vitamin D and iodine (ages only)

### 6.1 The programme

- **A+D (or multivitamin) drops: from the first days of life (day 3–5, or "from birth" in some documents) to the end of 24 months. Iron drops: from the end of 6 months, or when solid food starts if that's earlier (4–6 months, on health-worker advice), to the end of 2 years.** Low-birth-weight and preterm babies follow a different iron schedule set by the health team.
  - Sources: MoH Community Nutrition Office textbook 2021 (phase 6 `02_feeding_and_eating.md` §4, [opened] then). Two university health documents in sibling note `06_governance_and_open_checks.md` §2.6. Many university leaflets [search, this session].
  - **I have left out all amounts**, though the sources give them.
- Note 06 adds: **common colds or tummy bugs are not a reason to stop iron** (university document) [per note 06].
- **Practical tips from Iranian leaflets** (phase 6 note; [search] then): drops at the back of the tongue, then a little water, to reduce **tooth staining**; **dark stools are expected** on iron; give iron apart from the milk feed for formula-fed babies.
- **Adherence studies (Iran, all cross-sectional, local)** [search]:
  - Ardabil: 53.1% regular, 36.2% irregular, 10.7% never.
  - Bushehr (2023): 67.8% regular. Main reasons for missing: **forgetting (20.2%)** and **child refusal (18.4%)**.
  - Miandorood: 68.5% regular. Tooth discolouration cited by 9%.
  - Tabriz: "oral intolerance and teeth stain" the main reason.
  - Birjand: 23.3% stopped before 24 months.
  - A 2024 Iranian systematic review lists maternal knowledge, the child's stomach and tooth problems, and the drops' taste and smell as factors (doi:10.1108/NFS-10-2023-0236) [search].
  - **App angle:** practical help with forgetting (a routine cue, such as the same time each day) and with staining (how to give drops; ask the health centre or a dentist about stained teeth) is more useful than urging.
- **Vitamin A deficiency:** a policy study says about 30% of Iranian children aged 15–23 months had vitamin A deficiency [abstract, truncated: Rajaeieh et al., *BMC Public Health* 2021, doi:10.1186/s12889-021-11277-8]. In a national sample of 4,261 toddlers, the highest retinol quartile had 29% lower odds of stunting (OR 0.71) (Sharif et al., *Public Health* 2020, doi:10.1016/j.puhe.2019.10.029) [abstract]. This is an association.

### 6.2 Vitamin D

- See sibling note `03_everyday_complaints.md` §3.5. There: CASPIAN-V found 71.1% "deficient" in 7–18-year-olds, and Iran ran a national vitamin D programme for high-school students. I don't repeat it.
- **One added point:** the *same* CASPIAN-V sample of 2,596 is reported as **10.6% deficient and 60.5% insufficient** in another paper (Qorbani et al., *BMC Nutr* 2021, doi:10.1186/s40795-021-00477-5) [abstract]. A 2018 meta-analysis gives 35% (boys) and 61% (girls) deficient under 20 ng/mL (Jazayeri et al., *MJIRI* 2018) [abstract]. **Prevalence depends heavily on the cut-off**, so the app shouldn't quote a single "70% of Iranian children are deficient" figure.

### 6.3 Comparison with WHO and NHS (ages only)

| Body | Vitamin D / A | Iron |
|---|---|---|
| **Iran MoH** | A+D drops for **all** babies, first days to 24 months | Drops for **all** term babies, end of 6 months (or solids start) to 24 months |
| **NHS (UK)** | Breastfed babies: vitamin D **from birth**. All children **6 months to 5 years**: vitamins **A, C and D** daily. Not for babies having a large daily volume of formula. **Don't double up** (e.g. cod liver oil plus drops) (NHS *Vitamins for children*, reviewed 30 May 2024) [opened] | No routine iron. Iron-rich foods. Vitamin C helps absorption [opened] |
| **WHO** | **No recommendation either way** on routine infant vitamin D: "Further research is needed" (WHO eLENA, updated 9 Aug 2023) [opened] | Context-specific. 2023 guideline: micronutrient powders, fortified cereals, small-quantity lipid supplements are options where diets fall short, "not substitutes for a diverse… diet" (ENN) [opened] |
| **AAP (US)** | Vitamin D for breastfed babies from the first days [recall, unverified] | Iron for exclusively breastfed babies from about 4 months until iron-rich foods are eaten (debated) [recall, unverified; phase 6] |

### 6.4 Iodised salt

- Iran has had universal salt iodisation since the 1990s and sustained iodine sufficiency.
  - **Sixth national survey (2022–23):** schoolchildren aged 8–10 had a median urinary iodine of **133 µg/L**, within the WHO range, but **22.8% were at 50–100 µg/L** and about 9.5% lower.
  - **Mild deficiency has reappeared in pregnant women**, because they don't take iodide supplements fully.
  - The authors call for stricter quality control of salt (Mehran et al., *Thyroid* 2026, doi:10.1177/10507256261423184) [abstract].
- **Alborz, 228 children aged 7–11:** median 190 µg/L, with **both deficiency and excess**. Iodine status was linked to the salt's iodine content and to **when salt was added during cooking** (Baladastian et al., *BMC Nutr* 2026, doi:10.1186/s40795-026-01272-w) [abstract].
- **App:** "When you use salt in family food, use iodised salt, in small amounts. Store it closed, away from heat and light, and add it near the end of cooking." The storage and timing advice is Iranian health-centre advice [recall, unverified for the exact wording; the Alborz timing finding supports it]. **Babies under 1 need no added salt** (already in `starting-solids`). Don't recommend extra salt for iodine.

---

## Where bodies disagree

1. **Routine iron drops.** Iran gives iron to all term babies from about 6 months to 2 years. The UK, Canada and Australia rely on iron-rich foods. The AAP advises iron for exclusively breastfed babies from about 4 months [recall]. One RCT suggests possible harm to growth in iron-replete babies (Dewey 2002). **Cautious path for the app:** follow your own country's programme. Don't add extra iron beyond it without a doctor's test.
2. **Vitamin D/A.** Iran: A+D for all babies to 2 years. NHS: D from birth for breastfed babies, and A, C, D for 6 months to 5 years. WHO: no recommendation. Path: follow the health centre, don't double up products.
3. **Crossing centiles.** RCPCH tells parents "up to one space is normal, two is less common". NICE ties thresholds to birth-weight band. RCH says line-counting doesn't fit WHO/CDC charts. Path: no numeric rule in copy. "A steady drop or a flat line → check."
4. **Appetite stimulants.** Trials (including Iranian ones) show weight gain in some groups, and one review calls cyproheptadine "generally well-tolerated". But no guideline endorses it for healthy picky or thin children, side effects include sleepiness and agitation, and it doesn't address causes. Path: "only if your doctor prescribes it after checking your child."
5. **Supplement drinks.** Moderate evidence for underweight picky eaters with a dietitian. NHS: only after assessment. Path: doctor or dietitian first.
6. **Tea.** Strong lab evidence of reduced absorption. Weak and mixed evidence of anaemia in children. Iran MoH says avoid, or weak and away from meals. Path: follow MoH.
7. **Toddler milk amounts.** Daily caps differ between CPS, AAP and others. Path: "not too much; ask your health centre".
8. **Juice.** WHO: "limit" (conditional). AAP: none under 1, small after. Iran: none under 1. The app's current wording ("small, watered down, with a meal") is consistent.
9. **Division of responsibility.** Widely used, but no RCT of it alone. Responsive-feeding programmes show modest effects (INSIGHT). The current app wording is already honest.

---

## App takeaways

### A) Recommended outlines

#### Guide 1: "Growth charts and 'is my child eating enough?'" (minMonths 0, maxMonths 144, topic food; or 6–144 if the first weeks stay in `milk-feeds`)

Possible slug: `growth-and-appetite`. About 4–5 minutes.

1. **Intro (p):** "Is my child eating enough?" is one of the most common worries. The best answer isn't on the plate. It's on your child's growth chart, over several checks.
2. **h: What the growth chart shows.** Plain-words centiles, using the 10-in-100 example. Anywhere between the lines is normal. The middle line isn't a target.
3. **callout science:** WHO measured more than 8,000 well-fed, breastfed babies in six countries, Oman among them. Children grew remarkably alike: where they lived explained only a small part of the differences. That's why one chart works for every child, everywhere, when they have good food and care.
4. **h: Small can be healthy.** A child on a low line who follows it steadily is usually just built that way, often like a parent. Read height and weight together. Toddlers often look thinner between about 1 and 5 as their shape changes, and that's normal.
5. **h: Appetite after the first birthday.** Growth slows, so appetite drops and swings from day to day. A good day and a poor day even out over a week. Growth comes in bursts, and appetite can rise with them.
6. **table: "Usually fine" vs "Worth a check".** Fine: following own line; small but growing; eats a lot one day and little the next; was ill and lost a little, back on track within 2–3 weeks. Check: dropping steadily across the lines; line goes flat; weight falling while height continues; not back on track after an illness; not regaining birth weight by 3 weeks.
7. **h: Why pressure backfires.** Plain retelling of Galloway ("a small experiment": pressured children ate less and enjoyed it less) and Generation R (fussiness leads to more pressure, which leads to more fussiness: a circle, not anyone's fault). Link to `fussy-eating` for who decides what. Bullet list of what to try instead: regular meal and snack times, small portions with seconds, eat together, **no phones or cartoons to get food in** (honest: not trial-tested, but it stops a child noticing hunger and fullness), no drinks that fill up (juice, sweet tea, lots of milk) before meals.
8. **callout safety: appetite syrups, tonics and supplement drinks.** "Appetite syrups are medicines, with side effects such as sleepiness or moodiness, and they don't fix the reason a child eats little. Supplement drinks can replace meals. Ask your doctor before any syrup, tonic or supplement drink. Never buy one on someone else's advice."
9. **h: Short or tall.** Height runs in families. What matters is a steady rate of growth. Most short children are healthy, and growth hormone is only for specific conditions a specialist diagnoses. No pill or syrup makes a healthy child taller.
10. **h: If weight is creeping up.** Family habits, not diets. Water and milk instead of sweet drinks. Activity for fun. No weight talk (link `food-and-body-talk`). The whole family, not the one child.
11. **callout safety: red flags.** See a doctor if your child: is losing weight, or their line on the chart is falling steadily or has gone flat; has stopped growing taller, or is much shorter than other children and growing slowly; is very tired, pale or often unwell, or has ongoing diarrhoea, vomiting or tummy pain; gags or panics at food, or eats a shrinking list of foods; worries about their weight or body; or if anyone in the family is very worried. Get help the same day for a baby with few wet nappies or who is very sleepy.
12. **"What we don't know" box:** no trial has tested "the division of responsibility" on its own. Studies of pressure mostly show links, not cause and effect, and pressure is partly a *response* to a child who eats little. We don't know exactly how often appetite syrups are used in Iran, or their long-term effects. Experts disagree on exactly how much movement across the lines is a concern, so your health worker looks at the whole picture.

#### Guide 2: "Iron, vitamin drops and tea" (minMonths 0, maxMonths 144; core 6–36)

Possible slug: `iron-drops-and-tea`. About 3–4 minutes.

1. **Intro:** Iron builds blood and helps the brain grow. Low iron is common in young children, including about 1 in 5 young children in Iran in pooled studies. It's mostly preventable with food, drops and a few habits.
2. **h: Signs of low iron (for awareness, not diagnosis):** pale, tired, irritable, poor appetite, eating non-food things like soil (pica). "Only a blood test can tell. Many pale children don't have low iron, and some anaemia (such as thalassaemia trait, common in Iran) doesn't get better with iron."
3. **h: Iron-rich foods:** table of food → tip (meat, chicken or fish in آش and خورش; lentils and beans with lemon or tomato; egg; fortified bread or cereal). Vitamin C foods help.
4. **h: Tea and iron.** "Tea, including herbal teas like camomile or mint, can sharply reduce the iron the body takes from a meal, even with milk in it." Babies: no tea. Older children: if tea is part of the family's day, keep it weak, unsweetened, and between meals rather than with them. Offer water or milk with the meal.
5. **callout science:** In a lab study, a cup of black tea with a meal cut iron absorption by about 80–90%. Whether tea causes low iron in children is less clear: studies disagree, and it seems to matter most when iron is already low.
6. **h: Milk: good, but not too much.** Milk is low in iron and can fill a toddler up. Large amounts are linked to low iron. Ask your health centre how much suits your child. No cow's milk as a main drink before 1 year.
7. **h: Iran's drop programme (Persian adaptation; English version generic).** A+D drops from the first days to age 2; iron drops from about 6 months (or when solids start) to age 2; your health centre gives the drops and tells you how. **Tips:** a fixed daily time helps you remember. Iron drops at the back of the tongue, then a little water, help prevent staining. Dark poo is expected. Colds and tummy bugs aren't usually a reason to stop: ask. Don't give two products with the same vitamins.
8. **callout safety:** "Don't add extra iron, vitamin or 'blood tonic' products on your own. Too much iron can be harmful, and an overdose of iron drops is an emergency. Keep all drops up high and closed. If a child swallows several, call your poison line or emergency number straight away." Link to the first-aid poisoning card.
9. **h: Iodised salt (short):** family food uses iodised salt in small amounts; store it closed; no added salt for babies.
10. **"What we don't know" box:** Iran gives iron drops to all babies, while some countries give them only when a baby needs them. Experts are still studying whether babies who already have enough iron benefit from extra. Follow your own health centre. Rates of low vitamin D in Iranian children vary from about a third to over two thirds, depending on the cut-off a study uses.

### B) Daily tips (≤30 words each)

1. `growth-line-not-plate` (0–144): "Worried your child eats too little? Their growth line over several checks says more than any one meal. Ask the health worker to show you the chart."
2. `growth-own-line` (0–144): "A child on a low centile line who follows it steadily is usually healthy. The middle line isn't a target. Children come in many sizes."
3. `appetite-after-one` (12–36): "After the first birthday, growth slows and appetite often drops sharply. A big day and a small day usually even out over a week."
4. `pressure-backfires` (12–144): "In one study, children pressured to finish their food ate less, not more, and enjoyed it less. Offer, then let them decide how much."
5. `no-screen-spoon` (6–72): "Try not to use phones or cartoons to get food in. Eating without noticing makes it harder for a child to feel hunger and fullness."
6. `drinks-fill-up` (12–72): "Juice, sweet tea and lots of milk fill small tummies before meals. Offer water between meals, and milk with food, not instead of it."
7. `ill-weight-back` (6–144): "Children often lose a little weight when they're ill. Usually it comes back within 2 to 3 weeks of getting better. If not, see your health worker."
8. `no-appetite-syrup` (12–144): "Appetite syrups are medicines with side effects, and they don't fix why a child eats little. Ask your doctor before giving any syrup or tonic."
9. `height-runs-families` (24–144): "Height runs in families, and a steady growth rate matters more than being short. No pill or syrup makes a healthy child taller."
10. `tea-between-meals` (24–144): "Tea, even herbal tea, makes it harder to absorb iron from a meal. If your child has tea, make it weak, unsweetened and between meals."
11. `no-tea-babies` (0–24): "Babies and toddlers don't need tea. Even a little with meals can block the iron they need for growing. Water and milk are best."
12. `iron-plus-lemon` (8–144): "Lentils, beans and greens give more iron with a squeeze of lemon, tomato or orange alongside. Vitamin C helps the body absorb iron."
13. `iron-drops-routine` (6–24): "Give iron drops at the same time each day so it becomes a habit. Drop them at the back of the tongue, then offer a little water."
14. `dark-poo-iron` (6–24): "Dark or black poo is common with iron drops and is expected. See a doctor if poo is red, or your child seems unwell."
15. `no-extra-iron` (6–144): "Give only the drops your health centre advises. Extra iron or vitamin products can be harmful. A blood test, not a guess, shows if more is needed."
16. `family-habits-weight` (24–144): "If you're worried about weight, change family habits together: water as the main drink, active play, shared meals. Never single out or comment on your child's body."

Tip 14 (dark poo) — check with a clinician whether "red" is the right flag or whether "black, tarry poo when *not* taking iron" should be added. Tips 13–14 suit the Iranian programme. For English users they should read "if your child takes iron drops".

### C) Claims the app must NOT make

- Any **dose or amount** of iron, A+D, vitamin D, multivitamins, cyproheptadine or any appetite medicine. No product or brand names (e.g. Racip, Apetamin, PediaSure-type drinks).
- "Your child should be on the 50th centile", or that a higher centile is healthier.
- A numeric "crossing two lines means illness" rule. Calculating a child's predicted adult height, or presenting mid-parental height as a prediction (it explains only about a third of the variation).
- "Pressure makes children thin" or "pressure causes picky eating". The evidence is links in both directions, plus one small experiment.
- "Appetite syrups are safe" or "they work". Equally, don't say they are always dangerous. Say: medicines with side effects, doctor first.
- "Growth hormone / supplements / special foods can make a healthy child taller."
- "Tea causes anaemia in children." Say instead that tea reduces iron absorption from a meal, and studies on anaemia are mixed.
- "70% of Iranian children are vitamin D deficient" as a single fact (depends on cut-off). Any claim that sanctions have raised anaemia (speculation in one review, and political).
- "Pale = low iron", or advice to give iron for paleness without a test (thalassaemia trait).
- "Stop iron drops during colds", or "iron drops are optional". Equally, don't tell non-Iranian users that every baby needs iron drops.
- Any suggestion that Iranian families' food culture or plumpness ideals are wrong. No body-shaming words ("skinny", "fat", "chubby") in copy.
- That supplement drinks or high-energy formula are a good idea without a professional assessment.

### D) Iran / Persian adaptations

- **Growth chart vocabulary:** «منحنی رشد», «کارت مراقبت کودک» / health record, «مرکز خدمات جامع سلامت», «خانه بهداشت», «پایگاه سلامت», «مراقب سلامت» / «بهورز». The programme name «مراقبت‌های ادغام‌یافته کودک سالم». The categories on the card (e.g. «توقف رشد», «کاهش وزن») should only be named after the current booklet is checked.
- **Mention Oman** as one of the WHO study sites: "the chart includes children from our region".
- **Supplements:** A+D (or multivitamin) drops «از روزهای اول تولد تا پایان ۲ سالگی»; iron drops «از پایان ۶ ماهگی (یا شروع غذای کمکی) تا پایان ۲ سالگی». Low-birth-weight and preterm babies follow the health team's plan. Free at health centres. No amounts.
- **Tea:** respect «چای» as part of family life. Advice that matches MoH: no tea for babies; don't soften food in tea; for older children «کم‌رنگ، بدون قند، و بین وعده‌ها نه همراه غذا». Name herbal teas too: بابونه, نعناع. Mention «چای شیرین» specifically.
- **Relatives' comments** ("چقدر لاغره!"): link to `food-and-body-talk`. Grandparents often push food. A short script: «بدنش خودش می‌دونه چقدر لازم داره؛ دکترش هم از رشدش راضیه.»
- **Appetite syrups:** say «شربت اشتهاآور» generically, with no brand names. "Only with the child's doctor's prescription, after the reason for poor appetite has been checked."
- **Thalassaemia:** a brief mention that thalassaemia trait is common in Iran and can look like low iron on a blood count. The doctor decides with tests. Link to the premarital screening programme only if a source is checked.
- **Iodised salt:** «نمک یددار تصفیه‌شده»; store closed, away from light and heat, add near the end of cooking [MoH-style advice, recheck wording].
- **Iron-rich Iranian foods:** عدس‌پلو, آش (with lentils and beans), خورش‌ها with meat, egg, جگر occasionally, سبزی with lemon juice. A Persian reviewer should check.
- **School vitamin D programme:** for older children, refer to it if offered, without dose (see note 03).

### E) Gaps

1. **NICE NG75 full text** (403): its stance on appetite stimulants and on feeding observation is unverified.
2. **WHO 2023 complementary feeding guideline:** exact wording and strength for responsive feeding not seen (IRIS 403, NCBI captcha).
3. **Iran national anthropometry** (IrMIDHS 2010, ANIS 2017) provincial tables not found. Iran figures rely on meta-analyses and local studies.
4. **Iran growth-card categories and appetite counselling** in the current «کودک سالم» booklet: PDFs didn't extract (Persian fonts). Needs a human read.
5. **No Iranian study on prevalence of appetite-syrup use**, or of supplement drinks, in children. No guideline statement on stimulants found.
6. **No Iranian trial** of reducing pressure or force-feeding. The nationwide "forced eating ↔ underweight" finding is [search] only.
7. **Tea in Iranian toddlers:** prevalence unclear. The Khuzestan paper is internally inconsistent and wasn't opened.
8. **Height-boosting products** in the Iranian market: not researched.
9. **Thalassaemia carrier rates** in Iran: only one local abstract seen.
10. AAP juice and milk amounts and the AAP iron/vitamin D positions are [recall].
11. Effect of screens used to make children eat: no direct studies found.

---

## Recheck before shipping

1. **Iran supplement ages** (A+D from day 3–5 or birth to 24 months; iron from end of 6 months or solids start to 24 months) against the current MoH/behdasht.gov.ir document, together with note 06 §2.6.
2. NICE NG75 thresholds and rec 1.2.2 (mid-parental centile) on the NICE site, or via a clinician with access.
3. RCPCH parent FAQ wording ("up to one centile space is normal", "2–3 weeks after illness"). It's undated, © 2020–2026.
4. Galloway 2006 sample size (about 27 children, [recall]).
5. The Iranian cyproheptadine RCT (Javidmehr 2026): full text, setting, funding. Whether cyproheptadine is prescription-only in Iran.
6. Iwańska 2025 ONS meta-analysis: funding of the included trials.
7. The forced-eating/underweight CASPIAN finding: locate the paper.
8. Tip 14 (dark poo on iron): wording with a clinician.
9. Iodised-salt storage and timing wording against MoH material.
10. Persian food examples and the relatives' script, with a Persian reviewer.
11. Whether "about 1 in 5 young children in Iran have iron-deficiency anaemia" is the best summary: based on two meta-analyses (18.2% and 19.9%) with wide intervals and old data.
12. Mansori 2018 "southern provinces higher": confirm which provinces before any Persian copy mentions regions (or leave regions out).

---

## Sources

### Growth charts and growth
- MGRS Group. *Assessment of differences in linear growth among populations in the WHO MGRS*. Acta Paediatr Suppl 2006;450:56–65. doi:10.1111/j.1651-2227.2006.tb02376.x [abstract]
- MGRS Group. *Enrolment and baseline characteristics in the WHO MGRS*. Acta Paediatr Suppl 2006. doi:10.1111/j.1651-2227.2006.tb02371.x [abstract]
- de Onis M, et al. *Development of a WHO growth reference for school-aged children and adolescents*. Bull WHO 2007. doi:10.2471/blt.07.043497 [abstract]
- WHO. *Child growth standards* (tool page). https://www.who.int/tools/child-growth-standards [opened]
- RCPCH. *Growth charts: information for parents and carers*. https://www.rcpch.ac.uk/resources/growth-charts-information-parents-carers [opened]
- RCPCH. *FAQs for parents*. https://growth.rcpch.ac.uk/parents/faqs-parents/ [opened; undated]
- RCPCH UK-WHO chart fact sheet (2009): 50th centile de-emphasised [search]
- Royal Children's Hospital Melbourne. *Children's growth assessment: Q&A for health professionals* (2013). https://www.rch.org.au/uploadedfiles/main/content/childgrowth/healthprofessionals_faqschild_growth_monitoring.pdf [opened, pdftotext]
- Nemours KidsHealth. *Growth charts* (reviewed Aug 2019). https://kidshealth.org/en/parents/growth-charts.html [opened]
- NHS South West London ICB. *Faltering growth*. https://swlimo.southwestlondon.icb.nhs.uk/clinical-guidance/nutrition-and-blood/nutrition/speci/faltering-growth/ [opened; undated, cites NG75]
- NICE NG75. *Faltering growth: recognition and management* (2017). https://www.nice.org.uk/guidance/ng75 [search only; 403]
- Gonzalez-Viana E, et al. *Faltering growth in children: summary of NICE guidance*. BMJ 2017;358:j4219. doi:10.1136/bmj.j4219 [record only]
- AAP / HealthyChildren. *Feeding & Nutrition: Your One-Year-Old* (updated 29 Oct 2020). https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Feeding-and-Nutrition-Your-One-Year-Old.aspx [opened]
- Lampl M, et al. *Mixed distribution analysis identifies saltation and stasis growth*. Ann Hum Biol 2001. doi:10.1080/03014460010016662 [abstract]
- MedlinePlus. *Short stature* (reviewed 1 Jul 2025). https://medlineplus.gov/ency/article/003271.htm [opened]
- Zeevi D, et al. *Accurate prediction of children's target height from their mid-parental height*. Children 2024. doi:10.3390/children11080916 [abstract]

### Iran: growth, undernutrition, overweight
- Mansori K, et al. *Prevalence of stunting in Iranian children under five: SR and MA*. MJIRI 2018. doi:10.14196/mjiri.32.103 [abstract]
- Motedayen M, et al. *Prevalence and causes of malnutrition in Iran: MA*. Clin Nutr Res 2019. doi:10.7762/cnr.2019.8.2.101 [abstract]
- Rabiei S, et al. *Determinants of malnutrition in 2–5-year Iranian children (national food and nutrition surveillance)*. BMC Public Health 2024. doi:10.1186/s12889-024-20931-w [abstract]
- Jalali AK, et al. *Anthropometric indices in 2–5-year-olds, Golestan 2015*. Clin Nutr Res 2019. doi:10.7762/cnr.2019.8.2.119 [abstract]
- Djalalinia S, et al. *Socioeconomic inequality in growth disorders: CASPIAN-IV*. J Diabetes Metab Disord 2021. doi:10.1007/s40200-021-00767-6 [abstract]
- Dehghani A, et al. *Prevalence of obesity and overweight among the Iranian population: umbrella review*. BMC Public Health 2024. doi:10.1186/s12889-024-20860-8 [abstract]
- Abiri B, et al. *Prevalence of overweight and obesity among Iranian population: SR and MA*. J Health Popul Nutr 2023. doi:10.1186/s41043-023-00419-w [abstract]
- Mazaheri-Tehrani S, et al. *Trend in metabolic phenotypes of obesity: CASPIAN studies*. Ann Pediatr Endocrinol Metab 2025. doi:10.6065/apem.2550042.021 [abstract]
- Khademian M, et al. *Beverage consumption and cardiometabolic risk: CASPIAN-V*. Adv Biomed Res 2024. doi:10.4103/abr.abr_130_22 [abstract]
- Zahedan / Sistan and Baluchestan local stunting studies [search]

### Feeding practices
- Galloway AT, et al. *'Finish your soup': counterproductive effects of pressuring children to eat*. Appetite 2006. doi:10.1016/j.appet.2006.01.019 (PMC2604806) [abstract]
- Ruzicka EB, et al. *Controlling child feeding practices and child weight: SR and MA*. Obes Rev 2021. doi:10.1111/obr.13135 [abstract]
- Jansen PW, et al. *Bi-directional associations between child fussy eating and parents' pressure to eat* (Generation R). Physiol Behav 2017. doi:10.1016/j.physbeh.2017.02.015 [abstract]
- Wang J, et al. *Bidirectional associations between parental non-responsive feeding and child eating: SR and MA*. Nutrients 2022. doi:10.3390/nu14091896 [abstract]
- Wang J, et al. *Caregivers' concern about child weight and non-responsive feeding: SR and MA*. Nutrients 2022. doi:10.3390/nu14142885 [abstract]
- Wang J, et al. *Interventions changing caregivers' feeding practices with preschool children: SR and MA*. Obes Rev 2024. doi:10.1111/obr.13688 [abstract]
- Brown CL, et al. *Association of picky eating and food neophobia with weight: SR*. Child Obes 2016. doi:10.1089/chi.2015.0189 [abstract]
- Cole NC, et al. *Correlates of picky eating and food neophobia in young children: SR and MA*. Nutr Rev 2017. doi:10.1093/nutrit/nux024 [abstract]
- Ellis JM, et al. *Recollections of pressure to eat during childhood…*. Appetite 2016. doi:10.1016/j.appet.2015.11.020 [abstract]
- Askari A, et al. *Maternal feeding practices and obesity in children, Shiraz*. J Health Popul Nutr 2025. doi:10.1186/s41043-025-00956-6 [abstract]
- Minaie M, et al. *Revising the CFPQ for 2–5-year-old children* (Birjand). Int J Prev Med 2019. doi:10.4103/ijpvm.ijpvm_34_18 [abstract]
- Rasht CFPQ study; nationwide forced-eating/underweight finding [search]
- Paul IM, et al. *INSIGHT randomized clinical trial*. JAMA 2018. doi:10.1001/jama.2018.9432 [abstract]
- Adams EL, et al. *Food to soothe in the INSIGHT trial*. Int J Behav Nutr Phys Act 2019. doi:10.1186/s12966-019-0837-y [abstract]
- Ruder EH, Lohse B. *The sDOR.2-6y is a valid measure of nutrition risk*. Nutrients 2024. doi:10.3390/nu16060767 [abstract]
- ENN Field Exchange 72. *WHO guideline for complementary feeding of infants and young children 6–23 months*. https://ennonline.net/fex/72/who-guideline-for-complementary-feeding-of-infants-and-young-children [opened]
- WHO. *Guideline for complementary feeding of infants and young children 6–23 months of age* (2023). PMID 37871145; NCBI Bookshelf NBK596427 [abstract record; strength ratings via search snippet]
- Garg D, et al. *Watching television while eating increases food intake: SR and MA*. Nutrients 2025. doi:10.3390/nu17010166 [abstract]
- Gough T, et al. *Eating while distracted: SR and MA (adults)*. Am J Clin Nutr 2026. doi:10.1016/j.ajcnut.2026.101315 [abstract]
- Li X, et al. *Eating behaviours of children 6–35 months in Beijing*. J Glob Health 2026. doi:10.7189/jogh.16.04219 [abstract]

### Appetite stimulants and supplement drinks
- Javidmehr N, et al. *Low-dose versus standard-dose cyproheptadine on BMI in children: RCT*. Curr Drug Saf 2026. doi:10.2174/0115748863470780260417103722 [abstract]
- IRCT trial 17079 (cyproheptadine, underweight children 2–10). https://fa.irct.ir/trial/17079 [search]
- Harrison ME, et al. *Use of cyproheptadine to stimulate appetite and body weight gain: SR*. Appetite 2019. doi:10.1016/j.appet.2019.02.012 [abstract]
- MedlinePlus. *Cyproheptadine* (revised 15 Mar 2026). https://medlineplus.gov/druginfo/meds/a682541.html [opened]
- Neupane S, Berg E. *Hepatitis secondary to an over-the-counter appetite stimulant* (Apetamin). Cureus 2024. doi:10.7759/cureus.74289 [abstract]
- Darmankade (Persian health blog) on "Racip" syrup. https://www.darmankade.com/blog/racip-syrup/ [search; commercial]
- AMBOSS *Growth faltering*: "appetite stimulants are not routinely recommended" [search]
- Iwańska J, et al. *ONS for picky eating and underweight: SR and MA*. Clin Nutr ESPEN 2025. doi:10.1016/j.clnesp.2025.03.039 [abstract]

### Overweight, drinks, stigma
- Heyman MB, Abrams SA. *Fruit juice in infants, children, and adolescents*. Pediatrics 2017. doi:10.1542/peds.2017-0967 [abstract]
- Malik VS, et al. *Sugar-sweetened beverages and weight gain in children and adults: SR and MA*. Am J Clin Nutr 2013. doi:10.3945/ajcn.113.058362 [abstract]
- Mead E, et al. *Diet, physical activity and behavioural interventions for overweight or obese children 6–11 years*. Cochrane 2017 (CD012651) [abstract]
- Brown T, et al. *Interventions for preventing obesity in children*. Cochrane 2019 (CD001871) [abstract]
- Pont SJ, et al. *Stigma experienced by children and adolescents with obesity* (AAP policy). Pediatrics 2017. doi:10.1542/peds.2017-3034 [abstract]

### Iron, tea, milk
- Nazari M, et al. *Prevalence of IDA in Iranian children under 6: SR and MA*. J Blood Med 2019. doi:10.2147/jbm.s196102 [abstract]
- Dehghani A, et al. *IDA status in Iranian pregnant women and children: umbrella review*. BMC Pregnancy Childbirth 2024. doi:10.1186/s12884-024-06575-z [abstract]
- Akbari M, et al. *IDA in Iranian children and adolescents: SR and MA*. Hematology 2017. doi:10.1080/10245332.2016.1240933 [abstract]
- Riahi SM, et al. *Anemia in children 6–12 months after starting iron supplement, east Iran*. Arch Pediatr 2019. doi:10.1016/j.arcped.2019.08.007 [abstract]
- Karimi M, et al. *Prevalence of β-thalassemia trait and G6PD deficiency (Shiraz)*. Arch Med Res 2008. doi:10.1016/j.arcmed.2007.09.001 [abstract]
- Hurrell RF, et al. *Inhibition of non-haem iron absorption in man by polyphenolic-containing beverages*. Br J Nutr 1999. doi:10.1017/s0007114599000537 [abstract]
- Merhav H, et al. *Tea drinking and microcytic anemia in infants*. Am J Clin Nutr 1985. doi:10.1093/ajcn/41.6.1210 [abstract]
- Temme EH, Van Hoydonck PG. *Tea consumption and iron status*. Eur J Clin Nutr 2002. doi:10.1038/sj.ejcn.1601309 [abstract]
- Khuzestan tea/IDA study; MENA early-feeding review [search]
- Ziegler EE. *Consumption of cow's milk as a cause of iron deficiency in infants and toddlers*. Nutr Rev 2011. doi:10.1111/j.1753-4887.2011.00431.x [abstract]
- Dewey KG, et al. *Iron supplementation affects growth and morbidity of breast-fed infants (Sweden and Honduras RCT)*. J Nutr 2002. doi:10.1093/jn/132.11.3249 [abstract]
- Hare DJ, et al. *Neurological effects of iron supplementation in infancy*. Lancet Child Adolesc Health 2018. doi:10.1016/s2352-4642(17)30159-1 [abstract]
- Iranian iron-drop adherence studies (Ardabil, Bushehr 2023, Miandorood, Tabriz, Birjand) and 2024 Iranian SR (doi:10.1108/NFS-10-2023-0236) [search]

### Vitamins, iodine, Iran programme
- Iran MoH Community Nutrition Improvement Office. *Complementary feeding of children (for nutrition experts)* (2021) — via phase 6 note `02_feeding_and_eating.md` §4 [opened in round 2/phase 6]
- Sibling note `06_governance_and_open_checks.md` §2.6 (two university health documents on A+D and iron ages)
- Sibling note `03_everyday_complaints.md` §3.5 (CASPIAN-V vitamin D; school vitamin D programme)
- Iranian university «مکمل‌یاری» leaflets (SBMU, IUMS, GUMS, BUMS, TBZMED and others) [search; PDFs unreadable]
- NHS. *Vitamins for children* (reviewed 30 May 2024). https://www.nhs.uk/baby/weaning-and-feeding/vitamins-for-children/ [opened]
- WHO eLENA. *Vitamin D supplementation in infants* (updated 9 Aug 2023). https://www.who.int/tools/elena/interventions/vitamind-infants [opened]
- Qorbani M, et al. *Vitamin D status and cardiometabolic risk: CASPIAN-V*. BMC Nutr 2021. doi:10.1186/s40795-021-00477-5 [abstract]
- Rastad H, et al. *Vitamin D deficiency in Iranian children: CASPIAN-V*. J Diabetes Metab Disord 2021. doi:10.1007/s40200-021-00757-8 [abstract]
- Jazayeri M, et al. *Vitamin D deficiency in healthy Iranian children: SR and MA*. MJIRI 2018. doi:10.14196/mjiri.32.83 [abstract]
- Rajaeieh G, et al. *Policy analysis on vitamin A deficiency among children 15–23 months in Iran*. BMC Public Health 2021. doi:10.1186/s12889-021-11277-8 [abstract, partial]
- Sharif Y, et al. *Vitamin D, retinol and zinc deficiencies and stunting in Iranian toddlers*. Public Health 2020. doi:10.1016/j.puhe.2019.10.029 [abstract]
- Mehran L, et al. *Beyond salt iodization: sixth national monitoring survey (2022–23)*. Thyroid 2026. doi:10.1177/10507256261423184 [abstract]
- Baladastian S, et al. *Iodine deficiency and excess in children, Alborz*. BMC Nutr 2026. doi:10.1186/s40795-026-01272-w [abstract]
