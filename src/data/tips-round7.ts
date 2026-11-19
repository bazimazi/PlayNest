import type { Tip } from './types';

/**
 * Daily tips from research round 7 (release 2.0). Research: research_notes/PlayNest phase 10 research round 7/. No doses, no
 * milk volumes, no laws, no unverified numbers; every red flag points to a professional or the emergency number. Crisis lines
 * about thoughts of suicide stay in the guide and on Help, never in the rotating daily tip (safe-messaging advice).
 */

/** Signs not to wait on (note 03). */
export const SIGNS_TIPS: Tip[] = [
  { id: 'sign-4ts', minMonths: 24, maxMonths: 144, text: 'Weeing more, very thirsty, tired or getting thinner can be signs of type 1 diabetes. Any of these: see a doctor the same day and ask for a finger-prick test.' },
  { id: 'sign-dka', minMonths: 12, maxMonths: 144, text: 'Very thirsty and weeing a lot lately, and now vomiting, tummy pain or breathing deeply? That can be a diabetes emergency. Call your emergency number.' },
  { id: 'sign-green-vomit', minMonths: 0, maxMonths: 24, text: 'One green vomit in a baby, even if they seem well, needs a hospital check straight away. Don’t wait for a second one.' },
  { id: 'sign-no-rash', minMonths: 0, maxMonths: 144, text: 'Don’t wait for a rash. With sepsis and meningitis, cold hands and feet, leg pains and odd skin colour often come first.' },
  { id: 'sign-down-there', minMonths: 36, maxMonths: 144, text: 'Teach your child to tell you straight away if anything hurts “down there”. It’s never embarrassing, and some problems there can’t wait.' },
  { id: 'sign-testicle', minMonths: 24, maxMonths: 144, text: 'Tummy pain and vomiting in a boy? Gently ask whether a testicle hurts too. Testicle pain with tummy pain needs hospital now.' },
  { id: 'sign-red-jelly', minMonths: 3, maxMonths: 36, text: 'Bouts of screaming every few minutes, pale and floppy in between, or poo like red jelly: get urgent help for your baby.' },
  { id: 'sign-fever-5-days', minMonths: 0, maxMonths: 144, text: 'A fever that lasts 5 days or more needs a doctor’s check, even if your child seems to be coping.' },
  { id: 'sign-urine', minMonths: 0, maxMonths: 36, text: 'A baby or toddler with a fever and no clear cause may have a urine infection. Ask the doctor whether their urine should be tested.' },
  { id: 'sign-lower-right', minMonths: 24, maxMonths: 144, text: 'Tummy pain that moves to the lower right side, or keeps getting worse, needs a doctor today. Young children often don’t show the usual pattern.' },
  { id: 'sign-morning-headache', minMonths: 36, maxMonths: 144, text: 'Headaches that wake your child, or come with vomiting on waking, need a doctor’s check before anyone puts them down to worry.' },
  { id: 'sign-go-back', minMonths: 0, maxMonths: 144, text: 'Told it’s nothing, but your child is getting worse or you’re more worried than before? Go back. That’s exactly what guidelines tell parents to do.' },
  { id: 'sign-ask-sepsis', minMonths: 0, maxMonths: 144, text: 'You don’t have to name the illness. Say what’s different (“she’s never been this sleepy”) and ask: “Could this be sepsis?”' },
];

