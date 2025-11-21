function add () {
    console.log(`Arguments >>> `, arguments)
    let sum = 0;

    for (let index = 0; index < arguments.length; index++) {
         sum += arguments[index];

    }

    console.log(`Sum IS >>> ${sum}`)

}

add(1)
add(1, 2, 3, 5)
add(1, 2, 3, 5, 6)