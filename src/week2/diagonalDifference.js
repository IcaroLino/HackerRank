/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

export default function diagonalDifference(arr) {
  let principal = 0;
  let secondary = 0;
  arr.forEach((line, i) => {
    line.forEach((number, j) => {
      if (i === j) principal += number;
      if ((i + j) === (arr.length - 1)) secondary += number;
    });
  });
  return Math.abs(principal - secondary);
}
