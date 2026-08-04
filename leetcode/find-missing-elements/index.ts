function findMissingElements(nums: number[]): number[] {
  const registry = new Set(nums);
  const result = new Array();
  nums.sort((a, b) => a - b);
  for (let i = nums[0]; i <= nums[nums.length - 1]; i++) {
    if (!registry.has(i)) {
      result.push(i);
    }
  }
  return result;
}

export {};
