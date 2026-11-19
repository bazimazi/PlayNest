# 08 — School-age changes and worries: not wanting to go to school, big moves, pet loss, left-handed children

Research notes for PlayNest phase 10, round 7. Researched 19 Nov 2026.

## 1. Scope, and what is already in the app

Four topics for roughly ages 4 to 12:

1. **Not wanting to go to school.** UK educational psychologists call this "emotionally based school avoidance" (EBSA); the research term is "school refusal". Covers signs, what helps, what makes it worse, and when to get help.
2. **Big moves:** moving house, changing school, and moving city or country.
3. **Pets:** when a pet dies, and what research says about pets in general.
4. **Left-handed children:** how common it is, forced switching, myths, Iranian customs, and practical help.

**Already in the app.** I read these and don't repeat them below. Problems are flagged with a severity: P1 = could cause harm, P2 = wrong or misleading, P3 = wording or a gap.

- `anxious-children` (guides-more.ts): fears by age, small steps towards a fear, the SPACE trial (124 children aged 7 to 14), and when to see a doctor. Correct. No change needed.
- `friendship-bullying` (guides-more.ts): lists "fear of school" and "stomach aches" as possible bullying signs. Correct. The new school-avoidance guide should link to it, because bullying is a common cause.
- `ready-for-school` (guides-more.ts): readiness debate and starting later. Out of scope here. No problem found.
- `parent-ill-or-bereaved` (guides-more.ts): plain words, the four things young children need to hear, a table by age ("Most understand it's final by about 5 to 7"), and red flags. Consistent with the pet-loss sources below. No problem found.
- `starting-nursery` and `homework-without-battles` (guides-learning.ts): the homework safety callout already says to talk to the teacher about "tears or tummy aches most school nights, or if your child doesn't want to go to school". Correct.
- Coach card `drop-off` (12–144 months): short goodbye, and for ages 5 to 12, "Keeping them home every time it's hard. Avoiding can make it harder." This matches the EBSA guidance and the DfE guidance below. **P3:** its keywords include "school refusal", but the card only covers the goodbye. When the new guide ships, add a `later`/link line pointing to it.
- Coach card `scared-or-worried`: "Worth talking to your doctor about regular tummy aches or headaches that come with it." Correct.
- Coach card `someone-has-died` (keyword "pet died"). **P3 (gap):** nothing on euthanasia or "put to sleep" for pets. Suggested edit in §7.4.
- goals.ts: the line "Tummy aches or headaches mainly on school mornings, again and again. It may be worry." (the `...Y5` row around line 1140). **P3:** add "Check with your doctor first." Li et al. 2021 found that somatic symptoms are often the first complaint, and the doctor should rule out illness before anyone treats it as worry. The goal at line 765 already says "talk to the school and your doctor", so this is wording only.
- activities/older.ts: "left-handed" appears only as a play challenge ("Could you beat it left-handed?", "Use your weaker hand"). Not a problem. If the new guide ships, a right-handed child is told to use their "weaker hand", and a left-handed child reads that the same way, so no edit is needed.
- `children-and-animals` (guides-safety-more.ts, safety shelf) covers bites and rabies, not pet loss. The pet-loss section in §7.4 is proposed as an addition to this guide, or as a separate short guide.

**No P1 or P2 problems were found in the existing content I was asked to read.**

## 2. How to read these notes

- **[opened]**: I read the page, PDF or full text myself.
- **[abstract]**: taken from the abstract, through the Europe PMC REST API or the publisher page.
- **[search]**: taken from search-result snippets only. **The app must not use it until someone opens and checks the source.**
- **[recall, unverified]**: background knowledge I could not confirm this session.

**Access problems:**
- AACAP's "Children Who Won't Go to School (Separation Anxiety)" URL returned a sign-in page twice. The current sheet, "School Refusal" (No. 7, updated August 2026), opened at a different URL and is used instead.
- Wiley (the Campbell review full text) returned **403**. I read the full executive summary through the IDEAS/RePEc record, so its numbers are tagged [abstract].
- NHS Fife CAMHS, raisingchildren.net.au and UC Davis vet school returned **403**.
- OVC Pet Trust (Guelph) and the West Sussex EBSA PDF mirror (Redcar & Cleveland) returned HTML instead of a PDF. I used Hertfordshire's EBSA parent guide, which cites the West Sussex guidance.
- A Tabriz University of Medical Sciences rehabilitation-faculty file was cut off at 16 MB and could not be read.
- The DfE URL I guessed was a 404. The correct GOV.UK page was found and its PDF opened.
- **No national NHS page on school refusal or EBSA was found.** NHS material is local (trust and council pages). RCPsych has only a CPD module for clinicians and a 2020 policy letter, and no parent leaflet was found.

**Searches used:** 16 web searches, about 30 Europe PMC API queries, and about 22 page or PDF fetches.

---

## 3. Findings

### 3.1 Not wanting to go to school (school refusal, EBSA)

**What it is and how common**
- School refusal is "a student's difficulty attending school and, in many cases, substantial absence from school". It differs from truancy because of severe emotional distress and the absence of severe antisocial behaviour. It "occurs for about 1‑2% of young people", and more often among children referred to clinics [abstract, Maynard et al., Campbell Systematic Reviews 2015].
- AACAP: school refusal is most common "around the ages of 5-7 (school entry) and again at 11-14 years". "The condition most often behind school refusal, especially in younger children, is separation anxiety disorder." [opened, AACAP Facts for Families No. 7 "School Refusal", updated Aug 2026]
- AACAP also says that when it first appears in an older child it more often points to friendship problems, bullying or depression, and that refusal often starts after a holiday or a short illness [search, same sheet. The opened summary did not include these lines. Recheck].
- EBSA is "a broad umbrella term" for children with severe difficulty attending school because of emotional factors, "often resulting in prolonged absences" [search, West Sussex EP Service guidance 2018, quoted by councils that adapted it].

**Signs**
- AACAP: "Parents should be concerned if their child often complains of feeling sick or asks to stay home from school". A child "may complain of a headache, sore throat, or upset stomach right before it's time to leave for school." [opened, AACAP 2026]
- Systematic review of somatic symptoms in school refusal (Li et al., *Psychosomatic Medicine* 2021; 148 papers): "Unspecific somatic symptoms were frequently the first complaints." The most common were abdominal pain, headache, nausea, vomiting, muscle or joint ache, diarrhoea, dizziness, tiredness and palpitations, "usually not accounted for by an identifiable physical disease". Anxiety was the most frequent cause, and "physicians' lack of awareness about psychological comorbidities often delayed psychological/psychiatric referral" [abstract].
  - **App note:** the review lists "ignoring the somatic symptoms" among successful therapies. That is a clinician-led approach once illness has been ruled out. **The app must not tell parents to ignore pain.** The safe line is: see the doctor to check for illness first, and the pain is real even when worry is the cause.
- The pattern often builds gradually. The Hertfordshire EP guide (citing West Sussex) shows a sequence: being late, missing a few lessons, occasional absences, more frequent absences, prolonged non-attendance, and "child rarely leaves bedroom". "It is easier to make change if you intervene early, at the first sign of difficulties." [opened, Hertfordshire County Council Educational Psychology, EBSA Guide for Parents, v1 Nov 2021]

**Why avoidance makes it worse**
- "The immediate reduction in anxiety that results from the child not attending school can end up reinforcing their desire to avoid school. This then increases the anxious feelings about school and in turn, the school avoidance." [opened, Hertfordshire 2021]
- UK DfE: "attendance at school may serve to help with the underlying issue as much as being away from school might exacerbate it, and a prolonged period of absence may heighten their anxiety about attending in future." [opened, DfE "Summary of responsibilities where a mental health issue is affecting attendance", Feb 2023]
- DfE: "Many children will experience normal but difficult emotions that make them nervous about attending school, such as worries about friendships, schoolwork, exams or variable moods… these pupils are still expected to attend school regularly." [opened, DfE 2023]
- Hertfordshire: writing a sick note so a child can avoid a feared test "gives the child the message that the distressing feelings are too hard for them to cope with… This can increase the child's anxiety." [opened]

