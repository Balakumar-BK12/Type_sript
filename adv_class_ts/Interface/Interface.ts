// Interface

function getFullName(person: {
    firstName: string;
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}

let person_Full = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(person_Full));


interface person_Full {
    firstName: string;
    lastName: string;
}
function getFullName_1(person: person_Full) {
    return `${person_Full.firstName} ${person_Full.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(john));

// Optional properties
/*
An interface may have optional properties. To declare an optional property,
 you use the question mark (?) at the end of the property name in the declaration
*/

interface person_Full_1 {
    firstName: string;
    middleName?: string;
    lastName: string;
}
function getFullName_2(person: person_Full_1) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}
let get = {
    firstName:"bala",
    middleName:"kumar",
    lastName:".D"
}

console.log(getFullName_2(get));

// Readonly properties
interface person_Full_2 {
    readonly ssn: string;
    firstName: string;
    lastName: string;    
}

let person_Read: person_Full_2;
person_Read = {
    ssn: '171-28-0926',
    firstName: 'John',
    lastName: 'Doe'
}
console.log(person_Read.ssn,person_Read.firstName,person_Read.lastName);

// Function types

interface StringFormat {
    (str: string, isUpper: boolean): string
}
let format: StringFormat;

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hi', true));

// Class Types

interface Json {
    toJSON(): string
 }
 class Person_c implements Json {
    constructor(private firstName: string,
        private lastName: string) {
    }
     toJSON(): string {
         throw new Error("Method not implemented.");
     }
    toJson(): string {
        return JSON.stringify(this);
    }
}

let person_C = new Person_c('John', 'Doe');
console.log(person_C.toJSON());