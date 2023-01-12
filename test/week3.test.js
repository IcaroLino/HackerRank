import {
  describe, expect, it,
} from '@jest/globals';
import twoArrays from '../src/week3/permutingTwoArrays';

describe('permutingTwoArrays Test', () => {
  it('Must return YES', () => {
    const returnedValue = twoArrays(10, [2, 1, 3], [7, 8, 9]);
    const expectedValue = 'YES';

    expect(returnedValue).toBe(expectedValue);
  });

  it('Must return NO', () => {
    const returnedValue = twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]);
    const expectedValue = 'NO';

    expect(returnedValue).toBe(expectedValue);
  });
});
