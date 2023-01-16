/**
 * Page 1 is always on the right side.
 * If the book is n pages long, and a student wants to turn to page p,
 * what is the minimum number of pages to turn?
 * They can start at the beginning or the end of the book.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

export default function pageCount(n, p) {
  const maxFlips = Math.floor(n / 2);
  const forwardFlips = Math.floor(p / 2);
  const backwardsFlips = maxFlips - forwardFlips;

  return backwardsFlips < forwardFlips ? backwardsFlips : forwardFlips;
}
