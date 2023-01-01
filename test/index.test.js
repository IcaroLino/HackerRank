import {
  describe, expect, it, jest,
} from '@jest/globals';
import plusMinus from '../src/plusMinus';
import miniMaxSum from '../src/miniMaxSum';

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
