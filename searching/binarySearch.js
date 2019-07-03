// Binary Search can only be performed on sorted arrays
// ^^because it uses divide and conquer, we need to find 
//   the middle most value of a given set of data


// accepts sorted array and value
// create a left pointer at the start of the array, and a right pointer at the end of the array.
// While the left pointer comes before the right pointer: 
//      *create a pointer in the middle
//      *if you find the value you want, return the index
//      *if the value is too small, move the pointer up
//      *if the value is too large, move the pointer down
//If you never find the value, return -1

const binarySearch = (array, value) => {
    let pointerL = 0;
    let pointerR = array.length - 1;

    const checkMiddle = () => {
        let pointerM = Math.floor((pointerL + pointerR) / 2);

        if(value === array[pointerM]) return pointerM;
        else if(value > array[pointerM]) pointerL = pointerM + 1;
        else if(value < array[pointerM]) pointerR = pointerM - 1;
        return (pointerL <= pointerR)? checkMiddle(): -1;  
    };

    return checkMiddle();
};


console.log(
    "Recursive: ",
    binarySearch([0, 1, 3, 5, 8, 12, 13, 16, 18], 3),
    binarySearch([0, 1, 3, 5, 8, 12, 13, 16, 18], 18),
    binarySearch([0, 1, 3, 5, 8, 12, 13, 16, 18], 12),
    binarySearch([0, 1, 3, 5, 8, 12, 13, 16, 18], 45),
    binarySearch([0, 1, 3, 5, 8, 12, 13, 16, 18], 0)
);


// iterative binary search
// In this search, we do a few things differently.
//   1) the middle pointer is declared in the while loop so that its value is recalculated every time.
//   2) pointerL and pointerR are set to be +1 || -1 if the middle value is not what we want
//   3) because of ^^^ our loop condition is (pointerL <= pointerR); the adding/subtracting of 1 will cause the loop to break this condition. 
const binarySearchIt = (array, value) => {
    let pointerL = 0;
    let pointerR = array.length - 1;

    while (pointerL <= pointerR) {
        pointerM = Math.floor( (pointerL + pointerR) / 2 );
        if(value === array[pointerM]) return pointerM;
        else if(value > array[pointerM]) pointerL = pointerM + 1;
        else if(value < array[pointerM]) pointerR = pointerM - 1;
    }

    return -1;
};

console.log(
    "Iterative: ",
    binarySearchIt([0, 1, 3, 5, 8, 12, 13, 16, 18], 3),
    binarySearchIt([0, 1, 3, 5, 8, 12, 13, 16, 18], 18),
    binarySearchIt([0, 1, 3, 5, 8, 12, 13, 16, 18], 12),
    binarySearchIt([0, 1, 3, 5, 8, 12, 13, 16, 18], 45),
    binarySearchIt([0, 1, 3, 5, 8, 12, 13, 16, 18], 0)
);