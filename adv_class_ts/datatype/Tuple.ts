let number_string:[number,number,string]=[
    100,
    200,
    "kumar"
]
console.log(number_string);
console.log(number_string[0]);

let number:[a:number,b:number,c:string]=[
    100,
    200,
    "kumar"

]
console.log(`My name : ${number[2]}`,`The total  ${number[0]+number[1]}`);

// Optional Tuple Elements

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

console.log(bgColor,"\n",headerColor);