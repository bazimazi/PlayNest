import type { Tip } from './types';

/** Daily tips for the "Character and life skills" area of the parenting hub (release 1.6). */
export const GROWING_TIPS: Tip[] = [
  { id: 'growing-wait-five', minMonths: 12, maxMonths: 60, text: 'When your child gets stuck, count to five before you help. Then give the smallest hint that gets them going again, not the answer.' },
  { id: 'growing-let-them-help', minMonths: 12, maxMonths: 48, text: 'Toddlers love to help. Let them carry the spoons or wipe the table, and thank them warmly. No sticker needed.' },
  { id: 'growing-name-effort', minMonths: 24, maxMonths: 144, source: 'process-praise', text: 'Swap “You’re so clever” for what they did: “You tried three ways until it worked.” Specific words show you really noticed.' },
  { id: 'growing-no-traps', minMonths: 24, maxMonths: 96, text: 'If you saw what happened, say what you saw instead of asking “Did you do it?” Fewer traps mean fewer lies.' },
  { id: 'growing-glad-you-told', minMonths: 36, maxMonths: 144, text: '“I’m really glad you told me.” Say it first when your child owns up, then put things right together. The truth gets easier to tell.' },
  { id: 'growing-how-they-feel', minMonths: 36, maxMonths: 108, text: 'Reading together? Pause and ask “How do you think she feels?” Thinking about other people’s feelings is how empathy grows.' },
  { id: 'growing-my-mistake', minMonths: 48, maxMonths: 144, text: 'Tell your child about one of your own mistakes and what you learned from it. Getting things wrong becomes part of learning, not something to hide.' },
  { id: 'growing-your-options', minMonths: 96, maxMonths: 144, text: 'When your child brings you a problem, try “What are your options?” before offering a fix. Then help them choose one and try it.' },
];
