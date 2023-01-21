/*
 * Caesar's cipher shifts each letter by a number of letters.
 * If the shift takes you past the end of the alphabet,
 * just rotate back to the front of the alphabet.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

export default function caesarCipher(s, k) {
  const encryptedMessage = s.split('').map((letter) => {
    const letterCode = letter.charCodeAt(0);
    if (letterCode >= 65 && letterCode <= 90) {
      return String.fromCharCode(((letterCode - 65 + k) % 26) + 65);
    }
    if (letterCode >= 97 && letterCode <= 122) {
      return String.fromCharCode(((letterCode - 97 + k) % 26) + 97);
    }
    return String.fromCharCode(letterCode);
  });

  return encryptedMessage.join('');
}
