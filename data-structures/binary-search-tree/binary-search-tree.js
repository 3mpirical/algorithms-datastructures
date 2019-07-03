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

class BST {
    constructor() {
        this.root = null;
    }

    Node(value) {
        return {
            value,
            left: null,
            right: null,
        }
    }

    insert(value) {
        let newNode = this.Node(value);
        if(!this.root) return this.root = newNode;
        let currNode = this.root;
        let traversing = true;

        while(traversing) {
            if(value < currNode.value) {
                if(currNode.left) currNode = currNode.left;
                else {
                    currNode.left = newNode;
                    traversing = false;
                }
            } else if(value > currNode.value) {
                if(currNode.right) currNode = currNode.right;
                else {
                    currNode.right = newNode;
                    traversing = false;
                }
            } else {
                traversing = false;
            }
        }

        return this;
    }

    find(value) {
        if(!this.root) return undefined;
        if(value === this.root.value) return this.root;
        
        let currNode = this.root;
        
        while(true) {
            if(value < currNode.value) {
                if(currNode.left.value === value) return currNode.left;
                else if(!currNode.left) return undefined;
                else currNode = currNode.left;
            } else if(value > currNode.value) {
                if(currNode.right.value === value) return currNode.right;
                else if(!currNode.right) return undefined;
                else currNode = currNode.right;
            }
        }
    }

    BFS() {
        let node = this.root;
        let queue = new Queue();
        let visited = [];
        queue.push(node);
        while(queue.length > 0) {
            node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            visited.push(node);
        }

        return visited;
    }
}

const tree = new BST();


tree.insert(5);
tree.insert(1);
tree.insert(6);
tree.insert(2);
tree.insert(7);
tree.insert(9);
tree.insert(4);
tree.insert(3);
tree.insert(8);
tree.insert(10);

console.log(tree.BFS());


// const comments = [
//     {id: 1, comment: 1, parentId: 2},
//     {id: 2, comment: 2, parentId: 3},
//     {id: 3, comment: 3, parentId: null},
//     {id: 4, comment: 4, parentId: 2},
//     {id: 5, comment: 5, parentId: 3},
//     {id: 5, comment: 6, parentId: null}
// ];

// const printComments = (comments) => {
//     let root = { children: {} };
//     let commentHash = {};
//     // let traversing = true;
//     let currNode = root;

//     comments.forEach((comment) => {
//         if(!comment.parentId) root.children[comment.id] = comment;
//         else if(!commentHash[comment.parentId]) commentHash[comment.parentId] = [comment];
//         else {
//             commentHash[comment.parentId].push(comment);
//         }
//     });

//     const printComments = (node) => {
//         if (commentHash[node.id]) {
//             commentHash[node.id].forEach((child) => {
//                 console.log(child.comment)
//             });
//         }
//     }



//     printComments(root);
// };

// printComments(comments);