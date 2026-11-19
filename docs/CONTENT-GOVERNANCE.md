# How PlayNest content is made and checked

This is PlayNest's content-governance policy. It says where the guidance in the app comes from, how it is written, who checks it, how
often it is reviewed and how mistakes are fixed. It is meant for the team, for reviewers, and for any health service deciding whether
to recommend the app. It is based on what health systems ask of information products: NICE's Evidence Standards Framework (tier B),
the UK Patient Information Forum's PIF TICK criteria, the NHS DTAC, and WHO's guidance on digital health. The research behind it is in
`research_notes/PlayNest phase 9 research round 6/06_governance_and_open_checks.md`.

**Where we are today.** Rules 1, 3, 4 and 9 are already followed and partly enforced by tests. Rules 2, 5 (clinical review and user
testing), 6, 7 and 10 are not in place yet: **no clinician, psychologist or Persian-speaking reviewer has signed off any content.** The
checklists for that review are in [REVIEW-1.5.md](REVIEW-1.5.md) §8–12.

## 1. What PlayNest is, and is not

PlayNest gives parents of children aged 0 to 12 general, evidence-based information, in English and Persian. It works offline and
keeps everything on the device.

It does not diagnose, triage, score, calculate doses or give personal medical advice. This is a hard line, not a preference: software
that informs a diagnosis or treatment for a person becomes a medical device in the EU, the UK and elsewhere (MDCG 2019-11). Any
proposed feature that computes a verdict about a child (a "delay" result from milestones, a symptom score, a growth z-score label, a
dose or rehydration calculator) is rejected or escalated to the content lead and a clinical reviewer before any work starts. Milestone
and goal screens list signs and always end in "talk to your health worker"; they never say what a child has.

## 2. Who is accountable

- **Content lead:** one named person responsible for what ships. *(To be named.)*
- **Reviewers by field**, each with role, qualification, affiliation and a dated declaration of interests: paediatrics; nursing,
  midwifery or health visiting; child psychology; nutrition; first aid and resuscitation; and Persian language. *(To be appointed.)*
- In Iran, the realistic route is content endorsement or a named reviewer from a university of medical sciences or a Ministry of Health
  office (child health, or mental health for helpline content), not a licence. No Iranian licensing scheme for information apps was
  found; written confirmation that none is needed is still to be sought.

## 3. Sources, in order of preference

1. WHO and UNICEF guidelines and fact sheets.
2. For Persian copy: Iran's Ministry of Health national programmes (well-child care «مراقبت‌های ادغام‌یافته کودک سالم», the sick-child
   programme «مانا», the national immunisation guideline, the rabies guideline), through behdasht.gov.ir or university health deputies.
3. National bodies (NHS, NICE, UKHSA, CDC, AAP, RCPCH, Canadian Paediatric Society, RCH Melbourne) and Cochrane reviews.
4. Peer-reviewed studies, with the design stated (trial, cohort, survey).
5. Expert opinion, labelled as such.

Never a source: commercial sites, forums, social media, or AI-generated text. AI tools may help find, summarise and translate sources;
every fact that reaches the app is checked against the source itself, and research notes record how each was seen: **opened**,
**abstract**, **search-only** or **unverified**. Search-only and unverified facts do not go into the app.

## 4. How evidence is worded

The same phrases are used in both languages, so a parent can tell how strong a claim is:

| Evidence | English | Persian |
|---|---|---|
| Trials or reviews of trials | "Trials show…", "In a trial…" | «در کارآزمایی‌ها…» |
| Observational studies | "…is linked with…", "a link, not proof" | «با … ارتباط داشت» |
| Guidelines without trials | "Experts advise…" | «متخصصان توصیه می‌کنند…» |
| Unknown or disputed | "We don't know yet", "Bodies differ: X says…, Y says…" | «هنوز نمی‌دانیم»، «نظرها فرق دارد» |

House rules, all enforced in review and some by tests:

- **No medicine or supplement amounts, ever** (a test checks every guide, tip, goal, card and the Persian translations for dose
  patterns). Amounts change (WHO lowered zinc in 2024) and depend on weight and product. The only exceptions are first-aid steps from
  a national body (honey for a swallowed button battery) and a warning about decimal points.
