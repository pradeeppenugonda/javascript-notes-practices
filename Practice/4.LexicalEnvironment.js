/* 

1. In JS, before the code is executed, the variables get initialized to undefined.
2. Arrow functions act as variables and get "undefined" during the memory creation phase 
    while functions actually get run.
    
3. Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope
     before execution. Therefore it is possible to call a function before initializing it.

4. Whenever a JS program is run, a global execution block is created, 
    which comprises of 2: 
        Memory creation and Code execution.
        
5. Variable declarations are scanned and are made undefined
6. Function declarations are scanned and are made available


Lexical Environment & Scope Chain 

In general terms `Lexical` means `Related to`

"Lexical Environment" is the local memory along with it's parent's lexical environment.

"Scope Chain" is nothing but searching the reference which is being used in the current block of code, 
in local memory and it's lexical heirarchy. 

*/

function a() {
    var b = 9;
    c();
    function c (){
        console.log(`Value of b is >>> ${b}`)
    }
}

a();
