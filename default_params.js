// example of a function without default parameters
function squareInts(integers){
    console.log("The result is:", integers * integers) 
}
// here I have specified the parameter
// noDefaultParams(25)
// However what if there were no parameters
squareInts(); // -> returns NaN

// I can improve the function by saying
function squareNums(number=10){
    console.log("Result is:", number * number)
}
// Invoking this function will NOT LEAD TO ERRORS as I have specified a default parameter
// I can still pass custom argument values and deal with them however I like
squareNums();

// I can code classes that promote easier object instantiation
class noDefaultParams{
    constructor(num1, num2, num3, string1, bool1){
        this.num1 = num1
        this.num2 = num2
        this.num3 = num3
        this.string1 = string1
        this.bool1 = bool1
    }
    calculate(){
        if (this.bool1){
            console.log(this.string1, this.num1 + this.num2 + this.num3);
        } else{
            console.log("The value of bool1 is incorrect");
        }
        
    }
}

var fail = new noDefaultParams(1, 2, 3, "Result",false)
fail.calculate() //-> returns the string "The value of bool1 is incorrect" because I passed a bool1 value of false

// To improve this class with default params would be 
class withDefaultParams{
    // Default params set in the constructor
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true){
        this.num1 = num1
        this.num2 = num2
        this.num3 = num3
        this.string1 = string1
        this.bool1 = bool1
    }
    calculate(){
        if (this.bool1){
            console.log(this.string1, this.num1 + this.num2 + this.num3);
        }else {
            console.log("The value of bool1 is incorrect");
        }
    }
}

var good = new withDefaultParams()
good.calculate()
