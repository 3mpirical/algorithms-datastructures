

// create left and right pointers
// set while loop for when left pointer is less than/equal to right pointer
// create middle pointer within loop as an average of left/right pointer
// if middle pointer === value, return middle pointer
// if the pointer value is lessthan/greater than the value, move the left and right pointer to +-1 of the middle pointer
// if the value is not found, return -1

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
    binarySearch([1,3,7,9,13,17,24,25], 69)
);