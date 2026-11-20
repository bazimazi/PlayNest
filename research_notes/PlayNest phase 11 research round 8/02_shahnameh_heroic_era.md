# 02: Shahnameh, heroic (Kayanian) era: candidate stories for the Persian app

Research round 8, phase 11. Written 2026-11-20.

**Tags.** [opened] means I fetched and read the source (for the poem: the Ganjoor API, `https://api.ganjoor.net/api/ganjoor/page?url=/ferdousi/shahname/<part>/shN`, verse text read directly). [abstract] means I read only a summary or abstract. [search] means a search-result snippet I did not open. [recall, unverified] means my own memory, not checked this round.

Couplet numbers (c.N) count couplets from the top of the Ganjoor section, as the API returns them. Ganjoor's section titles are modern editorial titles, not Ferdowsi's.

## Scope

This covers the heroic era from Kavus to the death of Rostam: Rostam's Haft Khan (each labour on its own), Akvan Div, Bizhan and Manizheh, Kay Khosrow's childhood and Giv's search, Siavash, Rostam and Sohrab, Forud, Esfandiyar's Haft Khan, Rostam and Esfandiyar, Kay Khosrow's departure, and Rostam's death. It leaves out stories already in the app: How Rostam found Rakhsh, Kavus and the flying throne, Gordafarid, Kaveh, Zal and the Simorgh, Hushang, Jamshid and Arash. The Siavash–Afrasiab chogan match is mentioned in `src/data/activities/iran-older.ts:317` and is not proposed again.

I fetched 36 Ganjoor sections, the root index and 12 part indexes. The section list for every part named below comes from the part index pages [opened].

The last section checks two existing records, `kavus-and-the-flying-throne` and `gordafarid-and-the-white-fortress`, against the poem.

**Bottom line.** The Haft Khan is the richest source. Labour 2 (the ram), labour 1 (Rakhsh and the lion) and labour 3 (Rakhsh and the dragon) each work as a short stand-alone story for young children, because their heart is kindness and loyalty rather than killing. Akvan Div and the ring in Bizhan's food are the best clever-trick stories. Kay Khosrow's childhood and Giv's search work for 8–10 if the death of Siavash is told only as "his father had died before he was born". Sohrab, Forud, the death of Siavash and the death of Rostam should stay out.

## Ranked table

| # | Title (Persian) | Age band | Ganjoor URL(s) | Stance | One-line reason |
|---|---|---|---|---|---|
| 1 | رستم و میش راهنما (Haft Khan, labour 2) | 4–6 | https://ganjoor.net/ferdousi/shahname/kkavoos/sh6 | open | Thirst, a prayer, an animal that leads to water and a blessing on the animal; nobody is hurt. |
| 2 | رخش و شیر (labour 1) | 6–8 (a gentle version from 5) | https://ganjoor.net/ferdousi/shahname/kkavoos/sh5 | open, with softening | The faithful horse guards its sleeping friend; Rostam's "why didn't you call me?" is pure care. |
| 3 | رخش بیدار و اژدها (labour 3) | 6–8 | https://ganjoor.net/ferdousi/shahname/kkavoos/sh7 | care | Loyalty that is not believed, then is; one threat to Rakhsh and the gore must go. |
| 4 | رستم و اکوان دیو | 6–8 | https://ganjoor.net/ferdousi/shahname/akvan/sh1 | open, with softening | The best clever-trick story in the epic: the div does the opposite of what you ask. |
| 5 | سیاوش، شاگرد رستم | 6–8 | https://ganjoor.net/ferdousi/shahname/siavosh/sh3 (first part only) | open | A prince is raised by Rostam, learns skills and manners, and goes home to his father; no conflict at all. |
| 6 | کیخسرو، پسرک شبان | 8–10 | https://ganjoor.net/ferdousi/shahname/siavosh/sh13 | care | A hidden prince grows up with shepherds, makes his own bow and outwits a dangerous king by acting silly. |
| 7 | گیو در جست‌وجوی کیخسرو | 8–10 | https://ganjoor.net/ferdousi/shahname/siavosh/sh17 , https://ganjoor.net/ferdousi/shahname/siavosh/sh18 | care | Seven years of faithful searching, a birthmark recognised at a spring, and a horse that waited for its master. Giv's killings must be cut. |
| 8 | انگشتری در خوراک: رستم بازرگان و رهایی بیژن | 8–10 | https://ganjoor.net/ferdousi/shahname/bizhan/sh4 , https://ganjoor.net/ferdousi/shahname/bizhan/sh9 , https://ganjoor.net/ferdousi/shahname/bizhan/sh10 , https://ganjoor.net/ferdousi/shahname/bizhan/sh11 | care | A disguise, a ring hidden in food, a signal fire, and Rostam making Bizhan forgive before rescuing him. The romance must be reframed. |
| 9 | هفت‌خان رستم (all seven, one longer story) | 8–10 | https://ganjoor.net/ferdousi/shahname/kkavoos/sh4 to …/sh11 | care | The great journey. Labours 4, 5, 6 and 7 need heavy softening (witch, torn-off ears, beheading, liver). |
| 10 | سیاوش و گذر از کوه آتش | 8–10 (full Sudabeh plot 10–12) | https://ganjoor.net/ferdousi/shahname/siavosh/sh4 | care | Truth proved by fire, and Siavash asks his father to forgive his accuser. The accusation must be de-sexualised. |
| 11 | رستم و اسفندیار | 10–12 | https://ganjoor.net/ferdousi/shahname/esfandyar/sh12 , …/sh26 , …/sh28 , …/sh29 | care | A real moral dilemma (obedience against honour). Tragic, and ends in a hero's death. |
| 12 | رفتن کیخسرو | 10–12 | https://ganjoor.net/ferdousi/shahname/mahmood/sh45 (with sh28–sh46) | care | A king who gives up power at its height; mysterious and beautiful, but the companions die in the snow. |
| 13 | هفت‌خوان اسفندیار | 10–12, low priority | https://ganjoor.net/ferdousi/shahname/7esfandyar/sh2 to …/sh6 | care | The bladed wagon against the dragon is clever, but Esfandiyar kills the Simorgh and later kills his guide. |
| 14 | رستم و سهراب | 11–12 only, parent-led; otherwise keep out | https://ganjoor.net/ferdousi/shahname/sohrab/sh18 | care / out | A father kills his son without knowing him. It is central to the culture but too grievous for the app's default. |
| — | فرود، مرگ سیاوش، مرگ رستم (شغاد) | keep out | forood/sh15; siavosh/sh11; shqad/sh4 | out | Killing of innocents, suicide, horses killed, betrayal by a brother and Rakhsh's death. See the last section. |

---

## 1. رستم و میش راهنما (Rostam and the ram who found water): Haft Khan, labour 2

**Source.** https://ganjoor.net/ferdousi/shahname/kkavoos/sh6 [opened]. Ganjoor title: «خان دوم رستم: تشنگی در بیابان، هدایت توسط میش و یافتن چشمه».

**Plot from the poem** [opened]. The road crosses a waterless desert. Horse and rider are worn out by heat and thirst, and Rostam walks on foot, staggering (c.1–3). He turns his face to the sky and prays: he is enduring this only so that God will save King Kavus and the Iranians from the div (c.4–9). He falls on the hot ground with his tongue cracked from thirst (c.11). A fine ram (میش) walks past him (c.12). He thinks "where does this one drink?" (c.13), gets up, follows it with Rakhsh's halter in his hand, and finds a spring (c.15–17). He thanks God and blesses the ram (c.18–25). He washes Rakhsh, drinks, hunts, eats and sleeps, and tells Rakhsh not to fight anyone alone but to come and wake him (c.28–36). That instruction leads into labour 3.

