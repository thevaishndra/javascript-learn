//if you're referring to current context we use this keyword
const user = {
    username: "vaish",
    price: 999,

    welcomeMessage: function() {
        console.log(`hey ${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "shubh";
// user.welcomeMessage();
console.log(this);//refers to an empty object -> {}



//******************arrow func **********************
 const addTwo = (num1, num2) => {//curly braces ther is return keyword
     return num1 + num2;//explixit return => when return keyword is used
 }
// console.log(addTwo(4, 5));
 const addTwoo = (num1, num2) => num1 + num2;//implicit return but runs smoothly
//parenthesis no return keyword
// console.log(addTwoo(4, 5));
//({username: "vaish"}) => to return object we write like this



//IIFE => immediately invoked function expression
//function that gets execute immediately, to remove and prevent pollution from global scope, we use iife

//named iife as func has namme
(function silver(){//refer line 25
    console.log(`Database connected`);//it was throwing error first but then we wrote it inside parenthesis and made it a block
})();//to end code we explicitly add semicolon, otherwise next code will not run


//unnamed iife as func dont have a name
((name)=>{
    console.log(`DB connected ${name}`);
})('vaish');//how to pass variable