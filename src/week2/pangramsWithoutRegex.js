/**
 * A pangram is a string that contains every letter of the alphabet.
 * Given a sentence determine whether it is a pangram in the English alphabet.
 * Return either pangram or not pangram as appropriate
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

export default function pangramsWR(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return alphabet.split('').reduce((result, letter) => (s.toLowerCase().includes(letter) ? result : 'not pangram'), 'pangram');
}
