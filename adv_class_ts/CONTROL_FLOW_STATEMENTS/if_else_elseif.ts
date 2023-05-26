/*
if statement

An if statement executes a statement based on a condition. 
If the condition is truthy, the if statement will execute the statements inside its body.

*/

var con_values:number;
const con_values1:number=10;
let con_values2:boolean;

con_values =12;
con_values2 =false;

// if ,else

if (con_values>con_values1){
    console.log("person like to you");
}
else{
    console.log("not delike person not change you life");    
}

if (con_values2){
    console.log("person like to you");
}
else{
    console.log("not delike person not change you life");    
}

if ((con_values>con_values1)&&(con_values==con_values1)||(con_values!=con_values1)){
    console.log("person like to you");
}
else{
    console.log("not delike person not change you life");    
}

// else if 

/*
When you want to execute code based on multiple conditions, 
you can use the if...else if...else statement.
The if…else if…else statement can have one or more else if branches but only one else branch.
*/

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
} else {
    discount = 15; // 15%
}

console.log(`You got ${discount}% discount. `)

//   if nested  --- in if ,out if

// if --- in 

var number_if_in:number;
let number_if_in1:number;
const number_if_in12:boolean=true;
number_if_in = 121;
number_if_in1 =232;

if (number_if_in12){
        console.log("True values one only boolean");

    if (number_if_in<number_if_in){
        console.log("True Values");
        
    }else{
        console.log("False values");
        
    }
}else{
    console.log("False values not allow to the values");
}

// if --- out

if (number_if_in12){
    console.log("True values one only boolean");
}else{
console.log("False values not allow to the values");
}

if (number_if_in<number_if_in){
    console.log("True Values");
}else{
    console.log("False values");   
}