function sortedSquares(nums: number[]): number[] {
  return nums.map((ele) => ele ** 2).sort((a, b) => a - b);
}

export {};
