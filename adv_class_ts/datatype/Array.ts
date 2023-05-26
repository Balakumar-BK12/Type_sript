//  Array 
/*

A TypeScript array is an ordered list of data. 
To declare an array that holds values of a specific type

*/

let arrys:number[]=[];
let skills: string[]=[];
let arrat_skills:boolean[]=[];

// push
arrys.push(1,2,3,45,65);
console.log(arrys);

skills[0] = "Problem Solving";
skills[1] = "Programming";
console.log(skills);

// typeof()
let skill = skills[0];
console.log(typeof(skill));

let skills1 = ['Problem Sovling','Software Design','Programming'];
console.log(skills1);

// or --- |

let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 4]; 

// array properties and methods

// length

let string_arrays:string[] = ["kumar","deva","rajan","hari"];
console.log(string_arrays.length);

// forEach(), map(), reduce(), and filter()

// foreach()

let number_arrays:number[] = [1,2,3,4,5,6];
number_arrays.forEach((no)=>{
console.log(no)})

// map()

let series = [1, 2, 3];
let doubleIt = series.map(e => e* 2);
//console.log(doubleIt);

// reduce()

const sum = [1, 2, 3, 4, 5].reduce((sum, el) => sum + el, 0);
//console.log(sum);

interface Person {
    name: string;
    age: number;
}

const persons: Person[] = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 45 },
];


// console.log(persons);

const ageByPerson = persons.reduce((result, person) => ({
    ...result,
    [person.name]: person.age
}), {});
console.log(ageByPerson);

let scores1 : (string | number)[];
scores1 = ['Programming', 5, 'Software Design', 4]; 
console.log(scores1);
console.log(scores1[2]);