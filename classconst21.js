//ES6
class User {
    constructor(username, email, password){//when object is initialised, constructor is called
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const vaish = new User("vaish", "vaish@mail.com", "123")
console.log(vaish.encryptPassword());
console.log(vaish.changeUsername());


//INHERITANCE in constructor class
class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
}