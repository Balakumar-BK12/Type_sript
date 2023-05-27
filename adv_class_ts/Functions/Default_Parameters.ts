// Default Parameters
/*
function name(parameter1:type=defaultvalue1, parameter2:type=defaultvalue2,...) {
   //
}

if you don’t pass arguments or pass the undefined into the function when calling it
 the function will take the default initialized values for the omitted parameters.
*/

function applyDiscount(price:number, discount = 0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95