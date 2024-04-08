// Object.create -> constructor method to declare obj
//If we declare like literals singleton is not formed

//Object literal
const mySym = Symbol("key1");
const jsUser = {
    name : "Vaishnavi",
    [mySym] : "mykey1",
    age : 19,
    location : "Delhi",
    email : "vaishanvi@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Wednesday"]
};
// console.log(jsUser.email); //we can't access string from this dot method
// console.log(jsUser["email"]);//we can access string
// console.log(jsUser[mySym]);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//referencing object in a func
}//object can be referred as this.
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
