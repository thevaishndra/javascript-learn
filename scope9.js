//global scope
var c = 300;//avoid var
if (true){//local scope
    // let a = 10;//console.log will run inside not outside of scope
    // const b = 20;//console.log will run inside not outside of scope
    var c = 30;//problem in var -> scope
}
// console.log(a);//not run outside of scope
// console.log(b);//not run outside of scope
// console.log(c);//it runs even if its outside of scope, when redeclared changes the value of c

function one(){
    const username ="vaish"
     
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//not a global scope
    // two();
}
// one();

if(true){
    const username = "vaish";
    if(username === "vaish"){
        const website = "youtube";
        // console.log(username + website);
    }
    // console.log(website);-> scope issue
}
// console.log(username);-> scope issue

//************************2 ways of writing function
addone(5);//runs smoothly if function is called before declaring
function addone(num){
    return num+1;
}
addTwo(5);//throws error if function is called before declaring
//it holds value in variable thats why, it can also be called as hoisting
const addTwo = function(num){
    return num+2;
}
