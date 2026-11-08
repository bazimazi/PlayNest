// Flags activities whose text mentions a known hazard without a matching safety note.
// Run with: npx vite-node scripts/safety-scan.ts
import { EVERY_ACTIVITY, EVERY_CELEBRATION_ACTIVITY } from '../src/data/activities';

const RULES: { re: RegExp; maxMin: number; note: RegExp; label: string }[] = [
  { re: /\bhoney\b/i, maxMin: 12, note: /honey/i, label: 'honey (botulism risk under 12 months)' },
  { re: /\b(peanut|nuts?|grapes?|popcorn|marshmallows?|cherry tomato|boiled sweets?)\b/i, maxMin: 60, note: /chok|whole|cut|quarter/i, label: 'choking food' },
  { re: /\bballoons?\b/i, maxMin: 96, note: /balloon/i, label: 'latex balloon' },
  { re: /\bmagnets?\b/i, maxMin: 96, note: /magnet/i, label: 'magnets' },
  { re: /\b(button|coin) batter/i, maxMin: 96, note: /batter/i, label: 'button batteries' },
  { re: /\b(string|ribbon|cord|rope|yarn|wool|elastic)\b/i, maxMin: 36, note: /strangl|neck|cord|string|ribbon|rope|wool|yarn|elastic/i, label: 'cord/string' },
  { re: /\b(knife|knives|hob|oven|stove)\b/i, maxMin: 96, note: /knife|knives|hob|oven|hot|stove|grown-up|adult/i, label: 'knife/heat' },
  { re: /\b(beads?|buttons|coins?|beans|marbles|pebbles|dried pasta|rice)\b/i, maxMin: 36, note: /chok|toilet|swallow|small/i, label: 'small parts' },
];

/** Flags a person has checked and judged fine ("id:label"), so new flags stand out. */
const REVIEWED = new Set([
  'pat-a-cake:knife/heat', // "put it in the oven" is a line of the rhyme
  'pizza-back-massage:knife/heat', // pretend oven
  'wrapped-newborn-bath:cord/string', // cotton wool
  'little-chef-mash-the-banana:small parts', // rice cakes
  'sniff-and-tell-kitchen-smells:knife/heat', // smelling from a safe distance; notes cover sharp things
  'bedsheet-parachute-games:choking food', // "Popcorn" is the name of a parachute game
  'playdough-bakery:knife/heat', // blunt plastic knife
  'funny-face-cracker-snack:knife/heat', // blunt spreader; adult does the chopping
  'shake-a-jar-butter:knife/heat', // blunt knife for spreading
  'dream-recipe-bedtime-story:latex balloon', // an imaginary balloon in a story
  'diwali-rice-flour-rangoli:small parts', // rice flour, not grains: its note covers tasting it and eyes
]);

const problems: string[] = [];
// Every game in every language: a hazard is a hazard whichever app shows it.
const ALL = [...EVERY_ACTIVITY, ...EVERY_CELEBRATION_ACTIVITY];
for (const a of ALL) {
  const body = [a.title, a.summary, ...a.materials, ...a.steps, ...(a.variations ?? []), a.easier ?? '', a.harder ?? ''].join(' ');
  const safety = (a.safety ?? []).join(' ');
  for (const r of RULES) {
    if (a.minMonths >= r.maxMin || REVIEWED.has(`${a.id}:${r.label}`)) continue;
    const m = body.match(r.re);
    if (m && !r.note.test(safety)) problems.push(`${a.id} (${a.minMonths}–${a.maxMonths}m): ${r.label} — "${m[0]}" but no matching safety note`);
  }
}
console.log(problems.length ? problems.join('\n') : 'No unflagged hazards.');
console.log(`\n${problems.length} potential issue(s) across ${ALL.length} activities.`);