- Every red flag sends the parent to a professional or the emergency number.
- Where bodies disagree, the copy says so and takes the cautious path.
- No number from a study is borrowed to describe the app's own games or goals.
- **Name the population** when a study's sample differs from ordinary families: stunted toddlers, adults, mostly one country,
  lower-income families. Round 7's audit found four claims where the population had been dropped in paraphrase.
- **Famous findings come with their repeats.** A claim that rests on one lab paradigm or one small study says whether larger
  studies agreed (the bilingual advantage and praise for intelligence did not replicate; round 7 corrected both).
- Red flags never say "it's probably worry" or "it's probably a bug" for a pattern a body lists as a warning sign (morning
  headaches, new wetting with thirst). The body is checked first.
- Every guide with a "science" box says what we don't know.
- No guilt, no blame, no comparison between children; "they" for any child or parent; British English at a reading age of about 9 to 12.
- Traditions are treated with respect and changed only where evidence shows harm. No religious rulings. Political neutrality: no
  sides, enemies, dates or places in content about conflict.
- First-aid cards follow one named body per region and say which.

## 5. How a piece of content is made

1. **Research note**, with every fact tagged and every source listed, plus "claims the app must not make".
2. **Draft** in English, from the note only.
3. **Source check:** each claim mapped to a reference in the guide's `refs`; `checkedOn` set.
4. **Automated checks:** unit tests (structure, sources, banned dose patterns, emoji, goal and card limits) and the Persian checker.
5. **Clinical review** by the right reviewer, using the checklist in REVIEW-1.5.md. *(Not yet done for any round.)*
6. **Persian translation**, which may add Iran-specific material (national programmes, local risks, Iranian help lines). Each
   addition is sourced like any other claim.
7. **Back-check of the Persian against the English** by a second bilingual reader, line by line for first-aid cards, crying, crisis
   content and helplines.
8. **Plain-language pass**, then **user testing** with parents, including rural and low-literacy families, fathers and grandparents.
   *(Not yet done.)*
9. **Sign-off** by the content lead, recorded in the change log.

## 6. Review cycle

- Every guide carries `checkedOn` today. To add: `reviewedBy` (role, month and year) and `nextReview`, shown on the page as
  "Reviewed by a paediatrician, March 2027".
- Guides: reviewed at least every 12 months.
- First-aid cards, helplines, vaccine and supplement schedules: every 6 months, and whenever a source body publishes new guidance
  (for example the 2025 resuscitation guidelines).
- Helplines: a test call before a number is added, and at every review.
- Each round ends with a currency audit of the high-stakes content against the newest guidance, as round 6 did
  (`07_currency_audit_high_stakes.md`), and with an audit of the research claims (numbers, "trials show", famous studies), as
  round 7 did (`02_evidence_integrity_audit.md`).
- Every research note checks the existing guides on its topic and lists what it found wrong as P1 (could cause harm), P2 (wrong
  or misleading) or P3 (wording). Round 7's notes found no P1 and 20 P2 items, all fixed in release 2.0.

## 7. Reporting a problem

- An in-app "Report a problem with this page" link that opens an email or form; nothing is sent automatically. *(To be built.)*
- Every report is acknowledged. A safety-critical error (first aid, an emergency number, an age threshold, a red flag) is fixed in the
  next release or the content is pulled until it is.

## 8. Change log

Each release records what changed, why, which source, and who reviewed it: the RESEARCH-*.md summaries and REVIEW-1.5.md sections do
this today, and git keeps every earlier version. Corrections to earlier rounds are stated openly (for example, round 5 corrected a
trial figure quoted in round 3's notes; round 6 corrected the fever table).

## 9. Money and interests

No adverts, no product placement, no sponsored content, no brand names for medicines or supplements. Reviewers declare interests. Any
funding will be disclosed in the app's About page.

## 10. Privacy

Everything a parent enters (a child's name, birthdate, notes, photos) stays on the device. There are no accounts, analytics or
third-party SDKs. Parents can export, restore and delete their data in Settings, and the app should say plainly that phone backups may
copy it. This keeps the app outside most children's-data obligations (GDPR, COPPA, the UK Age Appropriate Design Code), but the
privacy statement should still be written in both languages. Iran's personal data bill was not yet law when checked.

## 11. Proving it helps

Before asking any health service to recommend PlayNest: a small pilot with one health centre or university department, measuring use,
parents' own ratings of usefulness and confidence, and any problems found, with the results published.
