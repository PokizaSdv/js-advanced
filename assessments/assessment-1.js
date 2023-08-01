// Write a function magicCipher(sentence, cipher) that takes in a string sentence and an object cipher. Return a string where every character is replaced with its corresponding value in the cipher. If the character doesn't exist in the cipher, use the character itself.

// Example

// magicCipher("add me on facebook", { a: "c", d: "q" }) // "cqq me on fccebook"
// magicCipher("where are you?", { v: "l", "?": "!" }) // "where are you!"
// magicCipher("twmce", { m: "n", t: "d", w: "a" }) //  "dance"

function magicCipher(sentence, cipher) {
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        if (cipher[char]) {
            result += cipher[char];
        } else {
            result += char;
        }
    }
    return result;
}
console.log("PROBLEM-1");
console.log(magicCipher("add me on facebook", { a: "c", d: "q" }));
console.log(magicCipher("where are you?", { v: "l", "?": "!" }));
console.log(magicCipher("twmce", { m: "n", t: "d", w: "a" }));
console.log("--------------------------------------");

// Problem 2: Hipsterfy
// Write a function hipsterfy(sentence) that takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.
// Example
// hipsterfy("proper") => "propr"
// hipsterfy("proper tonic panther") => "propr tonc panthr"
// hipsterfy("towel flicker banana") => "towl flickr banan"
// hipsterfy("runner anaconda") => "runnr anacond"
// hipsterfy("turtle cheeseburger fries") => "turtl cheeseburgr fris"

function removeLastVowel(word) {
    const vowels = "aeuio";
    for (let j = word.length - 1; j >= 0; j--) {
        if (vowels.includes(word[j])) {
            return word.slice(0, j) + word.slice(j + 1);
        }
    }
    return word;
}

function hipsterfy(sentence) {
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = removeLastVowel(words[i]);
    }
    return words.join(" ");
}

console.log("PROBLEM-2");
console.log(hipsterfy("proper"));
console.log(hipsterfy("proper tonic panther"));
console.log(hipsterfy("towel flicker banana"));
console.log(hipsterfy("runner anaconda"));
console.log(hipsterfy("turtle cheeseburger fries"));

// Problem 3: Count Adjacent Sums
// Write the function countAdjacentSums(arr, n) which takes an array and a number n. It should count the number of times that two adjacent numbers in an array add up to n.
// Example
// countAdjacentSums([1, 5, 1], 6) => 2
// countAdjacentSums([7, 2, 4, 6], 7) => 0
// countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) => 3

function countAdjacentSums(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === n) {
            count++;
        }
    }
    return count;
}
console.log("PROBLEM-3");
console.log(countAdjacentSums([1, 5, 1], 6));
console.log(countAdjacentSums([7, 2, 4, 6], 7));
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13));

// Problem 4: Longest Letter Streak
// Write a function longestLetterStreak(str, searchLetters) that takes in two arguments:
// str: A string of uppercase characters.
// searchLetters: An array of uppercase single-character strings (e.g., ["A", "F", "K"])
// The function should return the length of the longest streak of letters (consecutive letters) in the str that are in the searchLetters.
// Example
// longestLetterStreak("ACCA", ["C"]) => 2
// longestLetterStreak("YACCADCA", ["C", "A"]) => 4
// longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]) => 3
// longestLetterStreak("YYYYY", ["Z", "K", "Y"]) => 5

function longestLetterStreak(str, searchLetters) {
    let streak = 0;
    let longestStrLength = 0;
    for (let i = 0; i < str.length; i++) {
        if (searchLetters.includes(str[i])) {
            streak++;
            if (streak > longestStrLength) {
                longestStrLength = streak;
            }
        } else {
            streak = 0;
        }
    }
    return longestStrLength;
}

console.log("PROBLEM-4");
console.log(longestLetterStreak("ACCA", ["C"]));
console.log(longestLetterStreak("YACCADCA", ["C", "A"]));
console.log(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]));
console.log(longestLetterStreak("YYYYY", ["Z", "K", "Y"]));

// Problem 5: In Pig Latin
// Write a function inPigLatin(sentence) that translates a sentence into its pig Latin equivalent. The rules for the translation are as follows:
// For words that begin with consonants, all letters before the initial vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
// "pig" → "igpay"
// "banana" → "ananabay"
// "trash" → "ashtray
// For words that begin with vowels, just add "yay" to the end.
//  "eat" → "eatyay"
//  "omelet" → "omeletyay"
//  "are" → "areyay"
// Words that were originally caplitalized must remained caplitalized
// Assume no punctuation
// 'y' is not a vowel
// Examples
// inPigLatin("Shmanthony is the best teacher") => "Anthonyshmay isyay ethay estbay eachertay"
// inPigLatin("let us Dance") => "etlay usyay Anceday"
// inPigLatin("this is the time of my life") => "isthay isyay ethay imetay ofyay myay ifelay"
function isVowel(char) {
    const vowels = "aeuio";
    return vowels.includes(char);
}

function pigWord(word) {
    if (!isVowel(word[0])) {
        let firstVowelIdx = 0;
        for (let i = 0; i < word.length; i++) {
            if (isVowel(word[i])) {
                firstVowelIdx = i;
                break;
            }
        }
        const beginning = word.slice(0, firstVowelIdx);
        const rest = word.slice(firstVowelIdx);
        return rest + beginning.toLowerCase() + "ay";
    }
    return word + "yay";
}
function inPigLatin(sentence) {
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = pigWord(words[i]);
    }

    return words.join(" ");
}

console.log("PROBLEM - 5");
console.log(inPigLatin("Shmanthony is the best teacher"));
console.log(inPigLatin("let us Dance"));
console.log(inPigLatin("this is the time of my life"));
console.log("----------------------------------------");