/** Parents' minds after a birth (note 04). */
export const MIND_TIPS: Tip[] = [
  { id: 'mind-blues', minMonths: 0, maxMonths: 1, text: 'Tearful and up and down in the first days? The baby blues are very common and usually pass within two weeks. If they last or get worse, tell your health worker.' },
  { id: 'mind-scary-thoughts', minMonths: 0, maxMonths: 6, text: 'Sudden scary thoughts of your baby being hurt are very common in the early weeks and usually fade. If they frighten you or keep coming back, tell a doctor.' },
  { id: 'mind-not-taken', minMonths: 0, maxMonths: 12, text: 'Afraid that asking for help could mean losing your baby? That is very rare. Health workers want to help you feel better and care for your baby.' },
  { id: 'mind-psychosis', minMonths: 0, maxMonths: 3, text: 'Strange beliefs, hearing things, seeming unusually high, or no need for sleep for days soon after a birth is an emergency. Call your emergency number: the parent may not notice.' },
  { id: 'mind-partners', minMonths: 0, maxMonths: 12, text: 'About 1 in 10 dads get depressed around a birth. Ask each other “How are you, really?” and listen to the answer.' },
  { id: 'mind-talk-therapy', minMonths: 0, maxMonths: 24, text: 'Talking therapies help many parents with low mood after a birth. Ask your doctor or health centre. You don’t need to be at breaking point.' },
  { id: 'mind-medicine-feeding', minMonths: 0, maxMonths: 24, text: 'If a doctor suggests medicine for low mood and you breastfeed, say so. Some medicines can be used while breastfeeding.' },
  { id: 'mind-sleep', minMonths: 0, maxMonths: 12, text: 'Take turns at night so each adult gets one longer stretch of sleep. Short nights after a birth are linked with low mood.' },
  { id: 'mind-walk', minMonths: 0, maxMonths: 24, text: 'A short walk with the pram counts. Studies suggest activity eases low mood after a birth.' },
  { id: 'mind-birth-replay', minMonths: 0, maxMonths: 24, text: 'A birth that keeps replaying, with fear or nightmares, deserves care. Partners can feel it too. Tell your doctor: support is available.' },
  { id: 'mind-welcome-help', minMonths: 0, maxMonths: 2, text: 'In the first weeks, say which help you want: a meal, a nap, some company. Support you actually want is the kind that helps.' },
];

/** Online safety, home alone and out alone (note 06). */
export const ONLINE_ALONE_TIPS: Tip[] = [
  { id: 'online-no-secrets', minMonths: 60, maxMonths: 144, text: 'Teach this rule early: no one online should ask you to keep a chat secret from me. A secret like that is one to bring to a grown-up.' },
  { id: 'online-real-life', minMonths: 72, maxMonths: 144, text: 'Online friends your child hasn’t met in real life are still strangers, however kind they seem. Agree they chat only with people they also know offline.' },
  { id: 'online-move-app', minMonths: 84, maxMonths: 144, text: 'If someone online asks your child to move to a private chat or another app, that’s a moment to stop and tell you.' },
  { id: 'online-threat', minMonths: 96, maxMonths: 144, text: 'If someone threatens to share a picture of your child: don’t pay, stop replying, block them and keep the messages. Report it, and tell your child it isn’t their fault.' },
  { id: 'online-voice-chat', minMonths: 60, maxMonths: 144, text: 'Many online games have voice chat as well as text. Check who your child can talk to, and set it to friends you know, or off.' },
  { id: 'online-weekly-chat', minMonths: 60, maxMonths: 144, text: 'Settings help most alongside talk. Once a week, ask what they’ve seen or played online, and listen more than you lecture.' },
  { id: 'online-open-monitoring', minMonths: 108, maxMonths: 144, text: 'Using an app to check an older child’s phone? Tell them. Paediatricians advise being open about it and pairing it with regular, calm talk.' },
  { id: 'online-birthday-photo', minMonths: 0, maxMonths: 144, text: 'Before posting a birthday photo, look for school badges, street signs and location tags. Together they can show your child’s birthday and where you live.' },
  { id: 'online-family-photos', minMonths: 0, maxMonths: 144, text: 'Send family photos to relatives privately rather than posting them publicly. It leaves your child more say over their own story as they grow.' },
  { id: 'alone-wants-to', minMonths: 96, maxMonths: 144, text: 'Before a first short spell home alone, ask how your child feels. If they’re unhappy to be left, wait. Readiness includes wanting to.' },
  { id: 'alone-what-if', minMonths: 84, maxMonths: 144, text: 'Play “What if…?” over dinner: a power cut, a knock at the door, you running late. Their answers show what they’re ready for.' },
  { id: 'alone-short-first', minMonths: 96, maxMonths: 144, text: 'First times home alone: keep them short, in daylight, with no cooking. Ask your child to message you when they get in.' },
  { id: 'alone-door', minMonths: 96, maxMonths: 144, text: 'Agree door rules before you go out: who, if anyone, may come in, and never telling a caller or visitor they’re on their own.' },
  { id: 'alone-checking', minMonths: 60, maxMonths: 144, text: 'Swap “never talk to strangers” for “never go anywhere with anyone without checking with me”. A stranger may be the one who helps.' },
  { id: 'alone-babysitter', minMonths: 0, maxMonths: 144, text: 'Leaving an older child to babysit? A UK children’s charity suggests babysitters are at least 16. Younger ones may not cope if a little one falls ill.' },
];

