import type { Guide } from './types';

/**
 * What long-running studies and landmark trials worldwide teach parents, and popular beliefs checked against them
 * (release 1.8). Research: research_notes/PlayNest phase 8 research round 5/01_landmark_studies_and_myths.md.
 *
 * Rules: cohort findings are "linked with", never "causes"; no effect size is borrowed for the app's own games; the Jamaica
 * trial is described without a number (round 3's "+42%" came from a working paper; the published figure is +25%). Left out
 * on purpose: breastfeeding and IQ (genuinely debated, and easily misread as discouraging breastfeeding), Perry Preschool
 * figures (inconsistent across sources), Falbo & Polit (not opened). Myths are told without mocking the people who hold
 * them: many were passed down with love.
 */
const CHECKED = '2026-11-17';

const R = {
  dunedin: { title: 'A gradient of childhood self-control predicts health, wealth, and public safety (Moffitt et al. 2011)', publisher: 'PNAS', url: 'https://doi.org/10.1073/pnas.1010076108' },
  bedtimes: { title: 'Changes in bedtime schedules and behavioral difficulties in 7-year-old children (Kelly et al. 2013)', publisher: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2013-1906' },
  jamaica: { title: 'Labor market returns to an early childhood stimulation intervention in Jamaica (Gertler et al. 2014)', publisher: 'Science', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4574862/' },
  jamaica31: { title: 'Effects of early childhood stimulation on adult psychosocial outcomes at age 31 (Walker et al. 2022)', publisher: 'Journal of Child Psychology and Psychiatry', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8850528/' },
  romeo: { title: 'Beyond the 30-million-word gap: conversational turns and brain function (Romeo et al. 2018)', publisher: 'Psychological Science', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5945324/' },
  lansford: { title: 'Physical discipline and children’s adjustment in six countries (Lansford et al. 2005)', publisher: 'Child Development', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2766084/' },
  warmth: { title: 'Parental warmth and control across nine countries (Rothenberg et al. 2020)', publisher: 'Journal of Child Psychology and Psychiatry', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7078039/' },
  gershoff: { title: 'Spanking and child outcomes: meta-analyses (Gershoff & Grogan-Kaylor 2016)', publisher: 'Journal of Family Psychology', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7992110/' },
  nichd: { title: 'Are there long-term effects of early child care? (Belsky et al. 2007)', publisher: 'Child Development', url: 'https://doi.org/10.1111/j.1467-8624.2007.01021.x' },
  beip: { title: 'Cognitive recovery in socially deprived young children: the Bucharest Early Intervention Project (Nelson et al. 2007)', publisher: 'Science', url: 'https://doi.org/10.1126/science.1143921' },
  vip: { title: 'Reading aloud, play and social-emotional development: the Video Interaction Project (Mendelsohn et al. 2018)', publisher: 'Pediatrics', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5914489/' },
  buildingBlocks: { title: 'Effectiveness of a nurse-led home-visiting programme for first-time teenage mothers in England (Robling et al. 2016)', publisher: 'The Lancet', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4707160/' },
  sugar: { title: 'The effect of sugar on behavior or cognition in children: a meta-analysis (Wolraich et al. 1995)', publisher: 'JAMA', url: 'https://doi.org/10.1001/jama.1995.03530200053037' },
  sugarExpect: { title: 'Effects of sugar ingestion expectancies on mother–child interactions (Hoover & Milich 1994)', publisher: 'Journal of Abnormal Child Psychology', url: 'https://doi.org/10.1007/BF02168088' },
  teething: { title: 'Symptoms associated with infant teething: a prospective study (Macknin et al. 2000)', publisher: 'Pediatrics', url: 'https://doi.org/10.1542/peds.105.4.747' },
  teethingMeta: { title: 'Signs and symptoms of primary tooth eruption: a meta-analysis (Massignan et al. 2016)', publisher: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2015-3501' },
  walkerIran: { title: 'Infant walker use and walking age in Iranian infants (Shiva et al. 2010)', publisher: 'Singapore Medical Journal', url: 'https://europepmc.org/article/MED/20848062' },
  walkerUs: { title: 'Mobile infant walker-related injuries in the United States (Sims et al. 2018)', publisher: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2017-4332' },
  aapSpoil: { title: 'Responding to your baby’s cries', publisher: 'American Academy of Pediatrics (HealthyChildren.org, 2025)', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Responding-To-Your-Babys-Cries.aspx' },
  chill: { title: 'Acute cooling of the feet and the onset of common cold symptoms (Johnson & Eccles 2005)', publisher: 'Family Practice', url: 'https://doi.org/10.1093/fampra/cmi069' },
  dvd: { title: 'Do babies learn from baby media? (DeLoache et al. 2010)', publisher: 'Psychological Science', url: 'https://doi.org/10.1177/0956797610384145' },
  styles: { title: 'Learning styles: concepts and evidence (Pashler et al. 2008)', publisher: 'Psychological Science in the Public Interest', url: 'https://doi.org/10.1111/j.1539-6053.2009.01038.x' },
  brain: { title: 'An evaluation of the left-brain vs. right-brain hypothesis (Nielsen et al. 2013)', publisher: 'PLOS ONE', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3743825/' },
  sleepTraining: { title: 'Five-year follow-up of harms and benefits of behavioral infant sleep intervention (Price et al. 2012)', publisher: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2011-3467' },
  onlyChild: { title: 'Only children and loneliness in China (Lin, Falbo et al. 2021)', publisher: 'Frontiers in Psychology', url: 'https://europepmc.org/article/MED/34166053' },
  mmr: { title: 'Measles, mumps, rubella vaccination and autism: a nationwide cohort study (Hviid et al. 2019)', publisher: 'Annals of Internal Medicine', url: 'https://doi.org/10.7326/M18-2101' },
  bilingual: { title: 'Dual language exposure and early bilingual development (Hoff et al. 2012)', publisher: 'Journal of Child Language', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4323282/' },
};

export const EVIDENCE_GUIDES: Guide[] = [
  {
    slug: 'what-decades-show',
    title: 'What decades of research say matters most',
    emoji: '🔬',
    summary: 'Studies that followed thousands of children for 30 years and more, and trials around the world: what they agree on.',
    minutes: 4,
    minMonths: 0,
    maxMonths: 144,
    topic: 'parenting',
    checkedOn: CHECKED,
    sources: ['harvard-serve-return'],
    refs: [R.lansford, R.warmth, R.romeo, R.jamaica, R.jamaica31, R.dunedin, R.bedtimes, R.nichd, R.gershoff, R.beip, R.buildingBlocks],
    relatedTags: ['everyday'],
    blocks: [
      { type: 'p', text: 'Some studies follow the same children from birth into their thirties. Others test a change by giving it to some families and not others. Together, across many countries, they point to a handful of things that matter. None needs money, and none needs to be perfect: these are averages across thousands of families, not a test of you.' },
      { type: 'h', text: 'Warmth, in every culture' },
      { type: 'p', text: 'Researchers followed families in nine countries, including China, Colombia, Italy, Jordan, Kenya, the Philippines, Sweden, Thailand and the US. Everywhere, children whose parents were warm and affectionate did better. And everywhere, more physical punishment was linked with more aggression and anxiety, even where smacking was common.' },
      { type: 'h', text: 'Back-and-forth talk' },
      { type: 'p', text: 'It isn’t how many words a child hears. It’s the back-and-forth: you say something, wait, and answer their babble, point or reply. Children who had more of these turns showed stronger language skills. Grandparents, brothers and sisters count too.' },
      { type: 'h', text: 'Simple play together' },
      { type: 'p', text: 'In Jamaica, health workers visited mothers of toddlers once a week for two years, showing simple ways to play and talk using things at home. Decades later, those children were doing better in work, mood and many other parts of life. In a New York trial, parents who watched short videos of themselves playing and reading, with a coach pointing out what went well, had children with fewer behaviour problems at school.' },
      { type: 'h', text: 'Self-control grows with practice' },
      { type: 'p', text: 'A New Zealand study followed 1,000 children into their thirties. Self-control in childhood, such as waiting, planning and managing frustration, was linked with better health and finances as adults, beyond IQ and family wealth. It isn’t fixed: games like “Simon says”, taking turns and waiting for a timer are everyday practice.' },
      { type: 'h', text: 'Regular routines, especially bedtime' },
      { type: 'p', text: 'In a UK study of over 10,000 children, irregular bedtimes were linked with more behaviour difficulties at 7, and children’s behaviour improved when families moved to a regular bedtime. Regular matters more than early: the right time is the one your family can keep.' },
      { type: 'h', text: 'Home matters most' },
      { type: 'p', text: 'In the largest US study of childcare, family life mattered more than childcare did. Good-quality care was linked with slightly better language, and very long hours in group care with slightly more restless behaviour. Both effects were small. If you use childcare, look for warm carers and small groups.' },
      { type: 'h', text: 'It is rarely too late' },
      { type: 'p', text: 'In Romania, young children moved from orphanages into caring foster families caught up a great deal, most of all when moved early, but later-placed children improved too. A loving, reliable adult helps children recover from a hard start.' },
      { type: 'callout', tone: 'science', text: 'Why we say “linked with”: a long study shows that two things go together, not that one causes the other. And even trusted programmes don’t work everywhere. A well-known US home-visiting programme was tested in England, alongside its existing health services, and added no measurable benefit. Good science checks things again in new places.' },
    ],
  },
  {
    slug: 'myths-checked',
    title: 'Parenting myths, checked',
    emoji: '🧐',
    summary: 'Sugar and hyperactivity, teething fevers, baby walkers, spoiling babies and more: what careful studies found.',
    minutes: 4,
    minMonths: 0,
    maxMonths: 144,
    topic: 'parenting',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.sugar, R.sugarExpect, R.teething, R.teethingMeta, R.walkerIran, R.walkerUs, R.aapSpoil, R.chill, R.dvd, R.styles, R.brain, R.sleepTraining, R.onlyChild, R.mmr, R.bilingual],
    blocks: [
      { type: 'p', text: 'Many of these beliefs were passed down with love, by people who wanted the best for children. Here’s what careful studies found, and what to do instead.' },
      {
        type: 'steps',
        items: [
          { title: '“Sugar makes children hyperactive.” Not true', text: 'In studies where no one knew who had sugar, children’s behaviour didn’t change. In one, mothers told their son had sugar rated him as wilder, though he’d had none. Parties are exciting because they’re parties. Limit sweets for teeth and health instead.' },
          { title: '“It’s only teething.” Not for a fever', text: 'Teething can bring drooling, chewing, grumpiness and a slightly raised temperature for a few days. It doesn’t cause a real fever, diarrhoea or illness. If your baby has a fever or seems unwell, look for another cause and ask a health worker.' },
          { title: '“A baby walker helps them walk.” Not true', text: 'In a study of Iranian babies, more than half used a walker, and they walked no earlier. Walkers cause falls, especially down stairs. Floor play, pulling up and cruising along the sofa are better practice.' },
          { title: '“You’ll spoil a baby by picking them up.” Not true', text: 'You can’t spoil a young baby with comfort. Answering their cries builds trust. It’s also fine to pause a moment when they’re only fussing, to see if they settle. You don’t have to be instant every time.' },
          { title: '“Cold weather gives you a cold.” Half true', text: 'Colds come from viruses passed between people, so washing hands does more than a hat. Getting chilled may help a cold show up in some people, so dressing warmly makes sense. Outdoor play in winter is still good for children.' },
          { title: '“Baby videos and flashcards build clever babies.” Not true', text: 'In a careful study, toddlers learned no more words from a month of a word-teaching video. They learned most when parents simply named things during the day. Talk, point and name: it’s free and it works better.' },
          { title: '“Playing classical music makes babies smarter.” Not true', text: 'Studies haven’t found that listening to music raises IQ. Singing, dancing and making music together are still wonderful for closeness, rhythm and language.' },
          { title: '“Children are visual or hands-on learners.” Not true', text: 'Children have interests and preferences, but teaching only in a child’s “style” hasn’t been shown to help them learn more. Most children learn best from a mix of seeing, hearing, doing and talking.' },
          { title: '“Left-brained or right-brained.” Not true', text: 'Some skills lean more on one side of the brain, but people aren’t one type or the other. Both halves work together all the time. A child can be creative and logical.' },
          { title: '“Sleep training harms babies.” Not shown', text: 'An Australian trial followed children for five years after gentle sleep-training methods begun in the second half of the first year. It found no harm to feelings, behaviour or closeness, and no lasting benefit either. It’s your family’s choice.' },
          { title: '“Only children are spoiled or lonely.” Mostly not true', text: 'Most studies find only children much like children with brothers and sisters, and some find them a little less lonely. What helps is the same for every child: warmth, limits, and time to play with other children.' },
          { title: '“Two languages confuse children.” Not true', text: 'Each language may look a little behind a one-language child’s, but count both and it usually evens out. Each language grows with how much a child hears it, so keep speaking your heart language at home.' },
          { title: '“Vaccines cause autism.” Not true', text: 'A study of more than 650,000 children found no link with the MMR vaccine, including in children with an autistic brother or sister. Follow your national vaccine schedule.' },
        ],
      },
      { type: 'callout', tone: 'tip', text: 'When a new parenting claim sounds amazing, ask: was it tested by comparing children who got it with children who didn’t? Was it repeated somewhere else? Who is selling it?' },
    ],
  },
];
