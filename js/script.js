const visorfruta1 = document.getElementById("visorfruta1");
const visorfruta2 = document.getElementById("visorfruta2");
const visorfruta3 = document.getElementById("visorfruta3");

const saldo = document.getElementById("saldo");
const apuesta = document.getElementById("apuesta");

const btnjugar = document.getElementById("btnjugar");
const visor__fruta = document.querySelectorAll(".visor__fruta");

const jugadas = document.getElementById("jugadas");
const cajaalerta = document.getElementById("cajaalerta");

const frutas = [
  "cereza.png",
  "dolar.png",
  "fresa.png",
  "limon.png",
  "manzana.png",
  "naranja.png",
  "piña.png",
  "platano.png",
  "sandia.png",
];

const iniciarJuego = () =>{

  estado = comprobarApuesta();

  switch(estado){
    case "":
      break;

  }
  
    cambiarImagen();
    saldo.value = saldo.value - apuesta.value; 

  //no funciona pq es de eventos, no un bucle como tal
  // do{
  // }while(saldo.value <= 0);
  
}

const comprobarApuesta = () =>{
  let estado = "neutro";

  if()

  return estado
}


const cambiarImagen = () =>{
  // if (event.target.nodeName === "IMG"){
  //   img.src = "./imagenes/animales/" + fotos[Math.floor(Math.random() * fotos.length)];

  visorfruta1.src = "./assets/images/" + frutas[Math.floor(Math.random() * frutas.length)];
  visorfruta2.src = "./assets/images/" + frutas[Math.floor(Math.random() * frutas.length)];
  visorfruta3.src = "./assets/images/" + frutas[Math.floor(Math.random() * frutas.length)];

}

btnjugar.addEventListener("click", iniciarJuego);

