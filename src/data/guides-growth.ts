import type { Guide } from './types';

/**
 * Growth charts and appetite worries, and iron, vitamin drops and tea (release 1.9). Research:
 * research_notes/PlayNest phase 9 research round 6/02_growth_weight_and_appetite.md.
 *
 * Rules from the note: no amounts of iron, vitamins, appetite medicines or milk; no product names; no numeric "crossing two
 * lines" rule (RCPCH, NICE and RCH differ), so the copy says "a steady drop or a flat line"; no predicted adult height; the
 * middle line isn't a target; pressure is linked with eating less in both directions, not proven to cause it; appetite
 * syrups are medicines with side effects, doctor first, neither "safe" nor "always dangerous"; tea reduces iron absorption
 * from a meal, but isn't said to cause anaemia; paleness isn't low iron (thalassaemia trait is common in Iran); no extra iron
 * without a test; no single vitamin D prevalence figure; no political explanations; no body words like "skinny" or "chubby".
 * The English stays general about drop programmes; the Persian gives Iran's ages (A+D from the first days to 2, iron from
 * the end of 6 months or the start of solids to 2) and the health centre's role.
 */
const CHECKED = '2026-11-18';

const R = {
  mgrs: { title: 'Assessment of differences in linear growth among populations in the WHO Multicentre Growth Reference Study (2006)', publisher: 'Acta Paediatrica', url: 'https://doi.org/10.1111/j.1651-2227.2006.tb02376.x' },
  rcpch: { title: 'Growth charts: information for parents and carers', publisher: 'Royal College of Paediatrics and Child Health', url: 'https://www.rcpch.ac.uk/resources/growth-charts-information-parents-carers' },
  galloway: { title: '“Finish your soup”: counterproductive effects of pressuring children to eat (Galloway et al. 2006)', publisher: 'Appetite', url: 'https://doi.org/10.1016/j.appet.2006.01.019' },
  jansen: { title: 'Two-way links between fussy eating and parents’ pressure to eat (Jansen et al. 2017)', publisher: 'Physiology & Behavior', url: 'https://doi.org/10.1016/j.physbeh.2017.02.015' },
  whoFeeding: { title: 'Guideline for complementary feeding of infants and young children 6 to 23 months (2023), summary', publisher: 'World Health Organization, via ENN Field Exchange', url: 'https://ennonline.net/fex/72/who-guideline-for-complementary-feeding-of-infants-and-young-children' },
  harrison: { title: 'Use of cyproheptadine to stimulate appetite and weight gain: a systematic review (Harrison et al. 2019)', publisher: 'Appetite', url: 'https://doi.org/10.1016/j.appet.2019.02.012' },
  heyman: { title: 'Fruit juice in infants, children and adolescents (Heyman & Abrams 2017)', publisher: 'American Academy of Pediatrics, Pediatrics', url: 'https://doi.org/10.1542/peds.2017-0967' },
  pont: { title: 'Stigma experienced by children and adolescents with obesity (Pont et al. 2017)', publisher: 'American Academy of Pediatrics, Pediatrics', url: 'https://doi.org/10.1542/peds.2017-3034' },
  nazari: { title: 'Iron-deficiency anaemia in Iranian children under 6: a systematic review and meta-analysis (Nazari et al. 2019)', publisher: 'Journal of Blood Medicine', url: 'https://doi.org/10.2147/jbm.s196102' },
  hurrell: { title: 'Inhibition of iron absorption by tea, coffee and herbal drinks (Hurrell et al. 1999)', publisher: 'British Journal of Nutrition', url: 'https://doi.org/10.1017/s0007114599000537' },
  temme: { title: 'Tea consumption and iron status (Temme & Van Hoydonck 2002)', publisher: 'European Journal of Clinical Nutrition', url: 'https://doi.org/10.1038/sj.ejcn.1601309' },
  ziegler: { title: 'Cow’s milk as a cause of iron deficiency in infants and toddlers (Ziegler 2011)', publisher: 'Nutrition Reviews', url: 'https://doi.org/10.1111/j.1753-4887.2011.00431.x' },
  dewey: { title: 'Iron supplements and the growth of breastfed infants in Sweden and Honduras: a randomised trial (Dewey et al. 2002)', publisher: 'Journal of Nutrition', url: 'https://doi.org/10.1093/jn/132.11.3249' },
  nhsVitamins: { title: 'Vitamins for children', publisher: 'NHS (2024)', url: 'https://www.nhs.uk/baby/weaning-and-feeding/vitamins-for-children/' },
  whoVitD: { title: 'Vitamin D supplementation in infants', publisher: 'World Health Organization, eLENA (2023)', url: 'https://www.who.int/tools/elena/interventions/vitamind-infants' },
  iodine: { title: 'Sixth national iodine monitoring survey in Iran, 2022–23 (Mehran et al. 2026)', publisher: 'Thyroid', url: 'https://doi.org/10.1177/10507256261423184' },
};

