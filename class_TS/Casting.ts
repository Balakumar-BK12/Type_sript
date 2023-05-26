// Casting with as

// unknown

let x: unknown = 'hello';
console.log((x as string).length);

let y: unknown ="na";
console.log(y);

// Casting with <>

let z: unknown = 'hello';
console.log((<string>z).length);

// Force casting

let r = 'hello';
console.log(((r as unknown) as number));