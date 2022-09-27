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
