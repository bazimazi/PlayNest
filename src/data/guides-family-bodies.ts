import type { Guide } from './types';

/**
 * Siblings beyond play, and children's curiosity about bodies (release 1.9). Research:
 * research_notes/PlayNest phase 9 research round 6/04_siblings_and_body_curiosity.md.
 *
 * Rules from the note: sibling bullying is "linked with" later depression and self-harm, never "causes", and psychosis is
 * never mentioned; no programme is promised to stop fights (the largest recent trial didn't change the relationship); no
 * birth-order personality claims, and only children are described neutrally; nothing that could read as advice on family
 * size. Body curiosity: our own wording from AAP, NCTSN and NSPCC (Brook's Traffic Light lists are licensed and not used);
 * no percentages for specific behaviours; no ages or religious rulings on nudity, bathing or sleeping arrangements; no
 * medicines for toddler self-soothing, and never "it can't be a seizure". Persian avoids «خودارضایی» and shaming words, and
 * doesn't cite UNESCO sexuality-education guidance. The age-gap wording agrees with `body-safety`.
 */
const CHECKED = '2026-11-18';

const R = {
  aapSynergy: { title: 'Sibling synergy', publisher: 'American Academy of Pediatrics (HealthyChildren.org, April 2026)', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/sibling-synergy.aspx' },
  buist: { title: 'Sibling relationship quality and psychopathology: a meta-analysis (Buist et al. 2013)', publisher: 'Clinical Psychology Review', url: 'https://doi.org/10.1016/j.cpr.2012.10.007' },
  tucker: { title: 'Association of sibling aggression with child and adolescent mental health (Tucker et al. 2013)', publisher: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2012-3801' },
  bowes: { title: 'Sibling bullying and risk of depression, anxiety and self-harm (Bowes et al. 2014)', publisher: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2014-0832' },
  jensen: { title: 'Parental differential treatment of siblings: a meta-analysis (Jensen & Thomsen 2024)', publisher: 'Child Development', url: 'https://doi.org/10.1111/cdev.14091' },
  siddiqui: { title: 'Mediation as a method of parent intervention in children’s disputes (Siddiqui & Ross 2004)', publisher: 'Journal of Family Psychology', url: 'https://doi.org/10.1037/0893-3200.18.1.147' },
  leijten: { title: 'Parenting programs to improve sibling interactions: a meta-analysis (Leijten et al. 2021)', publisher: 'Journal of Family Psychology', url: 'https://doi.org/10.1037/fam0000833' },
  rohrer: { title: 'Examining the effects of birth order on personality (Rohrer et al. 2015)', publisher: 'PNAS', url: 'https://doi.org/10.1073/pnas.1506451112' },
  aapBehaviours: { title: 'Sexual behaviours in young children: what’s normal, what’s not?', publisher: 'American Academy of Pediatrics (HealthyChildren.org, April 2023)', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Sexual-Behaviors-Young-Children.aspx' },
  nctsn: { title: 'Sexual development and behaviour in children: information for parents and caregivers', publisher: 'National Child Traumatic Stress Network (2009)', url: 'https://www.nctsn.org/sites/default/files/resources//sexual_development_and_behavior_in_children.pdf' },
  nspcc: { title: 'Healthy sexual development of children and young people', publisher: 'NSPCC Learning (July 2026)', url: 'https://learning.nspcc.org.uk/child-health-development/healthy-sexual-development-children-young-people' },
  kellogg: { title: 'Sexual behaviours in children: evaluation and management (Kellogg 2010)', publisher: 'American Family Physician', url: 'https://www.aafp.org/pubs/afp/issues/2010/1115/p1233.html' },
  nechay: { title: 'Gratification disorder (“infantile masturbation”): a review (Nechay et al. 2004)', publisher: 'Archives of Disease in Childhood', url: 'https://doi.org/10.1136/adc.2003.032102' },
  ganji: { title: 'Iranian parents’ perspectives on their children’s sexuality education: a qualitative needs assessment (Ganji et al. 2018)', publisher: 'Journal of Nursing and Midwifery Sciences', url: 'https://doi.org/10.4103/JNMS.JNMS_42_18' },
};

export const FAMILY_BODIES_GUIDES: Guide[] = [
  {
    slug: 'siblings-fights-fairness',
    title: 'Brothers and sisters: fewer fights, closer bonds',
    emoji: '👫',
    summary: 'Squabbling or bullying? How to coach instead of referee, why fair isn’t always equal, and what to do about comparisons.',
    minutes: 4,
    minMonths: 24,
    maxMonths: 144,
    topic: 'family',
    checkedOn: CHECKED,
    sources: ['aap-sibling-bonds'],
    refs: [R.aapSynergy, R.buist, R.tucker, R.bowes, R.jensen, R.siddiqui, R.leijten, R.rohrer],
    relatedTags: ['party', 'classic'],
    blocks: [
      { type: 'p', text: 'A brother or sister is often a child’s longest relationship. Squabbles are very common: in one large US survey, about 4 in 10 children were hurt or picked on by a sibling in a year, most often between 2 and 9. You can’t make them best friends, but you can make the good times more likely and the hard times less harmful.' },
      { type: 'callout', tone: 'science', text: 'A review of 34 studies found that warmer sibling relationships with less conflict went with fewer worries and behaviour problems, and conflict mattered most. These studies show links, not proof of cause.' },
      { type: 'h', text: 'Squabble or bullying?' },
      {
        type: 'table',
        head: ['', 'Usually ordinary squabbling', 'Worth acting on'],
        rows: [
          ['Who starts it', 'Either of them', 'Mostly the same child'],
          ['What it’s about', 'A toy, a turn, the front seat', 'Putting the other one down'],
          ['Power', 'Fairly evenly matched', 'Older, bigger, or two against one'],
          ['Afterwards', 'Both bounce back', 'One is scared, avoids the other, or seems changed'],
        ],
      },
      { type: 'h', text: 'Coach, don’t referee' },
      { type: 'p', text: 'In small trials, parents who learned to guide their children through a disagreement, rather than judge it, saw children solve more of their own arguments.' },
      {
        type: 'steps',
        items: [
          { title: 'Calm first', text: 'Separate them for a few minutes if needed. Nobody solves anything while shouting.' },
          { title: 'One at a time', text: '“I’ll listen to you both.” Each tells their side without being interrupted.' },
          { title: 'Say it back', text: 'Each says what the other wants and feels: “So you wanted to finish your turn, and he felt left out?”' },
          { title: 'Their ideas first', text: '“What could work for both of you?” Help them choose one they can both live with.' },
          { title: 'Notice when it works', text: '“You two sorted that out yourselves.” Children tend to repeat what gets noticed.' },
        ],
      },
      { type: 'h', text: 'When to step in' },
      {
        type: 'table',
        head: ['Age', 'What usually helps'],
        rows: [
          ['Under 5', 'Step in early, stay close, and repeat simple rules: “We use gentle hands.”'],
          ['5 to 8', 'For words-only squabbles, wait a moment, then help them use the steps above.'],
          ['9 to 12', 'Let them try first with small, two-sided arguments, and be ready to help.'],
          ['Any age', 'Step in at once for hitting, cruelty, threats, or one child being frightened.'],
        ],
      },
      { type: 'h', text: 'Fair isn’t always equal' },
      { type: 'p', text: 'Children notice differences in how they’re treated. Studies found small links between favouritism and children’s problems, but differences children understood and saw as fair did no harm. So explain the reason out loud: “Your brother stays up later because he’s older. You’ll get that too.” And: “I love you both, all the way. You’re different, so I do some things differently.”' },
      { type: 'h', text: 'Swap comparisons for description' },
      {
        type: 'list',
        items: [
          'Instead of “Why can’t you be tidy like your sister?”, try “Your shoes are in the hall. Where do they go?”',
          'Praise each child for their own effort, not against each other.',
          'If relatives compare, a friendly line helps: “They’re each good at different things.”',
          'Older children can help with younger ones sometimes. Thank them, give them their own time and privileges, and don’t always ask the older one to give in.',
        ],
      },
      { type: 'callout', tone: 'tip', text: 'Two myths, checked. Birth order doesn’t shape personality: very large studies found no lasting effect. And only children generally do as well as children with brothers and sisters. Every family size can be a happy one.' },
      { type: 'callout', tone: 'safety', text: 'Repeated bullying by a sibling was linked with later depression and self-harm in a large UK study, so take it as seriously as bullying at school. Talk to your doctor or a counsellor if one child is often hurt, frightened or targeted, or if fighting never lets up. If a child is in danger, separate them and get help now.' },
      { type: 'callout', tone: 'science', text: 'Honestly: only a handful of trials have tested ways to improve sibling relationships, mostly small and in the US. Teaching parents to coach, and children to calm down and see the other side, made sibling time warmer in several. But the largest recent trial changed how parents handled fights without measurably changing the relationship. This is what’s most promising, not a guarantee.' },
      { type: 'p', text: 'For games where they’re on the same side, see Playing with siblings of different ages. For a new arrival, see A new baby in the family.' },
    ],
  },
  {
    slug: 'bodies-and-curiosity',
    title: 'Bodies and curiosity: what’s typical',
    emoji: '🌷',
    summary: 'What’s common at each age, calm words for awkward moments, privacy as children grow, and when to talk to a professional.',
    minutes: 4,
    minMonths: 0,
    maxMonths: 144,
    topic: 'health',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.aapBehaviours, R.nctsn, R.nspcc, R.kellogg, R.nechay, R.ganji],
    blocks: [
      { type: 'p', text: 'Children are curious about their bodies, like everything else, from a very young age. They don’t mean it the way adults would. How you respond teaches them that bodies are private and respected, and that they can always come to you.' },
      {
        type: 'table',
        head: ['Age', 'What’s common'],
        rows: [
          ['0 to 2', 'Touching their private parts during nappy changes or the bath. Baby boys can have erections, which is normal. Rocking or pressing to soothe themselves.'],
          ['2 to 5', 'Touching their private parts, sometimes in public. Wanting to be naked. Curiosity about other people’s bodies and the toilet. “Playing doctor” with a playmate of the same age. Lots of questions.'],
          ['5 to 8', 'Becoming shy and wanting privacy. Toilet jokes and “rude” words. Pretend weddings. Questions about where babies come from. Self-touching becomes more private.'],
          ['9 to 12', 'Much more privacy. Curiosity about puberty and babies. Jokes with friends. They may look for information online.'],
        ],
      },
      { type: 'callout', tone: 'science', text: 'In large surveys of children in the US, most showed some of these behaviours before 13, and they became less frequent or more private after about 5. Families where modesty is strongly taught may see less. We found no studies from Iran.' },
      { type: 'h', text: 'If you find children “playing doctor”' },
      {
        type: 'steps',
        items: [
          { title: 'Breathe', text: 'Stay calm, ask them to get dressed, and give them a few minutes apart.' },
          { title: 'Talk to each one alone', text: 'Gently: “What were you playing? Whose idea was it? How did you feel?”' },
          { title: 'Teach the rule', text: '“Being curious is OK. Private parts stay private, even with friends. We keep our clothes on when we play.”' },
          { title: 'Keep an eye on play for a while', text: 'Doors open and adults nearby, especially when children of different ages play together, including cousins at family gatherings.' },
        ],
      },
      { type: 'h', text: 'When they touch their own body' },
      {
        type: 'list',
        items: [
          'Toddlers: calmly move their hands and offer a toy. No telling off.',
          'Preschoolers: “That’s something we do in private, like in your room.”',
          'School age: a quiet word about privacy, in a calm voice.',
          'Avoid words like “dirty”, “shame on you” or threats. Shame doesn’t teach privacy, and it can stop a child telling you things later.',
        ],
      },
      { type: 'callout', tone: 'tip', text: 'Some babies and toddlers rock, press or squeeze their legs together with a flushed face, as a way of soothing themselves. It usually stops when they’re distracted, and they are aware of you. It is sometimes mistaken for a seizure or tummy pain. If you’re unsure, film it on your phone and show your doctor.' },
      { type: 'h', text: 'Privacy grows with age' },
      {
        type: 'list',
        items: [
          'Use one clear, respectful word for private parts every time, so your child has the words to tell you anything. Teach the correct names too, little by little.',
          'Private parts are the parts underwear covers. Nobody looks or touches, except to keep them clean or healthy, with a parent there.',
          'Knock before you go in, and teach children to knock too. Let them dress and wash alone when they ask, while still watching young children in the bath.',
          'Every family has its own customs about bathing and sleeping. Follow yours, and your child’s cues.',
          'Keep devices in shared rooms and use parental settings. Children may see things online and not tell you, so make it easy to ask.',
        ],
      },
      {
        type: 'table',
        head: ['Usually OK', 'Talk to your doctor or a counsellor'],
        rows: [
          ['Children of similar age and size', 'More than about 3 years apart, or a big difference in size or ability'],
          ['Playful, and nobody is upset', 'Force, threats, pressure, or a child who is upset or hurt'],
          ['Stops when you ask', 'Can’t be redirected, or keeps happening'],
          ['Ordinary curiosity', 'Copying adult sexual acts, or knowing far more than expected for their age'],
          ['Done openly', 'Asked to keep it secret, or appeared suddenly after a change in carers or home'],
        ],
      },
      { type: 'callout', tone: 'safety', text: 'A worrying behaviour doesn’t prove a child has been harmed. It can follow seeing adult content, stress or other things. But it always deserves a conversation with your doctor or a child counsellor. If your child tells you someone touched them, stay calm, believe them, and follow Body safety by age. If a child is in danger, call the police or your emergency number.' },
      { type: 'callout', tone: 'science', text: 'Honestly: most of what we know about typical behaviour comes from US surveys of parents in the 1990s, and experts differ on details such as how big an age gap is too big. Where they differ, we’ve taken the more careful line. Parents in an Iranian study said they wanted exactly this kind of “is this normal?” guidance.' },
      { type: 'p', text: 'You don’t need perfect answers. If you feel caught off guard, it’s fine to say: “Good question. Let me think, and I’ll tell you after dinner.” Then come back to it. See also Body safety by age and Puberty basics for 8 to 12s.' },
    ],
  },
];
