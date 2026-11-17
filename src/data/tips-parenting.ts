import type { Tip } from './types';

/** Daily tips for the "parenting" area of the parenting hub (release 1.6). Drawn from the skills tested programmes share. */
export const PARENTING_TIPS: Tip[] = [
  { id: 'parenting-special-time', minMonths: 18, maxMonths: 144, source: 'cdc-child-led-play', text: 'Try five minutes of special time today: phone away, your child chooses the play, and you follow and describe what they do. No questions, no teaching.' },
  { id: 'parenting-name-it', minMonths: 12, maxMonths: 144, source: 'process-praise', text: 'Catch your child doing something you like and name it: “You put your cup on the table. Thank you.” Specific words show them what to do again.' },
  { id: 'parenting-follow-through', minMonths: 24, maxMonths: 144, text: 'Before you give a warning, ask yourself: will I really do this? A few calm warnings that you keep work better than many that you don’t.' },
  { id: 'parenting-what-to-do', minMonths: 18, maxMonths: 96, text: 'Say what to do, not what to stop: “Feet on the floor” works better than “Don’t climb.” Children can act on a picture of what you want.' },
  { id: 'parenting-wait-five', minMonths: 24, maxMonths: 120, text: 'After you ask your child to do something, wait about five seconds in silence. Many children need that moment to switch from what they were doing.' },
  { id: 'parenting-ignore-small', minMonths: 24, maxMonths: 96, text: 'Whining for attention? Look away calmly, then turn back warmly the moment they ask in a normal voice. Never ignore hurting, danger or real upset.' },
  { id: 'parenting-feeling-word', minMonths: 24, maxMonths: 144, source: 'tuning-in-to-kids', text: 'Use one new feeling word today, about a character in a book or about yourself: “I feel frustrated when I can’t find my keys.”' },
  { id: 'parenting-feeling-and-limit', minMonths: 18, maxMonths: 144, text: 'You can accept a feeling and still keep the rule: “You’re sad it’s bedtime. It’s still bedtime. Let’s pick a story.”' },
  { id: 'parenting-one-change', minMonths: 12, maxMonths: 144, text: 'Working on behaviour? Change one thing at a time and give it a couple of weeks. A small change you keep up beats a big plan that fades.' },
  { id: 'parenting-ask-their-ideas', minMonths: 96, maxMonths: 144, text: 'With older children, ask for ideas before you set a rule: “Screens are taking over our evenings. What would be fair?” Rules they help make are easier to keep.' },
];
