export default function getTotalX(a, b) {
  // a.sort((x, y) => x - y);
  // b.sort((x, y) => x - y);

  const begin = a[a.length - 1];
  const end = b[0];
  const divisors = [];

  let count = begin;
  while (count <= end) {
    if (count % a[0] === 0) divisors.push(count);
    count += 1;
  }

  a.forEach((number) => {
    for (let index = divisors.length - 1; index >= 0; index -= 1) {
      if (!(divisors[index] % number === 0)) divisors.splice(index, 1);
    }
  });

  b.forEach((number) => {
    for (let index = divisors.length - 1; index >= 0; index -= 1) {
      if (!(number % divisors[index] === 0)) divisors.splice(index, 1);
    }
  });

  return divisors.length;
}
