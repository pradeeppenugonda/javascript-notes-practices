/* 

    Closure is a function which is binded with its lexical scope. 

    Function along with it's lexical scope. 

    If you return the "function b" in the below code., 
    the assigned variable will recieve the function b and it's lexical scope as well, 
    as it is a closure, 

    Disadvantages
    -------------

    Over memory consumption 
    some times memory can not garbage collected until program expired

    

*/

function a () {
    console.log(`Came to function a `)
    let sampleVariable = 'Hello';
    function b() {
        console.log(`   
    Sample Variable from the function b is >>> 
        ${sampleVariable}` )
    }
    sampleVariable = `
    Hello Pradeep from Closure
    `
    // b();

    return b;

}

// a()();

let c = a();

console.log(`
    The Actual value recieved from function a is `, c)

c();



