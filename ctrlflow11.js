//if
const isUserLoggedIn = true
// if(2 == "2"){//here  one is number and one is string 
// console.log("executed");//error as they are !=
// }
// <, >, <=, >=, ==, !=, ===
//= operator assignment

//if-else
const temperature = 60;
// if (temperature<50){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// const score =100;
// if (score<200){
//     const power = "fly";//declared only in this scope, if we use var it can be accessed from anywhere
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);//throw error as it is not declared a global scope

const balance = 1000;
// if (balance>500) console.log("test1"),//very unreadable code, not a good practice
// console.log("test2");//implicit scope, it will run without curly braces

//nested
// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("more than 900");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle = true;
const loggedInfromEmail = false;
if (userLoggedIn && debitCard && 2==3 ){
    console.log("Allowed to spend money");
}