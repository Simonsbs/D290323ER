function addsEvens(from, to) {
    let result = 0;
    if (from > to) {
        let cup = from;
        from = to;
        to = cup;
    }
    for (let i = from; i <= to; i++) {
        if(i % 2 === 0){
            result += i;
        }
    }
    return result;
}

let result = addsEvens(1, 10);

log(`the result is ${result}`); // Should be 30

result = addsEvens(5, 30);

log(`the result is ${result}`); // Should be 234

result = addsEvens(50, 5);

log(`the result is ${result}`); // Should be 644

result = addsEvens(11, 11);

log(`the result is ${result}`); // Should be 0
