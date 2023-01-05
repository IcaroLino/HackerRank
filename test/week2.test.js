import {
  describe, expect, it,
} from '@jest/globals';
import countingValleys from '../src/week2/countingValleys';

describe('countingValleys Test', () => {
  it('Must return the amount of valleys', () => {
    const returnedValue = countingValleys(12, 'DDUUDDUDUUUD');
    const expectedValue = 2;

    expect(returnedValue).toBe(expectedValue);
  });
});
