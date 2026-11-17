# What must be checked by a person before PlayNest 1.5 reaches families

Version 1.5's content was researched and written with AI assistance and cross-checked by independent AI reviewers. **No clinician,
lawyer, native speaker, community member, disabled reader or parent has read it.** The app says so on its safety screens
(`CLINICALLY_REVIEWED` in `src/components/Help.tsx`), and that flag stays false until the first section below is done.

The research behind everything here is in [RESEARCH-3.md](RESEARCH-3.md), with the full notes in `research_notes/`. Its search
budget ran out partway, and many sites blocked access (Raising Children, NSPCC, AAP journals, Cochrane, PubMed, Reddit). Most pages
were read through a summarising tool, so wording needs checking against the live pages.

## 1. Before anyone relies on the safety screens

### First aid (`src/data/firstaid.ts`): a paediatric clinician, for every region

| Check | Why |
|---|---|
| US and Canada CPR count, pace and depth | AHA's full 2025 text couldn't be read. The figures come from the US National Library of Medicine (reviewed Feb 2026, citing AHA/AAP 2025) and Heart & Stroke. That library's encyclopaedia terms restrict AI-related use, so a clinician should confirm these facts directly against AHA |
| Australia and NZ baby CPR teaches two fingers | ANZCOR's lay guideline (2021) says two fingers; its 2026 professional guideline prefers thumbs or the heel of a hand and says it doesn't cover lay rescuers. To switch, change step 3 to two thumbs and add the heel-of-hand fallback |
| No nose pinch or breath technique from ANZCOR | ANZCOR pages read give none. The card uses standard wording. Only St John was read as saying it for the UK |
| Fever route | UK card uses the stronger NHS route (999), though the NHS fever page says 111. US figures use the lower 100.4°F and wider age. The crying list says "call" at 38°C under 3 months while some region cards say "doctor" |
| Honey for a swallowed battery | US: over 12 months only. ANZ: honey over 1, jam under 1. UK, Canada and Europe: not mentioned. "Do not use honey for a magnet or water beads" is an inference |
| Device line | "Do not delay back blows and thrusts to find a device" follows RCUK. AHA's position wasn't verified |
| Over-calling | Seizure and poison cards lead with the emergency call, though the AAP routes many seizures to a doctor and US poison normally starts with Poison Help |
| Writer's additions in no source | "Say what has happened and how old your child is"; a dry object to push a child clear of a shock; cover the eye without pressing; keep a tooth in milk if unsure it's a baby tooth; start CPR if they stop responding on anaphylaxis, breathing, heat and very unwell; "unless the call handler tells you to" |
| Disagreements resolved by the writer | Burns 20 minutes; cling film or cloth; no limb raising; no seizure cooling; cool water, no ice bath, for heat; tooth rinse in milk; nosebleed 10 + 10 minutes; chemical in the eye 20 minutes |
| Left out on purpose | Tourniquet, raising a limb, cold-water immersion, adrenaline doses, AED pad positions, high-voltage shock |
| Overdue source pages | NHS febrile seizure, anaphylaxis and stings are past their review dates. ANZCOR anaphylaxis is from 2019 |
| Illustrations | Cards have no pictures of hand position. Original, clinician-reviewed drawings would help most on choking and CPR |
| No poison number | The WHO directory has 97 countries but with known data errors, so no number is shown on the poison card |
| Water under 6 months (changed Nov 2026) | The dehydration card used to say formula-fed babies under 6 months could have sips of boiled water (NHS); the heat games said no water (AAP, WHO). Both now agree: from 6 months, sips of water; under 6 months, ask a doctor before giving any. Confirm, or split the card by region |

Regulatory line: these are reference cards chosen by naming the emergency. Nothing takes symptoms and returns a verdict. Take advice before any
red, amber and green feature.

### Emergency numbers (`src/data/emergency.ts`) and helplines (`src/data/helplines.ts`)

- **A person must test-call every number before release, then re-test at least quarterly.** A 2019 review found 9% of mental-health apps listed
  bad crisis numbers.
- 70 of 228 emergency rows are marked `agreed: false` (sources conflicted, mixed services, or one city only). The app asks the parent to check those.
- 58 helpline rows come from directories, mostly Find A Helpline, whose commercial use requires contacting ThroughLine. If permission is refused they
  must be re-verified or dropped.
- Eight countries have no crisis line listed (Italy, China, Malaysia, Pakistan, Israel, Turkey, Saudi Arabia, UAE). Egypt and many others have no row and
  fall back to worldwide directories. A reviewer should say what those screens should offer.
- Five countries' services may not answer, per UK travel advice (Mauritania, Sudan, Liberia, Equatorial Guinea, Central African Republic). The data has no
  field for this.

### Crisis and crying screens (`src/data/crying.ts`, `src/pages/ParentSupport.tsx`): a perinatal clinician and a suicide-prevention reviewer

- The whole "hurt my baby" and "hurt myself" flows, including "Let's keep you both safe", "If you might act on this soon", and telling a parent to put the
  baby down before calling. The notes found no evidence comparing crisis-screen wordings.
