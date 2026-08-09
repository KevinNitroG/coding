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

// TreeDFSStack performs a depth-first traversal using an explicit stack.
func TreeDFSStack(root *TreeNode) {
	// Base case: check if the tree is empty
	if root == nil {
		return
	}

	// Slice utilized as a LIFO stack storing node pointers
	stack := []*TreeNode{root}

	fmt.Print("Tree DFS (Stack) Traversal Order: ")

	// Loop until the stack is entirely empty
	for len(stack) > 0 {
		// Pop the top node from the stack
		currentNode := stack[len(stack)-1]
		stack = stack[:len(stack)-1] // Remove the last element

		fmt.Printf("%d ", currentNode.Val)

		// Push right child first so left child is popped first (LIFO)
		if currentNode.Right != nil {
			stack = append(stack, currentNode.Right)
		}

		// Push left child second so it sits on top and is processed first
		if currentNode.Left != nil {
			stack = append(stack, currentNode.Left)
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

	// Execute Tree DFS traversal (stack-based)
	TreeDFSStack(root) // Output: 1 2 4 5 3 6
}
