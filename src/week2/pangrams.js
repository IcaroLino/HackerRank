/**
 * A pangram is a string that contains every letter of the alphabet.
 * Given a sentence determine whether it is a pangram in the English alphabet.
 * Return either pangram or not pangram as appropriate
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

export default function pangrams(s) {
  const regex = /[(a-z)]/gm;
  const repeatableIndex = [];
  const letters = [...s.toLowerCase().match(regex)];

  letters.sort().forEach((letter, index) => {
    if (letter === letters[index + 1]) repeatableIndex.push(index + 1);
  });
  repeatableIndex.reverse().forEach((value) => letters.splice(value, 1));

  return letters.join('') === 'abcdefghijklmnopqrstuvwxyz' ? 'pangram' : 'not pangram';
}
