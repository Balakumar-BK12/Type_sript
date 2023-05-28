// inheritance class

/*

A class can reuse the properties and methods of another class. This is called inheritance in TypeScript.

The class which inherits properties and methods is called the child class. 
And the class whose properties and methods are inherited is known as the parent class. 
These names come from the nature that children inherit genes from parents.

Inheritance allows you to reuse the functionality of an existing class without rewriting it.

JavaScript uses prototypal inheritance, not classical inheritance like Java or C#. 
ES6 introduces the class syntax that is simply the syntactic sugar of the prototypal inheritance. 
TypeScript supports inheritance like ES6.

*/
/*
class Person_Class_in {
    public F_name;
    private L_name;
    protected R_number;

    constructor(F_name:any,L_name:any,R_number:any){
        this.F_name = F_name;
        this.L_name = L_name;
        this.R_number = R_number;
    }
}
// To inherit a class, you use the extends keyword. 
//For example the following Employee class inherits the Person class

class Person_Class_ext extends Person_Class_in{
    get_detail_inf(){
        console.log(`My Name: ${this.F_name} is save path Roll number: ${this.R_number} `);
    }
}
let Person_in = new Person_Class_ext("bala","kumar",1932);
console.log(Person_in);
console.log(Person_in.get_detail_inf());
*/

// super class inheritance

/*
class Person_Class_in {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee_class extends Person_Class_in {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        
        // call the constructor of the Person class:
        super(firstName, lastName);
    }
    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}
let employee_ca = new Employee_class('John', 'Doe', 'Web Developer');
console.log(employee_ca.describe());
*/