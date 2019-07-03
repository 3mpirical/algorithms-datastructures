

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    Node(value) {
        return {
            value,
            next: null,
        }
    }

    push(value) {
        const newNode = this.Node(value);
        // condition checks if list is empty
        if(!this.head) {
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
        if(!this.head) return undefined;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
            list.length = 0;
            return undefined;
        }

        const oldTail = this.tail;
        let node = this.head;

        while(node.next !== this.tail) {
            node = node.next;
        }

        this.tail = node;
        this.tail.next = null;
        this.length --;
        return oldTail;
    }

    shift() {
        const oldHead = this.head;
        if(!this.head) return undefined;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length --;
        return oldHead;
    }

    unshift(value) {
        const newNode = this.Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length ++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let node = this.head;

        for(let i = 0; i < index; i++) {
            node = node.next;
        }

        return node;
    }

    set(index, value) {
        let node = this.get(index);
        if(!node) return undefined;

        node.value = value;
        return this;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) {
            this.unshift(value);
            return true;
        } else if(index === this.length) {
            this.push(value);
            return true;
        }

        let newNode = this.Node(value);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        newNode.next = nextNode;
        prevNode.next = newNode;
        this.length ++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) {
            this.shift();
            return true;
        } else if(index === this.length) {
            this.pop();
            return true;
        }
        
        let prevNode = this.get(index - 1);
        prevNode.next = prevNode.next.next;
        this.length --;
        return true;
    }

    reverse() {
        if(!this.head) return this;

        for(let i = 0; i < this.length ; i++) {
            this.insert(i, this.pop().value);
        }

        return this;
    }
}


const list  = new SinglyLinkedList();

list.push(2);
list.pop();
list.push(3);
list.push(1);
list.shift();
list.shift();
list.unshift("!");
list.unshift("bro");
list.unshift("story");
list.unshift("cool");
list.set(3, ".");
list.insert(3, ".....");
list.remove(0);
list.reverse()
console.log(JSON.stringify(list, null, 2));



