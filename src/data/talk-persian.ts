import type { TalkCard } from './packs';
import { localize } from '../i18n';

/**
 * Talk cards that draw on Persian culture: proverbs, lines of poetry and riddles to talk over. `lang: 'fa'`, so they appear
 * in Persian only.
 *
 * The Persian quotes each saying, line or riddle exactly in «». Sources (TalkCard has no refs field):
 *  - Proverbs: the list of Persian proverbs on Persian Wikiquote, https://fa.wikiquote.org/wiki/ضرب‌المثل‌های_فارسی
 *    Rumi's line: Masnavi, book 3, https://ganjoor.net/moulavi/masnavi/daftar3/sh228
 *    Saadi's line: Mavaez, qasideh 12, https://ganjoor.net/saadi/mavaez/ghasides/sh12
 *  - Poetry, from Ganjoor: Saadi, Golestan 1:10 (/saadi/golestan/gbab1/sh10) and 1:16 (/saadi/golestan/gbab1/sh16);
 *    Ferdowsi, Shahnameh, opening (/ferdousi/shahname/aghaz/sh1); Saadi quoting Ferdowsi, Bustan 2:14
 *    (/saadi/boostan/bab2/sh14); Rumi, Masnavi 1:1 (/moulavi/masnavi/daftar1/sh1); Hafez, ghazal 115 (/hafez/ghazal/sh115);
 *    Nezami, Leyli o Majnun, advice to his son (/nezami/5ganj/leyli-majnoon/sh9).
 *  - Riddles: two from Tehran, collected by Charles T. Scott (1965) and quoted in https://en.wikipedia.org/wiki/Persian_riddles;
 *    the sleep riddle, the pre-Islamic dog riddle and Rudaki's pen riddle from https://fa.wikipedia.org/wiki/چیستان;
 *    Ferdowsi's riddles for Zal (/ferdousi/shahname/manoochehr/sh20, answers in sh21), Rudaki (/roodaki/baghimande/sh100) and
 *    Manouchehri's candle (/manoochehri/divanm/ghaside-ghete/sh50) checked on Ganjoor.
 *  - Shahnameh, from Ganjoor's text (https://ganjoor.net/ferdousi/shahname/…; Ganjoor names its source «ویکی‌درج», and
 *    wording can differ from Khaleghi-Motlagh's edition). Lines quoted, by card: 1 Tahmures, /tahmoores/sh1 couplet 42;
 *    4 the Simorgh to Zal, /manoochehr/sh2 c. 94; 5 Sam to Zal, /manoochehr/sh3 c. 109; 6 Zav's peace, /zutahmasb/sh1 c. 28;
 *    8 Rostam thanks the wild sheep, /kkavoos/sh6 c. 23; 9 Shapur's bridge, /zolaktaf/sh1 c. 15; 10 wisdom, /aghaz/sh2 c. 3;
 *    13 divs, /akvan/sh1 c. 141; 14 Rostam to Bizhan, /bizhan/sh11 c. 24; 16 Anushirvan to Babak, /anooshirvan/sh4 c. 46;
 *    18 the seed of words, /yazdgerd3/sh17 c. 22 (also /parviz/sh71 c. 6). Stories told without a quote: 2 Kaveh tears up
 *    the testimony, /zahak/sh7; 7 Rostam turns down the feast, /garshasp/sh5 c. 22–25; 11 Gordafarid, /sohrab/sh7 c. 38–55;
 *    12 Siavash asks Kavus to pardon the queen, /siavosh/sh4 c. 285–308; 15 Bahram and the cow, /bahgoor/sh19;
 *    17 Barbad in the cypress, /parviz/sh70. Card 3, Fereydun's sons and the dragon, is not in Ganjoor's text; it was read in
 *    Mohl's edition on Persian Wikisource, https://fa.wikisource.org/wiki/شاهنامه_(تصحیح_ژول_مل)/آزمودن_فریدون_پسران_خود_را.
 *    Research: research_notes/PlayNest phase 11 research round 8, notes 01–03 and 07.
 * Ids are stable, so add new cards at the end of a theme.
 */
