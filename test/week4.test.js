import {
  describe, expect, it,
} from '@jest/globals';
import rotateLeft from '../src/week4/leftRotation';
import kangaroo from '../src/week4/numberLineJumps';
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

    expect(returnedValue).toEqual(expectedValue);
  });
});

describe('numberLineJumps Test', () => {
  it('Must return YES', () => {
    const returnedValue = kangaroo(0, 3, 4, 2);
    const expectedValue = 'YES';

    expect(returnedValue).toBe(expectedValue);
  });

  it('Must return NO', () => {
    const returnedValue = rotateLeft(0, 2, 5, 3);
    const expectedValue = 'NO';

    expect(returnedValue).toBe(expectedValue);
  });
});
