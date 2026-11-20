import type { Guide } from './types';

/**
 * Not wanting to go to school, moving home or country, and left-handed children (release 2.0). Research:
 * research_notes/PlayNest phase 10 research round 7/08_school_age_changes_and_worries.md.
 *
 * Rules from the note: never "ignore tummy aches" (check the body first); no label or checklist that says a child "has"
 * school refusal; CBT-based programmes are promising, not proven (Maynard 2015: 8 small studies); no attendance law or fines.
 * Moving is linked with a little more difficulty, mostly with frequent or later moves and other hardship, and is never said to
 * harm; no psychosis, suicide or crime outcomes. Left-handedness: switching has never been shown to help, harms of switching
 * aren't proven either, "left-handers die younger" isn't supported, and family customs about the right hand get no ruling or
 * comment. The "hand preference before 12 months" sign needs a second source and is left out; so is line 1570.
 */
const CHECKED = '2026-11-19';

const R = {
  aacapRefusal: { title: 'School refusal (Facts for Families No. 7)', publisher: 'American Academy of Child and Adolescent Psychiatry (2026)', url: 'https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/School-Refusal-007.aspx' },
  maynard: { title: 'Psychosocial interventions for school refusal with primary and secondary school students (Maynard et al. 2015)', publisher: 'Campbell Systematic Reviews', url: 'https://doi.org/10.4073/csr.2015.12' },
  li: { title: 'A systematic review of somatic symptoms in school refusal (Li et al. 2021)', publisher: 'Psychosomatic Medicine', url: 'https://pubmed.ncbi.nlm.nih.gov/33951013/' },
  herts: { title: 'Emotionally based school avoidance: guide for parents', publisher: 'Hertfordshire County Council, Educational Psychology (2021)', url: 'https://www.hertfordshire.gov.uk/microsites/Local-Offer/Media-library/Documents/Emotionally-Based-School-Avoidance-Parent-guidance-PDF-642kb.pdf' },
  dfe: { title: 'Summary of responsibilities where a mental health issue is affecting attendance', publisher: 'UK Department for Education (2023)', url: 'https://assets.publishing.service.gov.uk/media/63ee20a3d3bf7f62e5f76ba4/Summary_of_responsibilities_where_a_mental_health_issue_is_affecting_attendance.pdf' },
  aacapMoving: { title: 'Moving: helping children cope (Facts for Families No. 14)', publisher: 'American Academy of Child and Adolescent Psychiatry (2017)', url: 'https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Children-And-Family-Moves-014.aspx' },
  simsek: { title: 'Childhood residential mobility and health outcomes: a meta-analysis (Simsek et al. 2021)', publisher: 'Health & Place', url: 'https://pubmed.ncbi.nlm.nih.gov/34428708/' },
  nathan: { title: 'Residential mobility and social, emotional and behavioural difficulties in New Zealand preschoolers (Nathan et al. 2019)', publisher: 'Journal of Epidemiology and Community Health', url: 'https://pubmed.ncbi.nlm.nih.gov/31315898/' },
  migrant: { title: 'Emotional and behavioral problems in migrant children in Europe (Belhadj Kouider et al. 2014)', publisher: 'European Child & Adolescent Psychiatry', url: 'https://pubmed.ncbi.nlm.nih.gov/24132833/' },
  papadatou: { title: 'Human handedness: a meta-analysis (Papadatou-Pastou et al. 2020)', publisher: 'Psychological Bulletin', url: 'https://pubmed.ncbi.nlm.nih.gov/32237881/' },
  scharoun: { title: 'Hand preference, performance abilities and hand selection in children (Scharoun & Bryden 2014)', publisher: 'Frontiers in Psychology', url: 'https://pubmed.ncbi.nlm.nih.gov/24600414/' },
  siebner: { title: 'Long-term consequences of switching handedness: a positron emission tomography study (Siebner et al. 2002)', publisher: 'Journal of Neuroscience', url: 'https://pubmed.ncbi.nlm.nih.gov/11923446/' },
  kloppel: { title: 'Nurture versus nature: long-term impact of forced right-handedness on brain structure (Klöppel et al. 2010)', publisher: 'Journal of Neuroscience', url: 'https://pubmed.ncbi.nlm.nih.gov/20203186/' },
  porac: { title: 'Hand preference side and its relation to hand preference switch history among older adults (Porac & Searleman 2002)', publisher: 'Neuropsychologia', url: 'https://pubmed.ncbi.nlm.nih.gov/12208004/' },
  salive: { title: 'Left-handedness and mortality (Salive et al. 1993)', publisher: 'American Journal of Public Health', url: 'https://pubmed.ncbi.nlm.nih.gov/8427338/' },
  stutter: { title: 'Cerebral laterality as assessed by hand preference and developmental stuttering (Mohammadi & Papadatou-Pastou 2020)', publisher: 'Laterality', url: 'https://pubmed.ncbi.nlm.nih.gov/31144576/' },
  qom: { title: 'Handedness and academic achievement among university students in Qom (Heidari et al. 2015)', publisher: 'Iranian Journal of Medical Education', url: 'https://ijme.mui.ac.ir/article-1-3858-fa.pdf' },
  cambsWriting: { title: 'Handwriting and typing', publisher: 'Cambridgeshire and Peterborough NHS children’s health services', url: 'https://cambspborochildrenshealth.nhs.uk/child-development-and-growing-up/hand-skills/handwriting-and-typing/' },
  cambsScissors: { title: 'Scissor skills', publisher: 'Cambridgeshire and Peterborough NHS children’s health services', url: 'https://cambspborochildrenshealth.nhs.uk/child-development-and-growing-up/hand-skills/scissor-skills/' },
  wsuffolk: { title: 'Handwriting (worksheet G)', publisher: 'West Suffolk NHS Foundation Trust, paediatric occupational therapy', url: 'https://www.wsh.nhs.uk/CMS-Documents/Services/Integrated-Community-Paediatric-Services-OT/g.-Handwriting.pdf' },
};

