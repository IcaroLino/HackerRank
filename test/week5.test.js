import {
  describe, expect, it, jest,
} from '@jest/globals';
import dynamicArray from '../src/week5/dynamicArray';
import fibonacciModified from '../src/week5/fibonacciModified';
import gridChallenge from '../src/week5/gridChallenge';
import maxMin from '../src/week5/maxMin';
import missingNumbers from '../src/week5/missingNumbers';
import sansaXor from '../src/week5/sansaAndXOR';
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

    expect(returnedValue).toBe(expectedValue);
  });

  it('Must return NO', () => {
    const returnedValue = gridChallenge(['mpxz', 'abcd', 'wlmf']);
    const expectedValue = 'NO';

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('sansaAndXOR Test', () => {
  it('Test Case 1 - Must return the result of calculations', () => {
    const returnedValue = sansaXor([98, 74, 12]);
    const expectedValue = 110;

    expect(returnedValue).toBe(expectedValue);
  });

  it('Test Case 2 - Must return the result of calculations', () => {
    const returnedValue = sansaXor([4, 5, 7, 5]);
    const expectedValue = 0;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('dynamicArray Test', () => {
  it('Must return the results of each type 2 query in the order they are presented', () => {
    const returnedValue = dynamicArray(2, [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]]);
    const expectedValue = [7, 3];

    expect(returnedValue).toEqual(expectedValue);
  });
});

describe('Mock Test', () => {
  it('Must return the n(th) number in the sequence', () => {
    const returnedValue = fibonacciModified(0, 1, 10);
    const expectedValue = 84266613096281243382112n;

    expect(returnedValue).toBe(expectedValue);
  });
});
