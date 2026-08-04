function maxProfit(prices: number[]): number {
  let profit = 0;
  let minToBuy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    if (currentPrice < minToBuy) {
      minToBuy = currentPrice;
    } else {
      const currentProfit = currentPrice - minToBuy;
      if (currentProfit > profit) {
        profit = currentProfit;
      }
    }
  }
  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0

export {};
