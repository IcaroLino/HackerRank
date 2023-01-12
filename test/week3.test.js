import {
  describe, expect, it,
} from '@jest/globals';
import twoArrays from '../src/week3/permutingTwoArrays';
import birthday from '../src/week3/subarrayDivision2';

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

describe('subarrayDivision 2 Test', () => {
  it('Must return the numbers of ways the bar can be divided', () => {
    const returnedValue = birthday([1, 2, 1, 3, 2], 3, 2);
    const expectedValue = 2;

    expect(returnedValue).toBe(expectedValue);
  });
});
