// readonly class 

/*

TypeScript provides the readonly modifier that allows you to mark 
the properties of a class immutable. 
The assignment to a readonly property can only occur in one of two places:

In the property declaration.
In the constructor of the same class.
To mark a property as immutable, you use the readonly keyword.

Readonly vs. const

The following shows the differences between readonly and const:

readonly	                            const
Use for	Class properties	            Variables
Initialization	In the declaration or 
the constructor of the same class	    In the declaration

*/
/*
class Person_Class {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
 
    }
    get_birthday(){
        return `${this.birthDate}`
    }
}
let person = new Person_Class(new Date(1990, 12, 25));
// person.birthDate = new Date(1991, 12, 25); // Compile error
console.log(person);
*/
class Person_Class {
    constructor(readonly birthDate: Date) {
        this.birthDate = birthDate;
    }
    get_birthday(){
        return `${this.birthDate}`
    }
}
let person = new Person_Class(new Date(1990, 12, 25));
console.log(person.get_birthday());