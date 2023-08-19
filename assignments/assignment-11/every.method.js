// Problem 1
// Create a function that checks if all objects have a specific property

// Input: [{ name: 'Alice' }, { name: 'Bob' }], property = 'name'

// Output: true
function allObjectsHaveProperty(objects, property) {
    return objects.every(function (obj) {
        return property in obj;
    });
}
const input1 = [{ name: "Alice" }, { name: "Bob" }];
const output1 = allObjectsHaveProperty(input1, "name");
console.log(output1);

// Problem 2
// Create a function that checks if all elements in a matrix are positive

// Input: [[1, 2], [3, 4]]

// Output: true
function areAllPositive(arr) {
    return arr.every(function (array) {
        return array.every(function (element) {
            return element > 0;
        });
    });
    function areAllPositive(arr) {
        return arr.every(function (array) {
            return array.every(function (element) {
                return element > 0;
            });
        });
    }
}
const input2 = [
    [1, 2],
    [3, 4]
];

const output2 = areAllPositive(input2);
console.log(output2); // Output: true

// Problem 3
// Create a function that checks if all sub-arrays have a specific length

// Input: [[1, 2], [3, 4]], length = 2

// Output: true

function subArrays(arr, length) {
    return arr.every(function (array) {
        return array.length === length;
    });
}
const input3 = [
    [1, 2],
    [3, 4, 6]
];
const output3 = subArrays(input3, 2);
console.log(output3);

// Problem 4
// Create a function that checks if all dates in an array of objects are before a specific date

// Input: [{ date: '2023-01-01' }, { date: '2023-01-02' }], date = '2023-01-03'

// Output: true

function areAllDatesBefore(dates, givenDate) {
    return dates.every(function (date) {
        return date.date < givenDate;
    });
}
const input4 = [{ date: "2023-01-01" }, { date: "2023-01-02" }];
const output4 = areAllDatesBefore(input4, "2023-01-03");
console.log(output4);

// Problem 5
// Create a function that checks if all products have a price greater than a specific value

// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }], price = 10

// Output: true

function allArePricesGreater(products, givenPrice) {
    return products.every(function (product) {
        return product.price > givenPrice;
    });
}
const input5 = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 }
];
const output5 = allArePricesGreater(input5, 10);
console.log(output5);
