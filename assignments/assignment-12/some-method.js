// Problem 1
// Create a function that checks if any object in an array contains a null value

// Input: [{ value: 3 }, { value: null }]

// Output: true
function anyNull(arr) {
    return arr.some(function (obj) {
        return obj.value === null;
    });
}
const input1 = [{ value: 3 }, { value: null }];
const output1 = anyNull(input1);
console.log(output1);

// Problem 2
// Create a function that checks if any element in a matrix is a specific value

// Input: [[1, 2], [3, 4]], value = 4

// Output: true

function anyMatrix(arr, num) {
    return arr.some(function (array) {
        return array.includes(num);
    });
}
const input2 = [
    [1, 2],
    [3, 4]
];
const output2 = anyMatrix(input2, 4);
console.log(output2);

// Problem 3
// Create a function that checks if any object in an array has a property with a specific length

// Input: [{ word: 'cat' }, { word: 'elephant' }], length = 8

// Output: true

function specificLength(words, length) {
    return words.some(function (arr) {
        return arr.word.length === length;
    });
}
const input3 = [{ word: "cat" }, { word: "elephant" }];
const output3 = specificLength(input3, 8);
console.log(output3);

// Problem 4
// Create a function that checks if any sub-array contains a specific number

// Input: [[1, 2], [3, 4, 5]], number = 5

// Output: true

function specificNumber(arr, num) {
    return arr.some(function (subArray) {
        return subArray.includes(num);
    });
}
const input4 = [
    [1, 2],
    [3, 4]
];
const output4 = specificNumber(input4, 5);
console.log(output4);

// Problem 5
// Create a function that checks if any date in an array of objects is after a specific date

// Input: [{ date: '2023-01-01' }, { date: '2023-01-04' }], date = '2023-01-02'

// Output: true

function afterDate(dates, givenDate) {
    return dates.some(function (subDate) {
        return subDate.date > givenDate;
    });
}
const input5 = [{ date: "2023-01-01" }, { date: "2023-01-04" }];
const output5 = afterDate(input5, "2023-01-02");
console.log(output5);
