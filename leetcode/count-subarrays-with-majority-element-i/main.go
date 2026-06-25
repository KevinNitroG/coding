// https://leetcode.com/problems/count-subarrays-with-majority-element-i/

package main

import "fmt"

func countMajoritySubarrays(nums []int, target int) int {
	count := 0
	n := len(nums)

	for i := range n {
		targetExistence := 0

		for j := i; j < n; j++ {
			if nums[j] == target {
				targetExistence++
			}

			if targetExistence > (j-i+1)/2 {
				count++
			}
		}
	}

	return count
}

func main() {
	fmt.Println(countMajoritySubarrays([]int{1, 2, 2, 3}, 2)) // 5
	fmt.Println(countMajoritySubarrays([]int{1, 1, 1, 1}, 1)) // 10
	fmt.Println(countMajoritySubarrays([]int{1, 2, 3}, 4))    // 0
}
