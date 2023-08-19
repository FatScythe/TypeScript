// The major difference between abstract classes and interface is that
// With absract classes you can implement a function or method and
// have it redily available for children classes

abstract class Animal {
  constructor(public name: string, public specie: string) {}

  // Astract can also precede a function only in an abstract class
  // Abstract method/ functions are compulsory in children classes
  // They also have no implementation
  // Kinda of like an interface setting a fn with return types and parameters
  abstract speak(): void;

  // Functions in abstract classes can be used by children classes
  // There can also be overwritten by them
  run(): void {
    console.log(
      "The " +
        this.name +
        " " +
        "of the specie " +
        this.specie +
        " " +
        "is running"
    );
  }
}

// The Animal class is abstract, hence it can't have an instance i.e object
// const x = new Animal("Bear", "Bear"); // Err: Cannot create instance of an Animal class

class Cat extends Animal {
  speak(): void {
    console.log("The Cat goes **Meow**");
  }

  purr() {
    console.log(this.name + " purrs");
  }
}

const garfield = new Cat("Mr. milkshake", "feline");

// Method was implement in the parent class
garfield.run();
// private functions
garfield.purr();

class Dog extends Animal {
  // Implemented the parent abstract (compulsory) method
  speak(): void {
    console.log("The Dog goes **woof woof**");
  }

  // Overwitten the parent run
  run() {
    console.log(
      "The " + this.name + " " + "of the specie dog family is running"
    );
  }
}

const doggie = new Dog("Bingo", "canine");
doggie.run();

export {};
