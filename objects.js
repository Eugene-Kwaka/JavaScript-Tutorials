// Creating an object using object literals
var car = {
    price: 10000,
    color: 'black',
    brand: 'tesla'
}
console.log(car)
console.log(car.brand) // display a single property of the object

// Creating an object using dot notation
var house = {};
house.rooms = 4;
house.price = 100000;
house.addresses = "rosewood street"
console.log(house)
// Add a new property to the object
house.color = "black"
// console.log(house.color) // display a single property of the object


// Creating an object using brackets notation
var food = {};
food["name"] = "pizza";
food["price"] = 2.50;
food["flavor"] = "pepperoni";
console.log(food)

// Arrays are Objects
// I can use push() and pop() functions in arrays
// push() adds new items to the array
var clothes = [];
clothes.push('tshirt');
clothes.push('pants')
console.log(clothes)
// pop() removes the last item from the array
clothes.pop(); // removed "pants" from the array
console.log(clothes)


// Object Methods
var electronics = {};
electronics.switch = function(){
    console.log("Turned on or off")
}
electronics.price = function(){
    console.log(500)
}
console.log(electronics)
electronics.switch() // -> this object method will only be called by the electronics object and we add () to the property key to invoke the function
electronics.price()
