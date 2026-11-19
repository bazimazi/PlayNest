import type { Guide } from './types';

/**
 * Signs not to wait on (release 2.0). Research: research_notes/PlayNest phase 10 research round 7/03_serious_signs_easy_to_miss.md.
 *
 * Rules from the note: a list of signs can send a child to help but can never tell a parent their child is fine, so the guide
 * opens with that and never says "if X is absent, it isn't Y". No scores or counting tasks for parents, no blood-sugar numbers,
 * no medicines. Green vomit in a baby is "now", even once, even if well (RCH, BAPM). Suspected type 1 diabetes is "today"
 * (NICE NG18 same-day referral); ketoacidosis signs are "now" (NHS). Testicle pain is "now", worded plainly and without
 * embarrassment (AAP). Parents' instinct is a link from one large study, not proof (Van den Bruel 2012; Riga 2019 found less).
 * Every "now" row agrees with crying.ts, tummy-bugs, fever-and-sick-days and the very-unwell, trouble-breathing, dehydration
 * and battery cards. Kawasaki's heart risk and "most headaches aren't serious" were not verified and are left out.
 */
const CHECKED = '2026-11-19';

const R = {
  nhsT1d: { title: 'Type 1 diabetes: symptoms', publisher: 'NHS (October 2024)', url: 'https://www.nhs.uk/conditions/type-1-diabetes/symptoms/' },
  ng18: { title: 'Diabetes (type 1 and type 2) in children and young people (NG18)', publisher: 'NICE (updated 2023)', url: 'https://www.nice.org.uk/guidance/ng18/chapter/Recommendations' },
  cherubini: { title: 'Temporal trends in diabetic ketoacidosis at diagnosis of paediatric type 1 diabetes in 13 countries (Cherubini et al. 2020)', publisher: 'Diabetologia', url: 'https://doi.org/10.1007/s00125-020-05152-1' },
  campaigns: { title: 'Effectiveness of ketoacidosis prevention campaigns: a meta-analysis (2021)', publisher: 'Diabetes Research and Clinical Practice', url: 'https://doi.org/10.1016/j.diabres.2021.108838' },
  nhsAppendicitis: { title: 'Appendicitis', publisher: 'NHS (August 2024)', url: 'https://www.nhs.uk/conditions/appendicitis/' },
  nhsTesticle: { title: 'Testicle pain', publisher: 'NHS (June 2025)', url: 'https://www.nhs.uk/conditions/testicle-pain/' },
  aapTorsion: { title: 'Testicle pain and testicular torsion: why it’s an emergency', publisher: 'American Academy of Pediatrics (HealthyChildren.org, November 2025)', url: 'https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/Testicular-Torsion.aspx' },
  intussusception: { title: 'Intussusception', publisher: 'KidsHealth NZ, Paediatric Society of New Zealand (April 2026)', url: 'https://www.kidshealth.org.nz/intussusception' },
  bapm: { title: 'Bilious vomiting: parent information', publisher: 'British Association of Perinatal Medicine (2024)', url: 'https://www.walsallhealthcare.nhs.uk/wp-content/uploads/2026/05/Bilious-Vomiting-Parent-Information-English-1.pdf' },
  rchBilious: { title: 'Bilious vomiting: pre-referral guideline', publisher: 'Royal Children’s Hospital Melbourne', url: 'https://www.rch.org.au/kidsconnect/prereferral_guidelines/Bilious_vomiting_prereferral/' },
  nhsSepsis: { title: 'Sepsis', publisher: 'NHS (May 2026)', url: 'https://www.nhs.uk/conditions/sepsis/' },
  nhsMeningitis: { title: 'Meningitis', publisher: 'NHS (June 2026)', url: 'https://www.nhs.uk/conditions/meningitis/' },
  nhsSeriouslyIll: { title: 'Is your baby or toddler seriously ill?', publisher: 'NHS (August 2026)', url: 'https://www.nhs.uk/baby/health/is-your-baby-or-toddler-seriously-ill/' },
  sepsisTrust: { title: 'About sepsis', publisher: 'UK Sepsis Trust', url: 'https://sepsistrust.org/about/about-sepsis/' },
  ng143: { title: 'Fever in under 5s: assessment and initial management (NG143)', publisher: 'NICE (updated 2021)', url: 'https://www.nice.org.uk/guidance/ng143/chapter/Recommendations' },
  thompson: { title: 'Clinical recognition of meningococcal disease in children and adolescents (Thompson et al. 2006)', publisher: 'The Lancet', url: 'https://doi.org/10.1016/s0140-6736(06)67932-4' },
  nhsUti: { title: 'Urinary tract infections', publisher: 'NHS (July 2025)', url: 'https://www.nhs.uk/conditions/urinary-tract-infections-utis/' },
  ng224: { title: 'Urinary tract infection in under 16s (NG224)', publisher: 'NICE (2022)', url: 'https://www.nice.org.uk/guidance/ng224/chapter/Recommendations' },
  headsmart: { title: 'HeadSmart: be brain tumour aware (symptoms card)', publisher: 'The Brain Tumour Charity, Children’s Brain Tumour Research Centre and RCPCH', url: 'https://www.thebraintumourcharity.org/app/uploads/2018/06/headsmart_symptoms_card.pdf' },
  nhsKawasaki: { title: 'Kawasaki disease', publisher: 'NHS (February 2026)', url: 'https://www.nhs.uk/conditions/kawasaki-disease/' },
  gutFeeling: { title: 'Clinicians’ gut feeling about serious infections in children (Van den Bruel et al. 2012)', publisher: 'BMJ', url: 'https://doi.org/10.1136/bmj.e6144' },
  riga: { title: 'The value of parental concern and clinician’s gut feeling in recognising serious infections (2019)', publisher: 'BMC Pediatrics', url: 'https://doi.org/10.1186/s12887-019-1591-7' },
};

