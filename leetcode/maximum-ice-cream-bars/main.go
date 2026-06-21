package main

import (
	"fmt"
	"slices"
)

func maxIceCream(costs []int, coins int) int {
	slices.Sort(costs)
	maxEffort := 0
	for _, cost := range costs {
		if coins < cost {
			break
		}

		maxEffort += 1
		coins -= cost
	}
	return maxEffort
}

func main() {
	fmt.Println(maxIceCream([]int{1, 3, 2, 4, 1}, 7))     // 4
	fmt.Println(maxIceCream([]int{10, 6, 8, 7, 7, 8}, 5)) // 0
	fmt.Println(maxIceCream([]int{1, 6, 3, 1, 2, 5}, 20)) // 6
}
