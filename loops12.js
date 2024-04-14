//for
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

//break
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`5 detected`);
        // break;//it stops the iteration
        continue;//ignore and move forward
    }
    console.log(`value of i is ${i}`);
}