function greet(name) {
  return `Hello, ${name}`;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function add(num1, num2) {
  return num1 + num2;
}

function maxNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

const greetings = greet("Maryam");
console.log(greetings);

const result = isEven(6);
console.log(result);

const addNumbers = add(2, 8);
console.log(addNumbers);

const maximum = maxNumber(8 , 4);
console.log(maximum);

