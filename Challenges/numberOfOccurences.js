// Given a string, return an object with the number of occurrences of each character in the string.
const count = (s) => {
    const obj = {};
    for (const char of s) {
        
        obj[char] = (obj[char] || 0) + 1;
    }
    return obj;
};

const sampleString = "hello world";
console.log(count(sampleString));


/* Another Way Using For Each */
const usingForEach = (s) => {
    const obj = {};
    [...s].forEach((char) => {
      
        obj[char] = (obj[char] || 0) + 1;
    
    });
    return obj;
};

const str = "hello world";
console.log(usingForEach(str));