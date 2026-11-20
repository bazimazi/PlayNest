# Research round 8: the Shahnameh and Persian heritage stories, by age (release 2.1)

Round 8 gives Iranian parents a way to share their own heritage with their children, at each age. It adds 39 stories to the
Persian app: 23 from Ferdowsi's Shahnameh, 15 from other Persian classics (Kelileh va Demneh, Saadi, Rumi, Parvin Etesami) and
one Iranian folk tale. It also adds a way to read the Shahnameh in the poem's own order, Shahnameh talk cards and play activities.
For both languages it adds a parent guide on sharing old tales with battles, monsters and sad endings, and 10 daily tips. The
Persian app went from 26 stories of its own to 65, and every age from 2 to 12 now has at least 9 to choose from.

**No Persian literature specialist, children's-literature reviewer or child psychologist has read any of it yet.** The checklist is
in §14 of [REVIEW-1.5.md](REVIEW-1.5.md). Full notes are in `research_notes/PlayNest phase 11 research round 8/`. Every source is
tagged opened, abstract, search-only or unverified, and only opened or abstract facts reached the app. Every story plot was read in
the Persian text itself, through the Ganjoor API, and every Ganjoor and other source link in the new stories was checked to open.

| Note | Covers |
|---|---|
| 01 | The Shahnameh from Kiumars to Rostam's youth: 12 candidates, with couplet numbers, what needs care, age bands and softening, and a check of the 7 Shahnameh stories already in the app |
| 02 | The heroic era: each of Rostam's seven labours judged on its own, Akvan, Siavash, Kay Khosrow, Giv, Bizhan, Rostam and Esfandiyar, Rostam and Sohrab, and what to keep out |
| 03 | The historical era (Shapur, Bahram Gur, Anushirvan, Babak, Bozorgmehr, Barbad) and Ferdowsi's life: what is history and what is the legend in Nezami Aruzi's Chahar Maqaleh |
| 04 | What research says about sharing old tales with children: fear by age, understanding death, finding a story's moral, violence, heritage and family stories, Persian scholarship on Shahnameh rewrites, and 15 house rules for adapting stories |
| 05 | Persian classics other than the Shahnameh: 18 ranked stories from Kelileh va Demneh, Saadi, Rumi, Nezami and Parvin Etesami, and a keep-out list |
| 06 | Iranian folk tales from different regions and peoples, and where the documented plots ran out |
| 07 | Shahnameh activities, 20 couplets checked word for word against Ganjoor's whole Shahnameh, heritage facts (naqqali, coffee-house painting, Yalda), children's editions, and a reading order |

## What changed for parents

- **Stories (Persian app):** 23 from the Shahnameh and 16 from other classics and folk tales, each set covering ages 2 to 12. Each one
  has a parent note saying what the poem says and what was changed for children, and why.
- **The Shahnameh in order:** stories now carry a place in the work they come from. On the story shelf a «شاهنامه» chip lists the
  Shahnameh stories for the child's age in the poem's order, and each Shahnameh story links to the one before and the one after. The
  7 Shahnameh stories already in the app have their places too. Ferdowsi's own story (history, then the legend, marked as legend)
  comes first.
- **Rostam and Sohrab, for 11 and 12 only:** added by the owner's decision, to be read with a parent. It is told from the poem
  (sohrab/sh4 to sh21) with everything that hides the truth kept (Afrasiyab's secret order, Hajir's silence, Rostam's denial, his
  trick in the first wrestle, Kavus refusing the cure) and ends with Rostam's call to end the war and Ferdowsi's closing couplet.
  The killing and the death are one sentence each. Left out and named in the note: Tahmineh's night visit, all wine, Rostam's
  night killing of the hero Tahmineh sent to point out his father, blood, and Rostam reaching for a dagger to kill himself
  (house rule 3: never suicide).
- **Talk cards (Persian):** 18 Shahnameh cards for ages 6 to 8 and 9 to 12, half on a couplet and half on a hero's choice.
- **Activities (Persian):** 9 Shahnameh games for ages 2 to 12: the Simorgh's feather (2 to 5), Kay Khosrow's seeing cup (2 to 5),
  Jamshid's throne for Nowruz (3 to 7, a Nowruz festival game), "Akvan says" opposites (4 to 8), a seven-station Haft Khan course
  (4 to 8), Kaveh's banner (5 to 9), Gordafarid's helmet (6 to 10), coffee-house painting (8 to 12) and a Shahnameh family tree
  (9 to 12), which shows from the poem itself that heroes' families cross the borders between enemy lands.
- **Guide (both languages):** "Old tales with battles, monsters and sad endings" (`old-tales-by-age`), which names no culture so
  both apps can show it, and 10 daily tips (`tips-round8.ts`).

## The rules every story follows

From note 04 (evidence) and the owner's direction (nothing harmful reaches a child):

