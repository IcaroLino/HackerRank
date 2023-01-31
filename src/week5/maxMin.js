/**
 * Given a list of integers, arr, and a single integer k.
 * Create an array of length k from elements of arr such that its unfairness is minimized.
 * Call that array arr'.
 * Unfairness of an array is calculated as: max(arr') - mix(arr')
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

export default function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  let minUnfairness = arr[arr.length - 1] - arr[0];

  for (let index = 0; index <= arr.length - k; index += 1) {
    const arrL = arr.slice(index, index + k);
    const unfairness = arrL[k - 1] - arrL[0];
    if (minUnfairness > unfairness) minUnfairness = unfairness;
  }

  return minUnfairness;
}
