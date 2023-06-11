function bubbleSort(arr){
    var len = arr.length - 1;

    for(let j = 0; j < len; j++){
        for (let i = 0; i < len - j;i++) {
            if(arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }
    }

    return arr;
}

function swap(arr, fromI, toI){
    //arr.splice(fromI, 2, arr[toI], arr[fromI]);

    let cup = arr[fromI];
    arr[fromI] = arr[toI];
    arr[toI] = cup;
}


let test1 = [64,34,25,12,22,11,90];
log(test1);
let result = bubbleSort(test1);
log(result);
let test2 = [100,20,-10,-25,0,990];
log(test2);
result = bubbleSort(test2);
log(result);