"use strict";
// 1) Generic interfaces that describe object properties
let month_in = {
    key: 'Jan',
    value: 1
};
console.log(month_in);
class List {
    constructor() {
        this.items = [];
    }
    add(o) {
        this.items.push(o);
    }
    remove(o) {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}
let list = new List();
for (let i = 0; i < 10; i++) {
    list.add(i);
}
let inputOptions = {
    'disabled': false,
    'visible': true
};
