// This is a proactive way of programming where we assume that all arguments a function will receive are either wrong types, wrong values or both
// Let's look at an example to refactor code and apply defensive programming


// CODE AFTER
function letterFinder(word, match){
    // The word argument should be a string and the length should be greater than or equal to 2
    var condition1 = typeof(word) === 'string' && word.length >= 2;
    // The match argument should be a string and the length should be equal to 1
    var condition2 = typeof(match) === 'string' && match.length == 1;
    if (condition1 == true && condition2 == true){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function")
    }
}

letterFinder("paka", "k")