// This will manually create the TypeError instance
throw new TypeError();



// Code a function declaration called addTwoSums and takes arguments (a,b)
// Invoke the addTwoNums function with a number and a string
// Update the addTwoNums function with a try...catch block
// If the passed-in arguments are not numbers, throw an error
// Update the catch block
// Invoke the addTwoNums function and Add another console log under the addTwoNums function invocation
function addTwoSums(a, b){
   try{
      if (typeof(a) !== 'number'){
         throw ReferenceError('the first argument is not a number')
      } else if (typeof(b) !== 'number') {
         throw ReferenceError('the second argument is not a number')
      } else {
         console.log(a+b)
      }
   } catch (err){
      console.log("Error!", err)
   }
}
   
addTwoSums(8, "10");

console.log("It still works")


// In this case nothing will get printed as the console.log() function is unreachable
throw new Error();
console.log("Hello");