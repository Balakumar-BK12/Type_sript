// Return Type

function getTime():number{
    return new Date().getTime();
}
console.log(getTime());

// Parameters

function get_number(number_1: number,number_2: number){
    return number_1+number_2;
}
console.log(get_number(12,23));

// Void Return Type

function printHello(a:number,m:string,k:boolean): void {
    console.log(a,m,k);
}
printHello(12,"kumar",12<10);

// Optional Parameters

function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }
console.log(add(10,20,80));

// Default Parameters

function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }
console.log(pow(10,3));

// Named Parameters

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }

console.log(divide({dividend: 10, divisor: 2}));

// Rest Parameters

function add_1(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(add_1(10,120,10,101,102,103,104));
console.log(add_1(100,200,10,20,30,40).toString())

// Type Alias

type Negate = (value: number) => number;

const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(1021))

type negate = (values:number) => number;

const Negate_Function:negate = (values) => values * 2;
console.log(Negate_Function(102));