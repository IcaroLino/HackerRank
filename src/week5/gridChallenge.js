/*
 * Given a square grid of characters in the range ascii[a-z],
 * rearrange elements of each row alphabetically, ascending.
 * Determine if the columns are also in ascending alphabetical order, top to bottom.
 * Return YES if they are or NO if they are not.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

export default function gridChallenge(grid) {
  const sortedGrid = grid.map((line) => line.split('').sort());

  for (let i = 0; i < sortedGrid.length - 1; i += 1) {
    for (let j = 0; j < sortedGrid[i].length; j += 1) {
      if (sortedGrid[i][j] > sortedGrid[i + 1][j]) return 'NO';
    }
  }

  return 'YES';
}
