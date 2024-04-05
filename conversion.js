let score = 33;// if it was null then output is 0
// if it was undefined then output is NaN
// true => 1
// false => 0
console.log(typeof score);
console.log(typeof (score));
let valueInString = String(score);
console.log(typeof valueInString);

let isLoggedIn = 1;
// any value => true; empty"" => false
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//******************operations***********************
 let value = 3;
 let negValue = -value;
//  console.log(negValue);

let str1 = "hello";
let str2 = "Vaishnavi";
let str3 = str1 + str2;
// console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log((3 + 4) * 5 % 3);

//primitive {copy the value and do changes in copy}
//7 types -> string, no, boolean, null, undefined, symbol, bigInt

//reference {non primitive}
//arrays, objects, functions

