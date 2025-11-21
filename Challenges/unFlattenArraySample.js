const array = [1,2,4,[4,5],5,6,7,[2,4,6,[3,4,5,[2,5,[4,6]]]],9]

    // 1,2,4,4,5,5,6,7,2,4,6,3,4,5,2,5,4,6,9

function findNthLargest(arr, N) {

    const flattenArray = new Set(arr.flat(4).sort());
    console.log(`Flatten Array >>> `, flattenArray)
    let nThLargestNumer = [...flattenArray].reverse()[N - 1 ];
    
    console.log(`N th Largest Number is >>> `, nThLargestNumer)
    
    return nThLargestNumer
}

console.log(findNthLargest(array, 4))