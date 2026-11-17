import type { Guide } from './types';

/**
 * Helping children through frightening events: war and attacks, disasters, scary news, and the weeks after (release 1.8).
 * Research: research_notes/PlayNest phase 8 research round 5/02_hard_times_and_frightening_events.md.
 *
 * Rules: strictly neutral. No country, group, side, date or place is named, nothing frames anyone as an enemy, and the
 * advice works for any frightening event. No promises of safety or outcomes. Children are never pushed to talk: single-
 * session debriefing doesn't help and may harm (Cochrane). Parent stress is framed as "you affect each other", never as
 * blame. No diagnosis words; "still getting in the way after about a month" is the point to ask for help (NIMH; most
 * natural recovery happens in the first months, Hiller 2016). Talk of wanting to die needs help the same day, as in
 * `is-my-child-ok`. The unverified Ministry of Health crisis line (190, extension 9) is not shown.
 */
const CHECKED = '2026-11-17';

const R = {
  pfa: { title: 'Psychological first aid: guide for field workers (2011)', publisher: 'World Health Organization, War Trauma Foundation and World Vision', url: 'https://www.who.int/publications/i/item/9789241548205' },
  stc: { title: 'Psychological first aid training manual for child practitioners (2013)', publisher: 'Save the Children', url: 'https://resourcecentre.savethechildren.net/document/save-children-psychological-first-aid-training-manual-child-practitioners/' },
  unicefWar: { title: 'How to talk to your children about conflict and war', publisher: 'UNICEF', url: 'https://www.unicef.org/parenting/how-talk-your-children-about-conflict-and-war' },
  aapNews: { title: 'How to talk with kids about tragedies and other traumatic news events (2025)', publisher: 'American Academy of Pediatrics (HealthyChildren.org)', url: 'https://healthychildren.org/English/family-life/Media/Pages/Talking-To-Children-About-Tragedies-and-Other-News-Events.aspx' },
  aacapWar: { title: 'Terrorism and war: how to talk to children (Facts for Families 87, 2023)', publisher: 'American Academy of Child and Adolescent Psychiatry', url: 'https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Talking-To-Children-About-Terrorism-And-War-087.aspx' },
  aacapDisaster: { title: 'Disaster: helping children cope (Facts for Families 36, 2023)', publisher: 'American Academy of Child and Adolescent Psychiatry', url: 'https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Helping-Children-After-A-Disaster-036.aspx' },
  nctsn: { title: 'Age-related reactions to a traumatic event (2010)', publisher: 'US National Child Traumatic Stress Network', url: 'https://www.nctsn.org/resources/age-related-reactions-traumatic-event' },
  nimh: { title: 'Helping children and adolescents cope with traumatic events', publisher: 'US National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/publications/helping-children-and-adolescents-cope-with-disasters-and-other-traumatic-events' },
  holman: { title: 'Media’s role in broadcasting acute stress following the Boston Marathon bombings (Holman et al. 2014)', publisher: 'PNAS', url: 'https://doi.org/10.1073/pnas.1316265110' },
  otto: { title: 'Posttraumatic stress symptoms following media exposure to tragic events in children (Otto et al. 2007)', publisher: 'Journal of Anxiety Disorders', url: 'https://europepmc.org/article/MED/17276653' },
  debriefing: { title: 'Psychological debriefing for preventing post-traumatic stress disorder (Rose et al. 2002)', publisher: 'Cochrane Database of Systematic Reviews', url: 'https://doi.org/10.1002/14651858.CD000560' },
  hiller: { title: 'The course of post-traumatic stress symptoms in children: a meta-analysis (Hiller et al. 2016)', publisher: 'Journal of Child Psychology and Psychiatry', url: 'https://doi.org/10.1111/jcpp.12566' },
  alisic: { title: 'Rates of post-traumatic stress disorder in trauma-exposed children: a meta-analysis (Alisic et al. 2014)', publisher: 'British Journal of Psychiatry', url: 'https://doi.org/10.1192/bjp.bp.113.131227' },
  morris: { title: 'Parent and child post-traumatic stress: a meta-analysis (Morris et al. 2012)', publisher: 'Journal of Pediatric Psychology', url: 'https://doi.org/10.1093/jpepsy/jss091' },
  unicefIran: { title: 'How to support your child in times of crisis and conflict (2025, in Persian)', publisher: 'UNICEF Iran', url: 'https://www.unicef.org/iran/' },
};

