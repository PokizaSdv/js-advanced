/*       Phase 1: Basic Pet Properties          */

// Start by creating a new JavaScript file named pet.js.
// Define a Pet constructor function.
// The Pet class should have the following properties: name, hunger, and happiness.
// The constructor should take the following parameters:a string parameter for name
// When a new pet is created, it should start with hunger at 0 and happiness at 10.

function Pet(name) {
    this.name = name;
    this.hunger = 0;
    this.happiness = 10;
}

/*                    Phase 2: Pet Behaviors                  */

// Let's add some methods to our Pet class. Your pet should be able to:

// eat(): When a pet eats, its hunger decreases by 1 (but not below 0) and happiness increases by 1.
// play(): When a pet plays, its happiness increases by 2, but hunger also increases by 1.
// sleep(): When a pet sleeps, its hunger increases by 1, but happiness does not change.
// Remember to prevent hunger and happiness from going outside their appropriate ranges (0-10 for both)!
Pet.prototype.eat = function () {
    this.happiness += 1;
    if (this.hunger - 1 >= 0) {
        this.hunger -= 1;
    }
};

Pet.prototype.play = function () {
    if (this.happiness + 2 <= 10) {
        this.happiness += 2;
    }
    if (this.hunger + 1 <= 10) {
        this.hunger += 1;
    }
};

Pet.prototype.sleep = function () {
    if (this.hunger + 1 <= 10) {
        this.hunger += 1;
    }
};

/*                  Phase 3: Advanced Pet Behaviors                                   */

// status(): This should return a string summarizing the pet's current status, like "Rover is feeling great!" or "Fido is really hungry!"
// getOlder(): Every time this method is called, the pet's happiness decreases by 1 and hunger increases by 1. This simulates the effect of aging.
// feed(food): Instead of the eat method, this new method takes a food object as a parameter. Different types of food can increase or decrease the pet's hunger and happiness in different ways.

Pet.prototype.status = function () {
    if (this.happiness >= 8) {
        return `${this.name} is feeling great!`;
    } else if (this.happiness >= 5) {
        return `${this.name} is feeling okay.`;
    } else {
        return `${this.name} is not doing well.`;
    }
};

Pet.prototype.getOlder = function () {
    if (this.happiness - 1 >= 0) {
        this.happiness -= 1;
    }
    if (this.hunger + 1 <= 10) {
        this.hunger += 1;
    }
};

Pet.prototype.introduce = function () {
    return `Hey, my name is ${this.name}, and my happiness level is ${this.happiness}, hunger level is ${this.hunger} `;
};

Pet.prototype.timeOut = function () {
    const initialHappiness = this.happiness;
    this.happiness = 0;
    return `Hey, my happiness was ${initialHappiness}, but now it is ${this.happiness}`;
};

// Pet.prototype.feed = function (food) {};

// const pet1 = new Pet("Bobik", 0, 10);
