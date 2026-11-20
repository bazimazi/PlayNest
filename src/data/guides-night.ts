import type { Guide } from './types';

/**
 * Night frights, sleepwalking and snoring (release 2.0). Research: research_notes/PlayNest phase 10 research round 7/05_night_time_troubles.md.
 *
 * Rules from the note: never wake a child in a night terror and never hold them down; scheduled waking is something some
 * services suggest, tested only in tiny studies; night terrors and sleepwalking run in families and aren't a sign of emotional
 * trouble; no "monster spray works" or "harms" (no study); tonsil surgery "often helps" behaviour and symptoms but didn't change
 * attention or thinking tests (CHAT 2013, PATS 2023), so never "cures 80 to 90%"; melatonin is a doctor's decision, with no
 * amounts, brands or "natural so harmless"; no padding or soft things in a baby's cot for head-banging; no OSA checklist with a
 * verdict. Agrees with the coach cards nightmare-night-terror and night-waking, and with settling-to-sleep.
 */
const CHECKED = '2026-11-19';

const R = {
  nhsTerrors: { title: 'Night terrors and nightmares', publisher: 'NHS (2025)', url: 'https://www.nhs.uk/conditions/night-terrors/' },
  nhsSleepwalking: { title: 'Sleepwalking', publisher: 'NHS (2025)', url: 'https://www.nhs.uk/conditions/sleepwalking/' },
  aapNightmares: { title: 'Nightmares and night terrors', publisher: 'American Academy of Pediatrics (HealthyChildren.org)', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Nightmares-and-Night-Terrors.aspx' },
  petit: { title: 'Childhood sleepwalking and sleep terrors: a longitudinal study of prevalence and familial aggregation (Petit et al. 2015)', publisher: 'JAMA Pediatrics', url: 'https://pubmed.ncbi.nlm.nih.gov/25938617/' },
  kushnir: { title: 'Assessment of brief interventions for nighttime fears in preschool children (Kushnir & Sadeh 2012)', publisher: 'European Journal of Pediatrics', url: 'https://pubmed.ncbi.nlm.nih.gov/21594575/' },
  gordon: { title: 'Treatment of children’s nighttime fears: the need for a modern randomised controlled trial (Gordon et al. 2007)', publisher: 'Clinical Psychology Review', url: 'https://pubmed.ncbi.nlm.nih.gov/16935400/' },
  muris: { title: 'Nighttime fears of children and adolescents (Muris et al. 2007)', publisher: 'Behaviour Research and Therapy', url: 'https://pubmed.ncbi.nlm.nih.gov/17490610/' },
  monsterSpray: { title: 'Monster spray (handout, Meltzer & Crabtree)', publisher: 'American Psychological Association', url: 'https://www.apa.org/pubs/books/supplemental/pediatric-sleep-problems/Monster_Spray.pdf' },
  nightlights: { title: 'Quantifying the biological impacts of nightlights (2026)', publisher: 'npj Biological Timing and Sleep', url: 'https://pubmed.ncbi.nlm.nih.gov/41927975/' },
  rchOsa: { title: 'Obstructive sleep apnoea (OSA)', publisher: 'Royal Children’s Hospital Melbourne', url: 'https://www.rch.org.au/kidsinfo/fact_sheets/Obstructive_sleep_apnoea_OSA/' },
  aapOsa: { title: 'Diagnosis and management of childhood obstructive sleep apnea syndrome (Marcus et al. 2012)', publisher: 'Pediatrics', url: 'https://pubmed.ncbi.nlm.nih.gov/22926173/' },
  chat: { title: 'A randomized trial of adenotonsillectomy for childhood sleep apnea (CHAT, Marcus et al. 2013)', publisher: 'New England Journal of Medicine', url: 'https://pubmed.ncbi.nlm.nih.gov/23692173/' },
  pats: { title: 'Adenotonsillectomy for snoring and mild sleep apnea in children (PATS, Redline et al. 2023)', publisher: 'JAMA', url: 'https://pubmed.ncbi.nlm.nih.gov/38051326/' },
  bruxism: { title: 'Teeth grinding (bruxism)', publisher: 'Seattle Children’s Hospital (2025)', url: 'https://www.seattlechildrens.org/pe/sleep-medicine/bruxism-teeth-grinding/' },
  headbanging: { title: 'Head banging, body rocking and head rolling', publisher: 'Sleep Scotland, via NHS Lothian', url: 'https://services.nhslothian.scot/healthvisitors/wp-content/uploads/sites/27/2023/10/Head-banging-body-rocking-and-head-rolling-1-1.pdf' },
  picchietti: { title: 'Restless legs syndrome: prevalence and impact in children and adolescents (Peds REST, Picchietti et al. 2007)', publisher: 'Pediatrics', url: 'https://pubmed.ncbi.nlm.nih.gov/17671050/' },
  aapMelatonin: { title: 'Melatonin and children’s sleep', publisher: 'American Academy of Pediatrics (HealthyChildren.org, 2026)', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/melatonin-and-childrens-sleep.aspx' },
  aasm: { title: 'Melatonin use in children and adolescents: health advisory', publisher: 'American Academy of Sleep Medicine (2022)', url: 'https://aasm.org/advocacy/position-statements/melatonin-use-in-children-and-adolescents-health-advisory/' },
  mmwr: { title: 'Emergency department visits for unsupervised pediatric melatonin ingestion, 2019–2022', publisher: 'CDC, Morbidity and Mortality Weekly Report (2024)', url: 'https://www.cdc.gov/mmwr/volumes/73/wr/mm7309a5.htm' },
};

export const NIGHT_GUIDES: Guide[] = [
  {
    slug: 'night-time-troubles',
    title: 'Night frights, sleepwalking and snoring',
    emoji: '🌛',
    summary: 'Nightmares, night terrors, sleepwalking and snoring: what’s happening, what helps, and when to see a doctor.',
    minutes: 5,
    minMonths: 12,
    maxMonths: 144,
    topic: 'sleep',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.nhsTerrors, R.nhsSleepwalking, R.aapNightmares, R.petit, R.kushnir, R.gordon, R.muris, R.monsterSpray, R.nightlights, R.rchOsa, R.aapOsa, R.chat, R.pats, R.bruxism, R.headbanging, R.picchietti, R.aapMelatonin, R.aasm, R.mmwr],
    blocks: [
      { type: 'p', text: 'Most night-time scares are a normal part of growing up, and most children grow out of them. Knowing which is which tells you whether to comfort, wait or see a doctor.' },
      {
        type: 'table',
        head: ['What you see', 'Nightmare', 'Night terror', 'Sleep\u00ADwalking'], // soft hyphen: four columns don't fit a 390px phone otherwise
        rows: [
          ['Awake?', 'Yes, and wants you', 'No, and may not know you', 'No, moving about asleep'],
          ['Remembers it?', 'Often', 'No', 'No'],
          ['Most common', 'About 3 to 12', 'About 1½ to 8', 'Later childhood, peaking around 10'],
          ['What helps', 'Comfort and a dim light', 'Stay close, keep them safe, wait', 'Guide them gently back to bed'],
        ],
      },
      { type: 'h', text: 'During a night terror' },
      {
        type: 'steps',
        items: [
          { title: 'Stay calm and close', text: 'It looks frightening, but your child isn’t aware of it and won’t remember it.' },
          { title: 'Don’t wake them', text: 'They may not know you and can get more upset.' },
          { title: 'Step in only for safety', text: 'Gently guide them away from stairs or sharp corners, without holding them down.' },
          { title: 'Look for patterns', text: 'Being overtired or ill, a full bladder and noise can set them off. A regular bedtime and a wee before bed may help.' },
        ],
      },
      { type: 'callout', tone: 'safety', text: 'If your child sleepwalks: close windows and outside doors, use a stair gate, lock away knives and tools, clear the floor, and keep them off a top bunk. Guide them back to bed without waking them suddenly. See a doctor if they get hurt or sleepwalk often.' },
      { type: 'callout', tone: 'science', text: 'In a study that followed almost 2,000 children, about a third had night terrors at 18 months, and sleepwalking peaked around 10. Children whose parents had sleepwalked were much more likely to sleepwalk too. Some health services suggest waking a child shortly before their usual terror time, but only tiny studies have tested it, so ask your doctor first.' },
      { type: 'h', text: 'Afraid of the dark' },
      { type: 'p', text: 'Night-time fears are very common in childhood and usually fade. If they’re strong, small brave steps tend to help more than lots of checking for monsters.' },
      {
        type: 'steps',
        items: [
          { title: 'Name it kindly', text: '“It feels scary in the dark. Your feelings are real, and you’re safe.”' },
          { title: 'Play with the dark by day', text: 'Torch hunts, dark dens and stories about being brave at night.' },
          { title: 'Give them a job', text: 'Ask them to keep their teddy company at night. In a trial with 4 to 6-year-olds, looking after a soft toy eased night fears, and the gains lasted months.' },
          { title: 'Take small steps', text: 'Lights a little lower, you a little further from the bed. Praise every brave try.' },
        ],
      },
      { type: 'callout', tone: 'tip', text: 'A night-light is fine if it helps. Choose a dim, warm-coloured one placed away from the bed, as bright or blue-white light can upset body clocks. Some families use a pretend “monster spray”, others prefer not to hint that monsters are real. No study has tested it either way.' },
      { type: 'h', text: 'Snoring' },
      { type: 'p', text: 'About 1 in 6 children snore, and 2 or 3 in 100 have sleep apnoea, where the airway keeps closing during sleep. Signs include snoring most nights, gasps or pauses in breathing, restless, sweaty sleep, breathing through the mouth and tired mornings. In the day, trouble paying attention or changes in behaviour may be the only clue. If you notice these, tell your doctor.' },
      { type: 'callout', tone: 'science', text: 'In two large trials of children who snored or had sleep apnoea, removing the tonsils and adenoids improved behaviour, sleepiness and quality of life, but didn’t change tests of attention and thinking. Many children with milder problems got better while waiting, and about 3 in 100 had a serious complication. It’s a decision to make with a specialist.' },
      { type: 'h', text: 'Other things you may notice' },
      {
        type: 'table',
        head: ['What', 'Usually', 'Worth asking about'],
        rows: [
          ['Teeth grinding', 'Common, and often needs nothing', 'Worn teeth, jaw pain or headaches (a dentist), or snoring too (a doctor)'],
          ['Head-banging or rocking at bedtime', 'A way to self-soothe that usually eases by about 4', 'Injuries, broken sleep, carrying on past 4 or 5, or other worries about development'],
          ['Restless legs', 'Uncomfortable legs at night, in about 2 in 100 children aged 8 to 17', 'Leg discomfort that stops sleep: a doctor may check for causes'],
        ],
      },
      { type: 'callout', tone: 'safety', text: 'Melatonin is a medicine decision. Health bodies advise talking to a doctor before giving it, and in some countries it is prescription only. Supplement labels can be wrong. In the US, emergency visits after young children swallowed melatonin rose sharply, often from gummies, so lock it away like any medicine.' },
      { type: 'h', text: 'When to see a doctor' },
      {
        type: 'list',
        items: [
          'Night terrors that start after 5, happen often, or carry on past 12.',
          'Nightmares that are frequent, wear your child down, or began after something frightening.',
          'Snoring most nights, or gasps or pauses in breathing.',
          'Fears that stop your child sleeping or doing everyday things most nights.',
          'Any sudden change in sleep or behaviour that lasts.',
        ],
      },
      { type: 'callout', tone: 'science', text: 'What we don’t know: treatments for night terrors and sleepwalking rest on very small studies, trials for fear of the dark are small, and melatonin’s long-term effects in children aren’t well known.' },
    ],
  },
];
