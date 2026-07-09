// https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-i

function sumAndMultiply(n: number): number {
  let x = 0;
  let acc = 1;
  let sum = 0;
  while (n) {
    const quotient = n % 10;
    n = Math.floor(n / 10);
    if (quotient === 0) {
      continue;
    }
    x += acc * quotient;
    sum += quotient;
    acc *= 10;
  }
  return x * sum;
}
