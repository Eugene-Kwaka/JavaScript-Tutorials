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