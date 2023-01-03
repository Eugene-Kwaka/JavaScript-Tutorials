// Prototype -> A concept in JS where many forms are developed from an original model
// A Prototype object
let bird = {
    hasWings : true,
    canFly : true,
    hasFeathers : true,
}
// Object.create() creates a new object from an existing prototype 
let eagle = Object.create(bird)
console.log("Does the eagle have wings? ", eagle.hasWings) // -> True

let penguin = Object.create(bird)
// I can override the prototype's properties to the needs of my new object. In this case Penguins can't fly
penguin.canFly = false
console.log("Can the penguin fly? ", penguin.canFly) // -> False since we changed the canFly property to False
