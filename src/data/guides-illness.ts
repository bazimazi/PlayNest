import type { Guide } from './types';

/**
 * Common illnesses managed at home (release 1.8): tummy bugs, coughs and colds, skin, and hot days. Research:
 * research_notes/PlayNest phase 8 research round 5/03_common_illnesses_at_home.md.
 *
 * Rules: no doses or volumes of anything (ORS, zinc, fever medicine, creams, sunscreen). Where bodies disagree, the cautious
 * path, and the guide says they differ. Red flags agree with `fever-and-sick-days` and the first-aid cards `dehydration`,
 * `trouble-breathing`, `very-unwell` and `heatstroke-hot-car`. The English stays general; the Persian names Iran's own
 * practice (zinc in the national sick-child programme, rotavirus vaccine at 2, 4 and 6 months since 1403, دوغ, بخور).
 * "Daily moisturiser from birth" is described as not needed rather than harmful: the large trials and Cochrane found no
 * benefit and more skin infections, one newer trial found a small benefit.
 */
const CHECKED = '2026-11-17';

const R = {
  whoDiarrhoea: { title: 'Diarrhoeal disease: fact sheet (2024)', publisher: 'World Health Organization', url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease' },
  whoZinc: { title: 'Guideline on management of pneumonia and diarrhoea in children up to 10 years of age (2024)', publisher: 'World Health Organization, via BIGG-REC', url: 'https://bigg-rec.bvsalud.org/en/recommendations/e9620e500e6f977da8bfbac6a69eba9544933b09' },
  nhsDV: { title: 'Diarrhoea and vomiting', publisher: 'NHS (reviewed December 2023)', url: 'https://www.nhs.uk/conditions/diarrhoea-and-vomiting/' },
  aapDiarrhoea: { title: 'Diarrhea', publisher: 'American Academy of Pediatrics (HealthyChildren.org)', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Diarrhea.aspx' },
  mana: { title: 'Integrated care of childhood illness (MANA): booklet for health workers', publisher: 'Iran Ministry of Health, via Iran University of Medical Sciences (2022)', url: 'https://shahriar.iums.ac.ir/uploads/54/2022/Nov/01/' },
  target: { title: 'Treating your infection: respiratory tract infections (v4.0, 2024)', publisher: 'UK Health Security Agency and RCGP (TARGET)', url: 'https://elearning.rcgp.org.uk/pluginfile.php/172227/mod_book/chapter/484/UKHSA_13026_TYI%20RTI%20leaflet%20A5_10_referenced.pdf' },
  thompson: { title: 'Duration of symptoms of respiratory tract infections in children: systematic review (Thompson et al. 2013)', publisher: 'BMJ', url: 'https://doi.org/10.1136/bmj.f7027' },
  cochraneEar: { title: 'Antibiotics for acute otitis media in children (Venekamp et al. 2023)', publisher: 'Cochrane Database of Systematic Reviews', url: 'https://doi.org/10.1002/14651858.CD000219.pub5' },
  nhsCroup: { title: 'Croup', publisher: 'NHS (reviewed August 2023)', url: 'https://www.nhs.uk/conditions/croup/' },
  aapCroup: { title: 'Croup in young children', publisher: 'American Academy of Pediatrics (HealthyChildren.org, 2024)', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Croup-Treatment.aspx' },
  nhsEar: { title: 'Ear infections', publisher: 'NHS (reviewed January 2025)', url: 'https://www.nhs.uk/conditions/ear-infections/' },
  honey: { title: 'Honey for acute cough in children: a systematic review (Kuitunen & Renko 2023)', publisher: 'European Journal of Pediatrics', url: 'https://doi.org/10.1007/s00431-023-05066-1' },
  nhsEczema: { title: 'Atopic eczema', publisher: 'NHS (reviewed September 2024)', url: 'https://www.nhs.uk/conditions/atopic-eczema/' },
  aapEczema: { title: 'Eczema in children', publisher: 'American Academy of Pediatrics (HealthyChildren.org, 2025)', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx' },
  herpeticum: { title: 'Eczema herpeticum', publisher: 'DermNet (2023)', url: 'https://dermnetnz.org/topics/eczema-herpeticum' },
  cochraneSkin: { title: 'Skin care interventions in infants for preventing eczema and food allergy (Kelleher et al. 2022)', publisher: 'Cochrane Database of Systematic Reviews', url: 'https://doi.org/10.1002/14651858.CD013534.pub3' },
  beep: { title: 'Daily emollient during infancy for prevention of eczema: the BEEP trial (Chalmers et al. 2020)', publisher: 'The Lancet', url: 'https://doi.org/10.1016/S0140-6736(19)32984-8' },
  nhsNappy: { title: 'Nappy rash', publisher: 'NHS (reviewed August 2026)', url: 'https://www.nhs.uk/baby/caring-for-a-newborn/nappy-rash/' },
  aapNappy: { title: 'Diaper rash', publisher: 'American Academy of Pediatrics (HealthyChildren.org, 2024)', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Diaper-Rash.aspx' },
  whoHeat: { title: 'Climate change, heat and health: fact sheet (2026)', publisher: 'World Health Organization', url: 'https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health' },
  nhsHeatwave: { title: 'Heatwave: how to cope in hot weather', publisher: 'NHS (reviewed June 2026)', url: 'https://www.nhs.uk/live-well/seasonal-health/heatwave-how-to-cope-in-hot-weather/' },
  nhsHeatstroke: { title: 'Heat exhaustion and heatstroke', publisher: 'NHS (reviewed May 2026)', url: 'https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/' },
  nhsSun: { title: 'Safety in the sun', publisher: 'NHS (reviewed September 2024)', url: 'https://www.nhs.uk/baby/first-steps-and-safety/safety-in-the-sun/' },
  aapSun: { title: 'Sun safety: information for parents', publisher: 'American Academy of Pediatrics (HealthyChildren.org, 2024)', url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Sun-Safety.aspx' },
  cdcHeat: { title: 'Heat and infants and children', publisher: 'Centers for Disease Control and Prevention (2024)', url: 'https://www.cdc.gov/heat-health/risk-factors/infants-and-children.html' },
};

export const ILLNESS_GUIDES: Guide[] = [
  {
    slug: 'tummy-bugs',
    title: 'Tummy bugs: diarrhoea and vomiting',
    emoji: '🤢',
    summary: 'Most pass in a few days. The main job is fluids: how to use rehydration salts, what to feed, and when to get help.',
    minutes: 3,
    minMonths: 0,
    maxMonths: 144,
    topic: 'health',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.whoDiarrhoea, R.whoZinc, R.nhsDV, R.aapDiarrhoea, R.mana],
    blocks: [
      { type: 'p', text: 'Vomiting usually stops within 1 to 2 days, and diarrhoea within 5 to 7. The danger is drying out, so the main job is keeping fluids going. Breastfed babies often have loose, yellow poo: diarrhoea means much looser or more frequent than is usual for your child.' },
      { type: 'h', text: 'Fluids first' },
      {
        type: 'list',
        items: [
          'Keep breastfeeding, more often rather than less. Keep formula at its usual strength: never make it weaker.',
          'Rehydration salts (ORS) replace what the body loses. Use ready-made sachets, mixed with exactly the amount of water the pack says. Too strong or too weak can do harm, so don’t make your own mix.',
          'Give small sips often, from a spoon or cup. If they’re sick, wait about 10 minutes, then start again, more slowly.',
          'Avoid fruit juice, fizzy drinks, sports drinks and sweet packaged drinks. They can make diarrhoea worse.',
        ],
      },
      { type: 'h', text: 'Food and medicines' },
      {
        type: 'list',
        items: [
          'Offer normal food once they want it. No special diet is needed, and going without food doesn’t help.',
          'Don’t give anti-diarrhoea medicines to children unless a doctor prescribes them.',
          'In many countries, health centres give zinc for 10 to 14 days with diarrhoea, which can shorten it a little. Ask your health centre or pharmacist about it and the amount.',
        ],
      },
      {
        type: 'table',
        head: ['Get help now', 'See a doctor today'],
        rows: [
          ['Green or yellow-green vomit, or vomit with blood or that looks like coffee grounds', 'A baby under 6 months with diarrhoea or vomiting'],
          ['Very sleepy, floppy, hard to wake or confused', 'Signs of drying out: fewer wet nappies, dark pee, dry mouth, no tears, sunken eyes'],
          ['Pale, grey, blue or blotchy skin or lips, or fast or hard breathing', 'Can’t keep any fluids down, or stops feeding'],
          ['Severe tummy pain that doesn’t ease, or a swollen, hard tummy', 'Blood in the poo'],
          ['May have swallowed a medicine or chemical', 'Vomiting for more than a day, or diarrhoea for more than 5 to 7 days'],
        ],
      },
      { type: 'callout', tone: 'safety', text: 'Health bodies give different limits for how long is too long, from 12 hours of vomiting for young children to several days. When unsure, ask sooner, especially for babies. For anything in the first column, call your emergency number or go to hospital. See the Dehydration card.' },
      { type: 'h', text: 'Stopping the spread' },
      {
        type: 'list',
        items: [
          'Wash hands with soap and water after the toilet or a nappy change, and before food.',
          'Separate towels, and wash soiled clothes and bedding on a hot wash.',
          'Keep them home until 48 hours after the last vomit or runny poo.',
          'The rotavirus vaccine, given to babies in their first months in many countries, prevents many of the worst tummy bugs. Ask your health centre if your baby has had it.',
        ],
      },
    ],
  },
  {
    slug: 'coughs-colds-ears',
    title: 'Coughs, colds, sore throats and earache',
    emoji: '🤧',
    summary: 'How long each usually lasts, why antibiotics rarely help, what eases them, and the signs that need a doctor.',
    minutes: 3,
    minMonths: 0,
    maxMonths: 144,
    topic: 'health',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.target, R.thompson, R.cochraneEar, R.nhsCroup, R.aapCroup, R.nhsEar, R.honey, R.mana],
    blocks: [
      { type: 'p', text: 'Young children catch many colds, and most of these illnesses last longer than parents are often told. Knowing what’s usual helps you tell a slow recovery from one that needs a doctor.' },
      {
        type: 'table',
        head: ['Illness', 'Most children are better by'],
        rows: [
          ['Earache', 'About 3 days, though it can last a week'],
          ['Sore throat', 'About a week'],
          ['Cold', 'About 2 weeks'],
          ['Cough', '3 to 4 weeks after a cold'],
        ],
      },
      { type: 'h', text: 'Why antibiotics rarely help' },
      { type: 'p', text: 'Most of these are caused by viruses, and antibiotics don’t work on viruses. Even for ear infections, they usually don’t ease the pain in the first day, and about 1 in 14 children who take them gets a tummy upset or rash. Taking them when they can’t help makes germs harder to treat later. A doctor will prescribe them when they’re needed.' },
      { type: 'h', text: 'What helps' },
      {
        type: 'list',
        items: [
          'Plenty of drinks, rest, and more breastfeeds for babies.',
          'Salt-water nose drops and gentle nose clearing, so babies can feed.',
          'Over 1 year: a little honey may ease a cough. Never honey under 1.',
          'Soft, cool foods for a sore throat. No hard sweets for young children.',
          'Fever or pain medicine for comfort, as the Medicines at home guide explains.',
          'A smoke-free home. Smoke makes coughs and ear infections worse.',
        ],
      },
      { type: 'h', text: 'What to skip' },
      {
        type: 'list',
        items: [
          'Steam from a bowl of hot water, with or without herbs. It doesn’t help croup or coughs, and it can scald.',
          'Oil, cotton buds or anything else in a sore ear.',
          'Cough and cold medicines for young children, unless a doctor advises them.',
        ],
      },
      { type: 'h', text: 'Croup' },
      { type: 'p', text: 'Croup causes a barking cough, a hoarse voice and sometimes a rasping sound when breathing in, often worse at night. Keep your child upright and calm, since crying makes it worse, and see a doctor the same day: there is medicine that helps. It usually improves within 2 days.' },
      {
        type: 'table',
        head: ['Get help now', 'See a doctor soon'],
        rows: [
          ['Struggling to breathe: ribs or tummy sucking in, grunting, can’t speak or feed', 'A barking cough that might be croup'],
          ['A rasping sound breathing in while calm and resting', 'Earache for more than 3 days, fluid from the ear, or swelling behind it'],
          ['Blue, grey or very pale lips or skin', 'A baby under 1 with earache, or a child under 5 with a sore throat'],
          ['Drooling, can’t swallow, or wants to sit leaning forward', 'A cough lasting more than 3 to 4 weeks, or getting worse instead of better'],
          ['Very sleepy, floppy or hard to wake, a stiff neck, or a rash that doesn’t fade under a glass', 'Signs of drying out, or a fever beyond what the fever guide says'],
        ],
      },
      { type: 'callout', tone: 'safety', text: 'For anything in the first column, call your emergency number. See the Trouble breathing card, and Fever and sick days for fevers.' },
    ],
  },
  {
    slug: 'eczema-and-nappy-rash',
    title: 'Eczema, dry skin and nappy rash',
    emoji: '🧴',
    summary: 'Everyday skin care that works, the two kinds of flare that need a doctor the same day, and myths to let go of.',
    minutes: 3,
    minMonths: 0,
    maxMonths: 144,
    topic: 'health',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.nhsEczema, R.aapEczema, R.herpeticum, R.cochraneSkin, R.beep, R.nhsNappy, R.aapNappy],
    blocks: [
      { type: 'p', text: 'Eczema is dry, itchy, sore skin that comes and goes. It runs in families and is about the skin’s barrier. It isn’t caused by poor care, it isn’t catching, and it often improves as children grow.' },
      { type: 'h', text: 'Everyday care' },
      {
        type: 'list',
        items: [
          'Moisturiser is the main treatment. Use plenty, at least twice a day, and keep going on good days too.',
          'Wash with a soap substitute rather than soap. Short, lukewarm baths, then pat dry and moisturise straight away.',
          'Take moisturiser out with a clean spoon or pump, not fingers.',
          'Keep nails short, and use scratch mittens for babies. Keep them cool: heat makes itching worse.',
          'Creams for flares come from a doctor. Use them as the doctor says: using too little, or stopping too soon, is a common reason eczema doesn’t settle.',
          'Moisturisers soak into clothes and bedding and make them catch fire more easily. Keep children away from heaters and open flames.',
        ],
      },
      { type: 'h', text: 'Two flares that need a doctor the same day' },
      {
        type: 'list',
        items: [
          'Infected eczema: yellow crusts, weeping, pus spots, skin that is hot or painful, or eczema that suddenly gets much worse.',
          'Clusters of small blisters or round, punched-out sores, often with a fever. This can be the cold-sore virus spreading over eczema, which needs treatment quickly. Go to hospital if your child is very unwell or it is near the eyes.',
        ],
      },
      { type: 'callout', tone: 'tip', text: 'Anyone with a cold sore shouldn’t kiss a baby or child who has eczema, however much they love them.' },
      { type: 'h', text: 'Myths to let go of' },
      {
        type: 'list',
        items: [
          '“Moisturise every day from birth to prevent eczema.” The largest trials found it didn’t prevent eczema, and it slightly raised skin infections. You don’t need to. Do moisturise skin that is dry.',
          '“Eczema is caused by food.” Some children with eczema also have food allergies, but food isn’t the cause. Don’t cut foods out without a doctor’s advice, including while breastfeeding. See Starting solid food.',
        ],
      },
      { type: 'h', text: 'Nappy rash' },
      {
        type: 'list',
        items: [
          'Change wet or dirty nappies promptly. Clean gently with water, and pat dry.',
          'Give nappy-free time when you can.',
          'Use a thick layer of barrier cream, adding more on top rather than scrubbing it off.',
          'Skip soap, talc, perfumed wipes, antiseptic creams and plant pastes. Never put henna on a baby’s skin: in babies with G6PD deficiency it can cause a serious reaction.',
          'See a doctor or health worker if it isn’t better in 2 to 3 days, or there are blisters, pus, spreading redness, red spots at the edges, or a fever.',
        ],
      },
    ],
  },
  {
    slug: 'hot-days-and-sun',
    title: 'Hot days and sun',
    emoji: '☀️',
    summary: 'Children heat up faster than adults: keeping cool at home and outside, drinks by age, sun care, and heat warning signs.',
    minutes: 3,
    minMonths: 0,
    maxMonths: 144,
    topic: 'health',
    checkedOn: CHECKED,
    sources: ['nhs-sun-safety'],
    refs: [R.whoHeat, R.nhsHeatwave, R.nhsHeatstroke, R.nhsSun, R.aapSun, R.cdcHeat],
    relatedTags: ['hot-day', 'water'],
    blocks: [
      { type: 'p', text: 'Babies and young children heat up faster than adults and can’t always tell you they’re thirsty. On very hot days, plan the day around the heat.' },
      { type: 'h', text: 'Keeping cool' },
      {
        type: 'list',
        items: [
          'Close curtains and windows on the sunny side during the day, and open windows at night if it’s cooler outside.',
          'Spend the hottest hours in the coolest room. Lukewarm baths and damp cloths help.',
          'Fans help less once the air is above about 35°C. Don’t point a fan straight at a baby.',
          'Light, loose cotton clothes, and thin bedding at night.',
          'Never cover a pram or buggy with a blanket or dry cloth: it traps heat. Use a parasol or shade, and check often.',
          'Never leave a child in a parked car, not even for a minute.',
        ],
      },
      { type: 'h', text: 'Drinks' },
      {
        type: 'list',
        items: [
          'Babies under 6 months who have only breast milk don’t need water. Offer more breastfeeds instead.',
          'Formula-fed babies may have a little cooled boiled water between feeds.',
          'From 6 months, offer water often. Older children need reminding to drink.',
          'Keep drinking water and rehydration sachets at home in summer, in case of water or power cuts.',
        ],
      },
      { type: 'h', text: 'Sun' },
      {
        type: 'list',
        items: [
          'Under 6 months: keep out of direct sun. Shade and clothes come first. Health bodies differ on sunscreen at this age, so use it only on small areas if there’s truly no shade.',
          'From 6 months: shade, a wide-brimmed hat, sunglasses, and sunscreen of SPF 30 or more, put on again every 2 hours and after water.',
          'Stay in the shade around the middle of the day, when shadows are shortest.',
        ],
      },
      {
        type: 'table',
        head: ['Signs of overheating', 'What to do'],
        rows: [
          ['Tired, cranky, headache, very sweaty, pale and clammy, thirsty, fewer wet nappies', 'Move somewhere cool, remove extra clothes, give fluids, cool the skin with water. They should feel better within 30 minutes.'],
          ['Hot skin that isn’t sweating, confusion, very drowsy or floppy, a fit, or not better after 30 minutes', 'An emergency. Call your emergency number and keep cooling. See the Heatstroke or hot car card.'],
        ],
      },
      { type: 'callout', tone: 'safety', text: 'In a power cut, never run a generator, charcoal or gas burner indoors, even for a short while: carbon monoxide builds up without a smell. On dusty days, see Polluted air and dust days.' },
    ],
  },
];
