function calculator(operation, num1, num2) {
    if(operation === "add"){
        function add() {
            return num1 + num2;
        }
        return add();
    }

    if (operation === "subtract") {
        function subtract(param) {
            return num1 - num2;
        }
        return subtract();
    }

    if (operation === "multiply") {
        function multiply() {
            return num1 * num2;
        }
        return multiply();
    }

    if (operation === "divide") {
        function divide() {
            if (num2 === 0) {
                console.log("Error: Cannot divide by 0")
                return;
            }
            return num1 / num2;
        }
        return divide();
    }

    return "Invalid Operation";
}


console.log(calculator("add", 5, 3));       
console.log(calculator("subtract", 7, 3));  
console.log(calculator("multiply", 4, 2)); 
console.log(calculator("divide", 10, 2));   
console.log(calculator("divide", 5, 0));    
console.log(calculator("modulus", 5, 2));   