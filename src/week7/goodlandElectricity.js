/**
 * Goodland is a country with a number of evenly spaced cities along a line.
 * The distance between adjacent cities is 1 unit.
 * Find the fewest number of power plants needed to provide electricity to the entire list.
 * Determine that number. If it cannot be done, return -1.
 *
 * Given a list of city data. Cities that may contain a power plant have been labeled 1.
 * Others not suitable for building a plant are labeled 0.
 * Given a distribution range of k,
 * find the lowest number of plants that must be built such that all cities are served.
 * The distribution range limits supply to cities where distance is less than k.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

export default function pylons(k, arr) {
  let count = 1;
  const plantableIndex = [];
  arr.forEach((element, index) => {
    if (element === 1) plantableIndex.push(index);
  });

  let begin = k - 1;
  while (!plantableIndex.includes(begin)) {
    begin -= 1;
    if (begin < 0) return -1;
  }

  for (let i = plantableIndex.indexOf(begin); i < plantableIndex.length; i += 1) {
    let powerPlantGap = (2 * k) - 1;

    while (!plantableIndex.includes(plantableIndex[i] + powerPlantGap)) {
      powerPlantGap -= 1;
      if (powerPlantGap <= 0) return -1;
    }

    count += 1;
    i = plantableIndex.indexOf(plantableIndex[i] + powerPlantGap);

    if ((plantableIndex[i] + k - 1) >= (arr.length - 1)) break;
    i -= 1;
  }
  return count;
}
