const prompt = require('prompt-sync')();
let userName = prompt("Enter the user name: ");
console.log("User Name: ", userName, "Typeof: ", typeof userName);

let num1 = Number(prompt("Please enter the number1: "));
let num2 = Number(prompt("Please enter the number2: "));
console.log("Addition: ", (num1 + num2));