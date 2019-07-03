
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


            // this doesn't account for when the left or right child doessn't exist, apparently
            // think of that solution in a bit. 
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

let maxHeap = new MaxBinaryHeap();

maxHeap.insert(5);
maxHeap.insert(6);
maxHeap.insert(7);
maxHeap.insert(8);
maxHeap.insert(9);
maxHeap.insert(1);
maxHeap.insert(2);
maxHeap.insert(4);

console.log(JSON.stringify(maxHeap.removeMax(), null, 2))