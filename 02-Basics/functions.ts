function addTwo(num: number): number {
  // num.toUpperCase(); // Err: parameter is type number
  return num + 2;

  // return "Hello" // NB: Nothing is stopping me from returning a string, to avoid this, set return type to number
}
// addTwo("2"); // Err: argument should be type number

const myVal = addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase;
}

// getUpper(2); // Err: Parameter should be a string

getUpper("Fahm");

// Multiple Parameters
function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("Fahm", "holadhayo28@gmail.com", true); // All argument must be given

// Default value
const loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("Fahm", "holadhayo28@gmail.com"); // Parameter(s) that as already been assigned a value doesn't need an argument

// Returning multiple types
// if a fn is returning multiple values we can specify what it can return
const getValue = (myVal: number): string | boolean => {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
};
// By specifying a return value type, such fn must return that type
const getHello = (s: string): string => "";

const heros = ["batman", "superman", "wonder-woman"];
// const heros = [1,2,3];

heros.map((hero, index): string => {
  // Notice we did not need to anotate the hero parameter in the callback, only the return type
  // bcos TS already knows what it should expect
  return `${index})My fav hero is ${hero}`;
});

// Void
// In a situation where the fn doesnot return amything

function logErr(errMsg: string): void {
  console.error(errMsg);
}

// Never
// In a situation where the fn is to terminate

const handleError = (err: string): never => {
  throw new Error(err);
};

export {};
