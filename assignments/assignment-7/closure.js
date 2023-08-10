/*      Easy Problems     */
// 1. Counter Function
// Task: Write a function createCounter() that returns a function. The returned function should increment a count and return it every time it's called.

// const counter = createCounter();
// counter(); // 1
// counter(); // 2
// Explanation: This example demonstrates closures by utilizing a variable within the parent function that the child function has access to. Every time you call the returned function, it continues to have access to the count variable.

function createCounter() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    };
}
const counter = createCounter();
console.log(counter());
console.log(counter());

// 2. Temperature Converter
// Task: Write a function temperatureConverter(unit) that takes a unit ('C' or 'F') and returns a function to convert temperatures to that unit.

// const toCelsius = temperatureConverter('C');
// toCelsius(32); // 0
// Explanation: Here, the closure is preserving the unit variable that allows the inner function to know whether to convert to Celsius or Fahrenheit.

function temperatureConverter(unit) {
    return function (temperature) {
        if (unit === "C") {
            return ((temperature - 32) * 5) / 9;
        } else if (unit === "F") {
            return (temperature * 9) / 5 + 32;
        } else {
            return "Invalid Unit";
        }
    };
}
const toCelsius = temperatureConverter("C");
console.log(toCelsius(32));
const toFahrenheit = temperatureConverter("F");
console.log(toFahrenheit(0));

// 3. Greeting Generator
// Task: Write a function greet(name) that returns a function to generate customized greetings for the provided name.

// const greetJohn = greet('John');
// greetJohn('Morning'); // 'Good Morning, John!'
// Explanation: The inner function maintains access to the name variable and uses it to generate custom greetings.

function greet(name) {
    return function (time) {
        return `Good ${time}, ${name}! Hope, You are doing well`;
    };
}
const greetJohn = greet("John");
console.log(greetJohn("Morning"));
console.log(greetJohn("Afternoon"));

// 4. Interest Calculato
// Task: Write a function interestCalculator(rate) that takes an interest rate and returns a function to calculate the interest for a given amount.

// const simpleInterest = interestCalculator(5);
// simpleInterest(1000); // 50
// Explanation: This example illustrates how a closure can maintain state information like the interest rate across multiple calls.

function interestCalculator(rate) {
    return function (amount) {
        return (rate / 100) * amount;
    };
}
const simpleInterest = interestCalculator(5);
console.log(simpleInterest(1000));
console.log(simpleInterest(2000));

// 5. Multiplier Function
// Task: Write a function multiplier(factor) that takes a factor and returns a function to multiply any number by that factor.

// const double = multiplier(2);
// double(5); // 10

// Explanation: Here, the closure is retaining the factor information, allowing the inner function to utilize it for multiplication.
function multiplier(factor) {
    return function (num) {
        return factor * num;
    };
}
const double = multiplier(2);
console.log(double(5));
console.log(double(20));

/*    Medium Problems      */

// 1. Double Multiplier:
// Task: Extend the multiplier function to take two factors and return a function to multiply any number by those factors.

// const doubleAndTriple = doubleMultiplier(2, 3);
// doubleAndTriple(5); // 30
// Explanation: This is a step up from the easy problems as it utilizes two closures to remember both factors.

function doubleMultiplier(num1, num2) {
    return function (num) {
        return num * num1 * num2;
    };
}
const doubleAndTriple = doubleMultiplier(2, 3);
console.log(doubleAndTriple(5));
console.log(doubleAndTriple(10));

// 2. Sequential Greetings
// Task: Create a function that takes a name and returns a series of functions for different greeting times (morning, evening, etc.)

// const johnGreeting = sequentialGreet('John');
// johnGreeting.morning(); // 'Good Morning, John!'
// johnGreeting.evening(); // 'Good Evening, John!'
// Explanation: This problem involves defining multiple functions within a parent function, demonstrating how each can have access to the outer function's variables.

function sequentialGreet(name) {
    return function (time) {
        return `Good ${time}, ${name}!`;
    };
}
const johnGreeting = sequentialGreet("John");
console.log(johnGreeting("Morning"));
console.log(johnGreeting("Evening"));

// 3. Personal Library
// Task: Create a function that returns an object with methods to add, remove, and list books in a personal library.

// const myLibrary = personalLibrary();
// myLibrary.add('The Nation');
// myLibrary.list(); // ['The Nation']
// Explanation: This example uses closures to maintain a private state that represents the personal library, allowing manipulation through specific methods.

function personalLibrary() {
    const books = [];

    return {
        add: function (book) {
            books.push(book);
        },
        remove: function (book) {
            const index = books.indexOf(book);
            if (index !== -1) {
                books.splice(index, 1);
            }
        },
        list: function () {
            return books.slice();
        }
    };
}

const myLibrary = personalLibrary();
myLibrary.add("The Nation");
console.log(myLibrary.list());

myLibrary.add("O'tgan kunlar");
myLibrary.add("1929");
console.log(myLibrary.list());

myLibrary.remove("O'tgan kunlar");
console.log(myLibrary.list());

// 4. Multiplication Table Generator
// Task: Write a function that returns a function to generate multiplication tables for any given number.

// const tableOfThree = multiplicationTable(3);
// tableOfThree(); // [3, 6, 9, ... , 30]
// Explanation: Here, the closure retains the number for which the multiplication table needs to be generated.

function multiplicationTable(number) {
    return function () {
        const table = [];
        for (let i = 1; i <= 10; i++) {
            table.push(number * i);
        }
        return table;
    };
}

const tableOfThree = multiplicationTable(3);
console.log(tableOfThree());

const tableOfSeven = multiplicationTable(7);
console.log(tableOfSeven());

// 5. Favorite Color Reminder:
// Task: Write a function that takes a person's name and favorite color and returns a function to remind you of that person's favorite color.

// const johnsColor = favoriteColorReminder('John', 'Blue');
// johnsColor(); // 'John's favorite color is Blue.'
// Explanation: This problem demonstrates a closure that remembers both the name and favorite color, and uses them later when the returned function is invoked.

function favoriteColorReminder(name, color) {
    return function () {
        return `${name}'s favorite color is ${color}`;
    };
}
const johnsColor = favoriteColorReminder("John", "Blue");
console.log(johnsColor());
