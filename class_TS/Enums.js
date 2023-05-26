"use strict";
// Enum -- >allow -- > string,number
// Numeric Enums - Default
var my_car;
(function (my_car) {
    my_car[my_car["North"] = 0] = "North";
    my_car[my_car["East"] = 1] = "East";
    my_car[my_car["South"] = 2] = "South";
    my_car[my_car["West"] = 3] = "West";
})(my_car || (my_car = {}));
let enum_my_car = my_car;
console.log(enum_my_car);
console.log(enum_my_car[0]);
console.log(enum_my_car.East);
// Numeric Enums - Fully Initialized
var my_car_1;
(function (my_car_1) {
    my_car_1[my_car_1["NotFound"] = 404] = "NotFound";
    my_car_1[my_car_1["Success"] = 200] = "Success";
    my_car_1[my_car_1["Accepted"] = 202] = "Accepted";
    my_car_1[my_car_1["BadRequest"] = 400] = "BadRequest";
})(my_car_1 || (my_car_1 = {}));
let enum_my_car_1 = my_car_1;
console.log(enum_my_car_1);
console.log(enum_my_car_1.Accepted);
console.log(enum_my_car_1[200]);
