/**
 * Sorting is useful as the first step in many different tasks.
 * The most common task is to make finding things easier, but there are other uses as well.
 * In this case, it will make it easier to determine which pair
 * or pairs of elements have the smallest absolute difference between them.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export default function closestNumbers(arr) {
  arr.sort((a, b) => a - b);

  let result = [];
  let diff = arr[1] - arr[0];

  arr.forEach((element, index) => {
    const elementDiff = arr[index + 1] - element;
    if (elementDiff < diff) {
      diff = elementDiff;
      result = [element, arr[index + 1]];
    } else if (elementDiff === diff) result.push(element, arr[index + 1]);
  });

  return result;
}
