const toBinary = num => num.toString(2);

let sampleNumber = 15;
let str = 'V'
console.log(`Char Code >>> `, str.charCodeAt(0).toString(6))
console.log(`Convert to number ${sampleNumber} to binary >>> ${toBinary(sampleNumber)}`)

/* 
    Converts number to binary using .toString(2).
    
        5   -   101 (2^2*1 + 2^1*0 + 2^0*1)

        15  -   1111 (2^3*1 + 2^2*1 + 2^1*1 + 2^0*1)
    
 */