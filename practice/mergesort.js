// create merging function
// recursively rebuild/merge array

const merge = (array1, array2) => {
    let index1 = 0;
    let index2 = 0;
    const result = [];

    while(index1 < array1.length && index2 < array2.length) {
        if(array1[index1] <= array2[index2]) {
            result.push(array1[index1]);
            index1 ++;
        } else {
            result.push(array2[index2]);
            index2++;
        }
    }
    
    if(index1 !== array1.length) {
        while(index1 < array1.length) {
            result.push(array1[index1]);
            index1++;
        }
    }

    if(index2 !== array2.length) {
        while(index2 < array2.length) {
            result.push(array2[index2]);
            index2 ++;
        }
    }

    return result;
};

const mergesort = (array) => {
    if(array.length <= 1) return array;
    const middle = Math.floor(array.length / 2);
    const leftArr = mergesort(array.slice(0, middle));
    const rightArr = mergesort(array.slice(middle));
    return merge(leftArr, rightArr);
};


console.log(mergesort([7,3,5,8,1,2,9,4]))