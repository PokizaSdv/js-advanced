// Part-1
// In this part of the assignment, you'll work with four different problems, each dealing with array manipulation and numerical conditions. Initially, you'll solve these problems by writing specific functions for each scenario. After completing the solutions, you'll analyze your code to identify repetitive patterns and common logic. Your task will then be to refactor the solutions by using generic functions and callbacks, promoting code reusability and maintainability.

// Odd Numbers Filter
// Write a function named filterOddNumbers that takes an array of numbers and returns a new array that has only odd numbers.
// Example:
// filterOddNumbers([1, 2, 3, 4, 5]); // Output: [1, 3, 5]
function filterOddNumbers(nums) {
    const odds = [];
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            odds.push(nums[i]);
        }
    }
    return odds;
}
console.log("Odd Numbers Original");
console.log(filterOddNumbers([1, 2, 3, 4, 5]));

// Refactoring

function isOddNumber(num) {
    return num % 2 !== 0;
}
function oddNumbers(nums, cb) {
    const odds = [];
    for (i = 0; i < nums.length; i++) {
        if (cb(nums[i])) {
            odds.push(nums[i]);
        }
    }
    return odds;
}
console.log("Odd Numbers Refactor");
console.log(oddNumbers([-1, 0, 2, 3, 4, 5], isOddNumber));

// Numbers Divisible by Three
// Write a function named filterDivisibleByThree that takes an array of numbers and returns a new array that contains numbers that are divisible by 3.
// Example:
// filterDivisibleByThree([3, 6, 7, 9, 12]); // Output: [3, 6, 9, 12]

function filterDivisibleByThree(nums) {
    const divisibleByThree = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3 === 0) {
            divisibleByThree.push(nums[i]);
        }
    }
    return divisibleByThree;
}
console.log("Divisible by 3 Original");
console.log(filterDivisibleByThree([3, 6, 7, 9, 12]));

// Refactoring
function filter(nums, cb) {
    const divisibleByThree = [];
    for (let i = 0; i < nums.length; i++) {
        if (cb(nums[i])) {
            divisibleByThree.push(nums[i]);
        }
    }
    return divisibleByThree;
}

function isDivisibleByThree(num) {
    return num % 3 === 0;
}
console.log("Divisible by 3 Refactor");
console.log(filter([-3, 6, 8, 9, 12], isDivisibleByThree));
// Prime Numbers Filter
// Write a function named filterPrimeNumbers that takes an array of numbers and returns a new array that contains only prime numbers.

// Example:

// filterPrimeNumbers([2, 3, 4, 5, 6]); // Output: [2, 3, 5]

function filterPrimeNumbers(arr) {
    let primes = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 1) {
            continue;
        }
        let isPrime = true;
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(arr[i]);
        }
    }
    return primes;
}
console.log("Prime Numbers Original");
console.log(filterPrimeNumbers([2, 3, 4, 5, 6]));

// Refactoring:
function isPrimeNumber(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function primes(nums, cb) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (cb(nums[i])) {
            result.push(nums[i]);
        }
    }
    return result;
}
console.log("Prime Numbers Refactor");
console.log(primes([2, 3, 4, 5, 6], isPrimeNumber));

// Perfect Squares Filter
// Write a function named filterPerfectSquares that takes an array of numbers and returns a new array that has perfect squares.
// Example:
// filterPerfectSquares([1, 4, 5, 9, 16]); // Output: [1, 4, 9, 16]
// After completing these problems, take a moment to reflect on your solutions. Are there common patterns or logic that could be refactored? Could you write a generic function that takes a callback to handle specific conditions? Try to refactor your code to use callbacks and observe how it impacts the readability and reusability of your code.

function filterPerfectSquares(arr) {
    let perfectSquares = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j <= arr[i]; j++) {
            if (arr[i] / j === j) {
                perfectSquares.push(arr[i]);
            }
        }
    }
    return perfectSquares;
}
console.log("Perfect Squares Original");
console.log(filterPerfectSquares([1, 4, 5, 9, 16]));

