class Graph {
    constructor() {
      this.graph = new Map();
    }
  
    // Add a new node to the graph
    addNode(node) {
      this.graph.set(node, []);
    }
  
    // Add an edge between two nodes 
    addEdge(node, neighbor) {
      this.graph.get(node).push(neighbor);
      this.graph.get(neighbor).push(node); // For an undirected graph
    }
  
    // Breadth-First Search algooo
    bfs(startNode) {
      const visited = new Set();   // Set to track visited nodes
      const queue = [startNode];   // Initialize the queue with the start node
      visited.add(startNode);      // Mark the start node as visited
  
      while (queue.length > 0) {
        const currentNode = queue.shift(); // Unqueue the next node
        console.log(`Visited: ${currentNode}`); // Output the visited node
  
        // Check out the neighbors of the current node
        for (const neighbor of this.graph.get(currentNode)) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);  // Queue unvisited neighbors
            visited.add(neighbor); // Mark neighbors as visited
          }
        }
      }
    }
  }
  
  const graph = new Graph();
  
  // Add nodes and edges to the graph
  graph.addNode("A");
  graph.addNode("B");
  graph.addNode("C");
  graph.addNode("D");
  graph.addNode("E");
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("E", "D");
  graph.addEdge("C", "E");
  
  console.log("breadth-first search starting from node 'A':");
  graph.bfs("A");
  