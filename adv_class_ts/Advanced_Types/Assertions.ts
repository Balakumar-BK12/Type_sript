// Type Assertions in TypeScript
/*

Type assertions instruct the TypeScript compiler to treat a value as a specified type. 
It uses the as keyword to do so

expression as targetType

*/

function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice);

// The alternative Type Assertion 

// You can also uses the angle bracket syntax <>
let netPrice_1 = <number>getNetPrice(100, 0.05, false);
console.log(netPrice_1);