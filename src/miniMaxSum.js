/*
 * Given five positive integers, find the minimum and maximum values that can be calculated
 * by summing exactly four of the five integers.
 * Then print the respective minimum and maximum values as a single line.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export default function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  let miniSum = arr.slice(0, 4);
  miniSum = miniSum.reduce((accumulator, currentValue) => accumulator + currentValue);
  let maxSum = arr.slice(arr.length - 4);
  maxSum = maxSum.reduce((accumulator, currentValue) => accumulator + currentValue);

  console.log(miniSum, maxSum);
}
