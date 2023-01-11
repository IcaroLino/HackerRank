/*
 * Given a list of integers, count and return the number of times each value appears.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export default function countingSort(arr) {
  const frequencyArr = new Array(100).fill(0);

  for (let index = 0; index < arr.length; index += 1) {
    frequencyArr[arr[index]] += 1;
  }

  return frequencyArr;
}
