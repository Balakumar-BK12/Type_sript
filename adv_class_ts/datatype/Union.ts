// Union

let result,result1,result2: number | string | boolean;
result = 10; // OK
result1 = 'Hi'; // also OK
result2 = false; // a boolean value, not OK

console.log(result,result1,result2);

function add1(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add1(10,20));
