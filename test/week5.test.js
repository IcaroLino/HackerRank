import {
  describe, expect, it,
} from '@jest/globals';
import maxMin from '../src/week5/maxMin';
import missingNumbers from '../src/week5/missingNumbers';
import minimumNumber from '../src/week5/strongPassword';

describe('maxMin Test', () => {
  it('Must return the minimum possible unfairness', () => {
    const returnedValue = maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]);
    const expectedValue = 3;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('strongPassword Test', () => {
  it('Must return the minimum number of characters to add', () => {
    const returnedValue = minimumNumber(3, 'Ab1');
    const expectedValue = 3;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('missingNumbers Test', () => {
  it('Must return an array of integers', () => {
    const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
    const brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
    const returnedValue = missingNumbers(arr, brr);
    const expectedValue = [204, 205, 206];

    expect(returnedValue).toEqual(expectedValue);
  });
});
