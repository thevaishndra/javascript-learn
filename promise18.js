// promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //db calls, cryptography, network
    setTimeout(function(){
        console.log('async task is completed');
        resolve();//calling consume, without this the consume part was not getting printed
    }, 1000);
});//promise is created now we have to consume it

promiseOne.then(function(){
    console.log("promise consumed");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2 is completed');
        resolve();
    }, 1000);
}).then(function(){
    console.log("async 2 is resolved");
});//same thing but this time  we wrote it in one part only

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "thevaishndra", email: "thevaishndra@mail.com"});
    }, 1000);
});
promiseThree.then(function(user){
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username: "vaish", password: "aaaa"});
        }
        else{
            reject('ERROR:Something went wrong');
        }
    },1000);
});
const username = promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("Then promise is either resolved or rejected"));
