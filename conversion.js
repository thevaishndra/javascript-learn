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