/** Milk when you're apart, and slings and carriers (note 07). */
export const APART_CARRY_TIPS: Tip[] = [
  { id: 'away-microwave', minMonths: 0, maxMonths: 24, text: 'Never thaw or warm breast milk or formula in a microwave. It heats unevenly and can burn. Stand the bottle in warm water instead.' },
  { id: 'away-no-refreeze', minMonths: 0, maxMonths: 24, text: 'Thawed breast milk can’t go back in the freezer. Freeze it in small portions, so you only thaw what your baby will drink.' },
  { id: 'away-fridge-back', minMonths: 0, maxMonths: 24, text: 'Keep expressed milk at the back of the fridge, not in the door, where it stays colder. Label it with the date.' },
  { id: 'away-4-hours', minMonths: 0, maxMonths: 24, text: 'Freshly expressed milk keeps up to 4 hours in a cool room. On a hot day, get it into the fridge or a cool bag sooner.' },
  { id: 'away-smell', minMonths: 0, maxMonths: 24, text: 'Stored breast milk can smell a bit soapy. That’s normal. Throw it away if it looks stringy or smells foul.' },
  { id: 'away-hand-express', minMonths: 0, maxMonths: 12, text: 'Learn to express by hand: thumb and fingers in a C, a little back from the nipple, press and release. Handy for full, sore breasts.' },
  { id: 'away-air-dry', minMonths: 0, maxMonths: 24, text: 'After pumping, rinse the parts, wash them soon and let them air-dry. A tea towel can put germs back on.' },
  { id: 'away-someone-else', minMonths: 1, maxMonths: 12, text: 'A breastfed baby often takes a bottle more happily from someone else. Try when they’re calm and not too hungry.' },
  { id: 'away-show-carers', minMonths: 0, maxMonths: 12, text: 'Show carers: baby close and upright, bottle tipped so milk only flows when they suck, pauses allowed, and stop when they turn away.' },
  { id: 'away-no-prop', minMonths: 0, maxMonths: 12, text: 'Never prop a bottle or leave a baby alone with one. They can choke.' },
  { id: 'away-formula-flask', minMonths: 0, maxMonths: 12, text: 'Formula out and about: carry a clean flask of just-boiled water and the powder separately, and make the feed when it’s needed. Or use ready-to-feed.' },
  { id: 'away-one-feed', minMonths: 1, maxMonths: 12, text: 'Adding formula? Swap one breastfeed at a time, and give your body about a week to adjust before the next swap.' },
  { id: 'sling-checks', minMonths: 0, maxMonths: 24, text: 'Sling check, every time: snug, face in view, close enough to kiss, chin off the chest, back supported.' },
  { id: 'sling-feed-out', minMonths: 0, maxMonths: 6, text: 'Take your baby out of the sling to feed, especially in the first 4 months. Feeding hands-free while you move about isn’t safe.' },
  { id: 'sling-hot-drinks', minMonths: 0, maxMonths: 24, text: 'No cooking or hot drinks with your baby in a sling. Put the cup down, out of reach, first.' },
];

