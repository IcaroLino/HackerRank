/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

export default function formingMagicSquare(s) {
  const possibleSquares = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
  ];

  let max = Number.MAX_VALUE;

  possibleSquares.forEach((square) => {
    let min = 0;
    square.forEach((line, i) => {
      line.forEach((element, j) => {
        min += Math.abs(element - s[i][j]);
      });
    });
    if (max > min) max = min;
  });

  return max;
}
