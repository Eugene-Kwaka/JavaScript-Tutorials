// Builds a small package and add items to it. Different to spread operator.
// Suppose I have an array of 6 numbers. I want to DESTUCTURE the array in to two parts. 
// Here is how I will use the rest operator. 

let nums = [1,2,3,40,50,60]
let [] = nums;

// I want to unpack the nums array to two arrays with 3 items each
// first, second, third are the first 3 items from the nums array
let[first, second, third, ...subArray] = nums;

// Using rest operator, the nums array is subdivided to two subArrays and g
console.log(subArray) //-> returns 40, 50, 60 which are the remaining 3 items from the nums array

// IN FUNCTIONS
function addTaxToPrices(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item);
}
let shoppingCart = addTaxToPrices(1.5, 55, 45, 90, 124)
console.log(shoppingCart)
// The itemsBought is an array created by the Rest Operator
// I can use the map() function for each item in the itemsBought array and multiply it to the taxRate. 