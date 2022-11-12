function moverPosicionRandom(elm){
    elm.style.position ='absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetHeight) + 'px';
}

let btnSi= document.getElementById("btn_si");
let btnNo= document.getElementById("btn_no");
let divModoSexo= document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter',function(e) {moverPosicionRandom(e.target)});

btnSi.addEventListener('click',function(e){
    alert('Sabía que dirías que Sí. Casemonos ya y tengamos hijos. TE AMO!!! ❤️')
    
    divModoSexo.style.display = 'block';
    const cancion = new Audio('img/ImagineIt.mp3');
    cancion.play();
})