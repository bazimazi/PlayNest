import { describe, expect, it } from 'vitest';
import { validateActivities } from '../validate';
import { schoolActivities } from './school';

describe('school activities', () => {
  it('pass content validation', () => {
    expect(validateActivities(schoolActivities)).toEqual([]);
  });
});
