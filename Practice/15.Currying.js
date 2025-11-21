/* 
    Function currying

1) Bind method,
Take a function, modify it by attaching bind to define a parameter (or method)

2) Closure method
Take a function, Define parameter in closure style, define another parameter by just defining it while using as curried version
*/

/* 
// Using the Function with Bind 

let multiply = function (a , b) {
    console.log(a * b);
}


let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3)


let multiplyByThree= multiply.bind(this, 3);
multiplyByThree(5)
 */



// Using The Closure type 


let multiply = function (a) {
    return function (b){
        console.log( a * b)
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3)





