// Problem 1
// Create a function that doubles the age property of each object in an array
// Input: [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]
// Output: [{ name: 'Alice', age: 60 }, { name: 'Bob', age: 50 }]

function doubleAge(arr) {
    return arr.map(function (obj) {
        return { name: obj.name, age: obj.age * 2 };
    });
}
const input1 = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];
const output1 = doubleAge(input1);
console.log(output1);

// Problem 2
// Create a function that capitalizes the first letter of each string in an array
// Input: ['apple', 'banana']
// Output: ['Apple', 'Banana']

function capitalizes(arr) {
    return arr.map(function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    });
}
const input2 = ["apple", "banana"];
const output2 = capitalizes(input2);
console.log(output2);

// Problem 3
// Create a function that returns the square of the first element of each sub-array

// Input: [[2, 3], [4, 5], [6, 7]]

// Output: [4, 16, 36]

function squareOfFirstElement(arr) {
    return arr.map(function (array) {
        return array[0] * array[0];
    });
}
const input3 = [
    [2, 3],
    [4, 5],
    [6, 7]
];
const output3 = squareOfFirstElement(input3);
console.log(output3);

// Problem 4
// Create a function that concatenates a specific string to each property in an object array
// Input: [{ word: 'cat' }, { word: 'dog' }], string = 's'
// Output: [{ word: 'cats' }, { word: 'dogs' }]

function concatenates(arr, str) {
    return arr.map(function (obj) {
        return { word: obj.word + str };
    });
}

const input4 = [{ word: "cat" }, { word: "dog" }];
const output4 = concatenates(input4, "s");
console.log(output4);

// Problem 5
// Create a function that calculates the price with tax for each product object

// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 1 }], tax = 0.1

// Output: [{ name: 'Book', price: 22 }, { name: 'Pen', price: 1.1 }]

function calculates(arr, tax) {
    return arr.map(function (obj) {
        return { name: obj.name, price: obj.price * (1 + tax) };
    });
}
const input5 = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 1 }
];
const output5 = calculates(input5, 0.1);
console.log(output5);
