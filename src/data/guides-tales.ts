import type { Guide } from './types';

/**
 * Sharing old tales (battles, monsters, a hero who dies) with children of different ages (round 8). Research:
 * research_notes/PlayNest phase 11 research round 8/04_children_epics_and_heritage_research.md.
 *
 * Rules from the note: names no culture, country, book or hero, so both apps can show it; no claim that old tales improve
 * wellbeing, identity or behaviour, or that they do or don't cause aggression; no claim that telling beats reading; fear research
 * is almost all about screens, and the guide says so. Links to, and doesn't repeat, family-stories, parent-ill-or-bereaved,
 * anxious-children and when-scary-things-happen.
 */

const R8 = {
  cantorFright: { title: 'Children’s fright responses to television and films', publisher: 'Joanne Cantor, UNESCO International Clearinghouse on Children and Violence on the Screen (reprinted by Kids First)', url: 'https://www.kidsfirst.org/articles-info/fright.htm' },
  cantorMedia: { title: 'Fear and the media', publisher: 'Joanne Cantor, Encyclopedia of Communication and Information (Encyclopedia.com)', url: 'https://www.encyclopedia.com/media/encyclopedias-almanacs-transcripts-and-maps/fear-and-media' },
  // PMID 18534207
  vanDerMolen: { title: 'Children’s direct fright and worry reactions to violence in fiction and news television programs (van der Molen & Bushman 2008)', publisher: 'Journal of Pediatrics', url: 'https://doi.org/10.1016/j.jpeds.2008.03.036' },
  // PMID 19930350
  sayfan: { title: 'Scaring the monster away: what children know about managing fears of real and imaginary creatures (Sayfan & Lagattuta 2009)', publisher: 'Child Development', url: 'https://doi.org/10.1111/j.1467-8624.2009.01366.x' },
  // PMID 6510050
  speece: { title: 'Children’s understanding of death: a review of three components of a death concept (Speece & Brent 1984)', publisher: 'Child Development', url: 'https://doi.org/10.1111/j.1467-8624.1984.tb00410.x' },
  // PMID 18095535
  slaughter: { title: 'Death understanding and fear of death in young children (Slaughter & Griffiths 2007)', publisher: 'Clinical Child Psychology and Psychiatry', url: 'https://doi.org/10.1177/1359104507080980' },
  // PMID 28010879
  walker: { title: 'Explaining the moral of the story (Walker & Lombrozo 2017)', publisher: 'Cognition', url: 'https://doi.org/10.1016/j.cognition.2016.11.007' },
  // PMID 24928424
  lee: { title: 'Can classic moral stories promote honesty in children? (Lee et al. 2014)', publisher: 'Psychological Science', url: 'https://doi.org/10.1177/0956797614536401' },
  // PMID 39068536 (theory paper, not a trial)
  weststrate: { title: 'Intergenerational storytelling and positive psychosocial development (Weststrate, McLean & Fivush 2024)', publisher: 'Personality and Social Psychology Review', url: 'https://doi.org/10.1177/10888683241259902' },
};

