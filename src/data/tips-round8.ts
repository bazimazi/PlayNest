import type { Tip } from './types';

/**
 * Daily tips from research round 8. Research: research_notes/PlayNest phase 11 research round 8/04_children_epics_and_heritage_research.md.
 * The evidence for each tip is in the comment after it; none names a culture, so both apps show them.
 */

/** Old tales with battles, monsters and sad endings (note 04). Names no culture, country, book or hero. */
export const OLD_TALES_TIPS: Tip[] = [
  { id: 'r8-tales-stop-before', minMonths: 24, maxMonths: 72, text: 'Under about 6, it’s fine to stop an old tale before a hero or parent dies. Most children don’t understand that death is permanent until about 5 to 7.' }, // Speece & Brent 1984 [abstract]
  { id: 'r8-tales-cuddle', minMonths: 24, maxMonths: 84, text: 'Little one scared by a monster in a story? A cuddle, a calm voice and a happier part help more than “it’s only pretend” at this age.' }, // Cantor, both pages [opened]
  { id: 'r8-tales-not-real', minMonths: 72, maxMonths: 144, text: 'From school age, “That’s an old story, and you’re safe” starts to help. Older children are more likely to think of reminding themselves what’s real.' }, // Cantor [opened]; Sayfan & Lagattuta 2009 [abstract]
  { id: 'r8-tales-fair', minMonths: 96, maxMonths: 144, text: 'From about 8, sad endings can work with you there. Afterwards, ask: “Was that fair? What else could they have done?”' }, // Cantor [opened]: explanation helps older children; house advice
  { id: 'r8-tales-why', minMonths: 48, maxMonths: 144, text: 'After a story, ask one “why” question instead of telling the moral. In small studies, explaining helped 5 and 6-year-olds find the moral themselves.' }, // Walker & Lombrozo 2017 [abstract]
  { id: 'r8-tales-praise', minMonths: 36, maxMonths: 96, text: 'Pick stories where doing right is admired. In one study, a story praising honesty made young children more truthful; stories of liars punished didn’t.' }, // Lee et al. 2014 [abstract], 3 to 7-year-olds
  { id: 'r8-tales-one-line', minMonths: 24, maxMonths: 144, text: 'You can edit old tales. Skip blood and cruel detail: “There was a great battle, and many were hurt” is enough at any age.' }, // house rule; Cantor [opened]: graphic injury frightens young children
  { id: 'r8-tales-died', minMonths: 60, maxMonths: 144, text: 'When a hero dies in a story, use plain words: “The hero died.” Understanding death as the body stopping is linked with less fear of it.' }, // Slaughter & Griffiths 2007 [abstract], ages 4 to 8, a link
  { id: 'r8-tales-safe-end', minMonths: 24, maxMonths: 96, text: 'End bedtime tales somewhere safe: home, together, the danger gone. Young children are calmed more by closeness than by reasons.' }, // Cantor [opened]
  { id: 'r8-tales-face', minMonths: 24, maxMonths: 144, text: 'Telling an old tale from memory lets you watch your child’s face. Slow down, soften or skip a part if they look worried.' }, // house advice; no claim that telling beats reading
];
