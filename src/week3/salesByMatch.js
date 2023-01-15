/**
 * Given an array of integers representing the color of each sock,
 * determine how many pairs of socks with matching colors there are;
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

export default function sockMerchant(n, ar) {
  let pairs = 0;

  while (ar.length > 1) {
    const sock = ar.shift();

    if (ar.includes(sock)) {
      ar.splice(ar.indexOf(sock), 1);
      pairs += 1;
    }
  }

  return pairs;
}
