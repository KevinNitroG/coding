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

// BFS performs Breadth-First Search traversal starting from a given node.
func (g *Graph) BFS(startNode int) {
	// Map to track visited vertices and avoid infinite loops from graph cycles
	visited := make(map[int]bool)

	// Slice utilized as a FIFO queue data structure
	queue := []int{startNode}

	// Mark the starting node as visited before processing
	visited[startNode] = true

	fmt.Print("BFS Traversal Order: ")

	// Loop until the FIFO queue is entirely empty
	for len(queue) > 0 {
		// Dequeue the front vertex from the slice
		currentNode := queue[0]
		queue = queue[1:] // Shift slice to remove the first element

		fmt.Printf("%d ", currentNode)

		// Loop through all neighbors of the current vertex
		for _, neighbor := range g.vertices[currentNode] {
			// Check if the neighbor has been visited yet
			if !visited[neighbor] {
				visited[neighbor] = true        // Mark neighbor as visited
				queue = append(queue, neighbor) // Enqueue unvisited neighbor
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

	// Execute BFS traversal starting from node 2
	g.BFS(2)
}
