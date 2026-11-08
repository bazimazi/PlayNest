import type { Helpline } from './packs';
import { localize } from '../i18n';

/**
 * Helplines by ISO country code, plus WORLD for worldwide directories.
 *
 * Source: research_notes/PlayNest phase 5 app research/05_crying_soothing_parent_wellbeing.md, "Verified helplines by
 * country". Every row was checked on 2026-11-04, through an AI-summarising fetch tool. A PERSON MUST TEST-CALL EVERY
 * NUMBER BEFORE RELEASE, and again before each later release.
 *
 * `via` in the notes' terms: Operator and Government are 'operator'. Directory is 'directory'. The notes' Secondary rows
 * (another organisation's page) don't meet the schema's meaning of 'operator', so they are 'directory' too.
 *
 * `kind`: the notes' C or C/G is 'crisis', G is 'talk', P is 'parent'. Services that say they aren't crisis lines are never
 * 'crisis'. A few family, welfare or medical lines that are a country's main public option are 'parent', with a note saying
 * what they really are.
 *
 * Each country lists crisis lines first, then parent lines, then someone to talk to. Blank hours mean the source didn't
 * show them, not that the service is closed. Never add a number from memory, and leave out anything the notes list as
 * unverified: Iran's 1480, Saudi Arabia's 920033360, and so on.
 *
 * Licence check before release: most 'directory' rows come from Find A Helpline, whose commercial use requires contacting
 * ThroughLine.
 */
