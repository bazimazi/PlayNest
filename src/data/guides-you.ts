import type { Guide } from './types';

/**
 * Guides for the "you" area of the parenting hub (release 1.6): the parent's own temper, energy, relationship and phone.
 * Research: research_notes/PlayNest phase 6 parenting hub research/05_family_life_and_parents.md. Paraphrase only.
 * Where a study was seen only as an abstract, the wording stays general and gives no exact figure.
 */
const CHECKED = '2026-11-16';

const R = {
  wangKenny: { title: 'Harsh verbal discipline and adolescents’ conduct problems and depressive symptoms', publisher: 'Wang & Kenny, Child Development (2014)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3875601' },
  stillFace: { title: 'Infant temperament and recovery in the still-face paradigm', publisher: 'Yoo & Reeb-Sutherland, Infant Behavior and Development (2013)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3674173' },
  burnoutGlobe: { title: 'Parental burnout around the globe: a 42-country study', publisher: 'Roskam et al., Affective Science (2021)', url: 'https://research.tilburguniversity.edu/en/publications/parental-burnout-around-the-globe-a-42-country-study/' },
  burnoutTrial: { title: 'Online group interventions for parental burnout: a randomised trial', publisher: 'SWPS University (2025)', url: 'https://share.swps.edu.pl/handle/swps/2158' },
  bayot: { title: 'Treating parental burnout: a mindfulness and compassion approach', publisher: 'Bayot et al., Children (2024)', url: 'https://orbi.uliege.be/handle/2268/323893' },
  mindfulParenting: { title: 'Mindful parenting interventions: a meta-analysis', publisher: 'Springer, Mindfulness (2021)', url: 'https://link.springer.com/article/10.1007%2Fs12671-021-01728-z' },
  doss: { title: 'Transition to parenthood and relationship quality: an 8-year study', publisher: 'Doss et al., Journal of Personality and Social Psychology (2009), via ScienceDaily', url: 'https://sciencedaily.com/releases/2009/04/090408145351.htm' },
  bbh: { title: 'Bringing Baby Home: a randomised trial of a couples workshop', publisher: 'Shapiro, Gottman & Fink, Psychological Reports', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8136247' },
  familyFoundations: { title: 'Establishing Family Foundations: a randomised trial', publisher: 'Feinberg & Kan, Journal of Family Psychology (2008)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3178882' },
  paulson: { title: 'Prenatal and postpartum depression in fathers: a meta-analysis', publisher: 'Paulson & Bazemore, JAMA (2010), via RTI International', url: 'https://rti.org/publication/prenatal-postpartum-depression-fathers-association-maternal-depression-meta-analysis' },
  technoference: { title: 'Technoference: parent distraction with technology and child behaviour problems', publisher: 'McDaniel & Radesky, Child Development (2018)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5681450/' },
};

export const YOU_GUIDES: Guide[] = [
  {
    slug: 'keeping-your-cool',
    title: 'Keeping your cool',
    emoji: '🧊',
    summary: 'Every parent gets angry. A simple plan for the hot moments, and what to do afterwards.',
    minutes: 3,
    minMonths: 0,
    maxMonths: 144,
    topic: 'you',
    checkedOn: CHECKED,
    sources: ['aap-parent-break'],
    refs: [R.wangKenny, R.stillFace],
    relatedTags: ['calm-down'],
    blocks: [
      { type: 'p', text: 'Anger is part of being a parent. It tells you something matters, or that you’ve run out of room. The aim isn’t to never feel it. It’s to have a plan for the moments when it boils up, so it comes out as fewer shouts and more pauses.' },
      { type: 'callout', tone: 'science', text: 'In a study of nearly 1,000 families, shouting, swearing and insults at age 13 went with more behaviour problems and low mood a year later. Being warm the rest of the time didn’t cancel it out. Behaviour and shouting fed each other, round and round. It was a survey, not a trial, but it’s a good reason to have a plan, not a reason for guilt.' },
      { type: 'h', text: 'Know your early signs' },
      { type: 'p', text: 'Anger usually builds before it bursts. A hot face, a tight jaw, a louder voice, or the thought “here we go again” are all signals. Name it to yourself: “I’m getting angry.” Noticing early gives you a few seconds to choose.' },
      {
        type: 'steps',
        items: [
          { title: 'Make it safe', text: 'Put a baby down in the cot or another safe place. Make sure an older child isn’t in danger. Never shake a baby.' },
          { title: 'Say you need a minute', text: '“I’m too cross to talk. I’m going to the kitchen to calm down, and I’ll be back.” That shows your child how it’s done.' },
          { title: 'Breathe and move', text: 'Breathe out slowly, longer than you breathe in. Splash your face with cold water, count, or walk round the room.' },
          { title: 'Come back low and slow', text: 'Get down to their level, lower your voice and use fewer words.' },
          { title: 'Decide the rest later', text: 'A punishment chosen in anger is usually too big. Deal with the behaviour once you’re both calm.' },
        ],
      },
      { type: 'h', text: 'Lower the load' },
      { type: 'list', items: ['Hungry, lonely and tired make anyone shorter-tempered. Eat something, and sit down when you can.', 'Notice the times of day it blows up, and plan for them: a snack before the school run, an earlier start to bedtime.', 'Check what you’re expecting. A two-year-old who won’t share isn’t being difficult: that’s two.', 'If you’re worn out most of the time, read “Running on empty”.'] },
      { type: 'h', text: 'Afterwards' },
      { type: 'p', text: 'Go back when you’re calm. Say what you did, without “but you made me”: “I shouted and called you a name. That wasn’t okay, and I’m sorry.” Then reconnect with a cuddle or a game. Our guide “Saying sorry after you lose it” has more. Making up matters, and so does shouting less often: the aim is both.' },
      { type: 'callout', tone: 'safety', text: 'If you feel you might hurt your child, put them somewhere safe, step away and call someone now. If anger feels out of control, comes most days, or you’re hitting, you deserve help: talk to your doctor or a parenting helpline. Help, top right, lists people to call.' },
    ],
  },
  {
    slug: 'running-on-empty',
    title: 'Running on empty: parent burnout',
    emoji: '🔋',
    summary: 'When parenting wears you out completely. The signs, why it happens, and small ways back.',
    minutes: 3,
    minMonths: 0,
    maxMonths: 144,
    topic: 'you',
    checkedOn: CHECKED,
    sources: ['aap-parent-break', 'nhs-postnatal-depression'],
    refs: [R.burnoutGlobe, R.burnoutTrial, R.bayot, R.mindfulParenting],
    blocks: [
      { type: 'p', text: 'Parent burnout is more than a bad week. Researchers describe it as exhaustion that comes from parenting itself, and it can happen to loving, careful parents. It is not a sign you’re doing it wrong. Often it’s a sign you’ve been doing too much, for too long, with too little help.' },
      {
        type: 'table',
        head: ['Signs', 'It can feel like'],
        rows: [
          ['Worn out by parenting', 'Tired before the day starts, even after sleep'],
          ['Feeling far away from your child', 'Going through the motions, on autopilot'],
          ['Little joy left', 'Fed up with things you used to enjoy together'],
          ['Not feeling like yourself', '“I’m not the parent I used to be.”'],
        ],
      },
      { type: 'h', text: 'Stress on one side, support on the other' },
      { type: 'p', text: 'One useful way to see it is as a set of scales. On one side are the stresses: sleep loss, illness, money worries, doing it alone, and high standards. On the other are the things that refill you: rest, help, time for yourself, and someone sharing the load. Burnout grows when the stresses stay heavier for a long time. So the way back is to take a little off one side and add a little to the other.' },
      {
        type: 'steps',
        items: [
          { title: 'Drop one standard', text: 'Pick one thing to do less well this week: simpler meals, less tidying, more of yesterday’s game. Aiming for perfect is a known risk for burnout.' },
          { title: 'Ask for one specific thing', text: '“Could you take her to the park on Saturday morning?” works better than “I need more help.” Grandparents, friends and partners often want to help and don’t know how.' },
          { title: 'Share the load at home', text: 'In one study, parents who felt more backed up by their partner reported less burnout. Talk about who does what, including the remembering.' },
          { title: 'Find ten minutes a day', text: 'A walk, a shower, a call to a friend. Small and regular beats big and rare.' },
          { title: 'Be kind to yourself', text: 'Try a hand on your chest and the words: “This is hard. Lots of parents feel this.” Then do one small thing that helps.' },
        ],
      },
      { type: 'callout', tone: 'science', text: 'Burnout seems more common in countries where families are expected to manage alone, though there are no figures for many countries. Small trials of 8-week group courses, some based on mindfulness and some on rebalancing stress, helped parents about equally. Research on mindful parenting and self-compassion on their own is modest and mixed. Support and time for yourself seem to matter most.' },
      { type: 'callout', tone: 'safety', text: 'Burnout and depression overlap. If you feel low or hopeless most days for two weeks or more, can’t enjoy anything, or have thoughts of escaping or harming yourself, talk to your doctor soon. Depression after a baby happens to fathers as well as mothers. If you might hurt yourself or your child, get help now: Help, top right, has people to call.' },
    ],
  },
  {
    slug: 'you-two-after-baby',
    title: 'You two, after the baby',
    emoji: '💞',
    summary: 'Why couples often feel more strain after a baby, and small ways to stay a team.',
    minutes: 3,
    minMonths: 0,
    maxMonths: 24,
    topic: 'you',
    checkedOn: CHECKED,
    sources: ['nhs-postnatal-depression', 'aap-sleepy-parents'],
    refs: [R.doss, R.bbh, R.familyFoundations, R.paulson],
    blocks: [
      { type: 'p', text: 'If you and your partner are snapping at each other more since the baby came, you’re in good company. Big studies have found that couples’ happiness with each other often dips after a first baby, on average by a small to moderate amount, for mothers and fathers alike. It isn’t a sign that something is wrong with you. Sleep loss, new jobs and less time alone would strain anyone.' },
      { type: 'h', text: 'Make the invisible work visible' },
      { type: 'p', text: 'A lot of baby work is hidden: remembering the jab appointment, noticing the nappies are running out, knowing which sleepsuit fits. Write every job down together and agree who owns each one. Owning a job means remembering it too, not just doing it when asked.' },
      {
        type: 'steps',
        items: [
          { title: 'Plan the nights', text: 'Try to protect one longer stretch of sleep for each of you. If one of you breastfeeds, the other can take nappies, burping, settling or the early morning.' },
          { title: 'Check in for ten minutes', text: '“What was hardest today? What helped?” A short daily check-in keeps small things small.' },
          { title: 'Say thank you out loud', text: 'Notice what the other one did. Feeling appreciated is one of the things couple programmes try to build.' },
          { title: 'Let them do it their way', text: 'If it’s safe, let your partner bath or dress the baby differently from you. Correcting every step can push a parent out.' },
          { title: 'Look again every few weeks', text: 'The baby changes, and so should the plan.' },
        ],
      },
      { type: 'callout', tone: 'science', text: 'Couple programmes such as Family Foundations and Bringing Baby Home have shown benefits in some trials, including more support between parents and, in one, lower depression in mothers. In one trial, sharing baby tasks more equally went with both parents being happier with how the work was split. Most trials were small and run by the people who designed them.' },
      { type: 'h', text: 'Fathers get depressed too' },
      { type: 'p', text: 'A large review found that about 1 in 10 fathers have depression around the time of a birth, and it’s more likely when the mother is struggling too. In men it can look like irritability, pulling away, working longer hours or drinking more, not only sadness. Check on each other.' },
      { type: 'callout', tone: 'safety', text: 'If either of you feels low, anxious or hopeless most days for two weeks or more, talk to your doctor or health visitor. It’s common and treatable, and the earlier the better. If arguments involve fear, threats or being hurt, that is not ordinary strain: Help, top right, lists people to call.' },
    ],
  },
  {
    slug: 'phone-and-presence',
    title: 'Your phone and your child',
    emoji: '📵',
    summary: 'Not zero phone, just a few phone-free moments. Rules that apply to grown-ups too.',
    minutes: 2,
    minMonths: 0,
    maxMonths: 144,
    topic: 'screens',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.technoference],
    relatedTags: ['everyday'],
    blocks: [
      { type: 'p', text: 'Phones are part of how we work, keep in touch and get through the day. This isn’t about guilt or putting yours in a drawer for good. It’s about protecting a few moments when your child has all of you.' },
      { type: 'callout', tone: 'science', text: 'In one study of 170 families with young children, about half the parents said their phone interrupted time with their child three or more times a day. More interruptions went with slightly more behaviour problems. A follow-up suggested it works both ways: a child’s hard behaviour stresses parents, who then reach for the phone more. The effects were small, and these were surveys, so they can’t show what causes what.' },
      { type: 'h', text: 'A few phone-free moments' },
      { type: 'list', items: ['Meals, for everyone at the table.', 'The first few minutes after you pick them up, or get home.', 'Bedtime: stories, songs and the goodnight chat.', 'When they’re showing you something, or telling you about their day.'] },
      {
        type: 'steps',
        items: [
          { title: 'Make it easy', text: 'Turn off the alerts you don’t need. Leave the phone in another room or out of reach while you play.' },
          { title: 'Say what you’re doing', text: 'If you must use it, tell them: “I’m checking what time your class starts.” Then put it away.' },
          { title: 'Notice the reach', text: 'If you pick it up to escape a hard moment, try another short break instead: a stretch, a glass of water, a breath by the window.' },
          { title: 'Make it a family rule', text: '“No phones at dinner” works best when it applies to the grown-ups too. Older children can help write the rules, and remind you.' },
        ],
      },
      { type: 'callout', tone: 'tip', text: 'You don’t need to get it right every time. Looking up from the screen and saying “Sorry, tell me again. I’m listening now” is a good habit in itself.' },
    ],
  },
];
