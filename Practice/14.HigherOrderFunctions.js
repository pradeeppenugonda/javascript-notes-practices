/* 
    1. A Function which takes a Function as an argument or returns a function from it 
        is known as Higher Order Function.
    2. 



YOUTUBE 

1. Follow DRY(Don't Repeat Yourself) principle while coding.
2. Use function to stop writing repeating line of codes.
3. Function that takes another function as argument(callback function) is known as Higher order functions.
4. It is this ability that function can be stored, passed and returned,  they are called first class citizens.
5. If we use Array.property.function-name. This function is accessible to any array in your code.

*/

function x () {
    console.log(`From X `)
}


/* 
As function y is taking another function (abc) as argument we can call y as higher Oder Function.
*/

function y (abc) { 
    /* abc is callback function */
    abc ()
}

//------------------- Not Suggestable --------------------- //

const radiusArr = [1, 2, 3, 6];

const calculateArea = function (radiusArr){
    let output = [];
    for (let index = 0; index < radiusArr.length; index++) {
        const radius = radiusArr[index];
        output.push(Math.PI * radius * radius)
    }
    console.log(`Area are >>> `, output)
}
calculateArea(radiusArr)

const calculateCircumference = function (radiusArr){
    let output = [];
    for (let index = 0; index < radiusArr.length; index++) {
        const radius = radiusArr[index];
        output.push(2 * Math.PI * radius )
    }
    console.log(`Circumferences are >>> `, output)
}
calculateCircumference(radiusArr)

const calculateDiameter = function (radiusArr){
    let output = [];
    for (let index = 0; index < radiusArr.length; index++) {
        const radius = radiusArr[index];
        output.push(2 * radius )
    }
    console.log(`Diameters are >>> `, output)
}

calculateDiameter(radiusArr)

//------------------- Not Suggestable --------------------- //

//------------------- Best Code --------------------- //

const area = function (radius) {
    return Math.PI * radius * radius
}

const Circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const Diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (radiusArr, logic){
    let output = [];
    for (let index = 0; index < radiusArr.length; index++) {
        const radius = radiusArr[index];
        output.push(logic(radius) )
    }
    console.log(` OutPut is >>> `, output)

   
}
calculate(radiusArr, area)
calculate(radiusArr, Circumference)
calculate(radiusArr, Diameter)
