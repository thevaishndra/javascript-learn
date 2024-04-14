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
// if (userLoggedIn && debitCard && 2==3 ){
//     console.log("Allowed to spend money");
// }


//switch
const day = 6;
// switch (day) {
//     case 1:
//         console.log("mon");
//         break;
//     case 2:
//         console.log("tue");
//         break;
//     case 3:
//         console.log("wed");
//         break;
//     case 4:
//         console.log("thu");
//         break;
//     case 5:
//         console.log("fri");
//         break;
//     case 6:
//         console.log("sat");
//         break;
//     case 7:
//         console.log("sun");
//         break;
//     default:
//         console.log("enter a valid day")
//         break;
// }

// const userEmail = "vaish@123";//true
// const userEmail = [];//true
const userEmail = "";//false
// if(userEmail){
//     console.log("got user email");
// } else{
//     console.log("don't have user email");
// }

//falsy values => false, 0, -0, BigInt, 0n, "", null, undefined, NaN(not a no.)
//truthsy values => "0", 'false', " ", [], {}, func(){}

// if (userEmail.length === 0) {//to check if array is empty 
//     console.log("array is empty");    
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {//to check if object is empty
    console.log("Object is empty");
}

//false == 0,
//false == '';
//0 == ''
//these are all true values

//Nullish Coalescing Operator(??):null, undefined
//to avoid disturbance in code because of undetermined values
//how to handle errors and assign values
//it takes the safety value or null or undefined
 let val1 = 5 ?? 10;//5
let val2 = null ?? 10;//10
let val3 = undefined ?? 10 ?? 15;//the first value ie, 10 gets printed
// console.log(val3);

//Ternary Operator
// condition ? true : false;
const iceTeaPrice = 50;
iceTeaPrice <= 25 ? console.log("less than 25"): console.log("more than 25")