// https://leetcode.com/problems/counter/

function createCounter(n: number): () => number {
  let a = n;
  return function () {
    return a++;
  };
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

export {};
