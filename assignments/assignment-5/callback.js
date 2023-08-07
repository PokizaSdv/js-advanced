// Create the Initial Functions: Write four separate functions that take two numbers, num1 and num2, as arguments:
// addTwoNumbers: Adds num1 and num2 and returns a string saying "The result of adding is [result]."
// subtractTwoNumbers: Subtracts num1 from num2 and returns a string saying "The result of subtracting is [result]."
// multiplyTwoNumbers: Multiplies num1 and num2 and returns a string saying "The result of multiplying is [result]."
// divideTwoNumbers: Divides num1 by num2 and returns a string saying "The result of dividing is [result]."

function addTwoNumbers(num1, num2) {
    const result = num1 + num2;
    return `The result of adding is ${result}.`;
}

function subtractTwoNumbers(num1, num2) {
    const result = num1 - num2;
    return `The result of subtracting is ${result}.`;
}

function multiplyTwoNumbers(num1, num2) {
    const result = num1 * num2;
    return `The result of multiplying is ${result}.`;
}

function divideTwoNumbers(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero.";
    }
    const result = num1 / num2;
    return `The result of dividing is ${result}.`;
}
// Refactor Using Callbacks: Your task is to create a more elegant solution by refactoring the functions using callbacks:
// Define four separate functions that perform the arithmetic operations: add, subtract, multiply, and divide.
// Create a generic function, calculate that takes num1, num2, and a callback function as parameters. This generic function will call the specific arithmetic operation passed as a callback.

function calculate(num1, num2, callback) {
    return callback(num1, num2);
}

function add(num1, num2) {
    return `The result of adding is ${num1 + num2}.`;
}

function subtract(num1, num2) {
    return `The result of subtracting is ${num1 - num2}.`;
}

function multiply(num1, num2) {
    return `The result of multiplying is ${num1 * num2}.`;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero.";
    }
    return `The result of dividing is ${num1 / num2}.`;
}

// Test your refactored code by invoking the generic function with different arithmetic functions as callbacks.

console.log(calculate(10, 5, add)); // Output: "The result of adding is 15."
console.log(calculate(10, 5, subtract)); // Output: "The result of subtracting is 5."
console.log(calculate(10, 5, multiply)); // Output: "The result of multiplying is 50."
console.log(calculate(10, 5, divide)); // Output: "The result of dividing is 2."
console.log(calculate(10, 0, divide)); // Output: "Cannot divide by zero."
