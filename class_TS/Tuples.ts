let tuple_arrys:[number,string,boolean];
tuple_arrys = [1,"bala",10>2];
console.log(tuple_arrys);

let tuple_arry_1:[number];
tuple_arry_1 = [1];
console.log(tuple_arry_1);

let tuple_arrys_1:[number,string,boolean];
tuple_arrys_1 = [1,"bala",10>2];
// tuple_arrys_1.push([2,"kumar",20<20]); 1 error in Tuples
console.log(tuple_arrys_1);

// Named Tuples

const great:[x:number,y:number]=[123.23,21.32];
console.log(great);
console.log(great[0]);

//Destructuring Tuples
const great_1:[number,number]=[12.23,32.34];
const [a,b]=great_1;

console.log(great_1);