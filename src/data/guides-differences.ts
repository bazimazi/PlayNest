import type { Guide } from './types';

/**
 * Stuttering, and learning differences at school age (release 1.8). Research: research_notes/PlayNest phase 8 research
 * round 5/05_stuttering_and_learning_differences.md.
 *
 * Rules: no recovery timeline for stuttering (most recovery happens over years, not months: Reilly 2013, Yairi 1999), no
 * do-it-yourself version of a therapy programme, and no praise of smooth speech outside therapy (STAMMA, Michael Palin
 * Centre). Referral reasons are reasons to ask, never a score. Dyslexia: no prevalence beyond a range, never the "20%"
 * figure, no "superpower" claims, and no quick fixes (coloured overlays, eye exercises and brain training aren't supported).
 * ADHD appears only as "when to ask", and isn't blamed on parenting or sugar. The Persian names Iran's routes (گفتاردرمانگر،
 * school-entry screening, the education ministry's learning-difficulty centres) without fees or waiting times.
 */
const CHECKED = '2026-11-17';

const R = {
  elvs2013: { title: 'Natural history of stuttering to 4 years of age: a prospective community-based study (Reilly et al. 2013)', publisher: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2012-3676' },
  elvs2009: { title: 'Predicting stuttering onset by the age of 3 years (Reilly et al. 2009)', publisher: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2007-3219' },
  yairi: { title: 'Early childhood stuttering I: persistency and recovery rates (Yairi & Ambrose 1999)', publisher: 'Journal of Speech, Language, and Hearing Research', url: 'https://doi.org/10.1044/jslhr.4205.1097' },
  singer: { title: 'Predictors of persistence and recovery in childhood stuttering: a meta-analysis (Singer et al. 2020)', publisher: 'Journal of Speech, Language, and Hearing Research', url: 'https://europepmc.org/article/MED/32772868' },
  sfa: { title: '7 tips for talking with your child', publisher: 'The Stuttering Foundation', url: 'https://www.stutteringhelp.org/7-tips-talking-your-child' },
  stamma: { title: 'Talking with a child who stammers', publisher: 'STAMMA (British Stammering Association)', url: 'https://stamma.org/talking-child-who-stammers' },
  palin: { title: 'Tips for parents', publisher: 'Michael Palin Centre for Stammering', url: 'https://michaelpalincentreforstammering.org/about-stammering/parents/tips-for-parents' },
  chsa: { title: 'Stuttering and cluttering (2026)', publisher: 'Communication Health Support Association, with ASHA', url: 'https://helpingyoucommunicate.org/article/stuttering-and-cluttering' },
  lidcombe: { title: 'Randomised controlled trial of the Lidcombe programme for early stuttering (Jones et al. 2005)', publisher: 'BMJ', url: 'https://doi.org/10.1136/bmj.38520.451840.E0' },
  restart: { title: 'Direct versus indirect treatment for preschool children who stutter: the RESTART trial (2015)', publisher: 'PLOS ONE', url: 'https://doi.org/10.1371/journal.pone.0133758' },
  ida: { title: 'The International Dyslexia Association’s revised definition of dyslexia (2025)', publisher: 'National Center on Improving Literacy', url: 'https://improvingliteracy.org/?p=5698' },
  nhsDyslexia: { title: 'Dyslexia', publisher: 'NHS (reviewed March 2026)', url: 'https://www.nhs.uk/conditions/dyslexia/' },
  apaSld: { title: 'What is specific learning disorder?', publisher: 'American Psychiatric Association (2024)', url: 'https://www.psychiatry.org/patients-families/specific-learning-disorder/what-is-specific-learning-disorder' },
  wwc: { title: 'Foundational skills to support reading for understanding in kindergarten through 3rd grade (2016)', publisher: 'What Works Clearinghouse, US Institute of Education Sciences', url: 'https://ies.ed.gov/ncee/wwc/PracticeGuide/21' },
  cochranePhonics: { title: 'Phonics training for English-speaking poor readers (McArthur et al. 2018)', publisher: 'Cochrane Database of Systematic Reviews', url: 'https://doi.org/10.1002/14651858.CD009115.pub3' },
  aapVision: { title: 'Learning disabilities, dyslexia, and vision (joint statement, 2011)', publisher: 'American Academy of Pediatrics and American Academy of Ophthalmology, Pediatrics', url: 'https://doi.org/10.1542/peds.2010-3670' },
  brainTraining: { title: 'Working memory training does not improve performance on measures of intelligence or other measures of “far transfer” (Melby-Lervåg et al. 2016)', publisher: 'Perspectives on Psychological Science', url: 'https://doi.org/10.1177/1745691616635612' },
  iranDyslexia: { title: 'Prevalence of dyslexia in Iranian primary school students: a meta-analysis (Sakhai et al. 2025)', publisher: 'Iranian Journal of Psychiatry', url: 'https://europepmc.org/article/MED/40521282' },
  cdcAdhd: { title: 'About ADHD (2026)', publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/adhd/about/index.html' },
};

export const DIFFERENCES_GUIDES: Guide[] = [
  {
    slug: 'stuttering',
    title: 'Stuttering: what’s typical and how to help',
    emoji: '💬',
    summary: 'Common in young children and nobody’s fault. Everyday ways to make talking feel unhurried, and when to see a speech therapist.',
    minutes: 3,
    minMonths: 18,
    maxMonths: 120,
    topic: 'talking',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.elvs2009, R.elvs2013, R.yairi, R.singer, R.sfa, R.stamma, R.palin, R.chsa, R.lidcombe, R.restart],
    relatedTags: ['reading', 'song'],
    blocks: [
      { type: 'p', text: 'All young children stumble over words as their language grows fast: “um”, repeating a whole word, starting a sentence again. Stuttering is different: repeating sounds (“b-b-ball”), stretching them (“ssssun”), or getting stuck with no sound coming out. It often starts between 2 and 5, sometimes suddenly over a few days, and comes and goes.' },
      { type: 'h', text: 'Nobody’s fault' },
      { type: 'p', text: 'In a large Australian study, about 1 in 10 children had started stuttering by age 4. Those children were not shyer beforehand, and at 4 their language was, if anything, a little stronger. Stuttering is linked with how the brain organises speech, and it often runs in families. It isn’t caused by a fright, by parenting, or by speaking two languages.' },
      { type: 'h', text: 'Will it go away?' },
      { type: 'p', text: 'Many children stop, though often gradually, over a few years rather than months. No one can tell which children will. Getting help doesn’t mean waiting to find out.' },
      { type: 'h', text: 'Every day' },
      {
        type: 'list',
        items: [
          'Slow your own talk a little and pause before you answer. This makes talking feel unhurried, which helps more than telling them to slow down.',
          'When they get stuck, wait calmly and keep looking at them kindly. Don’t finish the word for them.',
          'Ask one question at a time, and comment more than you question.',
          'Listen to what they say, not how they say it.',
          'Five minutes of one-to-one play a few times a week, where they choose and you follow, with no phones.',
          'Take turns to talk at the table, so no one has to rush to get a word in.',
          'Watch tiredness: stuttering is often worse when children are tired.',
        ],
      },
      {
        type: 'table',
        head: ['Instead of', 'Try'],
        rows: [
          ['“Slow down.” “Take a breath.” “Say it properly.”', '“Take your time. I’m listening.”'],
          ['“Your speech was so good today!”', 'Praise what they told you: “What a funny story!”'],
          ['Pretending not to notice when they’re upset', '“That word was a bit sticky. That’s OK.” Then carry on.'],
        ],
      },
      { type: 'h', text: 'When to see a speech therapist' },
      {
        type: 'list',
        items: [
          'It has lasted 6 months or more, or is getting more frequent.',
          'It started after about 3½.',
          'You see tension or struggle, such as tight face, blinking or pushing, or they avoid talking.',
          'They seem upset or embarrassed by it.',
          'A parent or close relative stutters, or they have other speech or language difficulties.',
          'You’re worried, for any reason. You don’t have to wait and see.',
        ],
      },
      { type: 'callout', tone: 'science', text: 'Speech therapy for young children who stutter has good evidence from trials, and different programmes seem to work about equally well. Parents are usually taught how to help at home. If your therapist gives you a programme, follow their instructions, even where they differ from the general tips here. For a child who speaks two languages, ask for both to be assessed.' },
      { type: 'callout', tone: 'tip', text: 'At nursery or school, tell the teacher. Let your child decide whether to explain to classmates. A line they can use: “I stutter sometimes. Just wait, I’ll finish.” Teasing needs dealing with, just like any other.' },
    ],
  },
  {
    slug: 'when-learning-is-hard',
    title: 'When learning is hard: dyslexia and more',
    emoji: '🧩',
    summary: 'When reading, writing or maths stays much harder than for classmates despite good teaching: signs, first steps, what helps.',
    minutes: 4,
    minMonths: 48,
    maxMonths: 144,
    topic: 'school',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.ida, R.nhsDyslexia, R.apaSld, R.wwc, R.cochranePhonics, R.aapVision, R.brainTraining, R.iranDyslexia, R.cdcAdhd],
    relatedTags: ['reading'],
    blocks: [
      { type: 'p', text: 'Some children find reading, spelling, writing or maths much harder than their classmates, even with teaching that works well for others. Dyslexia, a difficulty with reading and spelling words, is the most common. Roughly 1 in 20 to 1 in 10 children are affected, depending on how it is measured. It has nothing to do with intelligence, and it isn’t laziness.' },
      { type: 'h', text: 'Signs worth talking to the teacher about' },
      {
        type: 'table',
        head: ['Age', 'You might notice'],
        rows: [
          ['3 to 5 years', 'Late talking, difficulty with rhymes or hearing the sounds in words, slow to learn letter names, or slow to name familiar colours and pictures. More worth watching if a parent found reading hard.'],
          ['5 to 8 years', 'Reading that stays slow and effortful, guessing words from their shape, spelling the same word different ways, mixing up the order of sounds.'],
          ['8 to 12 years', 'Avoiding reading, reading aloud slowly, written work that doesn’t show what they know, tummy aches before school, or saying “I’m stupid”.'],
        ],
      },
      { type: 'p', text: 'Writing letters backwards is common in all early readers and isn’t a sign on its own. None of these is a test: they are reasons to ask.' },
      { type: 'h', text: 'First steps' },
      {
        type: 'list',
        items: [
          'Talk to the teacher early. “Reading seems much harder for her than for her classmates. Could we look at this together?” Early help works best.',
          'Have hearing and eyesight checked, to rule out simple causes.',
          'Ask the school about an assessment, and what support they can offer.',
        ],
      },
      { type: 'h', text: 'What helps' },
      {
        type: 'list',
        items: [
          'Structured teaching of how sounds link to letters, little and often. This has the strongest evidence.',
          'Keep reading to them and enjoying books together, even once they can read, so their vocabulary and love of stories keep growing.',
          'Audiobooks, and taking turns: you read a page, they read a line.',
          'Praise effort and strategies, not speed.',
          'Find what they enjoy and are good at, and give it time.',
        ],
      },
      { type: 'h', text: 'What doesn’t' },
      { type: 'p', text: 'Coloured lenses or overlays, eye exercises and vision therapy don’t treat dyslexia: children with dyslexia have the same eyesight as others. Brain-training games improve the game, not reading. Be wary of any programme that promises a quick cure.' },
      { type: 'callout', tone: 'tip', text: 'Protect their confidence. “Reading is hard work for your brain. That doesn’t mean you’re not clever. We’ll find what helps.” Children with learning difficulties are more likely to feel anxious or low as they get older, so keep an eye on feelings as well as marks.' },
      { type: 'h', text: 'When to ask about attention' },
      { type: 'p', text: 'All children daydream, fidget and lose things sometimes. It’s worth asking your child’s doctor if you and the teacher both notice, over months, that they can’t keep their attention on things they’re able to do, can’t wait their turn, or are always on the go, and it is causing real trouble with learning or friends. Only a professional can assess this. It isn’t caused by sugar or bad parenting. See ADHD and active play.' },
    ],
  },
];