1. Under 6: no death on the page, no blood, no one eaten, every danger resolved, and the story ends somewhere safe.
2. 6 to 8: danger can be real, but nobody is killed on the page; a beaten foe flees, is bound, is spared or "is beaten".
3. 8 to 12: a death may be told when it is the heart of the story, briefly and without detail. Never suicide, torture, mutilation
   or the killing of children, and no sexual content; romances become friendships or loyalty under 10.
4. No wine: cups become water or sherbet.
5. No people, religion or skin colour is put down, and old enemies are never linked to living peoples. Turan is a land, not a
   villain; Zahhak is judged by his deeds, as Ferdowsi himself does. Racialised similes in the poem (for example
   «چون روی زنگی سیاه») are never carried over.
6. Women keep their courage and their part in the story (Faranak, Rudabeh, Gordafarid, Manizheh).
7. No sermon at the end: the questions afterwards do the thinking, because young children rarely find a story's moral alone and
   being asked "why" helps more than being told (Walker & Lombrozo 2017).
8. Nothing invented beyond small connecting details, and every change is named in the story's note.

## What we kept out, and why

- **Forud** (his mother kills the horses and then herself), **the death of Siavash**, **the death of Rostam** (betrayal by his
  brother, and Rakhsh dies), **Iraj's murder**: kept out at every age.
- **Lonbak and Baraham** (an antisemitic stereotype) and **Azadeh** (killed by Bahram): kept out at every age.
- **Zal and Rudabeh** (a night of wine and kisses); **child Rostam and the white elephant** and **Mount Sepand** (drinking, a
  massacre): kept out. Sindokht's ride to Sam is a better door into that part of the story for older children, later.
- **Esfandiyar's seven labours** (he kills the Simorgh and later his own guide) and **Rostam and Esfandiyar** (tragic): held for
  a later round, 10 to 12 with care.
- **Mah Pishani**: drafted, then held back (the draft is in `held_drafts` beside the notes). The only documented plot we could
  read is a short summary, and the draft had to invent too much (including the mother returning from the cow). The owner decided
  not to pursue it.
- **Jirtdan, Nokhodi, Naneh Sarma, and Kurdish and Baluchi tales**: no full documented plot could be read online, and the owner
  decided not to pursue printed collections for them.
- **Obeyd Zakani's Mush o Gorbeh** (violent religious and political satire) and several Kelileh stories with killing or adultery.

## What the research found in existing content

No P1 problems. Fixed in this release:

- **P2, `gordafarid-and-the-white-fortress` note:** said that neither Rostam nor Sohrab knew they were father and son. In the poem
  Sohrab knows his father's name (sohrab/sh5); neither knows the other when they meet. Paragraph 6 now uses the poem's conditional
  ("if they see my face and hair").
- **P2, `zal-and-the-simorgh`:** the note now says that in the poem the Simorgh first carries the baby off as food for her chicks,
  and adds a line for adoptive and foster families. It now starts at 5, not 4, because it opens with a father abandoning a baby.
  Ganjoor refs added (manoochehr/sh2, sh3).
- **P3, `kavus-and-the-flying-throne`:** Ferdowsi reports the "war on the sky" only as one of two stories people told.
- **P3, `takhteh-nard-bozorgmehr`:** a talk question rested on an unverified Middle Persian claim (30 pieces as the days of a
  month). It now uses the poem's own line about a lone piece caught by two (anooshirvan/sh63, b. 94).

## Facts worth knowing (from note 07)

- Naqqali, the Iranian art of telling the Shahnameh to a crowd, was put on UNESCO's urgent safeguarding list in 2011. Yalda/Chella
  was inscribed in 2022; reading the Shahnameh on Yalda night is a custom in many families, not a rule.
- The Shahnameh has about 50,000 couplets (Khaleghi-Motlagh's edition counts 49,530; Ferdowsi himself says 60,000). It was
  finished in 400 AH (about 1010), as its closing lines say.
- «میازار موری که دانه‌کش است» is Saadi quoting Ferdowsi (Bustan 2:14) and is not in Ganjoor's Shahnameh text; «هنر نزد ایرانیان
  است و بس», «عجم زنده کردم» and «بسی رنج بردم در این سال سی» could not be found in it either. None of these is quoted in the app as
  Ferdowsi's own words.
- Ganjoor's meanings under couplets are now written by AI, so they are not a source. Its API's `plainText` field numbers couplets
  off by one; use `verses[].coupletIndex`.

## Owner decisions (20 November 2026)

1. Rostam and Sohrab: **in**, for 11 to 12, read with a parent (`rostam-and-sohrab`, saga place 118, after Gordafarid).
2. Mah Pishani, Jirtdan and Nokhodi: **not pursued**. The held draft stays out of the app.
3. Outside review: release 2.1 **need not wait** for it. A Persian children's-literature reviewer (Kanoon, or the Shiraz
   University children's literature centre) reading the 39 stories, especially those marked `care`, is still wanted.
