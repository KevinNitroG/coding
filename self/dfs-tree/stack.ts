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
 * Traverses a tree depth-first using an explicit stack (iterative).
 * Children are pushed in reverse order so the leftmost is processed first.
 * @param root The root node of the tree.
 * @returns An array of node values in DFS order.
 */
function dfsTreeStack<T>(root: TreeNode<T> | null): T[] {
  if (!root) return [];

  const stack: TreeNode<T>[] = [root];
  const result: T[] = [];

  while (stack.length > 0) {
    const current = stack.pop()!;
    result.push(current.value);

    // Push children in reverse order so the first child is processed first (LIFO)
    for (let i = current.children.length - 1; i >= 0; i--) {
      stack.push(current.children[i]);
    }
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

console.log(dfsTreeStack(treeRoot));
// Output: [ 1, 2, 4, 3 ]

export {};