**Key couplets.**
- kkavoos/sh6 c.12: «همانگه یکی میش نیکوسرین / بپیمود پیش تهمتن زمین»
- c.13: «ازان رفتن میش اندیشه خاست / به‌دل گفت که‌آبشخور این کجاست»
- c.22–24, Rostam's blessing on the ram: «بران غرم بر آفرین کرد چند / که از چرخ گردان مبادت گزند // گیا بر در و دشت تو سبز باد / مباد از تو هرگز دل یوز شاد // ترا هرک یازد به تیر و کمان / شکسته کمان باد و تیره گمان»

**Care.** Almost none. Rostam roasting a wild ass for supper (c.31–33) can be just "he cooked his supper". Lying near death from thirst (c.11, c.25 «وگرنه پراندیشه بود از کفن») becomes "too tired and thirsty to go on". The prayer is part of the scene and Iranian parents will expect it; keep it short and warm.

**Age and softening.** 4–6, and works up to 8. Keep the sequence: hot desert, thirst, a quiet prayer, the ram, following it, the spring, the blessing. The repeated blessing ("may your grass always be green, may no cheetah ever catch you, may every bow aimed at you break") is the best line for small children and is close to the poem.

**Parent note (one line).** From the second of Rostam's Seven Labours in the Shahnameh: the strongest hero in Iran is saved not by his strength but by a ram, and he thanks it.

**Values.** Gratitude, kindness to animals, humility (even Rostam needs help), hope when things look bad.

**Questions.** 1. How did Rostam know the ram could help him? 2. What did Rostam wish for the ram? 3. Who has helped you when you could not do something on your own, and how did you thank them?

**Iranian adaptations.** The Haft Khan is among the most retold Shahnameh stories for children. Azaryazdi's «قصه‌های خوب برای بچه‌های خوب» includes it [search, a bibliography snippet citing Azaryazdi's «هفت‌خان رستم»]. Kanoon's teen series «نامه نامور» has «هفت خان و هفت رزم» by Zohreh Parirokh [opened, hamshahrionline.ir/news/295045]. I did not find a study that discusses the ram episode on its own.

---

## 2. رخش و شیر (Rakhsh and the lion): Haft Khan, labour 1

**Source.** https://ganjoor.net/ferdousi/shahname/kkavoos/sh5 [opened]. The send-off is in https://ganjoor.net/ferdousi/shahname/kkavoos/sh4 [opened].

**Plot from the poem** [opened]. Kavus has been blinded and captured in Mazandaran. His letter says «کنون چشم شد تیره و تیره بخت» (kkavoos/sh4 c.3). Rostam says goodbye to his weeping mother Rudabeh: "I did not choose this road for my own pleasure… keep me in your prayers" (sh4 c.48–51). He rides two days' road in one, then hunts, eats and lets Rakhsh graze unbridled. He sleeps in a reed-bed that, without his knowing, is a lion's den (sh5 c.1–14). The lion returns and decides to deal with the horse first (c.15–17). Rakhsh rears, strikes the lion's head with his hooves, bites its back and beats it to the ground (c.18–20). Rostam wakes, sees the dead lion, and scolds Rakhsh: if you had been killed, how would I have carried my gear to Mazandaran? Why didn't you neigh to wake me? (c.21–26). At sunrise he grooms Rakhsh, saddles him and thanks God (c.27–28).

**Key couplets.**
- sh5 c.17, the lion's plan: «نخست اسپ را گفت باید شکست / چو خواهم سوارم خود آید به دست»
- c.22: «چنین گفت با رخش کای هوشیار / که گفتت که با شیر کن کارزار»
- c.25: «چرا نامدی نزد من با خروش / خروش توام چون رسیدی به گوش»
- sh4 c.49, to Rudabeh: «بدو گفت کای مادر نیکخوی / نه بگزیدم این راه برآرزوی»

**Care.** The lion is torn apart (c.20 «همی زد بران خاک تا پاره کرد»). For 6–8 Rakhsh can fight the lion off and stand guard until it runs away, or for 8+ "the lion did not get up again". Cruelty to animals is mild: it is a fight in self-defence. Rudabeh's tearful farewell is gentle and worth keeping.

**Age and softening.** 6–8, and a very gentle version (Rakhsh chases the lion away) from 5. It links naturally to the existing "How Rostam found Rakhsh" story, so the app could present it as "Rakhsh's first adventure on the long road".

**Parent note.** The first of Rostam's Seven Labours: Rakhsh protects his sleeping friend, and Rostam, instead of praising him, worries, because a friend's safety matters more than winning.

**Values.** Loyalty, friendship between a child and an animal, asking for help instead of facing danger alone.

**Questions.** 1. Why did Rakhsh fight the lion by himself? 2. Why was Rostam worried and not just proud? 3. When should you call a grown-up instead of trying to handle something alone?

**Iranian adaptations.** Labours 1–3 are the parts most often illustrated in children's picture books [recall, unverified].

---

## 3. رخش بیدار و اژدها (Rakhsh keeps watch, and the dragon): Haft Khan, labour 3

**Source.** https://ganjoor.net/ferdousi/shahname/kkavoos/sh7 [opened].

**Plot from the poem** [opened]. Rostam had told Rakhsh: if an enemy comes, run to me; do not fight divs or lions yourself (sh6 c.35–36). In the night a dragon comes out of the plain. Rakhsh runs to Rostam, stamps and neighs (sh7 c.1–8). Rostam wakes, but the dragon has vanished, so he is angry with Rakhsh for waking him (c.9–11). It happens again (c.12–17). Rostam threatens: if you do this once more, I will cut off your head and walk to Mazandaran on foot (c.18–19). The third time Rakhsh hesitates, afraid both of the dragon and of Rostam, but his love for Rostam wins and he wakes him again (c.20–25). This time God lets Rostam see the dragon (c.27–28). They exchange names (c.30–37), fight, and when the dragon is winning, Rakhsh bites its shoulder. Rostam cuts off its head (c.38–43). He washes and thanks God (c.46–50).

**Key couplets.**
- c.23–24, Rakhsh's dilemma: «دلش زان شگفتی به دو نیم بود / کش از رستم و اژدها بیم بود // هم از بهر رستم دلش نارمید / چو باد دمان نزد رستم دوید»
- c.27: «چنان ساخت روشن جهان‌آفرین / که پنهان نکرد اژدها را زمین»
- c.40–41: «بمالید گوش اندر آمد شگفت / بلند اژدها را به دندان گرفت // بدرید کتفش بدندان چو شیر / برو خیره شد پهلوان دلیر»

**Care.** (1) Rostam's threat to behead Rakhsh (c.18) must go. Replace it with grumpy words such as "Rakhsh, let me sleep!" A child must not hear a hero threaten to kill his own horse. (2) Gore: the beheading and a "spring of blood" (c.42–45) become "Rostam struck, and the dragon fell and never rose again". (3) The dragon is frightening at night for 4–6, so keep this at 6+.

**Age and softening.** 6–8. The emotional core, being wrongly blamed and doing the right thing anyway, is exactly right for this age. Keep the three wakings, the vanishing dragon, Rostam's tiredness and Rakhsh's fear, and end with Rostam saying sorry to Rakhsh. Ferdowsi has no apology scene; this is a light, honest addition, and the parent note should say so.

