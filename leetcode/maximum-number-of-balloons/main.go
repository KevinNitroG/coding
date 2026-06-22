// https://leetcode.com/problems/maximum-number-of-balloons/

package main

import "fmt"

func maxNumberOfBalloons(text string) int {
	wordRegistry := make([]int, 26)
	for i := range text {
		wordRegistry[text[i]-'a']++
	}
	wordRegistry[11] /= 2
	wordRegistry[14] /= 2
	return min(
		wordRegistry[0],  // a
		wordRegistry[1],  // b
		wordRegistry[11], // l
		wordRegistry[13], // n
		wordRegistry[14], // o
	)
}

func main() {
	fmt.Println(maxNumberOfBalloons("nlaebolko"))        // 1
	fmt.Println(maxNumberOfBalloons("loonbalxballpoon")) // 2
	fmt.Println(maxNumberOfBalloons("leetcode"))         // 0
}
