"use strict";

// Created a class called User that takes two parameters
// an email and name.
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }

    login() {
        console.log(this.name, "has logged in as", this.email);
        return this;
    }

    logout() {
        console.log(this.name, "has logged out as", this.email);
        return this;
    }
}

// Instantation of new object with both parameters
const user = new User('roger@email.com', 'roger');

const userTwo = new User('john@email.com', 'john');

console.log(user);

// Accessing the login function inside the User class
user.login();

// we can also use method chainging because we are returning
// the object inside the function
userTwo.login().logout();