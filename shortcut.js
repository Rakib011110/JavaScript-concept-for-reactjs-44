// 'almas', 5, true, {}, []
// '', 0, false, null, undefined
// check truthy
let myVar = 5;
// check any truthy 
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0
}

let myMoney = 50
//   you chkec nagativ or falsy anthing
if (!myMoney) {


}
const money = 800;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit';
}

let food1 = money > 100 ? "Biriyani" : "cha biscuite"

let drink = (money > 100 && myVar > 1000) ? "coke" : "filter Water"

const num1 = 43
// console.log(num1);
const numbstr = num1 + " "
// console.log(numbstr); 
const input = "500 "
const inputNum = + input
// console.log(inputNum); 

const isActive = true
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');

isActive ? showUser() : hideUser()
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;