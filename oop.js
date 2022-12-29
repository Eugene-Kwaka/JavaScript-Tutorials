// Create an object
var purchase = {
    // Kev: value pairs
    teslas: 200,
    stateTax: 12.5,
    // create a method for the object
    totalPrice: function(){
        var calculation = this.teslas * this.stateTax;
        console.log("Total Price for Teslas", calculation)
    }
}
purchase.totalPrice()
// console.log(purchase.teslas)

var purchase2 = {
    chevys: 20,
    stateTax: 8,
    // create a method for the object
    totalPrice: function(){
        var calculation = this.chevys * this.stateTax;
        console.log("Total Price for Chevys:", calculation)
    }
}
purchase2.totalPrice()
// The totalPrice function is similar to both objects. I can update the function and use it across different objects using the "this" keyword. It refers to the current object 


// CLASSES
// A class is a blueprint/template to build objects of a certain type as many times as possible
class Car {
    // The constructor function takes in the parameters that will be referenced as the object's properties
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    // methods in classes do not require the function keyword
    turboOn(){
        console.log("Turbo is On")
    }
}
// To instantiate a new object
const car1 = new Car("maybach", 100)
car1.turboOn()
console.log(car1.model)


// PRINCIPLES OF OBJECT ORIENTED PROGRAMMING
// 1. Inheritance

// In essence, it's a very simple concept. It works like this: 

// A. There is a base class of a "thing".

// B. There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")

// C. There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.

// Here is how inheritance works in JS
class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }


// 2. Encapsulation
// encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.