// IF ELSE Statement
var result = 50;
if (result > 40){
    console.log("You passed the test, Congratulations!!");
} else {
    console.log("You failed the test, you have to retake the test!!");
}


// ELSE IF Statement
var food = "pizza";

if (food == "pizza") {
    console.log("Buy the food!");
} else if (food == "burger") {
    console.log("Reconsider!");
}   else if (food == "Rolls") {
    console.log("Return it!");
}

// We can use the Switch statement to reduce the lines of code and complexity of using the Else If Statement.

var food = "Cereals";
switch (food) {
    case "Cereals":
        console.log("I love fruity pebbles!");
        break;
    case "Rolls":
        console.log("I don't want rolls today!");
        break;
    case "Mahamri":
        console.log("I'll definitely have mahamri!");
        break;
    default:
        console.log("I'll try another store!");

}



// PRACTICE CONDITIONAL STATEMENTS
// Declare a variable age using the var keyword and set it to the number 10.

// Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".

// Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".

// Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".

// Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical". 

var age = 27;
if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18){
    console.log("You get an allowance");   
} else{
    console.log("The value of the age variable is not nummerical")
}

// Code the days of the week program as a switch statement
// On the next line, define a new variable, name it day, and set its value to "Sunday".

// Start coding a switch statement, passing the day variable as the expression to evaluate.

// Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

// At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

// Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.

var day = "Sunday";
switch (day) {
    case "Monday":
        console.log("Do something");
        break;
    case "Tuesday":
        console.log("Do something");
        break;
    case "Wednesday":
        console.log("Do something");
        break;
    case "Thursday":
        console.log("Do Something");
        break;
    case "Friday":
        console.log("Do Something");
        break;
    case "Saturday":
        console.log("Do Something");
        break;
    case "Sunday":
        console.log("Do Something");
        break;
    default:
        console.log("There is no such day");
}