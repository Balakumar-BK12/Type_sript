// Function Type
/*

The function type accepts two arguments: x and y with the type number.

The type of the return value is number that follows the fat arrow (=>) 
appeared between parameters and return type.

Note that the parameter names (x and y) are just for readability purposes. 
As long as the types of parameters match, it is a valid type for the function.

Once annotating a variable with a function type,
 you can assign the function with the same type to the variable.

TypeScript compiler will match the number of parameters with their types and the return type.

*/
let type_fun:(x:number,y:number)=>number;
type_fun = function (x: number, y: number) {
    return x + y;
};
console.log(type_fun(20,30));


let type_fun1: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };
console.log(type_fun1(10,20));

