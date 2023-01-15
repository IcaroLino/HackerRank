/**
 * Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
 * Lily decides to share a contiguous segment of the bar selected such that:
 *
 * The length of the segment matches Ron's birth month, and,
 * The sum of the integers on the squares is equal to his birth day.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

export default function birthday(s, d, m) {
  let count = 0;

  s.forEach((_, index) => {
    const segment = s.slice(index, index + m);
    if (segment.reduce((acc, cur) => acc + cur, 0) === d) count += 1;
  });

  return count;
}
