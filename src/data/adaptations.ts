import type { Adaptation } from './packs';
import type { Setting, Tag } from './types';
import { localize } from '../i18n';

/**
 * "Make this game work for us": one thing to try for each barrier. A line can be about a child, a grown-up or the room, so
 * none of them names a diagnosis, a child or an age. These are play ideas, not therapy.
 *
 * Lines have no age limit, so nothing here may be unsafe or silly for a baby or a 12-year-old. That rules out mouthing,
 * hanging toys on cords, and medical advice.
 *
 * The comment after each line gives its basis: a number is the draft line it came from in the toolkit section of
 * research_notes/PlayNest phase 5 app research/12_inclusive_play_and_families.md, "table" is that section's lever table, "new"
 * means written here. G is specialist guidance, P is parent or deaf-adult experience, E is a related research base, and X has
 * no direct source and is kept because it is plain common sense.
 */

/** `Adaptation` has no materials field, so these tags stand in for "there are pieces out". */
const PIECES: Tag[] = ['art', 'building', 'science', 'strategy', 'kitchen'];
/** Where a table or floor is to hand. */
const AT_A_TABLE: Setting[] = ['indoor', 'mealtime'];
/** Needs room or paper, so not in the bath or strapped in a car seat. */
const ROOM_TO_SPREAD_OUT: Setting[] = ['indoor', 'outdoor', 'mealtime', 'bedtime', 'waiting', 'anywhere'];
/** Needs someone's hands and eyes, so not the driver's. */
const NOT_DRIVING: Setting[] = ['indoor', 'outdoor', 'bath', 'mealtime', 'bedtime', 'waiting', 'anywhere'];

