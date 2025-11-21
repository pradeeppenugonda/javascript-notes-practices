const uniqueArray = arr => [ ...new Set(arr)];

let sampleArray = [1,9, 5,4,4,4,5,5,5,5,5,6,6,6,6,6,6,9,9,9,9]

let uniqueValues = uniqueArray(sampleArray).sort();
// uniqueValues = uniqueValues.sort((a, b) => a - b); // -- Not required as it is one level of numerics

console.log(`Unique Values are >>> `, uniqueValues)


console.log(`
    Unique Array for ${sampleArray} >>>  ${uniqueArray(sampleArray)}
    `)

/* 
    Uses "'Set'" to store only unique values.
 */