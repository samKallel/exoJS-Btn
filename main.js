var compteur = document.querySelector('.counter');
var incrementation = document.querySelector('.incr');
var decrementation = document.querySelector('.decr');

incrementation.addEventListener('click', function IncrBtn(){   
    compteur.textContent ++;});
    
decrementation.addEventListener('click', function DecrBtn(){
        compteur.textContent --;})
 
