//            0 1 2 3 4
let array1 = [1,2,3,4];
let array2 = ["a","b","c","d"];
let array3 = [true, false, true, false];
let array4 = [1, "b", true];

let array5 = Array.of(1,2,3);

/*
log(array1);
log(array2);
log(array3);
log(array4);

log(array5);
*/

//log(Array.isArray(array1));

/*log(array2);
let value = array2[3];
log(`value: ${value}`);
log(array2);
*/

/*log(array2);
let value = array2.pop();
log(`value: ${value}`);
log(array2);
value = array2.shift();
log(`value: ${value}`);
log(array2);

array2.unshift("Bob", "Jane", 1, true);
log(array2);
*/
/*log(array2);
let newArray = array2.slice(1,3);
log(array2);
log(newArray);*/

/*log(array2);
array2.splice(1,2,"Simon", 1, "Jane");
log(array2);*/

//log(array2[array2.length - 1]);

for (let i = 0; i < array2.length; i++) {
    log(array2[i]);
    
}

let j = 0;
while (j < array2.length){
    log(array2[j]);
    j++;
}