**Parent note.** From the third labour: Rakhsh is scolded twice for trying to warn Rostam, and warns him a third time anyway. In the poem Rostam is much angrier than here.

**Values.** Courage to do the right thing when you are not believed, loyalty, listening to those who warn us, admitting a mistake.

**Questions.** 1. Why was Rostam cross with Rakhsh? 2. Why did Rakhsh wake him a third time even though he was scared? 3. Has anyone ever not believed you when you were telling the truth? What did you do?

---

## 4. رستم و اکوان دیو (Rostam and Akvan the div)

**Source.** https://ganjoor.net/ferdousi/shahname/akvan/sh1 [opened], a single long section of 193 couplets.

**Plot from the poem** [opened]. Ferdowsi opens with a reflection: listen to this old tale, and when you understand its meaning you will accept it (c.1–19). At Kay Khosrow's feast a herdsman reports a wild ass "the colour of the sun" with a black stripe down its back, attacking the horses (c.20–29). Khosrow knows it is no ass and sends Rostam (c.30–34). Rostam hunts it for days. When he throws his lasso it vanishes, and he realises it is Akvan Div (c.37–48). Exhausted, he sleeps by a spring. Akvan cuts out the ground under him and lifts him into the sky (c.53–61). He asks: shall I drop you on the mountain or into the sea? (c.63–65). Rostam thinks: "everything a div does is the opposite" (c.71). Into the sea he would survive, on the mountain he would be smashed, so he asks for the mountain. Akvan throws him into the sea (c.66–78). Rostam fights off sea monsters with his sword, swims ashore with one hand and both feet, and thanks God (c.79–86). Rakhsh has wandered into Afrasiab's horse herds. Rostam lassos him, drives off the herd, and kills the herders and Afrasiab's riders who chase him (c.90–131). Akvan appears again. Rostam lassos him, crushes his head with his mace and cuts it off (c.132–138). Ferdowsi then explains: a div is a bad person who does not thank God, and anyone who leaves humanity's path is a div (c.140–144). The story ends with a feast at Khosrow's court (c.152–193).

**Key couplets.**
- c.64: «یکی آرزو کن که تا از هوا / کجات آید افگندن اکنون هوا»
- c.70–71: «وگر گویم او را بدریا فگن / بکوه افگند بدگهر اهرمن // همه واژگونه بود کار دیو / که فریادرس باد گیهان خدیو»
- c.140–141, Ferdowsi's own reading: «تو مر دیو را مردم بد شناس / کسی کو ندارد ز یزدان سپاس // هرانکو گذشت از ره مردمی / ز دیوان شمر مشمر از آدمی»

**Care.** (1) The killing of Afrasiab's herders and riders (c.105–129) has nothing to do with the trick. Cut it; Rostam just finds Rakhsh grazing. (2) Akvan's death by mace and beheading (c.137–138) can become "Rostam caught him in his lasso, and Akvan never troubled anyone again". (3) Being lifted into the sky and thrown into the sea is exciting rather than scary if told lightly; the sea monsters (نهنگان) can be "big fish that swam away from his sword". (4) Othering: divs here are fantasy beings, and Ferdowsi himself says they stand for bad people, not for any nation. Avoid "the Turks" as villains; say "the herdsmen of the king of Turan".

**Age and softening.** 6–8, and good up to 10. For 8–10 keep Ferdowsi's closing idea as the parent note.

**Parent note.** From the Shahnameh. Ferdowsi says a div is "a bad person who does not give thanks", so the story is about thinking before you answer someone who wants to trick you. In the poem Rostam also fights the king of Turan's herdsmen; that part is left out here.

**Values.** Thinking before acting, knowing your opponent, keeping calm when in danger, not giving up.

**Questions.** 1. Why did Rostam ask to be thrown on the mountain? 2. What would have happened if he had asked for the sea? 3. Has anyone ever tried to trick you? How did you work it out?

**Iranian adaptations.** Kanoon's «نامه نامور» series has a volume «رستم و اکوان دیو» [opened, hamshahrionline.ir/news/295045]. **Link:** the stone that seals Bizhan's well is "Akvan Div's stone" (bizhan/sh4 c.64 «ببر پیل و آن سنگ اکوان دیو») [opened], so the two stories can point to each other.

---

## 5. سیاوش، شاگرد رستم (Siavash, Rostam's pupil)

**Source.** https://ganjoor.net/ferdousi/shahname/siavosh/sh3 [opened]. Use only the first part, up to Siavash's return and welcome by Kavus. The second half of the section begins Sudabeh's infatuation and must not be used here.

**Plot from the poem** [opened]. The baby Siavash is given to Rostam to raise (c.14). Rostam takes him to Zabol, builds him a garden home and teaches him riding, archery, the lasso, how to hold reins, and how to conduct himself at court and in feasts (c.15–19). When Siavash is grown he tells Rostam: you have taken great pains and taught me a king's skills; now my father should see what you taught me (c.22–24). Rostam gathers gifts and brings him home. Kavus welcomes him warmly, asks after Rostam and seats Siavash on a turquoise throne (c.28–52).

**Key couplets.**
- c.15–16: «تهمتن ببردش به زابلستان / نشستن‌گهش ساخت در گلستان // سواری و تیر و کمان و کمند / عنان و رکیب و چه و چون و چند»
- c.23–24: «بسی رنج بردی و دل سوختی / هنرهای شاهانم آموختی // پدر باید اکنون که بیند ز من / هنرهای آموزش پیلتن»

**Care.** Very little in this part. Do not hint at what comes next: Sudabeh, the exile and the death all follow in later sections.

**Age and softening.** 6–8. A calm "growing up and learning" story with no villain, which the Shahnameh rarely offers. It also gives children a first, happy meeting with Siavash, a central figure in Iranian culture (سوگ سیاوش).

**Parent note.** From the story of Siavash in the Shahnameh: before his famous trials, the young prince is taught by Rostam himself and goes home proud to show his father what he has learned.

**Values.** Respect for teachers, learning with patience, gratitude, the joy of going home.

**Questions.** 1. What did Rostam teach Siavash? 2. Why did Siavash want to go back to his father? 3. Who has taught you something you are proud of?

---

## 6. کیخسرو، پسرک شبان (Kay Khosrow, the shepherd boy)

**Source.** https://ganjoor.net/ferdousi/shahname/siavosh/sh13 [opened]. Ganjoor title: «خواب پیران و زادن کیخسرو، پرورش نزد شبانان، نمودن دیوانگی پیش افراسیاب و رفتن به سیاوشگرد».

**Plot from the poem** [opened]. Siavash's son Kay Khosrow is born in Turan after his father's death. Piran, a good-hearted Turanian lord, protects him. Afrasiab, the boy's grandfather, fears the prophecy and orders the child sent to shepherds in the mountains so that he will not learn who he is (c.38–40). Piran gives the boy to the shepherds of Mount Qala with gifts and a nurse (c.47–51). At seven the boy makes a bow from wood with a gut string (c.53–55). At ten he hunts boar, bear and wolf, and then lions and leopards with that same bent stick, until the frightened shepherd goes to Piran (c.56–63). Piran takes the boy into his own home and tells him he is no shepherd's son (c.65–77). Afrasiab sends for him. Piran tells the boy to act witless: give strange answers to every question (c.100–102). Asked about sheep, hunting and his teacher, the boy answers nonsense (c.114–119). Afrasiab decides he is harmless and sends him to his mother at Siavashgerd (c.124).

