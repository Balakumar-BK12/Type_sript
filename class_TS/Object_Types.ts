const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

console.log(car);
console.log(car["type"]);

// Type Inference

const car_1 = {
    type: "Toyota",
  };
car_1.type = "Ford";

console.log(car_1);

// Optional Properties

const car_2: { type: string, mileage?: number } = { // no error
    type: "Toyota"
  };
car_2.mileage = 2000;

console.log(car_2);

// Index Signatures

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;

console.log(nameAgeMap);