const timer = require("../utilities/timer");


// timer.start();



// Implementation of frequency counter pattern
// When we need to compare two arrays for the same values, and the same frequency of those values.
// Instead of looping over the first array and then looping over the second array for each value (O(n^2)) we can just loop over the first array and second array once, collect the values in the array as keys in an abject and the frequency as the value of the key, then use a third loop to compare the two objects. Because the second exaple only has three loops instead of nested loops, its complexity is an order of n rather than n^2.
const isAnagram = (string1, string2) => {
    if (string1.length !== string2.length) return false;
    let obj1 = {}, obj2 = {};

    // construct object 1
    for(let value of string1) {
        (obj1[value] !== undefined)? obj1[value] ++ : obj1[value] = 1;
    }
    // construct object 2
    for(let value of string1) {
        (obj2[value] !== undefined)? obj2[value] ++ : obj2[value] = 1;
    }
    //compare object 1 and 2
    for(let letter in obj1) {
        if(obj2[letter] === undefined) return false;
        if(obj2[letter] !== obj1[letter]) return false;
        return true;
    }
};

console.log(
    isAnagram("hello", "olleh"),
    isAnagram("hello", "oll"),
    isAnagram("harry", "harrry"),
    isAnagram("4455669", "4455669"),
    isAnagram("666", "66")
);
