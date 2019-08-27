// Two object literals

const personOne = {
    name: 'Jane',
    age: 22,
    address: {
        city: 'somewhere',
        state: 'some state'
    }
}

const personTwo = {
    name: 'Lauren',
    age: 34,
    address: {
        city: 'somewhere',
        state: 'some state far'
    }
}

// When we destruct an object
// we use {} brabes
// It is based on the name of the key

const { name, age } = personTwo;
console.log(name); // Lauren
console.log(age); // 34

// You can also change the name of the key
// const { name: firstName, age } = personTwo;

// We can add more values such as,
// const { name, age, favFood = 'rice' } = personTwo;

// You can also replace values, however if the 
// value from the key has always more preference
// const { name :firstName, age } = personTwo; Output: Jane

// You can also add the spread operator
// it will catch everything else 
// const { name, ...rest } = personTwo;
// console.log(rest);

// You can access nested objects
// const { name, address: { city } } = personTwo;
// console.log(city)

// We can combine objects
// but the second object will override the first 
// object
const personThree = { ...personOne, ...personTwo };
console.log(personThree);

// Abilty to use inside a functions arguments
const personFour = {
    name: 'Jimmy',
    age: 12,
    address: {
        city: 'somewhere',
        state: 'some state'
    }
}

//function printUser(name) {
//    console.log(name);
//}

// Passing the object as a parameter
// but only grabbing the name key
// printUser(personFour);

// Destructuring example to get 
// name and age only
function printUser({ name, age }) {
    console.log(`Name is: ${name}. Age is ${age}`);
}

printUser(personFour); // Name is: Jimmy. Age is 12

// You can add other keys
// function printUser({ name, age, favoriteFood = 'Melons' }) {
//    console.log(`Name is: ${name}. Age is ${age}`);
// }
