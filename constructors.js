// Create a constructor for a date object
var today = new Date()
console.log(today) // -> This returns a the date and time for today


// Customizing a constructor function
function iceCream(flavor){  // -> This constructor function may be converted to a class declaration.
    this.flavor = flavor;
    this.meltIt = function(){
        console.log(`This ${this.flavor} icecream has melted`);
    }
}
// Creating instances of the iceCream constructor function
let iceCream1 = new iceCream("vanilla")
iceCream1.meltIt()
let iceCream2 = new iceCream("kiwi")
console.log(iceCream2.flavor);

// Comparing a string object to a string literal
let apple = new String('apple')
console.log(typeof(apple)) // object
let apple2= "apple2";
console.log(typeof(apple2)) // string literal

// String literals ARE MORE PERFORMANT than String objects

// PATTERN LITERAL
console.log("abcd".match(/d/));