import {
  describe, expect, it,
} from '@jest/globals';
import caesarCipher from '../src/week4/caesarCipher';
import closestNumbers from '../src/week4/closestNumbers';
import rotateLeft from '../src/week4/leftRotation';
import minimumAbsoluteDifference from '../src/week4/minimumAbsoluteDifferenceInAnArray';
import kangaroo from '../src/week4/numberLineJumps';
import pickingNumbers from '../src/week4/pickingNumbers';
import separateNumbers from '../src/week4/separateTheNumbers';
import towerBreakers from '../src/week4/towerBreakers';

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

  it('Must return YES', () => {
    const returnedValue = kangaroo(4, 2, 0, 3);
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

describe('minimumAbsoluteDifferenceInAnArray Test', () => {
  it('Must return the minimum absolute difference found', () => {
    const returnedValue = minimumAbsoluteDifference([3, -7, 0]);
    const expectedValue = 3;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('caesarCipher Test', () => {
  it('Must return the encrypted string', () => {
    const returnedValue = caesarCipher('middle-Outz', 2);
    const expectedValue = 'okffng-Qwvb';

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('towerBreakers Test', () => {
  it('Test Case 1 - Must return the winner of the game', () => {
    const returnedValue = towerBreakers(2, 2);
    const expectedValue = 2;

    expect(returnedValue).toBe(expectedValue);
  });

  it('Test Case 2 - Must return the winner of the game', () => {
    const returnedValue = towerBreakers(1, 4);
    const expectedValue = 1;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('separateTheNumbers Test', () => {
  it('Must return YES or NO', () => {
    const testCases = ['1234', '91011', '99100', '101103', '010203', '13', '1'];
    const returnedValue = [];

    testCases.forEach((stringTest) => {
      returnedValue.push(separateNumbers(stringTest));
    });

    const expectedValue = ['YES 1', 'YES 9', 'YES 99', 'NO', 'NO', 'NO', 'NO'];

    expect(returnedValue).toEqual(expectedValue);
  });
});
