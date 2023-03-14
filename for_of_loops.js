// OBJECTS are NOT iterable hence I can not use for of loops on them.
//Instead, ARRAYS are iterable and I can use arrays to run for of loops on objects.

// There are 3 built-in methods that can do this.  
// Objects.keys()
const car = {
    color: "black",
    type: "Model X"
}
console.log(Object.keys(car)) //-> Returns the object's keys in an array

//Object.values()
console.log(Object.values(car)) // -> returns the object's values in an array

//Object.entries()
console.log(Object.entries(car)) // -> returns the object's keys and values in arrays nested in another array

// I can now apply any of these methods to implement a for of loop on an object
for (key of Object.keys(car)){
    console.log("Key: " + car[key])
}

for (prop of Object.entries(car)){
    console.log("The car properties are: " + prop)
}
