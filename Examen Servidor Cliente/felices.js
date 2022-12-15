
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
    document.getElementById("papanoel").style.transform = "scaleX(-1)";
    document.getElementById("reyesmagos").style.transform = "scaleX(-1)";
    musica.play();

  }



const crearNieve = () => {

  let copo = document.createElement("i");

  let x = innerWidth * Math.random();

  let size = Math.random() * 2;
  //
  copo.style.left = x + '%';

  copo.style.width = size + '%'
  copo.style.height = size + '%'

  fondo.appendChild(copo);
};



setInterval(crearNieve, 20)

