// Define the structure of our adjacency list graph
type Graph = Record<string, string[]>;

/**
 * Traverses a graph depth-first using recursion.
 * @param graph The adjacency list representing the graph.
 * @param current The current node key.
 * @param visited Set of already visited nodes.
 * @param result Accumulator for node values.
 * @returns An array of nodes in the order they were visited.
 */
function dfsGraph(
  graph: Graph,
  current: string,
  visited: Set<string> = new Set(),
  result: string[] = []
): string[] {
  visited.add(current);
  result.push(current);

  const neighbors = graph[current] || [];
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      dfsGraph(graph, neighbor, visited, result);
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

console.log(dfsGraph(sampleGraph, "A"));
// Output: [ 'A', 'B', 'D', 'E', 'F', 'C' ]

export {};
