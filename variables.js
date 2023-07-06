// Initializing Variables
let bootcamp = "JS tutorials";
console.log(bootcamp);

let birthday = 1997;
console.log(birthday);

// Manipulating Variables
let num = 45;
console.log(num + 5) // num -> 50
console.log(num) // num -> 45

// Manipulating the variable by reassigning it
// variable let num has been updated using the += method hence value changes
num = num + 10
console.log(num) // num -> 55

// Assignment Shorthand
// Here we update the number variable
let number = 0;
number += 5;   // Adds 5 to value of number and redeclares it to -> 5
number /= 2;  // Divides 2 from new value number: 5/2 -> 2.5
number *= 4   // Multiplies 4 to the new value of number: 2.5 * 4 -. 10
console.log(number); // New value of number is -> 10

// Other Assignment Shorthands
let num1 = 12;
num1 ++; // Add 1 to value of num1
console.log(num1); // -> will be updated to 13

let num2 = 16;
num2 --; // Subtracts 1 from value of num2
console.log(num2) // -> Will be updated to 15

// NAN(Not A Number)
// let num;
// console.log(num + 2); // This will return NAN as the num variable is undefined

// The single operators +, -, *, /, % DO NOT MODIFY/UPDATE the value of a let variable 
let i = 4;
i + 3;
console.log(i); // i remains to be 4

// The assignment shorthands +=, -=, *=, /= MODIFY the value of a string
let x = 7;
x *= 3;
console.log(x); // x -> 21

let age = 26;
if ()


// VAR KEYWORD
// We can declare and redelare var variables without errors
var user = "Eugene"
user = "John"
user = "Eddy"
user = "Ken"
console.log(user) // -> The user will be Ken as the var user has been redeclared various times


// CONST
// This is the strictes form of variable assignment
// Does NOT support Redeclare or Update of variables
const person = "Drew"
person  = "Pam"
console.log(person) // Will return a typeError as we are trying to redeclare a constant variable
