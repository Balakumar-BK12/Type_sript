"use strict";
// Rest Parameters
/*

A rest parameter allows you a function to accept zero or more arguments of the specified type.
In TypeScript, rest parameters follow these rules:

A function has only one rest parameter.
The rest parameter appears last in the parameter list.
The type of the rest parameter is an array type.

*/
function getTotal(...numbers) {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
