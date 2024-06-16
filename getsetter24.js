class user {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
//race condition, to avoid that we use underscore
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }

    get password(){//getter
        // return this._password.toUpperCase()//now second issue is in get, so we added underscore here also
        return `${this._password}mansa`
    }//if we wrote getter, we need to write setter also
    set password(value){//setter
        this._password = value//first the issue was in set so we added underscore
    }
    //error: max call stack size exceeded
}
const nirmala = new user("nirmala@pc", "abc")
console.log(nirmala.password);
console.log(nirmala.email);


//old syntax, when getters and setters didn't existed
// Object.defineProperty(this, 'email', {
//     get: function(){
//         return this._email.toUpperCase()
//     },
//     set: function(){
//         this._email = value
//     }
// })
// Object.defineProperty(this, 'password', {
//     get: function(){
//         return this._password.toUpperCase()
//     },
//     set: function(){
//         this._password = value
//     }
// })

// const rice = new user("rice@lentil.com", "rice")
// console.log(rice.email)

//ther is class based syntax as well as object based syntax