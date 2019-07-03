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
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }

        this.length ++;
        return this;
    }

    shift() {
        let oldHead = this.head;
        if(this.length === 0) return undefined;
        else if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length --;
        return oldHead;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if(!this.root) this.root = newNode;
        else {
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
                } else {
                    return this;
                }
            }
        }
    }

    search(value) {
        if(!this.root) return undefined;
        else {
            let currNode = this.root;

            while(true) {
                if(value === currNode.value) return currNode;
                else if(value < currNode.value && currNode.left) {
                    currNode = currNode.left;
                } else if(value > currNode.value && currNode.right) {
                    currNode = currNode.right;
                } else {
                    return undefined;
                }
            }

        }
    }

    delete(value) {
        if(!this.root) return undefined;
        else if(value === this.root.value) {
            let oldRoot = this.root;
            this.root = null;
            return oldRoot;
        }
        else {
            let currNode = this.root;

            while(true) {
                if(value < currNode.value) {
                    if(currNode.left && currNode.left.value === value) {
                        let oldNode = currNode.left;
                        currNode.left = null;
                        return oldNode;
                    } else currNode = currNode.left;

                } else if(value > currNode.value) {
                    if(currNode.right && currNode.right.value === value) {
                        let oldNode = currNode.right;
                        currNode.right = null;
                        return oldNode;
                    } else currNode = currNode.right;
                } else return undefined;
            }
        }
    }

    BFS() {
        if(!this.root) return undefined;
        else {
            let queue = new Queue();
            let visited = [];
            let currNode = null;
            queue.push(this.root);

            while(queue.length > 0) {
                currNode = queue.shift();

                if(currNode.left) queue.push(currNode.left);
                if(currNode.right) queue.push(currNode.right);

                visited.push(currNode.value);
            }

            return visited;
        }
    }

    DFSPreorder() {
        if(!this.root) return undefined;
        let visited = [];

        const traverse = (currNode) => {
            visited.push(currNode.value);
            if(currNode.left) traverse(currNode.left);
            if(currNode.right) traverse(currNode.right);
        };

        traverse(this.root);

        return visited;
    }

    DFSInorder() {
        if(!this.root) return undefined;
        let visited = [];
        
        const traverse = (currNode) => {
            if(currNode.left) traverse(currNode.left);
            visited.push(currNode.value);
            if(currNode.right) traverse(currNode.right);
        };

        traverse(this.root);
        return visited;
    }

    DFSPostorder() {
        if(!this.root) return undefined;
        let visited = [];

        const traverse = (currNode) => {
            if(currNode.left) traverse(currNode.left);
            if(currNode.right) traverse(currNode.right);
            visited.push(currNode.value);
        };

        traverse(this.root);
        return visited;
    }
}


const tree = new BST();

tree.insert(10);
tree.insert(5);
tree.insert(6);
tree.insert(4);
tree.insert(14);
tree.insert(11);
tree.insert(15);

// console.log(JSON.stringify(tree, null, 2));

// console.log(tree.delete(10));

console.log(JSON.stringify(tree.DFSPostorder(), null, 2));