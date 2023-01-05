/**
 * Given the sequence of up and down steps during a hike,
 * find and print the number of valleys walked through.
 *
 * A valley is a sequence of consecutive steps below sea level,
 * starting with a step down from sea level and ending with a step up to sea level.
 *
 * Every step it was noted if it was an uphill, U, or a downhill, D step.
 * Hikes always start and end at sea level,
 * and each step up or down represents a 1 unit change in altitude.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

export default function countingValleys(steps, path) {
  let altitude = 0;
  let counter = 0;
  let valleyCount = 0;

  path.split('').forEach((letter) => {
    if (letter === 'U') altitude += 1;
    else altitude -= 1;

    if (altitude === 0) counter = 0;
    else if (altitude < 0 && counter === 0) {
      valleyCount += 1;
      counter = 1;
    }
  });

  return valleyCount;
}
