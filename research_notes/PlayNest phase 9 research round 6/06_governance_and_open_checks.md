# 06 — Governance: what health systems look for, and the open checks from REVIEW-1.5 §11

Research notes for PlayNest phase 9, round 6. Researched 17 Nov 2026.

## Scope

- **Part 1:** what health systems and quality schemes require of a parenting or health-information app, condensed so a
  small team can act on it. It covers NICE ESF, NHS DTAC, PIF TICK, HONcode, ORCHA, WHO digital-health guidance and
  ParentText, where the medical-device line sits (EU, UK, US), children's data, readability, and Iran (Ministry of Health,
  IR FDA, data law, endorsed apps). It ends with a proposed outline for a PlayNest content-governance document.
- **Part 2:** the six verification tasks carried over from [REVIEW-1.5.md](../../docs/REVIEW-1.5.md) §11 "Before release":
  rotavirus and the national schedule, 190 extension 9, the Chaharshanbe Suri 1403 release, self-referral to
  learning-difficulty centres, honey, and the supplement schedule.
- This builds on round 4 note 05 §2.3–2.4 (`PlayNest phase 7 research round 4/05_global_frameworks_and_iran.md`), which
  already read NICE ESF in full, the MHRA software page and WHO 2019. Those findings are only summarised here and keep
  their round-4 tags.
- Nothing under `src/` was edited.

## How to read these notes

- **[opened]**: I opened the page, PDF or abstract record myself. The publisher and date are given.
- **[opened, partial]**: I opened the file, but only part of the text could be extracted. This happened with Persian PDFs
  whose fonts have no Unicode map, so only Latin letters and digits came out. What I could read is stated.
- **[abstract]**: the journal abstract only, read through the Europe PMC API.
- **[search]**: a search-result snippet or search summary only. Recheck before shipping.
- **[recall, unverified]**: background knowledge I did not confirm this session.
- **[round 4, opened]**: opened in round 4 note 05 and not reopened this round.

**Access problems this round**

- **nice.org.uk now works.** The ECD7 page returned 200 (it returned 403 last round). I confirmed "Published 10 December 2018,
  last updated 09 August 2022" on the page.
- **ico.org.uk:** 403 on the Children's code guidance page. The children's-data section is therefore recall.
- **transform.england.nhs.uk** (the old DTAC home) did not respond. A search snippet says the site was retired on 31 March 2026.
  I used NHS Innovation Service news instead.
- **behdasht.gov.ir:** returns a JavaScript bot challenge (TSPD) to curl. Search engines index it, but I could not open any
  page. **No item in Part 2 could be confirmed on a behdasht.gov.ir page.**
- **fda.gov.ir:** no response. **medu.ir:** redirect, not followed.
- **ems.gov.ir (Emergency Organisation)** works, but its news archive starts around 1404/08. News id 50 is dated 1404/08/17,
  so **the 1403 Esfand releases are no longer on the site** (§2.3).
- **Persian PDFs from university health deputies**, including the 1403 national immunisation guideline (TUMS and SBMU copies),
  the TUMS well-child booklet, the SBMU and Fouman supplement leaflets, and the Shemiranat and Rasht vaccine pamphlets:
  - All downloaded, but pdftotext output contains **no Persian characters**. The fonts carry no ToUnicode map, and NFKC
    normalisation did not help.
  - Only Latin abbreviations (BCG, PCV, Rota and so on) and digits came through.
  - WebFetch also returned raw binary.
  - The Read tool cannot render PDF pages here because pdftoppm is missing.
  - **Fix for next round:** install poppler's pdftoppm (or similar) and read the table pages as images, or ask an Iranian
    colleague for a screenshot.
- **Word files (.docx) from Iranian universities extracted perfectly** (unzip, then strip the XML tags). Prefer .docx hits for
  Persian facts.
- **sums.ac.ir:** a redirect loop from ArvanCloud's cookie check (WebFetch error; curl got nothing). nihr.tums.ac.ir needed a
  cookie jar.
- **Budget:** 28 web searches plus about 20 page fetches. Not searched: Behzisti apps, the ICO code, WHO guidance specific to
  digital parenting, Malaysian and Philippine ParentText trials, and the IR FDA medical-device software rules (one search
  found nothing Iranian).

---

## Part 1 — What health systems require

### 1. NICE Evidence Standards Framework (ECD7)

- **[opened]** The ECD7 page shows "Published: 10 December 2018. Last updated: 09 August 2022". Sections: A (technologies in
  scope), B (classification), C (evidence-standards tables).
- **[round 4, opened] Tiers and where PlayNest sits:**
  - **Tier A:** system services.
  - **Tier B:** communicating about health, health and care diaries, **"Promoting good health"** (non-personalised
    information and resources that may encourage healthy behaviour).
  - **Tier C:** informs or drives clinical management, treats, diagnoses.
  - **PlayNest today is tier B.** Symptom-to-action logic, scoring, or tracking shared with clinicians would move it toward C.
- **[round 4, opened] The standards that matter for tier B:**
  - 1: safety and quality standards.
  - 2: involve intended users, plus usability and accessibility.
  - 4: health inequalities.
  - 5: good data practice.
  - 6: the level of professional oversight.
  - **7: reliable health information:** valid, accurate, **reviewed and updated by relevant experts at defined intervals
    "such as every year"**, comprehensive.
  - **8: credible with professionals.**
  - 9: safeguarding.
  - 10–13: intended purpose, population, pathway, impact.
  - 15: real-world evidence from a pilot.
  - 16: an evidence-generation plan.
- **What a small team should act on:** standard 7 (named expert review at a fixed interval), standard 8 (professionals
  involved and named), standard 2 (documented user testing) and standard 15 (a small pilot). Those four are achievable without
  a trial.

### 2. NHS DTAC

- **[opened]** NHS Innovation Service news (4 Mar 2026): NHS England published an **updated DTAC form and guidance**.
  - "25% reduction in questions".
  - De-duplicated with the Data Security and Protection Toolkit and the pre-acquisition questionnaire.
  - Scope "aligned with NICE", focusing on "software-based digital health technologies".
  - The old form was retired, with full transition by **6 April 2026**.
  - The page does not list the new sections.
