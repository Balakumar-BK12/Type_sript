//Generic Constraints
function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let str = prop({ name: 'John' }, 'name');
console.log(str);