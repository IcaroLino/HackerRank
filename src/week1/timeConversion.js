/**
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 *
 * Example: s = '12:01:00AM' return '00:01:00'
 * Example: s = '07:05:45PM' return '19:05:45'
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

export default function timeConversion(s) {
  const timeSplitted = s.split(':');
  const hours = parseInt(timeSplitted[0], 10);
  const period = timeSplitted[2].slice(2);

  timeSplitted[2] = timeSplitted[2].slice(0, 2);
  if (period === 'PM' && hours < 12) timeSplitted[0] = hours + 12;
  if (period === 'AM' && hours > 11) timeSplitted[0] = hours - 12;
  timeSplitted[0] = timeSplitted[0].toString().padStart(2, '0');

  return timeSplitted.join(':');
}
