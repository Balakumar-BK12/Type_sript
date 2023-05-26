"use strict";
// Function
// TypeScript functions are the building blocks of readable, maintainable, and reusable code.
function fun_create(name, number) {
    console.log(`my name:${name},My roll number${number}`);
}
fun_create("bala", 191827);
function fun_create1(number_1, number_2) {
    return `My name: ${number_1},\nMy roll number: ${number_2}`;
}
let num, num1;
num = "bala kumar";
num1 = 12932;
console.log(fun_create1(num, num1));