export const PERSIAN_TALK: TalkCard[] = [
  // ---------- Proverbs (ضرب‌المثل), ages 6 to 8 ----------
  { id: 'talk-fa-proverb-1', theme: 'Proverbs', emoji: '💧', band: '6-8', lang: 'fa', text: 'What do you think this saying means: drop by drop, a sea is made?' },
  { id: 'talk-fa-proverb-2', theme: 'Proverbs', emoji: '👏', band: '6-8', lang: 'fa', text: 'What do you think this saying means: one hand on its own makes no sound?' },
  { id: 'talk-fa-proverb-3', theme: 'Proverbs', emoji: '🌸', band: '6-8', lang: 'fa', text: 'One flower doesn’t make a spring, goes a saying. What do you think that means?' },
  { id: 'talk-fa-proverb-4', theme: 'Proverbs', emoji: '🌰', band: '6-8', lang: 'fa', text: 'Not everything round is a walnut, goes a saying. Has something ever fooled you by its looks?' },
  { id: 'talk-fa-proverb-5', theme: 'Proverbs', emoji: '🐟', band: '6-8', lang: 'fa', text: 'A fish is fresh whenever you catch it, goes a saying. Is it ever too late to start something?' },
  { id: 'talk-fa-proverb-6', theme: 'Proverbs', emoji: '🥣', band: '6-8', lang: 'fa', text: 'A bowl of plain kachi pudding beats nothing at all, goes a saying. When is a little enough?' },
  { id: 'talk-fa-proverb-7', theme: 'Proverbs', emoji: '🍲', band: '6-8', lang: 'fa', text: 'Two cooks make the soup too salty or not salty enough, goes a saying. Why might that happen?' },
  { id: 'talk-fa-proverb-8', theme: 'Proverbs', emoji: '🔍', band: '6-8', lang: 'fa', text: 'Rumi wrote that whoever keeps looking finds it in the end. What have you found by not giving up?' },
  { id: 'talk-fa-proverb-9', theme: 'Proverbs', emoji: '🐈', band: '6-8', lang: 'fa', text: 'The cat that can’t reach the meat says it smells anyway, goes a saying. Why would it say that?' },
  { id: 'talk-fa-proverb-10', theme: 'Proverbs', emoji: '🧵', band: '6-8', lang: 'fa', text: 'Prick yourself with a needle before you prick others with a big one, goes a saying. What could it mean?' },

  // ---------- Proverbs (ضرب‌المثل), ages 9 to 12 ----------
  { id: 'talk-fa-proverb-11', theme: 'Proverbs', emoji: '🍞', band: '9-12', lang: 'fa', text: 'Stick the bread on while the oven is hot, goes a saying. When did you catch a chance in time?' },
  { id: 'talk-fa-proverb-12', theme: 'Proverbs', emoji: '⛰️', band: '9-12', lang: 'fa', text: 'Mountains never meet, but people do, goes a saying. How might that change the way we treat people?' },
  { id: 'talk-fa-proverb-13', theme: 'Proverbs', emoji: '🏺', band: '9-12', lang: 'fa', text: 'A jug pours out what is inside it, goes a saying. What do the things we say show about us?' },
  { id: 'talk-fa-proverb-14', theme: 'Proverbs', emoji: '🐫', band: '9-12', lang: 'fa', text: 'An egg thief grows into a camel thief, goes a saying. How do small habits grow into big ones?' },
  { id: 'talk-fa-proverb-15', theme: 'Proverbs', emoji: '💪', band: '9-12', lang: 'fa', text: 'Picking up a huge stone is a sign you won’t throw it, goes a saying. What do you think it means?' },
  { id: 'talk-fa-proverb-16', theme: 'Proverbs', emoji: '🏠', band: '9-12', lang: 'fa', text: 'The bigger the roof, the more snow it holds, goes a saying. Do bigger things bring bigger worries?' },
  { id: 'talk-fa-proverb-17', theme: 'Proverbs', emoji: '🙌', band: '9-12', lang: 'fa', text: 'There is always a hand above your hand, goes a saying. What could it teach someone who boasts?' },
  { id: 'talk-fa-proverb-18', theme: 'Proverbs', emoji: '💎', band: '9-12', lang: 'fa', text: 'Saadi wrote that no treasure comes without hard work. What is worth working hard for, to you?' },
  { id: 'talk-fa-proverb-19', theme: 'Proverbs', emoji: '💬', band: '9-12', lang: 'fa', text: 'People don’t talk about nothing, goes a saying. Can a rumour still be wrong?' },
  { id: 'talk-fa-proverb-20', theme: 'Proverbs', emoji: '🧹', band: '9-12', lang: 'fa', text: 'Sweep in front of your own door before your neighbour’s, goes a saying. What does it mean to you?' },

  // ---------- Poetry (شعر), ages 9 to 12 ----------
  { id: 'talk-fa-poetry-1', theme: 'Poetry', emoji: '🤝', band: '9-12', lang: 'fa', text: 'Saadi wrote that people are limbs of one another, made of one substance. What does that ask of us?' },
  { id: 'talk-fa-poetry-2', theme: 'Poetry', emoji: '📚', band: '9-12', lang: 'fa', text: 'Ferdowsi wrote that knowing makes you strong and keeps an old heart young. Do you agree?' },
  { id: 'talk-fa-poetry-3', theme: 'Poetry', emoji: '🐜', band: '9-12', lang: 'fa', text: 'Saadi quotes Ferdowsi: don’t hurt an ant carrying its grain, for it has a life, and life is sweet. Why?' },
  { id: 'talk-fa-poetry-4', theme: 'Poetry', emoji: '🎶', band: '9-12', lang: 'fa', text: 'Rumi’s Masnavi opens with a reed flute telling of being apart. Who do you long to see again?' },
  { id: 'talk-fa-poetry-5', theme: 'Poetry', emoji: '🌳', band: '9-12', lang: 'fa', text: 'Hafez wrote: plant the tree of friendship, pull up the seedling of hate. How does a friendship grow?' },
  { id: 'talk-fa-poetry-6', theme: 'Poetry', emoji: '🤲', band: '9-12', lang: 'fa', text: 'Saadi wrote that a real friend takes your hand when things go wrong. Who has done that for you?' },
  { id: 'talk-fa-poetry-7', theme: 'Poetry', emoji: '🐚', band: '9-12', lang: 'fa', text: 'Nezami told his son: say little, and choose your words like pearls. When is saying less better?' },

  // ---------- Riddles (چیستان), ages 3 to 8 ----------
  { id: 'talk-fa-riddle-1', theme: 'Riddles', emoji: '🌓', band: '3-5', lang: 'fa', text: 'A riddle from Tehran: two of them run and run, but never catch each other. Who are they? (Night and day)' },
  { id: 'talk-fa-riddle-2', theme: 'Riddles', emoji: '🦷', band: '3-5', lang: 'fa', text: 'A riddle: thirty-two in white sit in a row, and one in red dances on them. What is it? (Teeth and tongue)' },
  { id: 'talk-fa-riddle-3', theme: 'Riddles', emoji: '😴', band: '6-8', lang: 'fa', text: 'A riddle: heavy, yet it weighs nothing; colourful, with no colour; sweet, with no taste. What is it? (Sleep)' },
  { id: 'talk-fa-riddle-4', theme: 'Riddles', emoji: '🌲', band: '6-8', lang: 'fa', text: 'In the Shahnameh, Zal is asked about twelve tall cypresses with thirty branches each. What are they? (Months)' },
  { id: 'talk-fa-riddle-5', theme: 'Riddles', emoji: '🐎', band: '6-8', lang: 'fa', text: 'Ferdowsi’s riddle: two swift horses, one black, one white, race on but never meet. (Night and day)' },
  { id: 'talk-fa-riddle-6', theme: 'Riddles', emoji: '✒️', band: '6-8', lang: 'fa', text: 'Rudaki’s riddle: it limps but runs, has no ears but finds words, no eyes but sees the world. (A pen)' },
  { id: 'talk-fa-riddle-7', theme: 'Riddles', emoji: '🐕', band: '6-8', lang: 'fa', text: 'A riddle from ancient Iran: which creature is taller sitting down than standing up? (A dog)' },
  { id: 'talk-fa-riddle-8', theme: 'Riddles', emoji: '🕯️', band: '6-8', lang: 'fa', text: 'Manouchehri’s riddle: it carries its life on top of its head, and its body keeps that life going. (A candle)' },

  // ---------- Shahnameh (شاهنامه), ages 6 to 8 ----------
  { id: 'talk-fa-shahnameh-1', theme: 'Shahnameh', emoji: '✍️', band: '6-8', lang: 'fa', text: 'King Tahmures let the beaten divs go free, and they taught him to write. Why do you think he let them go?' },
  { id: 'talk-fa-shahnameh-2', theme: 'Shahnameh', emoji: '🔨', band: '6-8', lang: 'fa', text: 'The whole court signed a paper calling cruel Zahhak fair, but Kaveh tore it up. Why do you think he did?' },
  { id: 'talk-fa-shahnameh-3', theme: 'Shahnameh', emoji: '🐉', band: '6-8', lang: 'fa', text: 'Fereydun’s three sons met a dragon: one ran, one got ready to fight, one stood firm. What would you do?' },
  { id: 'talk-fa-shahnameh-4', theme: 'Shahnameh', emoji: '🐦', band: '6-8', lang: 'fa', text: 'The Simorgh gave Zal one of her feathers, to call her whenever he needed help. Who would you call?' },
  { id: 'talk-fa-shahnameh-5', theme: 'Shahnameh', emoji: '🔭', band: '6-8', lang: 'fa', text: 'Sam told his son Zal to learn from every kind of knowing, for each one brings joy. What do you love learning?' },
  { id: 'talk-fa-shahnameh-6', theme: 'Shahnameh', emoji: '🌧️', band: '6-8', lang: 'fa', text: 'In King Zav’s time, two hungry armies made peace and shared the land. How do you make up after a quarrel?' },
  { id: 'talk-fa-shahnameh-7', theme: 'Shahnameh', emoji: '🏔️', band: '6-8', lang: 'fa', text: 'Young Rostam said no to a feast while his big job wasn’t done. When do you finish a job before you play?' },
  { id: 'talk-fa-shahnameh-8', theme: 'Shahnameh', emoji: '🐏', band: '6-8', lang: 'fa', text: 'A wild sheep led thirsty Rostam to water, and he wished it green fields. Which animal would you like to thank?' },
  { id: 'talk-fa-shahnameh-9', theme: 'Shahnameh', emoji: '🌉', band: '6-8', lang: 'fa', text: 'King Shapur, just five, heard people squeezed on one bridge and had a second built. What could we make easier?' },

  // ---------- Shahnameh (شاهنامه), ages 9 to 12 ----------
  { id: 'talk-fa-shahnameh-10', theme: 'Shahnameh', emoji: '💡', band: '9-12', lang: 'fa', text: 'Ferdowsi wrote that good sense is the best gift God gave us. When has good sense helped you?' },
  { id: 'talk-fa-shahnameh-11', theme: 'Shahnameh', emoji: '🏰', band: '9-12', lang: 'fa', text: 'Gordafarid got free by promising Sohrab the castle, then shut the gate on him. Is a trick fair in danger?' },
  { id: 'talk-fa-shahnameh-12', theme: 'Shahnameh', emoji: '🕊️', band: '9-12', lang: 'fa', text: 'The queen lied about Siavash, yet he asked his father to forgive her. Could you forgive like that?' },
  { id: 'talk-fa-shahnameh-13', theme: 'Shahnameh', emoji: '🧭', band: '9-12', lang: 'fa', text: 'Ferdowsi wrote that whoever leaves the path of humanity is a div, not a person. What keeps us humane?' },
  { id: 'talk-fa-shahnameh-14', theme: 'Shahnameh', emoji: '💍', band: '9-12', lang: 'fa', text: 'Before pulling Bizhan from the pit, Rostam asked him to forgive Gorgin, who betrayed him. Why ask that first?' },
  { id: 'talk-fa-shahnameh-15', theme: 'Shahnameh', emoji: '🐄', band: '9-12', lang: 'fa', text: 'In the story, King Bahram’s unfair thought dried up a cow’s milk. What do you think that picture means?' },
  { id: 'talk-fa-shahnameh-16', theme: 'Shahnameh', emoji: '⚖️', band: '9-12', lang: 'fa', text: 'Babak made King Anushirvan come and be checked like every rider. Should the rules count for everyone?' },
  { id: 'talk-fa-shahnameh-17', theme: 'Shahnameh', emoji: '🎵', band: '9-12', lang: 'fa', text: 'Barbad was kept out of the palace, so he played hidden in a cypress. What do you do when a door is shut?' },
  { id: 'talk-fa-shahnameh-18', theme: 'Shahnameh', emoji: '🌱', band: '9-12', lang: 'fa', text: 'Ferdowsi wrote that he won’t die, for he has scattered the seeds of his words. What would you make to last?' },
];

localize('talk-persian', PERSIAN_TALK, { hideMissing: true });
