/*  
    What is a callback Function ? 

    Simpley a Call back function is the one which we will pass in "First Class Functions". 


    Javascript is a synchronus and single-threaded language. 
*/



/* Callback Function  Example 

    abc function call sending the arrow function. 
    That arrow function is called callback Function  

*/
/* 
    If we add any Event Listener .. 
    the function which is called on that particular event will be stored in separate memory. 
    And if we put a breakpoint inside that function, we can see that will come to callstack while executing the code block of it.

    This event listeners can be visually seen in Debugger tool.

    we have to navigate to Elements Section >> under elements section we can see a tab named 
        EventListeners >> under this tab we can see the event listner function and it's closure there.
    So Every Event listner will create a Closure, so it consumes memory. 

    So if we have lot of event listeners it will consume lot of memory, so better to remove the event listeners when it is not useful.
    It can be a memory optimisation technique. 
    

*/


setTimeout(() => {
    console.log(`
    This Arrow fucntion in setTimeout is a callback function,
    which will trigger after 5000 milli seconds`)
}, 5000);

function attachEventListener () {
    let clickCount = 0;

    document.getElementById('myButton').addEventListener('click', function onButtonClick() {
        console.log(` On Button Click `, ++clickCount);
    })
    
}

attachEventListener();


// setTimeout(() => {
//     document.getElementById('myButton').addEventListener('click', ()=> {
//         console.log(` On Button Click `)
//     })
// }, 100);

function abc (callbackFn) {
    console.log(`CallBack Function is `, callbackFn)
    callbackFn();
}


abc(() => {
    console.log(`
    Hello This is the actual log from Callback Function passed to function abc 
`)
})



/* 
    YOUTUBE Notes

1. Function that is passed on as argument to another function is called callback function.
2. setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous.
3. Event listeners can also invoke closures with scope.
4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.


what is a call back function in java script ?
 
we already know that function are first class citizens in JavaScript.
that means we can take a function and pass it to another function.
when we a pass a function to another function, whatever the function that we are passing as an argument that we call it as call back function.
 
Example:-
 
function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("y");
});
 
in the above example function y is the call back function to the function x.
in the above example it is up to function x on when it wants to execute function y, means in the code function y will get called by function x after some time, that’s the reason we got the naming convention as call back function , these function will get called after a while back.
 
setTimeout(function a() {
    console.log("Hi")
}, 5000)
 
in the above example function a() is the call back function to the function setTimeout.
 
these call back functions are very powerful in JavaScript.
it gives us access to the whole asynchronous world in a synchronous single threaded language.
JavaScript is a synchronous single threaded language. That means it can do one thing at a time in a single order.
 
but using call backs we can do asynchronous operation in JavaScript.
 
for example if any function or operation takes lot of time (may be 20 to 30 seconds),
and if we try to execute this function using main thread (JavaScript has only one main thread), then the JavaScript won’t be able to do any other things in these 20 to 30 seconds.
we should never block our main thread.
that’s the reason we should always try to choose async operation which takes time.
 
without the concept of call back function we won’t be able to achieve async operation in JavaScript.


*/

