class Graph {
    constructor() {
        this.vertices = [];
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.vertices.push(vertex);
        this.adjacencyList[vertex] = {};
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1][vertex2] = weight;
        this.adjacencyList[vertex2][vertex1] = weight;    
    }

    showGraph() {
        const vertices = this.vertices
        const edges = this.adjacencyList
        return { vertices, edges }
      }

    dijkstra(source, to) {
        let distances = {},
            parents = {},
            visited = new Set();
            // inisiasi awal
        for (let i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i] === source) {
                distances[source] = 0;
            } else {
                distances[this.vertices[i]] = Infinity;
            }
            parents[this.vertices[i]] = null;
            visited[this.vertices[i]] = false
        }
        
        let currVisited = source //Inisiasi mulai

    while (currVisited !== null) {
      let distance = distances[currVisited]
      let edges = this.adjacencyList[currVisited]
      for (const key in edges) {
        let newDistance = distance + edges[key]
        if (newDistance < distances[key]) {
          distances[key] = newDistance
          parents[key] = currVisited
        }
      }
      visited[currVisited] = true

      // Mencari vertice yang belum dikunjungi dan mempunyai distance paling kecil
      let minDistance = Infinity // Initialvalue
      let currVertice = null //Initialvalue
      for (const key in distances) {
        if (distances[key] < minDistance && visited[key] !== true) {
          minDistance = distances[key]
          currVertice = key
        }
      }

      currVisited = currVertice
    }
    
    console.log('Distances :',distances)
    console.log('Parents :',parents) 
    return `${distances[to]} from path ${parents[to]}`
  }
}

module.exports = Graph