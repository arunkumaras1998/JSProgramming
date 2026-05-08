/*
function checkAge(age) {
    if (age >= 18) {
        console.log("You are eligible to vote");
    } else {
        console.log("Your are not eligible to vote.. Have a Patience");
    }
}

checkAge(18);
checkAge(15);
checkAge(112);
checkAge(0);


function checkNum(num) {
    if (num % 2 == 0) {
        console.log(num, "It is a even number");

        if (num >= 0) {
            console.log(num, " It is a even Positive number");
        } else {
            console.log(num, " It is a even negative number");
        }
    }
    else {
        console.log(num, " It is a odd number");

        if (num < 0) {
            console.log(num, " It is a odd Positive number");
        } else {
            console.log(num, " It is a odd negative number");
        }
    }
}

checkNum(56);
checkNum(53);
checkNum(0);
checkNum(-32);
checkNum(-45);
*/

function lunchBrowser(browser) {

    if (browser.toLowerCase() === "chrome") {
        console.log("Lunch....", browser);
    }
    else if (browser.toLowerCase() === "edge") {
        console.log("Lunch....", browser);
    }
    else if (browser.toLowerCase() === "firefox") {
        console.log("Lunch....", browser);
    }
    else if (browser.toLowerCase() === "safari") {
        console.log("Lunch....", browser);
    }
    else {
        console.log("Invalid Browser Name");
    }
}

lunchBrowser("CHROME");
lunchBrowser("EDGE");
lunchBrowser("FIREFOX");
lunchBrowser("SAFARI");
lunchBrowser("BRAVE");