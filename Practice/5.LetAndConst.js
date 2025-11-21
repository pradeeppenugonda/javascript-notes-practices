/* 
    Let & Const 
    
    If we declare the a variable with "let" keyword, It will be under "Script". 

    Where as if we declare the a variable with "var" keyword, It will be under "Global".

    Hoisting    -   

    temporal dead zone (TDZ) -  

    YOUTUBE NOTES

    let and const are hoisted. 
    we cant use them before initialization is result of "temporal dead zone".

    -> js use diff memory than global execution context to store let and cost.
         which is reason behind "temporal dead zone"

    -> level of strictness ... var<<let<<const.
    
    -> var //no temporal dead zone, can redeclare and re-initialize, stored in GES

        let //use TDZ, can't re-declare, can re-initialize, stored in separate memory

        const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory

    -> syntax error is similar to compile error. while type and reference error falls under run time error.

    -> syntax error ... violation of JS syntax
        type error ...  while trying to re-initialize const variable
        reference error ... while trying to access variable which is not there in global memory.

    1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
    2. Temporal Dead Zone exists until variable is declared and assigned a value.
    3. window.variable OR this.variable will not give value of variable defined using let or const.

 */


    // console.log(`Apple Cost is ${appleCost}`)

    console.log(`Banana Cost is ${bananaCost}`)
    let appleCost = 39;
    console.log(`Apple Cost is ${appleCost}`)
    var bananaCost = 15;
    // console.log(`Banana Cost is ${bananaCost}`)
    
    const grapes = 24;

    // const grapes;
    // grapes = 24;
