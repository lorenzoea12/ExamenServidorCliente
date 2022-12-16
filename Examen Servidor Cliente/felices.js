
//En esta variable con document.getElementById 
//declaramos la musica que nostros deseemos 
var musica=document.getElementById("musica");



//Con esta funcion lo que haces es que el mensaje
//que deseas poner saldra con un tiempo de tres de segundos 

const myTimeout = setTimeout(mostrarSaludo, 3000);

function mostrarSaludo() {
  document.getElementById("saludos").style.visibility="visible";
}



//Variable la caul creamos para que funcionen 
//en el body dandole click.
let body = document.querySelector("body");
body.addEventListener("click", ocultarSaludo);



// Con la funcion ocultarSaludo lo que hacemos es que cada elemento 
// que obtengo al hacer click es que realizan la funcion que le he dado desde css
function ocultarSaludo() {
  document.getElementById("saludos").style.visibility="visible";
  document.getElementById("añonuevo").style.visibility="visible";
  document.getElementById("navidad").style.visibility="hidden";
  document.getElementById("papanoel").style.transform = "scaleX(-1)";
  document.getElementById("reyesmagos").style.transform = "scaleX(-1)";
  document.getElementById("arbol").style.transform = "scaley(-1)";
  document.getElementById("belen").style.transform = "scaley(-1)";
  musica.play();

}

//Con esta Funcion lo que hacemos es crear los copos de nieve 
// el cual realizamos un randon para que conforme aparezcan 
//mas o menos copos de nieve aleatoriamente 
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


