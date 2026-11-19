# 04 — Siblings beyond play, and bodies and curiosity: what's typical

Research notes for PlayNest phase 9, round 6. Researched 17 Nov 2026.

These notes are paraphrased and are not ready to use as copy. The scripts and tips in "App takeaways" are drafts for an editor and a native Persian reviewer.

## Scope and house rules

**Part 1: Siblings beyond play.** This research feeds a new guide, working title *"Brothers and sisters: fewer fights, closer bonds"*. It covers:
- why sibling relationships matter over the long term;
- why sibling aggression and bullying are not harmless;
- favouritism and fairness;
- trials of parent mediation and sibling programmes;
- myths about birth order and only children;
- when to step in;
- what sharing looks like in toddlers;
- Iranian context.

It must not repeat:
- `siblings` (play across ages, `src/data/guides.ts`);
- `new-baby-in-family` (`src/data/guides-family.ts`);
- the coach cards `sibling-fight`, `sibling-jealousy` and `wont-share` (`src/data/coach.ts`).

I read all five. The new guide should link to them rather than duplicate them.

**Part 2: Bodies and curiosity: what's typical.** This covers:
- normal sexual development and behaviour by age;
- toddler self-touching, also called "gratification behaviour";
- playing doctor;
- nudity and privacy;
- calm, no-shame responses;
- red flags and where to get help;
- Iranian context and wording.

It must not repeat:
- `body-safety` and `puberty-basics` (`src/data/guides-more.ts`);
- the coach card `where-babies-come-from`.

I read all three. The existing `body-safety` guide already has a short "talk to your doctor if..." paragraph. The new guide should expand on it, not contradict it.

**House rules applied throughout:**
- Teach, don't diagnose.
- Red flags always send the parent to a professional or helpline.
- Where bodies disagree, say so and take the cautious path.
- Keep associations and trial results apart, and give effect sizes honestly.
- Never shame parents or children.
- Respect tradition and modesty norms. Give no religious rulings, and stay politically neutral.

## How to read these notes

- **[opened]**: I read the page, PDF or full text myself.
- **[abstract]**: I read the abstract only, via the Europe PMC REST API.
- **[search]**: I saw search-engine snippets or secondary summaries only. Recheck these before shipping.
- **[recall, unverified]**: background knowledge I did not re-check this session.

**Evidence scale** (same as earlier rounds):
- **Strong:** replicated RCTs or meta-analyses.
- **Moderate:** several cohorts or small RCTs.
- **Weak:** single correlational studies.
- **Contested:** good studies disagree.

**Access problems**
- **AAP Pediatrics (publications.aap.org):** HTTP 403 for Kellogg 2009. Europe PMC has the abstract only, no PMC copy. I used the open AAFP 2010 review by the same author (Kellogg, *Am Fam Physician*) instead [opened]. It reproduces the age tables and red flags.
- **NSPCC main site (nspcc.org.uk):** HTTP 403. The NSPCC Learning page on healthy sexual development opened fine (last updated 28 Jul 2026) [opened].
- **Raising Children Network:** blocked by a Cloudflare challenge, both via WebFetch and via curl with a browser user agent. Its sibling-fight advice is [search] only.
- **HealthyChildren:** the "Sibling Rivalry" URL I guessed returned 404. I used the app's existing "Sibling synergy" page instead (last updated 6 Apr 2026) [opened].
- **Brook Traffic Lights:** the page opened, but the framework itself sits behind paid training and a licence ("Training is required before being able to access the framework") [opened]. **The app cannot reproduce Brook's lists.** See C) and D).
- **Not in Europe PMC or not retrieved:**
  - Falbo & Polit 1986 (*Psychological Bulletin*), [search] only;
  - Damian & Roberts 2015 (*J Res Pers*, the large US study), [recall]. Only their PNAS commentary record turned up, with no abstract;
  - Kennedy & Kramer 2008 was not indexed, but I opened the author-hosted PDF.
- **Iranian literature:**
  - Europe PMC searches for Iranian sibling-relationship studies returned almost nothing relevant (mostly genetics and transplant papers).
  - Persian databases (SID, Magiran, ISC) were not opened directly.
  - I found no Iranian peer-reviewed study on parental comparison («مقایسه») or on older siblings' caring duties.
  - I found no Iranian normative data on children's sexual behaviour.
- **Scratchpad clash:** a parallel agent overwrote a helper script in the shared scratchpad mid-session. I switched to a uniquely named script. No data was affected.
- **Search budget:** about 13 web searches and about 9 page fetches. Most facts come from Europe PMC abstracts.

---

## PART 1 — Siblings beyond play

### 1.1 Why sibling relationships matter over the long term

- **McHale, Updegraff & Whiteman 2012** (*J Marriage Fam*, review) [abstract]. Siblings are central to family life. They influence each other's development directly, through their frequent and "emotionally intense" interactions, and indirectly, through wider family dynamics. The relationship has been "relatively neglected" by family scholars.
- **Feinberg, Solmeyer & McHale 2012**, "The third rail of family systems" (*Clin Child Fam Psychol Rev*) [abstract]. Sibling characteristics and dynamics "substantially influence developmental trajectories". The review covers internalising and externalising problems and substance use, and proposes three pathways of sibling influence.
- **Buist, Deković & Prinzie 2013**, meta-analysis (*Clin Psychol Rev*): 34 studies, 85 effect sizes, n = 12,257 [abstract].
  - More sibling warmth, less sibling conflict and less differential treatment were each associated with fewer internalising and externalising problems.
  - **Conflict showed the strongest links.**
  - Effects were stronger in brother pairs, when siblings were closer in age, and in childhood than in adolescence.
  - The abstract gives no pooled r. **Association, not cause.**
- **Gass, Jenkins & Dunn 2007** (*JCPP*, two-wave longitudinal) [abstract]. Sibling affection buffered the link between stressful life events and internalising symptoms, but not externalising ones. It did so regardless of mother–child relationship quality. Copy direction: "a warm sibling can be a source of comfort in hard times." This is an association.
- **Dunn et al. 1994** (*JCPP*): 39 sibling pairs followed from preschool for 5–7 years [abstract]. Adjustment in middle childhood and early adolescence was linked to both current and earlier sibling relationships.
- **Kramer & Kowal 2005** (*J Fam Psychol*, n = 28) [abstract]. Firstborns who got on well with friends *before* the sibling was born had better sibling relationships in adolescence. This is a small sample, but it is a nice, non-blaming message: friendship skills carry over.
- **Waldinger, Vaillant & Orav 2007** (*Am J Psychiatry*: 229 men from the Harvard study, followed to age 50 and beyond) [abstract]. Poorer sibling relationships before age 20 independently predicted major depression by age 50, even after adjusting for parent relationships.
  - Caveats: an all-male sample selected for health, and an observational design.
  - Use as background only. Don't put it in app copy, because it risks alarming parents.
- **Youngblade & Dunn 1995** (*Child Dev*) [abstract]. Social pretend play with siblings and mothers at 33 months was linked to understanding of others' feelings and beliefs at 40 months. The existing `siblings` guide already covers this ground.

**Evidence: moderate.** The associations are consistent across cohorts and a meta-analysis, but they are all correlational. App copy must say "linked with", never "causes".

### 1.2 Sibling aggression and bullying are not harmless

**Tucker, Finkelhor, Shattuck & Turner 2013a** (*Child Abuse Negl*: US NatSCEV, n = 1,705, ages 1 month to 17 years) [abstract]
- Past-year sibling victimisation was **37.6%** overall. It **peaked at 45% at ages 2–5 and 46% at ages 6–9**.
- Rates were higher in boys, in children closer in age to their sibling, and in brother–brother pairs.

**Tucker, Finkelhor, Turner & Shattuck 2013b** (*Pediatrics*: n = 3,599) [abstract]
- Psychological, property, mild physical and severe physical sibling aggression in the past year were each associated with **greater mental-health distress**, at ages 0–9 and at ages 10–17.
- Sibling and peer aggression "independently and uniquely" predicted worse mental health.
- The authors conclude that sibling aggression "should not be dismissed".
- **Cross-sectional design.**

**Bowes, Wolke, Joinson, Lereya & Lewis 2014** (*Pediatrics*: ALSPAC, more than 6,900 participants; sibling bullying reported at 12, outcomes at 18) [abstract, full results paragraph read]. Being bullied by a sibling frequently (several times a week) was linked with:

| Outcome at 18 | Odds ratio (95% CI) |
|---|---|
| Depression | **2.16** (1.33–3.51) |
| Self-harm | **2.56** (1.63–4.02) |
| Anxiety | **1.83** (1.19–2.81) |

- The odds ratios were "only slightly attenuated" after adjustment for confounders.
- The population-attributable fractions (13% of depression, 19% of self-harm) apply only "if these were causal relationships".
- **Prospective cohort, not a trial.**

**Dantchev, Zammit & Wolke 2018** (*Psychol Med*: ALSPAC, n = 6,988) [abstract]
- Sibling bullying at 12 was associated in a dose–response pattern with psychotic disorder at 18.
- Odds ratios for being involved several times a week were about 2.7–3.2. Children bullied by both siblings and peers had an OR of 4.57.
- **Internal background only. Do not put psychosis in app copy:** it is alarming, rare, and the confidence intervals are wide.

**Wolke, Tippett & Dantchev 2015** (*Lancet Psychiatry*, review) [abstract]
- "Up to 40% are exposed to sibling bullying every week."
- Parenting quality and behaviour are the family factors most strongly associated with it.
- Sibling bullying raises the risk of peer bullying. Being bullied in both places has cumulative effects, "probably because they have no safe place to escape".
- "Interventions need to start at home." Health professionals should ask about sibling bullying.

