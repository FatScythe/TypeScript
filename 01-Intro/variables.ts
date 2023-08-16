let greeting: string = "Hello world";

greeting.toUpperCase();
console.log(greeting);

let userId: number = 653455;

let isLoggedIn: boolean = false;

// Please note in the case of variables you don't need to specify the type
// TypeScript infers the type when variables as been declared
// Hence the initialization and declaration of variables should be written as:

let myId = 62324242;

// myNum.toLowerCase(); // Err: type is number

let name = "Fahm"; 

// name = 6; // Err: type is string

let isAlive = true;

// isAlive = 0; // Err: type is a boolean

// any

// Avoid using this
// TS always infers function
// `any` doesn't do type checking

// let hero: any;
let hero: string;

function getHero(){
    return "thor"
}

hero = getHero()

export {}