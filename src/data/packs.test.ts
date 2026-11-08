import { describe, expect, it } from 'vitest';
import { ADAPTATIONS } from './adaptations';
import { EVERY_CELEBRATION } from './celebrations';
import { COACH } from './coach';
import { CRYING, PARENT_SUPPORT } from './crying';
import { EMERGENCY } from './emergency';
import { AID_CARDS } from './firstaid';
import { FIRSTS } from './firsts';
import { HELPLINES } from './helplines';
import { ROUTINE_TEMPLATES } from './routines';
import { EVERY_SONG } from './songs';
import { STAGES } from './stages';
import { EVERY_STORY } from './stories';
import { EVERY_TALK } from './talk';
import {
  validateAdaptations,
  validateAid,
  validateCelebrations,
  validateCoach,
  validateCrying,
  validateEmergency,
  validateFirsts,
  validateHelplines,
  validateRoutines,
  validateSongs,
  validateStages,
  validateStories,
  validateSupport,
  validateTalk,
} from './validatePacks';

describe('content packs', () => {
  it('coach', () => expect(validateCoach(COACH)).toEqual([]));
  it('firstaid', () => expect(validateAid(AID_CARDS)).toEqual([]));
  it('emergency', () => expect(validateEmergency(EMERGENCY)).toEqual([]));
  it('helplines', () => expect(validateHelplines(HELPLINES)).toEqual([]));
  it('crying', () => expect(validateCrying(CRYING)).toEqual([]));
  it('support', () => expect(validateSupport(PARENT_SUPPORT)).toEqual([]));
  it('stories', () => expect(validateStories([...EVERY_STORY])).toEqual([]));
  it('songs', () => expect(validateSongs([...EVERY_SONG])).toEqual([]));
  it('talk', () => expect(validateTalk([...EVERY_TALK])).toEqual([]));
  it('stages', () => expect(validateStages(STAGES)).toEqual([]));
  it('routines', () => expect(validateRoutines(ROUTINE_TEMPLATES)).toEqual([]));
  it('firsts', () => expect(validateFirsts(FIRSTS)).toEqual([]));
  it('celebrations', () => expect(validateCelebrations([...EVERY_CELEBRATION])).toEqual([]));
  it('adaptations', () => expect(validateAdaptations(ADAPTATIONS)).toEqual([]));
});
