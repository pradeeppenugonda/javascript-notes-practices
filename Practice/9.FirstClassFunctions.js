/* 
    YOUTUBE Notes

1.  What is Function Statement ?
A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
      For Ex  -  function xyz(){
                            console.log("Function Statement");
                       }

2.  What is Function Expression ?
A.  When we assign a function into a variable that is Function Expression. 
    & We can not do Hoisting by this becz it acts like variable.
      For Ex - var a = function(){
                            console.log("Function Expression");
                    }

3.  What is Anonymous Function ?
A.  A Function without the name is known as Anonymous Function. 
    & It is used in a place where function are treated as value.
      For Ex - function(){
                     }

4.  What is Named Function Expression ?
A.  A function with a name is known as Named Function Expression.
      For Ex - var a = function xyx(){
                            console.log("Names Function Expression");
                     }

5.  Difference b/w Parameters and Arguments ?
A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
       For Ex - function ab( param1, param2 ){
                              console.log("
                      }
       & When we call this function & pass a values in this ( ) that is our Arguments
       For Ex - ab( 4, 5 );

6.  What is First Class Function Or First class citizens?
A.   The Ability of use function as value,

*     Can be passed as an Argument,
*     Can be executed inside a closured function &
*     Can be taken as return form.
       For Ex - var b = function(param){
                             return function xyz(){
                                     console.log(" F C F ");
                             }
                     } 

7. Function are heart of JS. They are called first class citizens or first class functions because 
they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.

*/




/* 
    
    The difference b/w function statement and function expression is hoisting. 
    if we call function expression before it's declaration, we get error by saying it's not a function.


    Anonymus functions are used when the functions are used as values .. 
    Eg : Function expressions, 


    the lables which are in function declaration are known as Parameters. 

    function a (param1, param2) {
        console.log ('Hello Parameters >> > ', param1, param2)
    }

    the values which are passed in a function call is known as arguments. 
    a(1, 2);
    
    What is First Class Function Or First class citizens?
    A.   The Ability of use function as value,
    
*/

a();
b();




/* 
    Function Statement AKA Function Declaration
*/

function a () {
    console.log(`Hello Pradeep, it's Function Statement `)
}


/* 
    Function Expression
*/

let b = function () {
    console.log(`Hello Pradeep, it's Function Expression `)
}



/* 
    Anonymus Function 
    but we do get error saying that Funtion Statement should contain Name. 

*/

// function () {
//     console.log(`Hello Anonymus Function `)
// }


// Named Function expression

let x = function abc () {
    console.log(`Hello Pradeep, it's Named Function Expression `)
}
x();
// abc() -- can't because of not declared in global scope. 



