/**
 * The website considers a password to be strong if it satisfies the following criteria:
 *
 * Its length is at least .
 * It contains at least one digit.
 * It contains at least one lowercase English character.
 * It contains at least one uppercase English character.
 * It contains at least one special character. The special characters are: !@#$%^&*()-+
 *
 * Find the minimum number of characters she must add to make her password strong.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

export default function minimumNumber(n, password) {
  let changes = 0;

  if (!password.match('.*[a-z].*')) changes += 1;
  if (!password.match('.*[A-Z].*')) changes += 1;
  if (!password.match('.*[0-9].*')) changes += 1;
  if (!password.match('.*[!@#$%^&*()+-].*')) changes += 1;

  return (changes + n) >= 6 ? changes : 6 - n;
}
