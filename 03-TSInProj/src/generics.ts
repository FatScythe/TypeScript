// In situations where the return type and parameter
// type of a function is unknown we use the generic type

const x: Array<string> = ["1", "2", "3", "4"];
const y: Array<number> = [1, 2, 3, 4];

// In a situation where we wish to pash an unknown data type
// we could use the union type but thats not feasible

function identityOne(val: string[] | number[]): number[] | string[] {
  for (let i = 0; i < val.length; i++) {
    console.log(i);
  }

  return val;
}

identityOne(x);
identityOne(y);

// OR we could use the any, its feasible but you could pass any as an argument
// and return any data type, which means you could pass a string and return a number
// Also its best to avoid it
function identityTwo(val: any): any {
  for (let i = 0; i < val.length; i++) {
    console.log(i);
  }

  return val;
}

// Hence, we use the generic method instead
// because whatever type it reads in the angular bracket is what
// must be passed as an argument and be returned
function identityFour<T>(val: T): T {
  return val;
}

interface User {
  name: string;
  age: number;
}

function identityFive<Z>(val: Z): Z {
  return val;
}
identityFive<User>({ name: "", age: 23 });

// Generics for array
function getSomething<T>(one: T[]): T {
  let myIndex = 4;
  return one[myIndex];
}

getSomething(x);

const getSomething2 = <T>(thing: T[]): T => {
  let myIndex = 3;
  console.log(thing.length);

  return thing[myIndex];
};

getSomething(y);

const g = <T>(val: T[]): T => {
  return val[8];
};

// Generics can also take multiple arg data type

const GetValue = <Type, Key extends keyof Type>(
  obj: Type,
  key: Key
): Type[Key] => {
  return obj[key];
};

let Obj = { a: 1, b: 2, c: 3, d: 4 };

GetValue(Obj, "c");
// GetValue(Obj, "n"); // no key with "n"

interface Database {
  connection: string;
  isConnected: boolean;
}

const h = <T, U extends Database>(x: T, y: U): object => {
  return { x, y };
};

h("", { connection: "", isConnected: false });

// Generics in Classes
interface product1 {
  name: string;
  id: number;
}

interface product2 {
  name: string;
  id: number;
  color: string;
}

class Cart<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

const myCart = new Cart<product1>();

myCart.addToCart({ name: "Bag", id: 1212192689172 });

export {};
