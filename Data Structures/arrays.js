// THE SOLUTION TO A PROBLEM DEPENDS ON THE DATA STRUCTURE USED

// Find the average of grades in the following Array. 
const grades = [76, 90, 95, 85, 85]
let gradeSum = 0
for (let i=0; i < grades.length; i++){
    gradeSum += grades[i]
}
console.log(gradeSum / grades.length)

// Arrays have built in methods including:
// 1. forEach
// 2. filter
// 3. map

// forEach()
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

// In this example, the forEach method takes in a function as its argument
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});


// Filter()
// It filters your arrays based on a specific test. 
// Those array items that pass the test are returned.
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
});

// Map()
// This method is used to map each array item over to another array's item, 
// based on whatever work is performed inside the function that is passed-in to the map as a parameter. 
const numbers = [0,10,20,30,40,50]
numbers.map( function(num) {
    return num / 10
})
