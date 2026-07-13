// https://leetcode.com/problems/create-binary-tree-from-descriptions/

function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const childSet = new Set<number>();
  const treeRegistry = new Map<number, TreeNode>();

  for (const [parent, child, isLeft] of descriptions) {
    let parentNode = treeRegistry.get(parent);
    if (!parentNode) {
      parentNode = new TreeNode(parent);
      treeRegistry.set(parent, parentNode);
    }
    let childNode = treeRegistry.get(child);
    if (!childNode) {
      childNode = new TreeNode(child);
      treeRegistry.set(child, childNode);
    }
    childSet.add(child); // have to set out of the above if?
    if (isLeft === 1) {
      parentNode.left = childNode;
    } else {
      parentNode.right = childNode;
    }
  }

  for (const [parent] of descriptions) {
    if (!childSet.has(parent)) {
      return treeRegistry.get(parent)!;
    }
  }
  return null;
}
