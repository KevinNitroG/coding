// https://leetcode.com/problems/sqrtx

// brute force
// function mySqrt(x: number): number {
//   if (x < 2) {
//     return x;
//   }
//
//   let i = 2;
//   while (i * i <= x) {
//     i++;
//   }
//   return i - 1;
// }

function mySqrt(x: number): number {
  if (x < 2) {
    return x;
  }

  let left = 1;
  let right = Math.floor(x / 2);
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    const square = mid ** 2;
    if (square === x) {
      return mid;
    }
    // This below is a trick of algorithm
    if (square > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right; // why is that? may because the only case left == right == mid
}

export {};