export const ADAPTATIONS: Adaptation[] = [
  // ---------- Hard to see ----------
  { id: 'see-say-it', need: 'see', text: "Say what's happening as it happens, in a few short words: coming to your left hand, now your turn." }, // 1 G RNIB
  { id: 'see-good-light', need: 'see', text: 'Play in good light, near a window or lamp if you can. Turn away from any glare.' }, // 3 G RNIB
  { id: 'see-best-side', need: 'see', text: 'Sit on the side that sees best, and offer things there.' }, // 4 G RNIB
  { id: 'see-touch-and-sound', need: 'see', text: 'Add a touch or a sound to anything you show: a tap on the arm, a clap, a spoken go.' }, // table, cue type
  { id: 'see-hands-and-feet', need: 'see', text: 'Explore with hands and feet as well as eyes, with extra time before the game begins.' }, // 11 G RNIB, mouths dropped; table, time
  { id: 'see-plain-tray', need: 'see', text: 'Keep pieces in a plain tray, in the same place each time, so they stand out and nothing rolls away.', whenTag: PIECES, whenSetting: AT_A_TABLE }, // 2, 6 G RNIB; 10 P WonderBaby
  { id: 'see-real-thing', need: 'see', text: 'Swap pictures or toy versions for the real thing: a real spoon, leaf or orange.', whenTag: ['reading', 'pretend'] }, // 8 G RNIB
  { id: 'see-felt-marks', need: 'see', text: 'Stick felt or card firmly on each piece, so pieces can be told apart by feel. Check nothing pulls off.', whenTag: ['strategy', 'building', 'science'] }, // 9 P RNIB, foil dropped
  { id: 'see-noisy-inside', need: 'see', text: 'Seal something noisy inside anything you roll, throw or hide, so it can be found by ear. Check the seal holds.', whenEnergy: ['moderate', 'active'], whenTag: ['party', 'science', 'building'] }, // 5 G/X WHO/UNICEF
  { id: 'see-go-together', need: 'see', text: 'Go together to find anything that rolls away, rather than fetching it back.', whenEnergy: ['moderate', 'active'] }, // 7 G RNIB
  { id: 'see-walk-the-space', need: 'see', text: 'Walk the space together first, so edges and bumps are known. Clap or call as you move, so you can be found.', whenEnergy: ['active'] }, // new X; table, sound

  // ---------- Hard to hear ----------
  { id: 'hear-get-attention', need: 'hear', text: 'Get attention first with a wave or a gentle touch, then wait for a look.', whenSetting: NOT_DRIVING }, // 12 G NDCS
  { id: 'hear-face-to-face', need: 'hear', text: 'Sit face to face, with light on your faces rather than behind you.', whenSetting: NOT_DRIVING }, // 13 G NDCS
  { id: 'hear-background-off', need: 'hear', text: 'Turn off background sound, such as the TV or radio, while you play.' }, // 14 G NDCS
  { id: 'hear-look-for', need: 'hear', text: 'Swap any sound cue for something to see: a raised hand or a torch means go.', whenSetting: NOT_DRIVING }, // 15 X from Hands & Voices
  { id: 'hear-show-rules', need: 'hear', text: 'Show the rules before you start, because nobody can watch the game and you at once.' }, // 16 X from Gallaudet
  { id: 'hear-move-sign', need: 'hear', text: "Move your sign or gesture to where they're already looking.", whenSetting: NOT_DRIVING }, // 18 G NDCS
  { id: 'hear-song-gap', need: 'hear', text: 'Leave a gap in the song for a sign, sound or clap to fill.', whenTag: ['song'] }, // 17 G NDCS
  { id: 'hear-feel-the-beat', need: 'hear', text: 'Let the beat be felt: a hand on a drum, a table or the floor.', whenTag: ['song'] }, // 20 X from Hands & Voices
  { id: 'hear-car-mirror', need: 'hear', text: "Fix a mirror so faces stay in view from the car seat. Save signing for when you've stopped, or let a passenger lead.", whenSetting: ['car'] }, // 19 G/P NDCS, Hands & Voices; second sentence new X
  { id: 'hear-after-dark', need: 'hear', text: 'Keep a lamp or torch on after dark, so hands and faces stay visible.', whenSetting: ['bedtime', 'outdoor'] }, // 21 P Hands & Voices
  { id: 'hear-catch-up', need: 'hear', text: 'Fill in what was said, rather than saying it was nothing.', whenTag: ['party'] }, // new P Hands & Voices

  // ---------- Hard to reach or hold ----------
  { id: 'reach-any-move', need: 'reach', text: 'Count any move as a turn: hand, foot, head, elbow or eyes.' }, // 30 X from CHSA/ASHA
  { id: 'reach-share-jobs', need: 'reach', text: 'Share out the jobs: one moves, one calls go. Then swap, so everyone gets a real job.' }, // 32 G/X Me2
  { id: 'reach-time-to-move', need: 'reach', text: 'Allow plenty of time to move before anyone steps in to help.' }, // table, time
  { id: 'reach-bring-it', need: 'reach', text: 'Bring the game to wherever is comfy: floor, lap, tray, chair or bed.', whenSetting: ROOM_TO_SPREAD_OUT }, // 23 G Me2
  { id: 'reach-change-position', need: 'reach', text: "Change position now and then. There's no single right one.", whenSetting: ROOM_TO_SPREAD_OUT }, // 25 G Hesperian
  { id: 'reach-side-lying', need: 'reach', text: 'Try lying on one side for awake play, so things stay in view and hands can meet. Care team advice comes first.', whenEnergy: ['calm'], whenSetting: ['indoor'] }, // 24 G, excerpt only, EACH
  { id: 'reach-lip-tray', need: 'reach', text: 'Use a tray or box with a lip, on a damp cloth or non-slip mat, so things stay close.', whenTag: PIECES, whenSetting: AT_A_TABLE }, // 27 G RNIB; table, texture
  { id: 'reach-fat-handles', need: 'reach', text: 'Make handles fatter with tape or foam, fixed on firmly, or add a handle to a box.', whenTag: ['art', 'kitchen', 'building', 'science'] }, // 28 P WonderBaby
  { id: 'reach-prop-it', need: 'reach', text: 'Prop it up so it stays upright for someone sitting or lying down.', whenTag: ['reading', 'strategy', 'art', 'building', 'pretend'] }, // 29 P WonderBaby
  { id: 'reach-scarf-or-ball', need: 'reach', text: 'Swap any ball for a scarf or a big, light beach ball.', whenEnergy: ['moderate', 'active'] }, // 31 X
  { id: 'reach-any-way-of-moving', need: 'reach', text: 'Swap running for rolling, wheeling, waving or clapping: any way of moving counts.', whenEnergy: ['active'] }, // new, Me2 6b

  // ---------- Too much ----------
  { id: 'much-turn-down', need: 'too-much', text: 'Turn one thing down first: sound, light, people or clutter.' }, // 33 G RNIB
  { id: 'much-warn', need: 'too-much', text: 'Warn before a loud noise, and say what makes it: big bang coming, in 3, 2, 1.' }, // 34 G NHS OT
  { id: 'much-watching', need: 'too-much', text: 'Count watching as joining in, from any spot that feels comfy.' }, // 38 G Me2
  { id: 'much-stop-signal', need: 'too-much', text: 'Agree a way to say stop, such as a word, sign or card. Anyone can stop, and come back, whenever they like.' }, // 40 X from BTHA; NHS OT on saying no
  { id: 'much-join-it', need: 'too-much', text: "Join in with flapping, rocking or humming if that's welcome. Leave it be unless someone is getting hurt." }, // 42 G NAS
  { id: 'much-rest', need: 'too-much', text: 'Pause and rest at the first look away, yawn or startle, and try again another time.' }, // 43 G Hand to Hold
  { id: 'much-old-favourite', need: 'too-much', text: 'Pick an old favourite that takes little effort when anyone is tired or unwell.' }, // 64 G RNIB
  { id: 'much-quiet-place', need: 'too-much', text: 'Make a quiet place to go, such as a blanket over a table. Going there is always allowed, no questions.', whenSetting: ROOM_TO_SPREAD_OUT }, // 37 G NAS
  { id: 'much-touch-welcome', need: 'too-much', text: 'Check touch is welcome, and stop at the first no, in words or not.', whenTag: ['rough-and-tumble', 'song', 'classic', 'calm-down'] }, // new, notes on wanted touch
  { id: 'much-hand-it-over', need: 'too-much', text: 'Hand over the noisy thing or the volume, so the loudness is theirs to set.', whenTag: ['song', 'science', 'party'] }, // 35 G NHS OT
  { id: 'much-ear-defenders', need: 'too-much', text: 'Keep ear defenders near for loud moments. Pick ones that lower sound, not block it, and take them off after.', whenEnergy: ['moderate', 'active'] }, // 36 G NHS OT
  { id: 'much-no-touch-mess', need: 'too-much', text: 'Offer a no-touch way in for messy stuff: a spoon, a brush, or a sealed bag to press, with you right there.', whenTag: ['art', 'kitchen', 'science', 'water'] }, // 39 X
  { id: 'much-start-small', need: 'too-much', text: 'Start small: one or two others, at a quiet time, or at the start or end of a group.', whenTag: ['party'] }, // 41 G RNIB

  // ---------- Too fast ----------
  { id: 'fast-one-round', need: 'too-fast', text: "Do one round and stop while it's still fun." }, // 44 X
  { id: 'fast-count-ten', need: 'too-fast', text: 'Count to ten in your head before you help or repeat.' }, // 45 G NHS OT, NDCS
  { id: 'fast-visual-timer', need: 'too-fast', text: 'Use a visual timer, such as a sand timer, so the end is no surprise.' }, // 46 G NHS OT, no direct evidence
  { id: 'fast-first-then', need: 'too-fast', text: "Show First and Then in two pictures: first shoes, then park. Always do the Then. It's what's next, not a reward." }, // 47 G/E Vanderbilt
  { id: 'fast-heads-up', need: 'too-fast', text: 'Give a heads-up before the end: two more, then we stop.' }, // 48 X
  { id: 'fast-same-again', need: 'too-fast', text: "Play the same game again, as often as it's asked for. Repeating is part of the fun." }, // 50 G Hands & Voices
  { id: 'fast-two-choices', need: 'too-fast', text: 'Offer two choices rather than an open question: ball or bubbles?' }, // 52 G, excerpt only, Texas A&M
  { id: 'fast-show-and-wait', need: 'too-fast', text: 'Show it once, then wait. Copying can come in its own time.' }, // 53 G BTHA
  { id: 'fast-already-loved', need: 'too-fast', text: "Start from what's already loved: trains, spinning, one song." }, // 54 G Hanen
  { id: 'fast-sit-alongside', need: 'too-fast', text: 'Sit alongside and copy what they do, without asking them to join you.' }, // 55 G/X NDCS
  { id: 'fast-movement', need: 'too-fast', text: 'Fit movement between rounds, such as ten jumps or a lap of the room, in any way of moving.', whenEnergy: ['moderate', 'active'], whenSetting: ROOM_TO_SPREAD_OUT }, // 49 G NAS, limited evidence
  { id: 'fast-drop-a-rule', need: 'too-fast', text: "Drop a rule and keep the fun: no scoring, no one's out.", whenTag: ['strategy', 'party', 'brain-game'] }, // 51 X
  { id: 'fast-fewer-pieces', need: 'too-fast', text: 'Use bigger pieces, and fewer of them.', whenTag: ['strategy', 'building', 'science', 'art'] }, // 57 G BTHA
  { id: 'fast-slow-motion', need: 'too-fast', text: 'Try it in slow motion first, chase and all, and speed up when it feels right.', whenEnergy: ['active'] }, // new X; table, position and time

  // ---------- Words are hard ----------
  { id: 'words-any-way', need: 'words', text: 'Count any way of saying it: a look, point, sound, sign, picture or device.' }, // 58 G CHSA/ASHA
  { id: 'words-wait', need: 'words', text: 'Wait with an interested face before you ask anything.' }, // 61 G/X NDCS, Hanen
  { id: 'words-say-back', need: 'words', text: 'Say their word or sign back, and add one more.' }, // 63 G NDCS
  { id: 'words-repeated-line', need: 'words', text: 'Treat a line repeated from a show or book as a real turn, and answer it.' }, // 62 G, excerpt only, ASHA Perspectives
  { id: 'words-short', need: 'words', text: 'Use short phrases, with one idea at a time.' }, // new G W3C COGA, RNIB
  { id: 'words-any-language', need: 'words', text: 'Use whichever language comes easiest. Mixing languages is fine.' }, // new; notes on heritage language, asha-multilingual
  { id: 'words-show-it', need: 'words', text: 'Show the game rather than explaining it: do it, then point to the next turn.' }, // new X; table, rules
  { id: 'words-picture-board', need: 'words', text: 'Keep a picture board or device in the game all the way through: more, stop, my turn, help. Point to it as you talk.', whenSetting: NOT_DRIVING }, // 59 G/X CHSA/ASHA; 60 X, aided modelling unverified
  { id: 'words-tell-the-story', need: 'words', text: 'Tell the story from the pictures in your own words, rather than reading the text.', whenTag: ['reading'] }, // new X; notes on Vroom and reading aloud
  { id: 'words-mime-it', need: 'words', text: 'Swap word rounds for miming, drawing or pointing.', whenTag: ['party', 'strategy', 'brain-game'] }, // new X
];

localize('adaptations', ADAPTATIONS);
