"use strict";
// const User = {
//     name: "Fahm",
//     email: "holadhayo28@gmail.com",
//     isActive: true,
// }
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Fahm", isPaid: false });
// TS also as some weird quirks : )
// Below i have added an email no the obj argument,
// It throws an error that i have not defined the email
// which is great 
// createUser({name: "Fahm", isPaid: false, email: "holadhayo28@gmail.com"});
// But if i were to assign this arg obj to a variable it doesn't throw an error 
var newUser = { name: "Fahm", isPaid: false, email: "holadhayo28@gmail.com" };
createUser(newUser);
// Returning an object
function createCourse() {
    return { name: "reactjs", price: 399 };
}
// By preceding the cardNumber type with a '?' i do not need to declare it if i don't have
var User = {
    _id: "58127872816262eds",
    email: "holadhay028@gmail.com",
    isActive: true,
};
User.cardNumber = 5449788566773;
var card = {
    cardName: "Fahm Abdullahi",
    CVV: 648,
    cardNumber: 5449788566773
};
