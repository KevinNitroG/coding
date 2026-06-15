function twoSum(nums: number[], target: number): number[] {
  const registry = new Map<number, number>();
  for (let i = 0; i < nums.length; ++i) {
    const complementIndex = registry.get(target - nums[i]);
    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }
    registry.set(nums[i], i);
  }
  return [];
}

export {};
