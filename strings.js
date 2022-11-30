// Empty spaces in strings are allowed
let tooth = "";
console.log(tooth);


// Calculate Length of Strings
console.log("".length); // -> 0 characters since it's an empty string
console.log('pizza'.length); // -> 5 characters
console.log("Go home!!".length); //-> 9 characters

// Indexing a String
// use the expression 'string[i]' where i is the index number.
// indices start from 0. They are ALWAYS NUMBERS.
console.log('banana'[0]); // -> The 0 index is b
console.log('banana'[1]); // -> The 1st index is a
console.log('banana'[2]); // -> The 2nd index is n
console.log('banana'[3]); // -> The 3rd index is a
console.log('banana'[4]); // -> The 4th index is n
console.log('banana'[5]); // -> The 5th index is a
// When we use an invalid index with a string we get 'Undefined'

// Using indexOf
// use the indexOf method to calculate the index of a character in a string
console.log("pizza".indexOf("p")); // -> 0
console.log("pizza".indexOf("i")); // -> 1
console.log("pizza".indexOf("z")); // -> 2
console.log("pizza".indexOf("z")); // -> 3
console.log("pizza".indexOf("a")); // -> 4
// When looking for an index of a substring, the INDEX OF THE FIRST CHARACTER of the substring is displayed
console.log("Pizza is here!".indexOf("here")); // -> 9


// Concantenation of Strings
// Use the + sign to join strings together
console.log("Hello" + " " + "Eugene"); // adding an empty string creates a space between the two strings
console.log("App"+'Academy'); // -> AppAcademy
console.log("Welcome" + " back!"); // Welcome back!


// Escaping Strings
// To use quotes within a string, I can use the method of escaping strings using a Backlash "\". 
// The backlash tells JavaScript to ignore the character's special meaning and use the literal value of the character. 
console.log("I said to myself \"I will finish this course soon.\"") // -> I said to myself "I will finish this course soon."
// Code	Character
// \\	    \(backslash)
// \"	    ""(double quote)
// \'	    '(single quote)
// \n	    newline
// \t	    tab


// Comparing Strings
var upper = "Yes";
var lower =  "yes";
console.log(upper == lower); // -> False. The two strings are different in terms of case sensitivity.
// More examples
console.log("green" == "blue") // -> False
console.log("green" > "blue") // -> True. The ASCII values of characters in "green" are greater than for "blue".
console.log("green" > "green") // -> False
console.log("green" > "Green") // -> True
console.log("green" == "Green") // -> False

// Example
var food = "Pizza";
console.log(food)


// USINGS VARIABLE WITHIN A STRING AND CONCANTENATION 
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = "The Intro to JavaScript course is " + adjective1 +"." + " James and Julia are so " + adjective2 +"." + " I cannot wait to work through the rest of this " + adjective3 + " content!"
console.log(madLib);

// Example 2
var firstName = "Eugene";
var interest = "food";
var hobby = "video games";
var awesomeMessage = "Hi, my name is " + firstName + "." + " I love " + interest + "." + " In my spare time, I like to play " + hobby + ".";
console.log(awesomeMessage);