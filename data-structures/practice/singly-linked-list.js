

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    Node(value) {
        return { value, next: null };
    }

    push(value) {
        let newNode = this.Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length ++;
        return this;
    }

    pop() {
        let oldNode = this.tail;
        if(this.length === 0) return undefined;
        else if(this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            let node = this.head;

            while(node.next !== this.tail) {
                node = node.next;
            }

            this.tail = node;
            this.tail.next = null;
        }
        this.length --;
        return oldNode;
    }

    unshift(value) {
        let newNode = this.Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length ++;
        return newNode;
    }

    shift() {
        let oldHead = this.head;
        if(this.length === 0) return undefined;
        else if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length --;
        return oldHead;
    }

    get(index) {
        if(this.length === 0) return undefined;
        else if(index >= this.length || index < 0) return undefined;
        else {
            let node = this.head;
            for(let i = 0; i < index; i++) {
                node = node.next;
            }

            return node;
        }
    }

    set(index, value) {
        if(index >= this.length || index < 0) return undefined;
        let node = this.get(index);
        node.value = value;
        return this;
    }

    insert(index, value) {
        if(index > this.length || index < 0) return undefined;
        else if(index === 0) return this.unshift(value);
        else if(index === this.length) return this.push(value);
        else {
            let prevNode = this.get(index - 1);
            let nextNode = prevNode.next;
            let newNode = this.Node(value);

            prevNode.next = newNode;
            newNode.next = nextNode;

            this.length ++;
            return this;
        }
    }

    remove(index) {
        if(this.length === 0) return undefined;
        else if(index > this.length - 1 || index < 0) return undefined;
        else if(index === 0) return this.shift();
        else if(index === this.length - 1) return this.pop();
        else {
            let prevNode = this.get(index - 1);
            let nextNode = prevNode.next.next;

            prevNode.next = nextNode;
            this.length --;
            return this;
        } 
    } 

    reverse() {
        if(this.length === 0 || this.length === 1) return this;
        else if(this.legnth === 2) {
            let oldTail = this.tail;
            this.tail = this.head;
            this.tail.next = null;
            this.head = oldTail;
            this.head.next = this.tail;
        } else {
            let prevNode = null;
            let currNode = this.head;
            let nextNode = this.head.next;

            while(currNode) {
                currNode.next = prevNode;
                prevNode = currNode;
                currNode = nextNode;
                nextNode = currNode === null? null : currNode.next;
            }

            let oldTail = this.tail;
            this.tail = this.head;
            this.head = oldTail;

            return this;
        }
    }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.reverse();
// list.pop();
// list.pop();
// list.unshift(1);
// list.unshift(2);
// list.set(0, 100);
// list.set(1, 1000)
// list.insert(1, 500);
// list.remove(0);



console.log(JSON.stringify(list, null, 2));