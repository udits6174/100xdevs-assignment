/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var categoryArr = [];
  transactions.forEach((element) => {
    var elCategory = element.category;
    var price = element.price;
    let isExist = false;
    categoryArr.forEach((element) => {
      if (element.category === elCategory) {
        element.totalSpent += price;
        isExist = true;
      }
    });
    if (isExist === false) {
      categoryArr.push({
        category: elCategory,
        totalSpent: price,
      });
    }
  });
  return categoryArr;
}
//****************TESTING FUNCTION*****************
// var txn = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 2,
//     timestamp: 1656076800800,
//     price: 20,
//     category: "Food",
//     itemName: "larvae",
//   },
//   {
//     id: 3,
//     timestamp: 1656076800800,
//     price: 50,
//     category: "Drink",
//     itemName: "mojito",
//   },
// ];
// console.log(calculateTotalSpentByCategory(txn));
module.exports = calculateTotalSpentByCategory;
