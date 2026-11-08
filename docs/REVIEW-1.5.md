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
| A first set | 35 games (12 or more at every age, including all 5 Iranian ones), 10 stories (6 Iranian), 7 songs, 13 guides, 19 tips, 12 festivals and 13 of their games |
| Not yet | About 1.75 million characters: the other ~1,400 games, the other stories, songs, guides, tips and festivals. In Persian they are hidden, not shown in English |

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
