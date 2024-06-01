//document.getElementById('owl').addEventListener('click', function(){
//     alert("owl clicked again");
// });//third parameter is also there ie, true or false

//document.getElementById('owl').addEventListener('click', function(e){
//     console.log(e);
// },false);//false -> event bubbly and default, mostly used

//event propagation -> event bubbly and event capturing
//type, timestammp, defaultPrevented
//target, toElement, srcElement, currentTarget
//clientX, clientY, screenX, screenY
//altkey, ctrlkey, shiftkey, keyCode

//document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked");
//     e.stopPropagation()
// }, false);

//document.getElementById('owl').addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked");
// }, false);

//document.querySelector('#images').addEventListener('click', function(e){
//     console.log(e.target.tagName);
//     if(e.target.tagName === 'IMG'){
//         console.log(e.target.id);
//         let removeIt = e.target.parentNode;
//         removeIt.remove();
//     }
// });