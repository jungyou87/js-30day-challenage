const rs = require('readline-sync');

const operationChosen = askOperation();

function askOperation() {
    let operations = ['/','*','+','-']
    let operation = rs.question('What operation would you like to perform? ');
    if (operations.includes(operation)) {
        return operation;
    } else {
        console.log('That is not a valid operation');
        return askOperation();
    }
}
const first= rs.questionInt('Please enter the first number: ');
const second = rs.questionInt('Please enter the second number: ');
let result;

function calculate() {
    
    if (operationChosen == '+') {
        result = (first + second)
        return result;
    } else if (operationChosen == '-') {
        result = (first - second)
        return result;
    } else if (operationChosen == '/') {
        result = (first / second)
        return result;
    } else if (operationChosen == '*') {
        result = (first * second)
        return result;
    }
}

console.log(`The result is ${calculate()}`);

