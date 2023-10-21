class Graph {
    constructor() {
      this.nodes = new Map();
    }
  
    // Add a node to the graph
    addNode(name) {
      this.nodes.set(name, new Map());
    }
  
    // Add an edge between two nodes given a weight
    addEdge(node1, node2, weight) {
      this.nodes.get(node1).set(node2, weight);
      this.nodes.get(node2).set(node1, weight);
    }
  
    // Dijkstra's algorithm to find the shortest paths from a start node
    dijkstra(startNode) {
      const distances = new Map(); // Shortest distances from the start node
      const visited = new Set();  // Set of visited nodes
      const previous = new Map(); // Map to track the previous node on the shortest path
  
      // Initialize distances, previous, and visited sets
      for (const node of this.nodes.keys()) {
        distances.set(node, Infinity);
        previous.set(node, null);
      }
      distances.set(startNode, 0);
  
      // Main loop to find the shortest paths
      while (visited.size < this.nodes.size) {
        const current = this.getMinDistanceNode(distances, visited);
        visited.add(current);
  
        // Update distances and previous for neighbors of the current node
        for (const [neighbor, weight] of this.nodes.get(current).entries()) {
          const tentativeDistance = distances.get(current) + weight;
          if (tentativeDistance < distances.get(neighbor)) {
            distances.set(neighbor, tentativeDistance);
            previous.set(neighbor, current);
          }
        }
      }
  
      // Return the results - distances and previous
      return { distances, previous };
    }
  
    // Helper function to get the unvisited node with the minimum distance
    getMinDistanceNode(distances, visited) {
      let minDistance = Infinity;
      let minNode = null;
  
      for (const [node, distance] of distances.entries()) {
        if (!visited.has(node) && distance < minDistance) {
          minDistance = distance;
          minNode = node;
        }
      }
  
      return minNode;
    }
  
    // Reconstruct the shortest path from previous map
    getPath(previous, endNode) {
      const path = [];
      let current = endNode;
  
      while (current !== null) {
        path.unshift(current);
        current = previous.get(current);
      }
  
      return path;
    }
  }
  
  const graph = new Graph();
  
  // Add nodes and edges to the graph
  graph.addNode("A");
  graph.addNode("B");
  graph.addNode("C");
  graph.addNode("D");
  graph.addNode("E");
  
  graph.addEdge("A", "B", 1);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "C", 5);
  graph.addEdge("B", "D", 10);
  graph.addEdge("C", "D", 3);
  graph.addEdge("C", "E", 8);
  graph.addEdge("D", "E", 16);
  
  const startNode = "A";
  const { distances, previous } = graph.dijkstra(startNode);
  
  // Output shortest paths and distances from the start node
  for (const node of distances.keys()) {
    const path = graph.getPath(previous, node);
    console.log(`Shortest path from ${startNode} to ${node}:`);
    console.log(`Distance: ${distances.get(node)}`);
    console.log(`Path: ${path.join(" -> ")}`);
    console.log();
  }
  