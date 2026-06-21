// https://leetcode.com/problems/maximum-ice-cream-bars/description/?envType=daily-question&envId=2026-06-21

function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b);
  let maxEffort = 0;
  for (const cost of costs) {
    if (coins < cost) {
      break;
    }
    maxEffort += 1;
    coins -= cost;
  }
  return maxEffort;
}

console.log(maxIceCream([1, 3, 2, 4, 1], 7)); // 4
console.log(maxIceCream([10, 6, 8, 7, 7, 8], 5)); // 0
console.log(maxIceCream([1, 6, 3, 1, 2, 5], 20)); // 6

export {};