- Routing psychosis signs to emergency care, which is stricter than the NHS's same-day GP step.
- What a parent is told, if anything, about what happens after they disclose. Fear of a child being removed is real, and the notes had no source.
- The red-flag list: 38°C as an emergency, 8 hours for a wet nappy, and "continuous cry", which also describes ordinary colic.
- "This app can't see what you tap" holds at source level (no analytics or `fetch` in `src/`). Confirm with a network test on a real build.

### Hard moments (`src/data/coach.ts`): a child psychologist

- Eight cards are `practice` (general guidance, little direct research), notably car seat, hair wash, "I hate you" and backtalk, and after-school overload.
- Source conflicts handled by the writer: potty break, night waking (own bed or beside you, no side taken), ignoring during tantrums.
- `telling-about-separation`: "We both love you" may be false or unsafe with a violent or absent parent.
- `being-bullied` (36–59 months): "speak to their teacher or carer" when the carer may be the source.
- Securing medicines and dangerous items for a child at risk of suicide is absent, weighed against the no-method rule.
- Whether each card ends in a calm, doable follow-through. Recent evidence says following through and less harsh talk matter most.
- Nothing about culture was verified. Advice on authority, co-sleeping and multi-generation homes is a hypothesis for local parents to test.

## 2. Before it claims to be respectful of anyone's culture

### Stories (`src/data/stories.ts`): 71 retellings

Only tales the research marked open or care are included. Anything sacred or owned (Aboriginal Dreaming, Nanabozho, Sedna, Coyote, Māui and more) is out. 33 stories rest on secondary
sources, and some plot details are from memory (Ring-Dove, Pérez and Martina, Anansi, Enchanted Horse, Frog, Kancil, Elephant in the Dark, Chelm, Qat).

Readers needed most: Brer Rabbit (Black American), Marmot and the Raven (Alaska Native or Inuit), How Night Came (Tupi or Guarani), Sina and the Eel (Samoan: courtship removed), Qat (Banks
Islands), Rabbit in the Moon (Nahua), Chelm (Jewish), Unanana (Zulu: ending reversed), Anansi and the Sky God (Ghanaian: Nyame is sacred), Kasa Jizō, Banyan Deer and Hare in the Moon (Buddhist),
Auntie Cockroach (Iranian), Tấm Cám (Vietnamese), Sang Thong (Thai). "Achok and Lerro" was removed until its source project is asked.

### Songs (`src/data/songs.ts`): 45 songs

- **Words and script are unverified.** They were typed from knowledge, and checking against sources stopped when the fetch tool declined to confirm lyrics. Persian, Arabic, Hebrew, Bengali, Malayalam,
  Hindi, Tamil, Japanese and Ukrainian script all need a native speaker. Priority: Bengali, the Persian rhymes, Daloul, Hine e Hine, Yoruba tone marks, Thula Baba.
- **Rights:** about 18 rest on a website's "traditional" label. Only 24 cleared the research's firmest bar. Weakest: Kye Kye Kule, Nini Baba, Saaindhaadamma, Mò Lì Huā.
- **Tunes:** no musician has heard any. Fixed-pitch tones can't carry maqam or raga, and the screen says it's a simple version. Least sure: Ghumparani, Mò Lì Huā, Dodo, Hush Little Baby, L'abe Igi Orombo, Bahay Kubo, Kye Kye Kule, Ukuti, Kakavik.
- Existing activities print words of Musunde Hiraite (first printed 1947, author unknown) and Two Tigers. Check them too.
- Coverage is honest about its gap: few tunes for the Middle East and South Asia, nothing for Urdu or Xhosa.

### World games (`src/data/activities/world.ts`): 97 new

Low-confidence entries were left out unless a second source backed them, including the research's favourite baby finds (Tab Tab Abbasi, Battikh Battikh, Hamoomak). **If someone can vouch for the Persian ones,
they should go in first.** Yulunga games need the Australian Sports Commission's written permission.

Community reviewers: Iñupiat (blanket swing, now plainly "inspired by"), Māori (Mū tōrere, Poi, Tī rākau), Native Hawaiian (Kōnane), Boe/Bororo (Adugo), Chokwe and Luchazi (sona), Meitei (Ting Ting Chaoro), Tamil (the four Pillaitamil
cards), Kpelle, Yoruba, Korean, Mongolian. Escravos de Jó needs a Brazilian reader for the word "slaves". Mbube Mbube should be checked against Solomon Linda's song. Rules not fully confirmed: Umul gonu, Adugo, Morabaraba, Escravos de Jó moves.

### Celebrations (`src/data/celebrations.ts`): 62, off by default

No community reviewer has read these. Soonest: Diwali, Loy Krathong, Advent, Hanukkah, Yalda, Kwanzaa. Then Mawlid, Eid al-Adha, Ramadan's line on children not fasting; Passover; Matariki and NAIDOC Week; Día de los Muertos and Chuseok for grieving families; Ganesh Chaturthi and Navratri; Homowo, Iri ji and Asogli Te Za; Meskel and Timkat (Wikipedia only).
Native names and several details (Kwanzaa principles, dreidel rules) are from the writer's knowledge. Dates missing because the notes had none: Holi, Onam, Ganesh Chaturthi, later years of Raksha Bandhan, Navratri, Vesak, Setsubun, Diwali 2029–30.

