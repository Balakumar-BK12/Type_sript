"use strict";
// Return Type
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
// Parameters
function get_number(number_1, number_2) {
    return number_1 + number_2;
}
console.log(get_number(12, 23));
// Void Return Type
function printHello(a, m, k) {
    console.log(a, m, k);
}
printHello(12, "kumar", 12 < 10);
// Optional Parameters
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(10, 20, 80));
// Default Parameters
function pow(value, exponent = 10) {
    return value ** exponent;
}
console.log(pow(10, 3));
// Named Parameters
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
// Rest Parameters
function add_1(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(add_1(10, 120, 10, 101, 102, 103, 104));
console.log(add_1(100, 200, 10, 20, 30, 40).toString());
const negateFunction = (value) => value * -1;
console.log(negateFunction(1021));
const Negate_Function = (values) => values * 2;
console.log(Negate_Function(102));