**What helps at home (expert guidance, not trials)** [opened, Hertfordshire 2021, which draws on Kearney & Silverman's functional model and Raggi et al.'s exposure work]
- The parent calms themselves first and gets things ready the night before, so the morning can go to the child.
- Listen and acknowledge: "I can hear that you're feeling really worried about going back into school on Monday… That must be really tough for you."
- Don't: say they shouldn't feel worried, argue or try to "jolly" them out of it, or let them talk about the anxiety "endlessly". That "may inadvertently give them more attention for being anxious than for being brave".
- Ask what would help them cope, rather than telling them what to do.
- Limit repeated reassurance, because children can get "hooked" on it.
- Give "frequent, specific praise for brave behaviour".
- Keep the message consistent: everyone is working towards attending, and you believe they can manage it.
- If the child is off school: keep the routine (up, dressed, schoolwork, sleep, exercise, time outside). During school hours, keep home activities low-key and screens limited, so home doesn't become more rewarding than school. Hertfordshire also warns that for some anxious children, especially those with special needs, sudden screen removal can trigger distress. It suggests warnings, choices and moving on to another activity.
- Separation anxiety: pass the child to a trusted adult, keep a clear goodbye routine, say exactly when you'll see them, "don't 'sneak away'", and give a transitional object (a photo, a note in the lunchbox, a drawn "hug button" on the hand).
- Unidentified special educational needs can contribute, and autistic children are more vulnerable to anxiety at school. Families and staff should explore this together.

