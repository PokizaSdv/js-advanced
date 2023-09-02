const fs = require("fs");
const { connect } = require("http2");
const { v4: uuid } = require("uuid");

// class Person {
//     constructor(id, firstName, lastName, lastDigitOfSSN, expenses, incomes) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.lastDigitOfSSN = lastDigitOfSSN;
//         this.expenses = expenses;
//         this.incomes = incomes;
//     }
// }

class DataAnalyzer {
    read() {
        const content = fs.readFileSync("data.json", "utf-8");
        return JSON.parse(content);
    }

    updateAll(data) {
        fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
    }
    assignUniqueIds() {
        const content = this.read();
        for (const personId in content) {
            content[personId].id = uuid();
        }
        this.updateAll(content);
    }

    addUtilitiesExpenses() {
        const content = this.read();
        for (const personId in content) {
            const { expenses } = content[personId];
            for (const month in expenses) {
                const randomUtilityAmount =
                    Math.floor(Math.random() * 126) + 75;
                expenses[month].utilities = randomUtilityAmount;
            }
        }
        this.updateAll(content);
    }

    removeLastDigitSSN() {
        const content = this.read();
        for (const personId in content) {
            delete content[personId].lastDigitOfSSN;
        }
        this.updateAll(content);
    }

    renameAndReduceIncomes() {
        const content = this.read();
        for (const personId in content) {
            const person = content[personId];
            person.netIncomes = {};
            for (const month in person.incomes) {
                person.netIncomes[month] = person.incomes[month] * 0.75;
            }
            delete person.incomes;
        }
        this.updateAll(content);
    }

    // calculateAndAddTotalExpenses() {
    //     const content = this.read();
    //     for (const personId in content) {
    //         const person = content[personId];
    //         const allExpenses = person.expenses;
    //         let totalExpensesSum = 0;

    //         for (const monthlyExpensesKey in allExpenses) {
    //             const monthlyExpenses = allExpenses[monthlyExpensesKey];
    //             let monthlyExpensesSum = 0;
    //             for (const expenseCategory in monthlyExpenses) {
    //                 monthlyExpensesSum += monthlyExpenses[expenseCategory];
    //             }
    //             totalExpensesSum += monthlyExpensesSum;
    //         }
    //         person.totalExpenses = totalExpensesSum;
    //     }
    //     this.updateAll(content);
    // }

    calculateAndAddTotalExpenses() {
        const content = this.read();
        for (const personId in content) {
            const person = content[personId];
            const allExpenses = person.expenses;
            const totalExpensesSum = Object.values(allExpenses).reduce(
                (acc, montlhyExpenses) => {
                    return (
                        acc +
                        Object.values(montlhyExpenses).reduce(
                            (monthlyTotal, expense) => monthlyTotal + expense,
                            0
                        )
                    );
                },
                0
            );
            person.totalExpenses = totalExpensesSum;
        }
        this.updateAll(content);
    }

    calculateAndAddTotalIncome() {
        const content = this.read();
        for (const personId in content) {
            const person = content[personId];
            const incomes = person.netIncomes;
            const totalIncome = Object.values(incomes).reduce(
                (acc, income) => acc + income,
                0
            );
            person.totalIncome = totalIncome;
        }
        this.updateAll(content);
    }

    calculateAndAddMinMaxExpenses() {
        const content = this.read();
        for (const personId in content) {
            const person = content[personId];
            let minExpense = Infinity;
            let maxExpense = 0;
            for (const month in person.expenses) {
                const monthlyExpenses = person.expenses[month];
                const monthlyExpense = Object.values(monthlyExpenses).reduce(
                    (acc, expense) => acc + expense,
                    0
                );
                if (monthlyExpense < minExpense) {
                    minExpense = monthlyExpense;
                }
                if (monthlyExpense > maxExpense) {
                    maxExpense = monthlyExpense;
                }
            }
            person.minExpenses = minExpense;
            person.maxExpenses = maxExpense;
        }
        this.updateAll(content);
    }
}
const person1 = new DataAnalyzer();
console.log(person1.assignUniqueIds());
console.log(person1.addUtilitiesExpenses());
console.log(person1.removeLastDigitSSN());
console.log(person1.renameAndReduceIncomes());
console.log(person1.calculateAndAddTotalExpenses());
console.log(person1.calculateAndAddTotalIncome());
console.log(person1.calculateAndAddMinMaxExpenses());
