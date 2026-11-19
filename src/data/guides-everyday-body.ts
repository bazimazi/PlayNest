import type { Guide } from './types';

/**
 * Common, low-drama complaints that worry parents (release 1.9): constipation, threadworms and head lice, and legs, feet and
 * growing pains. Research: research_notes/PlayNest phase 9 research round 6/03_everyday_complaints.md.
 *
 * Rules from the note: no medicine names, amounts or schedules (the only timing given is "a second dose about 2 weeks later,
 * as the pack or doctor says"); extra fibre or water isn't said to cure constipation; laxatives aren't called addictive or
 * "lazy-making"; nothing is to go into a child's bottom without a doctor; lice and worms are never linked with dirt; no
 * hair cutting; corrective shoes and insoles aren't said to change normal development; growing pains aren't said to be
 * caused by growth; toe-walking isn't linked to autism; bowed legs aren't all rickets. Red flags agree with the note's tables.
 * The Persian adds Iranian remedies (شیاف, oils, شیرخشت), kerosene and heaters, and «کفش طبی».
 */
const CHECKED = '2026-11-18';

const R = {
  nice: { title: 'Constipation in children and young people: diagnosis and management (CG99)', publisher: 'NICE (updated 2017)', url: 'https://www.nice.org.uk/guidance/cg99/chapter/Recommendations' },
  espghan: { title: 'ESPGHAN/NASPGHAN guidelines for treatment of functional constipation in children aged 0 to 18 (Gordon et al. 2026)', publisher: 'Journal of Pediatric Gastroenterology and Nutrition', url: 'https://doi.org/10.1002/jpn3.70447' },
  nhsConstipation: { title: 'Constipation in children', publisher: 'NHS', url: 'https://www.nhs.uk/baby/health/constipation-in-children/' },
  rchConstipation: { title: 'Constipation', publisher: 'Royal Children’s Hospital Melbourne, Kids Health Info (2025)', url: 'https://www.rch.org.au/kidsinfo/fact_sheets/Constipation/' },
  lipoid: { title: 'Lipoid pneumonia in children after mineral oil for constipation (Zanetti et al. 2007)', publisher: 'Pediatric Radiology', url: 'https://doi.org/10.1007/s00247-007-0603-1' },
  nhsWorms: { title: 'Threadworms', publisher: 'NHS', url: 'https://www.nhs.uk/conditions/threadworms/' },
  cdcPinworm: { title: 'About pinworm infection', publisher: 'CDC (2024)', url: 'https://www.cdc.gov/pinworm/about/index.html' },
  nhsLice: { title: 'Head lice and nits', publisher: 'NHS (2024)', url: 'https://www.nhs.uk/conditions/head-lice-and-nits/' },
  cdcLice: { title: 'Treatment of head lice', publisher: 'CDC (2024)', url: 'https://www.cdc.gov/lice/treatment/index.html' },
  aapLice: { title: 'Head lice: clinical report (Nolt et al. 2022)', publisher: 'American Academy of Pediatrics, Pediatrics', url: 'https://doi.org/10.1542/peds.2022-059282' },
  mhra: { title: 'Head lice products: risk of serious burns near flames', publisher: 'MHRA Drug Safety Update (2018)', url: 'https://www.gov.uk/drug-safety-update/head-lice-eradication-products-risk-of-serious-burns-if-treated-hair-is-exposed-to-open-flames-or-other-sources-of-ignition' },
  iranPesticide: { title: 'From itching to poisoning: misguided pest control in Iranian households, a case report (2025)', publisher: 'Journal of Pediatric Perspectives', url: 'https://doi.org/10.22038/jpp.2025.92892.5616' },
  wenger: { title: 'Corrective shoes and inserts for flexible flatfoot in children: a randomised trial (Wenger et al. 1989)', publisher: 'Journal of Bone and Joint Surgery', url: 'https://pubmed.ncbi.nlm.nih.gov/2663868/' },
  cochraneFeet: { title: 'Foot orthoses for treating paediatric flat feet (Evans et al. 2022)', publisher: 'Cochrane Database of Systematic Reviews', url: 'https://doi.org/10.1002/14651858.CD006311.pub4' },
  nhsLegs: { title: 'Leg and foot problems in children', publisher: 'NHS (2026)', url: 'https://www.nhs.uk/conditions/baby/health/leg-and-foot-problems-in-children/' },
  nhsGrowing: { title: 'Growing pains', publisher: 'NHS (2026)', url: 'https://www.nhs.uk/conditions/growing-pains/' },
  aafpLegs: { title: 'Lower extremity abnormalities in children (Baird et al. 2025)', publisher: 'American Family Physician', url: 'https://www.aafp.org/afp/2025/0200/lower-extremity-abnormalities-children' },
  growingDefine: { title: 'Defining growing pains: a scoping review (O’Keeffe et al. 2022)', publisher: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2021-052578' },
  rchSeptic: { title: 'Septic arthritis', publisher: 'Royal Children’s Hospital Melbourne, Kids Health Info', url: 'https://www.rch.org.au/kidsinfo/fact_sheets/Septic_arthritis/' },
};

export const EVERYDAY_BODY_GUIDES: Guide[] = [
  {
    slug: 'constipation-and-poo',
    title: 'Constipation and poo worries',
    emoji: '🚽',
    summary: 'What’s normal at each age, the holding-on cycle, what helps at home, why medicine is often needed for months, and when to get help.',
    minutes: 4,
    minMonths: 0,
    maxMonths: 144,
    topic: 'health',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.nice, R.espghan, R.nhsConstipation, R.rchConstipation, R.lipoid],
    blocks: [
      { type: 'p', text: 'How often children poo varies a lot. Constipation is very common, it’s nobody’s fault, and it can be treated, though it often takes months to settle fully.' },
      {
        type: 'table',
        head: ['Who', 'What’s usually normal'],
        rows: [
          ['Breastfed babies', 'Anything from after every feed to once a week, if the poo is soft and the baby feeds well.'],
          ['Formula-fed babies and older children', 'Usually every 1 to 3 days.'],
          ['Babies under 6 months', 'Going red, grunting and crying before a soft poo is normal. They are learning to use their muscles, and they grow out of it.'],
          ['Colour', 'Yellow, green or brown is fine. White, red or black is not: get help today.'],
        ],
      },
      { type: 'h', text: 'Signs of constipation' },
      { type: 'list', items: ['Fewer than 3 poos a week (except in breastfed babies), or hard, pellet-like poos.', 'Pain or straining, or a little blood on a hard poo.', 'Tummy ache or poor appetite that gets better after a poo.', 'Holding on: stiff legs, standing on tiptoe, crossing legs or hiding.', 'Soiled pants.'] },
      { type: 'h', text: 'The holding-on cycle' },
      { type: 'p', text: 'A hard poo hurts, so the child holds on. The poo gets bigger and harder, so the next one hurts more. Starting nursery or school, pressure during potty training, a small tear or any change can start it.' },
      { type: 'callout', tone: 'tip', text: 'Soiling isn’t naughtiness. It’s usually runny poo slipping past a hard blockage, and your child often can’t feel it or stop it. It can seem worse for a little while once treatment starts, before it gets better.' },
      { type: 'h', text: 'What helps at home' },
      {
        type: 'steps',
        items: [
          { title: 'Sit after meals', text: 'A few relaxed minutes on the toilet or potty after meals, when the body is most ready.' },
          { title: 'Feet up', text: 'Feet on a stool with knees higher than hips, leaning forward a little.' },
          { title: 'Praise the sitting', text: 'Praise trying, whether or not anything happens. No punishment or telling off.' },
          { title: 'Food, drink and moving', text: 'Water through the day, a varied diet with fruit and vegetables, and plenty of active play.' },
          { title: 'Check the toilets', text: 'Ask whether nursery or school toilets worry them, and whether they can go when they need to.' },
        ],
      },
      { type: 'h', text: 'Medicine' },
      { type: 'p', text: 'Doctors often prescribe a medicine to soften poo. It is commonly needed for months, sometimes longer, and guidelines consider it safe to use for that long. It doesn’t make the bowel “lazy”. Stopping too early is a common reason constipation comes back, so ask the doctor before stopping. Don’t use suppositories, enemas or shop-bought laxatives unless a doctor advises them for your child.' },
      { type: 'callout', tone: 'safety', text: 'Don’t put soap, oil, cotton buds, a thermometer or home-made suppositories into a child’s bottom. Don’t give oil by mouth to babies or young children: it can slip into the lungs and cause pneumonia. Ask your doctor before any herbal remedy, especially for babies. See also Family traditions and new evidence.' },
      {
        type: 'table',
        head: ['Get help now or today', 'See a doctor within a few days'],
        rows: [
          ['A newborn who hasn’t passed their first poo by 24 hours', 'A baby under 1 who seems constipated'],
          ['Green vomit (always get help now), or a swollen, tight tummy with vomiting', 'Constipation that lasts more than a couple of weeks despite home steps'],
          ['Severe tummy pain', 'Constipation since birth or the first weeks of life'],
          ['A baby who is constipated and also floppy, with a weak cry, poor sucking or drooping eyelids', 'Very thin, ribbon-like poos, or poor weight gain or growth'],
          ['White, red or black poo, or more than a streak of blood', 'New weakness in the legs, falling a lot, or a tuft of hair, dimple or lump at the base of the spine'],
        ],
      },
      { type: 'callout', tone: 'science', text: 'Honestly: water and fibre are good for everyone, but studies haven’t shown that extra fibre or fluids fix constipation on their own. Guidelines recommend a normal healthy diet plus routines and medicine when needed. Probiotics and herbal remedies have some small trials, but not enough for experts to recommend them.' },
    ],
  },
  {
    slug: 'worms-and-lice',
    title: 'Threadworms and head lice',
    emoji: '🐛',
    summary: 'Very common, not dangerous, and nothing to do with how clean you are: how to treat both calmly, and what never to put on a child.',
    minutes: 4,
    minMonths: 24,
    maxMonths: 144,
    topic: 'health',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.nhsWorms, R.cdcPinworm, R.nhsLice, R.cdcLice, R.aapLice, R.mhra, R.iranPesticide],
    blocks: [
      { type: 'p', text: 'Threadworms and head lice are very common in nursery and school children. They happen in clean, caring families too, and neither is dangerous. Treat them calmly and quietly.' },
      { type: 'h', text: 'Threadworms' },
      { type: 'p', text: 'The main sign is an itchy bottom, especially at night. You may see tiny white threads in poo or around the bottom. They spread when eggs pass from fingers to mouth, and eggs can live for up to 2 weeks on bedding, towels and toys. Pets don’t spread them.' },
      {
        type: 'steps',
        items: [
          { title: 'Everyone, the same day', text: 'Get a medicine from a pharmacy or doctor for everyone at home, on the same day, even those without symptoms.' },
          { title: 'Again in 2 weeks', text: 'Most people need a second dose about 2 weeks later, as the pack or doctor says.' },
          { title: 'Two weeks of habits', text: 'A wash or shower each morning, short nails, handwashing before eating and after the toilet, and underwear at night, changed each morning.' },
          { title: 'Wash and wipe', text: 'Wash bedding, towels and soft toys. Damp-dust, and don’t shake bedding, which spreads the eggs.' },
        ],
      },
      { type: 'callout', tone: 'safety', text: 'Ask a doctor first for a child under 2, or for anyone pregnant or breastfeeding. Without medicine, keep up the hygiene habits for 6 weeks.' },
      { type: 'h', text: 'Head lice' },
      { type: 'p', text: 'Lice spread when heads touch. They don’t jump or fly, they don’t come from pets, and they have nothing to do with dirty hair. Check everyone at home, and treat only those with live lice. There’s no need to cut or shave hair.' },
      {
        type: 'steps',
        items: [
          { title: 'Wet and condition', text: 'Wash the hair and put in plenty of ordinary conditioner.' },
          { title: 'Comb section by section', text: 'Use a fine-toothed lice comb from the roots to the ends, all over the head, wiping the comb on a tissue each time. Go over the whole head twice.' },
          { title: 'Repeat', text: 'Comb again on days 5, 9 and 13, then check on day 17. If there are still no live lice, you’re done.' },
          { title: 'Or a pharmacy treatment', text: 'Use it exactly as the pack says, and keep combing. If it doesn’t work after the second go, ask for a different kind rather than more of the same.' },
        ],
      },
      { type: 'callout', tone: 'safety', text: 'Never use kerosene, petrol, garden or household insecticide sprays, or animal flea and lice products on a child’s hair or skin. They can burn, catch fire or poison through the skin; in Iran, a 3-year-old needed emergency care after an insecticide spray was used on her hair. Some lice products from the pharmacy are flammable, so keep treated hair away from heaters, gas fires and flames until it’s washed.' },
      { type: 'callout', tone: 'tip', text: 'Say “Lots of children get these” so your child tells you next time instead of hiding it. Tell the school or nursery privately if needed, and stop brothers and sisters from teasing.' },
      { type: 'callout', tone: 'safety', text: 'Get help now: call your emergency number or poison centre if a lice product, kerosene or insecticide has been swallowed, or used and the child is now unwell (vomiting, drooling, sweating, breathing trouble or drowsiness), or for a burn from a product near a flame.' },
      { type: 'h', text: 'See a doctor, pharmacist or health centre if' },
      { type: 'list', items: ['A child under 2 has threadworms, or someone pregnant or breastfeeding does.', 'You see a large worm, not a tiny thread, or there’s tummy pain, vomiting or weight loss.', 'Itching carries on after treatment and 2 weeks of habits, or lice are still alive after two treatments.', 'The scalp or bottom is red, swollen or oozing from scratching.'] },
      { type: 'callout', tone: 'science', text: 'Honestly: trials disagree on whether combing or lotions work better. Combing is very safe but takes patience. Lotions can fail where lice have become resistant, which is now common in many countries, including parts of Iran. Home remedies like mayonnaise, oils or vinegar haven’t been shown to work.' },
    ],
  },
  {
    slug: 'legs-and-feet',
    title: 'Legs, feet and growing pains: what’s normal',
    emoji: '🦶',
    summary: 'Flat feet, bow legs, knock knees, in-toeing and tiptoes are usually stages that sort themselves out. What helps, and when to get a check.',
    minutes: 3,
    minMonths: 9,
    maxMonths: 144,
    topic: 'health',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.nhsLegs, R.nhsGrowing, R.aafpLegs, R.wenger, R.cochraneFeet, R.growingDefine, R.rchSeptic],
    relatedTags: ['nature', 'rough-and-tumble'],
    blocks: [
      { type: 'p', text: 'Children’s legs and feet change shape a lot as they grow. Most of the differences that worry parents are normal stages that straighten out without any treatment.' },
      {
        type: 'table',
        head: ['What you notice', 'Usually settles by'],
        rows: [
          ['Flat feet', 'The arch forms between about 3 and 10, often by 6'],
          ['Bow legs', 'Common until about 18 months to 2 years'],
          ['Knock knees', 'Often from about 4, usually straight by about 7 or 8'],
          ['Feet turning in when walking', 'Usually better by about 8'],
          ['Feet turning out', 'Usually by about 4'],
          ['Walking on tiptoe', 'Common up to about 3; most children stop by themselves'],
        ],
      },
      { type: 'callout', tone: 'science', text: 'In a trial, young children with flat feet wore corrective shoes or insoles for 3 years, and their feet developed no differently from children in ordinary shoes. Reviews since then agree: there’s no good evidence that special shoes, insoles or splints change normal leg or foot development. They can help some children whose feet hurt.' },
      { type: 'h', text: 'First shoes and going barefoot' },
      { type: 'p', text: 'Going barefoot at home helps babies learn to walk. Shoes are for protecting feet outside. Choose light shoes that fit, with room for the toes, a flexible sole and the heel held in place, and check the size every few months: feet grow fast. Avoid tight socks.' },
      { type: 'h', text: 'Growing pains' },
      { type: 'p', text: 'Growing pains are common between about 3 and 12. They are typically in both legs, in the evening or at night, and gone by morning, and the child is well and active the next day. A cuddle, a gentle rub or warmth helps, and a children’s painkiller used as the pack says if needed.' },
      { type: 'list', items: ['These are not growing pains: pain in one leg or one spot; swelling, redness or warmth; limping; pain in the daytime or with activity; pain that wakes them in the same place night after night; or pain with fever, weight loss, tiredness or unusual bruising.'] },
      { type: 'callout', tone: 'tip', text: 'Sitting in a W shape doesn’t cause in-toeing, so there’s no need to stop it if your child moves well.' },
      {
        type: 'table',
        head: ['Get help now or today', 'See a doctor soon'],
        rows: [
          ['A fever with a limp, or a child who suddenly won’t walk, stand or use a leg', 'Bow legs getting worse after 2, or one side clearly more bowed'],
          ['A painful, hot or swollen joint', 'Knock knees that are severe, one-sided, or still marked after about 8'],
          ['A baby with a fever who cries when a hip or leg is moved, or has a swollen thigh', 'Flat feet that hurt, are stiff, or are on one side only'],
          ['Severe pain after a fall, or not putting weight on a leg', 'Tiptoe walking on every step after about 3, on one side only, or when they can’t stand flat'],
        ],
      },
      { type: 'p', text: 'Also see a doctor soon for a limp that lasts more than a few days, even without pain, for losing skills like running or climbing, or for bowed legs with slow growth or late teeth.' },
      { type: 'callout', tone: 'science', text: 'Honestly: “growing pains” is a name for a pattern, not a proven cause. Researchers don’t agree on an exact definition, and nobody has shown they’re caused by growing. That’s why doctors look for anything that doesn’t fit the pattern.' },
    ],
  },
];
