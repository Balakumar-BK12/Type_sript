"use strict";
//Generic Constraints
function prop(obj, key) {
    return obj[key];
}
let str = prop({ name: 'John' }, 'name');
console.log(str);
