import type { Guide } from './types';

/**
 * Your mind after a baby (release 2.0). Research: research_notes/PlayNest phase 10 research round 7/04_parents_mental_health_after_birth.md.
 *
 * Rules from the note: safety first, then normalising, as on the crisis screens in crying.ts. Never "you would never act on
 * these thoughts" (the app can't tell OCD from psychosis); never "your baby will never be taken away" (NHS: "very rare"). No
 * self-tests or scores, no medicine names, no suicide statistics. Postpartum psychosis is an emergency, and the person may not
 * notice it. "About 1 in 10" fathers (Rao 2020; never 1 in 4 or 1 in 5). Peer-delivered Thinking Healthy helped in one trial
 * and not clearly in another. Effects on babies are links and not inevitable. The intrusive-thought percentages from
 * Collardeau 2024 are abstract-only, so the guide says "almost all" and "many" until the full text is read. The 40 days and the
 * health-centre visits are Persian only.
 */
const CHECKED = '2026-11-19';

const R = {
  nhsPnd: { title: 'Postnatal depression', publisher: 'NHS (March 2026)', url: 'https://www.nhs.uk/mental-health/conditions/post-natal-depression/overview/' },
  nhsPsychosis: { title: 'Postpartum psychosis', publisher: 'NHS', url: 'https://www.nhs.uk/mental-health/conditions/post-partum-psychosis/' },
  nhsUrgent: { title: 'Where to get urgent help for mental health', publisher: 'NHS (October 2026)', url: 'https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/' },
  rcpsychPnd: { title: 'Postnatal depression', publisher: 'Royal College of Psychiatrists', url: 'https://www.rcpsych.ac.uk/mental-health/problems-disorders/postnatal-depression' },
  rcpsychPsychosis: { title: 'Postpartum psychosis', publisher: 'Royal College of Psychiatrists', url: 'https://www.rcpsych.ac.uk/mental-health/problems-disorders/postpartum-psychosis' },
  app: { title: 'What is postpartum psychosis?', publisher: 'Action on Postpartum Psychosis', url: 'https://www.app-network.org/what-is-pp/' },
  iocdf: { title: 'Perinatal OCD (expert opinion)', publisher: 'International OCD Foundation', url: 'https://iocdf.org/expert-opinions/perinatal-ocd/' },
  collardeau: { title: 'Prevalence and course of unwanted, intrusive thoughts of infant-related harm (Collardeau et al. 2024)', publisher: 'Journal of Clinical Psychiatry', url: 'https://doi.org/10.4088/JCP.23m15145' },
  heyne: { title: 'Prevalence and risk factors of birth-related posttraumatic stress among parents (Heyne et al. 2022)', publisher: 'Clinical Psychology Review', url: 'https://doi.org/10.1016/j.cpr.2022.102157' },
  rao: { title: 'Prevalence of prenatal and postpartum depression in fathers (Rao et al. 2020)', publisher: 'Journal of Affective Disorders', url: 'https://doi.org/10.1016/j.jad.2019.10.030' },
  rahman: { title: 'Cognitive behaviour therapy-based intervention by community health workers for mothers with depression and their infants in rural Pakistan (Rahman et al. 2008)', publisher: 'The Lancet', url: 'https://doi.org/10.1016/S0140-6736(08)61400-2' },
  fuhr: { title: 'Delivering the Thinking Healthy Programme for perinatal depression through peers in India (Fuhr et al. 2019)', publisher: 'The Lancet Psychiatry', url: 'https://doi.org/10.1016/S2215-0366(18)30466-8' },
  sikander: { title: 'Delivering the Thinking Healthy Programme through volunteer peers in Pakistan (Sikander et al. 2019)', publisher: 'The Lancet Psychiatry', url: 'https://doi.org/10.1016/S2215-0366(18)30467-X' },
  cuijpers: { title: 'Effects of psychological treatment of maternal depression on children and parental functioning (Cuijpers et al. 2026)', publisher: 'Journal of the American Academy of Child and Adolescent Psychiatry', url: 'https://doi.org/10.1016/j.jaac.2026.02.005' },
  dennisPeer: { title: 'Effect of peer support on prevention of postnatal depression among high risk women (Dennis et al. 2009)', publisher: 'BMJ', url: 'https://doi.org/10.1136/bmj.a3064' },
  mohr: { title: 'Physical activity and perinatal depression and anxiety: an umbrella review (Mohr et al. 2026)', publisher: 'eClinicalMedicine', url: 'https://doi.org/10.1016/j.eclinm.2026.104054' },
  sobol: { title: 'Sleep, circadian activity and postpartum depression: an actigraphy meta-analysis (Sobol et al. 2024)', publisher: 'Journal of Sleep Research', url: 'https://doi.org/10.1111/jsr.14116' },
  stein: { title: 'Effects of perinatal mental disorders on the fetus and child (Stein et al. 2014)', publisher: 'The Lancet', url: 'https://doi.org/10.1016/S0140-6736(14)61277-0' },
  grigoriadis: { title: 'Traditional postpartum practices and rituals: clinical implications (Grigoriadis et al. 2009)', publisher: 'Canadian Journal of Psychiatry', url: 'https://doi.org/10.1177/070674370905401206' },
  who: { title: 'Guide for integration of perinatal mental health in maternal and child health services', publisher: 'World Health Organization (2022)', url: 'https://www.who.int/publications/i/item/9789240057142' },
};

