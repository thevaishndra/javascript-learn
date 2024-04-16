//for loop
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is lucky number");
//     }
//     console.log(element);
// }

// for (let i = 0; i < 5; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j < 5; j++) {
//         // console.log(`inner loop value ${j} and inner value ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);//tables
//     }
// }//first outer loop-> inner loop -> outer loop ->inner loop

let murakami = ['norwegian woods', 'sputnik sweetheart', 'kafka on shore'];
// console.log(murakami.length);
// for (let index = 0; index < murakami.length; index++) {//<= we will go outside of array, hence we wrote <
//     const bookName = murakami[index];
//     console.log(bookName);
// }

//break & continue
// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         console.log(`5 detected`);
//         // break;//it stops the iteration
//         continue;//ignore and move forward
//     }
//     console.log(`value of i is ${i}`);
// }


//while loop
let index = 0;
// while (index <= 10){
//     console.log(`value of index is ${index}`);
//     index = index + 2;
// }

let kdrama = ['queen of tears', 'my lovely runner', 'love to hate you'];
let arr = 0;//accessing elements from arrays using loop
// while (arr < kdrama.length){
//     console.log(`currently watching ${kdrama[arr]}`);
//     arr = arr+1;
// }



//do while
let score = 11;//it runs atleast once
// do{
//     console.log(`score is ${score}`);//code runs line by line
//     score++;
// }while (score <= 10);//condition gets applied at last


//for of loop { loops for array[], objects{}}
// const array = [1, 2, 3, 4, 5];
// for (const num of array){
//     console.log(num);
// }
const greetings = "Hello world!";
// for (const greet of greetings){
//     console.log(`each char is ${greet}`);
// }


//maps => it holds key value pairs and remembers original insertion order of keys
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States Of America");
map.set('SP', "Spain");
// console.log(map);
// for (const [key, value] of map){//to get the values  and key instead of array we put them in square brackets
//     console.log(key, ":-", value);
// }

const myObject = {
    game1 : "amongus",
    game2 : "nintendo"
}
// for (const [key, value] of myObject){
//     console.log(key, ":-", value);//for of loop doesnt works on object
// }


//for in loop {is not bound to work only on objects}
for (const key in myObject){
    // console.log(myObject[key]);//way to print key
    console.log(`${key} is ${myObject[key]}`);
}