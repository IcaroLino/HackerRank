/**
 * Given an array of integers,
 * find the minimum absolute difference between any two elements in the array.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export default function minimumAbsoluteDifference(arr) {
  arr.sort((a, b) => a - b);
  let minimumDiff = Math.abs(arr[0] - arr[1]);

  arr.forEach((element, index) => {
    const diff = Math.abs(element - arr[index + 1]);
    if (diff < minimumDiff) minimumDiff = diff;
  });

  return minimumDiff;
}
