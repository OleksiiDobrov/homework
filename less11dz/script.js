function createCalculator(count) { 
    let arg = count;
    return {        
        sum: function (operand) {
            return arg += operand;
        },
        sub: function (operand) {
            return arg -= operand;
        },
        mult: function (operand) {
            return arg *= operand;
        },
        div: function (operand) {
            return arg /= operand;
        },
        set: function (operand) {
            return arg = operand;
        },
    };
}



const calc = createCalculator(15);
console.log(calc.sum(10));
console.log(calc.mult(10));
console.log(calc.sub(10));
console.log(calc.div(10));
console.log(calc.set(100));
console.log(calc.sum(10));
console.log(calc.mult(10));
console.log(calc.sub(10));
console.log(calc.div(10));


