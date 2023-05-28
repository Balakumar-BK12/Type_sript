"use strict";
// Interface
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
let person_Full = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(person_Full));
function getFullName_1(person) {
    return `${person_Full.firstName} ${person_Full.lastName}`;
}
let john = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(john));
function getFullName_2(person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}
let get = {
    firstName: "bala",
    middleName: "kumar",
    lastName: ".D"
};
console.log(getFullName_2(get));
let person_Read;
person_Read = {
    ssn: '171-28-0926',
    firstName: 'John',
    lastName: 'Doe'
};
console.log(person_Read.ssn, person_Read.firstName, person_Read.lastName);
let format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('hi', true));
class Person_c {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    toJSON() {
        throw new Error("Method not implemented.");
    }
    toJson() {
        return JSON.stringify(this);
    }
}
let person_C = new Person_c('John', 'Doe');
console.log(person_C.toJSON());
