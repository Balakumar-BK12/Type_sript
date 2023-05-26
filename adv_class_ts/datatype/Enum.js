"use strict";
// Enum
/*

An enum is a group of named constant values. Enum stands for enumerated type.

To define an enum, you follow these steps:

First, use the enum keyword followed by the name of the enum.
Then, define constant values for the enum.

*/
var month;
(function (month) {
    month[month["Jan"] = 0] = "Jan";
    month[month["Feb"] = 1] = "Feb";
    month[month["Mar"] = 2] = "Mar";
    month[month["Apr"] = 3] = "Apr";
    month[month["May"] = 4] = "May";
    month[month["Jun"] = 5] = "Jun";
    month[month["Jul"] = 6] = "Jul";
    month[month["Aug"] = 7] = "Aug";
    month[month["Sep"] = 8] = "Sep";
    month[month["Oct"] = 9] = "Oct";
    month[month["Nov"] = 10] = "Nov";
    month[month["Dec"] = 11] = "Dec";
})(month || (month = {}));
;
console.log(month);
var var_values;
(function (var_values) {
    var_values["name"] = "balakumar";
    var_values["roll_number"] = "19E1827";
    var_values["class"] = "B.com(A&F)";
    var_values[var_values["mark"] = 6.7] = "mark";
})(var_values || (var_values = {}));
let var_storage = var_values;
console.log(var_values.name);
console.log(var_storage[6.7]);
