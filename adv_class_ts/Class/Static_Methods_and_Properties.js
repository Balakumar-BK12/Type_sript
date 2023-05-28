"use strict";
// Static properties
/*
Unlike an instance property, a static property is shared among all instances of a class.

To declare a static property, you use the static keyword.
To access a static property, you use the className.propertyName syntax.
*/
/*
class Employee_clas {
    static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee_clas.headcount++;
    }
}
let john = new Employee_clas('John', 'Doe', 'Front-end Developer');
let jane = new Employee_clas('Jane', 'Doe', 'Back-end Developer');

console.log(Employee_clas.headcount);
*/
// Static methods
/*

Similar to the static property, a static method is also shared across instances of the class.
To declare a static method, you use the static keyword before the method name.

*/
/*
class Employee_clas {
    private static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee_clas.headcount++;
    }

    public static getHeadcount() {
        return Employee_clas.headcount;
    }
}

let john = new Employee_clas('John', 'Doe', 'Front-end Developer');
let jane = new Employee_clas('Jane', 'Doe', 'Back-end Developer');

console.log(Employee_clas.getHeadcount()); // 2

*/ 
