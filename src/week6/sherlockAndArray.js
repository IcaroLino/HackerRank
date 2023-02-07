/**
 * Find an element of the array such that the sum of all elements to the left is equal
 * to the sum of all elements to the right
 * Given arrays of integers and must determine whether there is an element that meets the criterion.
 * If there is, return YES. Otherwise, return NO.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export default function balancedSums(arr) {
  let rightSum = arr.reduce((acc, cur) => acc + cur);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    rightSum -= arr[i];
    if (leftSum === rightSum) return 'YES';
    leftSum += arr[i];
  }

  return 'NO';
}
