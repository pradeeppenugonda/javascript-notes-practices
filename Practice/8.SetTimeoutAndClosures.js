function x() {
    var i = 1;
    let k = 1
    setTimeout(() => {
        i = 5;
        k = 5;
        console.log(`Inside TimeOut ${i} , ${k}`)
    }, 3000);
    
    i = 9
    k = 9
    console.log(`OutSide TimeOut ${i} , ${k}`)

    console.log(`Hello Pradeep >>> `)
}

x();



// -------------------------------------------------------------

// function x () {
//     for (var index = 0; index < 5; index++) {
//         setTimeout(() => {
//             console.log(`Index Value is ${index}`)
//         }, index * 1000);
        
//     }
// }

// x();

/* 
Output 

Index Value is 5
Index Value is 5
Index Value is 5
Index Value is 5
Index Value is 5


*/

// // -------------------------------------------------------------

// function x () {
//     for (let index = 0; index < 5; index++) {
//         setTimeout(() => {
//             console.log(`Index Value using let is ${index}`)
//         }, index * 1000);
        
//     }
// }

// x();

/*
    Output is 

    Index Value using let is 0
    Index Value using let is 1
    Index Value using let is 2
    Index Value using let is 3
    Index Value using let is 4


*/

// -------------------------------------------------------------

// function x () {
//     for (var index = 0; index < 5; index++) {
//         function forClosure (i) {
//             setTimeout(() => {
//                 console.log(`Index Value using var with closure is ${i}`)
//             }, i * 1000);
//         }
//         forClosure(index)
        
//     }
// }

// x();

/* 

Output is : 

Index Value using var with closure is 0
Index Value using var with closure is 1
Index Value using var with closure is 2
Index Value using var with closure is 3
Index Value using var with closure is 4

*/