- **[search]** Earlier DTAC had five areas: **clinical safety** (DCB0129 for manufacturers), **data protection**, **technical
  security**, **interoperability**, and **usability and accessibility** (scored separately). Commentators call the 2026 form
  "v2". NHS England plans a further update once the DCB0129/DCB0160 review ends.
- **What it means for PlayNest:**
  - DTAC is a **procurement gate for NHS organisations** buying or recommending a tool. It is not a public-facing badge.
  - It becomes relevant only if a UK NHS body wants to recommend PlayNest.
  - Its logic (a named clinical-safety officer, a hazard log, a data-protection impact assessment, an accessibility
    statement) maps well onto any health-system review, including Iran's.
  - **[recall, unverified]** DCB0129 asks for a clinical risk management plan, a hazard log and a clinical safety case signed
    by a registered clinician (the Clinical Safety Officer).

### 3. PIF TICK (Patient Information Forum, UK)

**[opened]** *PIF TICK criteria at a glance*, reviewed October 2024 (PDF hosted by SMA UK). There are ten criteria.

1. **Systems:**
   - a designated accountable person;
   - a documented production process;
   - version control and archiving;
   - **conflicts of interest identified and recorded with the action taken**;
   - a sign-off process;
   - **the process itself reviewed annually**;
   - **a process for reviewing and updating information within appropriate timeframes**;
   - **AI use in production clearly documented**.
2. **Training:** staff are trained in the process and kept up to date.
3. **Need:** why the resource exists, who it is for, which format, and cross-organisational consultation.
4. **Evidence:**
   - up-to-date, trustworthy sources, recorded and referenced;
   - **appropriate experts or health professionals involved**;
   - **risks and benefits communicated in an accurate, balanced, unbiased way**;
   - signposting to further help and local services.
5. **Involving users:** users involved at appropriate stages, including diverse groups, and **user testing with everyone who
   may use the resource** (patients, carers, professionals).
6. **Health inequalities:** health literacy, digital inclusion, accessibility, inclusive language, and **translation and
   cultural adaptation considered**.
7. **Transparency and legal:**
   - **the authoring organisation clearly identifiable, with contact details**;
   - consent for personal stories;
   - compliance with regulations (including GDPR).
8. **Feedback:** a process to **seek, record and act on feedback, complaints or inaccuracies**.
9. **Dissemination:** a plan.
10. **Impact:** monitor and evaluate whether the resource met its objectives.

Two points not in the at-a-glance sheet:

- **[search]** Certification needs an **independent annual assessment**. PIF reviews the criteria every two years.
- The at-a-glance sheet does **not** require named individual authors on each resource. It requires an identifiable
  organisation, an accountable person and expert involvement.

**Takeaway:** PIF TICK is the closest ready-made checklist for PlayNest's content side. Criterion 1 includes an AI-use line,
which matters if AI helps draft content.

### 4. HONcode

- **[search]** Health On the Net Foundation was **permanently discontinued on 15 December 2022**. Its site carried a notice
  from September 2022 saying it could no longer be maintained. HONcode certification ended with it.
- Do not mention HONcode except as history.
- **[recall, unverified]** Its eight principles (authority, complementarity, confidentiality, attribution, justifiability,
  transparency, financial disclosure, advertising policy) remain a useful self-check.

### 5. ORCHA

- **[search]** The ORCHA Baseline Review (OBR) has **350+ questions** in three scored areas:
  - **professional and clinical assurance**;
  - **data and privacy**;
  - **usability and accessibility (UX)**.
- **[search]** Each area is scored 0–100. **65 is the NHS-agreed threshold**, set with NHS partners in 2020, for staff to use or
  recommend an app.
- **[search]** In a JMIR mHealth 2023 study of 1,574 apps reviewed under OBR v6:
  - clinical assurance averaged 49.6, privacy 65.1 and UX 75.2;
  - 57.3% of apps fell below 65.
  - **Clinical assurance is where most apps fail.** For an information app that usually means no named clinical
    reviewer and no evidence base.
- **[round 4, search]** The Welsh and Northern Irish NHS app libraries use ORCHA reviews.

### 6. WHO and UNICEF

- **[round 4, opened] WHO 2019, *Recommendations on digital interventions for health system strengthening*.**
  - Targeted client communication to parents of under-5s is recommended **only "in specific contexts or conditions"**:
    "potential concerns about sensitive content and data privacy can be addressed".
  - One study suggested such messaging may have increased violence against women. Design for a shared phone (a discreet
    name and neutral notifications).
- **[search] WHO *Classification of digital interventions, services and applications in health*, 2nd edition** (WHO news, 7 Nov
  2023; ISBN 978-92-4-008194-9).
  - Four groups by primary user: **Persons**, healthcare providers, health management and support personnel, data services.
  - "Systems categories" were reworked into "services and application types". An equity category was added.
  - **PlayNest sits in "Persons"**, under on-demand access to health information and untargeted communication. Exact codes were
    seen only in a SMART Base mirror, so **check the numbering in the PDF** before quoting codes in a proposal.
- **ParentText (Parenting for Lifelong Health, Oxford, with UNICEF and WHO partners):**
  - **[round 4, opened]** Engagement: fewer than 1 in 5 users were still active on day 7 at two of three sites. In ParentApp
    Tanzania, 7.9% completed all 12 modules.
  - **[search]** A 2025 pilot in South Africa and Jamaica (*JMIR Formative Research*) found "promising yet modest" reductions in
    intimate-partner violence and better attitudes. The authors say an RCT is needed.
  - **[search]** A South African optimisation trial (1,009 enrolled; 744 completed onboarding) and an evaluation trial are
    under way (Oxford SPI page). An RCT of "ParentText for Crisis" is registered for Palestinian families in Jerash camp, Jordan
    (NCT07494786).
  - No published effectiveness RCT was found.
  - **How it was evaluated:** the MOST optimisation framework (factorial trials of components), then RCTs, with engagement
    measured from message logs. **[recall, unverified, partly round 4]**
  - **Lesson:** even WHO-linked digital parenting tools are endorsed on the strength of a **published evaluation plan, a pilot
    and open reporting of engagement**, not efficacy alone.
