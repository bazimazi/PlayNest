import type { Tip } from './types';

/** Daily tips for the "Family life" area of the parenting hub (release 1.6). */
export const FAMILY_TIPS: Tip[] = [
  { id: 'family-grandparent-thanks', minMonths: 0, maxMonths: 144, text: 'Asking a grandparent to do something differently? Start with thanks, then call it new advice: “The doctor told us…” It’s easier to hear.' },
  { id: 'family-weekly-ritual', minMonths: 0, maxMonths: 144, text: 'Pick one small weekly ritual that’s just yours: a family walk, a special breakfast, a game night. Doing it again and again is what makes it special.' },
  { id: 'family-back-each-other', minMonths: 12, maxMonths: 144, text: 'Disagree with your partner’s decision in front of your child? Unless it’s unsafe, back it now and talk about it later, in private.' },
  { id: 'family-one-to-one', minMonths: 12, maxMonths: 144, text: 'Try ten minutes alone with each child this week. They choose what to do, your phone stays in another room, and there’s no teaching.' },
  { id: 'family-older-sibling', minMonths: 18, maxMonths: 72, text: 'New baby at home? Ask visitors to say hello to the older child first. A little attention for them goes a long way.' },
  { id: 'family-few-rules', minMonths: 24, maxMonths: 144, text: 'Agree a few family rules together, worded as what to do: “We use gentle hands.” Grown-ups keep them too.' },
  { id: 'family-seen-repair', minMonths: 24, maxMonths: 144, text: 'Had an argument the children heard? Let them see you make up too. Seeing the repair helps them feel safe again.' },
  { id: 'family-best-and-hardest', minMonths: 36, maxMonths: 144, text: 'At a family meal, ask everyone for the best and the hardest bit of their day. Grown-ups answer too.' },
];
