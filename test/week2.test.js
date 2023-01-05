import {
  describe, expect, it, jest,
} from '@jest/globals';
import countingValleys from '../src/week2/countingValleys';

describe('countingValleys Test', () => {
  it('', () => {
    const returnedValue = countingValleys(8, 'UDDDUDUU');
    const expectedValue = 1;

    expect(returnedValue).toBe(expectedValue);
  });
});
