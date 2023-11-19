//Agustina Alegre 88166/0.
//Tecno multimedia 1, comision 5 .
// Video explicativo :

let juego;

function setup() {
  juego = new Juego();
  juego.setup();
}

function draw() {
  juego.draw();
}

function mousePressed() {
  juego.mousePressed();
  this.botonReiniciar.mousePressed(); // Llama al método del botón cuando se hace clic
}

function keyPressed() {
  juego.keyPressed();
}
