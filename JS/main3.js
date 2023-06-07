function myFunction(count, msg){
    for(let i = 0; i < count; i++){
        log(msg + i);
    }
}

// myFunction(2, 'call1 ');
// myFunction(3, 'call2 ');
/*myFunction();
myFunction();
myFunction();
myFunction();
myFunction();
*/
// D.I.E - Duplication Is Evil!!!
// D.R.Y - Dont Repeat Yourself!!!

let myFunction2 = function (count, msg){
    for(let i = 0; i < count; i++){
        log(msg + i);
    }
}

// myFunction2(2, 'call3 ');
// myFunction2(3, 'call4 ');
/*
myFunction2();
myFunction2();
myFunction2();
*/

function Add(a, b){
    if(a > 3){
        a = 3;
    }
    return a + b;
}

//let result = Add(1, 2);
//log(result);
log(Add(1, 2));
log(Add(5, 8));
log(Add(1, 11));
log(Add(5, 3));


