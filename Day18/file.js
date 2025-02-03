function calculator(operation, num1, num2) {
    if(operation === "add"){
        function add() {
            return num1 + num2;
        }
        add();
    }

    if (operation === "subtract") {
        function subtract(param) {
            return num1 - num2;
        }
        subtract();
    }

    if (operation === "multiply") {
        function multiply() {
            return num1 * num2;
        }
        multiply();
    }

    if (operation === "divide") {
        function divide() {
            if (num1 === 0) {
                console.log("Error, Denominator cannot be 0")
                return;
            }
            return num1 / num2;
        }
    }
}