export const TALES_GUIDES: Guide[] = [
  {
    slug: 'old-tales-by-age',
    title: 'Old tales with battles, monsters and sad endings',
    emoji: '🐉',
    summary: 'Sharing old stories by age: what to skip, how to calm fears, what to say when a hero dies, and questions that help.',
    minutes: 4,
    minMonths: 24,
    maxMonths: 144,
    topic: 'talking',
    checkedOn: '2026-11-20',
    sources: [],
    refs: [R8.cantorFright, R8.cantorMedia, R8.vanDerMolen, R8.sayfan, R8.speece, R8.slaughter, R8.walker, R8.lee, R8.weststrate],
    relatedTags: ['reading', 'pretend'],
    blocks: [
      { type: 'p', text: 'Old tales are full of battles, monsters, cruel rulers and heroes who die. Many children love them, and they can open up talk about courage, loss and doing right. You know your child best, so you choose what to tell, when and how.' },
      { type: 'p', text: 'Some researchers argue that stories passed down the generations help young people understand where they come from. It’s an idea, not yet tested in trials. For your own family’s stories, see Telling family stories. If your family speaks another language at home, an old tale told in it is one more way for your child to hear it.' },
      { type: 'h', text: 'What scares children changes with age' },
      { type: 'p', text: 'Under about 7, how something looks matters most: monsters, ugly creatures, injuries and characters changing shape. Saying “it’s only pretend” doesn’t help much yet. From about 8, looks matter less. Children are more upset by real dangers, by unfairness, and by the thought that something bad could happen to them.' },
      { type: 'p', text: 'In a study of 572 children aged 8 to 12 in one country, frightening events caused more fear when described as news than as made-up stories. So it may help to say plainly that an old tale is a story people have told for a very long time, not the news.' },
      { type: 'h', text: 'You’re the editor' },
      {
        type: 'steps',
        items: [
          { title: 'Know where it goes', text: 'Read or recall the story first, so nothing surprises you both.' },
          { title: 'Leave out the gore', text: 'One line is enough at any age: “There was a great battle, and many were hurt.” Skip wounds, blood and cruel punishments.' },
          { title: 'Keep it short for little ones', text: 'Tell one part, not the whole tale, and stop before a death or a frightening change of shape.' },
          { title: 'End somewhere safe', text: 'For under-8s, finish with everyone home, together and the danger gone, especially at bedtime.' },
          { title: 'Let them stop', text: 'Any child can say “not that one”. Skip to a happier part, or finish another day.' },
        ],
      },
      {
        type: 'table',
        head: ['Age', 'Usually works', 'Leave out or soften'],
        rows: [
          ['2 to 5', 'Short tales, clever people and animals, danger outwitted, home at the end', 'Deaths, blood, frightening monsters, changes of shape, children in danger'],
          ['6 to 7', 'Brave, clever heroes, monsters that are tricked or tamed, a battle told in one line', 'Detailed fights, cruel punishments, long sad endings'],
          ['8 to 12', 'Sad and unfair endings told with you there, then talk about choices and fairness', 'Gore, detailed killing, and anything that teaches hating a whole group'],
        ],
      },
      { type: 'h', text: 'If a story scares them' },
      {
        type: 'list',
        items: [
          'Under about 7: hold them close, keep your voice calm and move to a happier part. At this age, comfort and closeness help more than explaining.',
          'From school age: after a cuddle, try “That’s an old story. Monsters like that aren’t real, and you’re safe.” Older children are more likely to think of reminding themselves what’s real.',
          'From about 8: talk it through. What happened, why, and what else could they have done? Answer their questions honestly.',
          'At every age, your calm, caring attention is what frightened children seem to want most.',
        ],
      },
      { type: 'h', text: 'When a hero dies' },
      { type: 'p', text: 'A review of older studies found that most children in industrialised societies understand that death is permanent and happens to every living thing by about 5 to 7. Before that, a hero’s death can confuse or frighten a child, so for under-6s it’s fine to stop the story before it.' },
      {
        type: 'steps',
        items: [
          { title: 'Use plain words', text: '“The hero died.” Avoid “went to sleep”: see When a parent is ill or someone has died.' },
          { title: 'Tell what came after', text: 'Who missed them, how they were remembered, and what was put right.' },
          { title: 'Let them ask', text: 'Answer simply. It’s fine to say “I don’t know.”' },
          { title: 'Think about real losses', text: 'A story death can bring back a real one. After a recent loss in your family, choose another tale for now.' },
        ],
      },
      { type: 'p', text: 'In a study of 90 children aged 4 to 8, those who understood death as the body stopping working were less afraid of it. It’s a link, not proof, but it fits experts’ advice to talk about death plainly. From about 8, sad endings can be told with you there and time to talk. The unfairness or betrayal in a tale may upset them more than the death itself.' },
      { type: 'h', text: 'Ask, don’t preach' },
      { type: 'p', text: 'Young children often miss a story’s moral unless they’re helped to think about it. In two small experiments with 5 and 6-year-olds, asking them to explain parts of a story helped them find the moral and use it in new situations, sometimes more than being told it. So end with one question: “Why do you think she did that?”' },
      { type: 'callout', tone: 'science', text: 'In one study of 3 to 7-year-olds in one country, a story where a child was praised for telling the truth made children more honest, while two famous stories about liars being punished didn’t. When the praised story was changed to stress punishment, it stopped working. It’s a single study, but it suggests leading with good deeds admired, not wrongdoers punished.' },
      { type: 'h', text: 'Heroes of every kind' },
      { type: 'p', text: 'Pick tales where women and men win by being clever, kind or brave, or by keeping a promise, not only by strength. Let wit, mercy and help solve problems as often as fighting, and give the cost of fighting its place: people miss those who are lost.' },
      { type: 'h', text: 'Things to avoid' },
      {
        type: 'list',
        items: [
          'Using a story monster to make a child behave.',
          'Making a child hear the end of a story that is upsetting them.',
          'Linking a story’s old enemies to any real people, faith or country today.',
          'Quizzing them for the moral. Ask what they think instead.',
        ],
      },
      { type: 'callout', tone: 'safety', text: 'If fears or nightmares last for weeks, spoil sleep most nights, or stop your child doing everyday things, talk to your doctor or health worker. See also Anxious children, and When scary things happen if a story brings up something real.' },
      { type: 'callout', tone: 'science', text: 'What we don’t know: almost all research on children’s fear is about TV and films, not stories told by a parent who can slow down, soften and watch their child’s face. The studies come from a few countries, and the findings about morals come from small lab studies. No study has tested whether hearing old battle stories changes how children behave, either way.' },
    ],
  },
];
