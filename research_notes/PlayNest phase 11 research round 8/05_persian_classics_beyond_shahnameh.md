# 05: Persian classics beyond the Shahnameh: candidate stories for the Persian app

Research round 8, phase 11. Written 2026-11-20.

**Tags.** [opened] means I fetched and read the source text through the Ganjoor API (`https://api.ganjoor.net/api/ganjoor/page?url=<path>`, text taken from the JSON `htmlText`/`plainText`), so the quotes below are copied from Ganjoor's edition. Section lists come from the category API (`https://api.ganjoor.net/api/ganjoor/cat/<id>?poems=true`) [opened]. [abstract] means I read only a summary. [search] means a search-result snippet I did not open. [recall, unverified] means my own memory, not checked this round. The public page URL is the API path on `https://ganjoor.net`. Ganjoor's section titles ("بخش ۲۹ - حکایت بط") are modern editorial titles.

## Scope

Persian classical literature other than the Shahnameh, retold in our own words from public-domain texts, for the Persian app (Iranian culture only). Works searched this round: Kelileh va Demneh (Nasrollah Monshi), Saadi's Golestan and Bustan, Rumi's Masnavi, Nezami's Makhzan al-Asrar, Attar's Manteq al-Tayr (sub-stories only), Parvin Etesami's story-poems (public domain: she died in 1941), and Obeyd Zakani's Mush o Gorbeh (index only).

Not reached this round, for lack of budget: Marzban-nameh beyond what is in the app, Sanai's Hadiqa, Jami's Baharestan, Qabus-nameh, Sindbad-nameh, Awfi's Jawami al-Hikayat, Asrar al-Tawhid, Attar's Elahi-nameh and Mosibat-nameh. A later round could mine Marzban-nameh and Jami's Baharestan for short animal fables.

