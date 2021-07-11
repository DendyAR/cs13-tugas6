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
    const vertices = this.vertices;
    const edges = this.adjacencyList;
    return { vertices, edges };
  }
  prims() {
    let distances = [],
      activeNodes = {},
      RunEdges = [this.vertices.map((e)=>{return e.length})];

    //Inisiasi active node All False
    for (let i = 0; i < this.vertices.length - 1; i++) {
      activeNodes[this.vertices[i]] = false;
    }

    //Current Vertice
    let currVertice = "C";

    // Rekursif
    while (currVertice !== null) {
      activeNodes[currVertice] = true;

      // Cek setiap percabangan setiap node/vertice yang telah aktif/connect ( di cari terkecil )
      let distance = Infinity;
      let edges = this.adjacencyList[currVertice];
      let fromVertice = null;
      let toVertice = null;
      for (const key in activeNodes) {
        if (activeNodes[key]) {
          let edgeslast = this.adjacencyList[key];
          for (let edge in edgeslast) {
            if (distance > edgeslast[edge] && !activeNodes[edge]) {
              distance = edgeslast[edge];
              toVertice = edge;
              fromVertice = key;
            }
          }
        }
      }

      // Cek hasil perulangan
      if (distance == Infinity || toVertice === null || fromVertice === null) {
        // Semua terkoneksi / selesai,.. keluar rekursif
        currVertice = null;
      } else {
        // Push distance terkecil dan push percabangan,.. mengganti currVertice
        distances.push(distance);
        RunEdges.push([fromVertice, "->", toVertice]);
        currVertice = toVertice;
      }
    }

    // Return Value
    let minimumSpaningTree = 0;
    distances.map((e) => (minimumSpaningTree += e));
    return { RunEdges, distances, minimumSpaningTree };
  }
}

module.exports = Graph;
