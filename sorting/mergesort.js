
// create merge function
// create recursive function that merges when array has been split to one item or less

const merge = (array1, array2) => {
    let results = [];
    let index1 = 0;
    let index2 = 0;

    while(index1 < array1.length && index2 < array2.length) {
        if(array1[index1] <= array2[index2]) {
            results.push(array1[index1]);
            index1 ++;
        } else {
            results.push(array2[index2]);
            index2 ++;
        }
    }

    if(index1 === array1.length) {
        while(index2 < array2.length) {
            results.push(array2[index2]);
            index2 ++;
        }
    }

    if(index2 === array2.length) {
        while(index1 < array1.length) {
            results.push(array1[index1]);
            index1 ++;
        }
    }

    return results;
};

const mergesort = (array) => {
    if(array.length <= 1) return array;
    let middle = Math.floor(array.length/2);
    let left = mergesort(array.slice(0, middle));
    let right = mergesort(array.slice(middle));
    return merge(left, right);
};

console.log(mergesort([2,4,3,6,5,7]));
