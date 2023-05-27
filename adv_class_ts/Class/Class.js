"use strict";
// class
/*
JavaScript does not have a concept of class like other programming languages such as Java and C#.
In ES5, you can use a constructor function and prototype inheritance to create a “class”.
*/
class Person_class {
    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person_class = new Person_class('171-28-0926', 'John', 'Doe');
console.log(person_class.getFullName());
