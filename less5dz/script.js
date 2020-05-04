const operator = getOperator();
let inputUser = getUserNums();
let checkNumbers = deletyLetters(inputUser);
let musiv = getMassiv(checkNumbers);
const operands = getOperands(musiv);

console.log(operands);

calculate(operator, operands);


function getUserNums() {
    let userInput;
    do {
        userInput = prompt('Please enter Operands');
    }
    while (userInput === '');
    console.log(userInput);
    return userInput;
}

function deletyLetters(string) {
    const userOperands = string.replace(/\D+/g);
    console.log(userOperands);
    return userOperands;
}

function getMassiv(numbers) {
    const massiv = numbers.split('undefined');
    console.log(massiv);
    return massiv;
}

function getOperands(numsmassiv) {
    let convertingNums = numsmassiv.map(string => +string);

    return convertingNums;
}

function getOperator() {
    let userInput;

    do {
        userInput = prompt('Please enter sign +, -, *, /');
    } while (checkOpertor(userInput));

    return userInput;
}

function checkOpertor(inputOperator) {
    return (inputOperator != '+' && inputOperator != '-' && inputOperator != '/' && inputOperator != '*');
}


function calculate(operation, operands) {
    switch (operation) {
        case '+':
            sum(operands);
            break;
        case '-':
            sub(operands);
            break;
        case '*':
            mult(operands);
            break;
        case '/':
            div(operands);
            break;
    }
}


function sum(operands) {
    let result = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result += operands[i];
    }
    console.log('результат: sum ' + result);
}

function sub(operands) {
    let result = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result -= operands[i];
    }
    console.log('результат:sub  ' + result);
}

function mult(operands) {
    let result = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result *= operands[i];
    }
    console.log('результат:mult  ' + result);
}

function div(operands) {
    let result = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result /= operands[i];
    }
    console.log('результат:div  ' + result);
}
