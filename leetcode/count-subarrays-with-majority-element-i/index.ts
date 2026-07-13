function countMajoritySubarrays(nums: number[], target: number): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let existence = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] === target) {
        existence++;
      }
      if (existence > (j - i + 1) / 2) {
        result++;
      }
    }
  }

  return result;
}

console.log(countMajoritySubarrays([1, 2, 2, 3], 2)); // 5
console.log(countMajoritySubarrays([1, 1, 1, 1], 1)); // 10
console.log(countMajoritySubarrays([1, 2, 3], 4)); // 0
