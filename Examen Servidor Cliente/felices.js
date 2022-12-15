
const myTimeout = setTimeout(mostrarSaludo, 3000);

function mostrarSaludo() {
  document.getElementById("saludos").style.visibility="visible";
}




let body = document.querySelector("body");
body.addEventListener("click", ocultarSaludo);

function ocultarSaludo() {
    document.getElementById("saludos").style.visibility="visible";
  }


  

  var sonido  = new Audio();
sonido.src = "./campana.mp3";  

image.addEventListener("click", function () {
  image.style.display = "none";
  texto.style.display = "block";
  sonido.play = "autoplay";
});