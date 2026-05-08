function checkDay(dayNum) {

    switch (dayNum) {
        case 1: console.log("It is a Sunday");
            break;
        case 2: console.log("It is a Monday");
            break;
        case 3: console.log("It is a Tuesday");
            break;
        case 4: console.log("It is a Wednesday");
            break;
        case 5: console.log("It is a Thursday");
            break;
        case 6: console.log("It is a Friday");
            break;
        case 7: console.log("It is a Saturday");
            break;

        default: console.log("Invalid Day Num, Please pass valid Day Num");

    }

}

checkDay(1);
checkDay(4);
checkDay(6);
checkDay(-1);