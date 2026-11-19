import type { Guide } from './types';

/**
 * Guides for the "Character and life skills" shelf (release 1.6). Research:
 * research_notes/PlayNest phase 6 parenting hub research/04_character_resilience.md. Paraphrase only.
 * Contested findings (growth-mindset programmes, grit, school mindfulness) are said to be contested.
 */
const CHECKED = '2026-11-16';

const HARVARD = 'Harvard Center on the Developing Child';

const R = {
  harvardWp13: { title: 'Supportive relationships and active skill-building strengthen the foundations of resilience (Working Paper 13, 2015)', publisher: HARVARD, url: 'https://developingchild.harvard.edu/resources/supportive-relationships-and-active-skill-building-strengthen-the-foundations-of-resilience/' },
  harvardInBrief: { title: 'InBrief: the science of resilience (2015)', publisher: HARVARD, url: 'https://developingchild.harvard.edu/resources/inbrief-the-science-of-resilience/' },
  harvardStress: { title: 'Toxic stress', publisher: HARVARD, url: 'https://developingchild.harvard.edu/science/key-concepts/toxic-stress/' },
  harvardResilience: { title: 'Resilience', publisher: HARVARD, url: 'https://developingchild.harvard.edu/science/key-concepts/resilience/' },
  inflated: { title: 'When being called “incredibly good” is bad for children (Brummelman et al., 2014)', publisher: 'The Ohio State University', url: 'https://news.osu.edu/when-being-called-incredibly-good-is-bad-for-children/' },
  failureMindset: { title: 'Parents’ views of failure shape children’s beliefs about intelligence (Haimovitz & Dweck, 2016)', publisher: 'ScienceDaily', url: 'https://www.sciencedaily.com/releases/2016/04/160428132136.htm' },
  sisk: { title: 'Popular growth mindset educational interventions aren’t very effective (Sisk et al., 2018)', publisher: 'Michigan State University', url: 'https://msutoday.msu.edu/news/2018/study-finds-popular-growth-mindset-educational-interventions-arent-very-effective' },
  macnamara: { title: 'Education intervention doesn’t live up to its promise (Macnamara & Burgoyne, 2022)', publisher: 'Georgia Institute of Technology', url: 'https://news.gatech.edu/news/2022/11/07/researchers-find-education-intervention-doesnt-live-promise' },
  yeager: { title: 'National study bolsters case for teaching growth mindset (Yeager et al., 2019)', publisher: 'Education Week', url: 'https://www.edweek.org/leadership/national-study-bolsters-case-for-teaching-growth-mindset/2019/08' },
  deci: { title: 'A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation (Deci, Koestner & Ryan, 1999)', publisher: 'Psychological Bulletin', url: 'https://depts.washington.edu/techdocs/papers/deciExtrinsicRewardsAndIntrinsicMotivation99.pdf' },
  talwar: { title: 'Harsh discipline fosters dishonesty in young children (Talwar & Lee, 2011)', publisher: 'ScienceDaily', url: 'https://sciencedaily.com/releases/2011/07/110726111109.htm' },
  honestStories: { title: 'Certain stories motivate children to be honest (Lee et al., 2014)', publisher: 'McGill Reporter', url: 'https://reporter.mcgill.ca/stories-that-motivate-children-to-be-honest/' },
  warneken: { title: 'Baby’s helping hands (Warneken & Tomasello, 2006)', publisher: 'Max Planck Society', url: 'https://www.mpg.de/532681/pressRelease20060302' },
  apaHelping: { title: 'Kids’ helping', publisher: 'American Psychological Association, Monitor on Psychology (2006)', url: 'https://www.apa.org/monitor/dec06/kids' },
};

