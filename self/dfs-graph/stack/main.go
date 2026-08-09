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

// DFSStack performs Depth-First Search traversal using an explicit stack.
func (g *Graph) DFSStack(startNode int) {
	// Map to track visited vertices and avoid infinite loops from graph cycles
	visited := make(map[int]bool)

	// Slice utilized as a LIFO stack storing vertex values
	stack := []int{startNode}

	fmt.Print("DFS (Stack) Traversal Order: ")

	// Loop until the stack is entirely empty
	for len(stack) > 0 {
		// Pop the top vertex from the stack
		currentNode := stack[len(stack)-1]
		stack = stack[:len(stack)-1] // Remove the last element

		// Skip if already visited
		if visited[currentNode] {
			continue
		}

		visited[currentNode] = true
		fmt.Printf("%d ", currentNode)

		// Push neighbors in reverse order so the first neighbor is popped first (LIFO)
		neighbors := g.vertices[currentNode]
		for i := len(neighbors) - 1; i >= 0; i-- {
			neighbor := neighbors[i]
			if !visited[neighbor] {
				stack = append(stack, neighbor)
			}
		}
	}
	fmt.Println()
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

	// Execute DFS traversal (stack-based) starting from node 2
	g.DFSStack(2) // Output: 2 0 1 3
}