**Predictors** (Dantchev & Wolke 2019, ALSPAC; Toseeb et al. 2020, Millennium Cohort Study, n = 16,987) [abstract]
- The strongest predictors were structural: being firstborn, having older brothers, being male, and the number of siblings.
- Harsh parenting predicted bullying "to a lesser extent".
- **Copy direction:** this is useful for avoiding parent-blame. Some families are simply set up for more conflict, such as boys close in age.

**How to tell squabbling from bullying (copy direction, synthesised):**
- **Ordinary conflict** is two-sided, about something specific (a toy, a turn), and both children recover.
- **Bullying** is repeated, one-sided (one child is usually the target), meant to hurt or humiliate, and involves a power gap (age, size, or "ganging up"). The target becomes afraid or avoids the sibling.

Wolke's definition is "a repeated and harmful form of intrafamilial aggression" [abstract]. The power-imbalance criterion is my synthesis from the standard bullying definition [recall, unverified for the sibling-specific papers].

**Evidence: moderate.** Large cohorts and consistent associations, with dose–response. There are no trials showing that reducing sibling bullying improves later mental health.

### 1.3 Favouritism, fairness, and "fair isn't always equal"

- **Jensen & Thomsen 2024**, meta-analysis (*Child Dev*: 88 sources, 43 samples, n = 26,451, ages 3–19) [abstract].
  - Being less favoured than a sibling (relative PDT, i.e. parental differential treatment) was linked to more internalising and externalising behaviour.
  - Bigger overall differences in how parents treated siblings (absolute PDT) were also linked.
  - Some effects were stronger when children reported the PDT and when siblings were closer in age.
  - No pooled effect size appears in the abstract.
- **Jiang, Yang & Chen 2025**, network meta-analysis (*Clin Child Fam Psychol Rev*: 26 studies, n = 37,025) [abstract].
  - Small correlations: absolute PDT with depression **r = 0.14**, aggression **r = 0.11**, rule-breaking **r = 0.21**.
  - Being the disfavoured child: anxiety **r = 0.11**, externalising **r = 0.20**.
  - **Being less favoured carried a higher risk in more individualist cultures.** This is relevant to Iran: possibly a weaker link in more collectivist settings. Don't overclaim this either way.
- **Eradus, Leijten et al. 2024**, meta-analysis (*J Fam Psychol*: 13 samples) [abstract]. Associations were small overall and **stronger for differential hostility than for differential warmth**. Siblings who received more hostility showed more externalising problems.
  - Copy direction: the harshness gap matters most. "If one child gets most of the shouting, that's worth noticing."
- **Kowal, Krull & Kramer 2004** (*J Fam Psychol*: 74 families of adolescents) [abstract]. More differential treatment was linked to worse parent–child relationships **only when adolescents saw it as unfair**. "Differential treatment judged to be fair is not linked with negative parent-child relationships." The authors recommend that families talk about why.
  - **This is the evidence base for "fair isn't always equal" plus explaining your reasons.**
- **Jensen & McHale 2017** (*J Adolesc*: 381 families) [abstract]. Feeling favoured predicted more warmth and less conflict with parents, mainly for secondborns. Gaps between parents' and teens' views of who is favoured were linked to worse mother–firstborn relationships.
- **Jensen & Jorgensen-Wells 2025**, meta-analysis (*Psychol Bull*: 30 sources, n = 19,469) [abstract].
  - Parents reported favouring **daughters**.
  - Conscientious and agreeable children received more favoured treatment.
  - Where favouritism was about autonomy and control, older siblings were favoured.
  - Iranian press coverage summarised this as "younger children are generally treated more favourably" [search]. The abstract wording is narrower.
  - Copy direction: "Most parents find one child easier at times. Noticing it is the first step." This is a no-guilt framing.
- **AAP "Sibling synergy"** (HealthyChildren, updated 6 Apr 2026) [opened]:
  - Avoid always catering to the younger or less mature child, because "this can breed resentment".
  - Take turns focusing on each child's interests.
  - Build one-on-one time into routines.
  - The page does **not** address comparisons explicitly.

**Evidence: moderate (associations; meta-analyses with small r).** There are no trials of reducing favouritism specifically.

### 1.4 Parent mediation and sibling programmes: the trials

**Siddiqui & Ross 2004** (*J Fam Psychol*: children aged 5–8) [abstract]
- Mothers trained in mediation could use it, and both mothers and children preferred it.
- Children reasoned, discussed emotions and understood motives more often than controls.
- "Mediation empowered children, particularly younger siblings".
- Short-term results only; long-term effects unknown. The sample size isn't given in the abstract.

**Smith & Ross 2007** (*Child Dev*: 48 families, children aged 5–10, randomised) [abstract]
- Parents reported more constructive strategies and more compromise.
- Observers saw less negativity in children's *independent* negotiations.
- Children showed better perspective-taking and a better understanding of the role of interpretation in assigning blame.

**The mediation steps** (copy direction):
1. Agree ground rules.
2. Each child tells their side.
3. Each restates the other's view and feelings.
4. Children generate solutions.
5. Parent helps them agree.

This step sequence is [recall, unverified] from the Ross papers' methods, which I did not read. Recheck against the full text.

**Siblings Are Special (SIBS), Feinberg et al. 2013** (*J Adolesc Health*: RCT, 174 families; fifth graders with a sibling in grades 2–4; 12 after-school sessions plus 3 family nights) [abstract]
- Improved: positive sibling relationships, parenting strategies for siblings, child self-control, social competence and academic performance.
- Exposure was associated with lower maternal depression.
- **No effects on sibling conflict or on externalising problems.**

**SIBS with Latinx families, Updegraff et al. 2025** (*Child Dev*: pre-registered RCT, 272 dyads, 2018–2022, spanning COVID) [abstract]
- Effects on parenting: less authoritarian control and less **non-intervention in sibling conflicts**.
- **No effect on sibling relationship quality.**
- **Honest box material:** the best-designed recent trial found parenting changed but the sibling relationship did not, measurably.

**More Fun With Sisters and Brothers (MFWSB, Kramer)**
- **Kennedy & Kramer 2008** (*Family Relations*: 95 families, siblings aged 4–8; wait-list comparison, n = 55 vs 40) [opened PDF].
  - Parent-reported warmth, agonism and rivalry improved. The paper's effect sizes are 0.39, 0.48 and 0.30.
  - Observed *positive* interaction improved (0.47). **Observed negative interaction did not decline significantly.**
  - Children needed less parental direction to control negative emotions.
  - Mostly white, middle-income, two-parent families.
- **Kramer, Carroll & Devarajan 2024**, online version for parents (accepted manuscript, author-hosted) [opened PDF].
  - Four 45-minute self-paced lessons. 86 mothers vs 49 wait-list controls, internationally recruited, English-speaking.
  - Mothers reported more warmth and less agonism and rivalry, **sustained at 3 months**. Mothers' own emotion regulation and co-parenting also improved.
  - Caveats:
    - Mother report only.
    - The analysis covered mothers who completed all lessons.
    - Few fathers took part.
    - The paper labels partial eta-squared values (0.15–0.25) as "d".
  - The authors themselves caution about cultural adaptation.
  - **Relevance:** the strongest evidence that a self-guided, app-like parent programme can help. The skills it teaches are emotion regulation, perspective-taking and conflict management.
- **Ravindran et al. 2015** (*J Fam Psychol*, MFWSB) [abstract]. Mothers in the programme reported better emotion regulation during sibling conflict.

**Reviews**
- **Tucker & Finkelhor 2017**, systematic review (*Trauma Violence Abuse*) [abstract]. Only 5 programmes were found. Two of the three that measured sibling relationship quality showed improvement.
- **Leijten, Melendez-Torres & Oliver 2021**, meta-analysis (*J Fam Psychol*) [abstract].
  - 8 randomised studies: 4 behaviour management, 3 mediation, 1 combined.
  - Overall **d = 0.85 (95% CI 0.27–1.43)**: "substantial but imprecisely estimated and heterogeneous".
  - Neither approach was clearly superior.
  - The literature is "relatively immature".
  - **Use this number only with its caveat, or not at all.**
- **Incredible Years and siblings, Sellars et al. 2025** (*JCPP Adv*: pooled 3 RCTs) [abstract]. For most families, a general parenting programme had **limited effects on the non-targeted sibling**. Sibling-specific skills may need explicit teaching.

**Evidence: moderate-to-weak.** Promising small RCTs exist, but they are heterogeneous, short-term, mostly US, and often parent-reported. Say: "Small trials suggest that teaching parents to mediate, and teaching children to calm down and see the other side, can make sibling time warmer. The research is still young."

### 1.5 When to step in, and when to let them sort it

| Source | What it says |
|---|---|
| AAP Sibling synergy [opened] | Let siblings try to solve simple disagreements; they may need to separate first. Toddlers need consistent, repeated simple rules. Step in if they can't resolve it or if physical or emotional well-being is a concern, and act "as a calm, neutral party". Listen fairly before deciding. |
| Raising Children Network [search] | For verbal disagreements, "you might be able to stand back". Step in for name-calling, "general nastiness" or anything physical (Julie Green, quoted in press). Get help if fighting is constant, upsetting, or regularly physical, menacing or aggressive. Consider whether ADHD or impulsivity plays a part. |
| SIBS trial (Updegraff 2025) [abstract] | Treats parental **non-intervention** as something to *reduce*. |
| Mediation trials (Ross) [abstract] | Active but neutral parental facilitation beats both ignoring and adjudicating. |

**Synthesis:** "Let them sort it out" and "step in" are less opposed than they sound. The evidence supports:
- staying close and *coaching* (mediation) rather than either ignoring or judging;
- stepping back a little more as children get older, for minor two-sided squabbles;
- **always** stepping in for physical aggression, cruelty, one-sided targeting, or a frightened child.

The existing `sibling-fight` coach card already does this by age band. The guide should add the bullying distinction (§1.2) and the mediation steps (§1.4).

### 1.6 Sharing in toddlers: what's typical

