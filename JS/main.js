/*
log("Hello World");
log("Simon");
log("Bobo");
*/

let myName = "Simon Stirling";
//log(myName);

let aNewThing;

aNewThing = false;
aNewThing = "12345";
aNewThing = 12345;

//log(aNewThing);

let a;
let _a;
let $a;
let a1;

// Constants

const aConstantVariable = 5;
const pi = 3.14;

//log(aConstantVariable * pi);

// Var

b = 1234;
//log(b);
var b = "Im a value";

// Numbers
let num = 12;
let num2 = 10;

num = num + 1; // 13
num = num - 1; // 12
num = num * 2; // 24
num = num / 2; // 12
num = num % 5; // 2

num = 12;

num += 1; // 13
num -= 1; // 12
num *= 2; // 24
num /= 2; // 12
num %= 5; // 2

//num = num2 + 2;

//log(num);

// Inc / Dec
let i = 10;

//i++; // 11

let j = i++;
//let k = i++;

//log(i);
//log(j);

i--;

//log(i);

// Precedence

let price = (3 + 2) * 2;
//log(price);
price = 3 + 2 * 2;
//log(price);

// Precision

let value = 1.1 + 1.3;
//value = 1 + 2;
//log(value);

// String

let msg = "Hello 'World'!";
//log(msg);

let msg2 = 'Hello "World"!';
//log(msg2);

let age = 30;
let msg3 = `Simon wishes he was "${age}", but he isn't`;
//log(msg3);

let fName = "Simon";
let lName = "Stirling";

//fName += " ";

//log(fName + " " + lName);
//log(`${fName} ${lName}`);

//log("hey " + fName.toUpperCase());
//log("hey " + fName.toLowerCase());

//log(1 + "2");


// Converting

let amount = 1234;
amount = amount.toString();
//log(typeof amount);

let amount2 = "     123.45";
amount2 = Number.parseFloat(amount2);
//log(amount2);

// Boolean

let happy = true;
let sad = false;
log(!happy);
log(happy);
log(!sad);
log(sad);

