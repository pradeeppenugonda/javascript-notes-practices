/**
 * Code Execution 
 * How JavaScript works?
 
Everything in JavaScript happens inside an "execution context". 

Execution context has two components/Sections/Parts ... 

1) memory component [variable environment] 

	-Before the Execution, This is the place where all variables and functions are stored as 
    key value pairs. 

    Before execution all the variable values are undefined. 
    Before execution all the functions are stored as function definition as Object.

    Eg: {key: value ||  n:2;} 

    Eg: {
        x: undefined,
        functionName: fn {}
    }
    

2) code component [Thread of execution]

	-This is the place where code is executed one line at a time from top to bottom 
    - There will be a Blue BOLD Array prefixes to say that it is in 
      the execution/program control
    - global execution context will be in the bottom of the callStack
    - After executing, it will be popped off from the execution context and 
      the controle goes to next statement.
    
Note-

* JavaScript is a synchronous single-threaded language

	-Single threaded means JavaScript can execute once command at a time
	-Synchronous single-threaded that means JavaScript can execute one command at a time in a specific order.

*/


    // getName();
    // console.log(`Value of X is ${x}`)   // It will return undefined as we are accessing the value 
    // console.log(getName)

    var x = 6;

    function getName () {
        console.log(`Hello Javascript`);
    }

    const getNameFnExpression = () => {
        console.log(`Hello Javascript from Function Expression / Lamda Funtion/ Fat Arrow Function`)
    }

    // getName();
    // console.log(`Value of X is ${x}`)

    for (let i = 1; i <= 3; i++) {
        console.log("Hello");
        i += 2;
        console.log(`I Value is ${i}`)
      }

      for (let i = 'A'.charCodeAt(0); i <= 'E'.charCodeAt(0); i++) {

        console.log(String.fromCharCode(i), i);
      }