const SIZE_BIG = {
    prise: 100,
    callories: 40
};
const SIZE_MEDIUM = {
    prise: 75,
    callories: 30
};
const SIZE_SMALL = {
    prise: 50,
    callories: 20
};
const CHEESE = {
    prise: 10,
    callories: 20
};
const SALAD = {
    prise: 20,
    callories: 5
};
const POTATOES = {
    prise: 15,
    callories: 10
};
const SEASONING = {
    prise: 15,
    callories: 0
};
const MAYONNAISE = {
    prise: 20,
    callories: 5
};
let ollToping = {};


function Hamburger(view) {
    this.prise = view.prise;
    this.callories = view.callories;
    let ollTopingPrise = [];
    let ollToppingCallories = [];
    this.addToping = function (viewTopping) {
        ollTopingPrise.push(viewTopping.prise);
        ollToppingCallories.push(viewTopping.callories);
        return ollToping = {
            sumPrise : ollTopingPrise.reduce((acc, prise) => acc + prise),
            sumCallories : ollToppingCallories.reduce((acc,callories)=>acc+callories),
        };
    };
}

Hamburger.prototype.getPrise = function  (){
    return this.prise + ollToping.sumPrise;
};
Hamburger.prototype.getCallories = function  (){
    return this.callories + ollToping.sumCallories;
};

const hamburger = new Hamburger(SIZE_SMALL);
hamburger.addToping(MAYONNAISE);
hamburger.addToping(POTATOES);
hamburger.addToping(MAYONNAISE);
hamburger.addToping(SEASONING);
hamburger.addToping(SEASONING);

console.log('Callories with sauce:  ' + hamburger.getCallories());
console.log('Price with sauce:  ' + hamburger.getPrise());

const bigHamburger = new Hamburger(SIZE_BIG);
bigHamburger.addToping(MAYONNAISE);
bigHamburger.addToping(POTATOES);
bigHamburger.addToping(SEASONING);

console.log('Callories with sauce:  ' + bigHamburger.getCallories());
console.log('Price with sauce:  ' + bigHamburger.getPrise());

