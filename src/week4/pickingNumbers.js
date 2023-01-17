/*
 * Given an array of integers, find the longest subarray
 * where the absolute difference between any two elements is less than or equal to 1.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

export default function pickingNumbers(a) {
  const uniqueNumbers = Array.from(new Set(a));
  let longestSubArr = [];

  uniqueNumbers.forEach((uniqueNumber) => {
    const tempArr = [];
    a.forEach((element) => {
      if (uniqueNumber === element || uniqueNumber + 1 === element) tempArr.push(element);
    });
    if (tempArr.length > longestSubArr.length) longestSubArr = tempArr;
  });

  return longestSubArr.length;
}
