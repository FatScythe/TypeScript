"use strict";
console.log("TypeScipt is live");
const btn = document.querySelector('#btn');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    alert("I have been clicked!");
});
// class User {
//     // NB: This variable are marked as "public" by default
//     // private marks variables or method as used only in their class
//     public name: string;
//     email: string;
//     age: number;
//     private readonly id: string = (Math.random() * 12009983).toString();
//     constructor(name: string, email: string, age: number) {
//         this.name = name;
//         this.email = email;
//         this.age = age;
//     }
//     getAge(): void {
//         console.log(this.age);       
//     }
// }
// OR we can initialize those variables by appending public to them in the constructor parameter
// It's more cleaner this way as you dont need to declare them first 
// and then initialize with the 'this' keyword
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        // Protected keyword similar to the private key word except it 
        // gives access to children classes
        this.courseCount = 1;
        // private courseCount: number = 1;
        this.id = (Math.random() * 12009983).toString();
        ;
    }
    getAge() {
        console.log(this.age);
    }
    getUserid() {
        return this.id;
    }
    getCourseCount() {
        console.log(this.courseCount);
    }
    deleteToken() {
        console.log("Token has been deleted");
    }
    // GETTERS AND SETTERS
    get getUserId() {
        return `${this.id}`;
    }
    // NB: Setters can not have a return type
    // Also there can only have one parameter
    set increaseCourseCount(courseNumber) {
        if (courseNumber < 1)
            throw new Error("Course Number can not be less than 1");
        this.courseCount += courseNumber;
    }
}
class SubUser extends User {
    constructor(name, email, age, displayName) {
        super(name, email, age);
        this.name = name;
        this.email = email;
        this.age = age;
        this.displayName = displayName;
        this.displayName = displayName;
    }
    updateCourseCount(no) {
        // only have access to the courseCount because it uses the 'protected' keyword
        this.courseCount += no;
    }
}
const user1 = new User("Fahm", "holadhayo28@gmail.com", 23);
// user1.id = "dwqwqww"; // Err: ReadOnly variable
user1.name = "Oladayo";
// user1.deleteToken(); // Err: private method
// GET
user1.getUserId;
// SET
user1.increaseCourseCount = 3;
//after it as been set
user1.getCourseCount();
// Child Class
const user1_2 = new SubUser(user1.name, user1.email, user1.age, "Scythe");
console.log(user1_2);
