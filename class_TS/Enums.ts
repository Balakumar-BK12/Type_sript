// Enum -- >allow -- > string,number
// Numeric Enums - Default

enum my_car{
    
    North,
    East,
    South,
    West

}

let enum_my_car = my_car;
console.log(enum_my_car);
console.log(enum_my_car[0]);
console.log(enum_my_car.East);

// Numeric Enums - Fully Initialized

enum my_car_1{

    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400

}

let enum_my_car_1 = my_car_1;
console.log(enum_my_car_1);
console.log(enum_my_car_1.Accepted);
console.log(enum_my_car_1[200]);