export const SIGNS_GUIDES: Guide[] = [
  {
    slug: 'signs-not-to-wait-on',
    title: 'Signs not to wait on',
    emoji: '🚩',
    summary: 'A few serious illnesses start quietly or look like something common. These are the signs to act on today, or straight away.',
    minutes: 5,
    minMonths: 0,
    maxMonths: 144,
    topic: 'health',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.nhsSeriouslyIll, R.nhsSepsis, R.nhsMeningitis, R.sepsisTrust, R.thompson, R.ng143, R.nhsT1d, R.ng18, R.cherubini, R.campaigns, R.bapm, R.rchBilious, R.intussusception, R.nhsTesticle, R.aapTorsion, R.nhsAppendicitis, R.nhsUti, R.ng224, R.nhsKawasaki, R.headsmart, R.gutFeeling, R.riga],
    blocks: [
      { type: 'p', text: 'Most illnesses in children are mild. A few serious ones start with signs that look ordinary, so they’re easy to put down to a bug, a cold or worry. You don’t need to know what it is. You only need to know when not to wait.' },
      { type: 'callout', tone: 'safety', text: 'No list can tell you your child is fine. A child can be seriously ill without having every sign. If your child seems very unwell, or you feel something is seriously wrong, call your emergency number now.' },
      { type: 'h', text: 'Call your emergency number now' },
      {
        type: 'table',
        head: ['What you notice', 'What it can mean'],
        rows: [
          ['A rash that doesn’t fade when you press a glass on it, or a fever with very cold hands and feet', 'Sepsis or meningitis. Don’t wait for a rash: it often comes late'],
          ['Very sleepy, floppy or hard to wake, a fit, or blue, grey, pale or blotchy skin, lips or tongue', 'Serious illness of many kinds'],
          ['Grunting, the ribs or tummy sucking in, or breathing very fast', 'Breathing trouble. See the first-aid card'],
          ['A child who has lately been very thirsty and weeing a lot, now vomiting, with tummy pain, deep fast breathing or drowsiness', 'Diabetic ketoacidosis, which can be the first sign of diabetes'],
          ['A baby with green vomit, even once, even if they seem well', 'A twisted or blocked bowel'],
          ['A baby or toddler with bouts of screaming or pain, pale or floppy in between, or poo like red jelly', 'The bowel folding into itself (intussusception)'],
          ['Sudden pain in a testicle, or testicle pain with tummy pain or vomiting', 'A twisted testicle. Every hour matters'],
          ['Severe tummy pain, or sudden severe pain low down on one side with vomiting', 'Appendicitis, a twisted ovary or another emergency'],
          ['A baby under 3 months with a temperature of 38°C or more', 'Babies this young need checking straight away'],
          ['No wee for 12 hours, or may have swallowed a button battery or magnets', 'Dehydration, or an internal burn or blockage. See the first-aid cards'],
        ],
      },
      { type: 'callout', tone: 'tip', text: 'Teach your child: if anything hurts “down there”, tell me straight away. It’s never rude or embarrassing. A twisted testicle can first show up as tummy pain, so with tummy pain and vomiting, ask about it gently.' },
      { type: 'h', text: 'See a doctor today' },
      {
        type: 'table',
        head: ['What you notice', 'Why today'],
        rows: [
          ['Weeing more, wetting the bed again, very thirsty, tired or getting thinner', 'These can be signs of type 1 diabetes. Ask for a finger-prick blood sugar test today'],
          ['Tummy pain that keeps getting worse, won’t go away, or moves to the lower right side', 'This can be appendicitis. Young children often don’t have the usual pattern'],
          ['A baby or young child with a fever and no clear cause, or who is irritable and off feeds', 'A urine infection is possible. Ask whether their urine should be tested'],
          ['A fever lasting 5 days or more', 'Doctors check for less common illnesses, such as Kawasaki disease'],
          ['You were told it’s nothing, but your child is getting worse, or you’re more worried than before', 'Going back is exactly what guidelines advise'],
        ],
      },
      { type: 'h', text: 'See a doctor soon' },
      { type: 'p', text: 'Headaches or vomiting that keep coming back, especially on waking or waking them at night, or that come with clumsiness, eye changes, a head tilt or a change in behaviour, need a doctor’s check. One sign is enough to go. With two or more, ask for an urgent referral. Don’t put these down to worry before the body has been checked.' },
      { type: 'h', text: 'Trust what you see' },
      { type: 'callout', tone: 'science', text: 'In a large study in family doctors’ surgeries, when parents said “this illness is different from before”, serious infection was much more likely. Doctors’ gut feelings counted too. Another study found a weaker link, so it isn’t proof. But every health body agrees: your worry is reason enough to ask.' },
      {
        type: 'steps',
        items: [
          { title: 'Say what worries you', text: 'Describe what’s different: “She has never been this sleepy.” You don’t need to name an illness.' },
          { title: 'Ask the question', text: '“Could this be sepsis?” “Could this be diabetes?” “Should their urine be tested?”' },
          { title: 'Ask what to watch for', text: '“What should make me come back, and how fast?”' },
          { title: 'Ask for another opinion', text: 'If your child is getting worse, you can ask for a senior doctor or a second opinion.' },
        ],
      },
      { type: 'callout', tone: 'science', text: 'Across 13 countries, about 3 in 10 children with type 1 diabetes were already in ketoacidosis when it was found. Areas that ran awareness campaigns saw fewer cases, but these weren’t trials, so we can’t be sure how much knowing the signs helps on its own.' },
    ],
  },
];
