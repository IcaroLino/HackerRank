/**
 * Given an array of integers, where all elements but one occur twice, find the unique element.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

export default function lonelyinteger(a) {
  while (a.length > 1) {
    const result = a.shift();

    if (a.includes(result)) a.splice(a.indexOf(result), 1);
    else {
      a.splice(0, a.length);
      a.push(result);
    }
  }

  return a;
}