/** Night frights, sleepwalking and snoring (note 05). */
export const NIGHT_TIPS: Tip[] = [
  { id: 'nt-terror-wait', minMonths: 12, maxMonths: 96, text: 'Screaming but not seeing you? That may be a night terror. Stay close, keep them safe and wait. Waking them can make it worse.' },
  { id: 'nt-terror-diary', minMonths: 24, maxMonths: 144, text: 'Frequent night terrors? Jot down bedtime, the time of each one and what the day was like. Tiredness, illness or a full bladder can set them off.' },
  { id: 'nt-sleepwalk-safe', minMonths: 36, maxMonths: 144, text: 'If your child sleepwalks, close windows, use a stair gate, lock away knives and keep them off the top bunk.' },
  { id: 'nt-sleepwalk-guide', minMonths: 36, maxMonths: 144, text: 'Found your child sleepwalking? Guide them back to bed quietly. Waking them suddenly can leave them confused and upset.' },
  { id: 'nt-family-trait', minMonths: 12, maxMonths: 144, text: 'Night terrors and sleepwalking often run in families, and most children grow out of them.' },
  { id: 'nt-teddy-job', minMonths: 36, maxMonths: 84, text: 'Scared at night? Give them a job: keeping teddy company. In a trial, looking after a soft toy eased young children’s night fears.' },
  { id: 'nt-brave-steps', minMonths: 36, maxMonths: 120, text: 'Beat fear of the dark in small steps: torch games by day, then lights a little lower each week. Praise every brave try.' },
  { id: 'nt-warm-light', minMonths: 24, maxMonths: 144, text: 'A night-light is fine if it helps. Choose a dim, warm-coloured one placed away from the bed, not a bright white one.' },
  { id: 'nt-snore-tell', minMonths: 12, maxMonths: 144, text: 'Does your child snore most nights, gasp, or breathe through their mouth when asleep? Tell your doctor, even if they seem well.' },
  { id: 'nt-snore-day', minMonths: 36, maxMonths: 144, text: 'Trouble concentrating, grumpy mornings and loud snoring can go together. If you notice them, mention the snoring to your doctor.' },
  { id: 'nt-grind', minMonths: 24, maxMonths: 144, text: 'Teeth grinding in sleep is common and often needs nothing. See a dentist if there’s tooth wear, jaw pain or headaches.' },
  { id: 'nt-headbang', minMonths: 12, maxMonths: 48, text: 'Rocking or head-banging at bedtime is a common way to self-soothe and usually eases by about 4. Check the cot or bed is solid.' },
  { id: 'nt-melatonin-ask', minMonths: 12, maxMonths: 144, text: 'Thinking about melatonin? Talk to your doctor first. It isn’t a first step, and supplement labels can be wrong.' },
  { id: 'nt-gummies-lock', minMonths: 12, maxMonths: 72, text: 'Keep sleep gummies and all supplements locked away like medicine. In US emergency visits after young children swallowed melatonin, gummies were the most common form.' },
  { id: 'nt-scary-film', minMonths: 36, maxMonths: 144, text: 'A scary film or story can bring on bad dreams. Pick something calm for the last hour before bed.' },
];

