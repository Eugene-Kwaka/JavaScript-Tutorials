// A map can feel very similar to an object in JS.

// However, it
// 1. Doesn't have inheritance. 
// 2. No prototypes! 
// This makes it useful as a data storage.

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
// To get a specific value from the Map
console.log(bestBoxers.get(2))