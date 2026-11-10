import type { AidCard, Ref } from './packs';
import { localize } from '../i18n';

/**
 * First-aid cards for the offline "in an emergency" screens. Source pack:
 * research_notes/PlayNest phase 5 app research/04_first_aid_emergency_safety.md, plus the pages it links to.
 *
 * NOT YET CLINICALLY REVIEWED. Every card needs sign-off by a licensed clinician before release.
 *
 * Rules kept here:
 *  - Choking and CPR are region-locked: each region follows one body, and a card is never blended from several.
 *  - Where a body's steps could not be read, `basedOn` and `note` say what stood in for them.
 *  - A figure the notes mark NOT VERIFIED is left out. The US and Canada CPR count, pace and depth were checked afterwards against
 *    the pages named on those cards, since AHA's own full text could not be read.
 *  - No phone numbers in the text (the screen shows the local number), no doses beyond a body's own first-aid plan, and
 *    `signs` describes an emergency so a parent can pick a card. It never asks a question that returns a verdict.
 */

const ref = (title: string, publisher: string, url: string): Ref => ({ title, publisher, url });

// Resuscitation bodies.
const RCUK_BLS = ref('Paediatric basic life support guidelines 2025', 'Resuscitation Council UK', 'https://www.resus.org.uk/library/2025-resuscitation-guidelines/paediatric-basic-life-support-guidelines');
const RCUK_FA = ref('First aid guidelines 2025', 'Resuscitation Council UK', 'https://www.resus.org.uk/library/2025-resuscitation-guidelines/first-aid-guidelines');
const ERC_LAY = ref('Guidelines 2025: booklet for the public', 'European Resuscitation Council', 'https://www.erc.edu/media/p5ymaeej/gl2025_layperson_book_ipdf-v11-e.pdf');
const AHA_HEARTSAVER = ref('2025 interim Heartsaver changes', 'American Heart Association, hosted by Heart & Stroke', 'https://cpr.heartandstroke.ca/resource/Guidelines2025InterimHeartsaverStudentWorkbookEN');
const AHA_BLS = ref('2025 interim BLS changes', 'American Heart Association, hosted by Heart & Stroke', 'https://cpr.heartandstroke.ca/resource/Guidelines2025InterimBLSProviderManualEN');
const MEDLINE_BABY = ref('CPR: infant', 'US National Library of Medicine', 'https://medlineplus.gov/ency/article/000011.htm');
const MEDLINE_CHILD = ref('CPR: young child', 'US National Library of Medicine', 'https://medlineplus.gov/ency/article/000012.htm');
const HS_CPR = ref('Emergency signs and CPR', 'Heart & Stroke', 'https://www.heartandstroke.ca/heart-disease/emergency-signs');
const AAP_CPR = ref('AHA and AAP update CPR guidelines', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/news/Pages/AHA-and-AAP-release-update-CPR-guidelines-to-help-save-young-lives.aspx');
const ARC_INFANT = ref('Infant choking', 'American Red Cross', 'https://production.redcross.org/take-a-class/resources/learn-first-aid/infant-choking');
const ARC_CHILD = ref('Adult and child choking', 'American Red Cross', 'https://production.redcross.org/take-a-class/resources/learn-first-aid/adult-child-choking');
const UCALGARY = ref('A lesson in the new choking guidelines', 'University of Calgary', 'https://ucalgary.ca/news/preparing-holidays-lesson-new-choking-guidelines-should-be-menu');
const ANZ_4 = ref('Guideline 4: Airway', 'ANZCOR', 'https://www.anzcor.org/home/basic-life-support/guideline-4-airway');
const ANZ_6 = ref('Guideline 6: Compressions', 'ANZCOR', 'https://www.anzcor.org/home/basic-life-support/guideline-6-compressions');
const ANZ_8 = ref('Guideline 8: CPR', 'ANZCOR', 'https://www.anzcor.org/home/basic-life-support/guideline-8-cardiopulmonary-resuscitation-cpr');
const ANZ_12 = ref('Guideline 12.1: Paediatric basic life support', 'ANZCOR', 'https://www.anzcor.org/home/paediatric-advanced-life-support/guideline-12-1-paediatric-basic-life-support-pbls-for-health-professionals');
const SJA_BABY_CPR = ref('Baby CPR', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/baby-cpr/');
const SJA_CHILD_CPR = ref('Child CPR', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/child-cpr/');
const SJA_BABY_CHOKING = ref('Baby choking', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/baby-choking/');
const SJA_CHILD_CHOKING = ref('Child choking', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/child-choking/');

// Health services and child-health bodies.
const AAP_EMS = ref('When to call emergency medical services', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/When-to-Call-Emergency-Medical-Services-EMS.aspx');
const NHS_ACCIDENT = ref('What to do if your child has an accident', 'NHS', 'https://www.nhs.uk/baby/first-aid-and-safety/first-aid/what-to-do-if-your-child-has-an-accident/');
const NHS_SEPSIS = ref('Sepsis', 'NHS', 'https://www.nhs.uk/conditions/sepsis/');
const NHS_MENINGITIS = ref('Meningitis', 'NHS', 'https://www.nhs.uk/conditions/meningitis/');
const NHS_BREATHING = ref('Bronchiolitis', 'NHS', 'https://www.nhs.uk/conditions/bronchiolitis/');
const ANZ_POISON = ref('Guideline 9.5.1: Poisoning', 'ANZCOR', 'https://www.anzcor.org/home/first-aid/guideline-9-5-1-first-aid-management-of-poisoning');
const AAP_MAGNETS = ref('Dangers of magnetic toys', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Dangers-of-Magnetic-Toys-and-Fake-Piercings.aspx');
const AAP_BEADS = ref('Water beads', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Water-Beads-Harmful.aspx');
const AAP_BATTERY = ref('Button and lithium coin batteries', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/what-parents-need-to-know-about-button-and-lithium-coin-batteries.aspx');
const CPSC_MAGNETS = ref('Magnets', 'US Consumer Product Safety Commission', 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Magnets');
const CPSC_BEADS = ref('Water beads', 'US Consumer Product Safety Commission', 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Water-Beads-Information-Center');
const AAP_FEVER = ref('When to call the pediatrician about a fever', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/When-to-Call-the-Pediatrician.aspx');
const RCH_FEVER = ref('Fever in children', "Royal Children's Hospital Melbourne", 'https://www.rch.org.au/kidsinfo/fact_sheets/Fever_in_children/');

/** Colour is a sign on several cards, and it looks different on darker skin (NHS, ERC and UK Sepsis Trust all say so). */
const SKIN_NOTE = 'On brown or black skin, colour changes can be harder to see. Check the palms, soles, lips, gums and inside the eyelids.';

/** AHA's full 2025 text couldn't be read. The count, pace and depth come from US and Canadian health bodies that cite it. */
const CPR_ALONE = "On your own with no phone: give about 2 minutes of CPR, then go and call. If you can't give breaths, keep pressing. If the call handler says something different, do that.";
const CPR_CA_NOTE = 'Uses the AHA 2025 interim text that Heart & Stroke hosts. The depth is from a US source, because no Canadian page giving it could be read.';
const ERC_PROXY = "ERC's full chapter could not be read, so these steps follow Resuscitation Council UK, which implements ERC.";
const NO_DEVICE_DELAY = 'Do not delay back blows and thrusts to find a device.';
const AHA_DROWNING_NOTE = 'If you are trained, you can start CPR with breaths.';

export const AID_CARDS: AidCard[] = [
  // ---------- Tier 1: time-critical, in the order the notes suggest ----------
  {
    id: 'call-for-help',
    title: 'Call for help: what to say',
    emoji: '📞',
    tier: 1,
    signs: 'Any emergency where you need an ambulance, and the words to use on the phone.',
    callFirst: true,
    regions: {
      all: {
        steps: [
          'Call your emergency number. Put your phone on speaker so both hands are free.',
          "Give your address or exact location. A mobile call can't always be traced.",
          'Say what has happened and how old your child is.',
          'Do what the call handler tells you, even if it differs from this card.',
          'Stay with your child and keep the phone close.',
        ],
        basedOn: 'Resuscitation Council UK 2025 and ERC 2025 for speaker mode, AAP 2026 for giving your location',
        refs: [RCUK_BLS, ERC_LAY, AAP_EMS],
      },
    },
  },
  {
    id: 'cpr-baby',
    title: 'Not breathing: baby under 1',
    emoji: '👶',
    tier: 1,
    signs: "Your baby won't respond and isn't breathing normally.",
    callFirst: true,
    regions: {
      us: {
        steps: [
          'Call your emergency number on speaker and ask to be talked through CPR. Lay your baby on their back on a firm surface.',
          'Start with presses, not breaths. Put both thumbs on the breastbone, right below the nipple line, fingers around the back.',
          "Press hard, a third of the chest's depth or more, about 4 cm (1½ in). Can't reach that? Use the heel of one hand.",
          'Give 30 presses at 100 to 120 a minute. Let the chest rise fully after each one.',
          'Lift the chin and tilt the head back slightly. Cover mouth and nose with your mouth. Give 2 breaths, 1 second each.',
          'Repeat 30 and 2, with pauses under 10 seconds. When a defibrillator is here, use it, with child pads or setting if it has them.',
        ],
        dont: ['Do not press with two fingers. AHA no longer recommends it.'],
        note: CPR_ALONE,
        basedOn: 'AHA/AAP 2025, with the US National Library of Medicine for the count, pace and depth',
        refs: [AHA_HEARTSAVER, AHA_BLS, AAP_CPR, MEDLINE_BABY],
      },
      ca: {
        steps: [
          'Call your emergency number on speaker and ask to be talked through CPR. Lay your baby on their back on a firm surface.',
          'Start with presses, not breaths. Put both thumbs on the breastbone, right below the nipple line, fingers around the back.',
          "Press hard, a third of the chest's depth or more, about 4 cm (1½ in). Can't reach that? Use the heel of one hand.",
          'Give 30 presses at 100 to 120 a minute. Let the chest rise fully after each one.',
          'Lift the chin and tilt the head back slightly. Cover mouth and nose with your mouth. Give 2 breaths, 1 second each.',
          'Repeat 30 and 2, with pauses under 10 seconds. When a defibrillator is here, use it, with child pads or setting if it has them.',
        ],
        dont: ['Do not press with two fingers. AHA no longer recommends it.'],
        note: `${CPR_CA_NOTE} ${CPR_ALONE}`,
        basedOn: 'AHA/AAP 2025, as hosted by Heart & Stroke Canada, with Heart & Stroke for the count and pace',
        refs: [AHA_HEARTSAVER, AHA_BLS, AAP_CPR, HS_CPR, MEDLINE_BABY],
      },
      uk: {
        steps: [
          'Call your emergency number. Put your phone on speaker and follow the call handler. Send anyone with you for a defibrillator.',
          'Lay your baby on a firm surface. Tilt the head only until the face points straight up. Lift the chin. Check breathing, up to 10 seconds.',
          'Give 5 rescue breaths. Cover the mouth and nose with your mouth and blow steadily for about 1 second, until the chest rises.',
          "Put both thumbs on the lower half of the breastbone, hands around the chest. Press down a third of the chest's depth or more.",
          'Give 30 presses at 100 to 120 a minute, then 2 breaths. Repeat until your baby shows clear signs of life or help takes over.',
          'When a defibrillator arrives, switch it on and do what it says. Use child mode if it has one. If not, use it as it is.',
        ],
        dont: ['Do not leave your baby to fetch a defibrillator if you are on your own.'],
        note: "If you can't give breaths, keep pressing. Alone with no phone: give 5 breaths and 1 minute of CPR, then call, taking your baby with you.",
        basedOn: 'Resuscitation Council UK 2025, with St John Ambulance 2026 for detail',
        refs: [RCUK_BLS, SJA_BABY_CPR],
      },
      eu: {
        steps: [
          'Call your emergency number, or get someone else to. Put your phone on speaker, keep it close and follow the call handler.',
          'Lay your baby on a firm surface if it causes no delay. Tilt the head only until the face points straight up. Lift the chin. Check breathing.',
          'Give 5 rescue breaths. Cover the mouth and nose with your mouth and blow steadily for about 1 second. Watch the chest rise.',
          "Put both thumbs on the lower half of the breastbone, hands around the chest. Press down a third of the chest's depth or more.",
          'Give 30 presses at 100 to 120 a minute, then 2 breaths. Repeat until help arrives and takes over, or tells you to stop.',
          'When a defibrillator arrives, follow its instructions. Use paediatric mode if it has one. If not, use standard mode.',
        ],
        dont: ['Do not leave your baby to fetch a defibrillator if you are on your own.'],
        note: `${ERC_PROXY} If you are unsure about giving breaths, the call handler can guide you to press without them.`,
        basedOn: 'ERC 2025 booklet for the public, with detail as implemented by Resuscitation Council UK 2025',
        refs: [ERC_LAY, RCUK_BLS],
      },
      anz: {
        steps: [
          'Call your emergency number, or send someone to. Put your phone on speaker and follow the call handler.',
          'Lay your baby on their back on a firm surface. Keep the head level, support the jaw and check for normal breathing.',
          'Give 30 presses with 2 fingers on the lower half of the breastbone, at 100 to 120 a minute.',
          "Press down about a third of the chest's depth, about 4 cm.",
          'Give 2 breaths, your mouth over the mouth and nose. Repeat 30 and 2 until they respond or breathe normally, or professionals take over.',
          'Attach a defibrillator as soon as there is one and follow its prompts. Use child pads or setting if it has them. If not, use it as it is.',
        ],
        note: "If you can't give breaths, keep pressing. ANZCOR's lay guideline (2021) uses 2 fingers. Its 2026 guideline for trained responders prefers 2 thumbs, or the heel of one hand if you can't press deep enough.",
        basedOn: 'ANZCOR Guidelines 4, 6 and 8 (all April 2021)',
        refs: [ANZ_8, ANZ_6, ANZ_4, ANZ_12],
      },
    },
  },
  {
    id: 'cpr-child',
    title: 'Not breathing: child over 1',
    emoji: '🧒',
    tier: 1,
    signs: "Your child won't respond and isn't breathing normally.",
    callFirst: true,
    regions: {
      us: {
        steps: [
          'Call your emergency number on speaker and ask to be talked through CPR. Lay your child on their back on a firm surface.',
          'Start with presses, not breaths. Put the heel of one hand on the centre of the chest and your other hand on top, fingers linked.',
          'Press straight down hard, about 5 cm (2 in), with your arms straight and your shoulders over your hands.',
          'Give 30 presses at 100 to 120 a minute. Let the chest rise fully after each one.',
          'Lift the chin and tilt the head back. Pinch the nose and cover the mouth with yours. Give 2 breaths, 1 second each.',
          'Repeat 30 and 2, with pauses under 10 seconds. When a defibrillator is here, use it, with child pads or setting if it has them.',
        ],
        note: CPR_ALONE,
        basedOn: 'AHA/AAP 2025, with the US National Library of Medicine for the hands, count, pace and depth',
        refs: [AHA_HEARTSAVER, AHA_BLS, AAP_CPR, MEDLINE_CHILD],
      },
      ca: {
        steps: [
          'Call your emergency number on speaker and ask to be talked through CPR. Lay your child on their back on a firm surface.',
          'Start with presses, not breaths. Put the heel of one hand on the centre of the chest and your other hand on top, fingers linked.',
          'Press straight down hard, about 5 cm (2 in), with your arms straight and your shoulders over your hands.',
          'Give 30 presses at 100 to 120 a minute. Let the chest rise fully after each one.',
          'Lift the chin and tilt the head back. Pinch the nose and cover the mouth with yours. Give 2 breaths, 1 second each.',
          'Repeat 30 and 2, with pauses under 10 seconds. When a defibrillator is here, use it, with child pads or setting if it has them.',
        ],
        note: `${CPR_CA_NOTE} ${CPR_ALONE}`,
        basedOn: 'AHA/AAP 2025, as hosted by Heart & Stroke Canada, with Heart & Stroke for the count and pace',
        refs: [AHA_HEARTSAVER, AHA_BLS, AAP_CPR, HS_CPR, MEDLINE_CHILD],
      },
      uk: {
        steps: [
          'Call your emergency number. Put your phone on speaker and follow the call handler. Send anyone with you for a defibrillator.',
          'Lay your child on their back on a firm surface. Tilt the head back, lift the chin and check for normal breathing for up to 10 seconds.',
          'Give 5 rescue breaths. Pinch the nose, seal your mouth over theirs and blow steadily for about 1 second, until the chest rises.',
          'Put the heel of one hand on the lower half of the breastbone, or two hands for a bigger child. Press a third of chest depth or more.',
          'Give 30 presses at 100 to 120 a minute, then 2 breaths. Repeat until your child shows clear signs of life or help takes over.',
          'When a defibrillator arrives, do what it says. Under about 8 years or 25 kg, use child mode if it has one. If not, use it as it is.',
        ],
        dont: ['Do not press deeper than 6 cm.', 'Do not leave your child to fetch a defibrillator if you are on your own.'],
        note: "If you can't give breaths, keep pressing. Alone with no phone: give 5 breaths and 1 minute of CPR, then call. Take a small child with you.",
        basedOn: 'Resuscitation Council UK 2025, with St John Ambulance 2026 for detail',
        refs: [RCUK_BLS, SJA_CHILD_CPR],
      },
      eu: {
        steps: [
          'Call your emergency number, or get someone else to. Put your phone on speaker, keep it close and follow the call handler.',
          'Lay your child on a firm surface if it causes no delay. Tilt the head back, lift the chin and check breathing for up to 10 seconds.',
          'Give 5 rescue breaths. Pinch the nose, seal your mouth over theirs and blow steadily for about 1 second. Watch the chest rise.',
          'Put the heel of one hand on the lower half of the breastbone, or two hands where you can. Press a third of chest depth or more.',
          'Give 30 presses at 100 to 120 a minute, then 2 breaths. Repeat until help arrives and takes over, or tells you to stop.',
          'When a defibrillator arrives, follow it. Under about 8 years or 25 kg, use paediatric mode if it has one, otherwise standard mode.',
        ],
        dont: ['Do not press deeper than 6 cm.', 'Do not leave your child to fetch a defibrillator if you are on your own.'],
        note: `${ERC_PROXY} If you are unsure about giving breaths, the call handler can guide you to press without them.`,
        basedOn: 'ERC 2025 booklet for the public, with detail as implemented by Resuscitation Council UK 2025',
        refs: [ERC_LAY, RCUK_BLS],
      },
      anz: {
        steps: [
          'Call your emergency number, or send someone to. Put your phone on speaker and follow the call handler.',
          'Lay your child on their back on a firm surface. Tilt the head back, lift the chin and check for normal breathing.',
          'Give 30 presses on the lower half of the breastbone, at 100 to 120 a minute. Use one hand or two.',
          "Press down about a third of the chest's depth, about 5 cm.",
          'Give 2 breaths: tilt the head, pinch the nose, seal your mouth over theirs. Repeat 30 and 2 until they respond or professionals take over.',
          'Attach a defibrillator as soon as there is one and follow its prompts. Use child pads or setting if it has them. If not, use it as it is.',
        ],
        note: "If you can't give breaths, keep pressing.",
        basedOn: 'ANZCOR Guidelines 4, 6 and 8 (all April 2021)',
        refs: [ANZ_8, ANZ_6, ANZ_4],
      },
    },
  },
  {
    id: 'choking-baby',
    title: 'Choking: baby under 1',
    emoji: '🍼',
    tier: 1,
    signs: "Can't cough, cry or breathe, or the cough is weak. Your baby may make no sound at all.",
    callFirst: true,
    regions: {
      us: {
        steps: [
          'Call your emergency number, or get someone else to. Put your phone on speaker.',
          'Lay your baby face down along your forearm, with your thigh underneath. Cradle the head and keep it lower than the chest.',
          'Give up to 5 firm back blows between the shoulder blades with the heel of your hand.',
          'Turn your baby face up, your forearm resting on your thigh. Keep the head lower than the body.',
          'Give up to 5 quick downward thrusts, about 1 a second, with the heel of one hand on the middle of the chest, lower half of the breastbone.',
          'Repeat until the object is out. If your baby stops responding, lay them on a firm surface and start CPR with chest presses.',
        ],
        dont: ['Do not give abdominal thrusts to a baby under 1.', 'Do not sweep a finger in the mouth unless you can see the object.', NO_DEVICE_DELAY],
        note: "AHA's 2025 text read here doesn't give the back-blow hold or the move to CPR, so those come from American Red Cross pages.",
        basedOn: 'AHA/AAP 2025, with American Red Cross for the back-blow hold and the move to CPR',
        refs: [AHA_HEARTSAVER, AHA_BLS, ARC_INFANT],
      },
      ca: {
        steps: [
          'Call your emergency number, or get someone else to. Put your phone on speaker.',
          'Hold your baby face down, with the head supported and lower than the chest.',
          'Give up to 5 firm back blows between the shoulder blades.',
          'Turn your baby face up, your forearm resting on your thigh. Keep the head lower than the body.',
          'Give up to 5 quick downward thrusts, about 1 a second, with the heel of one hand on the middle of the chest, lower half of the breastbone.',
          'Repeat until the object is out. If your baby stops responding, start CPR. See the Not breathing card.',
        ],
        dont: ['Do not give abdominal thrusts to a baby under 1.', NO_DEVICE_DELAY],
        note: 'Uses the AHA 2025 interim text that Heart & Stroke hosts. It gives the chest thrusts in detail but not the hold for back blows.',
        basedOn: 'AHA/AAP 2025, as hosted by Heart & Stroke Canada',
        refs: [AHA_HEARTSAVER, AHA_BLS, UCALGARY],
      },
      uk: {
        steps: [
          'Call your emergency number straight away, or get someone else to. Put your phone on speaker.',
          'Lay your baby face down on your forearm, with that arm resting on your leg. Support the head and keep it lower than the chest.',
          'Give up to 5 sharp blows between the shoulder blades. Stop as soon as the object comes out.',
          "Turn your baby onto their back on your knees. Put both thumbs on the breastbone, a finger below the nipple line, hands around the chest.",
          'Give up to 5 chest thrusts, pressing more sharply than for CPR. Stop as soon as the object comes out.',
          'Keep repeating while your baby is awake. If they stop responding, start CPR straight away with 5 rescue breaths.',
        ],
        dont: ['Do not sweep a finger in the mouth unless you can clearly see the object.', NO_DEVICE_DELAY],
        note: 'Every baby given chest thrusts needs checking in hospital, even if they seem well.',
        basedOn: 'Resuscitation Council UK 2025, with St John Ambulance 2026 for thumb position and the hospital check',
        refs: [RCUK_BLS, SJA_BABY_CHOKING],
      },
      eu: {
        steps: [
          'Call your emergency number straight away, or get someone else to. Put your phone on speaker.',
          'Lay your baby face down on your forearm, with that arm resting on your leg. Support the head and keep it lower than the chest.',
          'Give up to 5 sharp blows between the shoulder blades. Stop as soon as the object comes out.',
          'Turn your baby onto their back on your knees. Put both thumbs on the lower half of the breastbone, hands around the chest.',
          'Give up to 5 chest thrusts, pressing more sharply than for CPR. Stop as soon as the object comes out.',
          'Keep repeating while your baby is awake. If they stop responding, start CPR straight away with 5 rescue breaths.',
        ],
        dont: ['Do not sweep a finger in the mouth unless you can clearly see the object.', NO_DEVICE_DELAY],
        note: ERC_PROXY,
        basedOn: 'ERC 2025, steps as implemented by Resuscitation Council UK 2025',
        refs: [RCUK_BLS, ERC_LAY],
      },
      anz: {
        steps: [
          'Call your emergency number. Put your phone on speaker.',
          'Lay your baby head down across your lap. Give up to 5 sharp blows in the middle of the back, between the shoulder blades.',
          'Check after each blow, and stop if the object comes out.',
          'Turn your baby onto their back across your thigh, head down.',
          'Give up to 5 chest thrusts on the lower half of the breastbone, hands placed as for CPR, sharper and slower. Check after each one.',
          'Repeat while your baby is awake. If they stop responding and are not breathing normally, start CPR.',
        ],
        dont: ['Do not give abdominal thrusts.', 'Do not sweep a finger blindly in the mouth. You may remove something you can see.', NO_DEVICE_DELAY],
        note: "ANZCOR's 2026 guideline for trained responders says both thumbs or the heel of one hand may give more force for chest thrusts.",
        basedOn: 'ANZCOR Guideline 4 (April 2021), with Guideline 12.1 (April 2026)',
        refs: [ANZ_4, ANZ_12],
      },
    },
  },
  {
    id: 'choking-child',
    title: 'Choking: child over 1',
    emoji: '🍇',
    tier: 1,
    signs: "Can't cough, speak or breathe, or the cough is weak. Your child may hold their throat or make no sound.",
    callFirst: true,
    regions: {
      us: {
        steps: [
          'Call your emergency number, or get someone else to. Put your phone on speaker.',
          'Stand to the side and slightly behind your child, or kneel behind a small child. Lean them forward at the waist.',
          'Give 5 back blows, striking hard between the shoulder blades with the heel of your hand.',
          'Stand them up. Put your fist on the tummy right above the navel and hold it with your other hand.',
          'Give 5 quick, forceful upward thrusts, each one a separate movement.',
          'Repeat 5 blows and 5 thrusts until the object is out. If they stop responding, lay them on a firm surface and start CPR with chest presses.',
        ],
        dont: ['Do not hang your child upside down by the feet.', 'Do not sweep a finger in the mouth unless you can see the object.', NO_DEVICE_DELAY],
        note: "If your child can cough, cry or speak, encourage them to cough and stay with them. AHA's text read here doesn't give the stance or fist position, so those come from American Red Cross pages.",
        basedOn: 'AHA/AAP 2025, with American Red Cross for stance, fist position and the move to CPR',
        refs: [AHA_HEARTSAVER, AHA_BLS, ARC_CHILD],
      },
      ca: {
        steps: [
          'Call your emergency number, or get someone else to. Put your phone on speaker.',
          'Get behind your child and lean them forward.',
          'Give 5 back blows, striking hard between the shoulder blades with the heel of your hand.',
          'Make a fist and hold it with your other hand. Place it on the tummy, above the navel and below the breastbone.',
          'Give 5 quick, forceful upward thrusts, each one a separate movement.',
          'Repeat 5 blows and 5 thrusts until the object is out. If your child stops responding, start CPR. See the Not breathing card.',
        ],
        dont: [NO_DEVICE_DELAY],
        note: "Uses the AHA 2025 interim text that Heart & Stroke hosts. It doesn't say where the fist goes: the place given is the one the other bodies share.",
        basedOn: 'AHA/AAP 2025, as hosted by Heart & Stroke Canada',
        refs: [AHA_HEARTSAVER, AHA_BLS, UCALGARY],
      },
      uk: {
        steps: [
          "If your child can cough, tell them to keep coughing. If they can't, call your emergency number on speaker, or get someone else to.",
          'Lean them forward and support their chest with one hand.',
          'Give up to 5 sharp blows between the shoulder blades with the heel of your other hand. Stop as soon as the object comes out.',
          'Kneel or stand behind them, arms around the upper tummy. Make a fist between the navel and end of breastbone. Grip it with your other hand.',
          'Pull sharply in and up, up to 5 times. Stop as soon as the object comes out.',
          'Keep repeating while they are awake. If they stop responding, start CPR straight away with 5 rescue breaths.',
        ],
        dont: ['Do not sweep a finger in the mouth unless you can clearly see the object.', 'Do not leave your child alone, even with a loud cough.', NO_DEVICE_DELAY],
        note: 'Every child given tummy thrusts needs checking in hospital, even if they seem well.',
        basedOn: 'Resuscitation Council UK 2025, with St John Ambulance 2025 for hand use and the hospital check',
        refs: [RCUK_BLS, SJA_CHILD_CHOKING, ref('How to stop a child from choking', 'NHS', 'https://www.nhs.uk/baby/first-aid-and-safety/first-aid/how-to-stop-a-child-from-choking/')],
      },
      eu: {
        steps: [
          "If your child can cough, tell them to keep coughing. If they can't, call your emergency number on speaker, or get someone else to.",
          'Lean them forward.',
          'Give up to 5 sharp blows between the shoulder blades. Stop as soon as the object comes out.',
          'Get behind them, arms around the upper tummy. Make a fist between the navel and the end of the breastbone. Grip it with your other hand.',
          'Pull sharply in and up, up to 5 times. Stop as soon as the object comes out.',
          'Keep repeating while they are awake. If they stop responding, start CPR straight away with 5 rescue breaths.',
        ],
        dont: ['Do not sweep a finger in the mouth unless you can clearly see the object.', NO_DEVICE_DELAY],
        note: ERC_PROXY,
        basedOn: 'ERC 2025, steps as implemented by Resuscitation Council UK 2025',
        refs: [RCUK_BLS, ERC_LAY],
      },
      anz: {
        steps: [
          "If your child can cough, encourage them to keep coughing. If they can't, or it isn't clearing, call your emergency number on speaker.",
          'Lay a small child head down across your lap. A larger child can sit or stand.',
          'Give up to 5 sharp blows in the middle of the back, between the shoulder blades. Check after each one.',
          'Give up to 5 chest thrusts on the lower half of the breastbone, hands placed as for CPR, sharper and slower. Check after each one.',
          'Repeat 5 blows and 5 thrusts while your child is awake.',
          'If they stop responding and are not breathing normally, start CPR.',
        ],
        dont: ['Do not give abdominal thrusts. ANZCOR does not recommend them.', 'Do not sweep a finger blindly in the mouth. You may remove something you can see.', NO_DEVICE_DELAY],
        basedOn: 'ANZCOR Guideline 4 (April 2021), with Guideline 12.1 (April 2026)',
        refs: [ANZ_4, ANZ_12],
      },
    },
  },
  {
    // "Raise the limb" is left out on purpose: NHS says raise it, ANZCOR says it isn't shown to help and may harm.
    // A tourniquet is left out too: RCUK backs one, ANZCOR limits it to trained rescuers, and neither gives child sizing.
    id: 'severe-bleeding',
    title: 'Severe bleeding',
    emoji: '🩸',
    tier: 1,
    signs: 'Heavy bleeding that is hard to stop, or blood soaking through a cloth or clothes.',
    callFirst: true,
    regions: {
      all: {
        steps: [
          'Press firmly on the wound with a clean, non-fluffy cloth. Keep pressing.',
          'Put your phone on speaker and call your emergency number, or get someone else to call.',
          'If blood soaks through, add more pads on top. Leave the first one in place.',
          'If something is stuck in the wound, leave it in and press on either side of it.',
          'Keep pressing until help takes over.',
        ],
        dont: ['Do not pull out anything stuck in the wound.'],
        basedOn: 'St John Ambulance 2026 and ANZCOR 9.1.1 (2021, updated 2025)',
        refs: [
          ref('Severe bleeding', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/severe-bleeding/'),
          ref('Guideline 9.1.1: Bleeding', 'ANZCOR', 'https://www.anzcor.org/home/first-aid/guideline-9-1-1-first-aid-for-management-of-bleeding'),
        ],
      },
    },
  },
  {
    // 20 minutes is the figure the notes recommend. One NHS page says 20 to 30, and the AAP gives no time.
    id: 'burns-scalds',
    title: 'Burns and scalds',
    emoji: '🔥',
    tier: 1,
    signs: 'Skin hurt by heat, hot liquid, steam, a chemical or electricity.',
    callFirst: false,
    callIf: [
      'The burn is large or deep, or covers more than a tenth of the body.',
      'It is on the face, hands, feet, genitals, bottom or a major joint.',
      'It came from electricity or a chemical, or they may have breathed in smoke or hot air.',
      'Any burn on a baby or child needs checking by a doctor or nurse, even if it looks small.',
    ],
    regions: {
      all: {
        steps: [
          'Electric burn: turn off the power first and do not touch your child until it is off. See the Electric shock card.',
          'Hold the burn under cool running water for 20 minutes. Start straight away. Cooling can still help up to 3 hours later.',
          'Take off clothes and jewellery near the burn. Leave anything that is stuck to the skin.',
          'Keep the rest of your child warm while you cool the burn. Small children get cold quickly.',
          'Then cover it loosely with cling film or a clean, dry cloth. Lay it on top, not wrapped round.',
          'For anything in the Get urgent help list, call your emergency number while you keep cooling.',
        ],
        dont: [
          'Do not use ice, creams, oils, butter, toothpaste or powder.',
          'Do not use plasters or sticky dressings.',
          'Do not burst blisters.',
          'Do not use cling film on the face or on a chemical burn.',
        ],
        basedOn: 'NHS 2026, ANZCOR 9.1.3 (2023), St John Ambulance 2025 and AAP 2023',
        refs: [
          ref('Burns and scalds', 'NHS', 'https://www.nhs.uk/conditions/burns-and-scalds/'),
          ref('Guideline 9.1.3: Burns', 'ANZCOR', 'https://www.anzcor.org/home/first-aid/guideline-9-1-3-first-aid-for-burns'),
          ref('Burns and scalds', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/burns-and-scalds/'),
          ref('Treating and preventing burns', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Treating-and-Preventing-Burns.aspx'),
        ],
      },
    },
  },
  {
    // Honey is by region. The UK card has none because no UK page read mentions it. Canada and Europe have none because no
    // source from there was read. Jam for under-1s is ANZCOR's alone.
    id: 'swallowed-battery-magnet-beads',
    title: 'Swallowed battery, magnet or beads',
    emoji: '🔋',
    tier: 1,
    signs: 'Has swallowed, or may have swallowed, a button battery, magnet or water bead. They may look completely well.',
    callFirst: true,
    regions: {
      us: {
        steps: [
          'Call your emergency number or go to the hospital emergency room now, even if your child seems fine. Do not wait for signs.',
          'Battery, over 12 months, swallowed in the last 12 hours, able to swallow: give 2 teaspoons (10 mL) of honey on the way.',
          'Repeat the honey about every 10 minutes, up to 6 doses. Stop if they vomit. Do not delay care to look for honey.',
          'Give nothing else to eat or drink.',
          'Tell staff what it was, how many and when. A battery can burn in as little as 2 hours.',
          'Several magnets can look like one on an X-ray, and water beads may not show, so say what you know or suspect.',
        ],
        dont: ['Never give honey to a baby under 12 months.', 'Do not use honey for a magnet or water beads.', 'Do not make them vomit.'],
        note: "Use shop-bought honey. It doesn't replace hospital care.",
        basedOn: 'AAP 2024 (batteries), AAP 2023 (magnets), AAP 2025 (water beads), National Capital Poison Center 2018 and CPSC',
        refs: [
          AAP_BATTERY,
          ref('Button battery guideline', 'National Capital Poison Center', 'https://www.poison.org/battery/guideline'),
          ref('Button cell and coin batteries', 'US Consumer Product Safety Commission', 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Button-Cell-Coin-Battery-Information-Center'),
          AAP_MAGNETS,
          CPSC_MAGNETS,
          AAP_BEADS,
          CPSC_BEADS,
        ],
      },
      ca: {
        steps: [
          'Call your emergency number or go to hospital now, even if your child seems fine. Do not wait for signs.',
          'Give nothing to eat or drink unless the call handler tells you to.',
          'Tell the call handler and hospital staff what it was, how many and when.',
          'Several magnets can look like one on an X-ray, and water beads may not show, so say what you know or suspect.',
        ],
        dont: ['Do not make them vomit.'],
        note: 'No Canadian source on this could be read, so these steps use what UK and US sources share.',
        basedOn: 'No Canadian guidance could be read. Wording shared by AAP 2024 and NHS 2025, with CPSC for magnets and water beads',
        refs: [AAP_BATTERY, NHS_ACCIDENT, AAP_MAGNETS, CPSC_MAGNETS, AAP_BEADS, CPSC_BEADS],
      },
      uk: {
        steps: [
          'Call your emergency number now, even if your child seems fine. Do not wait for signs.',
          'Give nothing to eat or drink unless the call handler tells you to.',
          'Tell the call handler and hospital staff what it was, how many and when.',
          'Several magnets can look like one on an X-ray, and water beads may not show, so say what you know or suspect.',
          'Battery in the nose or ear: leave it there and go to A&E or an urgent treatment centre.',
        ],
        dont: ['Do not make them sick.'],
        note: "The UK pages read don't cover water beads, so that part comes from AAP and CPSC.",
        basedOn: 'NHS 2025 (batteries and magnets), AAP 2025 and CPSC (water beads)',
        refs: [NHS_ACCIDENT, ref('Poisoning', 'NHS', 'https://www.nhs.uk/conditions/poisoning/'), AAP_BEADS, CPSC_BEADS, CPSC_MAGNETS],
      },
      eu: {
        steps: [
          'Call your emergency number or go to hospital now, even if your child seems fine. Do not wait for signs.',
          'Give nothing to eat or drink unless the call handler tells you to.',
          'Tell the call handler and hospital staff what it was, how many and when.',
          'Several magnets can look like one on an X-ray, and water beads may not show, so say what you know or suspect.',
        ],
        dont: ['Do not make them sick.'],
        note: 'No European source on this could be read, so these steps use what UK and US sources share.',
        basedOn: 'No European guidance could be read. Wording shared by NHS 2025 and AAP 2024, with CPSC for magnets and water beads',
        refs: [NHS_ACCIDENT, AAP_BATTERY, AAP_MAGNETS, CPSC_MAGNETS, AAP_BEADS, CPSC_BEADS],
      },
      anz: {
        steps: [
          'Call your emergency number or go to hospital now, even if your child seems fine. Do not wait for signs.',
          'Battery, over 1 year: give 10 mL (2 teaspoons) of honey every 10 minutes until you reach care. If you have no honey, use jam.',
          'Battery, under 1 year: give 10 mL (2 teaspoons) of jam every 10 minutes until you reach care. Never honey under 1 year.',
          'Trouble breathing or bleeding: give nothing by mouth. Otherwise, nothing except the honey or jam. Do not delay care to find them.',
          'Tell staff what it was, how many and when. Several magnets can look like one on an X-ray, and water beads may not show.',
        ],
        dont: ['Never give honey to a baby under 1 year.', 'Do not use honey or jam for a magnet or water beads.', 'Do not make them sick.'],
        note: "Kidsafe Australia's undated page says no food or drink before an X-ray. This card follows ANZCOR's newer guideline.",
        basedOn: 'ANZCOR 9.5.1 (2025, amended 2026) for batteries, AAP and CPSC for magnets and water beads',
        refs: [ANZ_POISON, ref('Button batteries', 'Kidsafe Australia', 'https://kidsafe.com.au/button-batteries/'), AAP_MAGNETS, CPSC_MAGNETS, AAP_BEADS, CPSC_BEADS],
      },
    },
  },
  {
    id: 'poison',
    title: 'Poison or medicine swallowed',
    emoji: '💊',
    tier: 1,
    signs: 'Your child has swallowed, touched or breathed in something harmful, or taken too much medicine.',
    callFirst: true,
    regions: {
      all: {
        steps: [
          'Call your emergency number. Your local poison centre can also advise.',
          'Move your child away from the poison and take away whatever is left.',
          'Keep the packaging and any vomit to show the crew or hospital staff.',
          'On the skin: take off soiled clothes without touching the poison, and rinse with running water. In the eye: see the Eye injury card.',
          'Not responding but breathing normally: roll them on their side in the recovery position.',
          'Not breathing normally: start CPR. See the Not breathing card.',
        ],
        dont: ['Do not try to make them sick.', 'Do not give food or drink unless the call handler or poison centre tells you to.', 'Do not give anything to neutralise the poison.'],
        basedOn: 'NHS 2025, St John Ambulance 2025 and ANZCOR 9.5.1 (2025, amended 2026)',
        refs: [ref('Poisoning', 'NHS', 'https://www.nhs.uk/conditions/poisoning/'), ref('Poisoning', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/poisoning/'), ANZ_POISON],
      },
    },
  },
  {
    // No doses here: the notes advise following the device and the prescriber.
    id: 'anaphylaxis',
    title: 'Allergic reaction: anaphylaxis',
    emoji: '💉',
    tier: 1,
    signs: 'Swollen tongue or throat, wheeze, trouble breathing or swallowing, faint or confused, or pale and floppy.',
    callFirst: true,
    regions: {
      all: {
        steps: [
          'If they have an adrenaline (epinephrine) auto-injector, use it now, into the outer thigh.',
          'Call your emergency number. Put your phone on speaker.',
          'Lay them down with their legs raised. If breathing is hard, sit them up slowly.',
          'If a sting is still in the skin, remove it.',
          'No better after 5 minutes: give a second auto-injector if you have one, ideally in the other leg.',
          'If they stop responding and are not breathing normally, start CPR. See the Not breathing card.',
        ],
        dont: ['Do not let them stand or walk.'],
        note: SKIN_NOTE,
        basedOn: 'Resuscitation Council UK 2025, NHS 2023, St John Ambulance 2025 and ANZCOR 9.2.7 (2019)',
        refs: [
          RCUK_FA,
          ref('Anaphylaxis', 'NHS', 'https://www.nhs.uk/conditions/anaphylaxis/'),
          ref('Anaphylaxis', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/anaphylaxis/'),
          ref('Guideline 9.2.7: Anaphylaxis', 'ANZCOR', 'https://www.anzcor.org/home/first-aid/guideline-9-2-7-first-aid-management-of-anaphylaxis'),
        ],
      },
    },
  },
  {
    id: 'trouble-breathing',
    title: 'Trouble breathing',
    emoji: '💨',
    tier: 1,
    signs: "Struggling to breathe: ribs or tummy sucking in, grunting, very fast breathing, pauses, or can't speak or cry.",
    callFirst: true,
    regions: {
      us: {
        steps: [
          'Call your emergency number. Put your phone on speaker.',
          'Tell the call handler what you see: trouble breathing or speaking.',
          'Check the skin and lips. Tell them if they look blue, purple or grey.',
          'If your child has a reliever inhaler, use it as their asthma plan says.',
          'If they stop responding and are not breathing normally, start CPR. See the Not breathing card.',
        ],
        note: SKIN_NOTE,
        basedOn: 'AAP 2026',
        refs: [AAP_EMS],
      },
      ca: {
        steps: [
          'Call your emergency number. Put your phone on speaker.',
          'Tell the call handler what you see: trouble breathing or speaking.',
          'Check the skin and lips. Tell them if they look blue, purple or grey.',
          'If your child has a reliever inhaler, use it as their asthma plan says.',
          'If they stop responding and are not breathing normally, start CPR. See the Not breathing card.',
        ],
        note: `No Canadian source on this could be read. ${SKIN_NOTE}`,
        basedOn: 'AAP 2026. No Canadian guidance could be read',
        refs: [AAP_EMS],
      },
      uk: {
        steps: [
          'Call your emergency number. Put your phone on speaker.',
          'Tell the call handler what you see: ribs or tummy sucking in, grunting, very fast breathing, or pauses in breathing.',
          'Check the skin, tongue and lips. Tell them if they look blue or grey.',
          'If your child has a reliever inhaler, use it as their asthma plan says.',
          'If they stop responding and are not breathing normally, start CPR. See the Not breathing card.',
        ],
        note: SKIN_NOTE,
        basedOn: 'NHS 2026',
        refs: [NHS_BREATHING],
      },
      eu: {
        steps: [
          'Call your emergency number. Put your phone on speaker.',
          "Tell the call handler what you see: struggling to breathe, added noises, breathing too fast or too slow, or can't speak or cry.",
          'Check the skin. Tell them if it looks mottled, blue, greyish or very pale.',
          'If your child has a reliever inhaler, use it as their asthma plan says.',
          'If they stop responding and are not breathing normally, start CPR. See the Not breathing card.',
        ],
        note: 'On darker skin, check the palms and soles for colour change.',
        basedOn: 'ERC 2025 booklet for the public',
        refs: [ERC_LAY],
      },
      anz: {
        steps: [
          'Call your emergency number. Put your phone on speaker.',
          'Asthma reliever, Australia: 4 separate puffs, 4 breaths after each one, then wait 4 minutes. Little or no better: 4 more puffs.',
          'Asthma reliever, New Zealand: 6 separate puffs, 6 breaths after each one, then wait 6 minutes. Little or no better: 6 more puffs.',
          'Keep repeating until the ambulance arrives. Use a spacer if you have one.',
          'Tell the call handler what you see: struggling to breathe, or blue or very pale skin.',
          'If they stop responding and are not breathing normally, start CPR. See the Not breathing card.',
        ],
        note: SKIN_NOTE,
        basedOn: "ANZCOR 9.2.5 (2023) and Royal Children's Hospital Melbourne 2026",
        refs: [ref('Guideline 9.2.5: Asthma', 'ANZCOR', 'https://www.anzcor.org/home/first-aid/guideline-9-2-5-first-aid-for-asthma'), RCH_FEVER],
      },
    },
  },
  {
    // No cooling steps, as the notes advise: NHS says not to cool during a febrile seizure, St John says to reduce clothing.
    id: 'seizure',
    title: 'Seizure or febrile seizure',
    emoji: '🧠',
    tier: 1,
    signs: 'Sudden stiffening or jerking and not responding, with or without a fever.',
    callFirst: true,
    callIf: [
      'It is their first seizure, or it is different from their usual pattern.',
      'It lasts longer than 5 minutes, or another one starts.',
      'They have trouble breathing, or one side of the body is affected.',
      'They do not wake within 5 minutes of it ending, or are unusually sleepy for over an hour.',
      'They have more than one in 24 hours.',
    ],
    regions: {
      all: {
        steps: [
          'Note the time it starts.',
          'Lay your child on the floor or a bed, away from anything hard or sharp. Put something soft under the head.',
          'Stay with them and let it pass. Turn them on their side when you can.',
          'When it stops: not responding but breathing normally, use the recovery position. Not breathing normally, start CPR.',
          'Give no food or drink until they are fully awake and alert.',
        ],
        dont: ['Do not hold them down.', 'Do not put anything in their mouth.', 'Do not put them in a bath during a seizure.'],
        basedOn: 'NHS 2023, AAP 2025 and ANZCOR 9.2.4 (2024)',
        refs: [
          ref('Febrile seizures', 'NHS', 'https://www.nhs.uk/conditions/febrile-seizures/'),
          ref('Febrile seizures', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Febrile-Seizures.aspx'),
          ref('Guideline 9.2.4: Seizures', 'ANZCOR', 'https://www.anzcor.org/home/first-aid/9-2-4-first-aid-management-of-a-seizure'),
        ],
      },
    },
  },
  {
    id: 'very-unwell',
    title: 'Very unwell child',
    emoji: '🌡️',
    tier: 1,
    signs: 'Floppy, hard to wake, odd breathing, a rash that does not fade, or looks very ill to you.',
    callFirst: true,
    regions: {
      all: {
        steps: [
          'Call your emergency number now. Say what you can see, and that you are worried it could be sepsis or meningitis.',
          "You don't need to be sure what it is. Your worry is reason enough, and you don't need to wait for more signs.",
          'Tell them about: stiff or floppy body, hard to wake, not feeding, weak or high-pitched cry, repeated vomiting, no wee in 12 hours.',
          'Tell them about: grunting, fast or laboured breathing, a seizure, a bulging soft spot, or a temperature below 36C.',
          'Tell them about blue, grey, pale or mottled skin. Press a clear glass on any rash, and say if the spots still show through it.',
          'If they stop responding and are not breathing normally, start CPR. See the Not breathing card.',
        ],
        dont: ['Do not drive them to hospital yourself unless the call handler tells you to.'],
        note: SKIN_NOTE,
        basedOn: 'NHS 2026, St John Ambulance 2025, ERC 2025 and ANZCOR 9.2.3 (2025)',
        refs: [
          NHS_MENINGITIS,
          NHS_SEPSIS,
          ref('Meningitis', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/meningitis/'),
          ERC_LAY,
          ref('Guideline 9.2.3: The seriously ill or injured person', 'ANZCOR', 'https://www.anzcor.org/home/first-aid/guideline-9-2-3-shock-first-aid-management-of-the-seriously-ill-or-injured-person'),
        ],
      },
    },
  },
  {
    // Split from "Very unwell child" because the route differs by region, and in the US and Australia it isn't an ambulance.
    id: 'fever-young-baby',
    title: 'Fever in a young baby',
    emoji: '🤒',
    tier: 1,
    signs: 'A temperature of 38C or higher in a baby under 3 months.',
    callFirst: false,
    callIf: [
      'A stiff neck, or a rash that does not fade when pressed with a glass.',
      'Floppy, hard to wake, or struggling to breathe.',
      'Cold hands and feet, or blue, grey or very pale skin, lips or tongue.',
    ],
    regions: {
      us: {
        steps: [
          "Under 3 months (12 weeks) with 38C (100.4F) or higher: call your baby's doctor right away.",
          "If you can't reach a doctor, get your baby seen promptly at a hospital.",
          'For anything in the Get urgent help list, call your emergency number.',
        ],
        note: SKIN_NOTE,
        basedOn: 'AAP 2022 and AAP 2026',
        refs: [AAP_FEVER, AAP_EMS],
      },
      ca: {
        steps: [
          "Under 3 months (12 weeks) with 38C or higher: call your baby's doctor right away.",
          "If you can't reach a doctor, get your baby seen promptly at a hospital.",
          'For anything in the Get urgent help list, call your emergency number.',
        ],
        note: `No Canadian source on this could be read. ${SKIN_NOTE}`,
        basedOn: 'AAP 2022 and AAP 2026. No Canadian guidance could be read',
        refs: [AAP_FEVER, AAP_EMS],
      },
      uk: {
        steps: [
          'Under 3 months with 38C or higher: get medical help now. Call your emergency number or go to A&E.',
          '3 to 6 months with 39C or higher: get medical help now in the same way.',
          'For anything in the Get urgent help list, call your emergency number. Do not wait for more signs.',
        ],
        note: `The NHS fever page sends this to its urgent advice line. This card follows the NHS sepsis and meningitis pages, which say emergency care. ${SKIN_NOTE}`,
        basedOn: 'NHS sepsis and meningitis pages 2026',
        refs: [NHS_SEPSIS, NHS_MENINGITIS, ref('Fever in children', 'NHS', 'https://www.nhs.uk/conditions/fever-in-children/')],
      },
      eu: {
        steps: [
          'Under 3 months with 38C or higher: get medical help now, from your doctor, your local urgent line or a hospital.',
          'For anything in the Get urgent help list, call your emergency number. Do not wait for more signs.',
        ],
        note: `No European source on this could be read. The 38C figure is the one NHS, AAP and Royal Children's Hospital Melbourne share. ${SKIN_NOTE}`,
        basedOn: "No European guidance could be read. Figure shared by NHS 2026, AAP 2022 and Royal Children's Hospital Melbourne 2026",
        refs: [NHS_SEPSIS, AAP_FEVER, RCH_FEVER],
      },
      anz: {
        steps: [
          'Under 1 month with 38C or higher: go to hospital.',
          '1 month to under 3 months with 38C or higher: see a doctor as soon as possible. A child health nurse can also advise.',
          'For anything in the Get urgent help list, call your emergency number.',
        ],
        note: `These are Australian sources. No New Zealand source could be read. ${SKIN_NOTE}`,
        basedOn: "Royal Children's Hospital Melbourne 2026 and Healthdirect Australia 2026",
        refs: [RCH_FEVER, ref('Fever', 'Healthdirect Australia', 'https://www.healthdirect.gov.au/fever')],
      },
    },
  },
  {
    id: 'head-injury',
    title: 'Head injury',
    emoji: '🤕',
    tier: 1,
    signs: 'A bump or blow to the head, from a fall, a knock or a crash.',
    callFirst: false,
    callIf: [
      "Knocked out, even briefly, can't stay awake, or has a seizure.",
      'A fall of over 1 metre or 5 stairs, or a high-speed injury.',
      'Under 1 year with a bruise, swelling or large cut on the head.',
      'Sight or hearing trouble, clear fluid or blood from ears or nose, bruising behind ears, a dent or open wound.',
      'Weakness, trouble speaking or walking, worse headache, repeated vomiting, neck pain or a change in behaviour.',
    ],
    regions: {
      all: {
        steps: [
          'Stay with your child and watch them closely.',
          'For anything in the Get urgent help list, call your emergency number or go to hospital.',
          'If their neck hurts, keep them still while you call.',
          "Let them sleep if they are tired. They don't need to stay awake. If you can't wake them, call your emergency number.",
          'Keep an adult with them for the next 24 hours.',
        ],
        basedOn: 'NHS 2025, AAP 2024 and ANZCOR 9.1.4 (2025)',
        refs: [
          ref('Head injury and concussion', 'NHS', 'https://www.nhs.uk/conditions/head-injury-and-concussion/'),
          ref('Head injury', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Head-Injury.aspx'),
          ref('Guideline 9.1.4: Head injury', 'ANZCOR', 'https://www.anzcor.org/home/first-aid/guideline-9-1-4-head-injury'),
        ],
      },
    },
  },
  {
    id: 'drowning',
    title: 'Drowning',
    emoji: '🌊',
    tier: 1,
    signs: 'Your child has been under water or pulled from water, even if they now seem well.',
    callFirst: true,
    callIf: ['Anyone who nearly drowned needs a medical check, even if they seem well.'],
    regions: {
      us: {
        steps: [
          'Get your child out of the water if you can do it safely.',
          'Call your emergency number. Put your phone on speaker and follow the call handler.',
          'Not responding and not breathing normally: start CPR with rescue breaths and chest presses. See the Not breathing card.',
          'Give CPR, including breaths, before you use a defibrillator. Do not delay CPR to fetch one.',
          "If you can't give breaths, give chest presses until help arrives.",
        ],
        note: AHA_DROWNING_NOTE,
        basedOn: 'AHA/AAP 2025',
        refs: [AHA_HEARTSAVER],
      },
      ca: {
        steps: [
          'Get your child out of the water if you can do it safely.',
          'Call your emergency number. Put your phone on speaker and follow the call handler.',
          'Not responding and not breathing normally: start CPR with rescue breaths and chest presses. See the Not breathing card.',
          'Give CPR, including breaths, before you use a defibrillator. Do not delay CPR to fetch one.',
          "If you can't give breaths, give chest presses until help arrives.",
        ],
        note: AHA_DROWNING_NOTE,
        basedOn: 'AHA/AAP 2025, as hosted by Heart & Stroke Canada',
        refs: [AHA_HEARTSAVER],
      },
      uk: {
        steps: [
          'Get your child out of the water if you can do it safely.',
          'Call your emergency number. Put your phone on speaker and follow the call handler.',
          'Not responding and not breathing normally: open the airway and give 5 rescue breaths.',
          'Then give 30 chest presses and 2 breaths, and keep repeating. See the Not breathing card.',
        ],
        basedOn: 'St John Ambulance 2025',
        refs: [ref('Drowning', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/drowning/')],
      },
      eu: {
        steps: [
          'Shout for help. Get someone to call your emergency number, or call on speaker yourself, and follow the call handler.',
          'Throw something that floats, or reach out with a long object.',
          'Once your child is out, if they are not responding and not breathing, give 5 rescue breaths straight away.',
          'Then start CPR with chest presses. See the Not breathing card.',
          'When a defibrillator is here, dry the chest, attach it and follow its instructions.',
        ],
        dont: ['Do not go into deep water unless you are trained in water rescue.'],
        basedOn: 'ERC 2025 booklet for the public',
        refs: [ERC_LAY],
      },
      anz: {
        steps: [
          'Get your child out as soon as you can without putting yourself in danger. Throw something that floats first.',
          'Call your emergency number, even if your child seems recovered. Put your phone on speaker and follow the call handler.',
          'Not responding and not breathing normally: start CPR with rescue breaths. See the Not breathing card.',
          "Give the breaths. Presses alone are strongly discouraged here, unless you can't give breaths.",
          'Vomiting is common. Turn them to let it drain, then roll them back and carry on if they are not breathing normally.',
        ],
        dont: ['Do not try to drain water from the lungs.', 'Do not press on the stomach.'],
        basedOn: 'ANZCOR 9.3.2 (November 2021)',
        refs: [ref('Guideline 9.3.2: Resuscitation in drowning', 'ANZCOR', 'https://www.anzcor.org/home/first-aid/guideline-9-3-2-resuscitation-in-drowning')],
      },
    },
  },
  {
    // Cold-water immersion (RCUK; ANZCOR for over-5s) is left out: bodies differ by age, and AAP says cool, not cold.
    // Drinking water (NHS) is left out too: no source read says how it applies to a young baby.
    id: 'heatstroke-hot-car',
    title: 'Heatstroke or hot car',
    emoji: '☀️',
    tier: 1,
    signs: 'Very hot after heat or a hot car, with hot skin, confusion, drowsiness, a seizure or not responding.',
    callFirst: true,
    regions: {
      all: {
        steps: [
          'Call your emergency number. Put your phone on speaker.',
          'Hot car: get the child out now if they are not responding or seem in pain. If not, stay until help comes and find the driver.',
          'Move them somewhere cool and take off extra clothes.',
          'Cool the skin with cool water, by spraying or sponging, and fan them. Keep going until help takes over.',
          'If they stop responding and are not breathing normally, start CPR. See the Not breathing card.',
        ],
        dont: ['Do not use an ice bath on a young child.'],
        basedOn: 'NHS 2026, AAP 2025 and 2026, and ANZCOR 9.3.4 (2020)',
        refs: [
          ref('Heat exhaustion and heatstroke', 'NHS', 'https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/'),
          ref('Hot cars', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Prevent-Child-Deaths-in-Hot-Cars.aspx'),
          ref('Extreme temperature exposure', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/extreme-temperature-exposure.aspx'),
          ref('Guideline 9.3.4: Heat-induced illness', 'ANZCOR', 'https://www.anzcor.org/home/first-aid/guideline-9-3-4-heat-induced-illness-hyperthermia'),
        ],
      },
    },
  },

  // ---------- Tier 2: reachable under "More" ----------
  {
    id: 'broken-bone',
    title: 'Broken bone',
    emoji: '🦴',
    tier: 2,
    signs: "Pain, swelling or an odd shape after a fall or knock, or they can't use an arm or leg.",
    callFirst: false,
    callIf: ['Bone has come through the skin.', 'A leg looks broken.', 'The neck, back or pelvis may be hurt.', "They can't be moved without pain."],
    regions: {
      all: {
        steps: [
          'Keep the hurt part still. Support it above and below the injury.',
          'Use a simple sling or splint from what you have if you need to move them.',
          'Give nothing to eat or drink until a doctor has seen them.',
          'Take them to hospital or urgent care. For anything in the Get urgent help list, call your emergency number instead.',
        ],
        dont: ['Do not move them if the neck, back or pelvis may be hurt.', 'Do not push a bone back in.', 'Do not use ice on a baby or toddler.', 'Do not raise the legs if a leg, hip or pelvis is hurt.'],
        basedOn: 'St John Ambulance 2025, AAP 2026 and NHS 2025',
        refs: [
          ref('Fractures and broken bones', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/fractures-and-broken-bones/'),
          ref('Children and broken bones', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Children-And-Broken-Bones.aspx'),
          NHS_ACCIDENT,
        ],
      },
    },
  },
  {
    id: 'nosebleed',
    title: 'Nosebleed',
    emoji: '👃',
    tier: 2,
    signs: 'Bleeding from the nose, with or without a knock.',
    callFirst: false,
    callIf: [
      'Still bleeding after pinching twice: see a doctor or go to hospital.',
      'Very heavy, or going for over 30 minutes: call your emergency number.',
      'It started after a blow to the head: go to hospital.',
    ],
    regions: {
      all: {
        steps: [
          'Sit your child down, leaning slightly forward.',
          'Pinch the soft part of the nose, right above the nostrils. Have them breathe through their mouth.',
          'Keep pinching for 10 minutes without letting go to check.',
          'If it is still bleeding, pinch for another 10 minutes.',
        ],
        dont: ['Do not lean them back.', 'Do not put tissue in the nose.'],
        basedOn: 'St John Ambulance 2025, NHS 2023 and AAP 2019',
        refs: [
          ref('Nosebleed', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/nosebleed/'),
          ref('Nosebleed', 'NHS', 'https://www.nhs.uk/conditions/nosebleed/'),
          ref('How to stop a nosebleed', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/How-to-Stop-a-Nosebleed.aspx'),
        ],
      },
    },
  },
  {
    id: 'electric-shock',
    title: 'Electric shock',
    emoji: '⚡',
    tier: 2,
    signs: 'Contact with a socket, cord, appliance or other electric source.',
    callFirst: true,
    regions: {
      all: {
        steps: [
          'Turn off the power first.',
          "If you can't, push your child clear with a dry wooden or plastic object.",
          'Call your emergency number. Put your phone on speaker.',
          'Not responding and not breathing normally: start CPR. See the Not breathing card.',
          'Move your child as little as possible.',
          'Get every shock checked by a doctor, even if your child seems fine. A mouth burn from a cord can bleed hours or days later.',
        ],
        dont: ['Do not touch your child with bare hands until the power is off.'],
        basedOn: 'NHS 2025 and AAP 2019',
        refs: [NHS_ACCIDENT, ref('Electric shock', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Electric-Shock.aspx')],
      },
    },
  },
  {
    id: 'dog-bite',
    title: 'Dog or animal bite',
    emoji: '🐕',
    tier: 2,
    signs: 'A dog or other animal has bitten your child.',
    callFirst: false,
    callIf: [
      'It is large or deep, or will not stop bleeding: go to hospital.',
      'It is on the hand, foot, face or head.',
      'There is dirt or something else in the wound, or signs of infection.',
      'Their tetanus jabs may not be up to date.',
      'It happened somewhere rabies is a risk.',
    ],
    regions: {
      all: {
        steps: [
          'Wash the bite with soap and warm water.',
          'If it is bleeding heavily, press on it with a clean cloth.',
          'Dry it and cover it with a clean dressing.',
          'Get prompt medical care for any bite that breaks the skin.',
        ],
        dont: ['Do not give aspirin to anyone under 16.'],
        basedOn: 'NHS 2025, St John Ambulance 2025 and AAP 2026',
        refs: [
          ref('Animal and human bites', 'NHS', 'https://www.nhs.uk/conditions/animal-and-human-bites/'),
          ref('Human and animal bites', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/human-and-animal-bites/'),
          AAP_EMS,
        ],
      },
    },
  },
  {
    // AAP says rinse in milk or saline, never tap water; IADT says rinse briefly in water. Milk is used because it fits AAP
    // and nothing read speaks against it. The time is given as the range across the two.
    id: 'tooth-knocked-out',
    title: 'Tooth knocked out',
    emoji: '🦷',
    tier: 2,
    signs: 'A whole tooth has come out after a fall or knock.',
    callFirst: false,
    callIf: ['A permanent tooth is knocked out: go straight to an emergency dentist or hospital.', "You aren't sure if it is a baby tooth: keep it in milk and go straight to a dentist."],
    regions: {
      all: {
        steps: [
          'Baby tooth: do not put it back.',
          'Permanent tooth: hold it by the crown, the part you see in a smile. Do not touch the root.',
          'If it is dirty, rinse it briefly in milk.',
          'Put it back in the socket if that is comfortable, and have your child bite gently on gauze.',
          "Can't put it back: keep it in milk, saline or saliva. Never in tap water.",
          'Go to a dentist straight away. A permanent tooth does best back in within 15 to 20 minutes, and may still be saved within the first hour.',
        ],
        basedOn: 'AAP 2026 and International Association of Dental Traumatology',
        refs: [
          ref('First aid for a knocked-out permanent tooth', 'American Academy of Pediatrics', 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/First-Aid-for-a-Knocked-Out-Permanent-Tooth.aspx'),
          ref('Knocked-out tooth', 'International Association of Dental Traumatology', 'https://iadt-dentaltrauma.org/knocked-out/'),
        ],
      },
    },
  },
  {
    // NHS and St John say 20 minutes for a chemical, ANZCOR says 15 for a poison. 20 covers both.
    id: 'eye-injury',
    title: 'Eye injury',
    emoji: '👁️',
    tier: 2,
    signs: 'A chemical in the eye, something stuck in it, or a hard knock to it.',
    callFirst: false,
    callIf: [
      'A strong chemical, such as bleach or oven cleaner, is in the eye.',
      'Something has pierced the eye, or hit it at high speed.',
      'Any change in sight, severe pain, or blood or pus from the eye.',
      "They can't move the eye or keep it open, or have a headache, light sensitivity or are being sick.",
    ],
    regions: {
      all: {
        steps: [
          'Chemical in the eye: run lots of clean water over it for 20 minutes. Not hot water. Hold the eye open while you rinse.',
          'Keep rinsing while you wait for help. Take the product container with you.',
          'Something stuck in the eye: leave it there. Cover the eye with a pad, without pressing on it, and get help.',
          'For anything in the Get urgent help list, call your emergency number or go to hospital.',
        ],
        dont: ['Do not let them rub the eye.', 'Do not try to remove anything stuck in the eye.'],
        basedOn: 'NHS 2026 and St John Ambulance 2025',
        refs: [ref('Eye injuries', 'NHS', 'https://www.nhs.uk/conditions/eye-injuries/'), ref('Eye injury', 'St John Ambulance', 'https://www.sja.org.uk/first-aid-advice/eye-injury/')],
      },
    },
  },
  {
    id: 'stings',
    title: 'Bee and wasp stings',
    emoji: '🐝',
    tier: 2,
    signs: 'A bee, wasp or other insect sting, with pain or swelling where it stung.',
    callFirst: false,
    callIf: ['Swelling of the lips, mouth, throat or tongue.', 'Trouble breathing, or your child goes limp.', 'Several stings to the face or tongue.', 'They have had anaphylaxis before.'],
    regions: {
      all: {
        steps: [
          'If the sting is still in the skin, brush or scrape it off sideways.',
          'Wash the area.',
          'Hold a cold compress on it for 20 minutes.',
          'For anything in the Get urgent help list, call your emergency number and see the Allergic reaction card.',
        ],
        dont: ['Do not use tweezers or squeeze the sting.'],
        basedOn: 'NHS 2023 and ANZCOR 9.4.3 (2021)',
        refs: [
          ref('Insect bites and stings', 'NHS', 'https://www.nhs.uk/conditions/insect-bites-and-stings/'),
          ref('Guideline 9.4.3: Tick bites and stings', 'ANZCOR', 'https://www.anzcor.org/home/first-aid/guideline-9-4-3-envenomation-from-tick-bites-and-bee-wasp-and-ant-stings'),
        ],
      },
    },
  },
  {
    id: 'dehydration',
    title: 'Dehydration',
    emoji: '💧',
    tier: 2,
    signs: 'Sunken eyes or soft spot, few or no tears, fewer wet nappies, unusually drowsy or irritable.',
    callFirst: false,
    callIf: [
      'Call your emergency number for blue, grey, pale or blotchy skin, lips or tongue, or cold skin.',
      'Call your emergency number for trouble breathing, confusion, or if they are hard to wake.',
      'Call your emergency number for sunken eyes with no tears and no wee in a very drowsy child.',
    ],
    regions: {
      all: {
        steps: [
          'Phone your doctor or local health advice line now, and say how many wet nappies there have been.',
          'Keep breastfeeding or giving formula, in small amounts more often than usual.',
          'On formula or solid food, from 6 months: give small sips of extra water too. Under 6 months, ask your doctor before giving any water.',
          'Give regular small sips of rehydration solution. Ask a pharmacist which one.',
          'Give small children their usual food.',
        ],
        dont: ['Do not make formula weaker.', 'Do not give young children fruit juice or fizzy drinks.'],
        note: SKIN_NOTE,
        basedOn: 'NHS 2026 and AAP 2026',
        refs: [ref('Dehydration', 'NHS', 'https://www.nhs.uk/conditions/dehydration/'), AAP_EMS],
      },
    },
  },
];

localize('firstaid', AID_CARDS);
