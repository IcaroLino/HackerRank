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

export default function bomberMan(n, grid) {

}
