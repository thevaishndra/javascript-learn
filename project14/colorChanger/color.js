const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){//ther is node list it means we can add foreach loop
    console.log(button);//ther is for each so we are writing call back func
    button.addEventListener('click', function(e){//event object => e
        console.log(e);//event means things happening to html elements, js reacts to these events
        console.log(e.target);
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
    });
});