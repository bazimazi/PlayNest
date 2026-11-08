import type { TalkCard } from './packs';
import { fitsCulture, localize } from '../i18n';
import { PERSIAN_TALK } from './talk-persian';

/**
 * Open questions for the dinner table, the car and bedtime. All written for PlayNest from the themes in
 * research_notes/PlayNest phase 5 app research/11_ages_8_to_12_and_screens.md, Part C. None comes from The Family Dinner
 * Project, whose terms bar reuse.
 *
 * Every family has to fit: "someone in our family", never a named relative, and no assumption of pets, money, brothers or
 * sisters, or how a child joined the family. Nothing frightening at 3 to 5. Nothing about puberty or romance at 9 to 12.
 * Ids are stable, so add new cards at the end of a theme.
 */
const CARDS: TalkCard[] = [
  // ---------- Ages 3 to 5: concrete, about here and now ----------
  { id: 'talk-3-feelings-1', theme: 'Feelings', emoji: '😊', band: '3-5', text: 'What was the happiest bit of today?' },
  { id: 'talk-3-feelings-2', theme: 'Feelings', emoji: '😊', band: '3-5', text: 'Does happy live in your tummy, your toes or your nose?' },
  { id: 'talk-3-feelings-3', theme: 'Feelings', emoji: '🎨', band: '3-5', text: 'What colour is your feeling right now?' },
  { id: 'talk-3-feelings-4', theme: 'Feelings', emoji: '😠', band: '3-5', text: 'What makes a cross feeling float away?' },
  { id: 'talk-3-feelings-5', theme: 'Feelings', emoji: '🦋', band: '3-5', text: 'If your happy feeling were an animal, which animal would it be?' },
  { id: 'talk-3-feelings-6', theme: 'Feelings', emoji: '🧸', band: '3-5', text: 'What makes you feel cosy and safe?' },

  { id: 'talk-3-friendship-1', theme: 'Friendship', emoji: '🤝', band: '3-5', text: 'What game would you teach a new friend?' },
  { id: 'talk-3-friendship-2', theme: 'Friendship', emoji: '🤗', band: '3-5', text: 'What could we say to someone who looks sad?' },
  { id: 'talk-3-friendship-3', theme: 'Friendship', emoji: '🙋', band: '3-5', text: 'What can you say when you would like to join a game?' },
  { id: 'talk-3-friendship-4', theme: 'Friendship', emoji: '🧩', band: '3-5', text: 'What makes playing with someone so much fun?' },
  { id: 'talk-3-friendship-5', theme: 'Friendship', emoji: '👀', band: '3-5', text: 'Think of someone you know. How are you two alike, and how are you different?' },

  { id: 'talk-3-fairness-1', theme: 'Fairness', emoji: '🍪', band: '3-5', text: "There's one biscuit and two of us. What can we do?" },
  { id: 'talk-3-fairness-2', theme: 'Fairness', emoji: '🐰', band: '3-5', text: 'Two rabbits want the same carrot. What could they do?' },
  { id: 'talk-3-fairness-3', theme: 'Fairness', emoji: '⚖️', band: '3-5', text: 'How can we make sure everyone gets a turn?' },
  { id: 'talk-3-fairness-4', theme: 'Fairness', emoji: '🧱', band: '3-5', text: 'One teddy has all the blocks and one has none. What would you do?' },
  { id: 'talk-3-fairness-5', theme: 'Fairness', emoji: '🤔', band: '3-5', text: 'What does unfair feel like?' },

  { id: 'talk-3-whatif-1', theme: 'What if…', emoji: '👟', band: '3-5', text: 'If your shoes could fly, where would they take you?' },
  { id: 'talk-3-whatif-2', theme: 'What if…', emoji: '☁️', band: '3-5', text: 'If clouds were made of food, what would they taste like?' },
  { id: 'talk-3-whatif-3', theme: 'What if…', emoji: '🚀', band: '3-5', text: 'If we had a rocket, what would you bring along?' },
  { id: 'talk-3-whatif-4', theme: 'What if…', emoji: '🐞', band: '3-5', text: 'If you were as tiny as a ladybird, where would you go first?' },
  { id: 'talk-3-whatif-5', theme: 'What if…', emoji: '🌧️', band: '3-5', text: 'What would happen if the rain was made of bubbles?' },
  { id: 'talk-3-whatif-6', theme: 'What if…', emoji: '🦸', band: '3-5', text: 'What superpower would make getting dressed more fun?' },

  { id: 'talk-3-future-1', theme: 'The future', emoji: '🌱', band: '3-5', text: 'What would you like to learn to do when you are bigger?' },
  { id: 'talk-3-future-2', theme: 'The future', emoji: '🚪', band: '3-5', text: 'What will you do when you are as tall as a door?' },
  { id: 'talk-3-future-3', theme: 'The future', emoji: '🎒', band: '3-5', text: 'What have you seen older children do that looks fun to try?' },
  { id: 'talk-3-future-4', theme: 'The future', emoji: '🌅', band: '3-5', text: 'What shall we do tomorrow?' },
  { id: 'talk-3-future-5', theme: 'The future', emoji: '🏠', band: '3-5', text: 'If you build a house one day, what will it be made of?' },

  { id: 'talk-3-family-1', theme: 'Family stories', emoji: '🪀', band: '3-5', text: 'What do you think someone in our family liked to play when they were little?' },
  { id: 'talk-3-family-2', theme: 'Family stories', emoji: '🧒', band: '3-5', text: 'What do you think I was like when I was small like you?' },
  { id: 'talk-3-family-3', theme: 'Family stories', emoji: '🎵', band: '3-5', text: 'What song or rhyme feels like ours?' },
  { id: 'talk-3-family-4', theme: 'Family stories', emoji: '📖', band: '3-5', text: 'Who in our family would you like to hear a story from?' },
  { id: 'talk-3-family-5', theme: 'Family stories', emoji: '🏡', band: '3-5', text: 'What do you like us to do together?' },
  { id: 'talk-3-family-6', theme: 'Family stories', emoji: '😂', band: '3-5', text: "What's a funny thing that happened to us?" },

  { id: 'talk-3-ethics-1', theme: 'Right and wrong', emoji: '🧸', band: '3-5', text: 'A toy looks really fun, but it belongs to someone else. What can you do?' },
  { id: 'talk-3-ethics-2', theme: 'Right and wrong', emoji: '🧩', band: '3-5', text: 'What could you do if you broke something by accident?' },
  { id: 'talk-3-ethics-3', theme: 'Right and wrong', emoji: '🚦', band: '3-5', text: 'Why do you think cars stop at a red light?' },
  { id: 'talk-3-ethics-4', theme: 'Right and wrong', emoji: '🐻', band: '3-5', text: 'If you found a teddy on a bench, what would you do?' },
  { id: 'talk-3-ethics-5', theme: 'Right and wrong', emoji: '💬', band: '3-5', text: 'If someone said something unkind, what could you say back?' },

  { id: 'talk-3-wonder-1', theme: 'Wonder', emoji: '🌞', band: '3-5', text: 'Where do you think the sun goes at night?' },
  { id: 'talk-3-wonder-2', theme: 'Wonder', emoji: '💧', band: '3-5', text: 'Where do puddles go when they dry up?' },
  { id: 'talk-3-wonder-3', theme: 'Wonder', emoji: '🚰', band: '3-5', text: 'How do you think water gets into the tap?' },
  { id: 'talk-3-wonder-4', theme: 'Wonder', emoji: '🐦', band: '3-5', text: 'Why do you think birds sing?' },
  { id: 'talk-3-wonder-5', theme: 'Wonder', emoji: '🐜', band: '3-5', text: "What's the smallest thing you spotted outside today?" },
  { id: 'talk-3-wonder-6', theme: 'Wonder', emoji: '🌓', band: '3-5', text: 'Why do you think the moon changes shape?' },

  { id: 'talk-3-rather-1', theme: 'Would you rather', emoji: '🐭', band: '3-5', text: 'Would you rather be as big as a house or as small as a mouse? Why?' },
  { id: 'talk-3-rather-2', theme: 'Would you rather', emoji: '🦋', band: '3-5', text: 'Would you rather have wings or a long tail? What would you do with them?' },
  { id: 'talk-3-rather-3', theme: 'Would you rather', emoji: '🍴', band: '3-5', text: 'Would you rather eat soup with a fork or jelly with your hands?' },
  { id: 'talk-3-rather-4', theme: 'Would you rather', emoji: '🍂', band: '3-5', text: 'Would you rather splash in a puddle or crunch through some leaves?' },
  { id: 'talk-3-rather-5', theme: 'Would you rather', emoji: '🦕', band: '3-5', text: 'Would you rather be a dinosaur or a fish for the day? Why?' },

  { id: 'talk-3-kindness-1', theme: 'Kindness', emoji: '💛', band: '3-5', text: 'Who did something nice for you today?' },
  { id: 'talk-3-kindness-2', theme: 'Kindness', emoji: '🌻', band: '3-5', text: 'What could we do to make someone smile tomorrow?' },
  { id: 'talk-3-kindness-3', theme: 'Kindness', emoji: '🩹', band: '3-5', text: 'How could we help someone who fell over?' },
  { id: 'talk-3-kindness-4', theme: 'Kindness', emoji: '🤲', band: '3-5', text: 'What was something kind you did?' },
  { id: 'talk-3-kindness-5', theme: 'Kindness', emoji: '💬', band: '3-5', text: 'What kind words do you like to hear?' },

  { id: 'talk-3-funny-1', theme: 'Funny', emoji: '🐉', band: '3-5', text: 'What would a friendly dragon have for breakfast?' },
  { id: 'talk-3-funny-2', theme: 'Funny', emoji: '🥔', band: '3-5', text: 'What noise does a happy potato make?' },
  { id: 'talk-3-funny-3', theme: 'Funny', emoji: '🐶', band: '3-5', text: 'What would a dog wear to a party?' },
  { id: 'talk-3-funny-4', theme: 'Funny', emoji: '🥄', band: '3-5', text: 'If a spoon could talk, what would it say at dinner?' },
  { id: 'talk-3-funny-5', theme: 'Funny', emoji: '🤪', band: '3-5', text: "What's the silliest word you know?" },
  { id: 'talk-3-funny-6', theme: 'Funny', emoji: '👃', band: '3-5', text: 'What silly name could we give to a nose?' },

  { id: 'talk-3-thanks-1', theme: 'Thankful', emoji: '🛏️', band: '3-5', text: 'What was the cosiest part of your day?' },
  { id: 'talk-3-thanks-2', theme: 'Thankful', emoji: '🙌', band: '3-5', text: 'Who would you like to give a big thank you to?' },
  { id: 'talk-3-thanks-3', theme: 'Thankful', emoji: '🌈', band: '3-5', text: 'What do you love to look at, listen to or touch?' },
  { id: 'talk-3-thanks-4', theme: 'Thankful', emoji: '☀️', band: '3-5', text: "What do you like about today's weather?" },

  { id: 'talk-3-animals-1', theme: 'Animals', emoji: '🐮', band: '3-5', text: "Which animal's noise is the most fun to make?" },
  { id: 'talk-3-animals-2', theme: 'Animals', emoji: '🐌', band: '3-5', text: 'What do you think a snail thinks about all day?' },
  { id: 'talk-3-animals-3', theme: 'Animals', emoji: '🐱', band: '3-5', text: 'What would a cat say if it could talk?' },

  { id: 'talk-3-trying-1', theme: 'Having a go', emoji: '🌟', band: '3-5', text: 'What did you try for the very first time?' },
  { id: 'talk-3-trying-2', theme: 'Having a go', emoji: '🧱', band: '3-5', text: "What's fun about building it again when a tower falls down?" },
  { id: 'talk-3-trying-3', theme: 'Having a go', emoji: '💪', band: '3-5', text: 'What can you do now that you could not do when you were tiny?' },

  { id: 'talk-3-stories-1', theme: 'Stories', emoji: '📚', band: '3-5', text: 'If you could jump into a story, which one would you pick?' },
  { id: 'talk-3-helping-1', theme: 'Helping', emoji: '🧹', band: '3-5', text: 'What job do you like helping with?' },

  // ---------- Ages 6 to 8: asking for reasons ----------
  { id: 'talk-6-feelings-1', theme: 'Feelings', emoji: '🌤️', band: '6-8', text: 'What was a good bit of today, and what was a wobbly bit?' },
  { id: 'talk-6-feelings-2', theme: 'Feelings', emoji: '🦋', band: '6-8', text: 'Where do you feel nerves first: your tummy, your hands or somewhere else?' },
  { id: 'talk-6-feelings-3', theme: 'Feelings', emoji: '🌧️', band: '6-8', text: 'When you are upset, what do you want people to do: talk, hug or leave you be?' },
  { id: 'talk-6-feelings-4', theme: 'Feelings', emoji: '⛅', band: '6-8', text: 'If your mood today were weather, what would it be?' },
  { id: 'talk-6-feelings-5', theme: 'Feelings', emoji: '🏅', band: '6-8', text: 'When did you last feel proud of yourself?' },
  { id: 'talk-6-feelings-6', theme: 'Feelings', emoji: '🌀', band: '6-8', text: 'What feeling is the hardest to explain?' },
  { id: 'talk-6-feelings-7', theme: 'Feelings', emoji: '🌋', band: '6-8', text: 'What helps a big feeling get smaller for you?' },

  { id: 'talk-6-friendship-1', theme: 'Friendship', emoji: '🤝', band: '6-8', text: "What's the best thing a friend can do for you?" },
  { id: 'talk-6-friendship-2', theme: 'Friendship', emoji: '🕊️', band: '6-8', text: 'What helps two people make up after a falling out?' },
  { id: 'talk-6-friendship-3', theme: 'Friendship', emoji: '🪁', band: '6-8', text: 'Someone is on their own at playtime. What could you try?' },
  { id: 'talk-6-friendship-4', theme: 'Friendship', emoji: '🧩', band: '6-8', text: 'Can you be friends with someone who likes totally different things? How?' },
  { id: 'talk-6-friendship-5', theme: 'Friendship', emoji: '🎲', band: '6-8', text: 'What makes you want to play with someone again?' },
  { id: 'talk-6-friendship-6', theme: 'Friendship', emoji: '🎁', band: '6-8', text: "What's something surprising you found out about someone you know?" },

  { id: 'talk-6-fairness-1', theme: 'Fairness', emoji: '⚖️', band: '6-8', text: 'What felt unfair lately, and what would have made it fair?' },
  { id: 'talk-6-fairness-2', theme: 'Fairness', emoji: '🎲', band: '6-8', text: 'Is it fair if the youngest person always goes first? Why or why not?' },
  { id: 'talk-6-fairness-3', theme: 'Fairness', emoji: '🍰', band: '6-8', text: 'If you cut the cake, how can you make sure everyone is happy with their slice?' },
  { id: 'talk-6-fairness-4', theme: 'Fairness', emoji: '🏁', band: '6-8', text: 'Would a race be fairer if everyone started in a different place? Why?' },
  { id: 'talk-6-fairness-5', theme: 'Fairness', emoji: '🤔', band: '6-8', text: "Who gets to decide what's fair in a game?" },

  { id: 'talk-6-whatif-1', theme: 'What if…', emoji: '🚪', band: '6-8', text: 'A tiny door appears in the wall. Who lives behind it?' },
  { id: 'talk-6-whatif-2', theme: 'What if…', emoji: '🔍', band: '6-8', text: 'If you could shrink for a day, where would you explore?' },
  { id: 'talk-6-whatif-3', theme: 'What if…', emoji: '🌦️', band: '6-8', text: "You're in charge of the weather for a day. What falls from the sky?" },
  { id: 'talk-6-whatif-4', theme: 'What if…', emoji: '🦸', band: '6-8', text: "Pick a superpower. What's the annoying side of having it?" },
  { id: 'talk-6-whatif-5', theme: 'What if…', emoji: '👤', band: '6-8', text: 'If your shadow could do one thing without you, what would it do?' },
  { id: 'talk-6-whatif-6', theme: 'What if…', emoji: '🎉', band: '6-8', text: 'If you invented a new celebration day, what would everyone do?' },

  { id: 'talk-6-future-1', theme: 'The future', emoji: '📅', band: '6-8', text: 'What would you love to be able to do by this time next year?' },
  { id: 'talk-6-future-2', theme: 'The future', emoji: '🧰', band: '6-8', text: 'Which job would you try for a day, and what would be the tricky part?' },
  { id: 'talk-6-future-3', theme: 'The future', emoji: '🚗', band: '6-8', text: 'What do you think cars will be like when you are grown up?' },
  { id: 'talk-6-future-4', theme: 'The future', emoji: '💡', band: '6-8', text: 'What could someone invent to make mornings easier?' },
  { id: 'talk-6-future-5', theme: 'The future', emoji: '🌱', band: '6-8', text: "What do you think you'll still love when you're much older?" },

  { id: 'talk-6-family-1', theme: 'Family stories', emoji: '🧓', band: '6-8', text: 'What would you like to ask someone in our family about when they were your age?' },
  { id: 'talk-6-family-2', theme: 'Family stories', emoji: '🗣️', band: '6-8', text: 'Which word or joke belongs to our family?' },
  { id: 'talk-6-family-3', theme: 'Family stories', emoji: '🤔', band: '6-8', text: 'What do you think I worried about when I was your age?' },
  { id: 'talk-6-family-4', theme: 'Family stories', emoji: '📖', band: '6-8', text: "What's a story about us you like hearing again?" },
  { id: 'talk-6-family-5', theme: 'Family stories', emoji: '🏡', band: '6-8', text: "What's one thing our family does that you'd keep for ever?" },
  { id: 'talk-6-family-6', theme: 'Family stories', emoji: '🛡️', band: '6-8', text: 'If our family had a badge, what would be on it?' },

  { id: 'talk-6-ethics-1', theme: 'Right and wrong', emoji: '👛', band: '6-8', text: 'You find a purse on the pavement. What do you do next?' },
  { id: 'talk-6-ethics-2', theme: 'Right and wrong', emoji: '🎁', band: '6-8', text: "A present isn't what you hoped for. What do you say?" },
  { id: 'talk-6-ethics-3', theme: 'Right and wrong', emoji: '✏️', band: '6-8', text: 'Someone asks to copy your answers. What do you say?' },
  { id: 'talk-6-ethics-4', theme: 'Right and wrong', emoji: '🗑️', band: '6-8', text: 'You see someone drop litter. Would you say anything? Why?' },
  { id: 'talk-6-ethics-5', theme: 'Right and wrong', emoji: '📢', band: '6-8', text: 'How can you tell the difference between telling tales and getting help?' },
  { id: 'talk-6-ethics-6', theme: 'Right and wrong', emoji: '🧩', band: '6-8', text: 'You broke something and nobody saw. What happens next?' },

  { id: 'talk-6-wonder-1', theme: 'Wonder', emoji: '✈️', band: '6-8', text: 'How do you think a plane stays up? Have a guess.' },
  { id: 'talk-6-wonder-2', theme: 'Wonder', emoji: '🔬', band: '6-8', text: 'What question would you ask a scientist?' },
  { id: 'talk-6-wonder-3', theme: 'Wonder', emoji: '💭', band: '6-8', text: 'Why do you think we dream?' },
  { id: 'talk-6-wonder-4', theme: 'Wonder', emoji: '🐙', band: '6-8', text: 'What do you think lives at the very bottom of the sea?' },
  { id: 'talk-6-wonder-5', theme: 'Wonder', emoji: '🪐', band: '6-8', text: 'What would be the hardest thing about living on Mars?' },
  { id: 'talk-6-wonder-6', theme: 'Wonder', emoji: '🐜', band: '6-8', text: 'What do you think ants say to each other?' },

  { id: 'talk-6-rather-1', theme: 'Would you rather', emoji: '🐘', band: '6-8', text: 'Would you rather speak every language or talk to animals? Why?' },
  { id: 'talk-6-rather-2', theme: 'Would you rather', emoji: '🍦', band: '6-8', text: 'Would you rather have one big treat today or three small ones next week?' },
  { id: 'talk-6-rather-3', theme: 'Would you rather', emoji: '🌊', band: '6-8', text: 'Would you rather explore the deep sea or outer space? What would you look for?' },
  { id: 'talk-6-rather-4', theme: 'Would you rather', emoji: '🤧', band: '6-8', text: 'Would you rather have hiccups for a week or sneeze whenever someone says your name?' },
  { id: 'talk-6-rather-5', theme: 'Would you rather', emoji: '🌳', band: '6-8', text: "Would you rather live in a treehouse or a submarine? What's the best bit?" },

  { id: 'talk-6-kindness-1', theme: 'Kindness', emoji: '💛', band: '6-8', text: "What's a small kindness you noticed lately?" },
  { id: 'talk-6-kindness-2', theme: 'Kindness', emoji: '🌟', band: '6-8', text: "How could you make someone's day better without them knowing?" },
  { id: 'talk-6-kindness-3', theme: 'Kindness', emoji: '🤗', band: '6-8', text: 'What can you do when someone you care about feels sad?' },
  { id: 'talk-6-kindness-4', theme: 'Kindness', emoji: '💬', band: '6-8', text: "What's a kind thing to say when someone gets it wrong?" },
  { id: 'talk-6-kindness-5', theme: 'Kindness', emoji: '🏘️', band: '6-8', text: 'How could we welcome someone new round here?' },

  { id: 'talk-6-funny-1', theme: 'Funny', emoji: '🐱', band: '6-8', text: 'What would a cat write in its diary?' },
  { id: 'talk-6-funny-2', theme: 'Funny', emoji: '🤪', band: '6-8', text: "What's the silliest rule you could make for our home?" },
  { id: 'talk-6-funny-3', theme: 'Funny', emoji: '🥕', band: '6-8', text: 'If vegetables could talk, which one would be the grumpiest?' },
  { id: 'talk-6-funny-4', theme: 'Funny', emoji: '🐧', band: '6-8', text: 'What job would a penguin be terrible at?' },
  { id: 'talk-6-funny-5', theme: 'Funny', emoji: '🧦', band: '6-8', text: 'If your socks could complain, what would they say?' },
  { id: 'talk-6-funny-6', theme: 'Funny', emoji: '🍦', band: '6-8', text: 'What would be the worst flavour of ice cream?' },

  { id: 'talk-6-thanks-1', theme: 'Thankful', emoji: '✉️', band: '6-8', text: 'Who would you write a thank-you note to, and what would it say?' },
  { id: 'talk-6-thanks-2', theme: 'Thankful', emoji: '🧺', band: '6-8', text: "What's something ordinary you're glad exists?" },
  { id: 'talk-6-thanks-3', theme: 'Thankful', emoji: '🌳', band: '6-8', text: 'Where do you feel most at ease?' },
  { id: 'talk-6-thanks-4', theme: 'Thankful', emoji: '🌈', band: '6-8', text: 'What made today better than you expected?' },
  { id: 'talk-6-thanks-5', theme: 'Thankful', emoji: '🌸', band: '6-8', text: "What's a smell, sound or taste that makes you happy?" },

  { id: 'talk-6-mistakes-1', theme: 'Mistakes', emoji: '🤭', band: '6-8', text: "What's a mistake that ended up being funny or useful?" },
  { id: 'talk-6-mistakes-2', theme: 'Mistakes', emoji: '🧠', band: '6-8', text: 'What do you say to yourself when something goes wrong?' },

  { id: 'talk-6-brave-1', theme: 'Being brave', emoji: '🦁', band: '6-8', text: "What used to feel scary and doesn't now?" },
  { id: 'talk-6-brave-2', theme: 'Being brave', emoji: '🌟', band: '6-8', text: "What's a brave thing you've seen someone do?" },

  { id: 'talk-6-skills-1', theme: 'Good at', emoji: '🎓', band: '6-8', text: 'If you were my teacher for an hour, what would the lesson be?' },
  { id: 'talk-6-skills-2', theme: 'Good at', emoji: '📈', band: '6-8', text: 'What are you getting better at?' },

  { id: 'talk-6-rules-1', theme: 'Rules', emoji: '📜', band: '6-8', text: 'If you could change one rule here, which would it be, and why?' },
  { id: 'talk-6-stories-1', theme: 'Stories', emoji: '📚', band: '6-8', text: "Which story's ending would you rewrite, and how?" },
  { id: 'talk-6-animals-1', theme: 'Animals', emoji: '🦉', band: '6-8', text: 'Which animal would be best at running a school? Why?' },
  { id: 'talk-6-making-1', theme: 'Making things', emoji: '📦', band: '6-8', text: "What's the best thing you've ever made out of nothing much?" },
  { id: 'talk-6-online-1', theme: 'Real or made up', emoji: '📷', band: '6-8', text: 'How could you check if an amazing photo is real?' },

  // ---------- Ages 9 to 12: perspective, values and the future. Grown-ups answer too. ----------
  { id: 'talk-9-feelings-1', theme: 'Feelings', emoji: '🎬', band: '9-12', text: 'If today were a film, which scene stays in and which gets cut?' },
  { id: 'talk-9-feelings-2', theme: 'Feelings', emoji: '🚨', band: '9-12', text: "What's your early warning sign that you're getting annoyed?" },
  { id: 'talk-9-feelings-3', theme: 'Feelings', emoji: '🎭', band: '9-12', text: "When did you last feel something you didn't expect? What was behind it?" },
  { id: 'talk-9-feelings-4', theme: 'Feelings', emoji: '💭', band: '9-12', text: "What feeling needs a word that doesn't exist yet? What would you call it?" },
  { id: 'talk-9-feelings-5', theme: 'Feelings', emoji: '🧠', band: '9-12', text: 'What helps most when your mind is busy?' },
  { id: 'talk-9-feelings-6', theme: 'Feelings', emoji: '🤔', band: '9-12', text: "What do people often get wrong about how you're feeling?" },

  { id: 'talk-9-friendship-1', theme: 'Friendship', emoji: '🤝', band: '9-12', text: 'How can you tell someone is truly on your side?' },
  { id: 'talk-9-friendship-2', theme: 'Friendship', emoji: '🕊️', band: '9-12', text: 'Why is it so hard to be the first to say sorry?' },
  { id: 'talk-9-friendship-3', theme: 'Friendship', emoji: '💬', band: '9-12', text: 'Can two people disagree about something big and stay friends? How?' },
  { id: 'talk-9-friendship-4', theme: 'Friendship', emoji: '🔍', band: '9-12', text: 'Has anyone turned out different from your first impression? How?' },
  { id: 'talk-9-friendship-5', theme: 'Friendship', emoji: '🏕️', band: '9-12', text: 'What makes a group feel welcoming, and what makes it feel closed?' },
  { id: 'talk-9-friendship-6', theme: 'Friendship', emoji: '🌱', band: '9-12', text: "What do you look for in a friend now that you didn't care about when you were younger?" },

  { id: 'talk-9-fairness-1', theme: 'Fairness', emoji: '⚖️', band: '9-12', text: 'Does fair always mean everyone gets the same? When might it not?' },
  { id: 'talk-9-fairness-2', theme: 'Fairness', emoji: '🏅', band: '9-12', text: 'If you were picking teams, how would you make it fair?' },
  { id: 'talk-9-fairness-3', theme: 'Fairness', emoji: '🎯', band: '9-12', text: 'Why do some people get more chances than others? What could change that?' },
  { id: 'talk-9-fairness-4', theme: 'Fairness', emoji: '🗳️', band: '9-12', text: 'What would change if children could vote? What would you vote for?' },
  { id: 'talk-9-fairness-5', theme: 'Fairness', emoji: '📜', band: '9-12', text: 'Is it fair for adults to have different rules from children? Which ones?' },

  { id: 'talk-9-whatif-1', theme: 'What if…', emoji: '🏗️', band: '9-12', text: 'If you could design a new kind of building, what would it be for?' },
  { id: 'talk-9-whatif-2', theme: 'What if…', emoji: '🧠', band: '9-12', text: 'If everyone could read minds, what would change first?' },
  { id: 'talk-9-whatif-3', theme: 'What if…', emoji: '🌿', band: '9-12', text: 'If people left a city for 100 years, what would nature do first?' },
  { id: 'talk-9-whatif-4', theme: 'What if…', emoji: '🪐', band: '9-12', text: "You're setting up the first town on Mars. What's your first law?" },
  { id: 'talk-9-whatif-5', theme: 'What if…', emoji: '⏳', band: '9-12', text: 'If you could visit any time in history for a day, when would you go and why?' },
  { id: 'talk-9-whatif-6', theme: 'What if…', emoji: '🦉', band: '9-12', text: 'If animals ran the country for a week, which one would be in charge?' },

  { id: 'talk-9-future-1', theme: 'The future', emoji: '🧭', band: '9-12', text: "What do you hope your life has in it when you're 20?" },
  { id: 'talk-9-future-2', theme: 'The future', emoji: '🤖', band: '9-12', text: 'What job will people need in 30 years that nobody does today?' },
  { id: 'talk-9-future-3', theme: 'The future', emoji: '🎯', band: '9-12', text: 'What would you like to be really good at, whatever anyone else thinks?' },
  { id: 'talk-9-future-4', theme: 'The future', emoji: '🌍', band: '9-12', text: "What's one problem you hope your generation solves?" },
  { id: 'talk-9-future-5', theme: 'The future', emoji: '✉️', band: '9-12', text: 'What would you tell yourself a year from now?' },

  { id: 'talk-9-family-1', theme: 'Family stories', emoji: '📜', band: '9-12', text: 'Which story about our family do you think is worth passing on?' },
  { id: 'talk-9-family-2', theme: 'Family stories', emoji: '🙋', band: '9-12', text: 'Ask me about something I got wrong at your age. What do you want to know?' },
  { id: 'talk-9-family-3', theme: 'Family stories', emoji: '🔎', band: '9-12', text: "What would you like to find out about our family's past?" },
  { id: 'talk-9-family-4', theme: 'Family stories', emoji: '🍲', band: '9-12', text: 'Which meal or recipe feels most like us, and why?' },
  { id: 'talk-9-family-5', theme: 'Family stories', emoji: '🎊', band: '9-12', text: "What's a new tradition we could start, however silly?" },
  { id: 'talk-9-family-6', theme: 'Family stories', emoji: '🎙️', band: '9-12', text: "Who's someone older you'd like to interview, and what would you ask?" },

  { id: 'talk-9-ethics-1', theme: 'Right and wrong', emoji: '🚧', band: '9-12', text: 'Can you think of a time when breaking a rule would be the right thing?' },
  { id: 'talk-9-ethics-2', theme: 'Right and wrong', emoji: '🤥', band: '9-12', text: "Is a small lie ever kind? Where's the line?" },
  { id: 'talk-9-ethics-3', theme: 'Right and wrong', emoji: '🌳', band: '9-12', text: 'You can protect one thing for everyone for ever. What do you choose?' },
  { id: 'talk-9-ethics-4', theme: 'Right and wrong', emoji: '🤐', band: '9-12', text: 'A friend tells you a worrying secret. How do you decide what to do, and who could help?' },
  { id: 'talk-9-ethics-5', theme: 'Right and wrong', emoji: '🧾', band: '9-12', text: 'A shop gives you too much change. What do you do? Does it matter which shop?' },
  { id: 'talk-9-ethics-6', theme: 'Right and wrong', emoji: '🤖', band: '9-12', text: 'A chatbot tells you how to sort out a row with a friend. How would you test its advice?' },
  { id: 'talk-9-ethics-7', theme: 'Right and wrong', emoji: '🎥', band: '9-12', text: 'If a video can be faked, how do you decide what to believe?' },

  { id: 'talk-9-wonder-1', theme: 'Wonder', emoji: '🔮', band: '9-12', text: 'What do we believe today that people might laugh at in 100 years?' },
  { id: 'talk-9-wonder-2', theme: 'Wonder', emoji: '🧵', band: '9-12', text: "Pick something in this room. How many people's work went into it?" },
  { id: 'talk-9-wonder-3', theme: 'Wonder', emoji: '🐕', band: '9-12', text: 'How could you test whether an animal is happy?' },
  { id: 'talk-9-wonder-4', theme: 'Wonder', emoji: '💡', band: '9-12', text: 'Could we ever run out of new ideas? Why or why not?' },
  { id: 'talk-9-wonder-5', theme: 'Wonder', emoji: '🔢', band: '9-12', text: 'Do you think maths was invented or discovered? Why?' },
  { id: 'talk-9-wonder-6', theme: 'Wonder', emoji: '👽', band: '9-12', text: 'If we found life on another planet, what would you ask first?' },
  { id: 'talk-9-wonder-7', theme: 'Wonder', emoji: '🔭', band: '9-12', text: 'Is there an edge to space? What do you think?' },

  { id: 'talk-9-rather-1', theme: 'Would you rather', emoji: '🧠', band: '9-12', text: 'Would you rather know everything or be able to do anything? Why?' },
  { id: 'talk-9-rather-2', theme: 'Would you rather', emoji: '🏆', band: '9-12', text: 'Would you rather be the best at one thing or pretty good at everything?' },
  { id: 'talk-9-rather-3', theme: 'Would you rather', emoji: '🎒', band: '9-12', text: 'Would you rather never do homework again or never wait in a queue?' },
  { id: 'talk-9-rather-4', theme: 'Would you rather', emoji: '⏰', band: '9-12', text: 'Would you rather travel to the past or the future? Which year would you pick?' },
  { id: 'talk-9-rather-5', theme: 'Would you rather', emoji: '🎬', band: '9-12', text: 'Would you rather give up films or books for a year? Why?' },
  { id: 'talk-9-rather-6', theme: 'Would you rather', emoji: '🎭', band: '9-12', text: 'Would you rather be famous for something silly or unknown for something great?' },

  { id: 'talk-9-kindness-1', theme: 'Kindness', emoji: '👀', band: '9-12', text: "What's a kind thing you've seen that nobody else noticed?" },
  { id: 'talk-9-kindness-2', theme: 'Kindness', emoji: '🤲', band: '9-12', text: "What's the best way to help someone who doesn't want help?" },
  { id: 'talk-9-kindness-3', theme: 'Kindness', emoji: '🏘️', band: '9-12', text: "What's one thing around here you'd fix for everyone? Where would you start?" },
  { id: 'talk-9-kindness-4', theme: 'Kindness', emoji: '💬', band: '9-12', text: 'When is it kinder to tell a hard truth, and when is it kinder to keep quiet?' },
  { id: 'talk-9-kindness-5', theme: 'Kindness', emoji: '🏠', band: '9-12', text: 'How could we make someone new feel at home here?' },
  { id: 'talk-9-kindness-6', theme: 'Kindness', emoji: '📣', band: '9-12', text: 'Someone is being treated badly and nobody is saying anything. What would help you speak up?' },
  { id: 'talk-9-kindness-7', theme: 'Kindness', emoji: '🌧️', band: '9-12', text: 'What helps when someone is having a hard time?' },

  { id: 'talk-9-funny-1', theme: 'Funny', emoji: '😂', band: '9-12', text: 'If you could make one ridiculous law, what would it be?' },
  { id: 'talk-9-funny-2', theme: 'Funny', emoji: '🦸', band: '9-12', text: "What's the worst superpower you can think of?" },
  { id: 'talk-9-funny-3', theme: 'Funny', emoji: '🪑', band: '9-12', text: 'Which household object would make the most annoying flatmate?' },
  { id: 'talk-9-funny-4', theme: 'Funny', emoji: '🐦', band: '9-12', text: 'What life advice would a pigeon give?' },
  { id: 'talk-9-funny-5', theme: 'Funny', emoji: '🧦', band: '9-12', text: 'What invention does the world of socks need?' },
  { id: 'talk-9-funny-6', theme: 'Funny', emoji: '🥄', band: '9-12', text: 'If this spoon had opinions, what would it think of us?' },

  { id: 'talk-9-thanks-1', theme: 'Thankful', emoji: '🚿', band: '9-12', text: 'What everyday thing do you like more than people would guess?' },
  { id: 'talk-9-thanks-2', theme: 'Thankful', emoji: '💌', band: '9-12', text: "Who's someone outside our family you'd like to thank, and for what?" },
  { id: 'talk-9-thanks-3', theme: 'Thankful', emoji: '📈', band: '9-12', text: "What's gone better this year than you thought it would?" },
  { id: 'talk-9-thanks-4', theme: 'Thankful', emoji: '🧗', band: '9-12', text: "What's something you're glad you found out the hard way?" },
  { id: 'talk-9-thanks-5', theme: 'Thankful', emoji: '🎂', band: '9-12', text: 'What do you like about being the age you are now?' },

  { id: 'talk-9-skills-1', theme: 'Good at', emoji: '🏅', band: '9-12', text: 'What are you good at that no test could measure?' },
  { id: 'talk-9-skills-2', theme: 'Good at', emoji: '🧗', band: '9-12', text: 'What took you ages to get good at? What kept you going?' },

  { id: 'talk-9-brave-1', theme: 'Being brave', emoji: '🦁', band: '9-12', text: "What's the bravest thing you've done that looked like nothing from the outside?" },

  { id: 'talk-9-charge-1', theme: 'In charge', emoji: '👑', band: '9-12', text: "If you were in charge here for a week, what's the first thing you'd try?" },
  { id: 'talk-9-wanting-1', theme: 'Wanting things', emoji: '🛍️', band: '9-12', text: 'Have you ever really wanted something, then stopped? What changed?' },
  { id: 'talk-9-stories-1', theme: 'Stories', emoji: '📚', band: '9-12', text: 'Which character from a book or film feels most like you?' },
  { id: 'talk-9-time-1', theme: 'Time', emoji: '⌛', band: '9-12', text: 'A secret hour appears in your day and nobody knows. How do you spend it?' },
  { id: 'talk-9-growing-1', theme: 'Growing up', emoji: '🌱', band: '9-12', text: 'What have you grown out of, and what do you hope you never will?' },
  { id: 'talk-9-screens-1', theme: 'Screens and us', emoji: '📱', band: '9-12', text: 'What do you think phones do well for people, and what do they do badly?' },
];

localize('talk', CARDS);

/** Every card in every language, for checking the content. */
export const EVERY_TALK: readonly TalkCard[] = [...CARDS, ...PERSIAN_TALK];

/** The cards this language shows: the ones for everyone, and its own culture's. */
export const TALK: TalkCard[] = EVERY_TALK.filter(fitsCulture);
