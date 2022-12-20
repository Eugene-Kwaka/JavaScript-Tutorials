// I use try and catch to avoid errors and exceptions thrown when running code..
function sum(a, b){
    var c  = a + b;
    try{
       console.log(a+b+d);
    } catch (err) {
        console.log(err)
     }
}

sum(9,10)

// This will manually create the TypeError instance
throw new TypeError();