// Enum

/*

An enum is a group of named constant values. Enum stands for enumerated type.

To define an enum, you follow these steps:

First, use the enum keyword followed by the name of the enum.
Then, define constant values for the enum.

*/

enum month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};
console.log(month);

enum var_values {
    name="balakumar",
    roll_number="19E1827",
    class = "B.com(A&F)",
    mark =6.7
}

let var_storage = var_values;
console.log(var_values.name);
console.log(var_storage[6.7]);
