/**
 * Use the counting sort to order a list of strings associated with integers.
 * If two strings are associated with the same integer,
 * they must be printed in their original order, i.e. your sorting algorithm should be stable.
 * There is one other twist: strings in the first half of the array
 * are to be replaced with the character - (dash, ascii 45 decimal).
 *
 * Insertion Sort and the simple version of Quicksort are stable,
 * but the faster in-place version of Quicksort is not since it scrambles
 * around elements while sorting.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */

export default function countSort(arr) {
  const frequencyArr = Array(arr.length).fill().map(() => Array(0));

  for (let index = 0; index < arr.length; index += 1) {
    if (index < arr.length / 2) frequencyArr[parseInt(arr[index][0], 10)].push('-');
    else frequencyArr[parseInt(arr[index][0], 10)].push(arr[index][1]);
  }

  const result = frequencyArr.filter((e) => e.length).join(' ').replaceAll(',', ' ');

  console.log(result);
}
