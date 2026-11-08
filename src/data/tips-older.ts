import type { Tip } from './types';

const OLDER = { minMonths: 96, maxMonths: 144 };

/** Daily tips written for 8 to 12 year olds, shown alongside the general tips in tips.ts that run up to 144 months. */
export const OLDER_TIPS: Tip[] = [
  // Independence
  { ...OLDER, id: 'older-first-errand', text: 'Walking to a shop alone? Rehearse the route together, with your child in front. At 8 or 9, pick a way with no road to cross, or cross with them and wait.' },
  { ...OLDER, id: 'older-road-sense', text: 'Most children can’t judge the speed and distance of cars until about 10, says Safe Kids, though children differ. Until then, cross together and talk through what you see.' },
  { ...OLDER, id: 'older-what-ifs', text: 'Before your child goes out alone, talk through a few what-ifs: the shop is shut, a friend isn’t there, someone offers a lift. Knowing the plan makes it feel less scary.' },
  { ...OLDER, id: 'older-one-new-thing', text: 'Each month, let your child choose one new thing to do alone: make a packed lunch, ring a relative, use the washing machine. You agree the limits. They choose the step.' },
  { ...OLDER, id: 'older-own-morning', text: 'Step back from the morning routine. Let them set their own alarm and pack their own bag. A forgotten jumper now and then teaches what reminders can’t.' },
  { ...OLDER, id: 'older-real-jobs', text: 'Give real jobs, not pretend ones: cook a meal a week, plan the route, pay at the till. Being needed feels very different from being helped.' },
  { ...OLDER, id: 'older-no-magic-age', text: 'There’s no magic age for going out alone. Watch how your child handles small steps, and take the next one when you both feel ready. You know them best.' },
  { ...OLDER, id: 'older-step-back', text: 'Try waiting a little further back: at the end of the aisle, outside the shop, at the gate. Each small step back tells your child you trust them.' },
  { ...OLDER, id: 'older-home-alone', text: 'Thinking of leaving your child home for a short time? Rules vary by country. Start with a few minutes and a clear plan. The NSPCC says under-12s are rarely ready for long periods.' },

  // Friendship
  { ...OLDER, id: 'older-friend-wobbles', text: 'Friendships wobble a lot at this age. Try listening first, then ask “What would you like to happen next?” before jumping in with a fix.' },
  { ...OLDER, id: 'older-kind-acts', text: 'In one classroom study, 9 to 11 year olds who did three kind acts a week for four weeks became more accepted by classmates. Small kindnesses can help friendships grow.' },
  { ...OLDER, id: 'older-easy-home', text: 'Make your home an easy place for friends to come: a snack, a pack of cards, no big fuss. You get to know who your child spends time with.' },
  { ...OLDER, id: 'older-few-friends', text: 'Your child doesn’t need lots of friends. One or two people they can be themselves with is plenty, and many children move between groups as they grow.' },
  { ...OLDER, id: 'older-left-out', text: 'Being left out really hurts. Before offering solutions, try “That sounds lonely.” Then ask whether they’d like ideas or a listening ear.' },
  { ...OLDER, id: 'older-tricky-words', text: 'Help them practise tricky words: “I didn’t like it when you said that. Can we sort it out?” Trying it at home, even in a silly voice, can make it easier at school.' },
  { ...OLDER, id: 'older-picked-on', text: 'If your child mentions being picked on, stay calm, believe them and ask what they’d like to happen. Then speak to school together, with notes of what happened and when.' },

  // Puberty-era relationship
  { ...OLDER, id: 'older-puberty-range', text: 'Puberty often starts between 8 and 13 in girls and 9 and 14 in boys. Ask your doctor about signs before about 8 (or 9 in boys), or none by about 13 to 15.' },
  { ...OLDER, id: 'older-talk-early', text: 'Talk about body changes before they happen, in small bits and often. A few sentences in the car beat one big talk, and your child knows they can come back with more.' },
  { ...OLDER, id: 'older-ask-listen', text: 'Ask, then listen more than you talk. If a question catches you out, say “Good question. Let me think about it,” and come back to it. Not knowing is fine.' },
  { ...OLDER, id: 'older-code-word', text: 'Agree a code word your child can use to get help in an uncomfortable situation, then collect them with no fuss. It tells them you are on their side.' },
  { ...OLDER, id: 'older-trusted-adult', text: 'Name another trusted adult your child could go to: a relative, a coach, a family friend. It doesn’t mean they love you less. It means there’s always someone to ask.' },
  { ...OLDER, id: 'older-fewer-hugs', text: 'Some children pull back from hugs as they grow, and that’s usually about them, not you. Ask what they like now: a fist bump, a squeeze of the shoulder, a goodnight from the door.' },
  { ...OLDER, id: 'older-knock', text: 'Knock before going in. Growing children often want more privacy, and getting it from you can make it easier for them to keep coming to you.' },
  { ...OLDER, id: 'older-moods', text: 'Moods can swing more around puberty. Try not to take a slammed door personally. Wait until things are calm, then check in about what was going on.' },
  { ...OLDER, id: 'older-clumsy', text: 'Hands and feet often grow first, which can make a child clumsy for a while. It’s usually normal. A shared laugh helps more than comments on their size or shape.' },
  { ...OLDER, id: 'older-body-talk', text: 'Try not to comment on your child’s body or weight, or to criticise your own. Talk about what bodies can do and what makes them feel strong.' },
  { ...OLDER, id: 'older-period-kit', text: 'Some children have a first period while still at primary school. Talk early, pack a small kit for the school bag, and make sure every grown-up at home can talk about it calmly.' },
  { ...OLDER, id: 'older-you-matter', text: 'In a UK survey, children aged 10 to 15 were happier with their family than with any other part of life. Even on days when it doesn’t feel that way, you matter a lot.' },
  { ...OLDER, id: 'older-repair', text: 'Lost your temper? Say sorry plainly, and say what you’ll try next time. Hearing a grown-up own a mistake shows them how it’s done.' },

  // Side-by-side talk
  { ...OLDER, id: 'older-car-talk', text: 'Car rides are good for talking: you’re both facing forward, and there’s an end in sight. Start with something light, and leave some silence.' },
  { ...OLDER, id: 'older-small-question', text: 'Swap “How was school?” for something small: “Who made you laugh today?” Then ask one follow-up before you share your own view.' },
  { ...OLDER, id: 'older-ideas-or-listen', text: 'When they tell you something, try not to fix it or teach a lesson straight away. Ask “Do you want ideas, or do you want me to listen?” It keeps the door open.' },
  { ...OLDER, id: 'older-your-mistakes', text: 'Tell them about your own mistakes at their age. Stories like that can make it easier for them to tell you about theirs.' },
  { ...OLDER, id: 'older-no-agenda', text: 'Invite them for a walk, a bike ride or a drive to the shop, with nothing to discuss. Time with no agenda is often when real things come up.' },
  { ...OLDER, id: 'older-bedtime-open-up', text: 'Many older children open up at bedtime, when the light is low. A few extra minutes sitting on the bed can tell you more than a whole day of questions.' },
  { ...OLDER, id: 'older-answer-too', text: 'When you ask a question at the table, answer it yourself too. Older children enjoy hearing what grown-ups really think, and anyone can pass.' },

  // Risk and sport
  { ...OLDER, id: 'older-a-bit-scary', source: 'risky-play', text: 'Let them try things that feel a bit scary: a higher branch, a bigger hill, a new route. A review of studies linked risky outdoor play with more activity and better social skills.' },
  { ...OLDER, id: 'older-weigh-risk', text: 'Before something risky, ask “What could go wrong? What would you do then?” Weighing it up is a skill they’ll need when you’re not there.' },
  { ...OLDER, id: 'older-helmet', text: 'Helmet on for every ride, level and fastened, even short trips. Take it off before climbing, as straps can catch. Road training comes before riding on roads.' },
  { ...OLDER, id: 'older-open-water', text: 'A confident pool swimmer can still get into trouble in open water. Keep a grown-up watching at rivers, lakes and beaches, and check the local signs and flags.' },
  { ...OLDER, id: 'older-sport-fun', text: 'In one US survey, the average child had stopped playing a sport by about 11. Keeping it fun, varied and with friends may help, whatever their level.' },
  { ...OLDER, id: 'older-sport-sampling', text: 'Focusing on one sport very early is linked to more injury, stress and quitting young. Trying several, with no rush to choose, is a good way to find one that lasts.' },
  { ...OLDER, id: 'older-after-the-game', text: 'After a match, try “I love watching you play,” and leave the coaching to the coach. Ask what they enjoyed most. The ride home doesn’t have to be a debrief.' },
  { ...OLDER, id: 'older-move-your-way', source: 'nhs-active-5-18', text: 'Any movement counts towards the daily hour: walking to a friend’s, dancing in the bedroom, kicking a ball about. Let them pick what they like, with no scores if they prefer.' },
  { ...OLDER, id: 'older-nature-mood', source: 'nature-mental-health', text: 'A review of studies linked time in nature with better mental health in children and teenagers. A local park or a walk under some trees is a good place to start.' },

  // Boredom and free time
  { ...OLDER, id: 'older-bored', text: 'Older children say “I’m bored” too. Try “Sounds like you’ve got free time. What could you do with it?” Then carry on with your own thing and let them get there.' },
  { ...OLDER, id: 'older-empty-afternoon', text: 'Full timetable? Try leaving one afternoon a week empty. Time with no plan is when children find out what they actually like.' },
  { ...OLDER, id: 'older-fiddle-things', text: 'Leave interesting things lying about: a pack of cards, a ball of string, an old clock to take apart. Older children often start by fiddling.' },
  { ...OLDER, id: 'older-hobbies', text: 'A hobby doesn’t have to lead anywhere. Birds, magic tricks, trains or friendship bracelets are all worth following, and they give your child something that’s all theirs.' },

  // Reading aloud
  { ...OLDER, id: 'older-read-on', text: 'Surveys find many children enjoy reading less from about age 9. Keep reading aloud, even to good readers. Many families call it a special time, and it doesn’t have to end.' },
  { ...OLDER, id: 'older-read-harder', text: 'Read aloud a book a little harder than they’d pick alone. You carry the tricky words, and they get the whole story. Pause for a chat when they want one.' },
  { ...OLDER, id: 'older-read-anything', text: 'Comics, joke books, football annuals and manuals all count as reading. Let your child choose, and try not to say a book is too easy for them.' },
  { ...OLDER, id: 'older-read-turns', text: 'Share a chapter book: you read a page or two and they read one, or they listen and draw. If they’d rather be read to tonight, that’s fine too.' },
  { ...OLDER, id: 'older-read-their-book', text: 'Read the book they’re reading. Even a few chapters give you something to talk about that isn’t school or tidying up.' },

  // Screens
  { ...OLDER, id: 'older-first-phone', text: 'There’s no agreed age for a first phone. Ask: Do they follow family rules? Do they tell you when things go wrong? Is there a real need? Would a basic phone do?' },
  { ...OLDER, id: 'older-basic-phone', text: 'If your child needs a phone for walking to school, a basic one that calls and texts may do the job. It’s easier to add features later than to take them away.' },
  { ...OLDER, id: 'older-protect-first', text: 'Researchers disagree about how much smartphones cause problems. They do agree that sleep, moving about and relationships matter, so protect those first.' },
  { ...OLDER, id: 'older-come-to-me', text: 'Tell your child they can come to you if something online upsets them, even if it’s embarrassing. Stay as calm as you can, so they’ll come back next time.' },
  { ...OLDER, id: 'older-spot-ads', text: 'Help them spot adverts, paid posts and edited photos. Look together and ask: What are they selling? What has been changed? Who made this?' },
  { ...OLDER, id: 'older-ai-chatbots', text: 'Common Sense advises limited use of AI chatbots at 6 to 12, alongside a grown-up, and never for friendship or feelings. Keep it a normal topic and stay curious.' },
  { ...OLDER, id: 'older-photo-consent', text: 'Ask before posting your child’s photo, and teach them to ask too. It shows that their picture belongs to them, and that other people’s pictures belong to those people.' },
  { ...OLDER, id: 'older-say-why', text: 'If you have to use your phone, say why: “I’m checking the bus times.” It helps children see that you aren’t choosing it over them.' },
  { ...OLDER, id: 'older-review-rules', text: 'Revisit your screen rules at the start of each school year, with your child leading the chat and the grown-ups’ rules on the list too. What suits 9 rarely suits 12.' },
  { ...OLDER, id: 'older-charge-outside', source: 'aap-sleep-habits', text: 'Charge phones and tablets outside bedrooms overnight, the grown-ups’ too. It protects sleep and cuts down on late-night messages.' },
  { ...OLDER, id: 'older-real-places', text: 'In a UK report, young people said they lacked real places to spend time together. A lift, your kitchen table or a meet-up in the park gives them somewhere to be.' },

  // Sleep
  { ...OLDER, id: 'older-earlier-bed', source: 'cdc-sleep-hours', text: 'Hard to wake and short-tempered? Try bringing bedtime forward for a week. Children aged 6 to 12 need 9 to 12 hours of sleep a night.' },
  { ...OLDER, id: 'older-weekend-wakes', text: 'Try to keep weekend wake-up times close to school days, within an hour or so if you can. Very long lie-ins can make Monday mornings harder.' },
  { ...OLDER, id: 'older-own-wind-down', text: 'Your child can design their own wind-down: a book, a shower, quiet music, a chat. They set it up, and you agree the lights-out time together.' },
  { ...OLDER, id: 'older-bedtime-worries', text: 'Worries tend to come out at bedtime. Try a five-minute chat earlier in the evening, or a notebook by the bed to park a thought until morning.' },
];
