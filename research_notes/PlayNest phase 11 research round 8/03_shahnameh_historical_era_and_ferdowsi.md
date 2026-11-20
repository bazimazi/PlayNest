# 03: Shahnameh, the historical (Sasanian) era, and Ferdowsi himself

Research round 8, phase 11. Written 2026-11-20. Research notes only: no app code was changed.

**Evidence tags.** [opened] means I fetched the Ganjoor API page in this session and read the text quoted or summarised. [abstract] means I read only a summary or section title. [search] means it comes from a search-result snippet. [recall, unverified] means it comes from my own knowledge and was not checked this session. The Ganjoor API endpoint used was `https://api.ganjoor.net/api/ganjoor/page?url=/ferdousi/shahname/...`, and plain text came from `poem.plainText`.

**Couplet numbers.** "b. 15" means couplet (بیت) 15 of that Ganjoor section, counted from the section's first verse. I checked the counting against the API's `coupletIndex` for bahgoor/sh19 [opened]. Two sections, aghaz/sh2 and anooshirvan/sh63, begin with a sub-heading line, and I left that line out of the count.

---

## 1. Scope

- **Part 1: the historical Shahnameh.** This runs from Ardashir's youth in the Parthian section (اشکانیان) to the end of the Sasanians, plus the prologue in praise of wisdom (ستایش خرد) and the poet's closing lines (انجام شاهنامه).
- **Part 2: Ferdowsi's life.** It separates what is known from what is legend. The main legend source is the Ferdowsi anecdote in Nezami Aruzi's *Chahar Maqaleh*, which I found on Ganjoor and read in full [opened].
- **Part 3: the nard activity.** It checks the app activity `takhteh-nard-bozorgmehr` against the poem.

Part names on Ganjoor were confirmed from the root page `/ferdousi/shahname` [opened]. The ones used here are:

