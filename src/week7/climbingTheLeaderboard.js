/**
 * An arcade game player wants to climb to the top of the leaderboard and track their ranking.
 * The game uses Dense Ranking, so its leaderboard works like this:
 * - The player with the highest score is ranked number  on the leaderboard.
 * - Players who have equal scores receive the same ranking number,
 * and the next player(s) receive the immediately following ranking number.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

export default function climbingLeaderboard(ranked, player) {
  const newRanked = Array.from(new Set(ranked));
  return player.map((score) => {
    if (score < newRanked[newRanked.length - 1]) return newRanked.length + 1;
    for (let index = newRanked.length - 1; index >= 0; index -= 1) {
      if (score === newRanked[index]) return index + 1;
      if (score < newRanked[index]) return index + 2;
    }
    return 1;
  });
}
