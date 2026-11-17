import type { Guide } from './types';

/**
 * Guides for the "Family life" shelf (release 1.6). Research:
 * research_notes/PlayNest phase 6 parenting hub research/05_family_life_and_parents.md. Paraphrase only.
 * Where evidence is thin (grandparents, family meetings) the guide says so. Abuse and violence are routed to help, never
 * advised on.
 */
const CHECKED = '2026-11-16';

const R = {
  familyFoundations: { title: 'Establishing Family Foundations: intervention effects on coparenting, parent/infant well-being, and parent-child relations (Feinberg & Kan, 2008)', publisher: 'Journal of Family Psychology, via PubMed Central', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3178882' },
  blueprints: { title: 'Family Foundations', publisher: 'Blueprints for Healthy Youth Development', url: 'https://www.blueprintsprograms.org/programs/441999999/family-foundations/' },
  greaterGood: { title: 'The trouble with grandparents', publisher: 'Greater Good Science Center, UC Berkeley', url: 'https://greatergood.berkeley.edu/article/item/the_trouble_with_grandparents' },
  eif: { title: 'What works to enhance inter-parental relationships and improve outcomes for children (2016)', publisher: 'Early Intervention Foundation for the UK Department for Work and Pensions', url: 'https://www.gov.uk/government/publications/what-works-to-enhance-inter-parental-relationships-and-improve-outcomes-for-children' },
  sussex: { title: 'Parental conflict damages children’s mental health and life chances (2016)', publisher: 'University of Sussex', url: 'https://www.sussex.ac.uk/broadcast/read/34955' },
  security: { title: 'Children’s representations of multiple family relationships (Schermerhorn, Cummings & Davies, 2005)', publisher: 'Journal of Family Psychology', url: 'https://www.uvm.edu/~ascherme/publications/Schermerhorn%20Cummings%20&%20Davies%202005.pdf' },
  fiese: { title: 'A review of 50 years of research on naturally occurring family routines and rituals (Fiese et al., 2002)', publisher: 'Journal of Family Psychology, via PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/12561283/' },
  aapNewBaby: { title: 'Preparing your family for a new baby (updated 2026)', publisher: 'American Academy of Pediatrics (HealthyChildren.org)', url: 'https://www.healthychildren.org/English/ages-stages/prenatal/Pages/Preparing-Your-Family-for-a-New-Baby.aspx' },
};

export const FAMILY_GUIDES: Guide[] = [
  {
    slug: 'parenting-as-a-team',
    title: 'Parenting as a team',
    emoji: '🤲',
    summary: 'Agreeing the few things that matter, backing each other up, and working with grandparents kindly.',
    minutes: 4,
    minMonths: 0,
    maxMonths: 144,
    topic: 'family',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.familyFoundations, R.blueprints, R.greaterGood, R.eif],
    blocks: [
      { type: 'p', text: 'Children do best when the adults raising them pull in roughly the same direction. You don’t have to agree on everything. Small differences in style are normal: one of you sillier, one of you stricter. What matters is not working against each other.' },
      { type: 'h', text: 'Four habits of a team' },
      {
        type: 'steps',
        items: [
          { title: 'Agree a few basics', text: 'Pick 3 to 5 things that matter most, such as bedtime, screens, “no hitting” and how you say no. Leave the rest.' },
          { title: 'Back each other up', text: 'In front of your child, support the other parent’s decision unless it’s unsafe: “Mum and I will talk about it and let you know.”' },
          { title: 'Disagree later, in private', text: 'Talk when you’re both calm, not in the middle of a meltdown.' },
          { title: 'Keep your child out of it', text: 'No “Go and tell your father…”, and no asking them to take sides.' },
        ],
      },
      { type: 'h', text: 'When you disagree about discipline' },
      {
        type: 'list',
        items: [
          'Each say the value behind your view: “I want her to be respectful.” “I want her to feel heard.” Often you want the same thing.',
          'Agree one approach, try it for 2 weeks, then talk about how it went.',
          'Agree a default: the parent who is there decides, and the other backs them up for now.',
          'Notice the good out loud: “You were so patient at bedtime.”',
          'One line holds, whoever disagrees: no hitting and no humiliating.',
        ],
      },
      { type: 'callout', tone: 'science', text: 'In trials of a programme that helps new parents work as a team, parents supported each other more and mothers had fewer signs of depression. A larger trial reported benefits for children and less family violence. Most trials were run by the programme’s own developers, with mainly middle-class families.' },
      { type: 'h', text: 'Grandparents and the wider family' },
      { type: 'p', text: 'In many families, grandparents, aunts and uncles help raise children every day. Their love and help are a gift, and children gain a lot from them. The aim is to agree a few things kindly, not to win.' },
      {
        type: 'list',
        items: [
          'Start with thanks: “We’re so grateful you look after her.”',
          'Each parent talks to their own parents. It tends to cause less hurt.',
          'Hold firm on safety: safe sleep, car seats, medicines, and no smacking or frightening. Let small things go. Children cope fine with “at Grandma’s it’s different”.',
          'Lean on outside advice: “The doctor asked us to…” is easier to hear than “You’re doing it wrong.”',
          'Don’t correct a grandparent in front of your child. Talk later, as you would with each other.',
        ],
      },
      { type: 'callout', tone: 'tip', text: 'There’s little research on working with grandparents in particular. These ideas are practical wisdom, so adapt them to your family. The guide Grandparents and carers lists safety advice that has changed since they were raising children.' },
    ],
  },
  {
    slug: 'when-parents-argue',
    title: 'When parents argue',
    emoji: '🌦️',
    summary: 'How you disagree matters more than whether you do, and children need to see the repair.',
    minutes: 3,
    minMonths: 0,
    maxMonths: 144,
    topic: 'family',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.eif, R.sussex, R.security],
    blocks: [
      { type: 'p', text: 'All couples disagree. Children don’t need parents who never argue. What matters is how you argue, and whether they see it get sorted out.' },
      {
        type: 'table',
        head: ['Harder on children', 'Easier on children'],
        rows: [
          ['Shouting, insults, threats', 'Calm voices, even while you disagree'],
          ['A silent treatment that drags on', 'A break, then coming back to it'],
          ['Arguing about the child, in front of the child', 'Saving that talk for later, in private'],
          ['Asking the child to take sides or carry messages', 'Keeping the child out of it'],
          ['Never resolved', 'Making up where the child can see'],
        ],
      },
      { type: 'p', text: 'Children of every age notice conflict, even babies. Frequent, intense arguments that never get resolved are linked with more worry, sadness and behaviour problems in children. Ordinary disagreement, handled with respect, isn’t harmful. It can even show children how to solve problems.' },
      { type: 'h', text: 'In the moment' },
      {
        type: 'steps',
        items: [
          { title: 'Lower your voices', text: 'Keep it about the issue, not the person. No insults and no threats.' },
          { title: 'Take a break if it heats up', text: '“Let’s finish this tonight.” Then really do come back to it.' },
          { title: 'Let them see the repair', text: 'A hug, a sorry, or “we sorted it out” teaches more than hiding every disagreement.' },
        ],
      },
      { type: 'h', text: 'What to say afterwards' },
      {
        type: 'list',
        items: [
          '“You heard us arguing. That might have felt scary.”',
          '“Grown-ups disagree sometimes. We talked, and we’re okay now.”',
          '“It wasn’t your fault. Grown-up problems are ours to sort out.”',
          '“We both love you, and our family is safe.”',
        ],
      },
      { type: 'p', text: 'Keep the details private, and don’t ask your child who was right.' },
      { type: 'callout', tone: 'science', text: 'Research suggests children feel calmer when they see or hear that an argument was resolved, and more frightened when arguments escalate or never end. A UK review found that parenting advice alone does little for children when serious conflict between the parents carries on.' },
      { type: 'callout', tone: 'safety', text: 'If anyone is being hurt, threatened or controlled, or your child is frightened of a parent, this isn’t ordinary conflict, and tips aren’t enough. If someone is in danger, call your local emergency number. For support, find a helpline in Help.' },
    ],
  },
  {
    slug: 'family-rituals',
    title: 'Family rituals, meals and one-to-one time',
    emoji: '🍽️',
    summary: 'Small things you do again and again, time alone with each child, and family meetings.',
    minutes: 4,
    minMonths: 0,
    maxMonths: 144,
    topic: 'family',
    checkedOn: CHECKED,
    sources: ['bedtime-routine'],
    refs: [R.fiese, R.aapNewBaby],
    relatedTags: ['kitchen', 'kid-leads'],
    blocks: [
      { type: 'p', text: 'Routines and small family rituals give children a sense of “this is how we do things” and “this is who we are”. They don’t need to be special or expensive.' },
      {
        type: 'table',
        head: ['Kind', 'What it is', 'Examples'],
        rows: [
          ['Routines', 'Things that need doing, in a familiar order', 'Breakfast, bath, the bedtime story'],
          ['Rituals', 'Things that say “this is us”', 'A weekly family meal, birthdays, festival days, a walk on the same day each week'],
        ],
      },
      { type: 'callout', tone: 'science', text: 'A review of 50 years of research found that families with regular routines and meaningful rituals tend to cope better with stress and change. The studies show a link, not proof of cause, and nobody knows how many routines are enough.' },
      { type: 'h', text: 'Meals together' },
      {
        type: 'list',
        items: [
          'Screens off for everyone, grown-ups included.',
          'Let children help: laying the table, stirring, pouring water.',
          'Talk rather than question. Try “What was the best bit and the hardest bit of your day?”, and answer it yourself too.',
          'It doesn’t have to be dinner. Breakfast or a weekend lunch counts.',
        ],
      },
      { type: 'h', text: 'One-to-one time with each child' },
      { type: 'p', text: 'A few minutes a day, or a longer weekly outing, with each child on their own. The child chooses what to do, your phone stays away, and there’s no teaching or correcting. Child-led time like this is a core part of tested parenting programmes. It matters most when a family is busy or a new baby has arrived.' },
      { type: 'h', text: 'Family meetings' },
      { type: 'p', text: 'Some families hold a short meeting each week. There’s little research on family meetings themselves, but they put well-supported things into practice: warmth, giving children a say, and solving problems calmly.' },
      {
        type: 'steps',
        items: [
          { title: 'Start with thanks', text: 'Everyone says one nice thing about someone else.' },
          { title: 'One topic only', text: 'Share ideas, and children’s ideas count. Pick one to try for a week. Parents still decide anything about safety.' },
          { title: 'Keep it short', text: '10 to 20 minutes works from about age 4.' },
          { title: 'End with something fun', text: 'Choose the weekend outing or a pudding together.' },
        ],
      },
      { type: 'callout', tone: 'tip', text: 'Family rules work best when there are only a few, say 3 to 5, worded as what to do (“We use gentle hands”), made together, with pictures for little ones. Grown-ups keep them too.' },
    ],
  },
  {
    slug: 'new-baby-in-family',
    title: 'A new baby in the family',
    emoji: '👶',
    summary: 'Getting an older child ready, what to expect afterwards, and keeping a place that’s just theirs.',
    minutes: 3,
    minMonths: 18,
    maxMonths: 96,
    topic: 'family',
    checkedOn: CHECKED,
    sources: ['aap-sibling-bonds'],
    refs: [R.aapNewBaby],
    relatedTags: ['pretend', 'kid-leads'],
    blocks: [
      { type: 'p', text: 'A new baby changes everything for an older child too. Mixed feelings are normal: excitement, jealousy, and missing having you to themselves. Children under 5 tend to find it hardest, but older ones can resent all the attention too.' },
      { type: 'h', text: 'Before the birth' },
      {
        type: 'table',
        head: ['Age', 'How to tell them'],
        rows: [
          ['Toddlers', 'Read picture books about babies and big brothers or sisters.'],
          ['Preschoolers', 'Start talking about it early, for example while you get baby things ready.'],
          ['School age', 'Explain what will change day to day, and what will stay the same.'],
        ],
      },
      {
        type: 'list',
        items: [
          'Finish big changes, like toilet training or moving to a bed, well before the birth. Or wait until the baby has settled in.',
          'Let them help get ready: choosing a tiny vest, setting up the baby’s corner.',
          'Tell them who will look after them while you’re away for the birth.',
        ],
      },
      { type: 'h', text: 'After the baby arrives' },
      {
        type: 'steps',
        items: [
          { title: 'Time alone together every day', text: 'Even 10 minutes, with the older child choosing what to do. It tells them they still have their own place.' },
          { title: 'Give them a part to play', text: 'Fetching a nappy, singing to the baby, cuddling beside you during feeds, or holding the baby with your help.' },
          { title: 'Expect some going backwards', text: 'Accidents, baby talk or wanting a bottle are common. Give them attention, notice their grown-up moments, and don’t shame them.' },
          { title: 'Ask visitors to greet them first', text: 'A little attention for the older child goes a long way.' },
        ],
      },
      { type: 'callout', tone: 'tip', text: 'Name the feeling without judging it: “It’s hard sharing Mum and Dad. You can always tell me when you feel cross.” For the hard moments, Jealous of a sibling or new baby in Help has words to say.' },
      { type: 'callout', tone: 'safety', text: 'Young children can love a baby roughly. Never leave a baby alone with a toddler or young child, even for a moment.' },
    ],
  },
];
