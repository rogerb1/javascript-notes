/*"use strict";

// Function, the accept thier state as a function parameter
// this is so they can share the same state.

const drifter = (state) => ({
    drift: () => console.log('Drifting ' + state.name)
})

const drives = (state) => ({
    drive: () => console.log('Driving at ' + state.speed)
})

// Factory Function
const redCar = (name) => {
    let state = {
        name,
        speed: 100
    }
    return Object.assign(
        drifter(state),
        drives(state)
    )
}

redCar('car').drive();

let slow = drives({ speed: '200' }).drive();
let fast = drives({ speed: '300' }).drive();

redCar('car').drift();

*/