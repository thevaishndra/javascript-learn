//new
function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power = 2;
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;//whoever has called go to that
}
createUser.prototype.printMe = function(){
    // console.log(`score is ${this.scoore}`);
}
const chai = new createUser("chai", 25);//we have to tell that we got additional properties by writing new
const tea = createUser("tea", 250);//confusion in who has called, so, we write this.
// chai.printMe();

//prototype
let myName = "vaish    ";
let myColor = "blue    ";
// console.log(myName.truelength);//make a method
// console.log(myName.length);//9
// console.log(myName.trim().length);//5
//but how to get correct value by default


let cartoonChar = [ 'jerry', 'doraemon',];
let  charSpecial = {
    jerry : "intelligence",
    doraemon : "gadgets",

    getJerryPower : function(){
        console.log(`Power of Jerry is ${this.jerry}`);
    }
}
Object.prototype.vaish = function(){
    console.log(`vaish is omnipresent in all objects`)
}


Array.prototype.heyVaish = function(){
    console.log(`Vaish says hello`)
}
// charSpecial.vaish()
// cartoonChar.vaish()
// cartoonChar.heyVaish()
// charSpecial.heyVaish()

//INHERITANCE
const user = {
    name: "chai",
    email: "chai@123"
}
const Teacher = {
    makeVideo: true
}
const TeacherSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime: true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = user//how we can access someone else's properties

//modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUsername = "IAmTheBest"
String.prototype.trueLength =  function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
}

// anotherUsername.trueLength()
// "vaishnavi".trueLength()
// "sunscreen".trueLength()



//CALL AND THIS
function setUsername (username){
    //complex db calls
    this.username = username//this method isn't getting called
}
function createUser(username, email, password){
    setUsername(username)//reference is done it is not called
    setUsername.call(this, username)//now, it get's technically called and it also holds the reference. sp, that it doesnt get erased frpm the memory
    //it is called but nothing is changed in final so we use this,
    this.email = email
    this.password = password
}
const coffee = new createUser ("coffee", "coffee@1", "123")
console.log(coffee);