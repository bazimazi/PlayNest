import type { Tip } from './types';

/** Daily tips for the "you" area of the parenting hub (release 1.6): the parent's own temper, energy and relationship. */
export const YOU_TIPS: Tip[] = [
  { id: 'you-name-the-heat', minMonths: 12, maxMonths: 144, text: 'Feeling your temper rise? Say it out loud: “I’m getting cross, so I’m taking a breath.” You calm down, and your child sees how it’s done.' },
  { id: 'you-safe-then-step-away', minMonths: 0, maxMonths: 12, text: 'If the crying gets too much, put your baby down safely in the cot and step out for a few minutes. Breathe, then go back. Never shake a baby.' },
  { id: 'you-one-standard', minMonths: 0, maxMonths: 144, source: 'aap-parent-break', text: 'Tired out? Pick one thing to do less well this week: simpler meals, less tidying. Good enough really is good enough.' },
  { id: 'you-ask-one-thing', minMonths: 0, maxMonths: 144, source: 'aap-parent-break', text: 'Ask for one specific thing: “Could you take her to the park on Saturday?” works better than “I need more help.” People often want to help and don’t know how.' },
  { id: 'you-ten-minutes', minMonths: 0, maxMonths: 144, text: 'Find ten minutes a day that are just for you: a walk, a shower, a call to a friend. Small and regular beats big and rare.' },
  { id: 'you-invisible-jobs', minMonths: 0, maxMonths: 24, text: 'Write down every baby job together, even the remembering ones, like booking the jabs. Then agree who owns each. Owning a job means remembering it too.' },
  { id: 'you-check-in', minMonths: 0, maxMonths: 144, text: 'Try a ten-minute check-in with your partner tonight: “What was hardest today? What helped?” Small talks keep small things small.' },
  { id: 'you-dads-too', minMonths: 0, maxMonths: 12, source: 'nhs-postnatal-depression', text: 'About 1 in 10 new fathers have depression too. It can look like irritability or pulling away. If either of you feels low most days for two weeks, see a doctor.' },
  { id: 'you-phone-free-hello', minMonths: 12, maxMonths: 144, text: 'Keep your phone in your pocket for the first few minutes after pick-up. Those minutes are often when children tell you the most.' },
  { id: 'you-kind-words', minMonths: 0, maxMonths: 144, text: 'Talk to yourself as you would to a friend who’s struggling: “This is hard, and I’m doing my best.” Kindness to yourself makes patience easier to find.' },
];
