import type { Celebration, Ref } from './packs';
import { localize } from '../i18n';

/**
 * More Iranian days a family can choose: Sadeh, Tirgan, Sepandarmazgan, Tree-planting Day and Ferdowsi Day (the day of the
 * Persian language). `lang: 'fa'`. Dates come from the Iranian calendar, worked out with `src/lib/jalali.ts` and written out
 * here, as in `celebrations.ts`.
 *
 * `IRAN_REFS` are Persian sources for every Iranian day, here and in `celebrations.ts`, and for their festival games.
 */

const fa = (page: string, title: string): Ref => ({ title, publisher: 'Persian Wikipedia', url: `https://fa.wikipedia.org/wiki/${page}` });
const ganjoor = (path: string, title: string): Ref => ({ title, publisher: 'Ganjoor', url: `https://ganjoor.net/${path}` });

export const IRAN_REFS = {
  nowruz: fa('نوروز', 'نوروز'),
  haftSin: fa('هفت‌سین', 'هفت‌سین'),
  amuNowruz: fa('عمونوروز', 'عمونوروز'),
  hajiFiruz: fa('حاجی_فیروز', 'حاجی فیروز'),
  hajiFiruzNotice: {
    title: 'واکنش افشین هاشمی به ابلاغیهٔ شهرداری دربارهٔ حاجی فیروز (۴ فروردین ۱۴۰۰)',
    publisher: 'Khabar Online',
    url: 'https://www.khabaronline.ir/news/1498216/واکنش-افشین-هاشمی-به-ابلاغیه-عجیب-شهرداری-روح-ضدنژادپرستی-تان',
  },
  goldfish: {
    title: 'ماهی قرمز را در رودخانه‌ها رها نکنید (۲۴ اسفند ۱۳۹۷)',
    publisher: 'Etemad Online',
    url: 'https://www.etemadonline.com/بخش-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%DB%8C-23/278978-%D9%85%D8%A7%D9%87%DB%8C-%D9%82%D8%B1%D9%85%D8%B2-%D8%B1%D8%A7-%D8%AF%D8%B1-%D8%B1%D9%88%D8%AF%D8%AE%D8%A7%D9%86%D9%87-%D9%87%D8%A7-%D8%B1%D9%87%D8%A7',
  },
  chaharshanbe: fa('چهارشنبه‌سوری', 'چهارشنبه‌سوری'),
  ghashoghZani: fa('قاشق‌زنی', 'قاشق‌زنی'),
  shalAndazi: fa('آیین_شال‌اندازی', 'آیین شال‌اندازی'),
  sizdah: fa('سیزده‌بدر', 'سیزده‌بدر'),
  sekanjabin: fa('سکنجبین', 'سکنجبین'),
  yalda: fa('شب_یلدا', 'شب یلدا'),
  mehregan: fa('مهرگان', 'مهرگان'),
  childrensDay: fa('روز_کودک', 'روز کودک'),
  childGames: fa('بازی‌های_کودکان', 'بازی‌های کودکان'),
  sadeh: fa('جشن_سده', 'جشن سده'),
  hushang: ganjoor('ferdousi/shahname/hushang/sh2', 'شاهنامه، هوشنگ: کشف آتش و پیشینهٔ جشن سده'),
  tirgan: fa('تیرگان', 'تیرگان'),
  tirganKojaro: { title: 'جشن تیرگان، پاسداشت آبادی و آزادی', publisher: 'Kojaro', url: 'https://www.kojaro.com/history-art-culture/195804-tirgan-festival/' },
  arash: fa('آرش_کمانگیر', 'آرش کمانگیر'),
  sepandarmazgan: fa('سپندارمذگان', 'سپندارمذگان'),
  sepandarmazganKojaro: { title: 'سپندارمذگان چیست؟', publisher: 'Kojaro', url: 'https://www.kojaro.com/history-art-culture/190981-definition-spandarmazegan-day/' },
  treeDay: fa('روز_درخت‌کاری', 'روز درخت‌کاری'),
  hafezTree: ganjoor('hafez/ghazal/sh115', 'حافظ، غزل ۱۱۵: درخت دوستی بنشان'),
  ferdowsi: fa('فردوسی', 'فردوسی'),
  ferdowsiDay: {
    title: 'راز سند زدن ۲۵ اردیبهشت به نام «فردوسی»',
    publisher: 'Etemad Online',
    url: 'https://www.etemadonline.com/بخش-%D9%81%D8%B1%D9%87%D9%86%DA%AF-%D9%87%D9%86%D8%B1-16/485975-%D8%B1%D8%A7%D8%B2-%D8%B3%D9%86%D8%AF-%D8%B2%D8%AF%D9%86-%D8%A7%D8%B1%D8%AF%DB%8C%D8%A8%D9%87%D8%B4%D8%AA-%D8%A8%D9%87-%D9%86%D8%A7%D9%85',
  },
  shahnamehOpening: ganjoor('ferdousi/shahname/aghaz/sh1', 'شاهنامه، آغاز کتاب'),
  rakhsh: ganjoor('ferdousi/shahname/garshasp/sh2', 'شاهنامه، جستجوی رستم به دنبال اسب و یافتن رخش'),
  rakhshFa: fa('رخش', 'رخش'),
  naqqali: fa('نقالی', 'نقالی'),
  moshaereh: fa('مشاعره', 'مشاعره'),
} satisfies Record<string, Ref>;

