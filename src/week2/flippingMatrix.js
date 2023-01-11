/**
 * MOCK TEST WEEK 2
 *
 * Given a 2n x 2n matrix, reverse any of its rows or columns any number of times.
 * The goal is to maximize the sum of the elements in the n x n submatrix
 * located in the upper-left quadrant of the matrix.
 */

export default function flippingMatrix(matrix) {
  const halfLength = matrix.length / 2;
  const indexLength = matrix.length - 1;
  const mirrorPositions = [];
  let sum = 0;

  for (let i = 0; i < halfLength; i += 1) {
    for (let j = 0; j < halfLength; j += 1) {
      mirrorPositions.push([
        matrix[i][j],
        matrix[i][indexLength - j],
        matrix[indexLength - i][j],
        matrix[indexLength - i][indexLength - j],
      ]);
    }
  }

  mirrorPositions.forEach((line) => {
    sum += Math.max(...line);
  });

  return sum;
}
