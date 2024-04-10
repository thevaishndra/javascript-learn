function sayMyName (){
    console.log("Vaishnavi");
}
// sayMyName();
function addTwoNumbers (number1, number2){
    // let result = number1 + number2;//parameters
    //return result;
    return number1 + number2;
}
// addTwoNumbers(3, 4);//arguments
const result = addTwoNumbers(3,5);
// console.log("Result : ", result);

function loginUserMessage(username){
    if (username === undefined){//we can also write -> !username
        console.log("enter a valid username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Vaishnavi"));//if we dont pass anything, it comes undefined...
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2,...num1){//func name should tell what it does
    //... -> rest operator/ spread operator, depends on what it does hence called that in situation
return num1;
}
// console.log(calculateCartPrice(200, 300, 780, 3963));//output->[780, 3963]-> as first two are stored in value1 and value2
const user = {
    username: "Vaishnavi",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}//check if we are passing any value does it have any object or not, like if we pass prices -> undefined
// handleObject(user);
handleObject({//we can also pass like this
    username: "vaish",
    price: 299
});
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2560, 4009, 107, 493]));