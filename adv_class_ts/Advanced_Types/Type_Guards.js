"use strict";
// Type Guards
function add_type(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}
console.log(add_type(10, 20));
// instanceof
class Customer {
    isCreditAllowed() {
        // ...
        return true;
    }
}
class Supplier {
    isInShortList() {
        // ...
        return true;
    }
}
function signContract(partner) {
    let message;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
        console.log(message);
    }
    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
        console.log(message);
    }
    // return message;
}
// in 
/*
The in operator carries a safe check for the existence of a property on an object.
You can also use it as a type guard
*/
function signContract_1(partner) {
    let message;
    if ('isCreditAllowed' in partner) {
        message = partner ? 'Sign a new contract with the customer' : 'Credit issue';
    }
    else {
        // must be Supplier
        message = partner ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return message;
}
