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

for (let index = 2; index <= 100; index++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(index); i++) {
        if (index % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${index} is a Prime Number`);
    }
}