Already in the app and not proposed again: Masnavi (mouse and camel, hare and lion, grocer and parrot, grammarian and boatman, elephant in the dark, merchant and parrot); Saadi (ant carried home, wrestler's last hold); Nezami (Fitna and the calf); Attar (Conference of the Birds frame); Kelileh (turtle and two ducks, ring-dove and the net); Marzban-nameh (old gardener and King Khosrow). A grep of `src/data` for the main motifs below found no overlap.

About 30 Ganjoor API calls (indexes plus 27 story texts). Every story in the ranked table was read in the source [opened]. Two reserve entries (iron-eating mice, Mush o Gorbeh) were seen only as index titles.

**Bottom line.** Kelileh va Demneh is the best source for the youngest: three tiny fables (the fox and the drum, the duck and the star, the crow who tried to walk like a partridge) are a paragraph each, have no deaths, and carry a clear idea a 3-year-old can hold. Saadi gives two gentle 4–6 stories that are also practical (staying close in a crowd; kindness to a thirsty animal). For 8–12 the strongest are justice stories about Iranian kings told from below: Anushirvan paying for salt (Golestan), the owls' dowry of ruined villages (Nezami) and Dara and the horse-herder (Bustan). The old woman and Sultan Sanjar is valuable but needs the heaviest softening and an owner decision (see its section).

## Ranked table

| # | Title (Persian) | Source | Age band | Ganjoor URL | Stance | One-line reason |
|---|---|---|---|---|---|---|
| 1 | روباه و طبل | Kelileh, باب شیر و گاو | 2–4 | https://ganjoor.net/monshi/kelile-demni/shirogav/sh12 | open | A loud noise turns out to be an empty drum: a perfect "don't be scared of big sounds" fable, no one hurt. |
| 2 | بط و ستاره | Kelileh, باب شیر و گاو | 2–4 | https://ganjoor.net/monshi/kelile-demni/shirogav/sh29 | open | Five sentences; a duck mistakes a star's reflection for a fish; built for repetition. |
| 3 | زاغ و رفتار کبک | Kelileh, باب زاهد و مهمان | 2–4, 4–6 | https://ganjoor.net/monshi/kelile-demni/zahedomehman/sh3 | open (reframe) | Source of a living proverb; "be yourself", once the source's class moral is dropped. |
| 4 | گم شدن سعدی در روز عید | Bustan, باب نهم | 4–6 (2–4) | https://ganjoor.net/saadi/boostan/bab9/sh15 | care | Saadi as a little boy lets go of his father's hand in a festival crowd: real safety lesson. |
| 5 | سگ تشنه در بیابان | Bustan, باب دوم | 4–6 | https://ganjoor.net/saadi/boostan/bab2/sh11 | care | A man uses his hat and turban to give water to a dying dog; pair with stray-dog safety. |
| 6 | آرزوی پرواز | Parvin Etesami | 4–6 | https://ganjoor.net/parvin/divanp/mtm/sh7 | care | A young pigeon flies too far too soon and its mother guides it; a woman poet's voice. |
| 7 | گِل خوشبوی | Golestan, دیباچه | 4–6, 6–8 | https://ganjoor.net/saadi/golestan/dibache | open | Talking clay that smells of roses: "good friends rub off on you", plus the old hammam. |
| 8 | سه ماهی | Kelileh, باب شیر و گاو | 4–6, 6–8 | https://ganjoor.net/monshi/kelile-demni/shirogav/sh24 | care | Plan ahead, keep calm, think: three fish, three ways of meeting trouble. |
| 9 | بلبل و مور | Parvin Etesami | 4–6, 6–8 | https://ganjoor.net/parvin/divanp/mtm/sh25 | care | A Persian "ant and grasshopper" set at Nowruz; the ending needs kinder handling. |
| 10 | خرگوش و پیلان (فرستادهٔ ماه) | Kelileh, باب بوف و زاغ | 6–8 | https://ganjoor.net/monshi/kelile-demni/boofozagh/sh5 | care | A small hare named Piruz uses the moon in a spring to turn back a herd of elephants. |
| 11 | چهار کس و انگور | Masnavi, دفتر دوم | 6–8 | https://ganjoor.net/moulavi/masnavi/daftar2/sh112 | open | Four people want the same grapes in four languages and quarrel: about understanding. |
| 12 | نوشیروان و نمک | Golestan, باب اول | 8–10 | https://ganjoor.net/saadi/golestan/gbab1/sh19 | open | "Pay for the salt": small unfairness grows; justice in a few lines. |
| 13 | خاربُن بر سر راه | Masnavi, دفتر دوم | 8–10 | https://ganjoor.net/moulavi/masnavi/daftar2/sh26 | open | A man keeps saying "tomorrow" about a thornbush he planted in the road. |
| 14 | نقاشان چینی و رومی | Masnavi, دفتر اول | 8–10 | https://ganjoor.net/moulavi/masnavi/daftar1/sh157 | open | One team paints, the other polishes a mirror-wall: a contest with a surprise. |
| 15 | مرغ گرفتار و سه پند | Masnavi, دفتر چهارم | 8–10 | https://ganjoor.net/moulavi/masnavi/daftar4/sh86 | open | A caught bird wins its freedom with advice and tests the man; ends on a riddle. |
| 16 | دارا و گله‌بان | Bustan, باب اول | 10–12 (8–10) | https://ganjoor.net/saadi/boostan/bab1/sh5 | open | King Dara nearly shoots his own horse-herder, who then teaches him to know his people. |
| 17 | نوشیروان و دو جغد | Makhzan al-Asrar | 10–12 | https://ganjoor.net/nezami/5ganj/makhzanolasrar/sh23 | open | Two owls want ruined villages as a wedding gift; the king hears and is ashamed. |
| 18 | پیرزن و سلطان سنجر | Makhzan al-Asrar | 10–12 | https://ganjoor.net/nezami/5ganj/makhzanolasrar/sh27 | care (heavy) | An old woman holds a sultan to account; must lose the drunkenness, beating and ethnic slur. |

Age-band spread: 2–4 (1, 2, 3, 4); 4–6 (4, 5, 6, 7, 8, 9); 6–8 (7, 8, 9, 10, 11); 8–10 (12, 13, 14, 15, 16); 10–12 (16, 17, 18, plus reserves R1–R4).

---

## 1. روباه و طبل (The fox and the drum)

- **Source:** Kelileh va Demneh, Monshi, chapter "The lion and the ox", section 12. https://ganjoor.net/monshi/kelile-demni/shirogav/sh12 [opened]
- **Plot (from the text):** A fox goes into a wood and sees a drum lying beside a tree. Whenever the wind blows, a branch strikes the drum and a frightening sound comes out. Seeing how big it is and hearing how loud it is, the fox hopes for a lot of meat and fat, works hard to tear it open, and finds nothing but skin. He concludes that the bigger and louder a thing is, the less there may be inside. In the frame, Dimna tells this to the lion, who is frightened by the ox's bellow, to say "don't be shaken by a noise". [opened]
- **Key line:** «بدانستم که هرکجا جثه ضخیمتر و آواز آن هایل‌تر منفعت آن کمتر.» [opened]
- **Needs care:** The fox is hunting (mild). The frame (Dimna's scheming at court) is not needed. Nothing else.
- **Age band: 2–4.** One setting, one surprise, a sound children can make. Toddlers are often frightened by loud noises (thunder, a vacuum cleaner); this lets them laugh at one.
- **Softening:** The fox is curious ("what giant animal says DOOM-DOOM?") rather than greedy for meat. Repeat the wind–branch–drum beat three times with a refrain (باد آمد، شاخه تکان خورد، دوم دوم!). The fox peeks in, finds the drum empty, and ends by playing it himself. Keep the fox's discovery that the loud thing was empty.
- **Parent note:** From Kelileh va Demneh, a book of animal fables Iranians have read for 800 years; it helps children see that a big noise is not always a big danger.
- **Values:** courage, curiosity, looking closely.
- **Questions:** What made the big sound? What sound scares you, and what is really making it? How could we find out what is making a noise?

## 2. بط و ستاره (The duck and the star)

- **Source:** Kelileh va Demneh, "The lion and the ox", section 29. https://ganjoor.net/monshi/kelile-demni/shirogav/sh29 [opened]
- **Plot (from the text):** A duck sees a star shining in the water and thinks it is a fish. It tries again and again to catch it and gets nothing, so it gives up. The next day, whenever it sees a real fish, it thinks it is the same light and does not try, and so it stays hungry all day. In the frame it illustrates how one bad experience can make you distrust what is real. [opened]
- **Key line:** «بَطی در آب روشناییِ ستاره دید، پنداشت که ماهی است، قصدی می‌کرد تا بگیرد و هیچ نمی‌یافت.» [opened]
- **Needs care:** The original ends with the duck hungry, which is a sad, flat ending for 2–4.
- **Age band: 2–4.** It is the shortest story in this note and has natural repetition (try, splash, nothing). The idea (a reflection is not a thing) is a good first science moment.
- **Softening:** Night: the duck dives for the shiny star-fish three times (repeat). Morning: it nearly gives up on a real fish, then looks closely, sees it wiggle, and catches it (or nibbles water plants). Keep the star in the water and the mix-up.
- **Parent note:** A five-line Kelileh fable; after it, shine a torch or show the moon in a bowl of water so your child can try to "catch" it.
- **Values:** persistence, curiosity, not giving up after one disappointment.
- **Questions:** Why couldn't the duck catch the star? How did it know the real fish was different? Have you tried something that didn't work at first?

## 3. زاغ و رفتار کبک (The crow who wanted to walk like a partridge)

- **Source:** Kelileh va Demneh, "The ascetic and his guest", section 3. https://ganjoor.net/monshi/kelile-demni/zahedomehman/sh3 [opened]
- **Plot (from the text):** A crow saw a partridge walking and loved its graceful step. It tried for a long time to learn it, following the partridge, but never learned it, and forgot its own way of walking so that it could not get it back. [opened]
- **Key line:** «یک‌چندی کوشید و بر اثر کبگ پویید، آن را نیاموخت و رفتار خویش فراموش کرد.» [opened]
- **Needs care: class.** In the frame the moral is explicitly about rank: a guest is told not to give up his ancestors' language to learn Hebrew, and the commentary says the low-born must not set themselves level with the noble («نگذارد که نااهل بدگوهر خویشتن را در وزان احرار آرد») [opened]. That message must not be carried over. Also, never present learning or imitation as bad.
- **Age band: 2–4 and 4–6.** Funny physical comedy (children can do the crow's hop and the partridge's strut). The Persian proverb about the crow and the partridge's walk is still in daily use [recall, unverified], so it is cultural knowledge.
- **Softening:** Keep the crow trying and getting muddled. Change the ending from permanent loss to recovery: the crow is wobbling and sad, a friend says "show me your own hop", it hops and flies, and the partridge admires it. Moral: you can learn new things and still keep your own.
- **Parent note:** The source of the proverb «کلاغه خواست راه رفتن کبک رو یاد بگیره، راه رفتن خودشم یادش رفت»; we tell it as "be yourself while you learn", not the book's old message about keeping to your rank.
- **Values:** self-acceptance, healthy admiration, humour.
- **Questions:** Show me the crow's walk and the partridge's walk! Why did the crow get muddled? What is something you do in your own way?

## 4. گم شدن سعدی در روز عید (Little Saadi lost on a festival day)

- **Source:** Saadi, Bustan, chapter 9, section 15. https://ganjoor.net/saadi/boostan/bab9/sh15 [opened]
- **Plot (from the text):** Saadi remembers that as a small child he went out with his father on a festival day, got absorbed in watching people's games, and lost his father in the crowd. He cried out in fear; his father suddenly found him and pulled his ear: "How many times did I tell you not to let go of my robe?" Saadi then turns it into a Sufi lesson: a small child cannot walk an unknown road alone, so hold on to those who know the way. [opened]
- **Key lines:** «همی یادم آید ز عهد صغر / که عیدی برون آمدم با پدر / به بازیچه مشغول مردم شدم / در آشوب خلق از پدر گم شدم» and «که ای شوخ چشم آخرت چند بار / بگفتم که دستم ز دامن مدار» [opened]
- **Needs care:** The ear-pull (a physical punishment) must go. The Sufi moral (follow the shaykhs) is for adults. "Which Eid" is not named in the text; do not claim it was Nowruz.
- **Age band: 4–6 (also 2–4).** Getting lost in a crowd is a real fear and a real risk at this age; a story told by the great poet about himself as a child makes it gentle.
- **Softening:** The father finds him and hugs him; then, calmly, repeats the rule. Add a short "what to do if you get lost" ending in the father's words: stand still, call out, ask a mother with children or a shop-keeper. Keep the festival crowd, the toys and games, and the "hold my robe" rule.
- **Parent note:** Saadi, the poet of Shiraz, wrote this memory of being lost as a little boy; use it to practise what your child should do if they lose you in a crowd.
- **Values:** safety, trust, listening.
- **Questions:** Why did little Saadi let go? How did he feel when he was lost? If you lose me in the bazaar, what will you do?

## 5. سگ تشنه در بیابان (The thirsty dog in the desert)

- **Source:** Saadi, Bustan, chapter 2 (on kindness), section 11. https://ganjoor.net/saadi/boostan/bab2/sh11 [opened]
- **Plot (from the text):** A man found a dog in the desert dying of thirst. He turned his hat into a bucket and tied his turban to it as a rope, lowered it into a well and gave the weak dog water. Saadi adds that the Prophet told of this man, that God forgave his sins, and that no one who did good even to a dog lost by it. [opened]
- **Key lines:** «یکی در بیابان سگی تشنه یافت / برون از رمق در حیاتش نیافت / کله دلو کرد آن پسندیده کیش / چو حبل اندر آن بست دستار خویش» and «کسی با سگی نیکویی گم نکرد / کجا گم شود خیر با نیکمرد؟» [opened]
- **Needs care: religion; real-world safety.** The reference to the Prophet can be left out or kept as "a wise saying of long ago"; the app should not quote a hadith directly. Stray dogs in Iran can bite and carry rabies, so children must not copy this alone.
- **Age band: 4–6.** Clear problem, inventive solution (a hat as a bucket), immediate kindness. Short.
- **Softening:** The dog is "very tired and thirsty" (not near death). Keep the hat-and-turban bucket, which is the memorable part. End with the dog wagging and walking with him to the next village.
- **Parent note:** Saadi praises a man who helped a thirsty dog; add the house rule that children help animals by telling a grown-up, not by touching dogs they don't know.
- **Values:** kindness to animals, resourcefulness.
- **Questions:** How did the man make a bucket? What do animals need on a hot day? If we see a hurt or thirsty animal, what should you do?

## 6. آرزوی پرواز (The young pigeon's wish to fly)

- **Source:** Parvin Etesami, Divan, masnavis and qit'as no. 7. https://ganjoor.net/parvin/divanp/mtm/sh7 [opened]
- **Plot (from the text):** A young pigeon, eager to fly, bravely opens its wings, hops from branch to branch, over a little roof to the stream's edge. The way that looked near was far; it grows frightened and tired, cannot go back, and doesn't know which way home is. It falls and cries; its mother calls from a branch: you tried too early; months and years will teach you this courage; first set both feet firmly, then think of standing. Later the mother speaks darkly of traps, stones and children who broke her feathers. [opened]
- **Key lines:** «کبوتر بچه‌ای با شوق پرواز / بجرئت کرد روزی بال و پر باز» and «بباید هر دو پا محکم نهادن / از آن پس، فکر بر پای ایستادن» [opened]
- **Needs care:** The mother's second half is grim for small children («مرا در دامها بسیار بستند / ز بالم کودکان پرها شکستند») and somewhat scolding («چنین افتند مستان از بلندی», a "drunk" image). [opened]
- **Age band: 4–6.** It is a child's own situation: wanting to do big things now. The scolding can turn into encouragement.
- **Softening:** Keep the first half almost as written (branch, roof, stream, lost, crying). The mother flies to it, they rest, and she guides it home. Drop the traps and the stone-throwing children. End with practice: a little further each day, until one morning it flies to the stream and back by itself.
- **Parent note:** Parvin Etesami (1907–1941) is one of Iran's best-loved women poets; her young pigeon learns that courage grows step by step.
- **Values:** patience, practice, asking for help, courage.
- **Questions:** Why did the young pigeon get lost? What did its mother say to do first? What is something you're practising little by little?

## 7. گِل خوشبوی (The sweet-smelling clay)

- **Source:** Saadi, Golestan, preface. https://ganjoor.net/saadi/golestan/dibache [opened]
- **Plot (from the text):** One day in the bathhouse a piece of sweet-smelling clay came to Saadi from a dear friend's hand. He asked it: are you musk or ambergris, that your scent delights me so? It said: I was only humble clay, but I sat for a while with the rose; my companion's goodness worked on me, otherwise I am the same earth I was. [opened]
- **Key lines:** «بگفتا: «من گِلی ناچیز بودم / و لیکن مدّتی با گُل نشستم / کمال همنشین در من اثر کرد / وگرنه من همان خاکم که هستم»» [opened]
- **Needs care:** «محبوب» (beloved) and «مستم» (I am drunk with its scent) are poetic; render as "a friend" and "the smell made me so happy". In the preface the poem praises the ruler; that context is not needed.
- **Age band: 4–6 and 6–8.** A talking object and a smell are concrete; the idea (we become like our friends) is one children can test. The old public bath (حمام) and washing clay are cultural details worth teaching. Washing hair with scented clay (گل سرشور) in the hammam is my recollection of the custom [recall, unverified].
- **Softening:** Build a short frame: a child goes to the hammam with grandmother in the old days, is handed the clay, and asks it why it smells of roses; the clay answers in Saadi's words. Children can make "rose clay" at home with rose petals in a jar.
- **Parent note:** These four lines from the opening of Saadi's Golestan are among the most quoted in Persian; they say that good company makes us better.
- **Values:** friendship, choosing good company, humility.
- **Questions:** Why did the clay smell of roses? Which friend makes you kinder or happier? How could you be "the rose" for someone?

## 8. سه ماهی (The three fish)

- **Source:** Kelileh va Demneh, "The lion and the ox", section 24. https://ganjoor.net/monshi/kelile-demni/shirogav/sh24 [opened]. Rumi retells it in Masnavi book 4, section 83 (https://ganjoor.net/moulavi/masnavi/daftar4/sh83, title only [opened]).
- **Plot (from the text):** In a quiet pool lived three fish, two prudent and one helpless. Two fishermen passing by agree to come back with a net. The wisest fish, who had seen hard times, at once swims out where the water flows in. The fishermen block both sides. The second, half-wise, says "I was careless, but now is the time for a plan", plays dead, floats on its back, is thrown away by the fisherman and slips into the stream. The third, confused, darts left and right until it is caught. [opened]
- **Key line:** «پس خویشتن مرده ساخت و بر روی آب‌، سِتان می‌رفت. صیاد او را برداشت و چون صورت‌شد که مرده است بینداخت» [opened]
- **Needs care:** The third fish is caught (implied death). "Playing dead" is fine.
- **Age band: 4–6 and 6–8.** Three characters with three clear choices is a classic structure for this age.
- **Softening:** The third fish is caught in the net but is so small that the fishermen let it go; it swims to its friends and says "next time I'll listen and make a plan". Keep the three fish, the overheard plan, leaving early, and playing dead.
- **Parent note:** One of the best-known Kelileh fables, also in Rumi's Masnavi; it shows three ways to meet a problem: plan early, stay calm and think, or panic.
- **Values:** planning, calm thinking, listening to warnings.
- **Questions:** What did each fish do? Which fish would you like to be? What do you do when you feel panicky?

## 9. بلبل و مور (The nightingale and the ant)

- **Source:** Parvin Etesami, Divan, masnavis and qit'as no. 25. https://ganjoor.net/parvin/divanp/mtm/sh25 [opened]
- **Plot (from the text):** In spring a nightingale, in love with the roses, sings and dances from branch to branch and sees an ant working at the foot of the tree. It laughs: it's a day for joy, not work; look at the luck of Nowruz; sit and listen. The ant answers that the birds' song lasts a week and winter will come; build a home and a store as I do. Winter comes; the rose is gone and the nightingale, hungry, asks the ant for food. The ant refuses: our grain is our winter store; go and wait for spring. [opened]
- **Key lines:** «همرهی طالع فیروز بین / دولت جان‌پرور نوروز بین» and «تو به سخن تکیه‌کنی، من بکار / ما هنر اندوخته‌ایم و تو عار» [opened]
- **Needs care:** The ant's refusal is harsh; a story for 4–6 should not end with a hungry bird turned away. «پهلوی جانان» and similar love images can simply be dropped.
- **Age band: 4–6 and 6–8.** Familiar shape (work and play), set at Nowruz, with two lively voices.
- **Softening:** Keep spring, the mockery, the ant's answer, and winter. In winter the ant, after reminding the nightingale gently, shares a little and lets it shelter; in return the nightingale sings for the ants all winter; next spring it sings and gathers seeds. Tell parents that in Parvin's poem the ant says no.
- **Parent note:** A Nowruz version of the ant and the grasshopper by Parvin Etesami; we end it with sharing, so it teaches both preparing and kindness.
- **Values:** hard work, planning, generosity.
- **Questions:** Why did the ant keep working at Nowruz? Was it fair for the ant to share in our story? How can we enjoy Nowruz and still get ready for later?

## 10. خرگوش و پیلان (Piruz the hare and the moon's message)

- **Source:** Kelileh va Demneh, "The owls and the crows", section 5. https://ganjoor.net/monshi/kelile-demni/boofozagh/sh5 [opened]
- **Plot (from the text):** In a drought the springs dry up and the elephants' king leads his herd to a spring called "the Moon" in the hares' land; many hares are trampled. The hares' king calls for a wise volunteer; a hare named پیروز offers to go as envoy. Fearing to go near an elephant, he climbs a height and calls: "I am the moon's messenger. The moon says: you trust your strength over the weak and have muddied my spring; stay away." He invites the elephant to see the moon in the spring. The moon's reflection shines in the water; when the elephant touches the water with his trunk the reflection trembles, so the moon seems angry; the elephant bows and promises not to come back. [opened]
- **Key lines:** «من فرستاده ماهم» and «چون آسیب خرطوم بآب رسید حرکتی در آب پیدا آمد و پیل را چنان نمود که ماه همی بجنبد.» [opened]
- **Needs care:** Trampling of hares; the moon's message threatens to «چشمهات برکنم و ... بکشم» [opened]; the hare's plan is a deception. The frame (the crows' war against the owls) is not needed.
- **Age band: 6–8.** Clever-small-beats-big, with a visual trick children can reproduce with a bowl of water and a torch.
- **Softening:** The elephants' huge feet crush the hares' burrows and scare them (no deaths). The moon's message becomes "be gentle with the small; this spring is for everyone". Keep the name Piruz, the hilltop, the moon in the water and the trembling reflection. Optional ending: the hares show the elephants another spring, so the trick ends in sharing.
- **Parent note:** In this Kelileh fable a hare called Piruz uses the moon's reflection to protect his home; talk together about when a trick is fair.
- **Values:** courage, cleverness, protecting the weak, sharing resources.
- **Questions:** Why did the moon seem to move? Was Piruz brave, clever or both? Could the hares and elephants have shared?

## 11. چهار کس و انگور (Four people and the grapes)

- **Source:** Rumi, Masnavi, book 2, section 112. https://ganjoor.net/moulavi/masnavi/daftar2/sh112 [opened]
- **Plot (from the text):** A man gave four people one dirham. One said "I'll buy angur"; another, an Arab, said "No, I want inab"; a Turk said "I want uzum"; a Rumi (Greek) said "Let's get estafil". They came to blows, not knowing all the names meant the same thing. A wise man who knew a hundred languages would have made peace: with this one dirham I'll give you all what you want. Rumi goes on into a Sufi teaching about the master who unites, with Solomon who knew the birds' language. [opened]
- **Key lines:** «در تنازع آن نفر جنگی شدند / که ز سِرّ نامها غافل بُدند» and «یک درمتان می‌شود چار المراد / چار دشمن می‌شود یک ز اتحاد» [opened]
- **Needs care: peoples.** The story is about four peoples; tell it with respect for each (no accent jokes) and keep all four equal and right. "Fists" can become a loud argument. The Sufi teaching is for adults.
- **Age band: 6–8 (8–10).** Children of this age meet other languages and dialects at school; the joke is easy to get.
- **Softening:** Four travelling children share one coin; each wants "their" fruit; they argue; a grape-seller who speaks all four languages laughs and hands them one bunch. Keep the four words: انگور، عنب، اُزوم، استافیل.
- **Parent note:** Rumi's story shows that many quarrels are misunderstandings; a good moment to learn a word in another language, for example Azerbaijani "üzüm".
- **Values:** understanding, cooperation, respect for other languages.
- **Questions:** Why did they argue if they all wanted the same thing? How do you say "grape" in another language you know? What can we do when we don't understand each other?

## 12. نوشیروان و نمک (Anushirvan pays for the salt)

- **Source:** Saadi, Golestan, chapter 1, story 19. https://ganjoor.net/saadi/golestan/gbab1/sh19 [opened]
- **Plot (from the text):** On a hunt, Anushirvan the Just's party roasted game and had no salt. A servant was sent to the village. Anushirvan said: pay for the salt, so it doesn't become a custom and the village is ruined. They said: what harm can so little do? He said: injustice in the world began small, everyone added to it, until it grew this big. Saadi adds: if the king eats one apple from a subject's garden, his men pull the tree up by its roots. [opened]
- **Key lines:** «نمک به قیمت بستان تا رسمی نشود و ده خراب نگردد.» and «بنیادِ ظلم در جهان اوّل اندکی بوده‌است هر که آمد بر او مَزیدی کرده تا بدین غایت رسیده.» [opened]
- **Needs care:** Almost none; hunting is in the background.
- **Age band: 8–10 (works 6–12).** Short, concrete, and the reasoning ("small things grow") is exactly the age's moral puzzle.
- **Softening:** A picnic in the country after the hunt; the "kebab" can stay. Keep the servant, the question "what harm can it do?" and the king's answer.
- **Parent note:** Anushirvan, a Sasanian king remembered as "the Just", insists on paying for a pinch of salt; Saadi's point is that fairness starts with small things.
- **Values:** justice, honesty, leading by example.
- **Questions:** Why did the king want to pay for so little salt? Can you think of a small unfair thing that could grow? What would the apple tree in Saadi's poem look like at the end?

## 13. خاربُن بر سر راه (The thornbush in the road)

- **Source:** Rumi, Masnavi, book 2, section 26. https://ganjoor.net/moulavi/masnavi/daftar2/sh26 [opened]
- **Plot (from the text):** A rough but smooth-talking man planted a thornbush in the middle of the road. Passers-by complained; it grew, tearing clothes and wounding feet. The governor ordered him to dig it up; he said "Yes, one day I will", and promised "tomorrow, tomorrow" for a long time. Meanwhile the bush grew younger and stronger and he grew older and weaker. Rumi: every bad habit is a thornbush. [opened]
- **Key lines:** «گفت آری بر کنم روزیش من / مدتی فردا و فردا وعده داد» and «خاربن در قوت و برخاستن / خارکن در پیری و در کاستن» [opened]
- **Needs care:** «پای خلق از زخم آن پر خون شدی» (bloody feet) → "scratched". The following lines bring in Imam Ali and the Prophet; leave them out.
- **Age band: 8–10.** Procrastination and habits are real issues at school age, and the image is vivid.
- **Softening:** Make it a tidy village story: the man plants a small thorny bush by the path "for a hedge"; the governor asks him to move it; each "tomorrow" is a scene; finally he and his neighbours dig it out together and plant roses. Keep "tomorrow, tomorrow" and the bush getting stronger while he gets tired.
- **Parent note:** Rumi's thornbush is a picture of any habit we keep promising to change "tomorrow"; ask which "thornbush" each of you could dig up this week.
- **Values:** responsibility, thinking of others, acting now.
- **Questions:** Why was it harder to dig up the bush every day? What is a "tomorrow, tomorrow" thing for you? Who was hurt by the thornbush?

## 14. نقاشان چینی و رومی (The Chinese and Greek painters)

- **Source:** Rumi, Masnavi, book 1, section 157. https://ganjoor.net/moulavi/masnavi/daftar1/sh157 [opened]
- **Plot (from the text):** The Chinese said "we are the better painters"; the Rumis (Greeks) said "we have the art". The sultan set a test: two rooms facing each other. The Chinese asked for a hundred colours and painted; the Rumis used no paint at all, only polished their wall. When the Chinese finished, the king admired their pictures; then the curtain between the rooms was lifted and the whole painting shone back from the polished wall, even more beautiful. Rumi: the polishers are those who have cleaned their hearts of greed, meanness and hatred. [opened]
- **Key lines:** «رومیان گفتند نه نقش و نه رنگ / در خور آید کار را جز دفع زنگ» and «پاک از آز و حرص و بخل و کینه‌ها» [opened]
- **Needs care: peoples.** Two nations compete; keep both teams skilled and admired. The Sufi and Moses lines are for adults.
- **Age band: 8–10.** The surprise needs a little abstract thinking (reflection, a heart "polished" like a mirror). Very good for an art activity.
- **Softening:** None of substance. End with both teams admiring each other's work.
- **Parent note:** Rumi's painting contest suggests that a clean, kind heart reflects beauty; try it with a mirror and a drawing.
- **Values:** inner goodness, patience, different kinds of talent.
- **Questions:** Why did the polished wall look so beautiful? What would "polishing your heart" mean? Which team would you join, and why?

## 15. مرغ گرفتار و سه پند (The caught bird's three counsels)

- **Source:** Rumi, Masnavi, book 4, section 86. https://ganjoor.net/moulavi/masnavi/daftar4/sh86 [opened]
- **Plot (from the text):** A man catches a bird with a trap. The bird says: you've eaten many cows and sheep and never been full; you won't be full from my little body; let me go and I'll give you three counsels, one in your hand, one on the roof, one on the tree. In his hand: never believe the impossible from anyone. Freed, on the wall: don't grieve over what has passed. Then it says: inside me was a pearl of ten dirhams' weight, your fortune and your children's; you lost it. The man wails. The bird: didn't I tell you not to grieve the past and not to believe the impossible? I weigh three dirhams; how could a ten-dirham pearl be inside me? He asks for the third; the bird says advising a fool is sowing seed in salty earth, and keeps it. [opened]
- **Key lines:** «که محالی را ز کس باور مکن» and «من نیم خود سه درمسنگ ای اسد / ده درمسنگ اندرونم چون بود» [opened]
- **Needs care:** A simile about a woman in labour («آنچنان که وقت زادن حامله») is not needed. The bird's lie is a test; discuss it.
- **Age band: 8–10.** The logic puzzle (3 is less than 10) and the letting-go lesson suit this age; a bird winning its freedom with words appeals to children.
- **Softening:** The man wants to keep the bird in a cage (not eat it). Keep all three steps (hand, wall, tree), both counsels and the pearl test. End with the man laughing at himself and the third counsel left as a riddle for the child.
- **Parent note:** Rumi's clever bird teaches two lessons, "check if it can be true" and "don't cry over what's gone", and leaves the third for you to guess together.
- **Values:** critical thinking, letting go of regret, freedom for animals.
- **Questions:** How did the bird prove the pearl story was impossible? Why did the man forget the first counsel so fast? What do you think the third counsel was?

## 16. دارا و گله‌بان (King Dara and the horse-herder)

- **Source:** Saadi, Bustan, chapter 1, section 5 ("on knowing friend from enemy"). https://ganjoor.net/saadi/boostan/bab1/sh5 [opened]
- **Plot (from the text):** King Dara was separated from his men while hunting. A herdsman came running towards him; Dara thought "this is an enemy" and drew his royal bow. The man called: "Lord of Iran and Turan, I am the one who raises the king's horses in this meadow." The king laughed: an angel helped you, or I'd have drawn the string to my ear. The herdsman laughed back: it is poor judgement if a king can't tell friend from foe; you have seen me many times and asked about the herds; I can pick one horse out of a hundred thousand; you too, look after your flock. [opened]
- **Key lines:** «نه تدبیر محمود و رای نکوست / که دشمن نداند شهنشه ز دوست» and «توانم من، ای نامور شهریار / که اسبی برون آرم از صد هزار / مرا گله‌بانی به عقل است و رای / تو هم گلهٔ خویش باری، بپای» [opened]
- **Needs care:** A bow aimed at a person; keep it as a tense moment in which no one is hurt.
- **Age band: 10–12 (8–10).** The point is subtle: a leader's duty to know the people he serves, and a humble man's courage to say so.
- **Softening:** Very little. Keep the bow, the shout, both laughs and the herdsman's speech.
- **Parent note:** In Saadi's Bustan a horse-herder tells an Iranian king that a good shepherd knows every animal, so a good king should know his people.
- **Values:** attentiveness, humility, courage to speak up, responsibility.
- **Questions:** Why didn't Dara recognise him? How did the herdsman stay respectful while telling the king he was wrong? Whom are you responsible for knowing well: a pet, a younger sibling, your class?

## 17. نوشیروان و دو جغد (Anushirvan and the two owls)

- **Source:** Nezami, Makhzan al-Asrar, section 23. https://ganjoor.net/nezami/5ganj/makhzanolasrar/sh23 [opened]
- **Plot (from the text):** Hunting, Anushirvan rides away from his train with only his vizier. They see a village as ruined as an enemy's heart, and two birds (owls: the king later says «جغد نشانم») calling to each other. The king asks what they're saying. The vizier: it's a marriage proposal; one gives its daughter to the other and asks as bride-price this ruined village and a few more; the other replies, "forget it: look at the king's injustice; if he lasts, I'll give you a hundred thousand ruined villages." The king sighs, weeps and blames himself: "see the injustice that has reached even the birds." [opened]. In the rest of the story he restores justice and the land flourishes [recall, unverified: I read only the opening ~40 couplets].
- **Key lines:** «دختری این مرغ بدان مرغ داد / شیربها خواهد از او بامداد / کاین ده ویران بگذاری به ما» and «گفت «‌ستم بین که به مرغان رسید»» [opened]
- **Needs care:** Marriage and bride-price (شیربها) between birds is fine as folklore. The king's self-blame mentions death and judgement day; keep it light. Check the ending before production.
- **Age band: 10–12.** Satire told through animals, a vizier who criticises his king cleverly, and owls as the birds of ruins: children of this age can enjoy the irony.
- **Softening:** Little. Keep the hunt, the ruined village, the owls' "wedding gift" and the king's change of heart; end with the king rebuilding the villages and the owls having to move.
- **Parent note:** In Nezami's poem a wise vizier "translates" two owls to show King Anushirvan how his people are suffering; a story about listening to hard truths.
- **Values:** justice, empathy, accountability, wise speech.
- **Questions:** Did the vizier really understand the owls? Why did he tell the king this way? What did the king do afterwards, and what would you have done?

## 18. پیرزن و سلطان سنجر (The old woman and Sultan Sanjar)

- **Source:** Nezami, Makhzan al-Asrar, section 27. https://ganjoor.net/nezami/5ganj/makhzanolasrar/sh27 [opened]
- **Plot (from the text):** An old woman, wronged, catches Sultan Sanjar's robe: "A drunk officer came to my street, kicked me, dragged me by the hair from my house, accused me of a murder in my street at midnight and searched my house for the killer. If you don't give me justice, this account will go with you on the day of reckoning." She reminds him that the Turks' rule rose by justice, that a king who allows oppression is no king, and that his justice is the lamp of his night. [opened]. Nezami ends by saying Sanjar ignored her words and lost his land [recall, unverified: I did not read the closing couplets].
- **Key lines:** «پیرزنی را ستمی درگرفت / دست زد و دامن سنجر گرفت» and «عدل تو قندیلِ شب‌افروز توست / مونسِ فردای تو امروزِ توست» [opened]
- **Needs care (heavy): alcohol, violence, othering, politics.** The officer is drunk («شحنهٔ مست»), kicks her and pulls her hair, and there is a murder accusation [opened]. One line insults peoples: «ترک نه‌ای، هندوی غارتگری» [opened]; it must not be used. A story about a police officer abusing an old woman and a ruler being told off may be read politically in Iran today; this is an owner decision.
- **Age band: 10–12 only.** The idea that an ordinary old woman may hold the most powerful man to account is important and very Persian, but the abuse needs maturity.
- **Softening:** The officer is "rude and careless": he pushes past her, turns her house upside down looking for a thief and calls her a liar. No drink, no kicks, no murder (make it a stolen horse). Keep her grabbing the sultan's robe, her speech (lamp of justice) and the moral. Ending: either Nezami's (he doesn't listen and his kingdom weakens) or Sanjar listening and putting things right; the owner should choose.
- **Parent note:** In Nezami's poem an old woman stops Sultan Sanjar in the street to demand justice; it shows that everyone, however powerful, must listen to the people they serve.
- **Values:** justice, courage, respect for elders, accountability.
- **Questions:** Why was the old woman brave? What should a good ruler do when someone complains? Have you ever had to speak up for yourself or someone else?

---

## Reserves (good but lower priority, or need more work)

- **R1. یاد دارم که در ایام طفولیت (Saadi awake at night), Golestan 2:7.** https://ganjoor.net/saadi/golestan/gbab2/sh7 [opened]. Child Saadi, up all night with the Quran, complains to his father that the sleepers are as good as dead; the father: «جانِ پدر! تو نیز اگر بخفتی به از آن که در پوستینِ خلق افتی» ("better you slept than speak ill of people"). 8–10, about not judging others. Care: religious devotion is the setting; keep it respectful and simple.
- **R2. عیسی و سگ مرده (Jesus and the dead dog's white teeth), Makhzan al-Asrar 39.** https://ganjoor.net/nezami/5ganj/makhzanolasrar/sh39 [opened]. Onlookers insult a dead dog; Jesus says «دُر به سپیدی نه چو دندان اوست». 10–12, about seeing the good. Care: a carcass, and a religious figure (honoured in Islam, but the owner may want to avoid prophets).
- **R3. دو برادر (Two brothers: the courtier and the worker), Golestan 1:36.** https://ganjoor.net/saadi/golestan/gbab1/sh36 [opened]. «نانِ خود خوردن و نشستن به که کمرشمشیرِ زرّین به‌ خدمت بستن». 10–12, dignity of one's own work. Little plot; better as a two-scene play.
- **R4. پیرزن و ده کلاوه ریسمان (The old woman who came to buy Joseph with ten skeins of yarn), Manteq al-Tayr.** https://ganjoor.net/attar/manteghotteyr/ozr-morghan/sh58 [opened]. «لیک اینم بس که چه دشمن چه دوست / گوید این زن از خریداران اوست»: aim high even if you can't win. 10–12. Care: Joseph is being sold as a slave and the woman is "sick with longing for the boy"; hard to soften while keeping it recognisable.
- **R5. Shoes and feet, Golestan 3:18.** https://ganjoor.net/saadi/golestan/gbab3/sh18 [opened]. «یکی را دیدم که پای نداشت. سپاسِ نعمتِ حق به جای آوردم و بر بی‌کفشی صبر کردم». Gratitude, but it uses a disabled man as an object lesson; only with careful framing.
- **R6. روباه شل (The legless fox and the lion), Bustan 2:17.** https://ganjoor.net/saadi/boostan/bab2/sh17 [opened]. «برو شیرِ دَرنده باش، ای دَغَل / مَینداز خود را چو روباهِ شَل». About working and giving, not waiting to be fed. Care: the lion eats a jackal, disability framing, and a slur in the text («مُخَنَث»), which must not be used.
- **R7. کبودی زدن قزوینی (The man who wanted a lion tattoo), Masnavi 1:141.** https://ganjoor.net/moulavi/masnavi/daftar1/sh141 [opened]. A funny story about giving up when it hurts (a lion with no tail, ears or belly). Care: it mocks the people of Qazvin, tattooing is an odd model for children, and the moral uses «نفس گبر» (gabr, an old slur for Zoroastrians) [opened].
- **R8. بازرگان آهن‌فروش (The merchant whose iron the mice ate), Kelileh, "The lion and the ox", 43.** https://ganjoor.net/monshi/kelile-demni/shirogav/sh43 (title [opened], text not read). A funny "an impossible lie answered with an impossible lie" story [recall, unverified]; involves hiding a friend's child and claiming a hawk took him, so 10–12 with care.

## Keep out, and why

- **Obeyd Zakani, موش و گربه** (https://ganjoor.net/obeyd/moosh-gorbe, index [opened]). The cat eats mice, the mice and cat fight a war, and the satire targets religious hypocrisy (the cat's false repentance) [recall, unverified]. Fine for teenagers or adults; too violent and too political for 0–12, even softened.
- **Kelileh, باب الملک والطائر فنزة** (the king and the bird Fanzeh): a prince kills a bird's chick and the bird blinds him [recall, unverified]. Child cruelty and maiming.
- **Kelileh, باب الزاهد وابن عرس** (the ascetic and the mongoose): a loyal pet that saved the baby is killed in haste [recall, unverified]. Strong lesson but too distressing for this audience.
- **Kelileh, ماهی‌خوار، پنج پایک و ماهیان** (heron and the crab, shirogav/sh20 title [opened]): fish eaten by deceit, the heron killed. Too much killing.
- **Kelileh, the merchant, his wife and the thief; the carpenter and his unfaithful wife; the mouse turned into a girl for marriage** (boofozagh sh10, sh13, sh15 titles [opened]): adultery and marriage themes.
- **Kelileh, the frog and the snake** (shirogav sh40 title [opened]): a snake eats the frog's young [recall, unverified].
- **Parvin, مادر دوراندیش** (https://ganjoor.net/parvin/divanp/mtm/sh140 [opened]): a hen warns her chicks with images of throat-cutting, skinning and spits («یا حرف سر بریدن و یا پوست کندن است»). Frightening.
- **Parvin, مست و هشیار** (no. 142, title [opened]): alcohol-based satire; adult.
- **Golestan 1:1 (the king and the captive; "a well-meant lie")** [recall, unverified]: an execution order; the lesson about lying is also a poor fit for children.
- **Golestan 1:7 (the slave on the boat thrown into the sea)** (gbab1/sh7 excerpt [opened]): a frightened servant is thrown into the water to teach gratitude; slavery and coercion.
- **Masnavi, Moses and the shepherd** [recall, unverified]: a beautiful story about sincere prayer, but it shows a prophet being rebuked by God and quotes intimate talk to God; leave to the owner and religious advisers.
- **Masnavi's bawdy tales and the cat-and-meat story** (a wife lies, the husband weighs the cat) [recall, unverified]: gender stereotyping and adult humour.
- **Sindbad-nameh** [recall, unverified]: the frame is a stepmother's attempted seduction and a death sentence; the inner tales are mostly about deceitful women.
- **Qabus-nameh** [recall, unverified]: an advice book for a prince, including chapters on wine and buying slaves; anecdotes are thin.
- **Bustan, Hatam Tai kills his famous horse to feed guests** [recall, unverified]: generosity shown by killing a beloved animal.

## Sources

All texts are from Ganjoor (ganjoor.net), read through its public API on 2026-11-20 [opened]:

- Kelileh va Demneh index: https://ganjoor.net/monshi/kelile-demni ; chapters shirogav (sh12, sh24, sh29, titles sh1–44), boofozagh (sh5, titles sh1–19), zahedomehman (sh3), boozineobakhe and shiroshoghal (titles).
- Saadi, Golestan: dibache; gbab1/sh19, sh36 (and titles sh3, sh7, sh31, sh35, sh37); gbab2/sh7; gbab3/sh18.
- Saadi, Bustan: bab1/sh5; bab2/sh11, sh17; bab9/sh15.
- Rumi, Masnavi: daftar1/sh141, sh157; daftar2/sh26, sh112; daftar4/sh86 (title sh83); daftar5 titles sh39, sh41 (the deer in the donkeys' stable, not read; a possible later candidate).
- Nezami, Makhzan al-Asrar: sh23, sh27, sh39 (title sh31).
- Attar, Manteq al-Tayr: ozr-morghan/sh58 (category index of the whole work).
- Parvin Etesami, Divan, masnavis and qit'as: index of nos. 1–152; texts of nos. 7, 25, 140.
- Obeyd Zakani: poet index (موش و گربه at /obeyd/moosh-gorbe).
- Ganjoor poet list API (https://api.ganjoor.net/api/ganjoor/poets) to find each author's path.
