import type { CryingHelp, ParentSupport } from './packs';
import { localize } from '../i18n';

/**
 * The 3 a.m. crying helper and the parent-support screens.
 *
 * Source: research_notes/PlayNest phase 5 app research/05_crying_soothing_parent_wellbeing.md, checked 2026-11-04.
 * The crisis wording starts from drafts in those notes. It is not sourced text, and it needs review by a perinatal
 * clinician and a suicide-prevention body before release.
 *
 * Rules for anyone editing this file:
 *  - No numbers, statistics or methods on the crisis screens. No questions about reasons or plans. No rating of risk.
 *  - No promises about what any service keeps confidential.
 *  - No product, supplement or remedy recommendations. No claim that any of this prevents shaking.
 *  - The screen fills in the local emergency number, so these strings say "your emergency number".
 */
export const CRYING: CryingHelp = {
  reassure: [
    'Crying like this is common and it passes.',
    'It often peaks around 6 to 8 weeks, counted from the due date for babies born early, and usually eases by 3 to 4 months, sometimes later.',
    "Nothing stops every cry. What worked yesterday may not work today, and that doesn't mean you did anything wrong.",
  ],

  // The stricter guidance wins where NHS pages disagree: 38°C under 3 months is an emergency, and 8 hours is the wet-nappy point.
  redFlags: [
    'Under 3 months with a temperature of 38°C (100.4°F) or higher',
    '3 to 6 months with a temperature of 39°C (102.2°F) or higher',
    'Any age, with a temperature that keeps going above 40°C (104°F)',
    'A temperature under 36°C (96.8°F), or skin that feels cold or clammy',
    'Very fast or difficult breathing, grunting, or the tummy sucking in',
    'Blue, grey, pale or blotchy skin (on dark skin, check the palms and soles)',
    'Swollen lips, tongue or throat',
    'A rash that does not fade when you press a clear glass on it',
    'A weak, high-pitched or continuous cry, or a cry that sounds unusual for them',
    'Looks very unwell, is hard to wake, unusually sleepy or floppy, or has a stiff neck',
    'A seizure (fit)',
    'A swollen or bulging soft spot on the top of the head',
    'Green, yellow-green, red, black or brown vomit, or vomit that looks like ground coffee',
    'Violent or repeated vomiting, or vomiting for 24 hours',
    'Not feeding, or no wet nappy in 8 hours',
    'Not using an arm or leg',
  ],

  checks: [
    'Hungry? Offer a feed.',
    'Wet or dirty nappy? Change it.',
    'Too hot or too cold? Add or take off a layer.',
    'Tired, or has it been a busy day? Try somewhere calmer and quieter.',
    'Trapped wind? Hold them close and gently rub their back.',
    "Wants to be close? Hold them. You can't spoil a baby with attention.",
    'Crying during feeds? Ask your midwife, health visitor or doctor to look at positioning, attachment and reflux.',
    "Thinking about drops, gripe water or herbal drinks? They aren't recommended here, because the evidence is weak or mixed. Ask your doctor or health visitor before giving anything. No honey before age 1.",
  ],

  // Order follows the notes: walk, then sit and hold, then song, then low noise. Evidence is stated with each step.
  soothe: [
    {
      id: 'walk',
      emoji: '🚶',
      title: 'Walk with them for 5 minutes',
      text: 'Hold your baby close and walk steadily, with few sudden turns or stops. Many babies settled this way in one small study. Too drowsy to carry them? Use the cot.',
      timerMinutes: 5,
    },
    {
      id: 'sit-hold',
      emoji: '🪑',
      title: 'Then sit and hold, 5 to 8 minutes',
      text: 'Once they are calm, sit and keep holding them for 5 to 8 minutes, then lay them on their back in the cot. If they wake, that is common. Nodding off? Put them down now.',
      timerMinutes: 8,
    },
    {
      id: 'sing',
      emoji: '🎵',
      title: 'Sing, in any language',
      text: 'Sing softly, any song you know. Studies with older babies found familiar songs and lullabies can ease distress. It may or may not help tonight, and that is OK.',
    },
    {
      id: 'low-noise',
      emoji: '🔉',
      title: 'Try a soft, low noise',
      text: 'A soft, steady sound may help some babies settle. One small, old study found this with newborns. Keep it quiet, short and 2 m or more from the cot.',
    },
    {
      id: 'other-ideas',
      emoji: '👶',
      title: 'Other things families try',
      text: 'Skin-to-skin on your chest when you feel wide awake, or a slow walk with the pram. Health services suggest these, though research on crying is thin.',
    },
    {
      id: 'ask',
      emoji: '📞',
      title: 'Worth asking about',
      text: "Ask a doctor or health visitor if nothing helps, your baby isn't gaining weight, it goes on past 4 months, or you are finding it hard to cope. Trust your instincts.",
    },
  ],

  stepAway: {
    title: 'Need to step away? That’s OK',
    steps: [
      'Put your baby on their back in their cot.',
      'Leave the room and close the door.',
      'Set a timer for 5 to 10 minutes. Breathe, have some water, or phone someone.',
      "Come back and check on your baby. If they seem unwell, use the Phone for help list. If they are still crying, that's OK. You can hold them, or step away again.",
      'If another adult can take over, hand your baby to them and take a longer break.',
    ],
    minutes: 10,
    closing:
      'Putting your baby down safely and stepping away is a safe choice, even if they keep crying. Share this plan with everyone who looks after your baby, before they need it.',
  },

  neverShake: 'Never shake a baby. It can cause serious injury or death.',

  // Limited to the short list the notes could source. The detailed Barnard cue lists need a licence and are not used.
  cues: {
    more: ['Alert and relaxed', 'Babbling or gesturing towards you'],
    stop: [
      'Looking away: they may want some space. It is not rejection.',
      'Squirming or jerky kicking: slow down or pause.',
      'Fussing, crying or looking tired: stop and comfort them.',
    ],
  },

  toddler: [
    'With a toddler, crying is often about frustration, tiredness, hunger or jealousy, while words are still growing. Tantrums usually start around 18 months and become far less common by age 4.',
    'Stay calm and wait if you can. Name the feeling and offer a small choice. If they are more upset than angry and you feel calm enough, hold them.',
    'Comfort is always fine. Try not to reward the tantrum itself.',
    "Need a break? Once they can't hurt themselves, go to another room for a while, or hand over to someone you trust. Never hit back.",
    'The walking and low-noise steps are for young babies, so skip those.',
    'The warning signs at the top still apply for children under 5. If they seem unwell, or this is not like them, get help. You do not need to be sure.',
  ],

  // No decibel figures: the AAP gives none, and a phone can't measure it.
  soundSafety: [
    'Place it across the room, 2 m or more from the cot. Never in or on the cot.',
    'Softer and shorter is better. Turn it off once your baby has settled.',
    'Tests found sleep machines at full volume can be too loud for babies, even from 2 m away, so keep it well below full volume.',
    "No safe loudness number is given here, because your phone can't measure it well. If in doubt, go quieter.",
  ],

  refs: [
    { title: 'Infant crying is normal', publisher: 'ICON', url: 'https://iconcope.org/advice-for/parents/infant-crying-is-normal/' },
    { title: "It's OK to walk away", publisher: 'ICON', url: 'https://iconcope.org/advice-for/parents/its-ok-to-walk-away/' },
    { title: 'Comforting methods can help', publisher: 'ICON', url: 'https://iconcope.org/advice-for/parents/comforting-methods-can-help/' },
    { title: 'Soothing a crying baby', publisher: 'NHS', url: 'https://www.nhs.uk/conditions/baby/caring-for-a-newborn/soothing-a-crying-baby/' },
    { title: 'Is your baby or toddler seriously ill?', publisher: 'NHS', url: 'https://www.nhs.uk/conditions/baby/health/is-your-baby-or-toddler-seriously-ill/' },
    { title: 'Colic', publisher: 'NHS', url: 'https://www.nhs.uk/conditions/colic/' },
    { title: 'Meningitis symptoms', publisher: 'NHS', url: 'https://www.nhs.uk/conditions/meningitis/symptoms/' },
    { title: 'Diarrhoea and vomiting', publisher: 'NHS', url: 'https://www.nhs.uk/symptoms/diarrhoea-and-vomiting/' },
    { title: 'Foods to avoid giving babies and young children', publisher: 'NHS', url: 'https://www.nhs.uk/conditions/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/' },
    { title: 'Temper tantrums', publisher: 'NHS', url: 'https://www.nhs.uk/conditions/baby/babys-development/behaviour/temper-tantrums/' },
    { title: 'Colic', publisher: 'American Academy of Pediatrics', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Colic.aspx' },
    { title: "Responding to your baby's cries", publisher: 'American Academy of Pediatrics', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Responding-to-Your-Babys-Cries.aspx' },
    { title: 'Fever: when to call the pediatrician', publisher: 'American Academy of Pediatrics', url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/When-to-Call-the-Pediatrician.aspx' },
    { title: 'Temper tantrums', publisher: 'American Academy of Pediatrics', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Temper-Tantrums.aspx' },
    { title: 'About abusive head trauma', publisher: 'CDC', url: 'https://www.cdc.gov/child-abuse-neglect/about/about-abusive-head-trauma.html' },
    { title: 'Positive parenting tips: infants', publisher: 'CDC', url: 'https://www.cdc.gov/child-development/positive-parenting-tips/infants.html' },
    { title: 'Bonding with your baby', publisher: 'Pregnancy Birth and Baby', url: 'https://www.pregnancybirthbaby.org.au/bonding-with-your-baby' },
    { title: 'Study of soothing crying babies by carrying (Ohmura and colleagues, 21 infants, press summary)', publisher: 'RIKEN', url: 'https://www.riken.jp/en/news_pubs/research_news/pr/2022/20220914_1/index.html' },
    { title: 'Familiar songs and infant distress (Cirelli and Trehub, 2020)', publisher: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/32162936/' },
    { title: 'Infants relax to unfamiliar foreign lullabies (Bainbridge and colleagues, 2021)', publisher: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/33077883/' },
    { title: 'White noise and sleep in neonates (Spencer and colleagues, 1990)', publisher: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/2405784/' },
    { title: 'Infant sleep machines and hazardous sound levels (Hugh and colleagues, 2014)', publisher: 'McMaster University', url: 'https://experts.mcmaster.ca/scholarly-works/1649352' },
    { title: 'White noise: not the right noise', publisher: "Children's Hospital of Philadelphia", url: 'https://www.chop.edu/news/white-noise-not-right-noise' },
    { title: 'Pain and colic remedies in infants: Cochrane review (Biagioli and colleagues, 2016)', publisher: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/27631535/' },
    { title: 'Trial of crying materials for new mothers (Barr and colleagues, 2009)', publisher: 'CMAJ', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2659818/' },
  ],
};

export const PARENT_SUPPORT: ParentSupport = {
  checkIn: {
    question:
      "Lately, have you been feeling down or hopeless, or finding little pleasure in things? Many new parents do. Is this something you'd like some help with?",
    intro: "This isn't a test and there is no score. It can't tell you how you are, and your answer isn't saved.",
    yes: 'Yes, show me who can help',
    notNow: 'Not right now',
    scared: "I'm scared I might hurt myself or my baby",
  },

  kindWords: [
    'Babies and parents miss each other all the time. Coming back is what counts.',
    "This is hard. Saying so doesn't mean you're doing it wrong.",
    'If you stepped away and came back, that counts.',
    "Nobody gets this right all the time, and babies don't need them to.",
    'A baby who looks away is not rejecting you. It is often a way of asking for a break.',
    "Fathers, partners, adoptive parents, grandparents, single parents and parents of babies in neonatal care feel this too. You don't need to have given birth to feel this.",
    'Feeling like this is not a verdict on you as a parent. It is common, and it can get better.',
  ],

  // Written originally, and honest that none of these has been tested with parents at 3 a.m.
  smallThings: [
    {
      id: 'breathe-60',
      emoji: '🌬️',
      title: 'Breathe for 60 seconds',
      text: "Breathe in through your nose, then let out a long, slow breath. Keep going for about a minute. It may help you feel a bit steadier. A study of adults found a few minutes a day improved mood, but nobody has tried this with parents at 3 a.m., so it's fine if it does nothing tonight.",
    },
    {
      id: 'two-minutes',
      emoji: '⏱️',
      title: 'Two minutes, phone down',
      text: 'With your baby safe, put the phone down for two minutes. Stretch, drink some water or look out of a window. Studies of short breaks at work and in study found they ease tiredness a little. They were not done with parents.',
    },
    {
      id: 'backup',
      emoji: '🤝',
      title: 'Ask for backup',
      text: 'Message one person with one clear ask: hold the baby for an hour, bring food, come and sit with you. If you can, swap night shifts with a partner, friend or relative so each of you gets a stretch of sleep. The Lullaby Trust suggests this, though no trial has tested it.',
    },
    {
      id: 'nodding-off',
      emoji: '😴',
      title: 'Nodding off',
      text: 'Feel yourself nodding off? Put baby on their back in their cot now. Falling asleep with a baby on a sofa or armchair greatly raises the risk of sudden infant death, so move them before you rest.',
    },
    {
      id: 'stay-awake',
      emoji: '🌙',
      title: 'Staying awake for a night feed',
      text: 'A snack, cold water, fresh air, a podcast or a vibrating alarm may help you stay awake. Some parents message other parents who are up at the same time. These are tips from the Lullaby Trust, not tested in trials.',
    },
    {
      id: 'tell-someone',
      emoji: '💬',
      title: 'Tell someone how it really is',
      text: 'Say it to a friend, another parent or a health worker. Loneliness is common after a baby. Research, mostly with mothers, links friendships with other parents to feeling less lonely.',
    },
  ],

  // Safety first, then normalising. A blanket "you would never do it" is unsafe, because the app can't tell OCD, depression,
  // overwhelm and psychosis apart. Psychosis signals route to emergency care because the person may not recognise them.
  hurtBaby: {
    opening: "You did the right thing by pressing this. Let's keep you both safe.",
    steps: [
      'Put your baby on their back in their cot, or another safe place.',
      "Go to another room. It's OK to leave them crying for a few minutes.",
      'Call someone now.',
    ],
    callIf:
      "Call your emergency number now if you feel you can't stop yourself, or if you are seeing, hearing or believing things that feel strange or frightening.",
    normal:
      "Many new parents, including fathers and partners, get frightening thoughts they don't want. Having them is not the same as wanting to act, and with help this can get better. Tell a doctor or nurse, even if it feels hard to say.",
  },

  // Both answers lead to people. Never "think of your baby" or "so much to live for", which can add guilt. No "crisis over" state.
  hurtSelf: {
    opening:
      "You did the right thing by pressing this. Thoughts like this can come when things are too much, and you don't have to carry them alone.",
    question: 'Are you thinking about ending your life?',
    yes: "Yes, or I'm not sure",
    no: 'No, but I feel awful',
    afterYes:
      "If you might act on this soon, call your emergency number now. If your baby is with you, put them on their back in their cot first, then call. You don't need to be sure before you call anyone here. Stay with someone if you can. These feelings can pass, and people do come through this.",
    afterNo:
      "Feeling awful is reason enough to talk to someone. These people listen, and you don't need to be at breaking point to call. If things change and you start to feel unsafe, come back here or call your emergency number.",
  },

  whenToSeek: [
    'Now: you feel you might act on thoughts of ending your life or of hurting your baby. Call your emergency number.',
    'Now: you or someone you care for is seeing, hearing or believing things that feel strange or frightening, is very confused, or has fast-changing moods. This can start suddenly, often in the first days or weeks after birth, and it is a medical emergency. Call your emergency number.',
    'The person may not notice these signs themselves, so a partner or relative may need to make the call.',
    'Today: thoughts of dying by suicide, or of hurting yourself or your baby. Tell a doctor, nurse or crisis line, even if it feels hard to say.',
    'Soon: low mood, hopelessness, no enjoyment in things, guilt, worry, a short temper, trouble sleeping or concentrating, or finding it hard to bond. This can start in pregnancy or up to a year after birth.',
    'Soon: frightening thoughts that keep coming back, or checking your baby again and again. This can be OCD, and it can be treated.',
    'Soon: a birth that still frightens you or keeps coming back to you. You can ask for help with this too.',
    "Postnatal depression affects fathers and partners too, and adoptive parents, grandparents and single parents can struggle as well. You don't need to have given birth to feel this.",
    'If you are finding it hard to cope, for any reason, you can ask. You do not need to be sure.',
  ],

  privacy:
    "This app can't see what you tap, and nobody is watching, so it can't send help on its own. These people can help. Your phone keeps its own record of calls and messages, and a call may show on your bill. Each service has its own rules about privacy and keeping children safe, and you can ask about them first.",

  refs: [
    { title: 'Postnatal depression', publisher: 'NHS', url: 'https://www.nhs.uk/mental-health/conditions/post-natal-depression/overview/' },
    { title: 'Postpartum psychosis', publisher: 'NHS', url: 'https://www.nhs.uk/mental-health/conditions/post-partum-psychosis/' },
    { title: 'What is postpartum psychosis?', publisher: 'Action on Postpartum Psychosis', url: 'https://www.app-network.org/what-is-pp/' },
    { title: 'Obsessive compulsive disorder', publisher: 'NHS', url: 'https://www.nhs.uk/mental-health/conditions/obsessive-compulsive-disorder-ocd/overview/' },
    { title: 'Perinatal OCD', publisher: 'International OCD Foundation', url: 'https://iocdf.org/expert-opinions/perinatal-ocd/' },
    { title: 'Maternal OCD', publisher: 'Maternal OCD', url: 'https://maternalocd.org/' },
    { title: 'Unwanted thoughts of harm in new mothers (Fairbrother and Woody, 2008)', publisher: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/18463941/' },
    { title: 'Paternal depression (Paulson and Bazemore, 2010)', publisher: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/20483973/' },
    { title: 'Paternal depression update (Cameron and colleagues, 2016)', publisher: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/27475890/' },
    { title: 'Postpartum PTSD (Yildiz and colleagues, 2017)', publisher: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/27865585/' },
    { title: 'Loneliness in pregnancy and early parenthood (Kent-Marvick and colleagues, 2022)', publisher: 'PMC', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9451126/' },
    { title: 'SIGN 127: perinatal mood disorders', publisher: 'Scottish Intercollegiate Guidelines Network', url: 'https://www.sign.ac.uk/media/1065/sign127_update.pdf' },
    { title: 'Media guidelines for reporting suicide, 2026', publisher: 'Samaritans', url: 'https://media.samaritans.org/documents/Media_Guidelines_2026_DIGITAL.pdf' },
    { title: 'Supporting someone with suicidal thoughts', publisher: 'Samaritans', url: 'https://www.samaritans.org/how-we-can-help/if-youre-worried-about-someone-else/supporting-someone-suicidal-thoughts/' },
    { title: 'Help someone else', publisher: '988 Lifeline', url: 'https://988lifeline.org/help-someone-else/' },
    { title: 'Infant emotions and repair (Tronick, 1989)', publisher: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/2653124/' },
    { title: 'Mother-infant coordination (Tronick and Cohn, 1989)', publisher: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/2702877/' },
    { title: "A parent's guide to safe sleep", publisher: 'American Academy of Pediatrics', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx' },
    { title: 'Sleep deprivation', publisher: 'The Lullaby Trust', url: 'https://www.lullabytrust.org.uk/safer-sleep-advice/sleep-deprivation/' },
    { title: 'Brief breathing practices and mood (Balban and colleagues, 2023)', publisher: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/36630953/' },
    { title: 'Micro-breaks and wellbeing (Albulescu and colleagues, 2022)', publisher: 'PLOS ONE', url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0272460' },
  ],
};

localize('crying', { CRYING, PARENT_SUPPORT });
