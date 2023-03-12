// Example 1
function add(a,b){
    var c = a + b;
    console.log(c);
}

add(9,8)

// Example 2
// Looping through a function
function letterFinder(word, match){
    for (var i = 0; i < word.length; i++){
        if (word[i] == match){
            console.log("Found the", match, "at", i);
        }else {
            console.log("---No match found at", i);
        }
    }
}
letterFinder("test", "t")

// More exercises
// Create a program that randomly describes an inputted user's name
let words = ["thoughtful", "happy", "good", "joyful"]
function myName(){
    let name = prompt("What is your name? ");
    // Randomly chooses a word from the words array using it's index
    let wordsIndex = Math.floor(Math.random() * words.length);
    // We get the random word based on the choosen index
    let randomWord = words[wordsIndex]
    console.log("Your name is: " + name + " and you are " + randomWord)
}
myName()

// Create a basic calculator that takes two numbers and one string value indicating an operation.
// If the operation equals add, the two numbers should be added. 
// If the operation equals subtract, the two numbers should be subtracted from one another.
// If there is no option specified, the value of the option should be add.
// The result of this function needs to be logged. Test your function by invoking it with different operators and no operator specified.
let x = 10
let y = 20
let operator = "+"

function mycalc(x, y, operation){

}