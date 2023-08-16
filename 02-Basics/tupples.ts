// When in need of an array with specific lenghth and order

let myArray: [number, string];
myArray = [2, ""];

// e.g RGB values for color

let RGBA: [number, number, number, number?] = [255, 134, 98];

type User = [string, number];

// But there's a problem 
let user: User = ["holadhayo",  12394];

// In a situation like this you probably don't want the array to be immutable
user[0] = "Fahm";
user.push(3);

// user.push(true); // Err because type defn doesnot contain boolean


export {};