export const GROWTH_GUIDES: Guide[] = [
  {
    slug: 'growth-and-appetite',
    title: 'Growth charts and “is my child eating enough?”',
    emoji: '📈',
    summary: 'What the growth chart really shows, why small can be healthy, why pressure backfires, appetite syrups, and when to get a check.',
    minutes: 5,
    minMonths: 0,
    maxMonths: 144,
    topic: 'food',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.mgrs, R.rcpch, R.galloway, R.jansen, R.whoFeeding, R.harrison, R.heyman, R.pont],
    relatedTags: ['kitchen'],
    blocks: [
      { type: 'p', text: '“Is my child eating enough?” is one of the most common worries parents have. The best answer isn’t on the plate. It’s on your child’s growth chart, over several checks.' },
      { type: 'h', text: 'What the growth chart shows' },
      { type: 'p', text: 'The curved lines are centiles. If your child is on the 10th centile, about 10 in 100 healthy children of the same age and sex are smaller, and 90 are bigger. Anywhere between the lines is normal. The middle line isn’t a target, and a higher line isn’t healthier.' },
      { type: 'callout', tone: 'science', text: 'WHO measured more than 8,000 well-cared-for babies in six countries, including Oman. They grew remarkably alike: where they lived explained only a small part of the differences between them. That’s why one chart works for children everywhere.' },
      { type: 'h', text: 'Small can be healthy' },
      { type: 'p', text: 'A child on a low line who follows it steadily is usually built that way, often like a parent. Height and weight are read together. Between about 1 and 5, many children look thinner as they grow taller and more active, and that is normal.' },
      { type: 'h', text: 'Appetite after the first birthday' },
      { type: 'p', text: 'Growth slows after the first year, so appetite drops and swings from day to day. A big day and a small day usually even out over a week. Growth comes in bursts, and appetite can rise with them.' },
      {
        type: 'table',
        head: ['Usually fine', 'Worth a check'],
        rows: [
          ['Following their own line, even a low one', 'Dropping steadily across the lines, or a line that goes flat'],
          ['Small, but growing taller', 'Weight falling while height carries on'],
          ['Eats a lot one day and little the next', 'Not back on track a few weeks after an illness'],
          ['Lost a little weight while ill, then caught up', 'A newborn who hasn’t regained birth weight by about 3 weeks'],
        ],
      },
      { type: 'h', text: 'Why pressure backfires' },
      { type: 'p', text: 'In a small experiment, children who were told to finish their soup ate less and enjoyed it less. In a large study that followed families, fussiness led to more pressure, and pressure led to more fussiness: a circle, and nobody’s fault. Offer the food, then let your child decide how much. See Fussy eating without battles.' },
      {
        type: 'list',
        items: [
          'Regular meal and snack times, with small portions and seconds if they want them.',
          'Eat together when you can.',
          'Try not to use phones or cartoons to get food in. It hasn’t been tested in trials, but eating without noticing makes it harder to feel hunger and fullness.',
          'Juice, sweet drinks and lots of milk fill small tummies before meals. Offer water between meals.',
        ],
      },
      { type: 'callout', tone: 'safety', text: 'Appetite syrups are medicines, with side effects such as sleepiness or moodiness, and they don’t fix the reason a child eats little. Supplement drinks can replace meals. Ask your doctor before giving any appetite syrup, tonic or supplement drink, and never buy one on someone else’s advice.' },
      { type: 'h', text: 'Short or tall' },
      { type: 'p', text: 'Height runs in families. What matters is a steady rate of growth. Most short children are healthy. Growth hormone is for specific conditions a specialist diagnoses, and no pill, syrup or special food makes a healthy child taller.' },
      { type: 'h', text: 'If weight is creeping up' },
      { type: 'p', text: 'Change family habits together rather than putting one child on a diet: water as the main drink, active play everyone enjoys, and shared meals. Comments about a child’s weight, even kind ones, tend to make things harder. See Food talk, body talk.' },
      { type: 'callout', tone: 'safety', text: 'See your doctor or health worker if your child is losing weight, or their line is falling steadily or has gone flat; has stopped growing taller; is very tired, pale or often unwell; has diarrhoea, vomiting or tummy pain that keeps coming back; gags or panics at food, or eats fewer and fewer foods; or worries about their weight or body. Get help the same day for a baby with few wet nappies, or who is very sleepy or feeding poorly.' },
      { type: 'callout', tone: 'science', text: 'What we don’t know: studies of pressure mostly show links, not cause and effect, and pressure is partly a response to a child who eats little. Experts also disagree on exactly how much movement across the lines matters, so your health worker looks at the whole picture rather than one number.' },
    ],
  },
  {
    slug: 'iron-drops-and-tea',
    title: 'Iron, vitamin drops and tea',
    emoji: '🍲',
    summary: 'Why iron matters, foods that help, how tea and too much milk get in the way, vitamin drops, and why extra iron needs a test first.',
    minutes: 4,
    minMonths: 0,
    maxMonths: 144,
    topic: 'food',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.nazari, R.hurrell, R.temme, R.ziegler, R.dewey, R.nhsVitamins, R.whoVitD, R.iodine],
    relatedTags: ['kitchen'],
    blocks: [
      { type: 'p', text: 'Iron builds blood and helps the brain grow. Low iron is common in young children around the world. In pooled studies in Iran, about 1 in 5 young children had anaemia from low iron. Food, drops where your health service gives them, and a few habits prevent most of it.' },
      { type: 'h', text: 'Signs to mention to your doctor' },
      { type: 'p', text: 'Paleness, tiredness, grumpiness, a poor appetite, or eating things that aren’t food, like soil. Only a blood test can tell. Many pale children don’t have low iron, and some kinds of anaemia, such as thalassaemia trait, don’t get better with iron.' },
      {
        type: 'table',
        head: ['Food', 'Tip'],
        rows: [
          ['Meat, chicken or fish', 'The iron in these is absorbed best. Small soft pieces in stews and soups work well.'],
          ['Lentils, beans and chickpeas', 'Serve with lemon, tomato or orange: vitamin C helps the body take in iron.'],
          ['Eggs', 'Cooked well, from when solid food starts.'],
          ['Green vegetables and herbs', 'Add a squeeze of lemon.'],
          ['Fortified bread and cereals', 'Check the label for added iron.'],
        ],
      },
      { type: 'h', text: 'Tea and iron' },
      { type: 'p', text: 'Tea, including herbal teas like camomile or mint, can sharply reduce the iron the body takes from a meal, even with milk in it. Babies don’t need tea. For older children, if tea is part of the family’s day, keep it weak, unsweetened and between meals rather than with them, and offer water or milk with the meal.' },
      { type: 'callout', tone: 'science', text: 'In studies of adults, a cup of black tea with a meal cut the iron absorbed by about 80 to 90%. Whether tea causes low iron in children is less clear: studies disagree, and it seems to matter most when iron is already low.' },
      { type: 'h', text: 'Milk: good, but not too much' },
      { type: 'p', text: 'Cow’s milk is low in iron and can fill a toddler up, and large amounts are linked with low iron. Ask your health centre how much suits your child. Cow’s milk isn’t a main drink before 1 year.' },
      { type: 'h', text: 'Vitamin and iron drops' },
      { type: 'p', text: 'Countries do this differently. Some give vitamin D, or vitamins A and D, to all babies; some also give iron drops to all babies from about 6 months; others give iron only when a baby needs it. Follow your own health service and give the drops it advises.' },
      {
        type: 'list',
        items: [
          'Give drops at the same time each day so it becomes a habit.',
          'Iron drops at the back of the tongue, followed by a little water, help prevent stained teeth.',
          'Dark poo is common with iron drops. See a doctor if poo is red or your child seems unwell.',
          'A cold or tummy bug isn’t usually a reason to stop. Ask your health centre if you’re unsure.',
          'Don’t give two products with the same vitamins.',
        ],
      },
      { type: 'callout', tone: 'safety', text: 'Don’t add extra iron, vitamins or “blood tonics” on your own. A trial found extra iron may slow growth in babies who already had enough, and an overdose of iron drops is an emergency. Keep all drops up high and closed. If a child drinks from the bottle, or is given extra by mistake, call your poison line or emergency number straight away.' },
      { type: 'p', text: 'Use iodised salt in family food, in small amounts, and keep it closed and away from heat and light. Babies under 1 need no added salt.' },
      { type: 'callout', tone: 'science', text: 'What we don’t know: experts are still studying whether babies who already have enough iron benefit from extra, which is one reason countries differ. Reports of how many children have low vitamin D vary widely, depending on the cut-off a study uses.' },
    ],
  },
];
