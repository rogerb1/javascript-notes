/**
 * The Builder Pattern: examples
 * 
 *
 */

/** 
 * This Design pattern is for more simple programs
*/
class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name, { age, phone, address } = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

let user = new User('Roger', { age: 10, phone: '1', address: new Address('1', 'Main') });

console.log(user);

/**
 *
 *  This Build pattern can be used for more complex programs
 *  This pattern is very common in object oriented programming
 *
 *
class Address {
   constructor(zip, street) {
       this.zip = zip;
       this.street = street;
   }
}

class User {
   constructor(name) {
       this.name = name;
   }
}

class UserBuilder {
   constructor(name) {
       this.user = new User(name);
   }

   setAge(age) {
       this.user.age = age;
       return this;
   }

   setPhone(phone) {
       this.user.phone = phone;
   }

   setAddress(adress) {
       this.user.address = address;
   }

   build() {
       return this.user;
   }
}

let builder = new UserBuilder().setAge(22).build();
console.log(builder);

*/
