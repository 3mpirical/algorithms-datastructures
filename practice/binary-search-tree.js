class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(node) {
        if(this.length === 0) {
            this.tail = node;
            this.head = node;
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

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let currNode = this.root;

        while(true) {
            if(value < currNode.value) {
                if(currNode.left) currNode = currNode.left;
                else {
                    currNode.left = newNode;
                    return this;
                }
            } else if(value > currNode.value) {
                if(currNode.right) currNode = currNode.right;
                else {
                    currNode.right = newNode;
                    return this;
                }
            } else return this;
        }
    }

    find(value) {
        if(!this.root) return undefined;
        let currNode = this.root;

        while(true) {
            if(value === currNode.value) return currNode;
            else if(value < currNode.value) {
                if(currNode.left) currNode = currNode.left;
                else return undefined;
            } else if(value > currNode.value) {
                if(currNode.right) currNode = currNode.right;
                else return undefined;
            } else return undefined;
        }
    }

    BFS() {
        if(!this.root) return undefined;
        const visited = [];
        const queue = new Queue();
        queue.push(this.root);

        while(queue.length > 0) {
            let currNode = queue.shift();
            visited.push(currNode.value);

            if(currNode.left) queue.push(currNode.left);
            if(currNode.right) queue.push(currNode.right);
        }

        return visited;
    }

    DFSPreorder() {
        if(!this.root) return undefined;
        const visited = [];

        (function traversal(currNode) {
            visited.push(currNode.value);
            if(currNode.left) traversal(currNode.left);
            if(currNode.right) traversal(currNode.right);
        } (this.root) );

        return visited;
    }

    DFSInorder() {
        if(!this.root) return undefined;
        const visited = [];

        (function traversal(currNode) {
            if(currNode.left) traversal(currNode.left);
            visited.push(currNode.value);
            if(currNode.right) traversal(currNode.right);
        } (this.root) );

        return visited;
    }

    DFSPostorder() {
        if(!this.root) return undefined;
        const visited = [];

        (function traversal(currNode) {
            if(currNode.left) traversal(currNode.left);
            if(currNode.right) traversal(currNode.right);
            visited.push(currNode.value);
        } (this.root) );

        return visited;
    }   
}


const BST = new BinarySearchTree()

BST.insert(7)
BST.insert(4)
BST.insert(9)
BST.insert(2)
BST.insert(0)
BST.insert(3)
BST.insert(11)
BST.insert(8)

console.log(JSON.stringify(BST.DFSPostorder(), null, 2))