// object type

/*

The TypeScript object type represents all values that are not in primitive types.

The following are primitive types in TypeScript:

number
string
boolean
null
undefined
symbol

*/

// number

let number_1:number= 12;

console.log(number_1+12);

// String

let string_1 : string= "kumar";

console.log(string_1);

// Boolean
const bo_number:number = 10,bo_number1:number=20;
let boolean_1 :boolean = bo_number<bo_number1;

console.log(boolean_1);

// null

const null_values1:null = null;
let null_values:null|string ="hari";

console.log(null_values,null_values1);

// undefined

let undefined_1 :undefined|string="kumar";
const undefined_2 :undefined=undefined;

console.log(undefined_1,undefined_2);

// object

let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);

// object -- > variable cell

let Employee: {
    First_Name:string;
    Last_Name:string;
    Age:number;
}
Employee = {
    First_Name :"bala",
    Last_Name :"kumar",
    Age :10
};

console.log(Employee);



