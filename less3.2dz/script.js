const firstVariable = +prompt('Hello!Please enter a number (variable - a)');
const secondVariable = +prompt('Please enter the second number (variable - b)');
const operator = prompt('Please enter sign +, -, *, /');

const sum = calcSum(firstVariable, secondVariable);
const deff = calcDefference(firstVariable, secondVariable);
const div = calcDivision(firstVariable, secondVariable);
const mult = calcMultiplication(firstVariable, secondVariable);

switch(operator) {
    case '+': alert(sum);break;
    case '-': alert(deff);break;
    case '/': alert(div);break;
    case '*': alert(mult);break;
}
// Или так

// if (operator == '+') {
//     alert(sum);
// } else if (operator == '-') {
//     alert(deff);
// } else if (operator == '/') {
//     alert(div);
// } else alert(mult);


function calcSum(a, b) {
    const result = a + b;
    return (`${a} + ${b} = ${a + b}`);
}

function calcDefference(a, b) {
    const result = a - b;
    return (`${a} - ${b} = ${a - b}`);
}

function calcDivision(a, b) {
    const result = a / b;
    return (`${a} / ${b} = ${a / b}`);
}

function calcMultiplication(a, b) {
    const result = a * b;
    return  (`${a} * ${b} = ${a * b}`);
}

// const number = +prompt ('Enter the number');
// const power = +prompt ('Enter an integer greater then 0');

pow(firstVariable, secondVariable);
function pow(x,n) {
if (n<1) {
alert ('Only positive number');
}
else if (!Number.isInteger(n)) {
alert ('Only an integer');
}
else {
alert(`${x} 'в степени' ${n} = ${x**n}`)
}
}

const number = +prompt ('Enter the number');

alert(`cos${number} = ${Math.cos(number)},
sin${number} = ${Math.sin(number)},
tan${number} = ${Math.tan(number)}`)

