// Using the spread operator to return 
// more than one parameter. 
// In this case you get 
// two variables returned. 
// They are stored in sum and multiply

const [sum, multiply] = addMultiply(2, 3);

function addMultiply(a, b) {
    return [a + b, a * b];
}

console.log(sum); // 5
console.log(multiply); // 6

// You can also return default values 
// const [sum, multiply, division = 'No division'] = addMultiply(2, 3);