import type { Tip } from './types';

/**
 * Daily tips from research round 6 (release 1.9): screens with young children, siblings and body curiosity, everyday
 * complaints, growth and appetite, and freedom and safety on the move. Research:
 * research_notes/PlayNest phase 9 research round 6/. No doses, no laws, no unverified numbers; every red flag points to a
 * professional or the emergency number.
 */
export const SCREENS_YOUNG_TIPS: Tip[] = [
  { id: 'sc-video-call', minMonths: 0, maxMonths: 23, text: 'Video calls with family are the screen use experts are happiest with for babies. Hold your baby on your lap, wave, point and chat so they can join in.' },
  { id: 'sc-background-tv', minMonths: 0, maxMonths: 60, text: 'If nobody is watching, switch the TV off. A TV on in the background means fewer words between you and your child, even when no one seems to be listening.' },
  { id: 'sc-meal-off', minMonths: 6, maxMonths: 72, text: 'Try a meal with the TV off and phones away. Name the food, copy each other’s faces, chat. It can feel harder at first, and usually gets easier.' },
  { id: 'sc-pause-talk', minMonths: 24, maxMonths: 96, text: 'Watching together? Pause now and then: “What do you think happens next?” Talking about a show, as you would a book, helps children get more from it.' },
  { id: 'sc-calm-shows', minMonths: 24, maxMonths: 72, text: 'Pick calm shows with clear talk and simple stories. Endless short clips are what experts are most cautious about.' },
  { id: 'sc-autoplay', minMonths: 12, maxMonths: 96, text: 'Turn off autoplay and choose the next video yourself, or make a short playlist. Then screen time ends when you planned, not when the app decides.' },
  { id: 'sc-calm-first', minMonths: 12, maxMonths: 72, text: 'A screen can calm a child fast, and sometimes that’s fine. Most of the time, try a hug, a drink or naming the feeling first, so calming skills get practice.' },
  { id: 'sc-break-ok', minMonths: 24, maxMonths: 96, text: 'Need 20 minutes to cook or rest? A calm show you chose beforehand is a reasonable tool. Keep it away from meals and bedtime, and skip the guilt.' },
  { id: 'sc-purchases', minMonths: 24, maxMonths: 96, text: 'Before your child plays a “free” app, look for adverts and in-app purchases. Turn purchases off or set them to need your password.' },
  { id: 'sc-real-duck', minMonths: 12, maxMonths: 36, text: 'Under about 3, children learn far more from you than from a screen. If they meet a word in a show, use it in real life: “Look, a real duck!”' },
  { id: 'sc-long-trip', minMonths: 24, maxMonths: 96, text: 'Long journey? Start with songs, I spy and snacks, and save the tablet for the long middle stretch. Bring headphones.' },
  { id: 'sc-decide-ahead', minMonths: 18, maxMonths: 96, text: 'Decide screen times ahead, like “one show after nap”, rather than in the moment. Predictable screen times usually mean fewer battles.' },
  { id: 'sc-evening-story', minMonths: 12, maxMonths: 36, text: 'Swap the evening cartoon for a story or a song. Evening screens are linked with later bedtimes and shorter sleep in toddlers.' },
];

