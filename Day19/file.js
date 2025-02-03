const myArray = [1, 2, 3, 4, 5]
const anotherArray = myArray.map(num => num * num)

const even = anotherArray.filter(num => num % 2 === 0)

console.log(anotherArray);
console.log(even);

