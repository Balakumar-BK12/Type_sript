"use strict";
//  Switch Case
/*

First, the switch...case statement evaluates the expression.

Then, it searches for the first case clause whose expression evaluates
the same value as the value (value1, value2, …valueN).

The switch...case statement will execute the statement
the first case clause whose value matches.

If no matching case clause is found, the switch...case statement looks
the optional default clause. If the default clause is available,
 it executes the statement in the default clause.

The break statement that associates with each case clause ensures that the control breaks out
 the switch...case statement once the statements in the case clause complete.

If the matching case clause doesn’t have the break statement, the program execution continues
 the next statement in the switch...case statement.

By convention, the default clause is the last clause in the switch...case statement. However,
 doesn’t need to be so.

*/
let targetId = 'btnDelete';
switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}
// change the month and year
let month1 = "jan", year = 2020;
let day = 0;
switch (month1) {
    case "Jan":
        day = 31;
    case "Fab":
        if (((year % 4 == 0) &&
            !(year % 100 == 0))
            || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    case "mar":
        day = 30;
        break;
    case "apr":
        day = 30;
        break;
    default:
        console.log('Invalid month');
}
console.log(`The month ${month1} in ${year} has ${day} days`);
