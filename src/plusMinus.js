/*
 * Given an array of integers, calculate the ratios of its elements that are positive,
 * negative, and zero.
 *
 * Print the decimal value of each fraction on a new line with  places after the decimal.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export default function plusMinus(arr) {
  const positives = arr.filter((number) => number > 0).length;
  const negatives = arr.filter((number) => number < 0).length;
  const plus = positives / arr.length;
  const minus = negatives / arr.length;
  const zeros = 1 - (plus + minus);

  console.log(plus.toFixed(6));
  console.log(minus.toFixed(6));
  console.log(zeros.toFixed(6));
}
