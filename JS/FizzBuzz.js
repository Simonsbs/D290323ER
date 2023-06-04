/*for(let i = 1; i <= 100; i++){
    if ((i % 15) === 0) {
        log(i + ' fizzbuzz');
    } else if((i % 5) === 0){
        log(i + ' buzz');
    } else if((i % 3) === 0){
        log(i + ' fizz');
    } else {
        log(i);
    }
}*/

/*let i = 1;
while( i <= 100){
    if ((i % 15) === 0) {
        log(i + ' fizzbuzz');
    } else if((i % 5) === 0){
        log(i + ' buzz');
    } else if((i % 3) === 0){
        log(i + ' fizz');
    } else {
        log(i);
    }
    i++;
}*/

for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0){
        output = "fizz";
    }
    if(i % 5 === 0){
        output += "buzz";
    }

    //log(output ? output : i);
    if(output){
        log(output);
    } else {
        log(i);  
    }
}