const R = IRAN_REFS;

export const PERSIAN_CELEBRATIONS: Celebration[] = [
  {
    id: 'jashn-e-sadeh',
    name: 'Sadeh',
    nativeName: 'جشن سده',
    emoji: '🔥',
    kind: 'cultural',
    lang: 'fa',
    whoCelebrates: 'Some Iranian families mark this old winter festival of fire on 10 Bahman, often by gathering to watch a big fire lit at dusk.',
    notEveryone: 'Not every family marks it, and many know it from the Shahnameh rather than from a fire. In Kerman, people of every faith gather to watch the big one.',
    about: 'At dusk on 10 Bahman, about fifty days and fifty nights before Nowruz. In the Shahnameh, King Hushang throws a stone at a serpent, which slips away. The stone strikes a rock, a spark leaps out, and fire is found.',
    dates: {
      '2026': ['2026-01-30'],
      '2027': ['2027-01-30'],
      '2028': ['2028-01-30'],
      '2029': ['2029-01-29'],
      '2030': ['2030-01-29'],
    },
    approximate: false,
    respect: 'The big fire is lit by Zoroastrian priests with prayers, and that part stays with them. At home, real flames stay with adults, and nobody jumps over fire.',
    refs: [R.sadeh, R.hushang],
  },
  {
    id: 'tirgan',
    name: 'Tirgan',
    nativeName: 'جشن تیرگان',
    emoji: '💧',
    kind: 'cultural',
    lang: 'fa',
    whoCelebrates: 'Some Iranian families mark this summer festival of water by splashing each other, wishing for rain and tying a seven-colour band on the wrist.',
    notEveryone: 'Not every family marks it, and calendars differ on the day: 10 Tir in some, 13 Tir in others, so both are shown.',
    about: 'A festival of water and rain, linked to Tishtar, the star of rain, and to Arash the archer, whose arrow set the border of Iran. The band, called tir-o-bad, is given to the wind nine days later.',
    dates: {
      '2026': ['2026-07-01', '2026-07-04'],
      '2027': ['2027-07-01', '2027-07-04'],
      '2028': ['2028-06-30', '2028-07-03'],
      '2029': ['2029-06-30', '2029-07-03'],
      '2030': ['2030-07-01', '2030-07-04'],
    },
    approximate: true,
    refs: [R.tirgan, R.tirganKojaro, R.arash],
  },
  {
    id: 'sepandarmazgan',
    name: 'Sepandarmazgan',
    nativeName: 'سپندارمذگان',
    emoji: '🌷',
    kind: 'cultural',
    lang: 'fa',
    whoCelebrates: 'Some Iranian families mark this old festival of the earth and of women, with thanks and small gifts for mothers, grandmothers and the women of the family.',
    notEveryone: 'Not every family marks it. Most calendars give 29 Bahman, and some families keep 5 Esfand instead, by an older reckoning.',
    about: 'Named after Sepandarmaz, guardian of the earth, who stands for patience and humility. Biruni wrote that on this day men gave gifts to women, and some families still use it to thank the women who care for them.',
    dates: {
      '2026': ['2026-02-18'],
      '2027': ['2027-02-18'],
      '2028': ['2028-02-18'],
      '2029': ['2029-02-17'],
      '2030': ['2030-02-17'],
    },
    approximate: true,
    refs: [R.sepandarmazgan, R.sepandarmazganKojaro],
  },
  {
    id: 'tree-planting-day',
    name: 'Tree-planting Day',
    nativeName: 'روز درختکاری',
    emoji: '🌳',
    kind: 'shared',
    lang: 'fa',
    whoCelebrates: 'Some families in Iran plant a sapling on 15 Esfand, at the end of winter, the first day of Natural Resources Week.',
    notEveryone: 'Not every family has room for a tree. A seed in a pot, or care for a tree on your street, is a way to mark it too.',
    about: "Iran's day for planting trees, as winter turns to spring. Some families plant a tree for a new baby, or in memory of someone they have lost, and give it a name.",
    dates: {
      '2026': ['2026-03-06'],
      '2027': ['2027-03-06'],
      '2028': ['2028-03-05'],
      '2029': ['2029-03-05'],
      '2030': ['2030-03-05'],
    },
    approximate: false,
    refs: [R.treeDay, R.hafezTree],
  },
  {
    id: 'ferdowsi-day',
    name: 'Ferdowsi Day',
    nativeName: 'روز بزرگداشت فردوسی و پاسداشت زبان فارسی',
    emoji: '📚',
    kind: 'cultural',
    lang: 'fa',
    whoCelebrates: 'Some Iranian families mark this day for Ferdowsi, the poet of the Shahnameh, and for the Persian language, with stories and poems.',
    notEveryone: 'Not every family marks it, and it can be as small as one Shahnameh story at bedtime.',
    about: 'On 25 Ordibehesht. Ferdowsi finished the Shahnameh, the great Persian book of kings and heroes, over a thousand years ago. In recent years the day has also honoured the Persian language.',
    dates: {
      '2026': ['2026-05-15'],
      '2027': ['2027-05-15'],
      '2028': ['2028-05-14'],
      '2029': ['2029-05-14'],
      '2030': ['2030-05-15'],
    },
    approximate: false,
    refs: [R.ferdowsi, R.ferdowsiDay, R.shahnamehOpening],
  },
];

localize('celebrations-persian', PERSIAN_CELEBRATIONS, { hideMissing: true });
