//generate a random color
const randomColor = function(){
    const hex= '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalId;
const startChangingColor = function(){
    if(!intervalId){//as down there wee made intervalid as null, so readding the value
        intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId);//values getting override repeatedly, to write clean code for edge cases
    intervalId = null;//making value dereference
};
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);