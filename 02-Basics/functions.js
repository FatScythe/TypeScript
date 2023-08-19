"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
  // num.toUpperCase(); // Err: parameter is type number
  return num + 2;
  // return "Hello" // NB: Nothing is stopping me from returning a string, to avoid this, set return type to number
}
// addTwo("2"); // Err: argument should be type number
var myVal = addTwo(5);
function getUpper(val) {
  return val.toUpperCase;
}
// getUpper(2); // Err: Parameter should be a string
getUpper("Fahm");
// Multiple Parameters
function signUpUser(name, email, isPaid) {}
signUpUser("Fahm", "holadhayo28@gmail.com", true); // All argument must be given
// Default value
var loginUser = function (name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
};
loginUser("Fahm", "holadhayo28@gmail.com"); // Parameter(s) that as already been assigned a value doesn't need an argument
// Returning multiple types
// if a fn is returning multiple values we can specify what it can return
var getValue = function (myVal) {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
};
// By specifying a return value type such fn must return that type
var getHello = function (s) {
  return "";
};
var heros = ["batman", "superman", "wonder-woman"];
// const heros = [1,2,3];
heros.map(function (hero, index) {
  // Notice we did not need to anotate the hero callback only the return type
  // bcos TS already knows what it should expect
  return "".concat(index, ")My fav hero is ").concat(hero);
});
// Void
// In a situation where the fn doesnot return amything
function logErr(errMsg) {
  console.error(errMsg);
}
// Never
// In a situation where the fn is to terminate
var handleError = function (err) {
  throw new Error(err);
};
