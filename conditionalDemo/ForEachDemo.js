//for-each

let nums = [4, 7, 2, 9, 8];

nums.forEach((a, b) => {
    console.log("Value: ", a, a ** 2, "Index: ", b);
})

/**
 *
 * *
 * * *
 * * * *
 * * * * *
 */

for (let i = 1; i <= 5; i++) {
    let temp = "";
    for (let j = 1; j <= i; j++) {
        temp = temp + "* ";
    }
    console.log(temp);
}

console.log("=============================");

for (let i = 5; i >= 1; i--) {
    let temp = "";
    for (let j = 1; j <= i; j++) {
        temp = temp + "* ";
    }
    console.log(temp);
}

console.log("=============================");
/**
 *
 * $
 * $ *
 * $ * $
 * $ * $ *
 */

for (let i = 1; i <= 5; i++) {
    let temp = "";
    for (let j = 1; j <= i; j++) {

        if (j % 2 == 0) {
            temp = temp + "$ ";
        } else {
            temp = temp + "* ";
        }

    }
    console.log(temp);
}