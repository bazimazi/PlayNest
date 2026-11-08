import type { Ref, RoutineTemplate } from './packs';
import { localize } from '../i18n';

/**
 * Picture routines a parent can adopt and edit. Steps are one emoji and a very short label, so a 3-year-old can follow the
 * pictures. `minutes` is set where a timer helps the step, and nowhere else.
 *
 * Evidence, as the notes have it (research_notes/…/10_development_stages_and_routines.md):
 *  - Bedtime: Mindell 2015 is a large parent-report study of under-6s. It shows a link, not a cause.
 *  - Shared meals: Hammons and Fiese 2011. Modest effects, mostly cross-sectional. Fiese 2002 on routines could not be read,
 *    so "50 years of routines research" is not claimed anywhere.
 *  - Picture schedules: strong for autistic children; nothing was found for other children, so the claim stops there.
 *  - Mornings, homework, tidying and turning a screen off: practical advice only, and each says so.
 */

const ref = (title: string, publisher: string, url: string): Ref => ({ title, publisher, url });

const HC = 'https://www.healthychildren.org/English';
const AAP = 'American Academy of Pediatrics';

const MINDELL = ref('Mindell et al. 2015, on bedtime routines and sleep', 'Sleep, via PubMed Central', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4402657/');
const HAMMONS = ref('Hammons and Fiese 2011, on shared family meals', 'Pediatrics, via PubMed Central', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3387875/');
const AAP_SLEEP = ref('Healthy sleep habits', AAP, `${HC}/healthy-living/sleep/Pages/healthy-sleep-habits-how-many-hours-does-your-child-need.aspx`);
const NHS_SLEEP = ref('Helping your baby to sleep', 'NHS', 'https://www.nhs.uk/conditions/baby/caring-for-a-newborn/helping-your-baby-to-sleep/');
const NHS_SKILLS = ref('Teaching your child everyday skills', 'NHS', 'https://www.nhs.uk/baby/babys-development/play-and-learning/teaching-your-child-everyday-skills/');
const AAP_INDEPENDENCE = ref('Growing independence', AAP, `${HC}/ages-stages/preschool/Pages/Growing-Independence-Tips-for-Parents-of-Young-Children.aspx`);
const AAP_TEN_TIPS = ref("Ten tips for your child's success in school", AAP, `${HC}/ages-stages/gradeschool/school/Pages/Ten-Tips-for-Your-Childs-Success-in-School.aspx`);
const AFIRM = ref('Visual supports brief', 'AFIRM', 'https://afirm.fpg.unc.edu/wp-content/uploads/Visual-Supports-Brief-Packet.pdf');
const UNDERSTOOD = ref('Restraint collapse: why kids fall apart after school', 'Understood.org', 'https://understood.org/en/articles/restraint-collapse-why-kids-fall-apart-after-school');
const TODAY = ref('On restraint collapse', 'TODAY', 'https://www.today.com/today/amp/rcna220901');
const CDC_30M = ref('Milestones by 30 months', 'CDC', 'https://www.cdc.gov/act-early/milestones/30-months.html');
const CDC_LIGHTNING = ref('Lightning safety', 'CDC', 'https://www.cdc.gov/lightning/safety/index.html');
const NHS_TALKING = ref('Learning to talk', 'NHS', 'https://www.nhs.uk/best-start-in-life/baby/learning-to-talk/');
const ZTT_TODDLER = ref(
  'Understanding toddler behaviour',
  'ZERO TO THREE',
  'https://www.zerotothree.org/resource/understanding-toddler-behavior-whats-typical-and-when-to-seek-help/',
);

export const ROUTINE_TEMPLATES: RoutineTemplate[] = [
  {
    id: 'morning-little',
    name: 'Morning',
    emoji: '🌅',
    minMonths: 12,
    maxMonths: 59,
    steps: [
      { emoji: '🤗', label: 'Wake up and cuddle' },
      { emoji: '🚽', label: 'Toilet or nappy' },
      { emoji: '👕', label: 'Get dressed' },
      { emoji: '🥣', label: 'Breakfast' },
      { emoji: '🦷', label: 'Brush teeth' },
      { emoji: '👟', label: 'Shoes and coat' },
      { emoji: '🚪', label: 'Off we go' },
    ],
    why: "There's little research on morning routines, but AAP suggests small steps with reminders, and many families find they help.",
    refs: [AAP_INDEPENDENCE, NHS_SKILLS],
  },
  {
    id: 'morning-school',
    name: 'School morning',
    emoji: '🎒',
    minMonths: 60,
    maxMonths: 144,
    steps: [
      { emoji: '🌞', label: 'Up and stretch' },
      { emoji: '🚽', label: 'Toilet and wash' },
      { emoji: '👕', label: 'Get dressed' },
      { emoji: '🥣', label: 'Breakfast' },
      { emoji: '🦷', label: 'Brush teeth' },
      { emoji: '🎒', label: 'Bag by the door' },
      { emoji: '👟', label: 'Shoes and coat' },
      { emoji: '🏫', label: 'Off to school' },
    ],
    why: "No trials were found on school mornings. AAP's advice is practical: a steady order, clothes laid out the night before, a bag by the door.",
    refs: [AAP_TEN_TIPS, AAP_INDEPENDENCE],
  },
  {
    id: 'bedtime-baby',
    name: 'Bedtime for babies',
    emoji: '🌙',
    minMonths: 3,
    maxMonths: 17,
    steps: [
      { emoji: '🛁', label: 'Bath or wash' },
      { emoji: '🧷', label: 'Clean nappy' },
      { emoji: '👕', label: 'Night clothes' },
      { emoji: '🦷', label: 'Brush any teeth' },
      { emoji: '🎵', label: 'Song or story' },
      { emoji: '🤗', label: 'Cuddle' },
      { emoji: '💡', label: 'Lights low' },
      { emoji: '😴', label: 'Down to sleep' },
    ],
    why: "In a study across 13 countries and regions, young children with a regular bedtime routine tended to sleep better, by their mothers' reports. A link, not proof.",
    refs: [MINDELL, NHS_SLEEP],
  },
  {
    id: 'bedtime-little',
    name: 'Bedtime for little ones',
    emoji: '🧸',
    minMonths: 18,
    maxMonths: 71,
    steps: [
      { emoji: '🧸', label: 'Toys go to bed' },
      { emoji: '🛁', label: 'Bath or wash' },
      { emoji: '👕', label: 'Night clothes' },
      { emoji: '🦷', label: 'Brush teeth' },
      { emoji: '📖', label: 'Story or song' },
      { emoji: '🤗', label: 'Cuddle' },
      { emoji: '💡', label: 'Lights low' },
      { emoji: '😴', label: 'Sleep tight' },
    ],
    why: 'Families with a regular bedtime routine tend to report better sleep, and more nights went with more benefit. Swap in the steps that fit your home.',
    refs: [MINDELL, AAP_SLEEP, NHS_SKILLS],
  },
  {
    id: 'bedtime-older',
    name: 'Bedtime for older children',
    emoji: '📖',
    minMonths: 72,
    maxMonths: 144,
    steps: [
      { emoji: '📵', label: 'Screens off' },
      { emoji: '👕', label: 'Lay out clothes' },
      { emoji: '🦷', label: 'Wash and brush teeth' },
      { emoji: '🌙', label: 'Night clothes' },
      { emoji: '📖', label: 'Read for a while' },
      { emoji: '💛', label: 'Three good things' },
      { emoji: '💡', label: 'Lights out' },
    ],
    why: 'The main routine study covers under-6s, so for older children this is practical advice. AAP suggests screens off about an hour before bed.',
    refs: [AAP_SLEEP, MINDELL],
  },
  {
    id: 'leaving-house',
    name: 'Leaving the house',
    emoji: '🚪',
    minMonths: 12,
    maxMonths: 84,
    steps: [
      { emoji: '🚽', label: 'Toilet or nappy' },
      { emoji: '🧥', label: 'Coat if it is cold' },
      { emoji: '👟', label: 'Shoes on' },
      { emoji: '🎒', label: 'Bag and water' },
      { emoji: '🧸', label: 'One toy to bring' },
      { emoji: '🤝', label: 'Hold hands' },
      { emoji: '🚪', label: 'Out the door' },
    ],
    why: "Picture steps have strong evidence for autistic children. For other children there's little research, but many families find them handy.",
    refs: [AFIRM, AAP_INDEPENDENCE],
  },
  {
    id: 'after-school',
    name: 'After school',
    emoji: '🍎',
    minMonths: 48,
    maxMonths: 144,
    steps: [
      { emoji: '🎒', label: 'Bag and shoes away' },
      { emoji: '🍎', label: 'Snack, no questions', minutes: 10 },
      { emoji: '🤗', label: 'Hug or blanket' },
      { emoji: '🎵', label: 'Quiet music or play' },
      { emoji: '🤸', label: 'Run, jump or stomp' },
      { emoji: '🍽️', label: 'Best bit at dinner' },
    ],
    why: 'Falling apart after school is something many parents describe, not a diagnosis. Food and quiet first is practical advice, not trial-tested.',
    refs: [UNDERSTOOD, TODAY],
  },
  {
    id: 'mealtime',
    name: 'Mealtime',
    emoji: '🍽️',
    minMonths: 12,
    maxMonths: 144,
    steps: [
      { emoji: '🧼', label: 'Wash hands' },
      { emoji: '🍴', label: 'Help set the table' },
      { emoji: '📵', label: 'Screens away' },
      { emoji: '🍽️', label: 'Sit together' },
      { emoji: '💬', label: 'Eat and chat' },
      { emoji: '🧽', label: 'Carry your plate away' },
    ],
    why: 'Studies link more shared meals with healthier eating. The effects are modest and mostly from snapshots in time, so every shared meal counts.',
    refs: [HAMMONS],
  },
  {
    id: 'bath',
    name: 'Bath',
    emoji: '🛁',
    minMonths: 12,
    maxMonths: 71,
    steps: [
      { emoji: '🧺', label: 'Clothes in the basket' },
      { emoji: '🌡️', label: 'Grown-up checks water' },
      { emoji: '🛁', label: 'In you get' },
      { emoji: '👀', label: 'Grown-up stays close' },
      { emoji: '🦆', label: 'Play and splash' },
      { emoji: '🧼', label: 'Wash and rinse' },
      { emoji: '🤗', label: 'Big towel hug' },
      { emoji: '👕', label: 'Clean clothes' },
    ],
    why: "There's little research on bath order, though many families find it calmer. Stay within arm's reach, and no baths in a thunderstorm.",
    refs: [NHS_SLEEP, NHS_TALKING, CDC_LIGHTNING],
  },
  {
    id: 'tidy-up',
    name: 'Tidy-up',
    emoji: '🧺',
    minMonths: 24,
    maxMonths: 96,
    steps: [
      { emoji: '🔔', label: 'Time to tidy' },
      { emoji: '🔴', label: 'Pick a colour to start' },
      { emoji: '🧺', label: 'Tidy for 3 minutes', minutes: 3 },
      { emoji: '🙌', label: 'Stop and high five' },
    ],
    why: "Many children can tidy with reminders by about 2½. There's little research on timers, but many families find a short job with a clear end easier.",
    refs: [CDC_30M, AAP_INDEPENDENCE],
  },
  {
    id: 'homework',
    name: 'Homework',
    emoji: '✏️',
    minMonths: 72,
    maxMonths: 144,
    steps: [
      { emoji: '🍎', label: 'Snack and a drink' },
      { emoji: '💡', label: 'Quiet, bright spot' },
      { emoji: '📋', label: "See what's due" },
      { emoji: '✏️', label: 'Start with one thing' },
      { emoji: '⏲️', label: 'Short break', minutes: 5 },
      { emoji: '✅', label: 'Finish up' },
      { emoji: '🎒', label: 'Bag by the door' },
    ],
    why: 'AAP suggests a quiet, well-lit spot and a steady routine. This is practical advice, not trial-tested. Support them, and leave the doing to them.',
    refs: [AAP_TEN_TIPS],
  },
  {
    id: 'screen-off',
    name: "Screen off, what's next",
    emoji: '📵',
    minMonths: 24,
    maxMonths: 144,
    steps: [
      { emoji: '⏲️', label: 'Five-minute warning', minutes: 5 },
      { emoji: '🏁', label: 'Finish this bit' },
      { emoji: '📵', label: 'Screen off' },
      { emoji: '🤸', label: 'Big stretch' },
      { emoji: '➡️', label: "What's next?" },
    ],
    why: "There's little research on this, but many families find a warning and a clear next thing ease the switch. Big reactions to change are common in toddlers.",
    refs: [AAP_SLEEP, ZTT_TODDLER],
  },
];

localize('routines', ROUTINE_TEMPLATES);
