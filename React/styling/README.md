in javascript
Build a function that takes an inital value (n)
the function will return a counter function
the counter function will return a value that is incremented each time starting from (n) the function is called

const funcA = (n) => {
....
return function(){
....
}
}

---

in javascript
Build a function that takes a value (value)
the function will return 2 functions that each take a comparing value (compareTo):

1. 'toBe' - checks if the value is equal to the compareTo value
2. 'notToBe' - checks if the value is not equal to the compareTo value

\*\* for both, if true, reurn true, if false throw an exception (Error)

const funcA = (value) => {
...
return ... (compareTo)
}

Examples:

funcA(5).toBe(5) // true
funcA(5).notToBe(5) // throws "Is Equal"

funcA(5).toBe(8) // throws "Not Equal"
/_
let x = funcA(5);
x.toBe(8);
_/
