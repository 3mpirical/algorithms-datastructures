
const binarySearch = (array, value) => {
    let pointerL = 0;
    let pointerR = array.length - 1;

    while(pointerL <= pointerR) {
        let pointerM = Math.floor((pointerL + pointerR) / 2);

        if(value === array[pointerM]) return pointerM;
        else if(value > array[pointerM]) pointerL = pointerM + 1;
        else if(value < array[pointerM]) pointerR = pointerM - 1;
    }

    return -1;
};


console.log(
    binarySearch([2, 4, 9, 12, 13, 18, 21, 26], 13),
    binarySearch([2, 4, 9, 12, 13, 18, 21, 26], 2),
    binarySearch([2, 4, 9, 12, 13, 18, 21, 26], 18),
    binarySearch([2, 4, 9, 12, 13, 18, 21, 26], 26),
    binarySearch([2, 4, 9, 12, 13, 18, 21, 26], 0)
);


// ===== bubbleSort =====
const bubbleSort = (array) => {
    const swap = (array, index1, index2) => {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };
    
    let notSwapped;
    
    for(i = array.length; i >= 0; i--) {
        notSwapped = true;

        for(j = 0; j < i - 1; j++) {
            if(array[j] > array[j+1]) swap(array, j, j+1);
            notSwapped = false;
        }

        if(notSwapped === true) break;
    }

    return array;
};

console.log(
    bubbleSort([12,64,806,32,542,20]),
    bubbleSort([83,23,352,14]),
    bubbleSort([90,35,64,27,85])
);


// ===== insertionSort =====
const insertionSort = (array) => {
    const moveRight = (array, index) => {
        array[index + 1] = array[index];
    };

    for(i = 1; i < array.length; i++){ 
        let item = array[i];
        for(j = i - 1; j >= 0; j--) {
            if(array[j] > item) moveRight(array, j);
            else break;
        }
        array[j+1] = item;
    }
    return array;
};

console.log(
    insertionSort([83,35,63,16,29]),
    insertionSort([685,94,3,27]),
    insertionSort([25,32,73,40,16]),
    insertionSort([42,78,35,54,15])
);



// insertion sort =====
// create a loop where i = 1 and increments so long as i < array.length
// create a temp varibale to store array[i]
// create a loop where j = i - 1 and decrements so long as i >= 0;
// if array[j] > temp value, move array[j] right. else break.
// when values are moved, array[j+1] = temp value;

const insertionSort2 = (array) => {
    const moveRight = (array, index) => {
        array[index+1] = array[index];
    };

    for(i = 1; i < array.length; i++) {
        let item = array[i];

        for(j = i - 1; j >= 0 ; j--) {
            if(array[j] > item) moveRight(array, j);
            else break;
        }

        array[j+1] = item;
    }

    return array;
};

console.log(
    insertionSort2([387,235,145,4506,34768,2356,8564,545,9527])
);