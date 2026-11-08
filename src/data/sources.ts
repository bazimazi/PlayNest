import type { Source, SourceId } from './types';

export const SOURCES: Record<SourceId, Source> = {
  'aap-power-of-play': {
    id: 'aap-power-of-play',
    title: 'The Power of Play: A Pediatric Role in Enhancing Development in Young Children',
    publisher: 'American Academy of Pediatrics (Pediatrics, 2018)',
    url: 'https://www.healthychildren.org/English/family-life/power-of-play/Pages/The-Power-of-Play-How-Fun-and-Games-Help-Children-Thrive.aspx',
  },
  'harvard-serve-return': {
    id: 'harvard-serve-return',
    title: 'Serve and Return',
    publisher: 'Center on the Developing Child, Harvard University',
    url: 'https://developingchild.harvard.edu/key-concept/serve-and-return/',
  },
  'harvard-ef-guide': {
    id: 'harvard-ef-guide',
    title: 'Enhancing and Practicing Executive Function Skills with Children from Infancy to Adolescence',
    publisher: 'Center on the Developing Child, Harvard University',
    url: 'https://developingchild.harvard.edu/resources/handouts-tools/activities-guide-enhancing-and-practicing-executive-function-skills/',
  },
  'cdc-milestones': {
    id: 'cdc-milestones',
    title: 'Learn the Signs. Act Early. — Developmental Milestones',
    publisher: 'U.S. Centers for Disease Control and Prevention',
    url: 'https://www.cdc.gov/ncbddd/actearly/milestones/',
  },
  'who-under5': {
    id: 'who-under5',
    title: 'Guidelines on physical activity, sedentary behaviour and sleep for children under 5 years of age',
    publisher: 'World Health Organization (2019)',
    url: 'https://www.who.int/publications/i/item/9789241550536',
  },
  'who-unicef-ccd': {
    id: 'who-unicef-ccd',
    title: 'Care for Child Development',
    publisher: 'WHO & UNICEF',
    url: 'https://nurturing-care.org/improving-care-for-young-children/',
  },
  'lego-learning-through-play': {
    id: 'lego-learning-through-play',
    title: 'Learning through play: a review of the evidence',
    publisher: 'The LEGO Foundation (2017)',
    url: 'https://cms.learningthroughplay.com/media/vd5fiurk/what-we-mean-by-learning-through-play.pdf',
  },
  'mit-conversational-turns': {
    id: 'mit-conversational-turns',
    title: "Back-and-forth exchanges boost children's brain response to language",
    publisher: 'MIT (Romeo et al., Psychological Science, 2018)',
    url: 'https://news.mit.edu/2018/conversation-boost-childrens-brain-response-language-0214',
  },
  'dialogic-reading': {
    id: 'dialogic-reading',
    title: 'Dialogic reading',
    publisher: 'Victoria Department of Education (method by Whitehurst)',
    url: 'https://www.education.vic.gov.au/school/teachers/teachingresources/discipline/english/literacy/readingviewing/Pages/dialogic-reading.aspx',
  },
  'siegler-ramani-board-games': {
    id: 'siegler-ramani-board-games',
    title: "Playing linear number board games — but not circular ones — improves low-income preschoolers' numerical understanding",
    publisher: 'Siegler & Ramani (Journal of Educational Psychology, 2009) — What Works Clearinghouse',
    url: 'https://ies.ed.gov/ncee/wwc/study/73725',
  },
  'block-play-spatial': {
    id: 'block-play-spatial',
    title: "Playing blocks may help children's spatial and math thinking",
    publisher: 'Society for Research in Child Development',
    url: 'https://www.srcd.org/news/playing-blocks-may-help-childrens-spatial-and-math-thinking',
  },
  'risky-play': {
    id: 'risky-play',
    title: 'What is the relationship between risky outdoor play and health in children? A systematic review',
    publisher: 'Brussoni et al. (Int. J. Environ. Res. Public Health, 2015)',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4483710/',
  },
  'rough-and-tumble': {
    id: 'rough-and-tumble',
    title: 'Rough and tumble play with fathers helps children learn to control their feelings',
    publisher: 'University of Cambridge & LEGO Foundation review (2020)',
    url: 'https://www.nurseryworld.co.uk/articles/rough-and-tumble-play-with-fathers-helps-children-to-learn-how-to-control-their-feelings',
  },
  'lullabies-singing': {
    id: 'lullabies-singing',
    title: 'Playsongs and Lullabies',
    publisher: 'Western Sydney University BabyLab',
    url: 'https://www.westernsydney.edu.au/babylab/news-and-media/featured-stories/babylab-research-playsongs-and-lullabies',
  },
  'messy-play': {
    id: 'messy-play',
    title: 'Designing Messy Play for Infants and Toddlers',
    publisher: 'Head Start Early Childhood Learning & Knowledge Center',
    url: 'https://www.headstart.gov/publication/designing-messy-play-infants-toddlers',
  },
  montessori: {
    id: 'montessori',
    title: 'Montessori activities for babies (6–9 and 9–12 months)',
    publisher: 'The Montessori Notebook',
    url: 'https://themontessorinotebook.com/montessori-activities-6-9-months',
  },
  'cpsc-small-parts': {
    id: 'cpsc-small-parts',
    title: 'Small Parts for Toys and Children’s Products',
    publisher: 'U.S. Consumer Product Safety Commission',
    url: 'https://www.cpsc.gov/FAQ/Small-Parts',
  },
  'aap-screen-time': {
    id: 'aap-screen-time',
    title: 'Digital Ecosystems, Children, and Adolescents: new AAP media recommendations',
    publisher: 'American Academy of Pediatrics (20 January 2026)',
    url: 'https://www.healthychildren.org/English/news/Pages/creating-a-child-friendly-digital-world-AAP-releases-new-media-recommendations.aspx',
  },
  'pathways-tummy-time': {
    id: 'pathways-tummy-time',
    title: 'Tummy Time',
    publisher: 'Pathways.org',
    url: 'https://www.pathways.org/tummy-timer',
  },
  'bilingual-ef': {
    id: 'bilingual-ef',
    title: 'Bilingual experience and executive functioning in young children',
    publisher: 'Carlson & Meltzoff (Developmental Science, 2008)',
    url: 'https://doi.org/10.1111/j.1467-7687.2008.00675.x',
  },

  // Feelings & behaviour
  'aap-tantrums': {
    id: 'aap-tantrums',
    title: 'Top Tips for Surviving Tantrums',
    publisher: 'American Academy of Pediatrics — HealthyChildren.org',
    url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Temper-Tantrums.aspx',
  },
  'zero-to-three-tantrums': {
    id: 'zero-to-three-tantrums',
    title: 'Toddler Tantrums 101: Why They Happen and What You Can Do',
    publisher: 'ZERO TO THREE (2024)',
    url: 'https://www.zerotothree.org/resource/toddler-tantrums-101-why-they-happen-and-what-you-can-do/',
  },
  'tuning-in-to-kids': {
    id: 'tuning-in-to-kids',
    title: 'Tuning in to Kids: improving emotion socialization practices in parents of preschool children — findings from a community trial',
    publisher: 'Havighurst et al. (Journal of Child Psychology and Psychiatry, 2010)',
    url: 'https://pubmed.ncbi.nlm.nih.gov/20735794/',
  },
  'aap-pretend-play': {
    id: 'aap-pretend-play',
    title: 'Pretend Play: Ways Children Can Exercise Their Imagination',
    publisher: 'American Academy of Pediatrics — HealthyChildren.org',
    url: 'https://www.healthychildren.org/English/family-life/power-of-play/Pages/pretend-play-ways-children-can-exercise-their-imagination.aspx',
  },
  'process-praise': {
    id: 'process-praise',
    title: 'Parents who praise effort can bolster children’s persistence, self-belief',
    publisher: 'University of Chicago (Gunderson et al., Child Development, 2013)',
    url: 'https://news.uchicago.edu/article/2013/02/12/parents-who-praise-effort-can-bolster-children-s-persistence-self-belief',
  },

  // Movement, outdoors & sleep
  'nhs-active-under5': {
    id: 'nhs-active-under5',
    title: 'Physical activity guidelines for children (under 5 years)',
    publisher: 'NHS (UK)',
    url: 'https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-children-under-five-years/',
  },
  'nhs-active-5-18': {
    id: 'nhs-active-5-18',
    title: 'Physical activity guidelines for children and young people',
    publisher: 'NHS (UK)',
    url: 'https://www.nhs.uk/live-well/exercise/exercise-guidelines/physical-activity-guidelines-children-and-young-people/',
  },
  'outdoor-myopia': {
    id: 'outdoor-myopia',
    title: 'Effect of Time Spent Outdoors at School on the Development of Myopia Among Children in China: A Randomized Clinical Trial',
    publisher: 'He et al. (JAMA, 2015)',
    url: 'https://jamanetwork.com/journals/jama/fullarticle/2441261',
  },
  'nature-mental-health': {
    id: 'nature-mental-health',
    title: 'Mental health benefits of interactions with nature in children and teenagers: a systematic review',
    publisher: 'Tillmann et al. (Journal of Epidemiology and Community Health, 2018)',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6161651/',
  },
  'bedtime-routine': {
    id: 'bedtime-routine',
    title: 'Benefits of a bedtime routine in young children: Sleep, development, and beyond',
    publisher: 'Mindell & Williamson (Sleep Medicine Reviews, 2018)',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6587181/',
  },
  'aap-sleep-habits': {
    id: 'aap-sleep-habits',
    title: 'Healthy Sleep Habits: How Many Hours Does Your Child Need?',
    publisher: 'American Academy of Pediatrics — HealthyChildren.org',
    url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/healthy-sleep-habits-how-many-hours-does-your-child-need.aspx',
  },
  'cdc-sleep-hours': {
    id: 'cdc-sleep-hours',
    title: 'About Sleep — recommended hours of sleep by age',
    publisher: 'U.S. Centers for Disease Control and Prevention',
    url: 'https://www.cdc.gov/sleep/about/index.html',
  },

  // Safety
  'nhs-sun-safety': {
    id: 'nhs-sun-safety',
    title: 'Sunscreen and sun safety',
    publisher: 'NHS (UK)',
    url: 'https://www.nhs.uk/live-well/seasonal-health/sunscreen-and-sun-safety/',
  },
  'aap-drowning': {
    id: 'aap-drowning',
    title: 'Drowning Prevention for Curious Toddlers: What Parents Need to Know',
    publisher: 'American Academy of Pediatrics — HealthyChildren.org',
    url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Water-Safety-And-Young-Children.aspx',
  },
  'aap-button-batteries': {
    id: 'aap-button-batteries',
    title: 'What Parents Need to Know about Button Batteries and Lithium Coin Batteries',
    publisher: 'American Academy of Pediatrics — HealthyChildren.org',
    url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/what-parents-need-to-know-about-button-and-lithium-coin-batteries.aspx',
  },
  'aap-choking': {
    id: 'aap-choking',
    title: 'Choking Prevention for Babies & Children: What Every Parent Needs to Know',
    publisher: 'American Academy of Pediatrics — HealthyChildren.org',
    url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx',
  },
  'aap-family-travel': {
    id: 'aap-family-travel',
    title: 'Tips for Safe & Stress-Free Family Travel',
    publisher: 'American Academy of Pediatrics — HealthyChildren.org',
    url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Travel-Safety-Tips.aspx',
  },

  // Siblings, independence & free play
  'aap-siblings-play': {
    id: 'aap-siblings-play',
    title: 'Siblings as Playmates: 5 Ways to Help Prevent Squabbles',
    publisher: 'American Academy of Pediatrics — HealthyChildren.org',
    url: 'https://www.healthychildren.org/English/family-life/power-of-play/Pages/helping-siblings-play-together-peacefully.aspx',
  },
  'aap-sibling-bonds': {
    id: 'aap-sibling-bonds',
    title: 'Sibling Relationships: How to Help Your Kids Build Healthy Bonds',
    publisher: 'American Academy of Pediatrics — HealthyChildren.org',
    url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Sibling-Synergy.aspx',
  },
  'siblings-theory-of-mind': {
    id: 'siblings-theory-of-mind',
    title: 'A Reciprocal and Dynamic Development Model for the Effects of Siblings on Children’s Theory of Mind',
    publisher: 'Hou et al. (Frontiers in Psychology, 2020)',
    url: 'https://www.frontiersin.org/articles/10.3389/fpsyg.2020.554023/full',
  },
  'cdc-child-led-play': {
    id: 'cdc-child-led-play',
    title: 'Tips for Child-led Play',
    publisher: 'U.S. Centers for Disease Control and Prevention — Essentials for Parenting',
    url: 'https://www.cdc.gov/parents/essentials/toddlersandpreschoolers/communication/specialplaytime.html',
  },
  'free-time-ef': {
    id: 'free-time-ef',
    title: 'Less-structured time in children’s daily lives predicts self-directed executive functioning',
    publisher: 'Barker et al. (Frontiers in Psychology, 2014)',
    url: 'https://www.frontiersin.org/articles/10.3389/fpsyg.2014.00593/full',
  },
  'aap-independence': {
    id: 'aap-independence',
    title: 'Growing Independence: Tips for Parents of Young Children',
    publisher: 'American Academy of Pediatrics — HealthyChildren.org',
    url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Growing-Independence-Tips-for-Parents-of-Young-Children.aspx',
  },

  // Parent wellbeing
  'aap-parent-break': {
    id: 'aap-parent-break',
    title: 'Is it OK to need a break from my kids?',
    publisher: 'American Academy of Pediatrics — HealthyChildren.org',
    url: 'https://www.healthychildren.org/English/tips-tools/ask-the-pediatrician/Pages/is-it-ok-to-need-a-break-from-my-kids.aspx',
  },
  'aap-sleepy-parents': {
    id: 'aap-sleepy-parents',
    title: 'Safe Sleep Tips for Sleep-Deprived New Parents',
    publisher: 'American Academy of Pediatrics — HealthyChildren.org',
    url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/safe-sleep-tips-for-sleep-deprived-parents.aspx',
  },
  'nhs-postnatal-depression': {
    id: 'nhs-postnatal-depression',
    title: 'Postnatal depression',
    publisher: 'NHS (UK)',
    url: 'https://www.nhs.uk/mental-health/conditions/post-natal-depression/overview/',
  },

  // Language & music
  'asha-multilingual': {
    id: 'asha-multilingual',
    title: 'Learning More Than One Language',
    publisher: 'Communication Health Support Association, powered by the American Speech-Language-Hearing Association',
    url: 'https://helpingyoucommunicate.org/article/learning-more-than-one-language',
  },
  'music-synchrony': {
    id: 'music-synchrony',
    title: 'Interpersonal synchrony increases prosocial behavior in infants',
    publisher: 'Cirelli, Einarson & Trainor (Developmental Science, 2014) — McMaster University',
    url: 'https://trainorlab.mcmaster.ca/publications/CirelliEtAl2014',
  },
  'music-infant-rhythm': {
    id: 'music-infant-rhythm',
    title: 'Music improves baby brain responses to music and speech',
    publisher: 'University of Washington I-LABS (Zhao & Kuhl, PNAS, 2016)',
    url: 'https://ilabs.uw.edu/i-labs-news/music-improves-baby-brain-responses-music-and-speech/',
  },
};
