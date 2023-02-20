import {
  describe, expect, it,
} from '@jest/globals';
import counterGame from '../src/week6/counterGame';
import formingMagicSquare from '../src/week6/formingAMagicSquare';
import gamingArray from '../src/week6/gamingArray1';
import superDigit from '../src/week6/recursiveDigitSum';
import balancedSums from '../src/week6/sherlockAndArray';
import sumXor from '../src/week6/sumVsXOR';

describe('sherlockAndArray Test', () => {
  it('Must return NO', () => {
    const returnedValue = balancedSums([1, 2, 3]);
    const expectedValue = 'NO';

    expect(returnedValue).toBe(expectedValue);
  });

  it('Must return YES', () => {
    const returnedValue = balancedSums([1, 2, 3, 3]);
    const expectedValue = 'YES';

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('gamingArray1 Test', () => {
  it('Must return ANDY', () => {
    const returnedValue = gamingArray([5, 2, 6, 3, 4]);
    const expectedValue = 'ANDY';

    expect(returnedValue).toBe(expectedValue);
  });

  it('Must return BOB', () => {
    const returnedValue = gamingArray([3, 1]);
    const expectedValue = 'BOB';

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('recursiveDigitSum Test', () => {
  it('Must return the super digit of n repeated k times', () => {
    const returnedValue = superDigit(9875, 4);
    const expectedValue = 8;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('counterGame Test', () => {
  it('Must return Richard', () => {
    const returnedValue = counterGame(6);
    const expectedValue = 'Richard';

    expect(returnedValue).toBe(expectedValue);
  });

  it('Must return Louise', () => {
    const returnedValue = counterGame(132);
    const expectedValue = 'Louise';

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('sumVsXor Test', () => {
  it('Test Case 1 - Must return the number of values found', () => {
    const returnedValue = sumXor(10);
    const expectedValue = 4;

    expect(returnedValue).toBe(expectedValue);
  });

  it('Test Case 2 - Must return the number of values found', () => {
    const returnedValue = sumXor(0);
    const expectedValue = 1;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('formingAMagicSquare Test', () => {
  it('Must return the minimal total cost of converting the input square to a magic square', () => {
    const returnedValue = formingMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]]);
    const expectedValue = 4;

    expect(returnedValue).toBe(expectedValue);
  });
});
