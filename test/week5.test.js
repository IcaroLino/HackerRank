import {
  describe, expect, it,
} from '@jest/globals';
import maxMin from '../src/week5/maxMin';

describe('maxMin Test', () => {
  it('Must return the minimum possible unfairness', () => {
    const returnedValue = maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]);
    const expectedValue = 3;

    expect(returnedValue).toBe(expectedValue);
  });
});
