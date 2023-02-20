import {
  describe, expect, it,
} from '@jest/globals';
import bomberMan from '../src/week7/theBombermanGame';

describe('theBombermanGame Test', () => {
  it('Must return the n array of strings that represent the grid in its final state', () => {
    const returnedValue = bomberMan(3, ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....']);
    const expectedValue = ['.......', '...O.O.', '...OO..', '..OOOO.', 'OOOOOOO', 'OOOOOOO'];

    expect(returnedValue).toBe(expectedValue);
  });
});
