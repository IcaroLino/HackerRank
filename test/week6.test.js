import {
  describe, expect, it,
} from '@jest/globals';
import balancedSums from '../src/week6/sherlockAndArray';

describe('sherlockAndArray Test', () => {
  it('Must return NO', () => {
    const returnedValue = balancedSums([1, 2, 3]);
    const expectedValue = 'NO';

    expect(returnedValue).toBe(expectedValue);
  });

  it('Must return YES', () => {
    const returnedValue = balancedSums([1, 2, 3, 3]);
    const expectedValue = 'YES';

    expect(returnedValue).toBe(expectedValue);
  });
});
