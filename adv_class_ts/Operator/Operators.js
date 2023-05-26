"use strict";
// Operators
/*

An operator defines some function that will be performed on the data.
The data on which operators work are called operands

The major operators in TypeScript can be classified as −

Arithmetic operators
Logical operators
Relational operators
Bitwise operators
Assignment operators
Ternary/conditional operator
String operator
Type Operator

*/
// Arithmetic operators
// +,-,/,*,%,++,--
// +
let add_value, add_value1;
add_value = 10;
add_value1 = 20;
let operands_add = add_value + add_value1;
console.log(operands_add);
// -
let sub_value, sub_value1;
sub_value = 10;
sub_value1 = 20;
let operands_sub = sub_value - sub_value1;
console.log(operands_sub);
// *
let mult_value, mult_value1;
mult_value = 10;
mult_value1 = 20;
let operands_mult = mult_value * mult_value1;
console.log(operands_mult);
// *
let div_value, div_value1;
div_value = 10;
div_value1 = 20;
let operands_div = div_value + div_value1;
console.log(operands_div);
// %
let mod_value, mod_value1;
mod_value = 10;
mod_value1 = 20;
let operands_mod = mod_value + mod_value1;
console.log(operands_mod);
// ++
let incr_value;
incr_value = 10;
let operands_incr = ++mod_value;
console.log(operands_incr);
// --
let dec_value;
dec_value = 10;
let operands_dec = --dec_value;
console.log(operands_dec);
// Relational operators
//  <,>,==,!=,<=,>=
// < 
let less_value, less_value1;
less_value = 10;
less_value1 = 20;
let operands_less = less_value < less_value1;
console.log(operands_less);
// >
let great_value, great_value1;
great_value = 10;
great_value1 = 20;
let operands_great = great_value > great_value1;
console.log(operands_great);
// ==
let equal_value, equal_value1;
equal_value = 10;
equal_value1 = 20;
let operands_equal = equal_value == equal_value1;
console.log(operands_equal);
// !=
let not_equal_value, not_equal_value1;
not_equal_value = 10;
not_equal_value1 = 20;
let operands_not_equal = not_equal_value != not_equal_value1;
console.log(operands_not_equal);
// Logical operators
// &&--- > and ,||--- > or,!--- > not
// &&
let and_value, and_value1;
and_value = 10;
and_value1 = 20;
let operands_and = not_equal_value != not_equal_value1 && and_value < add_value1;
console.log(operands_and);
// ||
let or_value, or_value1;
or_value = 10;
or_value1 = 20;
let operands_or = not_equal_value != not_equal_value1 || or_value < or_value1;
console.log(operands_or);
// !
let not_value, not_value1;
not_value = 10;
not_value1 = 20;
let operands_not = !(not_equal_value != not_equal_value1 || not_value < not_value1);
let operands_not1 = !(not_equal_value == not_equal_value1 || not_value < not_value1);
let operands_not2 = !(not_equal_value != not_equal_value1 || not_value > not_value1);
console.log(operands_not, operands_not1, operands_not2);
// Bitwise operators
// &,|,^,~,<<,>>,>>>
let bit_value, bit_value1;
bit_value = 10;
bit_value1 = 20;
// &
let operands_bit = bit_value & bit_value1;
// |
let operands_bit1 = bit_value | bit_value1;
// ^
let operands_bit2 = bit_value ^ bit_value1;
// ~
let operands_bit3 = ~bit_value;
// <<
let operands_bit4 = bit_value << 1;
// >>
let operands_bit5 = bit_value >> 1;
// >>>
let operands_bit6 = bit_value >>> 1;
console.log(operands_bit, operands_bit1, operands_bit2, operands_bit3, operands_bit4, operands_bit5, operands_bit6);
// Assignment operators
// +=,-=,*=,/+
let ass_value, ass_value1;
ass_value = 10;
// +=
let operands_ass = ass_value += 1;
// -=
let operands_ass1 = ass_value -= 1;
// *=
let operands_ass2 = ass_value *= 1;
// /=
let operands_ass3 = ass_value /= 2;
console.log(operands_ass, operands_ass1, operands_ass2, operands_ass3);
// Ternary/conditional operator
let con_value, con_value1, con_value2;
con_value = "bala";
con_value1 = "kumar";
con_value2 = 123;
// string + string
let operands_con = con_value + con_value1;
let operands_con1 = con_value + con_value2;
console.log(operands_con, operands_con1);
// conditional Operator (?)
const name_operands = {
    type: "Toyota"
};
console.log(name_operands.type);
// Type Operator
let type_value, type_value1;
type_value = "bala";
type_value1 = 1234;
console.log(typeof (type_value), typeof (type_value1));
