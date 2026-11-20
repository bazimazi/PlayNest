# 07 · Shahnameh heritage: play activities, couplets, parent facts, books and reading order

Round 8, phase 11. Research only: no code was changed. Written 20 Nov 2026.

**Tags.** [opened] = I read the page or the Ganjoor API JSON myself. [abstract] = I saw only an abstract or a catalogue line. [search] = the claim comes from a search-result snippet I did not open. [recall, unverified] = my own memory; check before shipping.

**How the couplets were checked.** I downloaded Ganjoor's whole Shahnameh through its API (`https://api.ganjoor.net/api/ganjoor/page?url=/ferdousi/shahname/...`; 62 sections, 857 poem pages) and searched the `verses` array, which gives each couplet's number (`coupletIndex`). Every Shahnameh couplet below was copied from that JSON [opened]. Two cautions:
- Ganjoor names its Shahnameh source as «ویکی‌درج» (`sourceName` in the JSON) [opened]. A Ganjoor page found by search says its Shahnameh follows the Moscow edition [search]. The scholarly standard is Khaleghi-Motlagh's critical edition (8 vols, 1366–1386 SH, 15 manuscripts) [search]. Wording can differ between editions, so cite the Ganjoor page and say "in Ganjoor's text".
- Ganjoor now shows a meaning under many couplets, marked «هوش مصنوعی» (AI-written) [opened]. Do not copy those meanings into the app. The meanings below are mine.
- The `plainText` field starts with the page title, so counting lines in it puts every couplet off by one. Use `verses[].coupletIndex` (+1) for the couplet number.

---

## 0. What already exists (so nothing is repeated)

From `src/data/activities/celebrate-persian.ts`, `iran-older.ts`, `iran-young.ts`, `talk-persian.ts`, `celebrations-persian.ts` [opened]:
- **Shahnameh activities:** "Hushang and the spark" (Sadeh), "Rostam chooses Rakhsh" (Ferdowsi Day, 36–108 months), "Be a naqqal: a story with a picture" (60–144), "Be a naqqal: tell the Shahnameh with a scroll" (84–144, already mentions Zal and the Simorgh as a variation and cites the UNESCO naqqali page and fa.wiki coffee-house painting), "Takhteh Nard and the riddle of Bozorgmehr", "Moshaereh", "Arash's arrow: the long throw" (Tirgan), "Kheimeh-shab-bazi" string puppets.
- **Couplets already in the app:** «توانا بود هر که دانا بود» (aghaz/sh1), Rakhsh's coat «چو داغ گل سرخ بر زعفران» and «مر این را بر و بوم ایران بهاست» (garshasp/sh2), Hushang's spark (hushang/sh2), Zal's riddles (manoochehr/sh20–21), and the ant line (talk-fa-poetry-3, correctly worded as "Saadi quotes Ferdowsi").
- **Celebrations:** Yalda's `about` already says "some read the Shahnameh or Hafez". Ferdowsi Day is 25 Ordibehesht.

So the proposals below avoid Rakhsh, Hushang, naqqali scrolls and Bozorgmehr, and add new stories: the Simorgh, Kaveh, Akvan, the Haft Khan, Gordafarid, Kay Khosrow's cup, Jamshid's Nowruz and the family tree.

---

## 1. New Shahnameh play activities (9 proposals)

Ages use the app's months. Each one cites the Ganjoor section for its story; quoted couplets are [opened] from the API.

### 1.1 The Simorgh's feather (ages 2–4, 24–60 months)
- **Story:** The Simorgh raises the baby Zal in her nest. When he leaves, she gives him a feather: if trouble comes, put a feather on the fire and she will come at once. «ابا خویشتن بر یکی پرّ من / خجسته بود سایهٔ فرّ من» and «بر آتش برافگن یکی پرّ من / ببینی هم اندر زمان فرّ من» (manoochehr/sh2, couplets 94 and 96) [opened].
- **Materials:** coloured paper or card, child-safe scissors (adult cuts), crayons, a few real craft feathers if you have them (optional), a scarf or blanket for a "nest".
- **Steps:**
  1. Tell the story in a few lines: a great kind bird finds a baby with white hair and looks after him in her nest on a mountain.
  2. Make a nest from a blanket or cushions, and let your child be baby Zal inside it.
  3. Cut a big feather shape; your child colours it in many colours.
  4. "Zal grows up and goes home." The Simorgh (you) gives Zal the feather and says: "If you ever need me, hold it up and call."
  5. Play it: your child walks away, then pretends something is hard (a "stuck" toy, a tall tower). They hold up the feather and call «سیمرغ!», and you "fly" over with arms spread.
  6. Swap: your child is the Simorgh and you need help.
- **Safety:** In the story the feather is burned. At home we **hold it up**, never put it near a flame or a candle. Real feathers stay out of mouths (choking); for under-3s use a big paper feather only.
- **Develops:** pretend play and turn-taking; the idea that you can ask for help and someone will come (secure-base language). Cutting and colouring for fine motor.
- **Note for parents:** the scene of Zal and the Simorgh is carved in stone in Ferdowsi's tomb in Tus [opened, fa.wiki «آرامگاه فردوسی»].

