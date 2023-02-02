/**
 * Given two arrays of integers.
 * Find which elements in the second array are missing from the first array.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

export default function missingNumbers(arr, brr) {
  arr.forEach((number) => {
    if (brr.includes(number)) brr.splice(brr.indexOf(number), 1);
  });

  brr.sort((a, b) => a - b);

  return Array.from(new Set(brr));
}
