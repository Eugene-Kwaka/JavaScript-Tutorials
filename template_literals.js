let greet = "Hello";
let place = "World"

console.log(`${greet} ${place}`)
// Multiple lines in template literals
console.log(`${greet}
${place}`)

// EXERCISE
// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy(milkProducts) {
    for (let product of milkProducts) {
        console.log(product)
    }
}
logDairy(dairy)

// Task 2
const animal = {

canJump: true

};
const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(myBird) {
    for(let prop of Object.keys(myBird)) {
        //console.log(`${prop} : ${myBird[prop]}`)
        console.log(prop + ":" + myBird[prop])

    }
}
birdCan(bird)

// Task 3
function animalCan(myBird) {
    for(let prop in myBird) {
        // console.log(`${prop} : ${myBird[prop]}`)
        console.log(prop + ":" + myBird[prop])
    }
}
animalCan(bird)

