import type { Guide } from './types';

/**
 * Online safety without the fear, and home alone and out alone (release 2.0). Research:
 * research_notes/PlayNest phase 10 research round 7/06_online_safety_and_home_alone.md.
 *
 * Rules from the note: no sign list used as a verdict; no claim that parental controls or monitoring prevent abuse (the
 * evidence is surveys and small, mixed effects); never "report only if an adult is involved" (offenders pose as children);
 * "self-generated" is never used, and children are never to blame; don't pay, stop replying, block, keep the messages, don't
 * forward the picture itself; no Barclays forecast and no "1,300 photos" (both unsourced); no "stranger danger". Home alone:
 * no legal age anywhere it was checked, bodies differ (AAP, NSPCC, a stricter NHS page), so no age is called "fine". Iranian
 * law (the 1399 child protection law) and Iranian numbers are Persian only; the cyber police line isn't used until test-called.
 */
const CHECKED = '2026-11-19';

const R = {
  nspccGrooming: { title: 'Grooming (research briefing)', publisher: 'NSPCC Learning', url: 'https://learning.nspcc.org.uk/research-resources/briefings/grooming' },
  ceop: { title: 'Online grooming', publisher: 'CEOP Education, National Crime Agency', url: 'https://www.ceopeducation.co.uk/parents/articles/online-grooming/' },
  nca: { title: 'NCA issues urgent warning about sextortion', publisher: 'National Crime Agency (April 2024)', url: 'https://nationalcrimeagency.gov.uk/news/nca-issues-urgent-warning-about-sextortion' },
  ncmec: { title: 'Sextortion', publisher: 'National Center for Missing & Exploited Children', url: 'https://www.missingkids.org/theissues/sextortion' },
  iwf: { title: '“Self-generated” child sexual abuse (Annual Report 2023)', publisher: 'Internet Watch Foundation', url: 'https://www.iwf.org.uk/annual-report-2023/trends-and-data/self-generated-child-sex-abuse/' },
  unicef: { title: 'Keep your child safe online', publisher: 'UNICEF Parenting', url: 'https://www.unicef.org/parenting/child-care/keep-your-child-safe-online' },
  euKids: { title: 'How can parents support children’s internet safety? (Duerager & Livingstone 2012)', publisher: 'EU Kids Online, London School of Economics', url: 'https://researchonline.lse.ac.uk/id/eprint/42872' },
  collier: { title: 'Does parental mediation of media influence child outcomes? A meta-analysis (Collier et al. 2016)', publisher: 'Developmental Psychology', url: 'https://doi.org/10.1037/dev0000108' },
  aapControls: { title: 'Parental controls for kids: setting safe and healthy media limits', publisher: 'American Academy of Pediatrics (HealthyChildren.org, 2024)', url: 'https://www.healthychildren.org/English/family-life/Media/Pages/parental-controls-for-kids-setting-safe-and-healthy-media-limits.aspx' },
  aapMonitoring: { title: 'Parental controls and digital monitoring (Q&A)', publisher: 'American Academy of Pediatrics, Center of Excellence on Social Media and Youth Mental Health (2023)', url: 'https://aap.org/en/patient-care/media-and-children/center-of-excellence-on-social-media-and-youth-mental-health/qa-portal/qa-portal-library/qa-portal-library-questions/parental-controls--digital-monitoring' },
  commissioner: { title: 'Who knows what about me?', publisher: 'Children’s Commissioner for England (2018)', url: 'https://assets.childrenscommissioner.gov.uk/wpuploads/2018/11/cco-who-knows-what-about-me.pdf' },
  sharenting: { title: 'Parents’ sharenting behaviours: a systematic review (2025)', publisher: 'F1000Research', url: 'https://doi.org/10.12688/f1000research.161540.2' },
  aapHomeAlone: { title: 'Is your child ready to stay home alone?', publisher: 'American Academy of Pediatrics (HealthyChildren.org, 2023)', url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Is-Your-Child-Ready-to-Stay-Home-Alone.aspx' },
  nspccHomeAlone: { title: 'Is my child ready to be left alone?', publisher: 'NSPCC', url: 'https://www.familysupportni.gov.uk/Content/uploads/userUploads/NSPCC%20Home%20Alone%20Guide.pdf' },
  govuk: { title: 'The law on leaving your child on their own', publisher: 'GOV.UK', url: 'https://www.gov.uk/law-on-leaving-your-child-home-alone' },
  norfolk: { title: 'Home alone', publisher: 'Just One Norfolk (NHS Norfolk and Waveney)', url: 'https://justonenorfolk.nhs.uk/staying-safe/staying-safe-in-the-home/home-alone' },
  stranger: { title: 'Child safety is more than a slogan: “stranger-danger” warnings not effective (McBride 2011)', publisher: 'US Office of Juvenile Justice and Delinquency Prevention', url: 'https://www.ojp.gov/library/publications/child-safety-more-slogan-stranger-danger-warnings-not-effective-keeping-kids' },
};

export const ONLINE_ALONE_GUIDES: Guide[] = [
  {
    slug: 'online-safety-calm',
    title: 'Online safety without the fear',
    emoji: '🛡️',
    summary: 'How grooming and threats over pictures work, what to say at each age, settings that help, and what to do if something happens.',
    minutes: 5,
    minMonths: 60,
    maxMonths: 144,
    topic: 'screens',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.nspccGrooming, R.ceop, R.nca, R.ncmec, R.iwf, R.unicef, R.euKids, R.collier, R.aapControls, R.aapMonitoring, R.commissioner, R.sharenting],
    blocks: [
      { type: 'p', text: 'Most of what children do online is fine, and fear doesn’t keep them safe. Being the person they tell does. Grooming means someone building a child’s trust in order to abuse them. Online, it can start in games, chat apps, social media or live streams.' },
      { type: 'h', text: 'How it usually works' },
      {
        type: 'list',
        items: [
          'Pretending to be a child, or a friend of a friend.',
          'Flattery, gifts and presents inside games.',
          'Asking to keep the chat a secret.',
          'Moving to a private chat or a different app.',
          'Asking for photos, videos or personal details.',
          'Messaging many children to see who replies.',
        ],
      },
      { type: 'callout', tone: 'science', text: 'This isn’t only a teenage risk. Of the abuse images a UK internet charity removed in 2023 that children had been tricked or pressured into filming themselves, about 4 in 10 showed children aged 7 to 10. Most were filmed at home, with the abuser far away. These are counts of images found, not of children harmed. Children are never to blame.' },
      { type: 'h', text: 'What to say, by age' },
      {
        type: 'table',
        head: ['Age', 'Try saying'],
        rows: [
          ['5 to 7', '“If anything on a screen makes you feel worried, yucky or confused, come and show me. You won’t be in trouble.” “We only chat with people we know in real life.”'],
          ['8 to 10', '“People online aren’t always who they say. If someone asks for photos, asks you to keep a secret from me, or wants to chat on a different app, that’s a tell-me moment.”'],
          ['11 to 12', '“If anyone ever threatens to share a picture of you, real or fake, it is never your fault. Don’t pay and don’t reply. Come to me and we’ll sort it out together.”'],
        ],
      },
      { type: 'callout', tone: 'tip', text: 'Children often don’t tell because they fear losing their phone or game. If you can promise “I won’t take it away for telling me”, say so, and keep that promise.' },
      { type: 'h', text: 'Settings that help' },
      {
        type: 'list',
        items: [
          'Younger children use devices in shared rooms, not behind a closed door.',
          'Set up each new game or app together, with privacy at the strictest level.',
          'Turn text and voice chat off, or set it to friends you know.',
          'If you use an app to check an older child’s phone, tell them.',
        ],
      },
      { type: 'callout', tone: 'science', text: 'In a survey of 25,000 European 9 to 16-year-olds, rules and limits went with fewer risks but also fewer online skills, and talking together went with less harm. Reviews since have found small or mixed effects. These are links, not proof, so most families do both: settings that fit the age, and regular, calm talk.' },
      { type: 'p', text: 'Some changes are worth a gentle chat: being very secretive about a device, gifts you can’t explain, a new, much older friend, sudden mood changes, or much more or less time online. Many have ordinary explanations, so ask before you assume.' },
      { type: 'callout', tone: 'safety', text: 'If someone asks your child for pictures or threatens to share one: don’t pay, stop replying, and block them on every app your child uses. Don’t delete the chat, and note the account names, but don’t forward or share the picture itself. Report it to the police and the app or game. Tell your child it isn’t their fault and you’ll deal with it together.' },
      { type: 'h', text: 'Before you post their photo' },
      {
        type: 'list',
        items: [
          'A birthday photo tagged at home gives away a birthday and an address.',
          'School badges, uniforms and street signs show where your child can be found.',
          'Send family photos to relatives privately rather than posting them publicly.',
          'Ask your child first as they get older. Many children don’t like being posted without being asked.',
        ],
      },
    ],
  },
  {
    slug: 'home-alone-out-alone',
    title: 'Home alone and out alone',
    emoji: '🔑',
    summary: 'There’s rarely a legal age. Signs of readiness, how to practise, house rules, and first trips out.',
    minutes: 4,
    minMonths: 72,
    maxMonths: 144,
    topic: 'safety',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.aapHomeAlone, R.nspccHomeAlone, R.govuk, R.norfolk, R.stranger],
    blocks: [
      { type: 'p', text: 'Many countries set no age for leaving a child at home or letting them go out alone. What matters is whether your child is ready, and whether it could put them at risk. Leaving a child alone in a way that puts them in danger can be against the law, so check the rules where you live.' },
      { type: 'h', text: 'What experts say' },
      {
        type: 'table',
        head: ['Who', 'What they advise'],
        rows: [
          ['US paediatricians (AAP)', 'Some parents leave a mature 8 or 9-year-old for about half an hour, now and then. Regular time alone usually suits about 10 to 11, and a few hours about 11 to 12.'],
          ['A UK children’s charity (NSPCC)', 'Never leave babies or young children alone, even for a few minutes. Even near 12, a child may not cope with an emergency, so keep it short. No under-16s alone overnight.'],
        ],
      },
      { type: 'p', text: 'Some health services are stricter and say not before 12. Bodies differ, so if you’re unsure, start later and shorter.' },
      { type: 'h', text: 'Probably not ready yet if they…' },
      {
        type: 'list',
        items: [
          'Find instructions hard to follow.',
          'Can’t use a phone to call for help.',
          'Are scared or unhappy about being left.',
          'Can’t get food and drink safely.',
          'Don’t know who to call in an emergency.',
        ],
      },
      { type: 'callout', tone: 'safety', text: 'Never leave a child who is unhappy to be left. Readiness includes wanting to.' },
      { type: 'h', text: 'Practise first' },
      {
        type: 'steps',
        items: [
          { title: 'Ask how they feel', text: 'Finish these together: “I’m worried about…” and “It would help if…”.' },
          { title: 'Play “What if…?”', text: 'A power cut, a tap that floods, feeling hungry, you running late, a knock at the door. Their answers show what they’re ready for.' },
          { title: 'Check the house', text: 'Smoke and gas alarms work, there’s a spare key, and knives, medicines and alcohol are put away.' },
          { title: 'Short test runs', text: 'In daylight, with no cooking. They message you when they get in.' },
          { title: 'Build up slowly', text: 'Make the time a little longer as you both feel ready, and look at the rules again as they grow.' },
        ],
      },
      { type: 'h', text: 'House rules to agree' },
      {
        type: 'table',
        head: ['Rule', 'Agree beforehand'],
        rows: [
          ['The door', 'Whether they answer it, and who, if anyone, may come in. Never tell a caller or visitor they’re on their own.'],
          ['The phone', 'Whether they answer it, and what to say if someone asks for you. They know your number by heart.'],
          ['Food and cooking', 'What they can eat, and whether they may use any appliance they’ve practised with you.'],
          ['Friends', 'Whether friends can come over, and how many.'],
          ['Online', 'Never post that they’re home alone.'],
          ['Emergencies', 'In a life-threatening emergency, call the emergency number first, then you. Have a plan for a gas smell, a fire or an injury.'],
          ['Keys', 'What to do if they’re locked out, and a neighbour they can go to.'],
        ],
      },
      { type: 'h', text: 'Going out alone' },
      { type: 'p', text: 'Start with a short trip they know well, after walking it together. Instead of “never talk to strangers”, which can backfire, teach “never go anywhere with anyone without checking with me first”. A stranger, like a shop worker, may be the person who helps. Decide together who they’d ask for help along the way.' },
      { type: 'callout', tone: 'safety', text: 'Put the emergency numbers where your child can see them, with your number and a trusted neighbour’s.' },
      { type: 'callout', tone: 'tip', text: 'Asking an older brother or sister to babysit? The NSPCC suggests babysitters are at least 16. Younger ones may not cope if a little one falls ill.' },
    ],
  },
];