## 3. Disability and family content

`src/data/adaptations.ts` and the "Every child, every family" guides need an occupational therapist, a teacher of the deaf, a teacher of the visually impaired, a speech therapist, and paid disabled and autistic readers. Lines resting on common sense alone are marked in comments in that file. Also: `parent-ill-or-bereaved` (bereavement specialist), `body-safety` (child protection), `separated-parents` (domestic-abuse safeguarding), `adoption-foster-kinship`, `puberty-basics` (paediatrician, including for trans and intersex children), `anxious-children` and `time-out-time-in` (psychologist). The first-then rule that comfort, food or a favourite person never goes in "Then" belongs in a guide and may be missing.

## 4. Ages 8–12 and everything else

- **Riskiest activities:** first solo errand (no-crossing routes at 8–9), whittling, campfire keeper, sharp knives from 8 in `knife-licence-levels`, hand saws, hot glue, low slackline, tree climbing, the kabaddi breath chant. A water rocket and a wild-food walk were cut.
- **Rules need a playtest:** Fanorona, Tafl, Ur, the parity trick, and other games written from knowledge.
- **Screen and law facts change fast:** recheck `screens` and `first-phone` before release. AAP's full 2026 statement wasn't read, only its summary.
- **CC BY-SA:** coding games draw on CS Unplugged. The app credits it. Check whether share-alike reaches further.
- **WHO, UNICEF and other licences** bar commercial use or adaptation. Everything is paraphrased, but if PlayNest charges, ask counsel where the line sits.
- **GDPR:** festival choices can reveal religion, and barrier chips may count as health data. Festival choices stay on the phone; barrier chips aren't saved at all. Whether local-only settings fall within scope is a question for counsel.

## 5. Things only a real phone can tell you

Half a day with iPhones on iOS 18.4, 26 and 27 and a low-end Android (Galaxy A24 class) settles these. Nothing has been tested on a device.

| Question | If it fails |
|---|---|
| `window.print()` and `<a download>` from a Home Screen app | Add a lazy-loaded PDF fallback |
| Share-sheet backup reaches Files or Drive and restores identically | Change the flow in `saveBackupFile` |
| Noise keeps playing when locked, and the timer ends | Say more clearly that it may not stop, or use the native shell |
| The `.ics` file opens and the alarm fires | Remove the calendar row or word it differently |
| Speech with the mute switch on | Add a "check the ring switch" hint |
| `persist()` result in each mode | Change the Settings wording |
| Launch splash colour at night | Adjust `background_color` |
| 200% text at 320 px, and iOS Dynamic Type | CSS fixes |
| Lux at 30 cm on the night screen (aim for 10 or under) | Adjust the night colours |

## 6. Things only families can tell you

Watch 5–8 families use it, and test kid mode with at least 5 children per age band. Everything about Today's layout, the wording, and which features matter is judgement until then. The research also challenges the expansion plan's next step: rivals are
converging on trackers, which feed anxiety and are outgrown, so decide consciously whether to build the care tracker at all.

## 7. Movement and art

The animation was checked with filmstrips and measured with a throttled desktop browser. None of that is the same as a phone in a tired hand.

- [ ] **On a cheap Android phone and an older iPhone:** does scrolling stay smooth on Play and Today? Do the picture morph and confetti hold up? Is the phone warm after ten minutes?
- [ ] **First load on a slow connection:** the art is now about 1.3 MB compressed. Is the app usable while it downloads, and does offline still complete?
- [ ] **Someone with a vestibular condition or migraines** tries it with movement on, then with Less movement. Is anything uncomfortable? Is Less movement enough?
- [ ] **A parent at 3 am, a child at breakfast:** is it charming or too much? Does the movement ever pull attention from the words, especially on help screens?
- [ ] **Kid mode with an actual child:** do the bounce and stars help them follow the routine, or distract from it?

## 8. Persian

PlayNest now runs in Persian, right to left, with Persian digits and the Persian calendar. **All of the Persian was written by AI. No Persian
speaker has read any of it.** The first-aid and crisis text also had a second, independent AI reader, which found 4 errors that could have led
to a wrong action and 25 smaller ones. All of them were fixed. That says how much a human reader is needed, not that the text is now safe.

| Translated | What |
|---|---|
| All of it | Every word of the interface (852 strings), first aid, crying and crisis screens, helplines, hard moments, milestones, stage cards, firsts, routines, talk cards, adaptations |
| Content | 425 games, 52 of them Iranian (every game that starts in the first year is in, and the bath, car, meal, bedtime and waiting games to age 3), all 50 guides and every tip, 26 Persian stories, 21 Persian songs, 11 Iranian days and their 39 games |
| Not yet | About 514,000 characters, nearly all of it games for ages 1 to 12. In Persian they are hidden, not shown in English |

`npx vite-node scripts/i18n.ts status` shows coverage. How to add more, and the house style for Persian, are in [I18N.md](I18N.md).

### Before a Persian-speaking family uses it

