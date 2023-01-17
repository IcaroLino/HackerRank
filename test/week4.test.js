import {
  describe, expect, it,
} from '@jest/globals';
import rotateLeft from '../src/week4/leftRotation';
import pickingNumbers from '../src/week4/pickingNumbers';

describe('pickingNumbers Test', () => {
  it('Must return the length of the longest subarray that meets the criterion', () => {
    const returnedValue = pickingNumbers([4, 6, 5, 3, 3, 1]);
    const expectedValue = 3;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('leftRotation Test', () => {
  it('Must return the rotated array', () => {
    const returnedValue = rotateLeft(4, [1, 2, 3, 4, 5]);
    const expectedValue = [5, 1, 2, 3, 4];

    expect(returnedValue).toBe(expectedValue);
  });
});