export const GROWING_GUIDES: Guide[] = [
  {
    slug: 'resilience',
    title: 'Raising a resilient child',
    emoji: '🌱',
    summary: 'A steady grown-up, small doses of struggle, and problems solved out loud.',
    minutes: 4,
    minMonths: 12,
    maxMonths: 144,
    topic: 'growing',
    checkedOn: CHECKED,
    sources: ['harvard-ef-guide'],
    refs: [R.harvardWp13, R.harvardInBrief, R.harvardStress, R.harvardResilience],
    relatedTags: ['building', 'strategy'],
    blocks: [
      { type: 'p', text: 'Resilience isn’t a gift that some children are born with. Researchers describe it as “ordinary magic”: everyday things like a close relationship, growing skills and a sense of belonging, all working together. It can be built at any age.' },
      { type: 'h', text: 'What protects children most' },
      { type: 'p', text: 'Children who cope well with hard times have usually had at least one steady, caring adult on their side. That relationship works like a buffer. The same stress feels very different when someone safe is there to help.' },
      {
        type: 'table',
        head: ['Kind of stress', 'What it looks like', 'What helps'],
        rows: [
          ['Everyday', 'A first day at nursery, an injection, losing a game', 'You nearby. This kind is a normal part of growing up.'],
          ['Hard but short', 'A death in the family, a move, an illness', 'Extra comfort, time and familiar routines, so it stays manageable.'],
          ['Too much for too long', 'Violence, neglect, or hardship with no one to turn to', 'More support from caring adults, and help from outside the family.'],
        ],
      },
      { type: 'h', text: 'Let them struggle a little' },
      {
        type: 'steps',
        items: [
          { title: 'Wait a few seconds', text: 'When they get stuck, count to five in your head before you step in. Many children find the next move themselves.' },
          { title: 'Give the smallest help', text: 'A hint, or holding one piece steady, rather than taking over. Researchers call this scaffolding.' },
          { title: 'Think out loud', text: '“The tower fell. What could we try? Wider at the bottom?” They learn how you solve problems.' },
          { title: 'Talk it over afterwards', text: '“What worked? What would you try next time?”' },
        ],
      },
      {
        type: 'table',
        head: ['Age', 'Try'],
        rows: [
          ['1 to 3', 'Keep routines predictable. Let them try the shape sorter or the step, and help with just the next bit.'],
          ['3 to 5', 'Offer two ideas instead of fixing it for them. Practise short goodbyes that always end with you coming back.'],
          ['6 to 8', 'Let them handle small problems, like a forgotten book or a squabble with a friend. Tell them about your own small mistakes and how you coped.'],
          ['9 to 12', 'Coach rather than rescue: “What are your options?” Let safe consequences happen. Help them have another trusted adult, like a grandparent or teacher.'],
        ],
      },
      { type: 'callout', tone: 'science', text: 'That steady, supportive relationships protect children is one of the most consistent findings in child development. Particular “resilience-building” techniques have much less research behind them. A caring adult protects a child, but it isn’t a guarantee.' },
      { type: 'callout', tone: 'safety', text: 'Hardship doesn’t toughen children up on its own. Only challenges they can manage, with support, help them grow. If your child is facing something big that lasts, or seems stuck in worry or sadness for weeks, talk to your doctor.' },
    ],
  },
  {
    slug: 'praise-and-confidence',
    title: 'Praise, confidence and mindset',
    emoji: '🌟',
    summary: 'What to praise, why “so clever” can backfire, and what the mindset research really shows.',
    minutes: 4,
    minMonths: 12,
    maxMonths: 144,
    topic: 'growing',
    checkedOn: CHECKED,
    sources: ['process-praise'],
    refs: [R.inflated, R.failureMindset, R.sisk, R.macnamara, R.yeager, R.deci],
    relatedTags: ['building', 'strategy'],
    blocks: [
      { type: 'p', text: 'Praise is good for children. What you praise, and how, makes a difference.' },
      {
        type: 'table',
        head: ['Try', 'It sounds like', 'In place of'],
        rows: [
          ['Name what they did', '“You put every block back in the box.”', '“Good job!” every time'],
          ['Notice effort and strategy', '“You tried three ways until one worked.”', '“You’re so clever.”'],
          ['Keep it true', '“That bridge is really strong.”', '“That’s the best drawing ever!”'],
          ['Praise kindness too', '“You let her go first. That was kind.”', 'Praising only results'],
        ],
      },
      { type: 'h', text: 'Why it matters' },
      { type: 'p', text: 'In a study filmed at home, toddlers who heard more praise for effort and strategy were more likely to enjoy challenges five years later. Praise for being smart had no such link. The study was small. Early lab studies found that children praised for being clever avoided hard tasks, but a large repeat study didn’t, so treat it as a hint.' },
      { type: 'p', text: 'Over-the-top praise, like “incredibly good!”, can backfire for children who already feel unsure of themselves. In one experiment it nudged them towards easier tasks. Adults tend to give this kind of praise most to the children it helps least. Calm, specific words work better.' },
      { type: 'h', text: 'When they make a mistake' },
      { type: 'p', text: 'How you react to mistakes may matter more than what you believe about talent. In one study, children picked up their parents’ view of failure: whether it was a disaster, or something to learn from.' },
      {
        type: 'list',
        items: [
          'Show curiosity, not alarm: “What happened? What could we try next?”',
          'Talk about your own mistakes as useful information.',
          'Skip comparisons with brothers, sisters, cousins or classmates.',
          'With older children, talk about how skills grow with practice and better strategies, not effort alone.',
        ],
      },
      { type: 'h', text: 'What about growth mindset?' },
      { type: 'p', text: 'A growth mindset is the belief that abilities can grow. It’s a helpful way to talk, but short school programmes teaching it have shown small effects at best. The largest reviews disagree about whether they change grades at all. One large study found a small gain only for students who were struggling. So use the idea freely, but don’t expect it to work wonders.' },
      { type: 'h', text: 'Stickers and rewards' },
      { type: 'p', text: 'Stickers and treats can get a dull task going, like brushing teeth, or help start a new habit. Fade them out over a few weeks. Be careful about rewarding things your child already enjoys, like reading or drawing. In experiments, children who expected a reward for an activity were less interested in it later. A surprise “we did it!” celebration doesn’t seem to have that effect.' },
      { type: 'callout', tone: 'tip', text: 'You don’t need to ration warmth. Hugs, smiles and “I love spending time with you” aren’t praise for doing well, and children need lots of them.' },
    ],
  },
  {
    slug: 'honest-and-kind',
    title: 'Raising honest, kind children',
    emoji: '💝',
    summary: 'Why small children lie, how to make the truth easy to tell, and how kindness grows.',
    minutes: 4,
    minMonths: 24,
    maxMonths: 144,
    topic: 'growing',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.talwar, R.honestStories, R.warneken, R.apaHelping],
    relatedTags: ['pretend', 'reading'],
    blocks: [
      { type: 'p', text: 'Children are born ready to help, and learning to lie is a normal step in growing up. Both are shaped more by everyday family life than by lectures.' },
      { type: 'h', text: 'Lying is a normal stage' },
      { type: 'p', text: 'Most children start telling small lies at around 2 to 3. It shows their thinking is growing: they’ve worked out that you can’t see inside their head. An early fib isn’t a sign of bad character, and lies get more convincing with age, so how you respond matters.' },
      { type: 'h', text: 'Make the truth easy to tell' },
      {
        type: 'steps',
        items: [
          { title: 'Don’t set traps', text: 'If you saw it happen, say what you saw: “There’s juice on the floor. Let’s clean it up.” Asking “Did you spill it?” invites a lie.' },
          { title: 'Make owning up safe', text: '“I’m really glad you told me. Now let’s put it right.” Keep the consequence small and about fixing things.' },
          { title: 'Say that honesty pleases you', text: 'Tell them you won’t be angry about the truth, and mean it. Read stories where telling the truth goes well.' },
          { title: 'Be honest yourself', text: 'Children notice adults’ small lies. As they get older, talk openly about polite white lies and when they’re okay.' },
        ],
      },
      { type: 'callout', tone: 'science', text: 'In a study of two schools, young children from a school with harsh punishment were much more likely to lie about breaking a small rule, and better at keeping the lie going. In another experiment, a story where a child is praised for honesty made children more likely to own up, while stories warning of punishment didn’t. Harsh punishment seems to teach better lying, not more honesty. These are small studies, but they agree.' },
      { type: 'h', text: 'Growing kindness' },
      { type: 'p', text: 'By around 18 months, many toddlers help an adult without being asked, for example by picking up something that was dropped. You don’t need to put kindness into a child. You need to give it room.' },
      {
        type: 'list',
        items: [
          'Accept their help with real jobs, even if it’s slower, and thank them warmly.',
          'Skip treats as payment for helping. In one study, toddlers rewarded with toys later helped less. Praise didn’t have that effect.',
          'When you correct them, explain the effect on the other person: “He’s crying because his tower fell. How could we help?”',
          'Ask about feelings in stories: “How do you think she felt?”',
          'Let older children help with family acts of care: cooking for a neighbour who is ill, visiting grandparents, or choosing a cause.',
        ],
      },
      { type: 'callout', tone: 'tip', text: 'Children copy what they see. How you talk about neighbours, relatives, people on the news and yourself teaches more than any rule. Kindness is worth it for its own sake: claims that it makes children happier have little research behind them.' },
    ],
  },
];
