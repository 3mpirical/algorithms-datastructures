
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
        const oldNode = this.head;
        if(this.legnth === 0) return undefined;
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length --;
        return oldNode;
    }
}



class BST {
    constructor() {
        this.root = null;
    }

    _node(value) {
        return {
            value, 
            left: null, 
            right: null,
        }
    }

    insert(value) {
        let newNode = this._node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
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

    delete(value) {
        if(!tree.root) return undefined;
        else if(value === this.root.value) {
            let oldNode = this.root;
            this.root = null;
            return oldNode;
        } else {
            let oldNode;
            let currNode = this.root;
            while(true) {
                if(value < currNode.value) {
                    if(!currNode.left) return undefined;
                    else if(value !== currNode.left.value) currNode = currNode.left;
                    else {
                        oldNode = currNode.left;
                        currNode.left = null;
                        return oldNode;
                    }
                } else if(value > currNode.value) {
                    if(!currNode.right) return undefined;
                    else if(value !== currNode.right.value) currNode = currNode.right;
                    else {
                        oldNode = currNode.right;
                        currNode.right = null;
                        return oldNode;
                    }
                } else {
                    return undefined;
                }
            }
        }
    }

    search(value) {
        if(!this.root) return undefined;
        else if(value === this.root.value) return this.root;
        else {
            let currNode = this.root;
            while(true) {
                if(value < currNode.value) {
                    if(!currNode.left) return undefined;
                    else if(value !== currNode.left.value) currNode = currNode.left;
                    else return currNode.left;
                } else if(value > currNode.value) {
                    if(!currNode.right) return undefined;
                    else if(value !== currNode.right.value) currNode = currNode.right;
                    else return currNode.right;
                } else {
                    return undefined;
                }
            }
        }
    }

    BFS() {
        if(!this.root) return undefined;
        const queue = new Queue();
        const visited = [];
        let currNode;
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

const tree = new BST();

tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(4);
tree.insert(6);
tree.insert(1);



// console.log(JSON.stringify(tree.search(3), null, 2));
// console.log(JSON.stringify(tree.BFS(), null, 2));