- [ ] **A Persian-speaking paediatric clinician reads first aid and the crying and crisis screens**, side by side with the English. These choices
  were made in translation and need their judgement:
  - "Not responding", the trigger for CPR, is «هیچ واکنشی نشان نمی‌دهد». «بی‌پاسخ» was rejected because it suggests "doesn't answer".
  - "Heel of the hand" is «پایین کف دست (نزدیک مچ)»; «پاشنهٔ دست» was rejected.
  - "Recovery position" is «وضعیت بهبودی», always with «به پهلو» beside it.
  - Choking titles say «خفگی (چیزی در گلو گیر کرده)», because «خفگی» alone also covers smothering.
  - "Never shake a baby" stays absolute: «هرگز نوزاد یا بچهٔ کوچک را تکان ندهید». Adding «محکم» would have implied a light shake is fine.
  - On the crisis screens, "put your baby down" is «بگذارید», not «بخوابانید» (which suggests getting them to sleep first).
- [ ] **No Iranian first-aid body.** A parent in Iran has to pick one of the five bodies the cards follow. Decide whether to add Iranian Red
  Crescent or Ministry of Health guidance, and how.
- [ ] **Iran's numbers.** 115, 110 and 125 are in the table. The three Iranian helplines keep their English names on screen (Iran Crisis Text
  Line, 123 Social Emergency, MoHME line). Give them the names Iranians know, and test-call them.
- [ ] **Which number for a missing child.** Two hard-moment cards say "call emergency services", translated «اورژانس», which in Iran suggests
  the ambulance (115). For a missing child the police (110) may be right.
- [ ] **Search's Persian safety words** (`URGENT` in `src/lib/search.ts`) are a hand-written list, so "خفگی" or "نفس نمی‌کشد" jump straight to
  first aid. A reviewer should add the words parents really type, in both formal and spoken Persian.
- [ ] **A parent reads the spoken lines aloud.** Things to say to a child (hard moments, talk cards, games, story questions) are in spoken
  Persian with «تو»; everything else is written Persian with «شما». Do they sound like a real parent?

### Added in the second content round (November 2026)

- [ ] **139 games for babies and toddlers were translated**, each line checked by machine and the safety lines read beside the English. A
  Persian reader should look at the choices the translators flagged:
  - English rhymes in games became Persian ones from the songbook («تاب تاب عباسی», «حمومک مورچه داره», «چشم چشم دو ابرو»…), and rhyme-finishing games use Persian rhymes.
  - "Garden" is mostly «حیاط»; "cheers" is «به سلامتی»; the wrapped newborn bath is «حمام قنداقی نوزاد» (the summary says the wrap is loose).
  - Sources stay named as elsewhere: the CDC as «مرکز کنترل و پیشگیری از بیماری‌های آمریکا», Harvard, Montessori.
  - "Cruise" (walking along furniture) has no settled Persian term; it is «کنار مبل قدم برداشتن».
- [ ] **Four Persian stories**, each softened as its note says: «روباه دم‌بریده» (a Bakhtiari tale), «لاک‌پشت و دو مرغابی» (Kalila and Dimna),
  «کاووس و تخت پرنده» and «گردآفرید» (the Shahnameh). Read them against their sources, especially the Shahnameh pages that could only be
  read in part.
- [ ] **Three Persian songs**, words only, as cited: «لالا لالا گلی دارم» (three verses from three collections), «جمجمک برگ خزون» (Hamshahri's
  text; the game card uses «سیمین خاتون» where this has «زینب خاتون») and «آسیاب بچرخ» (Ketabak).
- Fixed: "It is spoken" (said, not sung) had become «گفتنی است», "it is worth mentioning", in four song notes. "Pull over safely" had become
  «با خیال راحت», "without a worry", on a car game.
- Two existing songs name «هندستون»: «الالالا ملوس ململ» (old trade with India) and «اتل متل» (where one scholar reads it as a place where milk
  is shared). Decide whether these fit the one-culture rule; they are kept because they are part of the folk words.

### Found in the English while translating (the translation follows the English; nothing was changed)

- Shangul and Mangul: حبه انگور is a grape, not a grape-seed. The ending with ten stones sounds like Grimm's wolf; the Iranian telling the
  translator knew has a horn duel. Check the source.
- لالا لالا گل پونه: the printed line «سگ اومد در خونه» may be «گدا اومد در خونه» in the version most parents know.
- Auntie Cockroach: "shoes of walnut wood" may be walnut shell (پوست گردو).
- Kalila wa Dimna is labelled "Arabic", which skips Borzuya's Pahlavi and Nasrollah Monshi's Persian versions that Iranians know.
- Yalda game: "never use charcoal or any burner indoors". Many Iranian homes heat with a flued gas heater, so this may read as impossible.
  Narrow it to unvented burners if a clinician agrees.
- Ramadan: hanging lanterns is mainly an Arab and Egyptian custom. Eid al-Fitr: Zakat al-Fitr is an obligation, not a gift.
- Heatstroke card: "stay until help comes and find the driver" asks a lone parent to do both.
- US and Canada drowning cards start CPR with breaths; the CPR card says presses first. A parent gets mixed signals.
- A wet nappy is a red flag after 8 hours on the crying screen and 12 hours on the very-unwell card.
- English display bugs, left alone: the song page prints ".." after the rights line, and Welcome says "1 games are ready." for one game.

