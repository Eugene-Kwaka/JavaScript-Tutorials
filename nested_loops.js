// Display two consecutive years and their summer months
for (var year = 2022; year < 2025; year++) {
    console.log(year)
    for (var month = 6; month < 9; month++) {
        console.log("The summer months are " + month)
    }
}

// create a multiplication table which multiplies numbers from 0 and 1 to 0 - 9 
for (i=0; i<2; i++) {
    for (j=0; j<10; j++) {
        var k = i * j
        console.log(i + " multiply by " + j + " = " + k)
    }
}

// Division of numbers
for (var x = 100; x > 10; x = x -10){
    for (var y = 10; y > 4; y = y - 5){
        var z = x / y
        console.log(x + " divided by " + y + " = " + z )
    }
}

// Let's say I am working with a string, I want to be able to display individuals character using a for loop 
let fruit = "Banana";
// fruit.length shows the number of  characters in the string
for (var i = 0; i < fruit.length; i++){
    // To print the individual characters I will use [] just like in Python
    console.log(fruit[i]);
}


// In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.

// To make the counter increment by 1 on each loop, you will use i++.

// The exit condition for the for loop is i<=10.

// Inside the loop, write an if-else statement, which will check the following conditions:

// First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

// Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

// Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

// For all the remaining values of i, your code will console log just the value of i.

// Note: The expected console log of the entire code should be as follows.
// Gold medal
// Silver medal
// Bronze medal
// 4
// 5
// 6
// 7
// 8
// 9
// 10

for (var i = 1; i <= 10; i++){
    if (i == 1){
        console.log("Gold medal");
    }else if (i==2){
        console.log("Silver medal");
    }else if (i==3){
        console.log("Bronze medal");
    }else{
        console.log(i)
    }
}

// Using Switch in the example above
for (var i = 1; i <= 10; i++){
    switch (i) { 
        case 1:
            console.log("Gold medal")
            break
    
        case 2:
            console.log("Silver medal")
            break
        
        case 3:
            console.log("Bronze medal")
            break
        
        default:
            console.log(i)
    }
}

for (let num = 1; num <= 10; num++){
	switch (num) {
		case 1:
			console.log("Gold");
            break;
		case 2:
			console.log("Silver");
            break;
		case 3: 
			console.log("Bronze");
            break;
		default:
			console.log(num);
	}
}