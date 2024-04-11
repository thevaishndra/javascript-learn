var c = 300;
if (true){//scope
    // let a = 10;//console.log will run inside not outside of scope
    // const b = 20;//console.log will run inside not outside of scope
    var c = 30;//problem in var -> scope
}
console.log(a);//not run outside of scope
console.log(b);//not run outside of scope
console.log(c);//it runs even if its outside of scope, when redeclared changes the value of c