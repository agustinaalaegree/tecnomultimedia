let inicioImage;
let mapaImage;
let gatoImage;
let comidaImage;
let ganasteImage;
let perdisteImage;

let estadoP = "inicio";
let estadoJuego = "jugando";
let estadoResultado = "jugando";

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
  inicializarComida();
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
  } else if (estadoP === "jugar") {
    if (estadoJuego === "jugando") {
  jugar ();
    boton("Inicio", 80, 570, 130, 35, 0);

    }
  } else if (estadoP === "creditos") {
  creditos();
  }
  
}

const estadosP = ["inicio", "jugar", "creditos"];
