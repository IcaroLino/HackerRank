import {
  describe, expect, it, jest,
} from '@jest/globals';
import gridChallenge from '../src/week5/gridChallenge';
import maxMin from '../src/week5/maxMin';
import missingNumbers from '../src/week5/missingNumbers';
import minimumNumber from '../src/week5/strongPassword';
import countSort from '../src/week5/theFullCountingSort';

describe('maxMin Test', () => {
  it('Must return the minimum possible unfairness', () => {
    const returnedValue = maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]);
    const expectedValue = 3;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('strongPassword Test', () => {
  it('Test Case 1 - Must return the minimum number of characters to add', () => {
    const returnedValue = minimumNumber(3, 'ab1');
    const expectedValue = 3;

    expect(returnedValue).toBe(expectedValue);
  });

  it('Test Case 2 - Must return the minimum number of characters to add', () => {
    const returnedValue = minimumNumber(4, 'R$U$');
    const expectedValue = 2;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('missingNumbers Test', () => {
  it('Must return an array of integers', () => {
    const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206, 200];
    const brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
    const returnedValue = missingNumbers(arr, brr);
    const expectedValue = [204, 205, 206];

    expect(returnedValue).toEqual(expectedValue);
  });
});

describe('theFullCountingSort Test', () => {
  it('Print the finished array with each element separated by a single space', () => {
    const logSpy = jest.spyOn(console, 'log');
    const expectedValue = '- - f e b c - a - -';
    const matrix = [
      ['1', 'e'], ['2', 'a'],
      ['1', 'b'], ['3', 'a'],
      ['4', 'f'], ['1', 'f'],
      ['2', 'a'], ['1', 'e'],
      ['1', 'b'], ['1', 'c'],
    ];

    countSort(matrix);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith(expectedValue);
  });
});

describe('gridChallenge Test', () => {
  it('Must return YES', () => {
    const returnedValue = gridChallenge(['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv']);
    const expectedValue = 'YES';

    expect(returnedValue).toEqual(expectedValue);
  });

  it('Must return NO', () => {
    const returnedValue = gridChallenge(['mpxz', 'abcd', 'wlmf']);
    const expectedValue = 'NO';

    expect(returnedValue).toEqual(expectedValue);
  });
});
