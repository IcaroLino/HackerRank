/**
 * Letters in some of the SOS messages are altered by cosmic radiation during transmission.
 * Given the signal received by Earth as a string, s,
 * determine how many letters of the SOS message have been changed by radiation.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

export default function marsExploration(s) {
  let count = 0;

  s.split('').forEach((letter, index) => {
    if (letter !== 'S' && index % 3 !== 1) count += 1;
    if (letter !== 'O' && index % 3 === 1) count += 1;
  });

  return count;
}
