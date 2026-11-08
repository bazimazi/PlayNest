import { describe, expect, it } from 'vitest';
import { validateActivities } from '../validate';
import { toddlerActivities } from './toddler';

describe('toddler activities', () => {
  it('pass content validation', () => {
    expect(validateActivities(toddlerActivities)).toEqual([]);
  });
});
