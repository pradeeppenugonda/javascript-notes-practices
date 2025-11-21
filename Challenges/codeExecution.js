// let x = "64";
// let y = 8;
// console.log(x/y);
// console.log(x*y);
// console.log(x-y);

// console.log(x+y);

/* 

The typeof operator in JavaScript returns "number" for both integers and floating-point numbers,
    
and "string" for string literals
*/
let x = 1; 
let y = 2.6;  
let z = "2 + 3i";

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);


let a = Boolean('false')

console.log(`Value of a is ${a}`)


/* 
Guess the Code
In the string "Programming", mark the code for printing substring "Pro".

where x is

let x = "Programming";


HINT : substring function is used to extract substring from a string in Javascript. 
It considers zero based indexing 
    and return substring ranging from [startindex , endindex).

*/


/* 
const obj = { id: 999, fn: function () { console.log(this.id) } }
const obj2 = { id: 2, fn: obj.fn }
obj2.fn() // prints 2
obj.fn() // prints 999 

*/

function fn() { console.log(this.id) }
const obj = { id: 999 }
const obj2 = { id: 2 }
fn.call(obj2) // prints 2
fn.call(obj) // prints 999
fn.call({id: ':)'}) // prints :)



let sampleStr = "Hello Pradeep ";

let str = sampleStr.substring(0,5);
let sampleArr = ['Hello', 'Pradeep', 'Kumar', '139', '123']
console.log(`SubString is `, str)
// console.log(`SubStr is `, subStr)



const findFn = (value, index, array) => {
    // console.log(`Value is ${value}, Index is ${index}, Array is ${array}`)
    if(value === '139') {
        console.log(`Found the value ${value} at index ${index}`)
        return index
    }

}
let res = sampleArr.find(findFn);
console.log(`Result of Find >>> `, res)
