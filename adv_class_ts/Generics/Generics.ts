// Genericd

/*
TypeScript generics allow you to write the reusable and generalized form of 
functions, classes, and interfaces. 
In this tutorial, you’re focusing on developing generic functions.

It’ll be easier to explain TypeScript generics through a simple example.

Suppose you need to develop a function that returns a random element in an array of numbers.
*/

function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let numbers_gen = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers_gen));

// Using the any type

function getRandomAnyElement(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let colors = ['red', 'green', 'blue'];

console.log(getRandomAnyElement(numbers_gen));
console.log(getRandomAnyElement(colors));

// TypeScript generics come to rescue
/*
The following shows a generic function that returns
the random element from an array of type T
*/
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let colors_r = [1,2,3,32,32,5,43];
console.log(getRandomElement(colors_r));

//Calling a generic function

let randomEle = getRandomElement<number>(numbers_gen); 
console.log(randomEle);

//Generic functions with multiple type
/*
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}
*/

