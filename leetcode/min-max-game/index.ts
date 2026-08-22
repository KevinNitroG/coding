// https://leetcode.com/problems/min-max-game/

function minMaxGame(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  const newNums = new Array(nums.length / 2);
  let i = 0;
  while (i < newNums.length) {
    if (i & 1) {
      // odd
      newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
    } else {
      newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
    }
    i++;
  }
  return minMaxGame(newNums);
}
