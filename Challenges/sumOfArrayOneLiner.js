const sumArray = arr => arr.reduce((a, b) => {
    
    console.log(` Came to Add >> ${a} and ${b} `)
    return a + b});

let sampleArr = [1,4,5,6,9];

console.log(`
    Sum of An Array ${sampleArr} is >>> ${sumArray(sampleArr)}
    `)