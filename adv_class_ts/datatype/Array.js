"use strict";
//  Array 
/*

A TypeScript array is an ordered list of data.
To declare an array that holds values of a specific type

*/
let arrys = [];
let skills = [];
let arrat_skills = [];
// push
arrys.push(1, 2, 3, 45, 65);
console.log(arrys);
skills[0] = "Problem Solving";
skills[1] = "Programming";
console.log(skills);
// typeof()
let skill = skills[0];
console.log(typeof (skill));
let skills1 = ['Problem Sovling', 'Software Design', 'Programming'];
console.log(skills1);
// or --- |
let scores;
scores = ['Programming', 5, 'Software Design', 4];
// array properties and methods
// length
let string_arrays = ["kumar", "deva", "rajan", "hari"];
console.log(string_arrays.length);
// forEach(), map(), reduce(), and filter()
// foreach()
let number_arrays = [1, 2, 3, 4, 5, 6];
number_arrays.forEach((no) => {
    console.log(no);
});
// map()
let series = [1, 2, 3];
let doubleIt = series.map(e => e * 2);
//console.log(doubleIt);
// reduce()
const sum = [1, 2, 3, 4, 5].reduce((sum, el) => sum + el, 0);
const persons = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 45 },
];
// console.log(persons);
const ageByPerson = persons.reduce((result, person) => (Object.assign(Object.assign({}, result), { [person.name]: person.age })), {});
console.log(ageByPerson);
let scores1;
scores1 = ['Programming', 5, 'Software Design', 4];
console.log(scores1);
console.log(scores1[2]);