export const HELPLINES: Record<string, Helpline[]> = {
  WORLD: [
    {
      name: 'Find A Helpline',
      url: 'https://findahelpline.com/',
      kind: 'talk',
      note: 'A directory of helplines by country, not a helpline itself. It needs an internet connection.',
      via: 'operator',
    },
    {
      name: 'IASP crisis centres and helplines',
      url: 'https://www.iasp.info/crisis-centres-helplines/',
      kind: 'talk',
      note: 'A list of crisis services around the world, not a crisis centre itself. It needs an internet connection.',
      via: 'operator',
    },
    {
      name: 'Child Helpline International directory',
      url: 'https://childhelplineinternational.org/helplines/',
      kind: 'talk',
      note: 'Child helplines by country, set up for children and young people. It may suit a teen parent. Not for emergencies.',
      via: 'operator',
    },
  ],

  // ---------- North America ----------

  US: [
    {
      name: '988 Lifeline',
      phone: '988',
      textLine: 'Text 988',
      url: 'https://988lifeline.org/',
      kind: 'crisis',
      hours: '24 hours, every day',
      note: 'Spanish text and chat, with deaf and interpreter pages on the site. Chat at chat.988lifeline.org.',
      via: 'operator',
    },
    {
      name: 'National Maternal Mental Health Hotline',
      phone: '1 833 852 6262',
      textLine: 'Text 1 833 852 6262',
      url: 'https://www.womenshealth.gov/mental-health/mental-health-conditions/postpartum-depression',
      kind: 'parent',
      hours: '24 hours, every day',
      note: 'Also known as 1-833-TLC-MAMA. Relay: 711. The CDC points parents upset by a crying baby here.',
      via: 'operator',
    },
    {
      name: 'Postpartum Support International',
      phone: '1 800 944 4773',
      textLine: 'Text Help to 1 800 944 4773',
      url: 'https://www.womenshealth.gov/mental-health/mental-health-conditions/postpartum-depression',
      kind: 'parent',
      via: 'operator',
    },
    {
      name: 'Childhelp',
      phone: '1 800 422 4453',
      textLine: 'Text GO to 1 800 422 4453',
      url: 'https://www.childhelphotline.org/',
      kind: 'parent',
      note: "A child abuse hotline. Its page doesn't say how it responds to a parent who fears hurting a child. Spanish available, and chat.",
      via: 'operator',
    },
  ],

  CA: [
    {
      name: '9-8-8',
      phone: '988',
      textLine: 'Text 988',
      url: 'https://988.ca/',
      kind: 'crisis',
      hours: '24 hours, every day',
      note: 'Site in English and French.',
      via: 'operator',
    },
    {
      name: 'Hope for Wellness',
      phone: '1 855 242 3310',
      url: 'https://www.hopeforwellness.ca/',
      kind: 'crisis',
      hours: '24 hours, every day',
      note: 'For Indigenous peoples.',
      via: 'operator',
    },
    {
      name: 'Pacific Post Partum Support Society',
      phone: '1 855 255 7999',
      textLine: 'Text 604 255 7999',
      url: 'https://postpartum.org/',
      kind: 'parent',
      hours: 'Phone Mon to Fri 10am to 3pm Pacific. Text Mon to Fri 10:30am to 2:30pm Pacific.',
      note: 'Not a crisis line. Based in British Columbia. Local number 604 255 7999. Resources in Chinese, Farsi, Punjabi, Hindi and Spanish.',
      via: 'operator',
    },
    {
      name: 'Kids Help Phone',
      phone: '1 800 668 6868',
      textLine: 'Text CONNECT to 686868',
      url: 'https://kidshelpphone.ca/',
      kind: 'talk',
      hours: '24 hours, every day',
      note: 'For young people, so it may suit a teen parent.',
      via: 'operator',
    },
  ],

  MX: [
    {
      name: 'Línea de la Vida',
      phone: '800 911 2000',
      url: 'https://findahelpline.com/countries/mx',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'SAPTEL',
      phone: '55 5259 8121',
      url: 'https://www.saptel.org.mx/',
      kind: 'talk',
      hours: '24 hours, free',
      via: 'operator',
    },
  ],

  // ---------- UK and Ireland ----------

  GB: [
    {
      name: 'Samaritans',
      phone: '116 123',
      url: 'https://www.samaritans.org/how-we-can-help/contact-samaritan/',
      kind: 'crisis',
      hours: '24 hours, every day',
      note: 'Welsh line 0808 164 0123. Relay 18001 116 123. Web chat is listed as unavailable, so phone.',
      via: 'operator',
    },
    {
      name: 'Shout',
      textLine: 'Text 85258',
      url: 'https://giveusashout.org/',
      kind: 'crisis',
      hours: '24 hours, every day, free',
      via: 'operator',
    },
    {
      name: 'NHS 111',
      phone: '111',
      url: 'https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/',
      kind: 'crisis',
      note: 'Choose the mental health option. This NHS page covers England. If a life is at risk, call 999.',
      via: 'operator',
    },
    {
      name: 'Cry-sis',
      phone: '0800 448 0737',
      url: 'https://www.cry-sis.org.uk/',
      kind: 'parent',
      hours: '9am to 10pm, every day',
      note: 'For parents of babies who cry a lot or sleep poorly. You can book a call-back out of hours.',
      via: 'operator',
    },
    {
      name: 'Coram Family Lives',
      phone: '0808 800 2222',
      textLine: 'WhatsApp 07441 444125',
      url: 'https://www.coramfamilylives.org.uk/how-we-can-help/confidential-helpline',
      kind: 'parent',
      hours: 'Mon to Fri 9am to 9pm. Weekends 10am to 3pm.',
      note: 'England and Wales.',
      via: 'operator',
    },
    {
      // Seen on Coram Family Lives' page, not Children First's own, so no url: the Website button would open another service.
      name: 'Children First Supportline',
      phone: '08000 28 22 33',
      kind: 'parent',
      hours: 'Mon to Fri 9am to 9pm. Weekends 9am to noon.',
      note: 'Scotland.',
      via: 'directory',
    },
    {
      name: 'PANDAS',
      textLine: 'WhatsApp 07903 508334',
      url: 'https://pandasfoundation.org.uk/how-we-can-support-you/whatsapp-support/',
      kind: 'parent',
      hours: 'WhatsApp Mon to Fri 9am to 5pm, not bank holidays. Replies in 30 to 60 minutes.',
      note: 'No direct phone line: message them or book a free call-back. Not a crisis service. They may break confidentiality for safeguarding.',
      via: 'operator',
    },
    {
      name: 'The Lullaby Trust',
      phone: '0808 802 6869',
      url: 'https://www.lullabytrust.org.uk/safer-sleep-advice/',
      kind: 'parent',
      hours: 'Weekdays 10am to 2pm',
      note: 'For baby safety questions. Not for a crisis.',
      via: 'operator',
    },
    {
      // Seen on maternalocd.org, not OCD Action's own site, so no url.
      name: 'OCD Action',
      phone: '0845 390 6232',
      kind: 'talk',
      note: 'OCD support, including after a birth. Email support@ocdaction.org.uk. The cost of this 0845 number is not confirmed.',
      via: 'directory',
    },
  ],

  IE: [
    {
      name: 'Pieta',
      phone: '1800 247 247',
      textLine: 'Text HELP to 51444',
      url: 'https://www.pieta.ie/',
      kind: 'crisis',
      hours: '24 hours',
      note: 'Standard text rates apply.',
      via: 'operator',
    },
    {
      name: 'Samaritans',
      phone: '116 123',
      url: 'https://findahelpline.com/countries/ie',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'Text About It',
      textLine: 'Text 50808',
      url: 'https://findahelpline.com/countries/ie',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'Parentline',
      phone: '01 8733500',
      url: 'https://www.parentline.ie/',
      kind: 'parent',
      hours: 'Mon to Thu 10am to 9pm. Fri 10am to 7pm.',
      via: 'operator',
    },
    {
      name: 'Barnardos Parent Supportline',
      phone: '1800 910 123',
      url: 'https://findahelpline.com/countries/ie',
      kind: 'parent',
      via: 'directory',
    },
  ],

  // ---------- Europe ----------

  DE: [
    {
      name: 'TelefonSeelsorge',
      phone: '0800 111 0 111',
      url: 'https://www.telefonseelsorge.de/',
      kind: 'crisis',
      hours: '24 hours, every day, free',
      note: 'In German. Also 0800 111 0 222 and 116 123, with chat and email on the site.',
      via: 'operator',
    },
    {
      name: 'Elterntelefon',
      phone: '0800 111 0 550',
      url: 'https://www.nummergegenkummer.de/',
      kind: 'parent',
      hours: 'Mon, Wed, Fri 9am to 5pm. Tue, Thu 9am to 7pm.',
      via: 'operator',
    },
    {
      name: 'Hilfetelefon Schwierige Geburt',
      phone: '0228 92959970',
      url: 'https://www.hilfetelefon-schwierige-geburt.de/',
      kind: 'parent',
      hours: 'Wed noon to 2pm. Thu 7pm to 9pm.',
      note: 'For a difficult or traumatic birth. Regular call rates.',
      via: 'operator',
    },
    {
      name: 'Schatten & Licht',
      phone: '+49 8293 965864',
      url: 'https://www.schatten-und-licht.de/',
      kind: 'parent',
      hours: 'Volunteers, evenings and weekends',
      note: 'Peer support lists. Email info@schatten-und-licht.de. For urgent help it lists 112 and 116 117.',
      via: 'operator',
    },
  ],

  FR: [
    {
      name: '3114',
      phone: '3114',
      url: 'https://www.3114.fr/',
      kind: 'crisis',
      hours: '24 hours, every day, free',
      via: 'operator',
    },
    {
      name: 'Phare Enfants-Parents',
      phone: '01 43 46 00 62',
      url: 'https://findahelpline.com/countries/fr',
      kind: 'parent',
      via: 'directory',
    },
    {
      name: 'Maman Blues',
      url: 'https://www.maman-blues.fr/',
      kind: 'parent',
      note: 'A French forum with local volunteers, and no helpline of its own. It lists 3114 and 15 for urgent help.',
      via: 'operator',
    },
    {
      name: 'SOS Amitié',
      phone: '09 72 39 40 50',
      url: 'https://findahelpline.com/countries/fr',
      kind: 'talk',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'SOS Help',
      phone: '01 46 21 46 46',
      url: 'https://findahelpline.com/countries/fr',
      kind: 'talk',
      note: 'In English.',
      via: 'directory',
    },
  ],

  NL: [
    {
      name: '113',
      phone: '113',
      url: 'https://www.113.nl/',
      kind: 'crisis',
      note: 'Chat on the site, and a page in English.',
      via: 'operator',
    },
    {
      name: 'De Luisterlijn',
      phone: '088 0767 000',
      url: 'https://www.deluisterlijn.nl/',
      kind: 'talk',
      hours: '24 hours, every day',
      note: 'Chat on the site.',
      via: 'operator',
    },
  ],

  ES: [
    {
      name: 'Línea 024',
      phone: '024',
      url: 'https://www.sanidad.gob.es/linea024/home.htm',
      kind: 'crisis',
      hours: '24 hours, every day, free',
      note: 'Sign language video, and chat through Cruz Roja.',
      via: 'operator',
    },
    {
      name: 'Orientación en situaciones de crisis',
      phone: '717 00 37 17',
      url: 'https://findahelpline.com/countries/es',
      kind: 'talk',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'Cruz Roja Te Escucha',
      phone: '900 107 917',
      url: 'https://findahelpline.com/countries/es',
      kind: 'talk',
      via: 'directory',
    },
  ],

  IT: [
    {
      name: 'Telefono Azzurro',
      phone: '19696',
      url: 'https://azzurro.it/',
      kind: 'parent',
      hours: '24 hours, every day, free',
      note: 'A child-focused line that also supports adults and families.',
      via: 'operator',
    },
    {
      name: 'Telefono Amico',
      phone: '02 2327 2327',
      textLine: 'WhatsApp 324 011 72 52',
      url: 'https://www.telefonoamico.it/',
      kind: 'talk',
      hours: 'Phone 24 hours, free. WhatsApp 6pm to 9pm.',
      note: 'For an emergency it lists 112 and 118.',
      via: 'operator',
    },
    {
      name: 'Samaritans Onlus',
      phone: '06 77208977',
      url: 'https://findahelpline.com/countries/it',
      kind: 'talk',
      hours: '1pm to 10pm',
      via: 'directory',
    },
  ],

  SE: [
    {
      name: 'Mind Självmordslinjen',
      phone: '90101',
      url: 'https://findahelpline.com/countries/se',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'Bris',
      phone: '116 111',
      url: 'https://findahelpline.com/countries/se',
      kind: 'parent',
      hours: '24 hours, every day',
      note: 'Child-focused. The directory tags it as open to parents.',
      via: 'directory',
    },
    {
      name: 'SOS-linjen',
      phone: '0771 800 650',
      url: 'https://findahelpline.com/countries/se',
      kind: 'talk',
      via: 'directory',
    },
  ],

  // ---------- Asia-Pacific ----------

  AU: [
    {
      name: 'Lifeline',
      phone: '13 11 14',
      textLine: 'Text 0477 13 11 14',
      url: 'https://www.lifeline.org.au/',
      kind: 'crisis',
      hours: '24 hours',
      note: 'Web chat on the site.',
      via: 'operator',
    },
    {
      // This row and the next were seen on the Gidget Foundation's page, not their own, so no url.
      name: '13YARN',
      phone: '13 92 76',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'Suicide Call Back',
      phone: '1300 659 467',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'PANDA',
      phone: '1300 726 306',
      url: 'https://panda.org.au/contact',
      kind: 'parent',
      hours: 'Mon to Fri 9am to 7:30pm. Sat, Sun 9am to 4pm. Public holidays except Christmas Day.',
      note: 'Not a crisis service. Help in languages other than English is on the site.',
      via: 'operator',
    },
    {
      name: 'Pregnancy, Birth and Baby',
      phone: '1800 882 436',
      url: 'https://www.pregnancybirthbaby.org.au/',
      kind: 'parent',
      hours: '7am to midnight AET, every day',
      note: 'Maternal child health nurses. Mobile charges may apply.',
      via: 'operator',
    },
    {
      name: 'Tresillian',
      phone: '1300 272 736',
      url: 'https://www.tresillian.org.au/',
      kind: 'parent',
      hours: '7am to 11pm, every day',
      via: 'operator',
    },
    {
      name: 'Karitane Careline',
      phone: '1300 227 464',
      url: 'https://karitane.com.au/careline/',
      kind: 'parent',
      hours: 'Mon to Thu 8am to 7:30pm. Fri 8am to 4:30pm. Sat 9am to 3:30pm.',
      via: 'operator',
    },
    {
      // The site shows two different phone numbers, so this row points to the site until someone confirms one by calling.
      name: 'Gidget Foundation',
      url: 'https://www.gidgetfoundation.org.au/',
      kind: 'parent',
      note: 'Not a crisis line, and waits can be longer. Its site shows two phone numbers, so check there before calling.',
      via: 'operator',
    },
    {
      name: 'Beyond Blue',
      phone: '1300 22 4636',
      url: 'https://www.beyondblue.org.au/get-support',
      kind: 'talk',
      hours: '24 hours, every day',
      note: 'Language support available.',
      via: 'operator',
    },
    {
      name: 'MensLine',
      phone: '1300 78 99 78',
      url: 'https://mensline.org.au/',
      kind: 'talk',
      hours: '24 hours, every day',
      via: 'operator',
    },
  ],

  NZ: [
    {
      name: '1737',
      phone: '1737',
      textLine: 'Text 1737',
      url: 'https://mentalhealth.org.nz/helplines',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'Depression Helpline',
      phone: '0800 111 757',
      textLine: 'Text 4202',
      url: 'https://mentalhealth.org.nz/helplines',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'Lifeline',
      phone: '0800 543 354',
      textLine: 'Text 4357',
      url: 'https://mentalhealth.org.nz/helplines',
      kind: 'crisis',
      hours: '7am to midnight',
      via: 'directory',
    },
    {
      name: 'Suicide Crisis Helpline',
      phone: '0508 828 865',
      url: 'https://mentalhealth.org.nz/helplines',
      kind: 'crisis',
      hours: '7am to midnight',
      via: 'directory',
    },
    {
      name: 'Parent Help',
      phone: '0800 568 856',
      url: 'https://www.parenthelp.org.nz/helpline/',
      kind: 'parent',
      hours: '9am to 9pm, every day, free',
      via: 'operator',
    },
    {
      name: 'PlunketLine',
      phone: '0800 933 922',
      url: 'https://www.plunket.org.nz/',
      kind: 'parent',
      note: 'Phone hours are not shown on its site. Its live chat says 24 hours.',
      via: 'operator',
    },
  ],

  IN: [
    {
      name: 'Tele-MANAS',
      phone: '14416',
      url: 'https://findahelpline.com/countries/in',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'Vandrevala Foundation',
      phone: '+91 9999 666 555',
      url: 'https://findahelpline.com/countries/in',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'Positive Parenting & Child Helpline',
      phone: '1 800 532 2244',
      url: 'https://findahelpline.com/countries/in',
      kind: 'parent',
      via: 'directory',
    },
    {
      name: 'iCall (TISS)',
      phone: '9152987821',
      url: 'https://icallhelpline.org/',
      kind: 'talk',
      hours: 'Mon to Sat 8am to 9pm',
      note: 'Also 022 25521111 and icall@tiss.edu. The phone showed as not available when checked, which may reflect its hours.',
      via: 'operator',
    },
  ],

  PK: [
    {
      name: 'Rozan',
      phone: '0304 111 1741',
      url: 'https://rozan.org/',
      kind: 'talk',
      via: 'operator',
    },
    {
      name: 'Bedari',
      phone: '0300 5251717',
      url: 'https://findahelpline.com/countries/pk',
      kind: 'talk',
      note: 'For women and girls.',
      via: 'directory',
    },
  ],

  IR: [
    {
      name: 'Iran Crisis Text Line',
      url: 'https://irancrisisline.org/get-help/text/',
      kind: 'crisis',
      hours: '24 hours',
      note: 'Chat in Persian, run by volunteers. Its site does not name the organisation behind it.',
      via: 'operator',
    },
    {
      name: '123 Social Emergency',
      phone: '123',
      url: 'https://findahelpline.com/countries/ir',
      kind: 'crisis',
      note: 'Iran Crisis Line names this number for emergencies. Hours are not confirmed.',
      via: 'directory',
    },
    {
      name: "Yara's Voice",
      phone: '42152',
      url: 'https://findahelpline.com/countries/ir',
      kind: 'parent',
      hours: 'Sat to Wed from 9am. Closing time not confirmed.',
      note: 'For parents, young people and children.',
      via: 'directory',
    },
    {
      name: 'MoHME line',
      phone: '109',
      url: 'https://findahelpline.com/countries/ir',
      kind: 'talk',
      note: "Iran's health ministry line.",
      via: 'directory',
    },
  ],

  JP: [
    {
      name: '#いのちSOS',
      phone: '0120 061 338',
      url: 'https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/',
      kind: 'crisis',
      hours: '24 hours, 365 days',
      via: 'operator',
    },
    {
      name: 'いのちの電話 (Inochi no Denwa)',
      phone: '0120 783 556',
      url: 'https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/',
      kind: 'crisis',
      hours: 'Daily 4pm to 9pm. On the 10th of the month, 8am to 8am the next day.',
      note: 'Also 0570 783 556, 10am to 10pm.',
      via: 'operator',
    },
    {
      // Dial codes with # don't fit the phone field, so the note carries the number and the screen can't offer one-tap dialling.
      name: '#8000 child health line',
      url: 'https://www.mhlw.go.jp/topics/2006/10/tp1010-3.html',
      kind: 'parent',
      hours: 'Varies by prefecture, mainly evening to morning',
      note: 'Dial #8000 on your phone. Advice about a sick child.',
      via: 'operator',
    },
    {
      name: 'よりそいホットライン (Yorisoi Hotline)',
      phone: '0120 279 338',
      url: 'https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/',
      kind: 'talk',
      hours: '24 hours',
      note: 'From an IP phone, 050 3655 0279. A foreign-language option is offered through the guidance message.',
      via: 'operator',
    },
    {
      name: 'こころの健康相談統一ダイヤル',
      phone: '0570 064 556',
      url: 'https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/',
      kind: 'talk',
      hours: 'Varies by prefecture',
      via: 'operator',
    },
    {
      name: 'TELL Lifeline',
      phone: '0800 300 8355',
      url: 'https://findahelpline.com/countries/jp',
      kind: 'talk',
      via: 'directory',
    },
  ],

  KR: [
    {
      name: '109',
      phone: '109',
      url: 'https://findahelpline.com/countries/kr',
      kind: 'crisis',
      via: 'directory',
    },
    {
      name: '129 Health and Welfare',
      phone: '129',
      url: 'https://www.mohw.go.kr/board.es?mid=a10503010100&bid=0027',
      kind: 'parent',
      note: 'A general health and welfare line, free, and not a mental-health line.',
      via: 'operator',
    },
    {
      name: 'Lifeline Korea',
      phone: '1588 9191',
      url: 'https://findahelpline.com/countries/kr',
      kind: 'talk',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'Danuri',
      phone: '1577 1366',
      url: 'https://findahelpline.com/countries/kr',
      kind: 'talk',
      note: 'For multicultural families.',
      via: 'directory',
    },
  ],

  CN: [
    {
      name: '12356',
      phone: '12356',
      url: 'https://findahelpline.com/countries/cn',
      kind: 'talk',
      note: 'National psychological aid line.',
      via: 'directory',
    },
    {
      name: 'Lifeline China',
      phone: '400 821 1215',
      url: 'https://findahelpline.com/countries/cn',
      kind: 'talk',
      note: 'In English.',
      via: 'directory',
    },
  ],

  HK: [
    {
      name: 'Samaritans',
      phone: '2896 0000',
      url: 'https://findahelpline.com/countries/hk',
      kind: 'crisis',
      hours: '24 hours',
      note: 'In several languages.',
      via: 'directory',
    },
    {
      name: 'Samaritan Befrienders',
      phone: '2389 2222',
      url: 'https://findahelpline.com/countries/hk',
      kind: 'crisis',
      hours: '24 hours',
      note: 'In Cantonese.',
      via: 'directory',
    },
    {
      name: 'Against Child Abuse',
      phone: '2755 1122',
      url: 'https://findahelpline.com/countries/hk',
      kind: 'parent',
      via: 'directory',
    },
    {
      name: '18111',
      phone: '18111',
      url: 'https://findahelpline.com/countries/hk',
      kind: 'talk',
      via: 'directory',
    },
  ],

  ID: [
    {
      name: 'Healing 119',
      phone: '119',
      url: 'https://healing119.id/',
      kind: 'crisis',
      note: 'Dial 119, then extension 8. From the Ministry of Health, with WhatsApp through the site.',
      via: 'operator',
    },
  ],

  PH: [
    {
      name: 'NCMH',
      phone: '1553',
      url: 'https://findahelpline.com/countries/ph',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'HOPELINE',
      phone: '02 8804 4673',
      url: 'https://findahelpline.com/countries/ph',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'In Touch',
      phone: '+63 2 8893 7603',
      url: 'https://findahelpline.com/countries/ph',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
  ],

  SG: [
    {
      name: 'SOS',
      phone: '1767',
      url: 'https://findahelpline.com/countries/sg',
      kind: 'crisis',
      via: 'directory',
    },
    {
      name: 'National Mindline',
      phone: '1771',
      url: 'https://findahelpline.com/countries/sg',
      kind: 'talk',
      via: 'directory',
    },
  ],

  MY: [
    {
      name: 'HEAL',
      phone: '15555',
      url: 'https://findahelpline.com/countries/my',
      kind: 'talk',
      via: 'directory',
    },
    {
      name: 'Talian Kasih',
      phone: '15999',
      url: 'https://findahelpline.com/countries/my',
      kind: 'talk',
      via: 'directory',
    },
    {
      name: 'Befrienders KL',
      phone: '03 7627 2929',
      url: 'https://findahelpline.com/countries/my',
      kind: 'talk',
      via: 'directory',
    },
  ],

  TH: [
    {
      name: 'Mental health line 1323',
      phone: '1323',
      url: 'https://findahelpline.com/countries/th',
      kind: 'crisis',
      hours: '24 hours, every day, free',
      via: 'directory',
    },
  ],

  BD: [
    {
      name: 'Kaan Pete Roi',
      phone: '+880 9612 119911',
      url: 'https://findahelpline.com/countries/bd',
      kind: 'crisis',
      via: 'directory',
    },
  ],

  // ---------- Middle East and Africa ----------
  // Egypt has no row: the notes verified nothing there. The screen falls back to WORLD and the emergency number.

  SA: [
    {
      name: 'MoH 937',
      phone: '937',
      url: 'https://www.moh.gov.sa/en/937/Pages/default.aspx',
      kind: 'parent',
      hours: '24 hours, every day',
      note: 'A general medical line from the Ministry of Health. Its page does not mention mental health.',
      via: 'operator',
    },
  ],

  AE: [
    {
      name: 'Dubai Foundation for Women and Children',
      phone: '800 111',
      textLine: 'SMS 5111',
      url: 'https://findahelpline.com/countries/ae',
      kind: 'parent',
      hours: '24 hours, every day',
      note: 'For women and children. Not a general mental-health line.',
      via: 'directory',
    },
  ],

  IL: [
    {
      name: 'ERAN',
      phone: '1201',
      textLine: 'SMS 0529993544',
      url: 'https://findahelpline.com/countries/il',
      kind: 'talk',
      hours: '24 hours, every day',
      via: 'directory',
    },
  ],

  TR: [
    {
      name: 'ALO 183',
      phone: '183',
      url: 'https://alo183.aile.gov.tr/',
      kind: 'parent',
      hours: '24 hours, every day, free in Turkey',
      note: 'A family and social support line, not a mental-health line. Kurdish, Arabic and other languages. Deaf line 0 549 381 0 183.',
      via: 'operator',
    },
  ],

  NG: [
    {
      name: 'SURPIN',
      phone: '0800 078 7746',
      url: 'https://www.surpinng.com/',
      kind: 'crisis',
      hours: 'Toll-free line 24 hours',
      note: 'Also +234 908 021 7555, +234 903 440 0009 and +234 814 224 1007.',
      via: 'operator',
    },
    {
      name: 'MANI',
      phone: '0809 111 6264',
      url: 'https://findahelpline.com/countries/ng',
      kind: 'talk',
      via: 'directory',
    },
  ],

  ZA: [
    {
      name: 'SADAG Suicide Crisis Helpline',
      phone: '0800 567 567',
      url: 'https://www.sadag.org/',
      kind: 'crisis',
      hours: '24 hours',
      via: 'operator',
    },
    {
      name: 'LifeLine South Africa',
      phone: '0861 322 322',
      url: 'https://findahelpline.com/countries/za',
      kind: 'crisis',
      hours: '24 hours, every day',
      via: 'directory',
    },
    {
      name: 'Childline',
      phone: '116',
      url: 'https://findahelpline.com/countries/za',
      kind: 'parent',
      hours: '24 hours, every day',
      note: 'Child-focused. The directory tags it as open to parents.',
      via: 'directory',
    },
    {
      name: 'Perinatal Mental Health Project',
      url: 'https://pmhp.za.org/',
      kind: 'parent',
      note: 'Resources for parents. No public helpline.',
      via: 'operator',
    },
    {
      name: 'SADAG Cipla helpline',
      phone: '0800 456 789',
      textLine: 'SMS 31393, or WhatsApp 076 882 2775',
      url: 'https://www.sadag.org/',
      kind: 'talk',
      hours: 'Phone 24 hours. WhatsApp 8am to 5pm.',
      via: 'operator',
    },
    {
      name: "SADAG Dr Reddy's helpline",
      phone: '0800 21 22 23',
      url: 'https://www.sadag.org/',
      kind: 'talk',
      hours: '8am to 8pm',
      via: 'operator',
    },
  ],

  KE: [
    {
      name: 'Befrienders Kenya',
      phone: '+254 722 178177',
      textLine: 'SMS or WhatsApp +254 722 178177',
      url: 'https://findahelpline.com/countries/ke',
      kind: 'crisis',
      hours: 'Mon to Fri. Exact times not confirmed.',
      via: 'directory',
    },
    {
      name: 'one2one',
      phone: '1190',
      url: 'https://findahelpline.com/countries/ke',
      kind: 'talk',
      via: 'directory',
    },
  ],

  GH: [
    {
      name: 'National Mental Health and Suicide Prevention line',
      phone: '0800 678 678',
      url: 'https://findahelpline.com/countries/gh',
      kind: 'crisis',
      via: 'directory',
    },
  ],

  // ---------- Latin America ----------

  BR: [
    {
      name: 'CVV',
      phone: '188',
      url: 'https://www.cvv.org.br/',
      kind: 'crisis',
      hours: '24 hours, free',
      note: 'Chat at cvv.org.br/chat.',
      via: 'operator',
    },
  ],

  AR: [
    {
      name: 'National mental health line',
      phone: '0800 999 0091',
      url: 'https://findahelpline.com/countries/ar',
      kind: 'crisis',
      via: 'directory',
    },
    {
      name: 'Centro de Asistencia al Suicida',
      phone: '0800 345 1435',
      url: 'https://findahelpline.com/countries/ar',
      kind: 'crisis',
      via: 'directory',
    },
  ],
};

localize('helplines', HELPLINES);
