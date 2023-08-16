"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "Hello world";
greeting.toUpperCase();
console.log(greeting);
var userId = 653455;
var isLoggedIn = false;
// Please note in the case of variables you don't need to specify the type
// TypeScript infers the type when variables as been declared
// Hence the initialization and declaration of variables should be written as:
var myId = 62324242;
// myNum.toLowerCase(); // Err: type is number
var name = "Fahm";
// name = 6; // Err: type is string
var isAlive = true;
// isAlive = 0; // Err: type is a boolean
// any
// Avoid using this
// TS always infers function
// `any` doesn't do type checking
// let hero: any;
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
