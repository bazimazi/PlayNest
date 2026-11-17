import type { Tip } from './types';

/** Daily tips for the "Food and eating" area of the parenting hub (release 1.6). No doses or supplement amounts. */
export const FOOD_TIPS: Tip[] = [
  { id: 'food-early-cues', minMonths: 0, maxMonths: 6, text: 'Hunger shows early: stirring, hands to mouth, turning to search. Feeding at these signs is usually calmer than waiting for crying, which is a late sign.' },
  { id: 'food-bottle-pace', minMonths: 0, maxMonths: 12, text: 'Bottle-feeding? Hold your baby fairly upright and let them set the pace. Stop when they turn away or relax, even if there’s milk left.' },
  { id: 'food-ready-signs', minMonths: 4, maxMonths: 7, text: 'Ready for first foods? Look for three signs together: sitting with a steady head, getting food to the mouth, and swallowing rather than pushing it back out.' },
  { id: 'food-iron-first', minMonths: 6, maxMonths: 12, text: 'Around 6 months a baby’s own iron stores run low. Offer something iron-rich every day: meat, fish, well-cooked egg, lentils or beans.' },
  { id: 'food-stay-close', minMonths: 6, maxMonths: 24, text: 'Stay with your baby while they eat, sitting upright. Gagging is noisy and normal. Choking is often silent, and needs first aid straight away.' },
  { id: 'food-quarter-grapes', minMonths: 6, maxMonths: 60, text: 'Cut grapes, cherry tomatoes and other small round foods into quarters for young children. Whole, they’re just the right size to block a small airway.' },
  { id: 'food-many-tries', minMonths: 12, maxMonths: 96, text: 'A new food can take 8 to 15 tries before it’s liked. A lick or a sniff counts. Put it on the plate again next week, with no pressure.' },
  { id: 'food-no-prize', minMonths: 18, maxMonths: 144, text: 'Try not to use pudding as a prize for vegetables: it teaches that vegetables are a chore. Serve a small pudding as part of the meal, or none at all.' },
  { id: 'food-water-first', minMonths: 12, maxMonths: 144, text: 'Make water the everyday drink, along with plain milk. Keep juice small and with a meal, and leave out fizzy drinks.' },
  { id: 'food-cook-together', minMonths: 36, maxMonths: 144, text: 'Cook together: washing, stirring, measuring, and later chopping soft food with a safe knife. Children are often keener to taste what they helped make.' },
];
