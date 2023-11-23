let juego;

function preload() {
  juego = new Juego();
  juego.preload();
}

function setup() {
  juego.setup();
}

function draw() {
  juego.draw();
}

function mousePressed() {
  juego.mousePressed();
}
