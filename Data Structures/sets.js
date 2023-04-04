// To build a new set, you can use the Set constructor:

new Set();

// A set can be used to quickly filter an array for unique members.
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);