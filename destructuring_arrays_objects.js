// I can destructure PI from Math object because is a property of the Math object.
let {PI} = Math;
console.log(PI) // -> 3.142

console.log(PI === Math.PI); // -> true

// I can erase the destructure by giving the property variable a new value
PI = 1
console.log(PI === Math.PI) // -> false
