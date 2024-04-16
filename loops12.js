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


//FOR OF LOOP { loops for array[]**, objects{}}
// const array = [1, 2, 3, 4, 5];
// for (const num of array){
//     console.log(num);
// }
const greetings = "Hello world!";
// for (const greet of greetings){
//     console.log(`each char is ${greet}`);
// }


//maps => it holds key value pairs and remembers original insertion order of keys
//maps are not iteratables, we cant use for in loop here
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


//FOR IN LOOP {is not bound to work only on objects}
for (const key in myObject){
    // console.log(myObject[key]);//way to print key
    // console.log(`${key} is ${myObject[key]}`);
}

 const programming = ["js", "python", "cpp", "java"];
 for (const key in programming){
     // console.log(key);//0, 1, 2, 3
//     console.log(programming[key]);
}

//CALL BACK FUNCTIONs {below all are using callback func}
const colors = ["blue", "white", "black"];
// colors.forEach ( function (item) {//arrayname.foreach (function (value name-anything){do work});
//     console.log(item);
// }); 

// colors.forEach( (value) => {//writing call back func as arrow func
//     console.log(value);
// });


//print me func lets us print something
// function printMe(item){
//     console.log(item);
// }
// colors.forEach(printMe);//dont execute give reference


//info of full array
// colors.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// });


//objects in array
const myPlanets = [
    {
        planetName: "Earth",
        planetNo: 3
    },
    {
        planetName: "Saturn",
        planetNo: 6
    },
    {
        planetName: "Neptune",
        planetNo: 8
    }
]
myPlanets.forEach( (item) => {
    console.log(item.planetName);
});

//for each loop doesn't return any valueit shows undefined

//FILTER
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newNums = myNums.filter( (num) => num > 4);//returns a value unlike for each
// console.log(newNums);//in arrow func write return num > 4 inside curly braces to get value
//as it returns empty array by default, so implicitly we get value by writing return

// const newNums = [];
// myNums.forEach( (num) => {//by using for each
//     if (num > 4){
//         newNums.push(num);
//     }
// });
// console.log(newNums);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNums = myNumbers.map( (num) => num + 10);
console.log(newNums); 