- **Brownell et al. 2013**, "Mine or yours?" (*Child Dev*: 51 children aged 18 and 24 months) [abstract].
  - 24-month-olds "shared frequently and spontaneously" with an adult playmate.
  - 18-month-olds shared when given multiple chances and clear cues.
  - Understanding ownership was positively associated with sharing.
- **Brownell et al. 2013** (*Infancy*) [abstract]. Toddlers shared and helped more readily when parents *asked them* to label and explain emotions in picture books. It was the quality of the talk, not the quantity, that mattered.
- **Copy direction:**
  - Toddlers can share willingly when they understand "mine" and "yours". Respecting ownership helps; forced hand-overs don't build it.
  - Ask your child about feelings in picture books ("How does the bear feel? Why?").
  - Note: the study partner was an adult stranger, not a sibling. The existing `wont-share` card is consistent with this. It says "We found no direct research on making children share." The Brownell finding can be added as a gentle "why".
- **Evidence: weak-to-moderate** (small lab studies).

### 1.7 Birth-order and only-child myths

**Rohrer, Egloff & Schmukle 2015** (*PNAS*: US n = 5,240, GB n = 4,489, Germany n = 10,457; within- and between-family designs) [abstract]
- **No birth-order effects on extraversion, emotional stability, agreeableness, conscientiousness or imagination.**
- It confirmed the slight decline in measured intelligence from firstborns to later-borns, and a decline of about 0.1 SD in *self-reported* intellect.
- Conclusion: birth order "does not have a lasting effect on broad personality traits outside of the intellectual domain."

**Rohrer et al. 2017** (*Psychol Sci*, specification-curve analysis) [abstract]. No meaningful effects on narrower traits: life satisfaction, trust, risk-taking, patience, impulsivity and others.

**Damian & Roberts 2015** (*J Res Pers*: about 377,000 US high-school students) [recall, unverified]
- Birth-order–personality correlations averaged about .02, and birth order–intelligence about .04: "negligible".
- Recheck the numbers before using any.
- Damian & Spengler 2020 (preprint) [abstract] found negligible effects (.02–.12) on careers and status.

**Botzet, Rohrer & Arslan 2018**, Indonesia (preprint, n up to 11,188) [abstract]. Relatively little impact even on intelligence and education. "Even the small effects of birth order reported in other studies appear to be culturally specific." **Relevant for Iran:** don't import Western birth-order claims, even the IQ one.

**Only children**
- **Falbo & Polit 1986** (*Psychol Bull*), quantitative review [search]. Only children were broadly similar to children with siblings, and sometimes slightly ahead on achievement and intelligence; they were similar to firstborns. One snippet says only children had stronger bonds with their parents. Exact effect sizes were not seen.
- **Falbo & Hooper 2015** (China, 22 SCL-90 studies) [abstract]. "Small, but significant advantages for only children" on psychopathology scores.
- **Lin et al. 2021** (China, 3 studies) [abstract]. The "lonely only child" stereotype is widespread, especially among people with siblings, but only children reported *lower* loneliness.

**Iran:** Foroozanmehr et al. 2025 (*J Educ Health Promot*: PERSIAN birth cohort, Semnan, 611 two-year-olds) [abstract].
- Children with siblings scored slightly higher on the ASQ, but **d = 0.14**. After adjustment only gross motor remained significant.
- The paper is explicitly framed around Iran's population-ageing policy ("persuasion of families to have more children").
- **Do not cite this as evidence that siblings improve development.** It is a tiny, mostly confounded difference in a policy-motivated framing. See D) on political neutrality.

**Evidence: strong** that birth order has no meaningful personality effect (large, pre-registered-style, replicated). **Moderate** that only children are not disadvantaged.

### 1.8 Iranian context for siblings

- **No Iranian peer-reviewed studies found** on sibling conflict, sibling bullying, parental comparison or older-sibling caregiving duties (Europe PMC, plus 2 web searches) [search]. Persian-language databases were not opened.
- **Comparison («مقایسه»), favouritism («فرق گذاشتن», «تبعیض بین فرزندان»):**
  - Persian popular media (Asriran, Zoomit, Digikala Mag, Khabarfoori) discuss these widely as harmful [search].
  - One Persian snippet cites a Tehran study of 500 parents reporting that gender inequality between daughters and sons in the family has decreased [search; not verified, no citation seen].
- **Older-sibling expectations:** common Persian phrases such as «تو بزرگ‌تری، کوتاه بیا» ("you're older, give in") and the trope of «بچه‌ی مردم» / «پسر همسایه» ("other people's child" as the yardstick) [recall, unverified; native reviewer to confirm].
  - These map directly onto the AAP's warning against always siding with the younger child, and onto the comparison problem.
- **Cousins:** extended-family gatherings are frequent, so "sibling" guidance often applies to cousins too. The `sibling-fight` card already lists "cousins fighting" as a keyword. That is good, and worth keeping in the Persian keywords.

---

## PART 2 — Bodies and curiosity: what's typical

### 2.1 What's typical by age

**AAP / Kellogg**
- **Clinical report, Kellogg 2009** (*Pediatrics*, AAP Committee on Child Abuse and Neglect) [abstract]:
  - "Most children will engage in sexual behaviors at some time during childhood."
  - "Most situations that involve sexual behaviors in young children do not require child protective services intervention."
  - If behaviour is "intrusive, hurtful, and/or age-inappropriate, a more comprehensive assessment is warranted."
  - Status: I could not check whether it has been reaffirmed, retired or replaced (403). **Recheck.**
- **Kellogg 2010** (*Am Fam Physician*) [opened]:
  - Sexual behaviours occur in **42–73% of children by age 13**.
  - Common behaviours at **2–5**: touching their own genitals at home, touching breasts, standing too close to others, trying to look at nude people.
  - Behaviours become "less common, less frequent, or more covert after five years of age".
  - Prevalence ranges by age band come from Friedrich's data: for example, 2–5-year-old boys 25–60% for the "more common" behaviours, girls 25–44%.

**Friedrich et al. 1998** (*Pediatrics*: 1,114 children aged 2–12, screened for no known abuse, rated by mothers on the CSBI) [abstract]
- "A broad range of sexual behaviors are exhibited by children who there is no reason to believe have been sexually abused."
- Sexual behaviour was associated with age, maternal education, family sexuality, family stress, family violence and hours in day care.
- **Friedrich 1991** (n = 880) [abstract]: "aggressive sexual behaviors and behaviors imitative of adults" were rare. Older children were "less sexual" than younger ones. Behaviour correlated with general behaviour problems and with family nudity.
- **Caveat:** US, mostly white, 1990s, mother-reported. **No Iranian normative data were found.** Visible behaviour is likely lower where modesty norms are stronger, but I found no data on this.

**NCTSN 2009 fact sheet**, "Sexual Development and Behavior in Children" [opened, full PDF]

*Under 4:*
- touching private parts in public and private;
- rubbing private parts with a hand or against objects;
- showing private parts;
- trying to touch mothers' or other women's breasts;
- wanting to be naked;
- trying to see people undressing or in the bathroom;
- questions about bodies;
- toilet talk.

*About 4–6:*
- purposeful self-touching, "occasionally in the presence of others";
- trying to see people naked;
- copying dating behaviour (kissing, holding hands);
- "naughty" words;
- exploring with same-age children ("playing doctor").

*About 7–12:*
- self-touching, "usually in private";
- games with sexual elements ("truth or dare", "playing family");
- looking at pictures of nude people;
- seeking sexual media;
- **wanting more privacy**;
- the beginnings of attraction to peers.

**NSPCC Learning**, "Healthy sexual development of children and young people" (updated 28 Jul 2026) [opened]

*Typical under 5:*
- comfort with nudity;
- touching their own private parts;
- curiosity about others' bodies;
- talking about bodily functions;
- consensual role play such as "playing doctor".

"Young children can have erections from birth" (useful for reassuring parents of baby boys).

*Typical 5–9:*
- becoming more modest and wanting privacy;
- questions about sex and relationships;
- copying adult relationships ("boyfriend/girlfriend");
- testing boundaries with "naughty" words.

*Uncommon 5–9:* adult-like sexual interactions, discussing specific sexual acts, self-stimulating in public.

*Typical 9–13:*
- romantic interest;
- sexual jokes with friends;
- more privacy;
- seeking sexual information in books, online or in the media;
- masturbating in private.

*Uncommon 9–13:* sexual behaviour in public; regular adult-like sexual behaviour.

The NSPCC asks adults to think about **developmental** age, not just age in years [search + opened].

**AAP HealthyChildren**, "Sexual behaviors in young children: what's normal, what's not?" (updated 17 Apr 2023; already in the app as `aapBehaviours`) [opened]
- Normal at 2–6: touching or rubbing genitals; looking at or touching a peer's or sibling's genitals; showing genitals to peers; standing too close; trying to see others naked.
- These are "not sexually motivated", and are driven by curiosity and self-soothing.
- "Self-stimulation does not mean a child was sexually abused."

### 2.2 Toddler self-touching ("gratification behaviour")

This matters because it is **sometimes mistaken for seizures, abdominal pain or a movement disorder**, which can lead to unnecessary tests and anti-epileptic drugs.

**Nechay et al. 2004** (*Arch Dis Child*: Glasgow neurology clinic, 1972–2002, 31 children) [abstract]
- **21 of 31 were referred as possible epilepsy**, and 2 had previously been diagnosed with definite epilepsy.
- Median onset was 10.5 months (range 3 months to 5 years 5 months).
- Median frequency 7 times a week; median length 2.5 minutes.
- **11 occurred in a car seat.**
- Features: dystonic posturing (19), grunting (10), rocking (9), "eidetic imagery" (7), sweating (6).
- "Home video recording of events often prevents unnecessary investigations and treatments."

