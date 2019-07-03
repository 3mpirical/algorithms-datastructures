// linear search is when we move one item at a time, 
// checking each value for what we want.

// accepts array and value
// loop through entire array and check if the current element is equal to the value.
// if it is, return the index at which the element is found.
// if the value is never found, return -1.

// it's the best we can do on an unsorted set of data.

const linearSearch = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === value) return i;
    }
    return -1;
};

console.log(
    linearSearch([0,3,0, 5,6,8,10], 90),
    linearSearch([0,3,0, 5,6,8,10], 5),
    linearSearch([0,3,0, 5,6,8,10], 8),
    linearSearch([0,3,0, 5,6,8,10], 10)
);