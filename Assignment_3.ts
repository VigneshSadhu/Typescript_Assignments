1.
let userName: string = "John Doe";
let age: number = 25;
let isStudent: boolean = true;

// Bonus:
// userName = 30; // Error:type 'number' is not assignable to type 'string'.
// age = "thirty"; // Error:type 'string' is not assignable to type 'number'.
// isStudent = 1; // Error:type 'number' is not assignable to type 'boolean'.

2.
function add(a: number, b: number): number {
    return a + b;
}

3.
function greet(name:string,message:string = "Hello"):string {
    return `${message}, ${name}!`;
}

4.
function displayId(id:number | string):void{
    console.log(`ID: ${id}`);
}

5.
let numbers: number[] = [10, 20, 30];
let person: [string, number] = ["Vignesh",21];

6.
interface Person {
    name: string;
    age: number;
    email: string;
}
let user:Person={
    name: "vignesh",
    age: 21,
    email: "vignesh@gmail.com",
};

7.
type Employee={
    id:number;
    name:string;
    role:"admin" | "manager" | "employee";
};
let employee:Employee={
    id: 1054,
    name: "vignesh",
    role: "manager",
};

8.
enum Color{
    Red="Red",
    Green="Green",
    Blue="Blue",
}
let favoriteColor:Color = Color.Green;

9.
interface User {
    id:number;
    name:string;
    email:string;
}
const readonlyUser: Readonly<User> = { id: 1, name: "Alice", email: "alice@example.com" };
// readonlyUser.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
let newUser: Partial<User> = { name: "Bob" };

10.
class Car {
    brand:string;
    model:string;
    year:number;
    constructor(brand:string,model:string,year:number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getCarInfo():string{
        return `${this.brand} ${this.model} (${this.year})`;
    }
}
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo()); 
output:Toyota Corolla (2020)