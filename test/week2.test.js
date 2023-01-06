import {
  describe, expect, it,
} from '@jest/globals';
import countingValleys from '../src/week2/countingValleys';
import pangrams from '../src/week2/pangrams';
import pangramsWR from '../src/week2/pangramsWithoutRegex';
import marsExploration from '../src/week2/marsExploration';

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
