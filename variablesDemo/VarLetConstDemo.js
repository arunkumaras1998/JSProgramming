/*
var: it is function level scope, redeclare and re assigning is possible
let: it is blocked level scope, redeclare is not possible and re assigning is possible
const:  it is function level scope, redeclare and re assigning is not possible
*/

var msg = "Good Morning";
console.log("MSG: ", msg);

// updated/reassigning the msg

msg = "JavaScript for playwright";

console.log("Updated Msg: ", msg);

// redeclare the msg

var msg = "Good Evening";

console.log("Redeclard Msg: ", msg);

console.log("*********************************");

// let

let greet = "Hey Thanks for Calling....";
console.log("Greeting...: ", greet);

// Reassigning

greet = "Hey How are you";
console.log("Reassigning greeting....", greet);

console.log("==========================================")

if (true) {
    let city = "Mysuru";
    console.log("City Name: ", city);
    var country = "India";
    console.log("Country Name: ", country);
}

console.log("Country Name outside of if condition: ", country);
// console.log("City Name outside of if condition: ", city); // we cannot access outside the block scope

console.log("==========================================");

let rel = function () {
    let city = "Mysuru";
    console.log("City Name: ", city);
    var country = "India";
    console.log("Country Name: ", country);
}

rel();
console.log("Country Name outside of if condition: ", country);
// console.log("City Name outside of if condition: ", city); // we cannot access outside the block scope


console.log("==========================================");

// var issue

var flag = 10; // we cannot use this in future script
let item = 3;
if (item < 10) {
    var flag = 50;
}
console.log(flag);

console.log("==========================================");

// in let

let num = 10; // we cannot use this in future script
let value = 3;
if (value < 10) {
    let num = 100;
    console.log(num);
}
console.log(num);

console.log("==========================================");

//const

const mobile = "5896589658";
console.log("Constant Mobile Value: ", mobile);
mobile = "5896545545"

// console.log("Re assigning Mobile Value: ", mobile); // TypeError: Assignment to constant variable.