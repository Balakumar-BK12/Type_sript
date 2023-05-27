// Optional Parameters

/*
In JavaScript, you can call a function without passing any arguments even though the function specifies parameters.
 Therefore, JaveScript supports the optional parameters by default.

In TypeScript, the compiler checks every function call and issues an error in the following cases:

The number of arguments is different from the number of parameters specified in the function.
Or the types of arguments are not compatible with the types of function parameters.
Because the compiler thoroughly checks the passing arguments, 
you need to annotate optional parameters to instruct the compiler not to issue an error when you omit the arguments.
*/

/*
First, use the ? after the c parameter.
Second, check if the argument is passed 
the function by using the expression typeof c !== 'undefined'.
*/

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(10,20));

