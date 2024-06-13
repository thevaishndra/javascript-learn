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
class Users {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends Users{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

addCourse(){
    console.log(`A new course was added by ${this.username}`);
}
}
const cake = new Teacher("cake", "cake@1", "123");
// cake.addCourse()
cake.logMe()

const redVelvet = new Users("redVelvet");
// redVelvet.addCourse()//doesn't have access
redVelvet.logMe()
// console.log(cake === Teacher)//false
console.log(cake instanceof Teacher)//true


//STATIC PROP(properties) -> it stops giving the access
class person{
    constructor(personname){
        this.personname = personname
    }
    logThem(){
        console.log(`Personname: ${this.personname}`)
    }
    createId(){
        return `123`
    }
}
const vaishnavi = new person("vaishnavi")
// console.log(vaishnavi.createId())

class Teachers extends person{
    constructor(personname, email){
        super(personname)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "i@phone", "i@phone.com")
iphone.logMe()