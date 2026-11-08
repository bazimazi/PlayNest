import type { Activity } from '../data/types';
import { english, t } from '../i18n';

/**
 * What a child is into right now. It makes it easier to get a game started, and that's all it claims: the evidence
 * supports engagement, not learning gains. Listed in a neutral order and never by gender.
 *
 * Matching is by words in the game's text, so it covers every game without tagging each one, and misses are harmless:
 * an interest only nudges an idea up. It never hides anything.
 */
export const INTERESTS: Record<string, { label: string; emoji: string; words: RegExp }> = {
  animals: { label: t('Animals'), emoji: '🐘', words: /\b(animal|dog|cat|horse|cow|sheep|lion|tiger|elephant|monkey|bear(?! hug)|rabbit|duck|frog|pet|farm|zoo|wolf|fox)s?\b/i },
  vehicles: { label: t('Vehicles'), emoji: '🚂', words: /\b(car|cars|truck|train|bus|tractor|bike|boat|plane|aeroplane|rocket|vehicle|wheel|taxi|digger)s?\b/i },
  dinosaurs: { label: t('Dinosaurs'), emoji: '🦕', words: /\b(dinosaur|fossil|dino)s?\b/i },
  space: { label: t('Space and stars'), emoji: '🌙', words: /\b(outer space|moon|stars|stargaz\w*|planet|astronaut|rocket|comet|constellation)s?\b/i },
  music: { label: t('Music'), emoji: '🎵', words: /\b(music|song|sing|rhythm|drum|dance|band|instrument|clap|lullaby|beat)s?\b/i },
  building: { label: t('Building'), emoji: '🧱', words: /\b(build|block|tower|den|fort|bridge|construct|brick|cardboard box|engineer)s?\b/i },
  water: { label: t('Water'), emoji: '💧', words: /\b(water|pour|splash|puddle|bath|float|sink|bubble)s?\b/i },
  bugs: { label: t('Bugs'), emoji: '🐞', words: /\b(bug|insect|worm|snail|ant|butterfly|bee|spider|beetle|minibeast|caterpillar)s?\b/i },
  cooking: { label: t('Cooking'), emoji: '🍳', words: /\b(cook|bake|recipe|kitchen|chef|dough|salad)s?\b/i },
  making: { label: t('Drawing and making'), emoji: '🎨', words: /\b(draw|drawing|paint|painting|craft|crayon|sticker|collage|sculpt|origami)s?\b/i },
  stories: { label: t('Stories'), emoji: '📚', words: /\b(story|stories|storybook|book|tale|puppet)s?\b/i },
  words: { label: t('Letters and words'), emoji: '🔤', words: /\b(letter|word|alphabet|rhyme|spell|sound out|poem)s?\b/i },
  numbers: { label: t('Numbers'), emoji: '🔢', words: /\b(number|counting|count|maths|measure|dice)s?\b/i },
  sport: { label: t('Sport and moving'), emoji: '⚽', words: /\b(ball|kick|race|jump|throw|obstacle course|hopscotch|skipping)s?\b/i },
  caring: { label: t('Dolls and teddies'), emoji: '🧸', words: /\b(doll|teddy|teddies|soft toy|baby doll|tea party|look after|care for|shop keeper|doctor)s?\b/i },
  nature: { label: t('Plants and nature'), emoji: '🌿', words: /\b(plant|seed|leaf|leaves|tree|flower|garden|nature|forest)s?\b/i },
  machines: { label: t('How things work'), emoji: '🔧', words: /\b(machine|ramp|lever|magnet|invent|experiment|robot|pulley|how .* works?|science)s?\b/i },
  maps: { label: t('Maps and places'), emoji: '🗺️', words: /\b(map|treasure hunt|compass|countries)s?\b/i },
  fantasy: { label: t('Magic and superheroes'), emoji: '🦄', words: /\b(magic|superhero|dragon|fairy|fairies|wizard|potion|monster|pirate|princess|knight|unicorn)s?\b/i },
  collecting: { label: t('Collecting and sorting'), emoji: '🗂️', words: /\b(sort|sorting|collect|collection|treasure basket)s?\b/i },
};

const cache = new Map<string, string[]>();

/** In English whatever language is showing, because the word lists above are. */
function gameText(a: Activity): string {
  const { title, summary } = english(a);
  return [title, summary, ...english(a.materials)].join(' ');
}

export function activityInterests(a: Activity): string[] {
  const hit = cache.get(a.id);
  if (hit) return hit;
  const text = gameText(a);
  const found = Object.entries(INTERESTS)
    .filter(([, i]) => i.words.test(text))
    .map(([key]) => key);
  cache.set(a.id, found);
  return found;
}

/** The first of the child's interests that this game touches on, if any. */
export function sharedInterest(a: Activity, interests: readonly string[] | undefined): string | null {
  if (!interests?.length) return null;
  const mine = activityInterests(a);
  return interests.find((i) => mine.includes(i)) ?? null;
}
