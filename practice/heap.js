class Node {
    constructor(value) {
        this.value = value;
    }
}

class MaxBinaryHeap {
    constructor() {
        this.heap = [];
    }

    parent(index) {
        return Math.floor( (index - 1) / 2 );
    }

    left(index) {
        return index * 2 + 1;
    }

    right(index) {
        return index * 2 + 2;
    }

    swap(index1, index2, array) {
        let tempNode = array[index1];
        array[index1] = array[index2];
        array[index2] = tempNode;
    }

    insert(value) {
        const { heap, swap, parent } = this;
        let newNode = new Node(value);
        heap.push(newNode);
        let currIndex = heap.length - 1;
        let parentIndex = parent(currIndex);

        if(heap.length === 1) return this;

        //bubble up;
        while(true) {
            if(currIndex === 0) return this;
            if(value > heap[parentIndex].value) {
                swap(currIndex, parentIndex, heap);
                currIndex = parentIndex;
                parentIndex = parent(currIndex);
            } else return this;
        }
    }

    extractMax() {
        const { heap, bubbleDown } = this;
        if(heap.length === 0) return undefined;
        else if(heap.length === 1) return heap.pop();
        else {
            let returnedNode = heap[0];
            heap[0] = heap.pop();
            bubbleDown(this);
            return returnedNode;
        }
    }

    bubbleDown(parentMethods) {
        const { heap, left, right, swap } = parentMethods;
        let leftIndex, rightIndex, leftPriority, rightPriority;
        let currIndex = 0;
        let currPriority = heap[currIndex].value;

        while(true) {
            leftIndex = left(currIndex);
            rightIndex = right(currIndex);
            leftPriority = heap[leftIndex]? heap[leftIndex].value : -Infinity;
            rightPriority = heap[rightIndex]? heap[rightIndex].value : -Infinity;

            if(leftIndex >= heap.length && rightIndex >= heap.length) return;
            else if(currPriority > leftPriority && currPriority > rightPriority) return;
            else {
                if(leftPriority > rightPriority) {
                    swap(currIndex, leftIndex, heap);
                    currIndex = leftIndex;
                } else if(rightPriority > leftPriority) {
                    swap(currIndex, rightIndex, heap);
                    currIndex = rightIndex;
                }
            }
        }

    }
}


const heap = new MaxBinaryHeap();

heap.insert(8)
heap.insert(1)
heap.insert(3)
heap.insert(4)
heap.insert(6)
heap.insert(2)
heap.insert(9)
heap.insert(5)
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()


console.log(heap.heap);