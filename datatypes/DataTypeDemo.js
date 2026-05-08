// primitive data types

let num = 58;
let stdName = "Arun"
let empSal = 485962.585;
let hasLicence = true;
let undifined;
let flag = null;
console.log("Value: ", num, "Type: ", typeof num);
console.log("Value: ", stdName, "Type: ", typeof stdName);
console.log("Value: ", empSal, "Type: ", typeof empSal);
console.log("Value: ", hasLicence, "Type: ", typeof hasLicence);
console.log("Value: ", undifined, "Type: ", typeof undifined);
console.log("Value: ", flag, "Type: ", typeof flag);

// combined value using backtick

let combined = `num: ${num}, stdName: ${stdName}, empSal: ${empSal}`;
console.log("Combined Value: ", combined);

let fruitsList = [

    "Apple", "Orange", "Banana", "Guva", "Papaya",
    ["Pista", "Badam", "Pumpkin", "sunflower"],
    {
        empId: 4789,
        empName: "Arun",
        empSal: 58961.25,
        empCity: "Mysuru",
        hasActive: true,
        empBankName: "HDFC"
    }

]

let dryFruits = fruitsList[5];
console.log("dryFruits: ", dryFruits);
console.log(fruitsList[6]["empCity"]);
console.log(fruitsList[6].hasActive);