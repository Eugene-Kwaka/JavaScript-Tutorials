// let a = "1"
// let b = 1
// console.log("Adding the two equals to = ", a + b)

// let sideA = prompt("Say a number; ")
// let sideB = prompt("Say a number; ")
// let c = sideA**2 + sideB**2 
// console.log("The hypotenuse is: ", c)

// Create a variable that contains a value in miles, convert it to kilometers, and log the 
// value in kilometers in the following format:
let dist = 2000
console.log(`The distane of ${dist} kms is equal to ${dist * 1.60934} miles.`)

// Set values for height in inches and weight in pounds, then convert the values to 
// centimeters and kilos, outputting the results to the console.
let height = 6;
let weight = 200
let convertCms = height * 2.54
let convertKilos = weight / 2.2046
console.log(`The height of ${height} inches is ${convertCms} centimeters and the weight ${weight} pounds is ${convertKilos} kilos`)
let bmi = convertKilos / (convertCms/100)**2
console.log("The BMI is: ", bmi)


const food = ["biriani", "pilau", "ugali", "omena"]
food[3] = "chapati"
console.log(food)
food = ["My favorite food is"]
console.log(food)