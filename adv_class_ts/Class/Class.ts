// class


/*
JavaScript does not have a concept of class like other programming languages such as Java and C#. 
In ES5, you can use a constructor function and prototype inheritance to create a “class”.
*/
/*
class Person_class {
    ssn;
    firstName;
    lastName;

    constructor(ssn: any, firstName: any, lastName: any) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person_class = new Person_class('171-28-0926','John','Doe');
console.log(person_class.getFullName());
*/
class Person_class1{
    roll_number;
    FName;
    LName;

    constructor(roll_number:any,FName:any,LName:any){
        this.roll_number = roll_number;
        this.FName = FName;
        this.LName = LName;
    }
    getFull_number_name(){
        return `${this.FName} ${this.LName} ${this.roll_number}`
    }
}