- **Not found this round:** standalone WHO guidance on digital parenting or ECD apps (not searched separately). The 2020 WHO ECD
  guideline (round 4 §1.2) recommends responsive-caregiving support but does not set app standards.

### 7. The medical-device line: why PlayNest stays on the information side

- **[opened] EU: MDCG 2019-11 (Oct 2019; Rev.1 June 2025 exists but was not opened).**
  - "Not all software used within healthcare is qualified as a medical device. For example, 'Simple search', which refers to the
    retrieval of records ... or to the retrieval of information does not qualify ... (e.g. library functions)."
  - Decision step 3: software that does nothing beyond "storage, archival, communication, simple search, lossless compression"
    is not medical device software.
  - Software that **processes, analyses, creates or modifies** information for a medical purpose may be a device.
  - "E-mailing, web or voice messaging, data parsing, word processing, and back-up" have no medical purpose by themselves.
  - **Rule 11:** software "intended to provide information which is used to take decisions with diagnosis or therapeutic
    purposes" is **class IIa** at minimum, so any qualifying device software goes straight past class I.
  - **[search]** Rev.1 (June 2025) adds examples separating device software from wellness or lifestyle apps.
- **[round 4, opened] UK: MHRA.**
  - Apps giving "tips or advice", patient education, or referral advice ("see your GP") are unlikely to be devices.
  - **Dose calculators, symptom tracking with interpretation, and outputs that match or rank conditions** are likely devices.
  - A "not a medical device" disclaimer does not help if medical claims are made anywhere, including store text.
- **[search] US: FDA *General Wellness: Policy for Low Risk Devices*** was revised on **6 January 2026**, replacing the 2019
  version.
  - Two-factor test: intended only for general wellness, and low risk.
  - The change mostly concerns non-invasive sensing (wearables).
  - **[recall, unverified]** Under the 21st Century Cures Act software carve-outs, software that only provides general patient
    education is not a device.
- **Why it matters for PlayNest:**
  - Crossing into "device" means class IIa conformity assessment in the EU (a notified body) or equivalent in other countries.
    That is far beyond a small team.
  - **The features that cross the line are the ones to refuse:** dose calculators, symptom checkers that rank causes or triage,
    milestone checklists that output "possible delay", growth-chart z-score verdicts, and fever or dehydration scoring.
  - Lists of signs with "talk to your health centre if…" stay on the information side.

### 8. Children's data (an offline app storing a birthdate and notes on the device)

- **[recall, unverified]** Throughout this section:
  - **UK Age Appropriate Design Code (Children's code):** applies to "information society services likely to be accessed by
    children". PlayNest targets parents, but children may use a parent's phone.
    - Relevant standards: high-privacy defaults, data minimisation, no nudging, no profiling, geolocation off, and
      child-friendly privacy information.
    - An offline app that sends nothing meets most of these by design. Say so explicitly in the privacy notice.
  - **GDPR:**
    - A child's health-related notes could be special-category data (Art. 9).
    - If **data never leaves the device and the developer cannot access it**, the developer is arguably not a controller of
      that data. This is the strongest privacy position available.
    - It weakens if the app adds crash reporting, analytics, cloud sync or an export that uploads.
    - OS-level backups (iCloud or Google) are the user's choice but should be mentioned.
    - Art. 8 (the age of consent of 13–16 for information-society services offered directly to a child) does not apply to a
      parent-facing app.
- **[search] COPPA (US):** the amended rule took effect **23 June 2025**, with compliance required by **22 April 2026**
  (Federal Register, 22 Apr 2025).
  - COPPA covers operators of child-directed online services that **collect personal information from children under 13
    online**. **[recall, unverified]**
  - An offline, parent-directed app that transmits nothing collects nothing in COPPA's sense. Keep it that way: no SDKs, no ad
    IDs.
- **Practical rule:** "nothing leaves this phone" is both the privacy promise and the compliance strategy. Any future
  networking feature (backup, sync, analytics) needs a fresh legal review first.

### 9. Health literacy and readability

- **[opened] PIF *Reading age position statement*** (published March 2025, review March 2028).
  - "Aim for a reading age of **9–11**."
  - Half of adults in England have literacy "at or below primary school leaver levels". Health literacy drops under stress.
  - Readability tools (Hemingway, the NHS Medical Document Readability tool) "cannot tell you if text is appropriate, usable or
    logical". Work with users too.
- **[search]** US: AMA and NIH guidance is commonly quoted as **no higher than 6th grade**. Sources vary between 5th–6th and
  6th–8th.
- **[abstract] Mac et al., *J Gen Intern Med* 2025, "The Readability Study":**
  - An Australian online RCT, n=2,235, with text written at grade 8, 10, 12 or 14 (SMOG).
  - **No difference in knowledge, acceptability or trust** across grade levels. Low health literacy did not modify the effect.
  - The authors conclude there is "limited value in reducing grade reading level without attention to other health literacy
    principles".
- **For PlayNest:**
  - English: aim for reading age 9–11 as a house target, but test with parents, as PIF says.
  - Persian: no validated Persian readability formula was checked this round. Rely on user testing with low-literacy and rural
    Iranian parents, and on short sentences, everyday words («تب» not «هیپرترمی»), and one instruction per line.

### 10. Iran: regulation, endorsement, data law

- **No Iranian framework for licensing health-information apps was found.**
  - Searches for IR FDA (سازمان غذا و دارو) software-as-medical-device rules returned only non-Iranian sources **[search]**.
  - **[recall, unverified]** Medical devices are registered by IR FDA's «اداره کل تجهیزات و ملزومات پزشکی» under the medical
    device regulations, and standalone software with a medical purpose would fall there.
- **Telemedicine apps are being licensed; information apps are not clearly covered.**
  - **[opened]** Zoomit, 8 Mordad 1405:
    - The Ministry's Treatment Deputy (معاونت درمان) declared unlicensed **telemedicine intermediary** platforms illegal (Snapp
      Doctor, Zoop, Paziresh 24 and others).
    - The letter was addressed to the head of «**مرکز مدیریت آمار و فناوری اطلاعات**» and asks for "صدور مجوز و اعمال نظارت".
    - It concerns platforms that broker doctor–patient services. Whether pure information apps are covered is not stated.
  - **[opened]** Zoomit, 7 Azar 1402: a draft «آیین‌نامه ضوابط اپراتورهای سلامت الکترونیک» under Article 69 of the **Seventh
    Development Plan**.
    - The Ministry of Health licenses "e-health operators" through a call and evaluation.
    - Health-data flows follow «قانون مدیریت داده‌ها و اطلاعات ملی».
    - It requires privacy of service recipients.
    - It is aimed at platforms delivering services, not at information content.
  - **[search]**
    - A deregulation board removed the Ministry licence requirement for **laboratory-service apps**; a business licence is
      enough.
    - Reporting describes disputes between the Ministry and the virtual-business union over who licenses health platforms.
    - A Ministry "digital health committee" announced an evaluation system for digital-health companies (date unclear).
