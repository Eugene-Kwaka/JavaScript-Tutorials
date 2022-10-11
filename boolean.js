// LOGICAL NOT (!) reverses the boolean value
console.log(!true); // false
console.log(!false); // true
// double not operator equalizes each other 
console.log(!!false); // false


// LOGICAL AND (&&)
// takes two boolean values and returns TRUE if BOTH VALUES are TRUE. Otherwise it returns FAlSE
console.log(false && true); // false
console.log(true && true); // true
console.log(false && false); // false


// LOGICAL OR (||)
// takes two boolean values and return FALSE if BOTH VALUES are FALSE. Otherwise it returns TRUE.
console.log(false || false); //false
console.log(false || true); // true
console.log(true || true); // true

// LOGICAL ORDER OF OPERATIONS
// NOT -> AND -> OR
console.log(!true && false || false); // false
console.log(false || true && false); // false
console.log(false && (false || true)); // false