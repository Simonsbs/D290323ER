function isLeapYear(value){
    let simpleCheck = value % 4 === 0;
    let dividesBy400 = value % 400 === 0;
    let dividesBy100 = value % 100 === 0;

    if ((simpleCheck && !dividesBy100) || dividesBy400) {
        // Is leap year
        return true;
    } else {
        // is not leap year
        return false;
    }
}

function isLeapYear2(value){
    return ((value % 4 === 0 && value % 100 !== 0) || value % 400 === 0);
}

function printResult(value){
    if(isLeapYear2(value)){
        log(`the value ${value} is a leap year`);
    } else {
        log(`the value ${value} is not a leap year`);
    }
}

printResult(1700);
printResult(1800);
printResult(2200);
printResult(2300);
printResult(2500);
printResult(2600);

printResult(2000);
printResult(2020);
printResult(2021);
printResult(1900);
printResult(2100);