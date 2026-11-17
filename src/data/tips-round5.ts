import type { Tip } from './types';

/**
 * Daily tips from research round 5 (release 1.8): what long studies show and myths checked, common illnesses, hard times,
 * stuttering and learning differences, more injury prevention, and the first year. Research:
 * research_notes/PlayNest phase 8 research round 5/. No doses, no laws, no unverified numbers, and every red flag points to a
 * professional or the emergency number. Tips the notes marked unverified were left out.
 */
export const EVIDENCE_TIPS: Tip[] = [
  { id: 'ev-turns-not-words', minMonths: 0, maxMonths: 72, text: 'Talk with your child, not just to them: say something, wait, and answer their babble or reply. The back-and-forth matters more than the number of words.' },
  { id: 'ev-name-things', minMonths: 9, maxMonths: 30, text: 'Name things during bath, cooking and shopping. In a study, toddlers learned more words this way than from a month of a word-teaching video.' },
  { id: 'ev-regular-bedtime', minMonths: 24, maxMonths: 144, text: 'Keep bedtime roughly the same each night. In a large UK study, regular bedtimes went with calmer behaviour, and behaviour improved when families switched.' },
  { id: 'ev-waiting-game', minMonths: 36, maxMonths: 120, text: 'Play a waiting game today, like “Simon says” or freeze dance. Self-control grows with practice, and in a long study it was linked with better adult health.' },
  { id: 'ev-warmth-everywhere', minMonths: 0, maxMonths: 144, text: 'A hug, a smile, “I love being with you”: in families across nine countries, warmth was linked with children doing better, in every culture studied.' },
  { id: 'ev-sugar-party', minMonths: 24, maxMonths: 120, text: 'Party excitement isn’t the sugar: in careful studies, sugar didn’t change children’s behaviour. Limit sweets for their teeth instead.' },
  { id: 'ev-teething-fever', minMonths: 4, maxMonths: 30, text: 'Teething brings drool and grumpiness, not a real fever. If your baby has a fever or seems unwell, look for another cause.' },
  { id: 'ev-no-walker', minMonths: 4, maxMonths: 15, text: 'Baby walkers don’t help babies walk sooner, and they cause falls, especially down stairs. Floor play and cruising along the sofa are better practice.' },
  { id: 'ev-cant-spoil', minMonths: 0, maxMonths: 6, text: 'You can’t spoil a young baby with cuddles. Comfort builds trust, and it’s also fine to pause a moment when they’re only fussing.' },
  { id: 'ev-time-not-guilt', minMonths: 36, maxMonths: 144, text: 'Ten warm, focused minutes count for more than hours spent feeling guilty. How you are together matters more than the clock.' },
  { id: 'ev-notice-good-moment', minMonths: 0, maxMonths: 72, text: 'After you play together today, notice one thing you did well. Parents coached to spot their good moments had children with fewer behaviour problems.' },
  { id: 'ev-hands-not-hats', minMonths: 6, maxMonths: 144, text: 'Colds come from viruses passed between people, so washing hands does more than a hat. Winter outdoor play is still good for children.' },
];

