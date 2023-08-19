// Similar to type
interface User {
  name: string;
  email: string;
  readonly DBid: number;
  creditCardNumber?: string;
  isMember: boolean;
  // startTrial: () => boolean, // funtion must return boolean
  startTrial(): boolean;
  getCoupon(couponCode: string, discount: number): number;
}

// another advantage is that you can add more fields and method to an already existing interface
// AKA REOPENING AN INTERFACE
interface User {
  github: string;
}

// INHERITANCE
interface Admin extends User {
  role: "user" | "admin" | "vendor";
}

let user1: Admin = {
  name: "Fahm",
  email: "holadhayo28@gmail.com",
  DBid: 7854546698,
  isMember: false,
  github: "github/1132313",
  startTrial: () => true,
  getCoupon: () => 1,
  role: "admin",
};

let user2: User = {
  name: "Fahm",
  email: "holadhayo28@gmail.com",
  DBid: 7854546698,
  isMember: false,
  github: "github/1132313",
  startTrial: () => {
    return true;
  },
  getCoupon: (code: "wqwfn", off: 10) => {
    return 0;
  }, // You don't neccesarily need to name the arg as the parameter
};

user2.name = "holadayo";

// user2.DBid = 989732389; // Err: readonly

export {};
