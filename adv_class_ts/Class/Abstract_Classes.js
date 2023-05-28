"use strict";
// Abstract Classes
/*

An abstract class is typically used to define common behaviors for derived classes to extend.
Unlike a regular class, an abstract class cannot be instantiated directly.

*/
class Employee_class {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement() {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
// let employee = new Employee_class('John','Doe');
class FullTimeEmployee extends Employee_class {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class Contractor extends Employee_class {
    constructor(firstName, lastName, rate, hours) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }
    getSalary() {
        return this.rate * this.hours;
    }
}
let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);
console.log(john.compensationStatement());
console.log(jane.getSalary());
