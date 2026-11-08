import { describe, expect, it } from 'vitest';
import { ADAPTATIONS } from './adaptations';
import { CELEBRATIONS } from './celebrations';
import { COACH } from './coach';
import { CRYING, PARENT_SUPPORT } from './crying';
import { EMERGENCY } from './emergency';
import { AID_CARDS } from './firstaid';
import { FIRSTS } from './firsts';
import { HELPLINES } from './helplines';
import { ROUTINE_TEMPLATES } from './routines';
import { SONGS } from './songs';
import { STAGES } from './stages';
import { STORIES } from './stories';
import { TALK } from './talk';
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
  it('stories', () => expect(validateStories(STORIES)).toEqual([]));
  it('songs', () => expect(validateSongs(SONGS)).toEqual([]));
  it('talk', () => expect(validateTalk(TALK)).toEqual([]));
  it('stages', () => expect(validateStages(STAGES)).toEqual([]));
  it('routines', () => expect(validateRoutines(ROUTINE_TEMPLATES)).toEqual([]));
  it('firsts', () => expect(validateFirsts(FIRSTS)).toEqual([]));
  it('celebrations', () => expect(validateCelebrations(CELEBRATIONS)).toEqual([]));
  it('adaptations', () => expect(validateAdaptations(ADAPTATIONS)).toEqual([]));
});