- **Personal data law:** **[search]**
  - The government bill «لایحه حمایت (حفاظت) از داده‌ها و اطلاعات شخصی» (35 articles) passed the Digital Economy working group
    (Bahman 1401) and the government's legal commission, and was reported as heading to parliament.
  - **No evidence it has been enacted** as of these results.
  - The «قانون مدیریت داده‌ها و اطلاعات ملی» exists and is cited for health data. **[opened via Zoomit 1402]**
- **Endorsed parenting or child-health apps:**
  - **[search]** «سامانه سیب» (سامانه یکپارچه بهداشت) is the **staff-facing** electronic health record in which well-child care
    is recorded. It is not a parent app.
  - No Ministry-issued parent app for child health was found.
  - Private apps such as «آوا کیدز» claim growth checklists "approved by the Ministry" **[search, claim unverified]**.
  - Behzisti apps were not searched.
  - «سامانه سلامت کودک» was not found under that name.
- **Implication:** in Iran the realistic route is **content endorsement or co-branding by a university of medical sciences or a
  Ministry office** (child health office «اداره سلامت کودکان», or the mental health office for helpline content). It is not a
  licence. The asks to them should be:
  - a named reviewer;
  - alignment with «مراقبت‌های ادغام‌یافته کودک سالم» and «مانا»;
  - permission to cite national materials;
  - confirmation in writing that a non-device, offline information app needs no licence. This is still unconfirmed.

### 11. Proposed outline: PlayNest content-governance document (2–3 pages)

1. **Purpose and scope.**
   - What PlayNest is: offline information for parents of children 0–12, English and Persian.
   - What it is not: no diagnosis, triage, dosing, scoring or personal medical advice.
   - The device-line rule from §7 as a hard constraint.
2. **Who is accountable.**
   - A named content lead (PIF criterion 1).
   - Named reviewers by field: paediatrics, nursing or midwifery, child psychology, nutrition, first aid, and a Persian
     language reviewer.
   - Each gets a role, qualification, affiliation and a dated declaration of interests.
3. **Source hierarchy** (cite the highest available, and say when bodies disagree):
   1. WHO and UNICEF guidelines and fact sheets.
   2. For Persian copy: Iran's Ministry of Health national programmes (کودک سالم، مانا، the immunisation guideline, rabies
      guideline), via behdasht.gov.ir or university health deputies.
   3. National bodies (NICE, NHS, CDC, AAP, RCPCH, UKHSA) and Cochrane reviews.
   4. Peer-reviewed primary studies, with design stated.
   5. Expert opinion, labelled as such.
   - Never: commercial sites, forums, or AI output as a source.
4. **Evidence wording** (fixed phrases, in both languages):
   - "Trials show…" for RCTs and systematic reviews of RCTs.
   - "Studies link… (a link, not proof)" for observational evidence.
   - "Experts advise…" for guideline consensus without trials.
   - "Not known yet" / "Bodies disagree: X says…, Y says…".
   - Never "proven", "guarantees", or a number borrowed for the app's own games.
5. **Production steps.**
   - Draft, then source check (every claim mapped to a ref, with `checkedOn`), then clinical review, then Persian translation.
   - Then **back-check of the Persian against the English** by a second bilingual reader, line by line for first-aid cards,
     with Persian-only additions sourced separately.
   - Then plain-language pass (reading age 9–11 as a guide), then user test, then sign-off.
   - **Document any AI assistance** (PIF criterion 1).
6. **Review cycle.**
   - Every guide carries `checkedOn`, `reviewedBy` (role, month and year), and `nextReview`.
   - Default 12 months (NICE standard 7).
   - First-aid cards, helplines and the vaccine/supplement schedule every 6 months, plus whenever a source changes.
   - Helplines: a test call before adding and at each review.
7. **Error reporting and corrections.**
   - An in-app "report a problem with this page" that opens email or a form (no data sent automatically).
   - Acknowledge within a set time.
   - Safety-critical errors (first aid, numbers, ages) are fixed in the next release, or the content is pulled.
8. **Change log.** A public, dated list per release: what changed, why, which source, and who reviewed it. Keep superseded
   versions (PIF version control).
9. **Conflicts of interest and funding.** No ads, no product placement, no sponsored content. Reviewers declare interests. Any
   funding is disclosed in About.
10. **Users and equity.** Co-design and usability tests with Iranian parents (urban, rural, low-literacy), fathers and
    grandparents. Accessibility (screen reader, large text, RTL). Kept as a record (NICE 2 and 4; PIF 5 and 6).
11. **Privacy statement.** Nothing leaves the device; what is stored; how to delete it; OS backups.
12. **Impact and pilot plan.** One health centre or university department; measures (use, parent-reported usefulness,
    confidence); results published (NICE 15; PIF 10).

---

