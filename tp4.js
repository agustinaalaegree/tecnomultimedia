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
  background(0, 12, 34);

  if (estadoP === "inicio") {
    inicio();
    contadorComida = 0; // Reiniciar el contador de comida cuando vuelvas a "inicio".
    tiempoRestante = tiempoInicial; // Reiniciar el contador de tiempo cuando vuelvas a "inicio".
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
      text(`Tiempo restante: ${tiempoRestante} s`, width / 2, 10);

      fill(255);
      text("¡Estás jugando!", width / 2, 50);

   if (contadorComida === 10) {
      cambiarEstado("ganaste");
      ganar();
    }

    if (tiempoRestante === 0) {
      cambiarEstado("perdiste");
      perder();
    }
    }

    textSize(24); // Esto asegura que el contador de comida y tiempo solo se muestren en el estado de juego.
    fill(255);
    textAlign(CENTER, BOTTOM);
    text(`Comida comida: ${contadorComida}/10`, width / 2, height - 10);
  } else if (estadoP === "creditos") {
  creditos();
  }
  
}

const estadosP = ["inicio", "jugar", "creditos"];
