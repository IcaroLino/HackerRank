/**
 * Given two n-element arrays of integers, A and B.
 * Permute them into some A' and B' such that the relation A'[i] + B'[i] >= k holds for all i.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

export default function twoArrays(k, A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let index = 0; index < A.length; index += 1) {
    if (A[index] + B[index] < k) return 'NO';
  }

  return 'YES';
}
