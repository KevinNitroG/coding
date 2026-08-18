# https://leetcode.com/problems/count-subarrays-with-majority-element-i/


class Solution:
    def countMajoritySubarrays(self, nums: list[int], target: int) -> int:
        result: int = 0

        for i in range(len(nums)):
            existence = 0
            for j in range(i, len(nums)):
                if nums[j] == target:
                    existence += 1
                if existence > (j - i + 1) / 2:
                    result += 1

        return result