### 1.2 Kay Khosrow's cup: what can you see? (ages 2–5, 24–66 months)
- **Story:** Bizhan is lost. On Nowruz King Kay Khosrow looks into his world-showing cup and sees where Bizhan is: «بگویم ترا هر کجا بیژنست / بجام اندرون این مرا روشنست» (bizhan/sh5, couplet 142) [opened]. (Do not quote couplet 157 of the same page, «یکی جام بر کف نهاده نبید», which says the cup held wine.)
- **Materials:** a clear glass or plastic bowl, a little water, a few small pictures or a photo, one small toy figure as "Bizhan".
- **Steps:**
  1. Put a picture (a family photo, an animal card) under the clear bowl and pour in a little water so the picture wobbles and shines.
  2. Say: "This is the king's magic cup. When he looks inside, he can see far away."
  3. Your child looks in and tells you what they "see".
  4. Hide the toy Bizhan somewhere in the room; slip a picture of that place (or a clue drawing) under the cup.
  5. Your child looks in the cup, guesses where Bizhan is, and goes to find him.
  6. Take turns hiding.
- **Safety:** under-3s: a few centimetres of water only, a grown-up always at the bowl, empty it straight after. Use plastic if the child is likely to knock it.
- **Develops:** describing what you see (vocabulary), early clue-reading and memory of places, hide-and-find (object permanence for the youngest).

### 1.3 Jamshid's throne: the first "new day" (ages 3–7, 36–84 months; fits Nowruz)
- **Story:** Jamshid builds a shining throne that is lifted into the sky; people shower him with jewels and call that day "the new day", the first day of Farvardin, and the festival comes down to us from those kings: «به جمشید بر گوهر افشاندند / مر آن روز را روز نو خواندند» / «سر سال نو هرمز فرودین / بر آسوده از رنج روی زمین» / «چنین جشن فرخ از آن روزگار / به ما ماند از آن خسروان یادگار» (jamshid/sh1, couplets 52, 53, 55) [opened]. **Skip couplet 54** (it mentions wine).
- **Materials:** a chair or cushion, a sun cut from yellow card, a tray of paper "jewels" (big torn pieces of coloured paper or tissue).
- **Steps:**
  1. Tell the story: long ago King Jamshid made a throne that shone like the sun.
  2. Decorate a chair with the paper sun: that is the throne.
  3. Each family member takes a turn on the "throne".
  4. Everyone else gently throws the paper jewels over them and calls «روز نو!» ("new day!").
  5. The one on the throne says one wish for the new year.
  6. Read the three lines and say: "That is why we still have Nowruz."
- **Safety:** no lifting the chair. Paper pieces big enough not to be mouthed by under-3s; sweep up after.
- **Develops:** links a festival the child already knows to its story; speaking a wish to a group; turn-taking.

### 1.4 Akvan says: the upside-down game (ages 4–8, 48–96 months)
- **Story:** The div Akvan lifts the sleeping Rostam into the air and asks: "Shall I throw you into the sea or onto the mountain?" Rostam thinks: «همه واژگونه بود کار دیو» ("a div does everything the wrong way round"), so he asks for the mountain, and Akvan throws him into the sea, which is what Rostam wanted; he swims out (akvan/sh1, couplets 64–76; the key line is couplet 71) [opened].
- **Materials:** none.
- **Steps:**
  1. Tell the story up to Akvan's question, and ask your child what Rostam should say.
  2. Tell how clever Rostam asked for the opposite.
  3. Round 1: you are Akvan. Your child must get you to do something (sit down, clap) by asking for the opposite ("Akvan, stand up!" → you sit).
  4. Round 2: your child is Akvan and must do the opposite of each instruction: "Hands up!" (hands down), "Fast!" (slow), "Loud!" (whisper).
  5. Speed up a little. A mistake means a giggle and a fresh start, not "out".
  6. Finish with the story's ending: Rostam swims to the shore and comes back.
- **Safety:** room to move; no spinning, lifting or throwing children "like Akvan".
- **Develops:** opposite games of this kind are used in research tasks on self-control (stopping the automatic response). Keep the claim modest: it is good practice, not a proven intervention [recall, unverified for this specific game].
- **For 9–12 (talk):** Ferdowsi explains divs himself: «تو مر دیو را مردم بد شناس / کسی کو ندارد ز یزدان سپاس» and «هرانکو گذشت از ره مردمی / ز دیوان شمر مشمر از آدمی» (akvan/sh1, couplets 140–141) [opened]: a div is a person who has left the path of humanity.