## Part 2 — Verification tasks from REVIEW-1.5 §11

### 2.1 (a) Rotavirus vaccine and Iran's current schedule

**Rotavirus: confirmed by health-system sources, not yet on behdasht.gov.ir.**

- **[opened]** Birjand health centre (Birjand University of Medical Sciences), news dated **1403/09/13**:
  - the rotavirus vaccine launch was held "همزمان با سراسر کشور" (simultaneously across the country);
  - "گروه هدف واکسن روتاویروس کودکان سن ۲ ماهه، ۴ ماهه و ۶ ماهه است".
- **[opened]** Mehr News, 25 Esfand 1403. Op-ed by **Seyed Mohsen Zahraei, head of the Ministry of Health's Vaccine-Preventable
  Diseases Office**: "دو واکسن جدید پنوموکوک و روتاویروس به برنامه ملی ایمن‌سازی کودکان کشور اضافه شده‌اند". No ages given.
- **[opened, partial]** *برنامه و راهنمای ایمن‌سازی، مصوب کمیته کشوری ایمن‌سازی – ۱۴۰۳* (20-page PDF hosted by TUMS south
  health centre; a 106-page SBMU copy also exists).
  - The vaccine list includes "Rotavirus" and "PCV10/PCV13".
  - A coverage-indicator line reads "(Penta, OPV, IPV, PCV, Rota, MMR1)" for the first year and "(MMR2, DTP4) 12–23" months.
  - Persian text, including the schedule table, did not extract.
- **[search]**
  - Tabnak: the Deputy Minister for Health says the rotavirus vaccine is **oral** and **free** in all health centres, and that
    charging for it is a violation.
  - A Kurdistan UMS policy brief dates the addition to 1404. News and the provincial launch say 1403.
  - Gonabad UMS had announced a start "from Bahman", year unclear.
- **Verdict:** the Persian line "rotavirus in the national programme at 2, 4 and 6 months since 1403" is **supported**. The
  launch date was 13 Azar 1403. Give the source as the national immunisation guideline 1403 plus the university health-centre
  page. Recheck on behdasht.gov.ir when reachable.

**Pneumococcal (PCV), also new:**

- **[opened]** Arak UMS health deputy, 23 Aban 1403: added to the routine schedule in **Mordad 1403**, three doses at **2, 4 and
  12 months**.
- **[opened, partial]** The Rasht pamphlet shows the digits "12 4 2" beside the PCV row.
- **[search]** Golestan UMS: started 13 Mordad 1403.

**Current national schedule (ages and names only)**, assembled from the sources above:

| Age | Vaccines | Tag |
|---|---|---|
| Birth | BCG, hepatitis B, OPV | [round 4, opened] (1394/1396 table) |
| 2 months | Pentavalent, OPV, **PCV**, **Rotavirus** | base [round 4, opened]; PCV and Rota [opened] |
| 4 months | Pentavalent, OPV, IPV, **PCV**, **Rotavirus** | as above |
| 6 months | Pentavalent, OPV, **Rotavirus** (whether a second IPV dose is given here: **[recall, unverified]**) | as above |
| 12 months | MMR, **PCV** | base [round 4, opened]; PCV [opened] |
| 18 months | DTP, OPV, MMR | [round 4, opened] |
| 6 years | DTP, OPV | [round 4, opened] |

- The Shemiranat pamphlet's extracted digits follow the same row ages: 2, 4, 6, 12 (MMR), 18 (MMR), 6. **[opened, partial]**
- **Not confirmed:**
  - whether the 1403 table changed anything else (a second IPV dose, a DTP or Td change at 6 years);
  - the exact table wording.
  - **Do not ship this table as "official" until the 1403 guideline's table is read as an image or confirmed by Iranian staff.**
  - Safer app copy: "Vaccines are given at birth, 2, 4, 6, 12 and 18 months and 6 years. Your child's health card shows which."
- **Trap:** an Arak UMS *Food and Drug* deputy page (27 Mordad 1399) lists a US-style schedule (DTaP, varicella, hepatitis A,
  flu). **It is not Iran's programme. Don't cite it.** **[opened]**

### 2.2 (b) 190, extension 9

- **[opened]** Hamshahri Online, **18 Shahrivar 1405**, World Suicide Prevention Day piece.
  - Quotes **Dr Mohammadreza Shalbafan, Director-General of the Ministry of Health's Mental, Social Health and Addiction Office**
    («دفتر سلامت روانی، اجتماعی و اعتیاد»).
  - People can call "از ساعت ۸ صبح تا ۱۲ شب با سامانه ۱۹۰ و داخلی ۹" to reach mental-health experts.
  - "به صورت بی‌نام و رایگان" (anonymous and free). Personal details are needed only for specialised treatment.
- **[opened]** Khabar Online, **17 Farvardin 1405**, same official.
  - Free psychological services through «سامانه ۱۹۰», staffed in shifts from 8:00 to 24:00.
  - It is planned to continue "در دوره پس از بحران". No extension is mentioned.
- **[search]**
  - Tejarat News and Taadol: about 700 psychologists, up to 6,000 calls a day, set up during the 2026 crisis.
  - Earlier, from 1398–1399, the Ministry ran **4030** with **code 8** for psychologists (Mehr 1398/1399).
- **Verdict:**
  - **Yes**: 190 extension 9 is the Ministry of Health's free psychological counselling line, from two named statements by the
    responsible Director-General.
  - It is described as mental-health counselling, **not explicitly a crisis line**. Hours are 8:00–24:00, not 24 h.
  - No behdasht.gov.ir page was opened (bot wall).
  - **190 is not the poison line.** **[recall, unverified]** 190 was earlier IR FDA's public complaints and information line. It
    now seems to be a Ministry-wide number with extensions.
  - The WHO poison-centre directory points to **1490** for drug and poison information [round 4, opened].
- **For `helplines.ts`:**
  - Replace the "1490 or 190?" doubt with: "190 ext. 9 = Ministry of Health counselling (8:00–24:00, free, Hamshahri 18 Shahrivar
    1405 / Khabar Online 17 Farvardin 1405); poison info = 1490 (unconfirmed public access)".
  - Test-call both before adding either.

