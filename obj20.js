function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;//whoever has called go to that
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.scoore}`);
}
const chai = new createUser("chai", 25);//we have to tell that we got additional properties by writing new
const tea = createUser("tea", 250);//confusion in who has called, so, we write this.