const myArr = [1, 4, 7, 9];
const cartoon = ['jerry', 'platypus', 'spongebob', 'oswald', 'doraemon'];

// console.log(myArr[1]);

//*************** methods ******************
// myArr.push(6);//adds an element at end
// myArr.pop();//removes an element at end
// myArr.unshift(8);//adds an element at beginning
// myArr.shift();//removes an element at beginning
//xonsole.log(myArr());
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(8));
// console.log(myArr.join());//converts into string

//slice, splice
console.log("A", myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);//it does't includes last range
console.log("B", myArr);//no change to original array

const myn2 = myArr.splice(1,3);
console.log(myn2);//it includes last range
console.log("C", myArr);//original array changes to only element not included


