/**
 * Given a string, split it into two contiguous substrings of equal length.
 * Determine the minimum number of characters to change to make the two substrings
 * into anagrams of one another.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

export default function anagram(s) {
  if (s.length % 2 !== 0) return -1;

  const mid = s.length / 2;
  const s1 = Array.from(s.slice(0, mid));
  const s2 = Array.from(s.slice(mid, s.length));

  s1.forEach((element) => { if (s2.includes(element)) s2.splice(s2.indexOf(element), 1); });

  return s2.length;
}
