/*

TypeScript uses type annotations to explicitly specify types 
for identifiers such variables, functions, objects, etc.

*/

/*

call variable name

let variableName: type;
let variableName: type = value;
const constantName: type = value;

*/

// NUMBER DATA TYPE

let numbers1 : number = 100;
const numbers2 : number = 200;

console.log(numbers1+numbers2);

// Decimal numbers

let numb:number,numb1:number;
numb=12.43,numb1=32.42;

console.log(numb+numb1);

// Binary Numbers

let bin = 0b100;
const anotherBin: number = 0B010;

console.log(bin,anotherBin);

// Octal Numbers

const anotheroctal = 0o10;
let octal: number = 0o10;

console.log(anotherBin,octal);

// hexadecimal

const anotherhexadecimal = 0XA;
let hexadecimal: number = 0XA;

console.log(anotherhexadecimal,hexadecimal);

// Big Integers

let big: number = 90071992547324324;
const anotherBigint = 22453656342;

console.log(big,anotherBigint);