export const MIND_GUIDES: Guide[] = [
  {
    slug: 'your-mind-after-birth',
    title: 'Your mind after a baby',
    emoji: '🌤️',
    summary: 'Blues, low mood, worry, frightening thoughts and a hard birth: what’s common, what’s urgent, and what helps.',
    minutes: 5,
    minMonths: 0,
    maxMonths: 24,
    topic: 'you',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.nhsPnd, R.nhsPsychosis, R.nhsUrgent, R.rcpsychPnd, R.rcpsychPsychosis, R.app, R.iocdf, R.collardeau, R.heyne, R.rao, R.rahman, R.fuhr, R.sikander, R.cuijpers, R.dennisPeer, R.mohr, R.sobol, R.stein, R.grigoriadis, R.who],
    blocks: [
      { type: 'callout', tone: 'safety', text: 'Call your emergency number now if you might act on thoughts of ending your life or of hurting your baby. Call too if, soon after a birth, a parent is seeing, hearing or believing strange things, seems unusually high, can’t sleep or feels no need to sleep for days (not ordinary tiredness), or is very confused. The person may not notice it themselves, so someone else may need to call.' },
      { type: 'p', text: 'A baby changes your body, your sleep and your days. Feeling up and down is normal. For some parents, mothers, fathers and partners alike, it becomes more than that. That isn’t a failure, and help works.' },
      { type: 'h', text: 'The baby blues' },
      { type: 'p', text: 'In the first days after a birth, many mothers feel tearful, anxious or irritable. It usually passes within 2 weeks. If it lasts longer, gets worse, or you’re struggling, ask for help.' },
      {
        type: 'table',
        head: ['What it can be', 'How it can feel', 'What to do'],
        rows: [
          ['Postnatal depression', 'Low, hopeless or guilty, no joy, can’t sleep even when you could, hard to feel close to your baby', 'See your doctor or health worker if it lasts 2 weeks or more'],
          ['Anxiety', 'Worrying all the time, restless, sure something bad will happen', 'See your doctor or health worker'],
          ['Frightening unwanted thoughts', 'Sudden thoughts or pictures of your baby being hurt, checking again and again', 'Tell a doctor. It’s common and can be treated'],
          ['After a hard birth', 'The birth keeps coming back, with fear, nightmares or avoiding reminders', 'Tell your doctor. Partners can have it too'],
          ['Postpartum psychosis', 'Strange beliefs, hearing or seeing things, very high or fast-changing moods, confusion, no need for sleep', 'An emergency: call now'],
        ],
      },
      { type: 'h', text: 'Frightening thoughts are common' },
      { type: 'p', text: 'In a study that followed hundreds of new mothers, almost all had sudden thoughts of their baby being hurt by accident, and many had unwanted thoughts of harming or neglecting the baby themselves. The thoughts were strongest in the first two months and usually faded by six. Studies so far haven’t linked these unwanted thoughts with harming babies. If they frighten you or keep coming back, tell a doctor: they’re common and can be treated.' },
      { type: 'callout', tone: 'safety', text: 'It’s different if the thoughts feel right to you, come with strange beliefs, or you fear you can’t stop yourself. Then call your emergency number.' },
      { type: 'callout', tone: 'tip', text: 'Worried that asking for help could mean losing your baby? That is very rare. Health workers want to help you feel better and care for your baby.' },
      { type: 'h', text: 'Fathers and partners' },
      { type: 'p', text: 'About 1 in 10 fathers have depression during the pregnancy or in the year after a birth, and it’s more likely when the mother is struggling too. A partner may also be the first to notice when something is very wrong.' },
      { type: 'h', text: 'What helps' },
      {
        type: 'steps',
        items: [
          { title: 'Tell one person today', text: 'A partner, a friend or your health worker. Saying it out loud is the first step to help.' },
          { title: 'Ask for specific help', text: 'A meal, a nap, someone to sit with you and the baby.' },
          { title: 'Protect some sleep', text: 'Take turns at night so each adult gets one longer stretch. Short nights are linked with low mood.' },
          { title: 'Move a little', text: 'A walk with the pram counts. Studies suggest activity eases low mood after a birth.' },
          { title: 'Talk to someone trained', text: 'Talking therapies help many parents. You don’t need to be at breaking point to ask.' },
          { title: 'Talk to parents who’ve been there', text: 'Support from other parents helped in some trials.' },
          { title: 'If medicine is suggested', text: 'Say if you breastfeed. Some medicines can be used while breastfeeding, and your doctor can choose with you.' },
        ],
      },
      { type: 'callout', tone: 'science', text: 'Trials show talking treatments help parents with depression after a birth. In one large trial in villages, mothers visited by trained community health workers using WHO’s Thinking Healthy approach were much less likely to still be depressed a year later. Versions run by trained local mothers helped in one trial but not clearly in another. We don’t yet know which parts matter most.' },
      { type: 'h', text: 'And your baby?' },
      { type: 'p', text: 'Long-lasting low mood in a parent is linked with more difficulties for some children, but this isn’t inevitable. Babies are resilient, and a partner or family who share the care make a difference. Getting help is good for you, and in trials it also helped parents and babies get on a little better.' },
      { type: 'h', text: 'Rest and family' },
      { type: 'p', text: 'Many families have traditions of rest and company after a birth. Research suggests the part that helps is support the mother actually wants. Say what would help you.' },
      { type: 'callout', tone: 'safety', text: 'See your doctor or health centre soon if low mood, worry or no joy last 2 weeks or more, if frightening thoughts keep coming back, or if the birth keeps replaying. If you have thoughts of ending your life, tell a doctor or a helpline today. Help, top right, has people to call.' },
    ],
  },
];