**Key couplets.**
- c.54: «ز چوبی کمان کرد وز روده زه / ز هر سو برافگند زه را گره»
- c.73: «که تاج سر شهریاران توی / که گوید که پور شبانان توی»
- c.101: «مرو پیش او جز به دیوانگی / مگردان زبان جز به بیگانگی»

**Care.** (1) Death of a parent: the boy's father was killed by the boy's own grandfather (siavosh/sh11) [opened]. For 8–10 say only that "his father had died before he was born, and the king of Turan was afraid of the child". Do not explain the killing. (2) Fear: a grandfather who might harm a child is frightening. Keep Piran's protection in the foreground. (3) Othering: Piran is a good Turanian. This is a chance to show that the "other side" has good people. (4) Hunting lions with a stick at ten: keep it as "he was so strong and brave that even the shepherds were amazed", without killing.

**Age and softening.** 8–10. Keep the wooden bow, the shepherds, Piran's kindness and the "act silly" trick. Ferdowsi has this from c.100. The trick is a safe, funny scene: a clever child out-thinks a powerful king.

**Parent note.** From the Shahnameh: Kay Khosrow, who would become one of Iran's best-loved kings, grows up hidden among shepherds, and a kind lord from the enemy's land keeps him safe. The sad story of his father is left for when your child is older.

**Values.** Cleverness, patience, kindness that crosses borders (Piran), knowing who you are.

**Questions.** 1. Why did Piran tell the boy to give silly answers? 2. Was Piran a good person even though he served the king of Turan? 3. Can someone from "the other side" be a friend? Do you know a story like that?

**Iranian adaptations.** Kanoon's «نامه نامور» has a «سیاوش» volume by Atousa Salehi, told through the four elements [opened, hamshahrionline.ir/news/295045]. I did not check how it handles Kay Khosrow's childhood.

---

## 7. گیو در جست‌وجوی کیخسرو (Giv's seven-year search)

**Source.** https://ganjoor.net/ferdousi/shahname/siavosh/sh17 and https://ganjoor.net/ferdousi/shahname/siavosh/sh18 [opened].

