// INSERTION SORT
// 1) create a loop where i = 1 and increments so long as i < array.length
// 2) create item variable where item = array[i]
// 3) create a loop where j = i - 1, and decrements so long as j >= 0 
// 4) if array[j] is greater than item, move array[j] right; else break from loop
// 5) if loop breaks or ends array[j+1] = item

const insertionSort = (array) => {
    for(i = 1; i < array.length; i++) {
        let item = array[i];
        for(j = i - 1; j >= 0 ; j--) {
            if(array[j] > item) array[j+1] = array[j];
            else break;
        }
        array[j+1] = item;
    }
    return array;
};

console.log(
    insertionSort([74,21,69,30,85,22,54])
);

// exactly the same, but with the "move right" operation abstracted
const insertionSort2 = (array) => {
    const moveRight = (index) => {
        array[index + 1] = array[index];
    };

    for(i = 1; i < array.length; i++) {
        let item = array[i];
        for(j = i - 1; j >= 0 ; j--) {
            if(array[j] > item) moveRight(j);
            else break;
        }
        array[j+1] = item;
    }
    return array;
};

console.log(
    insertionSort2([74,21,69,30,85,22,54])
);