### 2.3 (c) Emergency Organisation's own release, Chaharshanbe Suri 1403

- **[opened]** Aftab News, **1403/12/29**, credited to IRNA.
  - **Jafar Miadfar, head of the Emergency Organisation**: 6,419 injured (+23% on the year before), 21 deaths, "۴۴ درصد مصدومان
    زیر ۱۸ سال بوده‌اند".
  - 1,833 eye injuries (−6%) and 258 amputations.
- **The Emergency Organisation's own release could not be found.**
  - **[opened]** ems.gov.ir works, but its news ids start around 1404/08. The 1403 Esfand items are gone from the site.
  - A site-restricted search returned nothing **[search]**.
  - The site's only Chaharshanbe Suri item (id 129, 1405/03/01, "چهارشنبه سوری را به چهارشنبه سوزی تبدیل نکنیم") has no
    readable text. It is probably an image.
- **[search]** Conflicting figures:
  - Taadol (1403/12/15) quotes a Ministry network official saying **47%** under 18. This was before the final tally.
  - Hamshahri gives **63% under 18 for 1402**.
  - Kojaro reports 945 injured and 2 dead for **1404**, with no age split.
- **Verdict:** keep "44% under 18 (1403)" cited to **IRNA via Aftab News, quoting the head of the Emergency Organisation**. Mark it
  "reported by the head of the Emergency Organisation", not "Emergency Organisation release". Next step: open the original IRNA
  item (irna.ir), not tried this round.

### 2.4 (d) Do Iranian Education learning-difficulty centres accept parent self-referrals?

**Unresolved.** No source states the referral route.

- **[search]**
  - Students with specific learning problems in mainstream schools receive part-time support at the
    «مراکز آموزشی و توانبخشی مشکلات ویژه یادگیری».
  - IRNA reports the centres have become "comprehensive centres" and now take **pre-school** ages.
  - First-graders are screened at school entry for learning difficulties and readiness, and referred if flagged.
  - Special-school registration needs prior assessment by the Education Ministry's «مراکز جامع سنجش سلامت و توانبخشی».
- **[opened]** Narimani et al., *J Learning Disabilities* (Univ. Mohaghegh Ardabili) 2011/12. The sample was "all students
  referring to centers for specific learning difficulties in Ardabil" with 124 parents surveyed. It does not say who refers.
- **[search]** A Jiroft centre article blames late "non-referral" for worse outcomes, implying a school-referral culture.
- **Safe copy now:** "Ask the school, or the education office's learning-difficulty centre («مرکز اختلالات یادگیری») in your
  area, how to arrange an assessment."
  - Don't say "you can go directly".
  - Don't say "you need a teacher's referral".
  - Confirm by phoning one provincial «آموزش و پرورش استثنایی» office.

### 2.5 (e) Honey: the youngest age in current Iranian Ministry of Health child-care materials

- **[search]** The Ministry well-child booklet *مراقبت‌های ادغام‌یافته کودک سالم* (TUMS health deputy copy, uploaded July 2022):
  "از دادن شیرگاو و عسل (به دلیل خطر بوتولیسم) به کودک زیر یک سال خودداری شود".
  - I downloaded the PDF, but its Persian text would not extract, so the sentence was seen only as a search snippet.
- **[search]** Other university pages agree on under 1:
  - Shiraz UMS ("تا اتمام یک‌سالگی ... نباید عسل داده شود");
  - Golestan UMS infectious-disease centre (no honey or corn syrup under 1, even diluted);
  - an Arak UMS food and drug deputy nutritionist;
  - a TUMS pharmacy article (honey for cough over 1).
- **[search]** Shiraz UMS **School of Nutrition** says honey is best avoided **under 2**. **[round 5, opened]** «مانا» says lemon
  and honey for cough **over 2**.
- **Verdict:** the Ministry's well-child material says **not under 1**, the same as NHS, AAP and WHO.
  - Keep "never under 1" as the safety rule in both languages.
  - In the cough context the Persian may add «در «مانا» عسل و لیمو برای بالای ۲ سال آمده است», or simply follow «مانا» there.
    That is a clinician's call, but there is no conflict on the safety floor.

### 2.6 (f) National supplement schedule: vitamin A+D and iron drops (ages only)

- **[opened]** SBMU, Pishva health network, «خدمات واحدهای بهداشتی ویژه نوزادان و کودکان (۱ روز تا ۵ سال)» (.docx, Oct 2025).
  - **A+D or multivitamin drops "از ۳–۵ روزگی"**.
  - **Iron drops "همزمان با شروع غذای کمکی (پایان ۶ ماهگی)"** for healthy term babies.
  - Both given free.
  - **Preterm babies: as the doctor or health centre directs.**
- **[opened]** IUMS health centre, «اهمیت ریزمغذی‌ها در کودکان و شیرخواران» (.docx, Jan 2023).
  - **A+D or multivitamin: "شروع از روز تولد تا پایان ۲۴ ماهگی"**.
  - **Iron: from the start of complementary feeding at 4–6 months, or from the end of 6 months, "تا پایان ۲ سالگی"**.
  - Common respiratory or gut infections are **not** a reason to stop iron.
- **[round 4, opened]** The well-child physician booklet says supplements are given "according to the supplements instruction",
  without ages.
- **[search]** The Fouman «دستورالعمل مکمل‌یاری» and the SBMU «مکمل کودکان» leaflets exist, but their PDFs would not extract.
- **Verdict:**
  - **A+D drops** run from the first days (3–5 days in the service package, "from birth" in the IUMS sheet) **to the end of 2
    years**.
  - **Iron drops** run from **the end of 6 months**, or when solids start if earlier (4–6 months), **to the end of 2 years**.
  - Preterm and low-birthweight babies follow a different plan set by the health centre.
  - Ages only; amounts stay out by house rule.
  - **[recall, unverified]** A separate school vitamin D programme exists for older children and teenagers. Not checked.

---

