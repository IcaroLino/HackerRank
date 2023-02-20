import {
  describe, expect, it,
} from '@jest/globals';
import pylons from '../src/week7/goodlandElectricity';
import bomberMan from '../src/week7/theBombermanGame';

describe('theBombermanGame Test', () => {
  it('Test Case 1 - Must return the n array of strings that represent the grid in its final state', () => {
    const returnedValue = bomberMan(3, ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....']);
    const expectedValue = ['OOO.OOO', 'OO...OO', 'OOO...O', '..OO.OO', '...OOOO', '...OOOO'];

    expect(returnedValue).toEqual(expectedValue);
  });

  it('Test Case 2 - Must return the n array of strings that represent the grid in its final state', () => {
    const returnedValue = bomberMan(5, ['.......', '...O.O.', '....O..', '..O....', 'OO...OO', 'OO.O...']);
    const expectedValue = ['.......', '...O.O.', '...OO..', '..OOOO.', 'OOOOOOO', 'OOOOOOO'];

    expect(returnedValue).toEqual(expectedValue);
  });

  it('Test Case 3 - Must return the n array of strings that represent the grid in its final state', () => {
    const returnedValue = bomberMan(1, ['.......', '...O.O.', '....O..', '..O....', 'OO...OO', 'OO.O...']);
    const expectedValue = ['.......', '...O.O.', '....O..', '..O....', 'OO...OO', 'OO.O...'];

    expect(returnedValue).toEqual(expectedValue);
  });

  it('Test Case 4 - Must return the n array of strings that represent the grid in its final state', () => {
    const returnedValue = bomberMan(2, ['.......', '...O.O.', '....O..', '..O....', 'OO...OO', 'OO.O...']);
    const expectedValue = ['OOOOOOO', 'OOOOOOO', 'OOOOOOO', 'OOOOOOO', 'OOOOOOO', 'OOOOOOO'];

    expect(returnedValue).toEqual(expectedValue);
  });

  it('Test Case 5 - Error', () => {
    const returnedValue = bomberMan(-1, ['.......', '...O.O.', '....O..', '..O....', 'OO...OO', 'OO.O...']);
    const expectedValue = -1;

    expect(returnedValue).toEqual(expectedValue);
  });
});

describe('goodlandElectricity Test', () => {
  it('Test Case 1 - Must return the minimum number of plants required', () => {
    const returnedValue = pylons(2, [0, 1, 1, 1, 1, 0]);
    const expectedValue = 2;

    expect(returnedValue).toBe(expectedValue);
  });

  it('Test Case 2 - Must return the minimum number of plants required', () => {
    const returnedValue = pylons(3, [0, 1, 0, 0, 0, 1, 1, 1, 1, 1]);
    const expectedValue = 3;

    expect(returnedValue).toBe(expectedValue);
  });

  it('Test Case 3 - Must return -1', () => {
    const returnedValue = pylons(2, [0, 1, 0, 0, 0, 1, 0]);
    const expectedValue = -1;

    expect(returnedValue).toBe(expectedValue);
  });

  it('Test Case 3 - Must return -1', () => {
    const returnedValue = pylons(2, [0, 0]);
    const expectedValue = -1;

    expect(returnedValue).toBe(expectedValue);
  });
});
