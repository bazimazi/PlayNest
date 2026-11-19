import type { Guide } from './types';

/**
 * Parenting courses: who they're for and what good ones teach (release 2.0). Research:
 * research_notes/PlayNest phase 10 research round 7/01_world_research_2024_2026.md (§3.1, §3.2, §7).
 *
 * Rules from the note: courses reliably change what parents do (less harsh discipline, more play, less stress); effects on
 * children's development are smaller and less certain, and several large trials found none, so never "raises IQ" or
 * "prevents obesity"; most results are parents' own reports; gains shrink over time; "WHO strongly recommends" isn't used
 * because the strength labels weren't read. The Iranian Ministry of Health parenting-skills course (ages 2 to 12, at the
 * comprehensive health centre) is search-only and stays out of the Persian until confirmed.
 */
const CHECKED = '2026-11-19';

const R = {
  whoGuideline: { title: 'WHO guidelines on parenting interventions to prevent maltreatment and enhance parent–child relationships with children aged 0–17 years', publisher: 'World Health Organization (2023)', url: 'https://www.who.int/publications/i/item/9789240065505' },
  whoNews: { title: 'New WHO guidelines on parenting aim to help prevent child maltreatment and enhance parent–child relationships', publisher: 'World Health Organization (2023)', url: 'https://www.who.int/news/item/23-02-2023-new-who-guidelines-on-parenting-aim-to-help-prevent-child-maltreatment-and-enhance--parent-child-relationships' },
  whoSlides: { title: 'WHO guideline on parenting interventions (launch webinar, Butchart)', publisher: 'World Health Organization, via ISSUP (2023)', url: 'https://www.issup.net/files/2023-05/Alex%20Butchart%2014%20April%202023%20parenting%20intervention%20webinar%5B15%5D.pdf' },
  integrate: { title: 'Applying the WHO-INTEGRATE framework in the development of WHO guidelines on parenting interventions (2024)', publisher: 'Health Research Policy and Systems', url: 'https://doi.org/10.1186/s12961-024-01165-z' },
  liu: { title: 'Interventions on parenting outcomes in families with children under 3 (Liu et al. 2026)', publisher: 'Trauma, Violence, & Abuse', url: 'https://doi.org/10.1177/15248380261451785' },
  backhaus: { title: 'Effects over time of parenting interventions to reduce physical and emotional violence against children (Backhaus et al. 2023)', publisher: 'eClinicalMedicine', url: 'https://doi.org/10.1016/j.eclinm.2023.102003' },
  sugira: { title: 'Four-year follow-up of Sugira Muryango, a family home-visiting programme (Jensen et al. 2025)', publisher: 'BMJ Global Health', url: 'https://doi.org/10.1136/bmjgh-2024-017866' },
  rwanda: { title: 'Scaling up home-visiting in Rwanda (Black et al. 2025)', publisher: 'Journal of Child Psychology and Psychiatry', url: 'https://doi.org/10.1111/jcpp.14160' },
  kenya: { title: 'Moments that Matter, Kenya (Jeong et al. 2026)', publisher: 'BMJ Global Health', url: 'https://doi.org/10.1136/bmjgh-2025-023335' },
  bangladesh: { title: 'Parenting and cash transfer in urban Bangladesh: 5-year follow-up (Hossain et al. 2026)', publisher: 'Journal of Global Health', url: 'https://doi.org/10.7189/jogh.16.04321' },
};

export const COURSES_GUIDES: Guide[] = [
  {
    slug: 'parenting-courses',
    title: 'Parenting courses: who they’re for and what good ones teach',
    emoji: '🎓',
    summary: 'Tested courses help ordinary families, not only those having a hard time. What a good one includes, and what it can and can’t do.',
    minutes: 4,
    minMonths: 0,
    maxMonths: 144,
    topic: 'family',
    checkedOn: CHECKED,
    sources: [],
    refs: [R.whoGuideline, R.whoNews, R.whoSlides, R.integrate, R.liu, R.backhaus, R.sugira, R.rwanda, R.kenya, R.bangladesh],
    blocks: [
      { type: 'p', text: 'Parenting courses have been tested in about 450 trials, more than 150 of them in lower- and middle-income countries. WHO says courses that teach skills, in groups or one-to-one, should be easy for all parents to get, through health, education and social services.' },
      { type: 'p', text: 'They aren’t only for families with problems. In trials with ordinary families of babies and toddlers, parents felt less stressed and more confident afterwards.' },
      {
        type: 'table',
        head: ['What a good course teaches', 'What it looks like at home'],
        rows: [
          ['Play your child leads, and understanding their feelings', 'A few minutes a day following their play'],
          ['Noticing and praising what goes well', '“You put your shoes on by yourself!”'],
          ['Clear rules and calm, direct instructions', 'One short instruction at a time, saying what to do'],
          ['Calm consequences instead of hitting or shouting', 'Ignoring small attention-seeking, a short related consequence, a brief time-out'],
          ['Looking after your own calm', 'Breathing before reacting, solving problems together, backing each other up as parents'],
        ],
      },
      { type: 'h', text: 'Choosing one' },
      {
        type: 'steps',
        items: [
          { title: 'Look for practice, not lectures', text: 'Good courses have you try each skill with your own child and talk about how it went.' },
          { title: 'Check it rules out hitting and shaming', text: 'Tested courses teach discipline without violence.' },
          { title: 'Bring another carer if you can', text: 'Programmes that welcomed fathers saw them play and help more at home.' },
          { title: 'Keep practising after it ends', text: 'In trials, calmer discipline lasted up to two years, but the gains grew smaller over time.' },
        ],
      },
      { type: 'callout', tone: 'science', text: 'Courses reliably change what parents do: less harsh discipline, more play and less stress. Effects on children’s development are smaller and less certain, and several large trials found none. Most results are what parents report themselves. We don’t yet know which parts matter most, or how well apps work compared with a course.' },
      { type: 'callout', tone: 'tip', text: 'Learning on your own counts too. PlayNest’s parenting goals follow the same order as most courses: connection first, then one small practice a week.' },
      { type: 'callout', tone: 'safety', text: 'If behaviour is very hard most days, if your child hurts others or themselves, or if you feel close to losing control, ask your doctor or health centre about a course with a trained coach. If you’re afraid you might hurt your child, make them safe, step away and call someone now: Help, top right, has people to call.' },
    ],
  },
];
