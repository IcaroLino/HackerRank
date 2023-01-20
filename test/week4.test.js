import {
  describe, expect, it,
} from '@jest/globals';
import closestNumbers from '../src/week4/closestNumbers';
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
    const returnedValue = kangaroo(0, 2, 5, 3);
    const expectedValue = 'NO';

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('closestNumbers Test', () => {
  it('Must return an array of integers as described', () => {
    const arr = [-20, -3916237, -357920, -3620601, 7374819,
      -7330761, 30, 6246457, -6461594, 266854, -520, -470];
    const returnedValue = closestNumbers(arr);
    const expectedValue = [-520, -470, -20, 30];

    expect(returnedValue).toEqual(expectedValue);
  });
});
