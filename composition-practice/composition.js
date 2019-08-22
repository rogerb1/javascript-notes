"use strict";

const log = (state) => ({
    login: () => console.log(state.name + " has logged in as" + state.email)
})

const logo = (state) => ({
    logout: () => console.log(state.name + " has logged out as" + state.email)
})

// Factory Function
const userOne = (name, email) => {
    let state = {
        name,
        email
    }

    return Object.assign(
        log(state),
        logo(state)
    )
}

let one = userOne('roger', 'roger@mail.com');
one.login();

// One way to access
//let one = log({ name: 'roger', email: ' roger@email.com' }).login();
let two = logo({ name: 'John', email: ' john@mail.com' }).logout();
