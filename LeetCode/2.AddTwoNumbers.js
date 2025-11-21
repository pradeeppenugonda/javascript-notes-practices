var addTwoNumbers = function(l1, l2) {
    
    let num1 = Number(l1.reverse().toString().replaceAll(',', '')) || 0;
    let num2 = Number(l2.reverse().toString().replaceAll(',', '')) || 0;

    return num1 + num2

};

let addRes = addTwoNumbers ([2,4,3], [5,6,4])
console.log(`Add Result >>> `, addRes)