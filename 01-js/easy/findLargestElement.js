/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  var maxi = numbers[0];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxi) {
        maxi = numbers[i];
    }
  }
  return maxi;
}

var arr = [-3.5, -7.2, -2.1, -9.8, -1.9];
console.log("res", findLargestElement(arr));
module.exports = findLargestElement;
