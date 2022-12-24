// Data
var currencyOne = 100;
var newCurrency = 0;
var exchangeRate = 1.2;
// function that takes in the data as arguments
function convertCurrency(amount, rate){
    return amount * rate;
}
// Calling the function with the data as its arguments
newCurrency = convertCurrency(currencyOne, exchangeRate)
console.log("$" + newCurrency)


// RETURN VALUES
// Return values can be used from one function inside another function
// Example: This function doubles a number
function doubleIt(num) {
    return num * 2
}
// Another function that creates an object with a specific value
function objectCreator(val){
    return {
        prop : val
    }
}
// The return has been used in both functions. First is to make an object which the second function inside is to double it.
console.log(objectCreator(doubleIt(100)))


// FUNCTIONAL CALLING AND RECURSION
// Recursion is when a function calls itself. It is great way to handle repeated code without running into an infinite loop.
// example of code that will run in infinite loop
function countDown(){
    console.log("1");
    console.log("2");
    console.log("3");
    // Since the function calls itself, it will run infinitely if no condition has been set for it to stop
    countDown();
}
countDown()

// To control this infinite loop, I can do the following
// Set the counter variable to a number I want the code to repeat itself to.
var counter = 3;
function countDown(){
    // displays 3
    console.log(counter)
    // Reduces counter by 1 
    counter = counter - 1
    // if counter is 0, function stops
    if (counter === 0) return;
    // function calls itself again 
    countDown();
}
countDown()


// FIRST-CLASS FUNCTIONS
// It means that a function in JavaScript is just another value that we can:
//  - pass to other functions
//  - save in a variable
//  - return from other functions
// In other words, a function in JavaScript is just a value - from this vantage point, almost no different than a string or a number
// Example
// This function adds two numbers
function addTwoNums(a, b) {
    console.log(a + b)
}
// Returns a random number
function randomNum() {
    // Math.floor changes returns the largest integer less than or equal to a given number. eg 45.87 -> 45, 67.21 -> 67
    // This is applied to a random number(decimal less than 1 e.g 0.7627) gets multiplied by 10(7.627) to make it an integer then it's  added to 1(8.627)
    return Math.floor((Math.random() * 10) + 1);
}
// this function returns a specific number of value 42
function specificNum() { return 42 };

// Data variables
var useRandom = true;
// var not yet initialized
var getNumber;
// if UseRandom is True
if(useRandom) {
    // getNumber is initialized to either with the return value of the randomNumber function
    getNumber = randomNum
} else { // or initialized to 42 using the specificNum function
    getNumber = specificNum
}
// Add the two getNUmber possibilites in the case of arguments a and b
// This code works because the functions are first-class citizens meaning they have been passed around as values to variable names
addTwoNums(getNumber(), getNumber())


// HIGH-ORDER FUNCTIONS
// A higher-order function is a function that has either one or both of the following characteristics:
//  - It accepts other functions as arguments
//  - It returns functions when invoked
// Example
function addTwoNums(getNum1, getNum2){
    // Display these values as the functions randomNum and specificNum
    console.log(getNum1() + getNum2())
}
// when calling the function, we pass the functions from the previous section as the arguments
addTwoNums(randomNum, specificNum) // -> Adds a random number to 42
addTwoNums(specificNum, specificNum) // -> returns 84 since specificNum is 42, 42+42 = 84

// PURE FUNCTIONS
// -> These functions return the same output as long as they have been provided with the same argument values
// For example
function multiplyNums(a, b){
    console.log(a*b);
}
multiplyNums(5,6) // will always return 30 as long as the arguments are 5 and 6