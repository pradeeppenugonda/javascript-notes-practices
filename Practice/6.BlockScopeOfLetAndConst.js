/* 

    A Block is nothing but the code between two { }.
    A Block is also known as Compound Statement as it combinding/compounding the multiple
     javascript statements. 

    Block scope is nothing but what all we can access inside this block. 


    YOUTUBE Notes

    Block is also known as Compound statements. It is used to combine the multiple statements together

    let & const are hoisted in a block scope. var is in global scope

    let and const variables are stored in block space, so it is called block-scoped but var variables can be accessed outside the block as it is stored in the Global object memory space, hence it is called Global scoped.

    Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope, effectively hiding the outer variable within that scope.

    Example 1: 
    let x = 10; // Outer scope variable
    function example() {
        let x = 20; // Inner scope variable, shadows outer 'x'
      console.log(x); // Prints 20
    }
    example(); //function call
    console.log(x); // Prints 10

    Example 2: 
    var a = 199;
    {
        var a = 10;
    }
    console log(a);

    variables declared with var are function-scoped or globally scoped, but they are not block-scoped like variables declared with let or const. So, the var a declared inside the block {} will override the outer var a declaration, and the value of a will be 10 when logged outside the block.

    var variable of function scoped overwrites the value of Global Scoped variable.

    Scope for arrow function is also same!


*/


/* 
    In the below case "appleCost" and "grapesCost" will be under "Block" instead of Global
*/

var bananaCost = 45;

{

    // console.log(`Apple Cost is ${appleCost}`)
    console.log(`Banana Cost is ${bananaCost}`)

    var bananaCost = 15;
    console.log(`Banana Cost is ${bananaCost}`)

    let appleCost = 39;
    console.log(`Apple Cost is ${appleCost}`)

    const grapesCost = 24;
}

// console.log(`All Fruites Price 

//     Bananas ${bananaCost}
//      Grapes ${grapesCost}
//     `)


var a = 199;
    {
        var a = 10;
    }
console.log(a);