"use strict";
//  String
/*

JavaScript, TypeScript
uses double quotes (") or single quotes (') to surround string literals

TypeScript also supports template strings that use the backtick (`) to surround characters.
The template strings allow you to create multi-line strings and
provide the string interpolation features

*/
//  "" , ''
const first_Name = 'John';
let title = "Web Developer";
console.log(first_Name, title);
//  ` `
const des = `This TypeScript string can 
span multiple 
lines`;
let description = `This TypeScript string can 
span multiple 
lines`;
console.log(des, "\n", description);
// String interpolations allow you to embed the variables into the string  --- ${local}
let first_Name1 = `John`;
let title1 = `Web Developer`;
let profile = `I'm ${first_Name1}. 
I'm a ${title1}`;
console.log(profile);
