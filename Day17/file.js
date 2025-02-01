function greet(name) {
    return `Hello, ${name}`
}

function isEven(number) {
    if(number%2 === 0){
        return true;
    }
    return false;
}


const greetings = greet("Maryam")
console.log(greetings);

const result = isEven(6)
console.log(result);

