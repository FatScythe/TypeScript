"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variable
var score;
score = 33;
score = "33";
var currentUser = { name: "Fahm", id: 6786 };
currentUser = { username: "Fahm", id: 6786 };
// Functions
function getDbId(id) {
    // id.toLowerCase(); // This will not work since id can be number too
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id + 2;
    }
    return id;
}
;
// Arrays
// const myArray1: number[] | string[] = [3,4,5,7, "9"];
// You would think this would allow string or numbers
// But it only verifies one or the other i.e can only be string or can only be number
// Now this would allow both simultaneously
var myArray2 = [3, 4, 5, 7, "3", "7", "5"];
var myArray3 = [true, 2, "se"];
var pi;
// pi = 1212; // Error
var seatAllotment;
seatAllotment = "aisle";
var myScore = "B-60"; // Now you have 5 * 5 types for the price of one 