### Cultural fit, translated faithfully and flagged

- Safe sleep advises against bed-sharing («در یک رختخواب», which includes floor mattresses), hammocks (the Iranian «ننو») and tight
  swaddling («قنداق»). All are common in Iran. This will surprise readers, and needs a clinician's framing rather than softening.
- Car seats on every trip and toddler reins are far less usual in Iran.
- Western games appear by translated name: Simon Says, Go Fish, Crazy Eights, Uno, Red Light Green Light. Pat-a-cake, Round and Round the
  Garden, The Wheels on the Bus and Itsy Bitsy Spider have Persian renderings written by the translator, not traditional rhymes.
- Spellings made by ear: the Bengali rhyme Agdum Bagdum in Persian script, «پر تا پیک» for Gol ya Pooch, «کوره کوچیا», «ساگا کوبوا».
- Festival text adds «حضرت» before Ibrahim and Muhammad, as Persian usage expects. The English has none.

### Only a phone can tell

- [ ] Persian fonts (Vazirmatn, Lalezar) load offline after the first visit, and nothing shows in a fallback font.
- [ ] "Read it to me" needs a Persian voice on the phone. Most phones have none, and the app says so rather than reading in an English voice.
- [ ] The three-list birthday picker is easy to use, and the stored date matches the birthday the parent meant.
- [ ] The Add to Home Screen name is «پلی‌نست». The native iOS and Android projects aren't generated yet, so their app names aren't localised.

## 9. The parenting hub (release 1.6, November 2026)

Release 1.6 added 29 guides, 13 parenting goals with 68 practices, and 58 daily tips, in English and Persian. The research is in
[RESEARCH-4.md](RESEARCH-4.md). **No clinician, psychologist or Persian speaker has read any of it.** Each source in the notes is tagged
opened, search-only or background; the writers kept effect sizes out wherever only an abstract was seen.

### A paediatric clinician, a dietitian or a health visitor

- [ ] `fever-and-sick-days`: the "get help now / see a doctor soon" table, the cautious "2 to 3 days" duration rule, and the
  dehydration signs. "Crying with few tears" and "sunken eyes" come from WHO and general knowledge, not the opened NHS page. It must
  agree with the first-aid cards `fever-young-baby`, `very-unwell` and `dehydration`.
