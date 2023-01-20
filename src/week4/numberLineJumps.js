/**
 * The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump
 * The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
 *
 * You have to figure out a way to get both kangaroos
 * at the same location at the same time as part of the show.
 *
 * If it is possible, return YES, otherwise return NO.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

export default function kangaroo(x1, v1, x2, v2) {
  let jumps = 0;

  if (x1 > x2 && v1 < v2) {
    jumps = Math.floor((x1 - x2) / (v2 - v1));
  } else if (x1 < x2 && v1 > v2) {
    jumps = Math.floor((x2 - x1) / (v1 - v2));
  }

  const distance1 = (jumps * v1) + x1;
  const distance2 = (jumps * v2) + x2;

  if (distance1 === distance2) return 'YES';
  return 'NO';
}

/* Alternative Solution

  let k1Location = x1;
  let k2Location = x2;

  while ((k1Location > k2Location && v1 < v2) || (k1Location < k2Location && v1 > v2)) {
    k1Location += v1;
    k2Location += v2;
  }

  if (k1Location === k2Location) return 'YES';
  return 'NO';

*/
