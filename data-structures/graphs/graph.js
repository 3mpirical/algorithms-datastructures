const PriorityQueue = require("../binary-heap/max-binary-heap");


class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertexKey) {
        if(this.adjacencyList[vertexKey]) return;
        this.adjacencyList[vertexKey] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex === vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex === vertex1);
    }
    
    removeVertex(removedVertex) {
        this.adjacencyList[removedVertex].forEach((vertex) => {
            this.adjacencyList[vertex] = this.adjacencyList[vertex].filter((vertex) => vertex === removedVertex);
        });

        delete this.adjacencyList[removedVertex];
    }

    DFS(startVertex) {
        const { adjacencyList } = this;
        const visited = {};
        const result = [];

        (function traversal(currVertex) {
            visited[currVertex] = true;
            result.push(currVertex);

            adjacencyList[currVertex].forEach((vertex) => {
                if(!visited[vertex]) traversal(vertex);
            });
        } (startVertex) );

        return result;
    }
}


let graph = new Graph();

graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
// graph.addEdge("1", "4");
graph.addEdge("1", "2");
graph.addEdge("1", "3");
graph.addEdge("2", "4");
// graph.removeEdge("1", "3");
// graph.removeVertex("1");

// console.log(JSON.stringify(graph, null, 2));
console.log(JSON.stringify(graph.DFS("4"), null, 2));