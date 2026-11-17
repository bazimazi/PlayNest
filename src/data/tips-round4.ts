import type { Tip } from './types';

/**
 * Daily tips from research round 4 (release 1.7): the first months, injury prevention, learning, temperament and
 * wellbeing. Research: research_notes/PlayNest phase 7 research round 4/. No doses, no laws, and every red flag points to
 * a professional or the emergency number.
 */
export const BABY_TIPS: Tip[] = [
  { id: 'baby-cord-dry', minMonths: 0, maxMonths: 1, text: 'Keep the cord stump clean and dry, with nothing on it: no powder, oil, kohl or alcohol. It usually falls off within about 3 weeks.' },
  { id: 'baby-jaundice-24h', minMonths: 0, maxMonths: 1, text: 'Yellow skin in the first 24 hours after birth, or yellow palms or soles, needs a doctor straight away.' },
  { id: 'baby-pale-poo', minMonths: 0, maxMonths: 2, text: 'In a yellow baby, pale or chalky poo, or dark yellow pee, needs a doctor the same day. Keep a nappy to show them.' },
  { id: 'baby-no-sun-jaundice', minMonths: 0, maxMonths: 1, text: 'Sunlight isn’t a safe treatment for jaundice: it can burn or overheat a baby and delay a test. Lots of milk feeds help most.' },
  { id: 'baby-no-water', minMonths: 0, maxMonths: 5, text: 'Babies under 6 months don’t need water, sugar water or herbal drinks, even on hot days. Milk has all they need.' },
  { id: 'baby-no-honey', minMonths: 0, maxMonths: 11, text: 'No honey before 1 year, not even a little on a dummy. It can carry spores that cause infant botulism.' },
  { id: 'baby-hips-free', minMonths: 0, maxMonths: 4, text: 'If you wrap your baby, keep it snug round the arms and loose round the hips, so the legs can bend up and out like a frog’s.' },
  { id: 'baby-stop-swaddle', minMonths: 1, maxMonths: 5, text: 'Stop wrapping the arms in as soon as your baby tries to roll. A sleeping bag with free arms is fine for much longer.' },
  { id: 'baby-kohl-lead', minMonths: 0, maxMonths: 24, text: 'Many kohl and surma products contain a lot of lead, which can harm a child’s brain. It’s best kept away from babies’ eyes.' },
  { id: 'baby-dummy-sweet', minMonths: 0, maxMonths: 36, text: 'Never dip a dummy in honey, sugar or anything sweet, and never hang it round the neck.' },
  { id: 'baby-checks', minMonths: 0, maxMonths: 24, text: 'Go to every routine baby check, even when all seems well. Early checks catch jaundice, feeding, hearing and hip problems.' },
  { id: 'baby-g6pd-beans', minMonths: 0, maxMonths: 144, text: 'If your child has G6PD deficiency: no fava beans, no mothballs at home, and tell every doctor and pharmacist before any medicine.' },
  { id: 'baby-settle-6m', minMonths: 4, maxMonths: 8, text: 'Sleep-training methods haven’t been shown to help before 6 months. Until then, follow your baby’s lead and keep sleep safe.' },
];

