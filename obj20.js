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
charSpecial.vaish()