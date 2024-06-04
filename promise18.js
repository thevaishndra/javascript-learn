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

//using different kinds of syntax for writing promises 
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

const promiseFive = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username: "chandra", password: "aaaa"});
        }
        else{
            reject('ERROR:Js went wrong');
        }
    },1000);
});
//we can also use async await syngax insteaad of .then
async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


//try and catch syntax 
// async function getAllUsers(){
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
//all this dta from the url is getting printed first and all of the above written promises are getting printed afterwards