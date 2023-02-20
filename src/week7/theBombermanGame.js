/**
 * Bomberman lives in a rectangular grid.
 * Each cell in the grid either contains a bomb or nothing at all.
 * Each bomb can be planted in any cell of the grid but once planted,
 * it will detonate after exactly 3 seconds. Once a bomb detonates, it's destroyed
 * along with anything in its four neighboring cells.
 * This means that if a bomb detonates in cell i,j any valid cells are cleared.
 * If there is a bomb in a neighboring cell,
 * the neighboring bomb is destroyed without detonating, so there's no chain reaction.
 *
 * Bomberman is immune to bombs, so he can move freely throughout the grid. Here's what he does:
 *
 * 1) Initially, Bomberman arbitrarily plants bombs in some of the cells, the initial state.
 *
 * 2) After one second, Bomberman does nothing.
 *
 * 3) After one more second, Bomberman plants bombs in all cells without bombs,
 * thus filling the whole grid with bombs. No bombs detonate at this point.
 *
 * 4) After one more second, any bombs planted exactly three seconds ago will detonate.
 * Here, Bomberman stands back and observes.
 *
 * 5) Bomberman then repeats steps 3 and 4 indefinitely.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY grid
 */

function detonate(grid) {
  const detonateCoord = [];
  grid.forEach((lineGrid, i) => {
    lineGrid.split('').forEach((element, j) => {
      if (element === 'O') detonateCoord.push([i, j]);
    });
  });

  const copyGrid = grid.map((line) => line.replace(/[.]/g, 'O').split(''));
  detonateCoord.forEach((coordinates) => {
    copyGrid[coordinates[0]][coordinates[1]] = '.';
    if (coordinates[0] > 0) copyGrid[coordinates[0] - 1][coordinates[1]] = '.';
    if (coordinates[1] > 0) copyGrid[coordinates[0]][coordinates[1] - 1] = '.';
    if (coordinates[0] < copyGrid.length - 1) copyGrid[coordinates[0] + 1][coordinates[1]] = '.';
    if (coordinates[1] < copyGrid[0].length - 1) copyGrid[coordinates[0]][coordinates[1] + 1] = '.';
  });

  return copyGrid.map((line) => line.join(''));
}

export default function bomberMan(n, grid) {
  if (n === 1) return grid;
  if (n % 2 === 0) return grid.map((line) => line.replace(/[.]/g, 'O'));
  if (n % 4 === 3) return detonate(grid);
  if (n % 4 === 1) return detonate(detonate(grid));

  return -1;
}