## App takeaways (prioritised)

1. **`helplines.ts` (Iran).**
   - Rewrite the "1490 or 190?" comment: 190 ext. 9 is the **Ministry of Health's free counselling line**, 8:00–24:00, per the
     DG of the Mental Health Office (Hamshahri 18 Shahrivar 1405; Khabar Online 17 Farvardin 1405).
   - The poison line remains **1490**.
   - Add 190/9 as a "talk" line (not "crisis") **only after a test call**. Keep 123 for crisis and 1480 for counselling.
2. **Rotavirus line in `tummy-bugs` (Persian):** keep "2, 4 and 6 months since 1403". Cite the 1403 national immunisation
   guideline and the Birjand health-centre page (1403/09/13). Don't add PCV to copy until the full table is read.
3. **Vaccine table:** do not publish a full age-by-age table yet. Use the general message (birth, 2, 4, 6, 12, 18 months, 6
   years; "your card shows which"). Next round: read the 1403 table as an image.
4. **Chaharshanbe Suri figure:** re-attribute to "the head of the Emergency Organisation, reported by IRNA (via Aftab News,
   1403/12/29)". The release itself is no longer online.
5. **Honey:** keep "never under 1" in both languages. The Ministry well-child booklet agrees (search-seen). Let the clinician
   decide whether the Persian cough section echoes «مانا»'s 2-year line.
6. **Learning-difficulty centres:** soften to "ask the school or the local centre how to arrange an assessment". No
   self-referral claim.
7. **Supplements (if mentioned anywhere):** "A+D drops from the first days to age 2; iron drops from about 6 months, or when
   solids start, to age 2; preterm babies follow the health centre's plan." No amounts.
8. **Add `reviewedBy` and `nextReview` fields** to guides and show "Reviewed by [role], [month year]" (NICE 7–8, PIF 1 and 4).
   This closes the biggest gap ORCHA-type reviews find (clinical assurance).
9. **Write the content-governance document** (§11 outline) and publish it in About, with a change log and a "report a problem"
   route (PIF 1, 7, 8).
10. **Hold the device line in the backlog:** reject or escalate any feature that computes a verdict (milestone "delay" outputs,
    symptom scoring, dose or ORS calculators, growth z-score labels).
11. **Privacy statement in Persian and English:** nothing leaves the device; how to delete; OS backups. No SDKs or analytics.
    This keeps COPPA and GDPR exposure minimal.
12. **Readability:** adopt PIF's reading age 9–11 as a guide for English. For Persian, rely on testing with low-literacy parents.
    Record those tests (NICE 2, PIF 5).
13. **Iran outreach pack:**
    - a one-page summary mapping PlayNest content to «کودک سالم» and «مانا»;
    - the governance document;
    - the privacy statement;
    - a request to a university health deputy or the child health office for a named reviewer and written confirmation that no
      licence is needed.

## Recheck before shipping

- [ ] Read the **1403 national immunisation table** (TUMS or SBMU PDF) as an image, or get it from Iranian health staff. Check
      for a second IPV dose and any change at 6 years.
- [ ] Open a **behdasht.gov.ir** page on rotavirus and PCV when the bot wall allows. Today the confirmation rests on university
      pages and a Ministry official's op-ed.
- [ ] **Test-call 190 → 9** (hours, free, who answers) and **1490** (public access, hours) before either appears in the app.
- [ ] Open the original **IRNA** item for the 1403 Chaharshanbe Suri figures.
- [ ] Phone one provincial **آموزش و پرورش استثنایی** office about parent self-referral to «مرکز اختلالات یادگیری».
- [ ] Open the TUMS well-child booklet page on honey (image or Iranian reader) to move the honey line from [search] to [opened].
- [ ] Read MDCG 2019-11 **Rev.1 (June 2025)** for new wellness and information examples. Read the **2026 DTAC form** sections.
- [ ] Check WHO CDISAH 2nd edition codes in the official PDF before quoting them.
- [ ] Confirm the status of Iran's personal data protection bill (parliament, Guardian Council) and whether any Ministry rule
      covers non-device health-information apps.
- [ ] ICO Children's code applicability (page was 403): confirm how the code treats offline-only apps.

## Sources

**Opened**

- NICE, *Evidence standards framework for digital health technologies* (ECD7), overview page: https://www.nice.org.uk/corporate/ecd7
  (published 10 Dec 2018, updated 9 Aug 2022).
- NHS Innovation Service, "Updated NHS England DTAC form and guidance" (4 Mar 2026):
  https://innovation.nhs.uk/news/updated-nhs-england-digital-technology-assessment-criteria-dtac-form-and-guidance/
- Patient Information Forum, *PIF TICK Criteria at a Glance* (reviewed Oct 2024):
  https://smauk.org.uk/wp-content/uploads/2025/08/PIF-TICK-Criteria-at-a-Glance-2024.pdf
- Patient Information Forum, *Reading age position statement* (Mar 2025):
  https://pifonline.org.uk/download/file/b1BGNlJIUEtxRFhlNnhzb3NZMHo2UT09/reading-age-position-statement-2025
- MDCG 2019-11, *Guidance on qualification and classification of software* (Oct 2019):
  https://ec.europa.eu/docsroom/documents/37581/attachments/1/translations/en/renditions/native
- Birjand health centre, rotavirus integration news (1403/09/13):
  https://hltb.bums.ac.ir/آرشیو-اخبار/شروع-ادغام-واکسن-روتا-ویروس-به-برنامه-ایمن-سازی-کودکان-در-استان-خراسان-جنوبی
- Mehr News, Zahraei op-ed (25 Esfand 1403): https://www.mehrnews.com/news/6408596/
- Arak UMS health deputy, PCV at 2 months (23 Aban 1403): https://arakmu.ac.ir/vch/fa/news/47689/
- Arak UMS food and drug deputy, vaccination schedule (1399), **not Iran's programme**: https://arakmu.ac.ir/vcfd/fa/news/11102/
- *برنامه و راهنمای ایمن‌سازی مصوب کمیته کشوری ایمن‌سازی ۱۴۰۳* (partial extraction):
  https://sthn.tums.ac.ir/uploads/193/2025/Feb/17/Immunization%20Guide%20line-Final-1403.pdf; SBMU copy:
  https://pirc.sbmu.ac.ir/uploads/154/ (واکسیناسیون کشوری جدید.pdf)
