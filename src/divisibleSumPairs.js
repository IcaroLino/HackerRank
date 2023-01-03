/**
 * Given an array of integers and a positive integer k,
 * determine the number of (i,j) pairs where i<j  and ar[i] + ar[j] is divisible by k.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

export default function divisibleSumPairs(n, k, ar) {
  let result = 0;

  ar.forEach((element, i) => {
    for (let j = i + 1; j < n; j += 1) {
      if ((element + ar[j]) % k === 0) result += 1;
    }
  });

  return result;
}
