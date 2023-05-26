// Members: Types
/*
class Person {
    getName_1(): any {
        throw new Error("Method not implemented.");
    }
    string_Name!: string;
  }
  
const person = new Person();
person.string_Name = "Jane";

console.log(person.string_Name);

class Person_inf{
    name_de!:string
    number_de!:number

}
const person_inf = new Person_inf();
person_inf.name_de="kumar";
person_inf.number_de=12+12+20/2;

console.log(person_inf);
*/
/*
Members: Visibility
Class members also be given special modifiers which affect visibility.

There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

*/

/*
class Person_1 {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName_1(): string {
      return this.name;
    }
  }
  
const person_1 = new Person_1("Jane");
console.log(person.getName_1());
*/

// Parameter Properties
/*
class Person_1 {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName_1(): string {
    return this.name;
  }
}

const person_1 = new Person_1("kumar");
console.log(person_1.getName_1());
*/

// Readonly
/*
class Person {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());
*/

// Inheritance: Implements
/*
interface Shape {
  getArea_1: () => number;
  
}

class Rectangle_1 implements Shape {
  public constructor(protected readonly width: number,protected readonly height: number) {
    
  }

  public getArea_1(): number {
    return this.width * this.height;
  }
}

const myRect = new Rectangle_1(10,20);

console.log(myRect.getArea_1());
*/

// Inheritance: Extends
/*
interface Shape {
  getArea_1: () => number;
}

class Rectangle_1 implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea_1(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle_1 {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}
const myRect_1 = new Rectangle_1(102,123);
console.log(myRect_1.getArea_1())
*/

// Override
/*
interface Shape {
  getArea_1: () => number;
}

class Rectangle_2 implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea_1(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square extends Rectangle_2 {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

const mySq = new Square(20);

console.log(mySq.toString());
*/

// Abstract

abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle_1 extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

const myRect = new Rectangle_1(10,20);

console.log(myRect.getArea());