- Shemiranat (SBMU) and Rasht (GUMS) vaccine pamphlets (partial extraction):
  https://shemiranat.sbmu.ac.ir/uploads/204/2024/Sep/28/Pamphlet-%20K-2.pdf;
  https://rasht.gums.ac.ir/uploads/90/slider/1403/مرداد/Pamphlet%20-%20penu-والدین.pdf
- Ajums and Ilam rotavirus booklets (MoH EPI; Persian not extractable):
  https://fhealth.ajums.ac.ir/uploads/118/2024/Oct/07/واکسن%20روتا.pdf; https://www.medilam.ac.ir/Portals/0/1403/___.pdf
- Hamshahri Online, 190 ext. 9 (18 Shahrivar 1405): https://hamshahrionline.ir/news/1067489
- Khabar Online, 190 (17 Farvardin 1405): https://www.khabaronline.ir/news/2202516/
- Aftab News, Chaharshanbe Suri 1403 (1403/12/29, via IRNA): https://aftabnews.ir/fa/news/976948/
- Emergency Organisation site (archive range; item 129): https://www.ems.gov.ir/ ; https://www.ems.gov.ir/-news-/newsid/129/
- Narimani et al., learning-disability centres in Ardabil, *J Learning Disabilities*: https://jld.uma.ac.ir/article_93.html?lang=en
- SBMU Pishva, child services package (.docx, Oct 2025):
  https://pishva.sbmu.ac.ir/uploads/215/2025/Oct/08/خدمات%20ویژه%20کودکان.docx
- IUMS, micronutrients in children (.docx, Jan 2023):
  https://hkc.iums.ac.ir/uploads/283/2023/Jan/30/اهمیت%20ریزمغذی%20ها%20در%20کودکان%20و.docx
- Zoomit, unlicensed telemedicine apps (8 Mordad 1405): https://www.zoomit.ir/iran-news/464157-health-ministry-warns-telemedicine-apps/
- Zoomit, draft e-health operators regulation (7 Azar 1402): https://www.zoomit.ir/tech-iran/412329-electronic-health-operators/

**Abstract**

- Mac O, Ayre J, McCaffery K et al. "The Readability Study". *J Gen Intern Med* 2025. PMID 39707098.

**Search only**

- DTAC v2 commentary: https://8foldgovernance.com/dtac-v2-what-has-changed/ ; HTN, 25 Feb 2026.
- PIF TICK: https://pifonline.org.uk/pif-tick/about-pif-tick/
- HON closure: https://en.wikipedia.org/wiki/Health_On_the_Net_Foundation ; https://www.hifa.org/node/96852685
- ORCHA: JMIR mHealth 2023;11:e47043 (https://mhealth.jmir.org/2023/1/e47043) ; https://orchahealth.com/?p=15033
- WHO, 2nd edition of the classification (7 Nov 2023):
  https://www.who.int/news/item/07-11-2023-who-publishes-the-second-edition-of-the-classification-of-digital-interventions--services-and-applications-in-health
- ParentText: https://www.spi.ox.ac.uk/parenttext-optimisation-evaluation-south-africa ; https://formative.jmir.org/2025/1/e58611 ;
  https://clinicaltrials.gov/study/NCT07494786
- MDCG 2019-11 Rev.1 commentary: https://www.emergobyul.com/news/european-revision-primary-software-guidance-mdcg-2019-11-revision-1-small-changes-meaningful
- FDA General Wellness 2026: https://www.troutman.com/insights/fdas-2026-guidance-on-general-wellness-devices-policy-for-low-risk-devices/
- COPPA amended rule: https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule
- Tabnak, rotavirus and PCV free: https://www.tabnak.ir/fa/news/1293180/
- Kurdistan UMS policy brief: https://sdh.muk.ac.ir/ (Policy Brief (Persian).pdf)
- Taadol, 47% under 18 and the 190 line; Hamshahri 838834 (1402: 63%); Kojaro 308654 (1404).
- Tejarat News, 190 volume: https://tejaratnews.com/۳۴۰-هزار-غربالگری-سلامت-روان-در-بحران-ا
- Mehr 4878139 (4030, 1398).
- Honey: TUMS well-child booklet https://health.tums.ac.ir/uploads/32/2022/Jul/02/booklet%20p%20salem.pdf ; Shiraz UMS; Shiraz
  School of Nutrition; Golestan UMS (https://goums.ac.ir/page/1494/) ; Arak food and drug deputy 22083.
- Supplements: https://fouman.gums.ac.ir/uploads/89/2024/Feb/04/دستورالعمل%20مکمل%20یاری.pdf ;
  https://health.sbmu.ac.ir/uploads/22/2023/May/13/مکمل%20کودکان.pdf
- Learning-difficulty centres: heyvagroup 10404; IRNA via search summary; ppc.hormozgan.ac.ir PDFs.
- Iran personal data bill: Zoomit 420605; Digiato; Tejarat News 922515.
- Sib system and private apps: https://eazphcp.tbzmed.ac.ir/ (کتاب آموزش سامانه سیب) ; https://cafebazaar.ir/app/com.kids24.app
- Digital-health licensing disputes: https://www.zoomit.ir/tech-iran/440246- ; https://www.asriran.com/fa/news/874802/
- Readability, AMA/NIH grade 6: https://pmc.ncbi.nlm.nih.gov/articles/PMC6489118

**Round 4 (not reopened):** WHO 2019 digital-interventions guideline (Labrique 2020); NICE ESF PDF; MHRA standalone software
page; ParentText and ParentApp engagement papers; the 1394/1396 immunisation table (*کتاب جامع بهداشت عمومی*); the well-child
physician booklet (Guilan, 1397); WHO 2023 poison-centre directory (1490).
