/**
 * Write a program that creates or splits Camel Case variable, method, and class names.
 *
 * Each line of the input file will begin with an operation (S or C) followed by a semi-colon
 * followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
 *
 * The operation will either be S (split) or C (combine).
 * M indicates method, C indicates class, and V indicates variable.
 *
 * In the case of a split operation, the words will be a camel case method, class or variable name
 * that you need to split into a space-delimited list of words starting with a lowercase letter.
 *
 * In the case of a combine operation, the words will be a space-delimited list of words starting
 * with lowercase letters that you need to combine into the appropriate camel case String.
 * Methods should end with an empty set of parentheses to differentiate them from variable names.
 */

function replacer(match, index) {
  if (index > 0) return ` ${match}`;
  return match;
}

export default function processData(input) {
  const lines = input.split('\r\n');

  lines.forEach((element) => {
    const splittedLine = element.split(';');
    const operation = splittedLine[0];
    const method = splittedLine[1];
    let data = splittedLine[2];

    if (operation === 'S') {
      const regex = /[A-Z]/gm;
      data = data.replace(regex, replacer).toLowerCase();
      data = data.replace('()', '');
      console.log(data);
    } else if (operation === 'C') {
      data = data.split(' ');
      data = data.map((word) => word[0].toUpperCase() + word.substring(1)).join('');
      if (method !== 'C') {
        data = data[0].toLowerCase() + data.substring(1);
        if (method === 'M') data += '()';
      }
      console.log(data);
    }
  });
}
