// // Create a class
// class Train {
//     // Constructor is responsible to build the properties that the object instances will have
//     constructor(color, lightsOn){
//         // "this" is the future object instance of the Train class
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
// }

// let speedRail = new Train("yellow", true)
// console.log(speedRail)

// let commuterRail = new Train("red", false)
// console.log(commuterRail)

// ADDING METHODS TO CLASSES
class Train{
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    // These are the class methods(functions)
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    // This method will display whether lights are on or off
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    // getself() is an inbuilt class method that returns the properties of the object instance(logs the entire object instance)
    getSelf() {
        console.log(this);
    }
    // getPrototype class method returns the Prototype from which the object instance is derived from.
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
var fastRail = new Train("amber", true);
// // invoking this function will affect the lightsStatus() value because its intended to change the value from either true to false or viceversa
// fastRail.toggleLights()
// fastRail.lightsStatus() // -> this will print out false because of the toggleLights() method being invoked before it
// fastRail.getSelf() // -> This will ONLY display the object instance properties defined in the constructor.
// fastRail.getPrototype() // -> ONLY displays the Train class and the class methods, NOT the data from the constructors

/* It is possible to implement Polymorphism using classes in JS. 
 This is achieved by inheriting from the base class (Train) then overriding the inherited behaviors. */
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn){
        // The super keyword allows the sub-class(HighSpeedTrain) to specify what properties to inherit from the superclass(Train).
        // In this case its the two properties color and lightsOn
        super(color, lightsOn);
        // HighSpeedTrain sub-class properties
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeedOn(){
        this.highSpeedOn != this.highSpeedOn;
        console.log("High speed status:", this.highSpeedOn)
    }
    toggleLights(){
        super.toggleLights(); //-> Inherited from Train class but then overrode by the console.log statement below
        super.lightsStatus(); // -> Inherited from the train class
        console.log("The lights are 100 percent operational");
    }
}

let bulletTrain = new HighSpeedTrain(400, true, "magenta", false)
bulletTrain.toggleLights() // -> Will be true because the value is inherited from the super class
bulletTrain.toggleHighSpeedOn() //-> returns True
console.log(bulletTrain.highSpeedOn)

let bulletRail = new Train('blue', false)
bulletRail.toggleLights() // -> returns undefined
bulletRail.lightsStatus() // -> returns true