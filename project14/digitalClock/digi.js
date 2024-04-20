const clock = document.querySelector('#clock');

//we want to make our time run continously not only when we open browser
//control events in js => setInterval
setInterval(function(){
    let date = new Date();
// console.log(date);//date, day, time //refer maths5.js
// console.log(date.toLocaleTimeString());//printing time, converting into string
clock.innerHTML = date.toLocaleTimeString();
}, 1000)//1000 mili sec = 1sec