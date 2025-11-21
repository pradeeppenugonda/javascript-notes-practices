// const reverseStr = str => str.split("").reverse().join("");

const reverseStr = str => [...str].reverse().join("");
console.log(`
    Reverse the string JavaScript >>> ${reverseStr('JavaScript')}
    `)


/*    
How it works?
    split("")   → Converts string into an array.

    reverse()   → Reverses the array.

    join("")    → Converts back to a string. 
*/