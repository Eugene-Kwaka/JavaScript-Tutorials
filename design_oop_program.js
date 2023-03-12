/* 

Specifically, I'm preparing to build the following inheritance hierarchy:

                  Animal
                   /    \
                Cat      Bird
             /     \          \          
        HouseCat   Tiger      Parrot

    I will use default parameters when writing the classes 
*/

class Animal {
    constructor(color = "white", energy = 100){
        this.color = color;
        this.energy = energy;
    }

    isActive(){
        // when the method is ran, the value of energy will lower until it hits zero, in this case it lowers by 20 when ran
        if (this.energy > 0){
            this.energy -=20 // -> Energy levels is reduced by 20
            console.log("The energy is decreasing, currently at: ", this.energy)
        // If energy reaches 0, the sleep() method is invoked
        } else if (this.energy == 0){
            this.sleep()
        }
    }
    // After energy reaches 0, aleep() function is invoked where we increase energy by 20
    sleep(){
        this.energy += 20
        console.log("Energy is increasing, currently at: ", this.energy)
    }
    // Displays the color of the Animal instance
    getcolor(){
        console.log(this.color)
    }
}
var goat = new Animal()
// goat.isActive()
// goat.sleep()


class Cat extends Animal {
    // Include some of the Animal's properties ie color, energy
    constructor(sound = "meow", canJumpHigh = true, canClimbTrees = true, color = "black", energy = 100){
        // Super inherits the Animal's properties
        super(color, energy)
        this.sound = sound
        this.canJumpHigh = canJumpHigh
        this.canClimbTrees = canClimbTrees
    }
    // Displays the sound the cat makes
    makeSound(){
        console.log(this.sound)
    }
}
var cat1 = new Cat()
// cat1.makeSound()

class HouseCat extends Cat {
    constructor(houseCatSound = "purr", sound, canJumpHigh, canClimbTrees, color, energy){
        // The HouseCat inherits the following properties from the Cat
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.houseCatSound = houseCatSound
    }
    // The HouseCat inherits the makeSound() method but can override it if an option argument set is True.
    makeSound(option){
        // when makeSound() is invoked and the option argument is True, then it will run the inherited super.makeSound() from Cat class.
        if (option){ // -> If option is True 
            super.makeSound() // this returns the "meow" as it is inherited from Cat
        // Otherwise it will make its own houseCatSound 
        } else {
            console.log("The houseCat sounds like:", this.houseCatSound)
        }
    }
}
var houseCat1 = new HouseCat()
houseCat1.makeSound(true) // -> the option argument is true hence the houseCat1 will "meow" like the parent class (Cat).
houseCat1.makeSound() // -> the option argument is not true hence the houseCat1 will "purr"

class Tiger extends Cat{
    constructor(tigerSound = "roar", sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.tigerSound = tigerSound
    }
    // makesound() takes an option argument whereby if its True, I will invoke the Cat method or else I will use the Tiger's tigerSound
    makeSound(option){
        if (option){
            super.makeSound();
        } else {
            console.log("The sound a tiger makes is:", this.tigerSound)
        }
    }
}
var tiger1 = new Tiger()
tiger1.makeSound(true); // -> We have set the option argument to true hence the tiger will make the "meow" sound.
tiger1.makeSound() // -> the option argument is not true hence the tiger1 will "roar"




class Bird extends Animal {
    constructor(sound = "chirp" , canFly = true, color, energy){
        super(color, energy)
        this.sound = sound
        this.canFly = canFly
    }

    makeSound(){
        console.log(this.sound)
    }
}
var bird1 = new Bird()
// bird1.makeSound()

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy){
        super(sound, canFly, color, energy) //-> inherits sound, color and energy from its parent class Bird(Parrot)
        this.canTalk = canTalk
    }
    // This makeSound method takes two conditionals.
    makeSound(option){
        // to check if the option argument is true, then the parrot will make the "chirp" sound as it inherits it from the Bird class
        if (option){
            super.makeSound()
        }
        // If the canTalk property is true then, it will display that it is a talking parrot
        if (this.canTalk) {
            console.log("I am talking parrot")
        } else {
            console.log("The parrot cannot talk")
        }
    }
}
var parrot1 = new Parrot(true); 
parrot1.makeSound(true) // -> The canTalk property is true hence the parrot will say "I'm a talking parrot"
