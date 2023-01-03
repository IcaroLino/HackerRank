import {
  describe, expect, it, jest,
} from '@jest/globals';
import plusMinus from '../src/plusMinus';
import miniMaxSum from '../src/miniMaxSum';
import timeConversion from '../src/timeConversion';
import breakingRecords from '../src/breakingRecords';
import processData from '../src/camelCase4';
import divisibleSumPairs from '../src/divisibleSumPairs';
import matchingStrings from '../src/sparseArrays';

describe('plusMinus Test', () => {
  it('Must calls 3 console.log', () => {
    const logSpy = jest.spyOn(console, 'log');

    plusMinus([-4, 3, -9, 0, 4, 1]);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(3);
  });

  it('Must print 3 decimals scaled to six', () => {
    const logSpy = jest.spyOn(console, 'log');

    plusMinus([-4, 3, -9, 0, 4, 1]);

    expect(logSpy).toHaveBeenCalledWith('0.500000');
    expect(logSpy).toHaveBeenCalledWith('0.333333');
    expect(logSpy).toHaveBeenCalledWith('0.166667');
  });
});

describe('miniMaxSum Test', () => {
  it('Must calls console.log with two numbers', () => {
    const logSpy = jest.spyOn(console, 'log');

    miniMaxSum([1, 2, 3, 4, 5]);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith(10, 14);
  });
});

describe('timeConversion Test', () => {
  it('Must return two strings with 24-hour', () => {
    const amTest = timeConversion('12:01:00AM');
    const pmTest = timeConversion('07:05:45PM');

    expect(amTest).toBe('00:01:00');
    expect(pmTest).toBe('19:05:45');
  });
});

describe('breakingRecords Test', () => {
  it('Must return an array with the max and min number of times the record has been broken', () => {
    const records = breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
    const expected = [2, 4];

    expect(records).toEqual(expected);
  });
});

describe('camelCase 4 Test', () => {
  it('Must print a specific list of words', async () => {
    const logSpy = jest.spyOn(console, 'log');

    processData('S;V;iPad');
    processData('C;M;mouse pad');
    processData('C;C;code swarm');
    processData('S;C;OrangeHighlighter');

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('i pad');
    expect(logSpy).toHaveBeenCalledWith('mousePad()');
    expect(logSpy).toHaveBeenCalledWith('CodeSwarm');
    expect(logSpy).toHaveBeenCalledWith('orange highlighter');
  });
});

describe('divisibleSumPairs Test', () => {
  it('Must return the numbers of pairs', () => {
    const sumPairs = divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
    const expected = 5;

    expect(sumPairs).toBe(expected);
  });
});

describe('sparseArray Test', () => {
  it('Must return an array of results for each query', () => {
    const strings = ['aba', 'baba', 'aba', 'xzxb'];
    const queries = ['aba', 'xzxb', 'ab'];
    const result = matchingStrings(strings, queries);
    const expected = [2, 1, 0];

    expect(result).toBe(expected);
  });
});
