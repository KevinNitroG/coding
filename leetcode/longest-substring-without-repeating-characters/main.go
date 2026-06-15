// https://leetcode.com/problems/longest-substring-without-repeating-characters/

package main

import "fmt"

func lengthOfLongestSubstring(s string) int {
	lastSeen := [128]int{} // stores the index after the last occurrence of that character
	maxLength := 0
	left := 0

	for right := 0; right < len(s); right++ {
		char := s[right]

		if lastSeen[char] > left {
			left = lastSeen[char]
		}

		maxLength = max(maxLength, right-left+1)

		lastSeen[char] = right + 1
	}

	return maxLength
}

func main() {
	fmt.Println(lengthOfLongestSubstring("abcabcbb")) // 3
	fmt.Println(lengthOfLongestSubstring("bbbb"))     // 1
	fmt.Println(lengthOfLongestSubstring("pwwkew"))   // 3
	fmt.Println(lengthOfLongestSubstring(" "))        // 1
}