**Yang et al. 2005** (*Pediatrics*: 12 cases from a movement-disorders clinic) [abstract]. Common features:
- onset between 3 months and 3 years;
- stereotyped episodes;
- quiet grunting;
- facial flushing and sweating;
- pressure on the perineum with characteristic leg posturing;
- **no loss of consciousness**;
- **stops with distraction**;
- normal examination and tests.

**Güleç et al. 2024** (*Neuropediatrics*, Turkey: 90 children aged 8 months to 9 years) [abstract]
- Mean onset 21 months.
- **27.7% were already taking antiepileptic drugs on arrival.** Only 8 of 90 had abnormal EEGs.
- Onset coincided with separation from the mother (43%), stopping breastfeeding (24%), a new sibling (17%), toilet training (8%) or divorce (7%).
- **Behavioural therapy was enough in 71%.** The rest were given drugs (hydroxyzine or risperidone).
- This is a clinic sample. The temporal links are associations, not causes.

**Murat et al. 2022** (Turkey: 80 cases vs 44 controls) [abstract]
- More common in the gratification group: sleeping in the same room as parents, night waking, maternal psychiatric symptoms, and *not playing with the child every day*.
- The authors suggest daily play "may protect".
- **Small case–control association.** Do not tell parents that co-sleeping causes it.

**Iranian review: Nemati et al. 2022** (*Iran J Child Neurol*, Shiraz; systematic review of treatments) [abstract]
- Only 5 studies were included, and "none of the studies provided a good level of evidence".
- The authors list behavioural therapy, escitalopram and aripiprazole.
- **The app must never mention medication** (see C). The honest message is: "it usually fades with time and calm handling; a doctor can help if it doesn't."
- No Iranian *case series* was found. Nemati is the Iranian anchor.

**Misdiagnosis also runs the other way.**
- Saad et al. 2026 (*J Child Neurol*, Tunisia) [abstract] describe a girl whose focal epilepsy (genital automatisms) was misread for years as gratification disorder. Clues: stereotyped episodes, discharge, interictal EEG discharges.
- **Copy implication:** the app should *not* tell parents "it's definitely not a seizure". Say instead: if you're unsure, film an episode and show your doctor.

**Copy direction:**
- Rhythmic rocking, pressing or squeezing the thighs together, often with a flushed face, grunting or a far-away look, is a recognised, harmless self-soothing behaviour in babies and toddlers. It sometimes looks like a seizure or tummy pain.
- Signs that point to self-soothing: your child stops when distracted and is aware of you.
- Film an episode on your phone and show your doctor. This often avoids unnecessary tests.

**Evidence: moderate** for the clinical description (consistent case series). **Weak** for treatments.

### 2.3 Playing doctor, and what to do in the moment

**NCTSN** [opened]. "Typical" childhood sexual play:
- happens between children who play together regularly and know each other well;
- is between children of the same general age and physical size;
- is spontaneous and unplanned;
- is infrequent;
- is voluntary, with no child upset;
- "is easily diverted when parents tell children to stop and explain privacy rules".

**NCTSN worked example** (a five-year-old and friends found undressed and touching) [opened]:
1. **Stay calm.** Take a breath, count to ten, or step away for a couple of minutes.
2. Calmly tell the children it's time to get dressed, and send each to a different room.
3. Consult your partner if you're unsettled.
4. Then talk to each child **one-on-one** with open questions:
   - "What were you doing?"
   - "How did you get the idea?"
   - "How did you learn about this?"
   - "How did you feel about doing it?"
5. If the children are the same age, long-time playmates and not distressed, it is a teaching moment: "It's okay to be curious about other people's bodies, but private parts should be kept private, even with friends."

"Just because a behavior is typical doesn't mean the behavior should be ignored."

**Kellogg 2010** [opened]:
- Reassurance, education and redirection. **Do not punish or admonish normative behaviour.**
- In public, use gentle distraction.
- Avoid overreacting, because "parental distress can reinforce the behavior". Parents' own discomfort may need support.

**AAP script** [opened]: "It's OK for you to touch your own body but you should do that in a private place."

**Iranian context:** **Ganji et al. 2018/2019** (*J Nurs Midwifery Sci*: qualitative, 39 parents in Ghaemshahr, Mazandaran; 7 focus-group sessions) [opened full text].
- The majority of parents had seen sexual behaviours in their children and did not know how to respond.
- One mother of a 4-year-old boy who pulled his pants down in front of people and with friends said: "I really do not know what to do with this behavior, although I know this is normal."
- Another: "I do not know exactly whether this behavior at this age is normal or abnormal. We need to know exactly about it."
- Parents named shame and embarrassment as barriers. They wanted authorised, age-banded resources ("books, graphics, animations… for 3–5, 5–7"), professional input, and government-backed programmes.
- **This is direct evidence of unmet demand in Iran for exactly this guide**, and of the value of sitting under official authority (MoH, Behzisti).

### 2.4 Nudity and privacy by age

- **No official age cut-off exists.** One source notes the AAP has no official guidance on when parents should stop being naked in front of children or bathing with them [search, secondary]. I found no NHS or RCN rule either.
- **Child-led cues:**
  - NCTSN: children aged 7–12 become "more modest and want more privacy, particularly around adults" [opened].
  - NSPCC: 5–9-year-olds become "more modest and wanting privacy" [opened].
  - Secondary sources suggest many children start wanting privacy around 4–6 [search].
- **AAP** [opened]:
  - "Modesty isn't a concept most young children can fully grasp."
  - Parents can model boundaries, for example by having younger children respect an older sibling's request for privacy.
  - Private parts are "usually those covered by a swimsuit".
  - No forced hugs or kisses, including with relatives (already in `body-safety`).
- **Kellogg 2010** [opened] and **Friedrich 1991** [abstract]: family nudity and limited privacy (in dressing, bathing, or adult sexual activity) are associated with more open sexual behaviour in children. This is an **association**. Its relevance is mainly that children copy what they see.
- **Media:**
  - AAP: "Children may see adult sexual behaviors in person or on screens and may not tell you" [opened].
  - Kellogg: limit access to sexual material [opened].
  - Iranian parents in Ganji et al. worried specifically about media and online content [opened].
- **Supervision:** under-6s should be supervised in the bath, including when bathing with siblings [search, secondary]. Drowning safety is already in the app.
- **Copy direction:**
  - Follow your child's cues, and your family's customs.
  - Knock, let them dress alone when they ask, and teach them to knock too.
  - Many families have their own traditions about when brothers and sisters stop bathing or sleeping together. The app should describe this neutrally and **not** give an age or a religious ruling.

### 2.5 When it's a reason for concern, and where to get help

Synthesis of AAP HealthyChildren [opened], Kellogg 2010 [opened], NCTSN [opened], NSPCC Learning [opened] and Brook (definitions only) [opened]:

| Concern signal | Source wording |
|---|---|
| **Coercion, force, threats, aggression** | "Involves coercion or force" (AAP); "threats, force, or aggression" (NCTSN); "one child coercing another" (Kellogg) |
| **Big age, size or ability gap** | "children four or more years apart in age" (Kellogg); "widely different ages or abilities (such as a 12-year-old 'playing doctor' with a four-year-old)" (NCTSN); "similar age and development" is typical (NSPCC) |
| **Distress, pain, injury** | "causes emotional or physical pain or injury" (AAP); "distress, anxiety, or pain" (Kellogg); "strong emotional reactions… anger or anxiety" (NCTSN) |
| **Persistent, can't be redirected, preoccupying** | "occurs to the exclusion of other activities and cannot be redirected" (AAP); "recurs after adult intervention" and "persistent behavior with anger if distracted" (Kellogg); "compulsive or frequent" (NSPCC [search]) |
| **Adult-like acts or knowledge** | "simulates penetrative and/or adult sexual acts" (AAP); "explicit imitation of intercourse", "oral-genital contact", "asking an adult to perform a specific sexual act" (Kellogg); "a three-year-old attempting to kiss an adult's genitals" (NCTSN) |
| **Secrecy** | the older child may "take charge" and tell the younger to "keep the secret" (Kellogg); Brook's red light includes "secretive" (Brook) |
| **Change after a change in carers or circumstances** | Not explicitly in the sources I opened. It is implied by "sudden change in behaviour that lasts" (already in `body-safety`). The Güleç and Kellogg contexts link behaviour to family stress, violence and separations. **[synthesis; recheck before stating as guidance]** |

**On the link with abuse** (Kellogg 2010) [opened]:
- "Most children who have been sexually abused do not develop sexual behavior problems."
- One meta-analysis found that 28% of sexually abused children did.
- In a study of 201 children with sexual behaviour problems, 48% had been abused.
- AAP: these behaviours may also signal a neuropsychiatric condition, physical abuse, or **exposure to sexual content** [opened].
- **Copy implication:** a concerning behaviour is a reason to get help, *not* proof of abuse. Don't say either "it means abuse" or "it can't be abuse".

**Where to get help**
- The child's doctor or paediatrician (all sources).
- Mental-health referral where abuse is not suspected but the behaviour needs management (Kellogg) [opened].
- Child-protection services if abuse is suspected (Kellogg) [opened].
- **Iran:** 123 (social emergency, Behzisti) and 1480 (counselling line), both already in the app. Police 110 and emergency 115 for immediate danger [recall; consistent with the app].

---

## Where bodies disagree

1. **Stepping in on sibling fights.**
   - Raising Children [search] and AAP [opened]: let them try for minor squabbles.
   - SIBS (Updegraff 2025) [abstract]: trains parents *away* from non-intervention.
   - Mediation trials: active neutral facilitation.
   - **Cautious path:** stay close and coach. Step back only for minor, two-sided, verbal disagreements in older children. Always step in for physical aggression, cruelty, one-sided targeting or fear.