export const SCHOOL_MOVES_GUIDES: Guide[] = [
  {
    slug: 'school-worries-and-avoidance',
    title: 'When your child doesn’t want to go to school',
    emoji: '🏫',
    summary: 'Tummy aches on school mornings, tears at the gate, or school refusal: why it happens, why staying home can backfire, and how home and school can help together.',
    minutes: 5,
    minMonths: 48,
    maxMonths: 144,
    topic: 'school',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.aacapRefusal, R.li, R.herts, R.dfe, R.maynard],
    blocks: [
      { type: 'p', text: 'Most children have mornings when they don’t want to go. For some it becomes a pattern, often driven by worry: about leaving you, friends, schoolwork or someone at school. It’s most common around starting school, and again around 11 to 14.' },
      { type: 'p', text: 'It can show up as headaches, a sore throat or an upset tummy just before leaving, often asking to stay home, being late, missing lessons, then whole days. It often starts small and grows.' },
      { type: 'callout', tone: 'safety', text: 'Check the body first: see your doctor to look for illness. If nothing is found, the pain is still real, because worry can cause tummy aches and headaches.' },
      { type: 'h', text: 'Why staying home can backfire' },
      { type: 'p', text: 'Staying home brings quick relief, which can make school feel even scarier next time, so the avoiding grows. Long absences tend to make going back harder, so acting early is easier.' },
      {
        type: 'steps',
        items: [
          { title: 'Calm yourself first', text: 'Get things ready the night before, so the morning is about your child, not the lost shoe.' },
          { title: 'Name the feeling, briefly', text: '“I can hear you’re really worried about today. That’s tough.”' },
          { title: 'Ask, don’t tell', text: '“What could help you manage this feeling?”' },
          { title: 'Keep the message steady', text: '“We’re working on this together, and I know you can do it.”' },
          { title: 'Praise the brave bits', text: '“You got dressed even though you felt scared. That was brave.”' },
        ],
      },
      {
        type: 'table',
        head: ['Tends to help', 'Tends to backfire'],
        rows: [
          ['Listening and naming the feeling once', 'Arguing, or “you shouldn’t be worried”'],
          ['Asking what would help them cope', 'Answering the same worried question again and again'],
          ['Specific praise for brave steps', 'Long talks about the worry'],
          ['A clear, short goodbye', 'Slipping away without saying goodbye'],
          ['Telling the school early', 'Keeping them home to avoid a test'],
          ['A school-day routine on days at home', 'Home being more fun than school during school hours'],
        ],
      },
      { type: 'h', text: 'Working with the school' },
      { type: 'p', text: 'Tell the teacher early, and agree a plan together: a trusted adult who checks in, a quiet place at break, help catching up on missed work and, if needed, shorter days for a short, agreed time with regular reviews. Rules and support differ between schools.' },
      { type: 'p', text: 'If your child is home for a while, keep getting up at the usual time and dressed, do some schoolwork, and get outside. Keep school hours for school things and quiet activities, and save screens for after school, as a routine rather than a punishment.' },
      { type: 'callout', tone: 'tip', text: 'Look for the reason with the school: bullying, a friendship falling apart, a learning difficulty nobody has spotted yet, or, for some children, noise and changes at school.' },
      { type: 'callout', tone: 'science', text: 'A review of 8 small studies found that programmes based on CBT, a talking therapy, helped children get back to school more, by a moderate amount. On worry scores, they did no better than the other therapies they were compared with. The studies were few and some had flaws, so this is promising, not proof.' },
      { type: 'callout', tone: 'safety', text: 'See your doctor if it lasts more than a few days or keeps getting worse, if your child seems low or stops enjoying things, or if they’re afraid of one particular person. If they talk about harming themselves, get help the same day.' },
    ],
  },
  {
    slug: 'big-moves',
    title: 'Moving home, school or country',
    emoji: '📦',
    summary: 'Most children settle after a move. What the research says, how to prepare them, and the signs a child is struggling.',
    minutes: 4,
    minMonths: 24,
    maxMonths: 144,
    topic: 'family',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.aacapMoving, R.simsek, R.nathan, R.migrant],
    blocks: [
      { type: 'p', text: 'Moves are common, and most children settle. Older children often find it harder, because friends matter more to them. A move is harder when it comes with other big changes, such as a loss, a separation or money worries.' },
      { type: 'callout', tone: 'science', text: 'Large studies link moving, especially moving often or in the pre-teen and teen years, with a little more emotional and behaviour trouble. A review of 64 studies found the link was small to medium, and partly explained by the hard times that often come with moving. In a study of 313,000 four-year-olds, moves before age 2 weren’t linked at all. These are links, not proof.' },
      { type: 'h', text: 'Before the move' },
      {
        type: 'steps',
        items: [
          { title: 'Explain why', text: 'In simple words, and more than once.' },
          { title: 'Show the new place', text: 'Photos, a map, and a few things to look forward to.' },
          { title: 'Give them a say', text: 'Let them help plan their room or pack a special box.' },
          { title: 'Keep friends', text: 'Help them collect friends’ numbers or addresses before you go.' },
        ],
      },
      { type: 'h', text: 'After the move' },
      { type: 'p', text: 'Join local activities, such as clubs, sport or community groups, and help your child stay in touch with old friends. Where you can, avoid piling other big changes on top.' },
      {
        type: 'table',
        head: ['Age', 'What may be hard', 'What helps'],
        rows: [
          ['Under 5', 'Leaving familiar people and places, and being apart from you', 'Your closeness and a predictable day'],
          ['5 to 8', 'A new class and making new friends', 'Talking about the new school, and inviting a new friend round'],
          ['9 to 12', 'Losing a group of friends, and fitting in', 'Keeping old friends, and joining a club or team'],
        ],
      },
      { type: 'p', text: 'At a new school, friendships can take time. Ask how the school helps new pupils settle and make friends, and keep an eye on how break times are going.' },
      { type: 'h', text: 'A new city or country' },
      { type: 'p', text: 'Studies of children who move to a new country give mixed results. Family stresses often matter more than the move itself: worry about fitting in, a new language, and a growing gap between the child’s ways and the parents’ ways. Keep your home language and traditions alive while everyone learns the new ones, and where you can, don’t rely on your child to interpret for you in serious matters.' },
      { type: 'callout', tone: 'safety', text: 'In the first months, watch for changes in appetite or sleep, pulling away from friends, falling marks, irritability or big changes in mood. Some children don’t say they’re struggling. If it lasts, talk to your doctor.' },
    ],
  },
  {
    slug: 'left-handed-children',
    title: 'Left-handed children',
    emoji: '✍️',
    summary: 'About 1 in 10 children are left-handed. Why it’s fine, what we know about switching hands, and simple ways to make writing and cutting easier.',
    minutes: 4,
    minMonths: 24,
    maxMonths: 144,
    topic: 'school',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.papadatou, R.scharoun, R.siebner, R.kloppel, R.porac, R.salive, R.stutter, R.qom, R.cambsWriting, R.cambsScissors, R.wsuffolk],
    relatedTags: ['art'],
    blocks: [
      { type: 'p', text: 'About 1 in 10 people are left-handed, and more use either hand for some things. Young children often swap hands. A clear preference usually settles during the early school years.' },
      { type: 'h', text: 'Should we switch hands?' },
      { type: 'p', text: 'Not long ago, many schools made left-handed children write with their right hand. No study has found that switching helps. Brain scans of adults who were switched as children still show differences decades later, and in a study of older adults, those who had been pushed to switch, and whose switch didn’t take, reported poorer well-being. The safe choice is to let your child write, draw and use tools with the hand that feels natural.' },
      { type: 'p', text: 'Many families have customs about using the right hand, for example at meals or when giving and receiving. That is your family’s choice, and we found no research on which hand children eat with. If you teach a custom, keep it gentle, with no punishment or shaming, and let writing and skilled tasks stay with the hand that works best.' },
      { type: 'h', text: 'Making writing easier' },
      {
        type: 'steps',
        items: [
          { title: 'Sit on the left', text: 'Next to a right-handed child, sitting on their left means elbows don’t bump, at a desk or at the table.' },
          { title: 'Paper to the left, tilted', text: 'Put the paper to the left of their body and tilt it to the right. Moving the paper up is easier than sliding the arm down.' },
          { title: 'A slightly higher grip', text: 'Fingers a little further from the tip, so they can see what they write.' },
          { title: 'Mark the start', text: 'A sticker on the left edge of the page shows where to begin.' },
          { title: 'Fewer smudges', text: 'Quick-drying pens help. Praise the effort, not the neatness.' },
        ],
      },
      { type: 'callout', tone: 'tip', text: 'Left-handed scissors let a left-handed child see the cutting line, which ordinary scissors hide. Cutting curves clockwise usually feels easier for them.' },
      {
        type: 'table',
        head: ['You may hear', 'What research found'],
        rows: [
          ['Left-handers die younger', 'Most large studies found no difference. The old claim came from older people who had been switched as children and so counted as right-handed.'],
          ['Being left-handed causes stammering', 'In a study of 83 children who stammer, their hand preference was no different from other children’s.'],
          ['Left-handers do better, or worse, at school', 'A study of university students found no difference in results.'],
          ['Being left-handed is a sign of a problem', 'On its own, it isn’t. It’s a normal difference.'],
        ],
      },
      { type: 'callout', tone: 'science', text: 'We don’t know whether switching hands causes stammering or learning problems, because no good study has tested it. What we do know is that switching has never been shown to help.' },
      { type: 'callout', tone: 'tip', text: 'If writing stays very slow, painful or hard to read despite practice, ask the school or your health worker for advice.' },
    ],
  },
];