export const FAMILY_BODIES_TIPS: Tip[] = [
  { id: 'sib-describe', minMonths: 24, maxMonths: 144, text: 'When siblings fight, describe what you see, not who’s to blame: “Two children, one tablet, lots of shouting.” It keeps you neutral and calmer.' },
  { id: 'sib-coach', minMonths: 48, maxMonths: 144, text: 'Coach a sibling quarrel: each tells their side, each says back what the other wants, then they suggest a fix. You guide; they decide.' },
  { id: 'sib-no-compare', minMonths: 24, maxMonths: 144, text: 'Swap “Why can’t you be like your sister?” for words about this child alone. Comparing brothers and sisters tends to feed rivalry.' },
  { id: 'sib-fair', minMonths: 48, maxMonths: 144, text: 'Fair isn’t always the same. Say why out loud: “Your brother stays up later because he’s older. You’ll get that too.”' },
  { id: 'sib-bullying', minMonths: 60, maxMonths: 144, text: 'Teasing that is one-sided, repeated, or leaves a child scared is more than sibling squabbling. Step in, and take it as seriously as bullying at school.' },
  { id: 'sib-getting-along', minMonths: 36, maxMonths: 144, text: 'Catch your children getting along: “You two built that together!” Children tend to repeat what gets noticed.' },
  { id: 'sib-older-helper', minMonths: 72, maxMonths: 144, text: 'Older children can help with younger ones sometimes, not always. Thank them, and don’t always ask the older one to give in.' },
  { id: 'body-baby-curious', minMonths: 0, maxMonths: 36, text: 'Babies and toddlers often touch their private parts during nappy changes or baths. It’s normal curiosity. Stay relaxed and carry on.' },
  { id: 'body-private-time', minMonths: 24, maxMonths: 72, text: 'If your child touches their private parts in public, calmly redirect: “That’s for private time.” No telling off: shame doesn’t teach privacy.' },
  { id: 'body-playing-doctor', minMonths: 24, maxMonths: 96, text: 'Found children “playing doctor”? Breathe. Ask them to get dressed, then talk to each alone: what happened, whose idea was it, and how did it feel?' },
  { id: 'body-one-word', minMonths: 24, maxMonths: 144, text: 'Pick one clear, respectful word for private parts and use it every time, so your child has the words to tell you anything.' },
  { id: 'body-knock', minMonths: 48, maxMonths: 144, text: 'Many children start wanting privacy around 5 to 7. Knock before you go in, let them dress alone, and teach them to knock too.' },
  { id: 'body-rocking', minMonths: 12, maxMonths: 48, text: 'Rocking or pressing with a flushed face can be a toddler’s way of soothing themselves, and it stops when they’re distracted. Unsure? Film it and show your doctor.' },
  { id: 'body-see-doctor', minMonths: 24, maxMonths: 144, text: 'See your doctor or a counsellor if play about bodies involves force, a big age gap, pain or upset, or keeps happening after calm redirection.' },
];