2. **What counts as a "big age gap" in sexual play.**
   - Kellogg: 4 or more years.
   - NCTSN: "widely different ages or abilities".
   - NSPCC: "similar age and development".
   - The app's `body-safety` guide: "much older or younger".
   - **Cautious path:** "more than about 3 years apart, or clearly bigger, stronger or more developed", plus any ability difference. This sits slightly stricter than Kellogg's 4. Flag that it is our synthesis.
3. **Nudity and privacy ages.** No official cut-off from the AAP, NHS or NSPCC. Cultural norms vary hugely. **Path:** follow the child's cues and the family's customs, and give no age.
4. **Content of sex education by age.**
   - NCTSN's school-age table includes contraception and STI risks [opened]. That would not suit many Iranian families, nor the app's existing stance ("What you say about relationships is up to your family").
   - **Path:** keep to bodies, privacy, safety and honest basics. Leave relationships and sex to family values, as `puberty-basics` and `where-babies-come-from` already do.
5. **Naming body parts.**
   - AAP, NCTSN and NSPCC recommend correct anatomical names [opened].
   - Iranian parents report shame and embarrassment [opened], and everyday Persian lacks neutral, non-crude words for some parts [recall].
   - **Path:** see D). Use one consistent, non-shaming word the family is comfortable with, with the correct term available. Never euphemisms that imply dirtiness.
6. **Gratification behaviour: "disorder" or normal behaviour?**
   - The literature labels it "gratification disorder" (Nechay; Nemati), yet describes it as normal and benign.
   - Treatment reviews list drugs (Nemati; Güleç).
   - **Path:** call it "self-soothing" or "a common habit", not a disorder. Never mention drugs.
7. **Birth order and intelligence.**
   - A small decline is confirmed in Western samples (Rohrer 2015).
   - Not found in Indonesia (Botzet 2018).
   - **Path:** say birth order doesn't shape personality. Skip the IQ claim.
8. **Harm from favouritism across cultures.**
   - Jiang 2025: stronger links in individualist cultures.
   - Most data are US or European.
   - **Path:** state the general association, don't speculate about Iran, and lead with "fair isn't always equal, so explain why".

---

## App takeaways

### A) Recommended outlines

#### Guide 1: "Brothers and sisters: fewer fights, closer bonds"

`minMonths: 24, maxMonths: 144`, topic `family`. About 4 minutes. Link to `siblings`, `new-baby-in-family`, and the coach cards `sibling-fight`, `sibling-jealousy` and `wont-share`.

**Sections**
1. **Intro paragraph.**
   - Siblings are often a child's longest relationship.
   - Squabbles are normal and very common: about 4 in 10 children in a US survey were hurt or picked on by a sibling in a year, most often at ages 2–9.
   - Warmth between siblings is linked to fewer worries and behaviour problems.
   - "You can't make them best friends, but you can make the good times more likely."
2. **Science callout.**
   - "A review of 34 studies found warmer, less conflict-filled sibling relationships went with fewer emotional and behaviour problems. Conflict mattered most."
   - "These studies show links, not proof of cause."
3. **Table: "Squabble or bullying?"**
   - Columns: *Usually ordinary squabbling* / *Worth acting on*.
   - Rows: who starts it (either / mostly one); what it's about (a toy, a turn / putting the other down); power (evenly matched / older, bigger, or ganging up); afterwards (both bounce back / one is scared, avoids the other, or changes).
4. **Steps: "Coach, don't referee"** (mediation, from the Ross trials).
   - Calm down first (separate if needed).
   - Each tells their side without interruption.
   - Each says back what the other wants and feels.
   - They suggest fixes; you help them pick one.
   - Notice when it works.
   - Scripts:
     - "One at a time. I'll listen to you both."
     - "So you wanted to finish your turn, and she felt left out. Is that right?"
     - "What could work for both of you?"
5. **Table: "When to step in"** by age band, consistent with `sibling-fight`.
   - Under 5: step in early and repeat simple rules.
   - 5–8: wait a moment for words-only squabbles, then help.
   - 9–12: let them try first for small, two-sided arguments.
   - **All ages:** step in at once for hitting, cruelty, threats, or one child being scared.
6. **Fair isn't always equal.**
   - Children accept differences they understand (Kowal 2004).
   - Script: "You both get what you need. Right now your brother needs help with reading, and you need a later bedtime because you're older. Next year it'll be your turn."
   - Script: "I love you both, all the way. You're different, so I do some things differently."
7. **No comparisons.**
   - List of swaps:
     - "Why can't you be tidy like your sister?" → "Your shoes are in the hall. Where do they go?"
     - "Your brother never did that" → describe the behaviour only.
   - Praise each child for their own effort, not against each other.
   - Persian version: see D.
