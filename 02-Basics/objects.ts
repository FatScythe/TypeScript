// const User = {
//     name: "Fahm",
//     email: "holadhayo28@gmail.com",
//     isActive: true,
// }


function createUser({name: string, isPaid: boolean}) {} 

createUser({name: "Fahm", isPaid: false});

// TS also as some weird quirks : )
// Below i have added an email to the obj argument,
// It throws an error that i have not defined an email
// which is great 

// createUser({name: "Fahm", isPaid: false, email: "holadhayo28@gmail.com"});

// But if i were to assign this arg obj to a variable, and pass it 2ru it doesn't throw an error 
const newUser = {name: "Fahm", isPaid: false, email: "holadhayo28@gmail.com"}
createUser(newUser);

// Returning an object

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

// another quirky behaviour of TS is that it does not allow 
// two or more data types that are the same for 1 arguments object e.g

// function someThing({name: string, email: string}) {}

// This is not allowed, To combat this use the type allias


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// const getUser =(user: User): User => {
//     return {name: user.name, email: user.email, isActive: user.isActive};
// }

// getUser({name: "Fahm", email: "holadhayo28@gmail.com", isActive: true});

// you can also do some weird things with the type allias

// type bool = boolean;
// const isActive: bool = true;

// type String = string;
// const name: String = "Fahm";


// READ ONLY AND OPTIONAL TYPES

type User = {
    readonly _id: string;
    email: string;
    isActive: boolean;
    cardNumber?: number;
}

// By preceding the cardNumber type with a '?' i do not need to declare it if i don't have
let User: User = {
    _id: "58127872816262eds",
    email : "holadhay028@gmail.com",
    isActive: true,
}

User.cardNumber = 5449788566773;
// By precceding the User._id type with readonly, i can no longer change it
// User.email = "fahm@gmail.com";
// User._id = "16281628612y919281e"; // This won't work since it's read only

// COMBINING TYPES
type cardNumber = {
    cardNumber: number;
}

type cardCVV = {
    CVV: number;
}

type cardDetail = cardNumber & cardCVV & {
    cardName: string;
}

let card: cardDetail = {
    cardName: "Fahm Abdullahi",
    CVV: 648,
    cardNumber :5449788566773
}



export {};