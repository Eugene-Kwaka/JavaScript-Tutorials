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
class Mammal extends Animal { /* ...class code here... */ }
class Cow extends Mammal { /* ...class code here... */ }


// 2. Encapsulation
// encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.
// For example the code:
"eat".toUpperCase();
// I don't need to know the behind the scenes for the method but I should know how to use it and make sure my code does not break.


// 3. Abstraction
// Abstraction is all about writing code in a way that will make it more generalized.
// An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 


// 4. Polymorphism
// This means taking of many shapes. 
// For example: A door (object) has a property method called bell that is rung for a person to come and open the door.
// At the same time, a bicycle (object) has a property method named bell that is also rung, but in this case it is to alert people to get out of the way. 
// To put this in code:
const door = {
    bell: function(){
        return "Ring, ring! Come open the door"
    }
}

const bicycle = {
    bell: function(){
        return "Ring, ring! Get out of the way"
    }
}
// door.bell()
// bicycle.bell()

// I can create a polymorph method that can work with both objects, or new object with the bell method.
// It takes in the objects(thing) as a parameter and returns the thing.bell() method as an output
function ringBell(thing){
    console.log(thing.bell())
}
// Calling the function ringBell will display the value of the object's bell() method.
ringBell(door)
ringBell(bicycle)

// Let me try the above on classes
class Bird {
    useWings(){
        console.log("Flying");
    }
}

class Hawk extends Bird {
    useWings(){
        super.useWings() // Hawk sub-class will inherit the useWings from the Bird class using super
        console.log("Let's go Hawks")
    }
}

class Penguin extends Bird {
    useWings() {
        console.log("Come on Boys")
    }
}

var blackPenguin = new Penguin()
blackPenguin.useWings();

var hawkEye = new Hawk()
hawkEye.useWings();