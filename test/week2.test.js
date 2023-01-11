import {
  describe, expect, it,
} from '@jest/globals';
import lonelyInteger from '../src/week2/lonelyInteger';
import gradingStudents from '../src/week2/gradingStudents';
import flippingBits from '../src/week2/flippingBits';
import countingValleys from '../src/week2/countingValleys';
import pangrams from '../src/week2/pangrams';
import pangramsWR from '../src/week2/pangramsWithoutRegex';
import marsExploration from '../src/week2/marsExploration';
import flippingMatrix from '../src/week2/flippingMatrix';

describe('lonelyInteger Test', () => {
  it('Must return unique element', () => {
    const returnedValue = lonelyInteger([1, 4, 3, 2, 3, 2, 1]);
    const expectedValue = 4;

    expect(returnedValue).toContain(expectedValue);
  });
});

describe('gradingStudents Test', () => {
  it('Must return all grades', () => {
    const returnedValue = gradingStudents([73, 67, 38, 33]);
    const expectedValue = [75, 67, 40, 33];

    expect(returnedValue).toEqual(expectedValue);
  });
});

describe('flippingBits Test', () => {
  it('Must return a unsigned flipped integer', () => {
    const returnedValue = flippingBits(2147483647);
    const expectedValue = 2147483648;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('countingValleys Test', () => {
  it('Must return the amount of valleys', () => {
    const returnedValue = countingValleys(12, 'DDUUDDUDUUUD');
    const expectedValue = 2;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('pangrams Test', () => {
  it('Must return pangram', () => {
    const returnedValue = pangrams('We promptly judged antique ivory buckles for the next prize');
    const expectedValue = 'pangram';

    expect(returnedValue).toBe(expectedValue);
  });

  it('Must return not pangram', () => {
    const returnedValue = pangrams('We promptly judged antique ivory buckles for the prize');
    const expectedValue = 'not pangram';

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('[Extra] pangramsWithoutRegex Test', () => {
  it('Must return pangram', () => {
    const returnedValue = pangramsWR('We promptly judged antique ivory buckles for the next prize');
    const expectedValue = 'pangram';

    expect(returnedValue).toBe(expectedValue);
  });

  it('Must return not pangram', () => {
    const returnedValue = pangramsWR('We promptly judged antique ivory buckles for the prize');
    const expectedValue = 'not pangram';

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('marsExploration Test', () => {
  it('Must return the amount of changed letters', () => {
    const returnedValue = marsExploration('SOSTPSSQSSOR');
    const expectedValue = 4;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('Mock Test', () => {
  it('Must return the max sum possible for upper-left quadrant of the matrix', () => {
    const matrix = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]];
    const returnedValue = flippingMatrix(matrix);
    const expectedValue = 414;

    expect(returnedValue).toBe(expectedValue);
  });
});
