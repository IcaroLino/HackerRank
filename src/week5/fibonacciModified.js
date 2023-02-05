/**
* Given terms t[i] and t[i + 1].
* Term t[i + 2] is computed as: t[i + 2] = t[i] + t[i + 1]²
*
* The function is expected to return an INTEGER.
* The function accepts following parameters:
* 1. INTEGER t1
* 2. INTEGER t2
* 3. INTEGER n
*/

export default function fibonacciModified(t1, t2, n) {
  const t = [t1, t2];
  for (let index = 2; index < n; index += 1) {
    t.push(BigInt(t[index - 2]) + BigInt(t[index - 1]) ** 2n);
  }
  return t.pop();
}