| Slug | Part |
|---|---|
| `aghaz` | the opening of the book |
| `ashkanian` | the Parthians, including Ardashir's youth and Haftvad |
| `ardeshir` | Ardashir's reign |
| `zolaktaf` | Shapur II (Zu'l-Aktaf) |
| `bezehgar` | Yazdgerd the Sinful, including Bahram Gur's youth |
| `bahgoor` | Bahram Gur |
| `qobad` | Qobad, including Mazdak |
| `anooshirvan` | Khosrow Anushirvan, including Bozorgmehr |
| `parviz` | Khosrow Parviz, including Barbad |
| `yazdgerd3` | Yazdgerd III, including the closing of the book |

---

## 2. Ranked table

| # | Story (Persian title) | Ganjoor | Age band | Softening needed | Verdict |
|---|---|---|---|---|---|
| 1 | شاپورِ کودک و پلِ دوم | zolaktaf/sh1 | **4–6**, 6–8 | almost none | **Top pick** |
| 2 | باربد و سروِ سبز | parviz/sh70 | **6–8**, 8–10 | light (wine, bribe) | **Top pick** |
| 3 | بهرام گور و گاوِ بی‌شیر | bahgoor/sh19 | 6–8, **8–10** | moderate (wine, lamb, the wife's rant, tax-officer complaints) | **Top pick** |
| 4 | بهرام گور و گنجِ گاوانِ جمشید | bahgoor/sh11 | **6–8**, 8–10 | light (wine, "sword") | **Top pick** |
| 5 | بابکِ دبیر و شاهی که باید سان ببیند | anooshirvan/sh4 | 6–8, **8–10** | none (armour only) | **Strong pick** |
| 6 | بزرگمهرِ نوجوان از مکتبِ مرو | anooshirvan/sh32, sh33 (+ sh35 b. 6) | 6–8, **8–10** | heavy at one point: the dream content must go | Pick, with the dream content cut |
| 7 | بزرگمهر و درجِ قفل‌شده | anooshirvan/sh76, sh77, sh78 (+ sh73, sh74, sh79) | **8–10**, 10–12 | heavy (prison, blinding, the three-women clue) | Pick, with a defined cut |
| 8 | اردشیرِ جوان، تیرِ راست و غرمِ دونده | ashkanian/sh4, sh5, sh8 | **8–10** | moderate (leave out Golnar under 10) | Pick |
| 9 | فردوسی و شاهنامه (افسانهٔ پاداشِ محمود) | yazdgerd3/sh17; bezehgar/sh17 b. 27–32; Chahar Maqaleh | **8–10, 10–12**, marked as legend | moderate (sectarian slurs, the satire, the drink) | **Pick** (pairs with Ferdowsi Day) |
| 10 | ستایش خرد + «تخم سخن» (read-aloud verse) | aghaz/sh2; yazdgerd3/sh17 b. 22 | 6–12 | none | Pick, as a verse card, not a story |
| 11 | پندهای بزرگمهر (proverb cards) | anooshirvan/sh37 | 8–12 | choose lines | Optional |
| 12 | بهرام و تاجِ میانِ دو شیر | bezehgar/sh15–17 | 10–12 | heavy (killing chained lions) | Conditional |
| 13 | کفشگر و وامِ شاه | anooshirvan/sh88 | 10–12 | the class message must be framed | Conditional: discussion only |
| 14 | هفتواد و کرمِ سیب | ashkanian/sh15–21 | 10–12 | heavy (idol-worm, molten metal, hanging) | Conditional, low priority |

Rank 1 (Shapur's bridge) fills the 4–6 band, which this era otherwise barely serves. Ranks 2–5 are the strongest 6–10 stories and need little softening. Ranks 6–8 work but each needs a cut defined in advance, and the cut must be written into the source notes.

---

## 3. Candidates

### 3.1 The child king and the second bridge (شاپورِ کودک و پلِ دوم)

**Source:** https://ganjoor.net/ferdousi/shahname/zolaktaf/sh1 [opened]. Ganjoor's title is «شهریاری پنج‌سالهٔ شهرو، فرمان پلی دیگر بر دجله و آیین تخت شاپور خردسال».

**Plot from the poem** [opened]:
- Shapur II became king as a baby, and a wise mobad named Shahru ruled for him justly for five years.
- One evening at Ctesiphon, the five-year-old king heard a loud din from the Tigris (اروندرود) and asked what it was.
- The mobad explained: merchants and shopkeepers were walking home from their stalls, and on the one narrow bridge, people going and people coming crushed and shouted at each other.
- The little king ordered a second bridge, "one way for going and one for coming back", paid for from the treasury so his people would not suffer like this.
- The mobads were overjoyed: "the young tree has already turned green".
- His mother was delighted and found him teachers. He soon outgrew them, learned riding and polo at seven, and at eight sat as king in Estakhr.

**Key couplets** [opened]:
- b. 6: چنین تا برآمد برین پنج سال / برافراخت آن کودک خرد یال
- b. 15: پلی دیگر اکنون بباید زدن / شدن را یکی راه باز آمدن
- b. 17: به رفتن نباشند زین سان به رنج / درم داد باید فراوان ز گنج
- b. 18: همه موبدان شاد گشتند سخت / که سبز آمد آن نارسیده درخت

**Needs care:** almost nothing. The only point is that Shapur II's later stories are violent: the Ghassanid princess Malekeh, the piercing of Arab captives' shoulders that gave him the name *zu'l-aktaf*, and the donkey-hide captivity in Rum. Section titles sh2–sh6 show this [abstract]. The app must not link this story to those, and should not use the epithet ذوالاکتاف in the child-facing text. Call him «شاپورِ کودک» or «شاپور دوم».

**Age band:** 4–6 and 6–8. The hero is a five-year-old, the problem (a crowded bridge) is concrete, and the solution is one a child can see and draw. It has no villain and no violence.

**Softening:** none needed. A gentle frame helps: "a grown-up ruled for him until he was big enough". Keep the noise, the question, and the "go-bridge and come-back-bridge".

**Parent note:** "A five-year-old king noticed that people were having a hard time and thought of a fix: a second bridge. Ask your child what they notice that could be made easier for others."

**Values:** noticing others, problem-solving, asking questions, kindness through action.

**Questions to ask afterwards:**
1. What did little Shapur hear, and what did he ask?
2. Why did one bridge make people unhappy, and how did two bridges help?
3. Is there a "crowded bridge" at our home or school? How could we fix it?

---

### 3.2 Barbad in the cypress tree (باربد و سروِ سبز)

**Source:** https://ganjoor.net/ferdousi/shahname/parviz/sh70 [opened]. Ganjoor's title is «راه بستن سرکش بر باربد، نواختن سه سرود نهان بر سرو و مهتر شدن او بر رامشگران».

**Plot from the poem** [opened]:
- In Khosrow Parviz's 28th year as king, Barbad heard that the king's chief musician, Sarkash, ruled the court's music. He came to court to be heard.
- Sarkash, afraid of being outshone ("we have grown old and he is new"), paid the chamberlain to keep Barbad out.
- Barbad, refused entry, made friends with Mardui, the gardener of the royal garden where the king spent two weeks at Nowruz.
- On the feast day, Barbad dressed all in green, took his barbat (lute) up into a thick green cypress, and waited.
- At dusk he played and sang a song (later called «داد آفرید»). The court was amazed and searched the garden, but found no one.
- A second song followed («پیکار گرد»), and they searched again with lamps under the trees, finding only willows, cypresses and pheasants. A third song followed («سبز در سبز»).
- The king said that if this were an angel it would be made of musk and ambergris, and a demon could not sing like this. Whoever it was, he would fill his mouth with jewels and make him chief of musicians.
- Barbad climbed down and bowed. Khosrow was delighted and scolded Sarkash: "you are like bitter colocynth and Barbad like sugar".
- Barbad became king of musicians. Ferdowsi ends: «سر آمد کنون قصه باربد / مبادا که باشد تو را یار بد».

**Key couplets** [opened]:
- b. 25: همه جامه را باربد سبز کرد / همان بربط و رود ننگ و نبرد
- b. 27: یکی سرو بد سبز و برگش گشن / ورا شاخ چون رزمگاه پشن
- b. 53–54: چنین گفت کاین گر فرشته بدی / ز مشک و زعنبر سرشته بدی // وگر دیو بودی نگفتی سرود / همان نیز نشناختی زخم رود
- b. 63: به سرکش چنین گفت کای بد هنر / تو چون حنظلی باربد چون شکر

**Needs care:**
- Wine runs through the scene. The king takes a cup of wine (نبید) before each song and downs "a man (من) of wine" in one draught (b. 52) [opened].
- Bribery: Sarkash pays the chamberlain.
- Barbad's motive is first described as greed: «بجوشیدش آز».
- The "fill his mouth with pearls" reward is fine as an image.

**Age band:** 6–8 and 8–10. It works like a hide-and-seek mystery with music. The conflict is jealousy, which children understand, and nobody is hurt.

**Softening:**
- Replace the wine with "the king raised his cup" or "a bowl of sherbet", or simply leave the drink out.
- Keep the three songs and their names.
- Keep Sarkash's jealousy but drop the bribe, or soften it to "asked the gatekeeper to keep him out". End with Sarkash forgiven, not just shamed. This is an addition: say so in the source notes.
- Change Barbad's motive to "wanted his music to be heard".

**Parent note:** "When a door was closed to him, Barbad didn't give up or get angry. He found a clever, peaceful way to be heard. Talk about jealousy too: Sarkash was afraid someone else would be better."

**Values:** perseverance, creativity, music, overcoming jealousy, friendship (the gardener).

**Questions to ask afterwards:**
1. Why did Barbad wear green and climb a cypress?
2. How do you think Sarkash felt, and what could he have done instead?
3. If a door is closed to you, what clever and kind ways could you try?

**Extra:** this pairs well with a music activity, such as naming three "songs" in your own family, or with the cypress (سرو) as a Persian symbol.

---

### 3.3 Bahram Gur and the cow whose milk dried up (بهرام گور و گاوِ بی‌شیر)

**Source:** https://ganjoor.net/ferdousi/shahname/bahgoor/sh19, the second half, from about b. 19 [opened]. Ganjoor's title is «کشتن اژدها، میهمانی نهانی بهرام گور و خشک شدن شیر گاو از بیداد».

**Plot from the poem** [opened]:
- After killing a dragon, Bahram, sick from its venom, rode alone in disguise towards a village "to see whether there is justice in the world".
- A woman carrying a water jar welcomed the unknown horseman: "treat this house as your own".
- She swept, spread a mat and served greens, vinegar, bread and yoghurt. She scolded her old husband (a gardener) and insisted he kill their lamb for this noble-looking guest.
- At night the king asked her for a story and asked what people thought of King Bahram. She said the king was good, but his officials and tax-men passing through accuse people of theft to squeeze money from them and slander honest women.
- Bahram was stung and thought: "nobody thanks a just ruler; I'll be harsh for a few months so that justice and kindness are valued". He slept "with his heart paired with injustice".
- At dawn the woman went to milk the cow, but the udder was empty. She told her husband: "the king's heart has turned to injustice. When a king becomes unjust, milk dries in the udder".
- Bahram heard this and repented at once, praying: "if my heart turns from justice, let me have no throne".
- She tried again, "in the name of the Lord of Zoroaster", and milk poured out. She said: "the unjust one has become just again".
- She cooked milk-porridge (شیربا). Bahram told her to hang his whip on a tree by the door. His army appeared, everyone bowed to the whip, and the couple realised who their guest was and came to apologise.
- Bahram gave them the village: «ترا دادم این مرز و این خوب ده / همیشه جز از میزبانی مکن».

**Key couplets** [opened]:
- b. 28: چنین گفت زن کای نبرده سوار / تو این خانه چون خانه خویش دار
- b. 67: درشتی کنم زین سخن ماه چند / که پیدا شود داد و مهر از گزند
- b. 75: تهی بود پستان گاوش ز شیر / دل میزبان جوان گشت پیر
- b. 80: چو بیدادگر شد جهاندار شاه / ز گردون نتابد ببایست ماه
- b. 92: ز پستان گاوش ببارید شیر

**Needs care:**
- Wine: the woman brings «کدوی می» at night.
- A lamb is slaughtered.
- The wife insults her husband («زشت ناشسته روی»).
- Her list of the signs of an unjust king (b. 82–84) includes «زنا و ربا آشکارا شود», wolves eating people and eggs spoiling. Leave all of that out.
- She complains about officials slandering women.
- The religious formula «به نام خداوند زردشت» is a fact of the text. In a Persian app for Iranian families it is fine to keep "she prayed" generically.
- The dragon-killing opening (a young man found dead inside the dragon) must be cut.

**Age band:** 8–10 as told in full; 6–8 in a simple version. The idea that a thought can change the world (a moral metaphor) is grasped better from about 7–8. The "king in disguise" frame is easy at 6.

**Softening:**
- Start at the village. Bahram is just "tired from a long hunt".
- The meal is bread, yoghurt and greens, with no lamb (or "she cooked a warm stew").
- Drop the wine, the insult and the lurid signs.
- Keep exactly one complaint: "the king is good, but some of his officials are unfair to people".
- Keep the king's unjust thought: he decides to be harsh for a while so people will value justice.
- Keep the dry udder, the repentance, the milk returning, the whip on the tree, and the gift of the village.

**Parent note:** "In this old story, a king's unfair thought dried up a cow's milk, and his change of heart brought it back. It's a picture, not a science lesson. Our choices, even private ones, affect the people around us."

**Values:** justice, hospitality, listening to ordinary people, admitting a mistake and changing.

**Questions to ask afterwards:**
1. What did the king think at night, and why was it a bad idea?
2. Why do you think the storyteller made the milk dry up? What is it a picture of?
3. Have you ever changed your mind after hearing someone's side? What happened?

---

### 3.4 Bahram Gur and the treasure of Jamshid's oxen (بهرام گور و گنجِ گاوانِ جمشید)

**Source:** https://ganjoor.net/ferdousi/shahname/bahgoor/sh11 [opened]. Ganjoor's title is «یافتن گنج گاوان جمشید به نشان دهقان، نپذیرفتن بهرام و بخشش گوهر به نیازمندان».

**Plot from the poem** [opened]:
- A dehqan (farmer-landowner) came to the hunting ground and insisted on speaking only to the king.
- He explained: while he was watering his land, the water broke through a bank, and from the hole came a strange booming sound that seemed to point to a treasure.
- Bahram had workers dig. They found a vaulted brick chamber.
- Inside stood two golden buffaloes at a golden manger filled with emeralds and rubies. Their hollow bellies were full of golden pomegranates, apples and quinces with pearls inside. Around them were golden lions, onagers, pheasants and peacocks with jewel eyes.
- The chief mobad read the seal: it was Jamshid's.
- Bahram refused it. Why should I make another king's treasure my own? A king should earn by justice and his own effort.
- He ordered the jewels sold and the money given to widows, orphans and the poor who have lost everything. A tenth went to the farmer who showed the way.
- At a feast he told his companions that the great kings are remembered only for their deeds, not their gold: «نبندم دل اندر سرای سپنج / ننازم به تاج و نیازم به گنج». He added: if even one of my humblest subjects cries out from suffering because of me, may I lose my crown and treasure.
- Old Mahyar, aged 164, praised him: no king before ever found such a treasure and gave it all away.

**Key couplets** [opened]:
- b. 28: ز زر کرده بر پای دو گاومیش / یکی آخری کرده زرینش پیش
- b. 48: فروشید گوهر به زر و به سیم / زن بیوه و کودکان یتیم
- b. 69: نبندم دل اندر سرای سپنج / ننازم به تاج و نیازم به گنج
- b. 72: بنالد یکی کهتر از رنج من / مبادا سر وافسر وگنج من

**Needs care:**
- One wine cup at the feast (b. 60).
- «به داد و به شمشیر گنج آگنیم»: earning by justice *and the sword*, meaning by conquest from Rum and China (b. 46, b. 55). Soften to "by my own work".
- "Orphans and widows" is fine as a phrase.

**Age band:** 6–8 and 8–10. A treasure hunt is irresistible, the golden animals are a vivid picture, and the generous choice is simple and clear.

**Softening:**
- Drop the wine and the conquest line.
- Keep the farmer's honesty (he could have kept quiet), the golden animals, the refusal and the sharing. Keep the tenth for the finder: a nice fairness detail.
- The age of 164 can stay as a smile.

**Parent note:** "Bahram found a fabulous treasure and gave it away to people in need, saying a good name comes from what you do, not what you own. A good story about generosity and honesty, the farmer's as well as the king's."

**Values:** generosity, honesty, earning by your own effort, caring for those in need, fairness (a share for the finder).

**Questions to ask afterwards:**
1. The farmer could have kept the treasure secret. Why do you think he told the king?
2. Why didn't Bahram want Jamshid's treasure for himself?
3. If you found a treasure, how would you share it?

---

### 3.5 Babak the muster-master and the king who had to be counted (بابکِ دبیر و شاهی که باید سان ببیند)

**Source:** https://ganjoor.net/ferdousi/shahname/anooshirvan/sh4 [opened]. Ganjoor's title is «داستان بابک و آزمایش شاه در دیوان عرض».

**Plot from the poem** [opened]:
- Anushirvan made the wise Babak head of the army muster (دیوان عرض), where every rider shows his equipment before being paid.
- On the first day the army came, but Babak saw no royal banner and sent everyone home. The same happened on the second day.
- On the third day Babak proclaimed that nobody may skip the muster, whoever he is, even one honoured with a crown: «بداند که بر عرض آزرم نیست / سخن با محابا و با شرم نیست».
- Anushirvan laughed, put on his helmet and full armour, and rode to Babak's hall, showing every weapon.
- Babak approved and, very boldly, asked him to wheel his horse left and right. The king did.
- Babak then fixed the king's pay at one dirham more than the highest-paid champion (b. 38–39).
- Afterwards Babak apologised for his harshness. The king said: never leave the path of right. If you go easy on someone out of fear or favour, you break the heart of truth. Your worth has only grown in my eyes.

**Key couplets** [opened]:
- b. 22: بداند که بر عرض آزرم نیست / سخن با محابا و با شرم نیست
- b. 24: بخندید کسری و مغفر بخواست
- b. 46–47: بدو گفت شاه ای هشیوار مرد / تو هرگز ز راه درستی مگرد // تن خویش را چون محابا کنی / دل راستی را همی بشکنی

**Needs care:** almost none. There is armour and weapons but no fighting. A popular retelling adds a missing bowstring. That detail is **not** in this Ganjoor text [opened, absent]: do not add it, or label it as later folklore [recall, unverified].

**Age band:** 6–8 (simple) and 8–10 (with the dialogue). Rules that apply to everyone, even the person in charge, is an idea children grasp early and care about.

**Softening:** none. Explain "muster" as "the day every soldier shows that his kit is ready".

**Parent note:** "Babak treated the king like everyone else, and the king thanked him for it. A good story for talking about fairness and for showing that grown-ups and leaders follow rules too."

**Values:** fairness, courage to speak up, rules for everyone, a leader's humility, good humour (the king laughs).

**Questions to ask afterwards:**
1. Why did Babak send the whole army home twice?
2. Why did the king laugh instead of getting angry?
3. Is there a rule in our family that grown-ups should follow too?

---

### 3.6 The schoolboy from Merv: how Bozorgmehr came to court (بزرگمهرِ نوجوان از مکتبِ مرو)

**Sources** [opened]:
- https://ganjoor.net/ferdousi/shahname/anooshirvan/sh32, «یافتن بزرجمهر در مرو»
- https://ganjoor.net/ferdousi/shahname/anooshirvan/sh33, «ماجرای مار و خواب بزرجمهر در راه»
- For context only: sh30 (the dream), sh34 (its interpretation) and sh35 b. 6 (his name written in the royal register)

**Plot from the poem** [opened]:
- Anushirvan dreamed of a tree growing before his throne and a sharp-tusked boar drinking from his cup (sh30). His wise men could not explain it, so riders were sent across the land.
- One envoy, Azad-Sarv, reached Merv. He found a mobad teaching children the Zand-Avesta "harshly, angrily and loudly" (sh32 b. 3). Among them was an older boy, Bozorgmehr, bent over his book.
- When the envoy told the dream, the teacher said it was not his field. The boy said: "this is my game; interpreting dreams is my work" (b. 9). The teacher shouted at him to mind his own book.
- The boy insisted he would say it only before the king. The envoy gave him a horse and they set off.
- On the way they rested under a tree by water. While Bozorgmehr slept with a cloth over his face, a spotted snake drew the cloth aside, sniffed him from head to foot and slid away up the tree without harming him (sh33 b. 5–8).
- The envoy took this as a sign: "this clever boy will reach greatness" (b. 10).
- At court the boy explained the dream. The king was amazed, rewarded him and "wrote his name in the king's register, above the mobads" (sh35 b. 6).

**Key couplets** [opened]:
- sh32 b. 4–5: یکی کودکی مهتر ایدر برش / پژوهنده زند و استا سرش // همی خواندندیش بوزرجمهر / نهاده بران دفتر از مهر چهر
- sh32 b. 9: باستاد گفت این شکار منست / گزاریدن خواب کار منست
- sh33 b. 10: به دل گفت کین کودک هوشمند / بجایی رسد در بزرگی بلند

**Needs care:**
- **The dream's meaning must not be told.** In the poem the boar is a young man disguised as a woman inside the king's women's quarters. He and the royal woman who hid him (his sister, from Chach) are hanged upside down (sh34–35) [opened]. This is unsuitable at every age.
- The harsh teacher is fine, even useful.
- The snake: keep it calm and wondrous, not frightening. For 6-year-olds the snake can be left out.

**Age band:** 8–10 (6–8 without the snake). A child hero who speaks up to adults is very appealing. The teacher who shouts and the boy who quietly knows is a lovely contrast.

**Softening:** end with "Bozorgmehr understood the king's puzzling dream and explained it so wisely that the king made him his counsellor". Do not invent another meaning for the dream. If a child asks, say: "the old book tells a grown-up palace story; when you're older you can read it". This flows naturally into 3.7 and into the existing nard activity (the app's "riddle" theme).

**Parent note:** "Bozorgmehr was just a schoolboy when he spoke up because he knew the answer. Talk about having the courage to share what you know, politely, even when grown-ups doubt you."

**Values:** confidence, curiosity, respectful courage, the value of learning.

**Questions to ask afterwards:**
1. What did Bozorgmehr say when his teacher said "this isn't our job"?
2. Why did the envoy think the snake was a sign?
3. When is it brave to say "I think I know"? When is it wise to wait?

---

### 3.7 Bozorgmehr and the locked box of three pearls (بزرگمهر و درجِ قفل‌شده)

**Sources** [opened]:
- https://ganjoor.net/ferdousi/shahname/anooshirvan/sh76, «آمدن فرستادهٔ قیصر با درج قفل‌شده و ناتوانی موبدان»
- https://ganjoor.net/ferdousi/shahname/anooshirvan/sh77, «آزادی بزرجمهر و حل رمز درج»
- https://ganjoor.net/ferdousi/shahname/anooshirvan/sh78, «توضیح بزرجمهر درباره مرغ سیاه و خواب شاه»
- Background: sh73 (the black bird), sh74 (prison); sh79 (the king's apology) [abstract, title only]

**Plot from the poem** [opened]:
1. On a hunt, the king slept in a meadow with only Bozorgmehr beside him. A black bird swooped down, tore open the jewelled armband on the sleeping king's arm and swallowed the jewels (sh73).
2. Bozorgmehr saw this as a sign that his own fortune was turning, so he bit his lip and kept silent. The king woke, misread his silence, insulted him («کای سگ») and had him locked in a room of the palace (sh74). Later passages describe him as blind (sh77 b. 38–39, sh78 b. 6).
3. Caesar of Rum sent an envoy with a golden box, locked and sealed. If Iran's sages could say what was inside without opening it, Rum would pay tribute; if not, Iran must stop asking for tribute (sh76 b. 4–8). All the mobads failed.
4. The king, sad and ashamed, sent Bozorgmehr a robe and a horse with a message admitting he had wronged him. Bozorgmehr washed, came out, and on the way had a companion question three passing women (sh77 b. 23–34; see "needs care").
5. Before the whole court he said, without touching the lock: «اگر تیره شد چشم دل روشن است». Inside, he said, are three bright pearls in a case: one pierced, one half-pierced, one never touched by iron (sh78 b. 24–25). The box was opened and it was exactly so (b. 28–29).
6. Everyone praised him, and the king apologised and restored him (sh79, by title).

**Key couplets** [opened]:
- sh76 b. 4: بدین قفل و این درج نابرده دست / نهفته بگویند چیزی که هست
- sh78 b. 5–6: بگویم به درج اندرون هرچ هست / نسایم بران قفل وآن درج دست // اگر تیره شد چشم دل روشن است / روان را ز دانش همی جوشن است
- sh78 b. 25: یکی سفته و دیگری نیم سفت / دگر آنک آهن ندیده ست جفت

**Needs care:**
- **The three-women scene is how Bozorgmehr reasons in the poem.** The first woman has a husband and a child, the second a husband but no child, the third has never married; these map to the pierced, half-pierced and unpierced pearls. That is a sexual metaphor. **Leave it out at every age.**
- The king's insult and the unjust imprisonment.
- Bozorgmehr's blindness: it follows from the imprisonment and is implied rather than spelled out in the sections I read.
- The bird swallowing jewels is fine.

**Age band:** 8–10 and 10–12. It is a riddle story, and the wrongly-blamed counsellor and the king who says sorry are valuable for children who understand unfairness.

**Softening:**
- *Version for 8–10:* start at the box. Bozorgmehr is "old, and his eyes had grown dim". Leave out the prison or keep it as "the king, angry over a misunderstanding, had sent him away". Bozorgmehr thinks long and hard ("seeing with the eye of the heart") and names the three pearls. Do **not** invent a new method of deduction, because that changes the poem. Keep the reasoning hidden as "wisdom", which is what b. 4–6 itself stresses («به نیروی یزدان که اندیشه داد / روان مرا راستی پیشه داد»).
- *Version for 10–12:* include the black bird, the silence that was misread, the unjust anger, and the king's apology. That is the real moral core: a powerful person admits being wrong.

**Parent note:** "Bozorgmehr solved a riddle nobody else could, even though he had been treated unfairly. The king learned to say sorry. Talk about jumping to conclusions and about forgiving."

**Values:** wisdom, patience, forgiveness, admitting mistakes, not judging too quickly.

**Questions to ask afterwards:**
1. What was the riddle, and what was in the box?
2. (10–12) Why was the king wrong to be angry at Bozorgmehr's silence?
3. Have you ever been blamed for something you didn't do? What helped?

---

### 3.8 Young Ardashir: the honest arrow and the running ram (اردشیرِ جوان، تیرِ راست و غرمِ دونده)

**Sources:**
- https://ganjoor.net/ferdousi/shahname/ashkanian/sh4, his birth, training and summons to court [abstract, title only]
- https://ganjoor.net/ferdousi/shahname/ashkanian/sh5, the hunt and the quarrel [opened]
- https://ganjoor.net/ferdousi/shahname/ashkanian/sh8, the flight and the ram [opened]

**Plot from the poem** [opened sh5, sh8; sh3–sh7 by title]:
- Young Ardashir, of Babak's house in Pars, was summoned to the court of Ardavan, the last Parthian king, who treated him like a son.
- On a hunt Ardashir shot an onager so hard that the arrow passed right through it. Ardavan asked who shot it, and his own son said "I did".
- Ardashir said: "the plain is wide, and there are onagers and arrows; shoot another the same way. **Lying is a sin for the great**" (sh5 b. 24–25).
- Ardavan was furious and sent him to be master of the stables.
- His grandfather Babak wrote scolding him for out-riding the prince ("you are a servant, not his kin"), but sent money.
- Later (sh6–7, by title) Golnar, Ardavan's favourite maid and treasure-keeper, joined him. They fled at night on the king's best horses.
- Ardavan chased them. Villagers said a fine mountain ram was running behind the two riders. Ardavan's adviser said: "that ram is his *farr* (divine royal glory); if it catches up with him, we can't stop him" (sh8 b. 19–21).
- At a lake two young men warned Ardashir not to stop to drink but to ride on. He did, and escaped to Pars.

**Key couplets** [opened]:
- sh5 b. 24–25: چنین داد پاسخ بدو اردشیر / که دشتی فراخست و هم گور و تیر // یکی دیگر افگن برین هم نشان / دروغ از گناهست بر سرکشان
- sh8 b. 19: به دم سواران یکی غرم پاک / چو اسپی همی بر پراگند خاک
- sh8 b. 21: چنین داد پاسخ که آن فر اوست / به شاهی و نیک اختری پر اوست

**Needs care:**
- **Golnar:** a night-time romance (sh6 title «شب دیدار گلنار و اردشیر») and the theft of royal jewels (sh7 title) [abstract].
- After the escape there is a war: Ardavan is killed and Ardashir marries his daughter (sh12 title) [abstract].
- Babak's letter endorses rank ("you are a servant").
- Hunting is fine as told.

**Age band:** 8–10. The wrongly-punished honest youth and the magical running ram make a strong pair. Leave the romance out under 10.

**Softening:**
- Tell the hunt, the stables and the flight. For under-10s, Ardashir escapes alone, or with "a friend from the palace", with the ram running behind him.
- For 10–12, Golnar can appear as "Golnar, who kept the king's treasures, chose to go with him", without the night visit or the stolen jewels.
- Stop at "he reached Pars, and in time he became king": no killing of Ardavan.

**Parent note:** "Ardashir told the truth even though it cost him his place at court. In the old story a ram ran behind him as a sign of good fortune. Talk about telling the truth when it's hard."

**Values:** honesty, courage, resilience after unfair treatment, hope.

**Questions to ask afterwards:**
1. Why didn't Ardashir just let the prince take the credit?
2. What did the running ram mean?
3. Is it ever hard to tell the truth? What makes it worth it?

---

### 3.9 Ferdowsi and the Shahnameh: a story for 8–12, marked as legend (فردوسی و شاهنامه)

This candidate is the bridge to Part 2. The full sources and the split between history and legend are in **section 4**.

**Proposed story shape:**
1. A dehqan of Tus spends most of his life turning the old stories of Iran into verse. This part is mostly historical.
2. In old age he is poor and cold. He describes his own winter: no salted meat, no firewood, no barley, and only the local governor's help (bezehgar/sh17 b. 27–32 [opened]; yazdgerd3/sh17 b. 9–12 [opened]). This is the poet's own testimony.
3. He finishes in the month of Esfand, 400 AH, aged about 71 (yazdgerd3/sh17 b. 13, b. 19–20 [opened]). This is historical.
4. **Legend:** the reward from Sultan Mahmud disappoints him, and he gives it away at the bathhouse. Long afterwards a caravan of camels brings the Sultan's gift, entering one gate of Tabaran just as his bier leaves by another. His daughter refuses the money, and it is used to build a caravanserai for travellers (Chahar Maqaleh [opened]).
5. **Close:** his own lines «از آن پس نمیرم که من زنده ام / که تخم سخن من پراکنده ام» (yazdgerd3/sh17 b. 22 [opened]), and today's 25 Ordibehesht.

**Can it be a story for 8–12? Yes**, if three things are true:
1. The text says clearly, in the story itself and in the parent note, that the reward-and-camels part "is a story people told about 100 years after Ferdowsi died; we don't know if it really happened".
2. The sectarian layer is removed entirely.
3. The death is handled gently and briefly ("by then Ferdowsi had grown very old and had died").

**Needs care:**
- **Sectarian content.** In the source, Mahmud's courtiers call Ferdowsi a Rafidi (Shi'i) and a Mu'tazili to cut his reward, and a preacher in Tabaran refuses him burial in the Muslim cemetery "because he was a Rafidi", so he is buried in his own garden [opened]. Do not use any of this. Iranian retellings often play it up; the app should not.
- **The satire.** The six surviving satire lines insult Mahmud as «پرستار زاده» ("son of a slave woman") [opened]. Leave them out.
- **The drink.** The text says فقاعی: a seller of *fuqqa'*, a fermented barley or fruit drink [opened; meaning recall, unverified]. "Sherbet-seller" is the usual modern softening. Use "a seller of cool drinks", and do not write "beer".
- **Money values.** The text is gold coins for indigo, not gold: «شصت هزار دینار ... بفرمای تا به نیل دهند»: sixty thousand dinars to be paid in indigo [opened]. Popular retellings say "gold". The app should say "a rich gift" or "camels loaded with treasure", or else say indigo accurately.
- Mahmud as villain: frame it as "jealous courtiers gave the Sultan bad advice", which is in the source, and the Sultan regretted it, which is also in the source. No ethnic framing of Mahmud.

**Age band:** 8–10 and 10–12. The themes are a life's work, disappointment, dignity, and fame that comes after death; the bier at the gate is poignant. Not for under 8.

**Parent note:** "Ferdowsi spent decades saving Iran's old stories in Persian verse. The tale of the Sultan's late gift is a legend told long after his death, but his own lines say what mattered to him: 'I have scattered the seeds of words.'"

**Values:** perseverance, love of language and heritage, dignity, generosity (the bathhouse gift; the daughter's refusal; the caravanserai).

**Questions to ask afterwards:**
1. Why do you think Ferdowsi kept working for so many years, even when he was poor?
2. Which parts of this story do we know are true, and which part is a legend?
3. Ferdowsi said he "scattered the seeds of words". What seeds would you like to plant?

---

### 3.10 Read-aloud verse: the praise of wisdom and "the seeds of speech" (ستایش خرد و تخم سخن)

**Sources:** https://ganjoor.net/ferdousi/shahname/aghaz/sh2 [opened] and https://ganjoor.net/ferdousi/shahname/yazdgerd3/sh17 [opened].

**What it is:** a short set of couplets, not a story. It suits a Ferdowsi Day card, a memorisation game, or the opening of the Ferdowsi story.

**aghaz/sh2 (couplets counted after the heading):**
- b. 3: خرد بهتر از هر چه ایزد بداد / ستایش خرد را به از راه داد
- b. 4: خرد رهنمای و خرد دلگشای / خرد دست گیرد به هر دو سرای
- b. 11: خرد چشم جان است چون بنگری / تو بی چشم شادان جهان نسپری
- b. 13: سه پاس تو چشم است و گوش و زبان / کز این سه رسد نیک و بد بی گمان
- b. 18–19: ز هر دانشی چون سخن بشنوی / از آموختن یک زمان نغنوی // چو دیدار یابی به شاخ سخن / بدانی که دانش نیاید به بن

**yazdgerd3/sh17:**
- b. 22: از آن پس نمیرم که من زنده ام / که تخم سخن من پراکنده ام

**Needs care:**
- b. 23 of the closing invites readers "of good sense, judgement and faith" to bless him after death. That is fine.
- Two famous lines need checking before use:
  - «بسی رنج بردم در این سال سی / عجم زنده کردم بدین پارسی» is **not** in Ganjoor's closing section [opened, absent]. It is widely quoted, but many scholars treat it as not authentic [recall, unverified]. **Do not present it as Ferdowsi's own words** without checking a critical edition.
  - «پی افکندم از نظم کاخی بلند / که از باد و باران نیابد گزند» is also not in the closing section. Its location was not found this session, and Ganjoor's search API returned nothing. Locate it before use [recall: it is genuine and appears elsewhere in the poem, unverified].

**Age band:** 6–12. The three guardians (eye, ear and tongue) work for 6–8, and "learning has no end" for 8–12.

**Parent note:** "Ferdowsi began his book by praising wisdom and ended it saying his words would keep him alive. Read one couplet together and ask what it means today."

**Questions to ask afterwards:**
1. What three "guards" does Ferdowsi say we have?
2. What does "knowledge has no end" mean to you?
3. Which of your words would you like people to remember?

---

### 3.11 Optional: Bozorgmehr's counsels as proverb cards (پندهای بزرگمهر)

**Source:** https://ganjoor.net/ferdousi/shahname/anooshirvan/sh37 [opened]. Later sessions are in sh38–42 and sh62 [abstract].

**Child-suitable lines** [opened]:
- b. 14: بدو گفت روشن روان آنکسی / که کوتاه گوید به معنی بسی
- b. 27: توانگر بود هر کرا آز نیست / خنک بنده کش آز انباز نیست
- b. 28: مدارا خرد را برادر بود / خرد بر سر جان چو افسر بود
- b. 38: مگو آن سخن کاندرو سود نیست / کزان آتشت بهره جز دود نیست
- b. 40: فروتن بود شه که دانا بود / به دانش بزرگ و توانا بود
- b. 43: بپرهیزد از هرچ ناکردنیست / نیازارد آن را که نازردنیست

**Needs care:**
- The session opens with wine (b. 1–2).
- Some later counsels are about serving kings or are fatalistic; choose lines one by one.
- b. 29 («چو دانا تو را دشمن جان بود / به از دوست مردی که نادان بود») is a classic, but it is about enemies. Use it for 10–12 only.

**Age band:** 8–12, one card per day.

---

### 3.12 Conditional: Bahram and the crown between two lions (بهرام و تاجِ میانِ دو شیر)

**Sources:**
- https://ganjoor.net/ferdousi/shahname/bezehgar/sh17 [opened]
- https://ganjoor.net/ferdousi/shahname/bezehgar/sh15 and sh16 [abstract, titles only]

**Plot** [sh17 opened]:
- After Yazdgerd "the Sinful" died, the nobles refused his son Bahram because of the father's cruelty, and chose old Khosrow.
- Bahram proposed a test: put the crown between two lions, and whoever takes it is king.
- Old Khosrow stepped aside: "he is young and I am old" (b. 4).
- The mobad urged Bahram not to risk his life for a crown (b. 10). Bahram answered «هم آورد این نره شیران منم» (b. 13).
- He purified his heart, faced the chained lions with a mace and killed both with blows to the head (b. 18–19, described graphically). Then he took the crown.
- **Note:** the same section ends with Ferdowsi's personal complaint about a bitter winter and poverty (b. 27–32). This is valuable for 3.9.

**Needs care:** the graphic killing of chained, captive animals; "taking power" as the prize; the father's cruelty.

**Age band:** 10–12 only, if used.

**Softening:** the lions roar and lunge, Bahram stands firm, the lions back away, and he lifts the crown. That changes the outcome, so it must be noted as a change. **Verdict:** lower priority. Stories 3.3 and 3.4 give a kinder Bahram.

---

### 3.13 Conditional: the shoemaker's loan (کفشگر و وامِ شاه)

**Source:** https://ganjoor.net/ferdousi/shahname/anooshirvan/sh88 [opened]. Ganjoor's title is «کمبود درم و داستان کفشگر وام‌دهنده».

**Plot** [opened]:
- During the war with Rum the army was 300,000 dirhams short (b. 6). Bozorgmehr advised borrowing from local merchants rather than waiting for the far-off treasury.
- A shoemaker and boot-seller lent the whole sum on the spot: "forty man of dirhams" (b. 26).
- He asked one favour: that his only son be allowed to study and become a dabir, a scribe (b. 31, b. 48).
- Bozorgmehr passed it on gladly. Anushirvan refused: when a merchant's son becomes a scribe, my son on the throne will need a scribe of good birth. "Turn the camels back; do not take silver from boot-sellers" (b. 52–54, b. 59).
- The money was returned. «دل کفشگر گشت پر درد و غم» (b. 60).

**Key couplets** [opened]:
- b. 48: اگر شاه باشد بدین دستگیر / که این پاک فرزند گردد دبیر
- b. 52: چو بازارگان بچه گردد دبیر / هنرمند و بادانش و یادگیر
- b. 60: فرستاده برگشت و شد با درم / دل کفشگر گشت پر درد و غم

**The class message:** the king, usually the model of justice, here defends a closed class system and blocks a child's education. Ferdowsi's narration lets us feel the shoemaker's grief, and modern Iranian schoolbooks often read this as a critique of Anushirvan's "justice" [recall, unverified].

**Age band:** 10–12 only, as a **discussion story**, never as a model.

**Framing:** "Was the king fair? What would you have decided?" State plainly that today every child has the right to go to school. Without that framing it teaches the wrong lesson. Given the owner's caution, I rate it **conditional**.

**Questions to ask afterwards:**
1. What did the shoemaker want for his son?
2. Why did the king say no, and do you agree?
3. What would the shoemaker's son have learned if he had been allowed to study?

---

### 3.14 Conditional: Haftvad and the worm in the apple (هفتواد و کرمِ سیب)

**Sources:**
- https://ganjoor.net/ferdousi/shahname/ashkanian/sh15 [opened]
- https://ganjoor.net/ferdousi/shahname/ashkanian/sh16 to sh21 [abstract, titles only]

**Plot:**
- The poor girls of Kojaran spin cotton together by the mountain each day.
- Haftvad's daughter finds a worm inside a windfall apple, puts it in her spindle-case and says: "by the luck of this apple-worm I'll out-spin you all". She spins twice as much (b. 18, 21, 23). She feeds it apple each morning, and the family grows rich and powerful.
- The rest is from the section titles: the worm grows to elephant size in a mountain fortress and is served like an idol. Haftvad defeats Ardashir's army. Ardashir, disguised as a merchant, gets the worm's keepers drunk and kills it by pouring in molten tin. Haftvad and his son are hanged.

**Needs care:**
- Possible devaluing of daughters: b. 13 «گرامی یکی دخترش بود و بس / که نشمردی او دختران را به کس» [opened]. The meaning is ambiguous, and I lean towards "he didn't count daughters as anyone".
- Drunkenness, animal cruelty, hanging and idol-worship.

**Age band and softening:** 10–12, as a parable about greed and superstition, with the ending reduced to "Ardashir ended the worm's rule and the people were freed". The first half alone is charming for 6–8, but it is a fragment that stops before the moral. **Low priority.**

---

## 4. Ferdowsi: what is known and what is legend

### 4.1 Known, or as close to known as we get

| Claim | Evidence |
|---|---|
| Abu'l-Qasem Ferdowsi of Tus, born 329 AH (about 940 CE), died before 411 AH (about 1020) in Tus | Ganjoor poet bio [opened]; the CE conversions are mine |
| Other death dates are given as 411 or 416 AH | [recall, unverified] |
| He was a **dehqan** (landed gentry) of the village of Bazh in the Tabaran district of Tus | Chahar Maqaleh [opened]; this is the earliest biography, written about 150 years after his birth |
| **He finished the poem in 400 AH, in the month of Esfand, on the day Ard**: «سرآمد کنون قصه یزدگرد / به ماه سفندارمذ روز ارد // ز هجرت شده پنج هشتاد بار» | yazdgerd3/sh17 b. 19–20 [opened]; the usual CE date is 8 March 1010 [recall, unverified] |
| His age while finishing: he worked on the "history of kings" from about 65 («چو بگذشت سال از برم شست و پنج», b. 1) to 71 («چو سال اندر آمد به هفتاد و یک», b. 13) | yazdgerd3/sh17 [opened] |
| His helpers: Ali Deylami and Bu-Dolaf only praised him; Hoseyn Qotayb (حسین قتیب), the governor of Tus, gave him food, clothes and silver and excused him from land tax | yazdgerd3/sh17 b. 7–12 [opened]; Chahar Maqaleh repeats the lines and adds that Qotayb was "عامل طوس" [opened] |
| Poverty in old age, in his own voice: «نماندم نمکسود و هیزم نه جو … مگر دست گیرد حسین قتیب» | bezehgar/sh17 b. 27–32 [opened] |
| Length of the work: Chahar Maqaleh says **25 years** («بیست و پنج سال در آن کتاب مشغول شد») | [opened] |
| Length of the work: the usual "about 30 years" comes from the line «بسی رنج بردم در این سال سی», which is **not** in Ganjoor's closing section | [opened, absent]; whether it is authentic is disputed [recall, unverified] |
| Safe wording for the app | "about 25–30 years" or "most of his life" |
| An earlier version was finished around 384 AH (about 994), before the Mahmud dedication | [recall, unverified]; do not use without a source |
| Ferdowsi Day is 25 Ordibehesht | Ganjoor bio [opened]; already a celebration in the app |

### 4.2 Legend: Nezami Aruzi, *Chahar Maqaleh*, second discourse (on poetry), anecdote 9

**Source:** https://ganjoor.net/aroozi/4maghale/sher/sh11 (حکایت نه - فردوسی) [opened, read in full].

What the source actually says:
1. Ferdowsi had **one daughter** and hoped to pay for her **dowry** from the reward for the book.
2. The copyist Ali Deylam wrote the poem in seven volumes. Ferdowsi took the reciter Bu-Dolaf to Ghazna, where the vizier Ahmad Hasan Kateb presented it and it was accepted.
3. The vizier's rivals said "50,000 dirhams is too much". They called Ferdowsi a Rafidi and a Mu'tazili and quoted couplets as proof. Mahmud, "a bigoted man", agreed.
4. **Only 20,000 dirhams** (silver) reached him. "Deeply hurt, he went to the bathhouse, came out, drank a *fuqqa'*, and divided the silver between the bath-keeper and the fuqqa'-seller (حمامی و فقاعی)."
5. Fearing Mahmud, he fled by night to Herat and hid for six months in the shop of Esmail the bookseller (وراق), father of the poet Azraqi. He then went to Tabaristan, to the Bavandid prince Sepahbad Shahriyar.
6. There he wrote a 100-couplet satire of Mahmud. Shahriyar bought it for 1,000 dirhams a couplet and had it washed out. Six couplets survive and are quoted.
7. Nezami Aruzi heard this part in 514 AH at Nishapur from Amir Moezzi, who heard it from Amir Abd al-Razzaq at Tus. Returning from India, Mahmud asked who wrote the line «اگر جز به کام من آید جواب / من و گرز و میدان و افراسیاب». The vizier said: "poor Ferdowsi, who toiled 25 years and got nothing". Mahmud regretted it.
8. Mahmud ordered **60,000 dinars' worth of indigo (نیل)** sent on royal camels with an apology.
9. **"The camels were entering by the Rudbar gate of Tabaran just as Ferdowsi's bier was being carried out by the Razan gate."**
10. A preacher refused burial in the Muslim cemetery, so he was buried in his own garden inside the gate. Nezami Aruzi visited the grave in 510 AH.
11. **His daughter refused the gift ("I don't need it").** The money went to rebuild the **Robat-e Chaheh** caravanserai on the Nishapur–Merv road.

**What this means for the app:**
- The source is about 100–150 years later, second-hand, and told as an anecdote: so it is **legend**.
- Popular retellings changed details. "Gold for every couplet" became "silver"; the *fuqqa'* became "sherbet"; and the indigo became "gold".
- The daughter's refusal and the caravanserai are attested in the source. They make a lovely ending, and they are not invented.

### 4.3 Verdict

"Ferdowsi and the Shahnameh" is suitable as an **8–12 story marked as legend** (see 3.9), with:
- the sectarian material and the satire removed;
- "a seller of cool drinks" in place of fuqqa';
- "a rich gift / treasure" in place of "gold";
- a clear in-text line separating history from legend;
- the poet's own verses (his age, winter, poverty, "seeds of speech") as the historical spine.

It ties directly to the existing 25 Ordibehesht celebration.

---

## 5. Keep out, and why

| Story | Where | Why |
|---|---|---|
| **Lonbak the water-carrier and Baraham "the Jew"** (لنبک آبکش و براهام جهود) | bahgoor/sh3–5 [titles opened; plot recall, unverified] | **Keep out at every age.** The miser is identified by religion («جهود») and drawn as an antisemitic stereotype: miserly, inhospitable, punished by having his wealth given away. Softening by renaming him "a rich miser" is possible in principle. But the story's recognisable form is the stereotype, and a "fixed" version would invite comparison. The owner's caution points to omission. |
| **Bahram Gur and Azadeh** (آزاده) | bezehgar/sh4 [title opened: «چالش ناممکن تیر و کشتن چنگ‌زن»] | **Keep out.** Bahram tramples or kills the harpist Azadeh for mocking his shot [details recall, unverified; the killing is confirmed by the title]. This is violence against a woman by the hero. The famous "pinning the deer's hoof to its ear" feat cannot be told without her. |
| Kabrui the drunk | bahgoor/sh7 [title opened] | Drunkenness; a crow plucks out his eyes; wine is banned and then (sh8) allowed again. |
| The shoemaker's son and the lion | bahgoor/sh8 [title opened] | The boy rides a lion on secretly given wine; wine is "made lawful" again; there is a marriage plot. |
| "Every one a chief" village | bahgoor/sh9 [opened] | The king curses a village for not greeting him. The mobad's trick causes murder («بریدند ناگه سر مرد مه», b. 24) and ruin. The moral blames chaos on "women and children being chiefs" (b. 80). The restoration half is fine, but the whole has violence, gender bias and a petty king. |
| Bahram's courtships | bahgoor/sh10, sh12, sh14 [titles opened] | Serial marriages to millers' and dehqans' daughters; harem-building. |
| The Indian adventure | bahgoor/sh30–43 [titles opened] | A Shengel plot to kill Bahram, a rhinoceros and a dragon beheaded, a royal marriage. Too long and too violent for this pipeline (the dragon section could be revisited for 10–12). |
| The Luri musicians | bahgoor/sh45 [title opened: «آغاز آوارگی و دزدی آنان»] | Origin myth of the Luri (Romani) as wanderers and thieves: an ethnic stereotype. |
| Anushirvan's dream: its meaning | anooshirvan/sh34–35 [opened] | Disguised man in the women's quarters; two people hanged upside down. Use only the "schoolboy" frame (3.6). |
| The three-women clue | anooshirvan/sh77 b. 23–34 [opened] | Sexual metaphor (pierced pearls). Cut from 3.7. |
| Mahbud and Zurvan | anooshirvan/sh44 [title opened] | A poisoning plot at court and executions [plot recall, unverified]. |
| Nushzad's rebellion | anooshirvan/sh16–27 [titles opened] | A son's revolt, religious conversion as the trigger, a death in battle. Religiously sensitive. |
| Talkhand and Gav (the origin of chess) | anooshirvan/sh64–71 [titles opened] | Fratricidal war; a mother threatening to burn herself (sh70). The chess-invention ending is tempting for 10–12, but the mother's grief and self-harm threat rule it out. |
| Mazdak | qobad/sh2 [title opened] | Religious and political revolt; the ending in which Mazdak's followers are "planted" head-down in a garden is a massacre [recall, unverified]. Out. |
| Mani | zolaktaf/sh15 [title opened: «پوست‌کندن او»] | The prophet Mani is flayed after a debate. Religious violence. |
| Shapur II: Malekeh, the shoulders, the donkey hide | zolaktaf/sh2–6, sh11–12 [titles opened] | A daughter betrays her father; captives' shoulders are pierced; captivity and humiliation. Use only sh1 (3.1). |
| Khosrow Parviz, Shirin and Maryam | parviz/sh65–68 [titles opened] | Adult romance; Shirin poisons Maryam. |
| Bahram Chubineh's rebellion | parviz/sh4–48 | Hormozd blinded and strangled (sh10 title); assassination. Long and adult. |
| Ardashir's later reign | ardeshir/sh2–3 [titles opened] | Attempted poisoning by his wife; a castration (sh3). Out. The Shapur polo-recognition episode (sh4–5) is borderline, because it depends on the castration plot. |
| The fall of Yazdgerd III | yazdgerd3/sh1–16 [titles opened] | Murder in a mill, mutilation and burning (sh16). The Arab conquest is politically and religiously sensitive in today's Iran. Out. |

---

## 6. Check of the app's nard activity (`takhteh-nard-bozorgmehr`)

**File:** `d:\dev\github\bazimazi\PlayNest\src\data\activities\iran-older.ts`, lines 611–656.

**Checked against:** https://ganjoor.net/ferdousi/shahname/anooshirvan/sh63 [opened, full section]. Couplets are counted after the heading line «داستان درنهادن شطرنج».

| Activity text | What the poem says | Result |
|---|---|---|
| "a king from a faraway land sends King Anushirvan a chess set as a riddle" | The sender is the **Rai of Hind**, the king of Qannuj (رای قنوج / شاه هند). He sends a chess board with a stake: if Iran's sages work out the game he pays tribute, and if not, Iran stops asking for it (b. 19–29). | Correct but vague. **P3:** name him "the king of India (Rai of Qannuj)" and perhaps mention the tribute stake. |
| "Bozorgmehr solves it in a day and a night" | «به یک روز و یک شب چو بازیش یافت» (b. 51) | Correct. |
| Couplet «خرد با دل روشن انباز کرد / به اندیشه بنهاد بر تخت نرد» | Ganjoor: «خرد بادل روشن انباز کرد / به اندیشه بنهاد برتخت نرد» (b. 87) | Correct; only the spacing (بادل / برتخت) differs from Ganjoor, and the activity's spacing is better. The translation is fine. |
| "Their wise men study it for a week and cannot work it out, and on the ninth day Bozorgmehr shows them" | The Rai asks for seven days (b. 136). On the eighth the mobad admits that nobody knows it (b. 140). «بیامد نهم روز بوزرجمهر» (b. 142). | Correct. |
| "He takes nard to that king's court as a riddle in return" | Yes, with 2,000 camel-loads and a matching wager (b. 116–122). | Correct. |
| talk: "Why do you think Bozorgmehr made a game with dice, when chess has none?" | The poem **never mentions dice explicitly**. It describes nard as a war game with two kind kings, armies "divided into eight parts", and two ivory «مهره» (b. 88–91). «دو مهره» may mean the dice, but it is ambiguous [recall, unverified]. The poem's own key idea is that **a piece caught alone by two is lost**: «یکی را چو تنها بگیرد دو تن / ز لشکر برین یک تن آید شکن» (b. 94). | **P3:** the question is fine for today's game. Better: add a talk prompt or step using b. 94, which matches the rule the activity already teaches ("a single piece alone on a point can be hit"). This is a ready-made link to the poem. |
| talk: "An old book in Middle Persian says the 30 pieces stand for the days of a month" | This is from *Wizārišn ī čatrang* (Middle Persian), not the Shahnameh. It says the board is the earth, the 30 pieces are the 30 days and nights, and the dice turning are the stars [recall, unverified]. | Plausible, and it does not claim the Shahnameh. **P3:** add a ref for it if refs are expected for each claim. |
| summary: "the Shahnameh story of how the wise minister Bozorgmehr invented it as a riddle" | Correct. | OK. |
| ref title «شاهنامه، پادشاهی نوشین‌روان، داستان درنهادن شطرنج» and URL `.../anooshirvan/sh63` | The URL is right. Ganjoor's part title is «پادشاهی کسری نوشین روان چهل و هشت سال بود» and the section title is «بخش ۶۳ - داستان درنهادن شطرنج». | Correct. Shortening the part name is acceptable. |
| Rules (15 pieces, doubles played four times, hitting, bearing off) | Not in the poem; they are modern standard rules. | Fine, and they are not presented as Ferdowsi's. |

**Summary of the nard check:**
- **No P1 or P2 errors.** Every story claim matches the poem.
- **Three P3 suggestions:**
  1. Name the "faraway king" as the king of India (Rai of Qannuj), and optionally mention the tribute wager.
  2. Use b. 94 («یکی را چو تنها بگیرد دو تن…») to tie the "lone piece can be hit" rule to the poem, and soften the dice question, since the poem does not clearly mention dice.
  3. Add a source for the Middle Persian *Wizārišn ī čatrang* claim.
- One small observation outside the activity: in b. 79 the poem calls the Indian envoy «مرد جادو» ("magician"). It is not used in the activity, and it should not be.

---

## 7. Sources

### Ganjoor API pages fetched this session [opened]

**Index pages:**
- `/ferdousi/shahname` (part list)
- Section lists: `/ferdousi/shahname/aghaz`, `ashkanian`, `ardeshir`, `zolaktaf`, `bezehgar`, `bahgoor`, `anooshirvan`, `parviz`, `yazdgerd3`, `qobad`

**Section texts read:**
- aghaz/sh2
- ashkanian/sh5, sh8, sh15
- zolaktaf/sh1
- bezehgar/sh17
- bahgoor/sh9, sh11, sh19
- anooshirvan/sh4, sh30, sh32, sh33, sh34, sh35, sh37, sh63, sh73, sh74, sh76, sh77, sh78, sh88
- parviz/sh70
- yazdgerd3/sh17

**Other Ganjoor pages:**
- Poet bio: `api.ganjoor.net/api/ganjoor/poet?url=/ferdousi`
- Nezami Aruzi, *Chahar Maqaleh*: `/aroozi/4maghale`, `/aroozi/4maghale/sher`, `/aroozi/4maghale/sher/sh11` (Ferdowsi anecdote)

**Public URLs:** https://ganjoor.net/ followed by the same paths, for example https://ganjoor.net/ferdousi/shahname/bahgoor/sh19 and https://ganjoor.net/aroozi/4maghale/sher/sh11.

### App file checked
`d:\dev\github\bazimazi\PlayNest\src\data\activities\iran-older.ts`, entry `takhteh-nard-bozorgmehr` (lines 611–656).

### Not verified this session [recall, unverified]
- The CE date of completion (8 March 1010).
- The authenticity of «بسی رنج بردم در این سال سی».
- The location of «پی افکندم از نظم کاخی بلند» (the Ganjoor search API returned nothing).
- The plots of sections known only by title: Lonbak/Baraham, Azadeh, Mazdak's ending, Mahbud.
- The content of *Wizārišn ī čatrang*.
- The "missing bowstring" folklore in the Babak story.
- The historicity of Bozorgmehr: he is probably a semi-legendary figure, possibly conflated with Burzoe the physician.

No web search engine was used. Every textual claim marked [opened] comes from Ganjoor's public-domain text.
