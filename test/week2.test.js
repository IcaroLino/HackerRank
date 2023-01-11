import {
  describe, expect, it,
} from '@jest/globals';
import lonelyInteger from '../src/week2/lonelyInteger';
import gradingStudents from '../src/week2/gradingStudents';
import flippingBits from '../src/week2/flippingBits';
import diagonalDifference from '../src/week2/diagonalDifference';
import countingSort from '../src/week2/countingSort1';
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

describe('diagonalDifference Test', () => {
  it('Must return the absolute diagonal difference', () => {
    const returnedValue = diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
    const expectedValue = 15;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('countingSort 1 Test', () => {
  it('', () => {
    const matrix = [
      63, 25, 73, 1, 98, 73, 56, 84, 86, 57,
      16, 83, 8, 25, 81, 56, 9, 53, 98, 67,
      99, 12, 83, 89, 80, 91, 39, 86, 76, 85,
      74, 39, 25, 90, 59, 10, 94, 32, 44, 3,
      89, 30, 27, 79, 46, 96, 27, 32, 18, 21,
      92, 69, 81, 40, 40, 34, 68, 78, 24, 87,
      42, 69, 23, 41, 78, 22, 6, 90, 99, 89,
      50, 30, 20, 1, 43, 3, 70, 95, 33, 46,
      44, 9, 69, 48, 33, 60, 65, 16, 82, 67,
      61, 32, 21, 79, 75, 75, 13, 87, 70, 33,
    ];

    const returnedValue = countingSort(matrix);

    const expectedMatrix = [
      0, 2, 0, 2, 0, 0, 1, 0, 1, 2,
      1, 0, 1, 1, 0, 0, 2, 0, 1, 0,
      1, 2, 1, 1, 1, 3, 0, 2, 0, 0,
      2, 0, 3, 3, 1, 0, 0, 0, 0, 2,
      2, 1, 1, 1, 2, 0, 2, 0, 1, 0,
      1, 0, 0, 1, 0, 0, 2, 1, 0, 1,
      1, 1, 0, 1, 0, 1, 0, 2, 1, 3,
      2, 0, 0, 2, 1, 2, 1, 0, 2, 2,
      1, 2, 1, 2, 1, 1, 2, 2, 0, 3,
      2, 1, 1, 0, 1, 1, 1, 0, 2, 2,
    ];

    expect(returnedValue).toEqual(expectedMatrix);
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
