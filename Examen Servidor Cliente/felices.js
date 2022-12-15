
  var musica = document.getElementById("musica");




const myTimeout = setTimeout(mostrarSaludo, 3000);

function mostrarSaludo() {
  document.getElementById("saludos").style.visibility="visible";
}




let body = document.querySelector("body");
body.addEventListener("click", ocultarSaludo);

function ocultarSaludo() {
    document.getElementById("saludos").style.visibility="visible";
    document.getElementById("añonuevo").style.visibility="visible";
    document.getElementById("navidad").style.visibility="hidden";
    musica.play();

  }




