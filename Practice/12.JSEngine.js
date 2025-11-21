/* 

Overview of JavaScript Engines
------------------------------

JavaScript engines are crucial for executing JavaScript code in web browsers and server environments.
They convert high-level JavaScript code into machine code that can be executed by the computer.
The performance of JavaScript engines significantly impacts the speed and efficiency of web applications.

Google's V8 Engine
-------------------

V8 is an open-source JavaScript engine developed by Google, primarily used in the Chrome browser and Node.js.
It employs Just-In-Time (JIT) compilation, converting JavaScript into machine code at runtime for faster execution.
V8 supports modern JavaScript features, enhancing performance and enabling developers to write more complex applications.

Execution Process in JavaScript Engines
---------------------------------------

The execution process involves parsing, compiling, and executing JavaScript code.
Initially, the JavaScript code is parsed into an Abstract Syntax Tree (AST), which represents the structure of the code.
The engine then compiles the AST into machine code, optimizing it for performance before executing it.

Garbage Collection
-------------------

JavaScript engines include garbage collectors to manage memory usage effectively.
The garbage collector automatically frees up memory occupied by objects that are no longer in use, preventing memory leaks.
Efficient garbage collection is essential for maintaining performance, especially in applications that handle large amounts of data.

Interpreted vs. Compiled Languages
----------------------------------
JavaScript is typically classified as an interpreted language, but modern engines utilize a hybrid approach combining interpretation and compilation.
Just-In-Time (JIT) compilation allows engines to optimize performance while maintaining the flexibility of interpreted languages.
This dual approach enables JavaScript to run efficiently across different platforms and environments.

Optimization Techniques
------------------------
JavaScript engines implement various optimization techniques to enhance execution speed, such as inline caching and function inlining.
These techniques help reduce the overhead of repeated operations and improve the overall performance of JavaScript applications.
Regular updates to engines like V8 ensure that they keep up with the latest standards and performance enhancements.

Conclusion
----------
The architecture and functioning of JavaScript engines, especially V8, play a pivotal role in web development, influencing both performance and user experience.
Understanding these concepts is essential for developers to write efficient and effective JavaScript code.
As web technologies evolve, so do the engines, continually improving how JavaScript is executed in modern applications.
 
Basic idea about Mark & Sweep Algo:
It comprise of 2 phases - 
1. Mark phase
2. Sweep phase

All objects are marked as 0 initially (at creation) and in mark phase the objects that will be accessible are marked as 1 (reachable) by a DFS graph traversal.

During sweep phase, the objects marked with 0 are removed from heap memory. and also all reachable objects are again initialized with 0 (made unreachable) because the algorithm will run again.



YOUTUBE
-------


Things learned:
1. JS runtime environment contains all elements required to run JS.
2. It contains JS engine, set of API's, callback queue, microtask queue, event loop.
3. JS engine is a piece of code.
4. Process includes Parsing ---> Compilation -----> Execution.
5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).
6. Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.
7. Execution and Compilation are done together.
8. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.

*/