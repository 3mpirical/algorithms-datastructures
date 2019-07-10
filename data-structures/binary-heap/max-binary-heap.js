
class MaxBinaryHeap {
    constructor() {
        this.heap = [];
    }

    leftChild(index) {
        return index * 2 + 1;
    }

    rightChild(index) {
        return index * 2 + 2;
    }

    swap(index1, index2, heap) {
        let tempNode = heap[index1];
        heap[index1] = heap[index2];
        heap[index2] = tempNode;
    }
    
    insert(value) {
        const { heap, swap } = this;
        heap.push(value);
        let currIndex = heap.length - 1;
        let parentIndex;

        while(currIndex !== 0) {
            parentIndex = Math.floor( (currIndex - 1) / 2 )

            if(heap[currIndex] > heap[parentIndex]) {
                swap(currIndex, parentIndex, this.heap);
                currIndex = parentIndex;
            } else return this;
        }

        return this;
    }

    removeMax() {
        const { heap, swap, leftChild, rightChild } = this;
        if(heap.length === 0) return undefined;
        else if(heap.length === 1) {
            heap.shift();
            return this;
        } else {
            heap.shift();
            heap.unshift(heap.pop());
            let currIndex = 0;
            let leftIndex = leftChild(currIndex);
            let rightIndex = rightChild(currIndex);

            while(heap[currIndex] < heap[leftIndex] || heap[currIndex] < heap[rightIndex]) {
                if(heap[leftIndex] > heap[rightIndex]) {
                    swap(currIndex, leftIndex, heap);
                    currIndex = leftIndex;
                    leftIndex = leftChild(currIndex);
                    rightIndex = rightChild(currIndex);
                } else if(heap[leftIndex] < heap[rightIndex]){
                    swap(currIndex, rightIndex, heap);
                    currIndex = rightIndex;
                    leftIndex = leftChild(currIndex);
                    rightIndex = rightChild(currIndex);
                }
            }

            return this;
        }
    }
}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    leftChild(index) {
        return index * 2 + 1;
    }

    rightChild(index) {
        return index * 2 + 2;
    }

    swap(index1, index2, heap) {
        let tempNode = heap[index1];
        heap[index1] = heap[index2];
        heap[index2] = tempNode;
    }
    
    enqueue(value, priority) {
        const { heap, swap } = this;
        heap.push(new Node(value, priority));
        let currIndex = heap.length - 1;
        let parentIndex;

        while(currIndex !== 0) {
            parentIndex = Math.floor( (currIndex - 1) / 2 )
            if(heap[currIndex].priority < heap[parentIndex].value) {
                swap(currIndex, parentIndex, this.heap);
                currIndex = parentIndex;
            } else return this;
        }

        return this;
    }

    dequeue() {
        const { heap, bubbleDown } = this;
        if(heap.length === 0) return undefined;
        else if(heap.length === 1) return heap.pop();
        else {
            const highPriority = heap[0];
            heap[0] = heap.pop();
            bubbleDown(this);
            return highPriority;
        }
    }

    bubbleDown(parentMethods) {
        const { heap, swap, leftChild, rightChild } = parentMethods;
        let currIndex = 0;
            
        // within loop, set left index, right index, and all priorities.
        // if node doesn't exist, priority is either Inifinity || -Infinity depending on min/max tree
        // break if both nodes are invalid, or break if current node is bigger/smaller than both children
        // else if child node has higher priority, check which of children has higher priority 
        //   ^^and swap with them and set current index to that index
        while(true) {
            let leftIndex = leftChild(currIndex);
            let rightIndex = rightChild(currIndex);
            let leftPriority = heap[leftIndex]? heap[leftIndex].priority : Infinity;
            let rightPriority = heap[rightIndex]? heap[rightIndex].priority : Infinity;
            let currPriority = heap[currIndex].priority;
            
            if(leftIndex > heap.length && rightIndex > heap.length) break;
            else if(currPriority < leftPriority && currPriority < rightPriority) break;
            else {
                if(leftPriority < rightPriority) {
                    swap(currIndex, leftIndex, heap);
                    currIndex = leftIndex;
                } else if(rightPriority < leftPriority) {
                    swap(currIndex, rightIndex, heap);
                    currIndex = rightIndex;
                }
            }
        }
    }
}

// let maxHeap = new MaxBinaryHeap();

// maxHeap.insert(5);
// maxHeap.insert(6);
// maxHeap.insert(7);
// maxHeap.insert(8);
// maxHeap.insert(9);
// maxHeap.insert(1);
// maxHeap.insert(2);
// maxHeap.insert(4);

// console.log(JSON.stringify(maxHeap.removeMax(), null, 2))

// const pQueue = new PriorityQueue();

// pQueue.enqueue(5, 5);
// pQueue.enqueue(6, 6);
// pQueue.enqueue(7, 7);
// pQueue.enqueue(8, 8);
// pQueue.enqueue(9, 9);
// pQueue.enqueue(1, 1);
// pQueue.enqueue(2, 2);
// pQueue.enqueue(4, 4);


// console.log(JSON.stringify(pQueue, null, 2))
// console.log(JSON.stringify(pQueue.dequeue(), null, 2))
// console.log(JSON.stringify(pQueue.dequeue(), null, 2))
// console.log(JSON.stringify(pQueue.dequeue(), null, 2))


module.exports = PriorityQueue;