import { describe, expect, it } from 'vitest';
import { validateActivities } from '../validate';
import { infantActivities } from './infant';

describe('infant activities', () => {
  it('pass content validation', () => {
    expect(validateActivities(infantActivities)).toEqual([]);
  });
});
