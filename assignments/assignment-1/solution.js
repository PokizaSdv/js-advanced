/*       String.prototype       */

// 1. reverse(): This method returns a reversed version of the string.
//           Example: "Hello".reverse() should return "olleH".
//           Example: "world".reverse() should return "dlrow".

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};
console.log("string.prototype - 1");
console.log("Hello".reverse());
console.log("world".reverse());
console.log("---------------------");

// 2. removeVowels(): This method removes all vowels from the string.
// Example: "Hello".removeVowels() should return "Hll".
// Example: "world".removeVowels() should return "wrld".

String.prototype.removeVowels = function () {
    let result = "";
    let vowels = "aouie";
    for (let i = 0; i < this.length; i++) {
        if (!vowels.includes(this[i].toLowerCase())) {
            result += this[i];
        }
    }
    return result;
};
console.log("string.prototype - 2");
console.log("Hello".removeVowels());
console.log("world".removeVowels());
console.log("---------------------");

// 3. countWords(): This method counts the number of words in a string.
// Example: "Hello World".countWords() should return 2.

String.prototype.countWords = function () {
    let words = this.split(" ");

    return words.length;
};

// String.prototype.countWords = function() {
//     return this.split(' ').length;
//   };
console.log("string.prototype - 3");
console.log("Hello World".countWords());

// 4. wrapInTags(tag): This method wraps the string in the given HTML tag.
//  Example: "Hello".wrapInTags("b") should return "<b>Hello</b>".

String.prototype.wrapInTags = function (tag) {
    return `<${tag}>${this}</${tag}>`;
};
console.log("string.prototype - 4");
console.log("Hello".wrapInTags("b"));
console.log("school".wrapInTags("a"));
console.log("-----------------------");

// 5. isPalindrome(): This method checks if the string is a palindrome (same forwards as backwards, ignoring case).
// Example: "racecar".isPalindrome() should return true.
// Example: "Hello".isPalindrome() should return false.

String.prototype.isPalindrome = function () {
    let straightStr = this.toLowerCase();
    let reversedStr = straightStr.split("").reverse().join("");
    return straightStr === reversedStr;
};

// String.prototype.isPalindrome = function() {
//   return this.toLowerCase() === this.split("").reverse().join("").toLowerCase();
// };
console.log("string.prototype - 5");
console.log("racecar".isPalindrome());
console.log("Hello".isPalindrome());
console.log("------------------------------");

/*    Number.prototype       */
// 1. isPrime(): This method checks if the number is a prime number.
// Example: (7).isPrime() should return true.
// Example: (4).isPrime() should return false.

Number.prototype.isPrime = function () {
    if (this < 2) {
        return false;
    }
    for (let i = 2; i < this; i++)
        if (this % i === 0) {
            return false;
        }
    return true;
};

// Number.prototype.isPrime = function() {
//     for(let i = 2; i < this; i++) {
//       if(this % i === 0) return false;
//     }
//     return this > 1;
//   };

console.log("number.prototype - 1");
console.log((7).isPrime());
console.log((4).isPrime());
console.log("---------------------");

// 2. toFactorial(): This method returns the factorial of the number.
// Example: (5).toFactorial() should return 120.
// Example: (3).toFactorial() should return 6.

Number.prototype.toFactorial = function () {
    let factorial = 1;
    for (let i = this; i > 1; i--) {
        factorial *= i;
    }
    return factorial;
};
console.log("number.prototype - 2");
console.log((5).toFactorial());
console.log((3).toFactorial());
console.log("-----------------------------");

// 3.findFactors(): This method returns an array of all factors of the number.
// Example: (10).findFactors() should return [1, 2, 5, 10].
// Example: (16).findFactors() should return [1, 2, 4, 8, 16].

Number.prototype.findFactors = function () {
    let factors = [];
    for (let i = 1; i <= this; i++) {
        if (this % i === 0) factors.push(i);
    }
    return factors;
};
console.log("number.prototype - 3");
console.log((10).findFactors());
console.log((16).findFactors());
console.log("-----------------------------");

// isPerfectSquare(): This method checks if the number is a perfect square.
// Example: (9).isPerfectSquare() should return true.
// Example: (8).isPerfectSquare() should return false.

Number.prototype.isPerfectSquare = function () {
    for (let i = 1; i <= this; i++) {
        if (this / i === i) return true;
    }
    return false;
};
console.log("number.prototype - 4");
console.log((9).isPerfectSquare());
console.log((8).isPerfectSquare());
console.log("-----------------------------");

// 5.isOdd(): This method checks if a number is odd.
// Example: (5).isOdd() should return true.
// Example: (6).isOdd() should return false.

Number.prototype.isOdd = function () {
    return this % 2 !== 0;
};
console.log("number.prototype - 5");
console.log((5).isOdd());
console.log((6).isOdd());
console.log("-----------------------------");

/*     Array.prototype     */

// 1.findMax(): This method returns the maximum value in an array of numbers.
// Example: [1, 2, 3].findMax() should return 3.
// Example: [-1, -2, -3].findMax() should return -1.

Array.prototype.findMax = function () {
    let maxNum = this[0];
    for (let i = 0; i < this.length; i++) {
        if (maxNum < this[i]) maxNum = this[i];
    }
    return maxNum;
};
console.log("array.prototype - 1");
console.log([1, 2, 3].findMax());
console.log([-1, -2, -3].findMax());
console.log("----------------------------");

// 2.findMin(): This method returns the minimum value in an array of numbers.
// Example: [1, 2, 3].findMin() should return 1.
// Example: [-1, -2, -3].findMin() should return -3.
Array.prototype.findMin = function () {
    let minNum = this[0];
    for (let i = 0; i < this.length; i++) {
        if (minNum > this[i]) minNum = this[i];
    }
    return minNum;
};
console.log("array.prototype - 2");
console.log([1, 2, 3].findMin());
console.log([-1, -2, -3].findMin());
console.log("-------------------------");

// 3. average(): This method returns the average of all the numbers in the array.
// Example: [1, 2, 3, 4].average() should return 2.5.
// Example: [5, 10, 15, 20].average() should return 12.5.

Array.prototype.average = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum / this.length;
};
console.log("array.prototype - 3");
console.log([1, 2, 3, 4].average());
console.log([5, 10, 15, 20].average());
console.log("-------------------------");

// 4.removeDuplicates(): This method returns a new array with duplicates removed.
// Example: [1, 2, 2, 3].removeDuplicates() should return [1, 2, 3].
// Example: ["a", "b", "b", "c"].removeDuplicates() should return ["a", "b", "c"].

Array.prototype.removeDuplicates = function () {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (!result.includes(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
};

// Array.prototype.removeDuplicates = function() {
//     const unique = [];
//     const seen = {};
//     for(let i = 0; i < this.length; i++) {
//       if(!seen[this[i]]) {
//         unique.push(this[i]);
//         seen[this[i]] = true;
//       }
//     }
//     return unique;
//   };

console.log("array.prototype - 4");
console.log(["a", "b", "b", "c"].removeDuplicates());
console.log([1, 2, 2, 3].removeDuplicates());
console.log("-------------------------");

// 5.shuffle(): This method returns a new array with the order of the elements randomized.
// Example: [1, 2, 3].shuffle() could return [3, 1, 2].
// Example: ["a", "b", "c"].shuffle() could return ["c", "a", "b"].

Array.prototype.shuffle = function () {
    for (let i = 0; i < this.length; i++) {
        const j = Math.floor(Math.random() * this.length);
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};
