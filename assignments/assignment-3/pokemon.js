/*                Phase 1         */
// Create a new file called pokemon.js.
// Create a Pokemon class.
// Give it the instance variables: name, type, level, and hp.
// The constructor should take as arguments:
// a string argument for name
// a string argument for type
// an integer argument for level (optional)

class Pokemon {
    constructor(name, type, level, hp) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.hp = Math.round(level * 2.25);
    }

    levelUp() {
        this.level++;
        this.hp = Math.floor(this.level * 2.25);
        return this;
    }

    faint() {
        return this.hp <= 0;
    }

    revive() {
        this.hp = Math.floor(this.level * 2.25);
        return this;
    }

    call() {
        let vowels = "aeiou";
        let nickName = "";

        // for (let i = 0; i < this.length; i++) {
        //     if()
        // }
        return `${this.name} ${this.name}`;
    }
}

// function Pokemon(name, type, level, hp) {
//     this.name = name;
//     this.type = type;
//     this.level = level;
//     this.hp = Math.round(level * 2.25);
// }

let pikachu = new Pokemon("PIKACHU", "Electric", 10);
let bulbasaur = new Pokemon("bulbasaur", "leaf", 11);
let onyx = new Pokemon("onyx", "rock", 5);

// > pikachu;
console.log(pikachu);
// > bulbasaur;
console.log(bulbasaur);
// > onyx;
console.log(onyx);

/*          Phase 2            */
// Let's add some methods to our Pokemon class! Write methods:
// Pokemon#levelUp: should increase a pokemon's level by 1 and return the Pokemon. Don't forget to recalcuate its hp.
// Pokemon#faint: should return true if a pokemon's hp is less than or equal to 0, false otherwise.
// Pokemon#revive: should reset a pokemon's hp and return the Pokemon.
// Pokemon#call: should return a pokemon's "nickname", repeated twice.
// A pokemon's nickname comes from taking its name up to the second vowel. If there are no second vowels, its nickname is its full name. Hint: a variable VOWELS might be helpful with this.

Pokemon.prototype.levelUp = function () {
    this.level += 1;
};

Pokemon.prototype.faint = function () {
    if (this.hp <= 0) return true;
};

Pokemon.prototype.revive = function () {};

Pokemon.prototype.call = function () {
    let vowels = "aeiou";
    let nickName = "";

    for (let i = 0; i < this.length; i++) {
        if (vowels.includes(this.name[i].toLowerCase())) {
        }
    }
    return `${this.name} ${this.name}`;
};
