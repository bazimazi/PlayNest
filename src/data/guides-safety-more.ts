import type { Guide } from './types';

/**
 * More injury prevention (release 1.8): festival nights and fireworks, dogs and other animals, furniture and TVs that tip,
 * and water. Research: research_notes/PlayNest phase 8 research round 5/06_injury_gaps.md.
 *
 * Rules: the English stays culture-neutral and the Persian adapts it (Chaharshanbe Suri, حوض and farm pools, Iran's rabies
 * centres). No yearly totals are shown as current, and no trend is drawn from two festival years counted differently.
 * Swimming lessons are "one layer", never "drown-proofing". Teaching children about dogs is not claimed to prevent bites:
 * the trials only showed better risk-spotting. Burn and eye steps agree with the first-aid cards `burns-scalds` and
 * `eye-injury`, and bite washing with the updated `dog-bite` card.
 */
const CHECKED = '2026-11-17';

const R = {
  cpsc2025: { title: 'CPSC urges fireworks safety ahead of July 4th (2024 figures)', publisher: 'US Consumer Product Safety Commission (2025)', url: 'https://www.cpsc.gov/Newsroom/News-Releases/2025/CPSC-Urges-Fireworks-Safety-Ahead-of-July-4th-Holiday' },
  cpscReport: { title: '2023 Fireworks Annual Report', publisher: 'US Consumer Product Safety Commission (2024)', url: 'https://cpsc.gov/s3fs-public/2023-Fireworks-Annual-Report.pdf' },
  eAzerbaijan: { title: 'Injuries during a fire festival in East Azerbaijan, Iran (2019)', publisher: 'Journal of Injury and Violence Research', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7187064/' },
  emergency1403: { title: 'Fire festival injuries in 1403, as reported by the head of Iran’s Emergency Organisation', publisher: 'Aftab News, citing IRNA (March 2025)', url: 'https://aftabnews.ir/fa/news/976948/' },
  festivalIran: { title: 'Fire festival injuries across Iran: a national study (2013)', publisher: 'Journal of Injury and Violence Research', url: 'https://doi.org/10.5249/jivr.v5i1.146' },
  whoRabies: { title: 'Rabies: fact sheet (2026)', publisher: 'World Health Organization', url: 'https://www.who.int/news-room/fact-sheets/detail/rabies' },
  cochraneDogs: { title: 'Education of children and adolescents for the prevention of dog bite injuries (Duperrex et al. 2009)', publisher: 'Cochrane Database of Systematic Reviews', url: 'https://doi.org/10.1002/14651858.CD004726.pub2' },
  blueDog: { title: 'Teaching children about dog safety: a randomised trial of The Blue Dog (Schwebel et al. 2012)', publisher: 'Journal of Pediatric Psychology', url: 'https://doi.org/10.1093/jpepsy/jsr102' },
  iranRabies: { title: 'National guideline on animal bites and rabies control in humans (2019)', publisher: 'Pasteur Institute of Iran and Iran Ministry of Health', url: 'https://www.pasteur.ac.ir/' },
  cpscTip: { title: 'TV and furniture tip-overs (2024)', publisher: 'US Consumer Product Safety Commission', url: 'https://www.cpsc.gov/Newsroom/News-Releases/2024/Ahead-of-Sundays-Game-CPSC-Reminds-Families-to-Tackle-the-Deadly-Hazard-of-TV-and-Furniture-Tip-Overs' },
  aapTip: { title: 'Preventing furniture and TV tip-overs', publisher: 'American Academy of Pediatrics (HealthyChildren.org)', url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Preventing-Furniture-and-TV-Tip-Overs.aspx' },
  whoDrowning: { title: 'Drowning: fact sheet (2026)', publisher: 'World Health Organization', url: 'https://www.who.int/news-room/fact-sheets/detail/drowning' },
  aapSwim: { title: 'Swim lessons: when to start and what parents should know (2026)', publisher: 'American Academy of Pediatrics (HealthyChildren.org)', url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Swim-Lessons.aspx' },
  aapDrowning: { title: 'Prevention of drowning: policy statement (2026)', publisher: 'American Academy of Pediatrics, Pediatrics', url: 'https://doi.org/10.1542/peds.2026-077410' },
  fencing: { title: 'Pool fencing for preventing drowning in children (Thompson & Rivara 2000)', publisher: 'Cochrane Database of Systematic Reviews', url: 'https://doi.org/10.1002/14651858.CD001047' },
  hormozgan: { title: 'Drowning deaths in children under 5 in Hormozgan, Iran (2019)', publisher: 'Journal of Injury and Violence Research', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7036146/' },
};

export const SAFETY_MORE_GUIDES: Guide[] = [
  {
    slug: 'festival-fires-fireworks',
    title: 'Festival nights: fires and fireworks',
    emoji: '🎆',
    summary: 'Keep the fun of fire and fireworks, and keep eyes and hands safe: a plan by age, and what to do if something happens.',
    minutes: 3,
    minMonths: 0,
    maxMonths: 144,
    topic: 'safety',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.cpsc2025, R.cpscReport, R.eAzerbaijan, R.festivalIran, R.emergency1403],
    blocks: [
      { type: 'p', text: 'Fire and fireworks are part of many family celebrations, and children love them. Most injuries are to hands and eyes, and many happen to people who were only watching or walking past. A little planning keeps the joy and lowers the risk.' },
      {
        type: 'table',
        head: ['Age', 'A safe way to join in'],
        rows: [
          ['Babies and toddlers', 'Indoors or well back, in an adult’s arms. Loud bangs can hurt small ears, so keep them far from the noise.'],
          ['3 to 5 years', 'Watch from a distance, holding an adult’s hand. No sparklers: they cause about half of firework injuries in under-5s.'],
          ['5 to 8 years', 'Stay with an adult, well back from the fire and from anyone setting off fireworks.'],
          ['9 to 12 years', 'An adult with them all evening. Agree the plan beforehand, including what they can and can’t buy.'],
        ],
      },
      { type: 'h', text: 'Before the night' },
      {
        type: 'list',
        items: [
          'Talk with older children about fireworks and pocket money. Children sometimes buy them in secret and carry them in pockets or bags.',
          'Nothing homemade, ever. Homemade bangers and explosives cause many of the worst injuries.',
          'Agree a plan together rather than only banning: where you’ll go, who they’ll be with, and when you’ll leave.',
        ],
      },
      { type: 'h', text: 'On the night' },
      {
        type: 'list',
        items: [
          'Keep a fire small, in an open space, away from cars, gas pipes and electricity boxes, with a bucket of water beside it.',
          'Fitted clothes near any fire, and long hair tied back. Loose clothing catches fire easily.',
          'If your family jumps over a fire, keep it very small and low, older children only, one at a time, with an adult beside it. Young children watch.',
          'Never go back to a firework that didn’t go off, and never relight one.',
          'In the street, keep away from groups setting off bangers, and keep car windows closed.',
          'Afterwards, wait before collecting used fireworks, then soak them in water. Make sure the fire is fully out.',
        ],
      },
      { type: 'callout', tone: 'science', text: 'A sparkler burns at over 1,000°C, hotter than a cooker flame. In US hospital data, children under 15 had about a third of firework injuries, and in Iranian studies of fire festivals, many of those hurt were young people and passers-by.' },
      { type: 'h', text: 'If something happens' },
      {
        type: 'list',
        items: [
          'Eye hit by anything: don’t let them rub or press it, and don’t try to take anything out. Cover it loosely with a paper cup and go to an emergency department now. A chemical splash is different: rinse it. See the Eye injury card.',
          'Burn: cool running water for 20 minutes, straight away. See the Burns and scalds card.',
          'Any burn to the face, hands or eyes, or any injury from a blast, needs a doctor the same night. Call your emergency number for anything serious.',
        ],
      },
    ],
  },
  {
    slug: 'children-and-animals',
    title: 'Children, dogs and other animals',
    emoji: '🐕',
    summary: 'Safe habits with family pets and street animals, and the two steps after any bite or scratch that prevent rabies.',
    minutes: 3,
    minMonths: 12,
    maxMonths: 144,
    topic: 'safety',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.whoRabies, R.iranRabies, R.cochraneDogs, R.blueDog],
    relatedTags: ['nature'],
    blocks: [
      { type: 'p', text: 'Children are bitten by dogs more than adults, and small children are more often bitten on the face. Most bites to young children come from a dog they know. In many countries, dogs can also carry rabies, which is always preventable with prompt care after a bite or scratch.' },
      { type: 'h', text: 'After any bite or scratch' },
      {
        type: 'steps',
        items: [
          { title: 'Wash for 15 minutes', text: 'Wash every bite and scratch under running water with soap for 15 minutes by the clock. Set a timer. Small scratches too, and cat scratches too.' },
          { title: 'Get care the same day', text: 'Then see a doctor or clinic the same day, even if it looks small. Where rabies is present, vaccines given soon after a bite prevent it. Don’t wait to see whether the animal gets ill.' },
        ],
      },
      { type: 'p', text: 'Don’t put remedies on the wound instead of getting care. For bleeding or a deep bite, see the Dog or animal bite card.' },
      { type: 'h', text: 'Pets at home' },
      {
        type: 'list',
        items: [
          'Never leave a baby or toddler alone with any dog, even a gentle one, even for a moment.',
          'Give the dog a quiet place to rest where children don’t go.',
          'No hugging, face-to-face kissing, or taking food or toys from a dog.',
          'Leave cats to come to children, not the other way round. No chasing, cornering or picking up.',
        ],
      },
      { type: 'h', text: 'Dogs outside: rules for children' },
      {
        type: 'list',
        items: [
          'Always ask the owner, and you, before touching any dog.',
          'Leave alone any dog that is eating, sleeping, tied up, or with puppies.',
          'Never go near dogs without an owner, or any animal that is acting strangely.',
          'If a dog comes close, be a tree: stand still, fold your arms, look at your feet. Don’t run or scream.',
          'If knocked over, curl up into a ball and cover your face and neck with your arms.',
        ],
      },
      { type: 'callout', tone: 'science', text: 'Teaching children about dogs helps them spot risky situations, but studies haven’t shown it prevents bites on its own. What matters most is adults watching closely and managing the dog. With a small child near a large dog, pick the child up calmly.' },
      { type: 'callout', tone: 'tip', text: 'After a frightening bite, nightmares and fear of dogs are common. Comfort them and don’t force contact. If the fear is still strong after a few weeks, talk to your doctor.' },
    ],
  },
  {
    slug: 'anchor-furniture',
    title: 'Furniture and TVs that tip',
    emoji: '📺',
    summary: 'Climbing is normal for toddlers. A one-afternoon job makes wardrobes, shelves and TVs safe to be near.',
    minutes: 2,
    minMonths: 6,
    maxMonths: 72,
    topic: 'safety',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.cpscTip, R.aapTip],
    blocks: [
      { type: 'p', text: 'Toddlers climb. It’s how they learn. But a chest of drawers, bookcase or TV can tip when a child climbs it, pulls on it or opens several drawers at once. In the US, most children killed by tip-overs were under 6, and about half of those deaths happened in bedrooms, often when parents thought the child was asleep.' },
      { type: 'h', text: 'The one-afternoon job' },
      {
        type: 'list',
        items: [
          'Fix tall or heavy furniture to the wall with metal brackets: wardrobes, bookcases, dressers and shelves. Plastic straps can weaken over time.',
          'Mount a flat-screen TV on the wall, or strap it to the wall or a low, sturdy stand pushed right back.',
          'Never put a TV on top of a chest of drawers.',
          'Put heavy things on the lowest shelves.',
          'Keep toys, remotes and treats off the tops of furniture, so there’s no reason to climb.',
          'Fit drawer stops if you can, so drawers can’t be pulled out like steps.',
        ],
      },
      { type: 'p', text: 'Start with the bedrooms, where children are often alone.' },
      { type: 'callout', tone: 'tip', text: 'Where earthquakes happen, the same brackets keep furniture from falling in a quake. One job, two kinds of protection. See Ready for an earthquake.' },
      { type: 'callout', tone: 'tip', text: 'Renting? Ask the owner. Small holes are easy to fill when you leave, and many owners agree once they know why.' },
    ],
  },
  {
    slug: 'water-safety',
    title: 'Water safety, in layers',
    emoji: '🌊',
    summary: 'Drowning is quick and quiet. No single step prevents it, so use several: barriers, eyes, skills and knowing what to do.',
    minutes: 3,
    minMonths: 0,
    maxMonths: 144,
    topic: 'safety',
    checkedOn: CHECKED,
    sources: ['aap-drowning'],
    refs: [R.whoDrowning, R.aapDrowning, R.aapSwim, R.fencing, R.hormozgan],
    relatedTags: ['water'],
    blocks: [
      { type: 'p', text: 'Drowning is one of the commonest causes of injury death in young children worldwide. It is usually quick and silent, with no splashing or shouting. Babies and toddlers can drown in a few centimetres of water. No single step prevents it, so health bodies recommend several layers at once.' },
      { type: 'h', text: 'At home' },
      {
        type: 'list',
        items: [
          'Stay within arm’s reach at bath time, and never leave, not even to answer the door. An older child isn’t a substitute.',
          'Empty buckets, basins and baby baths straight after use.',
          'Cover garden ponds, water tanks and wells with something a child can’t lift, open or tear.',
          'A home pool needs a fence on all four sides with a gate that closes and latches itself. A fence round the whole garden still lets a child reach the pool from the house.',
          'Keep the door to the yard or garden closed.',
        ],
      },
      { type: 'h', text: 'Farms, rivers and the sea' },
      {
        type: 'list',
        items: [
          'Irrigation ponds, canals and rivers are “never” places for children without an adult. Tell children clearly, and know where they are when you’re nearby.',
          'Swim only where there is a lifeguard, in the area they watch.',
          'Life jackets in boats, and for children who can’t swim well near open water. Armbands and rings are toys, not safety equipment.',
          'Rivers can rise suddenly. Flood water is never for playing in.',
        ],
      },
      { type: 'h', text: 'A water watcher' },
      { type: 'p', text: 'At a pool, beach or picnic by water, choose one adult to watch the children: no phone, no conversation, eyes on the water. Swap every 15 to 20 minutes so no one gets tired. Everyone assumes someone else is watching unless one person is named.' },
      { type: 'h', text: 'Swimming lessons' },
      { type: 'p', text: 'Lessons may lower the risk, and many children can start from about age 1 when they’re ready. School-age children benefit from learning to swim, float and get out of water. But lessons are one layer, not protection on their own: no child is “drown-proof”, and toddlers still need an adult within arm’s reach.' },
      { type: 'callout', tone: 'safety', text: 'If a child is pulled from water, call your emergency number and see the Drowning card. Anyone who nearly drowned needs a medical check, even if they seem fine.' },
    ],
  },
];
