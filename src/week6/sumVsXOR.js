/**
 * Given an integer , find each  such that:
 * 0 <= x <= n
 * n + x = n xor x
 *
 * Return the number of 's satisfying the criteria.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

export default function sumXor(n) {
  if (n === 0) return 1;
  const zeros = n.toString(2).split('').filter((bit) => bit === '0');

  return 2 ** zeros.length;
}