### 1.5 Rostam's Haft Khan: a seven-stage obstacle course (ages 4–8, 48–96 months)
- **Story:** Rostam rides to Mazandaran to free King Kay Kavus and passes seven trials (kkavoos/sh5 to sh11) [opened section titles]: 1 Rakhsh fights a lion while Rostam sleeps; 2 thirst in the desert, a ram leads him to a spring; 3 a dragon in the dark, Rakhsh wakes him; 4 a witch in disguise; 5 Olad, who becomes his guide; 6 the div Arzhang; 7 the White Div's cave, and the cure for the king's blind eyes.
- **Materials:** cushions, a blanket over two chairs (cave/tunnel), a toy sheep or any soft animal, a cup of water, a small bell, a scarf (soft "rope"), a blindfold scarf for the "king".
- **Steps (one station per trial):**
  1. **Lion:** a grown-up "lion" sleeps on a cushion; tiptoe past without waking it. (Rakhsh guarded Rostam here.)
  2. **Desert:** follow the toy ram across the room to the cup of water and drink it. Rostam thanked the ram: «گیا بر در و دشت تو سبز باد» ("may the grass be green on your plains", kkavoos/sh6, couplet 23) [opened]. Your child says thank you to the ram.
  3. **Dragon in the dark:** crawl through the blanket tunnel; when the bell rings ("Rakhsh is stamping!", kkavoos/sh7 couplets 7–8: Rakhsh beats the ground and neighs) [opened], freeze, then crawl on.
  4. **The trick:** a plate holds one odd thing (a shoe among fruit); spot the thing that does not belong. (Rostam saw through the witch's disguise.)
  5. **Olad:** loop the scarf around a cushion "Olad"; Olad now points the way.
  6. **Arzhang:** give Rostam's biggest roar. (Avoid acting the fight.)
  7. **The cave:** bring the "cure" (a cup of water or a leaf) to the blindfolded king; the blindfold comes off, the king can see.
- **Safety:** set up on a soft floor; tunnel short and open at both ends; blindfold only on a seated grown-up or a willing older child; no real ropes round anyone.
- **Develops:** gross motor (tiptoe, crawl, balance), following a sequence, remembering a story in order; thanking the ram is a small lesson in gratitude.
- **Tone note:** the original has killing and blood (the White Div's liver cures the king). Keep the play about courage and help; leave the gore out.

### 1.6 Kaveh's banner (ages 5–9, 60–108 months)
- **Story:** Kaveh the blacksmith walks out of Zahhak's court, calls the whole market to justice, «همی بر خروشید و فریاد خواند / جهان را سراسر سوی داد خواند», and lifts his leather apron on a spear: «از آن چرم کآهنگران پشت پای / بپوشند هنگام زخم درای» / «همان کاوه آن بر سر نیزه کرد» (zahak/sh7, couplets 46–48) [opened]. Fereydun decorates it with Roman brocade and jewels, hangs red, yellow and violet ribbons from it and calls it the Kaviani banner; every king after him adds new jewels (couplets 56–63) [opened].
- **Materials:** a brown paper bag or a piece of brown fabric (the apron), a cardboard tube or a short soft stick, glue or tape, red, yellow and purple paper strips or ribbon, foil or sticker "jewels".
- **Steps:**
  1. Tell the story: a working man, a blacksmith, stood up and said "this is not fair", and a whole town followed him.
  2. Cut the bag into an apron shape; this is the plain banner of an ordinary worker.
  3. Tape it to the tube.
  4. Walk in a little parade round the room, calling for fairness: each person says one thing that should be fair at home or school.
  5. Then, like Fereydun, decorate it: hang red, yellow and purple strips, stick on jewels.
  6. Each time the family does something fair or kind, add one more jewel, as the kings did.
- **Safety:** cardboard tube, not a pointed stick; walk, don't run, with the banner.
- **Develops:** language for fairness and speaking up; the idea that a simple worker's apron became the nation's flag.
- **Parent note:** the Shahnameh calls Zahhak «ضحاک تازی» (jamshid/sh2 title: «مرداس تازی و فرزند ناخلفش ضحاک») [opened]. In children's retellings frame Zahhak as a cruel king, never by people or ethnicity. Ferdowsi himself judges him by his deeds: «نکوهیده‌تر شاه ضحاک بود / که بیدادگر بود و ناپاک بود» (ashkanian/sh1, couplet 36) [opened].

### 1.7 Gordafarid's helmet: the brave girl at the White Castle (ages 6–10, 72–120 months)
- **Story:** When the castle's commander is captured, Gordafarid, the daughter of Gozhdaham, puts on a rider's armour and rides out against Sohrab: «زنی بود برسان گردی سوار / همیشه به جنگ اندرون نامدار» / «کجا نام او بود گردآفرید / زمانه ز مادر چنین ناورید» (sohrab/sh7, couplets 2–3) [opened]. When she is caught, she talks her way free and rides back into the castle (same page, couplets 38 and 53–55) [opened].
- **Materials:** a cereal box or card, scissors (adult cuts the eye-shape), tape, foil, crayons; optional cushions for a castle wall.
- **Steps:**
  1. Tell the story of a girl who was a famous rider and a quick thinker.
  2. Make a helmet band from card, fit it to the head, cover with foil.
  3. Build the White Castle from cushions or a sofa.
  4. Act it: Gordafarid rides out, meets the "Sohrab" (grown-up), and then must get back into the castle using words, not strength: she has to think of a clever thing to say.
  5. Talk: what was braver, riding out or thinking fast?
- **Safety:** no hitting with props; helmet without sharp edges.
- **Develops:** perspective of a female hero from the national epic (a useful balance to the many male heroes); problem-solving through talk.

### 1.8 Our Shahnameh family tree (ages 9–12, 108–144 months)
- **Story elements, all on Ganjoor:** Sam's son Zal is raised by the Simorgh (manoochehr/sh2); Zal marries Rudabeh, daughter of Mehrab of Kabul, whose family descends from Zahhak: «ز ضحاک تازی گهر داشتی» (manoochehr/sh4, couplet 10) [opened]; Rostam is born to Rudabeh (manoochehr/sh25 title: «زادن رستم») [opened]; Rostam and Tahmineh of Samangan (sohrab/sh4), their son Sohrab (sohrab/sh5) [opened titles]; Fereydun divides the world among Salm, Tur and Iraj (fereydoon/sh5) [opened title]; Siavash, son of Kay Kavus, marries Farangis, daughter of Afrasiab, and their son is Kay Khosrow (siavosh section titles; siavosh/sh13 title mentions «زادن کیخسرو») [opened] [relation details recall, unverified].
- **Materials:** a large sheet of paper, pencil, coloured pens, sticky notes.
- **Steps:**
  1. Draw a tree trunk. Start with Sam at the root of Rostam's branch.
  2. Add Zal + Rudabeh, then Rostam + Tahmineh, then Sohrab (sticky notes, so mistakes are easy to move).
  3. Start a second tree for the kings: Fereydun → Salm, Tur, Iraj; Kay Kavus → Siavash + Farangis → Kay Khosrow.
  4. Draw a dotted line wherever a family joins two "enemy" sides: Rudabeh's line goes back to Zahhak; Kay Khosrow's grandfather is Afrasiab.
  5. Discuss: Ferdowsi's heroes come from mixed families; nobody is good or bad because of who their grandparents were.
  6. Optional: add your own family's tree beside it.
- **Safety:** none special. Keep Sohrab's death to the older end of the band and let the child lead how much sadness they want.
- **Develops:** kinship vocabulary, keeping track of many characters (helps them read longer retellings), and a strong anti-prejudice message drawn from the text itself.

### 1.9 Paint like a coffee-house painter (ages 8–12, 96–144 months)
- **The art form:** «نقاشی قهوه‌خانه‌ای» is narrative oil painting of epic, religious and festive subjects, painted from imagination by painters without academy training; it flourished in the late Qajar and early Pahlavi period. Hossein Qollar-Aqasi (epic subjects) and Mohammad Modabber (religious subjects) are named as its founders; epic subjects include Rostam and Sohrab and Siavash. Karim Emami popularised the name in a 1967 exhibition catalogue [opened, fa.wiki «نقاشی قهوه‌خانه‌ای», which cites Hadi Seyf, «نقاشی قهوه‌خانه» (Reza Abbasi Museum, 1369/1990) and Bolukbashi, «قهوه‌خانه‌های ایران»]. Paintings were made for and hung in coffee houses, where naqqals told stories [opened, same page]. Encyclopaedia Iranica's article would be the best English source but returned 403 [could not open].
- **Materials:** a large sheet (or the back of wallpaper), poster paints or thick crayons, a pencil.
- **Steps:**
  1. Look at one coffee-house painting together (search «پرده قوللر آقاسی» or visit a museum page). Notice: many figures in one big scene, bright colours, the main hero drawn bigger [the "hero bigger" and "names written beside figures" features are recall, unverified: check against Seyf before using in the app].
  2. Choose one story the child knows from the app: Kaveh's banner, the Simorgh and Zal, or the Haft Khan.
  3. Sketch the scene from imagination (this is the «خیالی‌نگاری» idea), with the hero in the middle.
  4. Paint it in strong colours.
  5. Write each character's name small beside them.
  6. Hang it and let the painter tell the story in front of it, like a naqqal.
- **Safety:** washable paints; cover the table.
- **Develops:** composition and planning; retelling; pride in an Iranian folk art that started outside the academies.

### Not recommended
- **"Pardeh-khani" as a name for a Shahnameh activity.** fa.wiki says pardeh-khani is a religious performance whose main subject is Karbala, told from a painted cloth with a pointer (مطراق) [opened, fa.wiki «پرده‌خوانی», citing Bayzai, «نمایش در ایران»]. Calling a Shahnameh scroll game "pardeh-khani" would be inaccurate. The existing naqqali-scroll activity is the right frame: UNESCO says naqqals sometimes use painted scrolls [opened].
- **Shadow-puppet Shahnameh.** I found no source tying shadow puppetry to Iranian Shahnameh tradition; it would be a generic craft in the Iranian-only app. One Iranian hook exists: Khayyam's quatrain on the «فانوس خیال», a lantern whose turning paper figures cast shadows: «این چرخ فلک که ما در او حیرانیم / فانوس خیال از او مثالی دانیم / خورشید چراغ دان و عالم فانوس / ما چون صوریم کاندر او حیرانیم» (Ganjoor, /khayyam/robaee/sh122) [opened]. If used: a hand-turned paper cylinder with cut-out Rakhsh and Simorgh over an **LED** light, ages 9–12, as a talk card on Khayyam rather than a Shahnameh claim. That the fanus-e khiyal was a real old Iranian toy is [recall, unverified].
- **Siavash's ride through the fire**, Rostam and Sohrab, the death of Iraj, Zahhak's snakes: too dark or fire-related for play; keep for reading with 9–12s.
- **Sadeh couplet** «سده نام آن جشن فرخنده کرد»: the line before mentions wine in common editions [recall, unverified]; check before quoting.

---

## 2. Couplets for talk cards (20, all opened in Ganjoor's text)

Format: couplet · Ganjoor page and couplet number · plain meaning · suggested talk card. "6–8" or "9–12" is the band. The app's existing card texts are short English questions (Persian is produced by localisation), so the card text is in English.

| # | Couplet | Ganjoor location | Meaning | Talk card |
|---|---|---|---|---|
| 1 | «خرد بهتر از هر چه ایزد بداد / ستایش خرد را به از راه داد» | /ferdousi/shahname/aghaz/sh2, couplet 3 | Wisdom is the best gift God gave; praising wisdom is the best thing to do. | 9–12: Ferdowsi says good sense is the best gift we have. When did good sense help you? |
| 2 | «نخست آفرینش خرد را شناس / نگهبان جان است و آن سه پاس» | aghaz/sh2, couplet 12 | Know that wisdom came first; it guards your life. | 9–12: Ferdowsi calls good sense a guard for our life. What does it guard you from? |
| 3 | «بیاموز و بشنو ز هر دانشی / که یابی ز هر دانشی رامشی» | manoochehr/sh3, couplet 109 (advice to young Zal) | Learn and listen to every kind of knowledge; each one brings you joy. | 6–8: Zal was told to learn a bit of everything, because every kind of learning brings joy. What do you love learning? |
| 4 | «زمانی میاسای ز آموختن / اگر جان همی خواهی افروختن» | ardeshir/sh11, couplet 23 (Ardashir's advice) | Never stop learning if you want your soul to shine. | 9–12: Ardashir said never stop learning if you want your soul to shine. What will you learn next? |
| 5 | «ابا خویشتن بر یکی پرّ من / خجسته بود سایهٔ فرّ من» | manoochehr/sh2, couplet 94 | The Simorgh to Zal: take one of my feathers with you; my blessing goes with it. | 6–8: The Simorgh gave Zal a feather to call her for help. Who would you call if you needed help? |
| 6 | «گیا بر در و دشت تو سبز باد / مباد از تو هرگز دل یوز شاد» | kkavoos/sh6, couplet 23 | Rostam thanks the ram that led him to water: may your plains be green, and may no cheetah ever catch you. | 6–8: A ram led thirsty Rostam to water, and he thanked it. Which animal would you like to thank? |
| 7 | «همه واژگونه بود کار دیو» (first half) | akvan/sh1, couplet 71 | A div does everything back to front. | 6–8: Rostam beat Akvan by asking for the opposite. Can you think of another clever trick? |
| 8 | «هرانکو گذشت از ره مردمی / ز دیوان شمر مشمر از آدمی» | akvan/sh1, couplet 141 (with 140) | Anyone who leaves the path of humanity counts as a div, not a person. | 9–12: Ferdowsi says a div is a person who stops being humane. What makes someone humane? |
| 9 | «همی بر خروشید و فریاد خواند / جهان را سراسر سوی داد خواند» | zahak/sh7, couplet 46 | Kaveh shouted out and called the whole world to justice. | 9–12: Kaveh the blacksmith called everyone to stand up for fairness. When is it right to speak up? |
| 10 | «از آن چرم کآهنگران پشت پای / بپوشند هنگام زخم درای» | zahak/sh7, couplet 47 (with 48) | That leather apron that blacksmiths wear while hammering (Kaveh raised it on a spear). | 6–8: A blacksmith's apron became Iran's flag. Why do you think a simple apron mattered so much? |
| 11 | «به جمشید بر گوهر افشاندند / مر آن روز را روز نو خواندند» | jamshid/sh1, couplet 52 (with 53, 55; skip 54) | People scattered jewels over Jamshid and called that day the "new day". | 6–8: In the Shahnameh, the first Nowruz was the day people called the "new day". What is new for you this year? |
| 12 | «چنین جشن فرخ از آن روزگار / به ما ماند از آن خسروان یادگار» | jamshid/sh1, couplet 55 | This happy festival has come down to us from those kings as a keepsake. | 9–12: Nowruz has been passed down for a very long time. What family tradition would you pass on? |
| 13 | «زنی بود برسان گردی سوار / همیشه به جنگ اندرون نامدار» | sohrab/sh7, couplet 2 (name in 3) | There was a woman, a rider like a hero, famous in battle: Gordafarid. | 6–8: Gordafarid was a famous rider who protected her castle. What makes someone brave? |
| 14 | «بگویم ترا هر کجا بیژنست / بجام اندرون این مرا روشنست» | bizhan/sh5, couplet 142 | Kay Khosrow: I will tell you where Bizhan is; it is clear to me in the cup. | 6–8: Kay Khosrow's magic cup showed him faraway places. What would you want to see in it? |
| 15 | «جهان یادگارست و ما رفتنی / به گیتی نماند به جز مردمی» | esfandyar/sh26, couplet 58 (Rostam speaking to the Simorgh) | The world stays and we pass on; nothing remains of us but our humanity. | 9–12: Rostam said that in the end only our kindness is remembered. How would you like to be remembered? |
| 16 | «سخن ماند اندر جهان یادگار / سخن بهتر از گوهر شاهوار» | ashkanian/sh1, couplet 38 | Words remain in the world as a memorial; words are better than royal jewels. | 9–12: Ferdowsi says words last longer than jewels. Which words of a grandparent do you remember? |
| 17 | «بیا تا همه دست نیکی بریم / جهان جهان را به بد نسپریم» | ardeshir/sh14, couplet 113 (Ardashir's last advice) | Come, let us all do good and not hand the world over to evil. | 9–12: Ardashir asked everyone to do good so the world is not left to bad things. What good can our family do this week? |
| 18 | «نکوهیده‌تر شاه ضحاک بود / که بیدادگر بود و ناپاک بود» + «فریدون فرخ ستایش ببرد / بمرد او و جاوید نامش نمرد» | ashkanian/sh1, couplets 36–37 | Zahhak is blamed most because he was unjust; Fereydun won praise; he died, but his name never died. | 9–12: Ferdowsi judges kings by whether they were fair. What makes a good leader? |

| 19 | «از آن پس نمیرم که من زنده‌ام / که تخم سخن من پراکنده‌ام» | yazdgerd3/sh17, couplet 22 (the book's last section; the same couplet also appears at parviz/sh71, couplet 6) | From now on I will not die, for I am alive: I have scattered the seed of words. | 9–12: Ferdowsi said his words would keep him alive. What would you like to make that lasts? |
| 20 | «میازار کس را ز بهر درم / مکن تا توانی بکس بر ستم» | khaghan/sh16, couplet 20 (section title: «پند رستم در گذر گیتی») | Don't hurt anyone for money; as far as you can, don't wrong anyone. | 6–8: The Shahnameh says never hurt anyone to get money or things. Why is that important? (Do not quote couplet 18 of that page: it mentions wine.) |

Notes on the table:
- **#17 wording.** Ganjoor's text reads «جهان جهان را» (a doubled word, odd metre). The popular form «بیا تا جهان را به بد نسپریم / به کوشش همه دست نیکی بریم» does not appear in Ganjoor's text [opened, full-text search]. Bahram Gur has a related line, «یکایک به نوبت همه بگذریم / سزد گر جهان را به بد نسپریم» (bahgoor/sh11, couplet 67) [opened]. Use #17 only after checking Khaleghi-Motlagh's reading, or use the Bahram Gur line instead.
- **Other classics (one added).** Khayyam's «فانوس خیال» quatrain (/khayyam/robaee/sh122) [opened], for 9–12: "Khayyam compared the world to a turning shadow lantern. What do you think he meant?" The app already uses Saadi, Hafez, Rumi, Nezami, Parvin, Rudaki and Manouchehri.

### Attribution traps (checked)
1. **«میازار موری که دانه‌کش است / که جان دارد و جان شیرین خوش است».** It is in Saadi's Bustan, introduced as a quote from Ferdowsi: «چه خوش گفت فردوسی پاک زاد / که رحمت بر آن تربت پاک باد» (Ganjoor /saadi/boostan/bab2/sh14, couplets 7–8) [opened]. It is **not** in Ganjoor's Shahnameh text: I searched all 857 pages for «میازار», «دانه‌کش» and «جان شیرین خوش» and found nothing [opened]. Khaleghi-Motlagh's critical edition has a different couplet: «مکش مورکی را که روزی‌کش است / که او نیز جان دارد و جان خوش است» [abstract: Zolfaghari & Mohammadi-Badr, «نقد بلاغی بیت معروفی از شاهنامه», کهن‌نامهٔ ادب پارسی 1:2 (1389), pp. 15–27, https://classicallit.ihcs.ac.ir/article_33.html]. A search snippet places it in the Fereydun part [search]. **Verdict:** the app's card is right to say "Saadi quotes Ferdowsi". Never present the famous wording as a direct Shahnameh quote.
2. **«هنر نزد ایرانیان است و بس».** Excluded as chauvinistic, as asked. It is also **not in Ganjoor's text**: a full-text search of all 857 pages for «نزد ایرانیان است» found nothing [opened]. It circulates as a Ferdowsi quote; its source edition is unknown to me [recall, unverified]. Another reason not to use it.
3. **«بسی رنج بردم در این سال سی / عجم زنده کردم بدین پارسی».** Not found in Ganjoor's text. The nearest is «من این نامه فرخ گرفتم به فال / بسی رنج بردم به بسیار سال» (goshtasp/sh26, couplet 19) [opened]. Scholars treat «عجم زنده کردم» as doubtful [recall, unverified]. Do not use.
4. **«که رستم یلی بود در سیستان / منش کرده‌ام رستم داستان».** Not found [opened, full-text search]. Popularly quoted, generally treated as spurious [recall, unverified]. Do not use.
5. **«فریدون فرخ فرشته نبود / ز مشک و ز عنبر سرشته نبود / به داد و دهش یافت آن نیکویی / تو داد و دهش کن فریدون تویی».** A favourite school line, but **not found** in Ganjoor's text («فرشته نبود» gave nothing; «فریدون تویی» only matched an unrelated line at zahak/sh10, couplet 25) [opened, all 857 pages]. Do not cite it to Ganjoor without checking another edition.
6. **Arash the Archer.** The Shahnameh only alludes to him («تیر آرشی», goshtasp/sh14, couplet 23, in Daqiqi's part; Arash names elsewhere are other people) [opened]. The full story of the arrow is not told in the Shahnameh, though Kanoon's «یک پاورقی» series includes «آرش کمانگیر» among its "Shahnameh stories" [opened]. In the app keep Arash under Tirgan, not as a Shahnameh story.
7. **Chauvinism and ethnicity.** Besides «هنر نزد ایرانیان», avoid couplets that call Turanians or Arabs names in general (they occur in war speeches) and the «ضحاک تازی» labelling. Prefer lines that judge by deeds (#8, #18).

---

## 3. Heritage facts for parents

| Fact | Source |
|---|---|
| **Naqqali** was inscribed in **2011** (6.COM) on UNESCO's **List of Intangible Cultural Heritage in Need of Urgent Safeguarding**. UNESCO calls it the oldest form of dramatic performance in Iran: the naqqal tells stories in verse or prose with gestures and movement, sometimes with music and painted scrolls; it was performed in coffee houses, nomads' tents, homes and caravanserais; female naqqals perform before mixed audiences. Threats: fewer coffee houses, new entertainment, ageing masters (morsheds). **The UNESCO page does not mention the Shahnameh**, so cite fa.wiki «نقالی» for the Shahnameh link. | [opened] https://ich.unesco.org/en/USL/naqqali-iranian-dramatic-story-telling-00535 |
| **Coffee-house painting**: narrative oil painting from imagination; flourished late Qajar to early Pahlavi; Qollar-Aqasi (epic) and Modabber (religious) named as founders; Shahnameh subjects such as Rostam and Sohrab and Siavash; also called «خیالی‌نگاری» and «نقاشی عامیانه»; Karim Emami popularised the name (1967). | [opened] https://fa.wikipedia.org/wiki/نقاشی_قهوه‌خانه‌ای (bibliography: Hadi Seyf 1369; Pakbaz; Bolukbashi). Qollar-Aqasi's Ashura painting is in the Malek Museum [search, Hamshahri]. Iranica "Coffeehouse painting": 403 [could not open]. |
| **Shahnameh reading on Yalda.** UNESCO inscribed **Yaldā/Chella** (Iran and Afghanistan) in **2022** (17.COM) on the Representative List; its text names reciting poetry and storytelling at elders' houses, but **not** the Shahnameh or Hafez. fa.wiki «شب یلدا» lists elders' storytelling and **reading the Shahnameh** among the customs (citing Mardomsalari), and Hafez divination (citing Omidsalar, "Čella", Encyclopaedia Iranica, 1990). An Iranian heritage-ministry brochure also lists Shahnameh reading [search]. One article says in some Bakhtiari families Shahnameh reading takes the place of Hafez [search]. Wording for the app: "many families read the Shahnameh or Hafez", not "the custom is". | [opened] https://ich.unesco.org/en/RL/yalda-chella-01877 ; [opened] https://fa.wikipedia.org/wiki/شب_یلدا ; [search] italy.mfa.gov.ir brochure, jamejamonline.ir/fa/news/524506 |
| **Ferdowsi's tomb** is in Tus, about 25 km north-west of Mashhad. It opened in 1313 SH (1934) for the Ferdowsi millenary; the page names Houshang Seyhoun as designer (on an earlier plan by Karim Taherzadeh Behzad) and Hossein Lorzadeh as the architect in charge of building, and says Seyhoun led the repair and rebuilding finished in 1347 SH (1968). For the app, say only "opened in 1934, rebuilt in the 1960s". Registered national heritage no. 1176 (18 Azar 1354). Inside, stone reliefs show **Zal and the Simorgh, Rostam and the dragon, Rostam and the White Div, Kaveh and Zahhak, Rostam and Sohrab**: a lovely "look at the photos" link for activities 1.1, 1.5, 1.6. | [opened] https://fa.wikipedia.org/wiki/آرامگاه_فردوسی (cites Shahbazi, "Ferdowsi iii. Mausoleum", Iranica; Riahi). Who designed the 1934 building and who the 1960s one is not fully clear from what I read; check Shahbazi before naming architects. |
| **Size.** Manuscripts hold "about 50,000 to 61,000 couplets". Khaleghi-Motlagh's edition has **49,530** couplets (citing Aydenlou); the London manuscript of 675 AH has **49,618**; Mostowfi said he never found more than 50,000. The figure **60,000** is an old common claim (Bondari, Riahi, Alavi Tusi). Safe wording: "about 50,000 couplets". | [opened] https://fa.wikipedia.org/wiki/شاهنامه |
| **Size, two more data points.** (1) My own count of Ganjoor's text through the API: **49,610 couplets** across 857 pages [opened]. (2) Ferdowsi himself claims 60,000: «بود بیت، شش بار بیور هزار» ("there are six times ten-thousand couplets"; parviz/sh65, couplet 3), and the Shahnameh glosses «بیور» as ten thousand (jamshid/sh2, couplet 11) [opened]. So "Ferdowsi said 60,000; the surviving text is about 50,000" is accurate and a nice detail for 9–12s. | [opened] Ganjoor API |
| **Completion.** fa.wiki gives **19 Esfand 400 AH = 8 March 1010** for the second (final) version, citing Khaleghi-Motlagh in Iranica; a first version was finished in 384 AH. The closing section of Ganjoor's text dates it in verse: «ز هجرت شده پنج هشتاد بار» (5 × 80 = 400 AH; yazdgerd3/sh17, couplet 20) [opened]. | [opened] https://fa.wikipedia.org/wiki/شاهنامه ; Ganjoor /ferdousi/shahname/yazdgerd3/sh17 |
| **Three parts.** Mythic (from Kiumars to Fereydun), heroic (from Kaveh's uprising to Rostam's death and Bahman's reign), historical (from Bahman and Alexander to the Arab conquest), after Zabihollah Safa, «حماسه‌سرایی در ایران» pp. 206–214. The same article warns the division "is not always fully correct". | [opened] https://fa.wikipedia.org/wiki/شاهنامه |
| **Ferdowsi Day.** 25 Ordibehesht is named «روز بزرگداشت فردوسی» in Iran. Ganjoor's bio gives Ferdowsi's birth as 329 AH and death before 411 AH in Tus. | [opened] Ganjoor API, /ferdousi |
| **Pardeh-khani is religious**, not Shahnameh: a Karbala-centred performance from a painted cloth with a pointer. | [opened] https://fa.wikipedia.org/wiki/پرده‌خوانی |

---

## 4. Persian children's Shahnameh books published in Iran

None of these is a verified award winner: I searched for Lak-posht-e Parandeh, Kanoon and Book of the Year awards for a children's Shahnameh and found none [search]. Treat the list as "well-known and easy to find", not "award-winning".

| Age | Book | Publisher | Status |
|---|---|---|---|
| 3–5 | «دو خط شاهنامه» series (e.g. «از رستم»), by Hadis Lazargholami, ill. Sana Habibi-Rad; titles «از رستم»، «از سیمرغ»، «از زال»، «از کاوه»، «از ضحاک»، «از بیژن»، «اکوان دیو»; 28 pp., 1404, ISBN 978-6222744731 | Partoghal («پرتقال») | [opened] https://www.iranketab.ir/book/98484-az-rostam (retailer page; age 3–5 from that page) |
| 7–12 | «زال و سیمرغ» by Mostafa Rahmandoust, 36 pp. (edition listed 1398); English version "Zal and the Phoenix" | Kanoon («کانون پرورش فکری کودکان و نوجوانان») | [opened] https://taaghche.com/book/93064/زال-و-سیمرغ ; English edition [search] |
| 8–12 | «قصه‌های شاهنامه», 12 vols, by Atousa Salehi (vol. 2 «فرزند سیمرغ», 56 pp., print 1376; others: «ضحاک»، «گردآفرید»، «رستم و سهراب»، «بیژن و منیژه»، «ایرج»، «کیخسرو»، «اسفندیار رویین‌تن») | Ofogh («افق») | [opened] https://taaghche.com/book/130185/فرزند-سیمرغ ; other volumes [search]. Age not stated on the page. |
| 9–12 | «یک پاورقی: داستان‌هایی از شاهنامه», 5 vols: «هفت‌خوان رستم»، «آرش کمانگیر»، «گردآفرید»، «زال»، «ضحاک», by Mohammad Goudarzi Dehrizi and Amirhossein Zanjanbar; launched 21 Khordad 1403 | Kanoon | [opened] https://www.mehrnews.com/news/6134155 (age not stated) |
| 12+ (taaghche says 15+) | «نامهٔ نامور», a 12-volume Shahnameh selection; e.g. «هفت خوان و هفت رزم» retold by Zohreh Parirokh (40 pp., 1398); «رستم و سهراب» retold by Jafar Ebrahimi (Shahed) | Kanoon | [opened] https://taaghche.com/book/93399/هفت-خوان-و-هفت-رزم ; Ebrahimi volume [search] |
| 8–12 | «داستان‌های شاهنامه و فلسفه برای کودکان», Yahya Ghaedi and Ali Hamidi | not confirmed | [search] taaghche.com/book/120993 |
| 12+ | Ali-Asghar Seyedabadi, "a new window onto the Shahnameh" series for teenagers (author was an Astrid Lindgren nominee, 2018) | not confirmed | [search] |
| 8–12 | Mohammad-Reza Shams, «بهترین قصه‌های شاهنامه» (3 vols, incl. «هفت‌خوان رستم و چند قصهٔ دیگر») | not confirmed | [search] |
| parents/teachers | Masoumeh Mousavian, «کتاب‌کار آموزش شاهنامه به کودکان»: 10 opening stories, naqqali texts and art activities; grew out of a programme used in Kanoon centres | Motakhassesan | [search] fidibo.com/book/175364 |

Could not open: Kanoon's own catalogue (kanoonbook.ir / kpf.ir) for these titles' age groups (الف/ب/ج). Recommended next step before shipping: confirm age groups and editions in the National Library catalogue (opac.nlai.ir).

---

## 5. A Shahnameh "series/timeline" in reading order: yes, recommended

**Why it helps.** The stories are long and interlocked (Rostam's life runs from Manuchehr's reign to Goshtasp's). Parents choosing a bedtime story need to know who came before whom; a numbered path also lets the app link activities ("after Kaveh's banner, read Fereydun's three sons"). Retellings for children (Ofogh's 12 volumes, Kanoon's 12-volume «نامهٔ نامور») already follow the book's order [recall, unverified that both are strictly ordered].

**Verified order.** Ganjoor's table of contents lists the sections in this order [opened, Ganjoor API children of /ferdousi/shahname]; story placements from section titles [opened]:

1. **Mythic:** Kiumars (کیومرث) → Hushang (هوشنگ: fire and Sadeh) → Tahmures (طهمورث) → Jamshid (جمشید: throne and Nowruz) → Zahhak (ضحاک: Kaveh's banner) → Fereydun (فریدون: Salm, Tur, Iraj).
2. **Heroic:** Manuchehr (منوچهر: Zal born and raised by the Simorgh; Zal and Rudabeh; Zal's riddles; **Rostam born**) → Nowzar → Zav-Tahmasp → Garshasp (**Rostam finds Rakhsh**) → Kay Qobad (Rostam brings him from Alborz) → **Kay Kavus** (Mazandaran and **Rostam's Haft Khan**; Hamavaran; **Rostam and Sohrab**, incl. Gordafarid; **Siavash**) → **Kay Khosrow** (Forud; Kamus; Khaqan of Chin; **Akvan the div**; **Bizhan and Manizheh**, incl. the cup; the Twelve Champions; the great war with Afrasiab) → Lohrasp → Goshtasp (incl. Daqiqi's verses) → **Esfandiyar's Haft Khan** → **Rostam and Esfandiyar** → **Rostam and Shaghad** (Rostam's death).
3. **Historical:** Bahman → Homay → Darab → Dara → Alexander (اسکندر) → the Ashkanians → Ardashir → Sasanian kings (Shapur … Bahram Gur … Anushirvan with Bozorgmehr … Khosrow Parviz …) → Yazdgerd III.

**Simple family timeline for the app (main figures):**
Kiumars → Hushang → Tahmures → Jamshid → Zahhak → Fereydun → (Iraj's line) Manuchehr → [Sam → Zal → Rostam] → Kay Qobad → Kay Kavus → Siavash → Kay Khosrow → Lohrasp → Goshtasp → Esfandiyar → Bahman → Homay → Darab → Dara → Alexander → Ashkanians → Sasanians (Ardashir … Yazdgerd III).

Two cautions to state in the app: (a) Zal and Rostam are heroes, not kings: their lives run alongside several reigns (Rostam is born under Manuchehr and dies under Goshtasp); (b) the three-part division is a scholar's convenience (Safa) and its edges are debated [opened].

**Suggested age path** (my proposal, not sourced): 2–5: Simorgh, Kay Khosrow's cup, Jamshid's Nowruz, Rakhsh. 5–8: Hushang's fire, Kaveh's banner, Akvan, Haft Khan. 8–10: Zal and Rudabeh, Gordafarid, Bizhan and Manizheh, the family tree. 10–12: Rostam and Sohrab, Siavash, Rostam and Esfandiyar, Bozorgmehr.
