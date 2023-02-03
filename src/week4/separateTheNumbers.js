/**
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

export default function separateNumbers(s) {
  if (s.length > 1) {
    for (let i = 1; i <= (s.length / 2); i += 1) {
      const firstElement = s.substring(0, i);
      let nextElement = BigInt(firstElement) + BigInt(1);
      let sequence = firstElement + nextElement;
      while (sequence.length < s.length) {
        nextElement += BigInt(1);
        sequence += nextElement;
      }
      if (sequence === s) return `YES ${firstElement}`;
    }
  }

  return 'NO';
}
