
stringSearch = (string, pattern) => {
    let pointerL = 0;
    let pointerR = pattern.length;

    while( !(pointerR > string.length) ) {
        if(string[pointerL] === pattern[0]) {
            window = string.slice(pointerL, pointerR);
            if(window === pattern) return pointerL;
        }
        pointerL ++;
        pointerR ++;
    }

    return -1;

};

console.log(
    stringSearch("sdiheloguwhkdhfjljfdhelloigsuhjnvz", "hello")
);