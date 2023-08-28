// Problem 1
// Create a function called organizeBooks that takes an array of book objects as an argument. Each book object contains title, author, and genre. The function should return an object where each key is a genre and each value is an array of titles belonging to that genre.

// Example Input:

// const books = [
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic' },
//   { title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' }
// ];
// Example Output:

// {
//   'Classic': ['To Kill a Mockingbird', 'The Great Gatsby'],
//   'Science Fiction': ['1984']
// }
// ___________________________________________________
// const organizeBooks = (books) => {
//     const organized = {};

//     for (const book of books) {
//       const { title, genre } = book;

//       if (!organized[genre]) {
//         organized[genre] = [];
//       }

//       organized[genre].push(title);
//     }

//     return organized;
//   };
//   const books = [
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic' },
//     { title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' }
//   ];

//   const organized = organizeBooks(books);
//   console.log(organized);

const organizeBooks = (books) => {
    return books.reduce((organized, book) => {
        const { title, genre } = book;
        if (!organized[genre]) {
            organized[genre] = [];
        }
        organized[genre].push(title);
        return organized;
    }, {});
};
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { title: "1984", author: "George Orwell", genre: "Science Fiction" },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic"
    }
];

const organized = organizeBooks(books);
console.log(organized);

// Problem 2
// Create a function called vowelFrequency that takes an array of strings and returns an object that represents the frequency of each vowel (a, e, i, o, u) in all the words combined

// Example Input:

// const words = ['apple', 'orange', 'grape'];
// Example Output:

// { 'a': 2, 'e': 2, 'i': 0, 'o': 1, 'u': 0 }

// const vowelFrequency = (arr) => {
//     const vowels = "aeuio".split("");
//     const vowelCount = {};
//     for (const str of arr) {
//         for (const char of str) {
//             if (vowels.includes(char)) {
//                 if (!vowelCount[char]) {
//                     vowelCount[char] = 1;
//                 } else {
//                     vowelCount[char]++;
//                 }
//             }
//         }
//     }
//     for(const vowel of vowels) {
//         if(!vowelCount[vowel]) {
//             vowelCount[vowel] = 0;
//         }
//     }
//     return vowelCount;
// };

const vowelFrequency = (arr) => {
    const vowels = "aeuio".split("");
    return arr.reduce((vowelCount, str) => {
        for (const char of str) {
            if (vowels.includes(char)) {
                if (!vowelCount[char]) {
                    vowelCount[char] = 1;
                } else {
                    vowelCount[char]++;
                }
            }
        }
        return vowelCount;
    }, {});
};
const arr = ["apple", "orange", "grape"];
const result = vowelFrequency(arr);
console.log(result);

// Problem 3
// Create a function called numericalAnalysis that takes an array of numbers as an argument. This function should return an object containing the sum of all numbers, the product of all numbers, and the count of negative numbers in the array.

// Example Input:

// const numbers = [1, -1, 2, -2, 3, -3];
// Example Output: { sum: 9, product: 6, negativeCount: 3 }

// const numericalAnalysis = (array) => {
//     const result = {
//         sum: 0,
//         product: 1,
//         negativeCount: 0
//     }
//     for (const num of array) {
//         result.sum += num;
//         result.product *= num;
//         if(number < 0) {
//             result.negativeCount++;
//         }
//     }
//     return result;
// }

const numericalAnalysis = (numbers) => {
    return numbers.reduce(
        (result, num) => {
            result.sum += num;
            result.product *= num;
            if (num < 0) {
                result.negativeCount++;
            }
            return result;
        },
        { sum: 0, product: 1, negativeCount: 0 }
    );
};
const numbers = [1, -1, 2, -2, 3, -3];
const analysisResult = numericalAnalysis(numbers);
console.log(analysisResult);
