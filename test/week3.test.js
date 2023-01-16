import {
  describe, expect, it,
} from '@jest/globals';
import maximumPerimeterTriangle from '../src/week3/maximumPerimeterTriangle';
import migratoryBirds from '../src/week3/migratoryBirds';
import sockMerchant from '../src/week3/salesByMatch';
import birthday from '../src/week3/subarrayDivision2';
import twoArrays from '../src/week3/permutingTwoArrays';
import pageCount from '../src/week3/drawingBook.';
import getTotalX from '../src/week3/betweenTwoSets';

describe('permutingTwoArrays Test', () => {
  it('Must return YES', () => {
    const returnedValue = twoArrays(10, [2, 1, 3], [7, 8, 9]);
    const expectedValue = 'YES';

    expect(returnedValue).toBe(expectedValue);
  });

  it('Must return NO', () => {
    const returnedValue = twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]);
    const expectedValue = 'NO';

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('subarrayDivision 2 Test', () => {
  it('Must return the numbers of ways the bar can be divided', () => {
    const returnedValue = birthday([1, 2, 1, 3, 2], 3, 2);
    const expectedValue = 2;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('salesByMatch Test', () => {
  it('Must return the numbers of pairs', () => {
    const returnedValue = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
    const expectedValue = 3;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('migratoryBirds Test', () => {
  it('Must return the lowest type id of the most frequently', () => {
    const returnedValue = migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
    const expectedValue = 3;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('maximumPerimeterTriangle Test', () => {
  it('Must return the side lengths of the chosen triangle in non-decreasing order', () => {
    const returnedValue = maximumPerimeterTriangle([1, 1, 1, 3, 3]);
    const expectedValue = [1, 3, 3];

    expect(returnedValue).toEqual(expectedValue);
  });

  it('Must return -1', () => {
    const returnedValue = maximumPerimeterTriangle([1, 2, 3]);
    const expectedValue = [-1];

    expect(returnedValue).toEqual(expectedValue);
  });
});

describe('drawingBook Test', () => {
  it('Must return the minimum number of pages to turn - Test case 0', () => {
    const returnedValue = pageCount(5, 4);
    const expectedValue = 0;

    expect(returnedValue).toBe(expectedValue);
  });

  it('Must return the minimum number of pages to turn - Test case 1', () => {
    const returnedValue = pageCount(6, 2);
    const expectedValue = 1;

    expect(returnedValue).toBe(expectedValue);
  });
});

describe('Mock Test', () => {
  it('Must return the total', () => {
    const returnedValue = getTotalX([2, 4], [16, 32, 96]);
    const expectedValue = 3;

    expect(returnedValue).toBe(expectedValue);
  });
});
