import type { Guide } from './types';

/**
 * On wheels (bikes, scooters, e-scooters, motorbikes) and electricity at home (release 1.9). Research:
 * research_notes/PlayNest phase 9 research round 6/05_freedom_risk_wheels_electricity.md.
 *
 * Rules from the note: helmet evidence is observational and quoted as "about half the odds" (Olivier & Creighton 2017), never
 * the outdated "85%/88%"; no claim that helmets protect the neck; e-scooters follow the AAP (no riding under 16) and say local
 * laws differ; rising injury counts aren't described as rising risk. The English stays culture-neutral; the Persian cites
 * Iran's helmet and rear-seat rules (traffic regulation arts. 164 and 166) and the health-network advice of no under-5s on
 * motorbikes, and never says carrying a child in front is illegal (the law doesn't say so). Electricity: "uncommon but
 * serious"; the risk is mains plugs and cords, not phone cables; the UK's advice against socket covers depends on UK
 * shuttered sockets and isn't repeated; never push anyone off a power line. Agrees with the `electric-shock` card.
 */
const CHECKED = '2026-11-18';

const R = {
  olivier: { title: 'Bicycle injuries and helmet use: a systematic review and meta-analysis (Olivier & Creighton 2017)', publisher: 'International Journal of Epidemiology', url: 'https://doi.org/10.1093/ije/dyw153' },
  aapHelmets: { title: 'Bicycle helmets: what every parent should know', publisher: 'American Academy of Pediatrics (HealthyChildren.org, June 2024)', url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/bicycle-helmets-what-every-parent-should-know.aspx' },
  aapScooters: { title: 'E-scooters', publisher: 'American Academy of Pediatrics (HealthyChildren.org, September 2026)', url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/E-Scooters.aspx' },
  cpsc: { title: 'Micromobility information center', publisher: 'US Consumer Product Safety Commission', url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Micromobility-Information-Center' },
  motoHelmets: { title: 'Helmets for preventing injury in motorcycle riders (Liu et al.)', publisher: 'Cochrane Database of Systematic Reviews', url: 'https://pubmed.ncbi.nlm.nih.gov/15106247/' },
  rezapour: { title: 'Global evidence on helmet use and misuse among motorcyclists and passengers (Rezapour et al. 2026)', publisher: 'Health Science Reports', url: 'https://doi.org/10.1002/hsr2.72078' },
  whoIran: { title: 'Global status report on road safety 2023: Iran country profile', publisher: 'World Health Organization', url: 'https://cdn.who.int/media/docs/default-source/country-profiles/road-safety/road-safety-2023-irn.pdf' },
  qomLeaflet: { title: 'Preventing road traffic injuries in children (health network leaflet)', publisher: 'Qom University of Medical Sciences, primary health care', url: 'https://phc.muq.ac.ir/' },
  bohrer: { title: 'Electrical injuries among Canadian children and youth, 1997–2010 (Böhrer et al. 2018)', publisher: 'Canadian Journal of Emergency Medicine', url: 'https://doi.org/10.1017/cem.2017.49' },
  guilan: { title: 'An 11-year study of children’s burns in the north of Iran (Tolouei et al. 2023)', publisher: 'International Wound Journal', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10588361/' },
  nhsAccident: { title: 'What to do if your child has an accident', publisher: 'NHS (December 2025)', url: 'https://www.nhs.uk/baby/first-aid-and-safety/first-aid/what-to-do-if-your-child-has-an-accident/' },
  stJohn: { title: 'Electric shock', publisher: 'St John Ambulance Western Australia', url: 'https://stjohnwa.com.au/online-resources/first-aid-information-and-resources/electric-shock' },
  esfRcd: { title: 'Your questions answered: RCDs and socket covers', publisher: 'Electrical Safety First (UK)', url: 'https://www.electricalsafetyfirst.org.uk/guidance/your-questions-answered/' },
};

export const WHEELS_POWER_GUIDES: Guide[] = [
  {
    slug: 'on-wheels',
    title: 'On wheels: bikes, scooters and motorbikes',
    emoji: '🚲',
    summary: 'Helmets that fit, what suits each age, e-scooters and batteries, and children as passengers on motorbikes.',
    minutes: 4,
    minMonths: 12,
    maxMonths: 144,
    topic: 'safety',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.olivier, R.aapHelmets, R.aapScooters, R.cpsc, R.motoHelmets, R.rezapour, R.whoIran, R.qomLeaflet],
    relatedTags: ['nature'],
    blocks: [
      { type: 'p', text: 'Wheels mean freedom, fresh air and confidence. The part that most needs protecting is the head.' },
      { type: 'callout', tone: 'science', text: 'Across 40 studies of more than 64,000 injured cyclists, those wearing a helmet had about half the odds of a head injury, and less than a third the odds of a serious one. These studies compare people after crashes rather than testing helmets in a trial, but they agree with each other.' },
      { type: 'h', text: 'A helmet that fits' },
      {
        type: 'steps',
        items: [
          { title: 'Level and low', text: 'It sits level, covering the top of the forehead. Looking up, your child can see the front edge.' },
          { title: 'Snug strap', text: 'Fasten the chin strap so it is snug. A helmet that isn’t done up can come off in a fall.' },
          { title: 'The push test', text: 'Push it gently forwards, backwards and sideways. It shouldn’t slide over the eyes or tip back.' },
          { title: 'Check and replace', text: 'Look for a safety-standard label inside. Replace it after any crash, and about every 5 years or as the maker says.' },
        ],
      },
      {
        type: 'table',
        head: ['Age', 'What usually suits'],
        rows: [
          ['Under 1', 'Health experts don’t recommend riding on bikes at this age, even in a seat or trailer.'],
          ['1 to 3', 'Ride-on toys and balance bikes in parks and on paths, with a helmet.'],
          ['3 to 5', 'Scooters and balance bikes, away from roads and driveways, with an adult close by.'],
          ['6 to 9', 'Bikes on paths and quiet areas. Practise starting, stopping and looking behind.'],
          ['10 to 12', 'Roads only after training and practice on the route together, and where local rules allow.'],
        ],
      },
      { type: 'callout', tone: 'tip', text: 'Scooters, skates and balance bikes count as wheels too. Same helmet, every ride, even a quick trip to the park.' },
      { type: 'h', text: 'E-scooters, hoverboards and batteries' },
      {
        type: 'list',
        items: [
          'The American Academy of Pediatrics advises no one under 16 to ride an e-scooter, as rider or passenger. Local laws differ, and some places don’t allow them on streets at all.',
          'Charge e-scooters, hoverboards and e-bikes while you are awake and at home, with their own charger. Never overnight, in a bedroom, or by the front door.',
          'Stop using a battery that is swollen, damaged or very hot, and buy from reputable sellers.',
        ],
      },
      { type: 'h', text: 'Children on motorbikes' },
      { type: 'p', text: 'Some health services advise not carrying children under 5 on a motorbike at all: young children can’t hold their head steady under a helmet or cope with sudden braking. Many countries require every passenger to wear a helmet, so check your local law.' },
      {
        type: 'list',
        items: [
          'Their own helmet that fits, fastened, never an adult’s helmet.',
          'A proper passenger seat behind the rider, with feet reaching the footrests and hands holding on.',
          'Never in front of the rider, never more than one child, and always slowly.',
        ],
      },
      { type: 'callout', tone: 'science', text: 'Worldwide, studies found that about a third of motorbike passengers wear a helmet, and fewer than 1 in 5 wear it correctly. We found no study of how many child passengers wear one.' },
      { type: 'callout', tone: 'safety', text: 'After a fall with a knock to the head, see the Head injury card. After a blow to the tummy from handlebars, tummy pain, paleness or vomiting in the following days needs a doctor straight away.' },
    ],
  },
  {
    slug: 'electricity-at-home',
    title: 'Electricity at home',
    emoji: '🔌',
    summary: 'Uncommon but serious: what to watch at each age, sockets and safety switches, kites and power lines, and power cuts.',
    minutes: 3,
    minMonths: 0,
    maxMonths: 144,
    topic: 'safety',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.bohrer, R.guilan, R.nhsAccident, R.stJohn, R.esfRcd, R.cpsc],
    blocks: [
      { type: 'p', text: 'Electrical injuries are uncommon: in Iranian burn units they were about 1 to 3 in 100 children’s burns. But they can be serious. Two ages stand out: toddlers, who explore sockets and cords, and older children and teenagers, who climb and explore outdoors.' },
      {
        type: 'table',
        head: ['Age', 'What to watch'],
        rows: [
          ['6 months to 3', 'Cords, extension leads and plugged-in chargers within reach. Chewing a mains cable can badly burn a baby’s mouth.'],
          ['3 to 7', 'Poking things into sockets, and appliances near water.'],
          ['8 to 12', 'Kites near power lines, climbing poles, walls or trees near lines, electricity substations, and charging phones or scooters in bed.'],
        ],
      },
      { type: 'h', text: 'Around the house' },
      {
        type: 'list',
        items: [
          'Tuck cords and extension leads out of reach, and unplug chargers after use.',
          'Don’t overload adaptors or plug extension leads into each other. Replace cracked plugs and damaged leads.',
          'Keep heaters, hairdryers and charging phones out of the bathroom while children bathe.',
          'Charge phones and tablets on a hard surface, not on a bed or under a pillow.',
          'Warm or scorched sockets, a burning smell or switches that keep tripping are a reason to call an electrician.',
        ],
      },
      { type: 'callout', tone: 'tip', text: 'If your sockets have no built-in shutters, ask an electrician about child-protection sockets. Plug-in covers are a stop-gap, not a fix. Some countries’ sockets, like the UK’s, already have shutters, and safety bodies there don’t recommend plug-in covers.' },
      { type: 'callout', tone: 'tip', text: 'An earth-leakage safety switch (RCD) cuts the power fast if electricity leaks. If your home has one, press its test button every few months. If it doesn’t switch off, or you don’t have one, ask an electrician.' },
      { type: 'h', text: 'Outdoors' },
      { type: 'list', items: ['Fly kites in open ground far from power lines, and never with metal or metal-coated string.', 'If a kite gets stuck near a line, let it go. Never climb a pole, wall or roof to free it.', 'Never go into an electricity substation, or climb poles or pylons.'] },
      { type: 'h', text: 'Power cuts' },
      { type: 'p', text: 'Battery lights are safer than candles. Run generators outdoors only, never inside or in a garage (see Heaters and invisible gas), and keep fuel out of children’s reach.' },
      { type: 'callout', tone: 'safety', text: 'If a shock happens at home, turn off the power before touching your child, then call your emergency number. Power lines, pylons, railway lines or fallen cables are different: don’t go near, stay 10 metres or more away, and call for help. See the Electric shock card.' },
      { type: 'callout', tone: 'science', text: 'Honestly: Iranian data on how children are hurt by electricity is thin, from a few burn units and mostly about adults. In one northern Iranian study, the children hurt by electricity were mostly toddlers.' },
    ],
  },
];
