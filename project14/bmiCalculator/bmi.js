const form = document.querySelector('form');
//form is always submitted in either get type or post type
//we have to stop default action of form to submit it in url, we will use eventListener
form.addEventListener('submit', function(e){
    e.preventDefault();
//selecting height, it's in string
    const height = parseInt(document.querySelector('#height').value);//parseInt converts string into integer type
    const weight = parseInt(document.querySelector('#weight',value));//dont write this above form as it will take empty values as soon as the file is opened
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
})
