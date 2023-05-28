/*

TypeScript generic classes example

In this example, we will develop a generic Stack class.

A stack is a data structure that works on the last-in-first-out (or LIFO) principle. 
It means that the first element you place into the stack is the last element you can get from the stack.

Typically, a stack has a size. By default, it is empty. The stack has two main operations:

Push: push an element into the stack.
Pop: pop an element from the stack.

*/

class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    
}
let numbers_clas = new Stack<number>(5);
function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach(word => wordStack.push(word));
