
// === swap function ===
//store value of index one in temp
//set value of index one to index two
//set value of index two to temp (which holds index one's value)
const swap = (array, index1, index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

const bubbleSort1 = (array) => {
    for(let i = array.length; i >= 0; i--) {
        for(let j = 0; j < i - 1; j++){
            if(array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};

console.log(
    "bubbleSort1",
    bubbleSort1([0,6,2,56,11,38]),
    bubbleSort1([87,34,25,68,1,6]),
    bubbleSort1([97,72,63,20,51])
);



// ===== OPTIMIZED TO BREAK IF NO SWAPS =====
// create variable to determine if no swaps occured
// create outer loop where i = array.length and decrements so long as i >= 0;
// create inner loop where j = 0 and increments so long as j < i -1
// use j to compare indexes of array and swap them if the left value is higher. 
const bubbleSort2 = (array) => {
    let notSwapped = true;

    for(let i = array.length; i >= 0; i--) {
        let notSwapped = true;

        for(let j = 0; j < i - 1; j++){
            if(array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                notSwapped = false;
            }
        }

        if(notSwapped) break;
    }

    return array;
};

console.log(
    "bubbleSort2",
    bubbleSort2([0,6,2,56,11,38]),
    bubbleSort2([87,34,25,68,1,6]),
    bubbleSort2([97,72,63,20,51])
);



// ===== MADE TO BE MORE SEMANTIC (not necessarily more readable or standard) =====
const bubbleSort3 = (array) => {
    let notSwapped = true;

    for(let pointerR = array.length; pointerR >= 0; pointerR--) {
        let notSwapped = true;

        for(let pointerL = 0; pointerL < pointerR - 1; pointerL++){
            if(array[pointerL] > array[pointerL + 1]) {
                swap(array, pointerL, pointerL + 1);
                notSwapped = false;
            }
        }
        if(notSwapped) break;
    }

    return array;
};

console.log(
    "bubbleSort3",
    bubbleSort3([0,6,2,56,11,38]),
    bubbleSort3([87,34,25,68,1,6]),
    bubbleSort3([97,72,63,20,51])
);




