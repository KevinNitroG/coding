// https://leetcode.com/problems/create-binary-tree-from-descriptions/

package createbinarytreefromdescriptions

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func createBinaryTree(descriptions [][]int) *TreeNode {
	registry := make(map[int]*TreeNode)
	childSet := make(map[int]struct{})
	for i := range descriptions {
		val := descriptions[i][0]
		child := descriptions[i][1]
		isLeft := descriptions[i][2] == 1
		node, ok := registry[val]
		if !ok {
			node = &TreeNode{
				Val: val,
			}
			registry[val] = node
		}
		registry[val] = node
		childNode, ok := registry[child]
		if !ok {
			childNode = &TreeNode{
				Val: child,
			}
			registry[child] = childNode
		}
		if isLeft {
			node.Left = childNode
		} else {
			node.Right = childNode
		}
		childSet[descriptions[i][1]] = struct{}{}
	}
	for i := range descriptions {
		val := descriptions[i][0]
		if _, ok := childSet[val]; !ok {
			return registry[val]
		}
	}
	return nil
}
