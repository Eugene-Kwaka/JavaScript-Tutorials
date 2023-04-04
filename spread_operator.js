// The simplest method to copy properties of an object to a newly created object.
// It is denoted by three dots (...)
// It can spread out array items and join objects together.

//Example
let top3 = ['Tesla', 'Mercedes', 'Kia']
// I want to a function that list the three cars
function listItems(item1, item2, item3){
    console.log("I want a " + item1);
    console.log(`A ${item2} defines me`);
    console.log(`A ${item3} is not to bad`);
}
// Instead of repeating all the items when calling the function, I can use a spread operator
listItems(...top3)



