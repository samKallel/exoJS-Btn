var compteur = document.querySelector('.counter');
var incrementation = document.querySelector('.incr');
var decrementation = document.querySelector('.decr');

incrementation.addEventListener('click', function IncrBtn(){   
    compteur.innerHTML++;});

decrementation.addEventListener('click', function DecrBtn(){
    
    if (compteur.innerHTML >0){
        compteur.innerHTML--;
    }else {
        compteur.innerHTML= 0;
    }
     }
)