export const EVERYDAY_BODY_TIPS: Tip[] = [
  { id: 'poo-breastfed-days', minMonths: 0, maxMonths: 6, text: 'A breastfed baby can go several days without a poo and be fine. Soft poo, good feeding and wet nappies matter more than how often.' },
  { id: 'poo-baby-strain', minMonths: 0, maxMonths: 6, text: 'Babies often go red, grunt and cry before a soft poo. That’s learning to use their muscles, not constipation. Hard, pebbly poo is different: ask your health centre.' },
  { id: 'poo-nothing-in-bottom', minMonths: 0, maxMonths: 12, text: 'Please don’t put soap, oil or anything else into a baby’s bottom to help them poo. If you’re worried about constipation, ask your health centre what’s safe.' },
  { id: 'poo-feet-on-stool', minMonths: 18, maxMonths: 144, text: 'After meals, try a few relaxed minutes on the toilet with feet on a stool and knees above hips. Praise the sitting, whether or not anything happens.' },
  { id: 'poo-soiling', minMonths: 24, maxMonths: 144, text: 'Soiled pants in a constipated child are usually runny poo leaking past a blockage, and they often can’t feel it. It’s not naughtiness: stay calm and see the doctor.' },
  { id: 'poo-medicine-months', minMonths: 12, maxMonths: 144, text: 'If the doctor prescribes medicine for constipation, it’s often needed for months. Stopping too early is a common reason it comes back, so ask before stopping.' },
  { id: 'worms-everyone', minMonths: 24, maxMonths: 144, text: 'An itchy bottom at night may be threadworms. They’re common and harmless. Treat everyone at home on the same day, then keep up handwashing and short nails for two weeks.' },
  { id: 'lice-no-shame', minMonths: 24, maxMonths: 144, text: 'Worms and lice happen in clean, caring families too. “Lots of children get these” helps your child tell you next time instead of hiding it.' },
  { id: 'lice-wet-comb', minMonths: 36, maxMonths: 144, text: 'To check for head lice, comb wet, conditioned hair with a fine lice comb from the roots, section by section. Only live lice need treatment.' },
  { id: 'lice-never-kerosene', minMonths: 24, maxMonths: 144, text: 'Never use kerosene, petrol, or garden or pet insecticide on a child’s hair. They can burn or poison. Use pharmacy lice products exactly as the pack says.' },
  { id: 'lice-no-cutting', minMonths: 36, maxMonths: 144, text: 'Head lice spread by heads touching, not from dirt or pets. There’s no need to cut or shave hair: combing and treatment work for all hair.' },
  { id: 'feet-normal-stages', minMonths: 12, maxMonths: 96, text: 'Flat feet, bow legs and knock knees are normal stages for young children. Special shoes or insoles don’t change how legs and feet develop.' },
  { id: 'feet-barefoot', minMonths: 9, maxMonths: 36, text: 'Going barefoot at home helps babies learn to walk. Outside, choose light, flexible shoes that fit, and check the size every few months.' },
  { id: 'feet-growing-pains', minMonths: 36, maxMonths: 144, text: 'Growing pains: both legs, evening or night, fine by morning. Pain in one leg, a limp, swelling or pain in the daytime needs a doctor’s check.' },
  { id: 'feet-fever-limp', minMonths: 9, maxMonths: 144, text: 'A child with a fever who limps or won’t put weight on a leg needs to be seen today. Joint infections need prompt treatment.' },
  { id: 'feet-tiptoe', minMonths: 24, maxMonths: 60, text: 'Many toddlers walk on tiptoe and stop by themselves. See your doctor if it’s every step after 3, on one side only, or they can’t stand flat.' },
];

export const GROWTH_TIPS: Tip[] = [
  { id: 'gr-line-not-plate', minMonths: 0, maxMonths: 144, text: 'Worried your child eats too little? Their growth line over several checks says more than any one meal. Ask the health worker to show you the chart.' },
  { id: 'gr-own-line', minMonths: 0, maxMonths: 144, text: 'A child on a low centile line who follows it steadily is usually healthy. The middle line isn’t a target. Children come in many sizes.' },
  { id: 'gr-appetite-after-one', minMonths: 12, maxMonths: 36, text: 'After the first birthday, growth slows and appetite often drops sharply. A big day and a small day usually even out over a week.' },
  { id: 'gr-pressure', minMonths: 12, maxMonths: 144, text: 'In one study, children pressured to finish their food ate less, not more, and enjoyed it less. Offer the food, then let them decide how much.' },
  { id: 'gr-no-screen-spoon', minMonths: 6, maxMonths: 72, text: 'Try not to use phones or cartoons to get food in. Eating without noticing makes it harder for a child to feel hunger and fullness.' },
  { id: 'gr-drinks-fill-up', minMonths: 12, maxMonths: 72, text: 'Juice, sweet tea and lots of milk fill small tummies before meals. Offer water between meals, and milk with food rather than instead of it.' },
  { id: 'gr-ill-weight-back', minMonths: 6, maxMonths: 144, text: 'Children often lose a little weight when they’re ill and catch up within a few weeks of getting better. If they don’t, see your health worker.' },
  { id: 'gr-no-syrup', minMonths: 12, maxMonths: 144, text: 'Appetite syrups are medicines with side effects, and they don’t fix why a child eats little. Ask your doctor before giving any syrup or tonic.' },
  { id: 'gr-height-families', minMonths: 24, maxMonths: 144, text: 'Height runs in families, and a steady rate of growth matters more than being short. No pill or syrup makes a healthy child taller.' },
  { id: 'gr-tea-between', minMonths: 24, maxMonths: 144, text: 'Tea, even herbal tea, makes it harder to take in iron from a meal. If your child has tea, make it weak, unsweetened and between meals.' },
  { id: 'gr-no-tea-babies', minMonths: 0, maxMonths: 24, text: 'Babies and toddlers don’t need tea. Even a little with meals can block iron they need for growing. Water and milk are best.' },
  { id: 'gr-iron-lemon', minMonths: 8, maxMonths: 144, text: 'Lentils, beans and greens give more iron with a squeeze of lemon, tomato or orange alongside. Vitamin C helps the body take in iron.' },
  { id: 'gr-drops-routine', minMonths: 0, maxMonths: 24, text: 'If your baby has vitamin or iron drops, give them at the same time each day so it becomes a habit you don’t have to remember.' },
  { id: 'gr-no-extra-iron', minMonths: 6, maxMonths: 144, text: 'Give only the drops your health centre advises. Extra iron or vitamin products can do harm, and a blood test, not a guess, shows if more is needed.' },
  { id: 'gr-family-habits', minMonths: 24, maxMonths: 144, text: 'Worried about weight? Change family habits together: water as the main drink, active play and shared meals. Never single out or comment on your child’s body.' },
];

