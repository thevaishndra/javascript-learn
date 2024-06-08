//Javascript is prototype based language
//OOP- programming paradigm
//objects: collection of properties and methods
//Object literals, constructor,prototype, classes, instances
//4 pillars: APIE: abstraction, polymorphism, inheritance, encapsulation

const user = {//literally an object
    username: 'Vaishnavi',
    loginCount: 3,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);//It doesn't know which username detail as it takes from outside 
    //we need to tell that we are talking about our known details by writing this.
    console.log(this);//it prints full object
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());

// const promise = new Promise();//new keyword is a constructor function
//it allows making of multiple instances from one object
// const date = new Date();//it is used to make new context ie called constructor func

function User(username, loginCount, isLoggedIn){
    this.username/*variable*/=username/*that is passed*/
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = User("Vaish", 5, true);
const userTwo = User("Shreya", 8, false);//value gets overridden
console.log(userOne.constructor);//reference to its own kind
// console.log(userTwo);

