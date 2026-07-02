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
 * Traverses a tree layer by layer.
 * @param root The root node of the tree.
 * @returns An array of node values in BFS order.
 */
function bfsTree<T>(root: TreeNode<T> | null): T[] {
  if (!root) return [];

  const queue: TreeNode<T>[] = [root];
  const result: T[] = [];

  while (queue.length > 0) {
    const current = queue.shift()!;
    result.push(current.value);

    // Push all children of the current node into the queue
    for (const child of current.children) {
      queue.push(child);
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

console.log(bfsTree(treeRoot));
// Output: [ 1, 2, 3, 4 ]

export {};
