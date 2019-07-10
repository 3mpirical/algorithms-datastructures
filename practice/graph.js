
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(node) {
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length ++;
        return this;
    }

    shift() {
        let oldNode = this.head;
        if(this.length === 0) return undefined;
        else if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length --;
        return oldNode;
    }
}




class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(this.adjacencyList[vertex]) return undefined;
        this.adjacencyList[vertex] = [];
    }

    removeVertex(vertex) {
        const { adjacencyList } = this;
        adjacencyList[vertex].forEach((sibling) => {
            adjacencyList[sibling] = adjacencyList[sibling].filter((listItem) => {
                return listItem !== vertex;
            });
        });
        
        delete adjacencyList[vertex];
    }
    
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    
    removeEdge(vertex1, vertex2) {
        const { adjacencyList } = this;
        adjacencyList[vertex1] = adjacencyList[vertex1].filter((sibling) => sibling !== vertex2);
        adjacencyList[vertex2] = adjacencyList[vertex2].filter((sibling) => sibling !== vertex1);
    }

    BFS(vertex) {
        let queue = [];
        let visited = {};
        let results = [];
        let currVertex;
        
        queue.push(vertex);
        visited[vertex] = true;
        
        while(queue.length > 0) {
            currVertex = queue.shift();
            results.push(currVertex);
            
            this.adjacencyList[currVertex].forEach((sibling) => {
                if(!visited[sibling]) queue.push(sibling);
                visited[sibling] = true;
            });
        }

        return results;
    }

    DFSPreorder(vertex) {
        let visited = {};
        let results = [];

        visited[vertex] = true;
        const traversal = (currVertex)  => {
            results.push(currVertex);

            this.adjacencyList[currVertex].forEach((sibling) => {
                if(!visited[sibling]) {
                    visited[sibling] = true;
                    traversal(sibling);
                }
            });
        };
        traversal(vertex)

        return results;
    }
}

let graph = new Graph();

graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addEdge("1", "2");
// graph.addEdge("1", "3");
graph.addEdge("1", "4");
graph.addEdge("2", "3");
// graph.addEdge("2", "4");
// graph.addEdge("3", "4");


console.log(JSON.stringify(graph.DFSPreorder("2")));