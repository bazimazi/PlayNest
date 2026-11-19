import type { Guide } from './types';

/**
 * Screens with babies and young children (release 1.9). The original `screens` guide compares the bodies' time limits; this
 * one is the practical companion: what the studies show, which uses experts are happiest with, choosing content, switching
 * off and long trips. Research: research_notes/PlayNest phase 9 research round 6/01_screens_and_young_children.md.
 *
 * Rules from the note's "must not" list: no "screens cause autism, speech delay or ADHD"; no threshold presented as proven;
 * pace alone isn't said to harm attention (Hinten 2025 found no effect); no odds ratios without base rates; warnings before
 * switching off are optional (Hiniker 2016 linked them with more upset); heavy use is never framed as neglect. Iranian
 * studies with quality problems (Karbasi Amel 2025, Fadaei 2024) are not cited.
 */
const CHECKED = '2026-11-17';

const R = {
  eystag: { title: 'Report on screen use by children aged under 5 (Early Years Screen Time Advisory Group)', publisher: 'Department for Education and Department of Health and Social Care, England (March 2026)', url: 'https://www.gov.uk/government/publications/screen-use-by-children-aged-under-5' },
  bestStart: { title: 'Baby and toddler screen time guidance', publisher: 'Best Start in Life, England (updated June 2026)', url: 'https://www.beststartinlife.gov.uk/screen-time-under-5s' },
  aap5cs: { title: 'Kids and screen time: 5 C’s questions for toddlers and preschoolers', publisher: 'American Academy of Pediatrics (HealthyChildren.org, 2024)', url: 'https://www.healthychildren.org/English/family-life/Media/Pages/kids-and-screen-time-5-cs-questions-for-toddlers-and-preschoolers.aspx' },
  madigan2020: { title: 'Screen use and child language skills: a systematic review and meta-analysis (Madigan et al. 2020)', publisher: 'JAMA Pediatrics', url: 'https://doi.org/10.1001/jamapediatrics.2020.0327' },
  takahashi: { title: 'Screen time at 1 year and developmental delay at 2 and 4 years (Takahashi et al. 2023)', publisher: 'JAMA Pediatrics', url: 'https://doi.org/10.1001/jamapediatrics.2023.3057' },
  brushe: { title: 'Screen time and parent–child talk at 12 to 36 months (Brushe et al. 2024)', publisher: 'JAMA Pediatrics', url: 'https://doi.org/10.1001/jamapediatrics.2023.6790' },
  kirkorian: { title: 'The impact of background television on parent–child interaction (Kirkorian et al. 2009)', publisher: 'Child Development', url: 'https://doi.org/10.1111/j.1467-8624.2009.01337.x' },
  myers: { title: 'Baby FaceTime: can toddlers learn from online video chat? (Myers et al. 2017)', publisher: 'Developmental Science', url: 'https://doi.org/10.1111/desc.12430' },
  strouse: { title: 'Learning from video: a meta-analysis of the video deficit in children aged 0 to 6 (Strouse & Samson 2021)', publisher: 'Child Development', url: 'https://doi.org/10.1111/cdev.13429' },
  radesky: { title: 'Using mobile devices to calm children aged 3 to 5, and emotional reactivity (Radesky et al. 2023)', publisher: 'JAMA Pediatrics', url: 'https://doi.org/10.1001/jamapediatrics.2022.4793' },
  hinten: { title: 'Short-term effects of media on children’s attention and executive functions: a meta-analysis (Hinten et al. 2025)', publisher: 'Developmental Science', url: 'https://doi.org/10.1111/desc.70069' },
  meyer: { title: 'Advertising in young children’s apps: a content analysis (Meyer et al. 2019)', publisher: 'Journal of Developmental & Behavioral Pediatrics', url: 'https://doi.org/10.1097/dbp.0000000000000622' },
  machell: { title: 'Parent-focused screen-use interventions and development in young children: a meta-analysis (Machell et al. 2026)', publisher: 'International Journal of Behavioral Nutrition and Physical Activity', url: 'https://doi.org/10.1186/s12966-026-01919-8' },
};

