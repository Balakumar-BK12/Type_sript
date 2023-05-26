// aliases
/*
Type aliases allow you to create a new name for an existing type.
type alias = existingType;
*/

type alphanumeric = string | number;
let input,input1: alphanumeric;
input = 100; // valid
input1 = 'Hi'; // valid
// input = false; // Compiler error

console.log(input,input1);