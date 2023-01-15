/*
 * Given an array of bird sightings where every element represents a bird type id,
 * determine the id of the most frequently sighted type.
 * If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export default function migratoryBirds(arr) {
  let result = 0;
  let count = 0;
  let total = 0;

  arr.sort((a, b) => a - b);
  let birdType = arr[0];

  arr.forEach((bird) => {
    if (bird === birdType) {
      count += 1;
      if (count > total) {
        result = bird;
        total = count;
      }
    } else {
      birdType = bird;
      count = 1;
    }
  });

  return result;
}
