import type { Tip } from './types';

/** Daily tips for the "health" area of the parenting hub (release 1.6). No doses, and red flags always point to a professional. */
export const HEALTH_TIPS: Tip[] = [
  { id: 'health-fever-under-3m', minMonths: 0, maxMonths: 3, text: 'A temperature of 38°C or more in a baby under 3 months always needs a doctor straight away, even if they seem fairly well.' },
  { id: 'health-light-layer', minMonths: 0, maxMonths: 144, text: 'A feverish child needs one light layer and plenty to drink. Wrapping them up to sweat it out, or cold sponging, isn’t recommended.' },
  { id: 'health-check-the-pack', minMonths: 0, maxMonths: 144, text: 'Many cold remedies already contain a fever medicine. Check the active ingredient on every pack, and use the syringe or spoon that comes with it.' },
  { id: 'health-teething-no-fever', minMonths: 3, maxMonths: 30, text: 'Teething can make babies grumpy and dribbly, but it doesn’t cause a real fever. If your baby has 38°C or more, look for another cause.' },
  { id: 'health-first-dentist', minMonths: 5, maxMonths: 18, text: 'Brush from the very first tooth with a smear of fluoride toothpaste, and take your baby to a dentist when teeth arrive or by their first birthday.' },
  { id: 'health-spit-dont-rinse', minMonths: 24, maxMonths: 144, text: 'After brushing, spit out the extra toothpaste but don’t rinse with water. The fluoride left behind keeps working on the teeth.' },
  { id: 'health-colds-normal', minMonths: 6, maxMonths: 48, text: 'Eight to ten colds in the first two years is normal, especially with brothers, sisters or nursery. Antibiotics don’t help colds, but rest and drinks do.' },
  { id: 'health-jab-honest', minMonths: 18, maxMonths: 144, text: 'Before a jab, try “It will pinch for a moment, then it’s over” rather than “It won’t hurt”. Honest words and a chosen distraction help more.' },
  { id: 'health-move-every-day', minMonths: 12, maxMonths: 60, text: 'Young children need about 3 hours of moving across the day, spread through it. Walking part of the way, chasing and dancing all count.' },
  { id: 'health-sixty-minutes', minMonths: 60, maxMonths: 144, text: 'School-age children need about an hour a day of play that makes them puff. A walk to school, a game of tag and a bike ride soon add up.' },
  { id: 'health-wet-nights', minMonths: 36, maxMonths: 96, text: 'Wet nights are common until about 5 and still fairly common at 7. Keep daytime drinks up, skip punishments, and use waterproof covers.' },
  { id: 'health-sick-day-home', minMonths: 24, maxMonths: 144, text: 'After a tummy bug, keep your child home until 48 hours after the last vomit or diarrhoea, so it doesn’t spread to friends.' },
];