- [ ] `fever-and-sick-days`: comfort care. No sponging or alcohol rubs; one light layer; don't switch between two fever medicines unless
  advised (CPS allows combining; NHS doesn't). In Iran, lukewarm «پاشویه» is traditional. Decide how firmly to say no.
- [ ] `milk-feeds` and `starting-solids`: readiness, iron, textures, the choking-safe table, allergen introduction (eczema caveat;
  bodies differ on testing first), drinks (cow's milk as a drink from 6, 9–12 or 12 months by body), "no tea". The Persian adds
  «آلبالو» to the quarter-it row (on the Iranian ministry's list) and «مثلاً در فرنی» for milk in cooking.
- [ ] `starting-solids` cites the Iranian Ministry of Health complementary-feeding textbook, whose porridge recipe adds a little sugar. The
  guide says no added sugar (WHO, NHS). Confirm that's the right line for Iranian health centres.
- [ ] `healthy-teeth`: "how often sugar is eaten matters more than how much" and "no bottle in bed" are framed as what dentists usually
  say; no source was opened for them. Fluoride: NHS gives strength, ADA/AAPD give amount.
- [ ] `vaccines-and-jabs`: comfort measures follow the 2026 CMAJ guideline update, read through a news report only. The urgent-reaction signs
  are general knowledge.
- [ ] `toilet-training` and the `potty-ready` goal: ages (AAP), constipation as a cause of accidents, when to see a doctor about wet nights.
- [ ] `move-sit-sleep`: the 5–17 figures (60 minutes, strengthening 3 days a week) come from secondary summaries and are written as "about".

### A child psychologist, ideally trained in a tested programme

- [ ] The 9 parenting-skills guides and all 13 goals: does each goal's order match how programmes teach it, and does every practice that
  responds to misbehaviour end in calm, doable follow-through?
- [ ] `consequences-that-teach`, `ignore-and-redirect`: age ranges for planned ignoring ("roughly 2 to 8") come from the notes' summary,
  not the meta-analysis itself. Both must agree with `time-out-time-in` (none under 2, time-in first at 2–3).
- [ ] `instead-of-smacking`: tone for parents who were smacked themselves and live where it's legal and common. Wang & Kenny studied
  13–14 year-olds, beyond the app's age range.
- [ ] `rewards-that-work`, `praise-and-confidence`: the reward-undermining finding (Deci 1999) and the toddler-helping study are cited from
  abstracts; no effect sizes are given.
- [ ] `when-parents-argue`, `keeping-your-cool`, `running-on-empty`: the safety routes for violence at home, fear of hurting a child, and
  parental depression in mothers and fathers. No numbers appear; they point to Help.
- [ ] The goal feelings replies ("It helped / A little / Not yet") and the welcome-back line: kind enough, and never guilt-making?

### A Persian-speaking reader

- [ ] Programme names are translated, not transliterated: «تریپل پی»، «سال‌های شگفت‌انگیز» (Incredible Years), «هم‌نوا با بچه‌ها»
  (Tuning in to Kids). A reader may prefer the original names in brackets or transliterated.
- [ ] Goal titles mix a wish («می‌خواهم به فرزندم نزدیک‌تر شوم») with noun phrases («وقت خواب آرام‌تر»). Pick one form.
- [ ] Plans are in the parent's first person and children's lines are mildly colloquial («امتحان کن. من اینجام.»). Check the register.
- [ ] «خیلی بزرگ شدی» as praise may read as comparing the child. «شورت‌پوشک» for pull-ups. «بیشتر نوشیدن الکل» in the burnout guide may be
  too blunt for many readers.
- [ ] The emotion-coaching feelings table is written as natural Persian vocabulary by age, not translated English. Check it suits children.
- [ ] The rituals guide adapts its examples to «ناهار جمعه، شب یلدا و نوروز», and the goals use Friday as the weekend.
- [ ] New glossary terms are in [I18N.md](I18N.md): هدف فرزندپروری، تمرین، وقت ویژه، مربی‌گری احساسات، کتاب‌خوانی گفت‌وگویی، جدول ستاره.

### Not verified, so not added

- Iranian helpline numbers (123 social emergency, 1480 counselling) and the 190 poison/drug line. Test-call them before adding to
  `helplines.ts`. *Update, release 1.7:* 123 and 1480 were found on the Welfare Organisation's own pages and added; see §10.

## 10. Research round 4: the everyday companion (release 1.7, November 2026)

Release 1.7 added 29 guides, a new "first months" shelf, a "Make our home safer" goal, "what's typical at this age" lines on 11
goals, check-ins after a finished goal, 55 daily tips, and Iranian helplines 123 and 1480, in English and Persian. The research is
in [RESEARCH-5.md](RESEARCH-5.md). **No clinician, psychologist or Persian speaker has read any of it.** Sources in the notes are
tagged opened, search-only or unverified; claims resting on abstracts carry no effect sizes beyond what the abstract showed.

### A paediatric clinician, midwife or health visitor

- [ ] `first-weeks-at-home`: the danger-sign list (WHO 2022 via a database copy, plus AAP cord signs). "About one more layer than
  you" follows WHO's "1–2 more layers"; check it isn't read as over-wrapping, which the fever guide warns against.
- [ ] `newborn-jaundice`: the get-help table, "8 to 12 feeds a day", and the remedies section. The NICE "do not use manna" point is
  search-only (NICE blocked). The Persian names ترنجبین، شیرخشت، خاکشیر and آب قند: is the tone respectful and the line right for
  Iranian health centres?
- [ ] `g6pd`: triggers (fava beans, mothballs, henna, some medicines, infections), the breastfeeding line ("many advise avoiding fava
  beans"), and "the quick test can miss some babies, especially girls" (one Iranian study, Sari 2014). No medicine list is given.
- [ ] `swaddling-and-hips`: "where straight-leg wrapping was replaced, hip problems fell sharply" is from population studies cited
  in an Iranian paper, not opened directly. Stop point: "signs of rolling, from about 2 months" (AAP); Red Nose says 3 months.
- [ ] `old-remedies`: each row. "Salt can burn newborn skin and has made babies seriously ill" rests on Turkish case series
  (search-only); how common salting is in Iran is unknown. The tahnik line ("ask about a version without honey") makes no ruling;
  confirm it reads respectfully.
- [ ] `dummies-and-thumbs`: "stopping somewhere between 1 and 3 years" blends Lullaby Trust (6–12 months), AAPD (by 36 months) and
  CPS (3–4 years).
- [ ] `settling-to-sleep`: "not before 6 months" (Douglas & Hill 2013), the four approaches, and the red flags. Raising Children
  Network was blocked, so its pages weren't read.
- [ ] `health-checks`: the Persian names Iran's visit ages from the Ministry booklet (revision 1395): ۳–۵ روزگی، ۱۴–۱۵، ۳۰–۴۵ روزگی،
  ۲، ۴، ۶، ۷، ۹، ۱۲، ۱۵، ۱۸، ۲۴، ۳۰ ماهگی، ۳، ۴ و ۵ سالگی. Confirm with a health centre that it is current. The vaccine lines ("a mild
  cold usually isn't a reason to wait", "no need to restart") come from Iranian textbook sources.
- [ ] `healthy-eyes`: "about two hours outdoors a day" (IMI), the 40-minute trial, and "a white glow in one pupil" (standard
  teaching, not opened this round).
- [ ] `bad-air-days`: the colour table is built on the US AQI (Iran's index appears to use the same bands; unverified). Masks: none
  under 2; fit matters for older children.
- [ ] `medicines-at-home`: cough-medicine ages ("2, 4 or 6 depending on the country"), honey and lemon over 1, and the methadone and
  opium storage line, which must stay free of judgement.
- [ ] `scalds-at-home`: "15 minutes" for tea comes from HSE Ireland and school handouts (CAPT unreachable). The list of things not
  to put on a burn names Iranian remedies (yogurt, potato, pastes); check it agrees with the first-aid card `burns-scalds`.
- [ ] `carbon-monoxide`: Iranian figures (6,078 deaths 2011–2018) and sources (gas heaters, water heaters, portable burners).
- [ ] `car-seats`: stage table, 145 cm belt fit, "about 70%" for babies (WHO/GRSP). No Iranian law is stated.
- [ ] The goal `safer-home` cites the Cochrane review on home safety education and equipment (Kendrick et al., CD005014), written
  from the writer's knowledge, not opened this round. Confirm the citation and that "raises safe practices" is a fair summary.

### A child psychologist

- [ ] `is-my-child-ok`: the whole guide, and above all the suicide question and the four steps after a "yes". Check the Persian
  script («گاهی وقتی بچه‌ها خیلی حالشان بد است…») is natural and culturally safe. It points to Help, which now lists 123 and 1480.
- [ ] `temperament`: no labels; "small planned steps" for cautious children is from Cool Little Kids (Rapee) via a digest. The
  sensitivity section avoids "highly sensitive child" on purpose.
- [ ] `what-to-expect` and the 11 goals' age lines: these are syntheses of several sources (ZERO TO THREE, Tremblay, Evans & Lee,
  Wakschlag, CDC 2022). Every "worth asking about" must read as a reason to ask, never a sign of a disorder. Language ages follow
  CDC 2022 and the Iranian booklet (a word by 15–18 months, two words together by 2).
- [ ] `what-protects-children`: Bethell 2019 is cross-sectional and retrospective; the copy says "a link, not a guarantee". No ACE
  score appears anywhere.
- [ ] `food-and-body-talk`: scripts for relatives; eating-disorder red flags (NHS).
- [ ] Check-ins after a goal: timing (1 week, 1 month, 3 months is a reasoned choice, not a tested one), the three replies, the
  "not lately" line pointing to When to get help, and whether a parent can ever read guilt into it.

### A Persian-speaking reader

- [ ] Iran-specific wording added inside translations: مشق شب، کلاس تقویتی، آزمون تیزهوشان (homework); نشانه‌ها and اِعراب (reading);
  اسرا (game ratings); طرح سنجش بینایی (eyes); the national well-child ages (health checks); نوروز، یلدا (protective experiences).
- [ ] Earthquake steps: which phrasing Iranian schools use in the national drill.
- [ ] Goal age labels («۱ تا ۲ سالگی») and the check-in screen («یک احوال‌پرسی کوتاه»، «این هدف برای ما تمام شده است»).
- [ ] Helplines: «اورژانس اجتماعی ۱۲۳» and «صدای مشاور ۱۴۸۰» notes.

### Before release

- [ ] Test-call 123 and 1480, as for every number in `helplines.ts`. Confirm 1480's usual hours (8:00–24:00 on Behzisti's page).
- [ ] Resolve the Iranian poison line (1490, not 190?) by test call before adding it anywhere.
- [ ] Get the current (1403) Iranian vaccine table before any guide lists vaccines by age.

## 11. Research round 5: what the research agrees on (release 1.8, November 2026)

Release 1.8 added 16 guides, a first-year goal for parents of babies, 61 daily tips, and a change to the dog-bite first-aid card, in
English and Persian. The research is in [RESEARCH-6.md](RESEARCH-6.md). **No clinician, psychologist or Persian speaker has read
any of it.** Sources in the notes are tagged opened, search-only or unverified.

### A paediatric clinician, nurse or pharmacist

- [ ] **First-aid card `dog-bite`, step 1, changed:** "Wash the bite or scratch with soap under running water for 15 minutes. Use a
  timer. Do this even for small scratches." From WHO's rabies fact sheet and Iran's 2019 national rabies guideline (Pasteur
  Institute). Check the Persian line by line against the English, as for every first-aid card.
- [ ] `tummy-bugs`: the get-help table (green vomit, blood, signs of drying out, under 6 months), "wait about 10 minutes after a
  vomit" (Iran's «مانا» booklet), the 48-hour rule, and the zinc line, which gives no amount. The Persian adds دوغ and soup as fluids
  for children who eat, and says rotavirus vaccine is in Iran's national programme at 2, 4 and 6 months since 1403: confirm on an
  official Ministry page. Must agree with `fever-and-sick-days` and the `dehydration` card.
- [ ] `coughs-colds-ears`: durations (UKHSA TARGET 2024: earache 3 days, sore throat a week, cold 2 weeks, cough 3 to 4 weeks),
  "1 in 14" side effects from ear-infection antibiotics (Cochrane 2023), croup ("medicine helps", no steam), and the table. **Honey:
  the app says from 1 year (NHS, AAP, WHO); Iran's «مانا» booklet says lemon and honey over 2.** Decide what the Persian should say.
- [ ] `eczema-and-nappy-rash`: "use plenty of moisturiser, at least twice a day", the two same-day flares (infected eczema, possible
  eczema herpeticum), "daily moisturiser from birth isn't needed" (BEEP, PreventADALL, Cochrane 2022; CASCADE 2025 disagrees), and
  "never henna on a baby's skin" (G6PD; the 2001 and 2023 reports were seen by title only). The Persian may name گل سرشور.
- [ ] `hot-days-and-sun`: "fans help less above about 35°C" (NHS), "never cover a pram with a blanket or dry cloth" (WHO 2026),
  "breastfed babies under 6 months don't need water", sunscreen under 6 months (bodies differ), SPF 30, and the overheating table.
  Must agree with the `heatstroke-hot-car` card.
- [ ] `festival-fires-fireworks`: eye advice ("don't rub or press, don't remove anything, cover loosely with a paper cup, go now";
  the Ministry's package also says don't wash an eye after a firework, which the English leaves to the card's chemical/impact
  split). An ophthalmologist should confirm. Burns: 20 minutes, as the card says (the Ministry package says 10).
- [ ] `children-and-animals`: the two steps after a bite, "curl into a ball" if knocked over (recall, not opened), and the Persian
  line that rabies centres are usually free (search-only, from 1398).
- [ ] `water-safety`: "lessons may lower the risk, from about 1 for many children" (AAP 2026), armbands are toys, isolation fencing.
- [ ] Goal `first-year-together`: the crying-plan step-away wording, and "share the nights" (a lactation reviewer should check it
  doesn't imply skipping night feeds in the early weeks). The help lines must agree with the Crying page.

### A child psychologist

- [ ] `when-scary-things-happen` and `weeks-after-hard-times`: the four steps, the age scripts, "don't push them to talk" (Cochrane on
  debriefing, adult trials), "about a month" as the point to ask, the same-day line, and the parent-stress wording ("you affect
  each other"). Must agree with the hard-moment card `scary-news` and `is-my-child-ok`.
- [ ] **Political neutrality, read in Persian:** no side, country, date or place; no «دشمن». The Persian names 1480 and 123 only.
- [ ] `what-decades-show` and `myths-checked`: every claim is "linked with" unless from a trial; no number is borrowed for the app's
  own games. "Sleep training harms babies: not shown" must agree with `settling-to-sleep`.
- [ ] `stuttering`: no recovery timeline; reasons to see a therapist (CHSA/ASHA, Michael Palin Centre, Stuttering Foundation
  differ); the "instead of / try" table, including not praising smooth speech (STAMMA, Palin) while therapy programmes may.
- [ ] `when-learning-is-hard`: signs are reasons to ask, not a test; the attention section ("not caused by sugar or bad
  parenting"; CDC lists family environment as a possible factor, so the copy doesn't say the family plays no part).
- [ ] Goal `first-year-together`: "Our crying plan" comes first by design; its why-line claims no injury prevention (population
  results were mixed). "One small thing for me" borrows from Thinking Healthy and claims no treatment.

### A Persian-speaking reader

- [ ] Iran-specific additions inside translations: چهارشنبه‌سوری, قاشق‌زنی and the 1403 Emergency Organisation figure (44% under 18);
  مرکز پیشگیری و درمان هاری; حوض, منبع آب, استخر کشاورزی and the Caspian; «مانا», مکمل روی, دوغ, بخور; سنجش سلامت جسمانی و آمادگی تحصیلی
  نوآموزان and مرکز اختلالات یادگیری آموزش و پرورش; اِعراب in the reading signs.
- [ ] Respect: the festival guide never uses «چهارشنبه‌سوزی»; the stuttering guide's line on «ترسیدن»; the myths guide's tone about
  سرماخوردگی and grandparents; faith offered as one option in the hard-times and first-year content.
- [ ] Goal title «سال اول ما با نوزادمان» against the other goal titles. In the goal: «کشیک» for who is "on" at night, «همسرتان یا
  هر کس که در مراقبت شریک است» for partners, WHO's Thinking Healthy as «روش «تفکر سالم»» (no established Persian name was found), and
  «محکم تکان دهید» in the help line, chosen so it can't be read as gentle rocking.
- [ ] Translator choices: «کلاغ پر» and «رقص و مجسمه» for "Simon says" and freeze dance; the festival guide's opening adds «به پیشواز
  بهار»; MMR as «ام‌ام‌آر (سرخک، سرخجه و اوریون)»; the cold myth is titled «توی سرما بروی، سرما می‌خوری» and says elders who dress
  children warmly «بی‌راه نمی‌گویند»; stuttering examples «ت-ت-توپ» and «سسسیب»; ORS as «محلول جبران آب بدن (او.آر.اس)», matching the
  dehydration card.
- [ ] Persian-only additions to check against their sources: zinc in «مانا» (no amount), دوغ/سوپ as fluids, no herbal drinks for young
  children with coughs («مانا»), گل سرشور, the school-entry screening checking vision and hearing, and the اِعراب line in reading signs
  (an inference that a reading specialist should confirm).

### Before release

- [ ] Test-call 190 (extension 9) before it is added anywhere, and update the "190 or 1490" comment in `helplines.ts`.
- [ ] Open the Emergency Organisation's own 1403 Chaharshanbe Suri release (the figure came from Aftab News citing IRNA).
- [ ] Confirm rotavirus vaccine in Iran's schedule on behdasht.gov.ir.
- [ ] Confirm whether the Iranian learning-difficulty centres take parent self-referrals.
