package main

import "fmt"

// Graph represents an unweighted, directed graph using an adjacency list.
type Graph struct {
	vertices map[int][]int
}

// NewGraph initializes and returns a new Graph.
func NewGraph() *Graph {
	return &Graph{
		vertices: make(map[int][]int),
	}
}

// AddEdge adds a directed edge from source (u) to destination (v).
func (g *Graph) AddEdge(u, v int) {
	g.vertices[u] = append(g.vertices[u], v)

	// Ensure the destination vertex is also initialized in our map
	if _, exists := g.vertices[v]; !exists {
		g.vertices[v] = []int{}
	}
}

// DFS performs Depth-First Search traversal starting from a given node.
func (g *Graph) DFS(startNode int) {
	// Map to track visited vertices and avoid infinite loops from graph cycles
	visited := make(map[int]bool)

	fmt.Print("DFS Traversal Order: ")

	g.dfsHelper(startNode, visited)

	fmt.Println()
}

// dfsHelper recursively visits nodes in depth-first order.
func (g *Graph) dfsHelper(currentNode int, visited map[int]bool) {
	visited[currentNode] = true
	fmt.Printf("%d ", currentNode)

	// Loop through all neighbors of the current vertex
	for _, neighbor := range g.vertices[currentNode] {
		// Check if the neighbor has been visited yet
		if !visited[neighbor] {
			g.dfsHelper(neighbor, visited)
		}
	}
}

func main() {
	g := NewGraph()

	// Constructing a sample directed graph
	g.AddEdge(0, 1)
	g.AddEdge(0, 2)
	g.AddEdge(1, 2)
	g.AddEdge(2, 0)
	g.AddEdge(2, 3)
	g.AddEdge(3, 3)

	// Execute DFS traversal starting from node 2
	g.DFS(2) // Output: 2 0 1 3
}
