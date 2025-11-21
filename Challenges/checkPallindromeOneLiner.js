const isItPalindrome = (str) => str.toLowerCase() === [...str.toLowerCase()].reverse().join("")
console.log(`
    Check the string madam isPalindrome >>> ${isItPalindrome('Madam')}
    `)