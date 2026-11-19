import type { Guide } from './types';

/**
 * Feeding a baby when you're apart (expressing, storing, bottles from carers, formula on the go, going back to work) and
 * slings and carriers (release 2.0). Research: research_notes/PlayNest phase 10 research round 7/07_back_to_work_milk_and_carrying.md.
 *
 * Rules from the note: storage times differ between bodies, so the guide gives the shorter ones (4 hours, 4 days, about 6
 * months frozen) and says some services allow longer; never refreeze, never microwave; no milk volumes (and no "ml" at all);
 * paced feeding is described as responsive bottle feeding with no claim that it protects breastfeeding; no trials exist for
 * workplace support, so only "linked with"; mothers' work is neutral on average, with no guilt either way. Slings: TICKS from
 * the UK Sling Consortium, the first 4 months as the risk window, feed out of the sling (Lullaby Trust 2025), no hot drinks or
 * cooking, and no claim that a carrier prevents hip dysplasia or that slings cause cot death. Iranian leave law is Persian only.
 */
const CHECKED = '2026-11-19';

const R = {
  cdcStorage: { title: 'Breast milk storage and preparation', publisher: 'CDC (updated August 2026)', url: 'https://www.cdc.gov/breastfeeding/breast-milk-preparation-and-storage/handling-breastmilk.html' },
  cdcPump: { title: 'How to keep your breast pump kit clean', publisher: 'CDC (2024)', url: 'https://www.cdc.gov/hygiene/childcare/breast-pump.html' },
  cdcBottle: { title: 'About feeding from a bottle', publisher: 'CDC (March 2026)', url: 'https://www.cdc.gov/infant-toddler-nutrition/bottle-feeding/index.html' },
  nhsStoring: { title: 'Storing breast milk', publisher: 'NHS Start for Life', url: 'https://www.nhs.uk/start-for-life/baby/feeding-your-baby/breastfeeding/expressing-your-breast-milk/storing-breast-milk/' },
  nhsHand: { title: 'Expressing breast milk by hand', publisher: 'NHS Best Start in Life', url: 'https://www.nhs.uk/best-start-in-life/baby/feeding-your-baby/breastfeeding/expressing-your-breast-milk/expressing-breast-milk-by-hand/' },
  nhsWork: { title: 'Breastfeeding and returning to work', publisher: 'NHS Best Start in Life', url: 'https://www.nhs.uk/best-start-in-life/baby/feeding-your-baby/breastfeeding/breastfeeding-returning-to-work/' },
  nhsMixed: { title: 'Introducing formula feeds', publisher: 'NHS Best Start in Life', url: 'https://www.nhs.uk/best-start-in-life/baby/feeding-your-baby/mixed-feeding/introducing-formula-feeds/' },
  ukhsaTravel: { title: 'Preparing infant formula safely during water supply disruptions and when travelling', publisher: 'GOV.UK, UK Health Security Agency (November 2026)', url: 'https://www.gov.uk/government/publications/preparing-infant-formula-safely-during-water-supply-disruptions-and-when-travelling' },
  abm8: { title: 'Clinical Protocol #8: human milk storage information for home use for full-term infants (revised 2017)', publisher: 'Academy of Breastfeeding Medicine', url: 'https://www.bfmed.org/assets/DOCUMENTS/PROTOCOLS/8-human-milk-storage-protocol-english.pdf' },
  aapWork: { title: 'Expressing breast milk at work', publisher: 'American Academy of Pediatrics (HealthyChildren.org, 2025)', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Expressing-Breastmilk-on-the-Job.aspx' },
  paced: { title: 'Does paced bottle-feeding improve the quality and outcome of bottle-feeding interactions? (2025)', publisher: 'Early Human Development', url: 'https://europepmc.org/article/MED/39693774' },
  cochraneWork: { title: 'Interventions in the workplace to support breastfeeding for women in employment (Abdulwadud & Snow 2012)', publisher: 'Cochrane Database of Systematic Reviews', url: 'https://europepmc.org/article/MED/23076920' },
  goldberg: { title: 'Maternal employment and children’s achievement in context: a meta-analysis of four decades of research (Goldberg et al. 2008)', publisher: 'Psychological Bulletin', url: 'https://europepmc.org/article/MED/18193996' },
  lucasThompson: { title: 'Maternal work early in the lives of children and its distal associations with achievement and behavior problems (Lucas-Thompson et al. 2010)', publisher: 'Psychological Bulletin', url: 'https://europepmc.org/article/MED/20919797' },
  familyBf: { title: 'Family-centred breastfeeding interventions to improve exclusive breastfeeding: systematic review and meta-analysis (2026)', publisher: 'Nursing Open', url: 'https://europepmc.org/article/MED/42400223' },
  lullabySlings: { title: 'How to use baby slings and carriers safely', publisher: 'The Lullaby Trust (reviewed 2025)', url: 'https://www.lullabytrust.org.uk/safer-sleep-advice/swaddling-slings/' },
  lullabyFeeding: { title: 'Investigating the safety of slings and baby carriers', publisher: 'The Lullaby Trust (April 2025)', url: 'https://www.lullabytrust.org.uk/investigating-the-safety-of-slings-and-baby-carriers/' },
  slingReview: { title: 'Safety and benefits of adult-worn slings and baby carriers: a narrative systematic review (2026)', publisher: 'BMJ Paediatrics Open', url: 'https://europepmc.org/article/MED/42235974' },
  slingSurvey: { title: 'Adult-worn sling and baby carrier safety: parental practices, knowledge and information needs (2026)', publisher: 'BMJ Paediatrics Open', url: 'https://europepmc.org/article/MED/42235975' },
  bergounioux: { title: 'Sudden deaths in adult-worn baby carriers: 19 cases (Bergounioux et al. 2015)', publisher: 'European Journal of Pediatrics', url: 'https://europepmc.org/article/MED/26174105' },
  cpsc: { title: 'Parents: use extra caution when wearing baby slings', publisher: 'US Consumer Product Safety Commission (2010)', url: 'https://onsafety.cpsc.gov/blog/2010/03/12/parents-use-extra-caution-when-wearing-baby-slings/' },
  qld: { title: 'Baby slings', publisher: 'Queensland Government, Office of Fair Trading (2022)', url: 'https://www.qld.gov.au/community/fair-trading/consumer-rights-complaints-and-scams/product-safety-for-consumers/safety-advice-and-warnings/baby-products/baby-slings' },
  ihdi: { title: 'Baby carriers and other equipment', publisher: 'International Hip Dysplasia Institute', url: 'https://hipdysplasia.org/baby-carriers-other-equipment/' },
};

export const APART_CARRY_GUIDES: Guide[] = [
  {
    slug: 'milk-when-apart',
    title: 'Feeding your baby when you’re apart',
    emoji: '🍼',
    summary: 'Expressing, storing and thawing breast milk, bottles from carers, formula on the go, and going back to work.',
    minutes: 5,
    minMonths: 0,
    maxMonths: 24,
    topic: 'food',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.cdcStorage, R.nhsStoring, R.abm8, R.nhsHand, R.cdcPump, R.cdcBottle, R.paced, R.ukhsaTravel, R.nhsWork, R.aapWork, R.nhsMixed, R.cochraneWork, R.goldberg, R.lucasThompson, R.familyBf],
    relatedTags: ['everyday'],
    blocks: [
      { type: 'p', text: 'Going back to work or study, a night away, or a carer giving some feeds: there are many reasons to feed your baby when you’re apart. Breast milk, formula or a mix of both can all work. Here’s how to keep milk safe and feeds calm.' },
      { type: 'h', text: 'Expressing by hand' },
      {
        type: 'steps',
        items: [
          { title: 'Get ready', text: 'Wash your hands, use a clean, sterilised container, and sit somewhere warm and quiet.' },
          { title: 'Warm and stroke', text: 'Gently stroke the breast from the armpit towards the nipple.' },
          { title: 'Make a C', text: 'Cup the breast with your thumb and fingers opposite each other, about 2 to 3 cm back from the nipple.' },
          { title: 'Press and release', text: 'Squeeze gently, let go, and keep a steady rhythm. It can take a few minutes before drops come.' },
          { title: 'Move round, then swap', text: 'When the flow slows, move your fingers round the breast. Then do the other side, and come back to the first.' },
        ],
      },
      { type: 'p', text: 'A pump can be quicker, but hand expression costs nothing and is useful for breasts that feel full and sore.' },
      { type: 'h', text: 'How long milk keeps' },
      {
        type: 'table',
        head: ['Where', 'How long', 'Good to know'],
        rows: [
          ['A cool room', 'Up to 4 hours', 'In a hot room, chill it sooner'],
          ['Cool bag with frozen ice packs', 'Up to 24 hours', 'Then use it, or move it to the fridge or freezer'],
          ['Fridge, at the back, 4°C or colder', 'Up to 4 days', 'Some health services allow longer'],
          ['Ice box inside a fridge', 'Up to 2 weeks', 'Not for long-term storage'],
          ['Freezer, −18°C or colder', 'About 6 months', 'Some health services allow up to 12 months'],
        ],
      },
      { type: 'callout', tone: 'science', text: 'Health services give different storage times, because the studies are small and older and kitchens differ. We give the shorter times. If your health centre gives different ones, follow them. A baby in hospital follows the unit’s own rules.' },
      { type: 'h', text: 'Thawing and warming' },
      {
        type: 'list',
        items: [
          'Thaw milk in the fridge overnight, or stand the sealed bag or bottle in warm water.',
          'Use thawed milk as soon as you can. If it thawed in the fridge, use it within 24 hours, and within 2 hours once it is warm.',
          'Never refreeze milk that has thawed. Freezing small portions means less goes to waste.',
          'Cold milk is fine if your baby takes it. To warm it, use warm water, not boiling, and test a few drops on your wrist.',
          'Stored milk can smell a little soapy, which is normal. Throw it away if it looks stringy or smells foul.',
        ],
      },
      { type: 'callout', tone: 'safety', text: 'Never thaw or warm breast milk or formula in a microwave. It heats unevenly and can burn your baby’s mouth. Throw away any milk left in the bottle after a feed.' },
      { type: 'h', text: 'Keeping pump parts clean' },
      {
        type: 'list',
        items: [
          'Take the parts apart and rinse off the milk under running water.',
          'Wash them as soon as you can after pumping, then let them air-dry. A tea towel can put germs back on.',
          'Sterilise them as your health service advises, and at least once a day if your baby is under 2 months, was born early or is unwell.',
        ],
      },
      { type: 'h', text: 'A bottle from someone else' },
      { type: 'p', text: 'A breastfed baby often takes a bottle more easily from someone other than the person who breastfeeds them. Start when your baby is calm and not too hungry, and show the carer these steps.' },
      {
        type: 'steps',
        items: [
          { title: 'Close and upright', text: 'Hold the baby close and fairly upright, never lying flat.' },
          { title: 'Bottle tipped', text: 'Hold the bottle at an angle, so milk only flows when the baby sucks.' },
          { title: 'Pauses allowed', text: 'Let the baby take breaks whenever they want.' },
          { title: 'Stop at full', text: 'Stop when they turn away or relax, even if milk is left. Never push them to finish.' },
        ],
      },
      { type: 'callout', tone: 'safety', text: 'Never prop a bottle or leave a baby alone with one. They could choke.' },
      { type: 'callout', tone: 'science', text: 'This slower, baby-led way is often called paced bottle feeding. In a small study of 29 babies, it made feeds slower without changing how much milk babies took. We don’t yet know whether it helps breastfeeding last longer.' },
      { type: 'h', text: 'Formula on the go' },
      {
        type: 'list',
        items: [
          'Easiest: a carton of ready-to-feed liquid formula.',
          'Or take a clean flask, filled to the top with water that has just boiled and sealed, and the powder measured into a separate clean, dry pot. Make the feed when it’s needed.',
          'Had to make a feed earlier? Cool it quickly and keep it in the fridge. Carry it in a cool bag with an ice pack and use it within 4 hours, or within 2 hours without one.',
        ],
      },
      { type: 'h', text: 'Going back to work' },
      {
        type: 'steps',
        items: [
          { title: 'Tell your workplace early', text: 'Say in writing that you’re breastfeeding. Ask about flexible hours, a private room (not a toilet) and somewhere to keep milk cold.' },
          { title: 'Practise first', text: 'Try expressing, and have a few trial days with the new carer before you start. Starting in the middle of the week makes the first week shorter.' },
          { title: 'Keep the milk flowing', text: 'At first, expect to express about every 3 hours while you’re apart, and breastfeed often when you’re together. Skipped or short sessions are the usual reason milk drops.' },
          { title: 'Adding formula?', text: 'Swap one feed at a time, and give your body about a week to adjust before the next. Formula feeds will probably lower your milk, so keep breastfeeding regularly if you want to carry on.' },
        ],
      },
      { type: 'callout', tone: 'science', text: 'Large reviews of dozens of studies found that, on average, children whose mothers work do as well as children whose mothers stay at home. Warm, steady care and what happens at home matter more. These studies show links, not proof. In the first year, shorter hours and shared care may help.' },
      { type: 'p', text: 'Partners and family count too. In a review of studies that involved fathers and grandparents in breastfeeding support, more babies were still having only breast milk at 6 months.' },
      { type: 'callout', tone: 'tip', text: 'No trials have tested workplace support for breastfeeding yet, but studies link a private room, breaks and a supportive manager with breastfeeding for longer. It’s worth asking.' },
      { type: 'callout', tone: 'safety', text: 'If expressing or feeding hurts, or a breast becomes painful, red or hot, ask your health worker or a breastfeeding supporter soon. Get help the same day if your baby has fewer wet nappies than usual.' },
    ],
  },
  {
    slug: 'slings-and-carriers',
    title: 'Slings and carriers, safely',
    emoji: '🤱',
    summary: 'Five quick checks, why feeding and hot drinks wait, the first months, and keeping hips healthy.',
    minutes: 3,
    minMonths: 0,
    maxMonths: 24,
    topic: 'safety',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.lullabySlings, R.lullabyFeeding, R.slingReview, R.slingSurvey, R.bergounioux, R.cpsc, R.qld, R.ihdi],
    relatedTags: ['calm-down'],
    blocks: [
      { type: 'p', text: 'Carrying your baby close can soothe them, free your hands and help you both feel connected. Most of the time it goes well. Rarely, babies have suffocated in slings, almost always very young babies, and usually when the carrier was loose or badly placed. A few checks make it much safer.' },
      { type: 'h', text: 'Five checks, every time' },
      {
        type: 'table',
        head: ['Check', 'What it means'],
        rows: [
          ['Tight', 'Snug, so your baby is held against you and can’t slump down'],
          ['In view at all times', 'You can see their face just by looking down'],
          ['Close enough to kiss', 'Their head is high enough that you can kiss the top of it'],
          ['Chin off the chest', 'Their chin isn’t pressed down onto their chest'],
          ['Back supported', 'Their back is held in its natural curve, tummy and chest against you'],
        ],
      },
      { type: 'callout', tone: 'safety', text: 'Babies under 4 months, and those born early, small or with breathing or other health problems, are most at risk. They can’t lift their head if their face presses into fabric or their chin drops onto their chest. Check them often, and if your baby was premature or has a health condition, ask your health worker before using a sling.' },
      { type: 'h', text: 'Things that wait' },
      {
        type: 'list',
        items: [
          'Feeding: take your baby out of the sling to feed, especially in the first 4 months. Feeding hands-free while you move about isn’t safe.',
          'Cooking and hot drinks: none while your baby is in a carrier.',
          'Running and cycling: not with a baby in a carrier.',
          'Sleep: if your baby falls asleep, keep checking them, and move them to their own flat, firm cot when you can.',
        ],
      },
      { type: 'callout', tone: 'tip', text: 'Bending down? Hold your baby with one hand behind their back and bend at the knees, not the waist. Falls are the most common injury with carriers.' },
      { type: 'h', text: 'Healthy hips' },
      { type: 'p', text: 'Hips grow best when your baby’s thighs are spread around you and supported out to the knees, with the knees bent up, like an M. Narrow carriers that leave the legs dangling aren’t recommended for long periods. A short time in any carrier is unlikely to matter.' },
      { type: 'callout', tone: 'science', text: 'A review of 62 studies found carriers can support breastfeeding, closeness and parents’ wellbeing. It also found rare deaths, mostly from blocked breathing, and injuries, mostly falls, usually when the carrier fitted badly. Most studies were small. In a UK survey, a quarter of parents didn’t know the safety advice.' },
      { type: 'callout', tone: 'tip', text: 'Ask a midwife, health worker or experienced friend to show you how to use your carrier. Many products come with little safety information.' },
    ],
  },
];
