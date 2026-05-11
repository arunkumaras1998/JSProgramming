let num1 = 1;
while (num1 <= 10) {
    console.log(num1);
    num1 += 1;
}

console.log("=================================");

let num = 1;
let result = "";
while (num <= 10) {
    // console.log(num);
    result = result + " " + num;
    num += 1;
}

console.log(result);

console.log("=================================");
// infinite loop

let value = 1;
while(true){
    console.log(value);
    value += 1;
    if(value == 567){
        break;
    }
}