export const SAFETY_TIPS: Tip[] = [
  { id: 'safe-lap-not-seat', minMonths: 0, maxMonths: 144, text: 'Even a loving grip can’t hold a child in a crash. A car seat or belt for every child, on every trip, even short ones.' },
  { id: 'safe-rear-facing', minMonths: 0, maxMonths: 36, text: 'Keep your child rear-facing in the car for as long as the seat allows. Move up when they outgrow it, not on a birthday.' },
  { id: 'safe-booster-145', minMonths: 48, maxMonths: 144, text: 'Most children need a booster until they’re about 145 cm tall, often between 10 and 12. The back seat is safest until about 13.' },
  { id: 'safe-hot-tea', minMonths: 6, maxMonths: 48, text: 'A cup of tea can still scald a small child 15 minutes after it’s made. Keep hot drinks, kettles and samovars out of reach.' },
  { id: 'safe-hold-hot', minMonths: 0, maxMonths: 36, text: 'Never hold your baby while you drink something hot, and never pass hot drinks over a child’s head.' },
  { id: 'safe-burn-water', minMonths: 0, maxMonths: 144, text: 'For a burn: cool running water for 20 minutes. No ice, toothpaste, egg, yogurt, butter or oil, which can make it worse.' },
  { id: 'safe-heater-check', minMonths: 0, maxMonths: 144, text: 'Before winter, have heaters and water heaters checked and flues cleared. Carbon monoxide has no smell, and children are affected faster.' },
  { id: 'safe-no-charcoal', minMonths: 0, maxMonths: 144, text: 'Never use a charcoal brazier, korsi or portable gas burner in a closed room or tent. Carbon monoxide can build up as you sleep.' },
  { id: 'safe-co-signs', minMonths: 0, maxMonths: 144, text: 'If several people at home have headaches or feel sick at once and feel better outside, think carbon monoxide: get everyone out.' },
  { id: 'safe-smoke-outside', minMonths: 0, maxMonths: 144, text: 'Smoke stays in a room for hours, even with a window open. Smoking or hookah outside, away from the door, protects children far more.' },
  { id: 'safe-vape-locked', minMonths: 6, maxMonths: 72, text: 'Vape liquids and pods can poison a small child, even through the skin. Keep them locked away like medicines.' },
  { id: 'safe-meds-up', minMonths: 6, maxMonths: 72, text: 'Put every medicine back up high and out of sight after each use, including vitamins and iron drops. Child-resistant isn’t child-proof.' },
  { id: 'safe-methadone', minMonths: 0, maxMonths: 144, text: 'Methadone, opium and strong painkillers can stop a small child breathing. Original bottle, locked away, never in a drink bottle or cup.' },
  { id: 'safe-syringe', minMonths: 0, maxMonths: 144, text: 'Give liquid medicine with the syringe or cup that comes with it, never a kitchen spoon, and check ml carefully.' },
  { id: 'safe-cough-meds', minMonths: 0, maxMonths: 72, text: 'Cough and cold medicines aren’t recommended for young children. Ask a pharmacist first, and check each pack’s ingredients.' },
  { id: 'safe-window-lock', minMonths: 9, maxMonths: 72, text: 'Move beds, sofas and boxes away from windows, and fit locks so windows open no more than about 10 cm. Screens don’t hold children.' },
  { id: 'safe-balcony', minMonths: 9, maxMonths: 72, text: 'Keep balcony doors locked, and nothing a child could climb on out there: chairs, boxes, pots or drying racks.' },
  { id: 'safe-hold-hands', minMonths: 18, maxMonths: 96, text: 'Hold hands near roads, every time. Children can’t judge the speed of traffic well until surprisingly late, often into their teens.' },
  { id: 'safe-quake-game', minMonths: 36, maxMonths: 144, text: 'Practise “drop, cover, hold on” together like a game. Calm practice helps children know what to do without being frightened.' },
  { id: 'safe-bad-air', minMonths: 0, maxMonths: 144, text: 'On orange or red air-quality days, keep outdoor play short and gentle and move active games indoors. Never put a mask on a baby under 2.' },
];

