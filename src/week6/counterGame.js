/**
 * Louise and Richard have developed a numbers game.
 * They pick a number and check to see if it is a power of 2.
 * If it is, they divide it by 2.
 * If not, they reduce it by the next lower number which is a power of 2.
 * Whoever reduces the number to  wins the game. Louise always starts.
 *
 * The function is expected to return a STRING.
 * The function accepts LONG_INTEGER n as parameter.
 */

export default function counterGame(n) {
  let rounds = 0;
  let newNumber = n;
  let turns = Math.floor(Math.log2(newNumber));

  while (2 ** turns !== newNumber) {
    newNumber -= 2 ** turns;
    rounds += 1;
    turns = Math.floor(Math.log2(newNumber));
  }

  rounds += turns;
  return rounds % 2 === 0 ? 'Richard' : 'Louise';
}
