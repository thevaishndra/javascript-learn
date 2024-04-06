balance = 1234.567;
// console.log(balance.toFixed(1));
// console.log(balance.toPrecision(1));

hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Math);
// console.log(Math.abs(.4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 1, 9));
// console.log(Math.max(4, 3, 1, 9));

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log((Math.random()*10)+1);
//It depends by which we are multiplying to get specific range
// console.log((Math.floor(Math.random()*10)+1));//to get more specific lowest round off value

const min = 10;
const max =20;
// console.log((Math.random()*(max-min +1)+min));
//for a specific range value

// ********************* date and time ***********************
let myDate = new Date();
// console.log(myDate.toString());//date, day, time, gmt ist 16: 49: 46 GMT+0530
// console.log(myDate.toDateString());//date, day-> Sat Apr 06 2024
// console.log(myDate.toLocaleString());// date-> 6/4/24, time 4:51:19pm
// console.log(typeof myDate);//obj

let myCreatedDate = new Date(2023, 0, 23);//format of writing date
// console.log(myCreatedDate.toDateString());

let date = new Date("06-04-2024");//format of writing date
// console.log(date.toLocaleDateString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(date.getTime());
///floor value for our random

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday: "long"// we can also add time zone
});