export const ILLNESS_TIPS: Tip[] = [
  { id: 'ill-breastfeed-more', minMonths: 0, maxMonths: 24, text: 'With a tummy bug, keep breastfeeding, more often rather than less. Breast milk helps your baby stay hydrated.' },
  { id: 'ill-ors-exact', minMonths: 0, maxMonths: 144, text: 'Mix rehydration sachets with exactly the amount of water the pack says. Too strong or too weak can do harm.' },
  { id: 'ill-wait-ten', minMonths: 6, maxMonths: 144, text: 'If your child is sick, wait about 10 minutes, then offer small sips again, slowly, from a spoon or cup.' },
  { id: 'ill-no-juice', minMonths: 6, maxMonths: 144, text: 'Fruit juice and fizzy drinks can make diarrhoea worse. Stick to milk feeds, water and rehydration drinks.' },
  { id: 'ill-48-hours', minMonths: 12, maxMonths: 144, text: 'After a tummy bug, keep your child home until 48 hours after the last vomit or runny poo.' },
  { id: 'ill-rotavirus', minMonths: 0, maxMonths: 8, text: 'The rotavirus vaccine prevents many of the worst tummy bugs in babies. Ask your health centre whether your baby has had it.' },
  { id: 'ill-cough-weeks', minMonths: 6, maxMonths: 144, text: 'A cold can last about 2 weeks and a cough 3 to 4. That is usually normal, not a sign that antibiotics are needed.' },
  { id: 'ill-no-steam', minMonths: 0, maxMonths: 144, text: 'Steam from a bowl of hot water doesn’t help croup or coughs, and it can scald. Keep your child upright and calm, and call the doctor.' },
  { id: 'ill-nothing-in-ear', minMonths: 0, maxMonths: 144, text: 'Don’t put oil, cotton buds or anything else in a sore ear. See a doctor if there is pain for more than 3 days or fluid coming out.' },
  { id: 'ill-moisturise', minMonths: 0, maxMonths: 144, text: 'For eczema, moisturiser is the everyday treatment: plenty of it, at least twice a day, even when the skin looks better.' },
  { id: 'ill-cold-sore-kiss', minMonths: 0, maxMonths: 144, text: 'Anyone with a cold sore shouldn’t kiss a baby or a child with eczema: the virus can cause a serious skin infection.' },
  { id: 'ill-nappy-rash', minMonths: 0, maxMonths: 30, text: 'Nappy rash: change often, give nappy-free time, and use a thick barrier cream. Skip talc, perfumed wipes and henna.' },
  { id: 'ill-pram-cover', minMonths: 0, maxMonths: 24, text: 'On hot days, never cover a pram or buggy with a blanket or dry cloth. It traps heat. Use a parasol, and check often.' },
  { id: 'ill-heat-drinks', minMonths: 0, maxMonths: 5, text: 'Babies under 6 months who have only breast milk don’t need water in hot weather. Offer more breastfeeds instead.' },
];

export const HARD_TIMES_TIPS: Tip[] = [
  { id: 'hard-ask-first', minMonths: 36, maxMonths: 144, text: 'After frightening news, ask “What have you heard?” before you explain. Then gently correct what isn’t true.' },
  { id: 'hard-news-off', minMonths: 0, maxMonths: 96, text: 'Turn the news off when young children are around, including the TV in the background and videos on your phone.' },
  { id: 'hard-news-times', minMonths: 0, maxMonths: 144, text: 'In worrying times, check the news at set times rather than all day. Constant updates raise stress for adults and children alike.' },
  { id: 'hard-play-it-out', minMonths: 24, maxMonths: 96, text: 'If your child plays out a scary event, that’s normal. Join in gently and help the story end with rescue or rebuilding.' },
  { id: 'hard-dont-push', minMonths: 24, maxMonths: 144, text: 'Don’t push a child to talk about something frightening. Let them know they can come to you any time, or draw it instead.' },
  { id: 'hard-not-your-fault', minMonths: 36, maxMonths: 108, text: 'After something bad happens, tell your child it wasn’t their fault, even if they don’t ask. Young children often secretly wonder.' },
  { id: 'hard-month', minMonths: 0, maxMonths: 144, text: 'If worries after a frightening event still get in the way of sleep, school or play after about a month, talk to a doctor or counsellor.' },
];

export const DIFFERENCES_TIPS: Tip[] = [
  { id: 'diff-wait-calmly', minMonths: 24, maxMonths: 96, text: 'When your child gets stuck on a word, wait calmly and keep looking at them kindly. Don’t finish it for them.' },
  { id: 'diff-slow-yourself', minMonths: 24, maxMonths: 96, text: 'Instead of saying “slow down”, slow your own talk a little and pause before you answer. It makes talking feel unhurried.' },
  { id: 'diff-praise-message', minMonths: 24, maxMonths: 96, text: 'If your child stutters, praise what they told you, not how smoothly they said it.' },
  { id: 'diff-two-languages', minMonths: 18, maxMonths: 96, text: 'Speaking two languages doesn’t cause stuttering. Keep using your home language.' },
  { id: 'diff-sound-game', minMonths: 36, maxMonths: 72, text: 'Play a sound game: “What sound does sun start with?” Hearing the sounds in words is the base of reading.' },
  { id: 'diff-teacher-early', minMonths: 60, maxMonths: 144, text: 'If reading stays much harder for your child than for classmates, talk to the teacher early. Early help works best.' },
  { id: 'diff-no-overlays', minMonths: 60, maxMonths: 144, text: 'Coloured overlays and eye exercises don’t treat dyslexia, but an ordinary eye and hearing check is still worth doing.' },
  { id: 'diff-not-lazy', minMonths: 60, maxMonths: 144, text: 'Struggling to read isn’t laziness. Tell your child their brain is working hard, and notice their effort.' },
];

