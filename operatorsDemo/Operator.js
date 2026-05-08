let num1 = 21;
let num2 = 10;

console.log("Addition with + ", num1 + num2);
console.log("Substraction with - ", num1 - num2);
console.log("Multiplication with * ", num1 * num2);
console.log("Division with / ", num1 / num2);
console.log("Reminder with + ", num1 % 3);
console.log("Exponentiation with **, *** ", num1 ** 2, num2 ** 3);


console.log("--------------------------------------------------");


// Asignment Operator

let y = 30;

console.log("value of y: ", y);

// y += 3 = y = y + 3

console.log("value of y: y+=6: ", y += 6);
console.log("value of y: y-=5: ", y -= 5);
console.log("value of y: y*=3: ", y *= 3);
console.log("value of y: y/=4: ", y /= 4);

console.log("--------------------------------------------------");

// comparision Operator

let p = 20;
let q = 10;
let r = "20";

console.log("comparing value: ", p == q); // false 
console.log("comparing value: ", p == r); // true

console.log("comparing value with type: ", p === r);

console.log("Not Equal: ", p != r);
console.log("Not Equal With Type: ", p !== r);

// increment and decrement operator

let n1 = 10;

console.log("++ opearator: ",++n1)// addFirst
console.log("-- opearator: ",--n1)// substractFirst

console.log("++ opearator: ",n1++)// addLater
console.log("-- opearator: ",n1--)// sustractLater

console.log(n1);