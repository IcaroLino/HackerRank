/**
 * Given an array of stick lengths, use 3 of them to construct a non-degenerate triangle
 * with the maximum possible perimeter.
 * Return an array of the lengths of its sides as 3 integers in non-decreasing order.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

export default function maximumPerimeterTriangle(sticks) {
  sticks.sort((a, b) => b - a);

  for (let index = 0; index < sticks.length; index += 1) {
    const triplet = sticks.slice(index, index + 3);
    if (triplet[0] < triplet[1] + triplet[2]) return triplet.reverse();
  }

  return [-1];
}
