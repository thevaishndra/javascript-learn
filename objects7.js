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
// console.log(jsUser["email"]);//we can access string from this square brackets method
// console.log(jsUser[mySym]);
// console.log(jsUser);

jsUser.greeting = function(){
    // console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    // console.log(`Hello JS user, ${this.name}`);//referencing object in a func
}//object can be referred as this.
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vaishnavi",
            lastname: "chandra"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);//accessing objects inside objects

//******************************
const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5 : "a", 6 : "b"}
// const obj3 = {obj1, obj2}

//using assign operator
// const obj3 = Object.assign({}, obj1, obj2, obj4)//{} -> it is optional, but a good practice as values get combined

const obj3 = {...obj1, ...obj2, ...obj4}//using spread operator to access and merge
// console.log(obj3);//merging objects key values

//database values syntax
const users = [
    {
        id : 1,
        email : "v@gmail.com" 
    },
    {
        id : 1,
        email : "v@gmail.com" 
    },
    {
        id : 1,
        email : "v@gmail.com" 
    }
]
users[1].email
// console.log(tinderUser);
//methods
// console.log(Object.keys(tinderUser));//it's datatype is array, we can add loops etc in complexity
// console.log(Object.values(tinderUser));//to get values
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//objects destructor
const course = {
    coursename : "btech",
    price : 47000,
    courseInstructor : "Youtube"
}
//course.courseInstructor
const {courseInstructor: instructor} = course//another syntax
console.log(instructor);//shortening the name of key

//json syntax
// {
//     "name" : "Vaishnavi",
//     "coursename" : "frontend",
//     "price" : "free"
// }