export const SCREENS_YOUNG_GUIDES: Guide[] = [
  {
    slug: 'screens-young-children',
    title: 'Screens with babies and young children: what helps',
    emoji: '📺',
    summary: 'What the studies really show, the screen uses experts are happiest with, choosing shows and apps, and making switching off easier.',
    minutes: 4,
    minMonths: 0,
    maxMonths: 96,
    topic: 'screens',
    checkedOn: CHECKED,
    sources: ['aap-screen-time', 'who-under5'],
    refs: [R.eystag, R.bestStart, R.aap5cs, R.madigan2020, R.takahashi, R.brushe, R.kirkorian, R.myers, R.strouse, R.radesky, R.hinten, R.meyer, R.machell],
    relatedTags: ['everyday', 'calm-down', 'reading'],
    blocks: [
      { type: 'p', text: 'Screens are part of family life. This guide isn’t about zero screens. It’s about which uses help, which times to keep screen-free, and what to do when you need a break. For the time limits different health bodies suggest, see Screens: what the experts say.' },
      { type: 'h', text: 'What the research shows, honestly' },
      {
        type: 'table',
        head: ['What studies found', 'How big', 'What it means for you'],
        rows: [
          ['More screen time at 1 to 3 years went with slightly lower language and development scores later (large studies in Canada and Japan)', 'Small, and clearest in children watching many hours a day', 'Protect time for talk and play'],
          ['When a TV is on, parents and children say fewer words to each other, even if nobody is watching', 'Each extra minute of screen time went with about one fewer back-and-forth at age 3', 'Switch the TV off when no one is watching'],
          ['Watching together and talking about it went with better language and thinking', 'Small, and helpful', 'Watch with them when you can'],
          ['Toddlers learned new words from a live person on a video call, but not from a recording', 'Small experiments', 'Video calls with family are fine'],
          ['Good-quality shows made for preschoolers helped some school skills', 'Modest, for 3 to 5 year olds, not babies', 'Choose shows made for their age'],
        ],
      },
      { type: 'callout', tone: 'science', text: 'Most of this research shows links, not causes, and it can work both ways. Children who find it harder to calm down are often given screens more, and parents who are exhausted or low tend to use screens more. That is a reason for support, not blame. England’s 2026 expert panel found no proven safe or unsafe number of minutes: today’s limits are careful expert judgement.' },
      { type: 'h', text: 'The screen uses experts are happiest with' },
      {
        type: 'list',
        items: [
          'Video calls with grandparents and family, with your baby on your lap and you joining in: wave, point and repeat what they say.',
          'Looking at family photos and videos together, and talking about who is in them.',
          'A story on a screen that you read with them, the way you would a book.',
          'For 3 to 5 year olds, a calm, good-quality show that you watch and talk about together.',
        ],
      },
      { type: 'h', text: 'Choosing what they watch and play' },
      {
        type: 'list',
        items: [
          'Calm shows with clear talk and simple stories, made for your child’s age.',
          'Turn off autoplay and choose the next video yourself, or make a short playlist. Then it ends when you planned, not when the app decides.',
          'Avoid endless streams of short clips. Experts are most cautious about these, though there is no research yet in young children.',
          'Look for apps that get children thinking, talking and making things, not tapping for prizes, pop-ups or coins.',
          'Before a “free” app, check for adverts and in-app purchases. Turn purchases off or set them to need your password.',
          'Check that parental settings work on every app and every connection your family uses.',
        ],
      },
      { type: 'callout', tone: 'tip', text: 'Under about 3, children learn far more from you than from a screen. If they meet a word in a show, use it in real life: “Look, a real duck!”' },
      { type: 'h', text: 'Times to keep screen-free' },
      {
        type: 'list',
        items: [
          'Meals. Chat, name the food, copy each other’s faces, or play I spy. It can feel harder at first and usually gets easier.',
          'The hour before bed, and bedrooms. Evening screens are linked with later bedtimes and shorter sleep in toddlers.',
          'Background TV. If nobody is watching, switch it off.',
        ],
      },
      { type: 'h', text: 'When a screen calms things down' },
      { type: 'p', text: 'A screen can settle an upset child fast, and sometimes that’s fine. If it becomes the main way, children may get less practice at calming down. Most of the time, try a hug, a drink, a song or naming the feeling first, and keep the screen for when nothing else works.' },
      { type: 'h', text: 'Making switching off easier' },
      {
        type: 'steps',
        items: [
          { title: 'Decide ahead', text: 'Pick screen times before the moment, like “one show after nap”. Predictable times usually mean fewer battles.' },
          { title: 'Stop at a natural end', text: 'The end of an episode or a level is easier than the middle of one.' },
          { title: 'Have something good next', text: 'A snack, a game outside, the bath: something to move on to.' },
          { title: 'Let the timer end it', text: 'A timer the child can see, or the end of the playlist, means the device stops it, not you.' },
          { title: 'Warnings are optional', text: 'Some children like a heads-up and some get more upset by one. Notice which suits yours.' },
        ],
      },
      { type: 'h', text: 'Long trips and when you need a break' },
      { type: 'p', text: 'Need 20 minutes to cook, rest or get through a waiting room? A calm show you chose beforehand is a reasonable tool. On a long journey, start with songs, I spy and snacks, and save the tablet for the long middle stretch. Download the shows beforehand and bring headphones.' },
      { type: 'callout', tone: 'safety', text: 'If you’re worried about your child’s talking, hearing, eye contact or play, or they have lost words or skills they had, see your doctor or health worker. Don’t wait to see whether cutting back on screens helps. Violent or adult content isn’t for young children, even in the background.' },
      { type: 'callout', tone: 'science', text: 'What we don’t know yet: whether screens cause the small differences seen, and how much; whether fast-paced shows harm attention (a 2025 review of short-term studies found pace alone made no difference); what short-form video does to young children, because no one has studied it; and whether cutting back improves development. Trials show families can cut back, with early signs of fewer behaviour problems.' },
      { type: 'callout', tone: 'tip', text: 'This week, notice one screen moment you could swap for talk or play. One is enough.' },
    ],
  },
];
