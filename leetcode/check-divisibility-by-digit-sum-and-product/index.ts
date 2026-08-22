// https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product

function checkDivisibility(n: number): boolean {
  let sum = 0;
  let product = 1;
  let m = n;
  while (m > 0) {
    const digit = m % 10;
    sum += digit;
    product *= digit;
    m = Math.floor(m / 10);
  }
  return Number.isInteger(sum / n) && Number.isInteger(product / n);
}

console.log(checkDivisibility(99)); // true