// Refactoring:
function isPerfectSquare(num) {
    for (let i = 0; i <= num; i++) {
        if (num / i === i) {
            return true;
        }
    }
    return false;
}

function filter(nums, cb) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (cb(nums[i])) {
            result.push(nums[i]);
        }
    }
    return result;
}
console.log("Perfect Squares Refactor");
console.log(filter([1, 4, 5, 9, 16], isPerfectSquare));

// Part-2
// In this assignment, you will be working on four different problems. Each problem will require you to write a function that processes an array of strings according to specific criteria. Initially, you should solve the problems using your current understanding of JavaScript. After that, analyze your solutions and look for patterns that can be refactored using callbacks and generic functions. Let's dive into the problems!

// Palindrome Strings
// Write a function named filterPalindromes that takes an array of strings and returns a new array containing only those strings that are palindromes.

// filterPalindromes(["racecar", "madam", "apple"]); // Output: ["racecar", "madam"]

function filterPalindromes(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        let reversedStr = str.split("").reverse().join("");
        if (str === reversedStr) {
            result.push(str);
        }
    }
    return result;
}
console.log("Filter Palindromes Original");
console.log(filterPalindromes(["racecar", "madam", "apple"]));

// Refactoring

function arrayPalindromes(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log("Filter Palindromes Refactor");
console.log(arrayPalindromes(["racecar", "madam", "apple"], isPalindrome));

// Lowercase Strings Only
// Write a function named filterLowercase that takes an array of mixed lowercase and uppercase lettered words. Return a new array that contains only strings that are entirely lowercase.
// Example:
// filterLowercase(["apple", "Banana", "cherry"]); // Output: ["apple", "cherry"]
function filterLowercase(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        if (str === str.toLowerCase()) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log("Filter LowerCase Original");
console.log(filterLowercase(["apple", "Banana", "cherry"]));

function lowerCases(arr, cb) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
function isLowerCase(str) {
    return str === str.toLowerCase();
}
console.log("Filter LowerCase Refactor");
console.log(lowerCases(["apple", "Banana", "cherry"], isLowerCase));

// Consonant Lettered Words
// Write a function named filterConsonantWords that takes an array of strings and returns a new array of strings that have only consonant letters.

// Example:

// filterConsonantWords(["rhythm", "sky", "fly", "apple"]); // Output: ["rhythm", "sky", "fly"]

function filterConsonantWords(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        let vowels = "aeuio";
        isConsonantWord = true;
        for (let j = 0; j < str.length; j++) {
            if (vowels.includes(str[j])) {
                isConsonantWord = false;
                break;
            }
        }
        if (isConsonantWord) {
            result.push(str);
        }
    }
    return result;
}
console.log("Filter Consonants Original");
console.log(filterConsonantWords(["rhythm", "sky", "fly", "apple"]));

// Refactoring:

function consonantWords(arr, cb) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
function isConsonant(str) {
    let vowels = "aeuio";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return false;
        }
    }

    return true;
}
console.log("Filter Consonants Refactor");
console.log(consonantWords(["rhythm", "sky", "fly", "apple"], isConsonant));

// Words with Only One Vowel
// Write a function named filterOneVowelWords that takes an array of strings and returns a new array that contains only words with exactly one vowel.

// Example:

// filterOneVowelWords(["cat", "dog", "apple"]); // Output: ["cat", "dog"]

function filterOneVowelWords(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let vowels = "auioe";
        let vowelCount = 0;
        for (let j = 0; j < word.length; j++) {
            if (vowels.includes(word[j])) {
                vowelCount++;
            }
        }
        if (vowelCount === 1) {
            result.push(word);
        }
    }
    return result;
}
console.log("Filter One Vowel Original");
console.log(filterOneVowelWords(["cat", "dog", "apple"]));

// Refactoring:

function oneVowelWords(arr, cb) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
function isOneVowelWord(word) {
    let vowels = "aeuio";
    let countVowels = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            countVowels++;
        }
    }
    if (countVowels === 1) {
        return true;
    }
    return false;
}
console.log("Filter One Vowel Word Refactor");
console.log(oneVowelWords(["cat", "dog", "apple"], isOneVowelWord));
