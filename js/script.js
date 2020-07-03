window.onscroll = function(){ //Percibe si haces scroll
    if(document.documentElement.scrollTop> 150){
        document.getElementById("scroll-hacia-arriba").style.display="initial"; //Vuelve al estilo de display inicial
    }else{
        document.getElementById("scroll-hacia-arriba").style.display="none"; //Pone el estilo de display a "none"
    }
}

document.getElementById("scroll-hacia-arriba").onclick = function(){
    document.documentElement.scrollTop = 0; //Posiciona el scroll, El numero es la distancia desde la parte superior de la pagina hacia abajo
}    
