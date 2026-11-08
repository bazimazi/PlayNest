import type { FirstIdea } from './packs';
import { localize } from '../i18n';

/**
 * Suggestions for the parent's own record of firsts. These are keepsakes, not milestones: the ranges are wide and loose, a
 * first is never due, and nothing here feeds a developmental check. The list is editorial, because no health body publishes
 * one (research_notes/…/10_development_stages_and_routines.md).
 *
 * Left out on purpose: puberty firsts (the notes say opt-in, never suggested), faith events (free text or locale packs),
 * and anything that assumes religion, a two-parent home or a car.
 */
export const FIRSTS: FirstIdea[] = [
  // Early days
  { id: 'walk-outside', title: 'First walk outside', emoji: '🌳', minMonths: 0, maxMonths: 6 },
  { id: 'bath-at-home', title: 'First bath at home', emoji: '🛁', minMonths: 0, maxMonths: 6 },
  { id: 'visit-loved-one', title: 'First visit from someone who loves them', emoji: '💕', minMonths: 0, maxMonths: 12 },
  { id: 'real-smile', title: 'First real smile', emoji: '😊', minMonths: 1, maxMonths: 6 },
  { id: 'real-laugh', title: 'First real laugh', emoji: '😄', minMonths: 2, maxMonths: 9 },
  { id: 'babble-answered', title: 'First babble you could answer', emoji: '💬', minMonths: 2, maxMonths: 12 },
  { id: 'roll', title: 'First roll', emoji: '🙃', minMonths: 2, maxMonths: 12 },
  { id: 'tooth', title: 'First tooth', emoji: '🦷', minMonths: 3, maxMonths: 18 },
  { id: 'sit-up', title: 'First time sitting up alone', emoji: '🪑', minMonths: 3, maxMonths: 14 },
  { id: 'peekaboo', title: 'First game of peek-a-boo', emoji: '🙈', minMonths: 3, maxMonths: 14 },
  { id: 'feet-on-grass', title: 'First bare feet on grass', emoji: '🌱', minMonths: 3, maxMonths: 24 },
  { id: 'taste-food', title: 'First taste of solid food', emoji: '🥄', minMonths: 4, maxMonths: 12 },

  // Moving and talking
  { id: 'crawl-scoot', title: 'First crawl, scoot or shuffle', emoji: '🐛', minMonths: 5, maxMonths: 20 },
  { id: 'dance', title: 'First dance to music', emoji: '🎵', minMonths: 5, maxMonths: 24 },
  { id: 'wave', title: 'First wave bye-bye', emoji: '👋', minMonths: 6, maxMonths: 18 },
  { id: 'feed-themselves', title: 'First time feeding themselves', emoji: '🍌', minMonths: 6, maxMonths: 24 },
  { id: 'favourite-book', title: 'First favourite book', emoji: '📖', minMonths: 6, maxMonths: 36 },
  { id: 'friendly-animal', title: 'First stroke of a friendly animal', emoji: '🐾', minMonths: 6, maxMonths: 36 },
  { id: 'haircut', title: 'First haircut', emoji: '💈', minMonths: 6, maxMonths: 48 },
  { id: 'point-to-show', title: 'First time pointing to show you something', emoji: '👉', minMonths: 8, maxMonths: 20 },
  { id: 'hug-given', title: 'First hug they gave you', emoji: '🤗', minMonths: 8, maxMonths: 24 },
  { id: 'word', title: 'First word or sign, in any language', emoji: '🗣️', minMonths: 8, maxMonths: 30 },
  { id: 'steps', title: 'First steps', emoji: '👣', minMonths: 8, maxMonths: 30 },
  { id: 'scribble', title: 'First scribble', emoji: '🖍️', minMonths: 12, maxMonths: 30 },
  { id: 'pretend', title: 'First game of pretend', emoji: '🎭', minMonths: 12, maxMonths: 36 },
  { id: 'song-sung', title: 'First song they sang', emoji: '🎶', minMonths: 12, maxMonths: 42 },
  { id: 'friend', title: 'First friend', emoji: '🤝', minMonths: 12, maxMonths: 48 },
  { id: 'big-bed', title: 'First night in a big bed', emoji: '🛏️', minMonths: 12, maxMonths: 60 },
  { id: 'puddle-jump', title: 'First puddle jump', emoji: '🌧️', minMonths: 12, maxMonths: 60 },
  { id: 'library', title: 'First library visit', emoji: '📚', minMonths: 12, maxMonths: 72 },
  { id: 'word-pair', title: 'First two words together', emoji: '🗨️', minMonths: 14, maxMonths: 36 },
  { id: 'joke', title: 'First joke that made you laugh', emoji: '😂', minMonths: 15, maxMonths: 60 },
  { id: 'comfort-someone', title: 'First time they comforted someone', emoji: '💛', minMonths: 15, maxMonths: 60 },

  // Doing it themselves
  { id: 'did-it-myself', title: 'First "I did it myself"', emoji: '💪', minMonths: 18, maxMonths: 48 },
  { id: 'chose-outfit', title: 'First outfit they chose', emoji: '👕', minMonths: 18, maxMonths: 60 },
  { id: 'no-nappies', title: 'First day without nappies', emoji: '🚽', minMonths: 18, maxMonths: 72 },
  { id: 'picture-given', title: 'First picture they gave you', emoji: '🎨', minMonths: 18, maxMonths: 72 },
  { id: 'bike-or-scooter', title: 'First ride on a bike or scooter', emoji: '🛴', minMonths: 18, maxMonths: 84 },
  { id: 'helped-bake', title: 'First thing they helped bake', emoji: '🧁', minMonths: 24, maxMonths: 84 },
  { id: 'night-sky', title: 'First proper look at the stars', emoji: '⭐', minMonths: 24, maxMonths: 96 },
  { id: 'night-in-tent', title: 'First night in a tent', emoji: '⛺', minMonths: 24, maxMonths: 144 },
  { id: 'story-told', title: 'First story they told you', emoji: '💭', minMonths: 30, maxMonths: 72 },

  // Out in the world
  { id: 'bus-or-train', title: 'First bus or train ride', emoji: '🚌', minMonths: 0, maxMonths: 60 },
  { id: 'with-a-carer', title: 'First day at nursery or with a carer', emoji: '🧸', minMonths: 0, maxMonths: 60 },
  { id: 'at-the-sea', title: 'First time at the sea', emoji: '🌊', minMonths: 0, maxMonths: 144 },
  { id: 'snow', title: 'First snow, if it comes your way', emoji: '❄️', minMonths: 0, maxMonths: 144 },
  { id: 'trip-away', title: 'First trip away from home', emoji: '🧳', minMonths: 0, maxMonths: 144 },
  { id: 'picnic', title: 'First picnic', emoji: '🧺', minMonths: 6, maxMonths: 60 },
  { id: 'school-day', title: 'First day of school', emoji: '🏫', minMonths: 36, maxMonths: 84 },
  { id: 'game-with-rules', title: 'First game with real rules', emoji: '🎲', minMonths: 36, maxMonths: 96 },
  { id: 'best-friend', title: 'First best friend', emoji: '🧡', minMonths: 36, maxMonths: 108 },
  { id: 'plant-grown', title: 'First plant they grew', emoji: '🌻', minMonths: 36, maxMonths: 120 },
  { id: 'bike-no-help', title: 'First bike ride with no help', emoji: '🚲', minMonths: 36, maxMonths: 120 },
  { id: 'swim-no-help', title: 'First swim with no help', emoji: '🐠', minMonths: 36, maxMonths: 132 },
  { id: 'audience', title: 'First show, song or play for an audience', emoji: '🎤', minMonths: 36, maxMonths: 144 },
  { id: 'brave-thing', title: 'First brave thing they felt proud of', emoji: '🦁', minMonths: 36, maxMonths: 144 },

  // School age
  { id: 'name-written', title: 'First time writing their name', emoji: '✏️', minMonths: 36, maxMonths: 84 },
  { id: 'lost-tooth', title: 'First lost tooth', emoji: '😁', minMonths: 48, maxMonths: 96 },
  { id: 'tied-laces', title: 'First time tying their laces', emoji: '👟', minMonths: 48, maxMonths: 108 },
  { id: 'book-alone', title: 'First book read alone', emoji: '📕', minMonths: 48, maxMonths: 120 },
  { id: 'letter-written', title: 'First letter or card they wrote', emoji: '✉️', minMonths: 48, maxMonths: 120 },
  { id: 'school-trip', title: 'First school trip', emoji: '🎒', minMonths: 48, maxMonths: 132 },
  { id: 'sleepover', title: 'First sleepover', emoji: '🛌', minMonths: 48, maxMonths: 144 },
  { id: 'job-all-theirs', title: 'First job at home that is all theirs', emoji: '🧹', minMonths: 48, maxMonths: 144 },
  { id: 'team-or-club', title: 'First time in a team or club', emoji: '⚽', minMonths: 60, maxMonths: 144 },
  { id: 'money-saved', title: 'First money they saved up', emoji: '🐷', minMonths: 60, maxMonths: 144 },
  { id: 'paid-in-shop', title: 'First time paying in a shop', emoji: '🛒', minMonths: 60, maxMonths: 144 },
  { id: 'fair-win', title: 'First time they fairly beat you at a game', emoji: '♟️', minMonths: 60, maxMonths: 144 },
  { id: 'stood-up-for', title: 'First time standing up for someone', emoji: '🙌', minMonths: 60, maxMonths: 144 },
  { id: 'meal-cooked', title: 'First meal they cooked', emoji: '🍳', minMonths: 72, maxMonths: 144 },
  { id: 'led-way-home', title: 'First time they led the way home', emoji: '🧭', minMonths: 72, maxMonths: 144 },
  { id: 'walk-to-friend', title: "First walk to a friend's alone", emoji: '🚶', minMonths: 84, maxMonths: 144 },
  { id: 'errand-alone', title: 'First errand on their own', emoji: '🛍️', minMonths: 84, maxMonths: 144 },

  // Family and culture
  { id: 'family-language', title: 'First words in a family language', emoji: '🌍', minMonths: 6, maxMonths: 144 },
  { id: 'celebration-remembered', title: 'First celebration they remember', emoji: '🎉', minMonths: 24, maxMonths: 84 },
  { id: 'tradition-asked-for', title: 'First family tradition they asked for', emoji: '🎁', minMonths: 30, maxMonths: 96 },
  { id: 'family-recipe', title: 'First family recipe made together', emoji: '🍲', minMonths: 36, maxMonths: 144 },
  { id: 'family-story', title: 'First family story they retold', emoji: '📜', minMonths: 48, maxMonths: 144 },
  { id: 'family-roots', title: 'First questions about where the family comes from', emoji: '🗺️', minMonths: 48, maxMonths: 144 },
];

localize('firsts', FIRSTS);
