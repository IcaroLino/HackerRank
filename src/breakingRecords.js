/*
 * Given the scores for a season, determine the number of times Maria breaks her records
 * for most and least points.
 * Scores are in the same order as the games played.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

export default function breakingRecords(scores) {
  let maximum = scores[0];
  let minimum = scores[0];
  let most = 0;
  let less = 0;

  scores.forEach((score) => {
    if (score > maximum) {
      maximum = score;
      most += 1;
    }
    if (score < minimum) {
      minimum = score;
      less += 1;
    }
  });

  return [most, less];
}
