package main

import "fmt"

// TreeNode represents a node in a binary tree.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// NewTreeNode initializes and returns a new tree node.
func NewTreeNode(val int) *TreeNode {
	return &TreeNode{Val: val}
}

// TreeBFS performs a level-order traversal from the root.
func TreeBFS(root *TreeNode) {
	// Base case: check if the tree is empty
	if root == nil {
		return
	}

	// Slice utilized as a FIFO queue storing node pointers
	queue := []*TreeNode{root}

	fmt.Print("Tree BFS Traversal Order: ")

	// Loop until the FIFO queue is entirely empty
	for len(queue) > 0 {
		// Dequeue the front node from the slice
		currentNode := queue[0]
		queue = queue[1:] // Shift slice to remove the first element

		fmt.Printf("%d ", currentNode.Val)

		// Push the left child to the queue if it exists
		if currentNode.Left != nil {
			queue = append(queue, currentNode.Left)
		}

		// Push the right child to the queue if it exists
		if currentNode.Right != nil {
			queue = append(queue, currentNode.Right)
		}
	}
	fmt.Println()
}

func main() {
	/*
	   Constructing this sample binary tree:
	            1
	          /   \
	         2     3
	        / \   /
	       4   5 6
	*/
	root := NewTreeNode(1)
	root.Left = NewTreeNode(2)
	root.Right = NewTreeNode(3)
	root.Left.Left = NewTreeNode(4)
	root.Left.Right = NewTreeNode(5)
	root.Right.Left = NewTreeNode(6)

	// Execute Tree BFS traversal
	TreeBFS(root) // Output: 1 2 3 4 5 6
}