export const LEARNING_TIPS: Tip[] = [
  { id: 'learn-hint-not-answer', minMonths: 72, maxMonths: 144, text: 'Stuck on homework? Try “Show me what you’ve tried. What could you try next?” A hint helps more than the answer.' },
  { id: 'learn-why-matters', minMonths: 72, maxMonths: 144, text: 'Ask “What was the most interesting thing today?” more often than “What mark did you get?” Interest in learning goes a long way.' },
  { id: 'learn-maths-talk', minMonths: 48, maxMonths: 144, text: 'Swap “I was never good at maths” for “This one’s tricky, let’s work it out together.” Children pick up how we feel about maths.' },
  { id: 'learn-pause-prompt', minMonths: 48, maxMonths: 96, text: 'When your child reads to you: pause to let them try, give a clue rather than the word, and praise the effort.' },
  { id: 'learn-read-aloud-still', minMonths: 72, maxMonths: 144, text: 'Keep reading aloud after your child can read alone. Stories above their level build the words and understanding they need next.' },
  { id: 'learn-sound-games', minMonths: 36, maxMonths: 72, text: 'Play with sounds: rhymes, clapping the beats in names, “I spy something that starts with…”. It’s the groundwork for reading.' },
  { id: 'learn-goodbye', minMonths: 9, maxMonths: 72, text: 'At drop-off, always say goodbye, keep it short, and say when you’ll be back. Slipping away can make the next goodbye harder.' },
  { id: 'learn-drop-off-tears', minMonths: 9, maxMonths: 60, text: 'Tears at drop-off are normal and often a sign of a close bond. What matters is that your child can be comforted and settles to play.' },
  { id: 'learn-game-chat', minMonths: 60, maxMonths: 144, text: 'Age ratings don’t cover what strangers say in game chat. Turn chat off or limit it to friends, and switch off in-game purchases.' },
  { id: 'learn-outdoor-eyes', minMonths: 24, maxMonths: 144, text: 'Time outdoors in daylight helps delay short sight. Eye experts suggest about two hours a day spread through the day.' },
  { id: 'learn-eye-check', minMonths: 30, maxMonths: 72, text: 'Make sure your child has a vision check between 3 and 6. Lazy eye is easiest to treat when it’s found early.' },
];

export const WELLBEING_TIPS: Tip[] = [
  { id: 'well-share-later', minMonths: 18, maxMonths: 42, text: 'Sharing usually develops around 3 to 4, and stopping yourself from doing a forbidden thing around 3½ to 4. Not yet is normal.' },
  { id: 'well-first-fibs', minMonths: 30, maxMonths: 60, text: 'First fibs around 3 to 4 are a sign of a growing mind, not bad character. A calm response teaches honesty better than punishment.' },
  { id: 'well-watch-first', minMonths: 12, maxMonths: 144, text: 'Instead of “she’s shy”, try “she likes to watch first.” Children tend to grow into the words we use about them.' },
  { id: 'well-small-brave', minMonths: 24, maxMonths: 144, text: 'For a cautious child, plan small brave steps with you nearby. Doing everything for them, or pushing hard, can both keep fears going.' },
  { id: 'well-two-adults', minMonths: 0, maxMonths: 144, text: 'Grandparents, aunts, uncles or a teacher who take a real interest in your child are a strength worth nurturing.' },
  { id: 'well-best-hard', minMonths: 36, maxMonths: 144, text: 'Try a daily “best bit, hard bit” at dinner or bedtime. Children who can talk about feelings at home tend to do better later.' },
  { id: 'well-change-2-weeks', minMonths: 60, maxMonths: 144, text: 'Every child has bad days. A change from their usual self that lasts more than two weeks is worth talking to the doctor about.' },
  { id: 'well-ask-safe', minMonths: 72, maxMonths: 144, text: 'If you’re ever worried your child feels hopeless, it’s safe to ask directly. Asking about suicide doesn’t put the idea in their head.' },
  { id: 'well-body-can-do', minMonths: 36, maxMonths: 144, text: 'Talk about what bodies can do, not how they look. Comments on weight, in either direction, tend to backfire.' },
  { id: 'well-no-diet', minMonths: 36, maxMonths: 144, text: 'Worried about your child’s weight, too high or too low? Talk to the doctor rather than starting a diet at home.' },
  { id: 'well-five-things', minMonths: 0, maxMonths: 36, text: 'Health, good food, loving responses, play and talk, and safety: no special toys needed, just ordinary days done with care.' },
];
