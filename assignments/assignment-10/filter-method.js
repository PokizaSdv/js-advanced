// Filter Problems
// Problem 1:
// Create a function that filters objects with a specific property value

// Input: [{ type: 'fruit', name: 'apple' }, { type: 'vegetable', name: 'carrot' }], type = 'fruit'

// Output: [{ type: 'fruit', name: 'apple' }]
// function filterProperty(arr, key, value) {
//     return arr.filter(function (obj) {
//         return obj[key] === value;
//     });
// }

const filterProperty = (arr, key, value) =>
    arr.filter((obj) => obj[key] === value);
const input1 = [
    { type: "fruit", name: "mango" },
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" }
];
const output1 = filterProperty(input1, "type", "fruit");
console.log("PROBLEM-1");
console.log(output1);
console.log("----------------------");

// Problem 2
// Create a function that filters all sub-arrays with a specific length

// Input: [[1, 2], [3, 4, 5]], length = 2

// Output: [[1, 2]]

// function subArray(arr, num) {
//     return arr.filter(function (array) {
//         return array.length === num;
//     });
// }

const subArray = (arr, num) => arr.filter((array) => array.length === num);
const input2 = [
    [1, 2],
    [3, 4],
    [5, 6, 7]
];
const output2 = subArray(input2, 2);
console.log("PROBLEM-2");
console.log(output2);
console.log("-------------------");

// Problem 3
// Create a function that filters products with a price within a specific range

// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }], min = 15, max = 20

// Output: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }]

// function filterProducts(products, min, max) {
//     return products.filter(function (product) {
//         return product.price >= min && product.price <= max;
//     });
// }
const filterProducts = (products, min, max) =>
    products.filter((product) => product.price >= min && product.price <= max);
const input3 = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 },
    { name: "pencil", price: 30 }
];
const output3 = filterProducts(input3, 15, 20);
console.log("PROBLEM-3");
console.log(output3);
console.log("-------------------");

// Problem 4
// Create a function that filters words that start with a specific letter from an array of objects

// Input: [{ word: 'cat' }, { word: 'dog' }], letter = 'c'
// Output: [{ word: 'cat' }]

// function filterFromFirstLetter(words, letter) {
//     return words.filter(function (word) {
//         return word.word[0] === letter;
//     });
// }
const filterFromFirstLetter = (words, letter) =>
    words.filter((obj) => obj.word[0] === letter);
const input4 = [{ word: "cat" }, { word: "dog" }];
const output4 = filterFromFirstLetter(input4, "c");
console.log("PROBLEM-4");
console.log(output4);
console.log("----------------");

// Problem 5
// Create a function that filters dates before a specific date from an array of objects

// Input: [{ date: '2023-01-01' }, { date: '2023-01-02' }], date = '2023-01-02'

// Output: [{ date: '2023-01-01' }]
// function filterDates(dates, givenDate) {
//     return dates.filter(function (date) {
//         return date.date < givenDate;
//     });
// }

// const input5 = [{ date: "2023-01-01" }, { date: "2023-01-02" }];
// const output5 = filterDates(input5, "2023-01 -02");
// console.log(output5);

const filterDates = (dates, givenDate) =>
    dates.filter((obj) => obj.date < givenDate);
const input5 = [{ date: "2023-01-01" }, { date: "2023-01-02" }];
const output5 = filterDates(input5, "2023-01-03");
console.log("PROBLEM-5");
console.log(output5);
console.log("------------------");
