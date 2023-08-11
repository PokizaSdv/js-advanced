// Assessment-2 | Timed
// Inventory Management Software Assignment
// In modern commerce, the ability to manage and track inventory is vital for businesses of all sizes. Effective inventory management helps organizations understand what products are in stock, which items need to be ordered, and how to optimize storage space. In this context, the Inventory Management Software Assignment aims to simulate a real-world inventory system using the principles of object-oriented programming in JavaScript.

// This assignment requires the creation of two core classes: Good and Inventory. The Good class will be responsible for representing individual products, while the Inventory class will handle the broader task of managing multiple goods. By designing and implementing these classes, students will engage with key programming concepts such as objects, arrays, classes, methods, and error handling.

// Good Class
// Represents an individual good, with properties like id, name, quantity, and price.
// Inventory Class
// This class represents the inventory system, allowing for the management of goods.
//1. addGood: Adds a good, throws an error if it already exists.
// 2. removeGood: Removes a good, throws an error if not found.
// 3. updateGood: Updates a good, throws an error if not found.
// 4. viewGoods: Returns all goods.
// 5. searchGoodByName: Searches for goods by name.
// 6. applyDiscount: Applies a percentage discount to all goods.
// 7. generateSalesReport: Generates a sales report.
// 8. sellGood: Sells a specified quantity of a good, throws an error if the quantity exceeds available stock

// Good Class
// This class represents an individual good.

// Properties:
// id (Number): Unique identifier for the good.
// name (String): Name of the good.
// quantity (Number): Available quantity in stock.
// price (Number): Unit price of the good.
// Constructor:
// Input: id (Number), name (String), quantity (Number), price (Number)
// Output: Good instance
// Example: const apple = new Good(1, "Apple", 50, 0.5);
// Description: Creates a new instance of the Good class with the specified properties.
class Good {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

// Inventory Class
// This class represents an inventory system.

// Properties:
// goods (Array of Good objects): An array to hold the goods.
// Methods:
// addGood(good)
// Description: Adds a good to the inventory. If a good with the same id already exists, an error is thrown.
// Input: A Good object
// Output: None
// Error: throw new Error("Good already exists in the inventory.");
// Example: inventory.addGood(apple);
// removeGood(id)
// Description: Removes a good with the given id. If the good doesn't exist, an error is thrown.
// Input: ID of the good to be removed (Number)
// Output: None
// Error: throw new Error("Good not found in the inventory.");
// Example: inventory.removeGood(1);
// updateGood(id, updatedGood)
// Description: Updates a good with the given id. If the good doesn't exist, an error is thrown.
// Input: ID of the good to be updated (Number), updated Good object
// Output: None
// Error: throw new Error("Good not found in the inventory.");
// Example: inventory.updateGood(1, updatedApple);
// viewGoods()
// Description: Returns all the goods.
// Input: None
// Output: An array of all goods in the inventory
// Example: console.log(inventory.viewGoods());
// searchGoodByName(name)
// Description: Searches for goods by name, returns an array of matched goods.
// Input: Name of the good to be searched (String)
// Output: An array of goods matching the given name
// Example: const result = inventory.searchGoodByName("Apple");
// applyDiscount(percent)
// Description: Applies a percentage discount to all goods' prices. You have to change all good's prices.
// Input: Discount percentage to be applied (Number)
// Output: None
// Example: inventory.applyDiscount(10);
// generateSalesReport()
// Description: Generates a sales report.
// Input: None
// Output: An object containing total revenue, total sold items, and average price
// Example: const report = inventory.generateSalesReport();
// sellGood(id, quantity)
// Description: Sells the specified quantity of a good with the given id, updates inventory, returns sale details. If quantity exceeds available stock, an error is thrown.
// Input: ID of the good to be sold (Number), quantity to be sold (Number)
// Output: An object detailing the sale
// Error: throw new Error("Not enough quantity in stock.");
// Example: inventory.sellGood(1, 5);
class Inventory {
    constructor() {
        this.goods = [];
    }
    addGood(good) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === good.id) {
                throw new Error("Good already exists in the inventory.");
            }
        }
        this.goods.push(good);
    }

    removeGood(id) {
        let newGoodsArray = [];
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id !== id) {
                newGoodsArray.push(goods[i]);
            } else {
                throw new Error("Good not found in the inventory");
            }
        }
        this.goods = newGoodsArray;
    }

    updateGood(id, updatedGood) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id !== id) {
                this.goods[i] = updatedGood;
            } else {
                throw new Error("Good not found in the inventory.");
            }
        }
    }

    viewGoods() {
        return this.goods;
    }

    searchGoodNyNamr(name) {
        let matchedGoods = [];
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].name === name) {
                matchedGoods.push(this.gooods[i]);
            }
        }
        return matchedGoods;
    }

    applyDiscount(percent) {
        for (let i = 0; i < this, goods.length; i++) {
            this.goods[i].price *= 1 - percent / 100;
        }
    }

    generateSalesReport() {
        let totalRevenue = 0;
        let totalSoldItems = 0;
        for (let i = 0; i < this.goods.length; i++) {
            totalRevenue +=
                this.goods[i].price *
                (this.goods[i].quantity - this.goods[i].quantity);
            totalSoldItems += this.goods[i].quantity - this.goods[i].quantity;
        }
        const averagePrice = totalRevenue / totalSoldItems;
        return {
            totalRevenue: totalRevenue,
            averagePrice: averagePrice
        };
    }

    // sellGood(id, quantity) {
    //     for(let i = 0; i < this.goods.length; i++) {
    //         if(this.goods[i].id === id)
    //     }
    // }
}
const apple = new Good(1, "Apple", 50, 0.5);
const inventory = new Inventory();

inventory.addGood(apple);
console.log(inventory.viewGoods());

inventory.removeGood(1);
console.log(inventory.viewGoods());

inventory.applyDiscount(10);
console.log(inventory.viewGoods);

const updatedApple = new Good(1, "Apple", 40, 0.4);
inventory.updateGood(1, updatedApple);
console.log(inventory, viewGoods());

const report = inventory.generateSalesReport();
console.log("Sales report:", report);
