"use strict";
// Access Modifiers
/*

Access modifiers change the visibility of the properties and methods of a class.
TypeScript provides three access modifiers:

private
protected
public
Note that TypeScript controls the access logically during compilation time, not at runtime.

*/
//  private
/*

The private modifier limits the visibility to the same-class only.

When you add the private modifier to a property or method
you can access that property or method within the same class.

Any attempt to access private properties or methods outside
the class will result in an error at compile time.

*/
// Private modifier
/*
class Person_class {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person_class('153-07-3130', 'John', 'Doe');
console.log(person.getFullName());
// console.log(person.ssn);  // compile error
*/
// public modifier
/*

The public modifier allows class properties and methods to be accessible from all locations.
If you don’t specify any access modifier for properties and methods,
they will take the public modifier by default

*/
class Person_Class {
    constructor(numbers_class, numbers_class1, numbers_class2) {
        this.numbers_class = numbers_class;
        this.numbers_class1 = numbers_class1;
        this.numbers_class2 = numbers_class2;
    }
    class_Person() {
        return this.numbers_class + this.numbers_class1 * this.numbers_class2;
    }
}
let Person_C = new Person_Class(10, 30, 20);
console.log(Person_C.class_Person());
console.log(Person_C.numbers_class, Person_C.numbers_class1);
