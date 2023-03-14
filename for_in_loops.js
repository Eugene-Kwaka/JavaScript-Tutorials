const car = {
    color: "red",
    engine: true
}
const Tesla = Object.create(car)
// Creating prototype from the object car returns an EMPTY PROTOTYPE
console.log(Tesla)
Tesla.speed = "fast"
console.log(Tesla) // -> Returns the prototype object with the property speed:fast

// Using for-in loop
for(property in Tesla){
    console.log(property)
    // This returns the keys of the Tesla prototype instead of the Tesla object
}

// using for-of loop
for (property of Object.keys(Tesla)){
    console.log(property + ":" + Tesla[property])
    // -> This only returns the speed property for Tesla that I specified 
}

