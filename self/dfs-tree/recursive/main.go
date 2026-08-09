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

// TreeDFS performs a depth-first traversal from the root.
func TreeDFS(root *TreeNode) {
	// Base case: check if the tree is empty
	if root == nil {
		return
	}

	fmt.Print("Tree DFS Traversal Order: ")
	treeDFSHelper(root)
	fmt.Println()
}

// treeDFSHelper recursively visits nodes in depth-first order.
func treeDFSHelper(node *TreeNode) {
	if node == nil {
		return
	}

	fmt.Printf("%d ", node.Val)

	// Recurse into left subtree first
	treeDFSHelper(node.Left)

	// Then recurse into right subtree
	treeDFSHelper(node.Right)
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

	// Execute Tree DFS traversal
	TreeDFS(root) // Output: 1 2 4 5 3 6
}
