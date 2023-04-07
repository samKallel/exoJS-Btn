var compteur = document.querySelector('.counter');
var incrementation = document.querySelector('.incr');
var decrementation = document.querySelector('.decr');
incrementation.addEventListener('click', ()=>{
    // console.log('compteur');
    compteur.textContent ++;


});
decrementation.addEventListener('click', ()=>{
    // console.log('compteur');
    compteur.textContent --;


})
 
