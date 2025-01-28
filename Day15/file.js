// Create a basic array
let numbers = [5, 12, 8, 20, 3];
console.log("Original Array:", numbers);

// Reverse the array
let reversedArray = numbers.slice().reverse();
console.log("Reversed Array:", reversedArray);

// Sort the array (ascending)
let sortedArray = numbers.slice().sort((a, b) => a - b);
console.log("Sorted Array (Ascending):", sortedArray);

// Find numbers greater than 10
let greaterThanTen = numbers.filter(num => num > 10);
console.log("Numbers Greater Than 10:", greaterThanTen);

// Double each number in the array
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// Find the first number greater than 10
let firstGreaterThanTen = numbers.find(num => num > 10);
console.log("First Number Greater Than 10:", firstGreaterThanTen);

// Sum of all numbers in the array
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of All Numbers:", sum);
