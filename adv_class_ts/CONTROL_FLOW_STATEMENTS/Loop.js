"use strict";
//  for statement
/*

The for loop statement creates a loop. It consists of three optional expressions separated by semicolons (;) and enclosed in parentheses:

initialization: is an expression evaluated once before the loop begins.
Typically, you use the initialization to initialize a loop counter.
condition – is an expression that is evaluated at the end of each loop iteration.
If the condition is true, the statements in the loop body execute.
expression – is an expression that is evaluated before the condition is evaluated at the end of each loop iteration.
Generally, you use the expression to update the loop counter.

*/
// for 
for (let i = 0; i < 10; i++) {
    //console.log(i);
}
// for array
let number_arrau = [12, 23, 34, 45, 56, 67];
for (let i = 0; i < number_arrau.length; i++) {
    // console.log(number_arrau[i]);
}
// for if 
let number_arrau1 = ["kumar", "bala", "hari", "deva"];
let values_check = "kumar";
for (let r = 0; r < number_arrau1.length; r++) {
    if (number_arrau1[r] == values_check) {
        //console.log("True Values");
    }
    else {
        // console.log("False values");   
    }
}
// while statement
/*

The while statement evaluates the condition before each loop iteration.

If the condition evaluates to true,
the while statement executes the code its in body surrounded by the curly braces ({}).

When the condition evaluates to false,
the execution continues with the statement after the while statement.

Since the while statement evaluates the condition before its body is executed,
 a while loop is also called a pretest loop.

*/
let counter = 0;
/*
while (counter < 5) {
  //  console.log(counter);
    //counter++;
}
*/
while (counter < number_arrau.length) {
    //console.log(number_arrau[counter]);
    counter++;
}
// do…while statement
/*

The do...while statement executes statements in its body surrounded by the curly braces ({}) until the condition is false.

The do...while statement always executes its loop body at least one.

Unlike the while statement, the do...while statement evaluates the condition after each loop iteration,
therefore, it is called a post-test loop.

*/
let i = 0;
/*
do {
    console.log(i);
    i++
} while (i < 10);
*/
do {
    // console.log(number_arrau[i]);
    i++;
} while (i < number_arrau.length);
// break statement
/*
The break statement allows you to terminate a loop and pass
the program control over the next statement after the loop.

You can use the break statement inside the for, while, and do...while statement.
*/
let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];
for (var w = 0; w < products.length; w++) {
    if (products[w].price == 900)
        break;
}
// show the products
console.log(products[w]);
// continue statement
/*

The continue statement is used to control a loop such as a for loop,
a while loop, or a do...while loop.

The continue statement skips to the end of the loop and continues the next iteration.

*/
// for
for (let index = 0; index < 9; index++) {
    // if index is odd, skip it
    if (index % 2)
        continue;
    // the following code will be skipped for odd numbers
    //console.log(index);
}
// while
let index = -1;
while (index < 9) {
    index = index + 1;
    if (index % 2)
        continue;
    console.log(index);
}
// do while
let index1 = 9;
let count = 0;
do {
    index1 += 1;
    if (index1 % 2)
        continue;
    count += 1;
} while (index1 < 99);
console.log(count); // 45