**What helps at school** [opened, DfE 2023]
- Schools should involve parents "from an early stage". A plan of "reasonable adjustments" should be agreed in advance, with review points, aiming to maximise face-to-face attendance.
- Examples: "a trusted adult periodically checking how the pupil is feeling", "access to a quiet space at break times", and extra help to catch up if the child is worried about being behind.
- A part-time timetable may be used as a temporary support. It should be designed around the specific barrier, "have a time limit by which point the pupil is expected to attend full-time", and be reviewed regularly. It "must not be used to manage a pupil's behaviour". *(Councils say the August 2024 attendance guidance has since superseded the part-time timetable detail [search]. This is UK school law and shouldn't be presented as universal.)*
- Transitions (new school, new class) are flagged as times of higher anxiety [opened, DfE 2023].

**Treatment evidence**
- **Campbell systematic review** (Maynard, Brendel, Bulanda, Heyne, Thompson & Pigott 2015; published as a journal meta-analysis in *Research on Social Work Practice* 2018) [abstract, full executive summary]:
  - 8 studies with 435 school-age participants. 6 were RCTs and 2 quasi-experimental. 7 of the 8 tested a form of CBT, mostly against an *alternative treatment* (k = 4).
  - Attendance: **g = 0.54 (95% CI 0.22 to 0.86)**, significant, a moderate effect.
  - Anxiety: **g = 0.06 (95% CI −0.63 to 0.75)**, not significant.
  - CBT plus medicine against CBT alone (2 studies): attendance g = 0.61 (CI 0.01 to 1.21). Anxiety not significant.
  - Authors: "relatively few rigorous studies"; "Several risks of bias… could upwardly bias the estimated effects"; the estimates "should be treated with caution". The plain-language summary rates it "medium quality evidence".
  - **Interpretation:** because most comparisons were against another active treatment, "no effect on anxiety" means CBT did no better than the other therapies on anxiety. It does not mean anxiety failed to improve. Don't write "CBT doesn't help anxiety".
- **Elliott & Place, *JCPP* Practitioner Review 2019:** "since the turn of the century, there has been little substantial advance in knowledge that can guide practitioners". The problem is conceptual confusion, too few rigorous RCTs, and uncertain long-term effects [abstract].
- **A 2026 protocol** (Sato, Furukawa et al.) for the first RCT-only meta-analysis notes that the 2015 review found "mixed results for treating anxiety… while showing promising results for school attendance" [abstract]. **The newer review is not yet published. Recheck before shipping.**
- **AACAP:** CBT "builds a step-by-step plan to return to school in small, supported steps"; "Treatment works best when family, school, and the assigned therapist work together"; "The sooner families get help, the better things tend to go." [opened, 2026]
- **Iranian trial:** Shayganfard et al., *Archives of Psychiatric Nursing* 2024 (Kermanshah University of Medical Sciences). An RCT of 30 primary-school boys with anxiety-based school refusal (15 vs 15). Ten sessions of CBT group play therapy significantly reduced anxiety and behaviour scores (p < 0.001) [abstract]. It is small, all boys, "preliminary", and measured only short-term questionnaire scores.
- **Medicine:** a 2018 systematic review of medicines for school refusal exists (*J Child Adolesc Psychopharmacol*) [title only]. **The app gives no medicine information.** "Ask your doctor" is enough.

**When to get help**
- AACAP: "When fears persist, parents and children should see a qualified mental health professional." [opened]
- Hertfordshire: talk to the GP if anxiety affects regular attendance or comes with "self-harm, depression, suicidal threats or eating concerns". "Avoidance tends to make fear stronger. It is usually better for the family and school to work proactively together." [opened]

### 3.2 Big moves: house, school, city or country

**Moving house: the research**
- **Jelleyman & Spencer, *JECH* 2008** (systematic review, 22 studies). Moving was associated with more behavioural and emotional problems, adolescent depression, earlier drug use, teenage pregnancy and less continuity of healthcare. "Studies assessed as having lower quality were less likely to demonstrate statistically significant effects." Heterogeneity prevented a meta-analysis. "High frequency residential change is potentially a useful marker" of risk [abstract].
- **Simsek, Costa & de Valk, *Health & Place* 2021** (meta-analysis, 64 studies, 844 effect sizes, 1989–2020). A **small to medium** negative association between childhood mobility and health. It depends on the outcome, age at outcome, **age at moving and how often**. The main confounders are parental socioeconomic status, parents' marital status, ethnicity and **other childhood adversities** [abstract].
- **Webb, Pedersen & Mok, *Am J Prev Med* 2016** (Danish national cohort, n = 1,475,030, followed from 15 to early 40s). Moves were linked with higher risk of every outcome studied. The risk was higher with **several moves in one year**, grew with **older age at moving**, and spiked with multiple moves in early to mid adolescence, across all income groups [abstract]. Observational.
- **Sabel et al., *JAMA Psychiatry* 2024** (Denmark, n = 1,096,916). Two or more childhood moves were linked with more adult depression (IRR 1.61, 95% CrI 1.52 to 1.70), independent of neighbourhood deprivation. The authors conclude that "a settled home environment in childhood may have a protective association" [abstract].
- **Nathan et al., *JECH* 2019** (New Zealand, n = 313,164 four-year-olds). 69% had moved, and 12% had moved four or more times. Each extra move was linked with slightly higher difficulty scores. Moves **before age 2 were not associated**. Moves of more than 10 km, and moves to poorer areas, were. Children with more moves were 8% more likely to score in the range of clinical concern (adjusted OR 1.08) [abstract]. **A small effect.**
- **Overall:** a consistent link, small for a single move, stronger for frequent moves, moves in the teens, and moves that come with other hardship. Families often move *because* of hard times (separation, money, housing), so cause is uncertain.

**Moving school**
- **Singh et al., *JAACAP* 2014** (ALSPAC, n = 6,448). Changing school by age 9 was linked with more problems at 12, partly through **bullying and friendship difficulties**. The authors suggest helping "mobile students to establish themselves within new school environments to reduce peer difficulties" [abstract]. *(The outcome measured was psychotic-like symptoms. Don't put that in parent copy. Use only the practical point about friendships and bullying.)*

**Moving city or country (migration)**
- **Belhadj Kouider, Koglin & Petermann, *Eur Child Adolesc Psychiatry* 2014** (systematic review, 36 European studies, 2007–2013). Migrant children had more internalising problems (worry, sadness), especially first-generation migrants. Externalising problems were similar to those of native children. Risk factors: low socioeconomic status, parents' uncertain cultural identity, harsh parenting, minority status [abstract].
- **Same authors, *J Immigr Minor Health* 2015** (35 studies from North America). Migration itself was **not proven** to be a risk factor, and problem behaviour was similar to native children's. Family-level risks: high **acculturation stress**, low competence in the new language, **"language brokering"** (children interpreting for parents), and a gap between the child's and the parents' cultural orientation [abstract].
- **Overall:** the findings are mixed, and family stresses matter more than the move itself.

**What helps (expert guidance)** — AACAP Facts for Families No. 14, "Moving: Helping Children Cope", updated Oct 2017 [opened]:
- "Studies show children who move frequently are more likely to have problems at school." Problems are worse when a move comes with other big changes such as a death, divorce or loss of income.
- Young children (kindergarten, first grade) may struggle because they are still learning to separate from parents. "The older the child, the more difficulty he or she will have with the move", because peers matter more.
- Explain clearly why the move is happening. Introduce the new area with maps, photos and local news, and point out things they may enjoy. Get them involved in local activities. Let them help plan or furnish their room. "Help children keep in touch with friends from the previous neighborhood."
- Warning signs: changes in appetite, social withdrawal, falling grades, irritability, sleep problems, "or other marked changes in behavior or mood". Some children don't talk about it. If distress persists, ask the family doctor or paediatrician for a referral.

### 3.3 When a pet dies, and pets in general

**How to talk about it** — Dougy Center with DoveLewis Pet Loss Support Program, "After the death of a pet or companion animal", 2023 [opened]:
- The death of a pet "may be the first time a child experiences a major loss". Children "experience it deeply".
- Give "honest, simple, and direct responses". Follow the child's lead, and don't give too much at once.
- Suggested words: "Many animals don't live as long as people do." "Dead means they don't breathe or move. They don't need to eat or sleep, and they won't return."
- On euthanasia: "Euthanasia is a loving decision that we make to help a companion animal die." Sample wording: "The doctor will give (name of pet) a medicine just for animals that will let them die in a peaceful and painless way."
- "Avoid euphemisms like 'put to sleep,' 'passed,' 'lost,' and 'put down,' as these phrases can cause more confusion and fear, especially for younger children."
- Don't say the pet "ran away" or "went to live somewhere else". "Children may feel abandoned and wonder if they did something to cause their companion to leave."
- "Do not blame the veterinarian", which may make children reluctant to seek care for future animals.
- Expect the same question many times, especially from the youngest, "who might not yet understand that death is permanent". Reassure them "that nothing we say, think, or wish can cause an animal to die".
- On being present at euthanasia: "give children and teens the choice. You can tell them what to expect and then let them decide."
- Ways to say goodbye and remember: a letter, a drawing, Play-Doh, a collage, writing prompts ("what I miss", "silly things they used to do"), and a "linking object" such as a painted stone or a bracelet with the pet's name.
- If the death was linked to something the child did: "Feeling guilty and being guilty are two different things." Accidents happen. "Reassure your child that they loved their companion, and they did not mean for this to happen."
- On a new pet: decide as a family, and make sure everyone understands "a new companion is not a replacement".

**KidsHealth (Nemours), "When a Pet Dies", medically reviewed June 2020** [opened]:
- Tell them one to one, somewhere safe. Match the detail to age, maturity and experience. Don't lie ("ran away", "went on a trip"). It's "OK to tell kids that death is a mystery".
- Be careful with "put to sleep", because young children may take it literally and become afraid of sleep, surgery or anaesthesia. Use "death" and "dying".
- Ceremonies, a prayer written together, funny stories, a scrapbook, and talking about the pet "often and with love".
- A new pet "not as a replacement", "When the time is right".
- *Note:* KidsHealth's own euthanasia explanation says the vet gives a shot that "first puts the pet to sleep and then stops its heart". **For young children, prefer the Dougy wording**, which avoids "sleep" altogether.

**Research on pet death**
- **Crawford et al., *Eur Child Adolesc Psychiatry* 2021** (ALSPAC, n = 6,260). Children whose pet had died by age 7 had **slightly higher** psychopathology scores at 8 than children who had pets but no loss (β = 0.35, 95% CI 0.07 to 0.63), after adjusting for other adversities. The effect was stronger in boys. There was no difference from children who never had pets (β = 0.20, CI −0.18 to 0.58). Timing, how recent the death was, and the number of pet deaths were not associated [abstract]. Observational, with a small effect. Use it to show the grief is real, not to make parents fear owning a pet.
- **Cleary et al., *Death Studies* 2022** (qualitative systematic review, 19 papers, mostly adults). Pet grief can feel the same as grief for a person. The themes include guilt [abstract].

**Pets in general**
- **Purewal et al., *IJERPH* 2017** (systematic review, 22 studies). Pet ownership was associated with emotional benefits, "particularly for self-esteem and loneliness", and with social competence. Findings on anxiety and depression were "inconclusive". There is "a shortage of high quality and longitudinal studies" [abstract].
- **Purewal et al., *BMC Pediatrics* 2024** (ALSPAC, about 14,000 children, adjusted for confounders). There was "little evidence" of links between pets and emotional health or cognitive outcomes. There were some links with prosocial behaviour and language, and some with lower educational attainment and conduct problems at certain ages [abstract]. **So don't claim that pets make children happier or cleverer.** Honest copy: pets can bring joy and companionship, but research on their effect on development is mixed.
- Pet ownership in a UK cohort peaked at age 11 (80%) [abstract, Purewal 2019].

### 3.4 Left-handed children

**How common**
- **Papadatou-Pastou et al., *Psychological Bulletin* 2020** (5 meta-analyses, more than 2 million people). Left-handedness is between **9.3%** (strictest definition) and **18.1%** (non-right-handedness), with **10.6%** the best overall estimate. "Cultural factors, such as pressure against left-hand use, moderate the magnitude of the prevalence." [abstract]
- **Iran:** Heidari et al., *Iranian Journal of Medical Education* (Isfahan UMS) 1394/2015. Of 370 Qom university students (Annett questionnaire), 79.2% were right-handed, **9.7% left-handed** and 11.1% used both hands. Handedness was not related to academic achievement (r = −0.015, p = 0.77) [opened, Persian full text]. These are adults, not children.
- **Iran:** Alipur & Kalantarian, *Journal of School Psychology* (Univ. of Mohaghegh Ardabili) 2012. Of 901 Tehran secondary students (mean age 13.4), about **16% were non-right-handed**, with no difference in achievement except history, where non-right-handers scored higher [abstract. The prevalence sentence in the abstract is garbled, so recheck the figure].

**When hand preference settles**
- Young children (3 to 5) show a weak, inconsistent hand preference. Older children (7 to 10) show stronger patterns. One study found hand preference established by about 6 [abstract, Scharoun & Bryden, *Front Psychol* 2014 review and 2015 study]. Researchers don't agree on the exact age.
- **Red flag:** "Early handedness before 12 months" is listed as a sign that needs referral for possible cerebral palsy, along with persistent fisting after 4 months and any asymmetry in posture or movement [opened, Nationwide Children's Hospital clinical tool, adapted from Novak et al., *JAMA Pediatrics* 2017, and Noritz & Murphy, *Pediatrics* 2013]. Not on the NHS cerebral palsy symptoms page [opened, reviewed May 2023]. **Recheck against a second body before shipping.**

**Forcing a switch: history and evidence**
- Switching was common. Siebner et al. (*J Neurosci* 2002) note that "until some decades ago, left-handed children who attended German schools were forced to learn to write with their right hand" [abstract]. Porac & Martin (2007) describe rightward conversion as a socialisation practice "found in many countries" [abstract].
- **Brain differences decades later:**
  - Siebner 2002 (11 converted left-handers vs 11 right-handers, PET): handwriting was the same, but activation was more bilateral in converted left-handers "despite decades of right-hand writing" [abstract].
  - Klöppel et al. (*J Neurosci* 2010, MRI): converted left-handers had less grey matter in the left putamen and a reversed central-sulcus asymmetry. "A specific environmental challenge during childhood can shape the macroscopic structure of the human basal ganglia." [abstract]
  - These show the brain adapts. **They don't show harm to daily life.** The samples were small.
- **Well-being:** Porac & Searleman, *Neuropsychologia* 2002 (n = 1,277 older adults). Left-handed writing alone did not predict poorer quality of life. But left-handers "who attempted to change their preferred writing hand but were unsuccessful" had "a lower quality of psychological and physical well-being on multiple measures" [abstract]. Cross-sectional and retrospective, so it can't prove cause.
- **Re-learning later:** 11 converted left-handed adults who retrained for 2 years improved, but didn't reach the writing fluency of natural left-handers [abstract, Stetter et al., *Sci Rep* 2023].
- **What we don't know:** there are no trials, and there can't ethically be any. No study found that switching *helps* a child. **The cautious path is to let children write with the hand they prefer.**

**Myths**
- *"Left-handers die younger."* The claim came from Halpern & Coren (*NEJM* 1991), who reported a much lower average age at death for left-handers (the often-quoted gap is about 9 years) [recall, unverified for the figure; the paper has no abstract]. Older generations were often switched, so fewer older people *report* being left-handed. That makes left-handers look younger at death. Salive et al. (*AJPH* 1993) showed by simulation that the age distribution "can be explained exclusively" this way. In 3,774 older adults they found no link (relative odds 1.04, CI 0.79 to 1.36) [abstract]. Porac (1996) found that older left-handers more often reported having been switched [abstract]. More studies found no difference: Iowa women, n = 39,691 (HR 1.10, CI 0.86 to 1.39) [abstract, Cerhan 1994]; 5,960 cricketers (P = 0.3) [abstract, Aggleton *BMJ* 1994]; Danish twins [abstract, Basso 2000]. One Dutch cohort of 12,178 women did find higher mortality (HR 1.4, CI 0.9 to 2.0, not significant overall; some cause-specific links) [abstract, Ramadhani 2007]. **Fair summary: most large studies find no difference, and the early claim is explained by older people having been switched.**
- *"Left-handedness causes stuttering," or "switching prevents or causes it."*
  - **Iranian study:** Mohammadi (Kermanshah UMS) & Papadatou-Pastou, *Laterality* 2020. 83 children who stutter, aged 3 to 9, were compared with 90 matched children who don't. There was no difference in hand preference, direction or degree. "We suggest that parents and professionals not treat left- or mixed-hand preference as a reason for concern with regards to stuttering." [abstract]
  - Meta-analysis of 52 studies (Papadatou-Pastou et al., *Neuropsychol Rev* 2024): the findings "do not allow for firm conclusions" [abstract].
  - I found no good study on whether switching *causes* stuttering. That remains folklore in both directions.
- *"Left-handers are cleverer," or "do worse at school."* Both Iranian studies found no difference in achievement (see above).
- **Group-level links with some conditions:** a second-order meta-analysis (402 datasets, 202,434 people) found atypical hand preference a little more common in some mental and neurodevelopmental conditions (left-handed OR 1.34) [abstract, Packheiser et al., *Psychol Bull* 2025]. It is a group-level pattern. Most left-handed people have no such condition, and handedness tells you nothing about an individual child. **Don't put this in parent copy except as "being left-handed is not, on its own, a sign of any problem".**

**Practical help (NHS children's occupational therapy)**
- Seat left-handers "on the left side of a table or desk, this prevents them accidentally bumping their elbow into another person" [opened, Cambridgeshire & Peterborough NHS children's health, Handwriting and typing]. West Suffolk NHS OT: "Left handers should always sit on the left hand side of a right hander" [opened].
- Paper: "Tilting the paper to the right", or use a slanted surface such as a folder [opened, Cambs & Peterborough]. Tilt "a maximum of 45 degrees", keep the paper "principally on the same side of the body as the writing hand", support the forearm, "move the paper up rather than his/her arm down", and mark the angle on the desk with tape once it's right [opened, West Suffolk NHS FT Paediatric OT, Worksheet G].
- Grip: hold the pencil "at least 3cm from the point" so they can see what they write [opened, West Suffolk]. Fingers about 2.5 to 3 cm from the point for a left-hander, compared with 1.5 to 2 cm for a right-hander. "The wrist and the little finger side of the hand always needs to be resting on the table." [opened, Royal United Hospitals Bath NHS FT, 2023]
- Smudging: "Make allowance for clumsiness, smudging and untidiness, whilst praising them for their hard work" [opened, Cambs]. Quick-drying or non-smudge pens [opened, West Suffolk, which names a brand; **don't name it**].
- A coloured star or sticker on the left of the page shows where to start [opened, Cambs].
- If extra handwriting practice isn't helping, ask about an OT referral [search, Cambs; the page I opened says this generally].
- Scissors: "If your child is left-handed, try using left-handed scissors… Right scissor blades are more difficult to see and move with the left hand." Left-handed children cut curves "in a clockwise direction (to the left)" [opened, Cambs & Peterborough NHS, Scissor skills].
- Meals: none of the sources discuss eating. "Sit on the left at meals" applies the OT seating advice to the table and should be labelled as practical advice, not research.

---

## 4. Where bodies disagree

1. **How firmly to push attendance.** DfE (2023) asks schools to "set and maintain high expectations" and says children with ordinary worries "are still expected to attend". In 2020, more than 250 child and adolescent psychiatrists (RCPsych Wales news) asked for school-absence fines to be suspended for children who can't attend [search]. A BPS *Psychologist* piece ("Can't not won't") argues for seeing avoidance as distress, not defiance [search, title only]. **Cautious path:** don't let long absence settle in, and don't force a distressed child alone either. Return gradually, in agreed small steps, with the school and, where needed, a professional. Keep UK fines and legal duties out of the app.
2. **Reassurance.** Hertfordshire EP advises limiting repeated reassurance. Everyday advice, and the app's own cards, advise comfort. Both fit together: comfort once and acknowledge the feeling, then move to coping rather than answering the same question again and again.
3. **"Make home boring" during school hours.** Hertfordshire recommends it but warns that sudden screen removal can trigger distress in some children. **App:** "Keep school hours for schoolwork and quiet things, and save screens and treats for after school." Frame it as routine, not punishment.
4. **Euthanasia wording.** Dougy/DoveLewis say avoid "sleep" entirely. KidsHealth itself uses "first puts the pet to sleep" to describe the anaesthetic. **Cautious path for young children:** avoid "sleep".
5. **Pets and development.** The 2017 review was positive, but the 2024 cohort with better confounder control found little effect. **Report both and claim little.**
6. **Mortality and handedness.** Most large cohorts found no link, and one Dutch cohort did. **Say: "most large studies found no difference."**
7. **Age of the hand-preference red flag.** One clinical tool says before 12 months, and others say before 18 months [search]. **Use "before about 12 months, tell your health worker"**, the earlier and more cautious threshold.

## 5. Claims the app must NOT make

- That a child "has" school refusal or EBSA, or a score or checklist that says so.
- "Ignore tummy aches." Always check with a doctor first.
- "CBT doesn't help anxiety in school refusal." The review compared it mostly with other treatments.
- "CBT cures school refusal" or "is proven". The evidence is medium quality, with few small trials.
- Any medicine name or amount for school refusal or anxiety.
- That keeping a child home "is never right". Real illness and severe mental-health problems are valid reasons, and DfE says so.
- UK attendance law, fines or part-time timetable rules presented as universal.
- That moving house "harms" or "damages" children. The links are small for a single move and observational. Also don't mention psychosis, suicide or crime outcomes from the Danish or ALSPAC cohorts in parent copy.
- That migrant children are more troubled. The findings are mixed.
- That pets make children happier, cleverer or less anxious.
- That losing a pet causes mental illness. Crawford 2021 is a small observational link.
- "Put to sleep", "put down" or "went to a farm" as suggested wording.
- That switching hands causes stuttering, dyslexia or brain damage. None of these is proven. Brain differences ≠ proven harm.
- That switching hands is harmless or helpful. No evidence supports it.
- "Left-handers die younger" or "are cleverer", even as a fun fact.
- That left-handedness is linked to autism, schizophrenia or anything else, in parent copy.
- Any religious ruling on which hand to use for eating or other customs, or any comment on the customs themselves.
- "1 in 10" as exact. Say "about 1 in 10".

## 6. Iran-specific section

**Persian terms for not wanting to go to school**
- «امتناع از مدرسه» (school refusal) is used in Iranian academic work (Hezardastan et al., *Educational Psychology*, Allameh Tabataba'i University, 1400/2022) [opened, abstract page].
- «مدرسه‌هراسی» or «ترس از مدرسه» (school phobia) are older and more common in everyday use [search].
- For EBSA, suggest «دوری از مدرسه به‌خاطر نگرانی و ترس» in parent copy rather than a technical calque.

**Iranian research**
- Hezardastan, Salimi Bajestani, Kalantar Hormozi & Asgari, 1400/2022. A qualitative grounded-theory study: interviews with 7 child specialists and 10 parents or educators of primary-school children with school refusal (data from 2018–19). It found 1 main category with 7 subcategories of characteristics, and 4 categories with 12 subcategories of contributing factors. The authors warn that school refusal can lead to later antisocial behaviour, truancy and dropping out [opened, abstract page; the categories were not listed]. **No Iranian prevalence figure for primary school was found.**
- Shayganfard et al. 2024 (Kermanshah): a small RCT of CBT group play therapy (see §3.1) [abstract].

**School counsellors and helplines**
- «مشاور مدرسه» (school counsellor). Ministry of Education counselling centres («مراکز و هسته‌های مشاوره») were reported in 1400 to offer free counselling, with more than 750 centres [search, Mehr News 2021].
- An education official said they had "only a quarter" of the counsellors needed [search, undated news snippet]. **Primary schools may have no counsellor on site.** Copy should say "ask the school counsellor, or the school's head, or the counselling centre of your local education office" [search-based wording, keep it general].
- **Line 1570** («اورژانس اجتماعی دانش‌آموزی», Ministry of Education, 8am–8pm, for pupils, parents and teachers) [search, news 1394–1400]. **Not verified. Don't add until a test call and an official page confirm it.**
- Already verified for the app (per the brief): **123** social emergency and **1480** Behzisti counselling line. For school-avoidance distress, 1480 is the right referral line.

**Moves**
- Many Iranian families move city for work or study, or move abroad. **Persian copy must not name other countries.** Use «شهر یا کشوری دیگر». I found no Iranian study on children and residential mobility; this is a gap.

**Pets**
- Common in Iran: cats, birds (budgies, canaries), fish and turtles [recall]. Keep pet copy species-neutral and don't comment on dog ownership.
- **The Haft-sin goldfish** («ماهی قرمز سفره هفت‌سین») is often a child's first pet and often dies within weeks. That makes it a natural, gentle first conversation about death.
- Department of Environment officials have repeatedly warned against releasing the fish into rivers or lakes, because they are non-native, breed fast and carry parasites. Some municipalities run collection points [search, news]. **Recheck with an official DoE page before using.**
- Persian euphemisms to avoid in the pet-death copy: «خوابید», «رفت پیش خدا» (as the *only* explanation), «راحتش کردند», «فرار کرد», «رفت مسافرت». Families may add their beliefs *after* the plain fact, as the `someone-has-died` card already says.

**Left-handedness**
- Iranian data: 9.7% left-handed and 11.1% mixed among Qom university students [opened]. About 16% non-right-handed among Tehran secondary students [abstract, garbled].
- Iranian study (Kermanshah): no link between hand preference and stuttering in 83 children aged 3 to 9 [abstract]. **This directly answers a common family worry.**
- **Cultural pressure:** many Iranian families prefer the right hand for eating, and for giving and receiving, as a matter of courtesy and tradition. Some also discourage left-handed writing [recall, unverified; no Iranian study of switching pressure was found]. A Persian news item (Mizan) quotes a psychologist suggesting a "friendly" way of changing a child's hand habit, and warning that force breeds resistance [search]. That shows switching is still discussed as an option.
- **Respectful copy:** customs about the right hand at meals are a family matter. The app gives no ruling and doesn't comment on the custom. It says only what research shows about *writing and skilled tasks*, and suggests that any family custom be taught gently, without punishment or shaming. We found no study about eating hand specifically, and should say so.

## 7. Recommended outlines

Only [opened] or [abstract] facts are used below.

### 7.1 Guide 1 (new): `school-worries-and-avoidance`

- **Title:** When your child doesn't want to go to school
- **Summary:** Tummy aches on school mornings, tears at the gate: why it happens, why staying home can backfire, and how home and school can help together.
- **Age:** 48–144 months. **Shelf:** school.

1. **p:** Most children have mornings when they don't want to go. For some it becomes a pattern, often driven by worry: about leaving you, friends, schoolwork or someone at school. It is most common around starting school (5 to 7) and again at 11 to 14. *(AACAP 2026)*
2. **p, "Signs":** headaches, a sore throat or an upset stomach just before leaving, often asking to stay home, being late, missing lessons, then whole days. It often starts small and builds. *(AACAP 2026; Hertfordshire EP 2021; Li 2021)*
3. **callout safety, "Check the body first":** see your doctor to rule out illness. If nothing is found, the pain is still real: worry can cause tummy aches and headaches. *(Li 2021)*
4. **p, "Why staying home can backfire":** staying home brings quick relief, which makes school feel even scarier next time, so the avoidance grows. Long absences can make going back harder. Acting early is easier. *(Hertfordshire 2021; DfE 2023)*
5. **steps, "On a hard morning":**
   - *Calm yourself first:* get things ready the night before so you can focus on your child.
   - *Name the feeling briefly:* "I can hear you're really worried about today. That's tough."
   - *Ask, don't tell:* "What could help you manage this feeling?"
   - *Keep the message steady:* "We're working on this together, and I know you can do it."
   - *Praise the brave bits:* "You got dressed even though you felt scared. That was brave."
   *(Hertfordshire 2021)*
6. **table, "Tends to help / Tends to backfire":**

   | Tends to help | Tends to backfire |
   |---|---|
   | Listening and naming the feeling once | Arguing, or "you shouldn't be worried" |
   | Asking what would help them cope | Answering the same worried question again and again |
   | Specific praise for brave steps | Long talks about the worry |
   | A clear, short goodbye | Sneaking away |
   | Telling the school early | A sick note to dodge a test |
   | A school-day routine if they are home | Home being more fun than school during school hours |

   *(Hertfordshire 2021)*
7. **steps, "Working with the school":** tell the teacher early. Agree a plan together: a trusted adult who checks in, a quiet place at break, help catching up on missed work, and, if needed, a short reduced timetable with a set end date and regular reviews. *(DfE 2023)* Persian: «مشاور مدرسه» or the head. Generic: "rules and support differ between schools and countries".
8. **p, "If they are at home for a while":** keep getting up at the usual time and dressed. Do schoolwork, sleep well, get outside. Keep school hours for school things and quiet activities, and save screens for after school. Make it routine, not a punishment. *(Hertfordshire 2021)*
9. **callout science:** "A review of 8 small studies (435 children) found that programmes based on CBT, a talking therapy, helped children get back to school more (a moderate effect). On worry scores, they did no better than other therapies. The studies were few and some had flaws, so this is promising, not proof. A specialist's step-by-step return plan works best when family, school and therapist work together." *(Maynard 2015; AACAP 2026)* Persian copy may add: «در کارآزمایی کوچکی در کرمانشاه با ۳۰ پسر دبستانی، بازی‌درمانی گروهی شناختی‌رفتاری نمرهٔ اضطراب را کاهش داد.» *(Shayganfard 2024)*
10. **callout tip, "Look for the reason":** bullying, a friendship falling apart, a learning difficulty that hasn't been spotted, or (for autistic children) changes and noise at school. Ask the school to look with you. *(Hertfordshire 2021; link `friendship-bullying`)*
11. **callout safety:** "See your doctor if it lasts more than a few days or keeps getting worse, if your child seems low or stops enjoying things, or if they are afraid of one particular person. If they talk about harming themselves, get help the same day [Persian: 123 or 115; counselling 1480]." *(AACAP 2026; Hertfordshire 2021)*
12. **Links:** `anxious-children`, `friendship-bullying`, the coach card `drop-off`.

### 7.2 Guide 2 (new): `big-moves`

- **Title:** Moving home, school or country
- **Summary:** Most children settle after a move. What the research says, how to prepare them, and the signs a child is struggling.
- **Age:** 24–144 months. **Shelf:** family.

1. **p:** Moves are common, and most children settle. Older children often find it harder, because friends matter more to them. A move is harder when it comes with other big changes, such as a loss, a separation or money worries. *(AACAP 2017)*
2. **callout science:** "Large studies link moving, especially moving often, and in the pre-teen and teen years, with a little more emotional and behaviour trouble. A review of 64 studies found the link was small to medium, and partly explained by the hard times that often come with moving. In a study of 313,000 New Zealand four-year-olds, moves before age 2 weren't linked at all. These are links, not proof." *(Simsek 2021; Webb 2016; Nathan 2019)*
3. **steps, "Before the move":** explain why you're moving, in simple words. Show the new place with photos or a map, and find things to look forward to. Let them help plan their room. Help them collect friends' contact details. *(AACAP 2017)*
4. **steps, "After the move":** join local activities (clubs, sport, places of worship, community groups). Help them stay in touch with old friends. Where you can, avoid piling other big changes on top. *(AACAP 2017)*
5. **table, "What it can mean by age":**

   | Age | What may be hard | What helps |
   |---|---|---|
   | Under 5 | Leaving familiar people and places, and separating from you | Your closeness and a predictable day |
   | 5 to 8 | Starting a new class, and making new friends | Talking about the new school, and inviting a new friend round |
   | 9 to 12 | Losing a friendship group, and fitting in | Keeping old friends, and joining a club or team |

   *(AACAP 2017, which says young children are still separating and older children feel peer loss more. The "What helps" cells are drawn from AACAP's general list. Reviewer to check that the table doesn't over-reach.)*
6. **p, "A new school":** children who change school can find friendships hard at first and are more exposed to bullying. Ask the new school how they help new pupils settle and make friends, and keep an eye on how break times are going. *(Singh 2014, practical point only)*
7. **p, "A new city or country":** studies of children who move to a new country give mixed results. Family stresses matter more than the move itself: worry about fitting in, struggling with the new language, and a growing gap between the child's ways and the parents' ways. Try to keep your home language and traditions while everyone learns the new ones. Where you can, don't rely on your child to interpret for you in serious matters. *(Belhadj Kouider 2014, 2015)* **Persian:** «شهر یا کشوری دیگر», no country named.
8. **callout safety:** "Watch the first months for changes in appetite or sleep, withdrawing from friends, falling marks, irritability, or other big changes in mood. Some children don't say they're struggling. If it lasts, talk to your doctor." *(AACAP 2017)*
9. **Links:** `school-worries-and-avoidance`, `friendship-bullying`.

### 7.3 Guide 3 (new): `left-handed-children`

- **Title:** Left-handed children
- **Summary:** About 1 in 10 children are left-handed. Why it's fine, what the old switching did, and simple ways to make writing and cutting easier.
- **Age:** 24–144 months. **Shelf:** school.

1. **p:** About 1 in 10 people are left-handed, and more use both hands for some things. Young children often swap hands. A clear preference usually settles over the early school years. *(Papadatou-Pastou 2020; Scharoun & Bryden 2014)* Persian may add: «در پژوهشی روی ۳۷۰ دانشجو در قم، حدود ۱۰ درصد چپ‌دست بودند.» *(Heidari 2015)*
2. **callout safety:** "A baby who clearly prefers one hand before about 12 months is unusual. It can be a sign of weakness on the other side. Mention it to your health worker." *(Nationwide Children's tool, from Novak 2017. Recheck against a second body.)*
3. **p, "Should we switch hands?":** "Not long ago, many schools made left-handed children write with their right hand. There are no trials, and there couldn't ethically be any. But brain scans of adults who were switched as children still show differences decades later. In a study of 1,277 older adults, those who had been pushed to switch, and whose switch didn't take, reported poorer well-being. No study has found that switching helps. The safe choice is to let your child write, draw and use tools with the hand that feels natural." *(Siebner 2002; Klöppel 2010; Porac & Searleman 2002)*
4. **p, "Family customs":** "Many families have customs about using the right hand, for example at meals or when giving and receiving. That is your family's choice. We found no research on which hand children eat with. If you teach a custom, keep it gentle, with no punishment or shaming, and let writing and skilled tasks stay with the hand that works best." *(no source needed beyond the absence of evidence; reviewer and Persian reviewer to check tone)*
5. **steps, "Making writing easier":**
   - *Seat:* on the left of a right-handed neighbour, at the desk and at the table, so elbows don't bump.
   - *Paper:* to the left of the body, tilted to the right (not more than 45°). Move the paper up rather than the arm down. Mark the angle with tape.
   - *Grip:* fingers a little further from the tip (about 2.5 to 3 cm) so they can see what they write, with the wrist and little-finger side resting on the table.
   - *Start point:* a sticker on the left edge shows where to begin.
   - *Smudges:* quick-drying pens help. Praise the effort, not the neatness.
   *(Cambs & Peterborough NHS; West Suffolk NHS OT; RUH Bath NHS OT)* The meal-seating line is an application of the OT advice. Label it as a tip.
6. **callout tip, "Scissors":** left-handed scissors make cutting easier, because with ordinary scissors the blade hides the line. Left-handers usually cut curves clockwise. *(Cambs & Peterborough NHS)*
7. **table, "Myth / What research found":**

   | Myth | What research found |
   |---|---|
   | Left-handers die younger | Most large studies found no difference. The old claim came from older people who had been switched as children and so said they were right-handed. |
   | Being left-handed causes stammering | An Iranian study of 83 children who stammer found their hand preference was no different from other children's. |
   | Left-handers do better, or worse, at school | Two Iranian studies, in Tehran and Qom, found no difference in school results. |
   | Being left-handed is a sign of a problem | On its own, it isn't. It's a normal difference. |

   *(Salive 1993; Cerhan 1994; Aggleton 1994; Mohammadi & Papadatou-Pastou 2020; Alipur 2012; Heidari 2015)*
8. **callout science:** "We don't know whether switching causes stammering or learning problems. No good study has tested it. What we do know is that switching hasn't been shown to help." *(Porac & Searleman 2002; Papadatou-Pastou 2024)*
9. **callout safety:** "If writing stays very slow, painful or hard to read despite practice, ask the school about an occupational therapy assessment." *(Cambs NHS [search] for the referral line. Recheck, or use the opened West Suffolk worksheet context.)*

### 7.4 Pet loss (addition, not a new guide)

**Option A (preferred): a new section in `children-and-animals`, "When a pet dies".** Option B: a short standalone guide `when-a-pet-dies` (36–144 months, feelings shelf) with the same blocks.

1. **p:** "For many children, a pet's death is their first big loss, and they feel it deeply. A UK study of 6,260 children found that those whose pet had died had slightly more emotional and behaviour difficulties a year or so later. That's a link, not proof, but it shows the grief is real." *(Dougy 2023; Crawford 2021)*
2. **steps, "Telling them":**
   - *Plain words:* "Pishi died. Their body stopped working. They can't come back."
   - *Skip the soft words:* not "put to sleep", "put down", "lost" or "ran away". Young children may fear sleep, or think the pet left because of them.
   - *If the vet helped:* "The vet gave a special medicine just for animals so Pishi could die peacefully, without pain."
   - *Expect repeats:* young children may ask the same question many times.
   *(Dougy 2023; KidsHealth 2020)*
3. **list, "Saying goodbye and remembering":** a letter or drawing for the pet; a small ceremony; a painted stone or a photo to keep; talking about funny moments often. Older children can choose whether to be there at the vet, once they know what will happen. *(Dougy 2023; KidsHealth 2020)*
4. **callout tip, "If they feel it was their fault":** "Feeling guilty isn't the same as being guilty. Accidents happen. You loved them, and you didn't mean it to happen." And for younger children: nothing we say, think or wish can make an animal die. *(Dougy 2023)*
5. **p, "Another pet?":** decide as a family, when everyone is ready, and make sure everyone understands it isn't a replacement. *(Dougy 2023; KidsHealth 2020)*
6. **callout science, "Pets and children":** "A review found pets linked with better self-esteem and less loneliness, but the studies were weak. A large UK study that allowed for other differences found little effect on children's emotional health. Pets can bring joy and friendship, but don't expect them to change your child's development." *(Purewal 2017, 2024)*
7. **Link:** the coach card `someone-has-died` for the first words, and its red flags.

**Coach card edit, `someone-has-died`:**
- Add keywords: `'put to sleep'`, `'vet'`, `'pet'`, `'euthanasia'`, `'goldfish'`.
- In the 24–59 band, add to `avoid`: "Saying the pet was put to sleep or ran away."
- In the 60–95 band, add to `say`: "The vet helped [name] die peacefully, without pain."
- Source: Dougy/DoveLewis 2023 [opened].

## 8. Daily tips

| # | Tip | Age (months) | Source |
|---|---|---|---|
| 1 | Tummy aches only on school mornings, gone by Saturday? See your doctor first to check for illness, then talk to the school. Worry can cause real pain. | 60–144 | AACAP 2026; Li 2021 |
| 2 | Staying home to escape a worry brings quick relief, but often makes the next morning harder. Tell the school early and plan small steps back together. | 60–144 | Hertfordshire EP 2021; DfE 2023 |
| 3 | Hard school morning? Name the feeling once: "You're really worried about today." Then ask, "What could help you manage it?" | 60–144 | Hertfordshire EP 2021 |
| 4 | Notice brave moments out loud: "You put your uniform on even though you felt scared. That was brave." Specific praise helps more than reassurance. | 60–144 | Hertfordshire EP 2021 |
| 5 | Ask the school if there's a trusted adult your worried child can check in with, or a quiet place to go at break. | 60–144 | DfE 2023 |
| 6 | Moving soon? Explain why in simple words, show photos or a map of the new place, and let your child help plan their room. | 36–144 | AACAP 2017 |
| 7 | Before moving, help your child collect friends' numbers or addresses. Staying in touch with old friends makes the move easier. | 60–144 | AACAP 2017 |
| 8 | In the months after a move, watch for changes in sleep, appetite, mood or friendships. Some children struggle quietly. If it lasts, talk to your doctor. | 36–144 | AACAP 2017 |
| 9 | When a pet dies, use the word "died". "Put to sleep" or "ran away" can confuse young children or make them afraid of sleep. | 24–144 | Dougy/DoveLewis 2023; KidsHealth 2020 |
| 10 | If the vet helped a pet die, try: "The vet gave a special medicine so they could die peacefully, without pain." | 36–144 | Dougy/DoveLewis 2023 |
| 11 | After a pet dies, let your child draw it, write it a letter or keep a painted stone. Keep telling funny stories about it. | 36–144 | Dougy/DoveLewis 2023; KidsHealth 2020 |
| 12 | Left-handed child? Seat them on the left at the desk and the dinner table, so elbows don't bump a right-handed neighbour. | 36–144 | Cambs & Peterborough NHS; West Suffolk NHS OT |
| 13 | Left-handed writer: put the paper to the left of their body and tilt it to the right. Moving the paper up beats sliding the arm down. | 48–144 | West Suffolk NHS OT; Cambs & Peterborough NHS |
| 14 | Left-handed scissors let a left-handed child see the cutting line. Cutting curves clockwise usually feels easier for them. | 36–144 | Cambs & Peterborough NHS |
| 15 | Let your child write with the hand that feels natural. No study shows switching helps, and some adults who were pushed to switch report poorer well-being. | 36–144 | Porac & Searleman 2002 |

All tips are 30 words or fewer. Tip 12's "dinner table" applies the OT seating advice to meals. Label it in review as practical advice.

## 9. Persian glossary

| English | Persian |
|---|---|
| School refusal | امتناع از مدرسه |
| School phobia (older term) | مدرسه‌هراسی / ترس از مدرسه |
| Emotionally based school avoidance (parent wording) | دوری از مدرسه به‌خاطر نگرانی و ترس |
| Separation anxiety | اضطراب جدایی |
| School counsellor | مشاور مدرسه |
| Trusted adult (at school) | بزرگسال مورد اعتماد در مدرسه |
| Reduced / part-time timetable | برنامهٔ کوتاه‌شدهٔ موقت |
| Talking therapy (CBT) | درمان شناختی‌رفتاری (گفتاردرمانی روان‌شناختی) |
| Tummy ache from worry | دل‌درد ناشی از نگرانی |
| Moving house | اسباب‌کشی / جابه‌جایی خانه |
| Changing school | تغییر مدرسه |
| Moving to another city or country | مهاجرت به شهر یا کشوری دیگر |
| Homesickness | دلتنگی برای خانهٔ قبلی |
| Home language | زبان خانه / زبان مادری |
| Pet | حیوان خانگی |
| Vet | دامپزشک |
| Euthanasia (of an animal) | اتانازی / کمک به مرگ آرام حیوان |
| "Put to sleep" (avoid) | «خواباندن» / «راحتش کردند» |
| Grief | سوگ / غم از دست دادن |
| Memory box | جعبهٔ یادگاری |
| Left-handed | چپ‌دست |
| Right-handed | راست‌دست |
| Uses both hands | دوسوتوان |
| Hand preference / handedness | دست‌برتری |
| Forced switching | اجبار به تغییر دست |
| Left-handed scissors | قیچی مخصوص چپ‌دست‌ها |
| Pencil grip | نحوهٔ گرفتن مداد |
| Occupational therapist | کاردرمانگر |
| Stammering | لکنت زبان |

## 10. Recheck before shipping

1. AACAP "School Refusal" (No. 7, Aug 2026): confirm the [search] lines (older children → friendship, bullying or depression; starts after holidays or illness) before using them.
2. Look for the Sato/Furukawa RCT-only meta-analysis of psychosocial interventions for school refusal (protocol 2026). If it's published, update the science callout.
3. DfE part-time timetable wording: check against "Working together to improve school attendance" (Aug 2024). Keep UK-specific detail out of generic copy.
4. Hand-preference red flag (before 12 months): confirm with a second body (AAP/Noritz & Murphy 2013 full text, or an NHS/RCPCH source), then add to `stages.ts` or the baby milestones if the team wants it there.
5. Alipur & Kalantarian 2012: open the full PDF to confirm the 16% non-right-handed figure (the abstract is garbled).
6. Halpern & Coren 1991: open the full letter to confirm the "about 9 years" figure, or leave the number out of copy (the outline already does).
7. Line 1570 (Ministry of Education): test-call and find an official page before adding. Use 1480 and 123 until then.
8. Department of Environment advice on Haft-sin goldfish: find an official DoE page before using the "don't release" line.
9. Cambs & Peterborough NHS OT referral line ("if practice isn't helping, ask about OT"): open the page section and confirm the wording.
10. Persian reviewer: check the "family customs" paragraph for tone with an Iranian reader, and confirm that no religious framing has crept in.
11. Child psychologist reviewer: check the school-avoidance "helps / backfires" table (especially limiting reassurance and keeping school hours low-key) for any risk with very anxious or autistic children.
12. Paediatric reviewer: check the Guide 2 age table, which is partly extrapolated from AACAP's general advice.

## 11. Sources

| Title | Publisher / journal | Year | URL | Tag |
|---|---|---|---|---|
| School Refusal (Facts for Families No. 7) | AACAP | updated Aug 2026 | https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/School-Refusal-007.aspx | opened (some lines search) |
| Moving: Helping Children Cope (No. 14) | AACAP | updated Oct 2017 | https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Children-And-Family-Moves-014.aspx | opened |
| Psychosocial interventions for school refusal with primary and secondary school students (Maynard et al.) | Campbell Systematic Reviews 11(1) | 2015 | https://ideas.repec.org/a/wly/camsys/v11y2015i1p1-76.html (doi 10.4073/csr.2015.12) | abstract |
| Practitioner Review: School refusal (Elliott & Place) | J Child Psychol Psychiatry | 2019 | PMID 29197106 | abstract |
| A systematic review of somatic symptoms in school refusal (Li et al.) | Psychosomatic Medicine | 2021 | PMID 33951013 | abstract |
| Psychosocial interventions for school refusal: protocol (Sato et al.) | preprint/protocol | 2026 | Europe PMC search result | abstract |
| CBT group play therapy for anxiety-based school refusal (Shayganfard et al.) | Arch Psychiatr Nurs | 2024 | doi 10.1016/j.apnu.2024.03.019 | abstract |
| Emotionally Based School Avoidance: Guide for Parents | Hertfordshire County Council, Educational Psychology | 2021 | https://www.hertfordshire.gov.uk/microsites/Local-Offer/Media-library/Documents/Emotionally-Based-School-Avoidance-Parent-guidance-PDF-642kb.pdf | opened |
| Summary of responsibilities where a mental health issue is affecting attendance | UK Department for Education | Feb 2023 | https://assets.publishing.service.gov.uk/media/63ee20a3d3bf7f62e5f76ba4/Summary_of_responsibilities_where_a_mental_health_issue_is_affecting_attendance.pdf | opened |
| EBSA guidance (West Sussex EPS) | West Sussex County Council | 2018 | https://www.westsussex.gov.uk/education-children-and-families/childrens-mental-health-and-emotional-wellbeing/information-for-school-and-college-staff/emotionally-based-school-avoidance/ | search |
| College calls for suspension of fines… | RCPsych in Wales | 2020 | https://www.rcpsych.ac.uk/members/devolved-nations/rcpsych-in-wales/wales-news/detail/2020/08/25/college-calls-for-the-suspension-of-fines-for-children-who-can't-attend-school | search |
| طراحی مدل مفهومی امتناع از مدرسه دانش‌آموزان دوره ابتدائی (Hezardastan et al.) | Educational Psychology, Allameh Tabataba'i Univ. | 1400/2022 | https://jep.atu.ac.ir/article_14797_en.html | opened (abstract page) |
| Line 1570 / counselling centres news | Mehr News, Eghtesad Online | 1394–1400 | https://www.mehrnews.com/news/5309368/ | search |
| Residential mobility in childhood and health outcomes: a systematic review (Jelleyman & Spencer) | J Epidemiol Community Health | 2008 | PMID 18559440 | abstract |
| Childhood residential mobility and health outcomes: a meta-analysis (Simsek et al.) | Health & Place | 2021 | PMID 34428708 | abstract |
| Adverse outcomes to early middle age linked with childhood residential mobility (Webb et al.) | Am J Prev Med | 2016 | PMID 27288289 | abstract |
| Changing neighborhood income deprivation, moving in childhood, adult depression (Sabel et al.) | JAMA Psychiatry | 2024 | PMID 39018054 | abstract |
| Residential mobility and SEB difficulties in NZ preschoolers (Nathan et al.) | J Epidemiol Community Health | 2019 | PMID 31315898 | abstract |
| School mobility and pathways to psychotic-like symptoms (Singh et al.) | JAACAP | 2014 | PMID 24745952 | abstract |
| Emotional and behavioral problems in migrant children in Europe (Belhadj Kouider et al.) | Eur Child Adolesc Psychiatry | 2014 | PMID 24132833 | abstract |
| Emotional and behavioral problems in migrant children in American countries (Belhadj Kouider et al.) | J Immigr Minor Health | 2015 | PMID 24851820 | abstract |
| After the death of a pet or companion animal | Dougy Center & DoveLewis | 2023 | https://www.dougy.org/assets/uploads/DoveLewis-Dougy-Center_After-the-death-of-a-companion-animal.pdf | opened |
| When a Pet Dies | Nemours KidsHealth | reviewed Jun 2020 | https://kidshealth.org/en/parents/pet-death.html | opened |
| The mental health effects of pet death during childhood (Crawford et al.) | Eur Child Adolesc Psychiatry | 2021 | PMID 32910227 | abstract |
| Grieving the loss of a pet: qualitative systematic review (Cleary et al.) | Death Studies | 2022 | PMID 33881389 | abstract |
| Companion animals and child/adolescent development: systematic review (Purewal et al.) | IJERPH | 2017 | PMID 28264460 | abstract |
| Companion animals and child development outcomes, ALSPAC (Purewal et al.) | BMC Pediatrics | 2024 | PMID 39272016 | abstract |
| Socio-demographic factors and pet ownership in adolescents (Purewal et al.) | BMC Vet Res | 2019 | PMID 31533719 | abstract |
| Haft-sin goldfish release warnings | Hamshahri, Etemad and other news | various | https://www.hamshahrionline.ir/news/163497 | search |
| Human handedness: a meta-analysis (Papadatou-Pastou et al.) | Psychological Bulletin | 2020 | PMID 32237881 | abstract |
| Hand preference, performance abilities, and hand selection in children (Scharoun & Bryden) | Front Psychol | 2014 | PMID 24600414 | abstract |
| Is strength of handedness reliable over repeated testing? (Scharoun & Bryden) | Front Psychol | 2015 | PMID 25691875 | abstract |
| Early diagnosis and intervention guidelines for cerebral palsy (clinical tool) | Nationwide Children's Hospital | c. 2017 | https://www.nationwidechildrens.org/-/media/nch/for-medical-professionals/practice-tools-new/early-diagnosis-and-intervention-guidelines-for-cerebral-palsy.pdf | opened |
| Early, accurate diagnosis and early intervention in cerebral palsy (Novak et al.) | JAMA Pediatrics | 2017 | PMID 28715518 | abstract |
| Cerebral palsy: symptoms | NHS | reviewed May 2023 | https://www.nhs.uk/conditions/cerebral-palsy/symptoms/ | opened |
| Long-term consequences of switching handedness: PET study (Siebner et al.) | J Neurosci | 2002 | PMID 11923446 | abstract |
| Nurture versus nature: forced right-handedness and brain structure (Klöppel et al.) | J Neurosci | 2010 | PMID 20203186 | abstract |
| Hand preference side and switch history: well-being in older adults (Porac & Searleman) | Neuropsychologia | 2002 | PMID 12208004 | abstract |
| Attempts to switch the writing hand (Porac) | Laterality | 1996 | PMID 15513027 | abstract |
| Cross-cultural comparison of pressures to switch left-hand writing (Porac & Martin) | Laterality | 2007 | PMID 17454576 | abstract |
| Handwriting kinematics in converted left-handers relearning (Stetter et al.) | Sci Rep | 2023 | PMID 36750597 | abstract |
| Handedness and life span (Halpern & Coren) | NEJM | 1991 | PMID 2002827 | recall, unverified (no abstract) |
| Left-handedness and mortality (Salive et al.) | Am J Public Health | 1993 | PMID 8427338 | abstract |
| Handedness and mortality risk in older women (Cerhan et al.) | Am J Epidemiol | 1994 | PMID 8059772 | abstract |
| Handedness and longevity: archival study of cricketers (Aggleton et al.) | BMJ | 1994 | PMID 7819983 | abstract |
| Handedness and mortality: Danish twins (Basso et al.) | Epidemiology | 2000 | PMID 10955411 | abstract |
| Innate handedness and disease-specific mortality in women (Ramadhani et al.) | Epidemiology | 2007 | PMID 17202907 | abstract |
| Cerebral laterality by hand preference and developmental stuttering (Mohammadi & Papadatou-Pastou; Kermanshah UMS) | Laterality | 2020 | PMID 31144576 | abstract |
| Hand preference in stuttering: meta-analyses (Papadatou-Pastou et al.) | Neuropsychol Rev | 2024 | PMID 37796428 | abstract |
| Handedness in mental and neurodevelopmental disorders: second-order meta-analysis (Packheiser et al.) | Psychological Bulletin | 2025 | PMID 40310231 | abstract |
| ارتباط دست برتری و پیشرفت تحصیلی دانشجویان دانشگاه‌های دولتی قم (Heidari et al.) | Iranian J Medical Education (Isfahan UMS) 15(59):475–480 | 1394/2015 | https://ijme.mui.ac.ir/article-1-3858-fa.pdf | opened |
| Relationship between handedness and academic achievement in secondary students (Alipur & Kalantarian) | J School Psychology (Univ. Mohaghegh Ardabili) | 2012 | https://jsp.uma.ac.ir/article_18.html | abstract (garbled figure) |
| کودکان چپ‌دست را مجبور به «راست‌دستی» نکنید | Mizan Online (news) | n.d. | https://www.mizanonline.ir/fa/news/136035/ | search |
| Handwriting and typing (left-handed advice) | Cambridgeshire & Peterborough NHS children's health | n.d. | https://cambspborochildrenshealth.nhs.uk/child-development-and-growing-up/hand-skills/handwriting-and-typing/ | opened |
| Scissor skills | Cambridgeshire & Peterborough NHS children's health | n.d. | https://cambspborochildrenshealth.nhs.uk/child-development-and-growing-up/hand-skills/scissor-skills/ | opened |
| Worksheet G: Handwriting | West Suffolk NHS FT Paediatric OT | c. 2021 | https://www.wsh.nhs.uk/CMS-Documents/Services/Integrated-Community-Paediatric-Services-OT/g.-Handwriting.pdf | opened |
| Handwriting (activities for home) | Royal United Hospitals Bath NHS FT Children's Therapies | Apr 2023 | https://www.ruh.nhs.uk/patients/services/childrens_therapies/documents/activities_for_home/Handwriting.pdf | opened |
