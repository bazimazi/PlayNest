import { describe, expect, it } from 'vitest';
import { validateActivities } from '../validate';
import { preschoolActivities } from './preschool';

describe('preschool activities', () => {
  it('pass content validation', () => {
    expect(validateActivities(preschoolActivities)).toEqual([]);
  });
});
