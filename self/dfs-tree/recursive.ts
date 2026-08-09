// Define a generic Tree Node class
class TreeNode<T> {
  value: T;
  children: TreeNode<T>[];

  constructor(value: T, children: TreeNode<T>[] = []) {
    this.value = value;
    this.children = children;
  }
}

/**
 * Traverses a tree depth-first using recursion.
 * @param root The root node of the tree.
 * @param result Accumulator for node values.
 * @returns An array of node values in DFS order.
 */
function dfsTree<T>(root: TreeNode<T> | null, result: T[] = []): T[] {
  if (!root) return result;

  result.push(root.value);

  for (const child of root.children) {
    dfsTree(child, result);
  }

  return result;
}

// === Example Usage ===
// Constructing a simple tree hierarchy:
//       1
//     /   \
//    2     3
//   /
//  4
const treeRoot = new TreeNode(1, [
  new TreeNode(2, [new TreeNode(4)]),
  new TreeNode(3),
]);

console.log(dfsTree(treeRoot));
// Output: [ 1, 2, 4, 3 ]

export {};
