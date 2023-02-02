/* eslint-disable no-bitwise */
/**
 * Sansa has an array. She wants to find the value obtained by XOR-ing the contiguous subarrays,
 * followed by XOR-ing the values thus obtained. Determine this value.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export default function sansaXor(arr) {
  if (arr.length % 2 === 0) return 0;

  return arr.reduce((acc, cur, index) => {
    if (index % 2 !== 0) return acc;
    return acc ^ cur;
  }, 0);
}

/* Alternative Solution (heavy)

  const subArrays = [];

  for (let i = 1; i <= arr.length; i += 1) {
    for (let index = 0; index <= arr.length; index += 1) {
      if (index + i > arr.length) break;
      subArrays.push(arr.slice(index, index + i));
    }
  }

  const subArrXOR = subArrays.map((element) => element.reduce((acc, cur) => acc ^ cur, 0));
  return subArrXOR.reduce((acc, cur) => acc ^ cur, 0);

*/
