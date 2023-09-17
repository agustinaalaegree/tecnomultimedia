let inicioImage;
let mapaImage;
let gatoImage;
let comidaImage;
let ganasteImage;
let perdisteImage;

let estadoP = "inicio";
let estadoJuego = "jugando";

let gatoX;
let gatoY;
let gatoSize = 60;
let velocidad = 5;

let mapa = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let comidas = [];
let contadorComida = 0;
let ganaste = false;
let perdiste = false;
let tiempoInicial = 15;
let tiempoRestante = tiempoInicial;

function preload() {
  gatoImage = loadImage('gato.png');
  inicioImage = loadImage('inicio.png');
  mapaImage = loadImage('mapa.png');
  comidaImage = loadImage('comida.png');
  ganasteImage = loadImage('ganaste.png');
  perdisteImage = loadImage('perdiste.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  gatoX = width / 2;
  gatoY = height / 2;
  frameRate(60);
  setInterval(restarTiempo, 1000);

}

function draw() {
  background(0);
  rectMode(CENTER);

  if (estadoP === "inicio") {
    inicio();
    contadorComida = 0; 
    tiempoRestante = tiempoInicial; 
    inicializarComida();

  } else if (estadoP === "jugar") {
    if (estadoJuego === "jugando") {
  moverGato();
      dibujarMapa();
      verificarComida();
      image(mapaImage, 0, 0, 600, 600);
      dibujarComida();

      image(gatoImage, gatoX - gatoSize / 2, gatoY - gatoSize / 2, gatoSize, gatoSize);

      textSize(24);
      fill(255);
      textAlign(CENTER, TOP);
      text(`Tiempo restante: ${tiempoRestante} s`, 135, 20);

 
   if (contadorComida === 10) {
  image(ganasteImage, 0, 100, width, 229);
  boton("Inicio", 300, 400, 130, 35, 0);
    }

    if (tiempoRestante === 0) {
  image(perdisteImage, 0, 100, width, 229);
  boton("Inicio", 300, 400, 130, 35, 0);
    }
    
    textSize(24); 
    fill(255);
    text(`Comida comida: ${contadorComida}/10`, 460, 20);

    } 
    
    
  } else if (estadoP === "creditos") {
  creditos();
  }
  
}

const estadosP = ["inicio", "jugar", "creditos"];
