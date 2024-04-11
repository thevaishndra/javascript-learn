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
