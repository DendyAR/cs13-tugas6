const Graph = require('./ShortPath')

const g = new Graph()

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addVertex('G');

g.addEdge('A', 'B', 16);
g.addEdge('A', 'C', 22);
g.addEdge('A', 'D', 25);
g.addEdge('B', 'D', 14);
g.addEdge('B', 'E', 26);
g.addEdge('C', 'D', 9);
g.addEdge('C', 'G', 35);
g.addEdge('D', 'F', 24);
g.addEdge('E', 'F', 15);
g.addEdge('E', 'G', 28);
g.addEdge('F', 'G', 8);

let show = g.showGraph()
let result = g.dijkstra('C','G')
console.log('Show data: ', show , 'This is Result: ', result )