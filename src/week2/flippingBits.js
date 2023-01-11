/* Given a list of 32 bit unsigned integers.
 * Flip all the bits and return the result as an unsigned integer.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

export default function flippingBits(n) {
  const binary = n.toString(2).padStart(32, '0');
  const complement = binary.split('').map((bit) => (bit === '0' ? '1' : '0')).join('');
  return parseInt(complement, 2);
}