export const FREEDOM_SAFETY_TIPS: Tip[] = [
  { id: 'fr-spot-dont-lift', minMonths: 18, maxMonths: 36, text: 'Let your toddler climb a low step or the sofa arm while you stand close, hands off. Spot, don’t lift. Step in if they’re stuck or scared.' },
  { id: 'fr-be-careful', minMonths: 36, maxMonths: 144, text: 'Before you say “Be careful!”, try “Where will you put your foot next?” It helps them think about the risk themselves.' },
  { id: 'fr-pillow-fight', minMonths: 36, maxMonths: 120, text: 'Pillow fight tonight? Agree a stop word first, and stop the moment anyone uses it. You stay in charge of the game, even while they win.' },
  { id: 'fr-errand-ladder', minMonths: 84, maxMonths: 144, text: 'Practise a short errand together first. Next time, walk behind. Then wait at your door. Readiness to go alone grows in small steps.' },
  { id: 'fr-helmet-check', minMonths: 24, maxMonths: 144, text: 'Helmet check: level, covering the top of the forehead, with the strap snug under the chin. It shouldn’t slide when you push it. Every ride.' },
  { id: 'fr-scooters-count', minMonths: 24, maxMonths: 144, text: 'Scooters and balance bikes count as wheels too. Same helmet, every ride, even a quick trip to the park.' },
  { id: 'fr-e-scooter', minMonths: 72, maxMonths: 144, text: 'Child health experts in the US advise no e-scooters under 16, as rider or passenger. Push scooters and bikes are better choices for now.' },
  { id: 'fr-charge-awake', minMonths: 72, maxMonths: 144, text: 'Charge scooters, hoverboards and e-bikes while you’re awake and at home, with their own charger, never in a bedroom or by the front door.' },
  { id: 'fr-phone-bed', minMonths: 72, maxMonths: 144, text: 'Phones and tablets charge on a hard surface, not on the bed or under a pillow. The heat needs somewhere to go.' },
  { id: 'fr-cords', minMonths: 6, maxMonths: 36, text: 'Crawler on the move? Tuck cords and extension leads out of reach and unplug chargers after use. Chewing a mains cable can badly burn a baby’s mouth.' },
  { id: 'fr-kites', minMonths: 48, maxMonths: 144, text: 'Flying kites? Choose open ground far from power lines, never use metal string, and never climb a pole or wall to free a stuck kite. Let it go.' },
  { id: 'fr-bathroom', minMonths: 0, maxMonths: 144, text: 'Keep plug-in heaters, hairdryers and charging phones out of the bathroom while children bathe. Water and mains electricity don’t mix.' },
  { id: 'fr-motorbike', minMonths: 60, maxMonths: 144, text: 'If your child rides on a motorbike, they need their own fitted helmet, done up, a proper seat behind the rider and feet on footrests. Never in front of the rider.' },
];
