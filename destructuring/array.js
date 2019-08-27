const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
const numbers = ['1', '2', '3', '4'];

const [a, b, ...rest] = letters;

console.log(a) // a
console.log(b) // b
console.log(rest) //  ['c', 'd', 'e', 'f'];

// If you want to skip elements
// use ,, 
// const [a,, c] = letters; 
// Skips to 'c' 

// You can use the ... (spread) operator
// to combine arrays.

const newArray = [...letters, ...numbers];
console.log(newArray); // [ 'a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4' ] 


