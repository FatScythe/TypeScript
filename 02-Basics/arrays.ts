let empty: [] = []; // Empty Array
let names: string[] = [];
// const numbers: number[] = [];
// OR
const numbers: Array<number> = []

// empty.push(""); // You cannot add to type empty array
names = ["Fahm", "Dayo", "Ola"];
numbers.push(1);

// For array of arrays
const ArrayofArray: number[][] = [[233,255, 0], []]; 

type User = {
    name: string;
    phoneNumber: number;
}

let allUsers: User[] = [{name: "Fardah", phoneNumber: 7968612}]; 
allUsers.push({name: "", phoneNumber: 9763555});


export {};