/** School worries, moves, pets and left-handed children (note 08). */
export const SCHOOL_MOVES_TIPS: Tip[] = [
  { id: 'school-tummy-check', minMonths: 60, maxMonths: 144, text: 'Tummy aches only on school mornings, gone by the weekend? See your doctor first to check for illness, then talk to the school. Worry can cause real pain.' },
  { id: 'school-stay-home', minMonths: 60, maxMonths: 144, text: 'Staying home to escape a worry brings quick relief, but often makes the next morning harder. Tell the school early and plan small steps back together.' },
  { id: 'school-name-once', minMonths: 60, maxMonths: 144, text: 'Hard school morning? Name the feeling once: “You’re really worried about today.” Then ask: “What could help you manage it?”' },
  { id: 'school-brave-praise', minMonths: 60, maxMonths: 144, text: 'Notice brave moments out loud: “You put your uniform on even though you felt scared. That was brave.”' },
  { id: 'school-trusted-adult', minMonths: 60, maxMonths: 144, text: 'Ask the school whether there’s a trusted adult your worried child can check in with, or a quiet place to go at break.' },
  { id: 'move-explain', minMonths: 36, maxMonths: 144, text: 'Moving soon? Explain why in simple words, show photos or a map of the new place, and let your child help plan their room.' },
  { id: 'move-old-friends', minMonths: 60, maxMonths: 144, text: 'Before moving, help your child collect friends’ numbers or addresses. Staying in touch with old friends makes the move easier.' },
  { id: 'move-watch', minMonths: 36, maxMonths: 144, text: 'In the months after a move, watch for changes in sleep, appetite, mood or friendships. Some children struggle quietly. If it lasts, talk to your doctor.' },
  { id: 'pet-died-word', minMonths: 24, maxMonths: 144, text: 'When a pet dies, use the word “died”. “Put to sleep” or “ran away” can confuse young children or make them afraid of sleep.' },
  { id: 'pet-vet-words', minMonths: 36, maxMonths: 144, text: 'If the vet helped a pet die, try: “The vet gave a special medicine so they could die peacefully, without pain.”' },
  { id: 'pet-remember', minMonths: 36, maxMonths: 144, text: 'After a pet dies, let your child draw it, write it a letter or keep a painted stone. Keep telling funny stories about it.' },
  { id: 'left-seat', minMonths: 36, maxMonths: 144, text: 'Left-handed child? Seat them on the left at a desk or table, so their elbow doesn’t bump a right-handed neighbour.' },
  { id: 'left-paper', minMonths: 48, maxMonths: 144, text: 'Left-handed writer: put the paper to the left of their body and tilt it to the right. Moving the paper up beats sliding the arm down.' },
  { id: 'left-scissors', minMonths: 36, maxMonths: 144, text: 'Left-handed scissors let a left-handed child see the cutting line. Cutting curves clockwise usually feels easier for them.' },
  { id: 'left-natural', minMonths: 36, maxMonths: 144, text: 'Let your child write with the hand that feels natural. No study shows switching helps, and some adults who were pushed to switch report poorer well-being.' },
];

/** What 2024–26 research around the world adds (note 01). */
export const WORLD_TIPS: Tip[] = [
  { id: 'world-practise-one', minMonths: 12, maxMonths: 144, text: 'Pick one parenting skill this week and practise it with your child, not just read about it. Tested courses work best when parents practise.' },
  { id: 'world-smacking', minMonths: 24, maxMonths: 144, text: 'Hitting may stop a behaviour for a moment. Studies from many countries where smacking is common link it with more problems later. Calm, small consequences teach more.' },
  { id: 'world-reading-link', minMonths: 6, maxMonths: 48, text: 'In a study of nearly 37,000 families, toddlers who were read to often had higher development scores. It’s a link, not proof, and every story counts.' },
  { id: 'world-dads-mood', minMonths: 0, maxMonths: 24, text: 'Dads’ mood matters too. A father’s low mood after a birth is linked with small differences in children’s development, so dads deserve check-ins and help.' },
  { id: 'world-courses-everyone', minMonths: 0, maxMonths: 36, text: 'Parenting courses aren’t only for families having a hard time. In trials, ordinary parents of babies and toddlers felt less stressed and more confident afterwards.' },
  { id: 'world-keep-using', minMonths: 24, maxMonths: 144, text: 'Learned a calmer way to handle hard moments? Keep using it. In trials, the gains lasted up to two years but slowly grew smaller.' },
  { id: 'world-invite-partner', minMonths: 0, maxMonths: 60, text: 'Invite your partner to tonight’s story or bath. Programmes that welcomed fathers saw them play and help more at home.' },
  { id: 'world-no-toys', minMonths: 6, maxMonths: 36, text: 'No toys? Pots, cups, boxes and lids are enough. What matters most is you playing and talking together.' },
];
