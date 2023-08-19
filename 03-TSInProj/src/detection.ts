// NARROWING
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// NARRAWING : 'in' keyword;

interface User {
  name: string;
  age: number;
  id: string;
}

interface Admin extends User {
  isAdmin: boolean;
}

const isAdminAccount = (account: User | Admin): boolean => {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }

  return false;
};

// NARRAWING: 'as' and 'is' keyword

type Fish = {
  swim: () => void;
  food: string;
};

type Bird = {
  fly: () => void;
  food: string;
};
const GoldFish: Fish = {
  swim: () => {},
  food: "This is fish food",
};

const Parrot: Bird = {
  fly: () => {},
  food: "This is fish food",
};

const isFish = (pet: Fish | Bird): pet is Fish => {
  // Below If the pet as fish, as the method 'swim', it returns a boolean
  // We then define a return type of 'pet is Fish' this so that
  // Wherever we use this fn, we will not get a specific type
  return (pet as Fish).swim() !== undefined;
};

function getFood(pet: Fish | Bird): string {
  if (isFish(pet)) {
    return pet.food;
  } else {
    return pet.food;
  }
}

// DIscriminated Union

// interface Shape {
//   kind: "circle" | "square" | "rectangle";
//   radius?: number;
//   length?: number;
//   breadth? :number
// }

// OR
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  length: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  breadth: number;
}

type Shape = Circle | Square | Rectangle;

// Exhaustive Checking

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // When i added a rectangle type this return became invalid
  //return shape.side * shape.length
}

// Never Checking
// Having a default case in case a new interface or type is added
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.length * shape.length;

    case "rectangle":
      return shape.length * shape.length;

    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}

export {};