export const SAFETY_MORE_TIPS: Tip[] = [
  { id: 'safe-sparklers', minMonths: 0, maxMonths: 72, text: 'Sparklers burn hotter than a cooker flame. Children under 5 can enjoy the lights from a distance, not in their hands.' },
  { id: 'safe-dud-firework', minMonths: 60, maxMonths: 144, text: 'Never go back to a firework that didn’t go off, and never relight one. Nothing homemade, ever.' },
  { id: 'safe-eye-cup', minMonths: 0, maxMonths: 144, text: 'Eye hit by something? Don’t rub or press it. Cover it loosely with a paper cup and go to an emergency department now.' },
  { id: 'safe-wash-bite', minMonths: 12, maxMonths: 144, text: 'Any animal bite or scratch: wash it with soap under running water for 15 minutes by the clock, then get medical care the same day.' },
  { id: 'safe-dog-alone', minMonths: 0, maxMonths: 72, text: 'Never leave a baby or toddler alone with a dog, even a gentle family dog, even for a moment.' },
  { id: 'safe-be-a-tree', minMonths: 36, maxMonths: 144, text: 'Teach “be a tree”: if a strange dog comes close, stand still, fold your arms, look at your feet, and don’t run.' },
  { id: 'safe-anchor', minMonths: 9, maxMonths: 72, text: 'Fix tall wardrobes, shelves and the TV to the wall with metal brackets. It protects climbing toddlers, and helps in earthquakes too.' },
  { id: 'safe-tops-clear', minMonths: 9, maxMonths: 60, text: 'Keep toys, remotes and treats off the tops of furniture, so little climbers have no reason to climb.' },
  { id: 'safe-bucket', minMonths: 6, maxMonths: 48, text: 'Babies and toddlers can drown in a bucket or a bath. Empty water containers straight after use.' },
  { id: 'safe-cover-tanks', minMonths: 9, maxMonths: 96, text: 'Cover garden ponds, water tanks and wells with something a child can’t lift, open or tear.' },
  { id: 'safe-water-watcher', minMonths: 0, maxMonths: 144, text: 'At a pool, beach or picnic by water, name one adult as water watcher: no phone, eyes on the children, swapping every 15 to 20 minutes.' },
];

export const BABY_YEAR_TIPS: Tip[] = [
  { id: 'year-step-away', minMonths: 0, maxMonths: 6, text: 'If the crying gets to you, lay your baby on their back in the cot and step away for a few minutes. That is a responsible choice.' },
  { id: 'year-share-plan', minMonths: 0, maxMonths: 6, text: 'Share your plan for hard crying with anyone who minds your baby, including who they can call.' },
  { id: 'year-copy-wait', minMonths: 1, maxMonths: 9, text: 'Copy your baby’s coo, then wait. Your pause is their turn to “talk”.' },
  { id: 'year-turn-away', minMonths: 1, maxMonths: 12, text: 'Babies often turn away when they need a break. Pausing, then coming back when they’re ready, is good care.' },
  { id: 'year-same-song', minMonths: 0, maxMonths: 12, text: 'Sing the same song at the same moment each day. Familiar songs often soothe babies best.' },
  { id: 'year-pots-and-spoons', minMonths: 6, maxMonths: 12, text: 'A pot and a wooden spoon make a fine toy. Clean, safe things from the kitchen are enough.' },
  { id: 'year-partner-thing', minMonths: 0, maxMonths: 12, text: 'Partners: the bath, skin-to-skin or a nightly song can be your own thing with the baby, not just “helping”.' },
  { id: 'year-how-are-you', minMonths: 0, maxMonths: 12, text: 'Feeling low after a baby happens to fathers too. Asking each other “How are you, really?” helps you both.' },
  { id: 'year-good-enough', minMonths: 0, maxMonths: 12, text: 'Good-enough care is what babies need. You don’t have to get every moment right.' },
];