export const HARD_TIMES_GUIDES: Guide[] = [
  {
    slug: 'when-scary-things-happen',
    title: 'When scary things happen',
    emoji: '🧸',
    summary: 'Talking with children about war, disasters and frightening news: four steps, words by age, loud noises, and news.',
    minutes: 4,
    minMonths: 24,
    maxMonths: 144,
    topic: 'feelings',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.pfa, R.unicefWar, R.aapNews, R.aacapWar, R.stc, R.holman, R.otto, R.unicefIran],
    blocks: [
      { type: 'p', text: 'Children notice far more than we think, and when they don’t know, they fill the gaps with imagination, which is often scarier than the truth. You don’t need perfect words. Being calm, close and honest is what helps most.' },
      { type: 'callout', tone: 'tip', text: 'Before you talk, steady yourself with a few slow breaths. It’s fine to say “I was scared too, and now I’m calmer.” Your child needs you calm enough, not perfect.' },
      {
        type: 'steps',
        items: [
          { title: 'Ask what they’ve heard', text: '“What have you heard? What do you think happened?” Pick a calm time, not bedtime. Gently correct anything that isn’t true.' },
          { title: 'Give a short, true answer', text: 'Simple facts for their age, without frightening details. It’s fine to say “I don’t know yet. I’ll tell you when I do.”' },
          { title: 'Say who is helping', text: 'Doctors, rescuers, teachers and neighbours are helping, and here is our family’s plan. Don’t promise what you can’t keep, such as “nothing bad will ever happen”.' },
          { title: 'Close warmly', text: 'Notice how they seem before you stop. “You can ask me anything, any time.” Expect the same questions again: repeating is how children find reassurance.' },
        ],
      },
      {
        type: 'table',
        head: ['Age', 'What you might say'],
        rows: [
          ['2 to 3 years', '“That was a very big, loud noise. It scared us. It’s over now. I’m here with you.”'],
          ['4 to 5 years', '“Something scary happened, and lots of grown-ups are working to keep people safe. If we hear a loud noise, we go to our safe place together and I hold you tight. It wasn’t anything you did.”'],
          ['6 to 9 years', 'Short facts, what’s happening now, and what your family will do. Correct rumours. Tell them it isn’t their fault, even if they don’t ask.'],
          ['10 to 12 years', '“What have you seen online? Some of it is true and some isn’t. Some videos are made to frighten people. If you see something upsetting, show me and we’ll talk.”'],
        ],
      },
      { type: 'h', text: 'Loud noises, alarms and shaking' },
      {
        type: 'list',
        items: [
          'Talk about loud sounds ahead of time, at their level, and agree where you’ll go together.',
          'During the noise, stay together, hold them, and talk about happy memories or read a book, rather than sitting in silence listening.',
          'Practise slow belly breaths together. For small children, make it a game: smell the flower, blow out the candle.',
        ],
      },
      { type: 'h', text: 'News and phones' },
      {
        type: 'list',
        items: [
          'Turn the news off when young children are around, including the TV in the background and videos on your phone.',
          'With older children, read or watch together from a trusted source, and stop if images are graphic.',
          'Check the news at set times, not all day. Hours of coverage are linked with more stress, for adults and children alike.',
          'Think before forwarding frightening videos in family groups.',
        ],
      },
      { type: 'h', text: 'Kindness, not blame' },
      { type: 'p', text: 'Avoid words like “bad people” about any group. Point to the helpers instead. A small helping job, like packing a safe bag, making a card or helping a younger brother or sister, eases the feeling of being helpless.' },
      { type: 'callout', tone: 'tip', text: 'If someone your child knows was hurt or has died, don’t hide or delay the truth. See When a parent is ill or someone has died.' },
    ],
  },
  {
    slug: 'weeks-after-hard-times',
    title: 'Helping children in the weeks after',
    emoji: '🌱',
    summary: 'After a frightening event: what’s normal by age, what helps, looking after yourself, and when to ask for help.',
    minutes: 4,
    minMonths: 0,
    maxMonths: 144,
    topic: 'feelings',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.pfa, R.stc, R.nctsn, R.nimh, R.aacapDisaster, R.debriefing, R.hiller, R.alisic, R.morris],
    relatedTags: ['calm-down', 'pretend'],
    blocks: [
      { type: 'p', text: 'After a frightening event, most children have some strong reactions, and for most they ease over the following weeks. Children cope best with a calm, familiar adult close by.' },
      {
        type: 'table',
        head: ['Age', 'Common in the first weeks'],
        rows: [
          ['Babies', 'More crying, fussier feeds, waking more, startling easily. Babies sense the stress around them.'],
          ['1 to 5 years', 'Clinging, losing skills such as dry nights or words, tantrums, new fears, nightmares, playing out the event, the same questions again and again.'],
          ['6 to 9 years', 'Worry about family, tummy aches and headaches, poor concentration, not wanting to go to school, feeling it was somehow their fault.'],
          ['10 to 12 years', 'Wanting details, anger at unfairness, withdrawing, hiding feelings to protect you.'],
        ],
      },
      { type: 'h', text: 'What helps' },
      {
        type: 'list',
        items: [
          'Closeness: extra cuddles, sleeping near you or with a light on for a while. Say where you’ll be, and be on time for pick-ups.',
          'Routines: meals, bedtime, school and family traditions, as normal as you can.',
          'Patience with going backwards. Don’t be cross about wet beds or baby talk: it passes.',
          'Play, drawing and moving. Playing out the event is normal. Join in gently and help the story end with rescue or rebuilding.',
          'Choices and small jobs, which give back a sense of control.',
          'Time with relatives and friends, and talk of good plans ahead.',
        ],
      },
      { type: 'h', text: 'Let them lead' },
      { type: 'p', text: 'Some children talk, some draw, some play it out, and some need time. All are OK. Don’t push a child to tell you everything that happened: one big “get it all out” talk doesn’t help, and in studies of adults it sometimes made things worse. Just let them know they can come to you any time.' },
      { type: 'h', text: 'If you had to leave home' },
      { type: 'p', text: 'Tell them simply what is happening. Let them bring a comfort toy, keep brothers and sisters together, keep bedtime rituals in a new place, keep in touch with family by phone, and get back to school or learning as soon as you can.' },
      { type: 'h', text: 'Looking after yourself' },
      { type: 'p', text: 'Children and parents affect each other, so looking after yourself helps you both. Sleep where you can, check the news at set times, talk to someone you trust, and lean on what steadies you, whether that is family, friends or faith. If you feel overwhelmed, ask for support for yourself too: see Help.' },
      {
        type: 'table',
        head: ['Ask a doctor or counsellor', 'Get help the same day'],
        rows: [
          ['Reactions still getting in the way of sleep, school, play or family life after about a month, or getting worse', 'Any talk of wanting to die or to hurt themselves'],
          ['Frequent nightmares or reliving the event, or play that stays grim and doesn’t calm them', 'Not eating or drinking'],
          ['Strong avoidance, such as refusing school or going outside, always on edge, low mood most days, or lost skills that don’t come back over several weeks', 'You feel you can’t keep yourself or your child safe'],
        ],
      },
      { type: 'callout', tone: 'science', text: 'Most children recover, and most of that recovery happens in the first few months. A child still struggling after that is less likely to get better on their own, so ask early rather than wait. Short talking-and-play treatments for children work well, and a doctor, health centre or counselling line can help you find them. Reactions can come back around anniversaries or reminders: the same steps help again.' },
    ],
  },
];
