// address - object 3

for (let i = 1; i <= 5; i++) {
    console.log("Address i: ", i);
    for (let j = 1; j <= 3; j++) {
        console.log("Item j: ", j);
    }

    console.log(":(--------------------):");
}


console.log("===================================");

// list of prime num from 1 to 50

for (let i = 2; i <= 50; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log(i);
    }
}

console.log("===================================");

// get combination all the number from 1 to 10, whose sum is 10.

for (let index = 1; index <= 10; index++) {

    for (let value = 1; value <= 10; value++) {

        if ((index + value) == 19) {
            console.log([index, value]);
        }
    }

}