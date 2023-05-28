/*

TypeScript modules

Since ES6, JavaScript started supporting modules as the native part of the language. 
TypeScript shares the same module concept with JavaScript.

A TypeScript module can contain both declarations and code. 
A module executes within its own scope, not in the global scope. 
It means that when you declare variables, functions, classes, interfaces, etc., in a module, 
they are not visible outside the module unless you explicitly export them using export statement.

On the other hand, if you want to access variables, functions, classes, etc., 
from a module, you need to import them using the import statement.

Like ES6, when TypeScript file contains a top-level import or export, it is treated as a module.

 */
// export
/*
interface Validator {
    isValid(s: string): boolean
}

export { Validator as StringValidator };
*/
/*
// Importing a new module

import { StringValidator } from './modules';

class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}

export { EmailValidator };
*/
/*
import { Validator as StringValidator } from './Validator';

class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}

export { EmailValidator };
*/