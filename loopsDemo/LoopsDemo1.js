for (let index = 1; index <= 10; index++) {
    console.log(index);
}

console.log("==========================================")
for (let index = 1; index <= 20; index++) {
    if (index % 2 == 0) {
        console.log(`${index} is a Even Number`);
    } else {
        console.log(`${index} is a Odd Number`);
    }
}

console.log("==========================================")
// print prime number

let num = 11;
let isPrime = true;

for (let i = 2; i < num/2; i++) {
    console.log(i)
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`${num} is a Prime Number....`);
} else {
    console.log(`${num} is not a Prime Number....`);
}

// num/2 - we can cut the number to by 2 as we can divide 11 only till 5 