8. **Older-sibling jobs.**
   - Helping now and then builds pride. Being the default helper every day, or always being told to give in because "you're older", can breed resentment (AAP: don't always cater to the younger).
   - Thank them, and give them their own time and privileges.
9. **Short "Myths" box.**
   - "Birth order shapes personality": large studies of more than 20,000 people found no lasting effect on personality.
   - "Only children are lonely or spoiled": reviews find only children generally do as well as children with siblings.
   - Keep the only-child line neutral (D).
10. **Safety callout.**
    - Repeated sibling bullying is linked with later depression and self-harm in a large UK study, so treat it as seriously as bullying at school.
    - Talk to your doctor or a counsellor if one child is often hurt, frightened or targeted, or if fighting is constant.
    - If a child is in danger, separate them and get help now.
    - In Iran: 123 / 1480.
11. **Honest box.**
    - "Only a handful of trials have tested ways to improve sibling relationships, mostly small and in the US. Teaching parents to mediate, and teaching children to calm down and see the other side, made sibling time warmer in several of them."
    - "But the largest recent trial changed how parents handled fights without measurably changing the sibling relationship. We've included what's most promising, not a guarantee."
12. **Tip callout** linking to `siblings`: games where they're on the same side.

**Sources:**
- AAP Sibling synergy (existing ref `aapSynergy`);
- Tucker 2013 (*Pediatrics*) and Tucker 2013 (*CAN*);
- Bowes 2014;
- Buist 2013;
- Kowal 2004;
- Jensen & Thomsen 2024;
- Smith & Ross 2007 and Siddiqui & Ross 2004;
- Kennedy & Kramer 2008;
- Leijten 2021;
- Updegraff 2025;
- Rohrer 2015;
- Falbo & Polit 1986 (recheck);
- Brownell 2013 (for a sharing aside).

#### Guide 2: "Bodies and curiosity: what's typical"

`minMonths: 0, maxMonths: 144`, topic `school` or `health`, consistent with `body-safety`. About 4 minutes. Modest tone. **No pictures of bodies.** Link to `body-safety`, `puberty-basics` and `where-babies-come-from`.

**Sections**
1. **Intro.**
   - Curiosity about bodies starts early and is a normal part of growing up, like curiosity about everything else.
   - Children don't mean it the way adults would.
   - How you respond teaches them that bodies are private and respected, and that they can always come to you.
2. **Table: "What's common at each age"** (from AAP, NCTSN and NSPCC; our own wording).
   - **0–2:** touching their genitals during nappy changes or bath; baby boys can have erections (this is normal); rocking or pressing to self-soothe.
   - **2–5:** touching their private parts, sometimes in public; wanting to be naked; curiosity about others' bodies and the toilet; "playing doctor" with a same-age playmate; lots of questions.
   - **5–8:** becoming shy and wanting privacy; "rude" words and toilet jokes; pretend weddings or "boyfriend/girlfriend"; questions about babies; self-touching more private.
   - **9–12:** much more privacy; curiosity about puberty and where babies come from; jokes with friends; may look for information online. See `puberty-basics`.
3. **Science callout.**
   - "In large US surveys of children with no known abuse, most children showed some of these behaviours before 13. They became less frequent or more private after about 5."
   - "Those studies are from the US, and families elsewhere may see less, especially where modesty is strongly taught."
4. **Steps: "If you find them playing doctor"** (NCTSN, adapted).
   - Breathe. Calmly ask them to get dressed. Separate them for a few minutes.
   - Talk to each child alone, gently:
     - "What were you playing?"
     - "Whose idea was it?"
     - "How did you feel?"
   - Teach the rule:
     - "Being curious is OK. Private parts stay private, even with friends."
     - "We keep our clothes on when we play."
   - Tell the other child's parent calmly, if appropriate.
   - Supervise mixed-age play more closely for a while: open doors, adults nearby.
5. **"Touching their own body"** with scripts:
   - toddler: redirect hands, offer a toy;
   - preschool: "That's something we do in private, like in your bedroom";
   - school age: privacy and a calm tone.
   - **Avoid:** "dirty", "shame on you" («زشته», «بی‌ادب»), or threats.
6. **Callout: "Rocking or pressing in babies and toddlers"** (gratification behaviour).
   - Describe it, and the reassuring signs (stops when distracted, aware of you, a normal child between episodes).
   - It sometimes gets mistaken for seizures or tummy pain.
   - "If you're unsure, film it on your phone and show your doctor." This often avoids unnecessary tests.
   - No drug talk.
7. **"Privacy grows with age."**
   - Knock and expect knocking.
   - Let them dress and wash alone when they ask, with bath supervision for young children.
   - Families have different customs about bathing and sleeping together; follow yours and your child's cues.
   - Respect a sibling's request for privacy.
   - Screens: keep devices in shared spaces, use parental controls, and know that children may see things and not tell you.
8. **Table: "Usually OK" vs "Talk to a professional"** (red flags).
   - *Usually OK:* same age and size, playmates, playful, stops when told, nobody upset.
   - *Talk to a professional:*
     - force, threats or pressure;
     - more than about 3 years apart, or a big size or ability difference;
     - pain, injury, or a child who is distressed;
     - can't be redirected, or takes over other play;
     - copies adult sexual acts or shows adult-like sexual knowledge;
     - asks to keep it secret;
     - a sudden new behaviour after a change in carers or circumstances.
9. **Safety callout.**
   - "A worrying behaviour doesn't prove a child has been harmed. It can follow seeing adult content, stress, or other conditions. But it always deserves a conversation with your doctor or a child counsellor."
   - "If your child tells you someone touched them, follow Body safety by age."
   - Iran: 1480 counselling, 123 social emergency; 110 / 115 in danger.
10. **Honest box.**
    - "Most of what we know about typical behaviour comes from US surveys of mothers in the 1990s. We found no Iranian data."
    - "Experts also differ slightly on details, such as how big an age gap is too big. Where they differ, we've taken the more careful line."
11. **Tip.**
    - "Your words matter more than having perfect answers."
    - "If you feel embarrassed, it's fine to say: 'Good question. Let me think and tell you after dinner.'"
    - "Ask your doctor or health centre if you'd like help."

**Sources:**
- AAP HealthyChildren (existing `aapBehaviours` / `aapSexualBehaviours`);
- Kellogg 2009 (*Pediatrics*) and Kellogg 2010 (*AFP*);
- NCTSN 2009;
- NSPCC Learning 2026;
- Friedrich 1998;
- Nechay 2004 and Yang 2005;
- Ganji 2018 (Iran).

**Do not cite Brook's lists** (licensed). Citing the definitions page is OK.

### B) Daily tips (each 30 words or fewer)

Word counts are checked by script; see the end of this section.

| # | Ages (months) | Tip |
|---|---|---|
| 1 | 24–144 | When siblings fight, describe what you see, not who's to blame: "Two children, one tablet, lots of shouting." It keeps you neutral and calmer. |
| 2 | 48–144 | Coach a sibling quarrel: each tells their side, each says back what the other wants, then they suggest a fix. You guide; they decide. |
| 3 | 24–144 | Swap "Why can't you be like your sister?" for words about this child only. Comparing siblings tends to feed rivalry. |
| 4 | 48–144 | Fair isn't always the same. Say why out loud: "Your brother stays up later because he's older. You'll get that too." |
| 5 | 60–144 | Teasing that's one-sided, repeated, or leaves a child scared isn't "just siblings". Step in, and treat it as seriously as bullying at school. |
| 6 | 36–144 | Catch your children getting along: "You two built that together!" Children tend to repeat what gets noticed. |
| 7 | 72–144 | Older children can help with younger ones sometimes, not always. Thank them, and don't always ask the older one to give in. |
| 8 | 18–36 | Toddlers share more easily when they know what's "mine" and "yours". Respect their things, and use turns instead of forced hand-overs. |
| 9 | 0–36 | Babies and toddlers often touch their private parts during changes or baths. It's normal curiosity. Stay relaxed and carry on. |
| 10 | 24–72 | If your child touches their private parts in public, calmly redirect: "That's for private time." No telling off. Shame doesn't teach privacy. |
| 11 | 24–96 | Found children "playing doctor"? Breathe. Ask them to dress, then talk to each alone: what happened, whose idea, how did it feel? |
| 12 | 24–144 | Pick one clear, respectful word for private parts and use it every time, so your child has words to tell you anything. |
| 13 | 36–96 | Teach: "Private parts are the parts your underwear covers. Nobody looks or touches, except to keep you clean or healthy, with Mum or Dad there." |
| 14 | 48–144 | Many children start wanting privacy around 5 to 7. Knock before you enter, let them dress alone, and teach them to knock too. |
| 15 | 12–48 | Rocking or pressing with a flushed face can be a toddler's self-soothing habit. It stops when distracted. Unsure? Film it and show your doctor. |
| 16 | 24–144 | See your doctor if sexual play involves force, a big age gap, pain or distress, or keeps happening after calm redirection. |

**Word-count check:** all 16 tips are at most 30 words, verified with a node script (see "Recheck before shipping").

**Notes on the tips:**
- Tip 13: "with Mum or Dad there" may need changing to "a parent or carer" for non-parent carers. The Persian version may say «مامان یا بابا».
- Tip 9: "during changes or baths" assumes nappies. The Persian version: «موقع عوض کردن پوشک یا حمام».
- Tip 16 overlaps with `body-safety`. It is useful as a tip, but keep wording consistent with that guide.

### C) Claims the app must NOT make

1. "Sibling fighting is harmless" or "just a normal part of growing up". Ordinary squabbles are common; bullying is not harmless (Bowes, Tucker).
2. "Being bullied by a sibling causes depression, self-harm or psychosis." These are associations from cohorts. **Never mention psychosis.**
3. "This programme / these steps will stop sibling fights." Trials are small, short-term and mixed. SIBS 2025 did not improve relationship quality.
4. Any precise effect size for sibling programmes (for example "d = 0.85") without its wide-uncertainty caveat. Better to omit.
5. "Firstborns are leaders, middle children are peacemakers, youngest are spoiled", or any birth-order personality claim. Also avoid "firstborns are smarter".
6. "Only children are lonely, selfish or spoiled", **and also** "only children do better". Stay neutral either way.
7. "Having siblings helps children develop better" (do not cite Foroozanmehr 2025 this way), or any line that could read as encouraging families to have more, or fewer, children.
8. "Treat all your children exactly the same." Instead: fair and explained.
9. "Children's sexual behaviour means they've been abused", **or** "it can't be abuse". Concerning behaviour means: get it checked.
10. "Self-touching is a disorder", or anything about medication for it (escitalopram, aripiprazole, risperidone and hydroxyzine all appear in the literature). No "treatment" advice beyond calm redirection and seeing a doctor.
11. "It's definitely not a seizure." Rare epilepsies can mimic gratification behaviour (Saad 2026). Always say "film it and show your doctor if unsure".
12. Any **age cut-off** for family nudity, bathing together or sharing beds, and any religious ruling on these (for example «تفریق در مضاجع»).
13. Reproducing the **Brook Traffic Lights** lists or calling our table "the Traffic Light tool". It is licensed. Use our own wording and cite AAP, NCTSN and NSPCC.
14. "Co-sleeping or not playing with your child causes self-touching" (small case–control association only).
15. Percentages for specific sexual behaviours ("60% of boys...") in parent-facing copy. They are 1990s US mother reports and easily misread. One broad line, "most children show some of these before 13", is enough.
16. Telling Iranian families what to teach about sex, contraception or relationships. Keep to bodies, privacy, safety and family values.

### D) Iran and Persian adaptations, and wording sensitivities

**Iranian evidence to cite in Persian copy**
- **Ganji et al. 2018** [opened] shows Iranian parents themselves asked for clear, authorised, age-banded guidance on "is this normal?". Citing it signals that the guide responds to Iranian parents' own requests.
- **Sarikhani, Salehi & Safarnavadeh 2023** (*J Holist Nurs Midwifery*: Karaj, 20 mothers and 10 kindergarten teachers) [opened abstract].
  - Mothers had no clear definition of sex education.
  - Most felt it should begin in the family.
  - Mothers stressed honesty ("You must not lie to children").
  - Some used analogies.
  - The authors suggest it begins after age 3, given by "the closest person in one's family".
- Also usable:
  - **Jeihooni et al. 2022** (Fasa, quasi-experimental, 200 mothers of 5–6-year-olds; mothers' skills in "sexual care of children" improved) [abstract].
  - A Persian-version Good/Bad Touch questionnaire validated in Ardabil (Heroabad et al. 2025) [abstract].

**Framing**
- Use **«مراقبت از بدن»**, **«حریم بدن»** (body privacy and sanctity), **«حریم خصوصی»** and **«کنجکاوی کودک درباره‌ی بدن»**.
- Avoid **«آموزش جنسی»** in titles. **«تربیت جنسی»** is the common academic and religious-educational term in Iran and is widely accepted [search: used in Persian research titles]. It can appear in the body text.
- «حریم» is culturally resonant and fits modesty values while carrying the safety message [recall; native reviewer to confirm].

**Political neutrality**
- Iran suspended, then cancelled, implementation of the UNESCO Education 2030 framework (2017; later formally revoked), partly over sexuality-education and gender content [search; sources have differing political orientations].
- **Do not cite UNESCO's sexuality-education guidance, and do not use "comprehensive sexuality education" branding, in Persian copy.** Cite paediatric and child-protection bodies (AAP, NSPCC, NCTSN) and Iranian studies.
- Say nothing about the policy dispute itself.
- Likewise, keep sibling and only-child content clear of Iran's population policy debate (Foroozanmehr 2025 framing).

**Words for body parts** [recall, unverified; needs native Iranian reviewer plus an Iranian paediatrician or child psychologist]
- Everyday options:
  - «اندام‌های خصوصی» / «جاهای خصوصی بدن» (private parts);
  - «اندام تناسلی» (genitals, neutral-formal);
  - «آلت تناسلی» (penis; formal, and some parents find it blunt);
  - «بیضه» (testes);
  - «واژن» (vagina; medical, rarely used with young children).
- A neutral everyday word for girls' genitals is lacking. This is a real gap: the app should acknowledge it rather than invent one.
- Childish words like «جیش» / «جیشی» are common at home. The AAP and NCTSN favour correct names, so as not to imply something is unmentionable [opened].
- **Suggested line:** «یک کلمه‌ی روشن و محترمانه انتخاب کنید و همیشه همان را به کار ببرید؛ نام درست را هم کم‌کم یاد بدهید.» ("Pick one clear, respectful word and always use it; teach the correct name gradually too.")
- **Never** use shaming words: «جای زشت», «جای بد», «بی‌تربیتی», «زشته», «خجالت بکش».

**The underwear rule** is culturally easy in Iran: «جاهایی که لباس زیر می‌پوشاند». The AAP's "covered by a swimsuit" example is less natural in Iran; use underwear instead.

**Comparison («مقایسه»)**
- Name it gently, without blaming the parent: «مقایسه کردن بچه‌ها با هم یا با "بچه‌ی مردم" معمولاً رقابت را بیشتر می‌کند، نه تلاش را.» ("Comparing children with each other, or with 'other people's children', usually increases rivalry, not effort.")
- Give swaps. Grandparents and relatives often compare too, so add a friendly line parents can use with relatives.

**«تو بزرگ‌تری، کوتاه بیا»** ("you're older, give in")
- Address it directly, with respect: older children need fairness too.
- Respect the value of older siblings caring for younger ones («بزرگ‌تری کردن») as a family strength, while limiting it to "sometimes, with thanks".

**Cousins and family gatherings**
- Mixed-age cousin play in closed rooms is a common setting. The "playing doctor" and age-gap guidance should explicitly say «بچه‌های فامیل» (children in the extended family).
- Use calm, non-accusatory wording, for example: «در مهمانی‌ها، در اتاق بچه‌ها باز بماند و بزرگ‌ترها گاهی سر بزنند.» ("At gatherings, keep the children's room door open and have adults check in now and then.")

**Sleeping and bathing customs** (and religion)
- Many Iranian families separate sleeping places of brothers and sisters, or of children and parents, at an age set by religious tradition or custom [recall].
- The app should say «هر خانواده رسم خودش را دارد؛ به رسم خانواده و نشانه‌های فرزندتان توجه کنید» ("Every family has its own custom; follow your family's custom and your child's cues"), and give **no age and no ruling**.
- The Iranian father's quoted question "how did God know you want children?" (Ganji) is a reminder: questions often involve faith. Keep the existing pattern "add what your family believes".

**Shame-free scripts in Persian** (drafts for the native reviewer)
- «کنجکاو بودن اشکالی ندارد. این جاها خصوصی است، حتی با دوست‌ها.» ("Being curious is fine. These places are private, even with friends.")
- «این کار را در جای خصوصی، مثل اتاق خودت، انجام بده.» ("Do that in a private place, like your own room.")
- «موقع بازی لباس‌هایمان تن‌مان می‌ماند.» ("We keep our clothes on when we play.")
- «سؤال خوبی است. بگذار فکر کنم و بعد از شام برایت بگویم.» ("Good question. Let me think and tell you after dinner.")

**Help in Iran**
- 1480 (counselling, Behzisti) for "is this normal?" questions.
- 123 (social emergency) if abuse is suspected.
- The family doctor or health centre («مرکز خدمات جامع سلامت»).
- 110 / 115 in danger.

**Gratification behaviour in Persian:** avoid «خودارضایی» (masturbation; heavily stigmatised, and in religious discourse often tied to sin). Prefer descriptive wording: «حرکات تکراری برای آرام کردن خود» ("repetitive movements to calm oneself") or «عادت آرام‌سازی در نوپاها» ("a self-soothing habit in toddlers") [recall; native reviewer must check tone].

### E) Gaps

1. **No Iranian peer-reviewed data** on sibling conflict or bullying, parental comparison, older-sibling caregiving, or normative child sexual behaviour. Persian databases (SID, Magiran, Noormags) were not searched directly. Next round: search there with «رقابت خواهر و برادری», «مقایسه فرزندان», «رفتارهای جنسی کودکان پیش‌دبستانی».
2. **No official Iranian guidance opened.** I opened no MoH or Behzisti page on children's sexual development or on sibling relationships. Check whether Behzisti, the MoH Office of Family Health, or the Ministry of Education (for example a «مهارت‌های زندگی» or «تربیت جنسی» parent booklet) publishes something the app can align with and cite.
3. **Kellogg 2009 AAP clinical report status** (reaffirmed, retired, or superseded by a newer AAP report?) was not checked because of the 403.
4. **Damian & Roberts 2015** numbers are recall only. **Falbo & Polit 1986** is snippet only.
5. **Siddiqui & Ross 2004** sample size and the exact mediation steps were not seen. Read the full text before writing the steps as "from the trials".
6. **Raising Children Network** pages could not be opened (Cloudflare).
7. **Persian vocabulary** for body parts needs native and clinical review. There is no evidence base for which Persian words work best.
8. **SIBS long-term follow-up** (whether short-term gains reduced later problems) was not found.
9. **Toddler sharing with siblings specifically** (as opposed to with adult strangers) was not researched.
10. **Children with disabilities** are not covered: sibling relationships when one child has a disability or chronic illness (there is an Iranian study, Eidi 2024, on quality of life of siblings of chronically ill children [abstract seen in a list, not read]), and sexual behaviour in autistic children.

---

## Recheck before shipping

- [ ] Open the Kellogg 2009 full text (or the AAP policy page) and confirm its current status. If a newer AAP clinical report exists, cite that instead.
- [ ] Recheck the Raising Children Network sibling-fighting pages (when to stand back, when to get help) in a normal browser.
- [ ] Recheck the NSPCC main parent page (nspcc.org.uk) wording on harmful sexual behaviour and its helpline. The app needs only the principle, but confirm the wording.
- [ ] Confirm the Falbo & Polit 1986 findings from the paper, or drop the citation and use Falbo & Hooper 2015 plus Lin 2021.
- [ ] Confirm the Damian & Roberts 2015 effect sizes, or cite Rohrer 2015 only.
- [ ] Read Smith & Ross 2007 and Siddiqui & Ross 2004 methods for the exact mediation steps.
- [ ] Have a native Iranian reviewer and an Iranian paediatrician or child psychologist check:
  - the body-part words;
  - the «حریم» framing;
  - the gratification-behaviour wording;
  - the "playing doctor" scripts;
  - the cousin-gathering line.
- [ ] Check whether Behzisti or the MoH has an official parent resource on children's sexual development to cite in the Persian guide. Prefer official Iranian sources over UNESCO or Western sexuality-education bodies.
- [ ] Confirm that 1480 and 123 remain current, and how they describe their scope for parents asking "is this normal?".
- [ ] Keep the age-gap wording ("more than about 3 years") consistent between the new guide, `body-safety` ("much older or younger") and the `where-babies-come-from` card.
- [ ] Re-verify the tip word counts after editing (node script: split on whitespace, max 30).
- [ ] Make sure no tip or guide text reproduces Brook Traffic Lights content.

---

## Source list

### Siblings

**Reviews and long-term outcomes**
- McHale SM, Updegraff KA, Whiteman SD. Sibling relationships and influences in childhood and adolescence. *J Marriage Fam* 2012. doi:10.1111/j.1741-3737.2012.01011.x. PMID 24653527. [abstract]
- Feinberg ME, Solmeyer AR, McHale SM. The third rail of family systems. *Clin Child Fam Psychol Rev* 2012. doi:10.1007/s10567-011-0104-5. PMID 22105663. [abstract]
- Buist KL, Deković M, Prinzie P. Sibling relationship quality and psychopathology of children and adolescents: a meta-analysis. *Clin Psychol Rev* 2013. doi:10.1016/j.cpr.2012.10.007. PMID 23159327. [abstract]
- Gass K, Jenkins J, Dunn J. Are sibling relationships protective? *JCPP* 2007. doi:10.1111/j.1469-7610.2006.01699.x. PMID 17300555. [abstract]
- Dunn J, Slomkowski C, Beardsall L, Rende R. Adjustment in middle childhood and early adolescence. *JCPP* 1994. PMID 8195308. [abstract]
- Youngblade LM, Dunn J. Pretend play with mother and sibling. *Child Dev* 1995. PMID 7555225. [abstract]
- Kramer L, Kowal AK. Sibling relationship quality from birth to adolescence. *J Fam Psychol* 2005. PMID 16402865. [abstract]
- Waldinger RJ, Vaillant GE, Orav EJ. Childhood sibling relationships as a predictor of major depression in adulthood. *Am J Psychiatry* 2007. PMID 17541056. [abstract]

**Sibling aggression and bullying**
- Tucker CJ, Finkelhor D, Turner H, Shattuck A. Association of sibling aggression with child and adolescent mental health. *Pediatrics* 2013. doi:10.1542/peds.2012-3801. PMID 23776124. [abstract]
- Tucker CJ, Finkelhor D, Shattuck AM, Turner H. Prevalence and correlates of sibling victimization types. *Child Abuse Negl* 2013. PMID 23428164. [abstract]
- Bowes L, Wolke D, Joinson C, Lereya ST, Lewis G. Sibling bullying and risk of depression, anxiety, and self-harm. *Pediatrics* 2014. doi:10.1542/peds.2014-0832. PMID 25201801. [abstract, full results]
- Dantchev S, Zammit S, Wolke D. Sibling bullying in middle childhood and psychotic disorder at 18 years. *Psychol Med* 2018. PMID 29429415. [abstract]
- Wolke D, Tippett N, Dantchev S. Bullying in the family: sibling bullying. *Lancet Psychiatry* 2015. PMID 26462226. [abstract]
- Dantchev S, Wolke D. Trouble in the nest. *Dev Psychol* 2019. PMID 30762414. [abstract]
- Toseeb U, McChesney G, Dantchev S, Wolke D. Precursors of sibling bullying in middle childhood. *Child Abuse Negl* 2020. PMID 32745800. [abstract]

**Favouritism and differential treatment**
- Jensen AC, Thomsen AE. Parental differential treatment of siblings… meta-analysis. *Child Dev* 2024. doi:10.1111/cdev.14091. PMID 38439142. [abstract]
- Jiang Z, Yang Y, Chen BB. PDT and child psychopathology: network meta-analysis. *Clin Child Fam Psychol Rev* 2025. PMID 40524095. [abstract]
- Eradus M, Leijten P, et al. Parental differential warmth, hostility… meta-analysis. *J Fam Psychol* 2024. PMID 38271066. [abstract]
- Jensen AC, Jorgensen-Wells MA. Parents favor daughters: a meta-analysis. *Psychol Bull* 2025. PMID 39818912. [abstract]
- Kowal AK, Krull JL, Kramer L. How the differential treatment of siblings is linked with parent-child relationship quality. *J Fam Psychol* 2004. PMID 15598171. [abstract]
- Jensen AC, McHale SM. Mothers', fathers', and siblings' perceptions of PDT. *J Adolesc* 2017. PMID 28858672. [abstract]

**Parent mediation and sibling programmes**
- Siddiqui A, Ross H. Mediation as a method of parent intervention in children's disputes. *J Fam Psychol* 2004. doi:10.1037/0893-3200.18.1.147. PMID 14992617. [abstract]
- Smith J, Ross H. Training parents to mediate sibling disputes. *Child Dev* 2007. PMID 17517005. [abstract]
- Feinberg ME, Solmeyer AR, Hostetler ML, et al. Siblings are special: initial test. *J Adolesc Health* 2013. PMID 23298985. [abstract]
- Updegraff KA, Umaña-Taylor AJ, et al. Sibling-focused family prevention with Latinx siblings: RCT. *Child Dev* 2025. PMID 40515523. [abstract]
- Kennedy DE, Kramer L. Improving emotion regulation and sibling relationship quality: the More Fun With Sisters and Brothers Program. *Family Relations* 2008;57:567–578. doi:10.1111/j.1741-3729.2008.00523.x. [opened, author-hosted PDF: https://bpb-us-e1.wpmucdn.com/sites.northeastern.edu/dist/d/3128/files/2023/02/Kennedy-Kramer-2008.pdf]
- Kramer L, Carroll PE, Devarajan RS. Strengthening children's sibling relationships using an online preventive intervention program for parents. Accepted manuscript, 2024. [opened, author-hosted PDF: https://bpb-us-e1.wpmucdn.com/sites.northeastern.edu/dist/d/3128/files/2024/11/Strengthening-Sibling-Relationships-Revised-Changes-Accepted.pdf; final journal citation not confirmed]
- Ravindran N, Engle JM, McElwain NL, Kramer L. Fostering parents' emotion regulation. *J Fam Psychol* 2015. PMID 26053350. [abstract]
- Tucker CJ, Finkelhor D. The state of interventions for sibling conflict and aggression. *Trauma Violence Abuse* 2017. PMID 26681173. [abstract]
- Leijten P, Melendez-Torres GJ, Oliver BR. Parenting programs to improve sibling interactions: a meta-analysis. *J Fam Psychol* 2021. doi:10.1037/fam0000833. PMID 33734758. [abstract]
- Sellars E, et al. Effects of the Incredible Years parenting program on sibling conduct problems. *JCPP Adv* 2025. PMID 41395341. [abstract]

**Sharing in toddlers**
- Brownell CA, Iesue SS, Nichols SR, Svetlova M. Mine or yours? *Child Dev* 2013. PMID 23145536. [abstract]
- Brownell CA, Svetlova M, Anderson R, et al. Parents' talk about emotions… sharing and helping in toddlers. *Infancy* 2013. PMID 23264753. [abstract]

**Birth order and only children**
- Rohrer JM, Egloff B, Schmukle SC. Examining the effects of birth order on personality. *PNAS* 2015. doi:10.1073/pnas.1506451112. PMID 26483461. [abstract]
- Rohrer JM, Egloff B, Schmukle SC. Probing birth-order effects on narrow traits. *Psychol Sci* 2017. PMID 29040007. [abstract]
- Damian RI, Roberts BW. The associations of birth order with personality and intelligence in a representative sample of U.S. high school students. *J Res Pers* 2015. [recall, unverified]
- Damian RI, Roberts BW. Settling the debate on birth order and personality. *PNAS* 2015. PMID 26518507. [record seen, no abstract]
- Damian RI, Spengler M. Negligible effects of birth order on… careers. Preprint 2020. doi:10.31234/osf.io/2tnry. [abstract]
- Botzet L, Rohrer JM, Arslan RC. Effects of birth order… in an Indonesian sample. Preprint 2018. doi:10.31234/osf.io/5387k. [abstract]
- Falbo T, Polit DF. Quantitative review of the only child literature. *Psychol Bull* 1986;100(2):176–189. [search]
- Falbo T, Hooper SY. China's only children and psychopathology: a quantitative synthesis. *Am J Orthopsychiatry* 2015. PMID 25894306. [abstract]
- Lin S, Falbo T, et al. Chinese only children and loneliness. *Am J Orthopsychiatry* 2021. PMID 34166053. [abstract]

**Guidance**
- AAP HealthyChildren. Sibling synergy. Updated 6 Apr 2026. https://www.healthychildren.org/English/family-life/family-dynamics/Pages/sibling-synergy.aspx [opened]
- Raising Children Network. Handling sibling fights (school-age, preschool, toddler pages). https://raisingchildren.net.au/school-age/family-life/siblings/handling-fights [search; blocked]

**Iran**
- Foroozanmehr B, Hemmati MA, Hedayati A, Paknazar F. Relationship between having siblings and developmental status (PERSIAN cohort, Semnan). *J Educ Health Promot* 2025. PMID 40271239. [abstract]
- Persian popular media on «فرق گذاشتن» / «مقایسه»: Asriran (https://www.asriran.com/fa/news/783386), Zoomit (https://www.zoomit.ir/health-medical/408177-lifelong-effects-favourite-child/), Digikala Mag. [search; not research]

### Bodies and curiosity

**Clinical guidance and normative data**
- Kellogg ND; AAP Committee on Child Abuse and Neglect. Clinical report: the evaluation of sexual behaviors in children. *Pediatrics* 2009;124(3):992. doi:10.1542/peds.2009-1692. PMID 19720674. [abstract; full text 403]
- Kellogg ND. Sexual behaviors in children: evaluation and management. *Am Fam Physician* 2010. PMID 21121534. https://www.aafp.org/pubs/afp/issues/2010/1115/p1233.html [opened]
- Friedrich WN, Fisher J, Broughton D, Houston M, Shafran CR. Normative sexual behavior in children: a contemporary sample. *Pediatrics* 1998. doi:10.1542/peds.101.4.e9. PMID 9521975. [abstract]
- Friedrich WN, Grambsch P, et al. Normative sexual behavior in children. *Pediatrics* 1991. PMID 1881723. [abstract]
- NCTSN. Sexual development and behavior in children: information for parents and caregivers. April 2009. https://www.nctsn.org/sites/default/files/resources//sexual_development_and_behavior_in_children.pdf [opened, full PDF]
- NSPCC Learning. Healthy sexual development of children and young people. Updated 28 Jul 2026. https://learning.nspcc.org.uk/child-health-development/healthy-sexual-development-children-young-people [opened]
- AAP HealthyChildren. Sexual behaviors in young children: what's normal, what's not? Updated 17 Apr 2023. https://www.healthychildren.org/English/ages-stages/preschool/Pages/Sexual-Behaviors-Young-Children.aspx [opened]
- Brook. Sexual Behaviours Traffic Light Tool (training and licence page). https://www.brook.org.uk/training/wider-professional-training/sexual-behaviours-traffic-light-tool/ [opened; framework itself not accessible, and licensed]

**Gratification behaviour**
- Nechay A, Ross LM, Stephenson JB, O'Regan M. Gratification disorder ("infantile masturbation"): a review. *Arch Dis Child* 2004. doi:10.1136/adc.2003.032102. PMID 14977696. [abstract]
- Yang ML, Fullwood E, Goldstein J, Mink JW. Masturbation in infancy and early childhood presenting as a movement disorder. *Pediatrics* 2005. PMID 16322167. [abstract]
- Güleç A, et al. The assessment and management of childhood masturbation: 90 cases. *Neuropediatrics* 2024. PMID 37827511. [abstract]
- Murat D, Uçar HN, Eray Ş. Childhood masturbation: sleep habits, maternal psychopathology. *J Psychosoc Nurs Ment Health Serv* 2022. PMID 34251934. [abstract]
- Nemati H, Ahmadabadi F, et al. Treatment of child gratification disorder (systematic review). *Iran J Child Neurol* 2022. PMID 35497101. [abstract]
- Saad Y, et al. Genital automatisms in pediatric focal epilepsy misdiagnosed as a gratification disorder. *J Child Neurol* 2026. PMID 42517758. [abstract]

**Iran**
- Ganji J, Emamian MH, Maasoumi R, Keramat A, Merghati Khoei E. Qualitative needs assessment: Iranian parents' perspectives in sexuality education of their children. *J Nurs Midwifery Sci* 2018;5:140–6. doi:10.4103/JNMS.JNMS_42_18. https://brieflands.com/articles/jnms-141160.pdf [opened, full text]
- Sarikhani M, Salehi L, Safarnavadeh M. Mothers and educators' perspectives on sex education of children between 3 and 5 years old. *J Holist Nurs Midwifery* 2023;33(3):159–166. https://hnmj.gums.ac.ir/article-1-2177-en.html [opened, abstract page]
- Jeihooni AK, et al. Educational intervention based on theory of planned behavior on mothers' skills in sexual care of children. *BMC Public Health* 2022. PMID 36114478. [abstract]
- Heroabad ES, et al. Persian version of the Good/Bad Touch Questionnaire. *J Child Adolesc Trauma* 2025. PMID 40469783. [abstract]
- Isfahan University of Medical Sciences leaflet «مسائل جنسی در کودکان». https://amin.mui.ac.ir/... [opened; psychoanalytic framing, low quality; not recommended as a source]
- Iran and UNESCO Education 2030 controversy: Center for Human Rights in Iran (https://iranhumanrights.org/2017/07/unesco-guidelines-scrapped-by-iran-include-essential-protective-measures-against-child-abuse/) and Iran International. [search; politically oriented sources; context only, not for app copy]

**Secondary or other**
- Search summaries on family nudity and bathing ages (parenting media, no official body). [search; used only to confirm there is no official cut-off]
- Persian search on body-part naming (Jamejam, Delgarm; no authoritative Iranian source found). [search]
