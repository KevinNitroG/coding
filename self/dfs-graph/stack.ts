// Define the structure of our adjacency list graph
type Graph = Record<string, string[]>;

/**
 * Traverses a graph depth-first using an explicit stack (iterative).
 * @param graph The adjacency list representing the graph.
 * @param start The starting node key.
 * @returns An array of nodes in the order they were visited.
 */
function dfsGraphStack(graph: Graph, start: string): string[] {
  const visited = new Set<string>();
  const stack: string[] = [start];
  const result: string[] = [];

  while (stack.length > 0) {
    const current = stack.pop()!;

    if (visited.has(current)) continue;

    visited.add(current);
    result.push(current);

    // Push neighbors in reverse order so the first neighbor is processed first (LIFO)
    const neighbors = graph[current] || [];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      if (!visited.has(neighbors[i])) {
        stack.push(neighbors[i]);
      }
    }
  }

  return result;
}

// === Example Usage ===
const sampleGraph: Graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

console.log(dfsGraphStack(sampleGraph, "A"));
// Output: [ 'A', 'B', 'D', 'E', 'F', 'C' ]

export {};
