// Variable
let score: number | string;

score = 33;
score = "33";

// Objects

type User = {
    name: string;
    id:  number | string;
}

type Admin = {
    username: string;
    id:  number | string;
}

let currentUser: User | Admin = {name: "Fahm", id: 6786};

currentUser = {username: "Fahm", id: 6786};



// Functions
function getDbId(id: number | string): string | number  {
    // id.toLowerCase(); // This will not work since id can be number too
    if(typeof id === "string") {
        id.toLowerCase();
    }
    if(typeof id === "number" ) {
        id + 2;
    }

    return id;
};

// Arrays

// const myArray1: number[] | string[] = [3,4,5,7, "9"];
// You would think this would allow string or numbers
// But it only verifies one or the other i.e can only be strings or can only be numbers

// Now this would allow both simultaneously
const myArray2: (number | string)[] = [3, 4, 5, 7, "3", "7", "5"];
const myArray3: (number | string| boolean)[] = [true, 2, "se"];


let pi: 3.14 | 3.142;

// pi = 1212; // Error

let seatAllotment: "aisle" | "window" | "upper-deck";

seatAllotment = "aisle";

// seatAllotment = "pilot deck"; // Error


// Combine types
type score = 0 | 30 | 50 | 60 | 70;

type grade = "F" | "D" | "C" | "B" | "A"; 

type sizedIcon = `${grade}-${score}`;
let myScore: sizedIcon = "B-60" 
// FireShip : "Now you have 5 * 5 types for the price of one" 
// Don't have a use case for it yet but hey, it's there



export {};