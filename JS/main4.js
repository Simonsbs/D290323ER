let num1 = 50;
let num2 = 100;

if (num1 === 50) {
    if (num2 === 100) {
        log("Both are equal");
    }
}

let testScoreIs50 = num1 === 50;
let IQis100 = num2 === 100;

if (testScoreIs50 && IQis100) {
    log("Both are equal");
}



if (num1 === 20 || num2 === 10) {
    log("At least one is equal");
} else {
    log("none are equal");
}


let input = 25;

// let lowerFrom = input >= 10;
// let lowerTo = input <= 20;
// let lowerRange = (lowerFrom && lowerTo);

// let upperFrom = input >= 30;
// let upperTo = input <= 40;
// let upperRange = (upperFrom && upperTo);

// if(lowerRange || upperRange){
//     log("The number is in range");
// } else {
//     log("The number is not in range");
// }


if((input >= 10 && input <= 20) || (input >= 30 && input <= 40)){
    log("The number is in range");
} else {
    log("The number is not in range");
}