**Plot from the poem** [opened]. Old Goudarz dreams that the angel Sorush tells him a new king, Kay Khosrow, lives in Turan, and only Giv can find him (sh17 c.2–11). Giv sets out alone. He searches Turan for seven years, eating wild game, wearing its hide, his horse eating grass and drinking brackish water (sh18 c.43–45). Near despair, he says perhaps the boy was never born (c.55). Then he sees a young man by a spring, "tall as a cypress", with royal splendour (c.58–63). Kay Khosrow recognises Giv first, because his mother had told him a man named Giv would come (c.66–77). Giv asks for proof, and Khosrow shows the black birthmark on his arm that all Kayanian kings carry (c.81–85). Giv kneels and weeps (c.86). They fetch Siavash's black horse Behzad, whom Siavash had freed and told to wait for his son. The horse comes to Khosrow's saddle and lets him ride (c.120–134; Siavash's words to Behzad are at siavosh/sh11 c.98–103).

**Key couplets.**
- sh18 c.43–44: «چنین تا برآمد بر این هفت سال / میان سوده از تیغ و بند دوال // خورش گور و پوشش هم از چرم گور / گیا خوردن باره و آب شور»
- c.58: «یکی چشمه‌ای دید تابان ز دور / یکی سرو بالا دل آرام پور»
- c.84–85: «تو بگشای و بنمای بازو به من / نشان تو پیداست بر انجمن // برهنه تن خویش بنمود شاه / نگه کرد گیو آن نشان سیاه»
- sh11 c.102, Siavash to Behzad: «چو کیخسرو آید به کین خواستن / عنانش ترا باید آراستن»

**Care.** (1) **This must be cut:** at the start of the search Giv kills every lone traveller who cannot tell him where Khosrow is, so that no one learns his secret. He even kills a guide he had promised to reward (sh18 c.27–41: «چو گفتی ندارم ز شاه آگهی / تنش را ز جان زود کردی تهی»). This is killing of innocents and must not appear, even in softened form. (2) Kay Khosrow holds a cup of wine at the spring (c.59); make it a cup of water. (3) Siavash's death: say "his father had died"; Behzad was freed by Siavash "before he went away". (4) The flight that follows, with battles and Piran caught (sh19–20), should be left out or reduced to "they rode home to Iran".

**Age and softening.** 8–10. The heart of the story is faithfulness, recognition and a horse that keeps its promise, all of which survives intact.

**Parent note.** From the Shahnameh: the hero Giv searches for seven years for a lost prince and knows him at last by a birthmark. In the poem Giv is harsh to the people he meets on the way; that part is left out.

**Values.** Perseverance, faithfulness, hope, keeping a promise (Behzad).

**Questions.** 1. How did Giv know the young man was really Kay Khosrow? 2. Why do you think Giv kept going for seven years? 3. What is something you kept trying at for a long time?

---

## 8. انگشتری در خوراک: رستم بازرگان و رهایی بیژن (The ring in the food: Rostam the merchant rescues Bizhan)

**Source.** https://ganjoor.net/ferdousi/shahname/bizhan/sh4 , https://ganjoor.net/ferdousi/shahname/bizhan/sh9 , https://ganjoor.net/ferdousi/shahname/bizhan/sh10 , https://ganjoor.net/ferdousi/shahname/bizhan/sh11 [sh4, sh10, sh11 opened and read; sh9 fetched, but only its Ganjoor title used]. The first half (boar hunt, Gorgin, Manizheh) is https://ganjoor.net/ferdousi/shahname/bizhan/sh2 [opened]; see candidate 10.

**Plot from the poem (second half)** [opened]. Afrasiab is persuaded by Piran not to hang Bizhan. Instead Bizhan is chained head to foot, thrown into a pit, and the pit is sealed with Akvan's stone (sh4 c.52–78). Manizheh is stripped of her riches and driven barefoot to the pit (c.79–83). She begs bread from door to door every day and passes it to Bizhan through a gap, weeping (c.84–88). In Iran, Kay Khosrow sees Bizhan in his world-seeing cup and calls Rostam (sh5–sh8, from Ganjoor titles [opened]). Rostam goes to Khotan disguised as a merchant and opens a jewel shop (sh9 title [opened]). Manizheh comes to him for help. He has a roast fowl wrapped in soft bread and secretly hides his ring in it (sh10 c.47–50). Bizhan finds the ring, reads Rostam's name on it and laughs for joy (c.62–65). Through Manizheh, Rostam tells him to light a big fire at night to guide him (c.101–112). Rostam lifts the stone that seven champions could not move and throws it into the forest (sh11 c.7–15). Before pulling Bizhan up, Rostam asks him to forgive Gorgin, who betrayed him. Bizhan refuses, and Rostam says he will leave him in the pit; Bizhan forgives (sh11 c.22–33). Rostam pulls him out, thin and in chains, and breaks the chains (c.34–38).

**Key couplets.**
- sh4 c.86–87: «چو از کوه خورشید سر برزدی / منیژه ز هر در همی نان چدی // همی گرد کردی بروز دراز / بسوراخ چاه آوریدی فراز»
- sh10 c.48–49: «یکی مرغ بریان بفرمود گرم / نوشته بدو اندرون نان نرم // سبک دست رستم بسان پری / بدو درنهان کرد انگشتری»
- sh10 c.64: «نگینش نگه کرد و نامش بخواند / ز شادی بخندید و خیره بماند»
- sh11 c.24: «بمن بخش گرگین میلاد را / ز دل دور کن کین و بیداد را»

**Care.** (1) **Romance and sexual content:** in the first half Manizheh drugs Bizhan and carries him asleep to her palace, where they stay together (sh2 c.196–207). Afrasiab calls it a disgrace to his family (sh4 c.47–48). For 8–10 the framing must be "Bizhan and the princess Manizheh became friends, and her father, the king of Turan, was furious that she had befriended an Iranian". Not every adult will accept even that; a parent note should say plainly that in the poem they are in love. (2) Cruelty: the chains nailed on and a father throwing his daughter out barefoot (sh4 c.60–83) become "the king locked Bizhan in a deep pit and was angry with Manizheh too". (3) The night raid on Afrasiab's palace and the battle that follow (sh12–13) should be cut; end with Bizhan rescued and the three riding home. (4) Rostam's threat to leave Bizhan in the pit can stay: it is a firm teaching moment, not cruelty, and Bizhan is never actually left.

**Age and softening.** 8–10 in the "friendship" framing, 10–12 for the full love story. The ring-in-food trick, the signal fire, the stone and the forgiveness are among the most child-friendly moments in the whole Shahnameh.

**Parent note.** From the story of Bizhan and Manizheh. In the poem they are in love; here they are close friends. Notice that Rostam will not rescue Bizhan until he forgives the friend who betrayed him.

**Values.** Loyalty (Manizheh brings bread every day), cleverness, forgiveness, courage to help a friend in trouble.

**Questions.** 1. How did Bizhan know that help had come? 2. Why did Rostam ask Bizhan to forgive Gorgin first? 3. Is it hard to forgive someone who has hurt you? What helps?

**Iranian adaptations.** Azaryazdi's collection includes «بیژن و منیژه» [search]. Kanoon's «نامه نامور» has a «بیژن و منیژه» volume for teenagers [opened, hamshahrionline.ir/news/295045]. The fact that it sits in a teen series supports keeping the full romance at 10–12.

---

## 9. هفت‌خان رستم (Rostam's Seven Labours, all seven)

**Source.** https://ganjoor.net/ferdousi/shahname/kkavoos/sh4 (the call), …/sh5 (labour 1), …/sh6 (2), …/sh7 (3), …/sh8 (4), …/sh9 (5, with the land of darkness), …/sh10 (6), …/sh11 (7) [all opened]. Ganjoor titles sh9 "labours 5 and 6" and sh10 "labour 6"; the usual count is 5 = Olad, 6 = Arzhang, 7 = White Div, and the text bears this out.

**Labours 4–7 from the poem** (1–3 are above) [opened]:
- **4, the witch** (sh8). At a lovely spring Rostam finds a feast, wine and a lute. He sings of his hard life (c.11–16). A witch makes herself beautiful and sits by him (c.17–19). When he says God's name and hands her a cup, her face turns black (c.23–26). He lassos her and she becomes «یکی گنده پیری… پر آژنگ و نیرنگ» (c.29). He cuts her in two with his dagger (c.30).
- **5, Olad** (sh9). Rostam crosses a land of utter darkness (c.2–5), lets Rakhsh graze in a green wheatfield and sleeps (c.6–13). The field-keeper hits his foot with a stick and calls him a devil for letting his horse eat the crop (c.14–17). Rostam tears off both his ears without a word (c.18–19). The local lord Olad comes with riders. Rostam scatters them and lassos Olad (c.32–50). He promises Olad the kingdom of Mazandaran if he guides him truthfully (c.51–56), and Olad guides him (c.57–94). The promise is kept later: Ganjoor's kkavoos/sh16 title reads «…سپردن تاج به اولاد» [opened, title only].
- **6, Arzhang** (sh10). Rostam roars, pulls Arzhang's head off and throws it at the div army (c.3–7). He reaches Kavus, who recognises Rakhsh's neigh while still blind (c.15–17). Kavus tells him the doctors say the White Div's blood will heal the Iranians' eyes (c.34–37).
- **7, the White Div** (sh11). Rostam waits until the sun is hot and the divs sleep, as Olad advised (c.6–10). In a dark cave he finds the White Div "like a black mountain" (c.17–23) and is afraid (c.24). He cuts off a leg; they wrestle in blood (c.25–28). He kills the div and pulls out its liver (c.35–36). Three drops of its blood in Kavus's eyes, and the king sees again (c.58–59).

**Key couplets.**
- sh8 c.26–27: «سیه گشت چون نام یزدان شنید / تهمتن سبک چون درو بنگرید // بینداخت از باد خم کمند / سر جادو آورد ناگه ببند»
- sh9 c.51–52: «بدو گفت اگر راست گویی سخن / ز کژی نه سر یابم از تو نه بن // نمایی مرا جای دیو سپید / همان جای پولاد غندی و بید»
- sh10 c.17: «خروشیدن رخشم آمد به گوش / روان و دلم تازه شد زان خروش»
- sh11 c.58–59: «به چشم من اندر چکان خون اوی / مگر باز بینم ترا نیز روی // به چشمش چو اندر کشیدند خون / شد آن دیدهٔ تیره خورشیدگون»

**Care, labour by labour.**
- **4:** gender trope (beauty as deceit, an old ugly woman as evil) and a woman cut in half. Soften: when Rostam says God's name, the magic falls away and the witch vanishes like smoke. Do not dwell on "ugly old woman". This labour should not be a stand-alone story.
- **5:** Rostam is in the wrong (his horse ate someone's crop), and he maims the keeper. This is the worst behaviour-model in the cycle. Soften: the keeper shouts and runs to Olad, with no ears torn. Keep Olad's capture and the **kept promise**, which is the moral point. Also: the darkness simile «شب تیره چون روی زنگی سیاه» (sh9 c.3) is a racialised image and must never be carried into a retelling.
- **6:** beheading. Soften to "Arzhang's army fled". Keep Kavus hearing Rakhsh's neigh.
- **7:** dismemberment and the liver. Soften: Rostam wrestles the White Div down and defeats him, and the drops that heal the king's eyes stay. "Div's blood" can stay for 10+; for 8–10 use "the White Div's magic was broken, and the darkness lifted from the king's eyes". Rostam's moment of fear (c.24) is valuable: heroes are afraid too.
- **Othering:** Mazandaran here is a land of divs and sorcerers in the poem's mythic geography, not the modern province. Say so in the parent note, because Mazandarani children will hear it.

**Age and softening.** 8–10 for the full seven in one story (about 7–8 minutes). Labours 1, 2 and 3 work alone for younger children (candidates 1–3). Labours 4–7 should not be stand-alones.

**Parent note.** The Seven Labours of Rostam, from the Shahnameh. Ferdowsi's battles are much bloodier, and in one labour Rostam treats a farmer cruelly; those parts are softened or left out. The "Mazandaran" of this story is a land of legend, not the province of today.

**Values.** Perseverance, courage alongside fear, loyalty (Rakhsh), keeping promises (Olad), duty to others (saving the king and the army).

**Questions.** 1. Which labour was the hardest, and why? 2. Rostam promised Olad something; did he keep his word? Why does that matter? 3. What is a "labour" you had to get through, step by step?

**Iranian adaptations.** One of the most adapted episodes. A 2019 study of Shahnameh rewrites in the Shiraz University journal (Fazeli and Nasr Esfahani, «بررسی اصول و معیارهای بازنویسی…») lists Haft Khan rewrites among its sample, including a Kanoon edition. It found that rewriters simplified language without matching it to children's ages, attended to children's emotional, mental and social traits in content, and added little technical creativity [abstract, jcls.shirazu.ac.ir/article_4840.html]. The abstract does not discuss violence. I did not find a peer-reviewed Persian paper focused specifically on violence in Haft Khan rewrites; two searches did not surface one [search].

---

## 10. سیاوش و گذر از کوه آتش (Siavash and the mountain of fire)

**Source.** https://ganjoor.net/ferdousi/shahname/siavosh/sh4 [opened]. Ganjoor title: «کام‌جویی سودابه از سیاوش، تهمت ناروا و گذر بی‌گزند او از کوه آتش».

**Plot from the poem** [opened]. Sudabeh, Kavus's queen, desires her stepson Siavash. He refuses her, and she accuses him to the king (the first ~200 couplets). Kavus cannot tell who is truthful. By custom, the innocent will pass through fire unharmed (c.218). A hundred caravans of camels bring wood for two mountains of firewood (c.234–240). Siavash, dressed in white, with camphor on him as for a burial shroud, tells his ashamed father not to grieve: if I am innocent I will come through (c.249–257). He rides into the flames and comes out unharmed, "as if he held jasmine in his arms" (c.262–268). The people rejoice (c.269–272). Kavus embraces him and apologises (c.275–276). Kavus orders Sudabeh hanged. Siavash asks his father to pardon her, thinking his father would regret it later, and Kavus pardons her (c.285–308). Sudabeh soon begins plotting again (c.313–315).

**Key couplets.**
- c.255: «سر پر ز شرم و بهایی مراست / اگر بیگناهم رهایی مراست»
- c.267–268: «چنان آمد اسپ و قبای سوار / که گفتی سمن داشت اندر کنار // چو بخشایش پاک یزدان بود / دم آتش و آب یکسان بود»
- c.304: «به من بخش سودابه را زین گناه / پذیرد مگر پند و آید به راه»

**Care.** (1) **The Sudabeh accusation is sexual.** For 8–10 make it "the queen, who was jealous of Siavash, told the king a lie about him, and the king did not know whom to believe". Do not call her "stepmother" without context, to avoid the stepmother-as-villain stereotype; "the queen" is enough. (2) A trial by fire must not suggest to children that fire is safe or that people should prove innocence by danger. The parent note should say this was an old custom in the story and is about trust in truth. (3) The death sentence on Sudabeh becomes "the king wanted to punish her severely". (4) Siavash's later fate (exile, Siavashgerd, death at Afrasiab's order, siavosh/sh9–sh11 [opened]) is not part of this story.

**Age and softening.** 8–10 in the "lie" framing; the full story with Sudabeh's motive is 10–12. The forgiveness scene is the centre and should end the story.

**Parent note.** From the story of Siavash in the Shahnameh: a prince proves his honesty by riding through fire, then asks the king to forgive the person who lied about him. In the poem the queen's lie is about wanting his love; here it is just a lie.

**Values.** Honesty, inner calm when falsely accused, mercy, forgiving even when you were wronged.

**Questions.** 1. How did Siavash feel before he rode into the fire? 2. Why did he ask his father to forgive the queen? 3. Have you ever been blamed for something you didn't do? How did you show the truth?

**Iranian adaptations.** «سوگ سیاوش» appears among the analysed rewrites listed in Fazeli and Nasr Esfahani 2019 [abstract]. Kanoon's teen volume «سیاوش» (Atousa Salehi) is told through fire, water, earth and air [opened, hamshahrionline.ir/news/295045]. Azaryazdi has a «سیاوش» [search].

---

## 11. Bizhan's boar hunt and Gorgin's jealousy (first half of Bizhan and Manizheh)

**Source.** https://ganjoor.net/ferdousi/shahname/bizhan/sh2 [opened].

**Plot** [opened]. People from Arman on the border beg Kay Khosrow to rid them of giant boars that destroy their fields and orchards (c.18–36). Only young Bizhan volunteers; his father Giv warns him he is untested (c.48–59). Gorgin goes as guide (c.67–68). Bizhan clears the forest of boars alone while Gorgin watches. Gorgin, ashamed and jealous, decides to trap him (c.100–106). He praises Bizhan, then tempts him to a nearby Turanian spring festival where Afrasiab's daughter Manizheh is, suggesting they "seize a few fairy-faced girls and take them to the king" (c.121–134). Bizhan goes, Manizheh falls in love with him, drugs him and carries him to her palace (c.155–207).

**Key couplet.** c.104, Ferdowsi on Gorgin: «کسی کو به ره بر کند ژرف چاه / سزد گر نهد در بن چاه گاه»

**Care.** Gorgin's suggestion to abduct girls (c.134), the drugging (c.198), and three days of drinking (c.196) make this half unsuitable below 10. For 10–12 the hunt and the betrayal can be told and the festival kept as "Gorgin tempted him into Turan, where he was not allowed to go". The killing of the boars is a pest-control hunt and is acceptable.

**Age.** 10–12, care. Better merged into candidate 8 as a one-paragraph "how Bizhan got into trouble".

**Values.** Courage, the danger of jealousy and flattery, listening to a parent's warning.

**Questions.** 1. Why did Gorgin turn against Bizhan? 2. What did Ferdowsi mean by "whoever digs a pit in the road should build his own seat at the bottom"? 3. How do you tell a friend's praise from flattery?

---

## 12. رستم و اسفندیار (Rostam and Esfandiyar)

**Sources.** https://ganjoor.net/ferdousi/shahname/esfandyar/sh28 [opened]. The structure comes from the part index [opened]: sh4 (Goshtasp orders Rostam bound as the price of the crown), sh12 (the meeting by the Helmand), sh24–26 (Rostam wounded; the Simorgh heals him and reveals the tamarisk arrow), sh28 (the arrow in the eye), sh29 (Esfandiyar entrusts his son Bahman to Rostam).

**Plot** [opened for sh28; the rest from Ganjoor's section titles, opened]. King Goshtasp, fearing his son's ambition, promises Esfandiyar the throne if he brings Rostam in chains, knowing a prophecy that Esfandiyar will die by Rostam's hand. Rostam offers friendship, feasts and gifts but will not accept chains. Neither will back down. Esfandiyar, whose body cannot be wounded, nearly kills Rostam and Rakhsh. The Simorgh heals them and tells Rostam the secret: a tamarisk arrow aimed at the eyes. Rostam begs once more for peace, then shoots (sh28 c.13–14: «تهمتن گز اندر کمان راند زود / بران سان که سیمرغ فرموده بود // بزد تیر بر چشم اسفندیار / سیه شد جهان پیش آن نامدار»). Dying, Esfandiyar blames his father, not Rostam, and gives his son to Rostam to raise (sh29 title).

**Care.** A hero's death; a father who sends his son to die; Rakhsh badly wounded; the Simorgh, whom children know from "Zal and the Simorgh", gives the fatal secret. Rostam's own doom is foreshadowed. The poem includes long insulting boasts about each other's ancestry (sh15–sh18 titles). There are no sexual elements.

**Age.** 10–12, care. This is the epic's deepest moral dilemma (obedience against honour, a bad order from a ruler) and suits 11–12-year-olds who can discuss it. Do not soften the ending into a happy one: tell the death briefly and without gore, and end on Esfandiyar's forgiveness and Bahman.

**Parent note.** One of the Shahnameh's great tragedies: two good men, each bound by honour, cannot find a way out. Ferdowsi wants us to ask who is really to blame.

**Values.** Integrity, the limits of obedience, regret, the cost of pride.

**Questions.** 1. Could Rostam or Esfandiyar have chosen differently? 2. Who does Esfandiyar blame at the end, and why? 3. What should you do if someone in charge asks you to do something wrong?

**Iranian adaptations.** Kanoon's «رستم و اسفندیار» by Marjan Fooladvand begins with Rostam's death and tells the story looking back [opened, hamshahrionline.ir/news/295045], for teenagers.

---

## 13. رفتن کیخسرو (Kay Khosrow's farewell)

**Sources.** https://ganjoor.net/ferdousi/shahname/mahmood/sh45 [opened]; the arc runs mahmood/sh28–sh46 (part index [opened]).

**Plot** [opened for sh45; the rest from section titles]. After sixty years of just rule and the defeat of Afrasiab, Kay Khosrow fears he will become proud like the old kings. He prays for weeks, and in a dream Sorush tells him it is time to leave (sh28–sh31). Zal argues with him, then apologises (sh34–sh36). He gives away his treasures, gives Rostam and others their lands, names Lohrasp king, and walks to the mountains with his companions (sh37–sh44). At a spring he washes, prays, and says: when the sun rises you will not see me again except in dreams; go back, for a storm and heavy snow are coming (sh45 c.1–7). At sunrise he is gone (c.9). Zal, Rostam and Goudarz go back. Fariborz, Giv, Tus, Bizhan and Gostaham stay by the spring and die in the snow (sh45 c.15–18; sh46 title: «مرگ نامداران در برف»).

**Key couplets.**
- sh45 c.4: «کنون چون برآرد سنان آفتاب / مبینید دیگر مرا جز به خواب»
- c.9: «چو از کوه خورشید سر برکشید / ز چشم مهان شاه شد ناپدید»
- c.22: «خردمند از این کار خندان شود / که زنده کسی پیش یزدان شود»

**Care.** The mysterious disappearance is poetic, but it can read to a child as a loved one vanishing. The beloved heroes (Giv and Bizhan from candidates 7 and 8) die in the snow because they did not listen. Religious content is substantial.

**Age.** 10–12, care. It makes a fine close to a Kay Khosrow mini-series for 10–12. Do not invent a survival for the heroes. Say they "stayed behind, and never came home", and let the parent explain.

**Parent note.** From the Shahnameh: a king who could have kept everything chooses to give it away and leave while he is still good. The story is about knowing when to let go.

**Values.** Humility, giving up power, wisdom, listening to warnings.

**Questions.** 1. Why did Kay Khosrow leave his throne? 2. Why did some heroes go back and others stay? 3. Is it ever brave to stop and step aside?

---

## 14. هفت‌خوان اسفندیار (Esfandiyar's Seven Labours)

**Sources.** https://ganjoor.net/ferdousi/shahname/7esfandyar/sh2 , …/sh3 , …/sh4 , …/sh5 , …/sh6 [sh4 and sh6 opened; others from titles].

**Plot** [opened in part]. To rescue his captive sisters from Arjasp's Brazen Fortress (رویین‌دژ), Esfandiyar forces a captured Turanian, Gorgsar, to guide him. He kills two wolves (1), a lion and lioness (2), and a dragon, using a wooden wagon set with blades and a box he sits inside (3: sh4 c.15–16 «یکی نغز گردون چوبین بساخت / به گرد اندرش تیغها در نشاخت»; c.35 the dragon swallows the wagon and the blades catch in its mouth). He kills a witch (4) and a Simorgh-like bird (5: sh6, «سیمرغ»). He crosses snow and a sea (6–7), **kills Gorgsar** after the labours (sh8 title: «…کشتن گرگسار…»), and enters the fortress disguised as a merchant (sh9).

**Care.** (1) **Esfandiyar kills a Simorgh**, which will confuse and upset children who know the kind Simorgh from "Zal and the Simorgh" (`src/data/stories.ts:121`). Whether it is the same bird is debated; most readers take it as a different one [recall, unverified]. (2) He kills his guide instead of freeing him, the opposite of Rostam's promise to Olad. (3) The frame is a religious war (Goshtasp and the spread of Zoroaster's faith, from the Goshtasp section titles [opened]).

**Age.** 10–12, low priority. Its best use is comparison: "how is Esfandiyar's journey different from Rostam's?" (the guide, the Simorgh), for 11–12. The bladed-wagon trick alone could be a short 8–10 anecdote, but it has no moral centre.

**Values (as a comparison story).** Means and ends, keeping promises, cleverness.

**Questions.** 1. How did Esfandiyar defeat the dragon? 2. What did Rostam do with his guide Olad, and what did Esfandiyar do with Gorgsar? 3. Is a clever trick always a good one?

---

## 15. رستم و سهراب (Rostam and Sohrab): 11–12 only, parent-led, or keep out

**Source.** https://ganjoor.net/ferdousi/shahname/sohrab/sh18 [opened]; also sh5 [opened].

**Plot** [opened]. Sohrab, Rostam's son by Tahmineh of Samangan, learns from his mother at about ten that his father is Rostam (sohrab/sh5 c.12 «تو پور گو پیلتن رستمی»). Rostam had sent gifts for the child (c.17). Sohrab plans to conquer Iran and put Rostam on the throne (c.26, c.29). Rostam hides his name (sh13–14 titles). On the second day of wrestling Rostam stabs Sohrab. Dying, Sohrab says his father will avenge him and shows the token his mother tied on his arm. Rostam recognises it (sh18 c.13–30: «یکی مهره بر بازوی من ببست // مرا گفت کاین از پدر یادگار…»). Kavus refuses the healing potion (sh19 title), and Sohrab dies.

**Care.** A father kills his son. This is the most grievous scene in Persian literature for a child, and the tragedy depends on the death, so no softening keeps it recognisable. Kavus withholding the cure adds cruelty.

**Recommendation.** Keep out of the default library. If the owner wants it, use 11–12 only, parent-led, with a strong note. There is precedent for a 10–11 audience in Iran: «سوگنامه رستم و سهراب» by Mahmoud Mosharraf Azad Tehrani is listed for "group C (10–11)" [search, taaghche.com/book/206287]. Azaryazdi's version reportedly summarises the death very briefly [search, weak and unverified]. The Gordafarid story already in the app is the right way for younger children to meet Sohrab.

**Owner decision (20 November 2026): in, for 11 to 12, read with a parent.** Written as `rostam-and-sohrab` from sohrab/sh4–sh21 [opened, all sections read through the Ganjoor API]. Kept from the poem: Afrasiyab's order that father and son must not know each other (sh6 c.9–13), Hajir hiding Rostam's tent (sh13 c.41–43, 100–104), Rostam's denial (sh14 c.51–55), Ferdowsi's couplets on animals knowing their young (sh15 c.14–15), Sohrab's offer of peace (sh17 c.21–26), the first-throw trick (sh17 c.43–51), the bead (sh18 c.26–34), Sohrab's plea for the Turanian army (sh18 c.53–56), Kavus refusing the cure (sh19 c.9–14), Rostam's call to end the war (sh18 c.66; sh20 c.49–54) and the closing couplet (sh21 c.27). Left out: Tahmineh's night visit (sh4), wine (sh11, sh17 c.6, sh19 c.6), Rostam killing Zhende-razm at night (sh12), blood and tearing of clothes and hair (sh18 c.34–36), and Rostam's attempt on his own life (sh18 c.71–77).

---

## Stories to keep out, and why

- **The death of Siavash** (siavosh/sh11, sh12) [opened]. An innocent prince is beheaded over a golden basin (sh11 c.235); his pregnant wife Farangis is dragged to the killing ground (sh12 title). Use it only as background ("his father had died") in candidates 6 and 7.
- **Forud** (forood/sh2–sh15) [opened]. Siavash's elder son is killed by Iranian heroes because Tus is arrogant. His mother Jarireh burns the treasure, kills the horses, then kills herself over her son's body (forood/sh15 c.42–46: «شکمشان بدرید و ببرید پی… شکم بردرید و برش جان بداد»). Suicide and the killing of animals rule it out for every age band in this app. The one gentle scene, Bahram recognising Forud by Siavash's birthmark (forood/sh6 c.47–48), cannot be told without the doom that follows.
- **Rostam's death** (shqad/sh2–sh6) [opened sh4]. His half-brother Shaghad plots with the king of Kabul; Rostam and Rakhsh fall into a pit lined with blades. Dying, Rostam asks for his bow and pins Shaghad to a plane tree (sh4 c.33–37). Faramarz's revenge hangs the king in a pit and burns Shaghad (sh6 title). Rakhsh dies too, and children who loved the Rakhsh stories should not meet this.
- **Rostam and Sohrab**: see candidate 15; out of the default library.
- **Labours 4 and 5 as stand-alone stories.** They only work inside the full Haft Khan with the softening above.
- **The flight of Kay Khosrow, Giv and Farangis** (siavosh/sh19–20). Battle, and Piran's ear pierced (sh19 title: «…سوراخ کردن گوش…»). Summarise or omit.

## Problems found in the existing records

Checked against hamavaran/sh8, hamavaran/sh9, sohrab/sh5, sohrab/sh6 and sohrab/sh7 [all opened].

**kavus-and-the-flying-throne** (`src/data/stories-persian.ts:729`). The story is faithful. The eaglets fed on fowl and lamb (sh8 c.26), the aloeswood throne joined with gold (c.28), four eagles (c.31), the fall near Amol (c.42), Goudarz's rebuke (sh9 c.3–18), the forty days (sh9 c.24) and Siavash still to be born (sh8 c.43–44) all match. No P1 problems.
- **P3, note.** "Ferdowsi says Kavus meant to make war on the sky with his bow." Ferdowsi gives two reports and endorses neither: «شنیدم که کاووس شد بر فلک / همی رفت تا بر رسد بر ملک // دگر گفت ازان رفت بر آسمان / که تا جنگ سازد به تیر و کمان // … نداند به جز پر خرد راز این» (sh8 c.36–38). Suggested wording: "Ferdowsi gives two reasons he had heard: to reach the angels, or to fight the sky with his bow."
- **P3, paragraph 9.** "Rostam, Giv and Tus searched far and wide until they found him." In the poem the army searches, and Rostam, Giv and Tus "got word of him" and came with an army (sh9 c.1–2). This is harmless, but "heard where he was and rode to find him" is closer.
- **P3, paragraph 6.** "Kavus was bursting with pride" is not in the poem. Ferdowsi's own comment is «چنین باشد آنکس که گیردش آز» (sh8 c.39: "so it goes for whoever greed takes hold of"), which could be echoed instead.

**gordafarid-and-the-white-fortress** (`src/data/stories-persian.ts:774`). The story is faithful. Hajir is indeed «نگهبان دژ» (sohrab/sh6 c.32), so "commander" is fine. Gordafarid is Gazhdaham's daughter (sh7 c.1). The hidden hair (c.6), arrows (c.14–15), the spear cut in two (c.27), the lasso (c.35) and her speech (c.40–46) all match. No P1 problems.
- **P2, note.** "Sohrab is Rostam's son, though neither of them knows it yet" is wrong. Sohrab knows: his mother tells him «تو پور گو پیلتن رستمی» (sohrab/sh5 c.12), and he plans to put Rostam on the throne «چو رستم پدر باشد و من پسر» (c.29). Rostam knows he has a child, since he had sent gifts (c.17). What neither knows is the other's face when they meet. Suggested: "Sohrab is Rostam's son. He knows his father's name but has never seen him, and when they meet they do not recognise each other; their story ends sadly."
- **P3, paragraph 6.** "Now that they have seen my face and hair" should be conditional. Ferdowsi has «کنون من گشایم چنین روی و موی / سپاه تو گردد پر از گفت‌وگوی» ("if I now uncover my face and hair, your army will be full of talk", sh7 c.41). Suggested: "If they see that you have been fighting a girl, your soldiers will be full of talk."
- **P3, paragraph 9.** "He had lost the fortress so easily" slightly reframes c.73 («چو بشنید سهراب ننگ آمدش / که آسان همی دژ به چنگ آمدش»: he is stung, having thought the fortress was as good as his). The poem then has him plunder the land below and vow to take the fortress at dawn (c.75–77). The softening is acceptable; "He had thought the fortress was as good as his" is closer.

## Sources

**Poem (Ganjoor API, verse text) [opened].** Base URL `https://api.ganjoor.net/api/ganjoor/page?url=/ferdousi/shahname/...`. The human-readable pages are at `https://ganjoor.net/ferdousi/shahname/...`.
- Part indexes: kkavoos, hamavaran, sohrab, siavosh, kkhosro, forood, akvan, bizhan, mahmood, 7esfandyar, esfandyar, shqad; root `/ferdousi/shahname`.
- Sections read: kkavoos/sh4–sh11; hamavaran/sh8–sh9; sohrab/sh5, sh6, sh7, sh18; siavosh/sh3, sh4, sh11, sh13, sh17, sh18; akvan/sh1; bizhan/sh2, sh4, sh9, sh10, sh11; forood/sh6, sh15; 7esfandyar/sh2–sh6; esfandyar/sh28; mahmood/sh45; shqad/sh4.

**Scholarship and adaptations.**
- Fazeli, M. and Nasr Esfahani, R. (1398/2019). «بررسی اصول و معیارهای بازنویسی در ادبیات کودکان و نوجوانان (مطالعهٔ موردی: بازنویسی‌های شاهنامهٔ فردوسی)». *مطالعات ادبیات کودک*, Shiraz University, 10(1): 149–172. https://jcls.shirazu.ac.ir/article_4840.html [abstract and appendix list].
- Hamshahri Online, 1394, on Kanoon's 12-volume teen series «نامه نامور». https://www.hamshahrionline.ir/news/295045 [opened].
- Maryam Jalali's thesis on Shahnameh adaptations for children, from the Constitutional era to 1385, as described in search snippets: prose rewriting is the most frequent form, and adaptations rise from the 1370s. https://ccls.shirazu.ac.ir/documents/611430/618073/dr%2C%20jalali%20per.pdf [search; the PDF could not be read].
- Azaryazdi, «قصه‌های خوب برای بچه‌های خوب», Shahnameh volume (Haft Khan, Rostam and Sohrab, Bizhan and Manizheh, Siavash) [search].
- Mosharraf Azad Tehrani, «سوگنامه رستم و سهراب», group C. https://taaghche.com/book/206287 [search].
- Critique of a rewritten Zal and Rudabeh, from text and image. https://rp.razi.ac.ir/article_2415.html [search].
- **Gap.** I found no Persian peer-reviewed paper specifically on violence (خشونت) in children's Shahnameh rewrites in three searches. The papers found deal with rewriting criteria, history and illustration. Next round: search Noormags, SID or Ensani with «خشونت» together with «ادبیات کودک» and «حماسه».
