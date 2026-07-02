// Define the structure of our adjacency list graph
type Graph = Record<string, string[]>;

/**
 * Traverses a graph level by level using Breadth-First Search.
 * @param graph The adjacency list representing the graph.
 * @param start The starting node key.
 * @returns An array of nodes in the order they were visited.
 */
function bfsGraph(graph: Graph, start: string): string[] {
  const visited = new Set<string>();
  const queue: string[] = [start];
  const result: string[] = [];

  // Mark the start node as visited immediately upon enqueuing
  visited.add(start);

  while (queue.length > 0) {
    // Remove the first element from the queue
    const current = queue.shift()!;
    result.push(current);

    // Process all neighbors of the current node
    const neighbors = graph[current] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor); // Mark visited on enqueue to prevent duplicate queue items
        queue.push(neighbor);
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

console.log(bfsGraph(sampleGraph, "A"));
// Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]

export {};
